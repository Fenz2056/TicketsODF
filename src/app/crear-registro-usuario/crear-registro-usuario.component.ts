import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-crear-registro-usuario',
  templateUrl: './crear-registro-usuario.component.html',
  styleUrls: ['./crear-registro-usuario.component.scss']
})


export class CrearRegistroUsuarioComponent implements OnInit  {

  public EsClientePersonaJuridica: string[] = [ "Si, es una persona jurídica","No, no es una persona jurídica"];
  public EsClienteDocumentoRespaldo: string[] = [ "Si, si posee documentación","No, no posee documentación"];

  public EsMunicipioAgencia:       string[] = [ "Azacualpa", "Calpules", "Choloma", "Cofradía", "Comayagua", "Cuyamel",
                                                "Gracias", "El Progreso", "La Ceiba", "La Esperanza", "La Flecha",
                                                "La López", "Metrocentro", "Morazán", "Nueva Frontera", "Olanchito",
                                                "Peña Blanca", "Puerto Cortés", "Roatán", "Santa Bárbara", "Santa Cruz",
                                                "Santa Rosa","San Juan Pueblo", "Siguatepeque", "Taulabé",
                                                "Tela", "Tocoa", "Victoria", "Villa Nueva", "Yoro"];

  public EsTipoReclamo:             string[][] = 
                                              [ ["Atención al Cliente","Fallas del sistema informático"],
                                                ["Atención al Cliente","Facturación"],
                                                ["Atención al Cliente","Billetes falsos entregados en caja"],
                                                ["Atención al Cliente","Cajas de Seguridad"],
                                                ["Atención al Cliente","Demora o incumplimientos en el envío de correspondencia"],
                                                ["Atención al Cliente","Sustitución de libretas a través del AutoBancos"],
                                                ["Banca por Internet","Accesos no autorizados"],
                                                ["Banca por Internet","Operaciones no registrados por la entidad"],
                                                ["Banca por Internet","Cargos no reconocidos por el usuario financiero"],
                                                ["Banca por Internet","Central de Información Crediticia"],
                                                ["Banca por Internet","Registro indebido"],
                                                ["Banca por Internet","Categoría de clasificación de crédito"],
                                                ["Banca por Internet","Usurpación de Identidad."],
                                                ["Banca por Internet","Comisiones y Cobros"],
                                                ["Banca por Internet","Comisiones/Cobros en depósitos de ahorro"],
                                                ["Banca por Internet","Comisiones/Cobros en cuenta corriente"],
                                                ["Banca por Internet","Comisiones/Cobros en certificado de depósito"],
                                                ["Banca por Internet","Comisiones/Cobros en créditos"],
                                                ["Banca por Internet","Comisiones/Cobros en tarjeta de crédito"],
                                                ["Banca por Internet","Comisiones/Cobros en giros"],
                                                ["Banca por Internet","Comisiones/Cobros en cajero automático"],
                                                ["Banca por Internet","Comisiones/Cobros por depósitos en cuenta ajena"],
                                                ["Banca por Internet","Comisiones o cargos por pago adelantado de crédito"],
                                                ["Banca por Internet","Comisiones por emisión de constancias"],
                                                ["Banca por Internet","Comisiones/Cobros por liberación de fondos"],
                                                ["Banca por Internet","Comisiones/Cobros por emisión de cheques"],
                                                ["Banca por Internet","Operaciones con divisas"],
                                                ["Créditos","Contrato"],  
                                                ["Créditos","Monto desembolsado difiere de monto contratado"],  
                                                ["Créditos","Pago efectuado por el usuario no registrado"],  
                                                ["Créditos","Intereses cobrados no corresponden a tasa de contrato"],  
                                                ["Créditos","Débitos y cargos no reconocidos"],  
                                                ["Créditos","Seguro de Vida"],  
                                                ["Créditos","Seguro de Daños"],  
                                                ["Créditos","Seguro de Desempleo"],  
                                                ["Créditos","Finiquito de crédito"],  
                                                ["Créditos","Acciones de cobranza extrajudicial"],  
                                                ["Créditos","Proceso judicial"],  
                                                ["Créditos","Convenio de Pago"],  
                                                ["Créditos","Liberación de garantías"],  
                                                ["Créditos","Crédito no reconocido por el usuario financiero"],  
                                                ["Créditos","Garantía personal o fianza"],  
                                                ["Créditos","Usurpación de Identidad"],  
                                                ["Créditos","Devolución de documentos entregados para la otorgación del crédito"], 
                                                ["Cuentas Corrientes","Firmas autorizadas"], 
                                                ["Cuentas Corrientes","Contratos"], 
                                                ["Cuentas Corrientes","Intereses"],   
                                                ["Cuentas Corrientes","Retiros/cargos no reconocidos"], 
                                                ["Cuentas Corrientes","Rechazo indebido de Cheques"], 
                                                ["Cuentas Corrientes","Cheque falsificado/extraviado"],    
                                                ["Cuentas Corrientes","Diferencia en Saldos"], 
                                                ["Cuentas Corrientes","Transferencia de fondos"], 
                                                ["Cuentas Corrientes","Cierre/bloqueo/embargo sin autorización"], 
                                                ["Certificado de Depósito","Cancelación "],
                                                ["Certificado de Depósito","Intereses"],
                                                ["Certificado de Depósito","Redención/Devolución anticipada"],
                                                ["Certificado de Depósito","Renovación"],
                                                ["Certificado de Depósito","Modificaciones del certificado"],
                                                ["Certificado de Depósito","Cierre/Bloqueo/Embargo"],
                                                ["Certificado de Depósito","Pérdida/Extravió del certificado"],  
                                                ["Depósito de Ahorro","Firmas autorizadas"],     
                                                ["Depósito de Ahorro","Contratos"],     
                                                ["Depósito de Ahorro","Intereses"],     
                                                ["Depósito de Ahorro","Retiros/Cargos no reconocidos"],     
                                                ["Depósito de Ahorro","Operaciones no efectuadas por la entidad"],     
                                                ["Depósito de Ahorro","Diferencia en Saldos"],     
                                                ["Depósito de Ahorro","Transferencia de fondos"],     
                                                ["Depósito de Ahorro","Cierre/Bloqueo/Embargo sin autorización"],    
                                                ["Órdenes Judiciales y Retenciones","Incumplimiento a orden judicial"],     
                                                ["Órdenes Judiciales y Retenciones","Embargo"],
                                                ["Pago de Impuestos y Servicios","Pago de servicios no registrados por la entidad"],     
                                                ["Pago de Impuestos y Servicios","Pago de impuestos no registrados por la entidad"],   
                                                ["Tarjeta de Crédito","Habilitación de tarjeta"],     
                                                ["Tarjeta de Crédito","Contratos"],     
                                                ["Tarjeta de Crédito","Convenio de pago"],     
                                                ["Tarjeta de Crédito","Dinero, no dispensado en cajero automático"],     
                                                ["Tarjeta de Crédito","Pago incompleto en cajero automático"],     
                                                ["Tarjeta de Crédito","Solicitud de bloqueo no realizada"],     
                                                ["Tarjeta de Crédito","Reposición de tarjeta"],     
                                                ["Tarjeta de Crédito","Consumos no reconocidos punto de venta nacional"],     
                                                ["Tarjeta de Crédito","Consumos no reconocidos punto de venta exterior"],     
                                                ["Tarjeta de Crédito","Consumos no reconocidos por Internet"],   
                                                ["Tarjeta de Crédito","Débitos o cargos no reconocidos"],     
                                                ["Tarjeta de Crédito","Acciones de cobranza extrajudiciales"],     
                                                ["Tarjeta de Crédito","Servicios adicionales de tarjeta"],     
                                                ["Tarjeta de Crédito","Seguro de vida"],     
                                                ["Tarjeta de Crédito","Emisión de Tarjeta no solicitada"],   
                                                ["Tarjeta de Crédito","Usurpación de identidad"],     
                                                ["Tarjeta de Crédito","Retención de tarjeta en cajero automático"],     
                                                ["Tarjeta de Crédito","Billete falso entregado en cajero automático"],     
                                                ["Tarjeta de Crédito","Gestión de crédito en Mora"], 
                                                ["Tarjeta de Débito","Habilitación de tarjeta"],     
                                                ["Tarjeta de Débito","Dinero no dispensado en cajero automático"],     
                                                ["Tarjeta de Débito","Pago incompleto en cajero automático"],     
                                                ["Tarjeta de Débito","Solicitud de bloqueo de tarjeta no realizada"],     
                                                ["Tarjeta de Débito","Reposición de tarjeta"],     
                                                ["Tarjeta de Débito","Cobro de comisiones por uso de tarjeta de débito en cajero automático en exceso a lo pactado"],     
                                                ["Tarjeta de Débito","Consumos no reconocidos punto de venta nacional "],     
                                                ["Tarjeta de Débito","Consumos no reconocidos punto de venta exterior"],     
                                                ["Tarjeta de Débito","Billete falso entregado en cajero automático"],     
                                                ["Tarjeta de Débito","Usurpación de identidad"],  
                                                ["Seguro de Personas","Cumplimiento de condiciones de la póliza"],     
                                                ["Seguro de Personas","No traslado de primas"],     
                                                ["Seguro de Personas","Comunicación extemporánea de la ocurrencia de siniestro"],     
                                                ["Seguro de Personas","Pago de indemnizaciones"],     
                                                ["Seguro de Personas","Cobertura"],     
                                                ["Seguro de Personas","Aspectos administrativos"],     
                                                ["Seguro de Personas","Variación en la condiciones de la póliza"],     
                                                ["Seguro de Personas","Pago de reclamo"],     
                                                ["Seguro de Personas","Condiciones Generales o Especiales no registradas"],    
                                                ["Seguro de Médico","Cumplimiento condiciones póliza"],     
                                                ["Seguro de Médico","Cobro de primas"],     
                                                ["Seguro de Médico","No traslado de primas"],     
                                                ["Seguro de Médico","Comunicación extemporánea de la ocurrencia del siniestro "],     
                                                ["Seguro de Médico","Cobertura"],     
                                                ["Seguro de Médico","Aspectos administrativos"],     
                                                ["Seguro de Médico","Variación en las condiciones de la póliza"],     
                                                ["Seguro de Médico","Gastos médicos"],     
                                                ["Seguro de Médico","Pago de reclamo"],     
                                                ["Seguro de Médico","Redes de servicios médicos"],     
                                                ["Seguro de Médico","Condiciones Generales o Especiales no registradas"], 
                                                ["Seguro de Vehículos","Cumplimiento condiciones póliza"],     
                                                ["Seguro de Vehículos","Cobro de primas"],     
                                                ["Seguro de Vehículos","No traslado de primas"],     
                                                ["Seguro de Vehículos","Comunicación extemporánea de la ocurrencia del siniestro "],     
                                                ["Seguro de Vehículos","Cobertura"],     
                                                ["Seguro de Vehículos","Aspectos administrativos"],     
                                                ["Seguro de Vehículos","Variación en las condiciones de la póliza"],     
                                                ["Seguro de Vehículos","Pago de reclamo"],     
                                                ["Seguro de Vehículos","Servicios de Asistencia Vial"],     
                                                ["Seguro de Vehículos","Condiciones Generales o Especiales no registradas"],  
                                                ["Seguro de Generales","Cumplimiento de condiciones de la póliza "],     
                                                ["Seguro de Generales","Cobro de primas"],     
                                                ["Seguro de Generales","No traslado de primas"],     
                                                ["Seguro de Generales","Comunicación extemporánea de la ocurrencia del siniestro "],     
                                                ["Seguro de Generales","Cobertura"],     
                                                ["Seguro de Generales","Aspectos administrativos"],     
                                                ["Seguro de Generales","Variación en las condiciones de la póliza"],     
                                                ["Seguro de Generales","Siniestro"],     
                                                ["Seguro de Generales","Pago de cobertura"],     
                                                ["Seguro de Generales","Condiciones Generales o Especiales no registradas"],  
                                                ["Seguro de Pensiones","Tasas de Interés"],    
                                                ["Seguro de Pensiones","Errores de cálculo"],    
                                                ["Seguro de Pensiones","Comisiones por retiro y/o administración"],    
                                                ["Seguro de Pensiones","Seguros de vida y/o deuda."],                                                          

                                            ]
  emailPattern: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  numberphoneHonduras: any = /^\+504\s\d{4}-\d{4}$/;
  idnumberHonduras: any = /^[0-9]{13}$/;
  
                 


