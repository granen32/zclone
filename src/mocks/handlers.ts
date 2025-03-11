import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

const User = [
    { id: "elonmusk", name: "Elon Musk", image: "/yRsRRjGO.jpg" },
    { id: "jack", name: "Jack Dorsey", image: "/5Udwvqim.jpg" },
    { id: "satyanadella", name: "Satya Nadella", image: faker.image.avatar() },
];

export const handlers = [
    http.post("/api/login", () => {
        console.log("로그인 테스트");
        return HttpResponse.json(User[1], {
            headers: {
                // sid msw-cookie 네이밍 지정 HttpOnly: JavaScript에서 쿠키에 접근할 수 없게 합니다 (보안 강화)
                // Path: 쿠키가 적용될 경로
                "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
            },
            // 상태 값으로 에러 리턴 가능
            status: 200,
        });
    }),
    http.post("/api/logout", () => {
        console.log("로그아웃 테스트");
        return HttpResponse.json(
            {},
            {
                headers: {
                    // 쿠키 삭제
                    // max-age 0 초 후 쿠키 삭제
                    "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
                },
                // 상태 값으로 에러 리턴 가능
                status: 200,
            },
        );
    }),
];
