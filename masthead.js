export function mount(selector, options = {}) {
  let container = selector ? document.querySelector(selector) : null;

  if (!container) {
    console.warn('AusGov Masthead: No valid container provided. Creating default masthead at top of <body>.');
    container = document.createElement('div');
    container.id = 'ausgov-masthead-container';
    document.body.insertBefore(container, document.body.firstChild);
  }

  const shadow = container.attachShadow({ mode: 'open' });
  const uid = Math.random().toString(36).substring(2, 9);

  shadow.innerHTML = `
    <style>
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 13px;
        line-height: 1.3;
        z-index: 9999;
      }
      
      .masthead {
        background: #fff;
        border-bottom: 1px solid #e5e5e5;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        line-height: 0.5rem;
      }
      
      .toggle {
        color: #0066cc;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: 500;
      }
      
      .toggle:hover {
        text-decoration: none;
        color:rgb(34, 42, 152);
        scale: 1.05;
      }
      
      
      .arrow {
        transition: transform 0.2s ease;
        font-size: 10px;
      }
      
      .arrow.open {
        transform: rotate(180deg);
      }
      
      .panel {
        background: #f8f9fa;
        border-bottom: 1px solid #e5e5e5;
        padding: 16px;
        display: none;
      }
      
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        max-width: 800px;
        margin: 0 auto;
      }
      
      .card h4 {
        margin: 0 0 8px 0;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .card p {
        margin: 0;
        color: #666;
        line-height: 1.4;
      }
      
      @media (max-width: 640px) {
        .masthead {
          padding: 6px 12px;
          font-size: 12px;
        }
        
        .grid {
          grid-template-columns: 1fr;
          gap: 16px;
        }
      }
    </style>

    <div class="masthead">
      <span>An Australian Government Agency Website.</span>
      <a class="toggle" id="toggle-${uid}">
        How to identify
        <span class="arrow">▼</span>
      </a>
    </div>

    <div class="panel" id="panel-${uid}">
      <div class="grid">
        <div class="card">
          <h4>🏛️ Official website links end with .gov.au</h4>
          <p>Government agencies communicate via .gov.au websites (e.g. australia.gov.au).</p>
        </div>
        <div class="card">
          <h4>🔒 Secure websites use HTTPS</h4>
          <p>Look for a lock (🔒) or https:// as an added precaution. Share sensitive information only on official, secure websites.</p>
        </div>
      </div>
    </div>
  `;

  const toggle = shadow.getElementById(`toggle-${uid}`);
  const panel = shadow.getElementById(`panel-${uid}`);
  const arrow = toggle.querySelector('.arrow');

  const togglePanel = () => {
    const isOpen = panel.style.display === 'block';
    panel.style.display = isOpen ? 'none' : 'block';
    arrow.classList.toggle('open', !isOpen);
  };

  toggle.addEventListener('click', togglePanel);

  return {
    show: () => {
      panel.style.display = 'block';
      arrow.classList.add('open');
    },
    hide: () => {
      panel.style.display = 'none';
      arrow.classList.remove('open');
    },
    toggle: togglePanel
  };
}

export default { mount };