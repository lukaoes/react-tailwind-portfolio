import { SendMessage } from "../../buttons"
import Header from "../../header"

const Contact = () => {
    const sendToHeader = {
        first: 'CONTACT ME',
        second: 'SAY HELLO TO ME'
    }
    return (
        <div>
            <Header sendToHeader={sendToHeader} />
            <div className='bg-white pt-[60px] '>
                <div className='w-[298px] lg:w-[1200px] mx-auto'>
                    <div className='mb-[20px] '>
                        <h2 className='text-[24px] font-bold'>
                            Contact Me
                        </h2>
                    </div>
                    <div className='w-[298px] lg:w-[1200px]'>
                        <div className="lg:flex justify-between">
                            <div>
                                <h4 className='mb-[2px]'>
                                    Name
                                </h4>
                                <input type='text' className='w-[298px]' placeholder='Your Name' />
                                <div className="bg-black h-[2px] min-w-[298px] lg:w-[545px] mb-[45px]"></div>
                            </div>
                            <div>
                                <h4 className='mb-[2px]'>
                                    Email
                                </h4>
                                <input type='text' className='w-[298px]' placeholder='email@example.com' />
                                <div className="bg-black h-[2px] min-w-[298px] lg:w-[545px] mb-[45px]"></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='mb-[2px]'>
                                Nachricht
                            </h4>
                            <input type='text' className='w-[298px]' placeholder='Hello, my name is . . . ' />
                            <div className="bg-black h-[2px] min-w-[298px]  mb-[65px] lg:mb-[80px] lg:w-[1200px]"></div>
                        </div>
                        <div className='w-[298px] lg:w-[1200px] flex justify-center mx-auto mb-[60px] lg:mb-[100px]'>
                            <SendMessage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact