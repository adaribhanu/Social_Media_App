import Navbar from "./nav";
import Feed from "./feed";
import Post from "./post";
import SpeedNav from "./speednav";
function Home() {
    return (
        <>
        <Navbar/>
        <div className="p-[20px] flex">
            <div className="w-[17.5%] h-[100%] bg-[#EBEBEB] mr-[15px]">
                <SpeedNav/>
            </div>
            <div className="w-[60%] h-[100%] bg-[#EBEBEB] flex ml-[25px] mr-[40px]">
                <Feed/>
            </div>
        </div>
        </>
    );
}

export default Home;