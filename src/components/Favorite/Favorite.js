import PageTitle from "../PageTitle/PageTitle";
import {useSelector} from "react-redux";
import {getAllFavorites} from "../../redux/store";
import styles from "./Favorite.module.scss";
import Card from "../Card/Card";
const Favorite = () => {
    const favoriteCards = useSelector(getAllFavorites)
    console.log(favoriteCards);
    return (
        <div className={styles.favoritePage}>
            <PageTitle>Favorite</PageTitle>

            {favoriteCards.length > 0 ? (
                <div className={styles.favoriteContainer}>
                    <ul className={styles.cards}>
                        {favoriteCards.map(card => (
                            <Card key={card.id} cardId={card.id} title={card.title} />
                        ))}
                    </ul>
                </div>
            ) : (
                <p className={styles.noFavorites}>No favorite cards yet 😢</p>
            )}
        </div>
    )
}

export default Favorite