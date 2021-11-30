import Footer from '../components/footer'
import Nav from '../components/nav'
import {useRouter} from 'next/router';
import { useState } from 'react'

export default function Score() {
  const router = useRouter();
  const [score, setScore] = useState(1)

  return(
    <>
      <Nav />
      <div className={"container pt-2 mt-14 " + (score==1 ? '' : 'hidden')}>
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
            <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" onClick={() => setScore(score==1 ? score=2 : score=1)}>다음</button>
          </div>
        </form>
      </div>
      <div className={"container pt-2 mt-14 " + (score==2 ? '' : 'hidden')}>
        <h3 className="border-b mx-3 p-1 my-2">2학년 성적</h3>
        <form method="post" action="">
          <div>
            <h5 className="inline-block w-auto border-b ml-4 p-1 my-3">1학기</h5>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">국어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score11" id="A11" />
                <label htmlFor="A11">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score11" id="B11" />
                <label htmlFor="B11">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score11" id="C11" />
                <label htmlFor="C11">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score11" id="D11" />
                <label htmlFor="D11">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score11" id="E11" />
                <label htmlFor="E11">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">수학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score12" id="A12" />
                <label htmlFor="A12">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score12" id="B12" />
                <label htmlFor="B12">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score12" id="C12" />
                <label htmlFor="C12">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score12" id="D12" />
                <label htmlFor="D12">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score12" id="E12" />
                <label htmlFor="E12">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">사회</div>
              <div className="check_score">
                <input type="radio" value="0" name="score13" id="A13" />
                <label htmlFor="A13">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score13" id="B13" />
                <label htmlFor="B13">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score13" id="C13" />
                <label htmlFor="C13">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score13" id="D13" />
                <label htmlFor="D13">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score13" id="E13" />
                <label htmlFor="E13">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">과학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score14" id="A14" />
                <label htmlFor="A14">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score14" id="B14" />
                <label htmlFor="B14">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score14" id="C14" />
                <label htmlFor="C14">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score14" id="D14" />
                <label htmlFor="D14">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score14" id="E14" />
                <label htmlFor="E14">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">영어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score15" id="A15" />
                <label htmlFor="A15">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score15" id="B15" />
                <label htmlFor="B15">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score15" id="C15" />
                <label htmlFor="C15">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score15" id="D15" />
                <label htmlFor="D15">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score15" id="E15" />
                <label htmlFor="E15">E</label>
              </div>
            </div>
          </div>
          <div>
            <h5 className="inline-block w-auto border-b ml-4 p-1 my-3">2학기</h5>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">국어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score16" id="A16" />
                <label htmlFor="A16">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score16" id="B16" />
                <label htmlFor="B16">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score16" id="C16" />
                <label htmlFor="C16">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score16" id="D16" />
                <label htmlFor="D16">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score16" id="E16" />
                <label htmlFor="E16">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">수학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score17" id="A17" />
                <label htmlFor="A17">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score17" id="B17" />
                <label htmlFor="B17">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score17" id="C17" />
                <label htmlFor="C17">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score17" id="D17" />
                <label htmlFor="D17">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score17" id="E17" />
                <label htmlFor="E17">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">사회</div>
              <div className="check_score">
                <input type="radio" value="0" name="score18" id="A18" />
                <label htmlFor="A18">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score18" id="B18" />
                <label htmlFor="B18">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score18" id="C18" />
                <label htmlFor="C18">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score18" id="D18" />
                <label htmlFor="D18">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score18" id="E18" />
                <label htmlFor="E18">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">과학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score19" id="A19" />
                <label htmlFor="A19">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score19" id="B19" />
                <label htmlFor="B19">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score19" id="C19" />
                <label htmlFor="C19">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score19" id="D19" />
                <label htmlFor="D19">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score19" id="E19" />
                <label htmlFor="E19">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">영어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score20" id="A20" />
                <label htmlFor="A20">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score20" id="B20" />
                <label htmlFor="B20">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score20" id="C20" />
                <label htmlFor="C20">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score20" id="D20" />
                <label htmlFor="D20">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score20" id="E20" />
                <label htmlFor="E20">E</label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-30 my-3.5">
            <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" onClick={() => router.back()}>이전</button>
            <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" onClick={() => setScore(score==2 ? score=3 : score=2)}>다음</button>
          </div>
        </form>
      </div>
      <div className={"container pt-2 mt-14 " + (score==3 ? '' : 'hidden')}>
        <h3 className="border-b mx-3 p-1 my-2">3학년 성적</h3>
        <form method="post" action="">
          <div>
            <h5 className="inline-block w-auto border-b ml-4 p-1 my-3">1학기</h5>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">국어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score21" id="A21" />
                <label htmlFor="A21">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score21" id="B21" />
                <label htmlFor="B21">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score21" id="C21" />
                <label htmlFor="C21">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score21" id="D21" />
                <label htmlFor="D21">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score21" id="E21" />
                <label htmlFor="E21">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">수학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score22" id="A22" />
                <label htmlFor="A22">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score22" id="B22" />
                <label htmlFor="B22">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score22" id="C22" />
                <label htmlFor="C22">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score22" id="D22" />
                <label htmlFor="D22">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score22" id="E22" />
                <label htmlFor="E22">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">사회</div>
              <div className="check_score">
                <input type="radio" value="0" name="score23" id="A23" />
                <label htmlFor="A23">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score23" id="B23" />
                <label htmlFor="B23">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score23" id="C23" />
                <label htmlFor="C23">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score23" id="D23" />
                <label htmlFor="D23">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score23" id="E23" />
                <label htmlFor="E23">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">과학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score24" id="A24" />
                <label htmlFor="A24">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score24" id="B24" />
                <label htmlFor="B24">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score24" id="C24" />
                <label htmlFor="C24">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score24" id="D24" />
                <label htmlFor="D24">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score24" id="E24" />
                <label htmlFor="E24">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">영어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score25" id="A25" />
                <label htmlFor="A25">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score25" id="B25" />
                <label htmlFor="B25">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score25" id="C25" />
                <label htmlFor="C25">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score25" id="D25" />
                <label htmlFor="D25">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score25" id="E25" />
                <label htmlFor="E25">E</label>
              </div>
            </div>
          </div>
          <div>
            <h5 className="inline-block w-auto border-b ml-4 p-1 my-3">2학기</h5>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">국어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score26" id="A26" />
                <label htmlFor="A26">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score26" id="B26" />
                <label htmlFor="B26">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score26" id="C26" />
                <label htmlFor="C26">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score26" id="D26" />
                <label htmlFor="D26">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score26" id="E26" />
                <label htmlFor="E26">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">수학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score27" id="A27" />
                <label htmlFor="A27">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score27" id="B27" />
                <label htmlFor="B27">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score27" id="C27" />
                <label htmlFor="C27">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score27" id="D27" />
                <label htmlFor="D27">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score27" id="E27" />
                <label htmlFor="E27">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">사회</div>
              <div className="check_score">
                <input type="radio" value="0" name="score28" id="A28" />
                <label htmlFor="A28">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score28" id="B28" />
                <label htmlFor="B28">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score28" id="C28" />
                <label htmlFor="C28">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score28" id="D28" />
                <label htmlFor="D28">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score28" id="E28" />
                <label htmlFor="E28">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">과학</div>
              <div className="check_score">
                <input type="radio" value="0" name="score29" id="A29" />
                <label htmlFor="A29">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score29" id="B29" />
                <label htmlFor="B29">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score29" id="C29" />
                <label htmlFor="C29">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score29" id="D29" />
                <label htmlFor="D29">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score29" id="E29" />
                <label htmlFor="E29">E</label>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="self-center mr-4">영어</div>
              <div className="check_score">
                <input type="radio" value="0" name="score30" id="A30" />
                <label htmlFor="A30">A</label>
              </div>
              <div className="check_score">
                <input type="radio" value="1" name="score30" id="B30" />
                <label htmlFor="B30">B</label>
              </div>
              <div className="check_score">
                <input type="radio" value="2" name="score30" id="C30" />
                <label htmlFor="C30">C</label>
              </div>
              <div className="check_score">
                <input type="radio" value="3" name="score30" id="D30" />
                <label htmlFor="D30">D</label>
              </div>
              <div className="check_score">
                <input type="radio" value="4" name="score30" id="E30" />
                <label htmlFor="E30">E</label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-30 my-3.5">
            <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" onClick={() => router.back()}>이전</button>
            <button type="button" name="" id="" className="py-1.5 px-2.5 border mx-2 rounded-lg" onClick={() => setScore(score==3 ? score=1 : score=3)}>완료</button>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  )
}