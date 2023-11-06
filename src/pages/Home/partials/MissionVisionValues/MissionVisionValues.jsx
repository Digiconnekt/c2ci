import { useState } from "react";
import ContentLayout from "./ContentLayout";

const tabs = ["mission", "vision", "values"];

const MissionVisionValues = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const toggleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="py-16 bg-c-blue-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tabs">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={`tab tab-bordered flex-1 uppercase text-md sm:text-lg font-semibold h-16 hover:text-c-blue-dark transition-all
                  ${
                    activeTab === tab && "border-c-blue-dark text-c-blue-dark"
                  }`}
                onClick={() => toggleActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <ContentLayout activeTab={activeTab} />
        </div>
      </section>
    </>
  );
};

export default MissionVisionValues;
