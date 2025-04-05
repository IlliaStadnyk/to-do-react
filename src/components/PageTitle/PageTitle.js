import styles from './PageTitle.module.scss';

const PageTitle = ({ children }) => {
    return (
        <div>
            <h2 className={styles.title}>{children}</h2>
        </div>
    )
}

export default PageTitle;