

const AppNav = () => {
    return (
        <div className="header">
            <nav className="nav">
                <div>
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>
                <div>
                    <ul>
                        <li><a href="#">Home</a> </li>
                        <li><a href="#">New Arrivals</a> </li>
                        <li><a href="#">Mens</a> </li>
                        <li><a href="#">Womans</a> </li>
                        <li><a href="#">Kids</a> </li>
                        <li><a href="#">About us</a> </li>
                        <li><a href="#">Contact us</a> </li>
                    </ul>
                </div>
                <div>
                    <button className="primary-btn">
                        Sign In
                    </button>

                    </div>
            </nav>
            

            
        </div>
    );
};

export default AppNav;