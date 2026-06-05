// dashboard.js - Edge by Citrus Dashboard Page

document.addEventListener('DOMContentLoaded', function() {
    // Security Monitoring
    initSecurityMonitoring();
    
    // Initial Data Load
    loadDashboardData();
    
    // Initialize navigation elements
    initNavigation();
    
    // Initialize charts and visualizations
    initCharts();
    
    // Setup real-time updates
    setupRealTimeUpdates();
});

// ========================
// SECURITY MONITORING
// ========================
function initSecurityMonitoring() {
    // Session validation - check if user is logged in
    validateSession();
    
    // Setup data access control based on user role
    setupDataAccessControl();
    
    // Set auto refresh for data
    setAutoDataRefresh();
}

function validateSession() {
    // Check local storage or cookies for valid session token
    const sessionToken = localStorage.getItem('edgeCitrusSessionToken');
    
    if (!sessionToken) {
        console.log('Session validation: No active session found.');
        // In production: Uncomment to redirect to login
        // window.location.href = 'C:/Users/nderu/Documents/Development/Product/Edge by Citrus/Landing Page/landing_page.html';
    } else {
        // Validate token with server (mock implementation)
        console.log('Session validation: Active session found.');
    }
}

function setupDataAccessControl() {
    // Get user role from session
    const userRole = localStorage.getItem('edgeCitrusUserRole') || 'admin';
    
    // Apply data access controls based on role
    console.log(`Setting up data access for role: ${userRole}`);
    
    // In real implementation, this would control visibility of certain dashboard elements
}

function setAutoDataRefresh() {
    // Set up auto refresh for dashboard data every 5 minutes
    setInterval(() => {
        console.log('Auto-refreshing dashboard data');
        loadDashboardData();
    }, 300000); // 5 minutes
}

// ========================
// INITIAL DATA LOAD
// ========================
function loadDashboardData() {
    // Load all KPIs, charts and activities
    loadKPIData();
    loadChartData();
    loadRecentActivities();
}

function loadKPIData() {
    // In a real app, this would fetch data from an API
    // Mock implementation with sample data
    
    // For demonstration purposes, we'll use random data
    updateTotalSales(generateRandomSales());
    updateMonthlyTarget(generateRandomPercentage());
    updateActiveLeads(generateRandomLeads());
    
    console.log('KPI data loaded successfully');
}

function generateRandomSales() {
    // Generate a random sales figure between 20M and 30M
    return Math.floor(Math.random() * (30000000 - 20000000) + 20000000);
}

function generateRandomPercentage() {
    // Generate a random percentage between 65% and 95%
    return Math.floor(Math.random() * (95 - 65) + 65);
}

function generateRandomLeads() {
    // Generate a random lead count between 120 and 200
    return Math.floor(Math.random() * (200 - 120) + 120);
}

function updateTotalSales(amount) {
    // Format currency with commas
    const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector('.metric-card:nth-child(1) .metric-value').textContent = `KES. ${formattedAmount}`;
}

function updateMonthlyTarget(percentage) {
    document.querySelector('.metric-card:nth-child(2) .metric-value').textContent = `${percentage}%`;
    
    // Visual indicator based on performance
    const metricCard = document.querySelector('.metric-card:nth-child(2)');
    
    // Clear any existing classes
    metricCard.classList.remove('target-low', 'target-medium', 'target-high');
    
    // Add appropriate class based on target achievement
    if (percentage < 70) {
        metricCard.classList.add('target-low');
    } else if (percentage < 85) {
        metricCard.classList.add('target-medium');
    } else {
        metricCard.classList.add('target-high');
    }
}

function updateActiveLeads(count) {
    document.querySelector('.metric-card:nth-child(3) .metric-value').textContent = count;
}

function loadChartData() {
    // This would typically be an API call to get chart data
    // For demo purposes, we'll generate random data
    
    const salesData = generateSalesChartData();
    renderSalesChart(salesData);
    
    console.log('Chart data loaded successfully');
}

