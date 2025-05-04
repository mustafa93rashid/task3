import Slider from "../Slider/slider";
import "./GallaryCard.css";

const GallaryCard = ({ title, desc, images }) => {
  // Destructure navigation and visibility functions from the custom Slider hook
  // Parameters: total images, number of images on desktop (4), number on mobile (1)
  const { next, prev, getVisibleItems } = Slider(images.length, 4, 1);

  // Get the currently visible images to display in the slider
  const visibleImages = getVisibleItems(images);

  return (
    <div className="MR-galleryCardContainer" data-aos="fade-up"
    data-aos-duration="3000">
      {/* Image section of the card */}
      <div className="MR-galleryImage">
        {visibleImages.map((image, index) => (
          <img key={index} src={image} alt={`img-${index}`} />
        ))}
      </div>

      {/* Title and navigation buttons section */}
      <div className="MR-galleryCardTitleButton">
        <h3 className="fs-40">{title}</h3>
        <div className="MR-buttonContainer">
          {/* Button to go to previous slide */}
          <button onClick={prev}>
            <img src="task3/images/OurRoomsGallery/left.svg" alt="prev" />
          </button>
          {/* Button to go to next slide */}
          <button onClick={next}>
            <img src="task3/images/OurRoomsGallery/right.svg" alt="next" />
          </button>
        </div>
      </div>

      {/* Description paragraph */}
      <p className="fs-20 MR-galleryPargraph">{desc}</p>
    </div>
  );
};

export default GallaryCard;
