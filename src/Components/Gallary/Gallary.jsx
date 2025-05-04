import "./Gallary.css";
import { GalleryData } from "../../Data/GalleryData";
import GallaryCard from "../GallaryCard/GallaryCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import { GalleryTabData } from "../../Data/GalleryData";
import { useState } from "react";

const Gallary = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("All");

  // Filter gallery data based on the selected tab
  const filteredGallery =
    activeTab === "All"
      ? GalleryData
      : GalleryData.filter((item) => item.title === activeTab);

  return (
    <div className="px-162">
      {/* Section title with button, heading and description */}
      <TitleComponent
        btnContnet="Our Gallery"
        title="Our Rooms Gallery"
        descrption="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />

      <div className="MR-allGalleryCard">
        {/* Tabs to filter gallery items */}
        <div className="MR-galleryTabsContainer">
          {GalleryTabData.map((tab, index) => (
            <button
              key={index}
              className={`fs-20-6 MR-tabButton ${
                activeTab === tab.name ? "MR-activeTab" : ""
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Render a GallaryCard for each filtered gallery item */}
        {filteredGallery.map((data, index) => (
          <GallaryCard
            key={index}
            title={data.title}
            desc={data.desc}
            images={data.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallary;
