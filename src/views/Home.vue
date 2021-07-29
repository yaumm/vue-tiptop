<template>
  <div class="home">
    <Tiptap v-model="ctx"/>
    <button @click="ctx = '<p>hahahahha2222</p>'">按钮</button>
  </div>
</template>

<script>
import Tiptap from '../components/Tiptap.vue';

export default {
  name: 'Home',
  data() {
    return {
      ctx: '<p>hahahahha</p>',
    };
  },
  components: {
    Tiptap,
  },
};
</script>
