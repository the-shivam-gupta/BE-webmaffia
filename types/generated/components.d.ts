import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsContent extends Struct.ComponentSchema {
  collectionName: 'components_about_us_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    contactUs: Schema.Attribute.Component<'global.button', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutUsLatestWins extends Struct.ComponentSchema {
  collectionName: 'components_about_us_latest_wins';
  info: {
    displayName: 'Latest Wins';
  };
  attributes: {
    card: Schema.Attribute.Component<'homepage.clients', true>;
    heading: Schema.Attribute.String;
  };
}

export interface AwardsCard extends Struct.ComponentSchema {
  collectionName: 'components_awards_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface BlogsPosts extends Struct.ComponentSchema {
  collectionName: 'components_blogs_posts';
  info: {
    displayName: 'Posts';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.button', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlogsReadMore extends Struct.ComponentSchema {
  collectionName: 'components_blogs_read_mores';
  info: {
    displayName: 'ReadMore';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'READ MORE'>;
  };
}

export interface CareerCareer extends Struct.ComponentSchema {
  collectionName: 'components_career_careers';
  info: {
    displayName: 'Career';
  };
  attributes: {
    accordion: Schema.Attribute.Component<'global.accordion', true>;
    heading: Schema.Attribute.String;
  };
}

export interface CaseStudyChallenge extends Struct.ComponentSchema {
  collectionName: 'components_case_study_challenges';
  info: {
    displayName: 'Challenge';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    lists: Schema.Attribute.Component<'global.lists', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface CaseStudyCreatives extends Struct.ComponentSchema {
  collectionName: 'components_case_study_creatives';
  info: {
    displayName: 'Creatives';
  };
  attributes: {
    heading: Schema.Attribute.String;
    posts: Schema.Attribute.Component<'case-study.posts', true>;
    reels: Schema.Attribute.Component<'case-study.reels', true>;
  };
}

export interface CaseStudyPosts extends Struct.ComponentSchema {
  collectionName: 'components_case_study_posts';
  info: {
    displayName: 'Posts';
  };
  attributes: {
    href: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface CaseStudyReels extends Struct.ComponentSchema {
  collectionName: 'components_case_study_reels';
  info: {
    displayName: 'Reels';
  };
  attributes: {
    instagramUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface CaseStudySeo extends Struct.ComponentSchema {
  collectionName: 'components_case_study_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    graph: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
  };
}

export interface CaseStudyShowcase extends Struct.ComponentSchema {
  collectionName: 'components_case_study_showcases';
  info: {
    displayName: 'Showcase';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.button', false>;
    desktopImage: Schema.Attribute.Media<'images'>;
    mobileImage: Schema.Attribute.Media<'images'>;
  };
}

export interface CaseStudySolution extends Struct.ComponentSchema {
  collectionName: 'components_case_study_solutions';
  info: {
    displayName: 'Solution';
  };
  attributes: {
    heading: Schema.Attribute.String;
    lists: Schema.Attribute.Component<'global.lists', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface GlobalAccordion extends Struct.ComponentSchema {
  collectionName: 'components_global_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    jobTitle: Schema.Attribute.String;
  };
}

export interface GlobalBanner extends Struct.ComponentSchema {
  collectionName: 'components_global_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    desktopImage: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    mobileImage: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface GlobalButton extends Struct.ComponentSchema {
  collectionName: 'components_global_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalLists extends Struct.ComponentSchema {
  collectionName: 'components_global_lists';
  info: {
    displayName: 'Lists';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface GlobalMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_global_menu_items';
  info: {
    displayName: 'Menu Items';
  };
  attributes: {
    subMenu: Schema.Attribute.Component<'global.sub-menu', true>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalMenus extends Struct.ComponentSchema {
  collectionName: 'components_global_menus';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.button', false>;
    items: Schema.Attribute.Component<'global.menu-items', true>;
    location: Schema.Attribute.Component<'menus.location', true>;
    socials: Schema.Attribute.Component<'menus.socials', true>;
  };
}

export interface GlobalSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_global_sub_menus';
  info: {
    displayName: 'Sub Menu';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
  };
}

export interface HomepageClients extends Struct.ComponentSchema {
  collectionName: 'components_homepage_clients';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/awards'>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface HomepageOurWork extends Struct.ComponentSchema {
  collectionName: 'components_homepage_our_works';
  info: {
    displayName: 'Our Work';
  };
  attributes: {
    card: Schema.Attribute.Component<'homepage.clients', true>;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    viewAll: Schema.Attribute.Component<'global.button', false>;
  };
}

export interface HomepagePortfolio extends Struct.ComponentSchema {
  collectionName: 'components_homepage_portfolios';
  info: {
    displayName: 'Portfolio';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    button: Schema.Attribute.Component<'global.button', false>;
    description: Schema.Attribute.RichText;
  };
}

export interface HomepageSlider extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface HomepageTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.String;
  };
}

export interface MenusLocation extends Struct.ComponentSchema {
  collectionName: 'components_menus_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    address: Schema.Attribute.RichText;
    city: Schema.Attribute.String;
  };
}

export interface MenusSocials extends Struct.ComponentSchema {
  collectionName: 'components_menus_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    href: Schema.Attribute.String;
    icons: Schema.Attribute.Media<'images'>;
  };
}

export interface OurWorkCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_our_work_case_studies';
  info: {
    displayName: 'Case Study';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.button', false>;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    techStack: Schema.Attribute.String;
  };
}

export interface ServicesTechDesignFeatures extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_design_features';
  info: {
    displayName: 'DesignFeatures';
  };
  attributes: {
    card: Schema.Attribute.Component<'services-tech.feature-card', true>;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
  };
}

export interface ServicesTechFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_feature_cards';
  info: {
    displayName: 'FeatureCard';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
  };
}

export interface ServicesTechFeatures extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    designFeature: Schema.Attribute.Component<
      'services-tech.design-features',
      true
    >;
  };
}

