

const Download = () => {
  return (
    <>
    
    <section className="w-[100%] bg-black p-5">
        <div className="container m-auto grid grid-cols-1 sm:grid-cols-2  items-center text-white p-5">
            
            <div className="order-2 sm:order-1 relative">
                <figure className="">
                    <img src="./images/mobile-0819.jpg" alt="" className=""/>
                </figure>

                <div className="w-[60%] sm:w-[55%] h-[24%] rounded-[10px] border-2 grid grid-cols-[20%_60%_20%] sm:grid-cols-[20%_65%_15%] absolute bottom-[10%] left-[20%] sm:left-[23%] bg-black items-center border-[gray]">
                    <figure className="p-[5px] ">
                        <img src="./images/boxshot.png" alt="" className=""/>
                    </figure>

                    <div className="sm:ml-3 sm:p-3 ml-[.5rem]">
                        <h4 className="font-bold text-sm sm:text-lg">Stranger Things</h4>
                        <p className="text-[.7rem] sm:text-[.9rem] text-blue-700">Downloading...</p>
                    </div>

                    <figure className="">
                        <img src="./images/download-icon.gif" alt=""/>
                    </figure>
                </div>
            </div>

            <div className="text-center order-1 sm:order-2 sm:text-left sm:p-[1.8rem]">
                 <h2 className="text-4xl sm:text-5xl py-4 font-extrabold">Download your shows to watch offline</h2>
                 <h4 className="py-3 sm:text-2xl text-xl font-medium">
                    Save your favourites easily and always have something to watch.
                 </h4>
            </div>
         </div>
    </section>
    </>
  )
}

export default Download