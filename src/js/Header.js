import React from "react";
import Title from "./Title";

const Header = (props) => {
  const handleChange = (e) => {
    const title = e.target.value;
    props.changeTitleAttr(title);
  };
  console.log(props);
  return (
    <div>
      <Title title={props.titleAttr} />
      <input value={props.titleAttr} onChange={handleChange.bind(this)} />
    </div>
  );
};

export default Header;
