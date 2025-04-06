import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {searchFrom} from "../../redux/store";
const SearchForm = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const searchString = useSelector(state => state.searchString);
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(searchFrom(inputValue));
    }
    return (
        <form className={styles.searchForm} onSubmit = {handleChange}>
            <TextInput onChange={e => setInputValue(e.target.value)} placeholder="Search..." searchString={searchString} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm