import CardImg from '../images/CardImg.png'

const Card = () => {

    return (
        <div className="relative bg-black h-[377px] w-[298px] sm:h-[455px] sm:w-[360px] bg-cover pt-[10px] sm:pt-[14px]" style={{ backgroundImage: `url(${CardImg})` }}>
            <p className='w-[248.333px] h-[34.696px] sm:w-[300px] sm:h-[42px] text-20 font-bold text-white mx-auto'>
                Project Title - Here comes the name of the Project
            </p>
            <p className='w-[218.533px] h-[13.217px] sm:w-[264px] sm:h-[16px] text-white ml-[24px] sm:ml-[30px] mt-[16px]'>
                Here are the Tech’s used
            </p>
        </div>
    )
}

export default Card