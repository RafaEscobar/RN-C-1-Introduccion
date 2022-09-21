
export const ObjetosLiterales = () => {

    const persona1 = {
        nombre: 'Rafael',
        edad: 21,
        profesion: 'Estudiante',
        direccion: {
            calle: 'Calzada San Angelin',
            casaNo: 9,
            localidad: 'Toluca'
        }
    }


  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona1, null, 3)}
            </pre>
        </code>
    </>
  )
}
