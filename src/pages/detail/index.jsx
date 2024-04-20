import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { detailInfoState } from "@recoil/detailAtom";

import axios from "axios";

import DetailItem from "./components/DetailItem";

function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const setData = useSetRecoilState(detailInfoState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (res.status === 200) {
          console.log(res.data);
          setTitle(res.data.title);
          setBody(res.data.body);
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, setData]);

  return (
    <div>
      <h1>Detail: {id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
      <DetailItem />
    </div>
  );
}

export default Detail;
