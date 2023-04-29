import React from "react";

function About(){
    return(
            <section className="about">
                <div className="container">
                    {/* Heading */}
                    <h1 className="text-4xl text-center text-slate-500 font-bold my-10">About Us</h1>
                    {/* Cards */}
                    {/* First */}
                    <div className="item flex gap-10">
                        <div className="left">
                            <img className="rounded object-cover h-full w-full" src="src\assets\about1.jpg" alt="cover1" />
                        </div> 
                        <div className="right w-1/2">
                            <h4 className="text-center text-xl font-medium mb-6">Planning Future</h4>
                            <p className="text-center">We have years of experience helping clients prepare for the unknown while meeting their financial goals. Ask us about</p>
                            <ol className="list-disc pl-8">
                                <li>Financial Planning</li>
                                <li>Investment Advice</li>
                                <li>Retirement Planning</li>
                                <li>Education Funding</li>
                                <li>Estate Planning</li>
                            </ol>
                            <p>As an independent financial services firm, we can access many different products so you can get the right products and services for you.</p>
                        </div>
                    </div>
                    {/* Second */}
                    <div className="item flex gap-10 justify-center items-center">
                        <div className="left w-1/2">
                            <h4 className="text-center text-xl font-medium mb-6">Comprehensive Approach</h4>
                            <p className="text-center">We use proven finance strategies designed to meet your risk tolerance and stand up against market volatility. And you can count on unbiased recommendations and impartial guidance based directly on your needs and goals.</p>
                        </div>
                        <div className="right">
                            <img className="rounded object-cover h-full w-full" src="src\assets\about2.webp" alt="cover1" />
                        </div> 
                    </div>
                    {/* Third */}
                    <div className="item flex gap-10">
                        <div className="left">
                            <img className="rounded object-cover h-full w-full" src="src\assets\about3.jpg" alt="cover1" />
                        </div> 
                        <div className="right w-1/2">
                            <h4 className="text-center text-xl font-medium mb-6">Committed to Service</h4>
                            <p className="text-center">Every successful financial strategy starts with an excellent client relationship. Our mission and values include exceeding our client's every expectation. Call us today to find out how we can suggest long- and short-term strategies that will help you realize your financial dreams.</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default About;