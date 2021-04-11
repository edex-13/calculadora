const signos = ['+', '-', '*', '/', '.'];

const validaciones = (valor, valorTotal) => {
   let esValido = true;
   let esVacioValorTotal = valorTotal == '';
   let esUnSignoElvalor = signos.includes(valor);
   if (esVacioValorTotal && esUnSignoElvalor && valor != '-') {
      esValido = false;
   }
   let ultimoCaracter = valorTotal.charAt(valorTotal.length - 1);
   let esUnSignoElvalorTotal = signos.includes(ultimoCaracter);

   if (esUnSignoElvalorTotal && esUnSignoElvalor) {
      esValido = false;
   }
   return esValido;
};
export default validaciones;
