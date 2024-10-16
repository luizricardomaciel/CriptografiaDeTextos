let palavra = "";

const criptografia = (string) => {
  let novaString = "";
  let i = 0;

  while (i < string.length) {
    let match = false;
    if (string[i] === "a") {
      match = true;
      novaString += "ai";
    } else if (string[i] === "e") {
      match = true;
      novaString += "enter";
    } else if (string[i] === "i") {
      match = true;
      novaString += "imer";
    } else if (string[i] === "o") {
      match = true;
      novaString += "ober";
    } else if (string[i] === "u") {
      match = true;
      novaString += "ufat";
    }
    if (!match) {
      novaString += string[i];
    }
    i++;
  }

  return novaString;
};

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
      achado: false,
    };
    for (let chaves in palavras) {
      let cripto = palavras[chaves].cripto;
      let existe = palavras[chaves].existe;

      for (let j = 0; j < cripto.length; j++) {
        if (string[i + j] !== palavras[chaves].cripto[j]) {
          existe = false;
          break;
        }
      }
      if (existe) {
        achei.cripto = cripto;
        achei.achado = existe;
        break;
      }
    }
    if (achei.achado) {
      newString += string[i];
      i += achei.cripto.length;
    } else {
      newString += string[i];
      i++;
    }
  }
  return newString;
};

function createButton() {
  const output = document.querySelector(".output");
  output.innerHTML += `<button type="button" class="copiar" onclick="copyToText(this)">
    Copiar
  </button>`;
}

const getText = () => {
  const text = document.querySelector(".entrada").value;
  const saida = document.querySelector(".output");
  palavra = criptografia(text);

  saida.innerHTML = `<p class="saida">` + palavra + "</p>";
  createButton();
};

const getDescripto = () => {
  const text = document.querySelector(".entrada").value;
  const saida = document.querySelector(".output");
  palavra = descriptografia(text);
  saida.innerHTML = `<p class="saida">` + palavra + "</p>";
  createButton();
};

function copyToText(button) {
  navigator.clipboard
    .writeText(palavra)
    .then(function () {
      button.textContent = "Copiado!";

      setTimeout(() => {
        button.textContent = "Copiar";
      }, 2000);
    })
    .catch(function (err) {
      console.error(`Erro ao copiar texto:`, err);
      alert("Erro ao copiar texto. Por favor, copie manualmente.");
    });
}
