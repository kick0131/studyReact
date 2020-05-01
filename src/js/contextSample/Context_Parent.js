import React from 'react';
import Context_Child from './Context_Child';

const Context_Parent = (props) => {
  return (
    <div>
      メインコンテンツ（親）
      <Context_Child />
    </div>
  );
};

export default Context_Parent;
