import Link from 'next/link'

export default function School(data) {
  if (!data.data) return <span>데이터가 없습니다</span>
  if (!data.data.map) return <span>데이터가 없습니다</span>
  if (data.data.length < 1) return <span>데이터가 없습니다</span>
  // if (v.sc_gender=="남녀공학") v.sc_gender = "공학"; color = "#bbdbff"; txcolor="#68a4ff";
  // if (v.sc_gender=="남") v.sc_gender = "남고"; color = "#bbdbff"; txcolor="#68a4ff";
  // if (v.sc_gender=="여") v.sc_gender = "여고"; color = "#FFBBBB"; txcolor="#FF6868";

  return (
    <>
      {data.data.map(v => (
        <Link key={v.sc_code} href={{pathname: '/sc_detail', query:{ code: v.sc_code}}} passHref>
          <div className="flex flex-wrap border-b-1 border-gray-300 py-2 justify-between border-t">
            <div className="flex-col pl-2">
              <div className="pb-1">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                > 
                  <rect
                    id="사각형_52"
                    data-name="사각형 52"
                    width="30"
                    height="20"
                    rx="8"
                    fill='#bbdbff'
                  />
                  <text
                    id={v.sc_gender}
                    transform="translate(5 14)"
                    fill='#68a4ff'
                    fontSize="10"
                    fontFamily="MalgunGothic-Semilight, Malgun Gothic"
                    fontWeight="300"
                  >
                    <tspan x="0" y="0">{v.sc_gender.replace('남녀공학', '공학').replace('남', '남고').replace('녀', '여고')}</tspan>
                  </text>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold base-color m-0">
                  {v.sc_name}
                </p>
              </div>
              <div>
                {/* <Link href={"https://map.kakao.com/?q=" + v.sc_address} passHref><p className="text-base base-color m-0">{v.sc_address}</p></Link> */}
                <small>{v?.sc_tel} | {v?.sc_tel_sw}</small>
              </div>
            </div>
            <div className="flex-col self-center pr-2">
              <div>
                <img
                  width="40"
                  height="40"
                  src={v.url}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}