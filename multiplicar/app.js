const argv = require("../config/yargs").argv;
const { counter, tableList } = require("./baseOne");
const colors = require("colors");

const command = argv._[0];

switch (command) {
  case "crear":
    counter(argv.base)
      .then((archive) =>
        console.log(
          `Archivo creado tabla del ${argv.base} al ${argv.limite} en:`,
          colors.blue(archive)
        )
      )
      .catch((err) => console.log(err));

    break;
  case "listar":
    tableList(argv.base, argv.limite)
      .then((list) => console.log(list))
      .catch((err) => console.log(err));
    break;
  default:
    console.log("comando no existente");
    break;
}