function generateSalesChartData() {
    // Generate random sales data for a chart
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth();
    
    // Get last 6 months
    const recentMonths = [];
    for (let i = 5; i >= 0; i--) {
        const monthIndex = (currentMonth - i + 12) % 12;
        recentMonths.push(months[monthIndex]);
    }
    
    // Generate random sales figures for each month
    const salesFigures = recentMonths.map(() => Math.floor(Math.random() * (30000000 - 15000000) + 15000000));
    
    return {
        months: recentMonths,
        sales: salesFigures
    };
}

function renderSalesChart(data) {
    // In a real implementation, this would render a chart using a library like Chart.js
    // For now, we'll just update the placeholder
    
    const salesChartContainer = document.getElementById('sales-chart');
    
    // Clear the container
    salesChartContainer.innerHTML = '';
    
    // Create a simple HTML-based chart visualization (this would be replaced with a proper chart library)
    const chartWrapper = document.createElement('div');
    chartWrapper.className = 'sales-chart-wrapper';
    
    // Create chart markup
    let chartHTML = '<div class="chart-container">';
    chartHTML += '<div class="chart-y-axis">';
    chartHTML += '<span>30M</span><span>25M</span><span>20M</span><span>15M</span><span>10M</span><span>5M</span><span>0</span>';
    chartHTML += '</div>';
    chartHTML += '<div class="chart-bars">';
    
    // Add bars for each month
    data.months.forEach((month, index) => {
        const height = (data.sales[index] / 30000000 * 100).toFixed(2);
        chartHTML += `<div class="chart-bar-container">`;
        chartHTML += `<div class="chart-bar" style="height: ${height}%;" title="KES ${data.sales[index].toLocaleString()}"></div>`;
        chartHTML += `<div class="chart-label">${month}</div>`;
        chartHTML += `</div>`;
    });
    
    chartHTML += '</div></div>';
    
    // Add a note about the chart
    chartHTML += '<div class="chart-note">Monthly sales trend for the last 6 months</div>';
    
    chartWrapper.innerHTML = chartHTML;
    salesChartContainer.appendChild(chartWrapper);
    
    // Add tooltip functionality (simplified)
    document.querySelectorAll('.chart-bar').forEach(bar => {
        bar.addEventListener('mouseover', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'chart-tooltip';
            tooltip.textContent = this.getAttribute('title');
            this.appendChild(tooltip);
        });
        
        bar.addEventListener('mouseout', function() {
            const tooltip = this.querySelector('.chart-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

function loadRecentActivities() {
    // This would fetch recent activities from an API
    // Mock implementation for demo purposes
    
    const activitiesList = document.getElementById('activities-list');
    
    // Clear current activities
    activitiesList.innerHTML = '';
    
    // Sample activities
    const activities = [
        { text: 'New lead created - Tech Solutions Inc.', time: '10 minutes ago', type: 'lead' },
        { text: 'Deal closed - DataCorp Systems (KES 2.5M)', time: '1 hour ago', type: 'deal' },
        { text: 'Meeting scheduled - Innovation Labs', time: '3 hours ago', type: 'meeting' },
        { text: 'Follow-up task created for Nexus Technologies', time: '4 hours ago', type: 'task' },
        { text: 'Lead status updated - MobileTech Solutions', time: 'Yesterday', type: 'update' }
    ];
    
    // Add activities to the list
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.className = `activity-item activity-${activity.type}`;
        
        // Create icon based on activity type
        const icon = document.createElement('i');
        switch(activity.type) {
            case 'lead':
                icon.className = 'fas fa-user-plus';
                break;
            case 'deal':
                icon.className = 'fas fa-handshake';
                break;
            case 'meeting':
                icon.className = 'fas fa-calendar-check';
                break;
            case 'task':
                icon.className = 'fas fa-tasks';
                break;
            case 'update':
                icon.className = 'fas fa-sync';
                break;
            default:
                icon.className = 'fas fa-bell';
        }
        
        // Create activity content
        const activityText = document.createElement('span');
        activityText.className = 'activity-text';
        activityText.textContent = activity.text;
        
        const activityTime = document.createElement('span');
        activityTime.className = 'activity-time';
        activityTime.textContent = activity.time;
        
        // Assemble the activity item
        li.appendChild(icon);
        li.appendChild(activityText);
        li.appendChild(activityTime);
        
        activitiesList.appendChild(li);
    });
    
    console.log('Recent activities loaded successfully');
}

// ========================
// NAVIGATION ELEMENTS
// ========================
function initNavigation() {
    // Initialize responsive UI
    setupResponsiveUI();
    
    // Initialize drill-down navigation
    setupDrillDownNavigation();
    
    // Setup other navigation element handlers
    setupUserProfileDropdown();
    setupNotificationsButton();
    setupQuickNavigation();
}

function setupResponsiveUI() {
    // Add responsive menu toggle for mobile
    const navbar = document.querySelector('.navbar');
    
    // Create mobile menu toggle button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Insert before nav-links
    const navLinks = document.querySelector('.nav-links');
    navbar.insertBefore(mobileMenuBtn, navLinks);
    
    // Add resize listener
    window.addEventListener('resize', handleWindowResize);
    
    // Initial check
    handleWindowResize();
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-mobile');
}

function handleWindowResize() {
    // Check window width and adjust UI accordingly
    const isMobile = window.innerWidth < 768;
    const navLinks = document.querySelector('.nav-links');
    
    if (isMobile) {
        navLinks.classList.add('mobile-view');
        navLinks.classList.remove('show-mobile');
    } else {
        navLinks.classList.remove('mobile-view');
        navLinks.classList.remove('show-mobile');
    }
}

function setupDrillDownNavigation() {
    // Setup click handlers for dashboard cards that support drill-down
    const chartCard = document.querySelector('.chart-card');
    
    chartCard.addEventListener('click', function() {
        // This would navigate to a detailed sales report page
        console.log('Drill-down: Navigating to detailed Sales Reports');
        // In production: Uncomment to navigate to detailed view
        // window.location.href = 'C:/Users/nderu/Documents/Development/Product/Edge by Citrus/Webpages/Sales Reports/sales_reports.html';
    });
    
    // Make the card visually indicate it's clickable
    chartCard.classList.add('drilldown-enabled');
    
    // Add tooltip to indicate drilldown capability
    const drilldownIndicator = document.createElement('div');
    drilldownIndicator.className = 'drilldown-indicator';
    drilldownIndicator.innerHTML = '<i class="fas fa-search-plus"></i> Click for details';
    chartCard.appendChild(drilldownIndicator);
}

function setupUserProfileDropdown() {
    const userProfile = document.querySelector('.user-profile');
    
    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        userProfile.classList.remove('active');
    });
}

function setupNotificationsButton() {
    const notificationsBtn = document.getElementById('notificationsBtn');
    
    notificationsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // In a real implementation, this would open a notifications panel
        console.log('Notifications button clicked');
        
        // Toggle notification read status
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            badge.classList.toggle('read');
        }
    });
}

