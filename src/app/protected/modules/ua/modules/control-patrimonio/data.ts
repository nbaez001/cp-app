import { Adquisicion } from './entities/adquisicion.model';

export const formasAdquisicion: Object[] = [
    { id: 1, nombre: 'C-COMPRA' },
    { id: 2, nombre: 'D-ACEPTACION DE DONACION' },
    { id: 3, nombre: 'F-FABRICACION DE BIENES' },
    { id: 4, nombre: 'P-PERMUTA DE BIENES' },
    { id: 5, nombre: 'R-REPOSICION DE BIENES' },
    { id: 6, nombre: 'E-REPRODUCCION DE SEMOVIENTES' },
    { id: 7, nombre: 'S-SANEAMIENTOS DE BIENES SOBRANTES' },
    { id: 8, nombre: 'L-DISPOSICION LEGAL' },
    { id: 9, nombre: 'J-MANDATO JUDICIAL O ARBITRAL' },
    { id: 10, nombre: 'X-OPINION FAVORABLE DE ALTA OTORGADO POR LA ENTIDAD' },
];

export const aniosAdquisicion: Object[] = [
    { valor: 2019, nombre: '2019' },
    { valor: 2018, nombre: '2018' },
    { valor: 2017, nombre: '2017' },
    { valor: 2016, nombre: '2016' },
];

export const mesesAdquisicion: Object[] = [
    { valor: 0, nombre: 'ENERO' },
    { valor: 1, nombre: 'FEBRERO' },
    { valor: 2, nombre: 'MARZO' },
    { valor: 3, nombre: 'ABRIL' },
    { valor: 4, nombre: 'MAYO' },
    { valor: 5, nombre: 'JUNIO' },
    { valor: 6, nombre: 'JULIO' },
    { valor: 7, nombre: 'AGOSTO' },
    { valor: 8, nombre: 'SETIEMBRE' },
    { valor: 9, nombre: 'OCTUBRE' },
    { valor: 10, nombre: 'NOVIEMBRE' },
    { valor: 11, nombre: 'DICIEMBRE' },
];

export const estadosAdquisicion: Object[] = [
    { valor: 1, nombre: 'PENDIENTE' },
    { valor: 2, nombre: 'FINALIZADO' },
    { valor: 3, nombre: 'ANULADO' }
];

export const adquisiciones: Adquisicion[] = [
    { id: 1, idFormaAdquisicion: 1, nomFormaAdquisicion: 'ORDEN COMPRA', nroDocSustentatorio: '223-2019', fecha: new Date('2019-12-02'), idEstado: 1, nomEstado: 'COMPRADO', totalBienes: 10 }
];
