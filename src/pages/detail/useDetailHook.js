import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => {
  return axios.get(url).then((res) => res.data);
};

export const useGetDetailInfo = ({ id }) => {
  const { data, isLoading, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
};
