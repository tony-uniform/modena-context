exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 5668:
/***/ ((module) => {

// Exports
module.exports = {
	"composition-button": "CompositionPreview_composition-button__7frDR",
	"composition-button-on": "CompositionPreview_composition-button-on__HLl9X",
	"composition-button-off": "CompositionPreview_composition-button-off__NLzgN",
	"sidenav": "CompositionPreview_sidenav__PWLtt",
	"sidenav-open": "CompositionPreview_sidenav-open__sV_yL",
	"sidenav-close": "CompositionPreview_sidenav-close__XDKQW"
};


/***/ }),

/***/ 4158:
/***/ ((module) => {

// Exports
module.exports = {
	"panel": "PreviewDevPanel_panel__WOavO"
};


/***/ }),

/***/ 27:
/***/ ((module) => {

// Exports
module.exports = {
	"preview-switch-button": "PreviewSwitch_preview-switch-button__2Ua3q",
	"preview-switch-button-on": "PreviewSwitch_preview-switch-button-on__1fqS5",
	"preview-switch-button-off": "PreviewSwitch_preview-switch-button-off__nuNYb"
};


/***/ }),

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PreviewDevPanel_PreviewDevPanel)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./lib/preview/PreviewDevPanel/CompositionPreview/CompositionPreview.module.scss
var CompositionPreview_module = __webpack_require__(5668);
var CompositionPreview_module_default = /*#__PURE__*/__webpack_require__.n(CompositionPreview_module);
;// CONCATENATED MODULE: ./lib/preview/PreviewDevPanel/CompositionPreview/CompositionPreview.tsx



const ReactJson = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../lib/preview/PreviewDevPanel/CompositionPreview/CompositionPreview.tsx -> " + "react-json-view"
        ]
    },
    ssr: false
});

function CompositionPreview({ composition , containerRef  }) {
    const { 0: active , 1: setActive  } = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                type: "button",
                onClick: ()=>{
                    setActive(!active);
                    containerRef.current.style.marginRight = active ? "0px" : "500px";
                },
                className: [
                    (CompositionPreview_module_default())["composition-button"],
                    active ? (CompositionPreview_module_default())["composition-button-on"] : (CompositionPreview_module_default())["composition-button-off"], 
                ].join(" "),
                children: /*#__PURE__*/ jsx_runtime.jsx(CodeIcon, {})
            }),
            active && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: [
                    (CompositionPreview_module_default()).sidenav,
                    active && (CompositionPreview_module_default())["sidenav-open"]
                ].join(" "),
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        className: (CompositionPreview_module_default())["sidenav-close"],
                        onClick: ()=>{
                            setActive(false);
                            containerRef.current.style.marginRight = "0";
                        },
                        children: "\xd7"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ReactJson, {
                        src: composition
                    })
                ]
            })
        ]
    });
}
const CodeIcon = ()=>/*#__PURE__*/ jsx_runtime.jsx("svg", {
        style: {
            height: 30,
            width: 30,
            paddingTop: 5
        },
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        stroke: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        })
    })
;
/* harmony default export */ const CompositionPreview_CompositionPreview = (CompositionPreview);

// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./node_modules/@uniformdev/canvas-react/dist/index.mjs
var dist = __webpack_require__(7777);
;// CONCATENATED MODULE: ./lib/preview/useLivePreviewNextStaticProps.ts



function useLivePreviewNextStaticProps(options) {
    const router = (0,next_router.useRouter)();
    const effect = (0,react.useCallback)(()=>{
        console.log("\uD83E\uDD7D Preview updated.");
        // Fixes preview mode in production
        // Can be removed after https://github.com/vercel/next.js/issues/37190 is resolved
        delete window.next.router.sdc[new URL(`/_next/data/${window.__NEXT_DATA__.buildId}${router.asPath === "/" ? "/index" : router.asPath}.json`, location.href).toString()];
        router.replace(router.asPath, undefined, {
            scroll: false
        });
    }, [
        router
    ]);
    return (0,dist/* useCompositionEventEffect */.ub)({
        ...options,
        enabled: router.isPreview,
        effect
    });
}
/* harmony default export */ const preview_useLivePreviewNextStaticProps = (useLivePreviewNextStaticProps);

