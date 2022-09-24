import { useEffect, useState } from "react"
import { reqResApi } from '../api/reqRes';
import { ReqResInterface, Usuario } from '../interfaces/resRes';


export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
      // Llamado a la API
        reqResApi.get<ReqResInterface>('/users')
            .then( resp => {
                setUsuarios( resp.data.data );
            })
            .catch( err => console.log( err ) );
    }, [])
    
    const renderRow = ( {id, email, first_name, last_name, avatar}: Usuario ) => {
        return (
            <tr key={ id.toString() }>
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
                {
                    usuarios.map( renderRow )
                }
            </tbody>
        </table>
    </>
  )
}
