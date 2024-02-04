

const Nav = () => {
  return (
    <>
 <section className="w-[100%] h-[100vh] bg-[url('./images/hero-bg.jpg')] bg-center bg-cover">   
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)]">
            
            <header className="container m-auto sm:px-[5rem] font-semibold">
                <div className="grid sm:grid-cols-[15%_auto] grid-cols-[30%_auto] items-center px-5 text-white">
                    <figure>
                        <img src="./images/logo.png" className="shadow-md" alt=""/>
                    </figure>
                    <div className="justify-end flex items-center gap-4">
                        <div className="border p-[.2rem_1.4rem] rounded-[5px] bg-[rgba(0,0,0,0.9)]">
                            <select name="langauge" title="language" id="" className="bg-transparent border-none outline-none active:border-none active:outline-none">
                                <option value="English" className="bg-black">English</option>
                                <option value="Hindi" className="bg-black">Hindi</option>
                            </select>
                        </div>
                        <button className="bg-red-600 rounded-[5px] p-[.2rem_.8rem]">Sign In</button>
                  </div>
                </div>
            </header>
         
            <section className="container flex flex-col items-center justify-center p-5 sm:px-[1.5rem] text-center text-white mx-auto leading-[1.2rem] sm:mt-[7rem] mt-[6rem]">
                <h2 className="text-4xl sm:text-5xl py-5 font-extrabold">Enjoy big movies, hit series and more from ₹149.</h2>

                <h4 className="py-3 sm:text-2xl text-xl font-medium">
                    Join today. Cancel anytime.
                </h4>
                <h4 className="py-3 sm:text-xl text-xl font-medium">Ready to watch? Enter your email to create or restart your membership.</h4>

                <div className="flex justify-center sm:flex-row flex-col items-center sm:gap-3 gap-4 mt-5">
                    <input type="text" name="email" id="" placeholder="Email Address" className="p-2 rounded-[5px] bg-transparent border text-xl border-gray-400"/>
                    <button className="bg-red-600 font-bold rounded-[5px] p-[.48rem_.8rem] sm:text-2xl">Get Started `{'>'}`  </button>
                </div>

            </section>
         </div>
    </section>

    </>
  )
}

export default Nav