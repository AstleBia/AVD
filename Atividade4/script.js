// Embedded Dataset (50 Trimestres Móveis Válidos - PNAD Contínua IBGE)
const EMBEDDED_DATA = [
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

let chartInstances = {};

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    loadAndRenderAll();
});

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

// Statistical Functions
function calculateMean(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function calculateVariance(arr, ddof = 1) {
    const mean = calculateMean(arr);
    const sumSq = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0);
    return sumSq / (arr.length - ddof);
}

function calculateStd(arr, ddof = 1) {
    return Math.sqrt(calculateVariance(arr, ddof));
}

function calculateSkewness(arr) {
    const n = arr.length;
    const mean = calculateMean(arr);
    const s = calculateStd(arr, 1);
    const m3 = arr.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / n;
    return (Math.sqrt(n * (n - 1)) / (n - 2)) * (m3 / Math.pow(s * Math.sqrt((n - 1) / n), 3));
}

function calculateKurtosis(arr) {
    const n = arr.length;
    const mean = calculateMean(arr);
    const m4 = arr.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / n;
    const m2 = arr.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
    const kurt = (m4 / Math.pow(m2, 2)) - 3;
    return ((n - 1) / ((n - 2) * (n - 3))) * ((n + 1) * kurt + 6);
}

function classifyKurtosis(val) {
    if (Math.abs(val) < 0.2) return { text: "Mesocúrtica", class: "mesocurtica" };
    if (val < 0) return { text: "Platicúrtica", class: "platicurtica" };
    return { text: "Leptocúrtica", class: "leptocurtica" };
}

async function loadAndRenderAll() {
    let dataList = EMBEDDED_DATA;

    // Try loading data.json if available
    try {
        const res = await fetch('data.json');
        if (res.ok) {
            const fetched = await res.json();
            if (fetched && fetched.length > 0) dataList = fetched;
        }
    } catch (e) {
        console.log('Usando dados integrados no script.');
    }

    processAndRender(dataList);
}

function processAndRender(filteredData) {
    const totals = filteredData.map(d => d.total);
    const mulheres = filteredData.map(d => d.mulheres);
    const homens = filteredData.map(d => d.homens);

    const stats = {
        total: computeCategoryStats(totals),
        mulheres: computeCategoryStats(mulheres),
        homens: computeCategoryStats(homens)
    };

    updateKPIs(stats);
    renderCharts(filteredData, stats);
    populateExamplesTable(stats);
    populateDataTable(filteredData);
}

function computeCategoryStats(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const min = sorted[0];
    const max = sorted[sorted.length - 1];
    return {
        mean: calculateMean(arr),
        variance: calculateVariance(arr, 1),
        std: calculateStd(arr, 1),
        amplitude: max - min,
        min: min,
        max: max,
        skewness: calculateSkewness(arr),
        kurtosis: calculateKurtosis(arr)
    };
}

function updateKPIs(stats) {
    document.getElementById('kpi-var-total').textContent = stats.total.variance.toFixed(4);
    document.getElementById('kpi-std-total').textContent = stats.total.std.toFixed(4) + '%';

    document.getElementById('kpi-var-mulheres').textContent = stats.mulheres.variance.toFixed(4);
    document.getElementById('kpi-std-mulheres').textContent = stats.mulheres.std.toFixed(4) + '%';

    document.getElementById('kpi-var-homens').textContent = stats.homens.variance.toFixed(4);
    document.getElementById('kpi-std-homens').textContent = stats.homens.std.toFixed(4) + '%';

    document.getElementById('kpi-kurt-total').textContent = stats.total.kurtosis.toFixed(4);
}

