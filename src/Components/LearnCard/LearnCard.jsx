import'./LearnCard.css'

const LearnCard = ({ image, title, desc }) => {
  return (
    <div className='MR-learnCardContainer' data-aos="flip-left">
      
      {/* Displaying the image representing the learning area */}
      <img src={image} alt="" />

      {/* Title and description container */}
      <div className="MR-learnTitleAndPar">
        <h3 className='fs-28'>{title}</h3> {/* Title of the learning item */}
        <p className='fs-20'>{desc}</p>    {/* Description of what students learn */}
      </div>

      {/* Decorative strip at the bottom of the card (for design purposes) */}
      <div className='MR-Strip'></div>
    </div>
  )
}

export default LearnCard