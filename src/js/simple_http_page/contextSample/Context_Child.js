import React from 'react';
import { StateContext } from '../Layout';

export default (props) => {

  // <XXXContext.Consumer>の代わりにフックを使用
  const resourceName = React.useContext(StateContext);
  console.log(resourceName);

  return (
    <>
        <div id="itemB">メインコンテンツ(子) 名前:{resourceName.name} 年齢:{resourceName.age}</div>
    </>
  );
};

