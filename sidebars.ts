import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import fs from 'fs';
import path from 'path';

// Define order and grouping here.
// Any .md file in the docs repo that is not listed will be appended at the end automatically.
// Any entry that has no corresponding .md file will be removed automatically.
const defined: any[] = [
  'introduction',
  'quick-start',
  'directory-structure',
  {
    type: 'category',
    label: 'Core Concepts',
    items: ['service-providers', 'auto-discovery', 'container'],
  },
  {
    type: 'category',
    label: 'Guides',
    items: [
      'routing',
      'models',
      'views',
      'modules',
      'api-controllers',
      'responses',
      'events',
      'configuration',
      'acf',
      'cli-commands',
      'caching',
      'debugging',
    ],
  },
  {
    type: 'category',
    label: 'Reference',
    items: ['facades', 'upgrade', 'contributing'],
  },
];

// Collect all .md files actually present in the docs repo.
const docsDir = path.resolve(__dirname, 'docs');
const existing = new Set(
    fs.readdirSync(docsDir)
        .filter(f => f.endsWith('.md') && f !== 'README.md')
        .map(f => f.replace(/\.md$/, ''))
);

// Remove entries from defined that have no corresponding .md file.
const filtered = defined.reduce<any[]>((acc, entry) => {
  if (typeof entry === 'string') {
    if (existing.has(entry)) acc.push(entry);
  } else if (entry.type === 'category') {
    const items = entry.items.filter((i: any) => typeof i === 'string' && existing.has(i));
    if (items.length > 0) acc.push({...entry, items});
  }
  return acc;
}, []);

// Append any unlisted files so nothing gets lost
// if someone adds a page without updating this file.
const listed = new Set(filtered.flatMap((entry: any) => {
  if (typeof entry === 'string') return [entry];
  if (entry.type === 'category') return entry.items.filter((i: any) => typeof i === 'string');
  return [];
}));
const unlisted = [...existing].filter(f => !listed.has(f));

const sidebars: SidebarsConfig = {
  docsSidebar: [...filtered, ...unlisted],
};

export default sidebars;
