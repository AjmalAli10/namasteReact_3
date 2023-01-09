import "./Header.css"
Header = () =>(
        <div className="heading">
        <img src="https://img.icons8.com/clouds/150/null/react.png" alt="react-logo" className="logo"/>
        <form className="form">
        <input type="search" placeholder="Search..." className="input-search" />
        <img src="https://img.icons8.com/ios-glyphs/60/null/search--v1.png" className="search-icon"/>
        </form>
        <img src="https://img.icons8.com/plasticine/100/null/name.png" alt="user-icon" width="80" height="80" className="user-icon"/>
        </div>
    )
export default Header;