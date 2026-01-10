// ===== CONTENT MANAGEMENT =====
document.addEventListener('DOMContentLoaded', function() {
    loadSEOSettings();
    
    document.getElementById('seoForm').addEventListener('submit', saveSEOSettings);
});

function loadSEOSettings() {
    const seoSettings = JSON.parse(localStorage.getItem('hopefoundation_seo') || '{}');
    
    if (seoSettings.homeTitle) document.getElementById('homeTitle').value = seoSettings.homeTitle;
    if (seoSettings.homeDescription) document.getElementById('homeDescription').value = seoSettings.homeDescription;
    if (seoSettings.aboutTitle) document.getElementById('aboutTitle').value = seoSettings.aboutTitle;
    if (seoSettings.aboutDescription) document.getElementById('aboutDescription').value = seoSettings.aboutDescription;
    if (seoSettings.founderTitle) document.getElementById('founderTitle').value = seoSettings.founderTitle;
    if (seoSettings.founderDescription) document.getElementById('founderDescription').value = seoSettings.founderDescription;
}

function saveSEOSettings(e) {
    e.preventDefault();
    
    const seoSettings = {
        homeTitle: document.getElementById('homeTitle').value,
        homeDescription: document.getElementById('homeDescription').value,
        aboutTitle: document.getElementById('aboutTitle').value,
        aboutDescription: document.getElementById('aboutDescription').value,
        founderTitle: document.getElementById('founderTitle').value,
        founderDescription: document.getElementById('founderDescription').value
    };
    
    localStorage.setItem('hopefoundation_seo', JSON.stringify(seoSettings));
    
    const message = document.getElementById('seoMessage');
    message.style.display = 'block';
    
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
}
