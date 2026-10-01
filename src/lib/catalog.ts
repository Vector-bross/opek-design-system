/**
 * Catalog — maps a registry id to its Astro component (for live preview) and
 * its raw source (for the code export). Keeps the atomic file structure intact.
 */
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

import Navbar from '../components/organisms/Navbar.astro';
import Breadcrumb from '../components/organisms/Breadcrumb.astro';
import AnchorNavbar from '../components/organisms/AnchorNavbar.astro';
import Filters from '../components/organisms/Filters.astro';
import Header from '../components/organisms/Header.astro';
import HeroBrand from '../components/organisms/HeroBrand.astro';
import Newsletter from '../components/organisms/Newsletter.astro';
import Footer from '../components/organisms/Footer.astro';
import FormQuestion from '../components/sections/FormQuestion.astro';
import CtaWithMedia from '../components/sections/CtaWithMedia.astro';
import Modal from '../components/organisms/Modal.astro';
import NewsSection from '../components/sections/NewsSection.astro';
import NewsRelatedSection from '../components/sections/NewsRelatedSection.astro';
import TeamSection from '../components/sections/TeamSection.astro';
import Portals from '../components/sections/Portals.astro';
import EventsSection from '../components/sections/EventsSection.astro';
import EventsHallSection from '../components/sections/EventsHallSection.astro';
import RoomsRelatedSection from '../components/sections/RoomsRelatedSection.astro';
import VacaturesSection from '../components/sections/VacaturesSection.astro';
import LogosSection from '../components/sections/LogosSection.astro';
import GallerySection from '../components/sections/GallerySection.astro';
import FaqSection from '../components/sections/FaqSection.astro';
import StatsSection from '../components/sections/StatsSection.astro';
import BrandsSection from '../components/sections/BrandsSection.astro';
import FormSection from '../components/sections/FormSection.astro';
import TextContentSection from '../components/sections/TextContentSection.astro';
import IntroBanner from '../components/tiles/IntroBanner.astro';
import Quote from '../components/tiles/Quote.astro';
import Gallery from '../components/tiles/Gallery.astro';
import CtaSmall from '../components/sections/CtaSmall.astro';
import CtaLarge from '../components/sections/CtaLarge.astro';
import CkEditorStyles from '../components/sections/CkEditorStyles.astro';

import NavbarSrc from '../components/organisms/Navbar.astro?raw';
import BreadcrumbSrc from '../components/organisms/Breadcrumb.astro?raw';
import AnchorNavbarSrc from '../components/organisms/AnchorNavbar.astro?raw';
import FiltersSrc from '../components/organisms/Filters.astro?raw';
import HeaderSrc from '../components/organisms/Header.astro?raw';
import HeroBrandSrc from '../components/organisms/HeroBrand.astro?raw';
import NewsletterSrc from '../components/organisms/Newsletter.astro?raw';
import FooterSrc from '../components/organisms/Footer.astro?raw';
import FormQuestionSrc from '../components/sections/FormQuestion.astro?raw';
import CtaWithMediaSrc from '../components/sections/CtaWithMedia.astro?raw';
import ModalSrc from '../components/organisms/Modal.astro?raw';
import NewsSectionSrc from '../components/sections/NewsSection.astro?raw';
import NewsRelatedSectionSrc from '../components/sections/NewsRelatedSection.astro?raw';
import TeamSectionSrc from '../components/sections/TeamSection.astro?raw';
import PortalsSrc from '../components/sections/Portals.astro?raw';
import EventsSectionSrc from '../components/sections/EventsSection.astro?raw';
import EventsHallSectionSrc from '../components/sections/EventsHallSection.astro?raw';
import RoomsRelatedSectionSrc from '../components/sections/RoomsRelatedSection.astro?raw';
import VacaturesSectionSrc from '../components/sections/VacaturesSection.astro?raw';
import LogosSectionSrc from '../components/sections/LogosSection.astro?raw';
import GallerySectionSrc from '../components/sections/GallerySection.astro?raw';
import FaqSectionSrc from '../components/sections/FaqSection.astro?raw';
import StatsSectionSrc from '../components/sections/StatsSection.astro?raw';
import BrandsSectionSrc from '../components/sections/BrandsSection.astro?raw';
import FormSectionSrc from '../components/sections/FormSection.astro?raw';
import TextContentSectionSrc from '../components/sections/TextContentSection.astro?raw';
import IntroBannerSrc from '../components/tiles/IntroBanner.astro?raw';
import QuoteSrc from '../components/tiles/Quote.astro?raw';
import GallerySrc from '../components/tiles/Gallery.astro?raw';
import CtaSmallSrc from '../components/sections/CtaSmall.astro?raw';
import CtaLargeSrc from '../components/sections/CtaLarge.astro?raw';
import CkEditorStylesSrc from '../components/sections/CkEditorStyles.astro?raw';

export interface CatalogItem { Component: AstroComponentFactory; src: string; }

/**
 * Strip the styleguide showcase scaffolding from a component's raw source so the
 * exported / copied code is the clean component only:
 *  - the per-variant toggle bar (label + Mobile switch)
 *  - the `data-tile` demo-wrapper markers
 * Component scripts (dropdowns, accordions, sliders…) are kept.
 */
export function cleanSource(src: string): string {
  let out = src;
  // remove the toggle bar divs (label + Mobile switch)
  out = out.replace(/[ \t]*<div class="flex items-center justify-between rounded-box[\s\S]*?<\/div>\n?/g, '');
  // drop the demo-wrapper marker attribute
  out = out.replace(/ data-tile/g, '');
  // collapse 3+ blank lines left behind
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim() + '\n';
}

export const catalog: Record<string, CatalogItem> = {
  'navbar': { Component: Navbar, src: NavbarSrc },
  'breadcrumb': { Component: Breadcrumb, src: BreadcrumbSrc },
  'anchor-navbar': { Component: AnchorNavbar, src: AnchorNavbarSrc },
  'filters': { Component: Filters, src: FiltersSrc },
  'header': { Component: Header, src: HeaderSrc },
  'hero': { Component: HeroBrand, src: HeroBrandSrc },
  'footer': { Component: Footer, src: FooterSrc },
  'contact-form': { Component: FormQuestion, src: FormQuestionSrc },
  'portals': { Component: Portals, src: PortalsSrc },
  'events': { Component: EventsSection, src: EventsSectionSrc },
  'events-hall': { Component: EventsHallSection, src: EventsHallSectionSrc },
  'news-section': { Component: NewsSection, src: NewsSectionSrc },
  'news-related': { Component: NewsRelatedSection, src: NewsRelatedSectionSrc },
  'rooms-related': { Component: RoomsRelatedSection, src: RoomsRelatedSectionSrc },
  'team-section': { Component: TeamSection, src: TeamSectionSrc },
  'vacatures': { Component: VacaturesSection, src: VacaturesSectionSrc },
  'logos': { Component: LogosSection, src: LogosSectionSrc },
  'text-content': { Component: TextContentSection, src: TextContentSectionSrc },
  'intro-banner': { Component: IntroBanner, src: IntroBannerSrc },
  'quote': { Component: Quote, src: QuoteSrc },
  'gallery': { Component: GallerySection, src: GallerySectionSrc },
  'cta-with-media': { Component: CtaWithMedia, src: CtaWithMediaSrc },
  'cta-with-media-large': { Component: CtaLarge, src: CtaLargeSrc },
  'ckeditor': { Component: CkEditorStyles, src: CkEditorStylesSrc },
};
