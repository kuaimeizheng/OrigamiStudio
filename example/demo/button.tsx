import React from 'react';
import Button from '../index';
import './index.less';

const ButtonDemo: React.FC = () => {
  return (
    <div className="list">
      <div className="item">
        <Button type="primary">主要按钮</Button>
      </div>
      <div className="item">
        <Button type="subtle">非强调按钮</Button>
      </div>
      <div className="item">
        <Button type="ghost">次要按钮</Button>
      </div>
      <div className="item">
        <Button type="dashed">虚线按钮</Button>
      </div>
      <div className="item">
        <Button type="text">文字按钮</Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
