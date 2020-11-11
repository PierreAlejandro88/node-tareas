const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=============================='.green);
            console.log('Tarea:', tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('=============================='.green);
        }
        break;
    case 'actualizar':
        let actualiza = porHacer.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actualiza);
        break;

    case 'borrar':
        let borrar = porHacer.borrarTarea(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');
}