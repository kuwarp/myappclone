
const Footer = () => {
  return (
    <>
    <footer className="w-[100%] bg-black p-8 text-[#9b9a9a]">
        <div className="container m-auto p-10 flex flex-col">
            <p className="">Questions? Call <a href="" className="underline">000-800-100-8343</a> </p>
            <div className="grid md:grid-cols-4 grid-cols-2">
                <div className="mt-5">
                    <ul className="leading-[2.25rem]">
                        <li className="underline"> <a href=""> FAQ </a> </li>
                        <li className="underline"> <a href=""> Investor Relations </a> </li>
                        <li className="underline"> <a href=""> Privacy </a> </li>
                        <li className="underline"> <a href=""> Speed Test </a> </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <ul className="leading-[2.25rem]">
                        <li className="underline"> <a href=""> Help Centre </a> </li>
                        <li className="underline"> <a href=""> Jobs </a> </li>
                        <li className="underline"> <a href=""> Cookie Preferences </a> </li>
                        <li className="underline"> <a href=""> Legal Notice </a> </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <ul className="leading-[2.25rem]">
                        <li className="underline"> <a href=""> Account </a> </li>
                        <li className="underline"> <a href=""> Ways to Watch </a> </li>
                        <li className="underline"> <a href=""> Corporate Information </a> </li>
                        <li className="underline"> <a href=""> Only on Netflix </a> </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <ul className="leading-[2.25rem]">
                        <li className="underline"> <a href="" className=""> Media Center </a> </li>
                        <li className="underline"> <a href="" className=""> Team of Use </a> </li>
                        <li className="underline"> <a href="" className=""> Contact Us </a> </li>
                    </ul>
                </div>
            </div>
            <div className="justify-start flex items-center gap-4 mt-5">
                <div className="border p-[.2rem_.8rem] rounded-[5px] bg-[rgba(0,0,0,0.9)]">
                    <select name="langauge" title="language" id="" className="bg-transparent border-none outline-none active:border-none active:outline-none">
                        <option value="English" className="bg-black">English</option>
                        <option value="Hindi" className="bg-black">Hindi</option>
                    </select>
                </div>
          </div>
            <p className="mt-5">Netflix India</p>
        </div>
    </footer>
    
    
    </>
  )
}

export default Footer