// import { TiposBasicos } from './typescript/TiposBasicos';
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { Funciones } from "./typescript/Funciones";
// import { Contador } from "./components/Contador";

import { Contador_useCounter } from './components/Contador_useCounter';


const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion</h1>
      <hr />  
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
    {/* <Contador /> */}
    <Contador_useCounter />

    </div>
  )
}

export default App;