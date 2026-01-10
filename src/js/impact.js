// ===== IMPACT STORIES DATA =====
const impactStoriesData = [
    {
        id: 1,
        title: 'Transforming Education in Rural Kenya',
        description: 'In partnership with local teachers, we established a library and learning center serving 800 students. Literacy rates have increased by 40% in just two years, and students now have access to books, computers, and mentorship programs.',
        image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NzEyMjY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 1
    },
    {
        id: 2,
        title: 'Clean Water Changes Everything',
        description: 'After installing 15 wells in remote villages in Uganda, families no longer spend hours each day collecting unsafe water. Children attend school regularly, and waterborne illness rates have dropped by 70%.',
        image: 'https://images.unsplash.com/photo-1757860305681-3c6a52d7a091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGNsZWFuJTIwdmlsbGFnZXxlbnwxfHx8fDE3NjcyMDgwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 2
    },
    {
        id: 3,
        title: 'Healthcare Reaches Remote Communities',
        description: 'Our mobile health clinic now serves 12 villages in Peru, providing prenatal care, vaccinations, and health education. Infant mortality has decreased, and mothers report feeling more supported and informed.',
        image: 'https://images.unsplash.com/photo-1766325693423-69e9fe20605b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwc3VwcG9ydHxlbnwxfHx8fDE3NjcxNzYzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 3
    },
    {
        id: 4,
        title: 'Women Building Businesses',
        description: 'Through our microfinance and training program, 200 women in Bangladesh have started small businesses. These entrepreneurs are now supporting their families, employing others, and becoming community leaders.',
        image: 'https://images.unsplash.com/photo-1681011130080-46e470a7c96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjcyMDgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 4
    },
    {
        id: 5,
        title: 'Youth Leaders Rising',
        description: 'Our youth leadership program has trained over 500 young people who are now leading community projects, mentoring peers, and advocating for change in their villages and cities.',
        image: 'https://images.unsplash.com/photo-1761168434263-1a01b07b64d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwY2hpbGRyZW4lMjBob3BlfGVufDF8fHx8MTc2NzIwODA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 5
    },
    {
        id: 6,
        title: 'Rebuilding After Disaster',
        description: 'When floods devastated a region in India, we provided immediate relief and stayed to help rebuild. Today, the community has stronger infrastructure, better emergency preparedness, and renewed hope.',
        image: 'https://images.unsplash.com/photo-1761250027507-c0be614c0254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBoZWxwaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzIwODA5NHww&ixlib=rb-4.1.0&q=80&w=1080',
        visible: true,
        order: 6
    }
];

// Initialize impact stories from localStorage or use default
function initializeImpactStories() {
    const stored = localStorage.getItem('hopefoundation_impact');
    if (!stored) {
        localStorage.setItem('hopefoundation_impact', JSON.stringify(impactStoriesData));
        return impactStoriesData;
    }
    return JSON.parse(stored);
}

// Render impact stories on page
function renderImpactStories() {
    const stories = initializeImpactStories();
    const impactGrid = document.getElementById('impactGrid');
    
    if (!impactGrid) return;
    
    // Filter visible stories and sort by order
    const visibleStories = stories
        .filter(s => s.visible)
        .sort((a, b) => a.order - b.order);
    
    impactGrid.innerHTML = visibleStories.map(story => `
        <div class="impact-story">
            <img src="${story.image}" alt="${story.title}">
            <div class="impact-story-content">
                <h3>${story.title}</h3>
                <p>${story.description}</p>
            </div>
        </div>
    `).join('');
}

// Load impact stories when DOM is ready
document.addEventListener('DOMContentLoaded', renderImpactStories);
