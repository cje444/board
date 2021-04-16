import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//action type
const SET_ARTICLE = "SET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";

//액션 생성 함수 만들기
const setArticle = createAction(SET_ARTICLE, (articles) => ({ articles }));
const addArticle = createAction(ADD_ARTICLE, (articles) => ({ articles }));

//initial state 만들기

const initialState = {
  articles: [
    {
      _id: "60799089a85ba36932c3355a",
      author: "author",
      comment: "comment",
      no: 19,
      title: "title",
    },
  ],
};

const articlesAPI = () => {
  return function (dispatch, getState, { history }) {
    const API = "http://spartacodingclub.shop/hh99/board/list";
    axios
      .get(API)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setArticle(result.data));
      });
  };
};

//리듀서 만들기
export default handleActions(
  {
    [SET_ARTICLE]: (state, action) => produce(state, (draft) => {}),
  },
  {
    [ADD_ARTICLE]: (state, action) => produce(state, (draft) => {}),
  },

  initialState
);

const actionCreators = {
  setArticle,
  addArticle,
  articlesAPI,
};

export { actionCreators };
