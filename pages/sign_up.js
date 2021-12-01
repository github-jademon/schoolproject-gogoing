import Link from "next/Link";
import Nav from '../components/nav'

export default function SignUp() {
  return (
    <div className="w-full h-full bg-color">
      <Nav />
      <div className="flex-col mt-28 text-center">
        <h2>회원가입</h2>
      </div>
      <div className="flex-col mt-12">
        <div className="text-center m-4">
          <div><label htmlFor="id" className="inline-block w-60 text-start p-2 font-semibold">이름</label></div>
          <div><input type="text" id="id" className="w-60 border-b p-2 focus:outline-none" placeholder="이름을 입력해주세요" required /></div>
        </div>
        <div className="text-center m-4">
          <div><label htmlFor="id" className="inline-block w-60 text-start p-2 font-semibold">이메일</label></div>
          <div><input type="email" id="email" className="w-60 border-b p-2 focus:outline-none" placeholder="이메일을 입력해주세요" required /></div>
        </div>
        <div className="text-center m-4">
          <div><label htmlFor="id" className="inline-block w-60 text-start p-2 font-semibold">비밀번호</label></div>
          <div><input type="password" id="pw" className="w-60 border-b p-2 focus:outline-none" placeholder="비밀번호를 입력해주세요" required /></div>
        </div>
        <div className="text-center m-4">
          <div><label htmlFor="id" className="inline-block w-60 text-start p-2 font-semibold">비밀번호 확인</label></div>
          <div><input type="password" id="pw_chk" className="w-60 border-b p-2 focus:outline-none" placeholder="비밀번호를 다시 입력해주세요" required /></div>
        </div>
        <div className="text-center m-4">
          <Link href="/login">
            <div className="border rounded inline-block px-2 py-1 w-60 mt-8 hover-base-color hover:text-white base-color">
              <button type="button" className="font-semibold">회원가입</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}