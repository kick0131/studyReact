import React from 'react';
import Context_Child from './Context_Child';
import Context_Input from './Context_Input';
import Axios_Action from '../axiosSample/Axios_Action';

export default (props) => {
  return (
    <div class="contextSample-my-grid">
      <div id="itemA">メインコンテンツ（親）</div>
      <Context_Child/>
      <Context_Input/>
      <Axios_Action/>
    </div>
  );
};

