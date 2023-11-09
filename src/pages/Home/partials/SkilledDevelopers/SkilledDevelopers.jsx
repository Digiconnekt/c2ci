import MainHeading from "../../../../components/Headings/MainHeading";
import ServicesCard from "../../../Services/partials/ServicesCard";

const SkilledDevelopers = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading
          heading={
            "Skilled Developers with Industry Expertise, Available at Your Service"
          }
          align={"center"}
        />

        <ServicesCard />
      </section>
    </>
  );
};

export default SkilledDevelopers;
