const counterData = [
  {
    num: 10,
    title: "Years in Business",
  },
  {
    num: 120,
    title: "Years in Business",
  },
  {
    num: 400,
    title: "Years in Business",
  },
  {
    num: 250,
    title: "Years in Business",
  },
];

const NumCounter = () => {
  return (
    <>
      <section className="py-14 bg-c-blue-dark">
        <div className="max-w-5xl mx-auto grid grid-cols-12 items-center gap-10">
          {counterData.map((data, i) => (
            <div className="col-span-3" key={i}>
              <h3 className="text-center text-4xl font-bold text-white">
                {data.num}
                <span>+</span>
              </h3>
              <h4 className="text-lg text-center mt-1 text-gray-300">
                {data.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NumCounter;
