// ===== MESSAGES MANAGEMENT =====
document.addEventListener('DOMContentLoaded', function() {
    loadMessages();
});

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('hopefoundation_messages') || '[]');
    const container = document.getElementById('messagesList');
    
    if (messages.length === 0) {
        container.innerHTML = '<p class="no-data">No messages yet.</p>';
        return;
    }
    
    const sortedMessages = messages.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = sortedMessages.map(message => `
        <div class="message-card">
            <div class="message-header">
                <div class="message-meta">
                    <h3>${message.name}</h3>
                    <p>${message.email} • ${formatDate(message.date)}</p>
                    <p><strong>Subject:</strong> ${message.subject}</p>
                </div>
                <button class="btn btn-small btn-delete" onclick="deleteMessage(${message.id})">Delete</button>
            </div>
            <div class="message-body">
                <p>${message.message}</p>
            </div>
        </div>
    `).join('');
}

function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function deleteMessage(id) {
    if (confirm('Are you sure you want to delete this message?')) {
        let messages = JSON.parse(localStorage.getItem('hopefoundation_messages') || '[]');
        messages = messages.filter(m => m.id !== id);
        localStorage.setItem('hopefoundation_messages', JSON.stringify(messages));
        loadMessages();
    }
}
