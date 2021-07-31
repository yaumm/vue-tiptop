<template>
  <div>
    <div v-if="editor">
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        加粗
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        斜体
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        中划线
      </button>
      <button @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
        代码
      </button>
      <button @click="editor.chain().focus().unsetAllMarks().run()">
        清除样式
      </button>
      <button @click="editor.chain().focus().clearNodes().run()">
        清除节点
      </button>
      <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        段落
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        h1
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        h2
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        h3
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
        h4
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
        h5
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
        h6
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        无序列表
      </button>
      <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        数字列表
      </button>
      <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
        代码块
      </button>
      <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
        段落
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        水平线
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        换行
      </button>
      <button @click="editor.chain().focus().undo().run()">
        撤销
      </button>
      <button @click="editor.chain().focus().redo().run()">
        重做
      </button>
    </div>
    <!-- 表格 -->
    <div v-if="editor">
      <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
        insertTable
      </button>
      <button @click="editor.chain().focus().addColumnBefore().run()" :disabled="!editor.can().addColumnBefore()">
        addColumnBefore
      </button>
      <button @click="editor.chain().focus().addColumnAfter().run()" :disabled="!editor.can().addColumnAfter()">
        addColumnAfter
      </button>
      <button @click="editor.chain().focus().deleteColumn().run()" :disabled="!editor.can().deleteColumn()">
        deleteColumn
      </button>
      <button @click="editor.chain().focus().addRowBefore().run()" :disabled="!editor.can().addRowBefore()">
        addRowBefore
      </button>
      <button @click="editor.chain().focus().addRowAfter().run()" :disabled="!editor.can().addRowAfter()">
        addRowAfter
      </button>
      <button @click="editor.chain().focus().deleteRow().run()" :disabled="!editor.can().deleteRow()">
        deleteRow
      </button>
      <button @click="editor.chain().focus().deleteTable().run()" :disabled="!editor.can().deleteTable()">
        deleteTable
      </button>
      <button @click="editor.chain().focus().mergeCells().run()" :disabled="!editor.can().mergeCells()">
        mergeCells
      </button>
      <button @click="editor.chain().focus().splitCell().run()" :disabled="!editor.can().splitCell()">
        splitCell
      </button>
      <button @click="editor.chain().focus().toggleHeaderColumn().run()" :disabled="!editor.can().toggleHeaderColumn()">
        toggleHeaderColumn
      </button>
      <button @click="editor.chain().focus().toggleHeaderRow().run()" :disabled="!editor.can().toggleHeaderRow()">
        toggleHeaderRow
      </button>
      <button @click="editor.chain().focus().toggleHeaderCell().run()" :disabled="!editor.can().toggleHeaderCell()">
        toggleHeaderCell
      </button>
      <button @click="editor.chain().focus().mergeOrSplit().run()" :disabled="!editor.can().mergeOrSplit()">
        mergeOrSplit
      </button>
      <button @click="editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()" :disabled="!editor.can().setCellAttribute('backgroundColor', '#FAF594')">
        setCellAttribute
      </button>
      <button @click="editor.chain().focus().fixTables().run()" :disabled="!editor.can().fixTables()">
        fixTables
      </button>
      <button @click="editor.chain().focus().goToNextCell().run()" :disabled="!editor.can().goToNextCell()">
        goToNextCell
      </button>
      <button @click="editor.chain().focus().goToPreviousCell().run()" :disabled="!editor.can().goToPreviousCell()">
        goToPreviousCell
      </button>
    </div>
    <!-- 添加图片 -->
    <div v-if="editor">
      <button @click="addImage">
        add image from URL
      </button>
    </div>
    <!-- 添加视频 -->
    <div>
      <button @click="addVideo">video</button>
    </div>
    <bubble-menu
      class="bubble-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
      v-if="editor"
    >
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        Bold
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        Italic
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        Strike
      </button>
    </bubble-menu>

    <floating-menu
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
      v-if="editor"
    >
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        H1
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        H2
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        Bullet List
      </button>
    </floating-menu>

    <editor-content class="editor_content" :editor="editor" />
    <button @click="getContent">getContent</button>
  </div>
</template>

<script>
import {
  Editor, EditorContent,
  BubbleMenu, FloatingMenu,
} from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import faker from 'faker';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';

import VueComponent from './videoComponent';

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      backgroundColor: {
        default: null,
        parseHTML: (element) => ({
          backgroundColor: element.getAttribute('data-background-color'),
        }),
        renderHTML: (attributes) => ({
          'data-background-color': attributes.backgroundColor,
          style: `background-color: ${attributes.backgroundColor}`,
        }),
      },
    };
  },
});

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
  },
  data() {
    return {
      editor: null,
    };
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  watch: {
    value(v) {
      const isSame = this.editor.getHTML() === v;
      if (isSame) return;

      this.editor.commands.setContent(this.value, false);
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        CustomTableCell,
        Image,
        Dropcursor,
        VueComponent,
      ],
      content: this.value,
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML());
      },
    });
  },
  methods: {
    addImage() {
      const imgSrc = faker.image.image();
      this.editor.chain().focus().setImage({ src: imgSrc }).run();
    },
    addVideo() {
      this.editor.chain().focus().insertContent("<iframe src='https://maint.deeptel.com.cn/upload/matel/202107/video/1626336826810_PHo5lihUx.mp4'></iframe>", false).run();
    },

    getContent() {
      console.log(this.editor.getHTML());
    },
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="less" scoped>
.is-active {
  background: pink;
}
/deep/.ProseMirror {
  padding: 0 10px;
  height: 200px;
  border: 2px solid black;
  border-radius: 10px;
  overflow: auto;
  &:focus {
    outline: none;
  }
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 10px 0;
  }
}

.bubble-menu {
  display: flex;
  background-color: #0D0D0D;
  padding: 5px;
  border-radius: 5px;

  button {
    border: none;
    background: none;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    padding: 0 5px;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}

.floating-menu {
  display: flex;
  background-color: #0D0D0D10;
  padding: 5px;
  border-radius: 6px;

  button {
    border: none;
    background: none;
    font-size: 16px;
    font-weight: 500;
    padding: 0 10px;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}

/deep/.ProseMirror {
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }
  }
}

.tableWrapper {
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>
