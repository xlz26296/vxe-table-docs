(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-910b8ce8"],{3265:function(e,n,t){"use strict";t("4c78")},"4c78":function(e,n,t){},"714c":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("vxe-grid",e._b({ref:"xGrid2"},"vxe-grid",e.gridOptions2,!1)),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),t("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"tip"},[e._v(" 表格不支持拖动功能；简单示例： "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/sortablejs",target:"_blank"}},[e._v("sortablejs")]),e._v(" 等库实现列移动"),t("br"),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table",target:"_blank"}},[e._v("vxe-table")]),e._v(" 作为表格组件，可以很容易跟其他优秀的组件库互相集成，以下为简单示例可供参考。"),t("br"),e._v(" 由于直接操作了 Dom 节点，需要与 Vue 的数据同步，必须设置 column-config.useKey，并且自行根据 vue 的规则自行实现数据同步"),t("br"),t("span",{staticClass:"red"},[e._v("（注：该示例仅供参考，具体请自行实现）")])])}],a=(t("d3b7"),t("159b"),t("a9e3"),t("d81d"),t("caad"),t("c7cd"),t("a434"),t("a352")),l=t.n(a),s=t("a388"),i=t.n(s),d={data:function(){return{gridOptions2:{border:!0,showFooter:!0,class:"sortable-column-demo",columnConfig:{useKey:!0,minWidth:200},scrollX:{enabled:!1},footerMethod:this.footerMethod,toolbarConfig:{custom:!0},columns:[{field:"name",title:"Name",fixed:"left",width:300},{field:"nickname",title:"Nickname"},{field:"role",title:"Role"},{field:"sex",title:"Sex"},{field:"age",title:"Age"},{field:"date3",title:"Date"},{field:"address",title:"Address",width:200,fixed:"right",showOverflow:!0}],data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"}]},demoCodes:['\n        <vxe-grid ref="xGrid2" v-bind="gridOptions2"></vxe-grid>\n        ',"\n        import Sortable from 'sortablejs'\n        import VXETable from 'vxe-table'\n\n        export default {\n          data () {\n            return {\n              gridOptions2: {\n                border: true,\n                showFooter: true,\n                class: 'sortable-column-demo',\n                columnConfig: {\n                  useKey: true,\n                  minWidth: 200\n                },\n                scrollX: {\n                  enabled: false\n                },\n                footerMethod: this.footerMethod,\n                toolbarConfig: {\n                  custom: true\n                },\n                columns: [\n                  { field: 'name', title: 'Name', fixed: 'left', width: 300 },\n                  { field: 'nickname', title: 'Nickname' },\n                  { field: 'role', title: 'Role' },\n                  { field: 'sex', title: 'Sex' },\n                  { field: 'age', title: 'Age' },\n                  { field: 'date3', title: 'Date' },\n                  { field: 'address', title: 'Address', width: 200, fixed: 'right', showOverflow: true }\n                ],\n                data: [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }\n                ]\n              }\n            }\n          },\n          created () {\n            this.columnDrop2()\n          },\n          beforeDestroy () {\n            if (this.sortable2) {\n              this.sortable2.destroy()\n            }\n          },\n          methods: {\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'sex'].includes(column.property)) {\n                    return this.meanNum(data, column.property)\n                  }\n                  return null\n                }),\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'sex'].includes(column.property)) {\n                    return this.sumNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            },\n            columnDrop2 () {\n              this.$nextTick(() => {\n                const $table = this.$refs.xGrid2\n                this.sortable2 = Sortable.create($table.$el.querySelector('.body--wrapper>.vxe-table--header .vxe-header--row'), {\n                  handle: '.vxe-header--column',\n                  onEnd: ({ item, newIndex, oldIndex }) => {\n                    const { fullColumn, tableColumn } = $table.getTableColumn()\n                    const targetThElem = item\n                    const wrapperElem = targetThElem.parentNode\n                    const newColumn = fullColumn[newIndex]\n                    if (newColumn.fixed) {\n                      const oldThElem = wrapperElem.children[oldIndex]\n                      // 错误的移动\n                      if (newIndex > oldIndex) {\n                        wrapperElem.insertBefore(targetThElem, oldThElem)\n                      } else {\n                        wrapperElem.insertBefore(targetThElem, oldThElem ? oldThElem.nextElementSibling : oldThElem)\n                      }\n                      VXETable.modal.message({ content: '固定列不允许拖动，即将还原操作！', status: 'error' })\n                      return\n                    }\n                    // 获取列索引 columnIndex > fullColumn\n                    const oldColumnIndex = $table.getColumnIndex(tableColumn[oldIndex])\n                    const newColumnIndex = $table.getColumnIndex(tableColumn[newIndex])\n                    // 移动到目标列\n                    const currRow = fullColumn.splice(oldColumnIndex, 1)[0]\n                    fullColumn.splice(newColumnIndex, 0, currRow)\n                    $table.loadColumn(fullColumn)\n                  }\n                })\n              })\n            }\n          }\n        }\n        ","\n        .sortable-column-demo .vxe-header--row .vxe-header--column.sortable-ghost,\n        .sortable-column-demo .vxe-header--row .vxe-header--column.sortable-chosen {\n          background-color: #dfecfb;\n        }\n        .sortable-column-demo .vxe-header--row .vxe-header--column.col--fixed {\n          cursor: no-drop;\n        }\n        "]}},created:function(){this.columnDrop2()},beforeDestroy:function(){this.sortable2&&this.sortable2.destroy()},methods:{meanNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t/e.length},sumNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},footerMethod:function(e){var n=this,t=e.columns,r=e.data;return[t.map((function(e,t){return 0===t?"平均":["age","sex"].includes(e.property)?n.meanNum(r,e.property):null})),t.map((function(e,t){return 0===t?"和值":["age","sex"].includes(e.property)?n.sumNum(r,e.property):null}))]},columnDrop2:function(){var e=this;this.$nextTick((function(){var n=e.$refs.xGrid2;e.sortable2=l.a.create(n.$el.querySelector(".body--wrapper>.vxe-table--header .vxe-header--row"),{handle:".vxe-header--column",onEnd:function(e){var t=e.item,r=e.newIndex,o=e.oldIndex,a=n.getTableColumn(),l=a.fullColumn,s=a.tableColumn,d=t,u=d.parentNode,c=l[r];if(c.fixed){var m=u.children[o];return r>o?u.insertBefore(d,m):u.insertBefore(d,m?m.nextElementSibling:m),void i.a.modal.message({content:"固定列不允许拖动，即将还原操作！",status:"error"})}var f=n.getColumnIndex(s[o]),h=n.getColumnIndex(s[r]),p=l.splice(f,1)[0];l.splice(h,0,p),n.loadColumn(l)}})}))}}},u=d,c=(t("3265"),t("2877")),m=Object(c["a"])(u,r,o,!1,null,null,null);n["default"]=m.exports},"857a":function(e,n,t){var r=t("e330"),o=t("1d80"),a=t("577e"),l=/"/g,s=r("".replace);e.exports=function(e,n,t,r){var i=a(o(e)),d="<"+n;return""!==t&&(d+=" "+t+'="'+s(a(r),l,"&quot;")+'"'),d+">"+i+"</"+n+">"}},a9e3:function(e,n,t){"use strict";var r=t("83ab"),o=t("da84"),a=t("e330"),l=t("94ca"),s=t("6eeb"),i=t("1a2d"),d=t("7156"),u=t("3a9b"),c=t("d9b5"),m=t("c04e"),f=t("d039"),h=t("241c").f,p=t("06cf").f,b=t("9bf2").f,x=t("408a"),g=t("58a8").trim,v="Number",w=o[v],C=w.prototype,T=o.TypeError,I=a("".slice),E=a("".charCodeAt),N=function(e){var n=m(e,"number");return"bigint"==typeof n?n:_(n)},_=function(e){var n,t,r,o,a,l,s,i,d=m(e,"number");if(c(d))throw T("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=g(d),n=E(d,0),43===n||45===n){if(t=E(d,2),88===t||120===t)return NaN}else if(48===n){switch(E(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(a=I(d,2),l=a.length,s=0;s<l;s++)if(i=E(a,s),i<48||i>o)return NaN;return parseInt(a,r)}return+d};if(l(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var k,y=function(e){var n=arguments.length<1?0:w(N(e)),t=this;return u(C,t)&&f((function(){x(t)}))?d(Object(n),t,y):n},S=r?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;S.length>M;M++)i(w,k=S[M])&&!i(y,k)&&b(y,k,p(w,k));y.prototype=C,C.constructor=y,s(o,v,y)}},af03:function(e,n,t){var r=t("d039");e.exports=function(e){return r((function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},c7cd:function(e,n,t){"use strict";var r=t("23e7"),o=t("857a"),a=t("af03");r({target:"String",proto:!0,forced:a("fixed")},{fixed:function(){return o(this,"tt","","")}})}}]);