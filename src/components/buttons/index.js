import Arrow from '../images/Arrow.png'

export const AllProjectsButton = () => {

    return (
        <a href='/Projects' className="w-[297px] py-[18px] px-[51px] flex justify-center items-center gap-[12px] bg-gray-300 hover:bg-gray-500 transition duration-300 ease-in-out">
            <img src={Arrow} alt='arrow' /> All Projects
        </a>
    )
}

export const ContactMeButton = () => {

    return (
        <a href='/Contact' className="w-[297px] py-[18px] px-[51px] flex justify-center items-center gap-[12px] bg-gray-300 hover:bg-gray-500 transition duration-300 ease-in-out">
            <img src={Arrow} alt='arrow' /> Contact Me
        </a>
    )
}

export const SendMessage = () => {

    return (
        <a className="w-[297px] py-[18px] px-[51px] flex justify-center items-center gap-[12px] bg-gray-300 hover:bg-gray-500 transition duration-300 ease-in-out">
            <img src={Arrow} alt='arrow' /> Contact Me
        </a>
    )
} 