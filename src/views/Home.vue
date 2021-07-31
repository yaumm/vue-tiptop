<template>
  <div class="home">
    <Tiptap v-model="ctx"/>
    <button @click="ctx = `<vue-component count='0'></vue-component>`">按钮</button>
  </div>
</template>

<script>
import Tiptap from '../components/Tiptap.vue';

export default {
  name: 'Home',
  data() {
    return {
      ctx: '<video src="https://maint.deeptel.com.cn/upload/matel/202107/video/1626336826810_PHo5lihUx.mp4"></video>',
    };
  },
  components: {
    Tiptap,
  },
};
</script>
