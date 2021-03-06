import React from "react";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../Request";
import Rows from "../components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fecthNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fecthTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fecthTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fecthActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fecthComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fecthHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fecthRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fecthDocumentaries} />
    </div>
  );
}

export default HomeScreen;
