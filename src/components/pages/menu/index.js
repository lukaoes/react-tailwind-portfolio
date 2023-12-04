import Instagram from '../../images/Instagram.png'
import Twitter from '../../images/Twitter.png'


const Menu = () => {


    return (

        <div className='z-3 h-full h-full bg-white px-[37px] lg:px-[268px]'>

            <div className=' sm:flex sm:gap-[250px]'>
                <div className='relative '>
                    <div className='text-[48px] sm:text-[64px] font-bold flex flex-col gap-[26px] w-[234px] h-[262px] sm:w-[350px] sm:h-[302px] pt-[114px]'>
                        <a href='/' className='hover:bg-black hover:text-white transition duration-300 ease-in-out'>HOME</a>
                        <a href='/Projects' className='hover:bg-black hover:text-white transition duration-300 ease-in-out'>PROJECTS</a>
                        <a href='/About' className='hover:bg-black hover:text-white transition duration-300 ease-in-out'>ABOUT</a>
                        <a href='/Contact' className='hover:bg-black hover:text-white transition duration-300 ease-in-out '>CONTACT</a>
                    </div>
                    <div className='text-[24px] font-medium absolute top-[153px] left-[-50px] sm:absolute transform rotate-[270deg] sm:left-[-50px] sm:top-[160px]'>MENU</div>
                </div>

                <div className='font-[20px] w-[298px] h-[118px] sm:w-[305.338px] pt-[114px] sm:pt-[250px]'>
                    <div className='pt-[180px] flex flex-col gap-[24px] font-semibold text-[20px]'>
                        <div>
                            your_mail@email.com
                        </div>
                        <div>
                            +123 456 7890
                        </div>
                        <div className='flex gap-5'>
                            <img src={Instagram} alt='close' className='cursor-pointer' />
                            <img src={Twitter} alt='close' className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu