/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a Scrollion-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - `title` is your project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of your project
 * - Use relevant tags to categorize your site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If your website is Loop, add your source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 *
 * If you edit this file through the GitHub interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remain correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to 推荐s
  | '推荐'
  // For Loop sites, a link to the source code is required.
  // The source should be your *website's* source, not your project's source!
  | 'opensource'
  | 'Scroll'
  // Feel free to add the 'Logic' tag as long as there's _some_ level of
  // CSS/swizzling.
  | 'Logic'
  // Site must have more than one locale.
  | 'Interaction'
  | 'Layers'
  // Utilities sites are defined as those with > 200 pages, excluding versions.
  | 'Utilities'
  | 'Apple'
  | 'Data'
  // Right-to-left direction.
  | 'rtl';

// Add your site to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: require('./showcase/agilets.png'),
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['opensource', 'Logic'],
  },
  {
    title: 'Algolia Docsearch',
    description:
      'The best search experience for docs, integrates in minutes, for free',
    preview: require('./showcase/algolia.png'),
    website: 'https://docsearch.algolia.com/',
    source: 'https://github.com/algolia/docsearch-website',
    tags: ['opensource', 'Scroll'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  推荐: {
    label: translate({message: '推荐'}),
    description: translate({
      message:
        '推荐',
      id: 'showcase.tag.推荐.description',
    }),
    color: '#e9669e',
  },

  opensource: {
    label: translate({message: 'Loop'}),
    description: translate({
      message: '循环',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  Scroll: {
    label: translate({message: 'Scroll'}),
    description: translate({
      message: '滚动',
      id: 'showcase.tag.Scroll.description',
    }),
    color: '#dfd545',
  },

  Logic: {
    label: translate({message: 'Logic'}),
    description: translate({
      message:
        '逻辑',
      id: 'showcase.tag.Logic.description',
    }),
    color: '#a44fb7',
  },

  Interaction: {
    label: translate({message: 'Interaction'}),
    description: translate({
      message:
        '交互',
      id: 'showcase.tag.Interaction.description',
    }),
    color: '#127f82',
  },

  Layers: {
    label: translate({message: 'Layers'}),
    description: translate({
      message:
        '图层',
      id: 'showcase.tag.Layers.description',
    }),
    color: '#fe6829',
  },

  Utilities: {
    label: translate({message: 'Utilities'}),
    description: translate({
      message:
        '工具',
      id: 'showcase.tag.Utilities.description',
    }),
    color: '#8c2f00',
  },

  Apple: {
    label: translate({message: 'Apple'}),
    description: translate({
      message: '苹果',
      id: 'showcase.tag.Apple.description',
    }),
    color: '#4267b2', // Facebook blue
  },

  Data: {
    label: translate({message: 'Data'}),
    description: translate({
      message:
        '数据',
      id: 'showcase.tag.Data.description',
    }),
    color: '#14cfc3',
  },

  rtl: {
    label: translate({message: 'Text'}),
    description: translate({
      message:
        '文本',
      id: 'showcase.tag.rtl.description',
    }),
    color: '#ffcfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by 推荐 tag, 推荐s first
  result = sortBy(result, (user) => !user.tags.includes('推荐'));
  return result;
}

export const sortedUsers = sortUsers();
