import { useNavigate } from "react-router-dom";
const Showcase = ({img, title, desc, button}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Navigate to the "/Category" route
    navigate("/Reserve");
  };
  return (
    <div className='text-[#fcf2de] flex flex-col items-center p-2 gap-2 md:w-1/3 pb-6 h-full'>
  <img className='rounded p-8' src={img} alt="" />
  <h3 className="text-xl">{title}</h3>
  <p className='text-[12px] text-center p-8 overflow-hidden max-h-[3em]'>{desc}</p>
  <button
        className="px-6 p-2 bg-[#fcf2de] uppercase text-[#d27548] font-normal rounded hover:bg-orange-300 ease-linear hover:text-[#000000cd]"
        onClick={handleButtonClick}
      >
        {button}
      </button>
</div>

  )
}

export default Showcase