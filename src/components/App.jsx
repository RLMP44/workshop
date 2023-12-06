import React from "react";
import SearchBar from "./SearchBar";
import Gif from "./Gif";
import GifList from "./GifList";

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

// const App = () => {
//   return (
//     <div>Hello from the App</div>
//   );
// };
// is the same as below

function App () {
  const [selectedId, setSelectedId] = React.useState("gG6OcTSRWaSis");
  const [gifIds, setGifIds] = React.useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

  function fetchGiphy(keyword) {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
    });
  }

  // const selectedId = "gG6OcTSRWaSis";
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif id={selectedId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}

export default App;
