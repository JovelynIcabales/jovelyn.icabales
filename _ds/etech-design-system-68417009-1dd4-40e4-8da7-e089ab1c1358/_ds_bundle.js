/* @ds-bundle: {"format":4,"namespace":"EtechDesignSystem_684170","components":[{"name":"CourseCard","sourcePath":"components/cards/CourseCard.jsx"},{"name":"FeatureItem","sourcePath":"components/cards/FeatureItem.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/AvatarGroup.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"CarouselNav","sourcePath":"components/layout/CarouselNav.jsx"},{"name":"NavBar","sourcePath":"components/layout/NavBar.jsx"},{"name":"PartnerStrip","sourcePath":"components/layout/PartnerStrip.jsx"},{"name":"PerkList","sourcePath":"components/layout/PerkList.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"Wordmark","sourcePath":"components/layout/Wordmark.jsx"}],"sourceHashes":{"components/cards/CourseCard.jsx":"7187bd5e46e9","components/cards/FeatureItem.jsx":"4325b0eebdbb","components/cards/StatCard.jsx":"79f6983cf49c","components/cards/TestimonialCard.jsx":"d6db2def2b3f","components/core/Avatar.jsx":"687859a5c056","components/core/AvatarGroup.jsx":"2c390a3f6110","components/core/Badge.jsx":"b3b46a964d7d","components/core/Button.jsx":"91dd27b64b3c","components/core/Icon.jsx":"826a5d0542e8","components/core/IconButton.jsx":"3eff27447d21","components/core/Rating.jsx":"926626dba08e","components/forms/SearchField.jsx":"f2f83acc96cd","components/layout/CarouselNav.jsx":"a09fc73016e3","components/layout/NavBar.jsx":"087c041e0f6f","components/layout/PartnerStrip.jsx":"8b98b733430b","components/layout/PerkList.jsx":"30fd2bb43154","components/layout/SectionHeading.jsx":"d73b47d22391","components/layout/Wordmark.jsx":"dbbf1096c8ae","ui_kits/website/Sections.jsx":"75778608ded3","ui_kits/website/data.js":"5214bc0291a1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EtechDesignSystem_684170 = window.EtechDesignSystem_684170 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 22,
  sm: 28,
  md: 40,
  lg: 48
};
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  style
}) {
  const px = typeof size === "number" ? size : SIZES[size] || SIZES.md;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    title: name || undefined,
    style: {
      width: px,
      height: px,
      flex: "none",
      borderRadius: 999,
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "var(--ink-100)" : "var(--gradient-brand)",
      color: "var(--white)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: Math.max(9, Math.round(px * 0.38)),
      letterSpacing: ".01em",
      boxShadow: ring ? "0 0 0 2px var(--white)" : "none",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/AvatarGroup.jsx
try { (() => {
function AvatarGroup({
  people = [],
  size = "xs",
  max = 5,
  overlap = 8,
  style
}) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    key: i,
    src: p.src,
    name: p.name,
    size: size,
    ring: true,
    style: {
      marginLeft: i === 0 ? 0 : -overlap
    }
  })), extra > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      color: "var(--ink-400)"
    }
  }, "+", extra) : null);
}
Object.assign(__ds_scope, { AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Etech has no icon assets of its own in the source mock. The reference uses simple
   1.75px-stroke line icons (book, users, chevron, play) plus a few solid glyphs in
   colour wells. SUBSTITUTION: Lucide (CDN) is the closest match for stroke weight and
   corner geometry. Swap ICON_CDN for the real set when it exists. */
