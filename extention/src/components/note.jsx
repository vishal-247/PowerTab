function Note({id, text,onDelete }) {

  return (
    <>
      <div className="group relative h-fit min-h-32 min-w-[240px] max-w-[340px] wrap-break-word bg-pink-100 w-fit p-4  rounded-xl border-2 text-shadow-gray-900 border-pink-200 ">
        {text}
        <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out ">
          {/* delete wala button */}

          <span onClick={()=>{onDelete(id)}} className="absolute top-[-15px] bg-white h-6 w-6 left-[85%] text-red-300 rounded-full flex items-center justify-center drop-shadow-xl shadow-gray-400 text-shadow-2xs cursor-pointer hover:bg-red-50 transition-colors active:translate-0.5">
            {/* Maine width/height 14px kar diya taaki perfectly fit ho jaye */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>

          {/* paste wala button */}
          <span className="absolute top-[-15px] bg-white h-6 w-6  left-[72%]   text-yellow-300  rounded-full flex items-center justify-center  drop-shadow-xl  shadow-gray-400 text-shadow-2xs cursor-pointer hover:bg-yellow-50 transition-colors active:translate-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-clipboard "
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            </svg>
          </span>

          {/*copy wala button */}
          <span className="absolute top-[-15px] bg-white h-6 w-6  left-[59%]   text-green-300  rounded-full flex items-center justify-center  drop-shadow-xl  shadow-gray-400 text-shadow-2xs cursor-pointer hover:bg-green-50 transition-colors active:translate-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-copy "
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default Note;
