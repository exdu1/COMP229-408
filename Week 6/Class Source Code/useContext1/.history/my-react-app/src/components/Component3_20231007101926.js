import { useContext } from 'react';
//import { CountContext } from '@/pages/_app';
import { CountContext } from '../App';
export default function Component3(props) {
  const count = useContext(CountContext);
  return <>Value: {count}</>
}
