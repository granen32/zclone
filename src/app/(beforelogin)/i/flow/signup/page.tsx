import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1>지금 일어나고 있는 일</h1>
          <h2>지금 가입하세요.</h2>
          <Link href="/i/flow/signup">계정 만들기</Link>
          <h3>로그인</h3>
          <Link href="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
