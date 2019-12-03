export class ExcelSupervisionVisualizarResponse{

    gastoSupervisionCabecera: FileGastoSupervisionCabecera;
    gastoSupervisionDetalle: FileGastoSupervisionDetalle[];

  }

  export interface WsResponseExcelSupervisionVisualizarResponse {
    response: ExcelSupervisionVisualizarResponse[];
    total: number;
    codResultado: number;
    msgResultado: string;
  }

  export class FileGastoSupervisionCabecera{
    idCodigo: string;
    fechaExcel: string;
    plazoEjecucion: string;
    total: string;
  }

  export class FileGastoSupervisionDetalle{
    numero: string;
    descripcion: string;
    unidad: string;
    cantidadUnidad: string;
    costoUnitario: string;
    coefPart: string;
    parcial: string;
    subTotal: string;
    total: string;
  }
  