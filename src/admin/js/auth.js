// ===== AUTHENTICATION =====
const AUTH_KEY = 'hopefoundation_admin_auth';
const CREDENTIALS_KEY = 'hopefoundation_admin_credentials';

// Initialize default credentials
function initializeCredentials() {
    const stored = localStorage.getItem(CREDENTIALS_KEY);
    if (!stored) {
        const defaultCreds = {
            username: 'admin',
            password: 'admin123'
        };
        localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(defaultCreds));
    }
}

initializeCredentials();

// Check if user is authenticated
function isAuthenticated() {
    const auth = localStorage.getItem(AUTH_KEY);
    return auth === 'true';
}

// Check authentication on protected pages
function requireAuth() {
    if (!isAuthenticated() && !window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/admin/')) {
        window.location.href = 'index.html';
    }
}

// Login
function login(username, password) {
    const credentials = JSON.parse(localStorage.getItem(CREDENTIALS_KEY));
    if (credentials.username === username && credentials.password === password) {
        localStorage.setItem(AUTH_KEY, 'true');
        return true;
    }
    return false;
}

// Logout
function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = 'index.html';
}

// Handle login form
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('loginError');
        
        if (login(username, password)) {
            window.location.href = 'dashboard.html';
        } else {
            errorDiv.textContent = 'Invalid username or password';
            errorDiv.style.display = 'block';
        }
    });
}

// Handle logout button
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
}

// Protect admin pages
if (window.location.pathname.includes('/admin/') && !window.location.pathname.endsWith('index.html')) {
    requireAuth();
}
