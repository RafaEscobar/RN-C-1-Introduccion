// Importaciones necesarias
import { Usuario } from '../interfaces/resRes';
import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {
    
    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

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
        <button className='btn btn-primary' onClick={ paginaAnterior }>Anteriores</button> &nbsp;
        <button className="btn btn-success" onClick={ paginaSiguiente }>Siguiente</button>
    </>
  )
}
