import mostrarPorPantalla from '../utils/mostrarPorPantalla.js'

class btn {
   constructor(id, valor) {
      this.elemento = document.getElementById(id);
      this.valor = valor;
   }
   agregarEventoClick() {
      this.elemento.addEventListener('click', () => {
         mostrarPorPantalla(this.valor)
      });
   }
}
//coleccion donde se crean las instancias de la clase btn
let colecionBotones = [];
// Numeros
colecionBotones.push(new btn('btnNumero1', 1));
colecionBotones.push(new btn('btnNumero2', 2));
colecionBotones.push(new btn('btnNumero3', 3));
colecionBotones.push(new btn('btnNumero4', 4));
colecionBotones.push(new btn('btnNumero5', 5));
colecionBotones.push(new btn('btnNumero6', 6));
colecionBotones.push(new btn('btnNumero7', 7));
colecionBotones.push(new btn('btnNumero8', 8));
colecionBotones.push(new btn('btnNumero9', 9));
colecionBotones.push(new btn('btnNumero0', 0));
// Simbolos
colecionBotones.push(new btn('btnSumar', '+'));
colecionBotones.push(new btn('btnRestar', '-'));
colecionBotones.push(new btn('btnMultiplicar', '*'));
colecionBotones.push(new btn('btnDividir', '/'));
colecionBotones.push(new btn('btnPunto', '.'));

const agregarEventoClick = () => {
   colecionBotones.forEach((btn) => {
      btn.agregarEventoClick();
   });
};
export default agregarEventoClick;
