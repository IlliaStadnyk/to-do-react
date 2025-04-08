import styles from './CardForm.module.scss';
import {useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import {useDispatch} from "react-redux";
import {addCard} from "../../redux/cardsReducer";

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit =e=>{
        e.preventDefault();
        // props.action({title:title}, props.columnId);
        dispatch(addCard({ title,  columnId: props.columnId }));
        setTitle("");
    }
    return (
        <form onSubmit = {handleSubmit} className={styles.cardForm}>
            <TextInput onChange={e => setTitle(e.target.value)} value={title} type="text" />
            <Button>Add card</Button>
        </form>
    );
}

export default CardForm;