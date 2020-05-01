import React, { useState } from "react";

const Header = (props) => {
  const [title, setTitle] = useState('world');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  console.log(props);
  return (
    <header className='my-grid-item'>
      <div>
        <div>Hello, {title}</div>
        <input value={title} onChange={handleChange} />
      </div>
    </header>
  );
};

export default Header;
