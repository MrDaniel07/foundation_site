// ===== PROGRAMS MANAGEMENT =====
let currentEditId = null;

document.addEventListener('DOMContentLoaded', function() {
    loadPrograms();
    
    // Add program button
    document.getElementById('addProgramBtn').addEventListener('click', () => {
        openModal();
    });
    
    // Close modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    
    // Form submission
    document.getElementById('programForm').addEventListener('submit', saveProgram);
});

function loadPrograms() {
    const programs = JSON.parse(localStorage.getItem('hopefoundation_programs') || '[]');
    const container = document.getElementById('programsList');
    
    if (programs.length === 0) {
        container.innerHTML = '<p class="no-data">No programs yet. Click "Add New Program" to create one.</p>';
        return;
    }
    
    const sortedPrograms = programs.sort((a, b) => a.order - b.order);
    
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
                ${sortedPrograms.map(program => `
                    <tr>
                        <td>${program.order}</td>
                        <td>${program.title}</td>
                        <td>
                            <span class="badge ${program.visible ? 'badge-success' : 'badge-secondary'}">
                                ${program.visible ? 'Visible' : 'Hidden'}
                            </span>
                        </td>
                        <td>
                            <div class="table-actions">
                                <button class="btn btn-small btn-edit" onclick="editProgram(${program.id})">Edit</button>
                                <button class="btn btn-small btn-toggle" onclick="toggleVisibility(${program.id})">
                                    ${program.visible ? 'Hide' : 'Show'}
                                </button>
                                <button class="btn btn-small btn-delete" onclick="deleteProgram(${program.id})">Delete</button>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function openModal(program = null) {
    const modal = document.getElementById('programModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('programForm');
    
    if (program) {
        modalTitle.textContent = 'Edit Program';
        document.getElementById('programId').value = program.id;
        document.getElementById('programTitle').value = program.title;
        document.getElementById('programDescription').value = program.description;
        document.getElementById('programImage').value = program.image;
        document.getElementById('programOrder').value = program.order;
        currentEditId = program.id;
    } else {
        modalTitle.textContent = 'Add New Program';
        form.reset();
        const programs = JSON.parse(localStorage.getItem('hopefoundation_programs') || '[]');
        document.getElementById('programOrder').value = programs.length + 1;
        currentEditId = null;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('programModal').classList.remove('active');
    document.getElementById('programForm').reset();
    currentEditId = null;
}

function saveProgram(e) {
    e.preventDefault();
    
    const programs = JSON.parse(localStorage.getItem('hopefoundation_programs') || '[]');
    
    const programData = {
        id: currentEditId || Date.now(),
        title: document.getElementById('programTitle').value,
        description: document.getElementById('programDescription').value,
        image: document.getElementById('programImage').value,
        order: parseInt(document.getElementById('programOrder').value),
        visible: true
    };
    
    if (currentEditId) {
        const index = programs.findIndex(p => p.id === currentEditId);
        programs[index] = programData;
    } else {
        programs.push(programData);
    }
    
    localStorage.setItem('hopefoundation_programs', JSON.stringify(programs));
    closeModal();
    loadPrograms();
}

function editProgram(id) {
    const programs = JSON.parse(localStorage.getItem('hopefoundation_programs') || '[]');
    const program = programs.find(p => p.id === id);
    if (program) {
        openModal(program);
    }
}

function toggleVisibility(id) {
    const programs = JSON.parse(localStorage.getItem('hopefoundation_programs') || '[]');
    const program = programs.find(p => p.id === id);
    if (program) {
        program.visible = !program.visible;
        localStorage.setItem('hopefoundation_programs', JSON.stringify(programs));
        loadPrograms();
    }
}

function deleteProgram(id) {
    if (confirm('Are you sure you want to delete this program?')) {
        let programs = JSON.parse(localStorage.getItem('hopefoundation_programs') || '[]');
        programs = programs.filter(p => p.id !== id);
        localStorage.setItem('hopefoundation_programs', JSON.stringify(programs));
        loadPrograms();
    }
}
