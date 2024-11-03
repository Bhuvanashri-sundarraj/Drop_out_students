// Initial data
const dataset1 = [
    { state: "Andhra Pradesh", dropoutRate: 16.7 },
    { state: "Bihar", dropoutRate: 21.4 },
    { state: "Chhattisgarh", dropoutRate: 4.1 },
    { state: "Gujarat", dropoutRate: 23.3 },
    { state: "Haryana", dropoutRate: 17.5 },
    { state: "Jharkhand", dropoutRate: 16.6 },
    { state: "Karnataka", dropoutRate: 1.1 },
    { state: "Kerala", dropoutRate: 0.1 },
    { state: "Madhya Pradesh", dropoutRate: 8.8 },
    { state: "Maharashtra", dropoutRate: 1.5 },
    { state: "Odisha", dropoutRate: 7.3 },
    { state: "Punjab", dropoutRate: 8.0 },
    { state: "Rajasthan", dropoutRate: 4.3 },
    { state: "Tamil Nadu", dropoutRate: 0.4 },
    { state: "Telangana", dropoutRate: 3.1 },
    { state: "Uttar Pradesh", dropoutRate: 2.9 },
    { state: "Uttarakhand", dropoutRate: 2.7 },
    { state: "West Bengal", dropoutRate: 8.6 }
];

const dataset2 = [
    { state: "Andhra Pradesh", dropoutRate: 15.0 },
    { state: "Bihar", dropoutRate: 19.0 },
    { state: "Chhattisgarh", dropoutRate: 5.0 },
    { state: "Gujarat", dropoutRate: 20.0 },
    { state: "Haryana", dropoutRate: 15.0 },
    { state: "Jharkhand", dropoutRate: 14.0 },
    { state: "Karnataka", dropoutRate: 2.0 },
    { state: "Kerala", dropoutRate: 0.0 },
    { state: "Madhya Pradesh", dropoutRate: 9.0 },
    { state: "Maharashtra", dropoutRate: 2.0 },
    { state: "Odisha", dropoutRate: 6.0 },
    { state: "Punjab", dropoutRate: 7.0 },
    { state: "Rajasthan", dropoutRate: 5.0 },
    { state: "Tamil Nadu", dropoutRate: 0.2 },
    { state: "Telangana", dropoutRate: 3.0 },
    { state: "Uttar Pradesh", dropoutRate: 3.0 },
    { state: "Uttarakhand", dropoutRate: 2.0 },
    { state: "West Bengal", dropoutRate: 7.0 }
];

// Initialize chart instances
let pieChart = null;
let barChart = null;
let currentDataset = dataset1;
let isFlipped = false;

// Color configurations for original and flipped states
const colors = {
    original: {
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 127, 80, 0.2)',
            'rgba(100, 149, 237, 0.2)',
            'rgba(189, 183, 107, 0.2)',
            'rgba(221, 160, 221, 0.2)',
            'rgba(143, 188, 143, 0.2)',
            'rgba(255, 105, 180, 0.2)',
            'rgba(127, 255, 212, 0.2)',
            'rgba(255, 218, 185, 0.2)',
            'rgba(219, 112, 147, 0.2)',
            'rgba(176, 196, 222, 0.2)',
            'rgba(255, 182, 193, 0.2)',
            'rgba(255, 160, 122, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 127, 80, 1)',
            'rgba(100, 149, 237, 1)',
            'rgba(189, 183, 107, 1)',
            'rgba(221, 160, 221, 1)',
            'rgba(143, 188, 143, 1)',
            'rgba(255, 105, 180, 1)',
            'rgba(127, 255, 212, 1)',
            'rgba(255, 218, 185, 1)',
            'rgba(219, 112, 147, 1)',
            'rgba(176, 196, 222, 1)',
            'rgba(255, 182, 193, 1)',
            'rgba(255, 160, 122, 1)'
        ]
    },
    flipped: {
        backgroundColor: [
            'rgba(46, 204, 113, 0.2)',
            'rgba(52, 152, 219, 0.2)',
            'rgba(155, 89, 182, 0.2)',
            'rgba(241, 196, 15, 0.2)',
            'rgba(230, 126, 34, 0.2)',
            'rgba(231, 76, 60, 0.2)',
            'rgba(149, 165, 166, 0.2)',
            'rgba(41, 128, 185, 0.2)',
            'rgba(142, 68, 173, 0.2)',
            'rgba(243, 156, 18, 0.2)',
            'rgba(211, 84, 0, 0.2)',
            'rgba(192, 57, 43, 0.2)',
            'rgba(127, 140, 141, 0.2)',
            'rgba(44, 62, 80, 0.2)',
            'rgba(26, 188, 156, 0.2)',
            'rgba(22, 160, 133, 0.2)',
            'rgba(39, 174, 96, 0.2)',
            'rgba(41, 128, 185, 0.2)'
        ],
        borderColor: [
            'rgba(46, 204, 113, 1)',
            'rgba(52, 152, 219, 1)',
            'rgba(155, 89, 182, 1)',
            'rgba(241, 196, 15, 1)',
            'rgba(230, 126, 34, 1)',
            'rgba(231, 76, 60, 1)',
            'rgba(149, 165, 166, 1)',
            'rgba(41, 128, 185, 1)',
            'rgba(142, 68, 173, 1)',
            'rgba(243, 156, 18, 1)',
            'rgba(211, 84, 0, 1)',
            'rgba(192, 57, 43, 1)',
            'rgba(127, 140, 141, 1)',
            'rgba(44, 62, 80, 1)',
            'rgba(26, 188, 156, 1)',
            'rgba(22, 160, 133, 1)',
            'rgba(39, 174, 96, 1)',
            'rgba(41, 128, 185, 1)'
        ]
    }
};

