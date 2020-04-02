/*
Author:
Description:
Date:    
*/
var PrecioMercado = 51490000;
var ValorActIva = 40390000;
var AccesoriosIva = 328440;
var TotalAct = ValorActIva + AccesoriosIva;
var Inputnum = "";



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




//Componente Financiero

function format(g) {
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
    //console.log(Inputnum);


}
window.onload = function () {
    //document.getElementById("Residual").disabled = true;
}

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("ValorFinal");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.visibility = "visible";
    } else {
        text.style.visibility = "hidden";
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

}
function NotShow() {
    document.getElementById("titulore").style.display = "block";
    document.getElementById("Renting Tradicional1").style.display = "none";
    document.getElementById("Residual").style.display = "inline";
    document.getElementById("Residual garantizado1").style.display = "block"
}


function DataValidator() {
    let arrayData = new Array();
    var plazo = document.getElementById("inputplazo");
    var km = document.getElementById("inputkm");
    var matricula = document.getElementById("inputmatri");
    var TipoRenting = document.getElementById("inputTipoRenting");

    arrayData[0] = plazo.options[plazo.selectedIndex].value;
    arrayData[1] = km.options[km.selectedIndex].value;
    arrayData[2] = matricula.options[matricula.selectedIndex].value;
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
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        if (arrayData[1] == "10000" & arrayData[2] == "Cundinamarca") {
            var seguros = 142970;
            var Matricundinamarca = 35420;
            var Matriotros = 27992;
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
            var AIU = (seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca) * 0.05;
            var CO = seguros + Matricundinamarca + Soat + ManttoPreventivo + ManttoCorrectivo + RevisionTM + Impuestos + Traslado + Gastosoperativos + Chevystar + Comisiones + Cupo + Gestor + Llantas + Stand + ConversionDesconversion + PolizasAdicionales + CupoChatarrizacion + Imprevistos + ExcepPicoyPlaca + AIU;
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));
            if (arrayData[3] == "Renting Tradicional") {

            }
            if (arrayData[3] == "Residual garantizado") {
                //debugger;
                let valor = Inputnum.toString().replace(/\./g, '');
                console.log(valor);
                var capital = (TotalAct - valor) / 2;
                console.log(capital);

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO, "$ "));

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO, "$ "));

        }

        if (arrayData[1] == "10000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
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
        }
    }
    else if (arrayData[0] == "48") {
        Residual = 29761220;
        var ResidualMin = (Residual * 0.8);
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        document.getElementById("Residual").value = "$ 29.761.220,00";

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));

        }


        if (arrayData[1] == "10000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
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
        }
    }
    else if (arrayData[0] == "60") {
        Residual = 26826290;
        var ResidualMin = (Residual * 0.8);
        document.getElementById("ResidualMin").value = (formatNumber.new(ResidualMin + ",00", "$ "));
        document.getElementById("Residual").value = "$ 26.826.290,00";

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));

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
            //alert(formatNumber.new(AIU, "$ "));
            //alert(formatNumber.new(CO , "$ "));
        }


        if (arrayData[1] == "10000" && arrayData[2] == "Cundinamarca" && arrayData[3] == "Renting Tradicional") {
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
        }
    }

}

