import { auth as middlewareAuth } from "./auth";
import { NextResponse } from "next/server";

/**
 * 로그인 상태 확인
 * @returns 로그인 상태가 아니면 로그인 페이지로 리다이렉트
 */

export async function middleware() {
  const session = await middlewareAuth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

/**
 * 로그인 상태 확인 제외 경로
 */
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
