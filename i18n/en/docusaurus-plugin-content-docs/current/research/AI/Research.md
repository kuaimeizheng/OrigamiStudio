---
title: Baidu API Access Token
sidebar_position: 5
tag: [ai]
---

# Baidu API Access Token

百度 AI 平台的模块，可以自动申请百度 API 的 Access Token。

------

<div className="patch-container">
    <div className="patch processor">
        <h3>Baidu API Access Token</h3>
        <ul className="inputs">
            <li>源URL <span>https...</span></li>
            <li>请求URL路径 <span>/oauth...</span></li>
            <li>Request <span className="patch-pulse-preview"><span className="dot"></span></span></li>
        </ul>
        <ul className="outputs">
            <li>Access Token <span>...</span></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### 源 URL

#### 请求 URL 路径

#### Request 

一个脉冲信号，表示请求一个新的 Access Token。

</div>
<div className="outputs">

### Output 输出

#### Access Token

一个文本字符串，表示请求到的 Access Token，一般连接到 Network Request 的 URL 接口。

</div>
</div>

------