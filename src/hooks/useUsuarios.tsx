import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResInterface, Usuario } from "../interfaces/resRes";

export const useUsuarios = () => {
    // #2: Creamos nuestro useState para el manejo del estado del usuario
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    // #6: Rescatamos en esta variable la pagina 0 por defecto para el -page-
    const paginaRef = useRef(0);

    // #1: Creamos nuestro -useEffect-
    useEffect(() => {
      // Llamado a la API
      /*
        reqResApi.get<ReqResInterface>('/users')
            .then( resp => {
                setUsuarios( resp.data.data );
            })
            .catch( err => console.log( err ) );
      */

    cargarUser();

    }, [])

    /* 
        #5: Creamos esta funcion que se encarga de hacer el trabajo que antes hacia el
        useEffect, y tambien rescata el numero de la pagina actual, al elemento page, y 
        de esta forma en cada click al btn, -se cambie de pagina- para mostrar mas datos
    */
    const cargarUser = async() => {
        const resp = await reqResApi.get<ReqResInterface>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        /*
            #7: Creamos un condicional el cual establece que:
            -> SI HAY DATOS QUE MOSTRAR = AVANZA DE PAGINA, aumentando en uno el page
            -> SI NO HAY DATOS QUE MOSTRAR = MUESTRA UN ALERT
        */

        if( resp.data.data.length > 0 ) {
            setUsuarios( resp.data.data );
        } else{
            paginaRef.current--;
            alert('No hay mas registros para mostrar');
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUser();
    }
    const paginaAnterior = () => {
        if ( paginaRef.current > 1 ) {
            paginaRef.current--;
            cargarUser();
        }
    }

    // Que retorna este hook =
    return {
        // cargarUser: cargarUser,
        usuarios: usuarios,
        paginaSiguiente: paginaSiguiente,
        paginaAnterior: paginaAnterior,
    }
}
