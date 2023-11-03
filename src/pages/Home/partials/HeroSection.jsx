const HeroSection = () => {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?w=1380&t=st=1699010416~exp=1699011016~hmac=a41e0bee17001e1f05add0c6655b731b5aad475661e4da4a4e6deda5fa274395)",
          height: "calc(100vh - 88px)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
