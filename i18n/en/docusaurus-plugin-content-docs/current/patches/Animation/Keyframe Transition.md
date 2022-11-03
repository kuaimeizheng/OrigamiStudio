---
title: Keyframe Transition
sidebar_position: 20
tags: [animation]
---

# Keyframe Transition

---

<div className="patch-container">
    <div className="patch processor">
        <h3>Keyframe Transition</h3>
        <ul className="inputs">
            <li>Progress<span>0</span></li>
            <li>Values<span>[...]</span></li>
            <li>Use Keyframe Times<span className="checkbox-off"></span></li>
            <li>Key Times<span>[...]</span></li>
            <li>Easing<span>Linear</span></li>
            <li>Use Custom Easing<span className="checkbox-off"></span></li>
            <li>Easings<span>[...]</span></li>
        </ul>
        <ul className="outputs">
            <li>Output<span>0</span></li>
            <li>Even<span></span></li>
            <li>Key<span></span></li>
        </ul>
    </div>
</div>

<div className="port-descriptions">
<div className="inputs">

### Input 输入

#### Progress 进度

Percentage of transition

#### Values

A JSON array of key values

#### Use Keyframe Times

Boolean, turn on to align key values to specific times; turn off \ to distribute each key value evenly over time.

#### Key Times

A JSON array mapping key values to time they should occur (where time is defined by the 0-1 progress value)

#### Easing

Default easing curve to use between every pair of key values

#### Use Custom Easing

Boolean, enable to set custom easing curves for each pair of keyframes

#### Easings

A JSON array of easing curves, using their enum values of 0-11. See the Easing pop up to figure out the proper enum value.

</div>
<div className="outputs">

### Output 输出

#### Output

#### Even

#### Key

</div>
</div>



------
