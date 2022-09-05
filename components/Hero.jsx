import React from 'react'

function Hero() {
  return (
    <div>
        {/* overlay */}
        <div className="hero flex items-center justify-center h-screen bg-fixed bg-center bg-cover w-100 custom-img">
          <div className=" absolute top-0 left-0 right-0 bottom-0 z-[2]">
            <div className=" mt-[12rem] z-[2] text-white ml-5">
              <h2 className="p-5 text-yellow-400 font-bold text-5xl"> The best Tasting <br />Exerience  </h2>
              <button className="px-8 w-[10] h-10 ml-5 border hover:border-none rounded-full bg-yellow-500 transition ease-in 700 hover:text-white">Place Order </button>
            </div>
          </div> 
        </div>

    </div>
  )
}

export default Hero