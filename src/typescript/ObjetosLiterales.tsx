// Creamos interfaz principal para (persona)
interface Persona{
    nombre: string;
    edad: number;
    direccion: Direccion;
}
// Creamos interfaz para el objeto literal anidado (direccion)
interface Direccion{
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {
    // Objeto literal (persona)
    const persona: Persona = {
        nombre: 'Rafael',
        edad: 21,
        direccion: {
            pais: 'Toluca',
            casaNo: 9,
        }
    }


  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 3)}
            </pre>
        </code>
    </>
  )
}