  public EsFormularioRegistro!: FormGroup
  constructor(private readonly fb:FormBuilder, private api: ApiService, private toastService: NgToastService){

  }

  Submit(){
    this.api.EsPostearResgistro(this.EsFormularioRegistro.value)
    .subscribe(res=>{
      this.toastService.success({detail:"Entrada satisfactoria!", summary:"Datos Ingresados!", duration:3000});
      this.EsFormularioRegistro.reset();
    })
  }

  ngOnInit(): void {
    this.EsFormularioRegistro = this.initForm() 
  }

  initForm(): FormGroup{
    return this.fb.group({
      EsNombresClientes:           ['',[Validators.required, Validators.minLength(5)]],
      EsApellidosClientes:         ['',[Validators.required, Validators.minLength(5)]],
      EsNumeroIdentidadCliente:    ['',[Validators.required,Validators.pattern(this.idnumberHonduras)]],
      EsEmailCliente:              ['',[Validators.required, Validators.minLength(4),Validators.pattern(this.emailPattern)]],
      EsTelefonoCliente:           ['',[Validators.required, Validators.minLength(8),Validators.pattern(this.numberphoneHonduras)]],
      EsDireccionCliente:          ['',[Validators.required, Validators.minLength(10)]],
      EsLocalizacionAgenciaActual: ['',Validators.required],
      EsNombrePersonalODEF:        ['',[Validators.required, Validators.minLength(6)]],
      EsCodigoAgencia:             ['',[Validators.required, Validators.minLength(3)]],
      EsClienteJuridico:           ['',Validators.required],
      EsFechaActual:               ['',Validators.required],
      EsTipoReclamoCliente:        ['',Validators.required],
      EsComentarioCliente:         ['',[Validators.required, Validators.minLength(3)]],
      EsComentarioEmpleado:        ['',[Validators.required, Validators.minLength(3)]],
      EsDocumnetacionCliente:      ['',Validators.required],
      EsDocumentacionReclamo:      ['',Validators.required],
    })
  }


 
 
}

