const botoncalcular = document.getElementById('botoncalcular')
    //const clickcaja = document.getElementById('cajafinanciar').addEventListener('click', opera)



function VerBoton(event) {


    const f_hoy = new Date()
    const f_limit = new Date(2030, 10, 15)

    const Pass = document.getElementById('pword').value

    if (f_hoy >= f_limit) {
        Pass = "€€¬¬×€¬€¬"
        botoncalcular.style.display = 'none'
        document.getElementById('botoncalcular').style.display = 'none'
            //console.log(document.getElementById('botoncalcular'))

    }

    if ((Pass == "123")) {

        botoncalcular.style.display = "block"
        CheckCuota.style.display = "inline-block"
        CheckBenFinan.style.display = "inline-block"
        CheckPInt.style.display = "inline-block"
        CoBe.style.display = "inline-block"
        beneficioNeto.style.display = "block"
        beneficioBruto.style.display = "block"
        cajacomision.style.display = "inline-block"
        CheckImp.style.display = "inline-block"
        pword.style.display = 'none'
        cajaprecioVN.focus()
    }


}

// Angel Luis Ramirez Bernabe   angel@nantrax.com -->
//<!-- Registro de la Propiedad Intelectual. Solicitud: RTA-1374-22 y RTA - 1536-22 

//    Número de Asiento 04/2022/3439 y  04/2022/3658
//    Real Decreto Ley 1/1996 del 12 de Abril


function EligeCuota(event) {

    const CajaCheck = document.getElementById('CheckCuota')
    const CajaECuota = document.getElementById('CajaECuota')
        //CajaECuota.style.display = 'block'

    if (CajaCheck.checked) {
        CajaECuota.style.display = 'block'
        document.getElementById('CheckBenFinan').checked = false
        document.getElementById('CheckPInt').checked = false
        CajaBenFinan.style.display = 'none'
        CajaPInt.style.display = 'none'
        CajaECuota.focus()
    } else {
        CajaECuota.style.display = 'none'
        cuotaselect.innerHTML = ``
    }
}

function ImpVerCli(event) {
    const CajaCheckImp = document.getElementById('CheckImp')

    if (CajaCheckImp.checked) {
        beneficioNeto.style.display = "none"
        beneficioBruto.style.display = "none"
        CoBe.style.display = "none"
        cajacomision.style.display = "none"

    } else {
        beneficioNeto.style.display = "block"
        beneficioBruto.style.display = "block"
        CoBe.style.display = "inline-block"
        cajacomision.style.display = "inline-block"
    }
}

function ElijeBenFinan(event) {
    const CajaCheckBF = document.getElementById('CheckBenFinan')
    const CajaBenFinan = document.getElementById('CajaBenFinan')

    if (CajaCheckBF.checked) {
        CajaBenFinan.style.display = 'block'
        document.getElementById('CheckCuota').checked = false
        document.getElementById('CheckPInt').checked = false
        CajaECuota.style.display = 'none'
        CajaPInt.style.display = 'none'
        CajaBenFinan.focus()
    } else {
        CajaBenFinan.style.display = 'none'
        beneficioSelect.innerHTML = ``
    }
}

function EligeInt(event) {
    const CheckPInt = document.getElementById('CheckPInt')
    const CajaPInt = document.getElementById('CajaPInt')

    if (CheckPInt.checked) {
        CajaPInt.style.display = 'block'
        document.getElementById('CheckCuota').checked = false
        document.getElementById('CheckBenFinan').checked = false
        CajaBenFinan.style.display = 'none'
        CajaECuota.style.display = 'none'
        CajaPInt.focus()
    } else {
        CajaPInt.style.display = 'none'
        PagaInteres.innerHTML = ``
    }
}




