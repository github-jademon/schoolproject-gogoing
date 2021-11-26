import { useState } from 'react'
import School from './school'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

export default function Selement() {
  const { data, error } = useSWR('/api/school/search?page=1', fetcher)
  const [filter, setFileter] = useState(false)

  if (error) return <span>서버와 연결중 오류가 발생했습니다.</span>
  if (!data) return <span>데이터를 받아올 수 없습니다.</span>

  const list = data.data
  return (
    <>
      <div className="container pt-2 flex-1 mt-16">
        <div className="mb-2 border border-gray-300 py-2 justify-between rounded-md shadow-md">
          <div className="flex px-2 ">
            <div className="self-center mr-4 ml-2">
              <svg id="today" xmlns="http://www.w3.org/2000/svg" width="20" height="24.444" viewBox="0 0 20 24.444">
                <rect id="사각형_4" data-name="사각형 4" width="12" height="10" rx="1" transform="translate(4 9.63)" fill="#707070" opacity="0.5"/>
                <path id="패스_1322" data-name="패스 1322" d="M19.667,3.222H6.333A1.111,1.111,0,0,0,5.222,4.333V22.111a1.111,1.111,0,0,0,1.111,1.111H19.667a1.111,1.111,0,0,0,1.111-1.111V4.333A1.111,1.111,0,0,0,19.667,3.222ZM6.333,1A3.333,3.333,0,0,0,3,4.333V22.111a3.333,3.333,0,0,0,3.333,3.333H19.667A3.333,3.333,0,0,0,23,22.111V4.333A3.333,3.333,0,0,0,19.667,1Z" transform="translate(-3 -1)" fill="#707070" fillRule="evenodd"/>
                <path id="패스_1323" data-name="패스 1323" d="M7,6A1,1,0,0,1,8,5h4a1,1,0,0,1,0,2H8A1,1,0,0,1,7,6Z" transform="translate(-2.333 -0.511)" fill="#707070"/>
              </svg> 
            </div>
            <div className="">
              <p className="text-lg font-bold base-color m-0">내신 성적 입력</p>
              <p className="text-sm font-medium base-color m-0">성적을 입력하여 모든 기능을 이용하세요</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-2 py-2 text-center border-gray-300 self-center">
          <div className="pr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
              <path id="filter" d="M19.062,0H.939A.938.938,0,0,0,.276,1.6L7.5,8.826v8.049a.938.938,0,0,0,.4.768l3.125,2.187a.938.938,0,0,0,1.475-.768V8.826L19.725,1.6A.938.938,0,0,0,19.062,0Z" transhtmlForm="translate(0)" fill="rgba(0,0,0,0.6)"/>
            </svg>
          </div>
          <div>
            <p className="text-sm base-color m-0" onClick={(e) => setFileter(filter ? false : true)}>필터</p>
          </div>
        </div>
        <div className={"flex flex-wrap mb-2 border-1 border-gray-300 py-2 justify-between rounded " + (!filter ? 'hidden' : '')}>
          <div className="flex-col pl-2">
            <div className="my-1">
              <span className="text-base font-bold base-color mr-2">위치</span>
              <span>
                <select name="area" id="area" className="border-bottom outline-none">
                  <option value="">-선택-</option>
                  <option value="">서울</option>
                  <option value="">서울</option>
                  <option value="">서울</option>
                  <option value="">서울</option>
                  <option value="">서울</option>
                  <option value="">서울</option>
                </select>
              </span>
            </div>
            <div className="my-2">
              <span className="text-base font-bold base-color mr-2">성별</span>
              <input type="radio" value="0" name="gen" id="wom" /><label htmlFor="wom">여자</label>
              <input type="radio" value="1" name="gen" id="man" /><label htmlFor="man">남자</label>
            </div>
            <div className="my-1">
              <span className="text-base font-bold base-color mr-2">분류</span>
              <span>
                <input type="radio" value="5" name="type" id="5" /><label htmlFor="5">전체</label>
                <input type="radio" value="0" name="type" id="0" /><label htmlFor="0">일반고</label>
                <input type="radio" value="1" name="type" id="1" /><label htmlFor="1">자율고</label>
                <input type="radio" value="2" name="type" id="2" /><label htmlFor="2">특성화고</label>
                <input type="radio" value="3" name="type" id="3" /><label htmlFor="3">특목고</label>
              </span>
            </div>
          </div>
        </div>
        <School data={list} />
      </div>
    </>
  )
}