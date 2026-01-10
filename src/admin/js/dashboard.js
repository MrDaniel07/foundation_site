// ===== DASHBOARD STATISTICS =====
document.addEventListener('DOMContentLoaded', function() {
    updateDashboardStats();
});

function updateDashboardStats() {
    // Programs count
    const programs = JSON.parse(localStorage.getItem('hopefoundation_programs') || '[]');
    const visiblePrograms = programs.filter(p => p.visible).length;
    document.getElementById('programsCount').textContent = visiblePrograms;
    
    // Impact stories count
    const impact = JSON.parse(localStorage.getItem('hopefoundation_impact') || '[]');
    const visibleImpact = impact.filter(i => i.visible).length;
    document.getElementById('impactCount').textContent = visibleImpact;
    
    // News count
    const news = JSON.parse(localStorage.getItem('hopefoundation_news') || '[]');
    const visibleNews = news.filter(n => n.visible).length;
    document.getElementById('newsCount').textContent = visibleNews;
    
    // Messages count
    const messages = JSON.parse(localStorage.getItem('hopefoundation_messages') || '[]');
    document.getElementById('messagesCount').textContent = messages.length;
}
