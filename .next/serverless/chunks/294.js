exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 9423:
/***/ ((module) => {

// Exports
module.exports = {
	"btn--secondary": "button_btn--secondary__EpkDx",
	"btn--primary": "button_btn--primary__qd2Vb",
	"btn__icon": "button_btn__icon__c1t2e",
	"btn": "button_btn__9UvUY"
};


/***/ }),

/***/ 9066:
/***/ ((module) => {

// Exports
module.exports = {
	"basket-summary__close-btn": "basket-summary_basket-summary__close-btn__Mr3oC",
	"basket-summary": "basket-summary_basket-summary__r_4cy",
	"slide-rtl": "basket-summary_slide-rtl__M5_ou",
	"basket-summary__table": "basket-summary_basket-summary__table__NXsjh",
	"basket-summary__table-head": "basket-summary_basket-summary__table-head__3xOay",
	"basket-summary__table-head-data": "basket-summary_basket-summary__table-head-data__3MZSj",
	"basket-summary__data": "basket-summary_basket-summary__data__f_hvb",
	"basket-summary__item-title": "basket-summary_basket-summary__item-title__UT3QN",
	"basket-summary__price": "basket-summary_basket-summary__price__tl3_l",
	"basket-summary__quantity": "basket-summary_basket-summary__quantity__bB8zH",
	"basket-summary__btn": "basket-summary_basket-summary__btn__8HOcs",
	"basket-overlay": "basket-summary_basket-overlay___MfbS",
	"fade-in": "basket-summary_fade-in__7J8L0"
};


/***/ }),

/***/ 9969:
/***/ ((module) => {

// Exports
module.exports = {
	"basket": "basket_basket__S4dJp",
	"basket__icon": "basket_basket__icon__Grhdw",
	"basket__counter": "basket_basket__counter__jpEQn",
	"basket__label": "basket_basket__label__cZ8uu"
};


/***/ }),

