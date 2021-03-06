import React, { useState, createContext } from 'react';
import Header from './Header';
import Context_Parent from './contextSample/Context_Parent';

// 最上位のReactコンポーネントでコンテキストを用意
export const StateContext = createContext('');

export default (props) => {
  const [username, setUserName] = useState('taro');
  const [title, setTitle] = useState('Title');

  // コンテキストに設定するもの
  function getResource() {
    return { name: username, age: 28, namehandler:setUserName }
  };
  const resource = getResource();

  return (
    <div>
      <div className='my-grid'>
        <Header changeTitleAttr={setTitle} titleAttr={title} />
        <aside className='my-grid-item'>サイドバー</aside>
        <main className='my-grid-item'>
          <StateContext.Provider value={resource}>
            <Context_Parent />
          </StateContext.Provider>
        </main>
        <footer className='my-grid-item'>フッター</footer>
      </div>
    </div>
  );
};

