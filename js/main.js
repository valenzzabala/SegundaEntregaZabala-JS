class Cliente {
    constructor(nombre, apellido, dni, edad, sucursal) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.edad = edad
        this.sucursal = sucursal
        this.carrito = []
        this.precios = []
    }

    toString() {
        return `\nEl cliente ${this.nombre} ${this.apellido} de DNI: ${this.dni} se ha creado con éxito.\n`
    }

    agregarCarrito() {
        let producto = prompt("\n¿Qué producto desea agregar al carrito?: ")
        if (producto) {
            this.carrito.push(producto)
            let valor = Math.floor(Math.random() * (2500 - 100 + 1)) + 100
            console.log(`\nSe ha agregado ${producto} a su carrito.\nPrecio: $${valor}\nCarrito de compras: ${this.carrito}`)
            this.precios.push(valor)
        } else {
            alert("Debe ingresar un producto válido.")
        }
    }

    comprar() {
        console.log("Bienvenido al área de compras.")
        console.log(`Su carrito de compras es: ${this.carrito}`)
        let metodo = prompt("Ingrese su método de pago: ")
        if (metodo) {
            let total = this.precios.reduce((acc, val) => acc + val, 0)
            console.log("Generando ticket...")
            setTimeout(() => {
                let hora = Math.floor(Math.random() * 24)
                let minutos = Math.floor(Math.random() * 60)
                let dia = Math.floor(Math.random() * 30) + 1
                let mes = Math.floor(Math.random() * 12) + 1
                alert(`\n\n---------------------------------------------------------------\n---------------------------------------------------------------\nComprador: ${this.nombre} ${this.apellido}     DNI: ${this.dni}\nFecha: ${dia}/${mes}/2024 ${hora}:${minutos}\n\nProductos: ${this.carrito}\n\nTotal: $${total}  Método de pago: ${metodo}\nA retirar en sucursal: ${this.sucursal}\n\n---------------------------------------------------------------\n---------------------------------------------------------------\n\nPresentar ticket en la sucursal especificada.\n\nGracias por utilizar nuestros servicios.`)
            }, 2500)
        } else {
            alert("Debe ingresar un método de pago válido.")
        }
    }
}

function decisionCarrito(cliente_uno) {
    while (true) {
        let opcion_dos = prompt("Ingrese 1 para agregar más productos, sino cualquier cosa:")
        opcion_dos = opcion_dos.trim()
        if (opcion_dos === "1") {
            cliente_uno.agregarCarrito()
        } else {
            console.log("Cerrando su carrito de compras...")
            break
        }
    }
}

let sucursal = prompt("Bienvenido a Supermercados TITI\n\nIngrese la sucursal en donde se encuentra: ")
sucursal = sucursal.charAt(0).toUpperCase() + sucursal.slice(1)

console.log(`Usted se encuentra en sucursal: ${sucursal}`)

console.log("Crea tu usuario")

let nombre = prompt("Ingrese su nombre: ")
nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)

let apellido = prompt("Ingrese su apellido: ")
apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)

let documento
while (true) {
    documento = prompt("Ingrese su DNI: ")
    if (documento.length !== 8 || isNaN(documento)) {
        alert("Documento no válido. Debe tener 8 dígitos numéricos")
        continue
    } else {
        documento = documento.trim()
        break
    }
}

let edad
while (true) {
    edad = prompt("Ingrese su edad: ")
    if (isNaN(edad) || edad <= 0) {
        alert("Debe ingresar una edad válida")
        continue
    } else {
        edad = edad.trim()
        break
    }
}

let cliente_uno = new Cliente(nombre, apellido, documento, edad, sucursal)
alert(cliente_uno.toString())

console.log(cliente_uno)

while (true) {
    let opcion = prompt("1. Agregar producto a su carrito\n2. Comprar\n3. Limpiar carrito\n4. Salir\n\nIngrese una opcion: ")
    opcion = opcion.trim()
    if (opcion === "1") {
        cliente_uno.agregarCarrito()
        decisionCarrito(cliente_uno)
    }
    if (opcion === "2") {
        if (cliente_uno.carrito.length === 0) {
            alert("Su carrito de compras está vacío. Agregue productos para poder comprar.")
            continue
        } else {
            cliente_uno.comprar()
            break
        }
    }
    if (opcion === "3") {
        cliente_uno.carrito = []
        alert("Carrito vaciado.")
        continue
    }
    if (opcion === "4") {
        alert("Muchas gracias por utilizar nuestro sistema.")
        break
    }
}
