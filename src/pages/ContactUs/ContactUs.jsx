import HeadingBanner from "../../components/Headings/HeadingBanner";
import ContactDetailsCardSection from "./partials/ContactDetailsCardSection";
import MapAndFormSection from "./partials/MapAndFormSection";

const ContactUs = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="Contact Us" />

        <MapAndFormSection />

        <ContactDetailsCardSection />
      </main>
    </>
  );
};

export default ContactUs;
