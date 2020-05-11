/*
Author: Cristian Malaver ALzate
Description: codigo para funcionalidad de simulador 
Date: 2/04/2020
*/
const PrecioMercado = 51490000;
const PrecioMercadoIva = 51818440;
const ValorActIva = 40390000;
const AccesoriosIva = 328440;
var TotalAct = ValorActIva + AccesoriosIva;
var Inputnum = "";
var checkBox = document.getElementById("myCheck");
var interes = "";
const timeindays_depreciated = 1800;
var CPT;
//Componente Operativo

var seguros;
var Matricundinamarca;
var Matriotros;
var Soat;
var ManttoPreventivo;
var ManttoCorrectivo;
var RevisionTM;
var Impuestos;
var Traslado;
var Gastosoperativos;
var Chevystar;
var Comisiones;
var Cupo;
var Gestor;
var Llantas;
var Stand;
var ConversionDesconversion;
var PolizasAdicionales;
var CupoChatarrizacion;
var ExcepPicoyPlaca;


//funcion de renting tradicional 

function RentingTradicional(interes, plazoo, CO, Residual, CPT) {
    //calculo de A 
    let nuevoa = (1 + interes);
    //console.log(nuevoa);
    let nuevoa1 = Math.pow(nuevoa, -plazoo);
    let nuevoa2 = 1 - nuevoa1;
    let A = nuevoa2 / interes;
    //calculo de B
    let vfutu = 1 + interes;
    console.log(vfutu);
    let vfutur = Math.pow(vfutu, -plazoo);
    let B = (Residual * vfutur);
    //Calculo de componente financiero 
    let comp = TotalAct - B;
    let compfin = comp / A;
    console.log("A: "+A);
    console.log("B: "+B);
    //console.log("vfutur: "+vfutur);
    //console.log("interes: "+interes);
    console.log("compo financiero: "+compfin );
    console.log("compo operativo: "+CO );
    //calculo de renting antes de iva, iva y despues de iva 
    let Valorantesimp = Math.round(CO + compfin);      //AQUI COMIENZA
    let impiva = Valorantesimp / 30;
    let depreciacion = ValorActIva / timeindays_depreciated;
    let resta = impiva - depreciacion;
    let soloiva = Math.round(resta * 0.19 * 30);
    let Rtontal = Math.round(Valorantesimp + soloiva);
    //calculo comparativo
    let Fpago = (1 + 0.012);
    let Fpago2 = Math.pow(Fpago, -plazoo);
    let Fpago3 = 1 - Fpago2;
    let A1 = Fpago3 / 0.012;
    let vfutu1 = 1 + 0.012;
    let vfutur1 = Math.pow(vfutu1, -plazoo);
    let B1 = 0 * vfutur1;
    let comp1 = PrecioMercadoIva - B1;
    let cuotafinan = Math.round(comp1 / A1);
    let cuotacpt = Math.round(CPT / plazoo);
    let ctm = Math.round(cuotacpt + cuotafinan);
    let ahorro = ctm - Rtontal;
    // mostrar valores en campos correspondientes y con sus formatos 
    document.getElementById("Total Canon").value = formatNumber.new(Valorantesimp, "$ ");
    document.getElementById("Iva").value = formatNumber.new(soloiva, "$ ");
    document.getElementById("Total Canon + Iva").value = formatNumber.new(Rtontal, "$ ");
    document.getElementById("Cuota financiación").value = formatNumber.new(cuotafinan, "$ ");
    document.getElementById("CTP").value = formatNumber.new(CPT, "$ ");
    document.getElementById("CTP Mensual").value = formatNumber.new(cuotacpt, "$ ");
    document.getElementById("Cuota total mensual").value = formatNumber.new(ctm, "$ ");
    document.getElementById("Canon Renting mensual").value = formatNumber.new(Rtontal, "$ ");
    document.getElementById("Tu ahorro mensual con Renting es de:").value = formatNumber.new(ahorro, "$ ");
}
function RentingGarantizado1Pago(valorini, interes, plazoo, CO, Residual, CPT) {
    let porcentaje = (valorini / Residual);
    let porcentaje2 = Math.round(porcentaje * 100);
    document.getElementById("ValorInicial").value = (porcentaje2 + "%");
    document.getElementById("ValorInicial1").value = (formatNumber.new(valorini));
    let capital = (TotalAct - valorini);
    let capital2 = (PrecioMercadoIva - valorini);
    // calculo de A
    let nuevoa = (1 + interes);
    let nuevoa1 = Math.pow(nuevoa, -plazoo);
    let nuevoa2 = 1 - nuevoa1;
    let A = nuevoa2 / interes;
    // calculo de B
    valorfinal = 0;
    let vfutu = 1 + interes;
    let vfutur = Math.pow(vfutu, -plazoo);
    let B = valorfinal * vfutur;
    // calculo de componente financiero
    let comp = capital - B;
    let compfin = comp / A;
    //calculo de valor renting antes de iva, iva y despues de iva
    let Valorantesimp = Math.round(compfin + CO);
    let impiva = Valorantesimp / 30;
    let depreciacion = ValorActIva / timeindays_depreciated;
    let resta = impiva - depreciacion;
    let soloiva = Math.round(resta * 0.19 * 30);
    //calculo comparativo
    if (soloiva < 0) {
        soloiva = 0;
        let Rtontal = Math.round(Valorantesimp + soloiva);        
        //calculo comparativo
        let Fpago = (1 + 0.01);
        let Fpago2 = Math.pow(Fpago, -plazoo);
        let Fpago3 = 1 - Fpago2;
        let A1 = Fpago3 / 0.01;
        let vfutu1 = 1 + 0.01;
        let vfutur1 = Math.pow(vfutu1, -plazoo);
        let B1 = 1000 * vfutur1;
        let comp1 = capital2 - B1;
        let cuotafinan = Math.round(comp1 / A1);
        let cuotacpt = Math.round(CPT / plazoo);
        let ctm = Math.round(cuotacpt + cuotafinan);
        let ahorro = ctm - Rtontal;
        //mostrar en campos correspondientes los valores
        document.getElementById("Total Canon1").value = formatNumber.new(Valorantesimp, "$ ");
        document.getElementById("Iva1").value = formatNumber.new(soloiva, "$ ");
        document.getElementById("Total Canon + Iva1").value = formatNumber.new(Rtontal, "$ ");
        document.getElementById("Pago Inicial").value = formatNumber.new(valorini, "$ ");
        document.getElementById("Opcion de compra").value = formatNumber.new(0, "$ ");
        document.getElementById("Cuota financiación").value = formatNumber.new(cuotafinan, "$ ");
        document.getElementById("CTP").value = formatNumber.new(CPT, "$ ");
        document.getElementById("CTP Mensual").value = formatNumber.new(cuotacpt, "$ ");
        document.getElementById("Cuota total mensual").value = formatNumber.new(ctm, "$ ");
        document.getElementById("Canon Renting mensual").value = formatNumber.new(Rtontal, "$ ");
        document.getElementById("Tu ahorro mensual con Renting es de:").value = formatNumber.new(ahorro, "$ ");

    }
    else {
        //calculo comparativo
        let Rtontal = Math.round(Valorantesimp + soloiva);
        let Fpago = (1 + 0.01);
        let Fpago2 = Math.pow(Fpago, -plazoo);
        let Fpago3 = 1 - Fpago2;
        let A1 = Fpago3 / 0.01;

        let vfutu1 = 1 + 0.01;
        let vfutur1 = Math.pow(vfutu1, -plazoo);
        let B1 = 1000 * vfutur1;

        let comp1 = capital2 - B1;
        let cuotafinan = Math.round(comp1 / A1);

        let cuotacpt = Math.round(CPT / plazoo);
        let ctm = Math.round(cuotacpt + cuotafinan);
        let ahorro = ctm - Rtontal;
        //mostrar en campos correspondientes los valores
        document.getElementById("Total Canon1").value = formatNumber.new(Valorantesimp, "$ ");
        document.getElementById("Iva1").value = formatNumber.new(soloiva, "$ ");
        document.getElementById("Total Canon + Iva1").value = formatNumber.new(Rtontal, "$ ");
        document.getElementById("Pago Inicial").value = formatNumber.new(valorini, "$ ");
        document.getElementById("Opcion de compra").value = formatNumber.new(0, "$ ");
        document.getElementById("Cuota financiación").value = formatNumber.new(cuotafinan, "$ ");
        document.getElementById("CTP").value = formatNumber.new(CPT, "$ ");
        document.getElementById("CTP Mensual").value = formatNumber.new(cuotacpt, "$ ");
        document.getElementById("Cuota total mensual").value = formatNumber.new(ctm, "$ ");
        document.getElementById("Canon Renting mensual").value = formatNumber.new(Rtontal, "$ ");
        document.getElementById("Tu ahorro mensual con Renting es de:").value = formatNumber.new(ahorro, "$ ");
    }
}
function RentingGarantizado2Pago(valorini, interes, plazoo, CO, ResidualMin, CPT) {
    valorfinal = (ResidualMin - valorini)
    let porcentaje = (valorini / ResidualMin);
    let porcentaje1 = (1 - porcentaje);
    let porcentaje2 = Math.round(porcentaje * 100);
    let porcentaje3 = Math.round(porcentaje1 * 100);
    document.getElementById("ValorInicial").value = (porcentaje2 + "%");
    document.getElementById("ValorF").value = (porcentaje3 + "%");
    document.getElementById("ValorFinal1").value = (formatNumber.new(valorfinal));
    document.getElementById("ValorInicial1").value = (formatNumber.new(valorini));
    let capital = (TotalAct - valorini);
    let capital2 = (PrecioMercadoIva - valorini);
    // calculo A
    let nuevoa = (1 + interes);
    let nuevoa1 = Math.pow(nuevoa, -plazoo);
    let nuevoa2 = 1 - nuevoa1;
    let A = nuevoa2 / interes;
    // calculo de B
    let vfutu = 1 + interes;
    let vfutur = Math.pow(vfutu, -plazoo);
    let B = valorfinal * vfutur;
    // calculo de componente financiero
    let comp = capital - B;
    let compfin = comp / A;
    // calculo de renting antes de iva, iva y final
    let Valorantesimp = Math.round(compfin + CO);
    let impiva = Valorantesimp / 30;
    let depreciacion = ValorActIva / timeindays_depreciated;
    let resta = impiva - depreciacion;
    let soloiva = Math.round(resta * 0.19 * 30);
    let Rtontal = Math.round(Valorantesimp + soloiva);
    //calculo comparativo
    let Fpago = (1 + 0.01);
    let Fpago2 = Math.pow(Fpago, -plazoo);
    let Fpago3 = 1 - Fpago2;
    let A1 = Fpago3 / 0.01;
    let vfutu1 = 1 + 0.01;
    let vfutur1 = Math.pow(vfutu1, -plazoo);
    let B1 = valorfinal * vfutur1;
    let comp1 = capital2 - B1;
    let cuotafinan = Math.round(comp1 / A1);
    let cuotacpt = Math.round(CPT / plazoo);
    let ctm = Math.round(cuotacpt + cuotafinan);
    let ahorro = ctm - Rtontal;
    //mostrar datos en campos correspondientes    
    document.getElementById("Cuota financiación").value = formatNumber.new(cuotafinan, "$ ");
    document.getElementById("CTP").value = formatNumber.new(CPT, "$ ");
    document.getElementById("CTP Mensual").value = formatNumber.new(cuotacpt, "$ ");
    document.getElementById("Cuota total mensual").value = formatNumber.new(ctm, "$ ");
    document.getElementById("Canon Renting mensual").value = formatNumber.new(Rtontal, "$ ");
    document.getElementById("Tu ahorro mensual con Renting es de:").value = formatNumber.new(ahorro, "$ ");
    document.getElementById("Total Canon1").value = formatNumber.new(Valorantesimp, "$ ");
    document.getElementById("Iva1").value = formatNumber.new(soloiva, "$ ");
    document.getElementById("Total Canon + Iva1").value = formatNumber.new(Rtontal, "$ ");
    document.getElementById("Pago Inicial").value = formatNumber.new(valorini, "$ ");
    document.getElementById("Opcion de compra").value = formatNumber.new(valorfinal, "$ ");

}