/***/ 2060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9423);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ text , buttonType , onClick  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn)} ${(_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[`btn--${buttonType}`]}`,
        title: text,
        onClick: onClick,
        children: [
            text,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn__icon),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "16",
                    viewBox: "0 0 20 16",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "currentColor",
                        d: "M0,7.69220887 C0,7.8788244 0.108173649,8.12868695 0.216347298,8.24888948 L6.370226,15.1314861 C6.65718521,15.4446199 7.12292228,15.4809924 7.45796252,15.1631157 C7.75694102,14.8800304 7.76445645,14.3265158 7.48801075,14.018135 L2.54798463,8.50193624 L19.2307652,8.50193624 C19.6559597,8.50193624 20,8.13977805 20,7.69221899 C20,7.24465993 19.6559482,6.88250174 19.2307652,6.88250174 L2.54798463,6.88250174 L7.48801075,1.36630299 C7.76445452,1.05791408 7.74492365,0.518610003 7.45796252,0.221322316 C7.1544763,-0.0918115382 6.65265057,-0.064924877 6.370226,0.252951896 L0.216347298,7.1355485 C0.036057883,7.32216404 0.00300386204,7.50245163 0,7.69222911 L0,7.69220887 Z",
                        transform: "rotate(180 10 7.692)"
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 3416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* reexport */ Basket),
  "l": () => (/* reexport */ BasketSummary)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./components/commerce/cart/styles/basket.module.scss
var basket_module = __webpack_require__(9969);
var basket_module_default = /*#__PURE__*/__webpack_require__.n(basket_module);
// EXTERNAL MODULE: ./components/commerce/cart/providers/basketProvider.js
var basketProvider = __webpack_require__(481);
;// CONCATENATED MODULE: ./components/commerce/cart/basket.tsx




const Basket = ({ ariaControls  })=>{
    const { toggleCartVisibility , cart  } = (0,react.useContext)(basketProvider/* BasketContext */.h);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        className: (basket_module_default()).basket,
        title: "basket",
        "aria-controls": ariaControls,
        onClick: toggleCartVisibility,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (basket_module_default()).basket__icon,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 37,
                        height: 48,
                        viewBox: "0 0 37 48",
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M18.7584057,0 C13.4267278,0 9.08837775,4.24477216 9.08837775,9.46285826 L9.08837775,12.6832802 L3.90762957,12.6832802 C3.3650851,12.6832802 2.91259699,13.1000868 2.8675688,13.6407396 L0.00396691079,46.8616586 C-0.0214960754,47.154604 0.0764382168,47.4435934 0.27426638,47.6598686 C0.472094542,47.8761388 0.752186889,48 1.04405777,48 L35.9559424,48 C36.2477882,48 36.5278705,47.8761388 36.7257337,47.6598686 C36.9235619,47.4435984 37.0214957,47.1545889 36.9960332,46.8616586 L34.1324313,13.6407396 C34.0873816,13.1000768 33.63492,12.6832802 33.0923706,12.6832802 L28.4306499,12.6832802 L28.4306499,9.46285826 C28.4306499,4.24497349 24.0921494,0 18.7586163,0 L18.7584057,0 Z M11.1783273,9.46285826 C11.1783273,5.40094108 14.5786069,2.09581096 18.7584057,2.09581096 C22.9382044,2.09581096 26.3404898,5.39882715 26.3404898,9.46285826 L26.3404898,12.6832802 L11.1783273,12.6832802 L11.1783273,9.46285826 Z M32.1344837,14.7809031 L34.8159672,45.9039978 L2.18407308,45.9039978 L4.86555653,14.7809031 L9.08852817,14.7809031 L9.08852817,25.1421817 L11.1784777,25.1421817 L11.1784777,14.7809031 L26.3406402,14.7809031 L26.3406402,25.1421817 L28.4305897,25.1421817 L28.4305897,14.7809031 L32.1344837,14.7809031 Z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: (basket_module_default()).basket__counter,
                        children: cart ? cart.length : 0
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: (basket_module_default()).basket__label,
                children: "Shopping Bag"
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/commerce/cart/styles/basket-summary.module.scss
var basket_summary_module = __webpack_require__(9066);
var basket_summary_module_default = /*#__PURE__*/__webpack_require__.n(basket_summary_module);
// EXTERNAL MODULE: ./components/atoms/buttons/button.tsx
var buttons_button = __webpack_require__(2060);
;// CONCATENATED MODULE: ./components/commerce/cart/basketSummary.tsx





const BasketSummary = ({ id  })=>{
    const { isCartOpen , toggleCartVisibility , cart , checkout  } = (0,react.useContext)(basketProvider/* BasketContext */.h);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        hidden: !isCartOpen,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: id,
                className: (basket_summary_module_default())["basket-summary"],
                role: "dialog",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: (basket_summary_module_default())["basket-summary__title"],
                        children: "Your Basket"
                    }),
                    cart.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (basket_summary_module_default())["basket-summary__details"],
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                className: (basket_summary_module_default())["basket-summary__table"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                            className: (basket_summary_module_default())["basket-summary__table-head"],
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    className: (basket_summary_module_default())["basket-summary__table-head-data"],
                                                    children: "Product"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    className: (basket_summary_module_default())["basket-summary__table-head-data"],
                                                    children: "Price"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    className: (basket_summary_module_default())["basket-summary__table-head-data"],
                                                    children: "Quantity"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    className: (basket_summary_module_default())["basket-summary__table-head-data"]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                        children: cart.map((item, i)=>{
                                            return /*#__PURE__*/ jsx_runtime.jsx(BasketList, {
                                                title: item.title,
                                                price: item.price,
                                                id: item.id,
                                                quantity: item.quantity
                                            }, i);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(buttons_button/* Button */.z, {
                                text: "Checkout",
                                buttonType: "secondary",
                                onClick: ()=>{
                                    checkout(cart);
                                }
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Your basket is empty"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: (basket_summary_module_default())["basket-summary__close-btn"],
                        onClick: toggleCartVisibility,
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",
                                fill: "currentColor"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (basket_summary_module_default())["basket-overlay"],
                "aria-hidden": "true",
                onClick: toggleCartVisibility
            })
        ]
    });
};
const BasketList = ({ title , price , id , quantity ,  })=>{
    const { removeFromCart  } = (0,react.useContext)(basketProvider/* BasketContext */.h);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
        className: (basket_summary_module_default())["basket-summary__data"],
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: (basket_summary_module_default())["basket-summary__item-title"],
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                className: (basket_summary_module_default())["basket-summary__price"],
                children: [
                    "$",
                    price
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: (basket_summary_module_default())["basket-summary__quantity"],
                children: quantity
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    className: (basket_summary_module_default())["basket-summary__btn"],
                    onClick: ()=>removeFromCart(id)
                    ,
                    title: `delete ${title}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z",
                                    fill: "currentColor"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    d: "M9 9H11V17H9V9Z",
                                    fill: "currentColor"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    d: "M13 9H15V17H13V9Z",
                                    fill: "currentColor"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            hidden: true,
                            children: "Delete"
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/commerce/cart/index.tsx





/***/ }),

