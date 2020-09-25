import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import EditorChoices from "./components/editorChoices";
import LatestReviews from "./components/latestReviews";
import LatestArticles from "./components/latestArticles";

function App() {
  return (
    <div>
      <Provider store={store}>
        <EditorChoices></EditorChoices>
        <LatestReviews></LatestReviews>
        <LatestArticles></LatestArticles>
      </Provider>
    </div>
  );
}

export default App;
