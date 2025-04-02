import {createStore} from 'redux';
import initialState from "./initialState";
import shortid from "shortid";
import {strContains} from "../utils/strContains";


export const getFilteredCards = ({ cards, searchString }, columnId) => {
  console.log("text", searchString, columnId);
  return cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString))};

export const getAllColumns = (state) => state.columns;
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const searchFrom = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

const reducer = (state, action) => {
  if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]}
  if(action.type==='ADD_CARD') return {...state, cards: [...state.cards,{...action.payload, id: shortid() }]};
  if(action.type==='UPDATE_SEARCHSTRING') return {...state,  searchString: action.payload};
  return state;
};


const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;