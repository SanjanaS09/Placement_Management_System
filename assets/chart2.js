const ctx2 = document.getElementById('doughnut').getContext('2d');
const doughnut =  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Accenture', 'Barclays', 'Bank of America', 'Colgate', 'Visa', 'Oracle'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(4, 4, 124, 0.7)',
            'rgba(36, 36, 164, 0.6)',
            'rgba(53, 53, 163, 0.5)',
            'rgba(105, 105, 182, 0.4)',
            'rgba(139, 139, 198, 0.3)'
          ],
          borderColor: [
            'rgb(4, 4, 152, 1)',
            'rgb(4, 4, 152, 1)',
            'rgb(4, 4, 152, 1)',
            'rgb(4, 4, 152, 1)',
            'rgb(4, 4, 152, 1)'
          ],
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