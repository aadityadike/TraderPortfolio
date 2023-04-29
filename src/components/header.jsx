import React from "react";

function Header(){
    return(
            <nav className=" mx-auto my-0 py-2 px-0">
                <div className="container flex align-middle justify-between px-1 py-4">
                    <a href="" className="cursor-pointer no-underline float-left"><img src='./assets/logo.png' alt="logo"/></a>
                    <ul className="flex gap-20 text-grey font-bold">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Strategy</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>        
    )
}
export default Header;