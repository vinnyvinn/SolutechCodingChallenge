(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FieldDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldDefs */ "./resources/js/components/orders/FieldDefs.js");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order */ "./resources/js/components/orders/Order.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      add_order: false,
      editing: false,
      search: '',
      headers: _FieldDefs__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  created: function created() {
    this.$store.dispatch("fetchOrders");
    this.listen();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    tableData: 'getOrders'
  })),
  methods: {
    editOrder: function editOrder(order) {
      this.$store.dispatch('fetchOrder', order);
      this.editing = true;
      this.add_order = true;
    },
    deleteOrder: function deleteOrder(id) {
      var _this = this;

      axios["delete"]("orders/".concat(id)).then(function () {
        var index = _this.tableData.findIndex(function (i) {
          return i.id == id;
        });

        _this.tableData.splice(index, 1);
      })["catch"](function (error) {
        return Exception.handle(error);
      });
    },
    listen: function listen() {
      var _this2 = this;

      eventBus.$on('listOrders', function () {
        _this2.add_order = false;
      });
      eventBus.$on('cancel', function () {
        _this2.add_order = false;
        _this2.editing = false;
      });
      eventBus.$on('updateOrder', function (order) {
        _this2.add_order = false;
        _this2.editing = false;

        var index = _this2.tableData.findIndex(function (i) {
          return i.id == order.id;
        });

        _this2.tableData.splice(index, 1);

        _this2.$store.dispatch('updateOrder', order);
      });
    }
  },
  components: {
    Order: _Order__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Order.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/Order.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['edit'],
  data: function data() {
    return {
      form: {
        order_number: '',
        product_id: [],
        id: ''
      },
      items: [],
      lastSelectItem: {},
      products_data: [],
      edit_order: this.edit
    };
  },
  created: function created() {
    this.$store.dispatch('fetchProducts');
    this.listen();
  },
  watch: {
    products: function products() {
      var _this = this;

      this.products.forEach(function (s) {
        _this.products_data.push({
          value: s.id,
          text: s.name
        });
      });
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    order: 'getOrder',
    products: 'getProducts'
  })),
  methods: {
    onSelect: function onSelect(items, lastSelectItem) {
      this.items = items;
      this.lastSelectItem = lastSelectItem;
    },
    // deselect option
    reset: function reset() {
      //reset
      this.items = [];
      this.form.product_id = [];
    },
    saveOrder: function saveOrder() {
      if (this.items.length === 0) return this.$toastr.e('Product field is required');
      this.productArray();
      this.edit_order ? this.update() : this.save();
    },
    productArray: function productArray() {
      var _this2 = this;

      this.form.product_id = [];
      this.items.forEach(function (s) {
        _this2.form.product_id.push(s.value);
      });
    },
    save: function save() {
      var _this3 = this;

      delete this.form.id;
      axios.post('orders', this.form).then(function (res) {
        _this3.$store.dispatch('updateOrder', res.data);

        eventBus.$emit('listOrders', res.data);
      })["catch"](function (error) {
        if (error.response.data.message) {
          _this3.$toastr.e(error.response.data.message);
        } else if (_typeof(error.response.data.errors.order_number) !== undefined) {
          _this3.$toastr.e(error.response.data.errors.order_number.toString());
        }
      });
    },
    update: function update() {
      var _this4 = this;

      var submittedData = {
        product_id: this.form.product_id,
        order_number: this.form.order_number
      };
      axios.patch("orders/".concat(this.form.id), submittedData).then(function (res) {
        _this4.edit_order = false;
        eventBus.$emit('updateOrder', res.data);
      })["catch"](function (error) {
        return error.response;
      });
    },
    cancel: function cancel() {
      eventBus.$emit('cancel');
    },
    selectedProducts: function selectedProducts(products) {
      var _this5 = this;

      products.forEach(function (s) {
        _this5.items.push({
          text: s.name,
          value: s.id
        });
      });
    },
    listen: function listen() {
      if (this.edit) {
        this.form = this.order;
        this.selectedProducts(this.order.products);
      }
    }
  },
  components: {
    MultiSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_1__["MultiSelect"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Index.vue?vue&type=template&id=33f44cd3&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/Index.vue?vue&type=template&id=33f44cd3& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.add_order ? _c("order", { attrs: { edit: _vm.editing } }) : _vm._e(),
      _vm._v(" "),
      !_vm.add_order
        ? _c("section", { staticClass: "content" }, [
            _c("div", { staticClass: "box" }, [
              _c(
                "div",
                { staticClass: "box-body" },
                [
                  _c(
                    "v-app",
                    { attrs: { id: "inspire" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _vm._v(
                                "\n                            Orders\n                            "
                              ),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "append-icon": "mdi-magnify",
                                  label: "Search",
                                  "single-line": "",
                                  "hide-details": ""
                                },
                                model: {
                                  value: _vm.search,
                                  callback: function($$v) {
                                    _vm.search = $$v
                                  },
                                  expression: "search"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    small: "",
                                    color: "indigo",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.add_order = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Add Order\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.tableData,
                              search: _vm.search,
                              "item-key": "name",
                              "footer-props": {
                                showFirstLastPage: true,
                                firstIcon: "mdi-arrow-collapse-left",
                                lastIcon: "mdi-arrow-collapse-right",
                                prevIcon: "mdi-minus",
                                nextIcon: "mdi-plus"
                              }
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "item.actions",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mx-1 my-1",
                                          attrs: {
                                            fab: "",
                                            dark: "",
                                            color: "indigo",
                                            small: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.editOrder(item)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { dark: "", small: "" } },
                                            [_vm._v("mdi-pencil")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mx-1 my-1",
                                          attrs: {
                                            fab: "",
                                            dark: "",
                                            color: "pink",
                                            small: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteOrder(item.id)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { dark: "", small: "" } },
                                            [_vm._v("mdi-delete")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              3360510024
                            )
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Order.vue?vue&type=template&id=4cbf0d4f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/Order.vue?vue&type=template&id=4cbf0d4f&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "box" }, [
        _c("div", { staticClass: "box-header with-border" }, [
          _c("h3", { staticClass: "box-title" }, [
            _vm._v(_vm._s(_vm.edit_order ? "Update Order" : "New Order"))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "box-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.saveOrder()
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.order_number,
                      expression: "form.order_number"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", required: "" },
                  domProps: { value: _vm.form.order_number },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "order_number", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [_vm._v("Product")]),
                  _vm._v(" "),
                  _c("multi-select", {
                    attrs: {
                      options: _vm.products_data,
                      "selected-options": _vm.items,
                      placeholder: "select product(s)"
                    },
                    on: { select: _vm.onSelect }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v(_vm._s(_vm.edit_order ? "Update" : "Save"))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-danger",
                  attrs: { type: "button" },
                  on: { click: _vm.cancel }
                },
                [_vm._v("Cancel")]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/orders/FieldDefs.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/orders/FieldDefs.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  text: '#',
  align: 'left',
  sortable: false,
  value: 'id'
}, {
  text: 'Order Number',
  value: 'order_number'
}, {
  text: 'Actions',
  value: 'actions',
  sortable: false
}]);

/***/ }),

/***/ "./resources/js/components/orders/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/orders/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_33f44cd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=33f44cd3& */ "./resources/js/components/orders/Index.vue?vue&type=template&id=33f44cd3&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_33f44cd3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_33f44cd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/orders/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/Index.vue?vue&type=template&id=33f44cd3&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/orders/Index.vue?vue&type=template&id=33f44cd3& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_33f44cd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=33f44cd3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Index.vue?vue&type=template&id=33f44cd3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_33f44cd3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_33f44cd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/orders/Order.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/orders/Order.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order_vue_vue_type_template_id_4cbf0d4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=4cbf0d4f&scoped=true& */ "./resources/js/components/orders/Order.vue?vue&type=template&id=4cbf0d4f&scoped=true&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_vue_vue_type_template_id_4cbf0d4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_vue_vue_type_template_id_4cbf0d4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cbf0d4f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/Order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/Order.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/orders/Order.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/Order.vue?vue&type=template&id=4cbf0d4f&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/orders/Order.vue?vue&type=template&id=4cbf0d4f&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_4cbf0d4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=template&id=4cbf0d4f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Order.vue?vue&type=template&id=4cbf0d4f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_4cbf0d4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_4cbf0d4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);