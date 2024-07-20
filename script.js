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

  //criptografia
  let palavras = {
    a: {
      string: "ai",
      existe: true,
    },
    e: {
      string: "enter",
      existe: true,
    },
    i: {
      string: "imer",
      existe: true,
    },
    o: {
      string: "ober",
      existe: true,
    },
    u: {
      string: "ufat",
      existe: true,
    },
  };

  while (i < string.length) {
    let match = true;

    for (let j = 0; j < ai.length; j++) {
      if (string[i + j] !== ai[j]) {
        match = false;
        break;
      }
    }

    if (!match) {
      newString += string[i];
    } else {
      newString += string[i];
    }
  }
  console.log(newString);
};
descriptografia(criptografada);
