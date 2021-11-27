/* global kakao */
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import Nav from '../components/nav'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'
import {useState} from 'react'
// sc_lgtud sc_lggud
import Script from 'next/script'

const fetcher = url => fetch(url).then(r => r.json())

export default function scDetail() {
  const { data, error } = useSWR(`/api/school/get?code=${router.query.code}`, fetcher)
  const 
  
  if (error) return <span>서버와 연결중 오류가 발생했습니다.</span>
  if (!data) return <span>데이터를 받아올 수 없습니다.</span>

  
  const kakaoKey = "57c64c7799e4e731a7661c5629f39abf"
  console.log(data)
  return (
    <>
      <div key={data.data.id}>
        <Nav />
        <div className="container pt-2 flex-1 mt-14 mb-10">
          <div className="border-b p-1 mx-2 flex flex-wrap justify-center">
            <div className="px-2 self-center">
              <p className="text-xl font-semibold m-0 mt-1 text-gray-600">{data.data.sc_name}</p>
              <p className="text-end text-sm m-0 mb-1">{data.data.sc_kind==0?'일반고등학교':data.data.sc_kind==1?'자율고등학교':data.data.sc_kind==2?'특성화고등학교':'특수목적고등학교'}</p>
            </div>
            <div className="px-2 self-center">
              <img
                    width="40"
                    height="40"
                    src="https://w.namu.la/s/e20b59297a01e95a8818dbf422c8d68e42acbbf1d8da6f22b6f0d1f81e4b1ea9f2f81a3a685e2c1561dbd270ea394cc2b7c41af513e9d5ce55eb1279751d9e5a2f704e5a22c702fb01c7f518d66bd232"
                    alt=""
                  />
            </div>
          </div>
          <div className="flex flex-wrap border m-2 p-3 mt-4 mb-4">
            <div className="self-center mr-4">
              <svg id="today" xmlns="http://www.w3.org/2000/svg" width="20" height="24.444" viewBox="0 0 20 24.444">
                <rect id="사각형_4" data-name="사각형 4" width="12" height="10" rx="1" transform="translate(4 9.63)" fill="#707070" opacity="0.5"/>
                <path id="패스_1322" data-name="패스 1322" d="M19.667,3.222H6.333A1.111,1.111,0,0,0,5.222,4.333V22.111a1.111,1.111,0,0,0,1.111,1.111H19.667a1.111,1.111,0,0,0,1.111-1.111V4.333A1.111,1.111,0,0,0,19.667,3.222ZM6.333,1A3.333,3.333,0,0,0,3,4.333V22.111a3.333,3.333,0,0,0,3.333,3.333H19.667A3.333,3.333,0,0,0,23,22.111V4.333A3.333,3.333,0,0,0,19.667,1Z" transform="translate(-3 -1)" fill="#707070" fillRule="evenodd"/>
                <path id="패스_1323" data-name="패스 1323" d="M7,6A1,1,0,0,1,8,5h4a1,1,0,0,1,0,2H8A1,1,0,0,1,7,6Z" transform="translate(-2.333 -0.511)" fill="#707070"/>
              </svg>
            </div>
            <div>
              <p className="m-0">당신의</p>
              <p className="m-0">내신 성적은</p>
            </div>
            <div className="ml-5 self-center">
              <p className="text-2xl m-0 font-semibold text-gray-600">190/200</p>
            </div>
            <div className="ml-2 self-center">
              <p className="m-0">입니다.</p>
            </div>
          </div>
          <div className="m-2">
            <div className="flex flex-wrapn my-1">
              <div className="mx-1">설립일자: </div>
              <div className="mx-1">{data.data.sc_date.substring(0, 4)+"년 " + data.data.sc_date.substring(4, 6)+"월 " + data.data.sc_date.substring(6, 8)+"일"}</div>
            </div>
            <div className="flex flex-wrap my-1">
              <div className="mx-1">설립구분: </div>
              <div className="mx-1">{data.data.sc_type_public}</div>
            </div>
            <div className="flex flex-wrap my-1">
              <div className="mx-1">학생수: </div>
              <div className="mx-1">108명 (남 76명, 여 32명)</div>
            </div>
            <div className="flex flex-wrap my-1">
              <div className="mx-1">교원수: </div>
              <div className="mx-1">17명 (남 10명, 여 7명)</div>
            </div>
            <div className="flex flex-wrap my-1">
              <div className="mx-1">대표번호: </div>
              <div className="mx-1">{data.data.sc_tel}</div>
            </div>
            <div className="flex flex-wrap my-1">
              <div className="mx-1">팩스: </div>
              <div className="mx-1">{data.data.sc_fax}</div>
            </div>
            <Link href={data.data.sc_homepage}>
              <div className="flex flex-wrap my-1">
                <div className="mx-1">홈페이지: </div>
                <div className="mx-1">{data.data.sc_homepage}</div>
              </div>
            </Link>
            <div className="flex flex-wrap my-1">
              <div className="mx-1">주소: </div>
              <div className="mx-1">{data.data.sc_address}</div>
            </div>
          </div>
          <div>
            {/* <div id="map" style="width:340px;height:280px;" className="m-auto border my-4"></div> */}

            <Map
              center={{ lat: 33.5563, lng: 126.79581 }}
              style={{ width: "100%", height: "360px" }}
            >
              <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{color:"#000"}}>Hello World!</div>
              </MapMarker>
            </Map>
          </div>
        </div>
      </div>
    </>
    
  )
}