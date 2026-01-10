// ===== NEWS MANAGEMENT =====
let currentEditId = null;

document.addEventListener('DOMContentLoaded', function() {
    loadNews();
    
    document.getElementById('addNewsBtn').addEventListener('click', () => {
        openModal();
    });
    
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    document.getElementById('newsForm').addEventListener('submit', saveNews);
    
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('newsDate').value = today;
});

function loadNews() {
    const news = JSON.parse(localStorage.getItem('hopefoundation_news') || '[]');
    const container = document.getElementById('newsList');
    
    if (news.length === 0) {
        container.innerHTML = '<p class="no-data">No news articles yet. Click "Add New Article" to create one.</p>';
        return;
    }
    
    const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${sortedNews.map(article => `
                    <tr>
                        <td>${formatDate(article.date)}</td>
                        <td>${article.title}</td>
                        <td>
                            <span class="badge ${article.visible ? 'badge-success' : 'badge-secondary'}">
                                ${article.visible ? 'Visible' : 'Hidden'}
                            </span>
                        </td>
                        <td>
                            <div class="table-actions">
                                <button class="btn btn-small btn-edit" onclick="editNews(${article.id})">Edit</button>
                                <button class="btn btn-small btn-toggle" onclick="toggleVisibility(${article.id})">
                                    ${article.visible ? 'Hide' : 'Show'}
                                </button>
                                <button class="btn btn-small btn-delete" onclick="deleteNews(${article.id})">Delete</button>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function openModal(article = null) {
    const modal = document.getElementById('newsModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('newsForm');
    
    if (article) {
        modalTitle.textContent = 'Edit News Article';
        document.getElementById('newsId').value = article.id;
        document.getElementById('newsTitle').value = article.title;
        document.getElementById('newsSummary').value = article.summary;
        document.getElementById('newsDate').value = article.date;
        document.getElementById('newsImage').value = article.image;
        currentEditId = article.id;
    } else {
        modalTitle.textContent = 'Add New Article';
        form.reset();
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('newsDate').value = today;
        currentEditId = null;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('newsModal').classList.remove('active');
    document.getElementById('newsForm').reset();
    currentEditId = null;
}

function saveNews(e) {
    e.preventDefault();
    
    const news = JSON.parse(localStorage.getItem('hopefoundation_news') || '[]');
    
    const newsData = {
        id: currentEditId || Date.now(),
        title: document.getElementById('newsTitle').value,
        summary: document.getElementById('newsSummary').value,
        date: document.getElementById('newsDate').value,
        image: document.getElementById('newsImage').value,
        visible: true,
        order: Date.now()
    };
    
    if (currentEditId) {
        const index = news.findIndex(n => n.id === currentEditId);
        news[index] = newsData;
    } else {
        news.push(newsData);
    }
    
    localStorage.setItem('hopefoundation_news', JSON.stringify(news));
    closeModal();
    loadNews();
}

function editNews(id) {
    const news = JSON.parse(localStorage.getItem('hopefoundation_news') || '[]');
    const article = news.find(n => n.id === id);
    if (article) {
        openModal(article);
    }
}

function toggleVisibility(id) {
    const news = JSON.parse(localStorage.getItem('hopefoundation_news') || '[]');
    const article = news.find(n => n.id === id);
    if (article) {
        article.visible = !article.visible;
        localStorage.setItem('hopefoundation_news', JSON.stringify(news));
        loadNews();
    }
}

function deleteNews(id) {
    if (confirm('Are you sure you want to delete this news article?')) {
        let news = JSON.parse(localStorage.getItem('hopefoundation_news') || '[]');
        news = news.filter(n => n.id !== id);
        localStorage.setItem('hopefoundation_news', JSON.stringify(news));
        loadNews();
    }
}
