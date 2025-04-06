import styles from "./NavBar.module.scss";
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.icon}>
                <span className={' fa fa-tasks'}/>
            </div>

            <ul className={styles.links}>
                <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
                             to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
                             to='/favorite'>Favorite</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
                             to='/about'>About</NavLink></li>
            </ul>
        </nav>

    )
}

export default NavBar;