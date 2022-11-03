import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../components/HomepageComponents";
import WebComponentSvg from "./images/webComponent.svg";
import MobileComponentSvg from "./images/mobileComponent.svg";
import BlockSvg from "./images/block.svg";
import PatternSvg from "./images/pattern.svg";
import TemplateSvg from "./images/template.svg";
import IxdSvg from "./images/ixd.svg";
import AnalyzeSvg from "./images/analyze.svg";
import MotionSvg from "./images/motion.svg";
import KeyboardSvg from "./images/keyboard.svg";

import styles from "./index.module.css";

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout description="Origami研习社" wrapperClassName="homepage">
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>Origami 研习社</h2>
            <p>Origami 中文文档&使用手册&教程</p>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/documentation/intro"
            >
              开始
            </Link>
          </div>

          <Section title="快捷入口" id="menu-entry" hasSubSections>
            <Section>
              <Card
                title="中文文档"
                description="基于官方英文文档翻译成中文，方便查阅。"
                to="/docs/documentation/intro"
                icon={<WebComponentSvg />}
              />
              <Card
                title="模块"
                description="常用的自定义模块。"
                to="/docs/patches/intro"
                icon={<MobileComponentSvg />}
              />

              <Card
                title="例子"
                description="--"
                to="/showcase"
                icon={<BlockSvg />}
              />

              <Card
                title="组件系统"
                description="自定义组件系统的技术探索。"
                to="/docs/system/intro"
                icon={<PatternSvg />}
              />

              <Card
                title="专题"
                description="包含各类平台系统上的专题组件例子集合，比如 ios、android、macos等。"
                to="/docs/special/intro"
                icon={<TemplateSvg />}
              />

              <Card
                title="设备"
                description="自定义设备和官方设备列表。"
                to="/docs/device/intro"
                icon={<IxdSvg />}
              />
              <Card
                title="技术探索"
                description="个人的一些技术探索。"
                to="/docs/research/intro"
                icon={<AnalyzeSvg />}
              />
              <Card
                title="动画模块"
                description="主要研究各个平台系统、框架的动画模块在 Origami 上的应用和实践。"
                to="/docs/motion/intro"
                icon={<MotionSvg />}
              />
              <Card
                title="键盘快捷键"
                description="提供了常用功能的快捷键。 熟记模块的的快捷方式能很大程度的提高效率。"
                to="/docs/shortcuts"
                icon={<KeyboardSvg />}
              />
            </Section>
          </Section>
        </div>
      </div>
    </Layout>
  );
}
