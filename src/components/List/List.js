import styles from './List.module.scss';
import Column from "../Column/Column";
const List = () => {
    return (
        <div >
            <header className={styles.header}>
                <p className={styles.title}>Things to do<span>soon</span></p>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <Column title="Books" icon="book" />;
                <Column title="Movie" icon="film" />;
                <Column title="Games" icon="gamepad"/>;
            </section>
        </div>
    )
}

export default List;