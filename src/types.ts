export interface MasterInfo {
  id: string;

  name_en: string;
  other_name_en?: string;
  nickname_en?: string;

  name_pinyin?: string;
  other_name_pinyin?: string;

  name_ja?: string;
  other_name_ja?: string;

  name_kr?: string;
  other_name_kr?: string;

  name_zh?: string;
  other_name_zh?: string;
  nickname_zh?: string;

  name_vi: string;
  other_name_vi?: string;
  nickname_vi?: string;

  name_sk?: string;
  other_name_sk?: string;

  name_ko?: string;
  other_name_ko?: string;

  posthumous_title_vi?: string;
  stupa_name?: string;

  birth_death_time?: string[];
  epoch?: string;
  sect?: string[];
  country?: string;
  place?: string;
  description?: string;

  teachers?: string[];
  disciples?: string[];

  image?: string;
  reference?: string[];
}


export interface TreeNode {
    id: string;
    name: string;
    children: TreeNode[];
}

export interface PostTitleWithSlug {
    title: string;
    slug: string;
}

export interface Link {
    title: string;
    url: string;
    target?: string;
}

export interface Image {
    width?: string | number;
    height?: string | number;
    src: string;
    alt?: string;
}

