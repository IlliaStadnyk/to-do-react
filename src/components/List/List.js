import styles from './List.module.scss';
import Column from "../Column/Column";
import {useSelector} from "react-redux";
import ColumnForm from "../ColumnForm/ColumnForm";
import {Navigate, useParams} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import {getListById} from "../../redux/listsReducer";
import {getColumnsByList} from "../../redux/columnsReducer";

const List = () => {
    const {listId} = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId));
    console.log(listData);
    if(!listData) return <Navigate to="/" />
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column =>
                    <Column
                        key={column.id}
                        {...column}  />
                )}
            </section>
            <ColumnForm listId={listId} />
        </div>
    );
}

export default List;