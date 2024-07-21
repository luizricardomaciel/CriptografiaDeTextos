const string = "eu gato de gato";
const criptografada = "enterufat gaitober denter gaitober";

// const criptografia = (string) => {
//   let novaString = "";
//   let i = 0;

//   while (i < string.length) {
//     let match = false;
//     if (string[i] === "a") {
//       match = true;
//       novaString += "ai";
//     } else if (string[i] === "e") {
//       match = true;
//       novaString += "enter";
//     } else if (string[i] === "i") {
//       match = true;
//       novaString += "imer";
//     } else if (string[i] === "o") {
//       match = true;
//       novaString += "ober";
//     } else if (string[i] === "u") {
//       match = true;
//       novaString += "ufat";
//     }
//     if (!match) {
//       novaString += string[i];
//     }
//     i++;
//   }
//   return novaString;
// };

const descriptografia = (string) => {
  let newString = "";
  let i = 0;

  while (i < string.length) {
    let palavras = {
      a: {
        cripto: "ai",
        existe: true,
      },
      e: {
        cripto: "enter",
        existe: true,
      },
      i: {
        cripto: "imer",
        existe: true,
      },
      o: {
        cripto: "ober",
        existe: true,
      },
      u: {
        cripto: "ufat",
        existe: true,
      },
    };
    let achei = {
      cripto: "",
      achado: false
    }
    for (let chaves in palavras) {
      let cripto = palavras[chaves].cripto
      let existe = palavras[chaves].existe

      for(let j = 0; j < cripto.length; j++) {
        if(string[i + j] !== palavras[chaves].cripto[j]) {
          existe = false
          break;
        }
      }
      if(existe) {
        achei.cripto = cripto
        achei.achado = existe
        break
      }
    }
    if(achei.achado) {
      newString += string[i]
      i += achei.cripto.length
    } else {
      newString += string[i]
      i++
    }
  }
  console.log(newString);
}
descriptografia(criptografada);


