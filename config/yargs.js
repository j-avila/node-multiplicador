const opt = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("crear", "crea un documento de la tabla de multiplicar", opt)
  .command("listar", "imprime en consola la tabla de multiplicar", opt)
  .help().argv;

module.exports = {
  argv,
};
