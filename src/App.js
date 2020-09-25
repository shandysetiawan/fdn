import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import EditorChoices from "./components/editorChoices";
import LatestReviews from "./components/latestReviews";
import LatestArticles from "./components/latestArticles";
import TopFrame from "./components/topFrame";
import Billboard from "./components/billboard";
import BottomFrame from "./components/bottomFrame";
import HorizontalBanner from "./components/horizontalBanner";
import MrBanner from "./components/mrBanner";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar></Navbar>
        <div className="container">
          <TopFrame></TopFrame>
          <Billboard></Billboard>
          <EditorChoices></EditorChoices>
          <HorizontalBanner></HorizontalBanner>
          <LatestReviews></LatestReviews>
          <LatestArticles></LatestArticles>
          <MrBanner></MrBanner>
          <BottomFrame></BottomFrame>
        </div>
      </Provider>
    </>
  );
}

export default App;
