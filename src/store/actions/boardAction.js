function boardAction() {
  return (dispatch) => {
    fetch("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_BOARD",
          payload: {
            editorChoices: data["editor's choice"],
            latestArticles: data["latest articles"],
            latestReviews: data["latest review"],
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "SET_BOARD",
          payload: { error: err },
        });
      });
  };
}

export default boardAction;
