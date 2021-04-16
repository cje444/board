import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//액션 타입 정하기
const SET_ARTICLE = "SET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";

//액션 만들기
const setArticle = createAction(SET_ARTICLE, (articles) => ({ articles }));
const addArticle = createAction(ADD_ARTICLE, (article) => ({ article }));

const initialState = {
  articles: [],
};

// const initialArticle = {
//   _id: "6075cb84fb96a8948253d4c1",
//   author: "글쓴이",
//   comment: "내용123",
//   no: 4,
//   title: "제목입니다123",
// };

const getArticleDB = async () => {
  const articleDB = await axios.get(
    "http://spartacodingclub.shop/hh99/board/list"
  );
  return {
    type: "GET_ARTICLE",
    payload: articleDB.data,
  };
};

export default handleActions(
  {
    [SET_ARTICLE]: (state, action) => produce(state, (draft) => {}),
    [ADD_ARTICLE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setArticle,
  addArticle,
  getArticleDB,
};

export { actionCreators };
