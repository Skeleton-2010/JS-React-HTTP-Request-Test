import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import data from "./data.js";
import fetchArticles from "./asyncs.js";
import { GifSearch, GifList } from "./components.jsx";


class GifLoader extends Component {
  state = data;

  handleFetchData = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const fetchData = await fetchArticles(this.state.query);
      console.log(fetchData)
      this.setState({ fetchData: fetchData.data.data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.setState({ fetchData: [] });
    const searchInp = document.querySelector(".input").value;
    if (searchInp) {
      this.setState({ query: searchInp }, () => {
        this.handleFetchData();
      });
    }
  };

  render() {
    const { fetchData, isLoading, error } = this.state;
    return (
      <div>
        <GifSearch onSubmit={this.handleSearchSubmit} />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {fetchData.length > 0 && (
          <GifList gifs={fetchData.map((article) => article.embed_url)} />
        )}
      </div>
    );
  }
}

function App() {
  return (
    <div className="app-main">
      <GifLoader />
    </div>
  );
}

export default App;
