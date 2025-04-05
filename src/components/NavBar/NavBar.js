import styles from "./NavBar.module.scss";
const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.icon}>
                <span className={' fa fa-tasks'}/>
            </div>
            <div className={styles.links}>
                <a  href="/">Home</a>
                <a  href="/favorite">Favorite</a>
                <a  href="/about">About</a>
            </div>
        </nav>

    )
}

export default NavBar;