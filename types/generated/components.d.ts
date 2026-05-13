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
    image: Schema.Attribute.Media<'images'>;
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
    card: Schema.Attribute.Component<'testimonial.cards', true>;
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
      'blogs.posts': BlogsPosts;
      'career.career': CareerCareer;
      'global.accordion': GlobalAccordion;
      'global.banner': GlobalBanner;
      'global.button': GlobalButton;
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
      'services.services-content': ServicesServicesContent;
      'services.slider-text': ServicesSliderText;
      'testimonial.cards': TestimonialCards;
    }
  }
}
