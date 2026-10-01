/**
 * Component registry — the single source of truth.
 * Files stay organised by Atomic Design; this metadata reclassifies the same
 * components into client-facing marketing categories (Relume-style) and powers
 * both the Library (client) and Foundations (dev) navigations.
 */
export type AtomicLevel = 'atom' | 'molecule' | 'organism' | 'section' | 'module';

export interface RegistryEntry {
  id: string;
  name: string;
  description: string;
  /** Client-facing marketing category (Library). */
  category: string;
  /** Internal atomic level (Foundations / dev). */
  atomicLevel: AtomicLevel;
  tags: string[];
  /** Atoms/molecules this component is built from (dev anchoring). */
  deps?: string[];
  /** When to use / notes shown on the component page. */
  usage?: string;
  status?: 'stable' | 'beta';
  /** Link to the source node in Figma (paste the node URL per component). */
  figma?: string;
  /** OPEK Figma node id (e.g. "12432:7490") — filled as each component is matched to its node. */
  figmaNode?: string;
}

/** OPEK Figma file. */
export const OPEK_FILE = 'c1OVSyR5fUyP17SrkeAkYd';
/** Build an OPEK Figma deep-link from a node id ("123:456" or "123-456"). */
export const figmaUrl = (node?: string) =>
  node ? `https://www.figma.com/design/${OPEK_FILE}/opek-v01?node-id=${node.replace(':', '-')}` : undefined;

export const categories: { id: string; label: string; description: string }[] = [
  { id: 'navigation', label: 'Navigation', description: 'Navbars, breadcrumb, anchor nav and filters.' },
  { id: 'headers', label: 'Headers & Heroes', description: 'Page headers and hero banners.' },
  { id: 'events', label: 'Events', description: 'Agenda and event listings.' },
  { id: 'cards', label: 'News, team & cards', description: 'News, team and related card grids.' },
  { id: 'portals', label: 'Portals & logos', description: 'Entry-point doors and the residents/logos grid.' },
  { id: 'content', label: 'Content & media', description: 'Rich text, gallery, quotes, stats and intro bands.' },
  { id: 'cta', label: 'Call to action', description: 'Conversion bands, small and large.' },
  { id: 'forms', label: 'Forms & contact', description: 'Forms, newsletter and contact blocks.' },
  { id: 'careers', label: 'Careers', description: 'Vacancies and open calls.' },
  { id: 'footers', label: 'Footers', description: 'Page footers.' },
];