function setupQuickNavigation() {
    // Add quick navigation actions for common tasks
    const dashboardGrid = document.querySelector('.dashboard-grid');
    
    // Create quick action buttons
    const quickActions = document.createElement('div');
    quickActions.className = 'card quick-actions-card';
    
    // Add title
    const actionTitle = document.createElement('h3');
    actionTitle.textContent = 'Quick Actions';
    quickActions.appendChild(actionTitle);
    
    // Add action buttons
    const actionButtons = document.createElement('div');
    actionButtons.className = 'action-buttons';
    
    // Add Lead button
    const addLeadBtn = createActionButton('fas fa-user-plus', 'Add Lead', function() {
        window.location.href = 'C:/Users/nderu/Documents/Development/Product/Edge by Citrus/Webpages/Lead Management/lead_management.html?action=new';
    });
    
    // View Reports button
    const viewReportsBtn = createActionButton('fas fa-chart-bar', 'View Reports', function() {
        window.location.href = 'C:/Users/nderu/Documents/Development/Product/Edge by Citrus/Webpages/Sales Reports/sales_reports.html';
    });
    
    // Schedule Meeting button
    const scheduleMeetingBtn = createActionButton('fas fa-calendar-plus', 'Schedule Meeting', function() {
        window.location.href = 'C:/Users/nderu/Documents/Development/Product/Edge by Citrus/Webpages/Task Management/task_management.html?action=meeting';
    });
    
    // Append all buttons
    actionButtons.appendChild(addLeadBtn);
    actionButtons.appendChild(viewReportsBtn);
    actionButtons.appendChild(scheduleMeetingBtn);
    quickActions.appendChild(actionButtons);
    
    // Add to dashboard grid
    dashboardGrid.appendChild(quickActions);
}