/***/ 481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ BasketContextProvider),
/* harmony export */   "h": () => (/* binding */ BasketContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


const BasketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isCartOpen: false,
    toggleCartVisibility: (e)=>{
        console.log({
            e
        });
    },
    cart: [],
    addToCart: (e)=>{
        console.log({
            e
        });
    },
    removeFromCart: (e)=>{
        console.log({
            e
        });
    },
    checkout: (e)=>{
        console.log({
            e
        });
    }
});
const BasketContextProvider = ({ children  })=>{
    const { 0: isCartOpen , 1: setIsCartOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: cart1 , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const toggleCartVisibility = ()=>{
        setIsCartOpen(!isCartOpen);
    };
    const addToCart = (obj)=>{
        const payload = {
            label: obj.title,
            value: parseInt(obj.price)
        };
        analytics.track("addToCart", payload);
        return setCart((prevState)=>[
                ...prevState,
                obj
            ]
        );
    };
    const checkout = (cart)=>{
        const reducer = (accumulator, currentValue)=>accumulator + currentValue
        ;
        const cartTotal = cart.map((c)=>c.quantity * c.price
        ).reduce(reducer);
        const cartLabel = [
            ...new Set(cart.map((c)=>c.title
            ))
        ].join(", ");
        const payload = {
            label: cartLabel,
            value: cartTotal
        };
        analytics.track("checkout", payload);
        return setCart(()=>[]
        );
    };
    const removeFromCart = (id)=>{
        const newCart = cart1.filter((item)=>item.id != id
        );
        setCart(newCart);
    };
    // TODO: cart needs to update quantity if in selection
    // useEffect(() => {
    //   return cart.filter((item) => {
    //     console.log(item);
    //     debugger;
    //     if (item.name) {
    //       return {
    //         ...item,
    //         quantity: item.quantity >= 1 ? item.quantity + 1 : item.quantity,
    //       };
    //     }
    //     return item;
    //   })
    // }, [cart])
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BasketContext.Provider, {
        value: {
            isCartOpen,
            toggleCartVisibility,
            cart: cart1,
            addToCart,
            removeFromCart,
            checkout
        },
        children: children
    });
};


/***/ }),

/***/ 2215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createUniformContext)
});

// EXTERNAL MODULE: ./node_modules/@uniformdev/context/dist/index.mjs + 2 modules
var dist = __webpack_require__(6774);
// EXTERNAL MODULE: ./node_modules/@uniformdev/context-next/dist/index.mjs
var context_next_dist = __webpack_require__(2135);
;// CONCATENATED MODULE: ./lib/context/manifest.json
const manifest_namespaceObject = JSON.parse('{"project":{"pz":{"agg":{"men":{"inputs":[{"dim":"utmmen"}]},"testing":{"inputs":[{"dim":"utmmen"}]}},"enr":{"1":{"cap":100}},"sig":{"utmhipster":{"str":50,"cap":100,"dur":"p","crit":{"op":"&","type":"G","clauses":[{"type":"QS","match":{"cs":false,"op":"=","rhs":"hipster"},"queryName":"utm_campaign"}]}},"utmmen":{"str":50,"cap":100,"dur":"p","crit":{"op":"&","type":"G","clauses":[{"type":"QS","match":{"cs":false,"op":"=","rhs":"men"},"queryName":"utm_campaign"}]}}}},"test":{"mytest":{}}}}');
;// CONCATENATED MODULE: ./lib/context/uniformContext.ts



function createUniformContext(serverContext) {
    const context = serverContext ? new dist/* Context */._y({
        defaultConsent: true,
        manifest: manifest_namespaceObject,
        transitionStore: new context_next_dist/* NextCookieTransitionDataStore */.W({
            serverContext
        }),
        plugins: [
            (0,dist/* enableContextDevTools */.ZW)()
        ]
    }) : new dist/* Context */._y({
        defaultConsent: true,
        manifest: manifest_namespaceObject,
        plugins: [
            (0,dist/* enableContextDevTools */.ZW)()
        ]
    });
    return context;
};


/***/ }),

/***/ 7683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@uniformdev/context-react/dist/index.mjs
var dist = __webpack_require__(2039);
// EXTERNAL MODULE: ./lib/context/uniformContext.ts + 1 modules
var uniformContext = __webpack_require__(2215);
// EXTERNAL MODULE: ./components/commerce/cart/index.tsx + 2 modules
var cart = __webpack_require__(3416);
;// CONCATENATED MODULE: ./components/layouts/fullWidth.tsx


const FullWidth = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        children: children
    });
};

// EXTERNAL MODULE: ./components/commerce/cart/providers/basketProvider.js
var basketProvider = __webpack_require__(481);
// EXTERNAL MODULE: ./node_modules/next/config.js
var config = __webpack_require__(1752);
;// CONCATENATED MODULE: ./pages/_app.tsx









