import { useState, useEffect, useTransition } from "react";
import axios from "axios";

import Card from "./Card";

function CardList() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  const getData = async () => {
    const API_URL = "https://jsonplaceholder.typicode.com/photos";
    // const API_KEY = "<KEY>";
    // const PER_PAGE = 30;

    // const searchValue = "mountain";
    // const pageValue = 100;

    try {
      // const res = await axios.get(
      //   `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      // );
      const res = await axios.get(`${API_URL}`);

      if (res.status === 200) {
        console.log(res.data);
        startTransition(() => {
          setData(res.data);
        });
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
      {isPending
        ? "Loading..."
        : data.map((item) => (
            <Card key={item.id} imageUrl={item.thumbnailUrl} alt={item.title} />
          ))}
    </>
  );
}

export default CardList;