var formatNumber = {
    separador: ".", // separador para los miles
    sepDecimal: ',', // separador para los decimales
    formatear: function (num) {
        num += '';
        var splitStr = num.split('.');
        var splitLeft = splitStr[0];
        var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
            splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
        }
        return this.simbol + splitLeft + splitRight;
    },
    new: function (num, simbol) {
        this.simbol = simbol || '';
        return this.formatear(num);
    }
}

function formatt(g) {
    var num = g.value.replace(/\./g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        g.value = num;
        Inputnum = num;
        DataValidator();

    }

    else {
        alert('Solo se permiten numeros');
        g.value = g.value.replace(/[^\d\.]*/g, '');
    }
}

function format(g) {
    var num = g.value.replace(/\./g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        g.value = num;
    }

    else {
        alert('Solo se permiten numeros');
        g.value = g.value.replace(/[^\d\.]*/g, '');
    }
}
function myFunction() {
  
    var text = document.getElementById("ValorFinal");

    if (checkBox.checked) {
        text.style.visibility = "visible";
        DataValidator();
    } else {
        text.style.visibility = "hidden";
        DataValidator();
    }
}

function getDataSelect(valueSelect, select) {
    if (valueSelect != "Escoja Opcion") {
        let idInput = "";
        let data = valueSelect;

        switch (select) {
            case 0:
                idInput = "plazo"
                document.getElementById("plazo1").value = data;
                break;

            case 1:
                idInput = "km"
                break;
            case 2:
                idInput = "matricula"
                break;
            case 3:
                idInput = "TipoRenting"
                break;


        }
        document.getElementById(idInput).value = data;
        DataValidator();
    } else {
        alert("valide opcion")
    }


}
function Show() {
    document.getElementById("titulore").style.display = "none";
    document.getElementById("Renting Tradicional1").style.display = "block";
    document.getElementById("Residual").style.display = "none";
    document.getElementById("Residual garantizado1").style.display = "none"
    document.getElementById("Pago Inicial").style.display = "none"
    document.getElementById("Opcion de compra").style.display = "none"
    document.getElementById("Pago Inicial1").style.display = "none"
    document.getElementById("Opcion de compra1").style.display = "none"
    document.getElementById("pi").style.display = "none"
    document.getElementById("oc").style.display = "none"

}
function NotShow() {
    document.getElementById("titulore").style.display = "block";
    document.getElementById("Renting Tradicional1").style.display = "none";
    document.getElementById("Residual").style.display = "inline";
    document.getElementById("Residual garantizado1").style.display = "block"
    document.getElementById("Pago Inicial").style.display = "block"
    document.getElementById("Opcion de compra").style.display = "block"
    document.getElementById("Pago Inicial1").style.display = "block"
    document.getElementById("Opcion de compra1").style.display = "block"
    document.getElementById("pi").style.display = "block"
    document.getElementById("oc").style.display = "block"

}


