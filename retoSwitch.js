function solution(article) {
  // Tu código aquí 👈
  switch (article) {
    case "computadora":
        console.log("Con mi computadora puedo programar usando JavaScript");
        break;
    case "celular":
        console.log("En mi celular puedo aprender usando la app de Platzi");
        break;
    case "cable":
        console.log("Hay un cable en mi bota");
        break;        
    default:
        console.log("Articulo no encontrado");
        break;
  }
}

solution("computadora");
solution("celular");
solution("cable");
solution("ornitorrinco");
