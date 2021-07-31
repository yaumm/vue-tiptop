<template>
  <div>
    <template v-for="(item, index) in items">
      <div class="divider" v-if="item.type === 'divider'" :key="index" />
      <MenuItem v-else :key="index" v-bind="item" />
    </template>

    <!-- <Material :shows="show" :url="url" @close="show = false" @callBack="callBack"/> -->
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
// import Material from '../Material.vue';

export default {
  components: {
    MenuItem,
    // Material,
  },

  props: {
    editor: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      show: false,
      videoShow: false,
      url: '',
      items: [
        {
          icon: 'bold',
          title: '粗体',
          action: () => this.editor.chain().focus().toggleBold().run(),
          isActive: () => this.editor.isActive('bold'),
        },
        {
          icon: 'italic',
          title: '斜体',
          action: () => this.editor.chain().focus().toggleItalic().run(),
          isActive: () => this.editor.isActive('italic'),
        },
        {
          icon: 'strikethrough',
          title: '删除线',
          action: () => this.editor.chain().focus().toggleStrike().run(),
          isActive: () => this.editor.isActive('strike'),
        },
        {
          icon: 'code-view',
          title: '代码片段',
          action: () => this.editor.chain().focus().toggleCode().run(),
          isActive: () => this.editor.isActive('code'),
        },
        {
          icon: 'mark-pen-line',
          title: '高亮',
          action: () => this.editor.chain().focus().toggleHighlight().run(),
          isActive: () => this.editor.isActive('highlight'),
        },
        {
          type: 'divider',
        },
        {
          icon: 'h-1',
          title: '标题1',
          action: () => this.editor.chain().focus().toggleHeading({ level: 1 }).run(),
          isActive: () => this.editor.isActive('heading', { level: 1 }),
        },
        {
          icon: 'h-2',
          title: '标题2',
          action: () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
          isActive: () => this.editor.isActive('heading', { level: 2 }),
        },
        {
          icon: 'paragraph',
          title: '段落',
          action: () => this.editor.chain().focus().setParagraph().run(),
          isActive: () => this.editor.isActive('paragraph'),
        },
        {
          icon: 'list-unordered',
          title: '无序列表',
          action: () => this.editor.chain().focus().toggleBulletList().run(),
          isActive: () => this.editor.isActive('bulletList'),
        },
        {
          icon: 'list-ordered',
          title: '有序列表',
          action: () => this.editor.chain().focus().toggleOrderedList().run(),
          isActive: () => this.editor.isActive('orderedList'),
        },
        {
          icon: 'list-check-2',
          title: '任务列表',
          action: () => this.editor.chain().focus().toggleTaskList().run(),
          isActive: () => this.editor.isActive('taskList'),
        },
        {
          icon: 'code-box-line',
          title: '代码块',
          action: () => this.editor.chain().focus().toggleCodeBlock().run(),
          isActive: () => this.editor.isActive('codeBlock'),
        },
        {
          type: 'divider',
        },
        {
          icon: 'double-quotes-l',
          title: '引用',
          action: () => this.editor.chain().focus().toggleBlockquote().run(),
          isActive: () => this.editor.isActive('blockquote'),
        },
        {
          icon: 'separator',
          title: '水平线',
          action: () => this.editor.chain().focus().setHorizontalRule().run(),
        },
        {
          type: 'divider',
        },
        {
          icon: 'image-line',
          title: '图片',
          action: async () => {
            const [{ url }] = await this.$material('image');
            console.log('image-data', url);
            this.editor.chain().focus().setImage({ src: url }, true).run();
          },
        }, {
          icon: 'video-chat-line',
          title: '视频',
          action: async () => {
            const [{ videoURL }] = await this.$material('video');
            console.log('video-data', videoURL);
            // vue 组件
            const video = `<video src="${videoURL}" width="500" height="300"></video>`;
            this.editor.chain().focus().insertContent(video, false).run();
          },
        },
        {
          icon: 'text-wrap',
          title: '手动换行',
          action: () => this.editor.chain().focus().setHardBreak().run(),
        },
        {
          icon: 'format-clear',
          title: '清空格式',
          action: () => this.editor.chain()
            .focus()
            .clearNodes()
            .unsetAllMarks()
            .run(),
        },
        {
          type: 'divider',
        },
        {
          icon: 'arrow-go-back-line',
          title: '撤销',
          action: () => this.editor.chain().focus().undo().run(),
        },
        {
          icon: 'arrow-go-forward-line',
          title: '重做',
          action: () => this.editor.chain().focus().redo().run(),
        },
      ],
    };
  },
  methods: {
    callBack(cb) {
      console.log(cb);
      const { url } = cb[0];
      this.editor.chain().focus().setImage({ src: url }, true).run();
    },
  },
};
</script>

<style lang="less" scoped>
.divider {
  display: none;
}
</style>
