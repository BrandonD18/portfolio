// Builds the four pages into ./site from the copy in COPY.md.
// To set the agency name or the live web address, change the two lines below
// and run:  node build.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NAME = 'BDdigital';
const SITE_URL = 'https://bddigital-phi.vercel.app';            // e.g. https://www.example.com (no trailing slash). Empty until the site is live.
const EMAIL = 'Brandon.aiagency@gmail.com';
const OUT = join(dirname(fileURLToPath(import.meta.url)), 'site');

const MENU = [['/', 'Home'], ['/services/', 'Services'], ['/work/', 'Work'], ['/contact/', 'Contact']];
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function page({ path, title, description, body }) {
  const links = MENU.map(([href, text]) => `<a class="label" href="${href}"${href === path ? ' aria-current="page"' : ''}>${text}</a>`).join('\n        ');
  const canonical = SITE_URL ? `\n<link rel="canonical" href="${SITE_URL}${path}" />\n<meta property="og:url" content="${SITE_URL}${path}" />` : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${esc(NAME)}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta name="twitter:card" content="summary" />${canonical}
<meta name="theme-color" content="#070B1F" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="preload" href="/assets/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="/assets/site.css" />
<script src="/assets/site.js" defer></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="bar">
  <div class="wrap">
    <a class="brand" href="/">${NAME}</a>
    <button class="menu-btn label" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav class="nav" id="menu" aria-label="Main">
        ${links}
        <a class="btn small" href="/contact/">Start an enquiry</a>
    </nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer>
  <div class="wrap">
    <div class="top">
      <div>
        <a class="brand" href="/">${NAME}</a>
        <p>${NAME}. Meta ads and AI automation for high-ticket businesses.</p>
      </div>
      <div>
        <nav aria-label="Footer">
          ${MENU.map(([href, text]) => `<a class="label" href="${href}">${text}</a>`).join('\n          ')}
        </nav>
        <a class="mail" href="mailto:${EMAIL}">${EMAIL}</a>
      </div>
    </div>
    <p class="small">© 2026 ${NAME}. Run by Brandon Duque.</p>
  </div>
</footer>
</body>
</html>
`;
}

const closing = (heading, text) => `
<section class="closing paper">
  <div class="wrap rise">
    <h2>${heading}</h2>${text ? `\n    <p>${text}</p>` : ''}
    <div class="actions"><a class="btn" href="/contact/">Start an enquiry</a></div>
  </div>
</section>`;

const innerHero = (label, h1, lede) => `
<div class="hero">
  <canvas data-mode="still" aria-hidden="true"></canvas>
  <div class="wrap">
    <p class="label">${label}</p>
    <h1>${h1}</h1>
    <p class="lede">${lede}</p>
  </div>
</div>`;

/* ---------- Page 1: Home ---------- */
const home = page({
  path: '/',
  title: `${NAME} | Meta Ads Agency and AI Automation for High-Ticket Businesses`,
  description: 'A Meta ads agency and AI automation agency for high-ticket businesses. We run your Facebook and Instagram ads, then automate the follow-up so every lead gets an answer.',
  body: `
<div class="hero home">
  <canvas aria-hidden="true"></canvas>
  <div class="wrap">
    <p class="label">Meta ads agency · AI automation agency</p>
    <h1>Meta ads that bring in leads. Automation that follows them up.</h1>
    <p class="lede">${NAME} is a Meta ads agency and AI automation agency for high-ticket businesses. We run your Facebook and Instagram campaigns, then install the systems that reply to, qualify and book the leads they bring in.</p>
    <div class="actions">
      <a class="btn gold" href="/contact/">Start an enquiry</a>
      <a class="link" href="/work/">See what we've built</a>
    </div>
  </div>
</div>

<section class="statement">
  <div class="wrap">
    <div class="card">
      <p>When one sale is worth thousands, a lead that goes unanswered is expensive. We build both halves of high-ticket lead generation: the ads that find the buyer, and the follow-up that makes sure someone answers.</p>
    </div>
  </div>
</section>

<section class="numbers">
  <div class="wrap">
    <ul class="rise">
      <li><b>7</b><span class="label">years buying media</span></li>
      <li><b>18</b><span class="label">n8n workflows built</span></li>
      <li><b>12</b><span class="label">Python services built</span></li>
    </ul>
  </div>
</section>

<section class="tight">
  <div class="wrap">
    <div class="head rise"><h2>Two services that work as one</h2></div>
    <div class="cards rise">
      <article class="cardlet">
        <span class="n">01</span>
        <h3>Meta ads management</h3>
        <p>Done-for-you Facebook and Instagram advertising. We plan the campaigns, build them, set up conversion tracking, and run and optimise them every month.</p>
        <a class="link" href="/services/#meta-ads">More on Meta ads</a>
      </article>
      <article class="cardlet">
        <span class="n">02</span>
        <h3>AI automation</h3>
        <p>Lead follow-up that runs on its own. Systems that reply to new enquiries, qualify them and book the meeting, so your team speaks to people who are ready.</p>
        <a class="link" href="/services/#ai-automation">More on AI automation</a>
      </article>
    </div>
  </div>
</section>

<section class="paper">
  <div class="wrap">
    <div class="head rise"><h2>How working with us goes</h2></div>
    <ol class="steps rise">
      <li><h3>Tell us about your business.</h3><p>Fill in the enquiry form with what you sell, what you spend on ads now, and what you need.</p></li>
      <li><h3>We build the ads and the follow-up.</h3><p>Your Meta campaigns and your automation are set up to work together from the first day.</p></li>
      <li><h3>You get plain-English reports.</h3><p>Regular reporting on spend, leads and results, written so you can read it in a few minutes.</p></li>
    </ol>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="head rise">
      <h2>Production systems, not tutorials</h2>
      <p>We have built a live product and working automation for sales, support, lead generation and operations.</p>
    </div>
    <div class="feature rise">
      <h3>AI Inbox Copilot</h3>
      <p>Customer support automation that handles enquiries, qualifies leads and books meetings.</p>
    </div>
    <p class="after rise"><a class="link" href="/work/">See all the work</a></p>
  </div>
</section>

<section class="rule">
  <div class="wrap split rise">
    <h2>Who runs it</h2>
    <div class="body">
      <p class="big">${NAME} is run by Brandon Duque. Brandon has spent 7 years buying media for his own e-commerce stores, running paid campaigns across Meta and Google Ads and optimising conversion tracking. Since 2024 he has also built AI automation systems: 18 n8n workflows, 12 Python services and one commercial product. He still buys media every day.</p>
    </div>
  </div>
</section>
${closing("Sell something worth thousands? Let's talk.", 'Tell us about your business and what you need. Brandon reads every enquiry.')}`,
});

/* ---------- Page 2: Services ---------- */
const gets = items => `<ul class="gets">\n${items.map(([b, t]) => `        <li><b>${b}</b> ${t}</li>`).join('\n')}\n      </ul>`;
const services = page({
  path: '/services/',
  title: `Meta Ads Management and AI Automation Services | ${NAME}`,
  description: 'Done-for-you Meta ads management, AI lead follow-up automation and plain-English reporting for high-ticket businesses. See exactly what you get.',
  body: `${innerHero('Services', 'Meta ads management and AI automation for high-ticket businesses', 'Take one service or both. Together they cover high-ticket lead generation from the first ad a buyer sees to the meeting in your calendar.')}

<section id="meta-ads">
  <div class="wrap">
    <div class="head rise">
      <h2>Meta ads management</h2>
      <p>Your Facebook and Instagram advertising, done for you by someone with 7 years of media buying behind them.</p>
    </div>
    <div class="rise">
      <p class="label muted">What you get</p>
      ${gets([
        ['Campaign planning.', 'Who to reach, what to offer them and how the budget is split.'],
        ['Campaign build.', 'Campaigns, audiences and ads set up in your own ad account.'],
        ['Conversion tracking.', 'Tracking set up properly, so you know which ads produce leads.'],
        ['Monthly management.', 'Campaigns run and optimised every month.'],
        ['Funnel work.', 'Landing pages and funnel optimisation where the ads need them.'],
      ])}
    </div>
  </div>
</section>

<section id="ai-automation" class="paper">
  <div class="wrap">
    <div class="head rise">
      <h2>AI automation</h2>
      <p>Ads create leads. Automation makes sure each one gets an answer. We build custom systems with n8n, Make, Zapier and Python that do the follow-up for you.</p>
    </div>
    <div class="rise">
      <p class="label muted">What you get</p>
      ${gets([
        ['Lead follow-up.', 'Multi-touch email follow-up with AI-written messages that stops the moment a lead replies.'],
        ['Lead qualification.', 'Leads are scored and qualified before they reach your team.'],
        ['Booking.', 'Qualified leads are booked straight into a meeting.'],
        ['Lead reactivation.', 'Old lead lists are scored and worked with win-back campaigns.'],
        ['CRM and pipeline automation.', 'Your systems are connected, so nothing is copied by hand.'],
      ])}
    </div>
  </div>
</section>

<section>
  <div class="wrap split rise">
    <h2>Reporting you can read</h2>
    <div class="body"><p class="big">You get regular reports in plain English: what was spent, how many leads came in, and what happened to them.</p></div>
  </div>
</section>

<section class="rule">
  <div class="wrap split rise">
    <h2>Who this is for</h2>
    <div class="body"><p class="big">Businesses whose average sale is in the thousands. If one new client pays for a month of advertising, the numbers tend to work. We don't specialise in one industry.</p></div>
  </div>
</section>

<section class="rule">
  <div class="wrap split rise">
    <h2>Questions</h2>
    <div class="faq">
      <details><summary>How much does it cost?</summary><p>Every business gets its own quote. Fill in the enquiry form and we'll reply with one.</p></details>
      <details><summary>Do I need both services?</summary><p>No. You can take Meta ads, AI automation, or both. The enquiry form asks which you need.</p></details>
      <details><summary>Do you only work with one industry?</summary><p>No. We work with high-ticket businesses in any industry.</p></details>
    </div>
  </div>
</section>
${closing('Ready to see what this looks like for your business?')}`,
});

/* ---------- Page 3: Work ---------- */
const systems = [
  ['Sales', 'Sales Copilot', 'Real-time AI assist for sales teams. Talk tracks, objection handlers and lead insights. Webhook-driven, connects to any CRM.'],
  ['Lead generation', 'Lead Follow-Up Engine', 'Multi-touch email nurture campaigns with AI-generated content, optimal timing and stop-on-reply logic.'],
  ['Support', 'Support Bot', 'Ticket intake, AI draft replies and human handoff at a confidence threshold.'],
  ['Content', 'Content Repurposer', 'Paste once, get platform-ready versions for LinkedIn, Twitter, newsletter, blog and Instagram.'],
  ['Operations', 'Invoice Processor', 'AI document extraction. Line items, totals, vendor info and due dates, routed to accounting systems.'],
  ['Voice', 'AI Voice Agent', 'Outbound calling with natural speech. Qualifies leads and books appointments.'],
  ['Data', 'Internal Reporting', 'Connect a data source, describe the report in plain English, get formatted insights with charts and recommendations.'],
  ['Lead generation', 'DB Reactivation', 'Import cold lead lists, score them by re-engagement potential and run AI win-back campaigns.'],
];
const work = page({
  path: '/work/',
  title: `AI Automation Systems We've Built | ${NAME}`,
  description: 'AI automation systems built and working: lead follow-up, sales assist, support, voice agents, reporting and more, plus our live product, AI Inbox Copilot.',
  body: `${innerHero('Work', "AI automation systems we've built", 'Production systems, not tutorials. This is what an AI automation agency should be able to show you: working software, built with n8n, Python and local LLMs.')}

<section>
  <div class="wrap">
    <div class="feature rise">
      <div>
        <p class="label">Live product</p>
        <h2>AI Inbox Copilot</h2>
      </div>
      <div>
        <p>Customer support automation that handles enquiries, qualifies leads and books meetings. It runs on local LLMs with no API fees, and comes as an embeddable widget for any website.</p>
        <p class="price">$2,350 one-time</p>
      </div>
    </div>
  </div>
</section>

<section class="tight">
  <div class="wrap">
    <div class="head rise"><h2>Systems</h2></div>
    <ul class="work">
${systems.map(([area, name, text]) => `      <li class="rise"><span class="label">${area}</span><h3>${name}</h3><p>${text}</p></li>`).join('\n')}
    </ul>
  </div>
</section>
${closing('Want one of these working in your business?')}`,
});