// EXTERNAL MODULE: ./node_modules/next/config.js
var config = __webpack_require__(1752);
// EXTERNAL MODULE: ./lib/preview/PreviewDevPanel/PreviewSwitch/PreviewSwitch.module.scss
var PreviewSwitch_module = __webpack_require__(27);
var PreviewSwitch_module_default = /*#__PURE__*/__webpack_require__.n(PreviewSwitch_module);
;// CONCATENATED MODULE: ./lib/preview/PreviewDevPanel/PreviewSwitch/PreviewSwitch.tsx




function PreviewSwitch({ previewing  }) {
    const router = (0,next_router.useRouter)();
    const { publicRuntimeConfig: { previewSecret  } ,  } = (0,config["default"])();
    return /*#__PURE__*/ jsx_runtime.jsx("button", {
        type: "button",
        onClick: ()=>{
            const url = `/api/preview?slug=${router.asPath}${previewing ? "&disable=1" : `&secret=${previewSecret}`}`;
            router.push(url);
        },
        className: [
            (PreviewSwitch_module_default())["preview-switch-button"],
            previewing ? (PreviewSwitch_module_default())["preview-switch-button-on"] : (PreviewSwitch_module_default())["preview-switch-button-off"], 
        ].join(" "),
        children: previewing ? /*#__PURE__*/ jsx_runtime.jsx(OnlineIcon, {}) : /*#__PURE__*/ jsx_runtime.jsx(OfflineIcon, {})
    });
}
const OnlineIcon = ()=>/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        style: {
            height: 30,
            width: 30,
            paddingTop: 5
        },
        viewBox: "0 0 25 25",
        stroke: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
        })
    })
;
const OfflineIcon = ()=>/*#__PURE__*/ jsx_runtime.jsx("svg", {
        style: {
            height: 30,
            width: 30,
            paddingTop: 5
        },
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        stroke: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
        })
    })
;
/* harmony default export */ const PreviewSwitch_PreviewSwitch = (PreviewSwitch);

// EXTERNAL MODULE: ./lib/preview/previewEnabled.ts
var previewEnabled = __webpack_require__(5744);
;// CONCATENATED MODULE: ./lib/preview/PreviewDevPanel/PreviewEnabler.tsx





function PreviewEnabler({ previewActive , composition  }) {
    const { publicRuntimeConfig  } = (0,config["default"])();
    const { projectId  } = publicRuntimeConfig;
    preview_useLivePreviewNextStaticProps({
        compositionId: composition?._id,
        projectId
    });
    return (0,previewEnabled/* default */.Z)() ? /*#__PURE__*/ jsx_runtime.jsx(PreviewSwitch_PreviewSwitch, {
        previewing: previewActive
    }) : null;
}
/* harmony default export */ const PreviewDevPanel_PreviewEnabler = (PreviewEnabler);

// EXTERNAL MODULE: ./lib/preview/PreviewDevPanel/PreviewDevPanel.module.scss
var PreviewDevPanel_module = __webpack_require__(4158);
var PreviewDevPanel_module_default = /*#__PURE__*/__webpack_require__.n(PreviewDevPanel_module);
;// CONCATENATED MODULE: ./lib/preview/PreviewDevPanel/PreviewDevPanel.tsx




function PreviewDevPanel({ preview , composition , containerRef  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (PreviewDevPanel_module_default()).panel,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (PreviewDevPanel_module_default())["preview-switch"],
                children: /*#__PURE__*/ jsx_runtime.jsx(PreviewDevPanel_PreviewEnabler, {
                    previewActive: preview,
                    composition: composition
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (PreviewDevPanel_module_default())["composition-preview"],
                children: /*#__PURE__*/ jsx_runtime.jsx(CompositionPreview_CompositionPreview, {
                    containerRef: containerRef,
                    composition: composition
                })
            })
        ]
    });
}
/* harmony default export */ const PreviewDevPanel_PreviewDevPanel = (PreviewDevPanel);


/***/ })

};
;