/*
Author: Cristian Malaver ALzate
Description: codigo para funcionalidad de simulador 
Date: 2/04/2020
*/
const PrecioMercado = 51490000;
const ValorActIva = 40390000;
const AccesoriosIva = 328440;
var TotalAct = ValorActIva + AccesoriosIva;
var Inputnum = "";
var checkBox = document.getElementById("myCheck");
var interes = "";
const timeindays_depreciated = 1800;





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

//Componente Operativo




//funcion de renting tradicional 

function RentingTradicional(interes, plazoo, CO, Residual) {
    //calculo de A 
    let nuevoa = (1 + interes);
    let nuevoa1 = Math.pow(nuevoa, -plazoo);
    let nuevoa2 = 1 - nuevoa1;
    let A = nuevoa2 / interes;
    //console.log("A:  " + A);
    //calculo de B
    let vfutu = 1 + interes;
    let vfutur = Math.pow(vfutu, -plazoo);
    let B = Residual * vfutur;
    //console.log("B: " + B);
    //Calculo de componente financiero 
    let comp = TotalAct - B;
    let compfin = comp / A;
    //console.log("componete financieroooooo:  " + Math.round(compfin));
    //calculo de renting antes de iva, iva y despues de iva 

    let Valorantesimp = Math.round(CO + compfin);
    let impiva = Valorantesimp / 30;
    let depreciacion = ValorActIva / timeindays_depreciated;
    let resta = impiva - depreciacion;
    let soloiva = Math.round(resta * 0.19 * 30);
    let Rtontal = Math.round(Valorantesimp + soloiva);
    //console.log("Iva:" + soloiva);
    //console.log("componente operativo:" + CO);
    //console.log("componente financiero:" + compfin);
    //console.log("total canon: " + Rtontal);
    // mostrar valores en campos correspondientes y con sus formatos 
    document.getElementById("Total Canon").value = formatNumber.new(Valorantesimp, "$ ");
    document.getElementById("Iva").value = formatNumber.new(soloiva, "$ ");
    document.getElementById("Total Canon + Iva").value = formatNumber.new(Rtontal, "$ ");
}
function RentingGarantizado1Pago(valorini, interes, plazoo, CO, Residual) {
    let porcentaje = (valorini / Residual);
    let porcentaje2 = Math.round(porcentaje * 100);
    document.getElementById("ValorInicial").value = (porcentaje2 + "%");
    document.getElementById("ValorInicial1").value = (formatNumber.new(valorini));
    let capital = (TotalAct - valorini);
    // calculo de A
    let nuevoa = (1 + interes);
    let nuevoa1 = Math.pow(nuevoa, -plazoo);
    let nuevoa2 = 1 - nuevoa1;
    let A = nuevoa2 / interes;
    //console.log("A:  " + A);
    // calculo de B
    valorfinal = 0;
    let vfutu = 1 + interes;
    let vfutur = Math.pow(vfutu, -plazoo);
    let B = valorfinal * vfutur;
    //console.log("B: " + B);
    // calculo de componente financiero
    let comp = capital - B;
    let compfin = comp / A;
    //console.log("componete financieroooooo:  " + Math.round(compfin));

    //calculo de valor renting antes de iva, iva y despues de iva
    let Valorantesimp = Math.round(compfin + CO);
    let impiva = Valorantesimp / 30;
    let depreciacion = ValorActIva / timeindays_depreciated;
    let resta = impiva - depreciacion;
    let soloiva = Math.round(resta * 0.19 * 30);
    if (soloiva < 0) {
        soloiva = 0;
        let Rtontal = Math.round(Valorantesimp + soloiva);
        //console.log("Iva:" + soloiva);
        //console.log("componente operativo:" + CO);
        //console.log("componente financiero:" + compfin);
        //console.log("total canon: " + Rtontal);
        //mostrar en campos correspondientes los valores
        document.getElementById("Total Canon1").value = formatNumber.new(Valorantesimp, "$ ");
        document.getElementById("Iva1").value = formatNumber.new(soloiva, "$ ");
        document.getElementById("Total Canon + Iva1").value = formatNumber.new(Rtontal, "$ ");
        document.getElementById("Pago Inicial").value = formatNumber.new(valorini, "$ ");
        document.getElementById("Opcion de compra").value = formatNumber.new(0, "$ ");

    }
    else {
        let Rtontal = Math.round(Valorantesimp + soloiva);
        //console.log("Iva:" + soloiva);
        //console.log("componente operativo:" + CO);
        //console.log("componente financiero:" + compfin);
        //console.log("total canon: " + Rtontal);
        document.getElementById("Total Canon1").value = formatNumber.new(Valorantesimp, "$ ");
        document.getElementById("Iva1").value = formatNumber.new(soloiva, "$ ");
        document.getElementById("Total Canon + Iva1").value = formatNumber.new(Rtontal, "$ ");
        document.getElementById("Pago Inicial").value = formatNumber.new(valorini, "$ ");
        document.getElementById("Opcion de compra").value = formatNumber.new(0, "$ ");
    }
}
function RentingGarantizado2Pago(valorini, interes, plazoo, CO, ResidualMin) {
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
    // calculo A
    let nuevoa = (1 + interes);
    let nuevoa1 = Math.pow(nuevoa, -plazoo);
    let nuevoa2 = 1 - nuevoa1;
    let A = nuevoa2 / interes;
    //console.log("A:  " + A);

    // calculo de B
    let vfutu = 1 + interes;
    let vfutur = Math.pow(vfutu, -plazoo);
    let B = valorfinal * vfutur;
    //console.log("B: " + B);
    // calculo de componente financiero
    let comp = capital - B;
    let compfin = comp / A;
    //console.log ("componete financieroooooo:  "+Math.round(compfin));

    // calculo de renting antes de iva, iva y final
    let Valorantesimp = Math.round(compfin + CO);
    let impiva = Valorantesimp / 30;
    let depreciacion = ValorActIva / timeindays_depreciated;
    let resta = impiva - depreciacion;
    let soloiva = Math.round(resta * 0.19 * 30);
    let Rtontal = Math.round(Valorantesimp + soloiva);
    //console.log("Iva:" + soloiva);
    //console.log("componente operativo:" + CO);
    //console.log("componente financiero:" + compfin);
    //console.log("total canon: " + Rtontal);
    //mostrar datos en campos correspondientes
    document.getElementById("Total Canon1").value = formatNumber.new(Valorantesimp, "$ ");
    document.getElementById("Iva1").value = formatNumber.new(soloiva, "$ ");
    document.getElementById("Total Canon + Iva1").value = formatNumber.new(Rtontal, "$ ");
    document.getElementById("Pago Inicial").value = formatNumber.new(valorini, "$ ");
    document.getElementById("Opcion de compra").value = formatNumber.new(valorfinal, "$ ");

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
        //Inputnum = num;
        //DataValidator();

    }

    else {
        alert('Solo se permiten numeros');
        g.value = g.value.replace(/[^\d\.]*/g, '');
    }


    //console.log(Inputnum);


}

