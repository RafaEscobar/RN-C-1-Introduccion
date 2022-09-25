import { useState } from "react"
// #2: Creamos nuestro hook de -useFormulario-
    // #2.1: A esta funcion se le aplica el generico T -para heredad de Objet-
    // #2.2: Establecemos la solicitud del parametro -formulario- de tipo -T Object-
export const useFormulario = <T extends Object>( formulario:T ) => {
    /*
        #3: Creamos el hook useState el cual hace uso del parametro -formulario-
            como receptor del -estado- (state) y el -cambio de estado- (setState)
    */
    const [state, setState] = useState( formulario );
    /* 
        #4: Creamos la funcion -onChange- para el cambio instantaneo del valor de los
        elementos -email- y -password-
    */

    /* 
    #4.1: Solicitamos dos parametros
        -value-> Para el valor
        -campo-> Para el elemento
    */
    const onChange = (value:string, campo: keyof T) => {
        // #4.2: Con el -setState- hacemos el cambio de valores
        setState({
            // #4.3: Desfragmentamos la variable -state-
            ...state,
            // Le colocamos al -campo- (osea el elemento email/password) el valor en -value-
            [campo]: value,
        })
    }

    /*
        #5: Retornamos:
        >La variable -state- desgramentada
        >La variable state, como -formulario-
        >La funcion -onChange-
    */
    return {
        ...state,
        formularios: state,
        onChange: onChange,
    }

}
