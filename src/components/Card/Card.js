import styles from './Card.module.scss'
import {useDispatch, useSelector} from "react-redux";
import clsx from 'clsx'
import {getCard, removeCard, toggleCardFavorite} from "../../redux/cardsReducer";

const Card = props => {
    const dispatch = useDispatch();
    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(props.cardId));
    };
    const handleRemoveCard = () => {
        dispatch(removeCard(props.cardId));
    }
    const card = useSelector(state => getCard(state, props.cardId));
    console.log(props);
    return(
        <li className={styles.card}>
            <span>{props.title}</span>
            <div>
                <button
                    onClick={handleToggleFavorite}
                    className={clsx(styles.favoriteButton, 'fa', {
                        'fa-star': card.isFavorite,
                        'fa-star-o': !card.isFavorite,
                    })}
                    aria-label="Toggle favorite"
                />
                <button onClick={handleRemoveCard}
                        className={clsx(styles.removeButton, 'fa', 'fa-trash')}
                        aria-label="Remove card"/>
            </div>
        </li>
    );
};

export default Card