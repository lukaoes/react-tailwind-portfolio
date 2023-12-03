import rpLogoWhite from '../images/rpLogoWhite.png'

const Header = (props) => {

    const data = props.sendToHeader

    return (
        <div className="bg-black h-[810px]">
            <div className="flex justify-between">
                <div className='mt-[26px] sm:mt-[60px] ml-[36px] sm:ml-[120px]'>
                    <img src={rpLogoWhite} className='w-[40px] sm:w-[80px]' alt="logo" />
                </div>
                <div className="flex flex-col h-[20px] justify-between items-end mt-[26px] sm:mt-[60px] mr-[36px] sm:mr-[120px]">
                    <div className="bg-white w-[31.25px] h-[3px]"></div>
                    <div className="bg-white w-[25px] h-[3px]"></div>
                    <div className="bg-white w-[18.75px] h-[3px]"></div>
                </div>
            </div>
            <div className='w-[298px] sm:w-300 lg:w-full mt-[204px] mx-auto text-center text-white'>
                <h1 className='text-6xl mb-[5px]  '>
                    {data.first}
                </h1>
                <p className='text-2xl w-[160px] sm:w-300 lg:w-full mx-auto text-center tracking-wider'>
                    {data.second}
                </p>
            </div>
        </div>
    )
}

export default Header