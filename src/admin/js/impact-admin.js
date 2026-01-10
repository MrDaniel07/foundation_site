// ===== IMPACT STORIES MANAGEMENT =====
let currentEditId = null;

document.addEventListener('DOMContentLoaded', function() {
    loadImpactStories();
    
    document.getElementById('addImpactBtn').addEventListener('click', () => {
        openModal();
    });
    
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    document.getElementById('impactForm').addEventListener('submit', saveImpactStory);
});

function loadImpactStories() {
    const stories = JSON.parse(localStorage.getItem('hopefoundation_impact') || '[]');
    const container = document.getElementById('impactList');
    
    if (stories.length === 0) {
        container.innerHTML = '<p class="no-data">No impact stories yet. Click "Add New Story" to create one.</p>';
        return;
    }
    
    const sortedStories = stories.sort((a, b) => a.order - b.order);
    
    container.innerHTML = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${sortedStories.map(story => `
                    <tr>
                        <td>${story.order}</td>
                        <td>${story.title}</td>
                        <td>
                            <span class="badge ${story.visible ? 'badge-success' : 'badge-secondary'}">
                                ${story.visible ? 'Visible' : 'Hidden'}
                            </span>
                        </td>
                        <td>
                            <div class="table-actions">
                                <button class="btn btn-small btn-edit" onclick="editImpactStory(${story.id})">Edit</button>
                                <button class="btn btn-small btn-toggle" onclick="toggleVisibility(${story.id})">
                                    ${story.visible ? 'Hide' : 'Show'}
                                </button>
                                <button class="btn btn-small btn-delete" onclick="deleteImpactStory(${story.id})">Delete</button>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function openModal(story = null) {
    const modal = document.getElementById('impactModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('impactForm');
    
    if (story) {
        modalTitle.textContent = 'Edit Impact Story';
        document.getElementById('impactId').value = story.id;
        document.getElementById('impactTitle').value = story.title;
        document.getElementById('impactDescription').value = story.description;
        document.getElementById('impactImage').value = story.image;
        document.getElementById('impactOrder').value = story.order;
        currentEditId = story.id;
    } else {
        modalTitle.textContent = 'Add New Impact Story';
        form.reset();
        const stories = JSON.parse(localStorage.getItem('hopefoundation_impact') || '[]');
        document.getElementById('impactOrder').value = stories.length + 1;
        currentEditId = null;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('impactModal').classList.remove('active');
    document.getElementById('impactForm').reset();
    currentEditId = null;
}

function saveImpactStory(e) {
    e.preventDefault();
    
    const stories = JSON.parse(localStorage.getItem('hopefoundation_impact') || '[]');
    
    const storyData = {
        id: currentEditId || Date.now(),
        title: document.getElementById('impactTitle').value,
        description: document.getElementById('impactDescription').value,
        image: document.getElementById('impactImage').value,
        order: parseInt(document.getElementById('impactOrder').value),
        visible: true
    };
    
    if (currentEditId) {
        const index = stories.findIndex(s => s.id === currentEditId);
        stories[index] = storyData;
    } else {
        stories.push(storyData);
    }
    
    localStorage.setItem('hopefoundation_impact', JSON.stringify(stories));
    closeModal();
    loadImpactStories();
}

function editImpactStory(id) {
    const stories = JSON.parse(localStorage.getItem('hopefoundation_impact') || '[]');
    const story = stories.find(s => s.id === id);
    if (story) {
        openModal(story);
    }
}

function toggleVisibility(id) {
    const stories = JSON.parse(localStorage.getItem('hopefoundation_impact') || '[]');
    const story = stories.find(s => s.id === id);
    if (story) {
        story.visible = !story.visible;
        localStorage.setItem('hopefoundation_impact', JSON.stringify(stories));
        loadImpactStories();
    }
}

function deleteImpactStory(id) {
    if (confirm('Are you sure you want to delete this impact story?')) {
        let stories = JSON.parse(localStorage.getItem('hopefoundation_impact') || '[]');
        stories = stories.filter(s => s.id !== id);
        localStorage.setItem('hopefoundation_impact', JSON.stringify(stories));
        loadImpactStories();
    }
}
