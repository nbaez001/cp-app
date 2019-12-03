


// MENSAJES DE EXCEPCIONES
export const MENSAJES = {
   
    PREFACTIBILIDAD: {
        
        TITLE: 'PERFIL PREFACTIBILIDAD',
        TITLE_FILTROS: 'FILTROS PERFIL PREFACTIBILIDAD',
        OK_PREFACTIBILIDAD: 'El estado del perfil de prefactibilidad fue modificado.',
        ERROR_SIN_DATA: 'No se encontraron resultado',
        ERROR_CARGA_ARCHIVO: 'Ocurrio un error al cargar el archivo',
        ERROR_ENVIAR_CORREO: 'Ocurrio un error al enviar correo a lider tumor',
        EXITO_ENVIAR_CORREO: 'Se envio un correo de manera exitosa',
        WARNING_FILTROS: 'Debe ingresar algún filtro de búsqueda',
        TITLE_OBSERVACIONES: 'Registrar Observaciones',
        INFO_SUCCESS_OBSERVACIONES: 'La observación se registro Correctamente',
        WARNING_OBSERVACIONES : 'Debe ingresar una observación',
        WARNING_AUSENCIA: 'Esta seguro de registrar su ausencia ? \n Los expedientes en estado PENDIENTE DE ASIGNACIÓN serán enviados al cordinador',
        WARNING_RETORNO: 'Esta seguro de activar su retorno ? \n Los expedientes en estado PENDIENTE DE ASIGNACIÓN serán retornados a su bandeja',
        WARNING_CAMPOS_OBLIGATORIOS: 'Todos los campos son obligatorios',
        OBSERVACION_REQUERIDA: 'Debe registrar al menos 1 observación',
        TITLE_ALCANCE_DESCRIPCION_SERVICIO: 'Registrar Alcance',
        WARNING_ALCANCE_DESCRIPCION_SERVICIO: 'Debe ingresar el alcance del servicio',
        
    },

    TDR:{
        TITLE_TDR: 'REGISTRAR TDR',
        TITLE_ALCANCE: 'Alcance y Descripción del Servicio',
        TITLE_ENTREGABLE: 'Entregable',
        TITLE_ACTIVIDAD: 'Actividad',
        TITLE_ACTIVIDAD_MODIFICACION: 'Actividad',
        TITLE_CONDICION_GENERAL: 'Condición General',
        TITLE_CONDICION_PARTICULAR: 'Condición Particular',
        INFO_SUCCESS_ALCANCE: 'Registro Correcto!',
        INFO_SUCCESS_ENTREGABLE: 'Registro Correcto!',
        INFO_SUCCESS_TAB_1: 'Continue Ingresando los Objetivos y Alcances!',
        WARNING_ACTIVIDAD: 'Debe ingresar la actividad',
        INFO_SUCCESS_ACTIVIDAD: 'Registro Correcto!',
        WARNING_CONDICION_GENERAL: 'Debe ingresar la condición general',
        WARNING_CONDICION_PARTICULAR: 'Debe ingresar la condición particular',
        WARNING_CONDICION_PARTICULAR_PERFIL: 'Debe seleccionar un tipo de perfil de contratación',
        WARNING_DESCRIPCION_GENERAL_ENTREGABLE: 'Debe ingresar una descripción general de los entregables',
        INFO_SUCCESS_DESCRIPCION_GENERAL_ENTREGABLE: 'Registro Descripción Realizado!',
        INFO_SUCCESS_CONDICION_GENERAL: 'Registro Correcto!',
        INFO_SUCCESS_CONDICION_GENERAL_MODIFICADO: 'Modificación Correcta!',
        INFO_SUCCESS_CONDICION_PARTICULAR: 'Registro Correcto!',
        INFO_SUCCESS_ALCANCE_MODIFICACION: 'Modificación Correcta!',
        INFO_SUCCESS_ENTREGABLE_MODIFICACION: 'Modificación Correcta!',
        INFO_SUCCESS_ACTIVIDAD_ACTUALIZACION: 'Modicicación Correcta!',
        TITLE_ALCANCE_DESCRIPCION_SERVICIO: 'Registrar Alcance',
        WARNING_ENTREGABLE_NOMBRE: 'Debe ingresar el nombre del entregable',
        WARNING_ENTREGABLE_PLAZO: 'Debe ingresar el plazo deL entregable',
        WARNING_CAMPO_OBLIGATORIO_CODIGO_FORMATO: 'Debe seleccionar un código de formato',
        WARNING_CAMPO_OBLIGATORIO_UNIDAD_ELABORADOR: 'Debe seleccionar un unidad de elaboración',
        WARNING_CAMPO_OBLIGATORIO_DENOMICACION: 'Debe ingresar la denominación de contratación',
        WARNING_CAMPO_OBLIGATORIO_FINALIDAD: 'Debe ingresar la finalidad pública',
        WARNING_CAMPO_OBLIGATORIO_ANTECENDENTE: 'Debe ingresar el antecedente',
        INFO_SUCCESS_TDR: 'TDR creado de manera correcta!',
        TITLE_FORMATO_CODIGO: 'Formato Código - '
        
    },


    EXPEDIENTE_ASIGNAR:{
        TITLE: 'ASIGNAR EXPEDIENTE TÉCNICO',
        ENCARGADO_REQUERIDO: 'DEBE SELECCIONAR A UN PERSONAL PARA ASIGNAR',
        INFO_SUCCESS: 'ASIGNACIÓN REALIZADA',
    },

    PREFACTIBILIDAD_ENCARGADO:{
        TITLE_PRINCIPAL: 'ENVIAR EXPEDIENTE TÉCNICO',
        TITLE: 'DAR CONFORMIDAD',
        TITLE_OBSERVACION: 'OBSERVAR EXPEDIENTE',
        INFO_SUCCESS: 'CONFORMIDAD REALIZADA CORRECTAMENTE',
        INFO_SUCCESS_OBSERVACION: 'OBSERVACION REALIZADA CORRECTAMENTE',
        INFO_SUCCESS_EQUIPO_ELABORADOR: 'EQUIPO DE PROFESIONALES REGISTRADOS CORRECTAMENTE',
        ERROR_REGISTRAR_EQUIPO_ELABORADOR: 'ERROR AL REALIZAR EL REGISTRO DEL EQUIPO ELABORADOR',
        TITLE_PROFESIONALES: 'ELABORACIÓN  EXPEDIENTE TÉCNICO',
        ENVIAR_PARA_APROBACION : '¿Está seguro de enviar el expediente al coordinador para su aprobación?',

        WARNING_ARQUITECTO: 'Debe seleccionar un arquitecto',
        WARNING_CIVIL: 'Debe seleccionar un ingeniero civil',
        WARNING_ELECTRICO: 'Debe seleccionar un ingeniero eléctrico',
        WARNING_SANITARIO: 'Debe seleccionar un ingeniero sanitario',

    },

    PREFACTIBILIDAD_COORDINADOR:{
        TITLE: 'DAR CONFORMIDAD',
        INFO_SUCCESS: 'CONFORMIDAD REALIZADA',
        DERIVAR_ENCARGADO_CONFIRM : '¿Está seguro de derivar al encargado el código: ',
        APROBAR_EXPEDIENTE:'¿Está seguro de aprobar el expediente?',
        ENVIAR_PARA_APROBACION : '¿Está seguro de aprobar el expediente?',
    },

    EXCEL: 'EXPORTAR A EXCEL',
    EXCEL_NO_DATA_FOUND: 'NO EXISTEN DATOS QUE EXPORTAR !',
    ERROR_EXPORTAR_EXCEL :'Error en Servicio de Exportar Excel',
    WARNIG_USER_PASSWOR_LOGIN: 'El usuario o contraseña son incorrectos',
    ERROR_LOGIN: 'Error de autentificación del usuario',
    ERROR_CARGA_SERVICIO: 'Error en el Servidor.',
    ERROR_CAPTCHA: 'Error al obtener captcha',
    ERROR_FORGOTPASSWORD: 'Error al enviar solicitud de nueva contraseña',
    ERROR_DOCREQUERIDO: 'Error - No hay documentos requeridos',
    ERROR_CAMPOS: 'Validar los campos requeridos',
    ERROR_VALIDA_DOC: 'Validar documentos requeridos',
    ERROR_SERVICIO: 'Error al obtener los datos del Servidor.',
    ERROR_NOFUNCION: 'Ocurrio un error',
    INFO_FORGOTPASSWORD: 'Se envio un enlace a tu correo...',
    INFO_SUCCESS: 'Consulta Exitosa.',
    INFO_SALIR: '¿Desea salir?',
    INFO_SALIR2: 'Se perderan los cambios.',
    INFO_ATRAS: '¿Desea ir atras?  Se perderan los cambios...',
    INFO_ACEPTAR: 'Se registro Correctamente',
    INFO_FECHA_INICIO: 'Por favor, ingresar la fecha de inicio antes de grabar',
    INFO_FECHA_FIN: 'Por favor, ingresar la fecha fin antes de grabar',
    INFO_NO_DATA: 'No se encontraron resultados',
    DERIVAR_COORDINADOR_CONFIRM : '¿Está seguro de derivar al coordinador el código: ',
    WARNING_ASIGNAR_ENCARGADO : 'Sólo puede asignar un encargado',
    ERROR_SERVICIO_ASIGNAR_ENCARGADO:'Ocurrio un error no se pudo realizar la asignacion',
    ERROR_SERVICIO_CONFORMIDAD:'Ocurrio un error no se pudo realizar la conformidad',
    ERROR_SERVICIO_OBSERVACION:'Ocurrio un error no se pudo cambiar el expediente a OBSERVADO',
    ARCHIVO_INFO_SUCCESS:'Archivo se adjunto correctamente',
    ARCHIVO_ERROR_CARGA:'Error al adjuntar el archivo',
    ARCHIVO_TITLE:'ADJUNTAR ARCHIVO',
    ARCHIVO_TIPO_DOC_REQUERIDO : 'Debe seleccionar un tipo de documento',
    ENVIAR_DE_ENCARGADO_A_COORDINADOR_CONFIRM : '¿Está seguro de enviar el expediente técnico al coordinador?',
    ARCHIVO_PROCESO_PENDIENTE_ELIMINADO: 'El archivo no se puede eliminar, porque se encuenta en proceso pendiente', 
    ARCHIVO_CONFIRMAR_CONFORMIDAD_TITLE_PRESUPUESTO: 'PRESUPUESTO',
    ARCHIVO_CONFIRMAR_CONFORMIDAD_TITLE_PARTIDA: 'PARTIDA',
    ARCHIVO_CONFIRMAR_CONFORMIDAD_TITLE_GENERAL: 'DESAGREGADO DE GASTOS GENERALES',
    ARCHIVO_CONFIRMAR_CONFORMIDAD_TITLE_SUPERVISION: 'DESAGREGADO DE GASTOS SUPERVISIÓN',
    ARCHIVO_CONFIRMAR_CONFORMIDAD_EXCEL: 'Esta seguro de dar conformidad?',
    ARCHIVO_CONFORMIDAD_INFO_SUCCESS:'La conformidad ha sido realizada',


   

  };

  export const TIPO_USUARIO = {
    JEFE_UPS: 'JEFE_UPS',
    COORDINADOR_UPS: 'COORDINADOR_UPS',
    ENCARGADO_EXPEDIENTE: 'ENCARGADO_EXPEDIENTES_UPS'
  }
  