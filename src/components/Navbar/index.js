import "./Navbar.css";

const lngs = {
    cn: { nativeName: "中文"},
    en: { nativeName: "English"}
}

const Navbar = () => {

    return (
    <nav className="nav__container">
        <h2>隔离使用手册</h2>
        <ul>
            {
                Object.keys(lngs).map(lng => (
                    <li key={lng}><button className="btn__lng">{lngs[lng].nativeName}</button></li>
                ))
            }
        </ul>
    </nav>
    )
}


export default Navbar;