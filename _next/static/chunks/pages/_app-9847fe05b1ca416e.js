(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{82010:function(e,t,i){"use strict";i.d(t,{F:function(){return m},f:function(){return l}});var u=i(67294);let a=["light","dark"],s="(prefers-color-scheme: dark)",n="undefined"==typeof window,o=(0,u.createContext)(void 0),r={setTheme:e=>{},themes:[]},m=()=>{var e;return null!==(e=(0,u.useContext)(o))&&void 0!==e?e:r},l=e=>(0,u.useContext)(o)?u.createElement(u.Fragment,null,e.children):u.createElement(p,e),d=["light","dark"],p=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:i=!0,enableColorScheme:n=!0,storageKey:r="theme",themes:m=d,defaultTheme:l=i?"system":"light",attribute:p="data-theme",value:b,children:x,nonce:f})=>{let[h,N]=(0,u.useState)(()=>g(r,l)),[I,E]=(0,u.useState)(()=>g(r)),L=b?Object.values(b):m,y=(0,u.useCallback)(e=>{let u=e;if(!u)return;"system"===e&&i&&(u=v());let s=b?b[u]:u,o=t?q():null,r=document.documentElement;if("class"===p?(r.classList.remove(...L),s&&r.classList.add(s)):s?r.setAttribute(p,s):r.removeAttribute(p),n){let e=a.includes(l)?l:null,t=a.includes(u)?u:e;r.style.colorScheme=t}null==o||o()},[]),w=(0,u.useCallback)(e=>{N(e);try{localStorage.setItem(r,e)}catch(e){}},[e]),C=(0,u.useCallback)(t=>{let u=v(t);E(u),"system"===h&&i&&!e&&y("system")},[h,e]);(0,u.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,u.useEffect)(()=>{let e=e=>{e.key===r&&w(e.newValue||l)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[w]),(0,u.useEffect)(()=>{y(null!=e?e:h)},[e,h]);let S=(0,u.useMemo)(()=>({theme:h,setTheme:w,forcedTheme:e,resolvedTheme:"system"===h?I:h,themes:i?[...m,"system"]:m,systemTheme:i?I:void 0}),[h,w,e,I,i,m]);return u.createElement(o.Provider,{value:S},u.createElement(c,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:i,enableColorScheme:n,storageKey:r,themes:m,defaultTheme:l,attribute:p,value:b,children:x,attrs:L,nonce:f}),x)},c=(0,u.memo)(({forcedTheme:e,storageKey:t,attribute:i,enableSystem:n,enableColorScheme:o,defaultTheme:r,value:m,attrs:l,nonce:d})=>{let p="system"===r,c="class"===i?`var d=document.documentElement,c=d.classList;c.remove(${l.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${i}',s='setAttribute';`,g=o?a.includes(r)&&r?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${r}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",q=(e,t=!1,u=!0)=>{let s=m?m[e]:e,n=t?e+"|| ''":`'${s}'`,r="";return o&&u&&!t&&a.includes(e)&&(r+=`d.style.colorScheme = '${e}';`),"class"===i?r+=t||s?`c.add(${n})`:"null":s&&(r+=`d[s](n,${n})`),r},v=e?`!function(){${c}${q(e)}}()`:n?`!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${p})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${q("dark")}}else{${q("light")}}}else if(e){${m?`var x=${JSON.stringify(m)};`:""}${q(m?"x[e]":"e",!0)}}${p?"":"else{"+q(r,!1,!1)+"}"}${g}}catch(e){}}()`:`!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${m?`var x=${JSON.stringify(m)};`:""}${q(m?"x[e]":"e",!0)}}else{${q(r,!1,!1)};}${g}}catch(t){}}();`;return u.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),g=(e,t)=>{let i;if(!n){try{i=localStorage.getItem(e)||void 0}catch(e){}return i||t}},q=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},91118:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(75304)}])},98906:function(e,t,i){"use strict";i.d(t,{k:function(){return o},A:function(){return r}});var u=i(85893),a=i(67294),s=JSON.parse('[{"frontmatter":{"title":"How to make toys from old Olarpaper","date":"2022-04-04T01:00:00.000Z","image":"/images/post/post-1.png","categories":["programming"],"featured":true,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-1"},{"frontmatter":{"title":"My work from home workstation","date":"2022-04-04T10:00:00.000Z","image":"/images/post/post-2.png","categories":["programming"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-10"},{"frontmatter":{"title":"Robotic world is growing very fast","date":"2022-04-04T11:00:00.000Z","image":"/images/post/post-3.png","categories":["assistance"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-11"},{"frontmatter":{"title":"What is a Virtual Assistant","date":"2022-04-04T12:00:00.000Z","image":"/images/post/post-4.png","categories":["github"],"featured":true,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-12"},{"frontmatter":{"title":"Why you need to learn PHP","date":"2022-04-04T13:00:00.000Z","image":"/images/post/post-5.png","categories":["youtube","artificial-intelligence"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-13"},{"frontmatter":{"title":"What you need to know about Programming","date":"2022-04-04T14:00:00.000Z","image":"/images/post/post-6.png","categories":["robotics","youtube"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-14"},{"frontmatter":{"title":"How to make toys from old Olarpaper","date":"2022-04-04T15:00:00.000Z","image":"/images/post/post-7.png","categories":["robotics","assistance"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-15"},{"frontmatter":{"title":"Learn","date":"2022-04-04T14:00:00.000Z","image":"/images/post/post-6.png","categories":["robotics","youtube"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-16"},{"frontmatter":{"title":"My work from home workstation","date":"2022-04-04T02:00:00.000Z","image":"/images/post/post-2.png","categories":["drone"],"featured":true,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-2"},{"frontmatter":{"title":"What you need to know about Photography","date":"2022-04-02T03:00:00.000Z","image":"/images/post/post-3.png","categories":["workstation"],"featured":true,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-3"},{"frontmatter":{"title":"How to make toys from old Olarpaper","date":"2022-04-04T04:00:00.000Z","image":"/images/post/post-4.png","categories":["robotics","programming"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-4"},{"frontmatter":{"title":"How to make toys from old Olarpaper","date":"2022-04-04T05:00:00.000Z","image":"/images/post/post-5.png","categories":["assistance","github"],"featured":true,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Work From Home\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!quatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-5"},{"frontmatter":{"title":"How to make toys from old Olarpaper","date":"2022-04-04T06:00:00.000Z","image":"/images/post/post-6.png","categories":["artificial-intelligence","programming"],"featured":true,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-6"},{"frontmatter":{"title":"Artificial Intelligence and Robotics In A Nutshell","date":"2022-04-04T07:00:00.000Z","image":"/images/post/post-7.png","categories":["programming","youtube"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-7"},{"frontmatter":{"title":"Drone Software and Development","date":"2022-04-04T08:00:00.000Z","image":"/images/post/post-8.png","categories":["drone","robotics"],"featured":true,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-8"},{"frontmatter":{"title":"Github Repository Controls","date":"2022-04-04T09:00:00.000Z","image":"/images/post/post-1.png","categories":["workstation","youtube"],"featured":false,"draft":false},"content":"\\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n## Covid-19 Situation\\n\\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\\n\\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n\\n![alter-text](/images/post/post-1.png)\\n*Example Caption*\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\\n","slug":"post-9"}]');let n=(0,a.createContext)(),o=e=>{let{children:t}=e;return(0,u.jsx)(n.Provider,{value:{posts:s},children:t})},r=()=>(0,a.useContext)(n)},75304:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var u=i(85893),a=i(56626),s=JSON.parse('{"R":{"k":{"T$":"Raleway:wght@400","BD":"Merriweather Sans:wght@400;700"}}}'),n=i(98906),o=i(82010),r=i(9008),m=i.n(r),l=i(67294),d=i(1785),p=i.n(d);i(4280);let c=e=>{let{Component:t,pageProps:i}=e,{default_theme:r}=a.settings,d=s.R.k.T$,c=s.R.k.BD,[g,q]=(0,l.useState)();(0,l.useEffect)(()=>{fetch("https://fonts.googleapis.com/css2?family=".concat(d).concat(c?"&family="+c:"","&display=swap")).then(e=>e.text().then(e=>q(e)))},[d,c]);let v={gtmId:a.params.tag_manager_id};return(0,l.useEffect)(()=>{setTimeout(()=>{a.params.tag_manager_id&&p().initialize(v)},5e3)},[]),(0,u.jsxs)(n.k,{children:[(0,u.jsxs)(m(),{children:[(0,u.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,u.jsx)("style",{dangerouslySetInnerHTML:{__html:"".concat(g)}}),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5"})]}),(0,u.jsx)(o.f,{attribute:"class",defaultTheme:r,children:(0,u.jsx)(t,{...i})})]})};var g=c},4280:function(){},9008:function(e,t,i){e.exports=i(83121)},56421:function(e,t,i){"use strict";var u,a=(u=i(96425))&&u.__esModule?u:{default:u};e.exports={tags:function(e){var t=e.id,i=e.events,u=e.dataLayer,s=e.dataLayerName,n=e.preview,o="&gtm_auth="+e.auth,r="&gtm_preview="+n;t||(0,a.default)("GTM Id is required");var m="\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(i).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+o+r+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+s+"','"+t+"');";return{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+o+r+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:m,dataLayerVar:this.dataLayer(u,s)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}}},58676:function(e,t,i){"use strict";var u,a=(u=i(56421))&&u.__esModule?u:{default:u};e.exports={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=a.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,i=e.events,u=e.dataLayer,a=e.dataLayerName,s=e.auth,n=e.preview,o=this.gtm({id:t,events:void 0===i?{}:i,dataLayer:u||void 0,dataLayerName:void 0===a?"dataLayer":a,auth:void 0===s?"":s,preview:void 0===n?"":n});u&&document.head.appendChild(o.dataScript),document.head.insertBefore(o.script(),document.head.childNodes[0]),document.body.insertBefore(o.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,i=e.dataLayerName,u=void 0===i?"dataLayer":i;if(window[u])return window[u].push(t);var s=a.default.dataLayer(t,u),n=this.dataScript(s);document.head.insertBefore(n,document.head.childNodes[0])}}},1785:function(e,t,i){"use strict";var u,a=(u=i(58676))&&u.__esModule?u:{default:u};e.exports=a.default},96425:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){console.warn("[react-gtm]",e)}},56626:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Geeky Nextjs","base_url":"/","favicon":"/images/favicon.png","logo":"/images/logo.png","logo_white":"/images/logo-light.png","logo_width":"150","logo_height":"39","logo_text":"Geeky"},"settings":{"theme_switcher":true,"default_theme":"system","pagination":6,"summary_length":200,"blog_folder":"posts"},"params":{"tag_manager_id":"","footer_content":"Lorem ipsum dolor sit amt, conse adip iscing. donec iaculis tempasus laoreet. Libero ullam rgscper.","copyright":"Designed and Developed By [Statichunt](https://statichunt.com/)"},"metadata":{"meta_author":"Statichunt","meta_image":"/images/og-image.png","meta_description":"Geeky Nextjs Personal Blog Template"},"widgets":{"about":{"enable":true,"content":"Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper."},"featured_posts":{"enable":true,"title":"Blog Categories","showPost":3},"categories":{"enable":true,"title":"Blog Categories"},"newsletter":{"enable":true,"title":"Newsletter","content":"Join thousands of Tiny Salt subscribers and get our best recipes delivered each week!","privacy_policy_page":"#","malichipm_url":""}},"disqus":{"enable":true,"shortname":"themefisher-template","settings":{}}}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(91118),t(80880)}),_N_E=e.O()}]);