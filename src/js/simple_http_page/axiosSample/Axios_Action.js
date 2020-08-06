import React, { useState, createContext } from 'react';
import axios from 'axios';

import Axios_Child from './Axios_Child';

export const AxiosContext = createContext('');

export default (props) => {
  const [axiosbody, setAxiosBody] = useState('');
  // コンテキストに設定するもの
  function getResource() {
    return { body: axiosbody, handler:setAxiosBody }
  };
  const resource = getResource();

  const axiosGet = () => {
    // GET通信
    axios.get(
      // テスト用のローカルjson
      './data/axios_sample.json'
      // 本来はREST API等を想定（記載例は公式で公開されているつつじバス運行状況）
      // 'http://tutujibus.com/busstopLookup.php?rosenid=1'

      // 以下、オプション
      , {
        timeout: 3000
      }
    )
      // 成功時の処理
      .then(response => {
        console.log('status:', response.status); // 200
        console.log('body:', response.data);     // response body.
        // stateに保持
        setAxiosBody(response.data);
      })
      // エラー時の処理
      .catch(err => {
        console.log('err:', err);
      });
  }
  return (
    <div>
      <AxiosContext.Provider value={resource}>
        <button onClick={axiosGet} >実行</button>
        <Axios_Child/>
      </AxiosContext.Provider>
    </div>
  );
}

