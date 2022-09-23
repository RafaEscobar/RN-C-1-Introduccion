
import { useCounter } from '../hooks/useCounter';

export const Contador_useCounter = () => {

  const { valor, acumular } = useCounter();

  return (
    <>
    <h3>Contador with useCounter: <small> {valor} </small></h3>

    <button className='btn btn-primary' onClick={()=>acumular(1)}>+1</button> &nbsp;
    <button className='btn btn-info' onClick={()=>acumular(-1)}>-1</button>

    </>
  )
}
