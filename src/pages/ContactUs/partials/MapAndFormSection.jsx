import MainHeading from "../../../components/Headings/MainHeading";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../../helpers/framerMotion";
import { useState } from "react";
import axiosInstance from "../../../helpers/axiosInstance";
import { VscLoading } from "react-icons/vsc";
import toast from "react-hot-toast";

const MapAndFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const formDataOnChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formDataSubmitFn = async () => {
    try {
      setIsLoading(true);
      await axiosInstance.post("/forms/contact", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      toast.success("Message sent successfully!");
    } catch (error) {
      setErrors(error?.response?.data?.errors);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formDataSubmitHandler = (e) => {
    e.preventDefault();
    formDataSubmitFn();
  };

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading heading="Have some Questions?" align="center" />

        <div className="grid grid-cols-12 items-center mt-8 gap-y-10 lg:gap-10">
          <motion.div
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
            className="col-span-12 lg:col-span-6 h-full hidden lg:block bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998878.862801926!2d-105.36551738129808!3d31.07020547482923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sin!4v1699004697027!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] lg:h-full"
            ></iframe>
          </motion.div>
          <motion.form
            onSubmit={formDataSubmitHandler}
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
            className="col-span-12 lg:col-span-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full p-8 rounded-xl"
          >
            <div className="mb-7">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className={`text-sm input input-bordered w-full bg-[#F8FAFC] ${
                  errors?.name ? "border-red-500" : "border-[#E7E5EA]"
                }`}
                required
                value={formData.name}
                onChange={formDataOnChangeHandler}
              />
              {errors?.name && (
                <span className="mt-0.5 text-sm p-1 text-red-500">
                  {errors.name[0]}
                </span>
              )}
            </div>
            <div className="mb-7">
              <input
                name="phone"
                type="text"
                placeholder="Your Phone"
                className={`text-sm input input-bordered w-full bg-[#F8FAFC] ${
                  errors?.phone ? "border-red-500" : "border-[#E7E5EA]"
                }`}
                required
                value={formData.phone}
                onChange={formDataOnChangeHandler}
              />
              {errors?.phone && (
                <span className="mt-0.5 text-sm p-1 text-red-500">
                  {errors.phone[0]}
                </span>
              )}
            </div>
            <div className="mb-7">
              <input
                name="email"
                type="text"
                placeholder="Your Email"
                className={`text-sm input input-bordered w-full bg-[#F8FAFC] ${
                  errors?.email ? "border-red-500" : "border-[#E7E5EA]"
                }`}
                required
                value={formData.email}
                onChange={formDataOnChangeHandler}
              />
              {errors?.email && (
                <span className="mt-0.5 text-sm p-1 text-red-500">
                  {errors.email[0]}
                </span>
              )}
            </div>
            <div className="mb-7">
              <textarea
                name="message"
                className={`textarea textarea-bordered w-full h-28 resize-none bg-[#F8FAFC] ${
                  errors?.message ? "border-red-500" : "border-[#E7E5EA]"
                }`}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={formDataOnChangeHandler}
              ></textarea>
              {errors?.message && (
                <span className="mt-0.5 text-sm p-1 text-red-500">
                  {errors.message[0]}
                </span>
              )}
            </div>
            <div>
              <button
                disabled={isLoading}
                className={`bg-c-blue-dark text-white w-full p-3 rounded-md shadow-xl hover:shadow-none transition-all flex items-center justify-center gap-2 ${
                  isLoading && "cursor-not-allowed opacity-70"
                }`}
              >
                Submit
                {isLoading && <VscLoading className="animate-spin" />}
              </button>
            </div>
          </motion.form>
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