function renderCharts(filteredData, stats) {
    const labels = filteredData.map(d => formatPeriod(d.periodo));

    // Destroy existing chart instances if re-rendering
    if (chartInstances.time) chartInstances.time.destroy();
    if (chartInstances.disp) chartInstances.disp.destroy();
    if (chartInstances.shape) chartInstances.shape.destroy();

    // Chart 1: Time Series
    const ctxTime = document.getElementById('chartTimeSeries').getContext('2d');
    chartInstances.time = new Chart(ctxTime, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Mulheres',
                    data: filteredData.map(d => d.mulheres),
                    borderColor: '#ec4899',
                    backgroundColor: 'rgba(236, 72, 153, 0.12)',
                    borderWidth: 2.5,
                    pointRadius: 2,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Total',
                    data: filteredData.map(d => d.total),
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.12)',
                    borderWidth: 2.5,
                    pointRadius: 2,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Homens',
                    data: filteredData.map(d => d.homens),
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.12)',
                    borderWidth: 2.5,
                    pointRadius: 2,
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#9ca3af', font: { family: 'Inter', size: 12 } } },
                tooltip: { mode: 'index', intersect: false }
            },
            scales: {
                x: { ticks: { color: '#6b7280', maxTicksLimit: 12 }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                y: { ticks: { color: '#6b7280', callback: v => v + '%' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
            }
        }
    });

    // Chart 2: Dispersion Metrics
    const ctxDisp = document.getElementById('chartDispersion').getContext('2d');
    chartInstances.disp = new Chart(ctxDisp, {
        type: 'bar',
        data: {
            labels: ['Total', 'Mulheres', 'Homens'],
            datasets: [
                {
                    label: 'Exemplo 1: Variância (σ²)',
                    data: [stats.total.variance, stats.mulheres.variance, stats.homens.variance],
                    backgroundColor: '#6366f1',
                    borderRadius: 6
                },
                {
                    label: 'Exemplo 2: Desvio Padrão (s)',
                    data: [stats.total.std, stats.mulheres.std, stats.homens.std],
                    backgroundColor: '#ec4899',
                    borderRadius: 6
                },
                {
                    label: 'Exemplo 3: Amplitude (%)',
                    data: [stats.total.amplitude, stats.mulheres.amplitude, stats.homens.amplitude],
                    backgroundColor: '#06b6d4',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#9ca3af', font: { family: 'Inter', size: 11 } } }
            },
            scales: {
                x: { ticks: { color: '#9ca3af', font: { weight: '600' } }, grid: { display: false } },
                y: { ticks: { color: '#6b7280' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
            }
        }
    });

    // Chart 3: Shape Metrics (Assimetria vs Curtose)
    const ctxShape = document.getElementById('chartShape').getContext('2d');
    chartInstances.shape = new Chart(ctxShape, {
        type: 'bar',
        data: {
            labels: ['Total', 'Mulheres', 'Homens'],
            datasets: [
                {
                    label: 'Exemplo 4: Assimetria (Skewness)',
                    data: [stats.total.skewness, stats.mulheres.skewness, stats.homens.skewness],
                    backgroundColor: '#f59e0b',
                    borderRadius: 6
                },
                {
                    label: 'Exemplo 5: Curtose (Excesso - Kurtosis)',
                    data: [stats.total.kurtosis, stats.mulheres.kurtosis, stats.homens.kurtosis],
                    backgroundColor: '#10b981',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#9ca3af', font: { family: 'Inter', size: 11 } } }
            },
            scales: {
                x: { ticks: { color: '#9ca3af', font: { weight: '600' } }, grid: { display: false } },
                y: { ticks: { color: '#6b7280' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
            }
        }
    });
}

function populateExamplesTable(stats) {
    const tbody = document.getElementById('examplesTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const categories = [
        { key: 'total', name: 'Total' },
        { key: 'mulheres', name: 'Mulheres' },
        { key: 'homens', name: 'Homens' }
    ];

    categories.forEach(cat => {
        const s = stats[cat.key];
        const kurtInfo = classifyKurtosis(s.kurtosis);

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${cat.name}</strong></td>
            <td>${s.variance.toFixed(4)}</td>
            <td>${s.std.toFixed(4)}%</td>
            <td>${s.amplitude.toFixed(2)}% <span class="kpi-sub">(${s.min.toFixed(1)}% - ${s.max.toFixed(1)}%)</span></td>
            <td>${s.skewness.toFixed(4)} <span class="badge-tag assimetrica">${s.skewness > 0.1 ? 'Assimétrica Positiva' : 'Simétrica'}</span></td>
            <td>${s.kurtosis.toFixed(4)} <span class="badge-tag ${kurtInfo.class}">${kurtInfo.text}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function populateDataTable(data) {
    const tbody = document.getElementById('dataTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${formatPeriod(item.periodo)}</td>
            <td><strong>${item.total.toFixed(1)}%</strong></td>
            <td style="color:#ec4899; font-weight: 500;">${item.mulheres.toFixed(1)}%</td>
            <td style="color:#06b6d4; font-weight: 500;">${item.homens.toFixed(1)}%</td>
        `;
        tbody.appendChild(tr);
    });

    const searchInput = document.getElementById('tableSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const rows = tbody.querySelectorAll('tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });
    }
}

function formatPeriod(periodStr) {
    if (!periodStr || periodStr.length < 6) return periodStr;
    const year = periodStr.substring(0, 4);
    const tri = periodStr.substring(4, 6);
    return `${year} T${parseInt(tri)}`;
}
