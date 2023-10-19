//import '@/styles/globals.css';
import { useState, createContext } from 'react';

export const CountContext = createContext();
export const SetCountContext = createContext();

function MyApp({ Components, pageProps }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <SetCountContext.Provider value={setCount}>
          <Component3 {...pageProps} />
          <ComponentC {...pageProps} />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </>
  );
}

export default MyApp;