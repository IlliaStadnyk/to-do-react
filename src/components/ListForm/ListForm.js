import styles from "./ListForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {AddList} from "../../redux/store";
import {useState} from "react";


const ListForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddList({title, description}));
        setTitle('');
        setDescription('');
    }
    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <span>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <span>Description:</span> <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            <Button>Add List</Button>
        </form>
    )
}
export default ListForm;