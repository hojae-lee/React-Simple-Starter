import { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

function CardList() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const API_URL = "https://api.unsplash.com/search/photos";
    const API_KEY = "<AccessToken>";
    const PER_PAGE = 30;

    const searchValue = "mountain";
    const pageValue = 100;

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );

      if (res.status === 200) {
        setData(res.data.results);
        console.log(res.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data
        ? data.map((item) => (
            <Card
              key={item.id}
              imageUrl={item.urls.thumb}
              alt={item.alt_description}
            />
          ))
        : "loading..."}
    </>
  );
}

export default CardList;
