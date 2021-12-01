import Nav from '../components/nav'
import {useRouter} from 'next/router';

export default function Career() {
  const router = useRouter();

  return(
    <>
      <Nav />
      <div className="container pt-2 mt-10">
        <h3 className="border-b mx-3 py-3.5 mt-3 mb-4">진로 탐색</h3>
        <form method="post" action="">
          <div>
            <div className="flex-col justify-center">
              <div className="self-center mt-2 ml-12">국어를 얼마나 좋아하십니까?</div>
              <div className="flex flex-wrap justify-center">
                <div className="check_career">
                  <input type="radio" value="0" name="score1" id="A1" />
                  <label htmlFor="A1">1</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="1" name="score1" id="B1" />
                  <label htmlFor="B1">2</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="2" name="score1" id="C1" />
                  <label htmlFor="C1">3</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="3" name="score1" id="D1" />
                  <label htmlFor="D1">4</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="4" name="score1" id="E1" />
                  <label htmlFor="E1">5</label>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center">
              <div className="self-center mt-2 ml-12">수학을 얼마나 좋아하십니까?</div>
              <div className="flex flex-wrap justify-center">
                <div className="check_career">
                  <input type="radio" value="0" name="score2" id="A2" />
                  <label htmlFor="A2">1</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="1" name="score2" id="B2" />
                  <label htmlFor="B2">2</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="2" name="score2" id="C2" />
                  <label htmlFor="C2">3</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="3" name="score2" id="D2" />
                  <label htmlFor="D2">4</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="4" name="score2" id="E2" />
                  <label htmlFor="E2">5</label>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center">
              <div className="self-center mt-2 ml-12">사회를 얼마나 좋아하십니까?</div>
              <div className="flex flex-wrap justify-center">
                <div className="check_career">
                  <input type="radio" value="0" name="score3" id="A3" />
                  <label htmlFor="A3">1</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="1" name="score3" id="B3" />
                  <label htmlFor="B3">2</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="2" name="score3" id="C3" />
                  <label htmlFor="C3">3</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="3" name="score3" id="D3" />
                  <label htmlFor="D3">4</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="4" name="score3" id="E3" />
                  <label htmlFor="E3">5</label>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center">
              <div className="self-center mt-2 ml-12">과학을 얼마나 좋아하십니까?</div>
              <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap justify-center">
                  <div className="check_career">
                    <input type="radio" value="0" name="score4" id="A4" />
                    <label htmlFor="A4">1</label>
                  </div>
                  <div className="check_career">
                    <input type="radio" value="1" name="score4" id="B4" />
                    <label htmlFor="B4">2</label>
                  </div>
                  <div className="check_career">
                    <input type="radio" value="2" name="score4" id="C4" />
                    <label htmlFor="C4">3</label>
                  </div>
                  <div className="check_career">
                    <input type="radio" value="3" name="score4" id="D4" />
                    <label htmlFor="D4">4</label>
                  </div>
                  <div className="check_career">
                    <input type="radio" value="4" name="score4" id="E4" />
                    <label htmlFor="E4">5</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center">
              <div className="self-center mt-2 ml-12">영어를 얼마나 좋아하십니까?</div>
              <div className="flex flex-wrap justify-center">
                <div className="check_career">
                  <input type="radio" value="0" name="score5" id="A5" />
                  <label htmlFor="A5">1</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="1" name="score5" id="B5" />
                  <label htmlFor="B5">2</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="2" name="score5" id="C5" />
                  <label htmlFor="C5">3</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="3" name="score5" id="D5" />
                  <label htmlFor="D5">4</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="4" name="score5" id="E5" />
                  <label htmlFor="E5">5</label>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center">
              <div className="self-center mt-2 ml-12">미술을 얼마나 좋아하십니까?</div>
              <div className="flex flex-wrap justify-center">
                <div className="check_career">
                  <input type="radio" value="0" name="score7" id="A7" />
                  <label htmlFor="A7">1</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="1" name="score7" id="B7" />
                  <label htmlFor="B7">2</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="2" name="score7" id="C7" />
                  <label htmlFor="C7">3</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="3" name="score7" id="D7" />
                  <label htmlFor="D7">4</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="4" name="score7" id="E7" />
                  <label htmlFor="E7">5</label>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center">
              <div className="self-center mt-2 ml-12">체육을 얼마나 좋아하십니까?</div>
              <div className="flex flex-wrap justify-center">
                <div className="check_career">
                  <input type="radio" value="0" name="score8" id="A8" />
                  <label htmlFor="A8">1</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="1" name="score8" id="B8" />
                  <label htmlFor="B8">2</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="2" name="score8" id="C8" />
                  <label htmlFor="C8">3</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="3" name="score8" id="D8" />
                  <label htmlFor="D8">4</label>
                </div>
                <div className="check_career">
                  <input type="radio" value="4" name="score8" id="E8" />
                  <label htmlFor="E8">5</label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center w-30 my-3">
              <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" onClick={() => router.back()}>이전</button>
              <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" >완료</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}