// Chart configuration
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                font: {
                    size: 12
                }
            }
        },
        title: {
            display: true,
            text: 'Dropout Rates in India',
            font: {
                size: 16,
                weight: 'bold'
            }
        }
    }
};

function createPieChart() {
    const ctx = document.getElementById('pie-chart-canvas').getContext('2d');
    
    if (pieChart) {
        pieChart.destroy();
    }
    
    const currentColors = isFlipped ? colors.flipped : colors.original;
    
    pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: currentDataset.map(d => d.state),
            datasets: [{
                data: currentDataset.map(d => d.dropoutRate),
                backgroundColor: currentColors.backgroundColor,
                borderColor: currentColors.borderColor,
                borderWidth: 1
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    ...chartConfig.plugins.title,
                    text: `Dropout Rates in India ${isFlipped ? '(Updated Data)' : '(Initial Data)'}`
                },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.label}: ${context.raw}%`
                    }
                }
            }
        }
    });
}

function createBarGraph() {
    const ctx = document.getElementById('bar-graph-canvas').getContext('2d');
    
    if (barChart) {
        barChart.destroy();
    }
    
    const currentColors = isFlipped ? colors.flipped : colors.original;
    
    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: currentDataset.map(d => d.state),
            datasets: [{
                label: 'Dropout Rate (%)',
                data: currentDataset.map(d => d.dropoutRate),
                backgroundColor: currentColors.backgroundColor,
                borderColor: currentColors.borderColor,
                borderWidth: 1
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    ...chartConfig.plugins.title,
                    text: `Dropout Rates in India ${isFlipped ? '(Updated Data)' : '(Initial Data)'}`
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Dropout Rate (%)'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

function populateDataTable() {
    const dataTableBody = document.getElementById('data-table-body');
    dataTableBody.innerHTML = '';
    
    const sortedData = [...currentDataset].sort((a, b) => b.dropoutRate - a.dropoutRate);
    
    // Add comparison columns
    sortedData.forEach(item => {
        const row = document.createElement('tr');
        const stateCell = document.createElement('td');
        const currentRateCell = document.createElement('td');
        const comparisonRateCell = document.createElement('td');
        const changeCell = document.createElement('td');
        
        const comparisonData = (isFlipped ? dataset1 : dataset2).find(d => d.state === item.state);
        const change = item.dropoutRate - comparisonData.dropoutRate;
        
        stateCell.textContent = item.state;
        currentRateCell.textContent = `${item.dropoutRate}%`;
        comparisonRateCell.textContent = `${comparisonData.dropoutRate}%`;
        changeCell.textContent = `${change.toFixed(1)}%`;
        
        // Add color to change cell
        if (change > 0) {
            changeCell.style.color = 'red';
        } else if (change < 0) {
            changeCell.style.color = 'green';
        }
        
        row.appendChild(stateCell);
        row.appendChild(currentRateCell);
        row.appendChild(comparisonRateCell);
        row.appendChild(changeCell);
        dataTableBody.appendChild(row);
    });
    
    // Update table headers if not already done
    const tableHeader = document.querySelector('thead tr');
    if (tableHeader.children.length === 2) {  // Only update if not already updated
        tableHeader.innerHTML = `
            <th>State</th>
            <th>Current Rate</th>
            <th>Comparison Rate</th>
            <th>Change</th>
        `;
    }
}

function flipDataset() {
    isFlipped = !isFlipped;
    currentDataset = isFlipped ? dataset2 : dataset1;
    updateVisualizations();
    
    // Update button text
    const flipButtons = document.querySelectorAll('#flip-pie, #flip-bar');
    flipButtons.forEach(button => {
        button.textContent = `Show ${isFlipped ? 'Initial' : 'Updated'} Data`;
    });
}

function updateVisualizations() {
    createPieChart();
    createBarGraph();
    populateDataTable();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Add button event listeners
    document.getElementById('flip-pie').addEventListener('click', flipDataset);
    document.getElementById('flip-bar').addEventListener('click', flipDataset);
    
    // Initial render
    updateVisualizations();
});