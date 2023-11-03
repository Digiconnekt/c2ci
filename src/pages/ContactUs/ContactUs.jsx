import HeadingBanner from "../../components/HeadingBanner/HeadingBanner";
import ContactDetailsCardSection from "./partials/ContactDetailsCardSection";
import MapAndFormSection from "./partials/MapAndFormSection";

const ContactUs = () => {
  const headingBannerLinks = [{ text: "Contact Us", to: "/contact-us" }];

  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="Contact Us" links={headingBannerLinks} />

        <MapAndFormSection />

        <ContactDetailsCardSection />
      </main>
    </>
  );
};

export default ContactUs;
