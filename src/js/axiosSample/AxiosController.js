import React from 'react';
import axios from 'axios';

const AxiosController = (props) => {
  const axiosGet = () => {
    // GET通信
    axios.get('https://l0sao8tmzg.execute-api.ap-northeast-1.amazonaws.com/Stage/FrameUserInfoWizard1')

      // thenで成功した場合の処理をかける
      .then(response => {
        console.log('status:', response.status); // 200
        console.log('body:', response.data);     // response body.

        // catchでエラー時の挙動を定義する
      }).catch(err => {
        console.log('err:', err);
      });
  }
  return (
    <button onClick={axiosGet}>実行</button>
  );
}

export default AxiosController;