const { publicRuntimeConfig: { edgeEnabled  } ,  } = (0,config["default"])();
const clientContext = (0,uniformContext/* default */.Z)();
function MyApp({ Component , pageProps , serverUniformContext  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(dist/* UniformContext */.jR, {
        context: serverUniformContext ?? clientContext,
        outputType: edgeEnabled === "true" ? "edge" : "standard",
        children: /*#__PURE__*/ jsx_runtime.jsx(basketProvider/* BasketContextProvider */.T, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FullWidth, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(cart/* BasketSummary */.l, {
                        id: "basket-summary"
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 4957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var _uniformdev_context_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _lib_context_uniformContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2215);




const fonts = `
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin */
@font-face {
  font-family: 'Vollkorn';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2mXaeHmmc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;
class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static async getInitialProps(ctx) {
        const serverTracker = (0,_lib_context_uniformContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ctx);
        (0,_uniformdev_context_next__WEBPACK_IMPORTED_MODULE_3__/* .enableNextSsr */ .p)(ctx, serverTracker);
        return next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://res.cloudinary.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                            dangerouslySetInnerHTML: {
                                __html: fonts
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAACMuAAAjLgAAAAAAAAAAAAAZGRr/GRka/wcHCP9/f4D//////zk5Of8PDxD/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8HBwj/f3+A//////85OTn/Dw8Q/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/BwcI/39/gP//////OTk5/xAQEf8PDxD/CgoL/xkZGv8ZGhv/Gw0L/xoODf8ZGhv/GRka/xkZGv8ZGRr/GRka/wcHCP9/f4D//////zk5Of8HBwj/QUFC/1lZWv8UExP/GRcX/xBbbf8SVGT/GhUV/xkYGf8ZGRr/GRka/xkZGv8HBwj/f3+A//////83Nzf/BAQF/8rKyv//////Liws/xAMDf8AkrL/AYah/xsREf8ZGBn/GRka/xkZGv8ZGRr/BwcI/39/gP//////Kior/zg4Of///////////35+f/8DBAX/NTU4/zEyNP8XFxj/GRka/xkZGv8ZGRr/GRka/wcHCP9/f4D//////yUlJv+Xl5j/3d3d/7e3t//c3Nz/ERES/8vJyP+8urr/DQ0P/xcXGP8ZGRr/GRka/xkZGv8HBwj/f3+A//z8/P9EREX/7u7u/4CAgP84ODr//////1VVVf/Hx8f/w8PE/w0NDv8XFxj/GRka/xkZGv8ZGRr/BwcI/4CAgP/z8/P/lJSV//j4+P8xMTL/BgYH/9XV1f+0tLX/xMTE/7+/v/8NDQ7/FxcY/xkZGv8ZGRr/GRka/wcHCP98fH3/+vr7//Ly8v+ysrL/CQkK/wQEBf9xcXL//f39//Dw8P+4uLj/DQ0O/xcXGP8ZGRr/GRka/xkZGv8HBwj/enp7////////////VFRU/wgICf8SEhP/IyMk/+rq6v//////tbW2/w0NDv8XFxj/GRka/xkZGv8ZGRr/BgYH/4CAgf//////09PU/xUVFv8VFRb/GRka/wUFBv+Wlpf//////7y8vf8NDQ7/FxcY/xkZGv8ZGRr/GRka/xMTFP86Ojv/bm5v/0FBQv8RERL/GRka/xkZGv8TExT/LCwu/2xsbP9OTk//FRUW/xgYGf8ZGRr/GRka/xkZGv8aGhv/EhIT/wYGB/8ODg//Ghob/xkZGv8ZGRr/Ghob/xMTFP8HBwj/DQ0O/xoaG/8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
                            rel: "icon",
                            type: "image/x-icon"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 7020:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/Mdv4Tw680SW_EXauHPKTk/_buildManifest.js","static/Mdv4Tw680SW_EXauHPKTk/_ssgManifest.js","static/Mdv4Tw680SW_EXauHPKTk/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-cc024350b5146525.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-cea257043c793839.js","static/chunks/pages/index-52096d339e829f69.js"],"/[id]":["static/chunks/webpack-cc024350b5146525.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-cea257043c793839.js","static/chunks/638-9800b3ba14f0db13.js","static/css/a422bc09a9afb959.css","static/chunks/pages/[id]-4f43b0ee16727c2b.js"],"/_app":["static/chunks/webpack-cc024350b5146525.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-cea257043c793839.js","static/css/66010838a83fea7a.css","static/chunks/pages/_app-e7ec196f8b39d6a4.js"],"/_error":["static/chunks/webpack-cc024350b5146525.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-cea257043c793839.js","static/chunks/pages/_error-0a004b8b8498208d.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"../lib/preview/PreviewDevPanel/CompositionPreview/CompositionPreview.tsx -> react-json-view":{"id":5171,"files":["static/chunks/171.e9208ef84f4ddc07.js"]},"[id].tsx -> lib/preview/PreviewDevPanel/PreviewDevPanel":{"id":698,"files":["static/css/df25525e2944d405.css","static/chunks/698.b5ccd8c2b6124a6b.js"]}}');

/***/ }),

/***/ 9450:
/***/ ((module) => {

"use strict";
module.exports = {"Dg":[]};

/***/ })

};
;