export const registry: RegistryEntry[] = [
  // Navigation
  { id: 'navbar', name: 'Navbar', description: 'Main navigation bar (menu, Services dropdown, language switcher, meta bar) with a mobile variant.', category: 'navigation', atomicLevel: 'organism', tags: ['nav', 'menu', 'dropdown', 'mobile'], deps: ['Logo', 'Button', 'Caret'], usage: 'At the top of every page. The Services dropdown and the EN/FR/NL switcher open on hover; the mobile variant opens a full-screen panel.', figmaNode: '12432:7490' },
  { id: 'breadcrumb', name: 'Breadcrumb', description: 'Breadcrumb trail on a green bar (Home / … / current).', category: 'navigation', atomicLevel: 'organism', tags: ['breadcrumb', 'nav'], deps: ['Caps'], usage: 'Below the navigation, to place the page within the site hierarchy.', figmaNode: '18263:11516' },
  { id: 'anchor-navbar', name: 'AnchorNavbar', description: 'Sticky in-page anchor bar (brown) with white caps links and an active underline.', category: 'navigation', atomicLevel: 'organism', tags: ['anchor', 'nav', 'jump', 'toc'], deps: ['Caps'], usage: 'Below the breadcrumb on long pages, to jump between sections.', figmaNode: '18591:18202' },
  { id: 'filters', name: 'Filters', description: 'Faceted filter panel (teal groups) with radios and checkboxes.', category: 'navigation', atomicLevel: 'organism', tags: ['filters', 'facets', 'radio', 'checkbox'], deps: ['Radio', 'Checkbox'], usage: 'Sidebar of listing pages (agenda, residents) to filter results.', figmaNode: '18591:17771' },

  // Headers & Heroes
  { id: 'header', name: 'Header Content', description: 'Page header (green): title + intro + CTA, with or without image; plus Blog and Job headers.', category: 'headers', atomicLevel: 'organism', tags: ['header', 'title', 'blog', 'contact'], deps: ['Button', 'Tag', 'Image', 'Social', 'Logo'], usage: 'Inner-page header depending on the content type.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15669-11468' },
  { id: 'hero', name: 'Hero (brand)', description: 'Home hero: green band, 2px top/bottom borders, brand logo + right-aligned tagline (H3).', category: 'headers', atomicLevel: 'organism', tags: ['hero', 'home', 'brand', 'logo'], deps: ['Logo'], usage: 'Top of the homepage.', figmaNode: '18672:20018' },

  // Events
  { id: 'events', name: 'Events', description: 'Featured event card + list of horizontal event cards (tags, meta with icons), outline CTA.', category: 'events', atomicLevel: 'section', tags: ['events', 'agenda', 'cards'], deps: ['Tag', 'Icon', 'Image', 'Button'], figmaNode: '18261:12273' },
  { id: 'events-hall', name: 'Events — hall', description: 'Teal band, 2×2 grid of full event cards (square image, category tag, meta, title, price).', category: 'events', atomicLevel: 'section', tags: ['events', 'hall', 'cards'], deps: ['Tag', 'Icon', 'Image'], figmaNode: '18281:16219' },

  // News, team & cards
  { id: 'news-section', name: 'News section', description: '“Laatste nieuws”: 3 vertical news cards (image, date, title, excerpt) with outline CTA. Responsive 3→2→1.', category: 'cards', atomicLevel: 'section', tags: ['news', 'blog', 'cards'], deps: ['Image', 'Button'], figmaNode: '18261:12271' },
  { id: 'news-related', name: 'Related news', description: '“Andere nieuws”: dark teal variant of the news section with a white outline CTA.', category: 'cards', atomicLevel: 'section', tags: ['news', 'related', 'cards'], deps: ['Image', 'Button'], figmaNode: '18369:16399' },
  { id: 'rooms-related', name: 'Related rooms', description: '“Andere ruimtes”: teal band, 3 room cards (image, tag, name, info, small CTA) + global CTA.', category: 'cards', atomicLevel: 'section', tags: ['rooms', 'spaces', 'cards'], deps: ['Tag', 'Image', 'Button'], figmaNode: '18369:16398' },
  { id: 'team-section', name: 'Team section', description: '“Team”: teal band, 3 vertical cards (portrait, name, role). Responsive 3→2→1.', category: 'cards', atomicLevel: 'section', tags: ['team', 'cards'], deps: ['Image'], figmaNode: '18286:16096' },

  // Portals & logos
  { id: 'portals', name: 'Portals (usps)', description: 'Full-width band of 4 coloured doors (title + icon + caps link), responsive auto-fit grid with 2px borders.', category: 'portals', atomicLevel: 'section', tags: ['portals', 'usp', 'doors', 'cta'], deps: ['Button', 'Icon'], usage: 'Home / landing entry points to the main site areas.', figmaNode: '18261:12269' },
  { id: 'logos', name: 'Logos / bewoners', description: '“OPEK is een verzamelgebouw”: intro + destructured logo grid with hover rollover (teal + “Ontdek” CTA).', category: 'portals', atomicLevel: 'section', tags: ['logos', 'residents', 'grid', 'rollover'], deps: ['Button', 'Image'], figmaNode: '18541:21182' },

  // Content & media
  { id: 'text-content', name: 'Text content', description: 'Rich content block: display title, intro, alternating media objects and a “View all” action.', category: 'content', atomicLevel: 'organism', tags: ['text', 'content', 'rich', 'media'], deps: ['MediaObject', 'Button'], usage: 'Long-form editorial content on pages (About, detail pages). Composes the MediaObject molecule.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15690-36591' },
  { id: 'ckeditor', name: 'CKEditor styles', description: 'Rich-text (CKEditor output) styles: H1–H6, lead, paragraphs, links, bullet & numbered lists, gallery, table, testimonial, buttons and a questions banner.', category: 'content', atomicLevel: 'organism', tags: ['rich text', 'ckeditor', 'prose', 'wysiwyg'], deps: ['TextList', 'NumberedList', 'Table', 'Quote', 'CTA', 'Button'], usage: 'The styles applied to CMS rich-text (CKEditor) output on blog / detail pages.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14278-85431' },
  { id: 'gallery', name: 'Gallery', description: 'Square image grid with hover rollover; clicking opens an accessible lightbox (prev/next, Esc, swipe on mobile).', category: 'content', atomicLevel: 'section', tags: ['gallery', 'images', 'lightbox', 'modal'], deps: ['Image'], figmaNode: '18591:18189' },
  { id: 'quote', name: 'Quote', description: 'Testimonial band (grey): quote text, author with avatar, and prev/next arrows cycling several quotes.', category: 'content', atomicLevel: 'molecule', tags: ['quote', 'testimonial', 'slider'], deps: ['Avatar', 'Button'], usage: 'Social proof / testimonials on a page.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15536-11676' },
  { id: 'intro-banner', name: 'IntroBanner', description: 'Full-width intro band (dark): image beside a short heading and a primary button.', category: 'content', atomicLevel: 'molecule', tags: ['intro', 'banner', 'media'], deps: ['Image', 'Button'], usage: 'Short introduction band near the top of a page.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15479-27042' },

  // Call to action
  { id: 'cta-with-media', name: 'CTA with media', description: 'Full-bleed coloured band (image left + title, text, buttons right). Colour variants: location (brown), highlights (magenta), info (UiTPAS).', category: 'cta', atomicLevel: 'molecule', tags: ['cta', 'call to action', 'media', 'cta-with-media'], deps: ['Button', 'Image'], usage: 'Mid-page conversion / info prompt with a supporting image. Same molecule shown in Molecules (Cards & CTA).', figmaNode: '18652:19618' },
  { id: 'cta-with-media-large', name: 'CTA with media — large', description: 'Full-width call-to-action with media: coloured panel (heading, text, primary button) beside a large image.', category: 'cta', atomicLevel: 'molecule', tags: ['cta', 'call to action', 'media', 'banner', 'cta-with-media'], deps: ['Button', 'Image'], usage: 'Strong end-of-page conversion band.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15506-889' },

  // Forms & contact
  { id: 'contact-form', name: 'Contact form', description: 'Two-column contact band (teal): left title/intro, right form card on white (436/780). OPEK “Forms”.', category: 'forms', atomicLevel: 'section', tags: ['form', 'contact', 'question'], deps: ['Field', 'Input', 'Button'], figmaNode: '18591:18047' },

  // Careers
  { id: 'vacatures', name: 'Vacatures', description: '“Werk mee bij de bewoners”: bordered list of job rows (title + tag + deadline / lead + description + CTA), global CTA.', category: 'careers', atomicLevel: 'section', tags: ['jobs', 'careers', 'vacatures'], deps: ['Tag', 'Button'], figmaNode: '18368:16363' },

  // Footers
  { id: 'footer', name: 'Footer', description: 'Page footer: brand + contact + socials, three menu columns, credits.', category: 'footers', atomicLevel: 'organism', tags: ['footer'], deps: ['Logo', 'Social', 'Signature'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15387-889' },
];

export const byId = (id: string) => registry.find((e) => e.id === id);
export const byCategory = (cat: string) => registry.filter((e) => e.category === cat);
