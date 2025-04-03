import profile from "./assets/Images/profile.png";
import stories from "./assets/Images/stories.png";
import image from "./assets/Images/image.png";
import memories from "./assets/Images/memories.png";
function Post() {
  return (
    <div className="w-[100%] h-[110px] bg-white rounded-[15px] ">
        <div className="flex items-center space-x-[20px] pt-[15px] px-[20px]">
            <img src={profile} alt="Profile" className="w-10 h-10 rounded-full " />
            <input
                type="text"
                placeholder="What's happening?"
                className="w-[calc(100%-20px)]  h-[40px] bg-[#DFE1E5] rounded-[10px] p-2 px-3 font-bold placeholder:font-bold placeholder-gray-500 border-none outline-none"/>
        </div>
        <div className="flex  items-center px-[20px] mt-[10px]">
            <button className=" p-2 px-[10px] rounded flex items-center gap-2 rounded-[30px] ">
                <img src={image} alt="Icon" className="w-5 h-5" />
                <p className="font-semibold text-[#737373] text-[11px] hover:text-[#35383C] transition duration-300 ease-in-out">Upload Image</p>
            </button>
            <button className="p-2 rounded flex items-center gap-2 rounded-[30px] ">
                <img src={memories} alt="Icon" className="w-5 h-5" />
                <p className="font-semibold text-[#737373] text-[11px] hover:text-[#35383C] transition duration-300 ease-in-out">Upload Memories</p>
            </button>
            <button className="p-2 rounded flex items-center gap-2 rounded-[30px] ">
                <img src={stories} alt="Icon" className="w-5 h-5" />
                <p className="font-semibold text-[#737373] text-[11px] hover:text-[#35383C] transition duration-300 ease-in-out">Share Stories</p>
            </button>
            <button className="bg-[#ED6A5E] text-white font-semibold text-[18px] rounded-[10px] px-[20px] ml-[46px] hover:bg-[#FF3131] transition duration-300 ease-in-out">
                Post</button>
        </div>
    </div>
  );
}
export default Post;