import styles from './Column.module.scss';
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import {useSelector} from "react-redux";
import {getFilteredCards} from "../../redux/store";

const Column = props => {
    const cards = useSelector(state => getFilteredCards(state, props.id));
    return (
        <article className={styles.column}>

            <h2 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}/>
                {props.title}
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title}/>)}
                </ul>
                <CardForm columnId={props.id} ></CardForm>
            </h2>
        </article>
    )
}

export default Column