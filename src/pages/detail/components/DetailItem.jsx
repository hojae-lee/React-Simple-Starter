import PropTypes from "prop-types";

function DetailItem({ data }) {
  const detailInfo = data;

  return (
    <div>
      <h1>Recoil을 이용한 DetailItem</h1>
      <h2>{detailInfo.title}</h2>
      <p>{detailInfo.body}</p>
    </div>
  );
}

export default DetailItem;

DetailItem.propTypes = {
  data: PropTypes.object.isRequired,
};
