const HeroSection = () => {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: "url(../../../images/home/hero.jpg)",
          height: "calc(100vh - 88px)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="text-5xl lg:text-7xl md:text-6xl font-bold lg:leading-snug">
              Your Partner for Seamless IT Solutions
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
