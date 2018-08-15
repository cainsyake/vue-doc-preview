<template>
  <div id="app" style="height: 100%">
    <Layout>
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <div style="height: 64px; line-height: 64px; color: white; text-align: center; font-size: 20px;">Vue-Doc-Preview</div>
        <Menu active-name="type" theme="dark" width="auto" @on-select="changeMenu" :class="menuitemClasses" >
          <MenuItem name="type">
            <span>type</span>
          </MenuItem>
          <MenuItem name="url">
            <span>url</span>
          </MenuItem>
          <MenuItem name="height">
            <span>height</span>
          </MenuItem>
          <MenuItem name="mdStyle">
            <span>mdStyle</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
          <h1>Test Environment</h1>
        </Header>
        <Content :style="{padding: '0 16px 16px', 'min-height': '1000px'}">
          <div style="margin: 16px 0">
            <div v-if="currentView === 'type' || currentView === 'url'">
              <Button type="primary" @click="changeType('markdown')" style="margin-right: 6px">markdown</Button>
              <Button type="primary" @click="changeType('office')" style="margin-right: 6px">office</Button>
              <Button type="primary" @click="changeType('code')" style="margin-right: 6px">code</Button>
              <Button type="primary" @click="changeType('text')" style="margin-right: 6px">text</Button>
            </div>
            <div v-else-if="currentView === 'height'">
              <h3>Set Component Height</h3>
              <Slider v-model="height"></Slider>
            </div>
            <div v-else-if="currentView === 'mdStyle'">
              <pre>
                Custom Markdown View Style
                customMdStyle: {
                  pre: {
                    'background-color': 'rgb(187, 255, 255)',
                  },
                  code: {
                    'background-color': 'rgb(187, 255, 255)',
                    'line-height': '30px'
                  }
                }
              </pre>
            </div>
          </div>
          <Card>
            <VueDocPreview :type="type" :value="value" :url="url" :height="height" :mdStyle="mdStyle" :textStyle="textStyle" language="javascript" ></VueDocPreview>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import VueDocPreview from '../src/index'
export default {
  name: 'test',
  components: {
    VueDocPreview
  },
  data: function () {
    return {
      isCollapsed: false,
      currentView: 'type',
      mdStyle: null,
      textStyle: null,
      customMdStyle: {
        pre: {
          'background-color': 'rgb(187, 255, 255)'
        },
        code: {
          'background-color': 'rgb(187, 255, 255)',
          'line-height': '30px'
        }
      },
      height: 70,
      type: 'office',
      mdUrl: 'http://static-1252421604.cosgz.myqcloud.com/test/README-CN.md',
      textUrl: 'http://static-1252421604.cosgz.myqcloud.com/test/%E6%95%B0%E5%AD%A6.txt',
      codeUrl: 'http://static-1252421604.cosgz.myqcloud.com/test/index.js',
      officeUrl: 'http%3a%2f%2fvideo.ch9.ms%2fbuild%2f2011%2fslides%2fTOOL-532T_Sutter.pptx',
      url: 'http://ic-1252421604.cosgz.myqcloud.com/admin/%E6%B5%8B%E8%AF%95%E4%B8%8A%E4%BC%A0/2%E7%BA%A7%E6%96%87%E4%BB%B6%E5%A4%B9/README.md?sign=YoQARwI0oYQgFYNcSFn6ivaKwRJhPTEyNTI0MjE2MDQmaz1BS0lEQ0tYcTlUcGRMM2UzTFZtRjdvTmwxOVRzU3EzN2FxVE4mZT0xNTM2ODA1MzI0JnQ9MTUzNDIxMzMyNCZyPTk1NjI3MDE4NiZmPS9hZG1pbi8lRTYlQjUlOEIlRTglQUYlOTUlRTQlQjglOEElRTQlQkMlQTAvMiVFNyVCQSVBNyVFNiU5NiU4NyVFNCVCQiVCNiVFNSVBNCVCOS9SRUFETUUubWQmYj1pYw==',
      value: 'newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx',
      officeString: 'newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx',
      mdString: '# Marked\n **success**\n```javascript\nconst a = 10\nfunction () {\n  console.log(a)\n}```',
      textString: '排列数A(n, m) = n! / (n-m)!\n组合数C(n, m) = A(n, m) / m!',
      codeString: 'import Marked from \'marked\'\n' +
      'import HLJS from \'../lib/highlight\'\n' +
      '  watch: {\n' +
      '    value: function (val) {\n' +
      '      this.updateContent(val)\n' +
      '    }\n' +
      '  },\n' +
      '  mounted: function () {\n' +
      '    this.updateContent(this.value)\n' +
      '  },\n' +
      'updateContent: function (val) {\n' +
      '      if (val) {\n' +
      '        const parseMarked = Marked(val)\n' +
      '        this.content = parseMarked\n' +
      '        let self = this\n' +
      '        this.$nextTick(() => {\n' +
      '          self.parseHtml()\n' +
      '          console.log(\'Hello VueDocPreview\')\n' +
      '        })\n' +
      '      }\n' +
      '    }'
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  watch: {
    height: function () {
      this.type = 'markdown'
      let self = this
      this.$nextTick(function () {
        self.type = 'office'
      })
    }
  },
  methods: {
    changeMenu: function (name) {
      this.currentView = name
      this.mdStyle = {}
      if (name === 'url') {
        this.value = ''
        this.url = this.officeUrl
      } else if (name === 'height') {
        this.value = this.officeString
        this.type = 'office'
      } else if (name === 'mdStyle') {
        this.type = 'markdown'
        this.value = this.mdString
        this.mdStyle = this.customMdStyle
        this.textStyle = {'font-size': '22px'}
      }
    },
    changeType: function (type) {
      this.type = type
      let tempValue = ''
      let tempUrl = ''
      if (type === 'markdown') {
        tempValue = this.mdString
        tempUrl = this.mdUrl
      } else if (type === 'office') {
        tempValue = this.officeString
        tempUrl = this.officeUrl
      } else if (type === 'code') {
        tempValue = this.codeString
        tempUrl = this.codeUrl
      } else if (type === 'text') {
        tempValue = this.textString
        tempUrl = this.textUrl
      }
      if (this.currentView === 'type') {
        this.value = tempValue
      } else if (this.currentView === 'url') {
        this.url = tempUrl
      }
    }
  }
}
</script>

<style scoped>

</style>
