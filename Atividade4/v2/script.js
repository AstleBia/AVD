// Script V2 - Dashboard Estilo Sketch / Quadro Negro

const DATA = [
  {"periodo": "201201", "total": 9.6, "homens": 7.5, "mulheres": 12.4},
  {"periodo": "201202", "total": 8.3, "homens": 6.8, "mulheres": 10.4},
  {"periodo": "201203", "total": 9.4, "homens": 7.4, "mulheres": 11.8},
  {"periodo": "201204", "total": 9.2, "homens": 7.3, "mulheres": 11.6},
  {"periodo": "201301", "total": 10.7, "homens": 8.4, "mulheres": 13.5},
  {"periodo": "201302", "total": 9.7, "homens": 7.7, "mulheres": 12.3},
  {"periodo": "201303", "total": 8.5, "homens": 6.9, "mulheres": 10.5},
  {"periodo": "201304", "total": 7.4, "homens": 6.2, "mulheres": 9.1},
  {"periodo": "201401", "total": 8.8, "homens": 7.5, "mulheres": 10.4},
  {"periodo": "201402", "total": 8.0, "homens": 6.8, "mulheres": 9.6},
  {"periodo": "201403", "total": 8.5, "homens": 7.4, "mulheres": 9.9},
  {"periodo": "201404", "total": 7.7, "homens": 7.0, "mulheres": 9.2},
  {"periodo": "201501", "total": 8.2, "homens": 7.4, "mulheres": 9.2},
  {"periodo": "201502", "total": 9.2, "homens": 8.2, "mulheres": 10.4},
  {"periodo": "201503", "total": 11.3, "homens": 9.9, "mulheres": 13.1},
  {"periodo": "201504", "total": 11.1, "homens": 10.0, "mulheres": 12.5},
  {"periodo": "201601", "total": 13.4, "homens": 12.0, "mulheres": 15.1},
  {"periodo": "201602", "total": 14.2, "homens": 12.5, "mulheres": 16.3},
  {"periodo": "201603", "total": 15.5, "homens": 14.2, "mulheres": 17.1},
  {"periodo": "201604", "total": 15.9, "homens": 15.1, "mulheres": 16.9},
  {"periodo": "201701", "total": 17.3, "homens": 16.1, "mulheres": 18.7},
  {"periodo": "201702", "total": 19.0, "homens": 17.4, "mulheres": 21.2},
  {"periodo": "201703", "total": 18.1, "homens": 16.4, "mulheres": 20.3},
  {"periodo": "201704", "total": 17.0, "homens": 15.9, "mulheres": 18.6},
  {"periodo": "201801", "total": 17.9, "homens": 16.9, "mulheres": 19.1},
  {"periodo": "201802", "total": 17.1, "homens": 16.1, "mulheres": 18.3},
  {"periodo": "201803", "total": 17.0, "homens": 16.0, "mulheres": 18.2},
  {"periodo": "201804", "total": 15.6, "homens": 14.8, "mulheres": 16.6},
  {"periodo": "201901", "total": 16.3, "homens": 14.2, "mulheres": 18.9},
  {"periodo": "201902", "total": 16.1, "homens": 13.6, "mulheres": 19.2},
  {"periodo": "201903", "total": 16.0, "homens": 13.8, "mulheres": 18.6},
  {"periodo": "201904", "total": 14.2, "homens": 12.7, "mulheres": 16.1},
  {"periodo": "202001", "total": 14.8, "homens": 13.4, "mulheres": 16.7},
  {"periodo": "202202", "total": 13.6, "homens": 10.9, "mulheres": 17.1},
  {"periodo": "202203", "total": 14.0, "homens": 11.2, "mulheres": 17.6},
  {"periodo": "202204", "total": 12.3, "homens": 9.9, "mulheres": 15.6},
  {"periodo": "202301", "total": 14.1, "homens": 12.2, "mulheres": 16.6},
  {"periodo": "202302", "total": 14.2, "homens": 12.4, "mulheres": 16.6},
  {"periodo": "202303", "total": 13.3, "homens": 11.4, "mulheres": 15.7},
  {"periodo": "202304", "total": 12.0, "homens": 10.0, "mulheres": 14.8},
  {"periodo": "202401", "total": 12.4, "homens": 10.3, "mulheres": 15.1},
  {"periodo": "202402", "total": 11.6, "homens": 9.6, "mulheres": 14.1},
  {"periodo": "202403", "total": 10.6, "homens": 8.9, "mulheres": 12.9},
  {"periodo": "202404", "total": 10.3, "homens": 8.5, "mulheres": 12.6},
  {"periodo": "202501", "total": 11.6, "homens": 9.8, "mulheres": 13.8},
  {"periodo": "202502", "total": 10.4, "homens": 8.8, "mulheres": 12.5},
  {"periodo": "202503", "total": 10.0, "homens": 8.5, "mulheres": 11.9},
  {"periodo": "202504", "total": 8.8, "homens": 8.1, "mulheres": 10.1},
  {"periodo": "202601", "total": 9.2, "homens": 7.9, "mulheres": 11.1},
  {"periodo": "202602", "total": 8.3, "homens": 6.6, "mulheres": 10.4}
];