/* ---------- Page 4: Contact ---------- */
const budgets = ['Not running ads yet', 'Under $3,000', '$3,000 to $10,000', '$10,000 to $30,000', 'Over $30,000'];
const contact = page({
  path: '/contact/',
  title: `Start an Enquiry | ${NAME}`,
  description: 'Tell us about your business and what you need: Meta ads, AI automation, or both. Brandon reads every enquiry.',
  body: `${innerHero('Contact', 'Tell us about your business', 'A few details are enough to start. Brandon reads every enquiry and replies by email.')}

<section>
  <div class="wrap">
    <form data-enquiry data-to="${EMAIL}" action="mailto:${EMAIL}" method="post" enctype="text/plain" novalidate>
      <div class="field">
        <label for="f-name">Your name <span class="req">(required)</span></label>
        <input id="f-name" name="name" type="text" autocomplete="name" required />
        <p class="err">Please enter your name.</p>
      </div>
      <div class="field">
        <label for="f-email">Email <span class="req">(required)</span></label>
        <input id="f-email" name="email" type="email" autocomplete="email" required />
        <p class="err">Please enter a valid email address.</p>
      </div>
      <div class="field">
        <label for="f-business">Business name <span class="req">(required)</span></label>
        <input id="f-business" name="business" type="text" autocomplete="organization" required />
        <p class="err">Please enter your business name.</p>
      </div>
      <div class="field">
        <label for="f-website">Website</label>
        <input id="f-website" name="website" type="text" inputmode="url" autocomplete="url" />
      </div>
      <div class="field">
        <label for="f-budget">Monthly ad budget</label>
        <select id="f-budget" name="budget">
          ${budgets.map(b => `<option>${b}</option>`).join('\n          ')}
        </select>
      </div>
      <fieldset class="field">
        <legend>What do you need?</legend>
        <div class="choices">
          <label><input type="radio" name="need" value="Meta ads" /><span>Meta ads</span></label>
          <label><input type="radio" name="need" value="AI automation" /><span>AI automation</span></label>
          <label><input type="radio" name="need" value="Both" checked /><span>Both</span></label>
        </div>
      </fieldset>
      <div class="field">
        <label for="f-message">Tell us more</label>
        <p class="help" id="f-message-help">What do you sell, and what is one sale worth to you?</p>
        <textarea id="f-message" name="message" aria-describedby="f-message-help"></textarea>
      </div>
      <div><button class="btn" type="submit">Send enquiry</button></div>
      <p class="sent" tabindex="-1" role="status">Thanks. Your email app has opened with your enquiry filled in. Press send there and Brandon will reply by email.</p>
    </form>
    <p class="under">Prefer email? Write to <a href="mailto:${EMAIL}">${EMAIL}</a></p>
  </div>
</section>`,
});

const files = {
  'index.html': home,
  'services/index.html': services,
  'work/index.html': work,
  'contact/index.html': contact,
  'favicon.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#070B1F"/></svg>\n',
  'robots.txt': `User-agent: *\nAllow: /\n${SITE_URL ? `Sitemap: ${SITE_URL}/sitemap.xml\n` : ''}`,
};
if (SITE_URL) {
  files['sitemap.xml'] = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${MENU.map(([p]) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')}\n</urlset>\n`;
}
for (const [name, text] of Object.entries(files)) {
  const f = join(OUT, name);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, text);
  console.log('wrote', name);
}
