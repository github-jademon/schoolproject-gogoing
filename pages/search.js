import School from '../components/school.js'
import {useRouter} from 'next/router';

export default function Search() {
  const data = {  }
  const router = useRouter();
  return (
    <>
      <div className="fixed top-0 w-full">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-b">
          <div className="container-fluid container inline-block">
            <div className="d-flex" id="navbarText" onClick={() => router.back()}>
              <svg id="arrow-left" xmlns="http://www.w3.org/2000/svg" width="18" height="12.226" viewBox="0 0 18 12.226">
                <path id="arrow-left-2" data-name="arrow-left" d="M21.672,11.376v2.161H7.809l3.5,3.5L9.785,18.569,3.672,12.456,9.785,6.343l1.528,1.528-3.5,3.5Z" transform="translate(-3.672 -6.343)" fill="#707070"/>
              </svg>
            </div>
            <div className="d-flex w-4/5 search-box rounded" id="navbarText">
              <input type="search" className="outline-none rounded px-2 py-1 w-full bg-gray-100" />
            </div>
            <div className="d-flex" id="navbarText">
              <span>
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
            </div>
          </div>
        </nav>
        <School data={data}></School>
      </div>
    </>
  )
}