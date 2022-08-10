function converterValores(){

    var valorInput= document.getElementById('valor')
    var moeda = document.getElementById('moeda').value
    var real = Number(document.getElementById('real').value)
    var valor = 0
    var simbolo = ''

    var dolar = real / 5.08
    var canadense = real / 4.08
    var australiano = real / 3.80
    var euro = real / 6.08
    var iene = real * 21.65 //deve-se multiplicar

    //real = moeda em real
    //valor = moeda que deseja converter 

    if(real ===''){
        alert('Você precisa informar um valor!')
    }

    if(moeda === ''){
        alert('Você precisa informar uma moeda para realizar a conversão!')
    } else if(moeda === 'dolar'){
        simbolo = '$'
        valor = dolar
    } else if (moeda==='canadense'){
        simbolo = 'C$'
        valor = canadense
    } else if(moeda==='australiano') {
        simbolo = 'A$'
        valor = australiano
    } else if(moeda==='euro'){
        simbolo = '€'
        valor = euro
    } else if(moeda==='iene'){
        simbolo = '¥'
        valor = iene
    }

    valorInput.value = simbolo + valor.toFixed(2)

}