import React from "react";

const FuncButton = ({ title, clickFunc, clasName }) => {
  return (
    <button className={clasName} onClick={clickFunc}>
      {title}
    </button>
  );
};

const GifSearch = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button" onClick={onSubmit}>
          <span className="button-label">Search</span>
        </button>

        <input className="input" type="text" placeholder="Search" />
      </form>
    </header>
  );
};

const GifItem = ({ gifSrc, idx }) => {
    return <img className="item-gif" src={gifSrc} alt={`gif-${idx}`} />;
}

const GifList = ({ gifs }) => {
  return (
    <ul className="gallery">
      {gifs.map((gif, idx) => (
        <GifItem gifSrc={gif} key={idx} idx={idx} />
      ))}
    </ul>
  );
};

export {GifSearch, GifList};