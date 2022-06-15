"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 2346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(2333)
      processEnv([{"path":".env","contents":"# Uniform settings\n\nUNIFORM_API_KEY='uf17xwjwz3n3jh3k6we4ekpq3au56uju2aaqz05hlhcwr0zeq0nltdwgmhhtmyffqcdulh63pq7ap8jkznta7xgzsr5sx3fmq'\nUPM_CLI_API_KEY='uf1l852ufr4cszjytufemnlcfdq4sj9n252p3y3lhfncaenx9yctuu9ea3k4dwezc3vwa6wyakqkqf62mqyw95smqmky9jfha'\nUNIFORM_PROJECT_ID='bdf676cc-f85c-49dc-82cf-2999936224f6'\n\n# Optionally override preview secret. it is set to 'modena' by default\n\nUNIFORM_PREVIEW_SECRET='modena'\n\n# Contentful (for CMS)\n\nCONTENTFUL_SPACE_ID='uofata4tmebn'\nCONTENTFUL_ENVIRONMENT='master'\nCONTENTFUL_CDA_ACCESS_TOKEN='gw1pixSSJJ39llDQe7v8N8HhmiskQZIf0YzJwgLMttg'\nCONTENTFUL_CPA_ACCESS_TOKEN='hyxf5Adpqrt9KhLTvVpcJH9KbJEbVHhNNuG7Q8G_Eek'\n\n# BIGCOMMERCE settings\n\nBIGCOMMERCE_STORE_HASH='6oqtiuaa37'\nBIGCOMMERCE_TOKEN='bdziiak3ndnyyuscdatm7rfhk8y24oa'\n\n# Set this to enable Google Analytics\n\nGA_UA_ID='UA-182765069-3'\n\n# RELOAD INTENT MANIFEST\n\n# Add a webhook for the URL https://your-nextjs-app/api/publish/?secret=your-secret\n\nUNIFORM_WEBHOOK_SECRET=your-secret\n\n# set preview secret which will be appended to the `secret=` query string variable to activate the preview mode:\n\nUNIFORM_PREVIEW_SECRET='tppreview'\n\n# Enable it to fetch pre-published content:\n\nUNIFORM_PREVIEW_ENABLED=true\n"}])
    
      
        const { setConfig } = __webpack_require__(1752)
      
      
        const runtimeConfig = {"publicRuntimeConfig":{"gaTrackingId":"UA-182765069-3","previewEnabled":"true","previewSecret":"tppreview","projectId":"bdf676cc-f85c-49dc-82cf-2999936224f6"},"serverRuntimeConfig":{"previewSecret":"tppreview","contentfulSpaceId":"uofata4tmebn","contentfulEnvironment":"master","contentfulPreviewToken":"hyxf5Adpqrt9KhLTvVpcJH9KbJEbVHhNNuG7Q8G_Eek","contentfulDeliveryToken":"gw1pixSSJJ39llDQe7v8N8HhmiskQZIf0YzJwgLMttg","presentationApiHost":"https://uniform.app","presentationProjectId":"bdf676cc-f85c-49dc-82cf-2999936224f6","uniformApiKey":"uf17xwjwz3n3jh3k6we4ekpq3au56uju2aaqz05hlhcwr0zeq0nltdwgmhhtmyffqcdulh63pq7ap8jkznta7xgzsr5sx3fmq","bigCommerceStoreHash":"6oqtiuaa37","bigCommerceToken":"bdziiak3ndnyyuscdatm7rfhk8y24oa","sanityDataset":"production","sanityApiVersion":"v2021-03-25"}}
        setConfig(runtimeConfig)
      
      ;

      const documentModule = __webpack_require__(4957)

      const appMod = __webpack_require__(7683)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(7345)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? {
          afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        }
        : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(7345),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,
        reactRoot: false,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: rewrites,
        i18n: undefined,
        page: "/_error",
        buildId: "dCZ-5NFnik8hNheFZCz1v",
        escapedBuildId: "dCZ\-5NFnik8hNheFZCz1v",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"c4109b9fdf5bb7c2ec00398d66daa18d",previewModeSigningKey:"0da6d3965b1fd46e724b7fa48bd69b9a5eea2ee130d24a7414b3bc663b66f9ff",previewModeEncryptionKey:"592fcf5e4a111740dc59859765723fdd739f1c900e85e885d02a2d012a448b65"}
      })
      
    

/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [319,294], () => (__webpack_exec__(2346)));
module.exports = __webpack_exports__;

})();