import { useState, useEffect, useTransition } from "react";
import axios from "axios";

import Card from "./Card";
import PageNavi from "@components/common/pageNavi/PageNavi";

function CardList() {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  // 페이징 처리
  const [pageNumber, setPageNumber] = useState(1);
  const perPage = 50;
  const totalPageNumber = 5000;

  // 데이터 조회
  useEffect(() => {
    getData(pageNumber);
  }, [pageNumber]);

  const getData = async (pageNumber) => {
    const API_URL = `https://jsonplaceholder.typicode.com/albums/${pageNumber}/photos`;

    try {
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

  // 페이지 변경 함수
  const paginate = (pageNumber) => setPageNumber(pageNumber);

  return (
    <>
      {isPending
        ? "Loading..."
        : data.map((item) => (
            <Card key={item.id} imageUrl={item.thumbnailUrl} alt={item.title} />
          ))}

      <PageNavi
        pageNumber={pageNumber}
        perPage={perPage}
        totalPageNumber={totalPageNumber}
        paginate={paginate}
      />
    </>
  );
}

export default CardList;
