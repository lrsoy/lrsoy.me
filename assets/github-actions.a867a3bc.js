import{u as e,c as F,w as t,_ as c,o as p,a as s,k as l}from"./app.811cfd56.js";const r="/assets/github-actions.6e6e05c0.png",y="/assets/github-actions-new-wf.1366caad.png",i="/assets/github-actions-actions-env.9798a473.png",u="/assets/github-actions-new-token.4f4e0d80.png",C="/assets/github-actions-new-token-info.e8c48252.png",h=s("div",{class:"prose m-auto"},[s("p",null,[s("div",{class:"table-of-contents"},[s("ul",null,[s("li",null,[s("a",{href:"#\u521B\u5EFAactions-\u65B0\u5EFA\u5DE5\u4F5C\u6D41"},"\u521B\u5EFAActions - \u65B0\u5EFA\u5DE5\u4F5C\u6D41 ")]),s("li",null,[s("a",{href:"#set-up-a-workflow-yourself"},"set up a workflow yourself ")])])])]),s("h2",{id:"\u521B\u5EFAactions-\u65B0\u5EFA\u5DE5\u4F5C\u6D41",tabindex:"-1"},[l("\u521B\u5EFAActions - \u65B0\u5EFA\u5DE5\u4F5C\u6D41 "),s("a",{class:"header-anchor",href:"#\u521B\u5EFAactions-\u65B0\u5EFA\u5DE5\u4F5C\u6D41","aria-hidden":"true"},"#")]),s("ol",null,[s("li",null,[s("p",null,[l("\u8FDB\u5230github \u4ED3\u5E93\u91CC\u9762\uFF0C\u901A\u8FC7\u4ED3\u5E93\u7684tab\u9875\u627E\u5230Actions\u9009\u9879 "),s("img",{src:r,alt:""})])]),s("li",null,[s("p",null,[l("\u65B0\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u6D41\uFF0C\u5728\u5F53\u524D\u7684tab\u9875\u9762\u4E0A\u5DE6\u4FA7\uFF0C\u627E\u5230"),s("strong",null,"New workflow"),l("\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u6D41\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6CA1\u6709\u521B\u5EFA\u8FC7\u4EFB\u4F55\u5DE5\u4F5C\u6D41\u7684\u60C5\u51B5\u4E0B\uFF0Cactions\u4E0B\u9762\u662F\u7A7A\u7684")])]),s("li",null,[s("p",null,[l("\u70B9\u51FB\u540E\uFF0C\u91CC\u9762\u9ED8\u8BA4\u5B58\u5728\u4E86\u4E00\u4E9B\u5DF2\u7ECF\u521B\u5EFA\u597D\u7684\u5DE5\u4F5C\u6D41\uFF0C\u627E\u5230\u9700\u8981\u7684\u70B9\u51FB"),s("strong",null,"configure"),l("\uFF0C\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u63D0\u4F9B\u7684\u5DE5\u4F5C\u6D41\uFF0C\u53EF\u4EE5\u901A\u8FC7"),s("strong",null,"set up a workflow yourself"),l(" \u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u6D41\uFF0C\u81EA\u5DF1\u914D\u7F6E\u5DE5\u4F5C\u6D41\u4E2D\u7684\u5185\u5BB9 "),s("img",{src:y,alt:""})])])]),s("h2",{id:"set-up-a-workflow-yourself",tabindex:"-1"},[l("set up a workflow yourself "),s("a",{class:"header-anchor",href:"#set-up-a-workflow-yourself","aria-hidden":"true"},"#")]),s("pre",{class:"shiki",style:{"background-color":"#282A36"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"# This is a basic workflow to help you get started with Actions")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8BE9FD"}},"name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"CI"),s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#6272A4"}},"# \u4E3A\u4F60\u7684\u5DE5\u4F5C\u6D41\u8D77\u4E00\u4E2A\u540D\u5B57")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BD93F9"}},"on"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u5DE5\u4F5C\u6D41\u5728\u4EC0\u4E48\u65F6\u5019\u8FD0\u884C (\u5F53\u4EE3\u7801\u63A8\u9001\u6216\u8005\u62C9\u53D6) \u53EF\u8FDB\u884C\u914D\u7F6E")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#8BE9FD"}},"push"),s("span",{style:{color:"#FF79C6"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#8BE9FD"}},"branches"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," [ "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"master"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#8BE9FD"}},"pull_request"),s("span",{style:{color:"#FF79C6"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#8BE9FD"}},"branches"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," [ "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"master"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," ]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#6272A4"}},"# Allows you to run this workflow manually from the Actions tab")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#8BE9FD"}},"workflow_dispatch"),s("span",{style:{color:"#FF79C6"}},":")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8BE9FD"}},"jobs"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u5177\u4F53\u6267\u884C\u7684\u4EFB\u52A1")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#6272A4"}},'# This workflow contains a single job called "build"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#8BE9FD"}},"build"),s("span",{style:{color:"#FF79C6"}},":")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#8BE9FD"}},"runs-on"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"ubuntu-latest"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u64CD\u4F5C\u7CFB\u7EDF")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#6272A4"}},"# Steps represent a sequence of tasks that will be executed as part of the job")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#8BE9FD"}},"steps"),s("span",{style:{color:"#FF79C6"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#6272A4"}},"# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#FF79C6"}},"-"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD"}},"uses"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"actions/checkout@v3"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u83B7\u53D6\u5F53\u524D\u9879\u76EE\u7684\u6E90\u7801")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#FF79C6"}},"-"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD"}},"name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"install node"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u5F53\u524D\u4EFB\u52A1\u7684\u540D\u79F0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#6272A4"}},"# \u4F7F\u7528\u67D0\u4E00\u4E2Aactions \u53EF\u901A\u8FC7\u4FA7\u8FB9 Marketplace \u8FDB\u884C\u641C\u7D22\uFF0C\u627E\u5230\u9002\u5408\u7684 (node\u4E3A\u6F14\u793A)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#8BE9FD"}},"uses"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"actions/setup-node@v3.5.1"),s("span",{style:{color:"#F8F8F2"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#8BE9FD"}},"with"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u5177\u4F53\u7684\u547D\u4EE4( \u5B89\u88C5\u8FD9\u4E2Aactions\u65F6\u5019\u9700\u8981\u7684\u4E00\u4E9B\u53C2\u6570 )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"node-version"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"16.x"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u6307\u5B9A\uFF08node\uFF09\u7248\u672C")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#FF79C6"}},"-"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD"}},"name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"install deps")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#8BE9FD"}},"run"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"npm install"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u9700\u8981\u6267\u884C\u7684\u6307\u4EE4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#FF79C6"}},"-"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD"}},"name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"build")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#8BE9FD"}},"run"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"npm run build")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#6272A4"}},"# \u76F4\u63A5\u90E8\u7F72\u5230github pages\u64CD\u4F5C")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#FF79C6"}},"-"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD"}},"name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"deploy")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#8BE9FD"}},"uses"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"JamesIves/github-pages-deploy-action@v4.4.1"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u6784\u5EFA\u548C\u90E8\u7F72 \u9700\u8981\u4F7F\u7528\u7684actions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#8BE9FD"}},"with"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"branch"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"gh-pages"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u5E0C\u671B\u90E8\u7F72\u5230\u54EA\u4E00\u4E2A\u5206\u652F\u4E0A\u3002\u9ED8\u8BA4gh-pages \u53EF\u9009")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"folder"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u6587\u4EF6\u6253\u5305\u540E\u7684\u8DEF\u5F84\u5730\u5740")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#6272A4"}},"# \u751F\u6210\u79D8\u94A5 \u9700\u8981\u4F7F\u7528 ${{  }} \u8FDB\u884C\u5305\u88F9\uFF0C\u53EF\u9009\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F ${{ github.token }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"token"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"${{ secrets.ACCESS_TOKEN }}"),s("span",{style:{color:"#F8F8F2"}}," ")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#6272A4"}},"# \u90E8\u7F72\u5230\u670D\u52A1\u5668\u7684\u5177\u4F53\u6307\u4EE4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#FF79C6"}},"-"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD"}},"name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"copy dist file with scp")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#8BE9FD"}},"uses"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"appleboy/scp-action@v0.0.1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#8BE9FD"}},"with"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u56E0\u4E3A\u9879\u76EE\u5F00\u6E90\uFF0C\u9700\u8981\u901A\u8FC7\u53D8\u91CF\u7684\u65B9\u5F0F\uFF0C\u5F15\u5165\u4F60\u9700\u8981\u7684")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"host"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"${{  }}"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u670D\u52A1\u5668\u7684ip")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"username"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"${{  }}"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u7528\u6237\u540D")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"password"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"${{  }}"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u5BC6\u7801")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"port"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"22"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u7AEF\u53E3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"source"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"${{  }}# \u8981\u62F7\u8D1D\u7684\u76EE\u5F55(\u672C\u5730)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#8BE9FD"}},"target"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"${{  }}"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#6272A4"}},"# \u76EE\u6807\u76EE\u5F55")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"})])]),s("ol",null,[s("li",null,[s("p",null,[l("\u8BBE\u7F6Egithub actions \u4E2D\u9700\u8981\u4F7F\u7528\u7684\u53D8\u91CF\uFF0C\u5F53\u524D\u9879\u76EE\u7684"),s("strong",null,"settings"),l("\u9009\u9879 "),s("img",{src:i,alt:""})])]),s("li",null,[s("p",null,"\u5982\u4F55\u521B\u5EFA\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\uFF0C\u56E0\u4E3A\u5728\u90E8\u7F72\u5230github pages\u4E0A\u7684\u65F6\u5019\uFF0C\u9700\u8981\u4F7F\u7528GitHub \u5BC6\u94A5\uFF08\u65B9\u5F0F\u4E00\uFF09"),s("ol",null,[s("li",null,"\u8BBE\u7F6E\u627E\u5230\u4E2A\u4EBA\u8BBE\u7F6E"),s("li",null,[l("\u8FDB\u5165\u8BBE\u7F6E\uFF0C\u627E\u5230\u4FA7\u8FB9\u680F\u6700\u5E95\u90E8\uFF0C\u70B9\u51FB "),s("strong",null,"<>Developer settings"),l("\u9009\u9879")]),s("li",null,[l("\u8FDB\u5165\u540E\u627E\u5230 "),s("strong",null,"Personal access tokens"),l(" => "),s("strong",null,"Fine-grained tokens"),l(". "),s("img",{src:u,alt:""})]),s("li",null,[l("\u70B9\u51FB "),s("strong",null,"Generate new token"),s("img",{src:C,alt:""})])])]),s("li",null,[s("p",null,[s("a",{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic",target:"_blank",rel:"noopener"},"\u65B9\u5F0F\u4E8C")])])])],-1),B="\u4F7F\u7528github actions \u81EA\u52A8\u5316\u90E8\u7F72",f="2022-12-04T00:00:00.000Z",w=[{property:"og:title",content:"\u4F7F\u7528github actions \u81EA\u52A8\u5316\u90E8\u7F72"}],m={__name:"github-actions",setup(g,{expose:n}){const o={title:"\u4F7F\u7528github actions \u81EA\u52A8\u5316\u90E8\u7F72",date:"2022-12-04T00:00:00.000Z",meta:[{property:"og:title",content:"\u4F7F\u7528github actions \u81EA\u52A8\u5316\u90E8\u7F72"}]};return n({frontmatter:o}),e({title:"\u4F7F\u7528github actions \u81EA\u52A8\u5316\u90E8\u7F72",meta:[{property:"og:title",content:"\u4F7F\u7528github actions \u81EA\u52A8\u5316\u90E8\u7F72"}]}),(d,b)=>{const a=c;return p(),F(a,{frontmatter:o},{default:t(()=>[h]),_:1})}}};export{f as date,m as default,w as meta,B as title};