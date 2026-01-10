// ===== PROGRAMS DATA =====
const programsData = [
    {
        id: 1,
        title: 'Education Access Program',
        description: 'Providing quality education resources, scholarships, and teacher training to underserved communities. We work with local schools to improve learning outcomes and ensure every child has access to the tools they need to succeed.',
        image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NzEyMjY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 1
    },
    {
        id: 2,
        title: 'Community Healthcare Initiative',
        description: 'Mobile health clinics, preventive care programs, and maternal health support for remote and underserved populations. Our healthcare teams provide essential medical services and health education to thousands of families annually.',
        image: 'https://images.unsplash.com/photo-1766325693423-69e9fe20605b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwc3VwcG9ydHxlbnwxfHx8fDE3NjcxNzYzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 2
    },
    {
        id: 3,
        title: 'Clean Water & Sanitation',
        description: 'Installing wells, water filtration systems, and sanitation facilities in communities without reliable access to clean water. Each water project is maintained by trained community members, ensuring long-term sustainability.',
        image: 'https://images.unsplash.com/photo-1757860305681-3c6a52d7a091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGNsZWFuJTIwdmlsbGFnZXxlbnwxfHx8fDE3NjcyMDgwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 3
    },
    {
        id: 4,
        title: 'Women\'s Empowerment',
        description: 'Skills training, microfinance support, and leadership development programs designed to increase economic opportunity and social participation for women in underserved communities.',
        image: 'https://images.unsplash.com/photo-1681011130080-46e470a7c96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjcyMDgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 4
    },
    {
        id: 5,
        title: 'Youth Leadership Program',
        description: 'Mentorship, skill-building workshops, and community service opportunities for young people. We invest in the next generation of community leaders who will drive sustainable change.',
        image: 'https://images.unsplash.com/photo-1733809701005-0b1c0ad53c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBjaGFyaXR5JTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjcyMDgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 5
    },
    {
        id: 6,
        title: 'Emergency Relief Response',
        description: 'Rapid response to natural disasters and humanitarian crises, providing immediate aid including food, shelter, medical care, and trauma support to affected communities.',
        image: 'https://images.unsplash.com/photo-1761250027507-c0be614c0254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBoZWxwaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzIwODA5NHww&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 6
    }
];

// Initialize programs from localStorage or use default
function initializePrograms() {
    const stored = localStorage.getItem('hopefoundation_programs');
    if (!stored) {
        localStorage.setItem('hopefoundation_programs', JSON.stringify(programsData));
        return programsData;
    }
    return JSON.parse(stored);
}

// Render programs on page
function renderPrograms() {
    const programs = initializePrograms();
    const programsGrid = document.getElementById('programsGrid');
    
    if (!programsGrid) return;
    
    // Filter visible programs and sort by order
    const visiblePrograms = programs
        .filter(p => p.visible)
        .sort((a, b) => a.order - b.order);
    
    programsGrid.innerHTML = visiblePrograms.map(program => `
        <div class="program-card">
            <img src="${program.image}" alt="${program.title}">
            <div class="program-card-content">
                <h3>${program.title}</h3>
                <p>${program.description}</p>
            </div>
        </div>
    `).join('');
}

// Load programs when DOM is ready
document.addEventListener('DOMContentLoaded', renderPrograms);
