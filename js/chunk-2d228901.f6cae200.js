(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.user.image,width:"200",height:"200"}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(" "+e._s(e.isProcessing?"處理中...":"Submit")+" ")])])])},s=[],n=r("5530"),i=r("1da1"),u=(r("96cf"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("d9e2"),r("2f62")),o=r("4cce"),c=r("2fa3"),m={name:"UserEdit",data:function(){return{user:{id:-1,name:"",image:""},isProcessing:!1}},watch:{currentUser:function(e){if(e.id===this.currentUser.id){var t=this.$route.params.id;this.setUser(t)}}},created:function(){if(-1!==this.currentUser.id){var e=this.$route.params.id;this.setUser(e)}},beforeRouteUpdate:function(e,t,r){if(-1!==this.currentUser.id){var a=e.params.id;this.setUser(a),r()}},methods:{setUser:function(e){var t=this.currentUser,r=t.id,a=t.name,s=t.image;this.user={id:r,name:a,image:s},e.toString()===r.toString()||this.$router.push({name:"not-fount"})},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.user.image="";else{var r=window.URL.createObjectURL(t[0]);this.user.image=r}},handleSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,s,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.isProcessing=!0,t.user.name){r.next=5;break}return c["a"].fire({icon:"warning",title:"請輸入姓名"}),r.abrupt("return");case 5:return a=e.target,s=new FormData(a),r.next=9,o["a"].update({userId:t.user.id,formData:s});case 9:if(n=r.sent,i=n.data,"success"===i.status){r.next=13;break}throw new Error(i.message);case 13:t.$router.push({name:"user"}),r.next=21;break;case 16:r.prev=16,r.t0=r["catch"](0),t.isProcessing=!1,console.log("Error",r.t0),c["a"].fire({icon:"error",title:"無法編輯，請稍後再試"});case 21:case"end":return r.stop()}}),r,null,[[0,16]])})))()}},computed:Object(n["a"])({},Object(u["b"])(["currentUser"]))},l=m,d=r("2877"),f=Object(d["a"])(l,a,s,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d228901.f6cae200.js.map