export interface ServicesTechLatestWork extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_latest_works';
  info: {
    displayName: 'LatestWork';
  };
  attributes: {
    projects: Schema.Attribute.Component<'services-tech.projects', true>;
  };
}

export interface ServicesTechLink extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    name: Schema.Attribute.String;
    type: Schema.Attribute.Text;
  };
}

export interface ServicesTechProjects extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'services-tech.link', false>;
  };
}

export interface ServicesTechTechnology extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_technologies';
  info: {
    displayName: 'Technology';
  };
  attributes: {
    heading: Schema.Attribute.String;
    Items: Schema.Attribute.Component<'services-tech.technology-items', true>;
  };
}

export interface ServicesTechTechnologyIcons extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_technology_icons';
  info: {
    displayName: 'TechnologyIcons';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ServicesTechTechnologyItems extends Struct.ComponentSchema {
  collectionName: 'components_services_tech_technology_items';
  info: {
    displayName: 'TechnologyItems';
  };
  attributes: {
    icon: Schema.Attribute.Component<'services-tech.technology-icons', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesServicesContent extends Struct.ComponentSchema {
  collectionName: 'components_services_services_contents';
  info: {
    displayName: 'Services Content';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.button', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    slidingText: Schema.Attribute.Component<'services.slider-text', true>;
  };
}

export interface ServicesSliderText extends Struct.ComponentSchema {
  collectionName: 'components_services_slider_texts';
  info: {
    displayName: 'Slider Text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface TestimonialCards extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    work: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.content': AboutUsContent;
      'about-us.latest-wins': AboutUsLatestWins;
      'awards.card': AwardsCard;
      'blogs.posts': BlogsPosts;
      'blogs.read-more': BlogsReadMore;
      'career.career': CareerCareer;
      'case-study.challenge': CaseStudyChallenge;
      'case-study.creatives': CaseStudyCreatives;
      'case-study.posts': CaseStudyPosts;
      'case-study.reels': CaseStudyReels;
      'case-study.seo': CaseStudySeo;
      'case-study.showcase': CaseStudyShowcase;
      'case-study.solution': CaseStudySolution;
      'global.accordion': GlobalAccordion;
      'global.banner': GlobalBanner;
      'global.button': GlobalButton;
      'global.lists': GlobalLists;
      'global.menu-items': GlobalMenuItems;
      'global.menus': GlobalMenus;
      'global.sub-menu': GlobalSubMenu;
      'homepage.clients': HomepageClients;
      'homepage.our-work': HomepageOurWork;
      'homepage.portfolio': HomepagePortfolio;
      'homepage.slider': HomepageSlider;
      'homepage.testimonial': HomepageTestimonial;
      'menus.location': MenusLocation;
      'menus.socials': MenusSocials;
      'our-work.case-study': OurWorkCaseStudy;
      'services-tech.design-features': ServicesTechDesignFeatures;
      'services-tech.feature-card': ServicesTechFeatureCard;
      'services-tech.features': ServicesTechFeatures;
      'services-tech.latest-work': ServicesTechLatestWork;
      'services-tech.link': ServicesTechLink;
      'services-tech.projects': ServicesTechProjects;
      'services-tech.technology': ServicesTechTechnology;
      'services-tech.technology-icons': ServicesTechTechnologyIcons;
      'services-tech.technology-items': ServicesTechTechnologyItems;
      'services.services-content': ServicesServicesContent;
      'services.slider-text': ServicesSliderText;
      'testimonial.cards': TestimonialCards;
    }
  }
}
