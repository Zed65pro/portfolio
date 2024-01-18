import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
    link: "https://twitter.com/elonmusk",
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
    link: "https://www.linkedin.com/in/zaid-ibaisi-35592115b",
  },
  {
    name: "Github",
    icon: iconStyle(FaGithub),
    link: "https://github.com/Zed65pro",
  },
];
