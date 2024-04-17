import { useRecoilValue } from "recoil";

import { detailInfoState } from "@recoil/detailAtom";

function DetailItem() {
  const detailInfo = useRecoilValue(detailInfoState);

  return (
    <div>
      DetailItem
      <h2>{detailInfo.title}</h2>
      <p>{detailInfo.body}</p>
    </div>
  );
}

export default DetailItem;
