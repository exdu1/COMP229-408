//import '@/styles/globals.css';
import { useState, createContext } from 'react';
import component3 from '@/component/component3.js';
export const CountContext = createContext();
export const SetCountContext = createContext();

function MyApp({ omponent, pageProps }) {
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