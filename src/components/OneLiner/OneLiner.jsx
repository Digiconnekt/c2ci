/* eslint-disable react/prop-types */

const OneLiner = ({ heading }) => {
  return (
    <>
      <section className="py-14 bg-c-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-5xl leading-snug font-semibold">
            {heading.map((elem, i) => (
              <span key={i} className={elem.color}>
                {elem.text}
              </span>
            ))}
          </h2>
        </div>
      </section>
    </>
  );
};

export default OneLiner;
