
export const TiposBasicos = () => {
    const nombre = 'Rafael';
    const nombres = ['Rafael', 21, 'Jaime', 23];
    const cosa = [21,21,42,4,5];
    
  return (
    <>
        <h3>Tipos basicos</h3>
        {nombre}
        <br />
        {nombres.join(', ')}
        <br />
        {cosa.join(' - ')}
    </>
  )
}
