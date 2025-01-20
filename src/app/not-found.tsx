import Link from "next/link";
import { NextPage } from "next";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>이 페이지는 존재하지 않습니다.</h1>
      <Link href="/search">홈으로 돌아가기</Link>
    </div>
  );
};

export default NotFound;
