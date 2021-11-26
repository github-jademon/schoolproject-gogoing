import Link from 'next/link'

export default function School(data) {
  if (!data.data) return <span>데이터가 없습니다</span>
  if (!data.data.map) return <span>데이터가 없습니다</span>
  if (data.data.length < 1) return <span>데이터가 없습니다</span>

  return (
    <>
      {data.data.map(v => (
        <div key={v.id} className="flex flex-wrap border-b border-gray-300 py-2 justify-between border-t">
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
                  fill="#bbdbff"
                />
                <text
                  id={v.sc_gender}
                  transform="translate(5 14)"
                  fill="#68a4ff"
                  fontSize="10"
                  fontFamily="MalgunGothic-Semilight, Malgun Gothic"
                  fontWeight="300"
                >
                  <tspan x="0" y="0">{v.sc_gender}</tspan>
                </text>
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold base-color m-0">
                {v.sc_name}
              </p>
            </div>
            <div>
              <Link href={"https://map.kakao.com/?q=" + v.sc_address} passHref><p className="text-base base-color m-0">{v.sc_address}</p></Link>
              <small>{v?.sc_tel} | {v?.sc_tel_sw} | {v?.sc_tel_ga}</small>
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
      ))}
    </>
  )
}