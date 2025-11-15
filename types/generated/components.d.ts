import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsCoordinadores extends Struct.ComponentSchema {
  collectionName: 'components_about_us_coordinadores';
  info: {
    displayName: 'coordinadores';
  };
  attributes: {
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
    person: Schema.Attribute.Component<'replicable.person', true> &
      Schema.Attribute.Required;
  };
}

export interface AboutUsGlobal extends Struct.ComponentSchema {
  collectionName: 'components_about_us_globals';
  info: {
    displayName: 'global';
  };
  attributes: {
    buttonAction: Schema.Attribute.JSON & Schema.Attribute.Required;
    logoAEGlobal: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    portada: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutUsImpact extends Struct.ComponentSchema {
  collectionName: 'components_about_us_impacts';
  info: {
    displayName: 'impact';
  };
  attributes: {
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface AboutUsOurIdentity extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_identities';
  info: {
    displayName: 'ourIdentity';
  };
  attributes: {
    identity: Schema.Attribute.Component<'replicable.identity', true> &
      Schema.Attribute.Required;
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface AboutUsVoluntarios extends Struct.ComponentSchema {
  collectionName: 'components_about_us_voluntarios';
  info: {
    displayName: 'voluntarios';
  };
  attributes: {
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
    person: Schema.Attribute.Component<'replicable.person', true> &
      Schema.Attribute.Required;
  };
}

export interface BlogPageComponentsAuthorRole extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_components_author_roles';
  info: {
    displayName: 'Author Role';
  };
  attributes: {
    author: Schema.Attribute.Relation<'oneToOne', 'api::author.author'>;
    role: Schema.Attribute.Enumeration<
      ['Editor Principal', 'Co-autor', 'Revisor', 'Colaborador', 'Ilustrador']
    >;
  };
}

export interface EventsPageEventsInfo extends Struct.ComponentSchema {
  collectionName: 'components_events_page_events_infos';
  info: {
    displayName: 'EventsInfo';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    imageLumma: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkEmbedLumma: Schema.Attribute.Text & Schema.Attribute.Required;
    linkLumma: Schema.Attribute.Text & Schema.Attribute.Required;
    textButton: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface GalleryPageGallery extends Struct.ComponentSchema {
  collectionName: 'components_gallery_page_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    imageGallery: Schema.Attribute.Component<'replicable.image-gallery', true> &
      Schema.Attribute.Required;
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface HeroSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {
    button: Schema.Attribute.JSON;
    portada: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    preTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface HomePageBooks extends Struct.ComponentSchema {
  collectionName: 'components_home_page_books';
  info: {
    displayName: 'books';
  };
  attributes: {
    book: Schema.Attribute.Component<'replicable.book', true>;
    buttonAction: Schema.Attribute.JSON & Schema.Attribute.Required;
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface HomePageFrequentlyQuestions extends Struct.ComponentSchema {
  collectionName: 'components_home_page_frequently_questions';
  info: {
    displayName: 'frequentlyQuestions';
  };
  attributes: {
    question: Schema.Attribute.Component<'replicable.question', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomePageImportantEvents extends Struct.ComponentSchema {
  collectionName: 'components_home_page_important_events';
  info: {
    displayName: 'importantEvents';
  };
  attributes: {
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
    linkEmbed: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomePageImportantVideo extends Struct.ComponentSchema {
  collectionName: 'components_home_page_important_videos';
  info: {
    displayName: 'importantVideo';
  };
  attributes: {
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
    portada: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    videoLink: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomePageWhyAe extends Struct.ComponentSchema {
  collectionName: 'components_home_page_why_aes';
  info: {
    displayName: 'whyAE';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectsPageProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_page_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    project: Schema.Attribute.Component<'replicable.project', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectsPageSendProject extends Struct.ComponentSchema {
  collectionName: 'components_projects_page_send_projects';
  info: {
    displayName: 'sendProject';
  };
  attributes: {
    button: Schema.Attribute.JSON & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    info: Schema.Attribute.JSON & Schema.Attribute.Required;
    titleCard: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ReplicableBook extends Struct.ComponentSchema {
  collectionName: 'components_replicable_books';
  info: {
    displayName: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    portada: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ReplicableIdentity extends Struct.ComponentSchema {
  collectionName: 'components_replicable_identities';
  info: {
    displayName: 'identity';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ReplicableImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_replicable_image_galleries';
  info: {
    displayName: 'imageGallery';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text;
  };
}

export interface ReplicablePerson extends Struct.ComponentSchema {
  collectionName: 'components_replicable_people';
  info: {
    displayName: 'person';
  };
  attributes: {
    bio: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    foto: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.Text & Schema.Attribute.Required;
    socialNetworks: Schema.Attribute.JSON;
  };
}

export interface ReplicableProject extends Struct.ComponentSchema {
  collectionName: 'components_replicable_projects';
  info: {
    displayName: 'project';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ReplicableQuestion extends Struct.ComponentSchema {
  collectionName: 'components_replicable_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.coordinadores': AboutUsCoordinadores;
      'about-us.global': AboutUsGlobal;
      'about-us.impact': AboutUsImpact;
      'about-us.our-identity': AboutUsOurIdentity;
      'about-us.voluntarios': AboutUsVoluntarios;
      'blog-page-components.author-role': BlogPageComponentsAuthorRole;
      'events-page.events-info': EventsPageEventsInfo;
      'gallery-page.gallery': GalleryPageGallery;
      'hero-section.hero-section': HeroSectionHeroSection;
      'home-page.books': HomePageBooks;
      'home-page.frequently-questions': HomePageFrequentlyQuestions;
      'home-page.important-events': HomePageImportantEvents;
      'home-page.important-video': HomePageImportantVideo;
      'home-page.why-ae': HomePageWhyAe;
      'projects-page.projects': ProjectsPageProjects;
      'projects-page.send-project': ProjectsPageSendProject;
      'replicable.book': ReplicableBook;
      'replicable.identity': ReplicableIdentity;
      'replicable.image-gallery': ReplicableImageGallery;
      'replicable.person': ReplicablePerson;
      'replicable.project': ReplicableProject;
      'replicable.question': ReplicableQuestion;
    }
  }
}
