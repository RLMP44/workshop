// rsf and enter for empty initialize boilerplate

import React from 'react';

function Gif({ id, setSelectedId }) {
  // const id = "gG6OcTSRWaSis";
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  function handleClick() {
    console.log("click");
    setSelectedId(id);
  }

  return (
    // curly brackets around url so it recognizes jsx in the html
    <img className="gif" src={url} alt="gif" onClick={handleClick} />
  );
}

export default Gif;
