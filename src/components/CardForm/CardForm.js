import styles from './CardForm.module.scss';
import {useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit =e=>{
        e.preventDefault();
        props.action({title:title}, props.columnId);
        setTitle(title);
    }
    return (
        <form onSubmit = {handleSubmit} className={styles.cardForm}>
            <TextInput onChange={e => setTitle(e.target.value)} value={title} type="text" />
            <Button>Add card</Button>
        </form>
    );
}

export default CardForm;