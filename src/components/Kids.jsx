

const Kids = () => {
  return (
    <>
<section className="w-[100%] bg-black p-5">
        <div className="container m-auto grid grid-cols-1 sm:grid-cols-2  items-center text-white p-5">
            
            <div className="order-2 sm:order-1">
                <figure className="relative">
                    <img src="./images/kids.png" alt="" className="" />
                   
                </figure>
            </div>

            <div className="text-center order-1 sm:order-2 sm:text-left sm:p-[2rem]">
                 <h2 className="text-4xl sm:text-5xl py-4 font-extrabold">Create profiles for kids</h2>
                 <h4 className="py-3 sm:text-2xl text-xl font-medium">
                    Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                 </h4>
            </div>
         </div>
    </section>

    </>
  )
}

export default Kids