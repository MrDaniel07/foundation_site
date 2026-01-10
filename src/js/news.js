// ===== NEWS DATA =====
const newsData = [
    {
        id: 1,
        title: 'Hope Foundation Launches New Education Initiative in Tanzania',
        summary: 'Sarah Mitchell announces expansion of education programs to serve 5,000 additional students across Tanzania. The program includes teacher training, library development, and scholarship opportunities.',
        date: '2025-01-15',
        image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NzEyMjY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 1
    },
    {
        id: 2,
        title: '200th Well Installed: Milestone Celebration',
        summary: 'The Hope Foundation celebrates a major milestone with the installation of its 200th clean water well. This achievement represents clean water access for over 80,000 people in rural communities.',
        date: '2024-12-20',
        image: 'https://images.unsplash.com/photo-1757860305681-3c6a52d7a091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGNsZWFuJTIwdmlsbGFnZXxlbnwxfHx8fDE3NjcyMDgwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 2
    },
    {
        id: 3,
        title: 'Annual Impact Report Released',
        summary: 'Founder Sarah Mitchell releases the 2024 Annual Impact Report, highlighting remarkable outcomes including 52,000 students served, 35,000 healthcare visits completed, and continued growth in all program areas.',
        date: '2024-12-10',
        image: 'https://images.unsplash.com/photo-1733809701005-0b1c0ad53c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBjaGFyaXR5JTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjcyMDgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 3
    },
    {
        id: 4,
        title: 'Mobile Health Clinic Expands to Three New Regions',
        summary: 'Our community healthcare program expands to serve remote villages in Peru, bringing essential medical care and health education to families who previously had no access to healthcare services.',
        date: '2024-11-28',
        image: 'https://images.unsplash.com/photo-1766325693423-69e9fe20605b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwc3VwcG9ydHxlbnwxfHx8fDE3NjcxNzYzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 4
    },
    {
        id: 5,
        title: 'Women\'s Empowerment Program Shows Strong Results',
        summary: 'After two years, our women\'s empowerment program reports that 85% of participants have successfully launched small businesses, creating economic opportunity and community leadership.',
        date: '2024-11-10',
        image: 'https://images.unsplash.com/photo-1681011130080-46e470a7c96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjcyMDgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 5
    },
    {
        id: 6,
        title: 'Sarah Mitchell Speaks at International Development Conference',
        summary: 'Hope Foundation founder Sarah Mitchell was invited to speak at the Global Development Summit, sharing insights on community-led development and the importance of long-term partnership models.',
        date: '2024-10-22',
        image: 'https://images.unsplash.com/photo-1663518629510-016989dc4ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsZWFkZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjcyMDgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 6
    }
];

// Initialize news from localStorage or use default
function initializeNews() {
    const stored = localStorage.getItem('hopefoundation_news');
    if (!stored) {
        localStorage.setItem('hopefoundation_news', JSON.stringify(newsData));
        return newsData;
    }
    return JSON.parse(stored);
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Render news on page
function renderNews() {
    const news = initializeNews();
    const newsGrid = document.getElementById('newsGrid');
    
    if (!newsGrid) return;
    
    // Filter visible news and sort by date (newest first)
    const visibleNews = news
        .filter(n => n.visible)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    newsGrid.innerHTML = visibleNews.map(article => `
        <div class="news-card">
            <img src="${article.image}" alt="${article.title}">
            <div class="news-card-content">
                <p class="news-date">${formatDate(article.date)}</p>
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
            </div>
        </div>
    `).join('');
}

// Load news when DOM is ready
document.addEventListener('DOMContentLoaded', renderNews);
