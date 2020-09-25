const initialState = {
  dataEditor: [],
  dataArticle: [],
  dataReview: [],
  loading: true,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOARD":
      return {
        loading: false,
        dataEditors: action.payload.editorChoices,
        dataArticles: action.payload.latestArticles,
        dataReviews: action.payload.latestReviews,
      };
    default:
      return state;
  }
};
