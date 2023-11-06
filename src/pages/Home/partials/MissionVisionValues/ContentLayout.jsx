import ButtonHeading from "../../../../components/Headings/ButtonHeading";
import MainHeading from "../../../../components/Headings/MainHeading";

/* eslint-disable react/prop-types */
const ContentLayout = ({ activeTab }) => {
  let content;

  const visionContent = {
    title: "Vision",
    heading: "C2Ci Vision",
    text: "vision C2C Innovations has over 40 years built a formidable experience in delivering Domain focused technology driven military hardware and software products and services to the global markets.The company has delivered successfully over 500 projects driven through innovation, high quality project management and built a reputation of being client responsive and deliver cutting edge solutions.",
    img: "https://img.freepik.com/free-photo/vision-mission-planning-aspirations-process-concept_53876-139704.jpg?w=1060&t=st=1699249591~exp=1699250191~hmac=e7b6c899602cf97e80e2a98b798c63f66ce57b0856f7c4c1d115ad9a12f844c1",
  };

  const missionContent = {
    title: "Mission",
    heading: "C2Ci Mission",
    text: "mission C2C Innovations has over 40 years built a formidable experience in delivering Domain focused technology driven military hardware and software products and services to the global markets.The company has delivered successfully over 500 projects driven through innovation, high quality project management and built a reputation of being client responsive and deliver cutting edge solutions.",
    img: "https://img.freepik.com/free-photo/vision-mission-planning-aspirations-process-concept_53876-139704.jpg?w=1060&t=st=1699249591~exp=1699250191~hmac=e7b6c899602cf97e80e2a98b798c63f66ce57b0856f7c4c1d115ad9a12f844c1",
  };

  const valuesContent = {
    title: "Values",
    heading: "C2Ci Values",
    text: "Values C2C Innovations has over 40 years built a formidable experience in delivering Domain focused technology driven military hardware and software products and services to the global markets.The company has delivered successfully over 500 projects driven through innovation, high quality project management and built a reputation of being client responsive and deliver cutting edge solutions.",
    img: "https://img.freepik.com/free-photo/vision-mission-planning-aspirations-process-concept_53876-139704.jpg?w=1060&t=st=1699249591~exp=1699250191~hmac=e7b6c899602cf97e80e2a98b798c63f66ce57b0856f7c4c1d115ad9a12f844c1",
  };

  switch (activeTab) {
    case "vision":
      content = visionContent;
      break;
    case "mission":
      content = missionContent;
      break;
    case "values":
      content = valuesContent;
      break;

    default:
      content = visionContent;
      break;
  }

  return (
    <>
      <div className="grid grid-cols-12 items-center md:gap-10 gap-y-10 p-10">
        <div className="col-span-12 lg:col-span-7 md:col-span-12">
          <ButtonHeading heading={content.title} align={"left"} />

          <MainHeading heading={content.heading} align={"left"} />

          <div className="mt-3">
            <p>{content.text}</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 md:col-span-12">
          <img src={content.img} alt={content.heading} />
        </div>
      </div>
    </>
  );
};

export default ContentLayout;
