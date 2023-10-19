import { useContext } from 'react';
import { CountContext } from '@/pa/_app';

export default function Component3() {
  const count = useContext(CountContext);
  return <>Value: {count}</>
}