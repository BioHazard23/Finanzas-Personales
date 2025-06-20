function calcularFinanzas() {
    let ingresos = parseFloat(document.getElementById('ingresos').value) || 0;
    let arriendo = parseFloat(document.getElementById('arriendo').value) || 0;
    let servicios = parseFloat(document.getElementById('servicios').value) || 0;
    let transporte = parseFloat(document.getElementById('transporte').value) || 0;
    let alimentacion = parseFloat(document.getElementById('alimentacion').value) || 0;
    let otros = parseFloat(document.getElementById('otros').value) || 0;

    let totalGastos = arriendo + servicios + transporte + alimentacion + otros;
    let porcentajeGastos = (totalGastos / ingresos) * 100;

    let ahorro = ingresos * 0.20;
    let gastosNecesarios = ingresos * 0.50;
    let gastosPrescindibles = ingresos * 0.30;

    document.getElementById('resultado').innerHTML = `
        <strong>Ingresos:</strong> $${ingresos.toFixed(2)} <br>
        <strong>Total Gastos:</strong> $${totalGastos.toFixed(2)} (${porcentajeGastos.toFixed(1)}%)<br>
        <strong>Ahorro Ideal (20%):</strong> $${ahorro.toFixed(2)}<br>
        <strong>Gastos Necesarios (50%):</strong> $${gastosNecesarios.toFixed(2)}<br>
        <strong>Gastos Prescindibles (30%):</strong> $${gastosPrescindibles.toFixed(2)}
    `;

    generarGraficoGastos([arriendo, servicios, transporte, alimentacion, otros]);
    generarGraficoRegla([gastosNecesarios, gastosPrescindibles, ahorro]);
}

function generarGraficoGastos(datos) {
    let ctx = document.getElementById('graficoGastos').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Arriendo', 'Servicios', 'Transporte', 'Alimentación', 'Otros'],
            datasets: [{
                label: 'Gastos',
                data: datos,
                backgroundColor: ['#1e3799', '#3c6382', '#6a89cc', '#4a69bd', '#0c2461']
            }]
        }
    });
}

function generarGraficoRegla(datos) {
    let ctx = document.getElementById('graficoRegla').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Necesarios (50%)', 'Prescindibles (30%)', 'Ahorro (20%)'],
            datasets: [{
                data: datos,
                backgroundColor: ['#1e3799', '#3c6382', '#6a89cc']
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 14
                    },
                    formatter: (value) => `$${value.toFixed(2)}`
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}