const ICON_CDN = "https://unpkg.com/lucide@0.451.0/dist/umd/lucide.min.js";
let pending = null;
function ensureLucide() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.lucide) return Promise.resolve(window.lucide);
  if (!pending) {
    pending = new Promise(resolve => {
      const s = document.createElement("script");
      s.src = ICON_CDN;
      s.onload = () => resolve(window.lucide);
      s.onerror = () => resolve(null);
      document.head.appendChild(s);
    });
  }
  return pending;
}
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let alive = true;
    ensureLucide().then(lucide => {
      const el = ref.current;
      if (!alive || !el || !lucide) return;
      el.innerHTML = '<i data-lucide="' + name + '"></i>';
      lucide.createIcons({
        nameAttr: "data-lucide",
        attrs: {
          width: size,
          height: size,
          "stroke-width": strokeWidth
        }
      });
    });
    return () => {
      alive = false;
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color,
      flex: "none",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureItem.jsx
try { (() => {
const WELLS = {
  violet: {
    background: "var(--accent-1-well)",
    color: "var(--violet-500)"
  },
  pink: {
    background: "var(--accent-2-well)",
    color: "var(--pink-400)"
  },
  brand: {
    background: "var(--gradient-brand)",
    color: "var(--white)"
  }
};
function FeatureItem({
  icon,
  title,
  children,
  tone = "violet",
  wellSize = 48,
  style
}) {
  const w = WELLS[tone] || WELLS.violet;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: wellSize,
      height: wellSize,
      flex: "none",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...w
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(wellSize * 0.46),
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: 1.7,
      color: "var(--text-body)",
      maxWidth: 380
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  icon,
  iconTone = "violet",
  children,
  align = "center",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: "var(--white)",
      borderRadius: "var(--radius-md)",
      padding: "12px 16px",
      boxShadow: "var(--shadow-float)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      flex: "none",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: iconTone === "pink" ? "var(--accent-2-well)" : "var(--accent-1-well)",
      color: iconTone === "pink" ? "var(--pink-400)" : "var(--violet-500)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    strokeWidth: 2
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: 2
    }
  }, value ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: "var(--weight-bold)",
      color: "var(--violet-600)",
      lineHeight: 1.2
    }
  }, value) : null, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--ink-700)",
      fontWeight: "var(--weight-medium)",
      whiteSpace: "nowrap"
    }
  }, label) : null, children));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  violet: {
    background: "var(--violet-100)",
    color: "var(--violet-700)"
  },
  pink: {
    background: "var(--pink-100)",
    color: "var(--pink-500)"
  },
  brand: {
    background: "var(--gradient-brand)",
    color: "var(--white)"
  },
  neutral: {
    background: "var(--ink-100)",
    color: "var(--ink-700)"
  }
};
function Badge({
  children,
  tone = "violet",
  icon,
  dot = false,
  style
}) {
  const t = TONES[tone] || TONES.violet;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-badge)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--weight-medium)",
      lineHeight: "var(--lh-label)",
      ...t,
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: "currentColor",
      opacity: 0.85
    }
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2.25
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/CourseCard.jsx
try { (() => {
function Meta({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-sm)",
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), children);
}
function CourseCard({
  image,
  category,
  categoryTone = "violet",
  rating,
  title,
  classes,
  students,
  price,
  instructor,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      padding: 12,
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transform: hover ? "var(--hover-lift)" : "none",
      transition: "var(--transition-base)",
      cursor: onClick ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-image)",
      overflow: "hidden",
      background: "var(--ink-100)",
      aspectRatio: "16 / 11"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      padding: "0 4px"
    }
  }, category ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: categoryTone,
    dot: true
  }, category) : /*#__PURE__*/React.createElement("span", null), rating ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "brand",
    icon: "star"
  }, rating) : null), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      padding: "0 4px",
      fontSize: "var(--text-h4)",
      lineHeight: 1.32,
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      padding: "0 4px"
    }
  }, classes ? /*#__PURE__*/React.createElement(Meta, {
    icon: "book-open"
  }, classes) : null, students ? /*#__PURE__*/React.createElement(Meta, {
    icon: "users"
  }, students) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "4px 4px 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, price), instructor ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: instructor.avatar,
    name: instructor.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-500)"
    }
  }, instructor.name)) : null));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    height: 36,
    padding: "0 20px",
    fontSize: 13
  },
  md: {
    height: 44,
    padding: "0 26px",
    fontSize: 14
  },
  lg: {
    height: 52,
    padding: "0 34px",
    fontSize: 15
  }
};
const VARIANTS = {
  primary: {
    base: {
      background: "var(--gradient-brand)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-button)"
    },
    hover: {
      boxShadow: "0 12px 26px rgba(168,85,247,.36)",
      filter: "saturate(112%)"
    }
  },
  secondary: {
    base: {
      background: "var(--white)",
      color: "var(--ink-900)",
      border: "1px solid var(--border-input)",
      boxShadow: "var(--shadow-xs)"
    },
    hover: {
      borderColor: "var(--violet-300)",
      color: "var(--violet-600)"
    }
  },
  soft: {
    base: {
      background: "var(--violet-100)",
      color: "var(--violet-700)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--violet-200)"
    }
  },
  ghost: {
    base: {
      background: "transparent",
      color: "var(--ink-900)",
      border: "1px solid transparent"
    },
    hover: {
      color: "var(--violet-600)"
    }
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  onClick,
  style,
  type = "button"
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0",
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : "pointer",
      borderRadius: "var(--radius-button)",
      transition: "var(--transition-base)",
      opacity: disabled ? 0.45 : 1,
      ...s,
      ...v.base,
      ...(hover && !disabled ? v.hover : null),
      transform: down && !disabled ? "var(--press-scale)" : "none",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 15 : 17,
    strokeWidth: 2
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === "sm" ? 15 : 17,
    strokeWidth: 2
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const TONES = {
  brand: {
    background: "var(--gradient-brand)",
    color: "var(--white)",
    boxShadow: "var(--shadow-button)"
  },
  soft: {
    background: "var(--violet-100)",
    color: "var(--violet-600)",
    boxShadow: "none"
  },
  pink: {
    background: "var(--pink-100)",
    color: "var(--pink-500)",
    boxShadow: "none"
  },
  white: {
    background: "var(--white)",
    color: "var(--ink-700)",
    boxShadow: "var(--shadow-sm)"
  }
};
function IconButton({
  icon,
  label,
  tone = "brand",
  size = 40,
  onClick,
  ariaLabel,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const t = TONES[tone] || TONES.brand;
  const circle = /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-base)",
      transform: down ? "var(--press-scale)" : hover ? "scale(1.06)" : "none",
      ...t
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45),
    strokeWidth: 2
  }));
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": ariaLabel || label || icon,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: 0,
      border: 0,
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, circle, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body)",
      fontWeight: "var(--weight-semibold)",
      color: hover ? "var(--violet-600)" : "var(--ink-900)",
      transition: "var(--transition-base)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function Rating({
  value = 5,
  outOf = 5,
  size = 13,
  showValue = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      color: "var(--star)",
      ...style
    }
  }, Array.from({
    length: outOf
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      opacity: i < Math.round(value) ? 1 : 0.25,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: size,
    strokeWidth: 0.5,
    style: {
      fill: "currentColor"
    }
  }))), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--ink-700)"
    }
  }, value.toFixed(1)) : null);
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  name,
  role,
  avatar,
  rating = 5,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: 22,
      boxShadow: "var(--shadow-card)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar,
    name: name,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--ink-400)"
    }
  }, role), /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    size: 12,
    style: {
      marginTop: 2
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: 1.75,
      color: "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function SearchField({
  placeholder = "Search for over 50+ courses",
  value,
  onChange,
  onSubmit,
  buttonLabel = "Search",
  size = "lg",
  style
}) {
  const [inner, setInner] = React.useState("");
  const [focus, setFocus] = React.useState(false);
  const v = value !== undefined ? value : inner;
  const h = size === "lg" ? 56 : 48;
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(v);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "100%",
      maxWidth: 560,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: h,
      padding: "0 20px",
      background: "var(--surface-input)",
      borderRadius: "var(--radius-input)",
      border: "1px solid " + (focus ? "var(--violet-300)" : "var(--border-subtle)"),
      boxShadow: focus ? "0 0 0 4px var(--focus-ring)" : "var(--shadow-sm)",
      transition: "var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 17,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("input", {
    value: v,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => {
      setInner(e.target.value);
      onChange && onChange(e.target.value);
    },
    style: {
      flex: 1,
      border: 0,
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body)",
      color: "var(--ink-900)"
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    size: size === "lg" ? "lg" : "md",
    style: {
      height: h,
      borderRadius: "var(--radius-pill)"
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/layout/CarouselNav.jsx
try { (() => {
function CarouselNav({
  index = 0,
  total = 3,
  onPrev,
  onNext,
  tone = "light",
  style
}) {
  const pad = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    tone: tone === "light" ? "white" : "soft",
    size: 34,
    onClick: onPrev,
    ariaLabel: "Previous"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: tone === "light" ? "var(--white)" : "var(--ink-500)",
      letterSpacing: ".04em"
    }
  }, pad(index + 1), "/", pad(total)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    tone: tone === "light" ? "white" : "soft",
    size: 34,
    onClick: onNext,
    ariaLabel: "Next"
  }));
}
Object.assign(__ds_scope, { CarouselNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CarouselNav.jsx", error: String((e && e.message) || e) }); }

// components/layout/PartnerStrip.jsx
try { (() => {
function PartnerStrip({
  partners = [],
  height = 64,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gradient-brand)",
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 56,
      padding: "0 24px",
      overflow: "hidden",
      ...style
    }
  }, partners.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: "var(--weight-semibold)",
      color: "var(--white)",
      opacity: 0.94,
      whiteSpace: "nowrap",
      letterSpacing: "-.01em"
    }
  }, p)));
}
Object.assign(__ds_scope, { PartnerStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PartnerStrip.jsx", error: String((e && e.message) || e) }); }

// components/layout/PerkList.jsx
try { (() => {
function PerkList({
  items = [],
  columns = 2,
  tone = "violet",
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))",
      columnGap: 32,
      rowGap: 12,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--text-sm)",
      color: "var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      flex: "none",
      background: tone === "pink" ? "var(--pink-400)" : "var(--violet-500)"
    }
  }), item)));
}
Object.assign(__ds_scope, { PerkList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PerkList.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function SectionHeading({
  title,
  accent,
  accentPosition = "start",
  subtitle,
  align = "center",
  tone = "dark",
  size = "h2",
  maxWidth = 560,
  style
}) {
  const onBrand = tone === "light";
  const accentEl = /*#__PURE__*/React.createElement("span", {
    key: "a",
    style: {
      color: onBrand ? "var(--violet-100)" : "var(--text-accent)"
    }
  }, accent);
  const parts = accent ? accentPosition === "start" ? [accentEl, " ", title] : [title, " ", accentEl] : [title];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align === "center" ? "center" : "left",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: align === "center" ? 720 : 620,
      fontSize: size === "h1" ? "var(--text-h1)" : "var(--text-h2)",
      lineHeight: size === "h1" ? "var(--lh-h1)" : "var(--lh-h2)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)",
      color: onBrand ? "var(--white)" : "var(--text-heading)"
    }
  }, parts), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth,
      fontSize: "var(--text-sm)",
      lineHeight: 1.8,
      color: onBrand ? "var(--text-on-brand-dim)" : "var(--text-body)"
    }
  }, subtitle) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/Wordmark.jsx
