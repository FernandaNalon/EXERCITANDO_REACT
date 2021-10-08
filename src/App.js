import './App.css';
import React from 'react';


   var a = parseInt(prompt("Digite um número: "));
   var b = parseInt(prompt("Digite um valor: "));

function App () {
   

   function teste() {
      return (a+b);
   }

   return (
      <div className = "App">
         <p>A soma desses valores digitados são: {teste()}</p>
      </div>
   );
}
export default App;