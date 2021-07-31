<template>
  <div id="material">
    <!-- 素材库弹窗 -->
    <el-dialog :visible="show" width="820px" :lock-scroll="true" :before-close="close"
               :modal-append-to-body="true" :append-to-body="false" custom-class="material-dialog"
    >
      <iframe v-if="show" class="material-iframe" :src="link + queryString" name="material" frameborder="0"></iframe>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      resolve: () => {},
      link: '',
      queryString: '',
      imageURL: '',
      videoURL: '',
      closeMask: true,
    };
  },
  watch: {
    show(newVal) {
      const option = newVal ? '' : 'remove';
      this.listenerMsg(option);
    },
  },
  mounted() {
    // this.listenerMsg()
  },
  beforeDestroy() {
    // this.listenerMsg('remove')
  },
  methods: {
    // 监听/移除消息
    listenerMsg(option) {
      if (option === 'remove') {
        // console.log('material.移除监听')
        window.removeEventListener('message', this.parseMsg);
      } else {
        // console.log('material.监听消息')
        window.addEventListener('message', this.parseMsg);
      }
    },
    // 获取素材库URL
    // eslint-disable-next-line consistent-return
    async getMaterialURL() {
      // const { code, data } = await this.$api.getMaterialLibrary();
      // if (code !== 0) { return false; }
      this.imageURL = 'https://suc.deeptel.com.cn/html/image/index.html#/?showHeader=1&showFooter=1&selectType=10&fileName=1';
      this.videoURL = 'https://suc.deeptel.com.cn/html/upload/index.html#/?showHeader=1&showFooter=1&isRadio=0';
    },
    // 解析参数
    parseOptions(options) {
      this.queryString = '';
      // eslint-disable-next-line no-param-reassign
      if (typeof options === 'string') { options = { type: options }; }
      // eslint-disable-next-line no-param-reassign
      if (options.type === 'video') { options.type = 'upload'; }
      // eslint-disable-next-line no-param-reassign
      options.select = options.select || 0;

      // 默认参数
      const params = { showHeader: 1, showFooter: 1 };
      // 图片素材库参数
      if (options.type === 'image') {
        this.link = this.imageURL;
        params.selectType = options.select;
        params.fileName = 1;
      }
      // 视频素材库参数
      if (options.type === 'upload') {
        this.link = this.videoURL;
        params.isRadio = options.select;
      }

      if (options.closeMask === false) {
        this.closeMask = false;
      }

      // 把参数转为String类型
      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (const key in params) { this.queryString += `${key}=${params[key]}&`; }
      this.queryString = `?${this.queryString.slice(0, this.queryString.length - 1)}`;
      console.log('素材库参数: ', params);
    },
    // 解析消息
    // eslint-disable-next-line consistent-return
    parseMsg(msg) {
      const data = msg.data || '';
      const msgReg = /go_back()|image\(.*\)|video\(.*\)/;
      if (!msgReg.test(data)) { return false; }
      // eslint-disable-next-line no-eval
      eval(`this.${data}`);
    },
    // 素材库点击返回
    go_back() { this.close(); },
    // 关闭
    close() {
      this.show = false;
      this.resolve = null;
      if (this.closeMask) {
        window.top.postMessage('closeMask()', '*');
      }
    },
    // 图片
    image(id, url, name) {
      let result = id;
      // 单选时也包装成数组, 保持返回结果的一致性
      if (!Array.isArray(id)) { result = [{ id, url, name }]; }
      this.resolve(result);
      this.close();
    },
    video(data) {
      this.resolve(data);
      this.close();
    },

    // 等待执行成功
    async waitSuccess() {
      return new Promise((resolve) => { this.resolve = resolve; });
    },
  },
};
</script>

<style lang="less">
#material {
  z-index: 10001;
  position: relative;
  .material-dialog {
    height: 620px;
    .el-dialog__body {
      height: 100%;
      width: 100%;
      padding: 0px;
    }
    .material-iframe {
      height: 100%;
      width: 100%;
    }
    .el-dialog__header {
      padding: 0px;
    }

    .el-icon-close:before {
      color: transparent;
    }
  }
}
</style>
