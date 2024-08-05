const ctx4 = document.getElementById('linechart').getContext('2d');
const linechart = new Chart(ctx4, {
    type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'], // Year labels
            datasets: [{
                label: 'Yearly Data',
                data: [30, 45, 60, 70, 90, 100], // Yearly data points
                borderColor: 'rgba(74, 4, 152, 1)',
                backgroundColor: 'rgba(4, 4, 124, 0.7)',
                borderWidth: 1
            }]
        },
        options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        
  