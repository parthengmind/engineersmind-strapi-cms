import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface V1AdvancedSection extends Struct.ComponentSchema {
  collectionName: 'components_v1_advanced_sections';
  info: {
    displayName: 'Advanced Section';
  };
  attributes: {};
}

export interface V1BulletedList extends Struct.ComponentSchema {
  collectionName: 'components_v1_bulleted_lists';
  info: {
    displayName: 'bulletedList';
  };
  attributes: {
    listContent: Schema.Attribute.Component<'v1.content', true>;
  };
}

export interface V1CodeBlock extends Struct.ComponentSchema {
  collectionName: 'components_v1_code_blocks';
  info: {
    displayName: 'codeBlock';
  };
  attributes: {
    codeBlock: Schema.Attribute.Text;
  };
}

export interface V1Content extends Struct.ComponentSchema {
  collectionName: 'components_v1_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    content: Schema.Attribute.Text;
    linkableContent: Schema.Attribute.RichText;
  };
}

export interface V1Image extends Struct.ComponentSchema {
  collectionName: 'components_v1_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
  };
}

export interface V1List extends Struct.ComponentSchema {
  collectionName: 'components_v1_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    linkableContent: Schema.Attribute.RichText;
    listType: Schema.Attribute.Enumeration<['logoList', 'bulletpoint']>;
  };
}

export interface V1ListContent extends Struct.ComponentSchema {
  collectionName: 'components_v1_list_contents';
  info: {
    displayName: 'listContent';
  };
  attributes: {
    listContent: Schema.Attribute.String;
  };
}

export interface V1LogoList extends Struct.ComponentSchema {
  collectionName: 'components_v1_logo_lists';
  info: {
    displayName: 'logoList';
  };
  attributes: {
    listContent: Schema.Attribute.Component<'v1.content', true>;
    listHeading: Schema.Attribute.Component<
      'v1.main-heading-and-content',
      false
    >;
  };
}

export interface V1LogoListComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_logo_list_components';
  info: {
    displayName: 'logoListComponent';
  };
  attributes: {
    logoList: Schema.Attribute.Component<'v1.logo-list', true>;
  };
}

export interface V1MainHeadingAndContent extends Struct.ComponentSchema {
  collectionName: 'components_v1_main_heading_and_contents';
  info: {
    displayName: 'heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    headingType: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    >;
  };
}

export interface V1Paragraph extends Struct.ComponentSchema {
  collectionName: 'components_v1_paragraphs';
  info: {
    displayName: 'simpleSection';
  };
  attributes: {
    content: Schema.Attribute.Component<'v1.content', false>;
    heading: Schema.Attribute.Component<'v1.main-heading-and-content', false>;
    image: Schema.Attribute.Component<'v1.image', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'v1.advanced-section': V1AdvancedSection;
      'v1.bulleted-list': V1BulletedList;
      'v1.code-block': V1CodeBlock;
      'v1.content': V1Content;
      'v1.image': V1Image;
      'v1.list': V1List;
      'v1.list-content': V1ListContent;
      'v1.logo-list': V1LogoList;
      'v1.logo-list-component': V1LogoListComponent;
      'v1.main-heading-and-content': V1MainHeadingAndContent;
      'v1.paragraph': V1Paragraph;
    }
  }
}
