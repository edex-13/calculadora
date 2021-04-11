import hacerOperacion from '../js/operaciones.js';
import elimar from '../utils/eliminar.js';
import eliminarTodo from '../utils/eliminarTodo.js';

const BTN_IGUAL = document.getElementById('btnIgual');
const BTN_ELIMINAR = document.getElementById('btnEliminar');
const BTN_ELIMINAR_TODO = document.getElementById('btnEliminarTodo');

const btnAcciones = () => {
   BTN_IGUAL.addEventListener('click', () => {
      const PANTALLA = document.getElementById('pantalla');
      let operacion = PANTALLA.textContent
      hacerOperacion(operacion);
   });
   BTN_ELIMINAR.addEventListener('click', () => {
      elimar();
   });
   BTN_ELIMINAR_TODO.addEventListener('click', () => {
      eliminarTodo();
   });
};
export default btnAcciones;
