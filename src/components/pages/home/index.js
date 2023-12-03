import Header from '../../header'
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
import Card from '../../card'
import { ContactMeButton, AllProjectsButton } from '../../buttons'

const Home = () => {
    const sendToHeader = {
        first: 'YOUR NAME',
        second: 'WEB-DESIGNER'
    }
    return (
        <div>
            <Header sendToHeader={sendToHeader} />

            <div className='bg-white pt-[60px] '>
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
                    <div className='flex justify-between sm:flex-col mb-[60px] sm:mb-[100px]'>
                        <div className='flex flex-col justify-between sm:flex-row gap-[10px] w-[103px] sm:w-[560px]'>
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
            <div className='flex flex-col sm:flex-row sm:justify-between gap-[30px] w-[298px] sm:w-[1200px]  mx-auto mb-[38px] sm:mb-[80px]'>
                <Card />
                <Card />
                <Card />
            </div>
            <div className='mx-auto w-[297px] flex flex-col gap-[48px] mb-[60px]'>
                <AllProjectsButton />
                <ContactMeButton />
            </div>
        </div>

    )
}

export default Home