import { Adquisicion } from './entities/adquisicion.model';
import { CatalogoBien } from './entities/catalogo-bien.model';

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

export const estadosAdquisicion = [
    { id: 1, nombre: 'PENDIENTE' },
    { id: 2, nombre: 'FINALIZADO' },
    { id: 3, nombre: 'ANULADO' }
];

export const adquisiciones: Adquisicion[] = [
    { id: 1, idFormaAdquisicion: 1, nomFormaAdquisicion: 'ORDEN COMPRA', nroDocSustentatorio: '223-2019', fecha: new Date('2019-12-02'), idEstado: 1, nomEstado: 'COMPRADO', totalBienes: 10 }
];

export const gruposGenerico: object[] = [
    { codigo: '74', nombre: 'OFICINA' },
    { codigo: '81', nombre: 'RECREACION Y DEPORTE' },
    { codigo: '88', nombre: 'SEGURIDAD INDUSTRIAL' },
    { codigo: '95', nombre: 'TELECOMUNICACIONES' },
];

export const clasesGenerico: object[] = [
    { codigo: '08', nombre: 'COMPUTO' },
    { codigo: '22', nombre: 'EQUIPO' },
    { codigo: '29', nombre: 'FERROCARRIL' },
    { codigo: '36', nombre: 'MAQUINARIA PESADA' },
    { codigo: '50', nombre: 'MAQUINA' },
    { codigo: '64', nombre: 'MOBILIARIO' },
];

export const listaCatalogo: CatalogoBien[] = [
    { id: 1, codGrupoGenerico: '74', nomGrupoGenerico: 'OFICINA', codClaseGenerico: '08', nomClaseGenerico: 'COMPUTO', codigo: '74089992', denominacion: 'VIDEO CAMARA PARA COMPUTADORA' },
    { id: 1, codGrupoGenerico: '74', nomGrupoGenerico: 'OFICINA', codClaseGenerico: '08', nomClaseGenerico: 'COMPUTO', codigo: '74086800', denominacion: 'LECTORA DE DISCO COMPACTO EXTERNO COMPUTO - CD ROM' },
    { id: 1, codGrupoGenerico: '74', nomGrupoGenerico: 'OFICINA', codClaseGenerico: '08', nomClaseGenerico: 'COMPUTO', codigo: '74080950', denominacion: 'COMPUTADORA SERVIDOR - MAIN FRAME' },
    { id: 1, codGrupoGenerico: '74', nomGrupoGenerico: 'OFICINA', codClaseGenerico: '08', nomClaseGenerico: 'COMPUTO', codigo: '74080500', denominacion: 'COMPUTADORA PERSONAL PORTATIL' },
    { id: 1, codGrupoGenerico: '74', nomGrupoGenerico: 'OFICINA', codClaseGenerico: '08', nomClaseGenerico: 'COMPUTO', codigo: '74080275', denominacion: 'COMPUTADORA DE MANO - WORKPAD' },
];