import hljs from 'highlight.js/lib/highlight' // 引入highlight.js

// import 'highlight.js/styles/googlecode.css'
import 'highlight.js/styles/arduino-light.css' // 引入样式

/**
 * 引入语言包
 */
import javascript from 'highlight.js/lib/languages/javascript'
import cpp from 'highlight.js/lib/languages/cpp'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import markdown from 'highlight.js/lib/languages/markdown'
import ini from 'highlight.js/lib/languages/ini'
import java from 'highlight.js/lib/languages/java'
import less from 'highlight.js/lib/languages/less'
import nginx from 'highlight.js/lib/languages/nginx'
import php from 'highlight.js/lib/languages/php'
import powershell from 'highlight.js/lib/languages/powershell'
import python from 'highlight.js/lib/languages/python'
import scss from 'highlight.js/lib/languages/scss'
import shell from 'highlight.js/lib/languages/shell'
import sql from 'highlight.js/lib/languages/sql'
import yaml from 'highlight.js/lib/languages/yaml'
import typescript from 'highlight.js/lib/languages/typescript'
import json from 'highlight.js/lib/languages/json'

/**
 * Registe code language
 * We can set abbreviation or alias of code language(such as language 'javascript' and 'js' will also realize the syntax highlighting of JavaScript).
 * 注册语言包
 * 我们可以设置代码语言的缩写名或别名
 */
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript) // Abbreviation
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('ini', ini)
hljs.registerLanguage('java', java)
hljs.registerLanguage('less', less)
hljs.registerLanguage('nginx', nginx)
hljs.registerLanguage('php', php)
hljs.registerLanguage('powershell', powershell)
hljs.registerLanguage('python', python)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript) // Abbreviation
hljs.registerLanguage('json', json)

hljs.highlightCode = function () { // 自定义highlightCode方法，将只执行一次的逻辑去掉
  let blocks = document.querySelectorAll('pre code');
  [].forEach.call(blocks, hljs.highlightBlock)
}

export default hljs