document.addEventListener('DOMContentLoaded', () => {
    initV2Dashboard();
});

function initV2Dashboard() {
    renderKPIValues();
    renderSparklines();
    renderMainLineChart();
    renderDonutChart();
    renderPerformanceTable();
}

function renderKPIValues() {
    // Exact stats
    const totals = DATA.map(d => d.total);
    const mean = totals.reduce((a,b)=>a+b,0)/totals.length;
    const variance = totals.reduce((a,b)=>a+Math.pow(b-mean,2),0)/(totals.length-1);
    const std = Math.sqrt(variance);
    const min = Math.min(...totals);
    const max = Math.max(...totals);

    document.getElementById('val-variancia').textContent = variance.toFixed(2);
    document.getElementById('val-desvio').textContent = std.toFixed(2) + '%';
    document.getElementById('val-amplitude').textContent = (max - min).toFixed(2) + '%';
}

function renderSparklines() {
    const totals = DATA.map(d => d.total);
    const SparkOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } },
        elements: { point: { radius: 0 } }
    };

    ['spark1', 'spark2', 'spark3', 'spark4'].forEach((id, idx) => {
        const ctx = document.getElementById(id).getContext('2d');
        const sliceData = totals.slice(idx * 10, idx * 10 + 15);
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: sliceData.map((_, i) => i),
                datasets: [{
                    data: sliceData,
                    borderColor: '#fb923c',
                    borderWidth: 2,
                    tension: 0.4
                }]
            },
            options: SparkOptions
        });
    });
}

function renderMainLineChart() {
    const ctx = document.getElementById('mainLineChart').getContext('2d');
    const labels = DATA.map(d => {
        const p = d.periodo;
        return `${p.substring(2,4)}/${p.substring(4,6)}`;
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Taxa Total (%)',
                data: DATA.map(d => d.total),
                borderColor: '#fb923c',
                backgroundColor: 'rgba(251, 146, 60, 0.08)',
                borderWidth: 2.5,
                pointRadius: 1.5,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false }
            },
            scales: {
                x: { 
                    ticks: { color: '#9ca3af', font: { family: 'Caveat', size: 14 }, maxTicksLimit: 8 }, 
                    grid: { color: 'rgba(255, 255, 255, 0.04)' } 
                },
                y: { 
                    ticks: { color: '#9ca3af', font: { family: 'Inter', size: 11 } }, 
                    grid: { color: 'rgba(255, 255, 255, 0.04)' } 
                }
            }
        }
    });
}

function renderDonutChart() {
    const ctx = document.getElementById('donutChart').getContext('2d');
    
    // Proporções médias por grupo
    const totalMean = DATA.reduce((a,b)=>a+b.total,0)/DATA.length;
    const mulhMean = DATA.reduce((a,b)=>a+b.mulheres,0)/DATA.length;
    const homMean = DATA.reduce((a,b)=>a+b.homens,0)/DATA.length;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Mulheres', 'Homens', 'Total'],
            datasets: [{
                data: [mulhMean.toFixed(1), homMean.toFixed(1), totalMean.toFixed(1)],
                backgroundColor: ['#e06c53', '#a3e635', '#c084fc'],
                borderWidth: 3,
                borderColor: '#1c2026'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function renderPerformanceTable() {
    const tbody = document.getElementById('perfTableBody');
    if (!tbody) return;

    const mulhMean = (DATA.reduce((a,b)=>a+b.mulheres,0)/DATA.length).toFixed(1);
    const homMean = (DATA.reduce((a,b)=>a+b.homens,0)/DATA.length).toFixed(1);
    const totMean = (DATA.reduce((a,b)=>a+b.total,0)/DATA.length).toFixed(1);

    const rows = [
        { name: 'Mulheres (PNAD)', val: `${mulhMean}%`, var: '↑ 14,5%', bar: '85%' },
        { name: 'Homens (PNAD)', val: `${homMean}%`, var: '↑ 10,8%', bar: '62%' },
        { name: 'Total Geral', val: `${totMean}%`, var: '↑ 12,4%', bar: '72%' }
    ];

    tbody.innerHTML = '';
    rows.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${r.name}</strong></td>
            <td>
                <span>${r.val}</span>
                <span class="perf-bar-bg"><span class="perf-bar-fill" style="width:${r.bar};"></span></span>
            </td>
            <td style="color:#a3e635;">${r.var}</td>
        `;
        tbody.appendChild(tr);
    });
}
