import shortid from "shortid";

export const getCard = ({cards}, cardId) => cards.find(card => card.id === cardId);


const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName("ADD_CARD");
const TOGGLE_CARD_FAVORITE = createActionName("TOGGLE_CARD_FAVORITE");
const REMOVE_CARD = createActionName("REMOVE_CARD");

export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const removeCard = cardId => ({ type: REMOVE_CARD, cardId });

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        case REMOVE_CARD:
            console.log(statePart);
            return [
                ...statePart.filter(card => card.id !== action.cardId)
            ];
        default:
            return statePart;
    }
}

export default cardsReducer;