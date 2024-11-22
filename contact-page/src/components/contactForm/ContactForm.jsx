import { FaPhone } from "react-icons/fa";
import Buttons from "../buttons/Buttons";
import styles from "./ContactForm.module.css";
import { RiMessage2Fill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.Contact_form}>
        <div className={styles.top_btn}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<RiMessage2Fill fontSize="24px" />}
          ></Buttons>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<FaPhone fontSize="24px" />}
          ></Buttons>
        </div>
        <Buttons
          text="VIA SUPPORT EMAIL"
          isOutline={true}
          icon={<MdOutlineMail fontSize="24px" />}
        ></Buttons>
        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="comments">Comments</label>
            <textarea name="comments" id=""></textarea>
          </div>
          <Buttons
            text="submit"
            isOutline={true}
            icon={<GoArrowRight fontSize="24px" />}
          ></Buttons>
        </form>
      </div>

      <div className={styles.Contact_img}>
        <div>
          <img src="./images/Service 24_7.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
