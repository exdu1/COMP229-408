import { useContext } from 'react';
//import { CountContext } from '@/pages/_app';
import { CountContext } from '@/src/_app';
export default function Component3() {
  const count = useContext(CountContext);
  return <>Value: {count}</>
}