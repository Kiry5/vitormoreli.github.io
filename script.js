// Função para converter números em palavras
function numeroParaPalavra(num) {
    const palavras = [
        "0 vendas", "50 vendas", "100 vendas", "150 vendas", "200 vendas", "250 vendas",
        "300 vendas", "350 vendas", "400 vendas", "450 vendas", "500 vendas", "550 vendas", "600 vendas",
        "650 vendas", "700 vendas", "750 vendas", "800 vendas", "850 vendas",
        "900 vendas", "950 vendas", "1000 vendas"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['iPhone', 'Samsung Galaxy', 'Xiaomi', 'OnePlus', 'Nokia'],
        datasets: [{
            label: 'Vendas',
            data: [350, 500, 450, 300, 250], // Números originais de vendas
            backgroundColor: [
                'rgba(40, 167, 69, 0.2)', // Verde
                'rgba(40, 167, 69, 0.2)', // Verde
                'rgba(40, 167, 69, 0.2)', // Verde
                'rgba(40, 167, 69, 0.2)', // Verde
                'rgba(40, 167, 69, 0.2)' // Verde
            ],
            borderColor: [
                'rgba(40, 167, 69, 1)', // Verde
                'rgba(40, 167, 69, 1)', // Verde
                'rgba(40, 167, 69, 1)', // Verde
                'rgba(40, 167, 69, 1)', // Verde
                'rgba(40, 167, 69, 1)' // Verde
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#28a745' // Cor verde para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: '#28a745', // Cor verde para o texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#28a745' // Cor verde para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Modelos de Smartphones',
                    color: '#28a745'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#28a745', // Cor verde para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Quantidade de Vendas',
                    color: '#28a745'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
