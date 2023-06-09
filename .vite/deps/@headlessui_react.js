import {
  require_react_dom
} from "./chunk-PRK46SJB.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react18 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t15, e6, n6) => e6 in t15 ? i(t15, e6, { enumerable: true, configurable: true, writable: true, value: n6 }) : t15[e6] = n6;
var r = (t15, e6, n6) => (d(t15, typeof e6 != "symbol" ? e6 + "" : e6, n6), n6);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e6) {
    this.current !== e6 && (this.handoffState = "pending", this.currentId = 0, this.current = e6);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e6, f13) => {
  s.isServer ? (0, import_react.useEffect)(e6, f13) : (0, import_react.useLayoutEffect)(e6, f13);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e6) {
  let r10 = (0, import_react2.useRef)(e6);
  return l(() => {
    r10.current = e6;
  }, [e6]), r10;
}

// node_modules/@headlessui/react/dist/hooks/use-computed.js
function i2(e6, o11) {
  let [u8, t15] = (0, import_react3.useState)(e6), r10 = s2(e6);
  return l(() => t15(r10.current), [r10, t15, ...o11]), u8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e6) {
  typeof queueMicrotask == "function" ? queueMicrotask(e6) : Promise.resolve().then(e6).catch((o11) => setTimeout(() => {
    throw o11;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n6 = [], r10 = { addEventListener(e6, t15, s17, a11) {
    return e6.addEventListener(t15, s17, a11), r10.add(() => e6.removeEventListener(t15, s17, a11));
  }, requestAnimationFrame(...e6) {
    let t15 = requestAnimationFrame(...e6);
    return r10.add(() => cancelAnimationFrame(t15));
  }, nextFrame(...e6) {
    return r10.requestAnimationFrame(() => r10.requestAnimationFrame(...e6));
  }, setTimeout(...e6) {
    let t15 = setTimeout(...e6);
    return r10.add(() => clearTimeout(t15));
  }, microTask(...e6) {
    let t15 = { current: true };
    return t3(() => {
      t15.current && e6[0]();
    }), r10.add(() => {
      t15.current = false;
    });
  }, style(e6, t15, s17) {
    let a11 = e6.style.getPropertyValue(t15);
    return Object.assign(e6.style, { [t15]: s17 }), this.add(() => {
      Object.assign(e6.style, { [t15]: a11 });
    });
  }, group(e6) {
    let t15 = o2();
    return e6(t15), this.add(() => t15.dispose());
  }, add(e6) {
    return n6.push(e6), () => {
      let t15 = n6.indexOf(e6);
      if (t15 >= 0)
        for (let s17 of n6.splice(t15, 1))
          s17();
    };
  }, dispose() {
    for (let e6 of n6.splice(0))
      e6();
  } };
  return r10;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e6] = (0, import_react4.useState)(o2);
  return (0, import_react4.useEffect)(() => () => e6.dispose(), [e6]), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react5 = __toESM(require_react(), 1);
var o4 = function(t15) {
  let e6 = s2(t15);
  return import_react5.default.useCallback((...r10) => e6.current(...r10), [e6]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l2() {
  let [e6, f13] = (0, import_react6.useState)(s.isHandoffComplete);
  return e6 && s.isHandoffComplete === false && f13(false), (0, import_react6.useEffect)(() => {
    e6 !== true && f13(true);
  }, [e6]), (0, import_react6.useEffect)(() => s.handoff(), []), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o6;
var I = (o6 = import_react7.default.useId) != null ? o6 : function() {
  let n6 = l2(), [e6, u8] = import_react7.default.useState(n6 ? () => s.nextId() : null);
  return l(() => {
    e6 === null && u8(s.nextId());
  }, [e6]), e6 != null ? "" + e6 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r10, n6, ...a11) {
  if (r10 in n6) {
    let e6 = n6[r10];
    return typeof e6 == "function" ? e6(...a11) : e6;
  }
  let t15 = new Error(`Tried to handle "${r10}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e6) => `"${e6}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t15, u), t15;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r10) {
  return s.isServer ? null : r10 instanceof Node ? r10.ownerDocument : r10 != null && r10.hasOwnProperty("current") && r10.current instanceof Node ? r10.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e6) => `${e6}:not([tabindex='-1'])`).join(",");
var M = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M || {});
var N = ((o11) => (o11[o11.Error = 0] = "Error", o11[o11.Overflow = 1] = "Overflow", o11[o11.Success = 2] = "Success", o11[o11.Underflow = 3] = "Underflow", o11))(N || {});
var F = ((t15) => (t15[t15.Previous = -1] = "Previous", t15[t15.Next = 1] = "Next", t15))(F || {});
function f(e6 = document.body) {
  return e6 == null ? [] : Array.from(e6.querySelectorAll(c2)).sort((r10, t15) => Math.sign((r10.tabIndex || Number.MAX_SAFE_INTEGER) - (t15.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t15) => (t15[t15.Strict = 0] = "Strict", t15[t15.Loose = 1] = "Loose", t15))(T || {});
function h(e6, r10 = 0) {
  var t15;
  return e6 === ((t15 = e(e6)) == null ? void 0 : t15.body) ? false : u(r10, { [0]() {
    return e6.matches(c2);
  }, [1]() {
    let l10 = e6;
    for (; l10 !== null; ) {
      if (l10.matches(c2))
        return true;
      l10 = l10.parentElement;
    }
    return false;
  } });
}
function D(e6) {
  let r10 = e(e6);
  o2().nextFrame(() => {
    r10 && !h(r10.activeElement, 0) && y(e6);
  });
}
var w = ((t15) => (t15[t15.Keyboard = 0] = "Keyboard", t15[t15.Mouse = 1] = "Mouse", t15))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e6) => {
  e6.metaKey || e6.altKey || e6.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e6) => {
  e6.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e6.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e6) {
  e6 == null || e6.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e6) {
  var r10, t15;
  return (t15 = (r10 = e6 == null ? void 0 : e6.matches) == null ? void 0 : r10.call(e6, S)) != null ? t15 : false;
}
function I2(e6, r10 = (t15) => t15) {
  return e6.slice().sort((t15, l10) => {
    let o11 = r10(t15), i11 = r10(l10);
    if (o11 === null || i11 === null)
      return 0;
    let n6 = o11.compareDocumentPosition(i11);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e6, r10) {
  return O(f(), r10, { relativeTo: e6 });
}
function O(e6, r10, { sorted: t15 = true, relativeTo: l10 = null, skipElements: o11 = [] } = {}) {
  let i11 = Array.isArray(e6) ? e6.length > 0 ? e6[0].ownerDocument : document : e6.ownerDocument, n6 = Array.isArray(e6) ? t15 ? I2(e6) : e6 : f(e6);
  o11.length > 0 && n6.length > 1 && (n6 = n6.filter((s17) => !o11.includes(s17))), l10 = l10 != null ? l10 : i11.activeElement;
  let E6 = (() => {
    if (r10 & 5)
      return 1;
    if (r10 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r10 & 1)
      return 0;
    if (r10 & 2)
      return Math.max(0, n6.indexOf(l10)) - 1;
    if (r10 & 4)
      return Math.max(0, n6.indexOf(l10)) + 1;
    if (r10 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p9 = r10 & 32 ? { preventScroll: true } : {}, d15 = 0, a11 = n6.length, u8;
  do {
    if (d15 >= a11 || d15 + a11 <= 0)
      return 0;
    let s17 = x6 + d15;
    if (r10 & 16)
      s17 = (s17 + a11) % a11;
    else {
      if (s17 < 0)
        return 3;
      if (s17 >= a11)
        return 1;
    }
    u8 = n6[s17], u8 == null || u8.focus(p9), d15 += E6;
  } while (u8 !== i11.activeElement);
  return r10 & 6 && H(u8) && u8.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react8 = __toESM(require_react(), 1);
function d2(e6, r10, n6) {
  let o11 = s2(r10);
  (0, import_react8.useEffect)(() => {
    function t15(u8) {
      o11.current(u8);
    }
    return document.addEventListener(e6, t15, n6), () => document.removeEventListener(e6, t15, n6);
  }, [e6, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L(m9, E6, c13 = true) {
  let i11 = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    requestAnimationFrame(() => {
      i11.current = c13;
    });
  }, [c13]);
  function f13(e6, o11) {
    if (!i11.current || e6.defaultPrevented)
      return;
    let l10 = function r10(t15) {
      return typeof t15 == "function" ? r10(t15()) : Array.isArray(t15) || t15 instanceof Set ? t15 : [t15];
    }(m9), n6 = o11(e6);
    if (n6 !== null && n6.getRootNode().contains(n6)) {
      for (let r10 of l10) {
        if (r10 === null)
          continue;
        let t15 = r10 instanceof HTMLElement ? r10 : r10.current;
        if (t15 != null && t15.contains(n6) || e6.composed && e6.composedPath().includes(t15))
          return;
      }
      return !h(n6, T.Loose) && n6.tabIndex !== -1 && e6.preventDefault(), E6(e6, n6);
    }
  }
  let u8 = (0, import_react9.useRef)(null);
  d2("mousedown", (e6) => {
    var o11, l10;
    i11.current && (u8.current = ((l10 = (o11 = e6.composedPath) == null ? void 0 : o11.call(e6)) == null ? void 0 : l10[0]) || e6.target);
  }, true), d2("click", (e6) => {
    u8.current && (f13(e6, () => u8.current), u8.current = null);
  }, true), d2("blur", (e6) => f13(e6, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react10 = __toESM(require_react(), 1);
function i3(t15) {
  var n6;
  if (t15.type)
    return t15.type;
  let e6 = (n6 = t15.as) != null ? n6 : "button";
  if (typeof e6 == "string" && e6.toLowerCase() === "button")
    return "button";
}
function s6(t15, e6) {
  let [n6, u8] = (0, import_react10.useState)(() => i3(t15));
  return l(() => {
    u8(i3(t15));
  }, [t15.type, t15.as]), l(() => {
    n6 || e6.current && e6.current instanceof HTMLButtonElement && !e6.current.hasAttribute("type") && u8("button");
  }, [n6, e6]), n6;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react11 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t15, n6 = true) {
  return Object.assign(t15, { [u2]: n6 });
}
function y2(...t15) {
  let n6 = (0, import_react11.useRef)(t15);
  (0, import_react11.useEffect)(() => {
    n6.current = t15;
  }, [t15]);
  let c13 = o4((e6) => {
    for (let o11 of n6.current)
      o11 != null && (typeof o11 == "function" ? o11(e6) : o11.current = e6);
  });
  return t15.every((e6) => e6 == null || (e6 == null ? void 0 : e6[u2])) ? void 0 : c13;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react12 = __toESM(require_react(), 1);
function F2({ container: e6, accept: t15, walk: r10, enabled: c13 = true }) {
  let o11 = (0, import_react12.useRef)(t15), l10 = (0, import_react12.useRef)(r10);
  (0, import_react12.useEffect)(() => {
    o11.current = t15, l10.current = r10;
  }, [t15, r10]), l(() => {
    if (!e6 || !c13)
      return;
    let n6 = e(e6);
    if (!n6)
      return;
    let f13 = o11.current, p9 = l10.current, d15 = Object.assign((i11) => f13(i11), { acceptNode: f13 }), u8 = n6.createTreeWalker(e6, NodeFilter.SHOW_ELEMENT, d15, false);
    for (; u8.nextNode(); )
      p9(u8.currentNode);
  }, [e6, c13, o11, l10]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f2(r10) {
  throw new Error("Unexpected object: " + r10);
}
var a2 = ((e6) => (e6[e6.First = 0] = "First", e6[e6.Previous = 1] = "Previous", e6[e6.Next = 2] = "Next", e6[e6.Last = 3] = "Last", e6[e6.Specific = 4] = "Specific", e6[e6.Nothing = 5] = "Nothing", e6))(a2 || {});
function x(r10, n6) {
  let t15 = n6.resolveItems();
  if (t15.length <= 0)
    return null;
  let l10 = n6.resolveActiveIndex(), s17 = l10 != null ? l10 : -1, d15 = (() => {
    switch (r10.focus) {
      case 0:
        return t15.findIndex((e6) => !n6.resolveDisabled(e6));
      case 1: {
        let e6 = t15.slice().reverse().findIndex((i11, c13, u8) => s17 !== -1 && u8.length - c13 - 1 >= s17 ? false : !n6.resolveDisabled(i11));
        return e6 === -1 ? e6 : t15.length - 1 - e6;
      }
      case 2:
        return t15.findIndex((e6, i11) => i11 <= s17 ? false : !n6.resolveDisabled(e6));
      case 3: {
        let e6 = t15.slice().reverse().findIndex((i11) => !n6.resolveDisabled(i11));
        return e6 === -1 ? e6 : t15.length - 1 - e6;
      }
      case 4:
        return t15.findIndex((e6) => n6.resolveId(e6) === r10.id);
      case 5:
        return null;
      default:
        f2(r10);
    }
  })();
  return d15 === -1 ? l10 : d15;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e2(...n6) {
  return n6.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a11) => (a11[a11.None = 0] = "None", a11[a11.RenderStrategy = 1] = "RenderStrategy", a11[a11.Static = 2] = "Static", a11))(S2 || {});
var j = ((e6) => (e6[e6.Unmount = 0] = "Unmount", e6[e6.Hidden = 1] = "Hidden", e6))(j || {});
function X({ ourProps: r10, theirProps: t15, slot: e6, defaultTag: a11, features: s17, visible: n6 = true, name: f13 }) {
  let o11 = N2(t15, r10);
  if (n6)
    return c3(o11, e6, a11, f13);
  let u8 = s17 != null ? s17 : 0;
  if (u8 & 2) {
    let { static: l10 = false, ...p9 } = o11;
    if (l10)
      return c3(p9, e6, a11, f13);
  }
  if (u8 & 1) {
    let { unmount: l10 = true, ...p9 } = o11;
    return u(l10 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c3({ ...p9, hidden: true, style: { display: "none" } }, e6, a11, f13);
    } });
  }
  return c3(o11, e6, a11, f13);
}
function c3(r10, t15 = {}, e6, a11) {
  let { as: s17 = e6, children: n6, refName: f13 = "ref", ...o11 } = g(r10, ["unmount", "static"]), u8 = r10.ref !== void 0 ? { [f13]: r10.ref } : {}, l10 = typeof n6 == "function" ? n6(t15) : n6;
  "className" in o11 && o11.className && typeof o11.className == "function" && (o11.className = o11.className(t15));
  let p9 = {};
  if (t15) {
    let i11 = false, m9 = [];
    for (let [y7, d15] of Object.entries(t15))
      typeof d15 == "boolean" && (i11 = true), d15 === true && m9.push(y7);
    i11 && (p9["data-headlessui-state"] = m9.join(" "));
  }
  if (s17 === import_react13.Fragment && Object.keys(R(o11)).length > 0) {
    if (!(0, import_react13.isValidElement)(l10) || Array.isArray(l10) && l10.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a11} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o11).map((d15) => `  - ${d15}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d15) => `  - ${d15}`).join(`
`)].join(`
`));
    let i11 = l10.props, m9 = typeof (i11 == null ? void 0 : i11.className) == "function" ? (...d15) => e2(i11 == null ? void 0 : i11.className(...d15), o11.className) : e2(i11 == null ? void 0 : i11.className, o11.className), y7 = m9 ? { className: m9 } : {};
    return (0, import_react13.cloneElement)(l10, Object.assign({}, N2(l10.props, R(g(o11, ["ref"]))), p9, u8, w2(l10.ref, u8.ref), y7));
  }
  return (0, import_react13.createElement)(s17, Object.assign({}, g(o11, ["ref"]), s17 !== import_react13.Fragment && u8, s17 !== import_react13.Fragment && p9), l10);
}
function w2(...r10) {
  return { ref: r10.every((t15) => t15 == null) ? void 0 : (t15) => {
    for (let e6 of r10)
      e6 != null && (typeof e6 == "function" ? e6(t15) : e6.current = t15);
  } };
}
function N2(...r10) {
  var a11;
  if (r10.length === 0)
    return {};
  if (r10.length === 1)
    return r10[0];
  let t15 = {}, e6 = {};
  for (let s17 of r10)
    for (let n6 in s17)
      n6.startsWith("on") && typeof s17[n6] == "function" ? ((a11 = e6[n6]) != null || (e6[n6] = []), e6[n6].push(s17[n6])) : t15[n6] = s17[n6];
  if (t15.disabled || t15["aria-disabled"])
    return Object.assign(t15, Object.fromEntries(Object.keys(e6).map((s17) => [s17, void 0])));
  for (let s17 in e6)
    Object.assign(t15, { [s17](n6, ...f13) {
      let o11 = e6[s17];
      for (let u8 of o11) {
        if ((n6 instanceof Event || (n6 == null ? void 0 : n6.nativeEvent) instanceof Event) && n6.defaultPrevented)
          return;
        u8(n6, ...f13);
      }
    } });
  return t15;
}
function D2(r10) {
  var t15;
  return Object.assign((0, import_react13.forwardRef)(r10), { displayName: (t15 = r10.displayName) != null ? t15 : r10.name });
}
function R(r10) {
  let t15 = Object.assign({}, r10);
  for (let e6 in t15)
    t15[e6] === void 0 && delete t15[e6];
  return t15;
}
function g(r10, t15 = []) {
  let e6 = Object.assign({}, r10);
  for (let a11 of t15)
    a11 in e6 && delete e6[a11];
  return e6;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n6) {
  let e6 = n6.parentElement, l10 = null;
  for (; e6 && !(e6 instanceof HTMLFieldSetElement); )
    e6 instanceof HTMLLegendElement && (l10 = e6), e6 = e6.parentElement;
  let t15 = (e6 == null ? void 0 : e6.getAttribute("disabled")) === "";
  return t15 && i5(l10) ? false : t15;
}
function i5(n6) {
  if (!n6)
    return false;
  let e6 = n6.previousElementSibling;
  for (; e6 !== null; ) {
    if (e6 instanceof HTMLLegendElement)
      return false;
    e6 = e6.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e3(n6 = {}, r10 = null, t15 = []) {
  for (let [i11, o11] of Object.entries(n6))
    f3(t15, s7(r10, i11), o11);
  return t15;
}
function s7(n6, r10) {
  return n6 ? n6 + "[" + r10 + "]" : r10;
}
function f3(n6, r10, t15) {
  if (Array.isArray(t15))
    for (let [i11, o11] of t15.entries())
      f3(n6, s7(r10, i11.toString()), o11);
  else
    t15 instanceof Date ? n6.push([r10, t15.toISOString()]) : typeof t15 == "boolean" ? n6.push([r10, t15 ? "1" : "0"]) : typeof t15 == "string" ? n6.push([r10, t15]) : typeof t15 == "number" ? n6.push([r10, `${t15}`]) : t15 == null ? n6.push([r10, ""]) : e3(t15, r10, n6);
}
function p2(n6) {
  var t15;
  let r10 = (t15 = n6 == null ? void 0 : n6.form) != null ? t15 : n6.closest("form");
  if (r10) {
    for (let i11 of r10.elements)
      if (i11.tagName === "INPUT" && i11.type === "submit" || i11.tagName === "BUTTON" && i11.type === "submit" || i11.nodeName === "INPUT" && i11.type === "image") {
        i11.click();
        return;
      }
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "div";
var p3 = ((e6) => (e6[e6.None = 1] = "None", e6[e6.Focusable = 2] = "Focusable", e6[e6.Hidden = 4] = "Hidden", e6))(p3 || {});
function s8(t15, o11) {
  let { features: n6 = 1, ...e6 } = t15, d15 = { ref: o11, "aria-hidden": (n6 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n6 & 4) === 4 && (n6 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d15, theirProps: e6, slot: {}, defaultTag: a3, name: "Hidden" });
}
var c4 = D2(s8);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react14 = __toESM(require_react(), 1);
var n = (0, import_react14.createContext)(null);
n.displayName = "OpenClosedContext";
var d4 = ((e6) => (e6[e6.Open = 1] = "Open", e6[e6.Closed = 2] = "Closed", e6[e6.Closing = 4] = "Closing", e6[e6.Opening = 8] = "Opening", e6))(d4 || {});
function C() {
  return (0, import_react14.useContext)(n);
}
function c5({ value: o11, children: r10 }) {
  return import_react14.default.createElement(n.Provider, { value: o11 }, r10);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r10) => (r10.Space = " ", r10.Enter = "Enter", r10.Escape = "Escape", r10.Backspace = "Backspace", r10.Delete = "Delete", r10.ArrowLeft = "ArrowLeft", r10.ArrowUp = "ArrowUp", r10.ArrowRight = "ArrowRight", r10.ArrowDown = "ArrowDown", r10.Home = "Home", r10.End = "End", r10.PageUp = "PageUp", r10.PageDown = "PageDown", r10.Tab = "Tab", r10))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react15 = __toESM(require_react(), 1);
function T4(l10, r10, c13) {
  let [i11, s17] = (0, import_react15.useState)(c13), e6 = l10 !== void 0, t15 = (0, import_react15.useRef)(e6), u8 = (0, import_react15.useRef)(false), d15 = (0, import_react15.useRef)(false);
  return e6 && !t15.current && !u8.current ? (u8.current = true, t15.current = e6, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e6 && t15.current && !d15.current && (d15.current = true, t15.current = e6, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e6 ? l10 : i11, o4((n6) => (e6 || s17(n6), r10 == null ? void 0 : r10(n6)))];
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react16 = __toESM(require_react(), 1);
function m3(u8, t15) {
  let e6 = (0, import_react16.useRef)([]), r10 = o4(u8);
  (0, import_react16.useEffect)(() => {
    let o11 = [...e6.current];
    for (let [n6, a11] of t15.entries())
      if (e6.current[n6] !== a11) {
        let l10 = r10(t15, o11);
        return e6.current = t15, l10;
      }
  }, [r10, ...t15]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react17 = __toESM(require_react(), 1);
function t6(e6) {
  return [e6.screenX, e6.screenY];
}
function u3() {
  let e6 = (0, import_react17.useRef)([-1, -1]);
  return { wasMoved(r10) {
    let n6 = t6(r10);
    return e6.current[0] === n6[0] && e6.current[1] === n6[1] ? false : (e6.current = n6, true);
  }, update(r10) {
    e6.current = t6(r10);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t7() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i6() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n2() {
  return t7() || i6();
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var ke = ((e6) => (e6[e6.Open = 0] = "Open", e6[e6.Closed = 1] = "Closed", e6))(ke || {});
var we = ((e6) => (e6[e6.Single = 0] = "Single", e6[e6.Multi = 1] = "Multi", e6))(we || {});
var Ue = ((e6) => (e6[e6.Pointer = 0] = "Pointer", e6[e6.Other = 1] = "Other", e6))(Ue || {});
var Ne = ((n6) => (n6[n6.OpenCombobox = 0] = "OpenCombobox", n6[n6.CloseCombobox = 1] = "CloseCombobox", n6[n6.GoToOption = 2] = "GoToOption", n6[n6.RegisterOption = 3] = "RegisterOption", n6[n6.UnregisterOption = 4] = "UnregisterOption", n6[n6.RegisterLabel = 5] = "RegisterLabel", n6))(Ne || {});
function re(t15, l10 = (e6) => e6) {
  let e6 = t15.activeOptionIndex !== null ? t15.options[t15.activeOptionIndex] : null, r10 = I2(l10(t15.options.slice()), (b4) => b4.dataRef.current.domRef.current), i11 = e6 ? r10.indexOf(e6) : null;
  return i11 === -1 && (i11 = null), { options: r10, activeOptionIndex: i11 };
}
var He = { [1](t15) {
  var l10;
  return (l10 = t15.dataRef.current) != null && l10.disabled || t15.comboboxState === 1 ? t15 : { ...t15, activeOptionIndex: null, comboboxState: 1 };
}, [0](t15) {
  var e6;
  if ((e6 = t15.dataRef.current) != null && e6.disabled || t15.comboboxState === 0)
    return t15;
  let l10 = t15.activeOptionIndex;
  if (t15.dataRef.current) {
    let { isSelected: r10 } = t15.dataRef.current, i11 = t15.options.findIndex((b4) => r10(b4.dataRef.current.value));
    i11 !== -1 && (l10 = i11);
  }
  return { ...t15, comboboxState: 0, activeOptionIndex: l10 };
}, [2](t15, l10) {
  var i11, b4, n6, d15;
  if ((i11 = t15.dataRef.current) != null && i11.disabled || (b4 = t15.dataRef.current) != null && b4.optionsRef.current && !((n6 = t15.dataRef.current) != null && n6.optionsPropsRef.current.static) && t15.comboboxState === 1)
    return t15;
  let e6 = re(t15);
  if (e6.activeOptionIndex === null) {
    let o11 = e6.options.findIndex((u8) => !u8.dataRef.current.disabled);
    o11 !== -1 && (e6.activeOptionIndex = o11);
  }
  let r10 = x(l10, { resolveItems: () => e6.options, resolveActiveIndex: () => e6.activeOptionIndex, resolveId: (o11) => o11.id, resolveDisabled: (o11) => o11.dataRef.current.disabled });
  return { ...t15, ...e6, activeOptionIndex: r10, activationTrigger: (d15 = l10.trigger) != null ? d15 : 1 };
}, [3]: (t15, l10) => {
  var b4, n6;
  let e6 = { id: l10.id, dataRef: l10.dataRef }, r10 = re(t15, (d15) => [...d15, e6]);
  t15.activeOptionIndex === null && (b4 = t15.dataRef.current) != null && b4.isSelected(l10.dataRef.current.value) && (r10.activeOptionIndex = r10.options.indexOf(e6));
  let i11 = { ...t15, ...r10, activationTrigger: 1 };
  return (n6 = t15.dataRef.current) != null && n6.__demoMode && t15.dataRef.current.value === void 0 && (i11.activeOptionIndex = 0), i11;
}, [4]: (t15, l10) => {
  let e6 = re(t15, (r10) => {
    let i11 = r10.findIndex((b4) => b4.id === l10.id);
    return i11 !== -1 && r10.splice(i11, 1), r10;
  });
  return { ...t15, ...e6, activationTrigger: 1 };
}, [5]: (t15, l10) => ({ ...t15, labelId: l10.id }) };
var ae = (0, import_react18.createContext)(null);
ae.displayName = "ComboboxActionsContext";
function $(t15) {
  let l10 = (0, import_react18.useContext)(ae);
  if (l10 === null) {
    let e6 = new Error(`<${t15} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e6, $), e6;
  }
  return l10;
}
var le = (0, import_react18.createContext)(null);
le.displayName = "ComboboxDataContext";
function H2(t15) {
  let l10 = (0, import_react18.useContext)(le);
  if (l10 === null) {
    let e6 = new Error(`<${t15} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e6, H2), e6;
  }
  return l10;
}
function Ge(t15, l10) {
  return u(l10.type, He, t15, l10);
}
var Xe = import_react18.Fragment;
function je(t15, l10) {
  let { value: e6, defaultValue: r10, onChange: i11, form: b4, name: n6, by: d15 = (p9, T7) => p9 === T7, disabled: o11 = false, __demoMode: u8 = false, nullable: P5 = false, multiple: f13 = false, ...E6 } = t15, [c13 = f13 ? [] : void 0, g4] = T4(e6, i11, r10), [m9, x6] = (0, import_react18.useReducer)(Ge, { dataRef: (0, import_react18.createRef)(), comboboxState: u8 ? 0 : 1, options: [], activeOptionIndex: null, activationTrigger: 1, labelId: null }), L5 = (0, import_react18.useRef)(false), F9 = (0, import_react18.useRef)({ static: false, hold: false }), h9 = (0, import_react18.useRef)(null), B4 = (0, import_react18.useRef)(null), k2 = (0, import_react18.useRef)(null), G4 = (0, import_react18.useRef)(null), V6 = o4(typeof d15 == "string" ? (p9, T7) => {
    let R3 = d15;
    return (p9 == null ? void 0 : p9[R3]) === (T7 == null ? void 0 : T7[R3]);
  } : d15), M9 = (0, import_react18.useCallback)((p9) => u(s17.mode, { [1]: () => c13.some((T7) => V6(T7, p9)), [0]: () => V6(c13, p9) }), [c13]), s17 = (0, import_react18.useMemo)(() => ({ ...m9, optionsPropsRef: F9, labelRef: h9, inputRef: B4, buttonRef: k2, optionsRef: G4, value: c13, defaultValue: r10, disabled: o11, mode: f13 ? 1 : 0, get activeOptionIndex() {
    if (L5.current && m9.activeOptionIndex === null && m9.options.length > 0) {
      let p9 = m9.options.findIndex((T7) => !T7.dataRef.current.disabled);
      if (p9 !== -1)
        return p9;
    }
    return m9.activeOptionIndex;
  }, compare: V6, isSelected: M9, nullable: P5, __demoMode: u8 }), [c13, r10, o11, f13, P5, u8, m9]), O4 = (0, import_react18.useRef)(s17.activeOptionIndex !== null ? s17.options[s17.activeOptionIndex] : null);
  (0, import_react18.useEffect)(() => {
    let p9 = s17.activeOptionIndex !== null ? s17.options[s17.activeOptionIndex] : null;
    O4.current !== p9 && (O4.current = p9);
  }), l(() => {
    m9.dataRef.current = s17;
  }, [s17]), L([s17.buttonRef, s17.inputRef, s17.optionsRef], () => oe4.closeCombobox(), s17.comboboxState === 0);
  let a11 = (0, import_react18.useMemo)(() => ({ open: s17.comboboxState === 0, disabled: o11, activeIndex: s17.activeOptionIndex, activeOption: s17.activeOptionIndex === null ? null : s17.options[s17.activeOptionIndex].dataRef.current.value, value: c13 }), [s17, o11, c13]), I8 = o4((p9) => {
    let T7 = s17.options.find((R3) => R3.id === p9);
    T7 && j5(T7.dataRef.current.value);
  }), S10 = o4(() => {
    if (s17.activeOptionIndex !== null) {
      let { dataRef: p9, id: T7 } = s17.options[s17.activeOptionIndex];
      j5(p9.current.value), oe4.goToOption(a2.Specific, T7);
    }
  }), X9 = o4(() => {
    x6({ type: 0 }), L5.current = true;
  }), q6 = o4(() => {
    x6({ type: 1 }), L5.current = false;
  }), Q6 = o4((p9, T7, R3) => (L5.current = false, p9 === a2.Specific ? x6({ type: 2, focus: a2.Specific, id: T7, trigger: R3 }) : x6({ type: 2, focus: p9, trigger: R3 }))), Y7 = o4((p9, T7) => (x6({ type: 3, id: p9, dataRef: T7 }), () => {
    var R3;
    ((R3 = O4.current) == null ? void 0 : R3.id) === p9 && (L5.current = true), x6({ type: 4, id: p9 });
  })), ce4 = o4((p9) => (x6({ type: 5, id: p9 }), () => x6({ type: 5, id: null }))), j5 = o4((p9) => u(s17.mode, { [0]() {
    return g4 == null ? void 0 : g4(p9);
  }, [1]() {
    let T7 = s17.value.slice(), R3 = T7.findIndex((J4) => V6(J4, p9));
    return R3 === -1 ? T7.push(p9) : T7.splice(R3, 1), g4 == null ? void 0 : g4(T7);
  } })), oe4 = (0, import_react18.useMemo)(() => ({ onChange: j5, registerOption: Y7, registerLabel: ce4, goToOption: Q6, closeCombobox: q6, openCombobox: X9, selectActiveOption: S10, selectOption: I8 }), []), Te4 = l10 === null ? {} : { ref: l10 }, Z6 = (0, import_react18.useRef)(null), me4 = p();
  return (0, import_react18.useEffect)(() => {
    Z6.current && r10 !== void 0 && me4.addEventListener(Z6.current, "reset", () => {
      j5(r10);
    });
  }, [Z6, j5]), import_react18.default.createElement(ae.Provider, { value: oe4 }, import_react18.default.createElement(le.Provider, { value: s17 }, import_react18.default.createElement(c5, { value: u(s17.comboboxState, { [0]: d4.Open, [1]: d4.Closed }) }, n6 != null && c13 != null && e3({ [n6]: c13 }).map(([p9, T7], R3) => import_react18.default.createElement(c4, { features: p3.Hidden, ref: R3 === 0 ? (J4) => {
    var ie4;
    Z6.current = (ie4 = J4 == null ? void 0 : J4.closest("form")) != null ? ie4 : null;
  } : void 0, ...R({ key: p9, as: "input", type: "hidden", hidden: true, readOnly: true, form: b4, name: p9, value: T7 }) })), X({ ourProps: Te4, theirProps: E6, slot: a11, defaultTag: Xe, name: "Combobox" }))));
}
var Je = "input";
function Ke(t15, l10) {
  var V6, M9, s17, O4;
  let e6 = I(), { id: r10 = `headlessui-combobox-input-${e6}`, onChange: i11, displayValue: b4, type: n6 = "text", ...d15 } = t15, o11 = H2("Combobox.Input"), u8 = $("Combobox.Input"), P5 = y2(o11.inputRef, l10), f13 = (0, import_react18.useRef)(false), E6 = p(), c13 = function() {
    var a11;
    return typeof b4 == "function" && o11.value !== void 0 ? (a11 = b4(o11.value)) != null ? a11 : "" : typeof o11.value == "string" ? o11.value : "";
  }();
  m3(([a11, I8], [S10, X9]) => {
    f13.current || o11.inputRef.current && (X9 === 0 && I8 === 1 || a11 !== S10) && (o11.inputRef.current.value = a11);
  }, [c13, o11.comboboxState]), m3(([a11], [I8]) => {
    if (a11 === 0 && I8 === 1) {
      let S10 = o11.inputRef.current;
      if (!S10)
        return;
      let X9 = S10.value, { selectionStart: q6, selectionEnd: Q6, selectionDirection: Y7 } = S10;
      S10.value = "", S10.value = X9, Y7 !== null ? S10.setSelectionRange(q6, Q6, Y7) : S10.setSelectionRange(q6, Q6);
    }
  }, [o11.comboboxState]);
  let g4 = (0, import_react18.useRef)(false), m9 = o4(() => {
    g4.current = true;
  }), x6 = o4(() => {
    setTimeout(() => {
      g4.current = false;
    });
  }), L5 = o4((a11) => {
    switch (f13.current = true, a11.key) {
      case o8.Backspace:
      case o8.Delete:
        if (o11.mode !== 0 || !o11.nullable)
          return;
        let I8 = a11.currentTarget;
        E6.requestAnimationFrame(() => {
          I8.value === "" && (u8.onChange(null), o11.optionsRef.current && (o11.optionsRef.current.scrollTop = 0), u8.goToOption(a2.Nothing));
        });
        break;
      case o8.Enter:
        if (f13.current = false, o11.comboboxState !== 0 || g4.current)
          return;
        if (a11.preventDefault(), a11.stopPropagation(), o11.activeOptionIndex === null) {
          u8.closeCombobox();
          return;
        }
        u8.selectActiveOption(), o11.mode === 0 && u8.closeCombobox();
        break;
      case o8.ArrowDown:
        return f13.current = false, a11.preventDefault(), a11.stopPropagation(), u(o11.comboboxState, { [0]: () => {
          u8.goToOption(a2.Next);
        }, [1]: () => {
          u8.openCombobox();
        } });
      case o8.ArrowUp:
        return f13.current = false, a11.preventDefault(), a11.stopPropagation(), u(o11.comboboxState, { [0]: () => {
          u8.goToOption(a2.Previous);
        }, [1]: () => {
          u8.openCombobox(), E6.nextFrame(() => {
            o11.value || u8.goToOption(a2.Last);
          });
        } });
      case o8.Home:
        if (a11.shiftKey)
          break;
        return f13.current = false, a11.preventDefault(), a11.stopPropagation(), u8.goToOption(a2.First);
      case o8.PageUp:
        return f13.current = false, a11.preventDefault(), a11.stopPropagation(), u8.goToOption(a2.First);
      case o8.End:
        if (a11.shiftKey)
          break;
        return f13.current = false, a11.preventDefault(), a11.stopPropagation(), u8.goToOption(a2.Last);
      case o8.PageDown:
        return f13.current = false, a11.preventDefault(), a11.stopPropagation(), u8.goToOption(a2.Last);
      case o8.Escape:
        return f13.current = false, o11.comboboxState !== 0 ? void 0 : (a11.preventDefault(), o11.optionsRef.current && !o11.optionsPropsRef.current.static && a11.stopPropagation(), u8.closeCombobox());
      case o8.Tab:
        if (f13.current = false, o11.comboboxState !== 0)
          return;
        o11.mode === 0 && u8.selectActiveOption(), u8.closeCombobox();
        break;
    }
  }), F9 = o4((a11) => {
    u8.openCombobox(), i11 == null || i11(a11);
  }), h9 = o4(() => {
    f13.current = false;
  }), B4 = i2(() => {
    if (o11.labelId)
      return [o11.labelId].join(" ");
  }, [o11.labelId]), k2 = (0, import_react18.useMemo)(() => ({ open: o11.comboboxState === 0, disabled: o11.disabled }), [o11]), G4 = { ref: P5, id: r10, role: "combobox", type: n6, "aria-controls": (V6 = o11.optionsRef.current) == null ? void 0 : V6.id, "aria-expanded": o11.disabled ? void 0 : o11.comboboxState === 0, "aria-activedescendant": o11.activeOptionIndex === null || (M9 = o11.options[o11.activeOptionIndex]) == null ? void 0 : M9.id, "aria-labelledby": B4, "aria-autocomplete": "list", defaultValue: (O4 = (s17 = t15.defaultValue) != null ? s17 : o11.defaultValue !== void 0 ? b4 == null ? void 0 : b4(o11.defaultValue) : null) != null ? O4 : o11.defaultValue, disabled: o11.disabled, onCompositionStart: m9, onCompositionEnd: x6, onKeyDown: L5, onChange: F9, onBlur: h9 };
  return X({ ourProps: G4, theirProps: d15, slot: k2, defaultTag: Je, name: "Combobox.Input" });
}
var We = "button";
function $e(t15, l10) {
  var g4;
  let e6 = H2("Combobox.Button"), r10 = $("Combobox.Button"), i11 = y2(e6.buttonRef, l10), b4 = I(), { id: n6 = `headlessui-combobox-button-${b4}`, ...d15 } = t15, o11 = p(), u8 = o4((m9) => {
    switch (m9.key) {
      case o8.ArrowDown:
        return m9.preventDefault(), m9.stopPropagation(), e6.comboboxState === 1 && r10.openCombobox(), o11.nextFrame(() => {
          var x6;
          return (x6 = e6.inputRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        });
      case o8.ArrowUp:
        return m9.preventDefault(), m9.stopPropagation(), e6.comboboxState === 1 && (r10.openCombobox(), o11.nextFrame(() => {
          e6.value || r10.goToOption(a2.Last);
        })), o11.nextFrame(() => {
          var x6;
          return (x6 = e6.inputRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        });
      case o8.Escape:
        return e6.comboboxState !== 0 ? void 0 : (m9.preventDefault(), e6.optionsRef.current && !e6.optionsPropsRef.current.static && m9.stopPropagation(), r10.closeCombobox(), o11.nextFrame(() => {
          var x6;
          return (x6 = e6.inputRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        }));
      default:
        return;
    }
  }), P5 = o4((m9) => {
    if (r3(m9.currentTarget))
      return m9.preventDefault();
    e6.comboboxState === 0 ? r10.closeCombobox() : (m9.preventDefault(), r10.openCombobox()), o11.nextFrame(() => {
      var x6;
      return (x6 = e6.inputRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
    });
  }), f13 = i2(() => {
    if (e6.labelId)
      return [e6.labelId, n6].join(" ");
  }, [e6.labelId, n6]), E6 = (0, import_react18.useMemo)(() => ({ open: e6.comboboxState === 0, disabled: e6.disabled, value: e6.value }), [e6]), c13 = { ref: i11, id: n6, type: s6(t15, e6.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (g4 = e6.optionsRef.current) == null ? void 0 : g4.id, "aria-expanded": e6.disabled ? void 0 : e6.comboboxState === 0, "aria-labelledby": f13, disabled: e6.disabled, onClick: P5, onKeyDown: u8 };
  return X({ ourProps: c13, theirProps: d15, slot: E6, defaultTag: We, name: "Combobox.Button" });
}
var qe = "label";
function Qe(t15, l10) {
  let e6 = I(), { id: r10 = `headlessui-combobox-label-${e6}`, ...i11 } = t15, b4 = H2("Combobox.Label"), n6 = $("Combobox.Label"), d15 = y2(b4.labelRef, l10);
  l(() => n6.registerLabel(r10), [r10]);
  let o11 = o4(() => {
    var f13;
    return (f13 = b4.inputRef.current) == null ? void 0 : f13.focus({ preventScroll: true });
  }), u8 = (0, import_react18.useMemo)(() => ({ open: b4.comboboxState === 0, disabled: b4.disabled }), [b4]);
  return X({ ourProps: { ref: d15, id: r10, onClick: o11 }, theirProps: i11, slot: u8, defaultTag: qe, name: "Combobox.Label" });
}
var Ye = "ul";
var Ze = S2.RenderStrategy | S2.Static;
function ze(t15, l10) {
  let e6 = I(), { id: r10 = `headlessui-combobox-options-${e6}`, hold: i11 = false, ...b4 } = t15, n6 = H2("Combobox.Options"), d15 = y2(n6.optionsRef, l10), o11 = C(), u8 = (() => o11 !== null ? (o11 & d4.Open) === d4.Open : n6.comboboxState === 0)();
  l(() => {
    var c13;
    n6.optionsPropsRef.current.static = (c13 = t15.static) != null ? c13 : false;
  }, [n6.optionsPropsRef, t15.static]), l(() => {
    n6.optionsPropsRef.current.hold = i11;
  }, [n6.optionsPropsRef, i11]), F2({ container: n6.optionsRef.current, enabled: n6.comboboxState === 0, accept(c13) {
    return c13.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c13.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c13) {
    c13.setAttribute("role", "none");
  } });
  let P5 = i2(() => {
    var c13, g4;
    return (g4 = n6.labelId) != null ? g4 : (c13 = n6.buttonRef.current) == null ? void 0 : c13.id;
  }, [n6.labelId, n6.buttonRef.current]), f13 = (0, import_react18.useMemo)(() => ({ open: n6.comboboxState === 0 }), [n6]), E6 = { "aria-labelledby": P5, role: "listbox", "aria-multiselectable": n6.mode === 1 ? true : void 0, id: r10, ref: d15 };
  return X({ ourProps: E6, theirProps: b4, slot: f13, defaultTag: Ye, features: Ze, visible: u8, name: "Combobox.Options" });
}
var eo = "li";
function oo(t15, l10) {
  var M9, s17;
  let e6 = I(), { id: r10 = `headlessui-combobox-option-${e6}`, disabled: i11 = false, value: b4, ...n6 } = t15, d15 = H2("Combobox.Option"), o11 = $("Combobox.Option"), u8 = d15.activeOptionIndex !== null ? d15.options[d15.activeOptionIndex].id === r10 : false, P5 = d15.isSelected(b4), f13 = (0, import_react18.useRef)(null), E6 = s2({ disabled: i11, value: b4, domRef: f13, textValue: (s17 = (M9 = f13.current) == null ? void 0 : M9.textContent) == null ? void 0 : s17.toLowerCase() }), c13 = y2(l10, f13), g4 = o4(() => o11.selectOption(r10));
  l(() => o11.registerOption(r10, E6), [E6, r10]);
  let m9 = (0, import_react18.useRef)(!d15.__demoMode);
  l(() => {
    if (!d15.__demoMode)
      return;
    let O4 = o2();
    return O4.requestAnimationFrame(() => {
      m9.current = true;
    }), O4.dispose;
  }, []), l(() => {
    if (d15.comboboxState !== 0 || !u8 || !m9.current || d15.activationTrigger === 0)
      return;
    let O4 = o2();
    return O4.requestAnimationFrame(() => {
      var a11, I8;
      (I8 = (a11 = f13.current) == null ? void 0 : a11.scrollIntoView) == null || I8.call(a11, { block: "nearest" });
    }), O4.dispose;
  }, [f13, u8, d15.comboboxState, d15.activationTrigger, d15.activeOptionIndex]);
  let x6 = o4((O4) => {
    if (i11)
      return O4.preventDefault();
    g4(), d15.mode === 0 && o11.closeCombobox(), n2() || requestAnimationFrame(() => {
      var a11;
      return (a11 = d15.inputRef.current) == null ? void 0 : a11.focus();
    });
  }), L5 = o4(() => {
    if (i11)
      return o11.goToOption(a2.Nothing);
    o11.goToOption(a2.Specific, r10);
  }), F9 = u3(), h9 = o4((O4) => F9.update(O4)), B4 = o4((O4) => {
    F9.wasMoved(O4) && (i11 || u8 || o11.goToOption(a2.Specific, r10, 0));
  }), k2 = o4((O4) => {
    F9.wasMoved(O4) && (i11 || u8 && (d15.optionsPropsRef.current.hold || o11.goToOption(a2.Nothing)));
  }), G4 = (0, import_react18.useMemo)(() => ({ active: u8, selected: P5, disabled: i11 }), [u8, P5, i11]);
  return X({ ourProps: { id: r10, ref: c13, role: "option", tabIndex: i11 === true ? void 0 : -1, "aria-disabled": i11 === true ? true : void 0, "aria-selected": P5, disabled: void 0, onClick: x6, onFocus: L5, onPointerEnter: h9, onMouseEnter: h9, onPointerMove: B4, onMouseMove: B4, onPointerLeave: k2, onMouseLeave: k2 }, theirProps: n6, slot: G4, defaultTag: eo, name: "Combobox.Option" });
}
var to = D2(je);
var no = D2($e);
var ro = D2(Ke);
var ao = D2(Qe);
var lo = D2(ze);
var io = D2(oo);
var Wo = Object.assign(to, { Input: ro, Button: no, Label: ao, Options: lo, Option: io });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react29 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react20 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react19 = __toESM(require_react(), 1);
function s10(e6, r10, n6) {
  let o11 = s2(r10);
  (0, import_react19.useEffect)(() => {
    function t15(i11) {
      o11.current(i11);
    }
    return window.addEventListener(e6, t15, n6), () => window.removeEventListener(e6, t15, n6);
  }, [e6, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s11 = ((r10) => (r10[r10.Forwards = 0] = "Forwards", r10[r10.Backwards = 1] = "Backwards", r10))(s11 || {});
function n3() {
  let e6 = (0, import_react20.useRef)(0);
  return s10("keydown", (o11) => {
    o11.key === "Tab" && (e6.current = o11.shiftKey ? 1 : 0);
  }, true), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react21 = __toESM(require_react(), 1);
function f6() {
  let e6 = (0, import_react21.useRef)(false);
  return l(() => (e6.current = true, () => {
    e6.current = false;
  }), []), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react22 = __toESM(require_react(), 1);
function n4(...e6) {
  return (0, import_react22.useMemo)(() => e(...e6), [...e6]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react23 = __toESM(require_react(), 1);
function E3(n6, e6, a11, t15) {
  let i11 = s2(a11);
  (0, import_react23.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r10(o11) {
      i11.current(o11);
    }
    return n6.addEventListener(e6, r10, t15), () => n6.removeEventListener(e6, r10, t15);
  }, [n6, e6, t15]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t10(n6) {
  function e6() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e6));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e6), e6());
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t15) {
  if (!t15)
    return /* @__PURE__ */ new Set();
  if (typeof t15 == "function")
    return new Set(t15());
  let n6 = /* @__PURE__ */ new Set();
  for (let e6 of t15.current)
    e6.current instanceof HTMLElement && n6.add(e6.current);
  return n6;
}
var J = "div";
var h3 = ((r10) => (r10[r10.None = 1] = "None", r10[r10.InitialFocus = 2] = "InitialFocus", r10[r10.TabLock = 4] = "TabLock", r10[r10.FocusLock = 8] = "FocusLock", r10[r10.RestoreFocus = 16] = "RestoreFocus", r10[r10.All = 30] = "All", r10))(h3 || {});
function X2(t15, n6) {
  let e6 = (0, import_react24.useRef)(null), o11 = y2(e6, n6), { initialFocus: u8, containers: i11, features: r10 = 30, ...l10 } = t15;
  l2() || (r10 = 1);
  let m9 = n4(e6);
  Y({ ownerDocument: m9 }, Boolean(r10 & 16));
  let c13 = Z({ ownerDocument: m9, container: e6, initialFocus: u8 }, Boolean(r10 & 2));
  $2({ ownerDocument: m9, container: e6, containers: i11, previousActiveElement: c13 }, Boolean(r10 & 8));
  let v4 = n3(), R3 = o4((s17) => {
    let T7 = e6.current;
    if (!T7)
      return;
    ((B4) => B4())(() => {
      u(v4.current, { [s11.Forwards]: () => {
        O(T7, M.First, { skipElements: [s17.relatedTarget] });
      }, [s11.Backwards]: () => {
        O(T7, M.Last, { skipElements: [s17.relatedTarget] });
      } });
    });
  }), _6 = p(), H8 = (0, import_react24.useRef)(false), j5 = { ref: o11, onKeyDown(s17) {
    s17.key == "Tab" && (H8.current = true, _6.requestAnimationFrame(() => {
      H8.current = false;
    }));
  }, onBlur(s17) {
    let T7 = P(i11);
    e6.current instanceof HTMLElement && T7.add(e6.current);
    let E6 = s17.relatedTarget;
    E6 instanceof HTMLElement && E6.dataset.headlessuiFocusGuard !== "true" && (S3(T7, E6) || (H8.current ? O(e6.current, u(v4.current, { [s11.Forwards]: () => M.Next, [s11.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s17.target }) : s17.target instanceof HTMLElement && y(s17.target)));
  } };
  return import_react24.default.createElement(import_react24.default.Fragment, null, Boolean(r10 & 4) && import_react24.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R3, features: p3.Focusable }), X({ ourProps: j5, theirProps: l10, defaultTag: J, name: "FocusTrap" }), Boolean(r10 & 4) && import_react24.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R3, features: p3.Focusable }));
}
var z2 = D2(X2);
var Re = Object.assign(z2, { features: h3 });
var a4 = [];
t10(() => {
  function t15(n6) {
    n6.target instanceof HTMLElement && n6.target !== document.body && a4[0] !== n6.target && (a4.unshift(n6.target), a4 = a4.filter((e6) => e6 != null && e6.isConnected), a4.splice(10));
  }
  window.addEventListener("click", t15, { capture: true }), window.addEventListener("mousedown", t15, { capture: true }), window.addEventListener("focus", t15, { capture: true }), document.body.addEventListener("click", t15, { capture: true }), document.body.addEventListener("mousedown", t15, { capture: true }), document.body.addEventListener("focus", t15, { capture: true });
});
function Q(t15 = true) {
  let n6 = (0, import_react24.useRef)(a4.slice());
  return m3(([e6], [o11]) => {
    o11 === true && e6 === false && t3(() => {
      n6.current.splice(0);
    }), o11 === false && e6 === true && (n6.current = a4.slice());
  }, [t15, a4, n6]), o4(() => {
    var e6;
    return (e6 = n6.current.find((o11) => o11 != null && o11.isConnected)) != null ? e6 : null;
  });
}
function Y({ ownerDocument: t15 }, n6) {
  let e6 = Q(n6);
  m3(() => {
    n6 || (t15 == null ? void 0 : t15.activeElement) === (t15 == null ? void 0 : t15.body) && y(e6());
  }, [n6]);
  let o11 = (0, import_react24.useRef)(false);
  (0, import_react24.useEffect)(() => (o11.current = false, () => {
    o11.current = true, t3(() => {
      o11.current && y(e6());
    });
  }), []);
}
function Z({ ownerDocument: t15, container: n6, initialFocus: e6 }, o11) {
  let u8 = (0, import_react24.useRef)(null), i11 = f6();
  return m3(() => {
    if (!o11)
      return;
    let r10 = n6.current;
    r10 && t3(() => {
      if (!i11.current)
        return;
      let l10 = t15 == null ? void 0 : t15.activeElement;
      if (e6 != null && e6.current) {
        if ((e6 == null ? void 0 : e6.current) === l10) {
          u8.current = l10;
          return;
        }
      } else if (r10.contains(l10)) {
        u8.current = l10;
        return;
      }
      e6 != null && e6.current ? y(e6.current) : O(r10, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u8.current = t15 == null ? void 0 : t15.activeElement;
    });
  }, [o11]), u8;
}
function $2({ ownerDocument: t15, container: n6, containers: e6, previousActiveElement: o11 }, u8) {
  let i11 = f6();
  E3(t15 == null ? void 0 : t15.defaultView, "focus", (r10) => {
    if (!u8 || !i11.current)
      return;
    let l10 = P(e6);
    n6.current instanceof HTMLElement && l10.add(n6.current);
    let m9 = o11.current;
    if (!m9)
      return;
    let c13 = r10.target;
    c13 && c13 instanceof HTMLElement ? S3(l10, c13) ? (o11.current = c13, y(c13)) : (r10.preventDefault(), r10.stopPropagation(), y(m9)) : y(o11.current);
  }, true);
}
function S3(t15, n6) {
  for (let e6 of t15)
    if (e6.contains(n6))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react26 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react25 = __toESM(require_react(), 1);
var e4 = (0, import_react25.createContext)(false);
function l5() {
  return (0, import_react25.useContext)(e4);
}
function P2(o11) {
  return import_react25.default.createElement(e4.Provider, { value: o11.force }, o11.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function H3(u8) {
  let a11 = l5(), o11 = (0, import_react26.useContext)(c7), e6 = n4(u8), [l10, n6] = (0, import_react26.useState)(() => {
    if (!a11 && o11 !== null || s.isServer)
      return null;
    let t15 = e6 == null ? void 0 : e6.getElementById("headlessui-portal-root");
    if (t15)
      return t15;
    if (e6 === null)
      return null;
    let r10 = e6.createElement("div");
    return r10.setAttribute("id", "headlessui-portal-root"), e6.body.appendChild(r10);
  });
  return (0, import_react26.useEffect)(() => {
    l10 !== null && (e6 != null && e6.body.contains(l10) || e6 == null || e6.body.appendChild(l10));
  }, [l10, e6]), (0, import_react26.useEffect)(() => {
    a11 || o11 !== null && n6(o11.current);
  }, [o11, n6, a11]), l10;
}
var O2 = import_react26.Fragment;
function _2(u8, a11) {
  let o11 = u8, e6 = (0, import_react26.useRef)(null), l10 = y2(T2((p9) => {
    e6.current = p9;
  }), a11), n6 = n4(e6), t15 = H3(e6), [r10] = (0, import_react26.useState)(() => {
    var p9;
    return s.isServer ? null : (p9 = n6 == null ? void 0 : n6.createElement("div")) != null ? p9 : null;
  }), y7 = l2(), f13 = (0, import_react26.useRef)(false);
  return l(() => {
    if (f13.current = false, !(!t15 || !r10))
      return t15.contains(r10) || (r10.setAttribute("data-headlessui-portal", ""), t15.appendChild(r10)), () => {
        f13.current = true, t3(() => {
          var p9;
          f13.current && (!t15 || !r10 || (r10 instanceof Node && t15.contains(r10) && t15.removeChild(r10), t15.childNodes.length <= 0 && ((p9 = t15.parentElement) == null || p9.removeChild(t15))));
        });
      };
  }, [t15, r10]), y7 ? !t15 || !r10 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: l10 }, theirProps: o11, defaultTag: O2, name: "Portal" }), r10) : null;
}
var F3 = import_react26.Fragment;
var c7 = (0, import_react26.createContext)(null);
function U2(u8, a11) {
  let { target: o11, ...e6 } = u8, n6 = { ref: y2(a11) };
  return import_react26.default.createElement(c7.Provider, { value: o11 }, X({ ourProps: n6, theirProps: e6, defaultTag: F3, name: "Popover.Group" }));
}
var S4 = D2(_2);
var j2 = D2(U2);
var te = Object.assign(S4, { Group: j2 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react27 = __toESM(require_react(), 1);
var d8 = (0, import_react27.createContext)(null);
function f7() {
  let r10 = (0, import_react27.useContext)(d8);
  if (r10 === null) {
    let t15 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t15, f7), t15;
  }
  return r10;
}
function M2() {
  let [r10, t15] = (0, import_react27.useState)([]);
  return [r10.length > 0 ? r10.join(" ") : void 0, (0, import_react27.useMemo)(() => function(e6) {
    let i11 = o4((s17) => (t15((o11) => [...o11, s17]), () => t15((o11) => {
      let p9 = o11.slice(), c13 = p9.indexOf(s17);
      return c13 !== -1 && p9.splice(c13, 1), p9;
    }))), n6 = (0, import_react27.useMemo)(() => ({ register: i11, slot: e6.slot, name: e6.name, props: e6.props }), [i11, e6.slot, e6.name, e6.props]);
    return import_react27.default.createElement(d8.Provider, { value: n6 }, e6.children);
  }, [t15])];
}
var S5 = "p";
function h4(r10, t15) {
  let a11 = I(), { id: e6 = `headlessui-description-${a11}`, ...i11 } = r10, n6 = f7(), s17 = y2(t15);
  l(() => n6.register(e6), [e6, n6.register]);
  let o11 = { ref: s17, ...n6.props, id: e6 };
  return X({ ourProps: o11, theirProps: i11, slot: n6.slot || {}, defaultTag: S5, name: n6.name || "Description" });
}
var y3 = D2(h4);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react28 = __toESM(require_react(), 1);
var a5 = (0, import_react28.createContext)(() => {
});
a5.displayName = "StackContext";
var s13 = ((e6) => (e6[e6.Add = 0] = "Add", e6[e6.Remove = 1] = "Remove", e6))(s13 || {});
function x4() {
  return (0, import_react28.useContext)(a5);
}
function M3({ children: i11, onUpdate: r10, type: e6, element: n6, enabled: u8 }) {
  let l10 = x4(), o11 = o4((...t15) => {
    r10 == null || r10(...t15), l10(...t15);
  });
  return l(() => {
    let t15 = u8 === void 0 || u8 === true;
    return t15 && o11(0, e6, n6), () => {
      t15 && o11(1, e6, n6);
    };
  }, [o11, e6, n6, u8]), import_react28.default.createElement(a5.Provider, { value: o11 }, i11);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i8(e6, t15) {
  return e6 === t15 && (e6 !== 0 || 1 / e6 === 1 / t15) || e6 !== e6 && t15 !== t15;
}
var d10 = typeof Object.is == "function" ? Object.is : i8;
var { useState: u5, useEffect: h5, useLayoutEffect: f8, useDebugValue: p5 } = l7;
function y4(e6, t15, c13) {
  const a11 = t15(), [{ inst: n6 }, o11] = u5({ inst: { value: a11, getSnapshot: t15 } });
  return f8(() => {
    n6.value = a11, n6.getSnapshot = t15, r6(n6) && o11({ inst: n6 });
  }, [e6, a11, t15]), h5(() => (r6(n6) && o11({ inst: n6 }), e6(() => {
    r6(n6) && o11({ inst: n6 });
  })), [e6]), p5(a11), a11;
}
function r6(e6) {
  const t15 = e6.getSnapshot, c13 = e6.value;
  try {
    const a11 = t15();
    return !d10(c13, a11);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t12(r10, e6, n6) {
  return e6();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r7 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s14 = !r7;
var c9 = s14 ? t12 : y4;
var a6 = "useSyncExternalStore" in e5 ? ((n6) => n6.useSyncExternalStore)(e5) : c9;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t15) {
  return a6(t15.subscribe, t15.getSnapshot, t15.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o11, r10) {
  let t15 = o11(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t15;
  }, subscribe(e6) {
    return n6.add(e6), () => n6.delete(e6);
  }, dispatch(e6, ...s17) {
    let i11 = r10[e6].call(t15, ...s17);
    i11 && (t15 = i11, n6.forEach((c13) => c13()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c10() {
  let o11;
  return { before({ doc: e6 }) {
    var l10;
    let n6 = e6.documentElement;
    o11 = ((l10 = e6.defaultView) != null ? l10 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e6, d: n6 }) {
    let t15 = e6.documentElement, l10 = t15.clientWidth - t15.offsetWidth, r10 = o11 - l10;
    n6.style(t15, "paddingRight", `${r10}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p6() {
  if (!t7())
    return {};
  let o11;
  return { before() {
    o11 = window.pageYOffset;
  }, after({ doc: r10, d: l10, meta: s17 }) {
    function i11(e6) {
      return s17.containers.flatMap((t15) => t15()).some((t15) => t15.contains(e6));
    }
    l10.style(r10.body, "marginTop", `-${o11}px`), window.scrollTo(0, 0);
    let n6 = null;
    l10.addEventListener(r10, "click", (e6) => {
      if (e6.target instanceof HTMLElement)
        try {
          let t15 = e6.target.closest("a");
          if (!t15)
            return;
          let { hash: c13 } = new URL(t15.href), a11 = r10.querySelector(c13);
          a11 && !i11(a11) && (n6 = a11);
        } catch {
        }
    }, true), l10.addEventListener(r10, "touchmove", (e6) => {
      e6.target instanceof HTMLElement && !i11(e6.target) && e6.preventDefault();
    }, { passive: false }), l10.add(() => {
      window.scrollTo(0, window.pageYOffset + o11), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e6, d: o11 }) {
    o11.style(e6.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m7(e6) {
  let n6 = {};
  for (let t15 of e6)
    Object.assign(n6, t15(n6));
  return n6;
}
var a8 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e6, n6) {
  var o11;
  let t15 = (o11 = this.get(e6)) != null ? o11 : { doc: e6, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t15.count++, t15.meta.add(n6), this.set(e6, t15), this;
}, POP(e6, n6) {
  let t15 = this.get(e6);
  return t15 && (t15.count--, t15.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e6, d: n6, meta: t15 }) {
  let o11 = { doc: e6, d: n6, meta: m7(t15) }, c13 = [p6(), c10(), l8()];
  c13.forEach(({ before: r10 }) => r10 == null ? void 0 : r10(o11)), c13.forEach(({ after: r10 }) => r10 == null ? void 0 : r10(o11));
}, SCROLL_ALLOW({ d: e6 }) {
  e6.dispose();
}, TEARDOWN({ doc: e6 }) {
  this.delete(e6);
} });
a8.subscribe(() => {
  let e6 = a8.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t15] of e6)
    n6.set(t15, t15.documentElement.style.overflow);
  for (let t15 of e6.values()) {
    let o11 = n6.get(t15.doc) === "hidden", c13 = t15.count !== 0;
    (c13 && !o11 || !c13 && o11) && a8.dispatch(t15.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t15), t15.count === 0 && a8.dispatch("TEARDOWN", t15);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p7(e6, r10, n6) {
  let f13 = S6(a8), o11 = e6 ? f13.get(e6) : void 0, i11 = o11 ? o11.count > 0 : false;
  return l(() => {
    if (!(!e6 || !r10))
      return a8.dispatch("PUSH", e6, n6), () => a8.dispatch("POP", e6, n6);
  }, [r10, e6]), i11;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u6 = /* @__PURE__ */ new Map();
var t13 = /* @__PURE__ */ new Map();
function h6(r10, l10 = true) {
  l(() => {
    var o11;
    if (!l10)
      return;
    let e6 = typeof r10 == "function" ? r10() : r10.current;
    if (!e6)
      return;
    function a11() {
      var d15;
      if (!e6)
        return;
      let i11 = (d15 = t13.get(e6)) != null ? d15 : 1;
      if (i11 === 1 ? t13.delete(e6) : t13.set(e6, i11 - 1), i11 !== 1)
        return;
      let n6 = u6.get(e6);
      n6 && (n6["aria-hidden"] === null ? e6.removeAttribute("aria-hidden") : e6.setAttribute("aria-hidden", n6["aria-hidden"]), e6.inert = n6.inert, u6.delete(e6));
    }
    let f13 = (o11 = t13.get(e6)) != null ? o11 : 0;
    return t13.set(e6, f13 + 1), f13 !== 0 || (u6.set(e6, { "aria-hidden": e6.getAttribute("aria-hidden"), inert: e6.inert }), e6.setAttribute("aria-hidden", "true"), e6.inert = true), a11;
  }, [r10, l10]);
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Se = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(Se || {});
var Fe = ((e6) => (e6[e6.SetTitleId = 0] = "SetTitleId", e6))(Fe || {});
var ke2 = { [0](t15, e6) {
  return t15.titleId === e6.id ? t15 : { ...t15, titleId: e6.id };
} };
var M4 = (0, import_react29.createContext)(null);
M4.displayName = "DialogContext";
function S7(t15) {
  let e6 = (0, import_react29.useContext)(M4);
  if (e6 === null) {
    let o11 = new Error(`<${t15} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, S7), o11;
  }
  return e6;
}
function xe2(t15, e6, o11 = () => [document.body]) {
  p7(t15, e6, (s17) => {
    var n6;
    return { containers: [...(n6 = s17.containers) != null ? n6 : [], o11] };
  });
}
function _e(t15, e6) {
  return u(e6.type, ke2, t15, e6);
}
var Me = "div";
var He2 = S2.RenderStrategy | S2.Static;
function Ie(t15, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-${o11}`, open: n6, onClose: l10, initialFocus: d15, __demoMode: c13 = false, ...D8 } = t15, [P5, F9] = (0, import_react29.useState)(0), i11 = C();
  n6 === void 0 && i11 !== null && (n6 = (i11 & d4.Open) === d4.Open);
  let m9 = (0, import_react29.useRef)(null), Q6 = y2(m9, e6), y7 = (0, import_react29.useRef)(null), p9 = n4(m9), U5 = t15.hasOwnProperty("open") || i11 !== null, N5 = t15.hasOwnProperty("onClose");
  if (!U5 && !N5)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!U5)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!N5)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l10 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l10}`);
  let u8 = n6 ? 0 : 1, [E6, Z6] = (0, import_react29.useReducer)(_e, { titleId: null, descriptionId: null, panelRef: (0, import_react29.createRef)() }), A7 = o4(() => l10(false)), Y7 = o4((r10) => Z6({ type: 0, id: r10 })), k2 = l2() ? c13 ? false : u8 === 0 : false, x6 = P5 > 1, $7 = (0, import_react29.useContext)(M4) !== null, ee4 = x6 ? "parent" : "leaf", W = i11 !== null ? (i11 & d4.Closing) === d4.Closing : false, te4 = (() => $7 || W ? false : k2)(), oe4 = (0, import_react29.useCallback)(() => {
    var r10, f13;
    return (f13 = Array.from((r10 = p9 == null ? void 0 : p9.querySelectorAll("body > *")) != null ? r10 : []).find((a11) => a11.id === "headlessui-portal-root" ? false : a11.contains(y7.current) && a11 instanceof HTMLElement)) != null ? f13 : null;
  }, [y7]);
  h6(oe4, te4);
  let re6 = (() => x6 ? true : k2)(), ne6 = (0, import_react29.useCallback)(() => {
    var r10, f13;
    return (f13 = Array.from((r10 = p9 == null ? void 0 : p9.querySelectorAll("[data-headlessui-portal]")) != null ? r10 : []).find((a11) => a11.contains(y7.current) && a11 instanceof HTMLElement)) != null ? f13 : null;
  }, [y7]);
  h6(ne6, re6);
  let H8 = o4(() => {
    var f13, a11;
    return [...Array.from((f13 = p9 == null ? void 0 : p9.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? f13 : []).filter((T7) => !(T7 === document.body || T7 === document.head || !(T7 instanceof HTMLElement) || T7.contains(y7.current) || E6.panelRef.current && T7.contains(E6.panelRef.current))), (a11 = E6.panelRef.current) != null ? a11 : m9.current];
  }), le4 = (() => !(!k2 || x6))();
  L(() => H8(), A7, le4);
  let ae3 = (() => !(x6 || u8 !== 0))();
  E3(p9 == null ? void 0 : p9.defaultView, "keydown", (r10) => {
    ae3 && (r10.defaultPrevented || r10.key === o8.Escape && (r10.preventDefault(), r10.stopPropagation(), A7()));
  });
  let ie4 = (() => !(W || u8 !== 0 || $7))();
  xe2(p9, ie4, H8), (0, import_react29.useEffect)(() => {
    if (u8 !== 0 || !m9.current)
      return;
    let r10 = new ResizeObserver((f13) => {
      for (let a11 of f13) {
        let T7 = a11.target.getBoundingClientRect();
        T7.x === 0 && T7.y === 0 && T7.width === 0 && T7.height === 0 && A7();
      }
    });
    return r10.observe(m9.current), () => r10.disconnect();
  }, [u8, m9, A7]);
  let [se5, pe4] = M2(), de3 = (0, import_react29.useMemo)(() => [{ dialogState: u8, close: A7, setTitleId: Y7 }, E6], [u8, E6, A7, Y7]), J4 = (0, import_react29.useMemo)(() => ({ open: u8 === 0 }), [u8]), ue6 = { ref: Q6, id: s17, role: "dialog", "aria-modal": u8 === 0 ? true : void 0, "aria-labelledby": E6.titleId, "aria-describedby": se5 };
  return import_react29.default.createElement(M3, { type: "Dialog", enabled: u8 === 0, element: m9, onUpdate: o4((r10, f13) => {
    f13 === "Dialog" && u(r10, { [s13.Add]: () => F9((a11) => a11 + 1), [s13.Remove]: () => F9((a11) => a11 - 1) });
  }) }, import_react29.default.createElement(P2, { force: true }, import_react29.default.createElement(te, null, import_react29.default.createElement(M4.Provider, { value: de3 }, import_react29.default.createElement(te.Group, { target: m9 }, import_react29.default.createElement(P2, { force: false }, import_react29.default.createElement(pe4, { slot: J4, name: "Dialog.Description" }, import_react29.default.createElement(Re, { initialFocus: d15, containers: H8, features: k2 ? u(ee4, { parent: Re.features.RestoreFocus, leaf: Re.features.All & ~Re.features.FocusLock }) : Re.features.None }, X({ ourProps: ue6, theirProps: D8, slot: J4, defaultTag: Me, features: He2, visible: u8 === 0, name: "Dialog" })))))))), import_react29.default.createElement(c4, { features: p3.Hidden, ref: y7 }));
}
var we2 = "div";
function Be(t15, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-overlay-${o11}`, ...n6 } = t15, [{ dialogState: l10, close: d15 }] = S7("Dialog.Overlay"), c13 = y2(e6), D8 = o4((i11) => {
    if (i11.target === i11.currentTarget) {
      if (r3(i11.currentTarget))
        return i11.preventDefault();
      i11.preventDefault(), i11.stopPropagation(), d15();
    }
  }), P5 = (0, import_react29.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return X({ ourProps: { ref: c13, id: s17, "aria-hidden": true, onClick: D8 }, theirProps: n6, slot: P5, defaultTag: we2, name: "Dialog.Overlay" });
}
var Ge2 = "div";
function Ue2(t15, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-backdrop-${o11}`, ...n6 } = t15, [{ dialogState: l10 }, d15] = S7("Dialog.Backdrop"), c13 = y2(e6);
  (0, import_react29.useEffect)(() => {
    if (d15.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [d15.panelRef]);
  let D8 = (0, import_react29.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return import_react29.default.createElement(P2, { force: true }, import_react29.default.createElement(te, null, X({ ourProps: { ref: c13, id: s17, "aria-hidden": true }, theirProps: n6, slot: D8, defaultTag: Ge2, name: "Dialog.Backdrop" })));
}
var Ne2 = "div";
function Ye2(t15, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-panel-${o11}`, ...n6 } = t15, [{ dialogState: l10 }, d15] = S7("Dialog.Panel"), c13 = y2(e6, d15.panelRef), D8 = (0, import_react29.useMemo)(() => ({ open: l10 === 0 }), [l10]), P5 = o4((i11) => {
    i11.stopPropagation();
  });
  return X({ ourProps: { ref: c13, id: s17, onClick: P5 }, theirProps: n6, slot: D8, defaultTag: Ne2, name: "Dialog.Panel" });
}
var $e2 = "h2";
function We2(t15, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-title-${o11}`, ...n6 } = t15, [{ dialogState: l10, setTitleId: d15 }] = S7("Dialog.Title"), c13 = y2(e6);
  (0, import_react29.useEffect)(() => (d15(s17), () => d15(null)), [s17, d15]);
  let D8 = (0, import_react29.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return X({ ourProps: { ref: c13, id: s17 }, theirProps: n6, slot: D8, defaultTag: $e2, name: "Dialog.Title" });
}
var Je2 = D2(Ie);
var Xe2 = D2(Ue2);
var je2 = D2(Ye2);
var Ke2 = D2(Be);
var Ve = D2(We2);
var St = Object.assign(Je2, { Backdrop: Xe2, Panel: je2, Overlay: Ke2, Title: Ve, Description: b2 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react30 = __toESM(require_react(), 1);
var t14;
var a9 = (t14 = import_react30.default.startTransition) != null ? t14 : function(i11) {
  i11();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(q || {});
var z3 = ((t15) => (t15[t15.ToggleDisclosure = 0] = "ToggleDisclosure", t15[t15.CloseDisclosure = 1] = "CloseDisclosure", t15[t15.SetButtonId = 2] = "SetButtonId", t15[t15.SetPanelId = 3] = "SetPanelId", t15[t15.LinkPanel = 4] = "LinkPanel", t15[t15.UnlinkPanel = 5] = "UnlinkPanel", t15))(z3 || {});
var Q2 = { [0]: (e6) => ({ ...e6, disclosureState: u(e6.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e6) => e6.disclosureState === 1 ? e6 : { ...e6, disclosureState: 1 }, [4](e6) {
  return e6.linkedPanel === true ? e6 : { ...e6, linkedPanel: true };
}, [5](e6) {
  return e6.linkedPanel === false ? e6 : { ...e6, linkedPanel: false };
}, [2](e6, n6) {
  return e6.buttonId === n6.buttonId ? e6 : { ...e6, buttonId: n6.buttonId };
}, [3](e6, n6) {
  return e6.panelId === n6.panelId ? e6 : { ...e6, panelId: n6.panelId };
} };
var k = (0, import_react31.createContext)(null);
k.displayName = "DisclosureContext";
function M5(e6) {
  let n6 = (0, import_react31.useContext)(k);
  if (n6 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, M5), o11;
  }
  return n6;
}
var v = (0, import_react31.createContext)(null);
v.displayName = "DisclosureAPIContext";
function w3(e6) {
  let n6 = (0, import_react31.useContext)(v);
  if (n6 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, w3), o11;
  }
  return n6;
}
var H4 = (0, import_react31.createContext)(null);
H4.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react31.useContext)(H4);
}
function Y2(e6, n6) {
  return u(n6.type, Q2, e6, n6);
}
var Z2 = import_react31.Fragment;
function ee(e6, n6) {
  let { defaultOpen: o11 = false, ...u8 } = e6, T7 = (0, import_react31.useRef)(null), l10 = y2(n6, T2((a11) => {
    T7.current = a11;
  }, e6.as === void 0 || e6.as === import_react31.Fragment)), t15 = (0, import_react31.useRef)(null), f13 = (0, import_react31.useRef)(null), s17 = (0, import_react31.useReducer)(Y2, { disclosureState: o11 ? 0 : 1, linkedPanel: false, buttonRef: f13, panelRef: t15, buttonId: null, panelId: null }), [{ disclosureState: i11, buttonId: c13 }, D8] = s17, d15 = o4((a11) => {
    D8({ type: 1 });
    let r10 = e(T7);
    if (!r10 || !c13)
      return;
    let p9 = (() => a11 ? a11 instanceof HTMLElement ? a11 : a11.current instanceof HTMLElement ? a11.current : r10.getElementById(c13) : r10.getElementById(c13))();
    p9 == null || p9.focus();
  }), P5 = (0, import_react31.useMemo)(() => ({ close: d15 }), [d15]), b4 = (0, import_react31.useMemo)(() => ({ open: i11 === 0, close: d15 }), [i11, d15]), y7 = { ref: l10 };
  return import_react31.default.createElement(k.Provider, { value: s17 }, import_react31.default.createElement(v.Provider, { value: P5 }, import_react31.default.createElement(c5, { value: u(i11, { [0]: d4.Open, [1]: d4.Closed }) }, X({ ourProps: y7, theirProps: u8, slot: b4, defaultTag: Z2, name: "Disclosure" }))));
}
var te2 = "button";
function ne(e6, n6) {
  let o11 = I(), { id: u8 = `headlessui-disclosure-button-${o11}`, ...T7 } = e6, [l10, t15] = M5("Disclosure.Button"), f13 = V(), s17 = f13 === null ? false : f13 === l10.panelId, i11 = (0, import_react31.useRef)(null), c13 = y2(i11, n6, s17 ? null : l10.buttonRef);
  (0, import_react31.useEffect)(() => {
    if (!s17)
      return t15({ type: 2, buttonId: u8 }), () => {
        t15({ type: 2, buttonId: null });
      };
  }, [u8, t15, s17]);
  let D8 = o4((r10) => {
    var p9;
    if (s17) {
      if (l10.disclosureState === 1)
        return;
      switch (r10.key) {
        case o8.Space:
        case o8.Enter:
          r10.preventDefault(), r10.stopPropagation(), t15({ type: 0 }), (p9 = l10.buttonRef.current) == null || p9.focus();
          break;
      }
    } else
      switch (r10.key) {
        case o8.Space:
        case o8.Enter:
          r10.preventDefault(), r10.stopPropagation(), t15({ type: 0 });
          break;
      }
  }), d15 = o4((r10) => {
    switch (r10.key) {
      case o8.Space:
        r10.preventDefault();
        break;
    }
  }), P5 = o4((r10) => {
    var p9;
    r3(r10.currentTarget) || e6.disabled || (s17 ? (t15({ type: 0 }), (p9 = l10.buttonRef.current) == null || p9.focus()) : t15({ type: 0 }));
  }), b4 = (0, import_react31.useMemo)(() => ({ open: l10.disclosureState === 0 }), [l10]), y7 = s6(e6, i11), a11 = s17 ? { ref: c13, type: y7, onKeyDown: D8, onClick: P5 } : { ref: c13, id: u8, type: y7, "aria-expanded": e6.disabled ? void 0 : l10.disclosureState === 0, "aria-controls": l10.linkedPanel ? l10.panelId : void 0, onKeyDown: D8, onKeyUp: d15, onClick: P5 };
  return X({ ourProps: a11, theirProps: T7, slot: b4, defaultTag: te2, name: "Disclosure.Button" });
}
var le2 = "div";
var oe = S2.RenderStrategy | S2.Static;
function re2(e6, n6) {
  let o11 = I(), { id: u8 = `headlessui-disclosure-panel-${o11}`, ...T7 } = e6, [l10, t15] = M5("Disclosure.Panel"), { close: f13 } = w3("Disclosure.Panel"), s17 = y2(n6, l10.panelRef, (P5) => {
    a9(() => t15({ type: P5 ? 4 : 5 }));
  });
  (0, import_react31.useEffect)(() => (t15({ type: 3, panelId: u8 }), () => {
    t15({ type: 3, panelId: null });
  }), [u8, t15]);
  let i11 = C(), c13 = (() => i11 !== null ? (i11 & d4.Open) === d4.Open : l10.disclosureState === 0)(), D8 = (0, import_react31.useMemo)(() => ({ open: l10.disclosureState === 0, close: f13 }), [l10, f13]), d15 = { ref: s17, id: u8 };
  return import_react31.default.createElement(H4.Provider, { value: l10.panelId }, X({ ourProps: d15, theirProps: T7, slot: D8, defaultTag: le2, features: oe, visible: c13, name: "Disclosure.Panel" }));
}
var se2 = D2(ee);
var ue2 = D2(ne);
var ie = D2(re2);
var ve = Object.assign(se2, { Button: ue2, Panel: ie });

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react32 = __toESM(require_react(), 1);
var Ue3 = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(Ue3 || {});
var Be2 = ((o11) => (o11[o11.Single = 0] = "Single", o11[o11.Multi = 1] = "Multi", o11))(Be2 || {});
var He3 = ((o11) => (o11[o11.Pointer = 0] = "Pointer", o11[o11.Other = 1] = "Other", o11))(He3 || {});
var Ge3 = ((i11) => (i11[i11.OpenListbox = 0] = "OpenListbox", i11[i11.CloseListbox = 1] = "CloseListbox", i11[i11.GoToOption = 2] = "GoToOption", i11[i11.Search = 3] = "Search", i11[i11.ClearSearch = 4] = "ClearSearch", i11[i11.RegisterOption = 5] = "RegisterOption", i11[i11.UnregisterOption = 6] = "UnregisterOption", i11[i11.RegisterLabel = 7] = "RegisterLabel", i11))(Ge3 || {});
function X4(e6, a11 = (o11) => o11) {
  let o11 = e6.activeOptionIndex !== null ? e6.options[e6.activeOptionIndex] : null, r10 = I2(a11(e6.options.slice()), (t15) => t15.dataRef.current.domRef.current), l10 = o11 ? r10.indexOf(o11) : null;
  return l10 === -1 && (l10 = null), { options: r10, activeOptionIndex: l10 };
}
var Ne3 = { [1](e6) {
  return e6.dataRef.current.disabled || e6.listboxState === 1 ? e6 : { ...e6, activeOptionIndex: null, listboxState: 1 };
}, [0](e6) {
  if (e6.dataRef.current.disabled || e6.listboxState === 0)
    return e6;
  let a11 = e6.activeOptionIndex, { isSelected: o11 } = e6.dataRef.current, r10 = e6.options.findIndex((l10) => o11(l10.dataRef.current.value));
  return r10 !== -1 && (a11 = r10), { ...e6, listboxState: 0, activeOptionIndex: a11 };
}, [2](e6, a11) {
  var l10;
  if (e6.dataRef.current.disabled || e6.listboxState === 1)
    return e6;
  let o11 = X4(e6), r10 = x(a11, { resolveItems: () => o11.options, resolveActiveIndex: () => o11.activeOptionIndex, resolveId: (t15) => t15.id, resolveDisabled: (t15) => t15.dataRef.current.disabled });
  return { ...e6, ...o11, searchQuery: "", activeOptionIndex: r10, activationTrigger: (l10 = a11.trigger) != null ? l10 : 1 };
}, [3]: (e6, a11) => {
  if (e6.dataRef.current.disabled || e6.listboxState === 1)
    return e6;
  let r10 = e6.searchQuery !== "" ? 0 : 1, l10 = e6.searchQuery + a11.value.toLowerCase(), p9 = (e6.activeOptionIndex !== null ? e6.options.slice(e6.activeOptionIndex + r10).concat(e6.options.slice(0, e6.activeOptionIndex + r10)) : e6.options).find((i11) => {
    var b4;
    return !i11.dataRef.current.disabled && ((b4 = i11.dataRef.current.textValue) == null ? void 0 : b4.startsWith(l10));
  }), u8 = p9 ? e6.options.indexOf(p9) : -1;
  return u8 === -1 || u8 === e6.activeOptionIndex ? { ...e6, searchQuery: l10 } : { ...e6, searchQuery: l10, activeOptionIndex: u8, activationTrigger: 1 };
}, [4](e6) {
  return e6.dataRef.current.disabled || e6.listboxState === 1 || e6.searchQuery === "" ? e6 : { ...e6, searchQuery: "" };
}, [5]: (e6, a11) => {
  let o11 = { id: a11.id, dataRef: a11.dataRef }, r10 = X4(e6, (l10) => [...l10, o11]);
  return e6.activeOptionIndex === null && e6.dataRef.current.isSelected(a11.dataRef.current.value) && (r10.activeOptionIndex = r10.options.indexOf(o11)), { ...e6, ...r10 };
}, [6]: (e6, a11) => {
  let o11 = X4(e6, (r10) => {
    let l10 = r10.findIndex((t15) => t15.id === a11.id);
    return l10 !== -1 && r10.splice(l10, 1), r10;
  });
  return { ...e6, ...o11, activationTrigger: 1 };
}, [7]: (e6, a11) => ({ ...e6, labelId: a11.id }) };
var $3 = (0, import_react32.createContext)(null);
$3.displayName = "ListboxActionsContext";
function U3(e6) {
  let a11 = (0, import_react32.useContext)($3);
  if (a11 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, U3), o11;
  }
  return a11;
}
var z4 = (0, import_react32.createContext)(null);
z4.displayName = "ListboxDataContext";
function B(e6) {
  let a11 = (0, import_react32.useContext)(z4);
  if (a11 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, B), o11;
  }
  return a11;
}
function je3(e6, a11) {
  return u(a11.type, Ne3, e6, a11);
}
var Ve2 = import_react32.Fragment;
function Ke3(e6, a11) {
  let { value: o11, defaultValue: r10, form: l10, name: t15, onChange: p9, by: u8 = (s17, d15) => s17 === d15, disabled: i11 = false, horizontal: b4 = false, multiple: R3 = false, ...m9 } = e6;
  const P5 = b4 ? "horizontal" : "vertical";
  let E6 = y2(a11), [L5 = R3 ? [] : void 0, v4] = T4(o11, p9, r10), [c13, n6] = (0, import_react32.useReducer)(je3, { dataRef: (0, import_react32.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), x6 = (0, import_react32.useRef)({ static: false, hold: false }), h9 = (0, import_react32.useRef)(null), Q6 = (0, import_react32.useRef)(null), J4 = (0, import_react32.useRef)(null), y7 = o4(typeof u8 == "string" ? (s17, d15) => {
    let O4 = u8;
    return (s17 == null ? void 0 : s17[O4]) === (d15 == null ? void 0 : d15[O4]);
  } : u8), S10 = (0, import_react32.useCallback)((s17) => u(T7.mode, { [1]: () => L5.some((d15) => y7(d15, s17)), [0]: () => y7(L5, s17) }), [L5]), T7 = (0, import_react32.useMemo)(() => ({ ...c13, value: L5, disabled: i11, mode: R3 ? 1 : 0, orientation: P5, compare: y7, isSelected: S10, optionsPropsRef: x6, labelRef: h9, buttonRef: Q6, optionsRef: J4 }), [L5, i11, R3, c13]);
  l(() => {
    c13.dataRef.current = T7;
  }, [T7]), L([T7.buttonRef, T7.optionsRef], (s17, d15) => {
    var O4;
    n6({ type: 1 }), h(d15, T.Loose) || (s17.preventDefault(), (O4 = T7.buttonRef.current) == null || O4.focus());
  }, T7.listboxState === 0);
  let ne6 = (0, import_react32.useMemo)(() => ({ open: T7.listboxState === 0, disabled: i11, value: L5 }), [T7, i11, L5]), ie4 = o4((s17) => {
    let d15 = T7.options.find((O4) => O4.id === s17);
    d15 && F9(d15.dataRef.current.value);
  }), re6 = o4(() => {
    if (T7.activeOptionIndex !== null) {
      let { dataRef: s17, id: d15 } = T7.options[T7.activeOptionIndex];
      F9(s17.current.value), n6({ type: 2, focus: a2.Specific, id: d15 });
    }
  }), ae3 = o4(() => n6({ type: 0 })), le4 = o4(() => n6({ type: 1 })), se5 = o4((s17, d15, O4) => s17 === a2.Specific ? n6({ type: 2, focus: a2.Specific, id: d15, trigger: O4 }) : n6({ type: 2, focus: s17, trigger: O4 })), pe4 = o4((s17, d15) => (n6({ type: 5, id: s17, dataRef: d15 }), () => n6({ type: 6, id: s17 }))), ue6 = o4((s17) => (n6({ type: 7, id: s17 }), () => n6({ type: 7, id: null }))), F9 = o4((s17) => u(T7.mode, { [0]() {
    return v4 == null ? void 0 : v4(s17);
  }, [1]() {
    let d15 = T7.value.slice(), O4 = d15.findIndex((M9) => y7(M9, s17));
    return O4 === -1 ? d15.push(s17) : d15.splice(O4, 1), v4 == null ? void 0 : v4(d15);
  } })), de3 = o4((s17) => n6({ type: 3, value: s17 })), ce4 = o4(() => n6({ type: 4 })), fe4 = (0, import_react32.useMemo)(() => ({ onChange: F9, registerOption: pe4, registerLabel: ue6, goToOption: se5, closeListbox: le4, openListbox: ae3, selectActiveOption: re6, selectOption: ie4, search: de3, clearSearch: ce4 }), []), Te4 = { ref: E6 }, H8 = (0, import_react32.useRef)(null), be4 = p();
  return (0, import_react32.useEffect)(() => {
    H8.current && r10 !== void 0 && be4.addEventListener(H8.current, "reset", () => {
      F9(r10);
    });
  }, [H8, F9]), import_react32.default.createElement($3.Provider, { value: fe4 }, import_react32.default.createElement(z4.Provider, { value: T7 }, import_react32.default.createElement(c5, { value: u(T7.listboxState, { [0]: d4.Open, [1]: d4.Closed }) }, t15 != null && L5 != null && e3({ [t15]: L5 }).map(([s17, d15], O4) => import_react32.default.createElement(c4, { features: p3.Hidden, ref: O4 === 0 ? (M9) => {
    var q6;
    H8.current = (q6 = M9 == null ? void 0 : M9.closest("form")) != null ? q6 : null;
  } : void 0, ...R({ key: s17, as: "input", type: "hidden", hidden: true, readOnly: true, form: l10, name: s17, value: d15 }) })), X({ ourProps: Te4, theirProps: m9, slot: ne6, defaultTag: Ve2, name: "Listbox" }))));
}
var Qe2 = "button";
function We3(e6, a11) {
  var v4;
  let o11 = I(), { id: r10 = `headlessui-listbox-button-${o11}`, ...l10 } = e6, t15 = B("Listbox.Button"), p9 = U3("Listbox.Button"), u8 = y2(t15.buttonRef, a11), i11 = p(), b4 = o4((c13) => {
    switch (c13.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        c13.preventDefault(), p9.openListbox(), i11.nextFrame(() => {
          t15.value || p9.goToOption(a2.First);
        });
        break;
      case o8.ArrowUp:
        c13.preventDefault(), p9.openListbox(), i11.nextFrame(() => {
          t15.value || p9.goToOption(a2.Last);
        });
        break;
    }
  }), R3 = o4((c13) => {
    switch (c13.key) {
      case o8.Space:
        c13.preventDefault();
        break;
    }
  }), m9 = o4((c13) => {
    if (r3(c13.currentTarget))
      return c13.preventDefault();
    t15.listboxState === 0 ? (p9.closeListbox(), i11.nextFrame(() => {
      var n6;
      return (n6 = t15.buttonRef.current) == null ? void 0 : n6.focus({ preventScroll: true });
    })) : (c13.preventDefault(), p9.openListbox());
  }), P5 = i2(() => {
    if (t15.labelId)
      return [t15.labelId, r10].join(" ");
  }, [t15.labelId, r10]), E6 = (0, import_react32.useMemo)(() => ({ open: t15.listboxState === 0, disabled: t15.disabled, value: t15.value }), [t15]), L5 = { ref: u8, id: r10, type: s6(e6, t15.buttonRef), "aria-haspopup": "listbox", "aria-controls": (v4 = t15.optionsRef.current) == null ? void 0 : v4.id, "aria-expanded": t15.disabled ? void 0 : t15.listboxState === 0, "aria-labelledby": P5, disabled: t15.disabled, onKeyDown: b4, onKeyUp: R3, onClick: m9 };
  return X({ ourProps: L5, theirProps: l10, slot: E6, defaultTag: Qe2, name: "Listbox.Button" });
}
var Xe3 = "label";
function $e3(e6, a11) {
  let o11 = I(), { id: r10 = `headlessui-listbox-label-${o11}`, ...l10 } = e6, t15 = B("Listbox.Label"), p9 = U3("Listbox.Label"), u8 = y2(t15.labelRef, a11);
  l(() => p9.registerLabel(r10), [r10]);
  let i11 = o4(() => {
    var m9;
    return (m9 = t15.buttonRef.current) == null ? void 0 : m9.focus({ preventScroll: true });
  }), b4 = (0, import_react32.useMemo)(() => ({ open: t15.listboxState === 0, disabled: t15.disabled }), [t15]);
  return X({ ourProps: { ref: u8, id: r10, onClick: i11 }, theirProps: l10, slot: b4, defaultTag: Xe3, name: "Listbox.Label" });
}
var ze2 = "ul";
var Je3 = S2.RenderStrategy | S2.Static;
function qe2(e6, a11) {
  var c13;
  let o11 = I(), { id: r10 = `headlessui-listbox-options-${o11}`, ...l10 } = e6, t15 = B("Listbox.Options"), p9 = U3("Listbox.Options"), u8 = y2(t15.optionsRef, a11), i11 = p(), b4 = p(), R3 = C(), m9 = (() => R3 !== null ? (R3 & d4.Open) === d4.Open : t15.listboxState === 0)();
  (0, import_react32.useEffect)(() => {
    var x6;
    let n6 = t15.optionsRef.current;
    n6 && t15.listboxState === 0 && n6 !== ((x6 = e(n6)) == null ? void 0 : x6.activeElement) && n6.focus({ preventScroll: true });
  }, [t15.listboxState, t15.optionsRef]);
  let P5 = o4((n6) => {
    switch (b4.dispose(), n6.key) {
      case o8.Space:
        if (t15.searchQuery !== "")
          return n6.preventDefault(), n6.stopPropagation(), p9.search(n6.key);
      case o8.Enter:
        if (n6.preventDefault(), n6.stopPropagation(), t15.activeOptionIndex !== null) {
          let { dataRef: x6 } = t15.options[t15.activeOptionIndex];
          p9.onChange(x6.current.value);
        }
        t15.mode === 0 && (p9.closeListbox(), o2().nextFrame(() => {
          var x6;
          return (x6 = t15.buttonRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        }));
        break;
      case u(t15.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return n6.preventDefault(), n6.stopPropagation(), p9.goToOption(a2.Next);
      case u(t15.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return n6.preventDefault(), n6.stopPropagation(), p9.goToOption(a2.Previous);
      case o8.Home:
      case o8.PageUp:
        return n6.preventDefault(), n6.stopPropagation(), p9.goToOption(a2.First);
      case o8.End:
      case o8.PageDown:
        return n6.preventDefault(), n6.stopPropagation(), p9.goToOption(a2.Last);
      case o8.Escape:
        return n6.preventDefault(), n6.stopPropagation(), p9.closeListbox(), i11.nextFrame(() => {
          var x6;
          return (x6 = t15.buttonRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        });
      case o8.Tab:
        n6.preventDefault(), n6.stopPropagation();
        break;
      default:
        n6.key.length === 1 && (p9.search(n6.key), b4.setTimeout(() => p9.clearSearch(), 350));
        break;
    }
  }), E6 = i2(() => {
    var n6, x6, h9;
    return (h9 = (n6 = t15.labelRef.current) == null ? void 0 : n6.id) != null ? h9 : (x6 = t15.buttonRef.current) == null ? void 0 : x6.id;
  }, [t15.labelRef.current, t15.buttonRef.current]), L5 = (0, import_react32.useMemo)(() => ({ open: t15.listboxState === 0 }), [t15]), v4 = { "aria-activedescendant": t15.activeOptionIndex === null || (c13 = t15.options[t15.activeOptionIndex]) == null ? void 0 : c13.id, "aria-multiselectable": t15.mode === 1 ? true : void 0, "aria-labelledby": E6, "aria-orientation": t15.orientation, id: r10, onKeyDown: P5, role: "listbox", tabIndex: 0, ref: u8 };
  return X({ ourProps: v4, theirProps: l10, slot: L5, defaultTag: ze2, features: Je3, visible: m9, name: "Listbox.Options" });
}
var Ye3 = "li";
function Ze2(e6, a11) {
  let o11 = I(), { id: r10 = `headlessui-listbox-option-${o11}`, disabled: l10 = false, value: t15, ...p9 } = e6, u8 = B("Listbox.Option"), i11 = U3("Listbox.Option"), b4 = u8.activeOptionIndex !== null ? u8.options[u8.activeOptionIndex].id === r10 : false, R3 = u8.isSelected(t15), m9 = (0, import_react32.useRef)(null), P5 = s2({ disabled: l10, value: t15, domRef: m9, get textValue() {
    var y7, S10;
    return (S10 = (y7 = m9.current) == null ? void 0 : y7.textContent) == null ? void 0 : S10.toLowerCase();
  } }), E6 = y2(a11, m9);
  l(() => {
    if (u8.listboxState !== 0 || !b4 || u8.activationTrigger === 0)
      return;
    let y7 = o2();
    return y7.requestAnimationFrame(() => {
      var S10, T7;
      (T7 = (S10 = m9.current) == null ? void 0 : S10.scrollIntoView) == null || T7.call(S10, { block: "nearest" });
    }), y7.dispose;
  }, [m9, b4, u8.listboxState, u8.activationTrigger, u8.activeOptionIndex]), l(() => i11.registerOption(r10, P5), [P5, r10]);
  let L5 = o4((y7) => {
    if (l10)
      return y7.preventDefault();
    i11.onChange(t15), u8.mode === 0 && (i11.closeListbox(), o2().nextFrame(() => {
      var S10;
      return (S10 = u8.buttonRef.current) == null ? void 0 : S10.focus({ preventScroll: true });
    }));
  }), v4 = o4(() => {
    if (l10)
      return i11.goToOption(a2.Nothing);
    i11.goToOption(a2.Specific, r10);
  }), c13 = u3(), n6 = o4((y7) => c13.update(y7)), x6 = o4((y7) => {
    c13.wasMoved(y7) && (l10 || b4 || i11.goToOption(a2.Specific, r10, 0));
  }), h9 = o4((y7) => {
    c13.wasMoved(y7) && (l10 || b4 && i11.goToOption(a2.Nothing));
  }), Q6 = (0, import_react32.useMemo)(() => ({ active: b4, selected: R3, disabled: l10 }), [b4, R3, l10]);
  return X({ ourProps: { id: r10, ref: E6, role: "option", tabIndex: l10 === true ? void 0 : -1, "aria-disabled": l10 === true ? true : void 0, "aria-selected": R3, disabled: void 0, onClick: L5, onFocus: v4, onPointerEnter: n6, onMouseEnter: n6, onPointerMove: x6, onMouseMove: x6, onPointerLeave: h9, onMouseLeave: h9 }, theirProps: p9, slot: Q6, defaultTag: Ye3, name: "Listbox.Option" });
}
var et = D2(Ke3);
var tt = D2(We3);
var ot = D2($e3);
var nt = D2(qe2);
var it = D2(Ze2);
var Ht = Object.assign(et, { Button: tt, Label: ot, Options: nt, Option: it });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react33 = __toESM(require_react(), 1);
var pe2 = ((r10) => (r10[r10.Open = 0] = "Open", r10[r10.Closed = 1] = "Closed", r10))(pe2 || {});
var ce2 = ((r10) => (r10[r10.Pointer = 0] = "Pointer", r10[r10.Other = 1] = "Other", r10))(ce2 || {});
var me = ((a11) => (a11[a11.OpenMenu = 0] = "OpenMenu", a11[a11.CloseMenu = 1] = "CloseMenu", a11[a11.GoToItem = 2] = "GoToItem", a11[a11.Search = 3] = "Search", a11[a11.ClearSearch = 4] = "ClearSearch", a11[a11.RegisterItem = 5] = "RegisterItem", a11[a11.UnregisterItem = 6] = "UnregisterItem", a11))(me || {});
function w4(e6, u8 = (r10) => r10) {
  let r10 = e6.activeItemIndex !== null ? e6.items[e6.activeItemIndex] : null, i11 = I2(u8(e6.items.slice()), (t15) => t15.dataRef.current.domRef.current), s17 = r10 ? i11.indexOf(r10) : null;
  return s17 === -1 && (s17 = null), { items: i11, activeItemIndex: s17 };
}
var de = { [1](e6) {
  return e6.menuState === 1 ? e6 : { ...e6, activeItemIndex: null, menuState: 1 };
}, [0](e6) {
  return e6.menuState === 0 ? e6 : { ...e6, menuState: 0 };
}, [2]: (e6, u8) => {
  var s17;
  let r10 = w4(e6), i11 = x(u8, { resolveItems: () => r10.items, resolveActiveIndex: () => r10.activeItemIndex, resolveId: (t15) => t15.id, resolveDisabled: (t15) => t15.dataRef.current.disabled });
  return { ...e6, ...r10, searchQuery: "", activeItemIndex: i11, activationTrigger: (s17 = u8.trigger) != null ? s17 : 1 };
}, [3]: (e6, u8) => {
  let i11 = e6.searchQuery !== "" ? 0 : 1, s17 = e6.searchQuery + u8.value.toLowerCase(), o11 = (e6.activeItemIndex !== null ? e6.items.slice(e6.activeItemIndex + i11).concat(e6.items.slice(0, e6.activeItemIndex + i11)) : e6.items).find((l10) => {
    var m9;
    return ((m9 = l10.dataRef.current.textValue) == null ? void 0 : m9.startsWith(s17)) && !l10.dataRef.current.disabled;
  }), a11 = o11 ? e6.items.indexOf(o11) : -1;
  return a11 === -1 || a11 === e6.activeItemIndex ? { ...e6, searchQuery: s17 } : { ...e6, searchQuery: s17, activeItemIndex: a11, activationTrigger: 1 };
}, [4](e6) {
  return e6.searchQuery === "" ? e6 : { ...e6, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e6, u8) => {
  let r10 = w4(e6, (i11) => [...i11, { id: u8.id, dataRef: u8.dataRef }]);
  return { ...e6, ...r10 };
}, [6]: (e6, u8) => {
  let r10 = w4(e6, (i11) => {
    let s17 = i11.findIndex((t15) => t15.id === u8.id);
    return s17 !== -1 && i11.splice(s17, 1), i11;
  });
  return { ...e6, ...r10, activationTrigger: 1 };
} };
var U4 = (0, import_react33.createContext)(null);
U4.displayName = "MenuContext";
function F5(e6) {
  let u8 = (0, import_react33.useContext)(U4);
  if (u8 === null) {
    let r10 = new Error(`<${e6} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r10, F5), r10;
  }
  return u8;
}
function fe2(e6, u8) {
  return u(u8.type, de, e6, u8);
}
var Te2 = import_react33.Fragment;
function ye2(e6, u8) {
  let r10 = (0, import_react33.useReducer)(fe2, { menuState: 1, buttonRef: (0, import_react33.createRef)(), itemsRef: (0, import_react33.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i11, itemsRef: s17, buttonRef: t15 }, o11] = r10, a11 = y2(u8);
  L([t15, s17], (g4, A7) => {
    var I8;
    o11({ type: 1 }), h(A7, T.Loose) || (g4.preventDefault(), (I8 = t15.current) == null || I8.focus());
  }, i11 === 0);
  let l10 = o4(() => {
    o11({ type: 1 });
  }), m9 = (0, import_react33.useMemo)(() => ({ open: i11 === 0, close: l10 }), [i11, l10]), M9 = e6, f13 = { ref: a11 };
  return import_react33.default.createElement(U4.Provider, { value: r10 }, import_react33.default.createElement(c5, { value: u(i11, { [0]: d4.Open, [1]: d4.Closed }) }, X({ ourProps: f13, theirProps: M9, slot: m9, defaultTag: Te2, name: "Menu" })));
}
var Ie2 = "button";
function Me2(e6, u8) {
  var I8;
  let r10 = I(), { id: i11 = `headlessui-menu-button-${r10}`, ...s17 } = e6, [t15, o11] = F5("Menu.Button"), a11 = y2(t15.buttonRef, u8), l10 = p(), m9 = o4((p9) => {
    switch (p9.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        p9.preventDefault(), p9.stopPropagation(), o11({ type: 0 }), l10.nextFrame(() => o11({ type: 2, focus: a2.First }));
        break;
      case o8.ArrowUp:
        p9.preventDefault(), p9.stopPropagation(), o11({ type: 0 }), l10.nextFrame(() => o11({ type: 2, focus: a2.Last }));
        break;
    }
  }), M9 = o4((p9) => {
    switch (p9.key) {
      case o8.Space:
        p9.preventDefault();
        break;
    }
  }), f13 = o4((p9) => {
    if (r3(p9.currentTarget))
      return p9.preventDefault();
    e6.disabled || (t15.menuState === 0 ? (o11({ type: 1 }), l10.nextFrame(() => {
      var R3;
      return (R3 = t15.buttonRef.current) == null ? void 0 : R3.focus({ preventScroll: true });
    })) : (p9.preventDefault(), o11({ type: 0 })));
  }), g4 = (0, import_react33.useMemo)(() => ({ open: t15.menuState === 0 }), [t15]), A7 = { ref: a11, id: i11, type: s6(e6, t15.buttonRef), "aria-haspopup": "menu", "aria-controls": (I8 = t15.itemsRef.current) == null ? void 0 : I8.id, "aria-expanded": e6.disabled ? void 0 : t15.menuState === 0, onKeyDown: m9, onKeyUp: M9, onClick: f13 };
  return X({ ourProps: A7, theirProps: s17, slot: g4, defaultTag: Ie2, name: "Menu.Button" });
}
var ge4 = "div";
var Re2 = S2.RenderStrategy | S2.Static;
function Ae(e6, u8) {
  var R3, E6;
  let r10 = I(), { id: i11 = `headlessui-menu-items-${r10}`, ...s17 } = e6, [t15, o11] = F5("Menu.Items"), a11 = y2(t15.itemsRef, u8), l10 = n4(t15.itemsRef), m9 = p(), M9 = C(), f13 = (() => M9 !== null ? (M9 & d4.Open) === d4.Open : t15.menuState === 0)();
  (0, import_react33.useEffect)(() => {
    let n6 = t15.itemsRef.current;
    n6 && t15.menuState === 0 && n6 !== (l10 == null ? void 0 : l10.activeElement) && n6.focus({ preventScroll: true });
  }, [t15.menuState, t15.itemsRef, l10]), F2({ container: t15.itemsRef.current, enabled: t15.menuState === 0, accept(n6) {
    return n6.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n6) {
    n6.setAttribute("role", "none");
  } });
  let g4 = o4((n6) => {
    var S10, O4;
    switch (m9.dispose(), n6.key) {
      case o8.Space:
        if (t15.searchQuery !== "")
          return n6.preventDefault(), n6.stopPropagation(), o11({ type: 3, value: n6.key });
      case o8.Enter:
        if (n6.preventDefault(), n6.stopPropagation(), o11({ type: 1 }), t15.activeItemIndex !== null) {
          let { dataRef: c13 } = t15.items[t15.activeItemIndex];
          (O4 = (S10 = c13.current) == null ? void 0 : S10.domRef.current) == null || O4.click();
        }
        D(t15.buttonRef.current);
        break;
      case o8.ArrowDown:
        return n6.preventDefault(), n6.stopPropagation(), o11({ type: 2, focus: a2.Next });
      case o8.ArrowUp:
        return n6.preventDefault(), n6.stopPropagation(), o11({ type: 2, focus: a2.Previous });
      case o8.Home:
      case o8.PageUp:
        return n6.preventDefault(), n6.stopPropagation(), o11({ type: 2, focus: a2.First });
      case o8.End:
      case o8.PageDown:
        return n6.preventDefault(), n6.stopPropagation(), o11({ type: 2, focus: a2.Last });
      case o8.Escape:
        n6.preventDefault(), n6.stopPropagation(), o11({ type: 1 }), o2().nextFrame(() => {
          var c13;
          return (c13 = t15.buttonRef.current) == null ? void 0 : c13.focus({ preventScroll: true });
        });
        break;
      case o8.Tab:
        n6.preventDefault(), n6.stopPropagation(), o11({ type: 1 }), o2().nextFrame(() => {
          _(t15.buttonRef.current, n6.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n6.key.length === 1 && (o11({ type: 3, value: n6.key }), m9.setTimeout(() => o11({ type: 4 }), 350));
        break;
    }
  }), A7 = o4((n6) => {
    switch (n6.key) {
      case o8.Space:
        n6.preventDefault();
        break;
    }
  }), I8 = (0, import_react33.useMemo)(() => ({ open: t15.menuState === 0 }), [t15]), p9 = { "aria-activedescendant": t15.activeItemIndex === null || (R3 = t15.items[t15.activeItemIndex]) == null ? void 0 : R3.id, "aria-labelledby": (E6 = t15.buttonRef.current) == null ? void 0 : E6.id, id: i11, onKeyDown: g4, onKeyUp: A7, role: "menu", tabIndex: 0, ref: a11 };
  return X({ ourProps: p9, theirProps: s17, slot: I8, defaultTag: ge4, features: Re2, visible: f13, name: "Menu.Items" });
}
var be = import_react33.Fragment;
function Ee(e6, u8) {
  let r10 = I(), { id: i11 = `headlessui-menu-item-${r10}`, disabled: s17 = false, ...t15 } = e6, [o11, a11] = F5("Menu.Item"), l10 = o11.activeItemIndex !== null ? o11.items[o11.activeItemIndex].id === i11 : false, m9 = (0, import_react33.useRef)(null), M9 = y2(u8, m9);
  l(() => {
    if (o11.menuState !== 0 || !l10 || o11.activationTrigger === 0)
      return;
    let c13 = o2();
    return c13.requestAnimationFrame(() => {
      var b4, _6;
      (_6 = (b4 = m9.current) == null ? void 0 : b4.scrollIntoView) == null || _6.call(b4, { block: "nearest" });
    }), c13.dispose;
  }, [m9, l10, o11.menuState, o11.activationTrigger, o11.activeItemIndex]);
  let f13 = (0, import_react33.useRef)({ disabled: s17, domRef: m9 });
  l(() => {
    f13.current.disabled = s17;
  }, [f13, s17]), l(() => {
    var c13, b4;
    f13.current.textValue = (b4 = (c13 = m9.current) == null ? void 0 : c13.textContent) == null ? void 0 : b4.toLowerCase();
  }, [f13, m9]), l(() => (a11({ type: 5, id: i11, dataRef: f13 }), () => a11({ type: 6, id: i11 })), [f13, i11]);
  let g4 = o4(() => {
    a11({ type: 1 });
  }), A7 = o4((c13) => {
    if (s17)
      return c13.preventDefault();
    a11({ type: 1 }), D(o11.buttonRef.current);
  }), I8 = o4(() => {
    if (s17)
      return a11({ type: 2, focus: a2.Nothing });
    a11({ type: 2, focus: a2.Specific, id: i11 });
  }), p9 = u3(), R3 = o4((c13) => p9.update(c13)), E6 = o4((c13) => {
    p9.wasMoved(c13) && (s17 || l10 || a11({ type: 2, focus: a2.Specific, id: i11, trigger: 0 }));
  }), n6 = o4((c13) => {
    p9.wasMoved(c13) && (s17 || l10 && a11({ type: 2, focus: a2.Nothing }));
  }), S10 = (0, import_react33.useMemo)(() => ({ active: l10, disabled: s17, close: g4 }), [l10, s17, g4]);
  return X({ ourProps: { id: i11, ref: M9, role: "menuitem", tabIndex: s17 === true ? void 0 : -1, "aria-disabled": s17 === true ? true : void 0, disabled: void 0, onClick: A7, onFocus: I8, onPointerEnter: R3, onMouseEnter: R3, onPointerMove: E6, onMouseMove: E6, onPointerLeave: n6, onMouseLeave: n6 }, theirProps: t15, slot: S10, defaultTag: be, name: "Menu.Item" });
}
var Se2 = D2(ye2);
var Pe = D2(Me2);
var ve2 = D2(Ae);
var xe4 = D2(Ee);
var ot2 = Object.assign(Se2, { Button: Pe, Items: ve2, Item: xe4 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react34 = __toESM(require_react(), 1);
var Fe2 = ((s17) => (s17[s17.Open = 0] = "Open", s17[s17.Closed = 1] = "Closed", s17))(Fe2 || {});
var Ie3 = ((t15) => (t15[t15.TogglePopover = 0] = "TogglePopover", t15[t15.ClosePopover = 1] = "ClosePopover", t15[t15.SetButton = 2] = "SetButton", t15[t15.SetButtonId = 3] = "SetButtonId", t15[t15.SetPanel = 4] = "SetPanel", t15[t15.SetPanelId = 5] = "SetPanelId", t15))(Ie3 || {});
var xe5 = { [0]: (o11) => ({ ...o11, popoverState: u(o11.popoverState, { [0]: 1, [1]: 0 }) }), [1](o11) {
  return o11.popoverState === 1 ? o11 : { ...o11, popoverState: 1 };
}, [2](o11, l10) {
  return o11.button === l10.button ? o11 : { ...o11, button: l10.button };
}, [3](o11, l10) {
  return o11.buttonId === l10.buttonId ? o11 : { ...o11, buttonId: l10.buttonId };
}, [4](o11, l10) {
  return o11.panel === l10.panel ? o11 : { ...o11, panel: l10.panel };
}, [5](o11, l10) {
  return o11.panelId === l10.panelId ? o11 : { ...o11, panelId: l10.panelId };
} };
var le3 = (0, import_react34.createContext)(null);
le3.displayName = "PopoverContext";
function Q3(o11) {
  let l10 = (0, import_react34.useContext)(le3);
  if (l10 === null) {
    let s17 = new Error(`<${o11} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s17, Q3), s17;
  }
  return l10;
}
var ae2 = (0, import_react34.createContext)(null);
ae2.displayName = "PopoverAPIContext";
function pe3(o11) {
  let l10 = (0, import_react34.useContext)(ae2);
  if (l10 === null) {
    let s17 = new Error(`<${o11} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s17, pe3), s17;
  }
  return l10;
}
var se3 = (0, import_react34.createContext)(null);
se3.displayName = "PopoverGroupContext";
function ve3() {
  return (0, import_react34.useContext)(se3);
}
var Z4 = (0, import_react34.createContext)(null);
Z4.displayName = "PopoverPanelContext";
function Le2() {
  return (0, import_react34.useContext)(Z4);
}
function Me3(o11, l10) {
  return u(l10.type, xe5, o11, l10);
}
var Be3 = "div";
function De(o11, l10) {
  var B4;
  let s17 = (0, import_react34.useRef)(null), R3 = y2(l10, T2((e6) => {
    s17.current = e6;
  })), C4 = (0, import_react34.useRef)([]), r10 = (0, import_react34.useReducer)(Me3, { popoverState: 1, buttons: C4, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react34.createRef)(), afterPanelSentinel: (0, import_react34.createRef)() }), [{ popoverState: t15, button: a11, buttonId: v4, panel: f13, panelId: F9, beforePanelSentinel: T7, afterPanelSentinel: d15 }, i11] = r10, p9 = n4((B4 = s17.current) != null ? B4 : a11), P5 = (0, import_react34.useMemo)(() => {
    if (!a11 || !f13)
      return false;
    for (let N5 of document.querySelectorAll("body > *"))
      if (Number(N5 == null ? void 0 : N5.contains(a11)) ^ Number(N5 == null ? void 0 : N5.contains(f13)))
        return true;
    let e6 = f(), n6 = e6.indexOf(a11), A7 = (n6 + e6.length - 1) % e6.length, g4 = (n6 + 1) % e6.length, G4 = e6[A7], Te4 = e6[g4];
    return !f13.contains(G4) && !f13.contains(Te4);
  }, [a11, f13]), S10 = s2(v4), y7 = s2(F9), x6 = (0, import_react34.useMemo)(() => ({ buttonId: S10, panelId: y7, close: () => i11({ type: 1 }) }), [S10, y7, i11]), O4 = ve3(), L5 = O4 == null ? void 0 : O4.registerPopover, j5 = o4(() => {
    var e6;
    return (e6 = O4 == null ? void 0 : O4.isFocusWithinPopoverGroup()) != null ? e6 : (p9 == null ? void 0 : p9.activeElement) && ((a11 == null ? void 0 : a11.contains(p9.activeElement)) || (f13 == null ? void 0 : f13.contains(p9.activeElement)));
  });
  (0, import_react34.useEffect)(() => L5 == null ? void 0 : L5(x6), [L5, x6]), E3(p9 == null ? void 0 : p9.defaultView, "focus", (e6) => {
    var n6, A7, g4, G4;
    t15 === 0 && (j5() || a11 && f13 && e6.target !== window && ((A7 = (n6 = T7.current) == null ? void 0 : n6.contains) != null && A7.call(n6, e6.target) || (G4 = (g4 = d15.current) == null ? void 0 : g4.contains) != null && G4.call(g4, e6.target) || i11({ type: 1 })));
  }, true), L([a11, f13], (e6, n6) => {
    i11({ type: 1 }), h(n6, T.Loose) || (e6.preventDefault(), a11 == null || a11.focus());
  }, t15 === 0);
  let M9 = o4((e6) => {
    i11({ type: 1 });
    let n6 = (() => e6 ? e6 instanceof HTMLElement ? e6 : "current" in e6 && e6.current instanceof HTMLElement ? e6.current : a11 : a11)();
    n6 == null || n6.focus();
  }), u8 = (0, import_react34.useMemo)(() => ({ close: M9, isPortalled: P5 }), [M9, P5]), m9 = (0, import_react34.useMemo)(() => ({ open: t15 === 0, close: M9 }), [t15, M9]), E6 = o11, c13 = { ref: R3 };
  return import_react34.default.createElement(Z4.Provider, { value: null }, import_react34.default.createElement(le3.Provider, { value: r10 }, import_react34.default.createElement(ae2.Provider, { value: u8 }, import_react34.default.createElement(c5, { value: u(t15, { [0]: d4.Open, [1]: d4.Closed }) }, X({ ourProps: c13, theirProps: E6, slot: m9, defaultTag: Be3, name: "Popover" })))));
}
var he = "button";
function He4(o11, l10) {
  let s17 = I(), { id: R3 = `headlessui-popover-button-${s17}`, ...C4 } = o11, [r10, t15] = Q3("Popover.Button"), { isPortalled: a11 } = pe3("Popover.Button"), v4 = (0, import_react34.useRef)(null), f13 = `headlessui-focus-sentinel-${I()}`, F9 = ve3(), T7 = F9 == null ? void 0 : F9.closeOthers, i11 = Le2() !== null;
  (0, import_react34.useEffect)(() => {
    if (!i11)
      return t15({ type: 3, buttonId: R3 }), () => {
        t15({ type: 3, buttonId: null });
      };
  }, [i11, R3, t15]);
  let [p9] = (0, import_react34.useState)(() => Symbol()), P5 = y2(v4, l10, i11 ? null : (e6) => {
    if (e6)
      r10.buttons.current.push(p9);
    else {
      let n6 = r10.buttons.current.indexOf(p9);
      n6 !== -1 && r10.buttons.current.splice(n6, 1);
    }
    r10.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e6 && t15({ type: 2, button: e6 });
  }), S10 = y2(v4, l10), y7 = n4(v4), x6 = o4((e6) => {
    var n6, A7, g4;
    if (i11) {
      if (r10.popoverState === 1)
        return;
      switch (e6.key) {
        case o8.Space:
        case o8.Enter:
          e6.preventDefault(), (A7 = (n6 = e6.target).click) == null || A7.call(n6), t15({ type: 1 }), (g4 = r10.button) == null || g4.focus();
          break;
      }
    } else
      switch (e6.key) {
        case o8.Space:
        case o8.Enter:
          e6.preventDefault(), e6.stopPropagation(), r10.popoverState === 1 && (T7 == null || T7(r10.buttonId)), t15({ type: 0 });
          break;
        case o8.Escape:
          if (r10.popoverState !== 0)
            return T7 == null ? void 0 : T7(r10.buttonId);
          if (!v4.current || y7 != null && y7.activeElement && !v4.current.contains(y7.activeElement))
            return;
          e6.preventDefault(), e6.stopPropagation(), t15({ type: 1 });
          break;
      }
  }), O4 = o4((e6) => {
    i11 || e6.key === o8.Space && e6.preventDefault();
  }), L5 = o4((e6) => {
    var n6, A7;
    r3(e6.currentTarget) || o11.disabled || (i11 ? (t15({ type: 1 }), (n6 = r10.button) == null || n6.focus()) : (e6.preventDefault(), e6.stopPropagation(), r10.popoverState === 1 && (T7 == null || T7(r10.buttonId)), t15({ type: 0 }), (A7 = r10.button) == null || A7.focus()));
  }), j5 = o4((e6) => {
    e6.preventDefault(), e6.stopPropagation();
  }), M9 = r10.popoverState === 0, u8 = (0, import_react34.useMemo)(() => ({ open: M9 }), [M9]), m9 = s6(o11, v4), E6 = i11 ? { ref: S10, type: m9, onKeyDown: x6, onClick: L5 } : { ref: P5, id: r10.buttonId, type: m9, "aria-expanded": o11.disabled ? void 0 : r10.popoverState === 0, "aria-controls": r10.panel ? r10.panelId : void 0, onKeyDown: x6, onKeyUp: O4, onClick: L5, onMouseDown: j5 }, c13 = n3(), B4 = o4(() => {
    let e6 = r10.panel;
    if (!e6)
      return;
    function n6() {
      u(c13.current, { [s11.Forwards]: () => O(e6, M.First), [s11.Backwards]: () => O(e6, M.Last) }) === N.Error && O(f().filter((g4) => g4.dataset.headlessuiFocusGuard !== "true"), u(c13.current, { [s11.Forwards]: M.Next, [s11.Backwards]: M.Previous }), { relativeTo: r10.button });
    }
    n6();
  });
  return import_react34.default.createElement(import_react34.default.Fragment, null, X({ ourProps: E6, theirProps: C4, slot: u8, defaultTag: he, name: "Popover.Button" }), M9 && !i11 && a11 && import_react34.default.createElement(c4, { id: f13, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B4 }));
}
var Ge4 = "div";
var _e2 = S2.RenderStrategy | S2.Static;
function ke3(o11, l10) {
  let s17 = I(), { id: R3 = `headlessui-popover-overlay-${s17}`, ...C4 } = o11, [{ popoverState: r10 }, t15] = Q3("Popover.Overlay"), a11 = y2(l10), v4 = C(), f13 = (() => v4 !== null ? (v4 & d4.Open) === d4.Open : r10 === 0)(), F9 = o4((i11) => {
    if (r3(i11.currentTarget))
      return i11.preventDefault();
    t15({ type: 1 });
  }), T7 = (0, import_react34.useMemo)(() => ({ open: r10 === 0 }), [r10]);
  return X({ ourProps: { ref: a11, id: R3, "aria-hidden": true, onClick: F9 }, theirProps: C4, slot: T7, defaultTag: Ge4, features: _e2, visible: f13, name: "Popover.Overlay" });
}
var we3 = "div";
var Ne4 = S2.RenderStrategy | S2.Static;
function Ue4(o11, l10) {
  let s17 = I(), { id: R3 = `headlessui-popover-panel-${s17}`, focus: C4 = false, ...r10 } = o11, [t15, a11] = Q3("Popover.Panel"), { close: v4, isPortalled: f13 } = pe3("Popover.Panel"), F9 = `headlessui-focus-sentinel-before-${I()}`, T7 = `headlessui-focus-sentinel-after-${I()}`, d15 = (0, import_react34.useRef)(null), i11 = y2(d15, l10, (u8) => {
    a11({ type: 4, panel: u8 });
  }), p9 = n4(d15);
  l(() => (a11({ type: 5, panelId: R3 }), () => {
    a11({ type: 5, panelId: null });
  }), [R3, a11]);
  let P5 = C(), S10 = (() => P5 !== null ? (P5 & d4.Open) === d4.Open : t15.popoverState === 0)(), y7 = o4((u8) => {
    var m9;
    switch (u8.key) {
      case o8.Escape:
        if (t15.popoverState !== 0 || !d15.current || p9 != null && p9.activeElement && !d15.current.contains(p9.activeElement))
          return;
        u8.preventDefault(), u8.stopPropagation(), a11({ type: 1 }), (m9 = t15.button) == null || m9.focus();
        break;
    }
  });
  (0, import_react34.useEffect)(() => {
    var u8;
    o11.static || t15.popoverState === 1 && ((u8 = o11.unmount) == null || u8) && a11({ type: 4, panel: null });
  }, [t15.popoverState, o11.unmount, o11.static, a11]), (0, import_react34.useEffect)(() => {
    if (!C4 || t15.popoverState !== 0 || !d15.current)
      return;
    let u8 = p9 == null ? void 0 : p9.activeElement;
    d15.current.contains(u8) || O(d15.current, M.First);
  }, [C4, d15, t15.popoverState]);
  let x6 = (0, import_react34.useMemo)(() => ({ open: t15.popoverState === 0, close: v4 }), [t15, v4]), O4 = { ref: i11, id: R3, onKeyDown: y7, onBlur: C4 && t15.popoverState === 0 ? (u8) => {
    var E6, c13, B4, e6, n6;
    let m9 = u8.relatedTarget;
    m9 && d15.current && ((E6 = d15.current) != null && E6.contains(m9) || (a11({ type: 1 }), ((B4 = (c13 = t15.beforePanelSentinel.current) == null ? void 0 : c13.contains) != null && B4.call(c13, m9) || (n6 = (e6 = t15.afterPanelSentinel.current) == null ? void 0 : e6.contains) != null && n6.call(e6, m9)) && m9.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, L5 = n3(), j5 = o4(() => {
    let u8 = d15.current;
    if (!u8)
      return;
    function m9() {
      u(L5.current, { [s11.Forwards]: () => {
        var c13;
        O(u8, M.First) === N.Error && ((c13 = t15.afterPanelSentinel.current) == null || c13.focus());
      }, [s11.Backwards]: () => {
        var E6;
        (E6 = t15.button) == null || E6.focus({ preventScroll: true });
      } });
    }
    m9();
  }), M9 = o4(() => {
    let u8 = d15.current;
    if (!u8)
      return;
    function m9() {
      u(L5.current, { [s11.Forwards]: () => {
        var A7;
        if (!t15.button)
          return;
        let E6 = f(), c13 = E6.indexOf(t15.button), B4 = E6.slice(0, c13 + 1), n6 = [...E6.slice(c13 + 1), ...B4];
        for (let g4 of n6.slice())
          if (g4.dataset.headlessuiFocusGuard === "true" || (A7 = t15.panel) != null && A7.contains(g4)) {
            let G4 = n6.indexOf(g4);
            G4 !== -1 && n6.splice(G4, 1);
          }
        O(n6, M.First, { sorted: false });
      }, [s11.Backwards]: () => {
        var c13;
        O(u8, M.Previous) === N.Error && ((c13 = t15.button) == null || c13.focus());
      } });
    }
    m9();
  });
  return import_react34.default.createElement(Z4.Provider, { value: R3 }, S10 && f13 && import_react34.default.createElement(c4, { id: F9, ref: t15.beforePanelSentinel, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: j5 }), X({ ourProps: O4, theirProps: r10, slot: x6, defaultTag: we3, features: Ne4, visible: S10, name: "Popover.Panel" }), S10 && f13 && import_react34.default.createElement(c4, { id: T7, ref: t15.afterPanelSentinel, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M9 }));
}
var Ke4 = "div";
function We4(o11, l10) {
  let s17 = (0, import_react34.useRef)(null), R3 = y2(s17, l10), [C4, r10] = (0, import_react34.useState)([]), t15 = o4((p9) => {
    r10((P5) => {
      let S10 = P5.indexOf(p9);
      if (S10 !== -1) {
        let y7 = P5.slice();
        return y7.splice(S10, 1), y7;
      }
      return P5;
    });
  }), a11 = o4((p9) => (r10((P5) => [...P5, p9]), () => t15(p9))), v4 = o4(() => {
    var S10;
    let p9 = e(s17);
    if (!p9)
      return false;
    let P5 = p9.activeElement;
    return (S10 = s17.current) != null && S10.contains(P5) ? true : C4.some((y7) => {
      var x6, O4;
      return ((x6 = p9.getElementById(y7.buttonId.current)) == null ? void 0 : x6.contains(P5)) || ((O4 = p9.getElementById(y7.panelId.current)) == null ? void 0 : O4.contains(P5));
    });
  }), f13 = o4((p9) => {
    for (let P5 of C4)
      P5.buttonId.current !== p9 && P5.close();
  }), F9 = (0, import_react34.useMemo)(() => ({ registerPopover: a11, unregisterPopover: t15, isFocusWithinPopoverGroup: v4, closeOthers: f13 }), [a11, t15, v4, f13]), T7 = (0, import_react34.useMemo)(() => ({}), []), d15 = o11, i11 = { ref: R3 };
  return import_react34.default.createElement(se3.Provider, { value: F9 }, X({ ourProps: i11, theirProps: d15, slot: T7, defaultTag: Ke4, name: "Popover.Group" }));
}
var je4 = D2(De);
var Ve3 = D2(He4);
var $e4 = D2(ke3);
var Je4 = D2(Ue4);
var Xe4 = D2(We4);
var Lt = Object.assign(je4, { Button: Ve3, Overlay: $e4, Panel: Je4, Group: Xe4 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react37 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react35 = __toESM(require_react(), 1);
function c11(a11 = 0) {
  let [l10, r10] = (0, import_react35.useState)(a11), t15 = f6(), o11 = (0, import_react35.useCallback)((e6) => {
    t15.current && r10((u8) => u8 | e6);
  }, [l10, t15]), m9 = (0, import_react35.useCallback)((e6) => Boolean(l10 & e6), [l10]), s17 = (0, import_react35.useCallback)((e6) => {
    t15.current && r10((u8) => u8 & ~e6);
  }, [r10, t15]), g4 = (0, import_react35.useCallback)((e6) => {
    t15.current && r10((u8) => u8 ^ e6);
  }, [r10]);
  return { flags: l10, addFlag: o11, hasFlag: m9, removeFlag: s17, toggleFlag: g4 };
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react36 = __toESM(require_react(), 1);
var d11 = (0, import_react36.createContext)(null);
function u7() {
  let o11 = (0, import_react36.useContext)(d11);
  if (o11 === null) {
    let t15 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t15, u7), t15;
  }
  return o11;
}
function H6() {
  let [o11, t15] = (0, import_react36.useState)([]);
  return [o11.length > 0 ? o11.join(" ") : void 0, (0, import_react36.useMemo)(() => function(e6) {
    let s17 = o4((r10) => (t15((l10) => [...l10, r10]), () => t15((l10) => {
      let n6 = l10.slice(), p9 = n6.indexOf(r10);
      return p9 !== -1 && n6.splice(p9, 1), n6;
    }))), a11 = (0, import_react36.useMemo)(() => ({ register: s17, slot: e6.slot, name: e6.name, props: e6.props }), [s17, e6.slot, e6.name, e6.props]);
    return import_react36.default.createElement(d11.Provider, { value: a11 }, e6.children);
  }, [t15])];
}
var A3 = "label";
function h8(o11, t15) {
  let i11 = I(), { id: e6 = `headlessui-label-${i11}`, passive: s17 = false, ...a11 } = o11, r10 = u7(), l10 = y2(t15);
  l(() => r10.register(e6), [e6, r10.register]);
  let n6 = { ref: l10, ...r10.props, id: e6 };
  return s17 && ("onClick" in n6 && (delete n6.htmlFor, delete n6.onClick), "onClick" in a11 && delete a11.onClick), X({ ourProps: n6, theirProps: a11, slot: r10.slot || {}, defaultTag: A3, name: r10.name || "Label" });
}
var v2 = D2(h8);
var M6 = Object.assign(v2, {});

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var Ce2 = ((t15) => (t15[t15.RegisterOption = 0] = "RegisterOption", t15[t15.UnregisterOption = 1] = "UnregisterOption", t15))(Ce2 || {});
var ke4 = { [0](r10, o11) {
  let t15 = [...r10.options, { id: o11.id, element: o11.element, propsRef: o11.propsRef }];
  return { ...r10, options: I2(t15, (p9) => p9.element.current) };
}, [1](r10, o11) {
  let t15 = r10.options.slice(), p9 = r10.options.findIndex((T7) => T7.id === o11.id);
  return p9 === -1 ? r10 : (t15.splice(p9, 1), { ...r10, options: t15 });
} };
var B3 = (0, import_react37.createContext)(null);
B3.displayName = "RadioGroupDataContext";
function oe2(r10) {
  let o11 = (0, import_react37.useContext)(B3);
  if (o11 === null) {
    let t15 = new Error(`<${r10} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, oe2), t15;
  }
  return o11;
}
var $5 = (0, import_react37.createContext)(null);
$5.displayName = "RadioGroupActionsContext";
function ne2(r10) {
  let o11 = (0, import_react37.useContext)($5);
  if (o11 === null) {
    let t15 = new Error(`<${r10} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, ne2), t15;
  }
  return o11;
}
function Le3(r10, o11) {
  return u(o11.type, ke4, r10, o11);
}
var he2 = "div";
function Fe3(r10, o11) {
  let t15 = I(), { id: p9 = `headlessui-radiogroup-${t15}`, value: T7, defaultValue: v4, form: S10, name: m9, onChange: M9, by: G4 = (e6, i11) => e6 === i11, disabled: C4 = false, ...H8 } = r10, y7 = o4(typeof G4 == "string" ? (e6, i11) => {
    let n6 = G4;
    return (e6 == null ? void 0 : e6[n6]) === (i11 == null ? void 0 : i11[n6]);
  } : G4), [P5, h9] = (0, import_react37.useReducer)(Le3, { options: [] }), a11 = P5.options, [N5, R3] = H6(), [k2, U5] = M2(), L5 = (0, import_react37.useRef)(null), W = y2(L5, o11), [l10, s17] = T4(T7, M9, v4), b4 = (0, import_react37.useMemo)(() => a11.find((e6) => !e6.propsRef.current.disabled), [a11]), F9 = (0, import_react37.useMemo)(() => a11.some((e6) => y7(e6.propsRef.current.value, l10)), [a11, l10]), d15 = o4((e6) => {
    var n6;
    if (C4 || y7(e6, l10))
      return false;
    let i11 = (n6 = a11.find((f13) => y7(f13.propsRef.current.value, e6))) == null ? void 0 : n6.propsRef.current;
    return i11 != null && i11.disabled ? false : (s17 == null || s17(e6), true);
  });
  F2({ container: L5.current, accept(e6) {
    return e6.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e6) {
    e6.setAttribute("role", "none");
  } });
  let x6 = o4((e6) => {
    let i11 = L5.current;
    if (!i11)
      return;
    let n6 = e(i11), f13 = a11.filter((u8) => u8.propsRef.current.disabled === false).map((u8) => u8.element.current);
    switch (e6.key) {
      case o8.Enter:
        p2(e6.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (e6.preventDefault(), e6.stopPropagation(), O(f13, M.Previous | M.WrapAround) === N.Success) {
          let g4 = a11.find((K4) => K4.element.current === (n6 == null ? void 0 : n6.activeElement));
          g4 && d15(g4.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (e6.preventDefault(), e6.stopPropagation(), O(f13, M.Next | M.WrapAround) === N.Success) {
          let g4 = a11.find((K4) => K4.element.current === (n6 == null ? void 0 : n6.activeElement));
          g4 && d15(g4.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          e6.preventDefault(), e6.stopPropagation();
          let u8 = a11.find((g4) => g4.element.current === (n6 == null ? void 0 : n6.activeElement));
          u8 && d15(u8.propsRef.current.value);
        }
        break;
    }
  }), c13 = o4((e6) => (h9({ type: 0, ...e6 }), () => h9({ type: 1, id: e6.id }))), _6 = (0, import_react37.useMemo)(() => ({ value: l10, firstOption: b4, containsCheckedOption: F9, disabled: C4, compare: y7, ...P5 }), [l10, b4, F9, C4, y7, P5]), ie4 = (0, import_react37.useMemo)(() => ({ registerOption: c13, change: d15 }), [c13, d15]), ae3 = { ref: W, id: p9, role: "radiogroup", "aria-labelledby": N5, "aria-describedby": k2, onKeyDown: x6 }, pe4 = (0, import_react37.useMemo)(() => ({ value: l10 }), [l10]), w5 = (0, import_react37.useRef)(null), le4 = p();
  return (0, import_react37.useEffect)(() => {
    w5.current && v4 !== void 0 && le4.addEventListener(w5.current, "reset", () => {
      d15(v4);
    });
  }, [w5, d15]), import_react37.default.createElement(U5, { name: "RadioGroup.Description" }, import_react37.default.createElement(R3, { name: "RadioGroup.Label" }, import_react37.default.createElement($5.Provider, { value: ie4 }, import_react37.default.createElement(B3.Provider, { value: _6 }, m9 != null && l10 != null && e3({ [m9]: l10 }).map(([e6, i11], n6) => import_react37.default.createElement(c4, { features: p3.Hidden, ref: n6 === 0 ? (f13) => {
    var u8;
    w5.current = (u8 = f13 == null ? void 0 : f13.closest("form")) != null ? u8 : null;
  } : void 0, ...R({ key: e6, as: "input", type: "radio", checked: i11 != null, hidden: true, readOnly: true, form: S10, name: e6, value: i11 }) })), X({ ourProps: ae3, theirProps: H8, slot: pe4, defaultTag: he2, name: "RadioGroup" })))));
}
var xe6 = ((t15) => (t15[t15.Empty = 1] = "Empty", t15[t15.Active = 2] = "Active", t15))(xe6 || {});
var _e3 = "div";
function we4(r10, o11) {
  var x6;
  let t15 = I(), { id: p9 = `headlessui-radiogroup-option-${t15}`, value: T7, disabled: v4 = false, ...S10 } = r10, m9 = (0, import_react37.useRef)(null), M9 = y2(m9, o11), [G4, C4] = H6(), [H8, y7] = M2(), { addFlag: P5, removeFlag: h9, hasFlag: a11 } = c11(1), N5 = s2({ value: T7, disabled: v4 }), R3 = oe2("RadioGroup.Option"), k2 = ne2("RadioGroup.Option");
  l(() => k2.registerOption({ id: p9, element: m9, propsRef: N5 }), [p9, k2, m9, r10]);
  let U5 = o4((c13) => {
    var _6;
    if (r3(c13.currentTarget))
      return c13.preventDefault();
    k2.change(T7) && (P5(2), (_6 = m9.current) == null || _6.focus());
  }), L5 = o4((c13) => {
    if (r3(c13.currentTarget))
      return c13.preventDefault();
    P5(2);
  }), W = o4(() => h9(2)), l10 = ((x6 = R3.firstOption) == null ? void 0 : x6.id) === p9, s17 = R3.disabled || v4, b4 = R3.compare(R3.value, T7), F9 = { ref: M9, id: p9, role: "radio", "aria-checked": b4 ? "true" : "false", "aria-labelledby": G4, "aria-describedby": H8, "aria-disabled": s17 ? true : void 0, tabIndex: (() => s17 ? -1 : b4 || !R3.containsCheckedOption && l10 ? 0 : -1)(), onClick: s17 ? void 0 : U5, onFocus: s17 ? void 0 : L5, onBlur: s17 ? void 0 : W }, d15 = (0, import_react37.useMemo)(() => ({ checked: b4, disabled: s17, active: a11(2) }), [b4, s17, a11]);
  return import_react37.default.createElement(y7, { name: "RadioGroup.Description" }, import_react37.default.createElement(C4, { name: "RadioGroup.Label" }, X({ ourProps: F9, theirProps: S10, slot: d15, defaultTag: _e3, name: "RadioGroup.Option" })));
}
var Ie4 = D2(Fe3);
var Se3 = D2(we4);
var yt = Object.assign(Ie4, { Option: Se3, Label: M6, Description: b2 });

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react38 = __toESM(require_react(), 1);
var y5 = (0, import_react38.createContext)(null);
y5.displayName = "GroupContext";
var Y5 = import_react38.Fragment;
function Z5(s17) {
  var d15;
  let [n6, p9] = (0, import_react38.useState)(null), [c13, f13] = H6(), [r10, h9] = M2(), l10 = (0, import_react38.useMemo)(() => ({ switch: n6, setSwitch: p9, labelledby: c13, describedby: r10 }), [n6, p9, c13, r10]), T7 = {}, b4 = s17;
  return import_react38.default.createElement(h9, { name: "Switch.Description" }, import_react38.default.createElement(f13, { name: "Switch.Label", props: { htmlFor: (d15 = l10.switch) == null ? void 0 : d15.id, onClick(t15) {
    n6 && (t15.currentTarget.tagName === "LABEL" && t15.preventDefault(), n6.click(), n6.focus({ preventScroll: true }));
  } } }, import_react38.default.createElement(y5.Provider, { value: l10 }, X({ ourProps: T7, theirProps: b4, defaultTag: Y5, name: "Switch.Group" }))));
}
var ee3 = "button";
function te3(s17, n6) {
  let p9 = I(), { id: c13 = `headlessui-switch-${p9}`, checked: f13, defaultChecked: r10 = false, onChange: h9, name: l10, value: T7, form: b4, ...d15 } = s17, t15 = (0, import_react38.useContext)(y5), u8 = (0, import_react38.useRef)(null), D8 = y2(u8, n6, t15 === null ? null : t15.setSwitch), [o11, a11] = T4(f13, h9, r10), S10 = o4(() => a11 == null ? void 0 : a11(!o11)), C4 = o4((e6) => {
    if (r3(e6.currentTarget))
      return e6.preventDefault();
    e6.preventDefault(), S10();
  }), L5 = o4((e6) => {
    e6.key === o8.Space ? (e6.preventDefault(), S10()) : e6.key === o8.Enter && p2(e6.currentTarget);
  }), v4 = o4((e6) => e6.preventDefault()), G4 = (0, import_react38.useMemo)(() => ({ checked: o11 }), [o11]), R3 = { id: c13, ref: D8, role: "switch", type: s6(s17, u8), tabIndex: 0, "aria-checked": o11, "aria-labelledby": t15 == null ? void 0 : t15.labelledby, "aria-describedby": t15 == null ? void 0 : t15.describedby, onClick: C4, onKeyUp: L5, onKeyPress: v4 }, k2 = p();
  return (0, import_react38.useEffect)(() => {
    var w5;
    let e6 = (w5 = u8.current) == null ? void 0 : w5.closest("form");
    e6 && r10 !== void 0 && k2.addEventListener(e6, "reset", () => {
      a11(r10);
    });
  }, [u8, a11]), import_react38.default.createElement(import_react38.default.Fragment, null, l10 != null && o11 && import_react38.default.createElement(c4, { features: p3.Hidden, ...R({ as: "input", type: "checkbox", hidden: true, readOnly: true, form: b4, checked: o11, name: l10, value: T7 }) }), X({ ourProps: R3, theirProps: d15, slot: G4, defaultTag: ee3, name: "Switch" }));
}
var ne3 = D2(te3);
var re3 = Z5;
var Ge5 = Object.assign(ne3, { Group: re3, Label: M6, Description: b2 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react39 = __toESM(require_react(), 1);
function p8({ onFocus: n6 }) {
  let [r10, o11] = (0, import_react39.useState)(true);
  return r10 ? import_react39.default.createElement(c4, { as: "button", type: "button", features: p3.Focusable, onFocus: (a11) => {
    a11.preventDefault();
    let e6, u8 = 50;
    function t15() {
      if (u8-- <= 0) {
        e6 && cancelAnimationFrame(e6);
        return;
      }
      if (n6()) {
        o11(false), cancelAnimationFrame(e6);
        return;
      }
      e6 = requestAnimationFrame(t15);
    }
    e6 = requestAnimationFrame(t15);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var r9 = __toESM(require_react(), 1);
var s16 = r9.createContext(null);
function a10() {
  return { groups: /* @__PURE__ */ new Map(), get(n6, t15) {
    var c13;
    let e6 = this.groups.get(n6);
    e6 || (e6 = /* @__PURE__ */ new Map(), this.groups.set(n6, e6));
    let l10 = (c13 = e6.get(t15)) != null ? c13 : 0;
    e6.set(t15, l10 + 1);
    let o11 = Array.from(e6.keys()).indexOf(t15);
    function i11() {
      let u8 = e6.get(t15);
      u8 > 1 ? e6.set(t15, u8 - 1) : e6.delete(t15);
    }
    return [o11, i11];
  } };
}
function C3({ children: n6 }) {
  let t15 = r9.useRef(a10());
  return r9.createElement(s16.Provider, { value: t15 }, n6);
}
function d12(n6) {
  let t15 = r9.useContext(s16);
  if (!t15)
    throw new Error("You must wrap your component in a <StableCollection>");
  let e6 = f11(), [l10, o11] = t15.current.get(n6, e6);
  return r9.useEffect(() => o11, []), l10;
}
function f11() {
  var l10, o11, i11;
  let n6 = (i11 = (o11 = (l10 = r9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l10.ReactCurrentOwner) == null ? void 0 : o11.current) != null ? i11 : null;
  if (!n6)
    return Symbol();
  let t15 = [], e6 = n6;
  for (; e6; )
    t15.push(e6.index), e6 = e6.return;
  return "$." + t15.join(".");
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var ue5 = ((t15) => (t15[t15.Forwards = 0] = "Forwards", t15[t15.Backwards = 1] = "Backwards", t15))(ue5 || {});
var Te3 = ((o11) => (o11[o11.Less = -1] = "Less", o11[o11.Equal = 0] = "Equal", o11[o11.Greater = 1] = "Greater", o11))(Te3 || {});
var de2 = ((r10) => (r10[r10.SetSelectedIndex = 0] = "SetSelectedIndex", r10[r10.RegisterTab = 1] = "RegisterTab", r10[r10.UnregisterTab = 2] = "UnregisterTab", r10[r10.RegisterPanel = 3] = "RegisterPanel", r10[r10.UnregisterPanel = 4] = "UnregisterPanel", r10))(de2 || {});
var ce3 = { [0](e6, n6) {
  var u8;
  let t15 = I2(e6.tabs, (T7) => T7.current), o11 = I2(e6.panels, (T7) => T7.current), s17 = t15.filter((T7) => {
    var l10;
    return !((l10 = T7.current) != null && l10.hasAttribute("disabled"));
  }), r10 = { ...e6, tabs: t15, panels: o11 };
  if (n6.index < 0 || n6.index > t15.length - 1) {
    let T7 = u(Math.sign(n6.index - e6.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(n6.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    return s17.length === 0 ? r10 : { ...r10, selectedIndex: u(T7, { [0]: () => t15.indexOf(s17[0]), [1]: () => t15.indexOf(s17[s17.length - 1]) }) };
  }
  let i11 = t15.slice(0, n6.index), b4 = [...t15.slice(n6.index), ...i11].find((T7) => s17.includes(T7));
  if (!b4)
    return r10;
  let c13 = (u8 = t15.indexOf(b4)) != null ? u8 : e6.selectedIndex;
  return c13 === -1 && (c13 = e6.selectedIndex), { ...r10, selectedIndex: c13 };
}, [1](e6, n6) {
  var r10;
  if (e6.tabs.includes(n6.tab))
    return e6;
  let t15 = e6.tabs[e6.selectedIndex], o11 = I2([...e6.tabs, n6.tab], (i11) => i11.current), s17 = (r10 = o11.indexOf(t15)) != null ? r10 : e6.selectedIndex;
  return s17 === -1 && (s17 = e6.selectedIndex), { ...e6, tabs: o11, selectedIndex: s17 };
}, [2](e6, n6) {
  return { ...e6, tabs: e6.tabs.filter((t15) => t15 !== n6.tab) };
}, [3](e6, n6) {
  return e6.panels.includes(n6.panel) ? e6 : { ...e6, panels: I2([...e6.panels, n6.panel], (t15) => t15.current) };
}, [4](e6, n6) {
  return { ...e6, panels: e6.panels.filter((t15) => t15 !== n6.panel) };
} };
var X7 = (0, import_react40.createContext)(null);
X7.displayName = "TabsDataContext";
function M8(e6) {
  let n6 = (0, import_react40.useContext)(X7);
  if (n6 === null) {
    let t15 = new Error(`<${e6} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, M8), t15;
  }
  return n6;
}
var $6 = (0, import_react40.createContext)(null);
$6.displayName = "TabsActionsContext";
function q4(e6) {
  let n6 = (0, import_react40.useContext)($6);
  if (n6 === null) {
    let t15 = new Error(`<${e6} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, q4), t15;
  }
  return n6;
}
function fe3(e6, n6) {
  return u(n6.type, ce3, e6, n6);
}
var be2 = import_react40.Fragment;
function me3(e6, n6) {
  let { defaultIndex: t15 = 0, vertical: o11 = false, manual: s17 = false, onChange: r10, selectedIndex: i11 = null, ...R3 } = e6;
  const b4 = o11 ? "vertical" : "horizontal", c13 = s17 ? "manual" : "auto";
  let u8 = i11 !== null, T7 = y2(n6), [l10, d15] = (0, import_react40.useReducer)(fe3, { selectedIndex: i11 != null ? i11 : t15, tabs: [], panels: [] }), y7 = (0, import_react40.useMemo)(() => ({ selectedIndex: l10.selectedIndex }), [l10.selectedIndex]), m9 = s2(r10 || (() => {
  })), x6 = s2(l10.tabs), E6 = (0, import_react40.useMemo)(() => ({ orientation: b4, activation: c13, ...l10 }), [b4, c13, l10]), S10 = o4((p9) => (d15({ type: 1, tab: p9 }), () => d15({ type: 2, tab: p9 }))), A7 = o4((p9) => (d15({ type: 3, panel: p9 }), () => d15({ type: 4, panel: p9 }))), L5 = o4((p9) => {
    C4.current !== p9 && m9.current(p9), u8 || d15({ type: 0, index: p9 });
  }), C4 = s2(u8 ? e6.selectedIndex : l10.selectedIndex), N5 = (0, import_react40.useMemo)(() => ({ registerTab: S10, registerPanel: A7, change: L5 }), []);
  l(() => {
    d15({ type: 0, index: i11 != null ? i11 : t15 });
  }, [i11]), l(() => {
    if (C4.current === void 0 || l10.tabs.length <= 0)
      return;
    let p9 = I2(l10.tabs, (a11) => a11.current);
    p9.some((a11, f13) => l10.tabs[f13] !== a11) && L5(p9.indexOf(l10.tabs[C4.current]));
  });
  let B4 = { ref: T7 };
  return import_react40.default.createElement(C3, null, import_react40.default.createElement($6.Provider, { value: N5 }, import_react40.default.createElement(X7.Provider, { value: E6 }, E6.tabs.length <= 0 && import_react40.default.createElement(p8, { onFocus: () => {
    var p9, I8;
    for (let a11 of x6.current)
      if (((p9 = a11.current) == null ? void 0 : p9.tabIndex) === 0)
        return (I8 = a11.current) == null || I8.focus(), true;
    return false;
  } }), X({ ourProps: B4, theirProps: R3, slot: y7, defaultTag: be2, name: "Tabs" }))));
}
var Pe2 = "div";
function ge5(e6, n6) {
  let { orientation: t15, selectedIndex: o11 } = M8("Tab.List"), s17 = y2(n6);
  return X({ ourProps: { ref: s17, role: "tablist", "aria-orientation": t15 }, theirProps: e6, slot: { selectedIndex: o11 }, defaultTag: Pe2, name: "Tabs.List" });
}
var ye3 = "button";
function xe7(e6, n6) {
  var p9, I8;
  let t15 = I(), { id: o11 = `headlessui-tabs-tab-${t15}`, ...s17 } = e6, { orientation: r10, activation: i11, selectedIndex: R3, tabs: b4, panels: c13 } = M8("Tab"), u8 = q4("Tab"), T7 = M8("Tab"), l10 = (0, import_react40.useRef)(null), d15 = y2(l10, n6);
  l(() => u8.registerTab(l10), [u8, l10]);
  let y7 = d12("tabs"), m9 = b4.indexOf(l10);
  m9 === -1 && (m9 = y7);
  let x6 = m9 === R3, E6 = o4((a11) => {
    var j5;
    let f13 = a11();
    if (f13 === N.Success && i11 === "auto") {
      let W = (j5 = e(l10)) == null ? void 0 : j5.activeElement, z5 = T7.tabs.findIndex((te4) => te4.current === W);
      z5 !== -1 && u8.change(z5);
    }
    return f13;
  }), S10 = o4((a11) => {
    let f13 = b4.map((W) => W.current).filter(Boolean);
    if (a11.key === o8.Space || a11.key === o8.Enter) {
      a11.preventDefault(), a11.stopPropagation(), u8.change(m9);
      return;
    }
    switch (a11.key) {
      case o8.Home:
      case o8.PageUp:
        return a11.preventDefault(), a11.stopPropagation(), E6(() => O(f13, M.First));
      case o8.End:
      case o8.PageDown:
        return a11.preventDefault(), a11.stopPropagation(), E6(() => O(f13, M.Last));
    }
    if (E6(() => u(r10, { vertical() {
      return a11.key === o8.ArrowUp ? O(f13, M.Previous | M.WrapAround) : a11.key === o8.ArrowDown ? O(f13, M.Next | M.WrapAround) : N.Error;
    }, horizontal() {
      return a11.key === o8.ArrowLeft ? O(f13, M.Previous | M.WrapAround) : a11.key === o8.ArrowRight ? O(f13, M.Next | M.WrapAround) : N.Error;
    } })) === N.Success)
      return a11.preventDefault();
  }), A7 = (0, import_react40.useRef)(false), L5 = o4(() => {
    var a11;
    A7.current || (A7.current = true, (a11 = l10.current) == null || a11.focus(), u8.change(m9), t3(() => {
      A7.current = false;
    }));
  }), C4 = o4((a11) => {
    a11.preventDefault();
  }), N5 = (0, import_react40.useMemo)(() => ({ selected: x6 }), [x6]), B4 = { ref: d15, onKeyDown: S10, onMouseDown: C4, onClick: L5, id: o11, role: "tab", type: s6(e6, l10), "aria-controls": (I8 = (p9 = c13[m9]) == null ? void 0 : p9.current) == null ? void 0 : I8.id, "aria-selected": x6, tabIndex: x6 ? 0 : -1 };
  return X({ ourProps: B4, theirProps: s17, slot: N5, defaultTag: ye3, name: "Tabs.Tab" });
}
var Ee2 = "div";
function Ae2(e6, n6) {
  let { selectedIndex: t15 } = M8("Tab.Panels"), o11 = y2(n6), s17 = (0, import_react40.useMemo)(() => ({ selectedIndex: t15 }), [t15]);
  return X({ ourProps: { ref: o11 }, theirProps: e6, slot: s17, defaultTag: Ee2, name: "Tabs.Panels" });
}
var Re3 = "div";
var Le4 = S2.RenderStrategy | S2.Static;
function De2(e6, n6) {
  var E6, S10, A7, L5;
  let t15 = I(), { id: o11 = `headlessui-tabs-panel-${t15}`, tabIndex: s17 = 0, ...r10 } = e6, { selectedIndex: i11, tabs: R3, panels: b4 } = M8("Tab.Panel"), c13 = q4("Tab.Panel"), u8 = (0, import_react40.useRef)(null), T7 = y2(u8, n6);
  l(() => c13.registerPanel(u8), [c13, u8]);
  let l10 = d12("panels"), d15 = b4.indexOf(u8);
  d15 === -1 && (d15 = l10);
  let y7 = d15 === i11, m9 = (0, import_react40.useMemo)(() => ({ selected: y7 }), [y7]), x6 = { ref: T7, id: o11, role: "tabpanel", "aria-labelledby": (S10 = (E6 = R3[d15]) == null ? void 0 : E6.current) == null ? void 0 : S10.id, tabIndex: y7 ? s17 : -1 };
  return !y7 && ((A7 = r10.unmount) == null || A7) && !((L5 = r10.static) != null && L5) ? import_react40.default.createElement(c4, { as: "span", ...x6 }) : X({ ourProps: x6, theirProps: r10, slot: m9, defaultTag: Re3, features: Le4, visible: y7, name: "Tabs.Panel" });
}
var Se4 = D2(xe7);
var Ie5 = D2(me3);
var Fe4 = D2(ge5);
var he3 = D2(Ae2);
var Me4 = D2(De2);
var rt = Object.assign(Se4, { Group: Ie5, List: Fe4, Panels: he3, Panel: Me4 });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react41 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l9(r10) {
  let e6 = { called: false };
  return (...t15) => {
    if (!e6.called)
      return e6.called = true, r10(...t15);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d13(t15, ...e6) {
  t15 && e6.length > 0 && t15.classList.add(...e6);
}
function v3(t15, ...e6) {
  t15 && e6.length > 0 && t15.classList.remove(...e6);
}
function F8(t15, e6) {
  let n6 = o2();
  if (!t15)
    return n6.dispose;
  let { transitionDuration: m9, transitionDelay: o11 } = getComputedStyle(t15), [u8, p9] = [m9, o11].map((a11) => {
    let [r10 = 0] = a11.split(",").filter(Boolean).map((i11) => i11.includes("ms") ? parseFloat(i11) : parseFloat(i11) * 1e3).sort((i11, f13) => f13 - i11);
    return r10;
  }), l10 = u8 + p9;
  if (l10 !== 0) {
    n6.group((r10) => {
      r10.setTimeout(() => {
        e6(), r10.dispose();
      }, l10), r10.addEventListener(t15, "transitionrun", (i11) => {
        i11.target === i11.currentTarget && r10.dispose();
      });
    });
    let a11 = n6.addEventListener(t15, "transitionend", (r10) => {
      r10.target === r10.currentTarget && (e6(), a11());
    });
  } else
    e6();
  return n6.add(() => e6()), n6.dispose;
}
function y6(t15, e6, n6, m9) {
  let o11 = n6 ? "enter" : "leave", u8 = o2(), p9 = m9 !== void 0 ? l9(m9) : () => {
  };
  o11 === "enter" && (t15.removeAttribute("hidden"), t15.style.display = "");
  let l10 = u(o11, { enter: () => e6.enter, leave: () => e6.leave }), a11 = u(o11, { enter: () => e6.enterTo, leave: () => e6.leaveTo }), r10 = u(o11, { enter: () => e6.enterFrom, leave: () => e6.leaveFrom });
  return v3(t15, ...e6.enter, ...e6.enterTo, ...e6.enterFrom, ...e6.leave, ...e6.leaveFrom, ...e6.leaveTo, ...e6.entered), d13(t15, ...l10, ...r10), u8.nextFrame(() => {
    v3(t15, ...r10), d13(t15, ...a11), F8(t15, () => (v3(t15, ...l10), d13(t15, ...e6.entered), p9()));
  }), u8.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D7({ container: i11, direction: t15, classes: o11, onStart: s17, onStop: u8 }) {
  let a11 = f6(), c13 = p(), r10 = s2(t15);
  l(() => {
    let e6 = o2();
    c13.add(e6.dispose);
    let n6 = i11.current;
    if (n6 && r10.current !== "idle" && a11.current)
      return e6.dispose(), s17.current(r10.current), e6.add(y6(n6, o11.current, r10.current === "enter", () => {
        e6.dispose(), u8.current(r10.current);
      })), e6.dispose;
  }, [t15]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S9(n6 = "") {
  return n6.split(" ").filter((t15) => t15.trim().length > 1);
}
var A6 = (0, import_react41.createContext)(null);
A6.displayName = "TransitionContext";
var Ce3 = ((r10) => (r10.Visible = "visible", r10.Hidden = "hidden", r10))(Ce3 || {});
function Ee3() {
  let n6 = (0, import_react41.useContext)(A6);
  if (n6 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n6;
}
function be3() {
  let n6 = (0, import_react41.useContext)(I7);
  if (n6 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n6;
}
var I7 = (0, import_react41.createContext)(null);
I7.displayName = "NestingContext";
function _5(n6) {
  return "children" in n6 ? _5(n6.children) : n6.current.filter(({ el: t15 }) => t15.current !== null).filter(({ state: t15 }) => t15 === "visible").length > 0;
}
function ne5(n6, t15) {
  let r10 = s2(n6), o11 = (0, import_react41.useRef)([]), y7 = f6(), N5 = p(), p9 = o4((s17, e6 = j.Hidden) => {
    let a11 = o11.current.findIndex(({ el: i11 }) => i11 === s17);
    a11 !== -1 && (u(e6, { [j.Unmount]() {
      o11.current.splice(a11, 1);
    }, [j.Hidden]() {
      o11.current[a11].state = "hidden";
    } }), N5.microTask(() => {
      var i11;
      !_5(o11) && y7.current && ((i11 = r10.current) == null || i11.call(r10));
    }));
  }), x6 = o4((s17) => {
    let e6 = o11.current.find(({ el: a11 }) => a11 === s17);
    return e6 ? e6.state !== "visible" && (e6.state = "visible") : o11.current.push({ el: s17, state: "visible" }), () => p9(s17, j.Unmount);
  }), m9 = (0, import_react41.useRef)([]), c13 = (0, import_react41.useRef)(Promise.resolve()), u8 = (0, import_react41.useRef)({ enter: [], leave: [], idle: [] }), h9 = o4((s17, e6, a11) => {
    m9.current.splice(0), t15 && (t15.chains.current[e6] = t15.chains.current[e6].filter(([i11]) => i11 !== s17)), t15 == null || t15.chains.current[e6].push([s17, new Promise((i11) => {
      m9.current.push(i11);
    })]), t15 == null || t15.chains.current[e6].push([s17, new Promise((i11) => {
      Promise.all(u8.current[e6].map(([l10, T7]) => T7)).then(() => i11());
    })]), e6 === "enter" ? c13.current = c13.current.then(() => t15 == null ? void 0 : t15.wait.current).then(() => a11(e6)) : a11(e6);
  }), v4 = o4((s17, e6, a11) => {
    Promise.all(u8.current[e6].splice(0).map(([i11, l10]) => l10)).then(() => {
      var i11;
      (i11 = m9.current.shift()) == null || i11();
    }).then(() => a11(e6));
  });
  return (0, import_react41.useMemo)(() => ({ children: o11, register: x6, unregister: p9, onStart: h9, onStop: v4, wait: c13, chains: u8 }), [x6, p9, o11, h9, v4, u8, c13]);
}
function Se5() {
}
var xe8 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function re5(n6) {
  var r10;
  let t15 = {};
  for (let o11 of xe8)
    t15[o11] = (r10 = n6[o11]) != null ? r10 : Se5;
  return t15;
}
function Pe3(n6) {
  let t15 = (0, import_react41.useRef)(re5(n6));
  return (0, import_react41.useEffect)(() => {
    t15.current = re5(n6);
  }, [n6]), t15;
}
var Re4 = "div";
var ie3 = S2.RenderStrategy;
function ye4(n6, t15) {
  let { beforeEnter: r10, afterEnter: o11, beforeLeave: y7, afterLeave: N5, enter: p9, enterFrom: x6, enterTo: m9, entered: c13, leave: u8, leaveFrom: h9, leaveTo: v4, ...s17 } = n6, e6 = (0, import_react41.useRef)(null), a11 = y2(e6, t15), i11 = s17.unmount ? j.Unmount : j.Hidden, { show: l10, appear: T7, initial: se5 } = Ee3(), [g4, M9] = (0, import_react41.useState)(l10 ? "visible" : "hidden"), z5 = be3(), { register: F9, unregister: L5 } = z5, U5 = (0, import_react41.useRef)(null);
  (0, import_react41.useEffect)(() => F9(e6), [F9, e6]), (0, import_react41.useEffect)(() => {
    if (i11 === j.Hidden && e6.current) {
      if (l10 && g4 !== "visible") {
        M9("visible");
        return;
      }
      return u(g4, { ["hidden"]: () => L5(e6), ["visible"]: () => F9(e6) });
    }
  }, [g4, e6, F9, L5, l10, i11]);
  let j5 = s2({ enter: S9(p9), enterFrom: S9(x6), enterTo: S9(m9), entered: S9(c13), leave: S9(u8), leaveFrom: S9(h9), leaveTo: S9(v4) }), w5 = Pe3({ beforeEnter: r10, afterEnter: o11, beforeLeave: y7, afterLeave: N5 }), k2 = l2();
  (0, import_react41.useEffect)(() => {
    if (k2 && g4 === "visible" && e6.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e6, g4, k2]);
  let G4 = se5 && !T7, ae3 = (() => !k2 || G4 || U5.current === l10 ? "idle" : l10 ? "enter" : "leave")(), H8 = c11(0), le4 = o4((C4) => u(C4, { enter: () => {
    H8.addFlag(d4.Opening), w5.current.beforeEnter();
  }, leave: () => {
    H8.addFlag(d4.Closing), w5.current.beforeLeave();
  }, idle: () => {
  } })), ue6 = o4((C4) => u(C4, { enter: () => {
    H8.removeFlag(d4.Opening), w5.current.afterEnter();
  }, leave: () => {
    H8.removeFlag(d4.Closing), w5.current.afterLeave();
  }, idle: () => {
  } })), O4 = ne5(() => {
    M9("hidden"), L5(e6);
  }, z5);
  D7({ container: e6, classes: j5, direction: ae3, onStart: s2((C4) => {
    O4.onStart(e6, C4, le4);
  }), onStop: s2((C4) => {
    O4.onStop(e6, C4, ue6), C4 === "leave" && !_5(O4) && (M9("hidden"), L5(e6));
  }) }), (0, import_react41.useEffect)(() => {
    G4 && (i11 === j.Hidden ? U5.current = null : U5.current = l10);
  }, [l10, G4, g4]);
  let B4 = s17, Te4 = { ref: a11 };
  return T7 && l10 && (B4 = { ...B4, className: e2(s17.className, ...j5.current.enter, ...j5.current.enterFrom) }), import_react41.default.createElement(I7.Provider, { value: O4 }, import_react41.default.createElement(c5, { value: u(g4, { ["visible"]: d4.Open, ["hidden"]: d4.Closed }) | H8.flags }, X({ ourProps: Te4, theirProps: B4, defaultTag: Re4, features: ie3, visible: g4 === "visible", name: "Transition.Child" })));
}
function Ne5(n6, t15) {
  let { show: r10, appear: o11 = false, unmount: y7, ...N5 } = n6, p9 = (0, import_react41.useRef)(null), x6 = y2(p9, t15);
  l2();
  let m9 = C();
  if (r10 === void 0 && m9 !== null && (r10 = (m9 & d4.Open) === d4.Open), ![true, false].includes(r10))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c13, u8] = (0, import_react41.useState)(r10 ? "visible" : "hidden"), h9 = ne5(() => {
    u8("hidden");
  }), [v4, s17] = (0, import_react41.useState)(true), e6 = (0, import_react41.useRef)([r10]);
  l(() => {
    v4 !== false && e6.current[e6.current.length - 1] !== r10 && (e6.current.push(r10), s17(false));
  }, [e6, r10]);
  let a11 = (0, import_react41.useMemo)(() => ({ show: r10, appear: o11, initial: v4 }), [r10, o11, v4]);
  (0, import_react41.useEffect)(() => {
    if (r10)
      u8("visible");
    else if (!_5(h9))
      u8("hidden");
    else {
      let l10 = p9.current;
      if (!l10)
        return;
      let T7 = l10.getBoundingClientRect();
      T7.x === 0 && T7.y === 0 && T7.width === 0 && T7.height === 0 && u8("hidden");
    }
  }, [r10, h9]);
  let i11 = { unmount: y7 };
  return import_react41.default.createElement(I7.Provider, { value: h9 }, import_react41.default.createElement(A6.Provider, { value: a11 }, X({ ourProps: { ...i11, as: import_react41.Fragment, children: import_react41.default.createElement(oe3, { ref: x6, ...i11, ...N5 }) }, theirProps: {}, defaultTag: import_react41.Fragment, features: ie3, visible: c13 === "visible", name: "Transition" })));
}
function He5(n6, t15) {
  let r10 = (0, import_react41.useContext)(A6) !== null, o11 = C() !== null;
  return import_react41.default.createElement(import_react41.default.Fragment, null, !r10 && o11 ? import_react41.default.createElement(q5, { ref: t15, ...n6 }) : import_react41.default.createElement(oe3, { ref: t15, ...n6 }));
}
var q5 = D2(Ne5);
var oe3 = D2(ye4);
var De3 = D2(He5);
var tt2 = Object.assign(q5, { Child: De3, Root: q5 });
export {
  Wo as Combobox,
  St as Dialog,
  ve as Disclosure,
  Re as FocusTrap,
  Ht as Listbox,
  ot2 as Menu,
  Lt as Popover,
  te as Portal,
  yt as RadioGroup,
  Ge5 as Switch,
  rt as Tab,
  tt2 as Transition
};
//# sourceMappingURL=@headlessui_react.js.map
