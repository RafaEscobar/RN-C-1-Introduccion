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

// F) Generamos el type externo para la gestion del username y el nombre
type LoginPayload = {
    username: string,
    nombre: string,
}

// C) Generamos la accion con un TYPE, y establecemos el 'type' como 'logout'
type AuthAction = 
    | { type: 'logout' } 
    | { type: 'login', payload: LoginPayload };

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
        
        case 'login':
            const {username, nombre} = action.payload;
            return { 
                validando: false,
                token: 'acceso1',
                username: username,
                nombre: nombre,
            }
        
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

    const login_btn = (nom: string, usern:string) =>{
        dispatch({
            type: 'login',
            payload: {
                username: usern,
                nombre: nom,
            }
        })
    }

    const logout_btn = () => {
        dispatch({
            type: 'logout'
        });
    }

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
        {/* 
            Generamos el condicional con el operador ternario para mostrara 
            el mensaje -Autenticado como:- SI HAY ALGO EN TOKEN, y -NO autenticado-
            SI NO HAY NADA EN TOKEN == esto en razon de: state.token
        */}
        {
            ( state.token )
                ? <div className="alert alert-success">Autenticado como: { state.nombre } </div>
                : <div className="alert alert-danger">NO AUTENTICADO...</div>
        }
        {/* 
            Generamos el condicional con el operador ternario para mostrara 
            el btn -Logout:- SI HAY ALGO EN TOKEN, y -Login- SI NO HAY NADA EN TOKEN 
            == esto en razon de: state.token
        */}
        {
            ( state.token )
                ? <button className="btn btn-danger" onClick={ logout_btn }>Logout</button>
                : <button className="btn btn-primary" onClick={()=> login_btn('Rafa', 'Rafita01') }>Login</button>
        }

    </>
  )
}
