import { AiFillInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Giftedvision All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <SlSocialVkontakte />
        <RiTelegramLine />
      </p>
    </div>
  );
};

export default Footer;