function calcular(event) {
    event.preventDefault()
    const CajaECuota = document.getElementById('CajaECuota')

    const cajaprecioVN = document.getElementById('cajaprecioVN').value
    const cajaprecioVO = document.getElementById('cajaprecioVO').value
    const cajaentrada = document.getElementById('cajaentrada').value
    const cajadescuento = document.getElementById('cajadescuento').value
    const cajapromofinan = document.getElementById('cajapromofinan')

    const cajafinanciar = document.getElementById('cajafinanciar')
    const cajameses = document.getElementById('cajameses')
    const cajainteres = document.getElementById('cajainteres')
    const cajaindice = document.getElementById('cajaindice')
    const cajacomision = document.getElementById('cajacomision')
    const cajaPinteres = document.getElementById('CajaPInt').value

    const cuota = document.getElementById('cuota')
    const beneficioBruto = document.getElementById('beneficioBruto')
    const beneficioNeto = document.getElementById('beneficioNeto')
    const cuotaselect = document.getElementById('cuotaselect')
    const cajaBenFinan = document.getElementById('cajaBenFinan')
    const CapitalFinanciado = CajaECuota.value / cajaindice.value
    const CliPaga = cajaprecioVN - cajaprecioVO - cajaentrada
    cajafinanciar.value = cajaprecioVN - cajaprecioVO - cajaentrada - cajadescuento - cajapromofinan.value
    const bruto = cajafinanciar.value * cajacomision.value / 100
    const neto = bruto - cajapromofinan.value
    const PVenta = cajaprecioVN - cajaprecioVO - cajaentrada - cajadescuento
    const CalcBenFin = ((PVenta * cajacomision.value / 100) - CajaBenFinan.value) / ((cajacomision.value / 100) + 1)
    const CuotaIntereses = ((cajaprecioVN - cajaprecioVO - cajaentrada - cajadescuento + parseInt(cajaPinteres)) / cajameses.value).toFixed(2)
    const DtoIntereses = (PVenta - (CuotaIntereses / cajaindice.value))
    cuota.innerHTML = `La cuota Mensual a ${cajameses.value} meses de ${cajafinanciar.value}€ es de : ${(cajafinanciar.value*cajaindice.value).toFixed(2)}€ `
    beneficioBruto.innerHTML = `El Beneficio Bruto es : ${bruto.toFixed(2)}€`
    beneficioNeto.innerHTML = `El Beneficio Neto es: ${neto.toFixed(2)}€`
    intereses.innerHTML = `Intereses a pagar por el cliente : ${((cajafinanciar.value*cajaindice.value*cajameses.value)-CliPaga).toFixed(2)}€`
    cuotaselect.innerHTML = `Para pagar ${CajaECuota.value}€/mes durante ${cajameses.value} meses, tienes que financiar ${CapitalFinanciado.toFixed(2)}€. Debes aplicar un Descuento en la Promoción Financiera de ${(CapitalFinanciado-cajafinanciar.value).toFixed(2)}€`
    EligeCuota()
    beneficioSelect.innerHTML = `Para obtener ${CajaBenFinan.value}€ de Beneficio, debes aplicar un descuento en la Financiera de ${CalcBenFin.toFixed(2)}€ y saldría una cuota de ${((PVenta - CalcBenFin)*cajaindice.value).toFixed(2)}€/mes. `
    ElijeBenFinan()
    PagaInteres.innerHTML = `Para pagar ${cajaPinteres}€ en intereres de ${PVenta}€ al ${cajainteres.value}%. Debes aplicar un descuento de ${DtoIntereses.toFixed(2)}€ y sale una cuota de ${CuotaIntereses}€/mes `
    EligeInt()

}

/*function basefinanciera(event) {
    event.preventDefault();
    const cajaprecioVN = document.getElementById('cajaprecioVN').value
    const cajaprecioVO = document.getElementById('cajaprecioVO').value
    const cajaentrada = document.getElementById('cajaentrada').value
    const cajadescuento = document.getElementById('cajadescuento').value
    const cajapromofinan = document.getElementById('cajapromofinan')

    cajafinanciar.value = cajaprecioVN - cajaprecioVO - cajaentrada - cajadescuento - cajapromofinan.value
    return cajafinanciar

}*/



botoncalcular.addEventListener('click', calcular)
    //CheckSN.addEventListener('click', EligeCuota)