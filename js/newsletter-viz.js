/**
 * Newsletter Visualization Library
 * Shared components for interactive charts and visualizations in blog posts.
 *
 * Usage in Hugo markdown:
 *   {{<chart id="my-chart" type="bar" data="..." >}}
 *   {{<timeline id="my-timeline" data="..." >}}
 *   {{<comparison id="my-comparison" data="..." >}}
 */

// Wait for ECharts to be available
function waitForECharts(callback, maxWait = 5000) {
    const start = Date.now();
    const check = () => {
        if (typeof echarts !== 'undefined') {
            callback();
        } else if (Date.now() - start < maxWait) {
            setTimeout(check, 100);
        } else {
            console.warn('ECharts not loaded');
        }
    };
    check();
}

// Theme colors that work in light/dark mode
const CHART_COLORS = {
    primary: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4'],
    light: {
        background: '#ffffff',
        text: '#333333',
        axis: '#666666',
        grid: '#e0e0e0'
    },
    dark: {
        background: '#1e1e1e',
        text: '#e0e0e0',
        axis: '#aaaaaa',
        grid: '#333333'
    }
};

// Detect dark mode
function isDarkMode() {
    return document.body.classList.contains('dark');
}

// Get theme-aware colors
function getThemeColors() {
    return isDarkMode() ? CHART_COLORS.dark : CHART_COLORS.light;
}

// Base chart configuration
function getBaseConfig() {
    const theme = getThemeColors();
    return {
        backgroundColor: 'transparent',
        textStyle: { color: theme.text },
        title: {
            textStyle: { color: theme.text, fontSize: 16, fontWeight: 'bold' },
            subtextStyle: { color: theme.axis }
        },
        legend: { textStyle: { color: theme.text } },
        tooltip: {
            backgroundColor: theme.background,
            borderColor: theme.grid,
            textStyle: { color: theme.text }
        },
        xAxis: {
            axisLine: { lineStyle: { color: theme.axis } },
            axisLabel: { color: theme.text },
            splitLine: { lineStyle: { color: theme.grid } }
        },
        yAxis: {
            axisLine: { lineStyle: { color: theme.axis } },
            axisLabel: { color: theme.text },
            splitLine: { lineStyle: { color: theme.grid } }
        }
    };
}

/**
 * Create a bar chart
 * @param {string} containerId - DOM element ID
 * @param {Object} options - Chart options
 */
function createBarChart(containerId, options) {
    waitForECharts(() => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const chart = echarts.init(container);
        const baseConfig = getBaseConfig();

        const config = {
            ...baseConfig,
            title: { ...baseConfig.title, text: options.title, subtext: options.subtitle },
            tooltip: { ...baseConfig.tooltip, trigger: 'axis' },
            xAxis: { ...baseConfig.xAxis, type: 'category', data: options.categories },
            yAxis: { ...baseConfig.yAxis, type: 'value', name: options.yAxisLabel },
            series: options.series.map((s, i) => ({
                name: s.name,
                type: 'bar',
                data: s.data,
                itemStyle: { color: CHART_COLORS.primary[i % CHART_COLORS.primary.length] }
            }))
        };

        if (options.series.length > 1) {
            config.legend = { ...baseConfig.legend, data: options.series.map(s => s.name) };
        }

        chart.setOption(config);
        window.addEventListener('resize', () => chart.resize());

        // Handle theme changes
        const observer = new MutationObserver(() => {
            chart.setOption(getBaseConfig());
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    });
}

/**
 * Create a line chart
 */
function createLineChart(containerId, options) {
    waitForECharts(() => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const chart = echarts.init(container);
        const baseConfig = getBaseConfig();

        const config = {
            ...baseConfig,
            title: { ...baseConfig.title, text: options.title },
            tooltip: { ...baseConfig.tooltip, trigger: 'axis' },
            xAxis: { ...baseConfig.xAxis, type: 'category', data: options.categories },
            yAxis: { ...baseConfig.yAxis, type: 'value' },
            series: options.series.map((s, i) => ({
                name: s.name,
                type: 'line',
                data: s.data,
                smooth: options.smooth !== false,
                itemStyle: { color: CHART_COLORS.primary[i % CHART_COLORS.primary.length] }
            }))
        };

        chart.setOption(config);
        window.addEventListener('resize', () => chart.resize());
    });
}

