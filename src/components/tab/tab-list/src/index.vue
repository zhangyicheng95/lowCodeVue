<template>
  <div class="datav-wrapper" :style="wrapperStyle">
    <div :style="titleStyle">123123123</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, computed, toRef, ref } from "vue";
import type { CSSProperties } from "vue";
import { TabList } from "./tab-list";

export default defineComponent({
  name: "VTabList",
  props: {
    com: {
      type: Object as PropType<TabList>,
      required: true,
    },
  },
  setup(props) {
    const config = toRef(props.com, "config");
    const attr = toRef(props.com, "attr");

    const isEnter = ref(false);

    const wrapperStyle = computed(() => {
      return {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
      };
    });
    const titleStyle = computed(() => {
      const style = {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
        "font-family": `${config.value.textStyle.fontFamily}, Arial, sans-serif`,
        "font-size": `${config.value.textStyle.fontSize}px`,
        "font-weight": config.value.textStyle.fontWeight,
        "justify-content": config.value.textAlign,
        "writing-mode": config.value.writingMode,
        "letter-spacing": `${config.value.letterSpacing}px`,
        color: config.value.textStyle.color,
        "background-color": "initial",
        border: "none",
        "border-radius": "0px",
        transform: "translateZ(0px)",
        display: "flex",
        "align-items": "start",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
        overflow: "hidden",
      };

      if (config.value.backgroundStyle.show) {
        const bgs = config.value.backgroundStyle;
        style["background-color"] = bgs.bgColor;
        style.border = `${bgs.borderWidth}px ${bgs.borderStyle} ${bgs.borderColor}`;
        style["border-radius"] = `${bgs.borderRadius}px`;
      }

      return style as CSSProperties;
    });

    return {
      wrapperStyle,
      titleStyle,
      isEnter,
    };
  },
});
</script>

<style scoped>
.datav-wrapper {
  color: #eee;
}
</style>