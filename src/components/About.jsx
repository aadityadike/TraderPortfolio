import { AiFillStar } from 'react-icons/ai'

function About() {
    return (
        <section className="h-screen mt-10 px-5">
            <div className="flex justify-center pb-10">
                <h1 className="font-bold text-4xl text-neutral-900">About us</h1>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="flex-1 min-h-fit">
                    <img src="src/assets/photo.gif" alt="gif" />
                </div>
                <div className="flex-1 px-4 font-semibold text-base leading-8">
                    <ul className="flex flex-col gap-4">
                        <li>
                            {<AiFillStar style={{ display: 'inline', color: '#131313', margin: '8px', width: '20px', height: '22px' }} />}
                            We believe that, Every trade is an opportunity to learn, grow, and achieve your financial dreams.
                        </li>
                        <li>
                            {<AiFillStar style={{ display: 'inline', color: '#131313', margin: '8px', width: '20px', height: '22px' }} />}
                            Our trading course is designed to cater to both beginners and advanced traders, covering all aspects of trading from the basics to advanced strategies.
                        </li>
                        <li>
                            {<AiFillStar style={{ display: 'inline', color: '#131313', margin: '8px', width: '20px', height: '22px' }} />}
                            Our trading platform is intuitive and user-friendly, making it easy to navigate even for those with little to no prior experience.
                        </li>
                        <li>
                            {<AiFillStar style={{ display: 'inline', color: '#131313', margin: '8px', width: '20px', height: '22px' }} />}
                            Our team of experienced traders is available 24/7 to answer any questions you may have and provide guidance when needed. We're committed to helping our clients succeed, and we'll do everything we can to help you achieve your goals.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default About;