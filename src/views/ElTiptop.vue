<template>
  <div class="editor" v-if="editor">
    <MenuBar class="editor__header" :editor="editor" />
    <EditorContent class="editor__content" :editor="editor" />
  </div>
</template>

<script>

import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import MenuBar from '../components/menu/MenuBar.vue';
import Video from '../components/videoComponent';

export default {
  name: 'ElTiptop',
  components: {
    EditorContent,
    MenuBar,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Highlight,
        TaskList,
        TaskItem,
        Image,
        Video,
      ],
    });
  },
};
</script>

<style lang="less" scoped>
.editor {
  &__header {
    border: 1px solid gray;
    margin-bottom: 10px;
  }
  &__content {
    // margin-top: 10px;
    border: 1px solid gray;
    height: 400px;
    padding: 20px;
    overflow: auto;
    /deep/.ProseMirror {
      height: 100%;

      margin: 0;
      &>p {
        margin: 0;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