function createActionButton(iconClass, text, clickHandler) {
    const button = document.createElement('button');
    button.className = 'action-button';
    
    const icon = document.createElement('i');
    icon.className = iconClass;
    
    const span = document.createElement('span');
    span.textContent = text;
    
    button.appendChild(icon);
    button.appendChild(span);
    button.addEventListener('click', clickHandler);
    
    return button;
}

// ========================
// ANALYTICS & CHARTS
// ========================
function initCharts() {
    // Initialize sales trends
    initSalesTrends();
    
    // Initialize performance comparison
    initPerformanceComparison();
}

function initSalesTrends() {
    // This would be implemented with a charting library in production
    console.log('Sales trends initialized');
    
    // Apply interactive features to the chart
    const salesChart = document.getElementById('sales-chart');
    
    // Add toggle for weekly/monthly view
    const viewToggle = document.createElement('div');
    viewToggle.className = 'chart-view-toggle';
    
    const monthlyBtn = document.createElement('button');
    monthlyBtn.textContent = 'Monthly';
    monthlyBtn.className = 'toggle-btn active';
    monthlyBtn.addEventListener('click', function() {
        this.classList.add('active');
        weeklyBtn.classList.remove('active');
        loadChartData(); // Reload with monthly data
    });
    
    const weeklyBtn = document.createElement('button');
    weeklyBtn.textContent = 'Weekly';
    weeklyBtn.className = 'toggle-btn';
    weeklyBtn.addEventListener('click', function() {
        this.classList.add('active');
        monthlyBtn.classList.remove('active');
        loadWeeklySalesData(); // Load weekly data instead
    });
    
    viewToggle.appendChild(monthlyBtn);
    viewToggle.appendChild(weeklyBtn);
    
    // Insert before the chart
    const chartCard = document.querySelector('.chart-card');
    chartCard.insertBefore(viewToggle, salesChart);
}

function loadWeeklySalesData() {
    // Mock function to load weekly data instead of monthly
    const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const salesFigures = weeks.map(() => Math.floor(Math.random() * (8000000 - 4000000) + 4000000));
    
    renderSalesChart({
        months: weeks, // Reusing the same structure but with weeks
        sales: salesFigures
    });
}

function initPerformanceComparison() {
    // Create a performance comparison widget
    const dashboardGrid = document.querySelector('.dashboard-grid');
    
    const comparisonCard = document.createElement('div');
    comparisonCard.className = 'card comparison-card';
    
    // Add title
    const comparisonTitle = document.createElement('h3');
    comparisonTitle.textContent = 'Performance Comparison';
    comparisonCard.appendChild(comparisonTitle);
    
    // Create comparison content
    const comparisonContent = document.createElement('div');
    comparisonContent.className = 'comparison-content';
    
    // Current vs Previous Period
    const periodsComp = document.createElement('div');
    periodsComp.className = 'comparison-item';
    
    const currentPeriod = Math.floor(Math.random() * (30000000 - 20000000) + 20000000);
    const previousPeriod = Math.floor(Math.random() * (30000000 - 20000000) + 20000000);
    const percentChange = ((currentPeriod - previousPeriod) / previousPeriod * 100).toFixed(1);
    
    periodsComp.innerHTML = `
        <div class="comparison-title">Current vs Previous Month</div>
        <div class="comparison-figures">
            <div class="current-period">KES ${currentPeriod.toLocaleString()}</div>
            <div class="previous-period">KES ${previousPeriod.toLocaleString()}</div>
        </div>
        <div class="percentage-change ${percentChange >= 0 ? 'positive' : 'negative'}">
            <i class="fas fa-${percentChange >= 0 ? 'arrow-up' : 'arrow-down'}"></i> ${Math.abs(percentChange)}%
        </div>
    `;
    
    comparisonContent.appendChild(periodsComp);
    comparisonCard.appendChild(comparisonContent);
    
    // Add to dashboard grid
    dashboardGrid.appendChild(comparisonCard);
}

