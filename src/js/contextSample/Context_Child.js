import React from 'react';
import { StateContext } from '../Layout';

const Context_Child = (props) => {
  return (
    <div>
      <StateContext.Consumer>
        {(resourceName) => <div>メインコンテンツ(子):{resourceName.name}</div>}
      </StateContext.Consumer>
    </div>
  );
};

export default Context_Child;
