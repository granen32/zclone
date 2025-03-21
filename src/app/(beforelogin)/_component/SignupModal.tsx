"use client";

import React from "react";
import style from "./signup.module.css";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import BackButton from "./BackButton";

export default function SignupModal() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState<File>();

    const router = useRouter();
    const onChangeId: ChangeEventHandler<HTMLInputElement> = e => {
        setId(e.target.value);
    };

    const onChangePassword: ChangeEventHandler<HTMLInputElement> = e => {
        setPassword(e.target.value);
    };
    const onChangeNickname: ChangeEventHandler<HTMLInputElement> = e => {
        setNickname(e.target.value);
    };
    const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = e => {
        if (e.target.files) {
            setImageFile(e.target.files[0]);
        }
        return null;
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
            method: "post",
            body: JSON.stringify({
                id,
                nickname,
                image,
                password,
            }),
            credentials: "include",
        })
            .then((response: Response) => {
                console.log(response.status);
                if (response.status === 200) {
                    router.replace("/home");
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <BackButton />
                        <div>계정을 생성하세요.</div>
                    </div>
                    <form>
                        <div className={style.modalBody}>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="id">
                                    아이디
                                </label>
                                <input id="id" className={style.input} type="text" placeholder="" value={id} onChange={onChangeId} required />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="name">
                                    닉네임
                                </label>
                                <input id="name" className={style.input} type="text" placeholder="" value={nickname} onChange={onChangeNickname} required />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="password">
                                    비밀번호
                                </label>
                                <input id="password" className={style.input} type="password" placeholder="" value={password} onChange={onChangePassword} required />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="image">
                                    프로필
                                </label>
                                <input id="image" className={style.input} type="file" accept="image/*" onChange={onChangeImageFile} required />
                            </div>
                        </div>
                        <div className={style.modalFooter}>
                            <button type="submit" className={style.actionButton} onClick={onSubmit}>
                                가입하기
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
