(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Reports"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/orders/OrderReport.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/orders/OrderReport.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _FieldDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldDefs */ "./resources/js/components/reports/orders/FieldDefs.js");
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
  components: {
    DatePicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search: '',
      headers: _FieldDefs__WEBPACK_IMPORTED_MODULE_2__["default"],
      start: '',
      end: ''
    };
  },
  watch: {
    period: function period() {
      if (this.start && this.end) {
        this.$store.dispatch('setOrdersReport', {
          from: this.start,
          to: this.end
        });
      }
    }
  },
  created: function created() {
    this.$store.dispatch("fetchOrders");
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    tableData: 'getOrders',
    reports: 'getOrdersReportFormatted'
  })), {}, {
    period: function period() {
      return [this.start, this.end].join();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/products/ProductReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/products/ProductReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _FieldDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldDefs */ "./resources/js/components/reports/products/FieldDefs.js");
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
  components: {
    DatePicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search: '',
      headers: _FieldDefs__WEBPACK_IMPORTED_MODULE_2__["default"],
      start: '',
      end: ''
    };
  },
  watch: {
    period: function period() {
      if (this.start && this.end) {
        this.$store.dispatch('setProductsReport', {
          from: this.start,
          to: this.end
        });
      }
    }
  },
  created: function created() {
    this.$store.dispatch("fetchProducts");
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    tableData: 'getProducts',
    reports: 'getProductsReportFormatted'
  })), {}, {
    period: function period() {
      return [this.start, this.end].join();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _FieldDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldDefs */ "./resources/js/components/reports/suppliers/FieldDefs.js");
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
  components: {
    DatePicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search: '',
      headers: _FieldDefs__WEBPACK_IMPORTED_MODULE_2__["default"],
      start: '',
      end: ''
    };
  },
  watch: {
    period: function period() {
      if (this.start && this.end) {
        this.$store.dispatch('setSuppliersReport', {
          from: this.start,
          to: this.end
        });
      }
    }
  },
  created: function created() {
    this.$store.dispatch("fetchSuppliers");
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    tableData: 'getSuppliers',
    reports: 'getSuppliersReportFormatted'
  })), {}, {
    period: function period() {
      return [this.start, this.end].join();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mtp-15{\n   margin-top: 35px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierReport.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/orders/OrderReport.vue?vue&type=template&id=9b91f29a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/orders/OrderReport.vue?vue&type=template&id=9b91f29a& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            staticStyle: { "margin-right": "10px" }
                          },
                          [
                            _c("label", [_vm._v("Start Date")]),
                            _vm._v(" "),
                            _c("date-picker", {
                              attrs: {
                                required: "",
                                format: "yyyy-MM-dd",
                                "input-class": "form-control bg-white"
                              },
                              model: {
                                value: _vm.start,
                                callback: function($$v) {
                                  _vm.start = $$v
                                },
                                expression: "start"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("End Date")]),
                            _vm._v(" "),
                            _c("date-picker", {
                              attrs: {
                                required: "",
                                format: "yyyy-MM-dd",
                                "input-class": "form-control bg-white"
                              },
                              model: {
                                value: _vm.end,
                                callback: function($$v) {
                                  _vm.end = $$v
                                },
                                expression: "end"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group mtp-15" },
                          [
                            _vm.reports.length
                              ? _c(
                                  "download-excel",
                                  {
                                    staticClass:
                                      "btn btn-primary pull-right export-btn",
                                    attrs: {
                                      data: _vm.reports,
                                      title: "Orders",
                                      name: "orders.xls"
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-file-excel-o"
                                    }),
                                    _vm._v(
                                      " Export Excel\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
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
                      }
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/products/ProductReport.vue?vue&type=template&id=4930965a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/products/ProductReport.vue?vue&type=template&id=4930965a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                          "\n                            Products\n                            "
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
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            staticStyle: { "margin-right": "10px" }
                          },
                          [
                            _c("label", [_vm._v("Start Date")]),
                            _vm._v(" "),
                            _c("date-picker", {
                              attrs: {
                                required: "",
                                format: "yyyy-MM-dd",
                                "input-class": "form-control bg-white"
                              },
                              model: {
                                value: _vm.start,
                                callback: function($$v) {
                                  _vm.start = $$v
                                },
                                expression: "start"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("End Date")]),
                            _vm._v(" "),
                            _c("date-picker", {
                              attrs: {
                                required: "",
                                format: "yyyy-MM-dd",
                                "input-class": "form-control bg-white"
                              },
                              model: {
                                value: _vm.end,
                                callback: function($$v) {
                                  _vm.end = $$v
                                },
                                expression: "end"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group mtp-15" },
                          [
                            _vm.reports.length
                              ? _c(
                                  "download-excel",
                                  {
                                    staticClass:
                                      "btn btn-primary pull-right export-btn",
                                    attrs: {
                                      data: _vm.reports,
                                      title: "Products",
                                      name: "products.xls"
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-file-excel-o"
                                    }),
                                    _vm._v(
                                      " Export Excel\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
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
                      }
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=template&id=349d9fc3&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=template&id=349d9fc3& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                          "\n                            Suppliers\n                            "
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
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            staticStyle: { "margin-right": "10px" }
                          },
                          [
                            _c("label", [_vm._v("Start Date")]),
                            _vm._v(" "),
                            _c("date-picker", {
                              attrs: {
                                required: "",
                                format: "yyyy-MM-dd",
                                "input-class": "form-control bg-white"
                              },
                              model: {
                                value: _vm.start,
                                callback: function($$v) {
                                  _vm.start = $$v
                                },
                                expression: "start"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("End Date")]),
                            _vm._v(" "),
                            _c("date-picker", {
                              attrs: {
                                required: "",
                                format: "yyyy-MM-dd",
                                "input-class": "form-control bg-white"
                              },
                              model: {
                                value: _vm.end,
                                callback: function($$v) {
                                  _vm.end = $$v
                                },
                                expression: "end"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group mtp-15" },
                          [
                            _vm.reports.length
                              ? _c(
                                  "download-excel",
                                  {
                                    staticClass:
                                      "btn btn-primary pull-right export-btn",
                                    attrs: {
                                      data: _vm.reports,
                                      title: "Suppliers",
                                      name: "suppliers.xls"
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-file-excel-o"
                                    }),
                                    _vm._v(
                                      " Export Excel\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
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
                      }
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reports/orders/FieldDefs.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/reports/orders/FieldDefs.js ***!
  \*************************************************************/
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
  text: 'Date Created',
  value: 'date_created'
}]);

/***/ }),

/***/ "./resources/js/components/reports/orders/OrderReport.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/reports/orders/OrderReport.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderReport_vue_vue_type_template_id_9b91f29a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderReport.vue?vue&type=template&id=9b91f29a& */ "./resources/js/components/reports/orders/OrderReport.vue?vue&type=template&id=9b91f29a&");
/* harmony import */ var _OrderReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderReport.vue?vue&type=script&lang=js& */ "./resources/js/components/reports/orders/OrderReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderReport_vue_vue_type_template_id_9b91f29a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderReport_vue_vue_type_template_id_9b91f29a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reports/orders/OrderReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reports/orders/OrderReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/reports/orders/OrderReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/orders/OrderReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reports/orders/OrderReport.vue?vue&type=template&id=9b91f29a&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/reports/orders/OrderReport.vue?vue&type=template&id=9b91f29a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReport_vue_vue_type_template_id_9b91f29a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderReport.vue?vue&type=template&id=9b91f29a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/orders/OrderReport.vue?vue&type=template&id=9b91f29a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReport_vue_vue_type_template_id_9b91f29a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderReport_vue_vue_type_template_id_9b91f29a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/reports/products/FieldDefs.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/reports/products/FieldDefs.js ***!
  \***************************************************************/
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
  text: 'Name',
  value: 'name'
}, {
  text: 'Description',
  value: 'description'
}, {
  text: 'Quantity',
  value: 'quantity'
}, {
  text: 'Date Created',
  value: 'date_created'
}]);

/***/ }),

/***/ "./resources/js/components/reports/products/ProductReport.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/reports/products/ProductReport.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReport_vue_vue_type_template_id_4930965a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReport.vue?vue&type=template&id=4930965a& */ "./resources/js/components/reports/products/ProductReport.vue?vue&type=template&id=4930965a&");
/* harmony import */ var _ProductReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductReport.vue?vue&type=script&lang=js& */ "./resources/js/components/reports/products/ProductReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductReport_vue_vue_type_template_id_4930965a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductReport_vue_vue_type_template_id_4930965a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reports/products/ProductReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reports/products/ProductReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/reports/products/ProductReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/products/ProductReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reports/products/ProductReport.vue?vue&type=template&id=4930965a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/reports/products/ProductReport.vue?vue&type=template&id=4930965a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReport_vue_vue_type_template_id_4930965a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReport.vue?vue&type=template&id=4930965a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/products/ProductReport.vue?vue&type=template&id=4930965a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReport_vue_vue_type_template_id_4930965a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReport_vue_vue_type_template_id_4930965a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/reports/suppliers/FieldDefs.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/reports/suppliers/FieldDefs.js ***!
  \****************************************************************/
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
  text: 'Name',
  value: 'name'
}, {
  text: 'Date Created',
  value: 'date_created'
}]);

/***/ }),

/***/ "./resources/js/components/reports/suppliers/SupplierReport.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/reports/suppliers/SupplierReport.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SupplierReport_vue_vue_type_template_id_349d9fc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupplierReport.vue?vue&type=template&id=349d9fc3& */ "./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=template&id=349d9fc3&");
/* harmony import */ var _SupplierReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupplierReport.vue?vue&type=script&lang=js& */ "./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SupplierReport_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SupplierReport.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SupplierReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SupplierReport_vue_vue_type_template_id_349d9fc3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SupplierReport_vue_vue_type_template_id_349d9fc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reports/suppliers/SupplierReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierReport.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=template&id=349d9fc3&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=template&id=349d9fc3& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_template_id_349d9fc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierReport.vue?vue&type=template&id=349d9fc3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/suppliers/SupplierReport.vue?vue&type=template&id=349d9fc3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_template_id_349d9fc3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierReport_vue_vue_type_template_id_349d9fc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);