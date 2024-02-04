const CTA = () => {
  return (
    <>
     <section className="w-[100%] bg-black p-5">
        <div className="container m-auto grid grid-cols-1 sm:grid-cols-2  items-center text-white p-5">
            <div className="text-center sm:text-left sm:p-[1.8rem]">
                <h2 className="text-4xl sm:text-5xl py-4 font-extrabold">Watch everywhere</h2>
                <h4 className="py-3 sm:text-2xl text-xl font-medium">
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </h4>
           </div>
    
           <div className="">
                <figure className="relative">
                    <img src="./images/tv.png" alt="" className=""/>
                    <video className="absolute bottom-[25%] left-[13.2%] w-[72.61%]" autoPlay muted loop>
                       <source src="./images/video-devices-in.m4v" type=""/>
                    </video>
                </figure>
           </div>
         </div>
    </section>
    
    
    </>
  )
}

export default CTA