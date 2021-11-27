import Footer from '../components/footer'
import Nav from '../components/nav'
import Link from 'next/link'

export default function Mypage() {
  return(
    <>
      <Nav />
      <div className="container pt-2 mt-14">
        <Link passHref href="/score">
          <div className="flex flex-wrap border-b border-gray-300 py-2 justify-between">
            <div className="flex-col pl-2">
              <div>
                <p className="text-lg font-bold base-color m-0">내신 성적 설정하기</p>
              </div>
              <div>
                <p className="text-base base-color m-0">성적 입력</p>
              </div>
            </div>
            <div className="flex-col self-center pr-2"></div>
          </div>
        </Link>
        <div className="flex flex-wrap border-b border-gray-300 py-2 justify-between">
          <div className="flex-col pl-2">
            <div>
              <p className="text-lg font-bold base-color m-0">진로 탐색 및 설정</p>
            </div>
            <div>
              <p className="text-base base-color m-0">진로 찾기</p>
            </div>
          </div>
          <div className="flex-col self-center pr-2"></div>
        </div>
        <div className="flex flex-wrap border-b border-gray-300 py-2 justify-between">
          <div className="flex-col pl-2">
            <div>
              <p className="text-lg font-bold base-color m-0 text-red-400">
                회원 탈퇴하기
              </p>
            </div>
            <div>
              <p className="text-base base-color m-0">탈퇴</p>
            </div>
          </div>
          <div className="flex-col self-center pr-2"></div>
        </div>
        <Link passHref href="/">
          <div className="flex flex-wrap border-b border-gray-300 py-2 justify-between">
            <div className="flex-col pl-2">
              <div>
                <p className="text-lg font-bold base-color m-0 text-red-400">
                  로그아웃하기
                </p>
              </div>
              <div>
                <p className="text-base base-color m-0">로그아웃</p>
              </div>
            </div>
            <div className="flex-col self-center pr-2"></div>
          </div>
        </Link>
      </div>
      {/* <Footer /> */}
    </>
  )
}