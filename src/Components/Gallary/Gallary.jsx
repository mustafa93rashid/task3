import "./Gallary.css";
import { GalleryData } from "../../Data/GalleryData";
import GallaryCard from "../GallaryCard/GallaryCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import { GalleryTabData } from "../../Data/GalleryData";
import { useState, useEffect } from "react";
import { SectionHeaders } from "../../Data/SectionHeadersData";

const Gallary = () => {
  // Load the last active tab from localStorage or default to "All"
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeGalleryTab") || "All";
  });

  // Save the current active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("activeGalleryTab", activeTab);
  }, [activeTab]);

  // Filter gallery data based on the selected tab
  const filteredGallery =
    activeTab === "All"
      ? GalleryData
      : GalleryData.filter((item) => item.title === activeTab);

  return (
    <div className="px-162">
      {/* Section title */}
      <TitleComponent
        btnContnet={SectionHeaders.gallery.btnContent}
        title={SectionHeaders.gallery.title}
        descrption={SectionHeaders.gallery.description}
      />

      <div className="MR-allGalleryCard">
        {/* Tabs */}
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

        {/* Cards */}
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
