// Importaciones necesarias
import { useEffect, useRef, useState } from "react"
import { reqResApi } from '../api/reqRes';
import { ReqResInterface, Usuario } from '../interfaces/resRes';


export const Usuarios = () => {
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
            paginaRef.current ++;
        } else {
            alert('No hay mas registros para mostrar');
        }
    }
    // #3: Creamos la funcion rederRow para mostrar fila x fila los valores de usuario
    // Establecemos que elementos de la interfaz -Usuario- queremos (id, email...)
    const renderRow = ( {id, email, first_name, last_name, avatar}: Usuario ) => {
        // Establecemos el return
        return (
            // Enlazamos el id de cada fuelta a la correspondiente fila
            <tr key={ id.toString() }>
                {/* 
                    Generamos los resgistros llamando a los elementos de la interfaz
                    Usuario, que contienen los valores
                */}
                <td>
                    <img 
                        src= { avatar }
                        alt= { first_name } 
                        style = {{
                            width: 30,
                            borderRadius: 100,
                        }}
                    />
                </td>
                <td> { first_name } {last_name} </td>
                <td> { email } </td>
            </tr>
        )
    }

  return (
    <>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>Nombre</th>
                    <th>Correo electronico</th>
                </tr>
            </thead>
            <tbody>
                {/* 
                    #4: Llamamos a la funcion -rederRow- por medio de la variable
                    usuarios del useState y su metodo -map-
                */}
                {
                    usuarios.map( renderRow )
                }
            </tbody>
        </table>
        {/*
            #8: Creamos el btn que a cada click llama a la funcion -cargarUser-
            -> PARA AVANZAR A OTRA PAGINA O MOSTRAR EL ALERT 
        */}
        <button className="btn btn-success" onClick={ cargarUser }>Siguiente</button>
    </>
  )
}
