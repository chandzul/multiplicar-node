/**
 * Paquete para crear las tablas de multiplicar
 * en archivos
 */

const argv = require('./config/yargs').argv;
// const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let colors = require('colors/safe');
let comando = argv._[0];

switch(comando){
	case 'listar':
		listarTabla(argv.base, argv.limite);
	break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then( archivo => console.log(`Archivo creado: `, colors.green(archivo)))
			.catch( err => console.log(err));
	break;

	default:
		console.log(colors.red('Comando no reconocido'));
}

// console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];