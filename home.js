// home.js
const newsItems = [ /* your news array remains the same */ ];

document.addEventListener('DOMContentLoaded', () => {
  // ... (keep all your existing renderNews, openArticle, etc.)

  // Add smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Subscribe & Sign in buttons (demo alerts)
  document.getElementById('subscribeBtn').addEventListener('click', () => {
    alert("Thank you! Redirecting to subscription page...");
  });

  document.getElementById('subscribeHeroBtn').addEventListener('click', () => {
    alert("Thank you for subscribing to NextBit!");
  });

  // Background slider (your existing code improved)
  const images = ['2.jpg', '1.jpg', '4.jpg'];
  let currentIndex = 0;
  const bg1 = document.querySelector('.bg1');
  const bg2 = document.querySelector('.bg2');

  if (bg1 && bg2) {
    // ... (your background slider logic)
  }
});

// Sample Insights Data
const insightsData = [
  {
    id: 1,
    category: "AI & Machine Learning",
    title: "Why Agentic AI Will Redefine Enterprise Software in 2026–2028",
    summary: "Autonomous AI agents are moving from research labs into real business workflows.",
    body: `
      <p>The next evolution of AI is not just chatbots or copilots — it's autonomous agents that can plan, reason, and execute complex multi-step tasks with minimal human supervision.</p>
      <p>Leading companies like OpenAI, Anthropic, and Google DeepMind are racing to build reliable agent frameworks. Early adopters in finance and logistics are already reporting 30–45% productivity gains in specific workflows.</p>
      <h4>Key Challenges Remaining</h4>
      <ul>
        <li>Hallucination in long-horizon planning</li>
        <li>Security and alignment risks</li>
        <li>Integration with legacy enterprise systems</li>
      </ul>
    `,
    image: "https://picsum.photos/id/1015/800/600",
    readTime: "12 min read",
    date: "2 days ago"
  },
  {
    id: 2,
    category: "Cybersecurity",
    title: "The Rise of AI-Powered Cyber Attacks: Are We Ready?",
    summary: "Threat actors are now using generative AI to create highly convincing phishing and malware.",
    body: `<p>2025 saw a 340% increase in AI-assisted social engineering attacks. Deepfake voice and video are becoming mainstream tools for sophisticated BEC (Business Email Compromise) scams.</p>`,
    image: "https://picsum.photos/id/201/800/600",
    readTime: "8 min read",
    date: "5 days ago"
  },
  {
    id: 3,
    category: "Quantum Computing",
    title: "Quantum Supremacy 2.0: What Comes After the Hype?",
    summary: "Practical quantum advantage is closer than most realize.",
    body: `<p>While universal fault-tolerant quantum computers are still years away, specialized quantum simulators and annealers are already solving real optimization problems in logistics and drug discovery.</p>`,
    image: "https://picsum.photos/id/237/800/600",
    readTime: "15 min read",
    date: "1 week ago"
  },
  {
    id: 4,
    category: "Future of Work",
    title: "Will AI Replace Software Engineers? The 2026 Reality Check",
    summary: "AI is transforming coding, but not in the way most people fear.",
    body: `<p>Instead of replacement, we're seeing massive augmentation. Senior engineers using AI tools are 3–5× more productive. The demand for AI-native architects is skyrocketing.</p>`,
    image: "https://picsum.photos/id/180/800/600",
    readTime: "10 min read",
    date: "2 weeks ago"
  }
];

// Render Insights
function renderInsights() {
  const grid = document.getElementById('insightsGrid');
  grid.innerHTML = insightsData.map(insight => `
    <div class="insight-card" data-id="${insight.id}">
      <img src="${insight.image}" alt="${insight.title}" loading="lazy">
      <div class="insight-card-body">
        <span class="category">${insight.category}</span>
        <h3>${insight.title}</h3>
        <p>${insight.summary}</p>
        <div class="insight-meta">
          <span>${insight.date}</span>
          <span>${insight.readTime}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Add click listeners
  document.querySelectorAll('.insight-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      const insight = insightsData.find(i => i.id === id);
      if (insight) openInsightModal(insight);
    });
  });
}

// Open Insight Modal
function openInsightModal(insight) {
  document.getElementById('insightTitle').textContent = insight.title;
  document.getElementById('insightCategory').textContent = insight.category;
  document.getElementById('insightMeta').innerHTML = `${insight.date} • ${insight.readTime}`;
  document.getElementById('insightImage').src = insight.image;
  document.getElementById('insightBody').innerHTML = insight.body;
  document.getElementById('insightReadTime').textContent = insight.readTime;

  const modal = document.getElementById('insightModal');
  modal.classList.add('open');
}

// Close Insight Modal
document.getElementById('insightModalClose').addEventListener('click', () => {
  document.getElementById('insightModal').classList.remove('open');
});

// Close modal when clicking outside
document.getElementById('insightModal').addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('open');
});

// Initialize Insights when page loads
document.addEventListener('DOMContentLoaded', () => {
  // ... your existing initializations (theme, newsletter, news, infinite scroll)

  renderInsights();        // ← Add this line
});