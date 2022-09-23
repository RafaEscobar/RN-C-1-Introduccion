import { useEffect, useReducer } from "react"

// B) CREAMOS LA INTERFAZ PARA EL ESTADO INICIAL Y PARA EL RETURN DEL REDUCER
interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

// A) CREAMOS EL ESTADO INICIAL 
const initialState:AuthState = {
    // Puerta para accion de -INICIAR EL PROCESO DE VALIDACION-
    validando: true,
    // Token, que si contiene algo se ha -AUTENTICADO- si no hay nada -NO AUTENTICADO-
    token: null,
    // El username o alias del usuario
    username: '',
    // Nombre del usuario
    nombre: '',
}

// C) Generamos la accion con un TYPE, y establecemos el 'type' como 'logout'
type AuthAction = { type: 'logout' };

// D) GENERAMOS LA FUNCION REDUCER SIGUIENDO LA SINTAXIS GUIA:
// const nomFuncion = (state: tipoInterfazState, action: tipoAccion): tipoInterfazState =>
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    /*
        Este switch determinara quer valores asignarele a los atributos del
        objeto literal cuando el caso 'logout' del action.type aparezca.
        -> 'logout' -> EN ESTE CASO 'VALIDANDO' SERA -FALSE-
    */
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: '',
            }
        break;
        
        /*
         Esto es opcional pero por recomendacion siempre deberiamos retornar
         el 'estado' oseace ==> el -state-
        */
        default:
            return state;
        break;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    // 1) Hasta este punto se sigue mostrando el -Validando...-
    /*
        3) Pasados 2 segundos hace efecto el hook de useEffect y colocamos
           por medio del disparo de la accion, al elemento "type" como 'logout'
    */
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 2000);
    }, []);
    /*
     2) Permanecemos 2 segundos viendo unicamente este fragmento en la pantalla
        hasta que.... -> 3)
    */
    if (state.validando) {
        return (
            <>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    /*
        4) Como ya pasaron los dos segundos y se detono la accion ahora
           visualizamos este fragmento
    */
  return (
    <>
        <h3>Login</h3>
        <div className="alert alert-danger">NO AUTENTICADO...</div>
        <div className="alert alert-success">AUTENTICADO...</div>

        <button className="btn btn-primary">Login</button> &nbsp;
        <button className="btn btn-danger">Logout</button>
    </>
  )
}
