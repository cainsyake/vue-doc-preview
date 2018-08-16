<script>
import {objectDeepMerge, objectStyleToStringStyle} from '../lib/util'
export default {
  name: 'TextPreview',
  props: {
    value: {
      type: String,
      default: ' '
    },
    textStyle: {
      type: Object
    }
  },
  data: function () {
    return {
      refId: `textPreview${new Date().getTime() + Math.random()}`,
      defaultStyle: {
        'font-size': '18px'
      }
    }
  },
  mounted: function () {
    this.setStyle()
  },
  methods: {
    setStyle: function () {
      let styleObject = this.textStyle ? objectDeepMerge(this.defaultStyle, this.textStyle) : this.defaultStyle
      let el = this.$refs[this.refId]
      let pre = el.getElementsByTagName('pre')[0]
      pre.style.cssText = objectStyleToStringStyle(styleObject)
    }
  },
  render: function (h) {
    return (
      <div
        class="content"
        ref={this.refId}>
        <pre>{this.value}</pre>
      </div>
    )
  }
}
</script>
