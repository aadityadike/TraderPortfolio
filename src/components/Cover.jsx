import React from "react";

function Cover(){
    return(
            <section className="showcase bg-black">
                <div className="flex justify-stretch items-center ">
                    <div className="w-1/2">
                        <img src="src\assets\cover1.jpg" alt="Cover" className="h-80 w-full object-cover" />
                    </div>
                    <div className="w-1/2 text-center text-white">
                        <h4 className="uppercase font-semibold text-4xl whitespace-normal px-40 tracking-widest leading-10"> Make your future a success</h4>
                        <p className="font-sm mt-8 text-gray-500 font-semibold text-lg">Plan Your tomorrow today!</p>
                    </div>
                </div>
            </section>        
    )
}
export default Cover;