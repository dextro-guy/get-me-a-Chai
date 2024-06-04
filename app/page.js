import Image from "next/image";

export default function Home() {
  return (<>
    <div className="flex justify-center items-center flex-col gap-6 text-white h-[44vh] py-48 text-center  ">
      <div className="font-bold flex justify-center items-center gap-2 text-7xl">Buy me a Chai <span className="rounded-md"><img className="rounded-3xl" src="/icons8-tea.gif" alt="" /></span></div>
      <p className="text-xl">a crowdfunding platform for creators.Get Funded by your fans and followers.</p>
      <p>A place where your fans can buy you a chai.Unleash the power of your fans and get your project funded</p>
      <div>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

      </div>
    </div>



    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto py-32">
      <h1 className="text-2xl font-bold text-center my-2">Your fans can buy you a Chai</h1>
      <div className="flex justify-around">
        <div className="item space-y-3 flex flex-col text-center justify-center items-center">
          <div>
            <div className="bg-slate-400 my-2 w-24 mx-auto p-4 rounded-full">
              <img className="invert-[0.1] rounded-md" width={88} src="/icons8-front-desk-50.png" alt="" />
            </div>
            <p className="my-2">Fans want to help</p>
            <p className="">Your fans are available for you to help.</p>
          </div>
        </div>
        <div className="item space-y-3 flex flex-col text-center justify-center items-center">
          <div>
            <div className="bg-slate-400 my-2 w-24 mx-auto p-4 rounded-full">
              <img className="invert-[0.1] rounded-md" width={88} src="/icons8-coin-64.png" alt="" />
            </div>
            <p className="my-2">Fans want to help</p>
            <p className="">Your fans are available for you to help.</p>
          </div>
        </div>
        <div className="item space-y-3 flex flex-col text-center justify-center items-center">
          <div>
            <div className="bg-slate-400 my-2 w-24 mx-auto p-4 rounded-full">
              <img className="invert-[0.1] rounded-md" width={88} src="/icons8-crowd-48.png" alt="" />
            </div>
            <p className="my-2">Fans want to help</p>
            <p className="">Your fans are available for you to help.</p>
          </div>
        </div>
      </div>

    </div>




    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center my-2">Learn more about us</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=jJnANEp1w1rYYOUG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </>
  );
}
