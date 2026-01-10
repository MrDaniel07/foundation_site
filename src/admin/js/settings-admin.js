// ===== SETTINGS MANAGEMENT =====
document.addEventListener('DOMContentLoaded', function() {
    loadAccountInfo();
    
    document.getElementById('passwordForm').addEventListener('submit', changePassword);
    document.getElementById('accountForm').addEventListener('submit', updateUsername);
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('clearDataBtn').addEventListener('click', clearData);
});

function loadAccountInfo() {
    const credentials = JSON.parse(localStorage.getItem('hopefoundation_admin_credentials'));
    document.getElementById('username').value = credentials.username;
}

function changePassword(e) {
    e.preventDefault();
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const errorDiv = document.getElementById('passwordError');
    const successDiv = document.getElementById('passwordSuccess');
    
    errorDiv.textContent = '';
    successDiv.textContent = '';
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';
    
    // Validate
    const credentials = JSON.parse(localStorage.getItem('hopefoundation_admin_credentials'));
    
    if (currentPassword !== credentials.password) {
        errorDiv.textContent = 'Current password is incorrect';
        errorDiv.style.display = 'block';
        return;
    }
    
    if (newPassword !== confirmPassword) {
        errorDiv.textContent = 'New passwords do not match';
        errorDiv.style.display = 'block';
        return;
    }
    
    if (newPassword.length < 6) {
        errorDiv.textContent = 'Password must be at least 6 characters';
        errorDiv.style.display = 'block';
        return;
    }
    
    // Update password
    credentials.password = newPassword;
    localStorage.setItem('hopefoundation_admin_credentials', JSON.stringify(credentials));
    
    successDiv.textContent = 'Password updated successfully!';
    successDiv.style.display = 'block';
    
    document.getElementById('passwordForm').reset();
    
    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 3000);
}

function updateUsername(e) {
    e.preventDefault();
    
    const newUsername = document.getElementById('username').value;
    const errorDiv = document.getElementById('accountError');
    const successDiv = document.getElementById('accountSuccess');
    
    errorDiv.textContent = '';
    successDiv.textContent = '';
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';
    
    if (!newUsername || newUsername.length < 3) {
        errorDiv.textContent = 'Username must be at least 3 characters';
        errorDiv.style.display = 'block';
        return;
    }
    
    const credentials = JSON.parse(localStorage.getItem('hopefoundation_admin_credentials'));
    credentials.username = newUsername;
    localStorage.setItem('hopefoundation_admin_credentials', JSON.stringify(credentials));
    
    successDiv.textContent = 'Username updated successfully!';
    successDiv.style.display = 'block';
    
    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 3000);
}

function exportData() {
    const data = {
        programs: JSON.parse(localStorage.getItem('hopefoundation_programs') || '[]'),
        impact: JSON.parse(localStorage.getItem('hopefoundation_impact') || '[]'),
        news: JSON.parse(localStorage.getItem('hopefoundation_news') || '[]'),
        messages: JSON.parse(localStorage.getItem('hopefoundation_messages') || '[]'),
        seo: JSON.parse(localStorage.getItem('hopefoundation_seo') || '{}')
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `hopefoundation-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
}

function clearData() {
    if (confirm('Are you sure you want to clear all content and reset to defaults? This cannot be undone.')) {
        if (confirm('This will delete all programs, impact stories, news, and messages. Are you absolutely sure?')) {
            // Clear content but keep defaults
            localStorage.removeItem('hopefoundation_programs');
            localStorage.removeItem('hopefoundation_impact');
            localStorage.removeItem('hopefoundation_news');
            localStorage.removeItem('hopefoundation_messages');
            localStorage.removeItem('hopefoundation_seo');
            
            alert('All content has been reset to defaults. The page will reload.');
            window.location.reload();
        }
    }
}
