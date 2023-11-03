import HeadingBanner from "../../components/HeadingBanner/HeadingBanner";

const AiMl = () => {
  const headingBannerLinks = [{ text: "About Us", to: "/about-us" }];

  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="AI & ML" links={headingBannerLinks} />

        <section>content</section>
      </main>
    </>
  );
};

export default AiMl;
