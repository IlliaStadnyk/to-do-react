import {combineReducers, createStore} from 'redux';
import initialState from "./initialState";
import {strContains} from "../utils/strContains";
import listsReducer from "./listsReducer";
import columnsReducer from "./columnsReducer";
import cardsReducer from "./cardsReducer";
import searchStringReducer from "./searchStringReducer";


export const getFilteredCards = ({ cards, searchString }, columnId) => {
  console.log("getFilteredCards", cards);
  return cards.filter(card => card.columnId === columnId && strContains(card.title, searchString))};

export const getAllFavorites = state => state.cards.filter(card => card.isFavorite === true);

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers)


const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;