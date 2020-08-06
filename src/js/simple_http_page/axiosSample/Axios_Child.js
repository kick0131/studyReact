import React from 'react';
import { AxiosContext } from './Axios_Action'

export default (props) => {

  // 保持されたリクエスト内容をstate経由で取得
  const aaa = React.useContext(AxiosContext);
  console.log(aaa);
  var body = '';
  if (aaa.body == '') {
    console.log('context is undefined')
  } else {
    console.log('context is defined')
    body = JSON.stringify(aaa.body);
  }

  return (
    <>
      取得内容:{body}
    </>
  );
}


