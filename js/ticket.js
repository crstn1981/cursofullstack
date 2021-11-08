const cantEntradas = document.getElementById('cantidad')
const categoria = document.getElementById('categoria')
const muestraTotal = document.getElementById('total')
const calcular = document.getElementById('calcularPrecio')

calcular.addEventListener('click',calcularTotal)


function calcularTotal()
{
    var total = 0
    var precioEntrada = 0
    switch (categoria.value) {
        case '1':
            precioEntrada = 200 - 200 * 80 / 100
            break;
        case '2':
            precioEntrada = 200 - 200 * 50 / 100
            break;
        case '3':
            precioEntrada = 200 - 200 * 15 / 100
            break;
        default:
            console.log('error')
            break;
    } 
    total = cantEntradas.value * precioEntrada
    muestraTotal.innerHTML = 'Precio a Pagar: $' + parseInt(total)
}