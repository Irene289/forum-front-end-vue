(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a92d83b"],{"12b5":function(e,t,a){},5652:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:e.newCategoryName},on:{input:function(t){t.target.composing||(e.newCategoryName=t.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:e.isProcessing,type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.createCategory.apply(null,arguments)}}},[e._v(" 新增 ")])])])]),e.isLoading?a("Spinner"):a("table",{staticClass:"table"},[a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[e._v(" # ")]),a("th",{attrs:{scope:"col"}},[e._v(" Category Name ")]),a("th",{attrs:{scope:"col",width:"210"}},[e._v(" Action ")])])]),a("tbody",e._l(e.categories,(function(t){return a("tr",{key:t.id},[a("th",{attrs:{scope:"row"}},[e._v(" "+e._s(t.id)+" ")]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[e._v(" "+e._s(t.name)+" ")]),a("input",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:t.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.handleCancel(t.id)}}},[e._v(" ✕ ")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.toggleIsEditing(t.id)}}},[e._v(" Edit ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.updateCategory({categoryId:t.id,name:t.name})}}},[e._v(" Save ")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.deleteCategory(t.id)}}},[e._v(" Delete ")])])])})),0)])],1)},n=[],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("d9e2"),a("d81d"),a("4de4"),a("d3b7"),a("b0c0"),a("e04c")),c=a("2375"),u=a("be6c"),d=a("2fa3"),g={name:"AdminCategories",components:{AdminNav:o["a"],Spinner:c["a"]},data:function(){return{categories:[],newCategoryName:"",isProcessing:!1,isLoading:!0}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,u["a"].categories.get();case 4:if(a=t.sent,r=a.data,"OK"===a.statusText){t.next=8;break}throw new Error(a.statusText);case 8:e.categories=r.categories.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{isEditing:!1,nameCached:""})})),e.isLoading=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](0),e.isLoading=!1,console.log("Error",t.t0),d["a"].fire({icon:"error",title:"無法取得類別，請稍後再試"});case 17:case"end":return t.stop()}}),t,null,[[0,12]])})))()},createCategory:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.isProcessing=!0,e.newCategoryName){t.next=6;break}return d["a"].fire({icon:"warning",title:"請輸入類別"}),e.isProcessing=!1,t.abrupt("return");case 6:return t.next=8,u["a"].categories.create({name:e.newCategoryName});case 8:if(a=t.sent,r=a.data,"success"===r.status){t.next=12;break}throw new Error(r.message);case 12:e.categories.push({id:r.categoryId,name:e.newCategoryName,isEditing:!1}),e.isProcessing=!1,e.newCategoryName="",t.next=22;break;case 17:t.prev=17,t.t0=t["catch"](0),e.isProcessing=!1,console.log("Error",t.t0),d["a"].fire({icon:"error",title:"無法新增類別，請稍後再試"});case 22:case"end":return t.stop()}}),t,null,[[0,17]])})))()},deleteCategory:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u["a"].categories.delete({categoryId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.categories=t.categories.filter((function(t){return t.id!==e})),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log("Error",a.t0),d["a"].fire({icon:"error",title:"無法刪除類別，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},toggleIsEditing:function(e){this.categories=this.categories.map((function(t){return t.id===e?Object(s["a"])(Object(s["a"])({},t),{},{nameCached:t.name,isEditing:!t.isEditing}):t}))},updateCategory:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.categoryId,n=e.name,a.prev=1,a.next=4,u["a"].categories.update({categoryId:r,name:n});case 4:if(s=a.sent,i=s.data,console.log(i),"success"===i.status){a.next=9;break}throw new Error(i.message);case 9:t.toggleIsEditing(r),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](1),console.log("Error",a.t0),d["a"].fire({icon:"error",title:"無法刪除類別，請稍後再試"});case 16:case"end":return a.stop()}}),a,null,[[1,12]])})))()},handleCancel:function(e){this.categories=this.categories.map((function(t){return t.id===e?Object(s["a"])(Object(s["a"])({},t),{},{name:t.nameCached}):t})),this.toggleIsEditing(e)}}},l=g,m=(a("d815"),a("2877")),p=Object(m["a"])(l,r,n,!1,null,"4010e624",null);t["default"]=p.exports},be6c:function(e,t,a){"use strict";a("b0c0");var r=a("2fa3");t["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},update:function(e){var t=e.categoryId,a=e.name;return r["b"].put("/admin/categories/".concat(t),{name:a})},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t})},delete:function(e){var t=e.categoryId;return r["b"].delete("/admin/categories/".concat(t))}},restaurants:{getDetail:function(e){var t=e.restaurantId;return r["b"].get("/admin/restaurants/".concat(t))},update:function(e){var t=e.restaurantId,a=e.formData;return r["b"].put("/admin/restaurants/".concat(t),a)},create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t)},get:function(){return r["b"].get("/admin/restaurants")},delete:function(e){var t=e.restaurantId;return r["b"].delete("/admin/restaurants/".concat(t))}},users:{get:function(){return r["b"].get("/admin/users")},update:function(e){var t=e.userId,a=e.isAdmin;return r["b"].put("/admin/users/".concat(t),{isAdmin:a})}}}},d815:function(e,t,a){"use strict";a("12b5")},d81d:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e04c:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-3"},[a("h1",[e._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[e._v("Restaurants")]),e._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[e._v("Categories")]),e._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[e._v("Users")])],1)},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-2a92d83b.e795d158.js.map