// Content that still needs real values from the client lives here.
export const site = {
  name: 'ICM',
  title: 'ICM: Inference capital markets on Orbio',
  description:
    'Fixed-rate, borrowable and hedgeable CREDIT. Lock your AI inference costs and trade the inference curve on Orbio.',
  // TODO: real links
  xHandle: '@ICM_HANDLE',
  xUrl: '#top',
  docsUrl: '#markets',
  paperUrl: '#markets',
  appUrl: '#terminal',
  launchDate: '[LAUNCH DATE]',
  orbioUrl: 'https://www.orbio.so/protocol',
};

// Sample order book, 17 Oct 2026. Replace with the live API when available.
const rawBook = [
  { label: '50% off', usd: 5658 },
  { label: '45% off', usd: 63052 },
  { label: '40% off', usd: 29849 },
  { label: '35% off', usd: 6584 },
  { label: '30% off', usd: 16379 },
  { label: '25% off', usd: 15980 },
  { label: '20% off', usd: 35806 },
  { label: '15% off', usd: 10031 },
  { label: '10% off', usd: 5265 },
  { label: '5% off', usd: 2318 },
  { label: '0% off', usd: 695 },
];
const maxUsd = Math.max(...rawBook.map((r) => r.usd));
export const book = rawBook.map((r) => ({
  label: r.label,
  usd: r.usd,
  amount: '$' + r.usd.toLocaleString('en-US'),
  width: Math.round((r.usd / maxUsd) * 100) + '%',
}));

export const markets = [
  { n: '01', when: 'Nov 2026', title: 'Terminal', text: 'Discount index, inference yield, book depth and flows. Free.', current: true },
  { n: '02', when: 'Jan 2027', title: 'Yield split', text: 'Split staked ORBIO into PT and YT. Sell your CREDIT forward, or buy a fixed stream.' },
  { n: '03', when: 'Q1 2027', title: 'CREDIT market', text: 'Lend CREDIT for yield. Borrow it against USDG, PT or ORBIO.' },
  { n: '04', when: 'Q2 2027', title: 'Hedge', text: 'CDI forwards, and Budget Lock: a fixed weekly CREDIT drip for your agent.' },
  { n: '05', when: 'H2 2027', title: 'Agent vaults', text: 'Back a launchpad agent with CREDIT and share its creator fees.' },
];

export const roadmap = [
  { when: 'OCT – NOV 2026', title: 'Terminal + $ICM launch', text: 'Index, yield, public API. $ICM goes live the day the Terminal does.', active: true },
  { when: 'NOV 2026 – JAN 2027', title: 'Yield split', text: 'icORBIO vault, PT and YT for 30 Jun 2027, audited.' },
  { when: 'JAN – MAR 2027', title: 'CREDIT market', text: 'Lend and borrow CREDIT, isolated collateral.' },
  { when: 'APR – JUN 2027', title: 'Hedge', text: 'CDI forwards and Budget Lock over MCP.' },
  { when: 'JUL – DEC 2027', title: 'Agent vaults', text: 'Fund launchpad agents for a share of their fees.' },
];

export const faqs = [
  { q: 'What is ICM?', a: 'A set of markets for Orbio CREDIT: fixed-rate strips, lending, hedges and agent funding. Everything settles in CREDIT.' },
  { q: 'Is ICM part of Orbio?', a: "ICM is its own protocol, built on Orbio's public contracts on Robinhood Chain." },
  { q: 'Where does the yield come from?', a: 'Staked ORBIO earns CREDIT funded by ORBIO trading fees. ICM tokenizes that stream, so it rises and falls with ORBIO volume. It is not fixed or guaranteed.' },
  { q: 'What does 1 CREDIT buy?', a: "$1 of model usage through Orbio's gateway, across 400+ models, once you activate it." },
  { q: 'How do I get $ICM?', a: `It launches on the Orbio Agent Launchpad, paired with ORBIO, on ${site.launchDate}.` },
  { q: 'Can I lose money?', a: 'Yes. Rates move, collateral can be liquidated, and smart contracts carry risk. Read the docs before you size up.' },
];
