import { useState } from "react";

export const useCounter = (valInit:number=100) => {
    // Manejo de estado
    const [valor, setValor] = useState(valInit);

    // Funcion para iterar el contenido de 'valor'
    const acumular = (cant:number) =>{
      setValor(valor + cant);
    }

    // Que retorna este hook =
    return {
        valor: valor,
        acumular: acumular,
    }
}
