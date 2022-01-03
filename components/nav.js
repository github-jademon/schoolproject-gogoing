import Link from "next/link";

export default function Nav(){
  return (
    <div className="fixed top-0 w-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-b">
          <div className="container-fluid container">
            <Link className="p-0 navbar-brand" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="39"
                viewBox="0 0 76 39"
              >
                <text
                  id="고고잉"
                  transform="translate(0 30)"
                  fill="#707070"
                  fontSize="32"
                  fontFamily="LGPC, LG PC"
                >
                  <tspan x="0" y="0">고고잉</tspan>
                </text>
                <text
                  id="고고잉-2"
                  data-name="고고잉"
                  transform="translate(2 32)"
                  fill="#707070"
                  fontSize="32"
                  fontFamily="LGPC, LG PC"
                  opacity="0.2"
                >
                  <tspan x="0" y="0">고고잉</tspan>
                </text>
              </svg>
            </Link>
            <div className="d-flex" id="navbarText">
              <Link href="/search">
                <span className="pr-2">
                  <svg
                    id="search"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="search-2"
                      data-name="search"
                      d="M19.153,15.184a8.466,8.466,0,1,0-1.494,1.494l.045.048,4.49,4.49a1.058,1.058,0,1,0,1.5-1.5l-4.49-4.49ZM16.955,5.5a6.349,6.349,0,1,1-8.979,0A6.349,6.349,0,0,1,16.955,5.5Z"
                      transform="translate(-4 -1.525)"
                      fill="#707070"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <Link href="/mypage">
                <span className="pl-2">
                  <svg
                    id="profile"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="패스_1041"
                      data-name="패스 1041"
                      d="M16,9a4,4,0,1,1-4-4A4,4,0,0,1,16,9ZM14,9a2,2,0,1,1-2-2A2,2,0,0,1,14,9Z"
                      transform="translate(-2 -1.571)"
                      fill="#707070"
                      fillRule="evenodd"
                    />
                    <path
                      id="패스_1042"
                      data-name="패스 1042"
                      d="M11,1A10,10,0,1,0,21,11,10,10,0,0,0,11,1ZM2.818,11a8.147,8.147,0,0,0,1.735,5.038,8.183,8.183,0,0,1,12.953-.076A8.182,8.182,0,1,0,2.818,11ZM11,19.182a8.148,8.148,0,0,1-5.157-1.829,6.365,6.365,0,0,1,10.387-.061A8.149,8.149,0,0,1,11,19.182Z"
                      transform="translate(-1 -1)"
                      fill="#707070"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
  )
}