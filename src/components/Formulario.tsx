import { useFormulario } from '../hooks/useFormulario';


export const Formulario = () => {
    /*
        #7: Creamos el llamado al hook useFormulario, estableciendo el uso de los
        elementos: formularios, email, password, onChange
    */
   /*
        #7.1: Asi mismo dentro del area de parametros del useFormulario creamos
        los elementos: email y password
    */
    const { formularios, email, password, onChange } = useFormulario( {
        email: 'user@test.com',
        password: '1234',
    });

  return (
    // #1: Generamos la estructura de nuestro formulario
    <>
        <h3>Formulario</h3>
        <form action="">
            <input
                 type="text" 
                 className="form-control" 
                 placeholder="Email:" 
                 // #8: Colocamos como -value- del input el valor rescatado del elemto email
                 value={ email } 
                 /*
                    #9: Establecemos que a cada cambio que se susite en el input
                    en automatico se modifique el elemento 'email o password' con 
                    lo que haya en ese momento presisamente en el input, para mostrarlo
                    instantaneamente mas abajo del form
                */
                 onChange={ ({target}) => onChange( target.value, 'email' ) }
            />
            <input 
                type="password" 
                className="form-control mt-2 mb-2" 
                placeholder="Password:" 
                value={ password } 
                onChange={ ({target}) => onChange(target.value, 'password') }/>
        </form>
        {/* 
            #10: Con ayuda del JSON y el metodo -stringify- mostramos en tiempo real
            lo que haya en el input, y sus cambios 
        */}
        <code>
            <pre>
                { JSON.stringify(formularios, null, 2) }
            </pre>
        </code>
    </>
  )
}
