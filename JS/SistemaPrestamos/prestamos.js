function gen_table() {
    document.getElementById("tab").innerHTML = "";
    let capitalInicial = Number(document.getElementById("capital").value);
    let cuota = Number(document.getElementById("couta").value);
    let interes = Number(document.getElementById("interes").value);

    if (capitalInicial > 0) {
        for (i = 1; i <= cuota; i++) {
            ca = capitalInicial / cuota;
            d1 = ca.toFixed(2);
            i2 = ((capitalInicial * interes) / 100) / cuota;
            d2 = i2.toFixed(2);
            r = ca + i2;
            d3 = r.toFixed(2);
            document.getElementById("tab").innerHTML = document.getElementById("tab").innerHTML +
                `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1 = capitalInicial.toFixed(2);
        t_i = i2 * cuota;
        d4 = t_i.toFixed(2);
        t_p = r * cuota;
        d5 = t_p.toFixed(2);
        document.getElementById("t1").innerHTML = n1;
        document.getElementById("t2").innerHTML = d4;
        document.getElementById("t3").innerHTML = d5;
    } else {
        alert("Falta ingresar un Número");
    }
}

const arrInteresGanado = []; //creo un array vacio
const arrCapital = [];

function cargaCapital(capitalInicial) {
    arrCapital.push(capitalInicial);
}

function cargaInteres(interes) {
    arrInteresGanado.push(interes); //cargo los intereses al array vacio
}


function mensajeDespedida() {
    document.getElementById("despedida").innerHTML = "";
    Swal.fire({
        title: 'Adios!',
        text: 'Gracias por usar nuestro software',
        icon: 'cool',
        confirmButtonText: 'Cerrar'
    })//alert("Adios!")
}

function aplicaJson() {
    const enJSON = '("id:1";"interes"=interes)';
    const interesesGanadosJSON = JSON.parse(enJSON);
    console.log(typeof enJSON);
}

arrInteresGanado.forEach(interes => console.log(interes)); //muestro el array de Intereses
arrCapital.forEach(capitalInicial => console.log(capitalInicial)); //muestro el array de Capital Inicial