// ========================
// REAL-TIME UPDATES
// ========================
function setupRealTimeUpdates() {
    // In a real app, this would set up WebSocket or polling for updates
    console.log('Setting up real-time updates');
    
    // Mock implementation - simulate a new activity every 30 seconds
    setInterval(() => {
        simulateNewActivity();
    }, 30000);
}

function simulateNewActivity() {
    // Create a random new activity
    const activityTypes = ['lead', 'deal', 'meeting', 'task', 'update'];
    const randomType = activityTypes[Math.floor(Math.random() * activityTypes.length)];
    
    const companyNames = [
        'Digital Solutions', 'TechSphere', 'Innovative Computing', 
        'CloudWave Systems', 'DataStream Inc.', 'NetCore Services'
    ];
    const randomCompany = companyNames[Math.floor(Math.random() * companyNames.length)];
    
    let activityText = '';
    switch(randomType) {
        case 'lead':
            activityText = `New lead created - ${randomCompany}`;
            break;
        case 'deal':
            const dealAmount = (Math.random() * (5000000 - 500000) + 500000).toFixed(0);
            activityText = `Deal closed - ${randomCompany} (KES ${dealAmount})`;
            break;
        case 'meeting':
            activityText = `Meeting scheduled - ${randomCompany}`;
            break;
        case 'task':
            activityText = `Follow-up task created for ${randomCompany}`;
            break;
        case 'update':
            activityText = `Lead status updated - ${randomCompany}`;
            break;
    }
    
    // Add to activities list
    const activitiesList = document.getElementById('activities-list');
    const li = document.createElement('li');
    li.className = `activity-item activity-${randomType} new-activity`;
    
    // Create icon
    const icon = document.createElement('i');
    switch(randomType) {
        case 'lead':
            icon.className = 'fas fa-user-plus';
            break;
        case 'deal':
            icon.className = 'fas fa-handshake';
            break;
        case 'meeting':
            icon.className = 'fas fa-calendar-check';
            break;
        case 'task':
            icon.className = 'fas fa-tasks';
            break;
        case 'update':
            icon.className = 'fas fa-sync';
            break;
    }
    
    // Create activity content
    const activityTextSpan = document.createElement('span');
    activityTextSpan.className = 'activity-text';
    activityTextSpan.textContent = activityText;
    
    const activityTime = document.createElement('span');
    activityTime.className = 'activity-time';
    activityTime.textContent = 'Just now';
    
    // Assemble the activity item
    li.appendChild(icon);
    li.appendChild(activityTextSpan);
    li.appendChild(activityTime);
    
    // Add to the top of the list
    activitiesList.insertBefore(li, activitiesList.firstChild);
    
    // Remove oldest activity if list is too long
    if (activitiesList.children.length > 10) {
        activitiesList.removeChild(activitiesList.lastChild);
    }
    
    // Add notification effect
    setTimeout(() => {
        li.classList.remove('new-activity');
    }, 3000);
    
    // Update notification badge
    updateNotificationBadge();
}

function updateNotificationBadge() {
    // Get the current badge count
    const badge = document.querySelector('.notification-badge');
    const currentCount = parseInt(badge.textContent);
    
    // Increment by 1
    badge.textContent = currentCount + 1;
    
    // Add animation
    badge.classList.add('pulse');
    setTimeout(() => {
        badge.classList.remove('pulse');
    }, 1000);
}