try { (() => {
/* No logo file was supplied with the source mock — the brand mark in the reference is the
   word "Etech." set in the display face at bold weight with a full stop. This component
   renders exactly that, in type. Do not substitute a drawn mark. */
function Wordmark({
  size = 22,
  tone = "dark",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: size,
      letterSpacing: "-.02em",
      lineHeight: 1,
      color: tone === "light" ? "var(--white)" : "var(--ink-900)",
      ...style
    }
  }, "Etech", /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === "light" ? "var(--white)" : "var(--violet-500)"
    }
  }, "."));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavBar.jsx
try { (() => {
function NavLink({
  item,
  open,
  onToggle
}) {
  const [hover, setHover] = React.useState(false);
  const active = hover || open;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: item.items ? onToggle : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "6px 2px",
      border: 0,
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: "var(--weight-medium)",
      color: active ? "var(--violet-600)" : "var(--ink-700)",
      transition: "var(--transition-base)"
    }
  }, item.label, item.items ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    strokeWidth: 2,
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "var(--transition-base)"
    }
  }) : null), item.items && open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 12px)",
      left: -14,
      minWidth: 190,
      zIndex: 20,
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      padding: 8,
      boxShadow: "var(--shadow-card-hover)",
      border: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column"
    }
  }, item.items.map(sub => /*#__PURE__*/React.createElement("a", {
    key: sub,
    href: "#",
    style: {
      padding: "9px 12px",
      borderRadius: "var(--radius-sm)",
      fontSize: 13,
      color: "var(--ink-700)",
      textDecoration: "none"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--violet-50)";
      e.currentTarget.style.color = "var(--violet-600)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "var(--ink-700)";
    }
  }, sub))) : null);
}
function NavBar({
  items = [],
  compact = false,
  onMenu,
  style
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: compact ? "18px 20px" : "26px 0",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: compact ? 19 : 22
  }), compact ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onMenu,
    "aria-label": "Menu",
    style: {
      width: 34,
      height: 30,
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-subtle)",
      background: "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 16,
    strokeWidth: 2,
    color: "var(--ink-900)"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 34
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(NavLink, {
    key: item.label,
    item: item,
    open: open === i,
    onToggle: () => setOpen(open === i ? null : i)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm"
  }, "Sign In"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, "Free Trial"))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Badge,
  Avatar,
  AvatarGroup,
  Icon,
  SearchField,
  CourseCard,
  TestimonialCard,
  FeatureItem,
  StatCard,
  NavBar,
  Wordmark,
  SectionHeading,
  PartnerStrip,
  PerkList,
  CarouselNav
} = window.EtechDesignSystem_684170;
const D = window.EtechData;
function Container({
  children,
  compact,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: compact ? "0 20px" : "0 40px",
      ...style
    }
  }, children);
}
function MobileMenu({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 40,
      background: "rgba(46,42,59,.34)",
      backdropFilter: "blur(2px)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--white)",
      margin: 12,
      borderRadius: "var(--radius-xl)",
      padding: 20,
      boxShadow: "var(--shadow-card-hover)",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 19
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 0,
      background: "none",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18,
    color: "var(--ink-500)"
  }))), D.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: "#",
    style: {
      padding: "11px 4px",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--ink-700)",
      borderBottom: "1px solid var(--border-subtle)",
      textDecoration: "none"
    }
  }, n.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true
  }, "Sign In"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    fullWidth: true
  }, "Free Trial"))));
}
function Hero({
  compact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-tint)",
      paddingBottom: compact ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement(Container, {
    compact: compact
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: compact ? "1fr" : "1.02fr .98fr",
      gap: compact ? 8 : 32,
      alignItems: "center",
      paddingTop: compact ? 8 : 24,
      paddingBottom: compact ? 8 : 40,
      textAlign: compact ? "center" : "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: compact ? 14 : 26,
      alignItems: compact ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: compact ? "var(--text-display-sm)" : "var(--text-display)",
      lineHeight: "var(--lh-display)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)",
      maxWidth: compact ? 320 : 520
    }
  }, "Develop your skills in a new ", compact ? "& " : "and ", "unique way"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: compact ? 320 : 430,
      fontSize: compact ? "var(--text-body-sm)" : "var(--text-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, "Explore a transformative approach to skill development on our online learning platform. Uncover a new realm of learning experiences and elevate your expertise in unique ways."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: compact ? 16 : 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: compact ? "sm" : "lg"
  }, "Enroll Now"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "play",
    label: "What's Etech?",
    size: compact ? 30 : 40
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/hero-student.png",
    alt: "Student holding notebooks",
    style: {
      width: "100%",
      maxWidth: compact ? 300 : 520,
      objectFit: "contain"
    }
  })))));
}
function SearchCourses({
  compact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: compact ? "34px 0 26px" : "var(--section-y) 0 72px"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    compact: compact,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: compact ? 18 : 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: compact ? "var(--text-h2-sm)" : 28,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "Search Courses"), /*#__PURE__*/React.createElement(SearchField, {
    size: compact ? "md" : "lg",
    style: {
      maxWidth: compact ? 340 : 520
    }
  })));
}
function Benefits({
  compact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: compact ? "8px 0 34px" : "0 0 var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    compact: compact
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: compact ? "1fr" : ".85fr 1.15fr",
      gap: compact ? 26 : 60,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      border: "1.5px dashed var(--border-dashed-violet)",
      borderRadius: "var(--radius-squircle)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/collage-4up.png",
    alt: "Etech students",
    style: {
      width: compact ? 240 : 330,
      height: compact ? 240 : 330,
      objectFit: "cover",
      borderRadius: 56
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: compact ? 20 : 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    accent: "Benefits",
    title: "From Our Online Learning",
    style: {
      maxWidth: 360
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: compact ? 18 : 22
    }
  }, D.benefits.map(b => /*#__PURE__*/React.createElement(FeatureItem, {
    key: b.title,
    icon: b.icon,
    tone: b.tone,
    title: b.title,
    wellSize: compact ? 40 : 48
  }, b.body)))))));
}
function PopularCourses({
  compact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-section)",
      padding: compact ? "36px 0" : "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    compact: compact,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: compact ? 26 : 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    title: "Our Popular Courses",
    subtitle: "Discover our most sought-after courses, carefully curated to meet the demands of today's learners. Dive into engaging content crafted for success in every step of your educational journey.",
    maxWidth: 520
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: compact ? "1fr" : "repeat(3, 1fr)",
      gap: "var(--grid-gap)",
      width: "100%"
    }
  }, D.courses.map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.title
  }, c, {
    onClick: () => {}
  }))))));
}
function BecomeInstructor({
  compact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-tint)",
      padding: compact ? "36px 0" : "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    compact: compact
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: compact ? "1fr" : "1.15fr .85fr",
      gap: compact ? 28 : 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: compact ? 20 : 26,
      alignItems: compact ? "center" : "flex-start",
      textAlign: compact ? "center" : "left"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: compact ? "center" : "left",
    title: "If You Are A Certified Teacher Then",
    accent: "Become An Instructor",
    accentPosition: "end",
    subtitle: "Unlock the opportunity to inspire and educate by joining our team of instructors. If you're a certified teacher, elevate your impact and share your expertise with learners worldwide.",
    maxWidth: 400
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: compact ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: compact ? 20 : "var(--text-h3)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "Enjoy Many Perks"), /*#__PURE__*/React.createElement(PerkList, {
    items: D.perks,
    columns: compact ? 1 : 2,
    style: {
      textAlign: "left"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: compact ? "md" : "lg"
  }, "Become an instructor")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 9,
      border: "1.5px dashed var(--border-dashed-pink)",
      borderRadius: "999px 999px 28px 28px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/instructor-teacher.png",
    alt: "Certified teacher",
    style: {
      width: compact ? 210 : 290,
      height: compact ? 260 : 360,
      objectFit: "cover",
      borderRadius: "999px 999px 22px 22px"
    }
  }))))));
}
function Testimonials({
  compact
}) {
  const [page, setPage] = React.useState(0);
  const pages = D.testimonials;
  const set = pages[page % pages.length];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-section)",
      padding: compact ? "36px 0 44px" : "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    compact: compact,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: compact ? 26 : 44
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    title: "Student's",
    accent: "Testimonials",
    accentPosition: "end",
    subtitle: "Here's what our students have to say about their transformative learning experiences. Real stories, real growth. Discover firsthand the impact our courses have had on their lives.",
    maxWidth: 520
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: compact ? "1fr" : "repeat(3, 1fr)",
      gap: "var(--grid-gap)",
      width: "100%"
    }
  }, set.map(t => /*#__PURE__*/React.createElement(TestimonialCard, {
    key: t.name,
    name: t.name,
    role: t.role,
    rating: 5
  }, t.quote))), /*#__PURE__*/React.createElement(CarouselNav, {
    index: page,
    total: pages.length,
    tone: "light",
    onPrev: () => setPage((page + pages.length - 1) % pages.length),
    onNext: () => setPage((page + 1) % pages.length)
  })));
}
function HomePage({
  compact = false
}) {
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-tint)"
    }
  }, compact ? /*#__PURE__*/React.createElement(NavBar, {
    compact: true,
    onMenu: () => setMenu(true)
  }) : /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(NavBar, {
    items: D.nav
  }))), /*#__PURE__*/React.createElement(Hero, {
    compact: compact
  }), /*#__PURE__*/React.createElement(PartnerStrip, {
    partners: D.partners,
    height: compact ? 44 : 64
  }), /*#__PURE__*/React.createElement(SearchCourses, {
    compact: compact
  }), /*#__PURE__*/React.createElement(Benefits, {
    compact: compact
  }), /*#__PURE__*/React.createElement(PopularCourses, {
    compact: compact
  }), /*#__PURE__*/React.createElement(BecomeInstructor, {
    compact: compact
  }), /*#__PURE__*/React.createElement(Testimonials, {
    compact: compact
  }), /*#__PURE__*/React.createElement(MobileMenu, {
    open: menu,
    onClose: () => setMenu(false)
  }));
}
Object.assign(window, {
  Container,
  Hero,
  SearchCourses,
  Benefits,
  PopularCourses,
  BecomeInstructor,
  Testimonials,
  HomePage,
  MobileMenu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.EtechData = {
  nav: [{
    label: "Courses",
    items: ["Web Design", "Data Science", "Marketing"]
  }, {
    label: "Teachers",
    items: ["All instructors", "Become an instructor"]
  }, {
    label: "Offers",
    items: ["Course bundles", "Scholarships"]
  }, {
    label: "Contact"
  }],
  partners: ["Northwind", "Lumen", "Fabrikam", "Contoso", "Aperture"],
  benefits: [{
    icon: "graduation-cap",
    tone: "violet",
    title: "Online Degrees",
    body: "Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities."
  }, {
    icon: "book-open",
    tone: "pink",
    title: "Short Courses",
    body: "Enhance your skills with our concise and focused short courses, designed for quick and effective learning."
  }, {
    icon: "user-round",
    tone: "violet",
    title: "Training From Experts",
    body: "Immerse yourself in knowledge with industry experts guiding you through hands-on experience."
  }, {
    icon: "play",
    tone: "pink",
    title: "1.5k+ Video Courses",
    body: "Dive into a vast library of over 1.5k video courses covering many subjects, offering a visual learning experience."
  }],
  courses: [{
    image: "../../assets/imagery/course-web-design.png",
    category: "Web Design",
    categoryTone: "violet",
    rating: "4.9",
    title: "Web Design & Development",
    classes: "20 Classes",
    students: "180 Students",
    price: "$560.00",
    instructor: {
      name: "J. Morgan"
    }
  }, {
    image: "../../assets/imagery/course-wireframing.png",
    category: "UI/UX Design",
    categoryTone: "pink",
    rating: "4.8",
    title: "Wireframing & Prototyping",
    classes: "4 Classes",
    students: "400 Students",
    price: "$160.00",
    instructor: {
      name: "Jordan Re"
    }
  }, {
    image: "../../assets/imagery/course-python.png",
    category: "Data Science",
    categoryTone: "violet",
    rating: "4.9",
    title: "Python For Data Science",
    classes: "16 Classes",
    students: "130 Students",
    price: "$432.00",
    instructor: {
      name: "Alex Taylor"
    }
  }],
  perks: ["Global Impact", "Creative Freedom", "Flexible Schedule", "Monetize Your Expertise", "Innovative Teaching Tools", "Professional Development", "Recognition And Reputation", "Networking Opportunities"],
  testimonials: [[{
    name: "Alexa Rodriguez",
    role: "Web Designer",
    quote: "Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!"
  }, {
    name: "Emily Chen",
    role: "UX Researcher",
    quote: "Exceptional courses! The practical insights and flexible learning structure have been instrumental in my professional growth."
  }, {
    name: "James Johnson",
    role: "Web Developer",
    quote: "Highly recommend! The personalised feedback and real-world application in the courses have elevated my understanding."
  }], [{
    name: "Priya Nair",
    role: "Data Analyst",
    quote: "The short courses fit around a full-time job, and the instructors answer questions the same day. Genuinely useful."
  }, {
    name: "Marcus Bell",
    role: "Product Designer",
    quote: "I came for one wireframing course and stayed for four. The pacing respects your time and your money."
  }, {
    name: "Sofia Marino",
    role: "Front-end Engineer",
    quote: "Every module ends with something I could ship at work the next morning. That is rare in online learning."
  }]]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.CarouselNav = __ds_scope.CarouselNav;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.PartnerStrip = __ds_scope.PartnerStrip;

__ds_ns.PerkList = __ds_scope.PerkList;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
