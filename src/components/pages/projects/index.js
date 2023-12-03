import { ContactMeButton } from "../../buttons"
import Card from "../../card"
import Header from "../../header"

const Projects = () => {

    const sendToHeader = {
        first: 'MY PROJECTS',
        second: 'MADE WITH LOVE'
    }

    return (
        <div>
            <Header sendToHeader={sendToHeader} />
            <div className="mx-auto w-[298px] sm:w-[1200px] mt-[60px]">
                <div className="flex flex-col sm:flex-row justify-between gap-[28px] sm:gap-[80px] mb-[28px] sm:mb-[80px]">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-[28px] sm:gap-[80px] mb-[28px] sm:mb-[80px]">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="mb-[58px] sm:mb-[80px] mx-auto w-[297px] ">
                    <ContactMeButton />
                </div>

            </div>

        </div>
    )
}

export default Projects