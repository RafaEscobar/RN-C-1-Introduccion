import { useEffect } from "react"
import { reqResApi } from '../api/reqRes';


export const Usuarios = () => {

    useEffect(() => {
      // Llamado a la API
        reqResApi.get('/users')
            .then( resp => {
                console.log( resp.data );
            })
            .catch( err => console.log( err ) );
    }, [])
    

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
                <tr>
                    
                </tr>
            </tbody>
        </table>
    </>
  )
}
