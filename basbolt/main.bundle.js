(()=>{"use strict";var e,t={6075:(e,t,c)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.updateAsm=r,t.compile=s,t.updateSource=function(e,t){return t=>{t(function(e){return{type:i.UPDATE_SOURCE,source:e}}(e)),t(s())}},t.selectCompiler=function(e){return t=>{t(function(e){return{type:i.SELECT_COMPILER,compiler:e}}(e)),t(s())}},t.openHelp=function(e){return{type:i.OPEN_HELP,article:l.get(e)||a}},t.DEFAULT_ARTICLE=void 0;var o,n=(o=c(6318))&&o.__esModule?o:{default:o},i=c(9397);function r(e){return{type:i.UPDATE_ASM,asm:e}}function s(){return async(e,t,{compiler:c})=>{const o=t(),s={onBegin:()=>e({type:i.START_COMPILE}),onEnd:()=>e({type:i.STOP_COMPILE}),compiler:o.compiler},a=await c.compile(o.source,s);if(!a.canceled&&a.lst){const t=(0,n.default)(a.lst);e(r(t))}}}const a="#topic-qb45qck-T0000";t.DEFAULT_ARTICLE=a;const l=new Map([["ABS","#topic-qb45qck-T000A"],["ABSOLUTE","#topic-qb45qck-T001B"],["ACCESS","#topic-qb45qck-T000B"],["ALIAS","#topic-qb45qck-T000C"],["AND","#topic-qb45qck-T000D"],["ANY","#topic-qb45qck-T000E"],["APPEND","#topic-qb45qck-T000F"],["AS","#topic-qb45qck-T0010"],["ASC","#topic-qb45qck-T0011"],["ATN","#topic-qb45qck-T0012"],["BASE","#topic-qb45qck-T007D"],["BASE","#topic-qb45qck-T007D"],["BASIC","#topic-qb45advr-T000C"],["BEEP","#topic-qb45qck-T0013"],["BINARY","#topic-qb45qck-T0015"],["BLOAD","#topic-qb45qck-T0016"],["BSAVE","#topic-qb45qck-T0017"],["BYVAL","#topic-qb45qck-T0018"],["CALL","#topic-qb45qck-T0019"],["CALLS","#topic-qb45qck-T001A"],["CASE","#topic-qb45qck-T009E"],["CDBL","#topic-qb45qck-T001D"],["CDECL","#topic-qb45qck-T0033"],["CHAIN","#topic-qb45qck-T001E"],["CHDIR","#topic-qb45qck-T001F"],["CHR","#topic-qb45qck-T0020"],["CINT","#topic-qb45qck-T0021"],["CIRCLE","#topic-qb45qck-T0022"],["CLEAR","#topic-qb45qck-T0023"],["CLNG","#topic-qb45qck-T0024"],["CLOSE","#topic-qb45qck-T0025"],["CLS","#topic-qb45qck-T0026"],["COLOR","#topic-qb45qck-T0027"],["COM","#topic-qb45qck-T0028"],["COMMAND","#topic-qb45qck-T0029"],["COMMON","#topic-qb45qck-T002A"],["CONST","#topic-qb45qck-T002B"],["COS","#topic-qb45qck-T002C"],["CSNG","#topic-qb45qck-T002D"],["CSRLIN","#topic-qb45qck-T002E"],["CVD","#topic-qb45qck-T0030"],["CVDMBF","#topic-qb45qck-T002F"],["CVI","#topic-qb45qck-T0030"],["CVL","#topic-qb45qck-T0030"],["CVS","#topic-qb45qck-T0030"],["CVSMBF","#topic-qb45qck-T002F"],["DATA","#topic-qb45advr-T0010"],["DATE","#topic-qb45qck-T0032"],["DECLARE","#topic-qb45qck-T0034"],["DEF","#topic-qb45qck-T0035"],["DEFDBL","#topic-qb45qck-T0037"],["DEFINT","#topic-qb45qck-T0037"],["DEFLNG","#topic-qb45qck-T0037"],["DEFSNG","#topic-qb45qck-T0037"],["DEFSTR","#topic-qb45qck-T0037"],["DIM","#topic-qb45qck-T0038"],["DO","#topic-qb45qck-T003A"],["DOUBLE","#topic-qb45qck-T005C"],["DRAW","#topic-qb45qck-T003B"],["DYNAMIC","#topic-qb45advr-T0040"],["ELSE","#topic-qb45qck-T0054"],["ELSEIF","#topic-qb45qck-T0054"],["END","#topic-qb45qck-T003C"],["ENDIF","#topic-qb45qck-T0054"],["ENVIRON","#topic-qb45qck-T003D"],["EOF","#topic-qb45qck-T003F"],["EQV","#topic-qb45qck-T0040"],["ERASE","#topic-qb45qck-T0041"],["ERDEV","#topic-qb45qck-T0042"],["ERL","#topic-qb45qck-T0043"],["ERR","#topic-qb45qck-T0043"],["ERROR","#topic-qb45qck-T0044"],["EXIT","#topic-qb45qck-T0045"],["EXP","#topic-qb45qck-T0046"],["FIELD","#topic-qb45qck-T0047"],["FILEATTR","#topic-qb45qck-T0048"],["FILES","#topic-qb45qck-T0049"],["FIX","#topic-qb45qck-T004A"],["FOR","#topic-qb45qck-T004B"],["FRE","#topic-qb45qck-T004C"],["FREEFILE","#topic-qb45qck-T004D"],["FUNCTION","#topic-qb45qck-T004E"],["GET","#topic-qb45qck-T004F"],["GOSUB","#topic-qb45advr-T004A"],["GOTO","#topic-qb45advr-T004A"],["HEX","#topic-qb45qck-T0053"],["IF","#topic-qb45qck-T0054"],["IMP","#topic-qb45qck-T0055"],["INCLUDE","#topic-qb45advr-T003F"],["INKEY","#topic-qb45qck-T0056"],["INP","#topic-qb45qck-T0057"],["INPUT","#topic-qb45qck-T0058"],["INSTR","#topic-qb45qck-T005A"],["INT","#topic-qb45qck-T005B"],["INTEGER","#topic-qb45qck-T005C"],["INTERRUPT","#topic-qb45qck-T001C"],["IOCTL","#topic-qb45qck-T005D"],["IS","#topic-qb45qck-T009E"],["KEY","#topic-qb45advr-T0045"],["KILL","#topic-qb45qck-T0060"],["LBOUND","#topic-qb45qck-T0061"],["LCASE","#topic-qb45qck-T0062"],["LEFT","#topic-qb45qck-T0063"],["LEN","#topic-qb45qck-T0064"],["LET","#topic-qb45qck-T0065"],["LINE","#topic-qb45qck-T0066"],["LIST","#topic-qb45qck-T005F"],["LOC","#topic-qb45qck-T0067"],["LOCAL","#topic-qb45qck-T0009"],["LOCATE","#topic-qb45qck-T0068"],["LOCK","#topic-qb45qck-T0069"],["LOF","#topic-qb45qck-T006A"],["LOG","#topic-qb45qck-T006B"],["LONG","#topic-qb45qck-T005C"],["LOOP","#topic-qb45qck-T003A"],["LPOS","#topic-qb45qck-T006C"],["LPRINT","#topic-qb45qck-T006D"],["LSET","#topic-qb45qck-T006E"],["LTRIM","#topic-qb45qck-T0070"],["MID","#topic-qb45advr-T0048"],["MKD","#topic-qb45qck-T0074"],["MKDIR","#topic-qb45qck-T0072"],["MKDMBF","#topic-qb45qck-T0073"],["MKI","#topic-qb45qck-T0074"],["MKL","#topic-qb45qck-T0074"],["MKS","#topic-qb45qck-T0074"],["MKSMBF","#topic-qb45qck-T0073"],["MOD","#topic-qb45qck-T0075"],["NAME","#topic-qb45qck-T0076"],["NEXT","#topic-qb45qck-T004B"],["NOT","#topic-qb45qck-T0078"],["OCT","#topic-qb45qck-T0079"],["OFF","#topic-qb45qck-T007A"],["ON","#topic-qb45advr-T004A"],["OPEN","#topic-qb45qck-T007C"],["OPTION","#topic-qb45qck-T007D"],["OR","#topic-qb45qck-T007E"],["OUT","#topic-qb45qck-T007F"],["OUTPUT","#topic-qb45qck-T0080"],["PAINT","#topic-qb45qck-T0081"],["PALETTE","#topic-qb45qck-T0082"],["PCOPY","#topic-qb45qck-T0083"],["PEEK","#topic-qb45qck-T0084"],["PEN","#topic-qb45advr-T004D"],["PLAY","#topic-qb45advr-T004E"],["PMAP","#topic-qb45qck-T0087"],["POINT","#topic-qb45qck-T0088"],["POKE","#topic-qb45qck-T0089"],["POS","#topic-qb45qck-T008A"],["PRESET","#topic-qb45qck-T008B"],["PRINT","#topic-qb45qck-T008C"],["PSET","#topic-qb45qck-T008D"],["PUT","#topic-qb45qck-T0050"],["RANDOM","#topic-qb45qck-T0014"],["RANDOMIZE","#topic-qb45qck-T008E"],["READ","#topic-qb45qck-T008F"],["REDIM","#topic-qb45qck-T0090"],["REM","#topic-qb45qck-T0091"],["RESET","#topic-qb45qck-T0092"],["RESTORE","#topic-qb45qck-T0093"],["RESUME","#topic-qb45qck-T0094"],["RETURN","#topic-qb45qck-T0095"],["RIGHT","#topic-qb45qck-T0096"],["RMDIR","#topic-qb45qck-T0097"],["RND","#topic-qb45qck-T0098"],["RSET","#topic-qb45qck-T006F"],["RTRIM","#topic-qb45qck-T0099"],["RUN","#topic-qb45qck-T009A"],["SADD","#topic-qb45qck-T009B"],["SCREEN","#topic-qb45advr-T0053"],["SEEK","#topic-qb45advr-T0054"],["SELECT","#topic-qb45qck-T009E"],["SETMEM","#topic-qb45qck-T009F"],["SGN","#topic-qb45qck-T00A0"],["SHARED","#topic-qb45qck-T00A1"],["SHELL","#topic-qb45qck-T00A2"],["SIGNAL","#topic-qb45qck-T0008"],["SIN","#topic-qb45qck-T00A3"],["SINGLE","#topic-qb45qck-T005C"],["SLEEP","#topic-qb45qck-T00A4"],["SOUND","#topic-qb45qck-T00A5"],["SPACE","#topic-qb45qck-T00A6"],["SPC","#topic-qb45qck-T00A7"],["SQR","#topic-qb45qck-T00A8"],["STATIC","#topic-qb45qck-T00A9"],["STEP","#topic-qb45qck-T00AA"],["STICK","#topic-qb45qck-T00AB"],["STOP","#topic-qb45qck-T00AC"],["STR","#topic-qb45qck-T00AD"],["STRIG","#topic-qb45advr-T0055"],["STRING","#topic-qb45qck-T005C"],["SUB","#topic-qb45qck-T00B0"],["SWAP","#topic-qb45qck-T00B1"],["SYSTEM","#topic-qb45qck-T00B2"],["TAB","#topic-qb45qck-T00B3"],["TAN","#topic-qb45qck-T00B4"],["THEN","#topic-qb45qck-T0054"],["TIME","#topic-qb45advr-T0056"],["TIMER","#topic-qb45advr-T0057"],["TO","#topic-qb45qck-T00B7"],["TROFF","#topic-qb45qck-T00B8"],["TRON","#topic-qb45qck-T00B8"],["TYPE","#topic-qb45qck-T00B9"],["UBOUND","#topic-qb45qck-T00BA"],["UCASE","#topic-qb45qck-T00BB"],["UEVENT","#topic-qb45qck-T00BC"],["UNLOCK","#topic-qb45qck-T0069"],["UNTIL","#topic-qb45qck-T0039"],["USING","#topic-qb45qck-T00BE"],["VAL","#topic-qb45qck-T00BF"],["VARPTR","#topic-qb45qck-T00C0"],["VARSEG","#topic-qb45qck-T00C0"],["VIEW","#topic-qb45qck-T00C2"],["WAIT","#topic-qb45qck-T00C3"],["WEND","#topic-qb45qck-T0039"],["WHILE","#topic-qb45qck-T0039"],["WIDTH","#topic-qb45qck-T00C4"],["WINDOW","#topic-qb45qck-T00C5"],["WRITE","#topic-qb45qck-T00C6"],["XOR","#topic-qb45qck-T00C7"]])},9397:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SELECT_COMPILER=t.STOP_COMPILE=t.START_COMPILE=t.OPEN_HELP=t.UPDATE_SOURCE=t.UPDATE_ASM=void 0;t.UPDATE_ASM="UPDATE_ASM";t.UPDATE_SOURCE="UPDATE_SOURCE";t.OPEN_HELP="OPEN_HELP";t.START_COMPILE="START_COMPILE";t.STOP_COMPILE="STOP_COMPILE";t.SELECT_COMPILER="SELECT_COMPILER"},8077:(e,t,c)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=(0,o.useSelector)((({asm:e})=>e)),t=(0,o.useSelector)((({isCompiling:e})=>e)),c=(0,o.useSelector)((({compiler:e})=>e)),l=function(e,t){const[c,o]=(0,n.useState)(t),i=(0,n.useRef)(null),r=()=>{null!==i.current&&(clearInterval(i.current),i.current=null)};return(0,n.useEffect)((()=>{if(r(),e){let e=0;i.current=setInterval((()=>{e=e+1&3,o(t+".".repeat(e))}),333)}return r}),[e]),c}(t,"Compiling"),[q,p]=(0,n.useState)(!1),u=(0,o.useDispatch)(),T=(0,n.useRef)(null),b=(0,n.useRef)([]);(0,n.useEffect)((()=>{if(!T.current)return;const{editor:t,monaco:c}=T.current,o=b.current,n=function(e,t){if(!e||e.errors.length>0)return[];let c=0,o=1;return e.blocks.flatMap((e=>{if(0==e.asm.length)return[];const n=new t(o,1,o+e.asm.length-1,1);return o+=e.asm.length,[{range:n,options:{isWholeLine:!0,className:"blockColor"+c++%10}}]}))}(e,c.Range);(o.length>0||n.length>0)&&(b.current=t.deltaDecorations(o,n))}),[e,q]);const{language:d,value:k}=function(e){return null===e?{language:"text/plain",value:"No assembly generated"}:e.errors.length>0?{language:"text/plain",value:e.errors.map((e=>`At line ${e.line}, column ${e.column}: ${e.message}`)).join("\n")}:{language:"intelasm",value:e.blocks.map((e=>e.asm.map((e=>e.text)).join("\n"))).join("\n")}}(e);return(0,r.jsxs)("div",{className:"asm-view",children:[(0,r.jsxs)("div",{className:"asm-view-toolbar",children:[(0,r.jsx)("div",{className:"asm-view-compiling",children:t?l:""}),(0,r.jsx)("div",{className:"asm-view-label",children:"Compiler:"}),(0,r.jsxs)("select",{value:c,onChange:e=>u((0,i.selectCompiler)(e.currentTarget.value)),children:[(0,r.jsx)("option",{value:"QB40",children:"QuickBASIC 4.0"}),(0,r.jsx)("option",{value:"QB45",children:"QuickBASIC 4.5"}),(0,r.jsx)("option",{value:"PDS71",children:"Professional Development System (PDS) 7.1"}),(0,r.jsx)("option",{value:"VBD10",children:"Visual BASIC (VB) For DOS 1.0"})]})]}),(0,r.jsx)(s,{theme:"vs-light",options:a,language:d,value:k,onMount:(e,t)=>{T.current={editor:e,monaco:t},p(!0)}})]})};var o=c(8216),n=c(7363),i=c(6075),r=c(5893);const s=monaco_react.default,a={selectOnLineNumbers:!0,automaticLayout:!0,readOnly:!0}},2284:(e,t,c)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=(0,o.useDispatch)(),t=(0,o.useSelector)((({asm:e})=>e)),c=(0,o.useSelector)((({source:e})=>e)),l=(0,n.useRef)(null),q=(0,n.useRef)([]),[p,u]=(0,n.useState)(!1);(0,n.useEffect)((()=>{e((0,i.compile)())}),[]),(0,n.useEffect)((()=>{if(!l.current)return;const{editor:e,monaco:c}=l.current,o=q.current,n=function(e,t){if(!e||e.errors.length>0)return[];let c=0;return e.blocks.flatMap((e=>{if(0==e.asm.length)return[];const[o,n]=e.lines;return[{range:new t(o,1,n,1),options:{isWholeLine:!0,className:"blockColor"+c++%10}}]}))}(t,c.Range);(o.length>0||n.length>0)&&(q.current=e.deltaDecorations(o,n));const i=e.getModel(),r=a(t);c.editor.setModelMarkers(i,"BC",r)}),[t,p]);const T={selectOnLineNumbers:!0,automaticLayout:!0,fixedOverflowWidgets:!0,overflowWidgetsDomNode:document.body};return(0,r.jsx)(s,{theme:"vs-light",options:T,onChange:t=>e((0,i.updateSource)(t)),value:c,onMount:(t,o)=>{l.current={editor:t,monaco:o},u(!0);const n=o.editor.createModel(c,"vb");n.setEOL(1),t.setModel(n),t.addCommand(o.KeyCode.F1,(function(){const c=t.getPosition(),o=t.getModel().getWordAtPosition(c);e((0,i.openHelp)(o?o.word:""))}),"");for(const e of document.getElementsByTagName("style"))e.innerHTML.includes(".monaco-editor .monaco-hover")&&(e.innerHTML=e.innerHTML.replaceAll(".monaco-editor .monaco-hover",".monaco-hover")),e.innerHTML.includes(".monaco-editor .monaco-editor-overlay-message")&&(e.innerHTML=e.innerHTML.replaceAll(".monaco-editor .monaco-editor-overlay-message",".monaco-hover"))}})};var o=c(8216),n=c(7363),i=c(6075),r=c(5893);const s=monaco_react.default;function a(e){return null===e?[]:e.errors.map((e=>({startLineNumber:e.line,startColumn:e.column,endLineNumber:e.line,endColumn:e.column,message:e.message,severity:monaco.MarkerSeverity.Error})))}},48:(e,t,c)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=(0,o.useSelector)((({article:e})=>e.fragment));return(0,n.jsx)("iframe",{src:`/qboho/${e}`,className:"basbolt-help"})};var o=c(8216),n=c(5893)},566:(e,t,c)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const[e,t]=(0,s.useState)(p),c=(0,a.useSelector)((({article:e})=>e)),q=(0,s.useRef)(null),u=({id:e})=>{switch(e){case"editor":return{id:e,cached:!0,title:"editor",content:(0,l.jsx)(o.default,{})};case"asm":return{id:e,title:"asm",content:(0,l.jsx)(n.default,{})};case"help":return{id:e,title:"help",closable:!0,content:(0,l.jsx)(i.default,{})}}};return(0,s.useEffect)((()=>{c&&q.current&&(q.current.find("help")||q.current.dockMove(u({id:"help"}),"root","top"))}),[c]),(0,l.jsx)(r.default,{loadTab:u,layout:e,ref:q,dropMode:"edge",onLayoutChange:e=>{t(e)}})};var o=q(c(2284)),n=q(c(8077)),i=q(c(48)),r=q(c(1807)),s=c(7363),a=c(8216);c(5157);var l=c(5893);function q(e){return e&&e.__esModule?e:{default:e}}const p={dockbox:{id:"root",mode:"horizontal",children:[{tabs:[{id:"editor"}]},{tabs:[{id:"asm"}]}]}}},3057:(e,t,c)=>{var o=p(c(1533)),n=c(8216),i=c(4890),r=p(c(3894)),s=p(c(566)),a=p(c(7e3)),l=p(c(7263));c(4530);var q=c(5893);function p(e){return e&&e.__esModule?e:{default:e}}addEventListener("load",(()=>{const e=new a.default(document),t=(0,i.createStore)(l.default,(0,i.applyMiddleware)(r.default.withExtraArgument({compiler:e})));o.default.render((0,q.jsx)(n.Provider,{store:t,children:(0,q.jsx)(s.default,{})}),document.getElementById("root"))}))},7263:(e,t,c)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(9397);const n={asm:null,article:null,isCompiling:!0,compiler:"QB45",source:'PRINT "HELLO WORLD"'};t.default=(e=n,t)=>{switch(t.type){case o.START_COMPILE:return{...e,isCompiling:!0};case o.STOP_COMPILE:return{...e,isCompiling:!1};case o.UPDATE_ASM:return{...e,asm:t.asm};case o.OPEN_HELP:return{...e,article:{fragment:t.article}};case o.SELECT_COMPILER:return{...e,compiler:t.compiler};case o.UPDATE_SOURCE:return{...e,source:t.source};default:return e}}},7e3:(e,t,c)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(5618);class n{constructor(){this.buffer="",this.sentinel="",this.numChars=-1,this.resolver=()=>{},this.pending=Promise.resolve()}acceptChar(e){this.buffer+=e,(this.numChars>0&&0==--this.numChars||this.sentinel.length>0&&this.buffer.endsWith(this.sentinel))&&(this.resolver(this.buffer),this.buffer="")}queue(e,t,c=null){return this._queue(e,t,-1,c)}queueFixedResponse(e,t,c=null){return this._queue(e,"",t,c)}_queue(e,t,c,o){return this.pending=new Promise((o=>this.pending.finally((()=>{this.sentinel=t,this.numChars=c,this.resolver=o,e()})))),null!==o&&(this.pending=this.pending.then(o)),this.pending}}class i{constructor(){this.pending={promise:Promise.resolve(),tryCancel:!1}}queue(e){this.pending.tryCancel=!0;const t=this.pending={tryCancel:!1,promise:(()=>{const c=()=>t.tryCancel?{canceled:!0}:e();return this.pending.promise.then(c,c)})()};return t.promise}}t.default=class{constructor(e){this.container=e.createElement("div");const t=e.createElement("div");t.style.cssText="white-space: pre; font: 14px monospace; line-height: 14px",this.container.appendChild(t);const c=e.createElement("canvas");this.container.style.display="none",this.container.appendChild(c),e.body.appendChild(this.container),this.emulator=new V86Starter({memory_size:33554432,vga_memory_size:2097152,screen_container:this.container,bios:{url:"seabios.bin"},vga_bios:{url:"vgabios.bin"},fda:{url:"basbolt.img",async:!0},autostart:!0}),this.serial=new n,this.emulator.add_listener("serial0-output-char",(e=>{this.serial.acceptChar(e)})),this.serial.queue((()=>{}),"ready\r\n",(e=>{const t=/\(buffer (\d+), size (\d+)\)/g.exec(e);if(null===t)throw new Error(`expected buffer address, found ${JSON.stringify(e)}`);const c=Number(t[1]),o=Number(t[2]);this.bufferAddress=c,this.bufferSize=o})),this.compileQueue=new i}async _sendCommands(e){await this.serial.queue((()=>{const t=`${e.join("\r\n")}\r\nECHO (err %ERRORLEVEL%) ready>COM1\r\n`;this.emulator.serial0_send(t)}),"ready\r\n")}writeBuffer(e){this.emulator.write_memory(e,this.bufferAddress)}readBuffer(){return this.emulator.read_memory(this.bufferAddress,this.bufferSize)}compile(e,t){return 0===e.length?{lines:[],blocks:[],errors:[]}:this.compileQueue.queue((async()=>{t&&t.onBegin&&t.onBegin();try{await this.serial.queue((()=>{this.emulator.serial0_send(`compile\n${t.compiler}\nA:\\JOB.BAS\n${e.length}\n`)}),"ready\r\n");const c=(0,o.encode)(e);for(let e=0;e<c.length;e+=this.bufferSize){const t=c.length-e,o=Math.min(t,this.bufferSize);this.writeBuffer(c.subarray(e,e+o));const n=t>this.bufferSize?"ready\r\n":"received\r\n";await this.serial.queue((()=>{this.emulator.serial0_send("a")}),n)}const n=await this.serial.queue((()=>{}),"done\r\nready\r\n"),i=/\(size (\d+)\)/g.exec(n);if(null===i)throw new Error(`Unexpected output: '${n}'`);const r=new Uint8Array(Number(i[1]));for(let e=0;e<r.length;e+=this.bufferSize){const t=r.length-e,c=Math.min(t,this.bufferSize);r.set(this.readBuffer().subarray(0,c),e),await this.serial.queue((()=>{this.emulator.serial0_send("a")}),"ready\r\n")}return{lst:(0,o.decode)(r)}}finally{t&&t.onEnd&&t.onEnd()}}))}close(){this.emulator.exit()}}},5618:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.encode=function(e){const t=new Uint8Array(e.length);let c=0;for(const n of e){const e=n.charCodeAt(0);if(e<127)t[c]=e;else{const i=o[n];if(void 0===i)throw new Error(`cannot encode '${n}' (code ${e}) for DOS (CP437)`);t[c]=i}c++}return t.subarray(0,c)},t.decode=function(e){const t=new Uint16Array(e.length);for(let c=0;c<e.length;c++){const o=e[c];t[c]=o>126?n[o-127]:o}return new TextDecoder("utf-16",{ignoreBOM:!0}).decode(t)};const c=Array.from("⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "),o=Object.fromEntries(c.map(((e,t)=>[e,t+127]))),n=new Uint16Array(c.map((e=>e.charCodeAt(0))));new TextDecoder("utf-16")},6318:(e,t)=>{function c(e,t,c){t.lastIndex=0;const o=t.exec(e);return null===o?null:c(o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=[],c=[],o=[];let i=0,s=0;for(const l of e.split(/\r?\n/)){const e=t.length>0?t[t.length-1]:null,p=o.length>0?o[o.length-1]:null,u=c.length>0?c[c.length-1]:null,T=n(l);if(null===T){if(1===i||2===i){const e=r(l);if(null!==e){c.push({line:s,...e}),i=2;continue}}if(1===i||2===i){const e=a(l);if(null!==e){1===i?p.text+=e.text:2===i&&(u.message+=e.text);continue}}if(1===i||3===i){const t=q(l);null!==t&&(i=3,e.asm.push(t))}}else{const c={line:++s,...T};null!==p&&p.offset===T.offset?(o.push(c),e.lines[1]=s):(o.push(c),t.push({lines:[s,s],asm:[]})),i=1}}t.length>0&&""===o[t[t.length-1].lines[0]-1].text&&t.pop();return{lines:o,blocks:t,errors:c}};const o=/^ ([A-Z0-9]{4,4})   ([A-Z0-9]{4,4})    (.*)/,n=e=>c(e,o,(([e,t,c,o])=>({offset:Number(`0x${t}`),data:Number(`0x${c}`),text:o}))),i=/^ {16,16}( {0,61})\^\x07 (.*)/,r=e=>c(e,i,(([e,t,c])=>({column:t.length+1,message:c}))),s=/^ {16,16}(.*)/,a=e=>c(e,s,(([e,t])=>({text:t}))),l=/^ ([A-Z0-9]{4,4})    \*\*     (.*)/,q=e=>c(e,l,(([e,t,c])=>({offset:Number(`0x${t}`),text:c})))},3314:(e,t,c)=>{c.d(t,{Z:()=>i});var o=c(3645),n=c.n(o)()(!1);n.push([e.id,"html, body {\n  height: 100%;\n  margin: 0;\n}\n\nh1 {\n  margin: 0;\n  padding: 0;\n}\n\nh1, em, .dock-tab {\n  font-family: sans-serif;\n}\n\n#app {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  min-height: 100%;\n}\n\n#header {\n  padding: 1em;\n}\n\n#root > .dock-layout {\n  min-height: 100%;\n}\n\n.basbolt-help {\n  width: 100%;\n  height: 100%;\n}\n\n.asm-view {\n  display: grid;\n  height: 100%;\n  grid-template-rows: auto 1fr;\n}\n\n.asm-view-toolbar {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  column-gap: 1em;\n  align-items: center;\n\n  padding: 1em;\n  font: 12px sans-serif;\n  color: gray;\n  background-color: #fafafd;\n}\n\n.asm-view-compiling {\n  text-align: center;\n}\n\n.asm-view > :last-child {\n  height: 100%;\n}\n\n.sourceError {\n  text-decoration: underline red wavy;\n}\n\n.blockColor0 {\n  opacity: 0.5;\n  background: #c9e4de;\n}\n.blockColor1 {\n  opacity: 0.5;\n  background: #c6def1;\n}\n.blockColor2 {\n  opacity: 0.5;\n  background: #faedcb;\n}\n.blockColor3 {\n  opacity: 0.5;\n  background: #dbcdf0;\n}\n.blockColor4 {\n  opacity: 0.5;\n  background: #f7d9c4;\n}\n.blockColor5 {\n  opacity: 0.5;\n  background: #f2c6de;\n}\n.blockColor6 {\n  opacity: 0.5;\n  background: #e2cfc4;\n}\n.blockColor7 {\n  opacity: 0.5;\n  background: #f9c6c9;\n}\n.blockColor8 {\n  opacity: 0.5;\n  background: #d2d2cf;\n}\n.blockColor9 {\n  opacity: 0.5;\n  background: #e2e2df;\n}\n  \ndiv.hover-row.status-bar {\n  display: none !important;\n}\n",""]);const i=n},4530:(e,t,c)=>{c.r(t),c.d(t,{default:()=>s});var o=c(3379),n=c.n(o),i=c(3314),r={insert:"head",singleton:!1};n()(i.Z,r);const s=i.Z.locals||{}},7086:e=>{e.exports=PropTypes},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM}},c={};function o(e){var n=c[e];if(void 0!==n)return n.exports;var i=c[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=t,e=[],o.O=(t,c,n,i)=>{if(!c){var r=1/0;for(q=0;q<e.length;q++){for(var[c,n,i]=e[q],s=!0,a=0;a<c.length;a++)(!1&i||r>=i)&&Object.keys(o.O).every((e=>o.O[e](c[a])))?c.splice(a--,1):(s=!1,i<r&&(r=i));if(s){e.splice(q--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var q=e.length;q>0&&e[q-1][2]>i;q--)e[q]=e[q-1];e[q]=[c,n,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var c in t)o.o(t,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,c)=>{var n,i,[r,s,a]=c,l=0;if(r.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(a)var q=a(o)}for(t&&t(c);l<r.length;l++)i=r[l],o.o(e,i)&&e[i]&&e[i][0](),e[r[l]]=0;return o.O(q)},c=self.webpackChunkbasbolt=self.webpackChunkbasbolt||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))})(),o.O(void 0,[672],(()=>o(3057)));var n=o.O(void 0,[672],(()=>o(4530)));n=o.O(n)})();