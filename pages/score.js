import Footer from '../components/footer'
import Nav from '../components/nav'
import {useRouter} from 'next/router';

export default function Score() {
  const router = useRouter();
  return(
    <>
      <Nav />
      <div className="container pt-2 mt-14">
        <h3 className="border-b mx-3 p-1 my-2">1학년 성적</h3>
        <form method="post" action="">
          <div>
            <h5 className="inline-block w-auto border-b ml-4 p-1 my-3">1학기</h5>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">국어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score1" id="A1" />
                <label htmlFor="A1">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score1" id="B1" />
                <label htmlFor="B1">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score1" id="C1" />
                <label htmlFor="C1">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score1" id="D1" />
                <label htmlFor="D1">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score1" id="E1" />
                <label htmlFor="E1">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">수학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score2" id="A2" />
                <label htmlFor="A2">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score2" id="B2" />
                <label htmlFor="B2">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score2" id="C2" />
                <label htmlFor="C2">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score2" id="D2" />
                <label htmlFor="D2">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score2" id="E2" />
                <label htmlFor="E2">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">사회</div>
              <div className="check_score">
                <input type="radio" value="0" name="score3" id="A3" />
                <label htmlFor="A3">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score3" id="B3" />
                <label htmlFor="B3">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score3" id="C3" />
                <label htmlFor="C3">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score3" id="D3" />
                <label htmlFor="D3">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score3" id="E3" />
                <label htmlFor="E3">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">과학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score4" id="A4" />
                <label htmlFor="A4">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score4" id="B4" />
                <label htmlFor="B4">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score4" id="C4" />
                <label htmlFor="C4">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score4" id="D4" />
                <label htmlFor="D4">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score4" id="E4" />
                <label htmlFor="E4">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">영어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score5" id="A5" />
                <label htmlFor="A5">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score5" id="B5" />
                <label htmlFor="B5">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score5" id="C5" />
                <label htmlFor="C5">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score5" id="D5" />
                <label htmlFor="D5">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score5" id="E5" />
                <label htmlFor="E5">E</label>
              </div>
            </div>
          </div>
          <div>
            <h5 className="inline-block w-auto border-b ml-4 p-1 my-3">2학기</h5>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">국어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score6" id="A6" />
                <label htmlFor="A6">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score6" id="B6" />
                <label htmlFor="B6">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score6" id="C6" />
                <label htmlFor="C6">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score6" id="D6" />
                <label htmlFor="D6">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score6" id="E6" />
                <label htmlFor="E6">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">수학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score7" id="A7" />
                <label htmlFor="A7">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score7" id="B7" />
                <label htmlFor="B7">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score7" id="C7" />
                <label htmlFor="C7">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score7" id="D7" />
                <label htmlFor="D7">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score7" id="E7" />
                <label htmlFor="E7">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">사회</div>
              <div className="check_score">
                <input type="radio" value="0" name="score8" id="A8" />
                <label htmlFor="A8">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score8" id="B8" />
                <label htmlFor="B8">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score8" id="C8" />
                <label htmlFor="C8">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score8" id="D8" />
                <label htmlFor="D8">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score8" id="E8" />
                <label htmlFor="E8">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">과학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score9" id="A9" />
                <label htmlFor="A9">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score9" id="B9" />
                <label htmlFor="B9">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score9" id="C9" />
                <label htmlFor="C9">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score9" id="D9" />
                <label htmlFor="D9">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score9" id="E9" />
                <label htmlFor="E9">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">영어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score10" id="A10" />
                <label htmlFor="A10">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score10" id="B10" />
                <label htmlFor="B10">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score10" id="C10" />
                <label htmlFor="C10">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score10" id="D10" />
                <label htmlFor="D10">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score10" id="E10" />
                <label htmlFor="E10">E</label>
              </div>
            </div>
          </div>
            <div className="flex flex-wrap justify-center w-30 my-3.5">
              <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" onClick={() => router.back()}>이전</button>
              <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" onClick={() => router.push("/score", )}>다음</button>
            </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  )
}