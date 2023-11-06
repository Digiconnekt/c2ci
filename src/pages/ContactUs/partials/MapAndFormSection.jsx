import MainHeading from "../../../components/Headings/MainHeading";

const MapAndFormSection = () => {
  const textInputClasses =
    "text-sm input input-bordered w-full bg-[#F8FAFC] border-[#E7E5EA]";
  const textareaInputClasses =
    "textarea textarea-bordered w-full h-28 resize-none bg-[#F8FAFC] border-[#E7E5EA]";

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading heading="Have some Questions?" align="center" />

        <div className="grid grid-cols-12 items-center mt-8 gap-y-10 lg:gap-10">
          <div className="col-span-12 lg:col-span-6 h-full hidden lg:block bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998878.862801926!2d-105.36551738129808!3d31.07020547482923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sin!4v1699004697027!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] lg:h-full"
            ></iframe>
          </div>
          <div className="col-span-12 lg:col-span-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full p-8 rounded-xl">
            <div className="mb-7">
              <input
                type="text"
                placeholder="Your Name"
                className={textInputClasses}
                required
              />
            </div>
            <div className="mb-7">
              <input
                type="text"
                placeholder="Your Phone"
                className={textInputClasses}
                required
              />
            </div>
            <div className="mb-7">
              <input
                type="text"
                placeholder="Your Email"
                className={textInputClasses}
                required
              />
            </div>
            <div className="mb-7">
              <textarea
                className={textareaInputClasses}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button className="bg-c-blue-dark text-white w-full p-3 rounded-md shadow-xl hover:shadow-none transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-full lg:hidden bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998878.862801926!2d-105.36551738129808!3d31.07020547482923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sin!4v1699004697027!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] lg:h-full"
        ></iframe>
      </div>
    </>
  );
};

export default MapAndFormSection;
