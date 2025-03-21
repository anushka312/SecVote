import ElectionProgress from "@/components/home/ElectionProgress.jsx"
import Slider from "@/components/home/Slider.jsx"

const Home = () => {

    return (
        <div className="bg-[#121212] min-h-screen flex flex-col">
            <div className="bg-red-900">
                <Slider />
            </div>
            <div className="">
                <ElectionProgress />
            </div>

        </div>
    )
}

export default Home