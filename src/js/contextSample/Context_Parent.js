import React from 'react';
import Context_Child from './Context_Child';
import Context_Input from './Context_Input';

const Context_Parent = (props) => {
  return (
    <div>
      メインコンテンツ（親）
      <Context_Child />
      <Context_Input />
    </div>
  );
};

export default Context_Parent;
