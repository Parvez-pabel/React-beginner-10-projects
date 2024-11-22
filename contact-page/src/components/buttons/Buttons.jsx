import { FaPhone } from "react-icons/fa";
import styles from "./button.module.css";
import { RiMessage2Fill } from "react-icons/ri";
const Buttons = (props) => {
  const { isOutline, icon, text } = props; //object destructuring

  return (
    <div>
      <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {text}
        {icon}
      </button>
    </div>
  );
};

export default Buttons;
