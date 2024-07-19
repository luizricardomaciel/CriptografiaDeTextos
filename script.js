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
  const ai = "ai";
  const enter = "enter";
  const imes = "imer";
  const ober = "ober";
  const ufat = "ufat";

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
    }
  }
  console.log(newString);
};
descriptografia(criptografada);
