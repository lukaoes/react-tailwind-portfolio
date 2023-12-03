import rpLogoWhite from '../../images/rpLogoWhite.png'
import HTML from '../../images/HTML.png'
import CSS from '../../images/CSS.png'
import JAVASCRIPT from '../../images/JAVASCRIPT.png'
import REACT from '../../images/REACT.png'
import NODE from '../../images/NODE.png'
import CHROME from '../../images/CHROME.png'
import FIGMA from '../../images/FIGMA.png'
import NPM from '../../images/NPM.png'
import GIT from '../../images/GIT.png'
import VS from '../../images/VS.png'

const Home = () => {
    return (
        <div className="mx-auto max-w-[1440px] min-w-[372px]">
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
                        YOUR NAME
                    </h1>
                    <p className='text-2xl w-[160px] sm:w-300 lg:w-full mx-auto text-center tracking-wider'>
                        WEB-DESIGNER
                    </p>
                </div>
            </div>

            <div className='bg-white pt-[60px] mb-[60px]'>
                <div className='w-[298px] sm:w-[560px] mx-auto'>

                    {/* about me */}

                    <div className='mb-[20px] '>
                        <h2 className='text-24 font-bold'>
                            About me
                        </h2>
                    </div>
                    <div className='mb-[60px]'>
                        <p className='text-16'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </p>
                    </div>

                    {/* skills */}

                    <div className='mb-[20px]  '>
                        <h2 className='text-24 font-bold'>
                            My Skills
                        </h2>
                    </div>
                    <div className='flex justify-between sm:flex-col'>
                        <div className='flex flex-col justify-between sm:flex-row gap-[10px] w-[103px] sm:w-[560px] h-[74px] sm:h-[54px]'>
                            <div>
                                <img src={HTML} alt="HTML" className='inline mr-[5px]' />
                                <span>HTML</span>
                            </div>
                            <div>
                                <img src={CSS} alt="CSS" className='inline mr-[5px]' />
                                <span>CSS</span>
                            </div>
                            <div>
                                <img src={JAVASCRIPT} alt="JAVASCRIPT" className='inline mr-[5px]' />
                                <span>JAVASCRIPT</span>
                            </div>
                            <div>
                                <img src={REACT} alt="REACT" className='inline mr-[5px]' />
                                <span>REACT</span>
                            </div>
                            <div>
                                <img src={NODE} alt="NODE" className='inline mr-[5px]' />
                                <span>NODE</span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between sm:flex-row gap-[10px] w-[103px] sm:w-[560px] h-[74px] sm:h-[54px]'>
                            <div>
                                <img src={CHROME} alt="CHROME" className='inline mr-[5px]' />
                                <span>CHROME</span>
                            </div>
                            <div>
                                <img src={FIGMA} alt="FIGMA" className='inline mr-[5px]' />
                                <span>FIGMA</span>
                            </div>
                            <div>
                                <img src={NPM} alt="NPM" className='inline mr-[5px]' />
                                <span>NPM</span>
                            </div>
                            <div>
                                <img src={GIT} alt="GIT" className='inline mr-[5px]' />
                                <span>GIT</span>
                            </div>
                            <div>
                                <img src={VS} alt="VS" className='inline mr-[5px]' />
                                <span>VS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home