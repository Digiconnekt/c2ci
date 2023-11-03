import { BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const headerNavLinks = [
  {
    title: "Home",
    slug: "/",
    subMenus: false,
  },
  {
    title: "About Us",
    slug: "/about-us",
    subMenus: false,
  },
  {
    title: "Services",
    slug: "/services",
    subMenus: true,
    subMenuLinks: [
      {
        title: "AI & ML",
        slug: "/services/ai-ml",
      },
      {
        title: "SAP",
        slug: "/services/sap",
      },
      {
        title: "Blockchain",
        slug: "/services/blockchain",
      },
      {
        title: "Cloud Computing",
        slug: "/services/cloud-computing",
      },
    ],
  },
  {
    title: "Contact Us",
    slug: "/contact-us",
    subMenus: false,
  },
];

export const socialMediaLinks = [
  {
    icon: FaFacebookF,
    bgColor: "from-blue-500 to-blue-700",
    href: "/facebook",
  },
  {
    icon: BsInstagram,
    bgColor: "from-pink-500 to-purple-700",
    href: "/instagram",
  },
  {
    icon: FaLinkedinIn,
    bgColor: "from-blue-400 to-blue-600",
    href: "/linkedin",
  },
  {
    icon: BsWhatsapp,
    bgColor: "from-green-500 to-green-700",
    href: "/whatsapp",
  },
  {
    icon: BsTwitter,
    bgColor: "from-blue-400 to-blue-500 to-white",
    href: "/twitter",
  },
];

// desktop
export const desktopLinkDefaultClasses =
  "block text-md transition-all py-3 text-black font-semibold border-b-[2px] border-transparent hover:text-c-blue-dark";
export const desktopLinkActiveClasses =
  "block text-md transition-all py-3 text-c-blue-dark font-semibold border-b-[2px] border-c-blue-dark";

export const desktopSubLinkDefaultClasses =
  "block text-sm font-medium py-1 px-2 rounded-md hover:text-white hover:bg-c-blue-dark transition-all";
export const desktopSubLinkActiveClasses =
  "block text-sm font-medium py-1 px-2 rounded-md text-white bg-c-blue-dark transition-all";

// mobile
export const mobLinkDefaultClasses =
  "block text-lg font-medium py-2 px-4 mb-4 rounded-md hover:text-white hover:bg-c-blue-dark transition-all";
export const mobLinkActiveClasses =
  "block text-lg font-medium py-2 px-4 mb-4 rounded-md text-white bg-c-blue-dark !active:bg-c-blue-dark !focus:bg-c-blue-dark transition-all";

export const mobSubLinkDefaultClasses =
  "block text-md font-medium py-2 px-4 mb-4 rounded-md hover:text-white hover:bg-c-blue-dark transition-all";
export const mobSubLinkActiveClasses =
  "block text-md font-medium py-2 px-4 mb-4 rounded-md text-white bg-c-blue-dark transition-all";