function DataValidator() {
    let arrayData = new Array();
    var plazo = document.getElementById("inputplazo");
    var km = document.getElementById("inputkm");
    var matricula = document.getElementById("inputmatri");
    var TipoRenting = document.getElementById("inputTipoRenting");
    //opcion de plazo
    arrayData[0] = plazo.options[plazo.selectedIndex].value;
    //opcion de kilometraje    
    arrayData[1] = km.options[km.selectedIndex].value;
    //opcion de matricula
    arrayData[2] = matricula.options[matricula.selectedIndex].value;
    //opcion de tipo de renting
    arrayData[3] = TipoRenting.options[TipoRenting.selectedIndex].value;

    if (arrayData[3] == "Residual garantizado") {
        NotShow();
    }
    else if (arrayData[3] == "Renting Tradicional") {
        Show();
    }

    if (arrayData[0] == "36") {
        document.getElementById("Residual").value = (formatNumber.new(Residual + ",00", "$ "));
        Residual = 32850620;
        CPT = 15280000;
        var ResidualMin = (Residual * 0.8);
        interes = 0.1020 / 12;
        seguros = 142970;
        Matricundinamarca = 35420;
        Matriotros = 27992;
        Soat = 33267;
        ManttoPreventivo = 43316;
        ManttoCorrectivo = 0;
        RevisionTM = 0;
        Impuestos = 53118;
        Traslado = 0;
        Gastosoperativos = 10318;
        Chevystar = 35739;
        Comisiones = 31612;
        Cupo = 0;
        Gestor = 0;
        Llantas = 0;
        Stand = 0;
        ConversionDesconversion = 0;
        PolizasAdicionales = 0;
        CupoChatarrizacion = 0;
        Imprevistos = 0;
        ExcepPicoyPlaca = 0;
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        if (arrayData[1] == "10000" & arrayData[2] == "Cundinamarca") {

            let AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);


                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                    }
                }
            }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Cundinamarca") {
            ManttoPreventivo = 65450;
            Gastosoperativos = 9703;
            let AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);


                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");

                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                    }
                }
            }
        }
        else if (arrayData[1] == "10000" & arrayData[2] == "Otro") {
            Matriotros = 41419;
            let AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);


                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                    }
                }
            }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Otro") {
            Matriotros = 41419;
            ManttoPreventivo = 65450;
            Gastosoperativos = 9703;
            let AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);


                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);

                    }
                }
            }
        }
    }
    else if (arrayData[0] == "48") {
        Residual = 29761220;
        var ResidualMin = (Residual * 0.8);
        CPT = 18245000;
        interes = 0.1040 / 12;
        seguros = 140795;
        Matricundinamarca = 27992;
        Matriotros = 27992;
        Soat = 35426;
        ManttoPreventivo = 41616;
        ManttoCorrectivo = 0;
        RevisionTM = 0;
        Impuestos = 51941;
        Traslado = 0;
        Gastosoperativos = 16940;
        Chevystar = 33597;
        Comisiones = 24983;
        Cupo = 0;
        Gestor = 0;
        Llantas = 0;
        Stand = 0;
        ConversionDesconversion = 0;
        PolizasAdicionales = 0;
        CupoChatarrizacion = 0;
        Imprevistos = 0;
        ExcepPicoyPlaca = 0;
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        document.getElementById("Residual").value = (formatNumber.new(Residual + ",00", "$ "));

        if (arrayData[1] == "10000" & arrayData[2] == "Cundinamarca") {
            let AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                }
            }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Cundinamarca") {
            Matricundinamarca = 27992;
            ManttoPreventivo = 61870;
            Gastosoperativos = 7668;
            let AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT)

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                }
            }
        }

        else if (arrayData[1] == "10000" & arrayData[2] == "Otro") {

            Matriotros = 32733;
            let AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                }
            }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Otro") {
            Matriotros = 32733;
            ManttoPreventivo = 61870;
            Gastosoperativos = 7668;
            let AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                }
            }
        }
    }
    else if (arrayData[0] == "60") {
        Residual = 26826290;
        let ResidualMin = (Residual * 0.8);
        CPT = 21210000;
        interes = 0.1040 / 12;
        seguros = 138442;
        Matricundinamarca = 23490;
        Matriotros = 27469;
        Soat = 37671;
        ManttoPreventivo = 46083;
        ManttoCorrectivo = 0;
        RevisionTM = 0;
        Impuestos = 50675;
        Traslado = 0;
        Gastosoperativos = 6435;
        Chevystar = 34579;
        Comisiones = 20965;
        Cupo = 0;
        Gestor = 0;
        Llantas = 0;
        Stand = 0;
        ConversionDesconversion = 0;
        PolizasAdicionales = 0;
        CupoChatarrizacion = 0;
        Imprevistos = 0;
        ExcepPicoyPlaca = 0;
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        document.getElementById("Residual").value = (formatNumber.new(Residual + ",00", "$ "));

        if (arrayData[1] == "10000" & arrayData[2] == "Cundinamarca") {
            let AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                }
            }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Cundinamarca") {
            ManttoPreventivo = 59780;
            let AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                }
            }
        }
        else if (arrayData[1] == "10000" & arrayData[2] == "Otro") {
            Matriotros = 27469;
            let AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                }
            }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Otro") {
            var Matriotros = 27469;
            var ManttoPreventivo = 59780;
            let AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual, CPT);

            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual, CPT);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin, CPT);
                    }
                }
            }
        }
    }

}

