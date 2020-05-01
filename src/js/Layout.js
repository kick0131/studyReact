import React, { useState, createContext } from 'react';
import Header from './Header';
import Context_Parent from './contextSample/Context_Parent';
import AxiosController from './axiosSample/AxiosController';

// 最上位のReactコンポーネントでコンテキストを用意
export const StateContext = createContext('');

const Layout = (props) => {
  const [name, setName] = useState('Welcome!');
  const [title, setTitle] = useState('Title');

  const resource = () => {
    // 何かしらの方法で値を取得
    return { name: 'taro', age: 28 };
  };

  return (
    <div>
      <Header changeTitleAttr={setTitle} titleAttr={title} />
      <div className='my-grid'>
        <header className='my-grid-item'>Hello, {name}</header>
        <aside className='my-grid-item'>サイドバー</aside>
        <main className='my-grid-item'>
          <StateContext.Provider value={resource}>
            <Context_Parent />
          </StateContext.Provider>
          <AxiosController />
        </main>
        <footer className='my-grid-item'>フッター</footer>
      </div>
    </div>
  );
};

export default Layout;
