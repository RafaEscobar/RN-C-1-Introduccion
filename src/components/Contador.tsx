import { useState } from 'react';

export const Contador = () => {

  const [valor, setValor] = useState(10);

  const acumular = (cant:number) =>{
    setValor(valor + cant);

  }

  return (
    <>
    <h3>Contador: <small> {valor} </small></h3>

    <button className='btn btn-primary' onClick={()=>acumular(1)}>+1</button> &nbsp;
    <button className='btn btn-info' onClick={()=>acumular(-1)}>-1</button>

    </>
  )
}
