import HeadingBanner from "../../components/HeadingBanner/HeadingBanner";

const AboutUs = () => {
  const headingBannerLinks = [{ text: "About Us", to: "/about-us" }];

  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="About Us" links={headingBannerLinks} />

        <section>content</section>
      </main>
    </>
  );
};

export default AboutUs;