/**
 * Create a pie chart
 */
function createPieChart(containerId, options) {
    waitForECharts(() => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const chart = echarts.init(container);
        const baseConfig = getBaseConfig();

        const config = {
            ...baseConfig,
            title: { ...baseConfig.title, text: options.title },
            tooltip: { ...baseConfig.tooltip, trigger: 'item', formatter: '{b}: {c} ({d}%)' },
            series: [{
                type: 'pie',
                radius: options.donut ? ['40%', '70%'] : '70%',
                data: options.data.map((item, i) => ({
                    ...item,
                    itemStyle: { color: CHART_COLORS.primary[i % CHART_COLORS.primary.length] }
                })),
                label: { color: getThemeColors().text }
            }]
        };

        chart.setOption(config);
        window.addEventListener('resize', () => chart.resize());
    });
}

/**
 * Create a timeline visualization
 */
function createTimeline(containerId, options) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const theme = getThemeColors();
    const events = options.events || [];

    let html = `<div class="newsletter-timeline" style="position:relative;padding-left:30px;border-left:3px solid ${CHART_COLORS.primary[0]};">`;

    events.forEach((event, i) => {
        const color = CHART_COLORS.primary[i % CHART_COLORS.primary.length];
        html += `
            <div class="timeline-event" style="margin-bottom:20px;position:relative;">
                <div class="timeline-dot" style="position:absolute;left:-36px;width:12px;height:12px;border-radius:50%;background:${color};border:3px solid ${theme.background};"></div>
                <div class="timeline-date" style="font-weight:bold;color:${color};margin-bottom:4px;">${event.date}</div>
                <div class="timeline-title" style="font-size:1.1em;font-weight:600;margin-bottom:4px;">${event.title}</div>
                <div class="timeline-desc" style="color:${theme.axis};">${event.description || ''}</div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

/**
 * Create a comparison table with visual indicators
 */
function createComparison(containerId, options) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const theme = getThemeColors();
    const { headers, rows, highlights } = options;

    let html = `<div class="newsletter-comparison" style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;margin:1em 0;">
            <thead>
                <tr style="background:${theme.grid};">
                    ${headers.map(h => `<th style="padding:12px;text-align:left;border-bottom:2px solid ${CHART_COLORS.primary[0]};">${h}</th>`).join('')}
                </tr>
            </thead>
            <tbody>`;

    rows.forEach((row, i) => {
        const isHighlight = highlights && highlights.includes(i);
        const bgColor = isHighlight ? `${CHART_COLORS.primary[0]}22` : 'transparent';
        html += `<tr style="background:${bgColor};">
            ${row.map((cell, j) => `<td style="padding:10px;border-bottom:1px solid ${theme.grid};">${cell}</td>`).join('')}
        </tr>`;
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
}

/**
 * Create a metric card display
 */
function createMetricCards(containerId, options) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const theme = getThemeColors();
    const metrics = options.metrics || [];

    let html = '<div class="newsletter-metrics" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin:1.5em 0;">';

    metrics.forEach((metric, i) => {
        const color = CHART_COLORS.primary[i % CHART_COLORS.primary.length];
        const trend = metric.trend ? (metric.trend > 0 ? '↑' : '↓') : '';
        const trendColor = metric.trend > 0 ? '#91cc75' : '#ee6666';

        html += `
            <div class="metric-card" style="background:${theme.background};border:1px solid ${theme.grid};border-left:4px solid ${color};border-radius:8px;padding:16px;">
                <div class="metric-label" style="color:${theme.axis};font-size:0.9em;margin-bottom:4px;">${metric.label}</div>
                <div class="metric-value" style="font-size:1.8em;font-weight:bold;color:${color};">${metric.value}</div>
                ${metric.trend ? `<div class="metric-trend" style="color:${trendColor};font-size:0.9em;">${trend} ${Math.abs(metric.trend)}%</div>` : ''}
                ${metric.context ? `<div class="metric-context" style="color:${theme.axis};font-size:0.85em;margin-top:4px;">${metric.context}</div>` : ''}
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// Export for use in shortcodes
window.NewsletterViz = {
    createBarChart,
    createLineChart,
    createPieChart,
    createTimeline,
    createComparison,
    createMetricCards,
    CHART_COLORS,
    getThemeColors
};
