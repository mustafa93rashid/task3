import './NavigateCard.css'
import { FaArrowRight } from "react-icons/fa";


const NavigateCard = ({title, desc}) => {
  return (
    <div className='Mr-NavigateCardContainer' data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
        <h3 className='fs-48'>{title}</h3>
        <img src="/task3/images/Navigate/Container (1).svg" alt="" />
        <div className='MR-line'></div>
        <p className='fs-20'>{desc} </p>
        <button className='fs-20'>Learn More <FaArrowRight />
        </button>
    </div>
  )
}

export default NavigateCard