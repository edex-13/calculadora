import mostrarPorPantalla from '../utils/mostrarPorPantalla.js';
const hacerOperacion = (operacion) => {
   try {
      let resultado = eval(operacion);
      mostrarPorPantalla(resultado , true);
   } catch {
      mostrarPorPantalla('ERROR' , true);
   }
};
export default hacerOperacion
