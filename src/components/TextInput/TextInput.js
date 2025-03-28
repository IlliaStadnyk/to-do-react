import styles from './TextInput.module.scss'

const TextInput = props => {
    return (
        <input className={styles.input} type={"text"} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    )
};
export default TextInput;