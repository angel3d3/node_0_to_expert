const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        desc: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        desc: 'Lista la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        desc: 'Tamaño máximo de la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número."
        }
        if (isNaN(argv.h)) {
            throw 'El tamaño maximo de la tabla debe ser un número.'
        }
        return true
    })
    .argv;

module.exports = argv;