import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OrigamiStudio/blog',
    component: ComponentCreator('/OrigamiStudio/blog', '9cc'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/archive',
    component: ComponentCreator('/OrigamiStudio/blog/archive', '9de'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/first-blog-post',
    component: ComponentCreator('/OrigamiStudio/blog/first-blog-post', '765'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/long-blog-post',
    component: ComponentCreator('/OrigamiStudio/blog/long-blog-post', '3a0'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/mdx-blog-post',
    component: ComponentCreator('/OrigamiStudio/blog/mdx-blog-post', 'ba7'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/tags',
    component: ComponentCreator('/OrigamiStudio/blog/tags', '5cd'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/tags/docusaurus',
    component: ComponentCreator('/OrigamiStudio/blog/tags/docusaurus', 'c76'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/tags/facebook',
    component: ComponentCreator('/OrigamiStudio/blog/tags/facebook', '0b9'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/tags/hello',
    component: ComponentCreator('/OrigamiStudio/blog/tags/hello', 'cd6'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/tags/hola',
    component: ComponentCreator('/OrigamiStudio/blog/tags/hola', 'ff4'),
    exact: true
  },
  {
    path: '/OrigamiStudio/blog/welcome',
    component: ComponentCreator('/OrigamiStudio/blog/welcome', '219'),
    exact: true
  },
  {
    path: '/OrigamiStudio/markdown-page',
    component: ComponentCreator('/OrigamiStudio/markdown-page', '4a8'),
    exact: true
  },
  {
    path: '/OrigamiStudio/docs',
    component: ComponentCreator('/OrigamiStudio/docs', '055'),
    routes: [
      {
        path: '/OrigamiStudio/docs/Animation/Bouncy Converter',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Bouncy Converter', '8d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Classic Animation',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Classic Animation', 'ead'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Cubic Bezier Animation',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Cubic Bezier Animation', 'c00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Cubic Bezier Curve',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Cubic Bezier Curve', 'c97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Curve',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Curve', 'a44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Pop Animation',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Pop Animation', '613'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Repeating Animation',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Repeating Animation', 'cfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Smooth Value',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Smooth Value', '635'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Spring Animation',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Spring Animation', 'd9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Animation/Spring Converter',
        component: ComponentCreator('/OrigamiStudio/docs/Animation/Spring Converter', '9e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Canvas/',
        component: ComponentCreator('/OrigamiStudio/docs/Canvas/', '79b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Canvas/Layout',
        component: ComponentCreator('/OrigamiStudio/docs/Canvas/Layout', '16c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Canvas/Quick Interactions',
        component: ComponentCreator('/OrigamiStudio/docs/Canvas/Quick Interactions', '1ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/category/canvas',
        component: ComponentCreator('/OrigamiStudio/docs/category/canvas', 'af8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/category/patch-editor',
        component: ComponentCreator('/OrigamiStudio/docs/category/patch-editor', '14b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Color/Color to Hex',
        component: ComponentCreator('/OrigamiStudio/docs/Color/Color to Hex', '769'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Color/Color to HSL',
        component: ComponentCreator('/OrigamiStudio/docs/Color/Color to HSL', '320'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Color/Color to RGB',
        component: ComponentCreator('/OrigamiStudio/docs/Color/Color to RGB', 'd5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Color/Hex Color',
        component: ComponentCreator('/OrigamiStudio/docs/Color/Hex Color', 'c45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Color/HSL Color',
        component: ComponentCreator('/OrigamiStudio/docs/Color/HSL Color', '85f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Color/RGB Color',
        component: ComponentCreator('/OrigamiStudio/docs/Color/RGB Color', 'a5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Concepts/Coordinates',
        component: ComponentCreator('/OrigamiStudio/docs/Concepts/Coordinates', 'c8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Concepts/Loops',
        component: ComponentCreator('/OrigamiStudio/docs/Concepts/Loops', '15a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Concepts/Math Expressions',
        component: ComponentCreator('/OrigamiStudio/docs/Concepts/Math Expressions', '4f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Concepts/States & Pulses',
        component: ComponentCreator('/OrigamiStudio/docs/Concepts/States & Pulses', '223'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Concepts/Variables',
        component: ComponentCreator('/OrigamiStudio/docs/Concepts/Variables', 'bcf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Array Append',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Array Append', '88f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Array Count',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Array Count', 'e07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Array Join',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Array Join', 'fb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Array Reverse',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Array Reverse', '234'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Array Sort',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Array Sort', '1fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Get Keys',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Get Keys', '4ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Index Of',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Index Of', '7ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/JSON Array',
        component: ComponentCreator('/OrigamiStudio/docs/Data/JSON Array', '34f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/JSON Object',
        component: ComponentCreator('/OrigamiStudio/docs/Data/JSON Object', 'eb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/JSON to Text',
        component: ComponentCreator('/OrigamiStudio/docs/Data/JSON to Text', 'e82'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Network Request',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Network Request', 'fc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Open URL',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Open URL', '298'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Set Value for Key',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Set Value for Key', '07d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Settings JSON',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Settings JSON', '5b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Subarray',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Subarray', '302'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Value at Index',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Value at Index', 'bce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Value at Path',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Value at Path', '196'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Data/Value for Key',
        component: ComponentCreator('/OrigamiStudio/docs/Data/Value for Key', '414'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Browser Buttons',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Browser Buttons', '575'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Browser Chrome',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Browser Chrome', 'a73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Camera',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Camera', '9f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Device Buttons',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Device Buttons', 'cdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Device Info',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Device Info', 'b7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Device Time',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Device Time', 'cff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Game Controller',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Game Controller', 'aa4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Haptic',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Haptic', 'a7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Interface Orientation',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Interface Orientation', '1a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Location',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Location', '86c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Microphone',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Microphone', '06e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Mouse Cursor',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Mouse Cursor', 'b3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Settings JSON',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Settings JSON', '555'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Sound Kit',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Sound Kit', '34c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Sound Player',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Sound Player', 'b62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Sound Player Setting',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Sound Player Setting', 'd39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Touches',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Touches', '3d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Trackpad',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Trackpad', 'f52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Trackpad Haptic',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Trackpad Haptic', '2b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Device/Vibrate',
        component: ComponentCreator('/OrigamiStudio/docs/Device/Vibrate', 'fb1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/', '4bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Double Tap',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Double Tap', '6c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Drag',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Drag', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Drag Settings',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Drag Settings', '2e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Gesture',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Gesture', 'f46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Hover',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Hover', '13c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Keyboard',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Keyboard', 'b52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Long Press',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Long Press', '4df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Momentum Scrolling',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Momentum Scrolling', 'ad1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Mouse',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Mouse', '486'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Pop Switch',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Pop Switch', '0f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Scroll',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Scroll', '97d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Scroll Settings',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Scroll Settings', '113'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Interaction/Scrollaway',
        component: ComponentCreator('/OrigamiStudio/docs/Interaction/Scrollaway', '664'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/intro',
        component: ComponentCreator('/OrigamiStudio/docs/intro', '7f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/And',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/And', '9d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/Equals',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/Equals', '4d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/Equals Exactly',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/Equals Exactly', '86f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/Greater Than',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/Greater Than', '931'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/Greater Than or Equal',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/Greater Than or Equal', '0f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/Less Than',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/Less Than', '452'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/Less Than or Equal',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/Less Than or Equal', 'cad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/Not',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/Not', '162'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Logic/Or',
        component: ComponentCreator('/OrigamiStudio/docs/Logic/Or', 'cf9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Any',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Any', '9b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Grid Layout',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Grid Layout', '21b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop', 'eed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Builder',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Builder', '830'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Count',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Count', '398'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Dedupe',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Dedupe', 'bb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Filter',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Filter', '389'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Insert',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Insert', '6e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Insert at End',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Insert at End', '4f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Option Switch',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Option Switch', '577'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Over Array',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Over Array', '981'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Remove',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Remove', '302'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Remove Last',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Remove Last', 'b49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Reverse',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Reverse', '202'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Select',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Select', '5b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Shuffle',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Shuffle', '4ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop Sum',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop Sum', 'efb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Loop to Array',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Loop to Array', 'f73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Loops/Running Total',
        component: ComponentCreator('/OrigamiStudio/docs/Loops/Running Total', '3e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/-',
        component: ComponentCreator('/OrigamiStudio/docs/Math/-', 'cb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/+',
        component: ComponentCreator('/OrigamiStudio/docs/Math/+', '842'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/÷',
        component: ComponentCreator('/OrigamiStudio/docs/Math/÷', '47d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Absolute Value',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Absolute Value', '276'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Arctangent',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Arctangent', '0c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Cosine',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Cosine', '02c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Length',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Length', '5dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Math Expression',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Math Expression', '7d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Max',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Max', 'a24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Min',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Min', '111'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Mod',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Mod', '213'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Power',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Power', 'ef3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Round',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Round', '285'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Sine',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Sine', 'e44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/Square Root',
        component: ComponentCreator('/OrigamiStudio/docs/Math/Square Root', '708'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Math/x',
        component: ComponentCreator('/OrigamiStudio/docs/Math/x', 'bab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Patch Editor/Animations',
        component: ComponentCreator('/OrigamiStudio/docs/Patch Editor/Animations', '424'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Patch Editor/Interactions Patch',
        component: ComponentCreator('/OrigamiStudio/docs/Patch Editor/Interactions Patch', '450'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Patch Editor/Patches',
        component: ComponentCreator('/OrigamiStudio/docs/Patch Editor/Patches', '809'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Patch Editor/States',
        component: ComponentCreator('/OrigamiStudio/docs/Patch Editor/States', '981'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Workflow/Components',
        component: ComponentCreator('/OrigamiStudio/docs/Workflow/Components', 'bdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Workflow/Creating an Origami System',
        component: ComponentCreator('/OrigamiStudio/docs/Workflow/Creating an Origami System', '62d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Workflow/Custom Devices',
        component: ComponentCreator('/OrigamiStudio/docs/Workflow/Custom Devices', 'e0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Workflow/Keyboard Shortcuts',
        component: ComponentCreator('/OrigamiStudio/docs/Workflow/Keyboard Shortcuts', 'c62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Workflow/Patch Organization',
        component: ComponentCreator('/OrigamiStudio/docs/Workflow/Patch Organization', '364'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OrigamiStudio/docs/Workflow/Previewing & Sharing',
        component: ComponentCreator('/OrigamiStudio/docs/Workflow/Previewing & Sharing', '571'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OrigamiStudio/',
    component: ComponentCreator('/OrigamiStudio/', '993'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
