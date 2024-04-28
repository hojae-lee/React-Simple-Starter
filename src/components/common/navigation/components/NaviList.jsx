import NaviItem from "@components/common/navigation/components/NaviItem";

import pathData from "@assets/utils/pathData";

function NaviList() {
  return (
    <>
      {pathData.map((item, index) => (
        <NaviItem to={item.path} name={item.name} key={index} />
      ))}
    </>
  );
}

export default NaviList;
