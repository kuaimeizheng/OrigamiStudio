---
sidebar_position: 20
tags: [data]
---

# Separate & Round

1、可以设置 超过三位的分隔符，比如1,000元

2、可以设置保留小数点后多少位，比如5.1234 ，设置为 5.12

<div className="patch-container">
    <div className="patch processor">
        <h3>Separate & Round</h3>
        <ul className="inputs">
            <li>Separate <span className="checkbox-off"></span></li>
            <li>Separator <span>,</span></li>
            <li>Number <span>5.123</span></li>
            <li>Decimal Places <span>2</span></li>
        </ul>
        <ul className="outputs">
            <li>Output <span>5.12</span></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Separate 分隔

一个布尔值，表示是否启用。

#### Separator 分隔符号

字符串类型， 可以自定义分隔符号。

#### Number 数值

需要格式化的数值。

#### Decimal Places 小数点位

分隔符号后面保留多少位。

</div>
<div className="outputs">

### Output 输出

#### Output 

被格式化后的数值。

</div>
</div>


------
