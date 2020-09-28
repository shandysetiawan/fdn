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
import Navbar from "./components/navbar";
import MatchBanner from "./components/matchBanner";
import TopBrand from "./components/topBrand";
import PopularGroup from "./components/popularGroups";
import LatestVideos from "./components/latestVideos";
import Trending from "./components/trending";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar></Navbar>
        <div className="container">
          <TopFrame></TopFrame>
          <Billboard></Billboard>
          <EditorChoices></EditorChoices>
        </div>
        <MatchBanner></MatchBanner>
        <div className="container">
          <HorizontalBanner></HorizontalBanner>
          <LatestArticles></LatestArticles>
          <LatestReviews></LatestReviews>
          <PopularGroup></PopularGroup>
          <LatestVideos></LatestVideos>
          <Trending></Trending>
          <TopBrand></TopBrand>
          <Footer></Footer>
          <BottomFrame></BottomFrame>
        </div>
      </Provider>
    </>
  );
}

export default App;
