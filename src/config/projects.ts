export type ProjectCard = {
  title: string;
  meta: string;
  desc: string;
  bodyMd: string;
  timeline: string; // e.g. '2024.03', '2023.11'
};

type Frontmatter = {
  title?: string;
  meta?: string;
  desc?: string;
  timeline?: string;
};

type ParsedDoc = {
  frontmatter: Frontmatter;
  content: string;
};

function parseFrontmatter(raw: string): ParsedDoc {
  if (!raw.startsWith('---')) {
    return {
      frontmatter: {},
      content: raw,
    };
  }

  const end = raw.indexOf('\n---', 3);
  if (end === -1) {
    return {
      frontmatter: {},
      content: raw,
    };
  }

  const header = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).trimStart();

  const frontmatter: Frontmatter = {};

  header.split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim().toLowerCase() as keyof Frontmatter;
    const value = line.slice(idx + 1).trim();
    if (!value) return;
    frontmatter[key] = value;
  });

  return { frontmatter, content };
}

function inferTitleFromPath(path: string): string {
  const segments = path.split('/');
  const file = segments[segments.length - 1] || path;
  return file.replace(/\.md$/, '');
}

const rawDocs = import.meta.glob('/docs/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const PROJECT_CARDS: ProjectCard[] = Object.entries(rawDocs).map(
  ([path, raw]) => {
    const { frontmatter, content } = parseFrontmatter(raw);

    return {
      title: frontmatter.title || inferTitleFromPath(path),
      meta: frontmatter.meta || '',
      desc: frontmatter.desc || '',
      bodyMd: content,
      timeline: frontmatter.timeline || '',
    };
  }
);
