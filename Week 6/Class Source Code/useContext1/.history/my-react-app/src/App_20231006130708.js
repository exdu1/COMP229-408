//import '@/styles/globals.css';
import { useState, createContext } from 'react';
import Component3 from '@/Component/Component';
export const CountContext = createContext();
export const SetCountContext = createContext();

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <SetCountContext.Provider value={setCount}>
          <Component {...pageProps} />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </>
  );
}

export default MyApp;