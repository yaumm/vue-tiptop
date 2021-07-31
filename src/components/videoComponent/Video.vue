<template>
  <node-view-wrapper>
    <!-- <iframe :src="node.attrs.src" frameborder="0"></iframe> -->
    <video
      :src="node.attrs.src"
      controls="controls"
      x5-playsinline=""
      webkit-playsinline="true"
      x-webkit-airplay="true"
      playsinline="true"
      :width="node.attrs.width"
      :height="node.attrs.height"
    >
    </video>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-2';

export default {
  components: {
    NodeViewWrapper,
  },
  props: nodeViewProps,
  methods: {
  },
};
</script>

<style lang="less" scoped>

</style>
