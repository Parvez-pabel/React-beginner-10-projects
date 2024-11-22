import styles from "./nav.module.css";
const AppNav = () => {
  return (
    <div className="div-shadow">
      <nav className={`${styles.navigation} container`}>
        <div>
          <img src="./images/Frame 2 1.png" alt="logo" />
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AppNav;
