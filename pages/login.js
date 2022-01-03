import Link from "next/link";
import Nav from '../components/nav'
import { useState } from 'react'

export default function Login() {
  function check() {
    var email = document.getElementById("email");
    var pw = document.getElementById("pw");
    if(email.value=="") {
      alert("이메일을 입력해주세요");
      email.focus();
      return false;
    }
    else if(pw.value=="") {
      alert("비밀번호를 입력해주세요");
      pw.focus();
      return false;
    }
  }
  return (
    <div className="w-full h-full bg-color">
      <Nav />
      <div className="flex-col mt-28 text-center">
        <h2>로그인</h2>
      </div>
      <div className="flex-col mt-12">
        <div className="text-center m-4">
          <div><label htmlFor="id" className="inline-block w-60 text-start p-2 font-semibold">이메일</label></div>
          <div><input type="text" id="email" className="w-60 border-b p-2 focus:outline-none" placeholder="이메일을 입력해주세요" required /></div>
        </div>
        <div className="text-center m-4">
          <div><label htmlFor="id" className="inline-block w-60 text-start p-2 font-semibold">비밀번호</label></div>
          <div><input type="password" id="pw" className="w-60 border-b p-2 focus:outline-none" placeholder="비밀번호를 입력해주세요" required /></div>
        </div>
        <div className="text-center m-4">
          <div className="border rounded inline-block px-2 py-1 w-60 mt-8 hover-base-color hover:text-white base-color">
            <button type="button" className="font-semibold" onClick={(e) => check()}>로그인</button>  
          </div>
        </div>
        <div className="text-center m-4">
          <div className="mt-10">
            <Link href="/sign_up">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  )
}