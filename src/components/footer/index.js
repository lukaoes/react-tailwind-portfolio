import rpLogoWhite from '../images/rpLogoWhite.png'

const Footer = () => {

    return (
        <div className="bg-black">
            <div className="bg-black mx-auto text-white w-[372px] h-[300px] sm:w-[1440px] sm:h-[400px] pt-[83px] sm:pt-[160px] px-[37px] sm:px-[120px] sm:flex sm:justify-between">
                <div className="w-[298px] sm:w-[374px] sm:h-[40px] gap-[30px] flex justify-between mb-[60px]">
                    <a href="/Projects" className='hover:bg-gray-600 transition duration-300 ease-in-out'>PROJECTS</a>
                    <a href="/About" className='hover:bg-gray-600 transition duration-300 ease-in-out'>ABOUT ME</a>
                    <a href="/Contact" className='hover:bg-gray-600 transition duration-300 ease-in-out'>CONTACT</a>
                </div>
                <div>
                    <div className='flex gap-[21px] lg:flex lg:gap-[400px]'>
                        <img src={rpLogoWhite} alt='logo' className='w-[58px] sm:w-[80px] inline' />
                        <div className='flex flex-col gap-[20px]'>
                            <h5>
                                your_mail@email.com
                            </h5>
                            <h5>
                                +123 456 7890
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer