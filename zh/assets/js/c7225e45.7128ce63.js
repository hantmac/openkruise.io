"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4930],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4112:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Container Restart"},p=void 0,s={unversionedId:"user-manuals/containerrecreaterequest",id:"user-manuals/containerrecreaterequest",isDocsHomePage:!1,title:"Container Restart",description:"FEATURE STATE: Kruise v0.9.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/containerrecreaterequest.md",sourceDirName:"user-manuals",slug:"/user-manuals/containerrecreaterequest",permalink:"/zh/docs/next/user-manuals/containerrecreaterequest",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/containerrecreaterequest.md",tags:[],version:"current",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"2021/9/24",frontMatter:{title:"Container Restart"},sidebar:"docs",previous:{title:"UnitedDeployment",permalink:"/zh/docs/next/user-manuals/uniteddeployment"},next:{title:"ImagePullJob",permalink:"/zh/docs/next/user-manuals/imagepulljob"}},u=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[{value:"\u63d0\u4ea4\u8bf7\u6c42",id:"\u63d0\u4ea4\u8bf7\u6c42",children:[]},{value:"\u68c0\u67e5\u72b6\u6001",id:"\u68c0\u67e5\u72b6\u6001",children:[]}]},{value:"\u5b9e\u73b0\u4ecb\u7ecd",id:"\u5b9e\u73b0\u4ecb\u7ecd",children:[]}],c={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,i.kt)("p",null,"ContainerRecreateRequest \u53ef\u4ee5\u5e2e\u52a9\u7528\u6237",(0,i.kt)("strong",{parentName:"p"},"\u91cd\u542f/\u91cd\u5efa"),"\u5b58\u91cf Pod \u4e2d\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u3002"),(0,i.kt)("p",null,"\u548c Kruise \u63d0\u4f9b\u7684\u539f\u5730\u5347\u7ea7\u7c7b\u4f3c\uff0c\u5f53\u4e00\u4e2a\u5bb9\u5668\u91cd\u5efa\u7684\u65f6\u5019\uff0cPod \u4e2d\u7684\u5176\u4ed6\u5bb9\u5668\u8fd8\u4fdd\u6301\u6b63\u5e38\u8fd0\u884c\u3002\u91cd\u5efa\u5b8c\u6210\u540e\uff0cPod \u4e2d\u9664\u4e86\u8be5\u5bb9\u5668\u7684 restartCount \u589e\u52a0\u4ee5\u5916\u4e0d\u4f1a\u6709\u4ec0\u4e48\u5176\u4ed6\u53d8\u5316\u3002\n\u6ce8\u610f\uff0c\u4e4b\u524d\u4e34\u65f6\u5199\u5230\u65e7\u5bb9\u5668 ",(0,i.kt)("strong",{parentName:"p"},"rootfs")," \u4e2d\u7684\u6587\u4ef6\u4f1a\u4e22\u5931\uff0c\u4f46\u662f volume mount \u6302\u8f7d\u5377\u4e2d\u7684\u6570\u636e\u90fd\u8fd8\u5b58\u5728\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u4f9d\u8d56\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-daemon")," \u7ec4\u4ef6\u6765\u505c\u6b62 Pod \u5bb9\u5668\u3002\n\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"KruiseDaemon")," feature-gate \u88ab\u5173\u95ed\u4e86\uff0cContainerRecreateRequest \u4e5f\u5c06\u65e0\u6cd5\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h3",{id:"\u63d0\u4ea4\u8bf7\u6c42"},"\u63d0\u4ea4\u8bf7\u6c42"),(0,i.kt)("p",null,"\u4e3a\u8981\u91cd\u5efa\u5bb9\u5668\u7684 Pod \u63d0\u4ea4\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"ContainerRecreateRequest")," \u81ea\u5b9a\u4e49\u8d44\u6e90\uff08\u7f29\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"CRR"),"\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ContainerRecreateRequest\nmetadata:\n  namespace: pod-namespace\n  name: xxx\nspec:\n  podName: pod-name\n  containers:       # \u8981\u91cd\u5efa\u7684\u5bb9\u5668\u540d\u5b57\u5217\u8868\uff0c\u81f3\u5c11\u8981\u6709 1 \u4e2a\n  - name: app\n  - name: sidecar\n  strategy:\n    failurePolicy: Fail                 # 'Fail' \u6216 'Ignore'\uff0c\u8868\u793a\u4e00\u65e6\u6709\u67d0\u4e2a\u5bb9\u5668\u505c\u6b62\u6216\u91cd\u5efa\u5931\u8d25\uff0c CRR \u7acb\u5373\u7ed3\u675f\n    orderedRecreate: false              # 'true' \u8868\u793a\u8981\u7b49\u524d\u4e00\u4e2a\u5bb9\u5668\u91cd\u5efa\u5b8c\u6210\u4e86\uff0c\u518d\u5f00\u59cb\u91cd\u5efa\u4e0b\u4e00\u4e2a\n    terminationGracePeriodSeconds: 30   # \u7b49\u5f85\u5bb9\u5668\u4f18\u96c5\u9000\u51fa\u7684\u65f6\u95f4\uff0c\u4e0d\u586b\u9ed8\u8ba4\u7528 Pod \u4e2d\u5b9a\u4e49\u7684\n    unreadyGracePeriodSeconds: 3        # \u5728\u91cd\u5efa\u4e4b\u524d\u5148\u628a Pod \u8bbe\u4e3a not ready\uff0c\u5e76\u7b49\u5f85\u8fd9\u6bb5\u65f6\u95f4\u540e\u518d\u5f00\u59cb\u6267\u884c\u91cd\u5efa\n    minStartedSeconds: 10               # \u91cd\u5efa\u540e\u65b0\u5bb9\u5668\u81f3\u5c11\u4fdd\u6301\u8fd0\u884c\u8fd9\u6bb5\u65f6\u95f4\uff0c\u624d\u8ba4\u4e3a\u8be5\u5bb9\u5668\u91cd\u5efa\u6210\u529f\n  activeDeadlineSeconds: 300        # \u5982\u679c CRR \u6267\u884c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\uff0c\u5219\u76f4\u63a5\u6807\u8bb0\u4e3a\u7ed3\u675f\uff08\u672a\u7ed3\u675f\u7684\u5bb9\u5668\u6807\u8bb0\u4e3a\u5931\u8d25\uff09\n  ttlSecondsAfterFinished: 1800     # CRR \u7ed3\u675f\u540e\uff0c\u8fc7\u4e86\u8fd9\u6bb5\u65f6\u95f4\u81ea\u52a8\u88ab\u5220\u9664\u6389\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"em"},"strategy")," \u4e2d\u7684\u5b57\u6bb5\u3001\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"em"},"spec")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"em"},"activeDeadlineSeconds"),"/",(0,i.kt)("inlineCode",{parentName:"em"},"ttlSecondsAfterFinished")," \u90fd\u662f\u53ef\u9009\u7684\u3002")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e00\u822c\u6765\u8bf4\uff0c\u5217\u8868\u4e2d\u7684\u5bb9\u5668\u4f1a\u4e00\u4e2a\u4e2a\u88ab\u505c\u6b62\uff0c\u4f46\u53ef\u80fd\u540c\u65f6\u5728\u88ab\u91cd\u5efa\u548c\u542f\u52a8\uff0c\u9664\u975e ",(0,i.kt)("inlineCode",{parentName:"li"},"orderedRecreate")," \u88ab\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"unreadyGracePeriodSeconds")," \u529f\u80fd\u4f9d\u8d56\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"KruisePodReadinessGate")," \u8fd9\u4e2a feature-gate \u8981\u6253\u5f00\uff0c\u540e\u8005\u4f1a\u5728\u6bcf\u4e2a Pod \u521b\u5efa\u7684\u65f6\u5019\u6ce8\u5165\u4e00\u4e2a readinessGate\u3002\n\u5426\u5219\uff0c\u9ed8\u8ba4\u53ea\u4f1a\u7ed9 Kruise workload \u521b\u5efa\u7684 Pod \u6ce8\u5165 readinessGate\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u6709\u8fd9\u4e9b Pod \u624d\u80fd\u5728 CRR \u91cd\u5efa\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"unreadyGracePeriodSeconds"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# for commandline you can\n$ kubectl get containerrecreateqequest -n pod-namespace\n# or just short name\n$ kubectl get crr -n pod-namespace\n")),(0,i.kt)("h3",{id:"\u68c0\u67e5\u72b6\u6001"},"\u68c0\u67e5\u72b6\u6001"),(0,i.kt)("p",null,"CRR status \u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'status:\n  completionTime: "2021-03-22T11:53:48Z"\n  containerRecreateStates:\n  - name: app\n    phase: Succeeded\n  - name: sidecar\n    phase: Succeeded\n  phase: Completed\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"status.phase")," \u5305\u62ec:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pending"),": CRR \u7b49\u5f85\u88ab\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Recreating"),": CRR \u6b63\u5728\u88ab\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Completed"),": CRR \u5df2\u7ecf\u6267\u884c\u5b8c\u6210\uff0c\u5b8c\u6210\u65f6\u95f4\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"status.completionTime")," \u5b57\u6bb5\u53ef\u89c1")),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"status.phase=Completed")," \u53ea\u8868\u793a CRR \u5b8c\u6210\uff0c\u5e76\u4e0d\u4ee3\u8868 CRR \u4e2d\u58f0\u660e\u7684\u5bb9\u5668\u90fd\u91cd\u5efa\u6210\u529f\u4e86\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u68c0\u67e5 ",(0,i.kt)("inlineCode",{parentName:"p"},"status.containerRecreateStates")," \u4e2d\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"status.containerRecreateStates[x].phase")," \u5305\u62ec:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pending"),": container \u7b49\u5f85\u88ab\u91cd\u5efa"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Recreating"),": container \u6b63\u5728\u88ab\u91cd\u5efa"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Failed"),": container \u91cd\u5efa\u5931\u8d25\uff0c\u6b64\u65f6 ",(0,i.kt)("inlineCode",{parentName:"li"},"status.containerRecreateStates[x].message")," \u5e94\u6709\u9519\u8bef\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Succeeded"),": container \u91cd\u5efa\u6210\u529f")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u56e0\u6b64\uff0c\u5f53 CRR \u7ed3\u675f\u4e86\uff0c\u53ea\u6709\u4e0a\u8ff0 container \u72b6\u6001\u662f ",(0,i.kt)("inlineCode",{parentName:"strong"},"Succeeded")," phase \u7684\u624d\u8868\u793a\u91cd\u5efa\u6210\u529f\u4e86\u3002")),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u4ecb\u7ecd"},"\u5b9e\u73b0\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u521b\u5efa\u4e86\u4e00\u4e2a CRR\uff0cKruise webhook \u4f1a\u628a\u5f53\u65f6\u5bb9\u5668\u7684 containerID/restartCount \u8bb0\u5f55\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.containers[x].statusContext")," \u4e4b\u4e2d\u3002\n\u5728 ",(0,i.kt)("strong",{parentName:"p"},"kruise-daemon")," \u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u5b83\u53d1\u73b0\u5b9e\u9645\u5bb9\u5668\u5f53\u524d\u7684 containerID \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"statusContext")," \u4e0d\u4e00\u81f4\u6216 restartCount \u5df2\u7ecf\u53d8\u5927\uff0c\n\u5219\u8ba4\u4e3a\u5bb9\u5668\u5df2\u7ecf\u88ab\u91cd\u5efa\u6210\u529f\u4e86\uff08\u6bd4\u5982\u53ef\u80fd\u53d1\u751f\u4e86\u4e00\u6b21\u539f\u5730\u5347\u7ea7\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ContainerRecreateRequest",src:n(9410).Z})),(0,i.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("strong",{parentName:"p"},"kruise-daemon")," \u4f1a\u6267\u884c preStop hook \u540e\u628a\u5bb9\u5668\u505c\u6389\uff0c\u7136\u540e ",(0,i.kt)("strong",{parentName:"p"},"kubelet")," \u611f\u77e5\u5230\u5bb9\u5668\u9000\u51fa\uff0c\u5219\u4f1a\u65b0\u5efa\u4e00\u4e2a\u5bb9\u5668\u5e76\u542f\u52a8\u3002\n\u6700\u540e ",(0,i.kt)("strong",{parentName:"p"},"kruise-daemon")," \u770b\u5230\u65b0\u5bb9\u5668\u5df2\u7ecf\u542f\u52a8\u6210\u529f\u8d85\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"minStartedSeconds")," \u65f6\u95f4\u540e\uff0c\u4f1a\u4e0a\u62a5\u8fd9\u4e2a\u5bb9\u5668\u7684 phase \u72b6\u6001\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Succeeded"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5bb9\u5668\u91cd\u5efa\u548c\u539f\u5730\u5347\u7ea7\u64cd\u4f5c\u540c\u65f6\u89e6\u53d1\u4e86\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("strong",{parentName:"li"},"Kubelet")," \u6839\u636e\u539f\u5730\u5347\u7ea7\u8981\u6c42\u5df2\u7ecf\u505c\u6b62\u6216\u91cd\u5efa\u4e86\u5bb9\u5668\uff0c",(0,i.kt)("strong",{parentName:"li"},"kruise-daemon")," \u4f1a\u5224\u65ad\u5bb9\u5668\u91cd\u5efa\u5df2\u7ecf\u5b8c\u6210\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("strong",{parentName:"li"},"kruise-daemon")," \u5148\u505c\u4e86\u5bb9\u5668\uff0c",(0,i.kt)("strong",{parentName:"li"},"Kubelet")," \u4f1a\u7ee7\u7eed\u6267\u884c\u539f\u5730\u5347\u7ea7\uff0c\u5373\u521b\u5efa\u4e00\u4e2a\u65b0\u7248\u672c\u5bb9\u5668\u5e76\u542f\u52a8\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u9488\u5bf9\u4e00\u4e2a Pod \u63d0\u4ea4\u4e86\u591a\u4e2a ContainerRecreateRequest \u8d44\u6e90\uff0c\u4f1a\u6309\u65f6\u95f4\u5148\u540e\u4e00\u4e2a\u4e2a\u6267\u884c\u3002"))}d.isMDXComponent=!0},9410:function(e,t,n){t.Z=n.p+"assets/images/containerrecreaterequest-f690e891609591c68e231c23212204ca.png"}}]);