window.onload = function () {
    //document.getElementById("Residual").disabled = true;
}

function myFunction() {
    // Get the checkbox

    // Get the output text
    var text = document.getElementById("ValorFinal");

    // If the checkbox is checked, display the output text
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

    //console.log(arrayData);

    if (arrayData[3] == "Residual garantizado") {
        //alert ("Residual garantizado")
        NotShow();
    }
    else if (arrayData[3] == "Renting Tradicional") {
        //alert ("Residual garantizado")
        Show();
    }

    if (arrayData[0] == "36") {
        document.getElementById("Residual").value = "$ 32.850.620,00";
        Residual = 32850620;
        var ResidualMin = (Residual * 0.8);
        interes = 0.1020 / 12;
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        if (arrayData[1] == "10000" & arrayData[2] == "Cundinamarca") {
            let seguros = 142970;
            let Matricundinamarca = 35420;
            let Matriotros = 27992;
            let Soat = 33267;
            let ManttoPreventivo = 43316;
            let ManttoCorrectivo = 0;
            let RevisionTM = 0;
            let Impuestos = 53118;
            let Traslado = 0;
            let Gastosoperativos = 10318;
            let Chevystar = 35739;
            let Comisiones = 31612;
            let Cupo = 0;
            let Gestor = 0;
            let Llantas = 0;
            let Stand = 0;
            let ConversionDesconversion = 0;
            let PolizasAdicionales = 0;
            let CupoChatarrizacion = 0;
            let Imprevistos = 0;
            let ExcepPicoyPlaca = 0;
            let AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            let CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Cundinamarca") {
            var seguros = 142970;
            var Matricundinamarca = 35420;
            var Matriotros = 27992;
            var Soat = 33267;
            var ManttoPreventivo = 65450;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 53118;
            var Traslado = 0;
            var Gastosoperativos = 9703;
            var Chevystar = 35739;
            var Comisiones = 31612;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
        else if (arrayData[1] == "10000" & arrayData[2] == "Otro") {
            var seguros = 142970;
            var Matricundinamarca = 35420;
            var Matriotros = 41419;
            var Soat = 33267;
            var ManttoPreventivo = 43316;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 53118;
            var Traslado = 0;
            var Gastosoperativos = 10318;
            var Chevystar = 35739;
            var Comisiones = 31612;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Otro") {
            var seguros = 142970;
            var Matricundinamarca = 35420;
            var Matriotros = 41419;
            var Soat = 33267;
            var ManttoPreventivo = 65450;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 53118;
            var Traslado = 0;
            var Gastosoperativos = 9703;
            var Chevystar = 35739;
            var Comisiones = 31612;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }

        /*if (arrayData[1] == "10000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 937.732";
            document.getElementById("Iva").value = "$ 50.268";
            document.getElementById("Total Canon + Iva").value = "$ 988.000";
            document.getElementById("Cuota financiación").value = "$ 1.781.115";
            document.getElementById("CTP").value = "$ 15.280.000";
            document.getElementById("CTP Mensual").value = "$ 424.444";
            document.getElementById("Cuota total mensual").value = "$ 2.205.560";
            document.getElementById("Canon Renting mensual").value = "$ 988.000";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 1.217.560";
        }
        else if (arrayData[1] == "15000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 952.529";
            document.getElementById("Iva").value = "$ 53.079";
            document.getElementById("Total Canon + Iva").value = "$ 1.005.608";
            document.getElementById("Cuota financiación").value = "$ 1.781.115";
            document.getElementById("CTP").value = "$ 15.280.000";
            document.getElementById("CTP Mensual").value = "$ 424.444";
            document.getElementById("Cuota total mensual").value = "$ 2.205.560";
            document.getElementById("Canon Renting mensual").value = "$ 1.005.608";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 1.199.952";
        }
        else if (arrayData[1] == "10000" && arrayData[2] == "Otro" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 944.032";
            document.getElementById("Iva").value = "$ 51.464";
            document.getElementById("Total Canon + Iva").value = "$ 995.497";
            document.getElementById("Cuota financiación").value = "$ 1.781.115";
            document.getElementById("CTP").value = "$ 15.280.000";
            document.getElementById("CTP Mensual").value = "$ 424.444";
            document.getElementById("Cuota total mensual").value = "$ 2.205.560";
            document.getElementById("Canon Renting mensual").value = "$ 995.497";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 1.210.063";
        }
        else if (arrayData[1] == "15000" && arrayData[2] == "Otro" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 952.529";
            document.getElementById("Iva").value = "$ 53.079";
            document.getElementById("Total Canon + Iva").value = "$ 1.005.608";
            document.getElementById("Cuota financiación").value = "$ 1.781.115";
            document.getElementById("CTP").value = "$ 15.280.000";
            document.getElementById("CTP Mensual").value = "$ 424.444";
            document.getElementById("Cuota total mensual").value = "$ 2.205.560";
            document.getElementById("Canon Renting mensual").value = "$ 1.005.608";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 1.199.952";
        }*/
    }
    else if (arrayData[0] == "48") {
        Residual = 29761220;
        var ResidualMin = (Residual * 0.8);
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        document.getElementById("Residual").value = (formatNumber.new(Residual + ",00", "$ "));

        if (arrayData[1] == "10000" & arrayData[2] == "Cundinamarca") {
            var seguros = 140795;
            var Matricundinamarca = 27992;
            var Matriotros = 27992;
            var Soat = 35426;
            var ManttoPreventivo = 41616;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 51941;
            var Traslado = 0;
            var Gastosoperativos = 16940;
            var Chevystar = 33597;
            var Comisiones = 24983;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Cundinamarca") {
            var seguros = 140795;
            var Matricundinamarca = 27992;
            var Matriotros = 27992;
            var Soat = 35426;
            var ManttoPreventivo = 61870;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 51941;
            var Traslado = 0;
            var Gastosoperativos = 7668;
            var Chevystar = 33597;
            var Comisiones = 24983;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }

        else if (arrayData[1] == "10000" & arrayData[2] == "Otro") {
            var seguros = 140795;
            var Matricundinamarca = 27992;
            var Matriotros = 32733;
            var Soat = 35426;
            var ManttoPreventivo = 41616;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 51941;
            var Traslado = 0;
            var Gastosoperativos = 16940;
            var Chevystar = 33597;
            var Comisiones = 24983;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Otro") {
            var seguros = 140795;
            var Matricundinamarca = 27992;
            var Matriotros = 32733;
            var Soat = 35426;
            var ManttoPreventivo = 61870;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 51941;
            var Traslado = 0;
            var Gastosoperativos = 7668;
            var Chevystar = 33597;
            var Comisiones = 24983;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }

        /*if (arrayData[1] == "10000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 930.261";
            document.getElementById("Iva").value = "$ 48.848";
            document.getElementById("Total Canon + Iva").value = "$ 979.109";
            document.getElementById("Cuota financiación").value = "$ 1.426.435";
            document.getElementById("CTP").value = "$ 18.245.000";
            document.getElementById("CTP Mensual").value = "$ 380.104";
            document.getElementById("Cuota total mensual").value = "$ 1.806.539";
            document.getElementById("Canon Renting mensual").value = "$ 979.109";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 827.430";
        }
        else if (arrayData[1] == "15000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 941.793";
            document.getElementById("Iva").value = "$ 51.039";
            document.getElementById("Total Canon + Iva").value = "$ 992.832";
            document.getElementById("Cuota financiación").value = "$ 1.426.435";
            document.getElementById("CTP").value = "$ 18.245.000";
            document.getElementById("CTP Mensual").value = "$ 380.104";
            document.getElementById("Cuota total mensual").value = "$ 1.806.539";
            document.getElementById("Canon Renting mensual").value = "$ 992.832";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 813.707";
        }
        else if (arrayData[1] == "10000" && arrayData[2] == "Otro" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 935.240";
            document.getElementById("Iva").value = "$ 49.794";
            document.getElementById("Total Canon + Iva").value = "$ 985.034";
            document.getElementById("Cuota financiación").value = "$ 1.426.435";
            document.getElementById("CTP").value = "$ 18.245.000";
            document.getElementById("CTP Mensual").value = "$ 380.104";
            document.getElementById("Cuota total mensual").value = "$ 1.806.539";
            document.getElementById("Canon Renting mensual").value = "$ 985.034";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 821.505";
        }
        else if (arrayData[1] == "15000" && arrayData[2] == "Otro" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 946.771";
            document.getElementById("Iva").value = "$ 51.985";
            document.getElementById("Total Canon + Iva").value = "$ 998.756";
            document.getElementById("Cuota financiación").value = "$ 1.426.435";
            document.getElementById("CTP").value = "$ 18.245.000";
            document.getElementById("CTP Mensual").value = "$ 380.104";
            document.getElementById("Cuota total mensual").value = "$ 1.806.539";
            document.getElementById("Canon Renting mensual").value = "$ 998.756";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 807.783";
        }*/
    }
    else if (arrayData[0] == "60") {
        Residual = 26826290;
        var ResidualMin = (Residual * 0.8);
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        document.getElementById("Residual").value = (formatNumber.new(Residual + ",00", "$ "));

        if (arrayData[1] == "10000" & arrayData[2] == "Cundinamarca") {
            var seguros = 138442;
            var Matricundinamarca = 23490;
            var Matriotros = 27469;
            var Soat = 37671;
            var ManttoPreventivo = 46083;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 50675;
            var Traslado = 0;
            var Gastosoperativos = 6435;
            var Chevystar = 34579;
            var Comisiones = 20965;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Cundinamarca") {
            var seguros = 138442;
            var Matricundinamarca = 23490;
            var Matriotros = 27469;
            var Soat = 37671;
            var ManttoPreventivo = 59780;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 50675;
            var Traslado = 0;
            var Gastosoperativos = 6435;
            var Chevystar = 34579;
            var Comisiones = 20965;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
        else if (arrayData[1] == "10000" & arrayData[2] == "Otro") {
            var seguros = 138442;
            var Matricundinamarca = 23490;
            var Matriotros = 27469;
            var Soat = 37671;
            var ManttoPreventivo = 46083;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 50675;
            var Traslado = 0;
            var Gastosoperativos = 6435;
            var Chevystar = 34579;
            var Comisiones = 20965;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
        else if (arrayData[1] == "15000" & arrayData[2] == "Otro") {
            var seguros = 138442;
            var Matricundinamarca = 23490;
            var Matriotros = 27469;
            var Soat = 37671;
            var ManttoPreventivo = 59780;
            var ManttoCorrectivo = 0;
            var RevisionTM = 0;
            var Impuestos = 50675;
            var Traslado = 0;
            var Gastosoperativos = 6435;
            var Chevystar = 34579;
            var Comisiones = 20965;
            var Cupo = 0;
            var Gestor = 0;
            var Llantas = 0;
            var Stand = 0;
            var ConversionDesconversion = 0;
            var PolizasAdicionales = 0;
            var CupoChatarrizacion = 0;
            var Imprevistos = 0;
            var ExcepPicoyPlaca = 0;
            var AIU = (seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matriotros + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            if (arrayData[3] == "Renting Tradicional") {
                RentingTradicional(interes, arrayData[0], CO, Residual);
            }
            else if (arrayData[3] == "Residual garantizado") {
                if (!checkBox.checked) {
                    //inicia residual garantizado UN solo pago
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini > Residual) {
                        valorini = Residual;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);

                    }
                    else if (valorini < ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                        if (valorini = ResidualMin) {
                            document.getElementById("ValorInicial").value = (80 + "%");
                        }
                    }
                    else {
                        RentingGarantizado1Pago(valorini, interes, arrayData[0], CO, Residual);
                    }
                } else {
                    //inicia residual garantizado DOS pagos
                    let valorini = Inputnum.toString().replace(/\./g, '');
                    if (valorini < ResidualMin) {
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin);
                    }
                    else if (valorini > ResidualMin) {
                        valorini = ResidualMin;
                        RentingGarantizado2Pago(valorini, interes, arrayData[0], CO, ResidualMin)
                    }
                }
             }
        }
       /* if (arrayData[1] == "10000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 907.016";
            document.getElementById("Iva").value = "$ 44.431";
            document.getElementById("Total Canon + Iva").value = "$ 951.448";
            document.getElementById("Cuota financiación").value = "$ 1.216.497";
            document.getElementById("CTP").value = "$ 21.210.000";
            document.getElementById("CTP Mensual").value = "$ 353.500";
            document.getElementById("Cuota total mensual").value = "$ 1.569.997";
            document.getElementById("Canon Renting mensual").value = "$ 951.448";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 618.550";
        }
        else if (arrayData[1] == "15000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 926.124";
            document.getElementById("Iva").value = "$ 48.062";
            document.getElementById("Total Canon + Iva").value = "$ 974.186";
            document.getElementById("Cuota financiación").value = "$ 1.216.497";
            document.getElementById("CTP").value = "$ 21.210.000";
            document.getElementById("CTP Mensual").value = "$ 353.500";
            document.getElementById("Cuota total mensual").value = "$ 1.569.997";
            document.getElementById("Canon Renting mensual").value = "$ 974.186";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 595.811";
        }
        else if (arrayData[1] == "10000" && arrayData[2] == "Otro" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 911.194";
            document.getElementById("Iva").value = "$ 45.225";
            document.getElementById("Total Canon + Iva").value = "$ 956.419";
            document.getElementById("Cuota financiación").value = "$ 1.216.497";
            document.getElementById("CTP").value = "$ 21.210.000";
            document.getElementById("CTP Mensual").value = "$ 353.500";
            document.getElementById("Cuota total mensual").value = "$ 1.569.997";
            document.getElementById("Canon Renting mensual").value = "$ 956.419";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 613.578";
        }
        else if (arrayData[1] == "15000" && arrayData[2] == "Otro" && arrayData[3] == "Renting Tradicional") {
            document.getElementById("Total Canon").value = "$ 926.124";
            document.getElementById("Iva").value = "$ 48.062";
            document.getElementById("Total Canon + Iva").value = "$ 974.186";
            document.getElementById("Cuota financiación").value = "$ 1.216.497";
            document.getElementById("CTP").value = "$ 21.210.000";
            document.getElementById("CTP Mensual").value = "$ 353.500";
            document.getElementById("Cuota total mensual").value = "$ 1.569.997";
            document.getElementById("Canon Renting mensual").value = "$ 974.186";
            document.getElementById("Tu ahorro mensual con Renting es de:").value = "$ 595.811";
        }*/
    }

}

