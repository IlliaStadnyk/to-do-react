import styles from './Card.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCard, toggleCardFavorite} from "../../redux/store";
import clsx from 'clsx'

const Card = props => {
    const dispatch = useDispatch();
    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(props.cardId));
    };
    const card = useSelector(state => getCard(state, props.cardId));
    console.log(props);
    return(
        <li className={styles.card}>
            <span>{props.title}</span>
            <button
                onClick={handleToggleFavorite}
                className={clsx(styles.favoriteButton, 'fa', {
                    'fa-star': card.isFavorite,
                    'fa-star-o': !card.isFavorite,
                })}
                aria-label="Toggle favorite"
            />
        </li>
    );
};

export default Card