---
sidebar_position: 0
---

# Getting Started 开始

使用 Origami Studio 的介绍。

---

Welcome to Origami. We’ll be building a simple prototype, and by doing so learn the fundamentals of using Origami as well as importing from design tools such as Sketch. Follow along by downloading the files that accompany this tutorial.

## Copying from Sketch

Importing from design tools like Sketch is as simple as copying and pasting. First off, make sure you have the Sketch file from our lessons file open. Next, select the Photo layer (a landscape image of the Golden Gate Bridge) and Info Group (which contains a few text layers, an image, and a gradient). Copy those layers by going to Edit > Copy or using the keyboard shotcut ⌘C. In a new Origami prototype, navigate to Edit > Paste ⌘V.

![With our Sketch layers already on the macOS Clipboard.](https://origami.design/public/images/tutorials/getting-started/origami-paste.png)With our Sketch layers already on the macOS Clipboard.

## Copying from Figma

First make sure you have the [Origami Pasteboard](https://www.figma.com/community/plugin/832268423801619787/Origami-Pasteboard) installed from the Figma plugin community. Import the .fig lesson file by dragging and dropping into Figma then open the file in Figma. Open the Origami Figma plugin from the Plugins menu then select the Photo layer (a landscape image of the Golden Gate Bridge) and Info Group (which contains a few text layers, an image, and a gradient). Click Copy Selected Layers from the Origami plugin. In a new Origami prototype, navigate to Edit > Paste or use the keyboard shortcut ⌘V.

![Copying from Figma.](https://origami.design/public/images/tutorials/getting-started/copying-from-figma.png)Copying from Figma.

## Origami Studio interface

On the left side of the screen is the Layer List, where we see the layers from the Canvas. To the right of that is the Viewer; where we see and interact with our prototype. On the right hand side is the Inspector which lists the properties of the currently-selected layer. The middle area is split between the Canvas on the top and the Patch Editor on the bottom.

![The Origami Studio interface.](https://origami.design/public/images/tutorials/getting-started/origami-interface.png)The Origami Studio interface.

## Organizing our layers

After pasting in from Sketch or Figma, you may have noticed that our layers got misaligned slightly. Let’s fix that by selecting the Photo Layer and Info Group and dragging to the left until those layers are centered.

![Change the Anchor by clicking on the desired point, or by clicking and dragging to the desired point.](https://origami.design/public/images/tutorials/getting-started/anchor.png)Change the Anchor by clicking on the desired point, or by clicking and dragging to the desired point.

## Adding interaction

The first thing we want to do is add interaction to the Photo layer. To add interaction to a layer, hover over the layer in the Layers panel, click the circle icon, and then click Tap.

![img](https://origami.design/public/images/tutorials/getting-started/touch-menu-tap.png)

You’ll notice that this adds an [Interaction](https://origami.design/documentation/patches/builtin.layer.interaction.html) patch to our Patch Editor. We’ll cover patches in detail a little bit later on, but for now, keep an eye on the Down and Tap outputs whilst tapping on Photo in the Viewer. Both of these outputs flash corresponding to when Photo is pressed Down, and when released, which equals a Tap.

![The first two outputs, Down and Tap, should flash when Photo is tapped.](https://origami.design/public/images/tutorials/getting-started/interaction-patch.png)The first two outputs, Down and Tap, should flash when Photo is tapped.

### Transitioning values

We want this to transition between two values of Scale. A Scale of `1` and a Scale of whatever fits in screen, which is about `0.38`. The next patch we want to add is a [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch, since we are transitioning between two values. Add this patch by double-clicking on the Patch Editor ⌘⏎, beginning to type ‘transition’, followed by Return ⏎.

![img](https://origami.design/public/images/tutorials/getting-started/transition-patch.png)

Make the Start input on the [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch equal `0.38` by typing `0.38` into the Start input field. Change the End input value to `1`, since we know that’s the Scale we want Photo to end at.

![Start input should be `0.38` and End input should be `1`.](https://origami.design/public/images/tutorials/getting-started/transition-patch-values.png)Start input should be `0.38` and End input should be `1`.

### Connecting patches

Connect the Down output of our purple [Interaction](https://origami.design/documentation/patches/builtin.layer.interaction.html) patch to the Progress input of the [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch. Do this by clicking and dragging from the Down output into the Progress input of the [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch.

![Be sure you are connecting from the Down output.](https://origami.design/public/images/tutorials/getting-started/interaction-transition-connection.png)Be sure you are connecting from the Down output.

### Connecting patches to layer properties

We need to connect the [Transition](https://origami.design/documentation/patches/builtin.transition.html) output to the Photo layer’s Scale property. Like we did with connecting Down to Progress, we can make connections from patches to layer properties.

Click and drag on the [Transition](https://origami.design/documentation/patches/builtin.transition.html) output and connect it to the Scale property of Photo in the Inspector panel. You should now see that pressing Down on Photo causes the [Transition](https://origami.design/documentation/patches/builtin.transition.html) to occur instantly between `0.38` and `1`.

![img](https://origami.design/public/images/tutorials/getting-started/layer-property-connection.png)

## Adding animation

The next thing we want to do is add [animation](https://origami.design/documentation/basics/Animations.html). Double-click on the Patch Editor ⌘⏎ and begin to type ‘animation’. Press Return ⏎ when [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) appears.

Insert the [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) patch between the two existing patches by connecting the Down output of the [Interaction](https://origami.design/documentation/patches/builtin.layer.interaction.html) patch to the Number input of the [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) patch, and then the Progress output of the [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) patch to the Progress input of the [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch.

![img](https://origami.design/public/images/tutorials/getting-started/adding-animation.png)

### Left-to-right flow

You might start to see that everything in the Patch Editor flows from left to right. Now when I tap and hold Down on Photo, this [Transition](https://origami.design/documentation/patches/builtin.transition.html) is eased — or animated.

## Tap states

We would like this [Transition](https://origami.design/documentation/patches/builtin.transition.html) to occur when we tap on Photo, not just when we press Down. Try connecting the Tap output of the [Interaction](https://origami.design/documentation/patches/builtin.layer.interaction.html) patch to the Number input of the [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) patch.

![Creating a new connection to an input will replace an older one.](https://origami.design/public/images/tutorials/getting-started/interaction-down-tap.png)Creating a new connection to an input will replace an older one.

You might see that it is triggering but not holding that state. That is because a Tap only lasts for one frame, and triggers when you release your finger.

### Switching states

We need to add a [Switch](https://origami.design/documentation/patches/builtin.switch.html) patch to our Patch Editor. Double-click on the Patch Editor ⌘⏎ and begin to type ‘switch’. Press Return ⏎ when [Switch](https://origami.design/documentation/patches/builtin.switch.html) appears.

Like we did with the [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html), insert this patch between the [Interaction](https://origami.design/documentation/patches/builtin.layer.interaction.html) patch and [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) patch. Connect the Tap output of the [Interaction](https://origami.design/documentation/patches/builtin.layer.interaction.html) patch into the Flip input of our [Switch](https://origami.design/documentation/patches/builtin.switch.html) patch. Finally, connect the output of the [Switch](https://origami.design/documentation/patches/builtin.switch.html) patch into the Number input of our [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) patch.

![img](https://origami.design/public/images/tutorials/getting-started/interaction-switch-animation.png)

Now a Tap will trigger a Flip on the [Switch](https://origami.design/documentation/patches/builtin.switch.html) patch, which is sent onwards to the [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html), and then to the [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch. That value will remain until we Flip the [Switch](https://origami.design/documentation/patches/builtin.switch.html) back by tapping on Photo.

## Multiple transitions

[Interaction](https://origami.design/documentation/patches/builtin.layer.interaction.html), [Switch](https://origami.design/documentation/patches/builtin.switch.html), [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html), and [Transition](https://origami.design/documentation/patches/builtin.transition.html) make up the bulk of your prototyping in Origami. Mostly because they can be re-used and extended upon for other interactions.

We know that we want our [Text](https://origami.design/documentation/patches/builtin.layer.text.html) layers to hide and show, as well as the background [Color Fill](https://origami.design/documentation/patches/builtin.layer.fill.html) to change colors. All of this should be happening within the same physical interaction to our Photo changing in Scale.

Double-click on the Patch Editor ⌘⏎ and begin to type ‘transition’. Press Return ⏎ when [Transition](https://origami.design/documentation/patches/builtin.transition.html) appears. Connect the existing output of the [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) patch into the Progress input of this new [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch.

Finish by clicking and dragging from the output of the new [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch to the Layer Inspector of the Info [Group](https://origami.design/documentation/patches/builtin.layer.layer.html), and connecting to the Opacity property.

![You can also drag to the layer name in the Layers panel. The layer will expand to show its properties.](https://origami.design/public/images/tutorials/getting-started/transition-opacity.png)You can also drag to the layer name in the Layers panel. The layer will expand to show its properties.

We want our Info to start at an Opacity of `0` and end at on Opacity of `1`, so we don’t need to make any changes to the default inputs of this [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch.

![Your patches and their values should looks similar to this.](https://origami.design/public/images/tutorials/getting-started/transitions.png)Your patches and their values should looks similar to this.

### Changing transition type

Lastly, add one more [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch to the Patch Editor. Right-click or Control-click ⌃ this [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch and change the Type to Color in the drop-down menu.

![img](https://origami.design/public/images/tutorials/getting-started/transition-color.png)

We want the starting fill color to be white, and the end to be black. Like before, connect the output of the [Pop Animation](https://origami.design/documentation/patches/builtin.bouncy.html) Progress into the Progress input of the new [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch.

![img](https://origami.design/public/images/tutorials/getting-started/transition-types.png)

Finally, connect the output of our [Transition](https://origami.design/documentation/patches/builtin.transition.html) patch to the Color property of the Artboard layer.

![You can also drag to the layer name in the Layers panel. The layer will expand to show its properties.](https://origami.design/public/images/tutorials/getting-started/transition-color-connection.png)You can also drag to the layer name in the Layers panel. The layer will expand to show its properties.

Now when we interact with the prototype, the [Color Fill](https://origami.design/documentation/patches/builtin.layer.fill.html) layer transitions from a white fill color when Photo is scaled down (zoomed out), to a black fill color when Photo is scaled up (zoomed in).
