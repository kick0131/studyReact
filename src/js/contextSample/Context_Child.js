import React from 'react';
import { StateContext } from '../Layout';

const Context_Child = (props) => {

  // <XXXContext.Consumer>の代わりにフックを使用
  const resourceName = React.useContext(StateContext);
  console.log(resourceName);

  return (
    <div>
        <div>メインコンテンツ(子) 名前:{resourceName.name} 年齢:{resourceName.age}</div>
    </div>
  );
};

export default Context_Child;
