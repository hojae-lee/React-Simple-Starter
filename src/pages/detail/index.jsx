import { useParams } from "react-router-dom";

import DetailItem from "./components/DetailItem";
import UseForm from "@components/common/form/UseForm";

import { getDetailInfo } from "./useDetailHook";

function Detail() {
  const { id } = useParams();

  const { data, isLoading, error } = getDetailInfo({ id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>erro...</div>;
  }

  return (
    <div>
      <h1>Detail: {id}</h1>
      {data && <DetailItem data={data} />}
      <UseForm />
    </div>
  );
}

export default Detail;
