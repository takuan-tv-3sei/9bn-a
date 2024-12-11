"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[421], {
    67538: (e, t, r) => {
        r.d(t, {
            _: () => s
        });
        var n = r(34843)
          , i = r(96540)
          , l = r(90731)
          , a = r(37921);
        let s = () => {
            let e = (0,
            n.md)(a.Dr)
              , [t,r] = (0,
            i.useState)([]);
            return (0,
            i.useEffect)( () => {
                (async () => {
                    try {
                        let {facilitatorList: t} = await (0,
                        l.H_)({
                            accessToken: e
                        })
                          , n = t.map(e => {
                            let {facilitatorId: t, name: r} = e;
                            return {
                                value: t.toString(),
                                label: r
                            }
                        }
                        );
                        n.unshift({
                            value: "",
                            label: " "
                        }),
                        r(n)
                    } catch (e) {
                        r([])
                    }
                }
                )()
            }
            , []),
            {
                facilitators: t
            }
        }
    }
    ,
    37032: (e, t, r) => {
        r.d(t, {
            _: () => i
        });
        var n = r(96540);
        let i = () => {
            let e = (0,
            n.useCallback)(e => {
                e.preventDefault()
            }
            , []);
            return {
                preventTouchScroll: (0,
                n.useCallback)( () => {
                    document.addEventListener("touchmove", e, {
                        passive: !1
                    })
                }
                , [e]),
                allowTouchScroll: (0,
                n.useCallback)( () => {
                    document.removeEventListener("touchmove", e)
                }
                , [e])
            }
        }
    }
    ,
    41373: (e, t, r) => {
        r.d(t, {
            Y$: () => u,
            qV: () => g,
            TS: () => p
        });
        var n = r(74848)
          , i = r(80662)
          , l = r(79369)
          , a = r(96540)
          , s = r(59483)
          , o = r(23372)
          , c = r(84436)
          , d = r(59091);
        let u = a.memo(e => {
            let {src: t, isSpeaking: r, zIndex: i} = e
              , [l,d] = (0,
            a.useState)("idle")
              , [u,h] = (0,
            a.useState)(0)
              , p = (0,
            a.useRef)()
              , [m,{sound: g, duration: j, pause: v, stop: f}] = (0,
            s.A)(t)
              , b = j ? j / 1e3 : 0
              , w = (0,
            a.useCallback)( () => {
                u > b && h(0),
                d("play"),
                m()
            }
            , [m, u, b])
              , y = (0,
            a.useCallback)( () => {
                d("pause"),
                v()
            }
            , [v])
              , S = (0,
            a.useCallback)( () => {
                "play" === l ? y() : w()
            }
            , [l, w, y])
              , C = (0,
            a.useCallback)( (e, t) => {
                "number" == typeof t && (h(t),
                null == g || g.seek(t))
            }
            , [g]);
            return (0,
            a.useEffect)( () => {
                if ("play" !== l)
                    return;
                let e = () => {
                    h(e => e + .1),
                    p.current = window.setTimeout(e, 100)
                }
                ;
                return e(),
                () => {
                    window.clearTimeout(p.current)
                }
            }
            , [l]),
            (0,
            a.useEffect)( () => {
                u > b && (d("pause"),
                f(),
                window.clearTimeout(p.current))
            }
            , [u, b, f]),
            (0,
            a.useEffect)( () => {
                r && y()
            }
            , [r, y]),
            (0,
            a.useEffect)( () => () => {
                f()
            }
            , [f]),
            (0,
            n.jsxs)(c.VP, {
                width: 352,
                alignItems: "center",
                children: [(0,
                n.jsx)(o.sP, {
                    name: "play" === l ? "pause" : "sound",
                    sx: {
                        zIndex: i
                    },
                    onClick: S,
                    disabled: r
                }), (0,
                n.jsx)(x, {
                    value: u,
                    step: .1,
                    max: b,
                    sx: {
                        marginTop: .5,
                        py: 2.25,
                        zIndex: i
                    },
                    onChange: C,
                    disabled: r
                })]
            })
        }
        );
        u.displayName = "AudioPlayer";
        let x = (0,
        l.A)(i.Ay)( () => ({
            width: "320px",
            "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                backgroundColor: d.Tj.primary,
                "&:focus, &:hover, &.Mui-active": {
                    height: 32,
                    width: 32,
                    boxShadow: "none"
                },
                "&:before": {
                    boxShadow: "none"
                }
            },
            "& .MuiSlider-track": {
                border: "none",
                height: 4
            },
            "& .MuiSlider-rail": {
                height: 2,
                backgroundColor: d.Tj.onSurfaceWeak3
            }
        }));
        var h = r(41917);
        let p = e => {
            let {zIndex: t, onClick: r} = e;
            return (0,
            n.jsx)(h.A, {
                variant: "outlined",
                onClick: r,
                disableRipple: !0,
                sx: [{
                    height: 32,
                    width: 56,
                    minWidth: 56,
                    borderRadius: "8px",
                    boxShadow: 0,
                    backgroundColor: d.Tj.white,
                    borderColor: d.Tj.onSurfaceWeak3,
                    borderWidth: 2,
                    zIndex: t,
                    "&:hover": {
                        boxShadow: 0,
                        backgroundColor: d.Tj.white,
                        borderColor: d.Tj.onSurfaceWeak3,
                        borderWidth: 2
                    }
                }],
                children: (0,
                n.jsx)(o.Bj, {
                    name: "zoom",
                    size: 24,
                    color: "onSurface"
                })
            })
        }
        ;
        var m = r(22130);
        r(34811);
        let g = a.memo(e => {
            let {src: t, style: r={}, weight: i="normal"} = e;
            "bold" === i && (r = {
                ...r,
                fontWeight: "bold"
            });
            let l = function(e) {
                let t;
                let r = "<math>"
                  , n = "</math>"
                  , i = [];
                for (; 0 <= (t = e.search(r)); ) {
                    let l = e.substring(0, t);
                    i.push(l);
                    let a = (e = e.substring(t)).search(n);
                    if (a < 0)
                        break;
                    let s = a + n.length
                      , o = e.substring(0, s).replace(RegExp(r, "g"), "").replace(RegExp(n, "g"), "");
                    try {
                        let t = m.A.renderToString(o, {
                            output: "html"
                        });
                        i.push(t),
                        e = e.substring(s)
                    } catch (e) {
                        break
                    }
                }
                return 0 !== e.length && i.push(e),
                i.join("")
            }(t);
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("div", {
                    style: r,
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                })
            })
        }
        );
        g.displayName = "InlineQML"
    }
    ,
    18742: (e, t, r) => {
        r.d(t, {
            z: () => g
        });
        var n = r(74848)
          , i = r(42907)
          , l = r(4743)
          , a = r(16957)
          , s = r(34843)
          , o = r(96540)
          , c = r(40961)
          , d = r(83054)
          , u = r(69460)
          , x = r(23630)
          , h = r(94096)
          , p = r(77114);
        let m = "State Machine"
          , g = o.memo(e => {
            var t, r;
            let {result: i, height: l=500, width: a=500, portalElem: o, handleOnPlay: c, handleOnStop: d} = e
              , u = (0,
            s.md)(h.bQ);
            return (0,
            n.jsx)(j, {
                result: i,
                postPartCountUp: null !== (r = null == u ? void 0 : null === (t = u.feedBackCommandOnAnswerCorrect) || void 0 === t ? void 0 : t.additionalIntParam) && void 0 !== r ? r : 0,
                height: l,
                width: a,
                portalElem: o,
                handleOnPlay: c,
                handleOnStop: d
            })
        }
        )
          , j = e => {
            var t;
            let {result: r, postPartCountUp: g, height: j=500, width: v=500, portalElem: f=p.y, handleOnPlay: b, handleOnStop: w} = e
              , y = (0,
            s.md)(h.XO)
              , [S,C] = (0,
            o.useState)(!1)
              , [k,A] = (0,
            o.useState)()
              , T = (0,
            o.useRef)(!1)
              , I = (0,
            i.A)()
              , _ = (0,
            o.useMemo)( () => I.zIndex.popup, [I])
              , {rive: E, RiveComponent: R} = (0,
            a.useRive)({
                src: d.r.popupOX,
                artboard: "Artboard",
                stateMachines: m,
                autoplay: !0,
                onPlay: () => {
                    b && b()
                }
                ,
                onStop: () => {
                    !T.current && (T.current = !0,
                    w && w())
                }
            })
              , N = e => {
                let t = e.data
                  , r = t.properties;
                "Sound" === t.name && void 0 !== r.name ? A(new Audio((0,
                u.o)("sound/".concat(r.name, ".mp3")))) : A(void 0),
                "exit" === t.name ? C(!0) : C(!1)
            }
              , M = (0,
            a.useStateMachineInput)(E, m, "correct" === r || "incorrect" === r ? "default" : "kanji_correct" === r || "kanji_incorrect" === r ? "kanji" : "redo")
              , O = (0,
            a.useStateMachineInput)(E, m, "correction")
              , L = (0,
            a.useStateMachineInput)(E, m, "num");
            (0,
            o.useEffect)( () => {
                E && (M && M.fire(),
                O && (O.value = "correct" === r || "kanji_correct" === r),
                L && (L.value = g),
                E.setTextRunValue("correctNum", "".concat(g)),
                E.on(a.EventType.RiveEvent, N))
            }
            , [O, L, g, r, E, M]),
            (0,
            o.useEffect)( () => {
                k && y && k.play()
            }
            , [k, y]),
            (0,
            o.useEffect)( () => {
                E && S && E.stop()
            }
            , [S, E]);
            let q = x.cV + 16;
            return (0,
            c.createPortal)((0,
            n.jsx)(l.A, {
                position: "body" === f ? "fixed" : "absolute",
                width: 1,
                height: 1,
                sx: {
                    inset: "body" === f ? "0 0 0 ".concat(q, "px") : 0,
                    zIndex: _
                },
                children: (0,
                n.jsx)(l.A, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 1,
                    height: 1,
                    children: (0,
                    n.jsx)(l.A, {
                        height: j,
                        width: v,
                        children: (0,
                        n.jsx)(R, {})
                    })
                })
            }), "body" === f ? document.body : null !== (t = document.getElementById(f)) && void 0 !== t ? t : document.body)
        }
        ;
        g.displayName = "Popup"
    }
    ,
    40689: (e, t, r) => {
        r.d(t, {
            of: () => H,
            p9: () => x,
            nV: () => R,
            zD: () => h.z,
            i: () => W,
            fQ: () => V,
            qb: () => g,
            A_: () => I,
            zq: () => y
        });
        var n = r(74848)
          , i = r(4743)
          , l = r(40961)
          , a = r(23372)
          , s = r(35645)
          , o = r(96540);
        let c = () => {
            let[e,t] = (0,
            o.useState)(0)
              , r = (0,
            o.useCallback)( () => {
                t(window.innerWidth)
            }
            , []);
            return (0,
            o.useEffect)( () => (r(),
            window.addEventListener("resize", r),
            () => {
                window.removeEventListener("resize", r)
            }
            )),
            {
                windowWidth: e
            }
        }
        ;
        var d = r(84436)
          , u = r(59091);
        let x = e => {
            let {onClick: t} = e
              , {windowHeight: r} = (0,
            s.x)()
              , {windowWidth: o} = c();
            return (0,
            l.createPortal)((0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(i.A, {
                    height: r,
                    width: o,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    bgcolor: u.Tj.onSurface,
                    sx: {
                        opacity: .7
                    }
                }), (0,
                n.jsx)(i.A, {
                    height: r,
                    width: o,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0,
                    n.jsxs)(d.VP, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0,
                        n.jsx)(a.LP, {
                            name: "popupFinish01",
                            height: 271,
                            width: 498
                        }), (0,
                        n.jsx)(d.hK, {
                            y: 12
                        }), (0,
                        n.jsx)(a.yh, {
                            text: "結果を見る",
                            onClick: t
                        })]
                    })
                })]
            }), document.body)
        }
        ;
        var h = r(18742)
          , p = r(67667)
          , m = r(96995);
        let g = o.memo(e => {
            let {text: t, bgColor: r, enableTapRemove: l=!0, fadeOut: s=!0} = e
              , [c,d] = (0,
            o.useState)(!0)
              , x = (0,
            o.useCallback)( () => {
                l && d(!1)
            }
            , [l]);
            return (0,
            o.useEffect)( () => {
                if (!s)
                    return;
                let e = setTimeout( () => {
                    d(!1)
                }
                , 5e3);
                return () => {
                    clearTimeout(e)
                }
            }
            , [s]),
            (0,
            n.jsx)(p.N, {
                children: c && (0,
                n.jsx)(m.P.div, {
                    initial: {
                        opacity: 0,
                        y: -100,
                        scale: 1
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 0,
                        scale: 1,
                        transition: {
                            duration: 1
                        }
                    },
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsx)(i.A, {
                        height: 56,
                        width: "fit-content",
                        minWidth: 216,
                        borderRadius: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 24px",
                        sx: {
                            backgroundColor: "default" === r ? (0,
                            u.au)("onSurface", .8) : (0,
                            u.au)("important", .8)
                        },
                        onClick: x,
                        children: (0,
                        n.jsx)(a.EY, {
                            size: "lg",
                            color: "surface",
                            fontWeight: "bold",
                            children: t
                        })
                    })
                })
            })
        }
        );
        g.displayName = "Snackbar";
        var j = r(87901)
          , v = r(48191)
          , f = r(23217);
        let b = e => {
            let {name: t, onClick: r} = e;
            return (0,
            n.jsx)(a.u4, {
                bgcolor: "onSurface",
                rippleColor: "surface",
                disabled: !1,
                onClick: r,
                sx: {
                    height: 48,
                    width: 48,
                    borderRadius: 24,
                    opacity: .5,
                    ":hover": {
                        opacity: .25
                    }
                },
                children: (0,
                n.jsx)(a.Bj, {
                    name: t,
                    size: 40,
                    color: "surface"
                })
            })
        }
        ;
        var w = r(82945);
        let y = e => {
            let {src: t, onClose: r} = e
              , [l,a] = (0,
            o.useState)({
                width: 0,
                height: 0
            })
              , [s,c] = (0,
            o.useState)({
                width: 0,
                height: 0
            })
              , x = l.width / l.height
              , h = s.width / s.height
              , p = x >= h
              , m = p ? (innerHeight - 64) * h : innerWidth - 64
              , g = p ? innerHeight - 64 : (innerWidth - 64) / h
              , y = p ? s.height > g : s.width > m
              , S = y ? m : s.width
              , C = y ? g : s.height;
            (0,
            o.useEffect)( () => {
                let e = () => {
                    a({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                ;
                return e(),
                window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("resize", e)
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                if (!t)
                    return;
                let e = new Image;
                e.src = t;
                let r = () => {
                    c({
                        width: e.width,
                        height: e.height
                    })
                }
                ;
                return e.addEventListener("load", r),
                () => {
                    e.removeEventListener("load", r)
                }
            }
            , [t]);
            let k = (0,
            o.useCallback)(e => {
                let {scale: t, positionX: n, positionY: i} = e.state;
                1 === t && (-100 === n || 100 === n || -100 === i || 100 === i) && r()
            }
            , [r]);
            return t ? (0,
            n.jsx)(j.A, {
                children: (0,
                n.jsxs)(v.A, {
                    open: !!t,
                    onClick: r,
                    sx: {
                        zIndex: w.w4.zIndex.modal
                    },
                    children: [(0,
                    n.jsx)(i.A, {
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        children: (0,
                        n.jsx)(b, {
                            name: "close",
                            onClick: r
                        })
                    }), (0,
                    n.jsx)(f.GT, {
                        initialScale: 1,
                        centerOnInit: !0,
                        onPanningStop: k,
                        children: (0,
                        n.jsx)(f.WZ, {
                            children: (0,
                            n.jsx)(d.ov, {
                                width: innerWidth,
                                height: innerHeight,
                                children: (0,
                                n.jsx)(i.A, {
                                    display: "flex",
                                    bgcolor: u.Tj.surface,
                                    borderRadius: 2,
                                    padding: 2,
                                    onClick: e => {
                                        e.stopPropagation()
                                    }
                                    ,
                                    children: (0,
                                    n.jsx)("img", {
                                        width: S,
                                        height: C,
                                        alt: "",
                                        src: t,
                                        style: {
                                            objectFit: "contain"
                                        }
                                    })
                                })
                            })
                        })
                    })]
                })
            }) : null
        }
        ;
        var S = r(79219)
          , C = r(73090)
          , k = r(82893)
          , A = r(23112);
        o.memo(e => {
            let {id: t, value: r, menuList: i, label: l, fullWidth: s=!1, onChange: c} = e
              , d = l ? "".concat(l, "-label") : void 0
              , [u,x] = (0,
            o.useState)(!1)
              , h = (0,
            o.useCallback)( () => x(!0), [])
              , p = (0,
            o.useCallback)( () => x(!1), [])
              , m = (0,
            o.useCallback)(e => {
                c(e.target.value),
                x(!1)
            }
            , [c]);
            return (0,
            n.jsxs)(S.A, {
                focused: u,
                fullWidth: s,
                sx: {
                    width: "100%",
                    "& .MuiOutlinedInput-input": {
                        fontSize: "1.25rem",
                        paddingLeft: "24px",
                        paddingTop: "16px"
                    }
                },
                children: [d && (0,
                n.jsx)(C.A, {
                    id: d,
                    children: l
                }), (0,
                n.jsx)(k.A, {
                    id: t,
                    value: r,
                    label: l,
                    labelId: d,
                    onOpen: h,
                    onClose: p,
                    onChange: m,
                    sx: {
                        height: 48,
                        minWidth: 120
                    },
                    children: i.map(e => {
                        let {value: t, label: r} = e;
                        return (0,
                        n.jsx)(A.A, {
                            value: t,
                            children: (0,
                            n.jsx)(a.EY, {
                                color: "black",
                                size: "lg",
                                lineClamp: 1,
                                children: r
                            })
                        }, t)
                    }
                    )
                })]
            })
        }
        ).displayName = "Select";
        var T = r(51059);
        let I = o.memo(e => {
            let {type: t="text", onChange: r, maxlength: i, value: l, size: a="medium", children: s, ...c} = e
              , d = (0,
            o.useCallback)(e => null == r ? void 0 : r(e.target.value), [r])
              , [u,x] = (0,
            o.useState)(!1);
            return (0,
            n.jsx)(T.A, {
                type: t,
                onChange: d,
                ...c,
                inputProps: {
                    maxLength: i
                },
                InputLabelProps: {
                    shrink: void 0 !== l && "" !== l || u
                },
                value: l,
                size: a,
                onFocus: () => {
                    x(!0)
                }
                ,
                onBlur: () => {
                    x(!1)
                }
                ,
                children: s
            })
        }
        );
        I.displayName = "TextField";
        var _ = r(28590)
          , E = r(41373);
        let R = e => {
            let {mode: t, value: r, placeHolder: i, onChange: l} = e
              , a = (0,
            o.useId)()
              , s = i.useLatexInLabel ? "<math>".concat(i.label, "</math>") : i.label
              , c = s ? (0,
            n.jsx)(q, {
                text: s
            }) : "回答を入力"
              , d = i.useLatexInSuffix ? "<math>".concat(i.suffix, "</math>") : i.suffix;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(M, {
                    id: a,
                    value: r,
                    label: c,
                    suffix: d,
                    onChange: l
                });
            case "Correct":
                return (0,
                n.jsx)(O, {
                    id: a,
                    value: r,
                    label: c,
                    suffix: d
                });
            case "Incorrect":
                return (0,
                n.jsx)(L, {
                    id: a,
                    value: r,
                    label: c,
                    suffix: d
                })
            }
        }
          , N = {
            ".MuiInputLabel-outlined": {
                lineHeight: 2.8
            },
            ".MuiInputLabel-shrink": {
                lineHeight: 1.7
            },
            ".MuiOutlinedInput-input": {
                lineHeight: 1.7
            },
            ".Mui-disabled.MuiInputLabel-shrink": {
                color: u.Tj.onSurface
            },
            ".Mui-disabled.MuiOutlinedInput-input": {
                color: u.Tj.onSurface,
                WebkitTextFillColor: u.Tj.onSurface
            },
            ".Mui-disabled:hover": {
                background: "inherit"
            }
        }
          , M = e => {
            let {id: t, value: r, label: i, suffix: l, onChange: a} = e;
            return (0,
            n.jsx)(I, {
                id: t,
                name: t,
                size: "small",
                fullWidth: !0,
                multiline: !0,
                maxRows: 3,
                label: i,
                value: r,
                onChange: a,
                onKeyPress: e => {
                    "Enter" === e.key && e.preventDefault()
                }
                ,
                sx: {
                    ".MuiInputLabel-outlined": {
                        lineHeight: 2.8
                    },
                    ".MuiInputLabel-shrink": {
                        lineHeight: 1.7
                    },
                    ".MuiOutlinedInput-input": {
                        lineHeight: 1.7
                    }
                },
                InputProps: (null == l ? void 0 : l.length) ? {
                    endAdornment: (0,
                    n.jsx)(P, {
                        text: l
                    })
                } : void 0
            })
        }
          , O = e => {
            let {id: t, value: r, label: l, suffix: s} = e;
            return (0,
            n.jsxs)(i.A, {
                position: "relative",
                children: [(0,
                n.jsx)(I, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    maxRows: 3,
                    label: l,
                    value: r,
                    disabled: !0,
                    sx: {
                        ...N,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: u.Tj.correctWeak
                        }
                    },
                    InputProps: (null == s ? void 0 : s.length) ? {
                        endAdornment: (0,
                        n.jsx)(P, {
                            text: s
                        })
                    } : void 0
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , L = e => {
            let {id: t, value: r, label: l, suffix: s} = e;
            return (0,
            n.jsxs)(i.A, {
                position: "relative",
                children: [(0,
                n.jsx)(I, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    maxRows: 3,
                    label: l,
                    value: r,
                    disabled: !0,
                    sx: {
                        ...N,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: u.Tj.importantWeak
                        }
                    },
                    InputProps: (null == s ? void 0 : s.length) ? {
                        endAdornment: (0,
                        n.jsx)(P, {
                            text: s
                        })
                    } : void 0
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , q = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(E.qV, {
                src: t,
                style: {
                    fontSize: 20,
                    color: u.Tj.onSurfaceWeak2
                }
            })
        }
          , P = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(_.A, {
                position: "end",
                sx: {
                    alignSelf: "end",
                    height: "inherit",
                    marginBottom: 1.5
                },
                children: (0,
                n.jsx)(E.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: u.Tj.onSurfaceWeak2
                    }
                })
            })
        }
          , W = o.memo(e => {
            let {width: t=435, height: r=230, handleOnPlay: s, handleOnStop: o} = e;
            return (0,
            l.createPortal)((0,
            n.jsx)(i.A, {
                position: "fixed",
                top: "50%",
                left: "50%",
                width: t,
                height: r,
                margin: "auto",
                sx: {
                    transform: "translate(-50%, -50%)"
                },
                children: (0,
                n.jsx)(a.LP, {
                    name: "popupStart5minReview",
                    height: r,
                    width: t,
                    handleOnPlay: s,
                    handleOnStop: o
                })
            }), document.body)
        }
        );
        W.displayName = "Popup5minReview";
        var z = r(37032);
        let V = e => {
            let {src: t, width: r, height: i, isTouchScroll: l} = e
              , {preventTouchScroll: a, allowTouchScroll: s} = (0,
            z._)()
              , c = (0,
            o.useCallback)(e => {
                l || e.touches.length < 2 ? a() : s()
            }
            , [l, a, s])
              , d = (0,
            o.useCallback)(e => {
                (l || e.touches.length < 2) && s()
            }
            , [l, s]);
            return (0,
            n.jsx)("div", {
                onTouchStart: c,
                onTouchEnd: d,
                children: (0,
                n.jsx)("img", {
                    src: t,
                    width: r,
                    height: i,
                    alt: "",
                    style: {
                        height: "auto"
                    }
                })
            })
        }
        ;
        var D = r(14953);
        let H = r.n(D)()( () => Promise.all([r.e(905), r.e(73)]).then(r.bind(r, 85073)).then(e => e.DrawingArea), {
            loadableGenerated: {
                webpack: () => [85073]
            },
            ssr: !1
        })
    }
    ,
    79829: (e, t, r) => {
        r.d(t, {
            y: () => n
        });
        let n = (0,
        r(52035).eU)(void 0)
    }
    ,
    36471: (e, t, r) => {
        r.d(t, {
            Ml: () => a,
            Of: () => A,
            Og: () => T,
            jc: () => R,
            Xn: () => w,
            WS: () => v,
            uy: () => y,
            kI: () => x,
            $D: () => E
        });
        var n = r(74848)
          , i = r(96540)
          , l = r(23372);
        let a = i.memo(e => {
            let {isOpen: t, onClickCancel: r, onClickAnswer: i} = e;
            return (0,
            n.jsx)(l.lG, {
                isOpen: t,
                title: "このまま解答しますか？",
                body: "解答が未入力です。",
                actions: (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.Pn, {
                        label: "キャンセル",
                        color: "primary",
                        onClick: r
                    }), (0,
                    n.jsx)(l.Pn, {
                        label: "解答する",
                        color: "primary",
                        onClick: i
                    })]
                }),
                onClose: r
            })
        }
        );
        a.displayName = "EmptyAnswerDialog";
        var s = r(4743)
          , o = r(37032)
          , c = r(59091)
          , d = r(69460)
          , u = r(41373);
        let x = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, mode: l="Default", page: a, maxPage: o, height: d=240, prefixLabel: u, suffixLabel: x, useLatexInLabel: v=!1, useLatexInSuffix: f=!1, hasBackgroundImage: b=!0, onClickLeft: w, onClickRight: y} = e
              , S = (0,
            i.useMemo)( () => {
                switch (l) {
                case "Default":
                    return (0,
                    n.jsx)(h, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: b,
                        children: r
                    });
                case "Slider":
                    return (0,
                    n.jsx)(p, {
                        page: a,
                        maxPage: o,
                        onClickLeft: w,
                        onClickRight: y,
                        children: (0,
                        n.jsx)(h, {
                            ref: t,
                            height: d,
                            hasBackgroundImage: b,
                            children: r
                        })
                    });
                case "Correct":
                    return (0,
                    n.jsx)(m, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: b,
                        children: r
                    });
                case "Incorrect":
                    return (0,
                    n.jsx)(g, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: b,
                        children: r
                    })
                }
            }
            , [r, l, a, o, d, t, b, w, y])
              , C = "Slider" === l ? 48 : 16
              , k = {
                border: "4px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: "8px",
                ..."100%" === d ? {
                    height: d
                } : {}
            };
            return (0,
            n.jsx)("div", {
                style: k,
                children: (0,
                n.jsxs)(s.A, {
                    height: d,
                    position: "relative",
                    display: "flex",
                    children: [S, u && (0,
                    n.jsx)(j, {
                        type: "prefix",
                        text: u,
                        sideMove: C,
                        useLatex: v
                    }), x && (0,
                    n.jsx)(j, {
                        type: "suffix",
                        text: x,
                        sideMove: C,
                        useLatex: f
                    })]
                })
            })
        }
        );
        x.displayName = "WritingArea";
        let h = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, height: i, hasBackgroundImage: l} = e
              , {preventTouchScroll: a, allowTouchScroll: c} = (0,
            o._)();
            return (0,
            n.jsx)(s.A, {
                ref: t,
                flexGrow: 0,
                position: "relative",
                width: "100%",
                height: i,
                sx: {
                    overflow: "hidden",
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    ...l ? {
                        backgroundImage: "url(".concat((0,
                        d.o)("png/handwriting.png"), ")"),
                        backgroundSize: "215px 105px",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    } : void 0
                },
                onPointerEnter: a,
                onPointerLeave: c,
                children: r
            })
        }
        );
        h.displayName = "Default";
        let p = e => {
            let {children: t, page: r, maxPage: i, onClickLeft: l, onClickRight: a} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(s.A, {
                    flexGrow: 0,
                    children: (0,
                    n.jsx)(v, {
                        type: "left",
                        width: 32,
                        disabled: 1 === r,
                        onClick: l
                    })
                }), t, (0,
                n.jsx)(s.A, {
                    flexGrow: 0,
                    children: (0,
                    n.jsx)(v, {
                        type: "right",
                        width: 32,
                        disabled: r === i,
                        onClick: a
                    })
                })]
            })
        }
          , m = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, height: i, prefixLabel: a, suffixLabel: o, hasBackgroundImage: c} = e;
            return (0,
            n.jsxs)(h, {
                ref: t,
                height: i,
                prefixLabel: a,
                suffixLabel: o,
                hasBackgroundImage: c,
                children: [(0,
                n.jsx)(s.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 144,
                    height: 144,
                    children: (0,
                    n.jsx)(l._n, {
                        name: "correctionO",
                        width: 144,
                        height: 144
                    })
                }), r]
            })
        }
        );
        m.displayName = "Correct";
        let g = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, height: i, prefixLabel: a, suffixLabel: o, hasBackgroundImage: c} = e;
            return (0,
            n.jsxs)(h, {
                ref: t,
                height: i,
                prefixLabel: a,
                suffixLabel: o,
                hasBackgroundImage: c,
                children: [(0,
                n.jsx)(s.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 144,
                    height: 144,
                    children: (0,
                    n.jsx)(l._n, {
                        name: "correctionX",
                        width: 144,
                        height: 144
                    })
                }), r]
            })
        }
        );
        g.displayName = "Incorrect";
        let j = e => {
            let {text: t, type: r, sideMove: i, useLatex: l} = e;
            return (0,
            n.jsx)(u.qV, {
                src: l ? "<math>".concat(t, "</math>") : t,
                style: {
                    position: "absolute",
                    fontSize: 40,
                    color: c.Tj.onSurfaceWeak2,
                    ..."prefix" === r ? {
                        top: 16,
                        left: i
                    } : {
                        bottom: 16,
                        right: i
                    }
                }
            })
        }
          , v = i.memo(e => {
            let {type: t, width: r, disabled: i, onClick: a} = e;
            return (0,
            n.jsx)("button", {
                disabled: i,
                style: {
                    width: r,
                    height: "100%",
                    padding: 0,
                    border: "none",
                    background: (0,
                    c.au)("onSurfaceWeak4", .5),
                    cursor: "pointer",
                    ..."left" === t && {
                        borderRight: "1px solid ".concat(c.Tj.onSurfaceWeak3)
                    },
                    ..."right" === t && {
                        borderLeft: "1px solid ".concat(c.Tj.onSurfaceWeak3)
                    }
                },
                onClick: a,
                children: (0,
                n.jsx)(l.Bj, {
                    name: "left" === t ? "triangleLeft" : "triangleRight",
                    size: 32,
                    color: i ? "onSurfaceWeak3" : "primary"
                })
            })
        }
        );
        v.displayName = "SliderButton";
        var f = r(13565)
          , b = r(84436);
        let w = i.memo(e => {
            let {isOpen: t, x: r, y: a, onClick: s} = e
              , {analyticsEvent: o} = (0,
            f.yw)();
            return ((0,
            i.useEffect)( () => {
                t && o({
                    eventName: "AP_手書き入力問題「再接続」表示"
                })
            }
            , [t]),
            t) ? (0,
            n.jsxs)(l.u4, {
                sx: {
                    position: "absolute",
                    justifyContent: "normal",
                    top: a,
                    left: null != r ? r : "calc(50% - ".concat(136, "px)"),
                    width: 272,
                    height: 48,
                    bgcolor: (0,
                    c.au)("onSurface", .8),
                    borderRadius: 32,
                    zIndex: 22
                },
                onClick: s,
                children: [(0,
                n.jsx)(b.hK, {
                    x: 3
                }), (0,
                n.jsx)(l.EY, {
                    color: "white",
                    children: "接続が不安定です"
                }), (0,
                n.jsx)(b.hK, {
                    x: 2
                }), (0,
                n.jsxs)(b.fI, {
                    alignItems: "center",
                    pr: 1.5,
                    pl: .5,
                    py: .5,
                    height: 32,
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                    bgcolor: c.Tj.onSurface,
                    borderRadius: 32,
                    children: [(0,
                    n.jsx)(l.Bj, {
                        name: "reload",
                        size: 32
                    }), "再接続"]
                }), (0,
                n.jsx)(b.hK, {
                    x: 1
                })]
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
        );
        function y(e) {
            switch (e.recognitionType) {
            case "math":
            default:
                return "Math";
            case "alphabet":
                return "English";
            case "japanese":
                return "Japanese"
            }
        }
        w.displayName = "ReconnectMessage";
        var S = r(34843)
          , C = r(22130);
        r(34811);
        var k = r(18011);
        let A = i.memo(e => {
            let {text: t, id: r, style: l} = e
              , a = (0,
            S.Xr)(k.z)
              , s = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)( () => {
                if (s.current)
                    try {
                        a(!1),
                        C.A.render(t, s.current),
                        s.current.querySelectorAll(".katex-html").forEach(e => {
                            e.style.whiteSpace = "nowrap"
                        }
                        )
                    } catch (e) {
                        console.error("KaTeXのレンダリングエラー:", e),
                        e instanceof Error && a(!0)
                    }
            }
            , [t, a]),
            (0,
            n.jsx)("div", {
                id: r,
                style: l,
                ref: s
            })
        }
        );
        A.displayName = "Katex";
        let T = i.memo(e => {
            let {isOpen: t, title: r, onClickCancel: i, onClickContinue: a, onClose: s} = e;
            return (0,
            n.jsx)(l.lG, {
                isOpen: t,
                title: r,
                body: (0,
                n.jsx)(l.EY, {
                    lineHeight: "relaxed",
                    children: "書き直しをおねがいします。いらない点や線があれば消してください。"
                }),
                actions: (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.Pn, {
                        label: "このまま解答する",
                        color: "primary",
                        onClick: a
                    }), (0,
                    n.jsx)(l.Pn, {
                        label: "書き直す",
                        color: "primary",
                        onClick: i
                    })]
                }),
                onClose: s
            })
        }
        );
        T.displayName = "KatexErrorDialog";
        var I = r(26892)
          , _ = r(94096);
        let E = () => {
            let e = (0,
            S.md)(_.HK)
              , t = (0,
            S.Xr)(_.Dl)
              , r = "eraser" === e ? "eraser" : "pen";
            return {
                onPointerDown: (0,
                i.useCallback)( () => {
                    switch (r) {
                    case "pen":
                        t({
                            type: I.w2.ANSWERVIEW_INPUT_HANDWRITE_START
                        });
                        return;
                    case "eraser":
                        t({
                            type: I.w2.ANSWERVIEW_INPUT_ERASER_START
                        });
                        return
                    }
                }
                , [r, t]),
                onPointerUp: (0,
                i.useCallback)( () => {
                    switch (r) {
                    case "pen":
                        t({
                            type: I.w2.ANSWERVIEW_INPUT_HANDWRITE_END
                        });
                        return;
                    case "eraser":
                        t({
                            type: I.w2.ANSWERVIEW_INPUT_ERASER_END
                        });
                        return
                    }
                }
                , [r, t])
            }
        }
          , R = i.memo(e => {
            let {isOpen: t, onClick: r} = e;
            return (0,
            n.jsx)(l.lG, {
                isOpen: t,
                title: "文字数が多すぎます",
                body: "300文字以内で解答してください。",
                actions: (0,
                n.jsx)(n.Fragment, {
                    children: (0,
                    n.jsx)(l.Pn, {
                        label: "OK",
                        color: "primary",
                        onClick: r
                    })
                }),
                onClose: r
            })
        }
        );
        R.displayName = "OverflowDialog"
    }
    ,
    18011: (e, t, r) => {
        r.d(t, {
            z: () => n
        });
        let n = (0,
        r(52035).eU)(!1)
    }
    ,
    22841: (e, t, r) => {
        r.d(t, {
            x: () => a
        });
        var n = r(74848)
          , i = r(4743)
          , l = r(23372);
        let a = e => {
            let {mode: t, startRecording: r, stopRecording: i, isPlaying: l, playAudio: a} = e;
            switch (t) {
            case "idle":
            default:
                return (0,
                n.jsx)(s, {
                    onClick: r
                });
            case "recording":
                return (0,
                n.jsx)(o, {
                    onClick: i
                });
            case "stopped":
                return (0,
                n.jsx)(c, {
                    onClick: a,
                    isPlaying: l
                })
            }
        }
          , s = e => {
            let {onClick: t} = e;
            return (0,
            n.jsx)(i.A, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.O0, {
                        name: "microphone",
                        onClick: t
                    })
                })
            })
        }
          , o = e => {
            let {onClick: t} = e;
            return (0,
            n.jsxs)(i.A, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)(l.LP, {
                    width: 550,
                    height: 120,
                    name: "soundwaveSpeaking"
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.O0, {
                        name: "stop",
                        onClick: t
                    })
                })]
            })
        }
          , c = e => {
            let {onClick: t, isPlaying: r} = e;
            return (0,
            n.jsxs)(i.A, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)(l.LP, {
                    width: 550,
                    height: 120,
                    name: "soundwaveSpeaking",
                    play: r
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.sP, {
                        name: "sound",
                        onClick: t
                    })
                })]
            })
        }
    }
    ,
    92357: (e, t, r) => {
        r.d(t, {
            $Q: () => o,
            RN: () => i,
            io: () => u,
            g7: () => d,
            OJ: () => l,
            XO: () => c
        });
        var n = r(96540);
        let i = e => {
            let[t,r] = (0,
            n.useState)(void 0)
              , [i,l] = (0,
            n.useState)(!1)
              , a = (0,
            n.useCallback)( () => {
                if (!e)
                    return;
                t && t.pause();
                let n = new Audio(e);
                r(n),
                n.play()
            }
            , [e, t])
              , s = (0,
            n.useCallback)( () => {
                t && (t.pause(),
                t.currentTime = 0,
                r(void 0),
                l(!1))
            }
            , [t]);
            return (0,
            n.useEffect)( () => {
                if (!t)
                    return;
                let e = () => l(!0)
                  , r = () => l(!1);
                return t.addEventListener("play", e),
                t.addEventListener("ended", r),
                () => {
                    t.removeEventListener("play", e),
                    t.removeEventListener("ended", r)
                }
            }
            , [t]),
            {
                isPlaying: i,
                playAudio: a,
                stopAudio: s
            }
        }
          , l = () => {
            let[e,t] = (0,
            n.useState)();
            return {
                showing: e,
                show: (0,
                n.useCallback)(e => t(e), []),
                hide: (0,
                n.useCallback)( () => t(void 0), [])
            }
        }
        ;
        var a = r(26892)
          , s = r(95292);
        let o = () => {
            let[e,t] = (0,
            n.useState)(new Uint8Array);
            return {
                prepare: (0,
                n.useCallback)( (e, r, n) => {
                    if (!e) {
                        r();
                        return
                    }
                    n(),
                    t(e)
                }
                , []),
                fix: (0,
                n.useCallback)(t => {
                    t({
                        answer: {
                            result: a.aJ.CORRECT,
                            textType: 2,
                            text: "",
                            wrongCount: 0
                        },
                        answerLogResource: {
                            buffer: e,
                            type: s.w6.ENGLISH_AUDIO
                        },
                        viewStateJSON: {}
                    })
                }
                , [e])
            }
        }
          , c = () => {
            let[e,t] = (0,
            n.useState)(!1);
            return {
                show: (0,
                n.useCallback)( () => t(!0), []),
                hide: (0,
                n.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , d = () => {
            let[e,t] = (0,
            n.useState)(!1);
            return {
                show: (0,
                n.useCallback)( () => t(!0), []),
                hide: (0,
                n.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , u = () => {
            let[e,t] = (0,
            n.useState)(!1);
            return {
                show: (0,
                n.useCallback)( () => t(!0), []),
                hide: (0,
                n.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
    }
    ,
    2421: (e, t, r) => {
        r.d(t, {
            xD: () => iH,
            Fk: () => i2,
            Fy: () => W
        });
        var n = r(74848)
          , i = r(4743)
          , l = r(34843)
          , a = r(96540)
          , s = r(23372)
          , o = r(13565)
          , c = r(84436)
          , d = r(59091);
        let u = e => {
            let {question: t, isSpeaking: r, showImageDialog: i} = e;
            switch (t.type) {
            case "A1":
                return (0,
                n.jsx)(h, {
                    source: t
                });
            case "A2":
                return (0,
                n.jsx)(p, {
                    source: t
                });
            case "A2Selection":
                return (0,
                n.jsx)(m, {
                    source: t
                });
            case "B1":
                return (0,
                n.jsx)(g, {
                    source: t
                });
            case "B2":
                return (0,
                n.jsx)(j, {
                    source: t
                });
            case "B2Selection":
                return (0,
                n.jsx)(v, {
                    source: t
                });
            case "ClassicQubena":
                return (0,
                n.jsx)(f, {
                    source: t,
                    showImageDialog: i
                });
            case "EnglishWordL":
                return (0,
                n.jsx)(b, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordL1":
                return (0,
                n.jsx)(w, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordL2":
                return (0,
                n.jsx)(y, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordR":
                return (0,
                n.jsx)(S, {
                    source: t
                });
            case "EnglishWordRL":
                return (0,
                n.jsx)(C, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordRLv2":
                return (0,
                n.jsx)(k, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordW":
                return (0,
                n.jsx)(A, {
                    source: t
                });
            case "EnglishWordWL":
                return (0,
                n.jsx)(T, {
                    source: t,
                    isSpeaking: r
                });
            case "Html":
                return (0,
                n.jsx)(I, {
                    source: t
                });
            case "KanjiNazori":
                return (0,
                n.jsx)(_, {
                    source: t
                });
            case "KanjiSelfJudgement":
                return (0,
                n.jsx)(E, {
                    source: t
                });
            case "KanjiYomi":
                return (0,
                n.jsx)(R, {
                    source: t
                });
            case "Simple":
                return (0,
                n.jsx)(N, {
                    source: t,
                    isSpeaking: r,
                    showImageDialog: i
                })
            }
        }
        ;
        var x = r(41373);
        let h = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , a = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , s = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), s.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , p = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , a = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , s = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [0 === l.length && (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "並べ替えて完成させよ。"
                }), l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), s.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , m = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , a = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , s = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), s.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , g = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , a = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , s = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , d = i.aSideAtomName;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [0 === l.length && (0,
                n.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    n.jsx)("b", {
                        children: d
                    }), " の説明文である。", (0,
                    n.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる語句を書け。"]
                }), l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), s.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , j = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , a = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , s = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , d = i.aSideAtomName;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [0 === l.length && (0,
                n.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    n.jsx)("b", {
                        children: d
                    }), " の説明文である。", (0,
                    n.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる語句を書け。"]
                }), l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), s.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , v = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , a = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , s = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , d = i.aSideAtomName;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [0 === l.length ? (0,
                n.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    n.jsx)("b", {
                        children: d
                    }), " の説明文である。", (0,
                    n.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる選択肢を選べ。"]
                }) : l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), s.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , f = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.image;
            return i ? (0,
            n.jsx)("div", {
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                children: (0,
                n.jsxs)(c.VP, {
                    alignItems: "center",
                    gap: 2,
                    children: [(0,
                    n.jsx)("img", {
                        className: "question-content-image",
                        src: i,
                        width: "100%"
                    }), (0,
                    n.jsx)(x.TS, {
                        zIndex: 1,
                        onClick: () => {
                            r && r(i)
                        }
                    })]
                }, 0)
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , b = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.audio;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    n.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語の意味または用法を選びましょう。"
                    }), i && (0,
                    n.jsx)("div", {
                        className: "audio",
                        children: (0,
                        n.jsx)(c.ov, {
                            children: (0,
                            n.jsx)(x.Y$, {
                                src: i,
                                zIndex: 1,
                                isSpeaking: r
                            })
                        })
                    })]
                })
            })
        }
          , w = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.audio;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    n.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語を選びましょう。"
                    }), i && (0,
                    n.jsx)("div", {
                        className: "audio",
                        children: (0,
                        n.jsx)(c.ov, {
                            children: (0,
                            n.jsx)(x.Y$, {
                                src: i,
                                zIndex: 1,
                                isSpeaking: r
                            })
                        })
                    })]
                })
            })
        }
          , y = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.audio;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    n.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語の意味または用法を選びましょう。"
                    }), i && (0,
                    n.jsx)("div", {
                        className: "audio",
                        children: (0,
                        n.jsx)(c.ov, {
                            children: (0,
                            n.jsx)(x.Y$, {
                                src: i,
                                zIndex: 1,
                                isSpeaking: r
                            })
                        })
                    })]
                })
            })
        }
          , S = e => {
            let {source: t} = e
              , r = t.parameter.mainText;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "英語の意味または用法を選びましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: r
                    })
                })]
            })
        }
          , C = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.parameter.mainText
              , l = t.audio;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "英語の意味または用法を選びましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: i
                    })
                }), l && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.ov, {
                        children: (0,
                        n.jsx)(x.Y$, {
                            src: l,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                })]
            })
        }
          , k = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.parameter.mainText.replaceAll("\n", "<br/>")
              , l = t.audio;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsxs)("p", {
                    className: "question-text",
                    children: [(0,
                    n.jsx)("b", {
                        children: "下線部"
                    }), " ", "の英語の意味または用法を選びましょう。分からない場合は，前後の単語や文全体の意味から予想してみましょう。"]
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: i
                    })
                }), l && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.ov, {
                        children: (0,
                        n.jsx)(x.Y$, {
                            src: l,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                })]
            })
        }
          , A = e => {
            let {source: t} = e
              , {parameter: r} = t
              , {questionText: i, variantForm: l, baseForm: a, wordUsageAndMeaning: s} = r;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: i ? "次の日本語を英語に直しましょう。" : "次の英語を書きましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: ( () => {
                            switch (l) {
                            case "3単現":
                                return "".concat(a, "の変化形で, 主語が3人称単数で現在の時に使う語");
                            case "過去形":
                                return "".concat(a, "の過去形");
                            case "過去分詞形":
                                return "".concat(a, "の過去分詞形");
                            default:
                                return "".concat(s)
                            }
                        }
                        )()
                    })
                }), i && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)("br", {}), (0,
                    n.jsx)(x.qV, {
                        src: i
                    })]
                })]
            })
        }
          , T = e => {
            let {source: t, isSpeaking: r} = e
              , {parameter: i} = t
              , l = t.audio
              , {targetWord: a, partOfSpeech: s, variantForm: o, baseForm: d, wordUsageAndMeaning: u} = i
              , h = a.split(" ").length;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "熟語" === s || "名詞" === s && h >= 3 ? "語句を並べかえて次の英語を完成させましょう。" : "文字を並べかえて次の英語を完成させましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: ( () => {
                            switch (o) {
                            case "3単現":
                                return "".concat(d, "の変化形で, 主語が3人称単数で現在の時に使う語");
                            case "過去形":
                                return "".concat(d, "の過去形");
                            case "過去分詞形":
                                return "".concat(d, "の過去分詞形");
                            default:
                                return "".concat(u)
                            }
                        }
                        )()
                    })
                }), l && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.ov, {
                        children: (0,
                        n.jsx)(x.Y$, {
                            src: l,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                })]
            })
        }
          , I = e => {
            let {source: t} = e
              , r = t.parameter.html || "<h2>no content</h2>";
            return (0,
            n.jsx)("div", {
                className: "question-area",
                style: {
                    fontSize: "20px"
                },
                children: (0,
                n.jsx)(x.qV, {
                    src: r
                })
            })
        }
          , _ = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, a = i.questionWordPronunciation, s = i.example;
            switch (i.grade) {
            case 1:
                t = "<ruby><rb>下線部</rb><rp>(</rp><rt>かせんぶ</rt><rp>)</rp></ruby>を<ruby><rb>漢字</rb><rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>で<ruby><rb>書</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>いてみましょう。";
                break;
            case 2:
                t = "下<ruby><rb>線部</rb><rp>(</rp><rt>せんぶ</rt><rp>)</rp></ruby>を<ruby><rb>漢</rb><rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字で<ruby><rb>書</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>いてみましょう。";
                break;
            case 3:
                t = "下線<ruby><rb>部</rb><rp>(</rp><rt>ぶ</rt><rp>)</rp></ruby>を<ruby><rb>漢</rb><rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字で書いてみましょう。";
                break;
            default:
                t = "下線部を漢字で書いてみましょう。"
            }
            let o = s.replace(l, "<u>".concat(a, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: o
                    })
                })]
            })
        }
          , E = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, a = i.questionWordPronunciation, s = i.example;
            switch (i.grade) {
            case 1:
                t = "<ruby><rb>下線部</rb><rp>(</rp><rt>かせんぶ</rt><rp>)</rp></ruby>の<ruby><rb>漢字</rb><rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>を<ruby><rb>答</rb><rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えましょう。";
                break;
            case 2:
                t = "下<ruby><rb>線部</rb><rp>(</rp><rt>せんぶ</rt><rp>)</rp></ruby>の<ruby><rb>漢</rb><rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字を<ruby><rb>答</rb><rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えましょう。";
                break;
            case 3:
                t = "下線<ruby><rb>部</rb><rp>(</rp><rt>ぶ</rt><rp>)</rp></ruby>の<ruby><rb>漢</rb><rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字を答えましょう。";
                break;
            default:
                t = "下線部の漢字を答えましょう。"
            }
            let o = s.replace(l, "<u>".concat(a, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: o
                    })
                })]
            })
        }
          , R = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, a = i.example;
            switch (i.grade) {
            case 1:
                t = "<ruby><rb>下線部</rb><rp>(</rp><rt>かせんぶ</rt><rp>)</rp></ruby>の<ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>み<ruby><rb>方</rb><rp>(</rp><rt>かた</rt><rp>)</rp></ruby>を<ruby><rb>答</rb><rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えましょう。";
                break;
            case 2:
                t = "下<ruby><rb>線部</rb><rp>(</rp><rt>せんぶ</rt><rp>)</rp></ruby>の<ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>み<ruby><rb>方</rb><rp>(</rp><rt>かた</rt><rp>)</rp></ruby>を<ruby><rb>答</rb><rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えましょう。";
                break;
            case 3:
                t = "下線<ruby><rb>部</rb><rp>(</rp><rt>ぶ</rt><rp>)</rp></ruby>の読み方を答えましょう。";
                break;
            default:
                t = "下線部の読み方を答えましょう。"
            }
            let s = a.replace(l, "<u>".concat(l, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: s
                    })
                })]
            })
        }
          , N = e => {
            let {source: t, isSpeaking: r, showImageDialog: i} = e
              , l = t.parameter
              , a = l.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , s = l.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = l.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , d = t.images
              , u = t.smallImages
              , h = t.largeImages
              , p = t.audio;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), s.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), p && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.ov, {
                        children: (0,
                        n.jsx)(x.Y$, {
                            src: p,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                }), o.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t))), 0 !== h.length && (0,
                n.jsx)("div", {
                    className: "image-area",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: h.map( (e, t) => (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-large"
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Large Image:".concat(t)))
                }), 0 !== d.length && (0,
                n.jsx)("div", {
                    className: "image-area",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: d.map( (e, t) => (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-medium"
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Medium Image:".concat(t)))
                }), 0 !== u.length && (0,
                n.jsx)("div", {
                    className: "image-area-small",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: u.map( (e, t) => (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-small"
                        }), (0,
                        n.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Small Image:".concat(t)))
                })]
            })
        }
        ;
        var M = r(40689)
          , O = r(46038)
          , L = r(94096);
        let q = a.memo(e => {
            let {width: t, height: r, isTouchScroll: i, isScaling: a, selectedTool: s, stageRef: o, replayResource: c} = e
              , d = (0,
            l.md)(L.Br)
              , u = (0,
            O.MM)()
              , x = "StartFromReplay" === d && (null == c ? void 0 : c.args.memo) !== void 0
              , h = "landscape" === u;
            return (0,
            n.jsx)(n.Fragment, {
                children: x ? (0,
                n.jsx)(M.fQ, {
                    src: null == c ? void 0 : c.args.memo,
                    width: t,
                    height: h ? r + 480 : a ? r + 480 : r,
                    isTouchScroll: i
                }) : (0,
                n.jsx)(M.of, {
                    tool: s,
                    width: t,
                    height: h ? r + 480 : a ? r + 480 : r,
                    isTouchScroll: i,
                    stageRef: o
                })
            })
        }
        );
        q.displayName = "ViewArea";
        var P = r(79857);
        let W = a.memo(e => {
            let {answerMode: t, width: r, stageRef: i, replayResource: a} = e
              , s = (0,
            l.md)(L.HK)
              , {getQuestionSource: o} = (0,
            P.$)()
              , c = (0,
            O.MM)()
              , d = o();
            return void 0 === d ? (0,
            n.jsx)(n.Fragment, {
                children: "未確認のQP"
            }) : (0,
            n.jsx)(z, {
                question: d,
                selectedTool: "Answered" === t ? void 0 : s,
                width: r,
                isMemoExpand: "portrait" === c,
                isTouchScroll: "Answered" === t,
                stageRef: i,
                replayResource: a
            })
        }
        );
        W.displayName = "QuestionPanel";
        let z = e => {
            let {question: t, selectedTool: r, width: x, isMemoExpand: h, isTouchScroll: p, stageRef: m, replayResource: g} = e
              , j = (0,
            l.Xr)(L.HK)
              , v = (0,
            l.md)(L.UQ)
              , [f,b] = (0,
            a.useState)(!1)
              , [w,y] = (0,
            a.useState)(null)
              , {elementRef: S, elementSize: C} = (0,
            o.wY)()
              , k = (0,
            O.MM)()
              , {sendOpenMemoOnReplay: A} = V()
              , T = (0,
            a.useCallback)( () => {
                b(e => {
                    let t = !e;
                    return t && j("pen"),
                    t
                }
                ),
                A()
            }
            , [A, j])
              , I = (0,
            a.useCallback)(e => {
                y(e)
            }
            , [])
              , _ = (0,
            a.useCallback)( () => {
                y(null)
            }
            , []);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)(i.A, {
                    ref: S,
                    position: "relative",
                    width: x,
                    height: "fit-content",
                    minHeight: "100%",
                    pb: "landscape" === k ? 60 : f ? 60 : 0,
                    bgcolor: d.Tj.surface,
                    border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                    borderRadius: 2,
                    overflow: "hidden",
                    children: [u({
                        question: t,
                        isSpeaking: v,
                        showImageDialog: I
                    }), h && (0,
                    n.jsxs)(c.fI, {
                        position: "relative",
                        width: 64,
                        height: 32,
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 1,
                        ml: 1,
                        bgcolor: d.Tj.onSurfaceWeak4,
                        borderRadius: 2,
                        sx: {
                            cursor: "pointer"
                        },
                        zIndex: 1,
                        onClick: T,
                        children: [(0,
                        n.jsx)(s.Bj, {
                            name: "memo",
                            size: 24,
                            color: "onSurface"
                        }), (0,
                        n.jsx)(s.Bj, {
                            name: f ? "angleUp" : "angleDown",
                            size: 24,
                            color: "onSurface"
                        })]
                    }), (0,
                    n.jsx)(i.A, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        children: (0,
                        n.jsx)(q, {
                            width: C.width,
                            height: C.height,
                            isTouchScroll: p,
                            isScaling: f,
                            selectedTool: r,
                            stageRef: m,
                            replayResource: g
                        })
                    })]
                }), (0,
                n.jsx)(M.zq, {
                    src: w,
                    onClose: _
                })]
            })
        }
          , V = () => {
            var e, t;
            let r = (0,
            l.md)(L.cS).code
              , n = (0,
            l.md)(L.bQ)
              , i = null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : 0
              , a = null !== (t = null == n ? void 0 : n.contentResource.answer.name) && void 0 !== t ? t : "unknown"
              , s = "StartFromReplay" === (0,
            l.md)(L.Br)
              , {analyticsEvent: c} = (0,
            o.yw)();
            return {
                sendOpenMemoOnReplay: () => {
                    s && c({
                        eventName: "解答リプレイ「メモを開く」クリック",
                        params: {
                            courseCode: r,
                            programId: i,
                            ap: a
                        }
                    })
                }
            }
        }
        ;
        var D = r(14476)
          , H = r(77114);
        let X = {
            answerPatternChanged: "解答データを正しく読み込めませんでした",
            invalidReplayResource: "不正な解答リプレイデータです",
            unknownAnswerPattern: "想定外の問題データです"
        }
          , J = {
            answerPatternChanged: "APが変更された",
            invalidReplayResource: "保存された解答リプレイデータが破損している",
            unknownAnswerPattern: "未知のAPがある"
        }
          , B = e => {
            var t, r;
            let {exceptionType: c} = e;
            console.log("exceptionType", c);
            let u = (0,
            l.md)(L.bQ)
              , x = (0,
            l.md)(L.Br)
              , {analyticsEvent: h} = (0,
            o.yw)()
              , p = null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : 0
              , m = null !== (r = null == u ? void 0 : u.contentResource.answer.name) && void 0 !== r ? r : "unknown"
              , g = "StartFromReplay" === x;
            return (0,
            a.useEffect)( () => {
                g && h({
                    eventName: "解答リプレイ「解答データを正しく読み込めませんでした」表示",
                    params: {
                        programId: p,
                        ap: m,
                        error: J[c]
                    }
                })
            }
            , [c, g, h, p, m]),
            (0,
            n.jsx)(i.A, {
                id: H.y,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                children: (0,
                n.jsx)(i.A, {
                    p: 1,
                    height: 128,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0,
                    n.jsx)(s.EY, {
                        size: "lg",
                        textAlign: "center",
                        color: "onSurfaceWeak1",
                        children: X[c]
                    })
                })
            })
        }
        ;
        var K = r(96995)
          , F = r(40961)
          , U = r(3145);
        let Y = e => {
            let {answerMode: t, endAnswerProcess: r} = e
              , i = (0,
            l.md)(L.aR)
              , o = (0,
            l.md)(L.Br)
              , [c,d] = (0,
            a.useState)(!1)
              , u = (0,
            a.useCallback)( () => {
                d(!0),
                r()
            }
            , [r]);
            (0,
            a.useEffect)( () => {
                d(!1)
            }
            , [t]);
            let x = "StartFromReplay" === o;
            return "Answered" === t || x ? (0,
            F.createPortal)((0,
            n.jsx)(K.P.div, {
                style: {
                    position: "fixed",
                    bottom: U.eB,
                    right: U.eB,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                },
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                transition: {
                    scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 150
                    }
                },
                children: (0,
                n.jsx)(s.yh, {
                    width: 200,
                    text: "次へ",
                    disabled: x || i || c,
                    onClick: u
                })
            }), document.body) : null
        }
        ;
        var G = r(94191)
          , Q = r(36362)
          , $ = r(82058)
          , Z = r(5326)
          , ee = r(33988);
        let et = e => {
            let {index: t, mode: r} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(er, {
                    index: t
                });
            case "Other":
                return (0,
                n.jsx)(en, {
                    index: t
                });
            case "Correct":
                return (0,
                n.jsx)(ei, {
                    index: t
                });
            case "Incorrect":
                return (0,
                n.jsx)(el, {
                    index: t
                })
            }
        }
          , er = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.A, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.Tj.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                children: (0,
                n.jsx)(ee.E, {
                    color: "onSurface",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , en = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.A, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.Tj.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                children: (0,
                n.jsx)(ee.E, {
                    color: "onSurfaceWeak1",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , ei = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.A, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.Tj.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                children: (0,
                n.jsx)(ee.E, {
                    color: "correct",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , el = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.A, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.Tj.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                children: (0,
                n.jsx)(ee.E, {
                    color: "important",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , ea = e => {
            let {index: t, width: r, height: i, qml: l, mode: a, onClick: s} = e;
            switch (a) {
            case "Active":
                return (0,
                n.jsx)(es, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: s
                });
            case "Other":
                return (0,
                n.jsx)(eo, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: s
                });
            case "Correct":
                return (0,
                n.jsx)(ec, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: s
                });
            case "Incorrect":
                return (0,
                n.jsx)(ed, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: s
                })
            }
        }
          , es = e => {
            let {index: t, width: r, height: l, qml: a, onClick: s} = e;
            return (0,
            n.jsx)(Z.A, {
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.Tj.onSurfaceWeak3,
                    borderRadius: 4
                }],
                onClick: s,
                children: (0,
                n.jsxs)(i.A, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(et, {
                        index: t,
                        mode: "Active"
                    }), (0,
                    n.jsx)("img", {
                        src: a,
                        alt: "",
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                })
            })
        }
          , eo = e => {
            let {index: t, width: r, height: l, qml: a} = e;
            return (0,
            n.jsx)(Z.A, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.Tj.onSurfaceWeak3,
                    borderRadius: 4
                }],
                children: (0,
                n.jsxs)(i.A, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(et, {
                        index: t,
                        mode: "Other"
                    }), (0,
                    n.jsx)("img", {
                        src: a,
                        alt: "",
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                })
            })
        }
          , ec = e => {
            let {index: t, width: r, height: l, qml: a} = e;
            return (0,
            n.jsxs)(Z.A, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.Tj.correctWeak,
                    borderRadius: 4
                }],
                children: [(0,
                n.jsxs)(i.A, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(et, {
                        index: t,
                        mode: "Correct"
                    }), (0,
                    n.jsx)("img", {
                        src: a,
                        alt: "",
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 4,
                    left: 4,
                    zIndex: 1,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionO",
                        width: 40,
                        height: 40
                    })
                })]
            })
        }
          , ed = e => {
            let {index: t, width: r, height: l, qml: a} = e;
            return (0,
            n.jsxs)(Z.A, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.Tj.importantWeak,
                    borderRadius: 4
                }],
                children: [(0,
                n.jsxs)(i.A, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(et, {
                        index: t,
                        mode: "Incorrect"
                    }), (0,
                    n.jsx)("img", {
                        src: a,
                        alt: "",
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 4,
                    left: 4,
                    zIndex: 1,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionX",
                        width: 40,
                        height: 40
                    })
                })]
            })
        }
          , eu = e => {
            let {items: t, orientation: r} = e;
            if (0 === t.length)
                return null;
            switch (r) {
            case "landscape":
                return (0,
                n.jsx)($.Ay, {
                    container: !0,
                    rowSpacing: 2,
                    columnSpacing: {
                        xs: 2
                    },
                    children: t.map( (e, t) => (0,
                    n.jsx)($.Ay, {
                        item: !0,
                        xs: 6,
                        children: (0,
                        n.jsx)(ea, {
                            index: e.index,
                            width: "100%",
                            height: 180,
                            qml: e.url,
                            mode: "Other"
                        })
                    }, t))
                });
            case "portrait":
                return (0,
                n.jsx)("div", {
                    style: {
                        display: "flex",
                        overflowX: "scroll"
                    },
                    children: (0,
                    n.jsx)(c.fI, {
                        gap: 2,
                        children: t.map( (e, t) => (0,
                        n.jsx)(ea, {
                            index: e.index,
                            width: window.innerWidth / 2 * .9,
                            height: 196,
                            qml: e.url,
                            mode: "Other"
                        }, t))
                    })
                })
            }
        }
        ;
        var ex = r(52035);
        let eh = (0,
        ex.eU)([])
          , ep = (0,
        ex.eU)({
            id: 0,
            url: "",
            index: void 0
        })
          , em = (0,
        ex.eU)(void 0)
          , eg = () => {
            let e = (0,
            l.md)(eh)
              , t = (0,
            l.md)(ep)
              , r = (0,
            l.md)(em)
              , i = (0,
            O.MM)();
            return r ? (0,
            n.jsx)(ej, {
                selectables: e,
                correct: t,
                answered: r,
                orientation: i
            }) : null
        }
          , ej = e => {
            let {selectables: t, correct: r, answered: l, orientation: s} = e
              , o = l.id === r.id ? l : void 0
              , u = l.id !== r.id ? r : void 0
              , x = l.id !== r.id ? l : void 0
              , h = [null == o ? void 0 : o.id, null == u ? void 0 : u.id, null == x ? void 0 : x.id]
              , p = t.filter(e => !h.includes(e.id));
            return (0,
            n.jsxs)(Q.V, {
                children: [(0,
                n.jsx)(c.ov, {
                    children: (0,
                    n.jsxs)(c.fI, {
                        width: o ? "50%" : "100%",
                        children: [o && (0,
                        n.jsx)(ea, {
                            index: o.index,
                            width: "100%",
                            height: "landscape" === s ? 200 : 216,
                            qml: o.url,
                            mode: "Correct"
                        }), u && (0,
                        n.jsx)(ea, {
                            index: u.index,
                            width: "100%",
                            height: "landscape" === s ? 200 : 216,
                            qml: u.url,
                            mode: "Correct"
                        }), x && (0,
                        n.jsxs)(a.Fragment, {
                            children: [(0,
                            n.jsx)(c.hK, {
                                x: 2
                            }), (0,
                            n.jsx)(ea, {
                                index: x.index,
                                width: "100%",
                                height: "landscape" === s ? 200 : 216,
                                qml: x.url,
                                mode: "Incorrect"
                            })]
                        })]
                    })
                }), 0 !== p.length && (0,
                n.jsx)(n.Fragment, {
                    children: "landscape" === s ? (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(G.A, {
                            orientation: "horizontal",
                            sx: {
                                my: 3,
                                borderColor: d.Tj.onSurfaceWeak3
                            }
                        }), (0,
                        n.jsx)(i.A, {
                            mx: 3,
                            children: (0,
                            n.jsx)(eu, {
                                items: p,
                                orientation: s
                            })
                        })]
                    }) : (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(c.hK, {
                            y: 3
                        }), (0,
                        n.jsx)(eu, {
                            items: p,
                            orientation: s
                        })]
                    })
                })]
            })
        }
        ;
        var ev = r(1343);
        let ef = () => ({
            formatDto: (0,
            a.useCallback)(e => {
                var t, r;
                let n = null !== (t = e.correctItem) && void 0 !== t ? t : new ev.hY
                  , i = {
                    id: n.itemId,
                    url: n.imageUrl,
                    index: void 0
                }
                  , l = e.itemList.map(e => ({
                    id: e.itemId,
                    url: e.imageUrl,
                    index: void 0
                }));
                return e.shouldShuffle && l.sort( () => .5 - Math.random()),
                e.isDisplayNumber && (l.forEach( (e, t) => {
                    e.index = t + 1
                }
                ),
                i.index = null === (r = l.find(e => e.id === i.id)) || void 0 === r ? void 0 : r.index),
                {
                    selectables: l,
                    correct: i
                }
            }
            , [])
        })
          , eb = () => ({
            validate: (0,
            a.useCallback)( (e, t) => t.id === e.id ? "correct" : "incorrect", [])
        })
          , ew = () => ({
            getViewState: (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        let t = e.items.map(e => e.itemId);
                        return {
                            order: e.items.map(e => e.itemId),
                            answered: t[e.selected]
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), [])
        });
        var ey = r(26892);
        let eS = e => {
            let t = (0,
            l.md)(eh)
              , r = (0,
            l.Xr)(em)
              , [n,i] = (0,
            a.useState)(t[0])
              , [s,o] = (0,
            a.useState)("")
              , [c,d] = (0,
            a.useState)("incorrect")
              , {validate: u} = eb();
            return {
                prepare: (0,
                a.useCallback)( (t, r, n) => {
                    let l = u(e, t);
                    switch (d(l),
                    i(t),
                    o(t.url),
                    l) {
                    case "correct":
                        r();
                        break;
                    case "incorrect":
                        n()
                    }
                }
                , [e, d, u]),
                fix: (0,
                a.useCallback)(e => {
                    let i = ey.aJ.CORRECT
                      , l = {
                        order: t.map(e => e.id),
                        answered: n.id
                    };
                    r(n),
                    e({
                        answer: {
                            result: i,
                            textType: 2,
                            text: s,
                            wrongCount: 0
                        },
                        viewStateJSON: l
                    })
                }
                , [t, n, r, s, c])
            }
        }
          , eC = () => {
            let[e,t] = (0,
            a.useState)();
            return {
                showing: e,
                show: (0,
                a.useCallback)(e => t(e), []),
                hide: (0,
                a.useCallback)( () => t(void 0), [])
            }
        }
          , ek = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(eh)
              , i = (0,
            l.md)(ep)
              , a = (0,
            O.MM)();
            return (0,
            n.jsx)(eA, {
                selectables: r,
                correct: i,
                orientation: a,
                onAnswered: t
            })
        }
          , eA = e => {
            let {selectables: t, correct: r, orientation: l, onAnswered: s} = e
              , {prepare: o, fix: c} = eS(r)
              , {showing: d, show: u, hide: x} = eC()
              , h = (0,
            a.useCallback)(e => o(e, () => u("correct"), () => u("incorrect")), [o, u])
              , p = (0,
            a.useCallback)( () => {
                c(s),
                x()
            }
            , [c, x, s]);
            return (0,
            n.jsxs)(i.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)($.Ay, {
                    container: !0,
                    rowSpacing: 2,
                    columnSpacing: {
                        xs: 2
                    },
                    children: t.map( (e, t) => (0,
                    n.jsx)($.Ay, {
                        item: !0,
                        xs: 6,
                        children: (0,
                        n.jsx)(ea, {
                            index: e.index,
                            width: "100%",
                            height: 216,
                            qml: e.url,
                            mode: "Active",
                            onClick: () => h(e)
                        })
                    }, t))
                }), d && (0,
                n.jsx)(M.zD, {
                    result: d,
                    portalElem: "portrait" === l ? "body" : H.y,
                    handleOnStop: p
                })]
            })
        }
          , eT = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.Xr)(eh)
              , c = (0,
            l.Xr)(ep)
              , [d,u] = (0,
            l.fp)(em)
              , {formatDto: x} = ef()
              , {getViewState: h} = ew();
            return ((0,
            a.useEffect)( () => {
                let {selectables: e, correct: n} = x(t);
                if (r) {
                    let t = h(r);
                    o(e),
                    c(n),
                    u(e.find(e => e.id === t.answered));
                    return
                }
                o(e),
                c(n),
                u(void 0)
            }
            , [t, x, h, r, u, c, o]),
            d) ? (0,
            n.jsx)(i.A, {
                padding: 3,
                children: (0,
                n.jsx)(eg, {})
            }) : (0,
            n.jsx)(i.A, {
                padding: 3,
                children: (0,
                n.jsx)(ek, {
                    onAnswered: s
                })
            })
        }
        ;
        var eI = r(35645)
          , e_ = r(46506)
          , eE = r(29965)
          , eR = r.n(eE)
          , eN = r(69460);
        let eM = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(s.EY, {
                color: "correct",
                size: "lg",
                padding: "0 24px",
                children: t
            })
        }
          , eO = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(s.EY, {
                color: "important",
                size: "lg",
                padding: "0 24px",
                children: t
            })
        }
          , eL = (0,
        ex.eU)([])
          , eq = (0,
        ex.eU)(void 0)
          , eP = (0,
        ex.eU)(void 0)
          , eW = (0,
        ex.eU)({
            label: "",
            suffix: "",
            useLatexInLabel: !1,
            useLatexInSuffix: !1
        })
          , ez = () => {
            let e = (0,
            l.md)(eW)
              , t = (0,
            l.md)(eP)
              , r = (0,
            l.md)(eL)
              , i = (0,
            l.md)(eq)
              , a = (0,
            O.MM)();
            return void 0 === i ? null : (0,
            n.jsx)(eV, {
                placeHolder: e,
                modelAnswer: t,
                correct: r,
                answered: i,
                orientation: a
            })
        }
          , eV = e => {
            let {placeHolder: t, modelAnswer: r, correct: i, answered: l, orientation: a} = e
              , {convertInputToAnswerText: s} = (0,
            O.xC)()
              , o = i.map(e => ({
                ...e,
                value: s(e.value)
            })).find(e => "text" === e.case ? e.value === l : new RegExp(e.value).test(l));
            switch (a) {
            case "landscape":
                return (0,
                n.jsxs)(c.VP, {
                    height: "100%",
                    children: [(0,
                    n.jsx)(c.ov, {
                        height: "100%",
                        minHeight: 48,
                        children: (0,
                        n.jsx)(eR(), {
                            src: (0,
                            eN.o)("png/illust_keyboard.png"),
                            width: 269,
                            height: 108,
                            alt: ""
                        })
                    }), o ? (0,
                    n.jsx)(eD, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    }) : (0,
                    n.jsx)(eH, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    })]
                });
            case "portrait":
                return (0,
                n.jsx)(c.VP, {
                    children: o ? (0,
                    n.jsx)(eD, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    }) : (0,
                    n.jsx)(eH, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    })
                })
            }
        }
          , eD = e => {
            let {answered: t, placeHolder: r, modelAnswer: i} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(M.nV, {
                    mode: "Correct",
                    value: t,
                    placeHolder: r
                }), void 0 !== i && i !== t && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(c.hK, {
                        y: 1
                    }), (0,
                    n.jsx)(eM, {
                        text: i
                    })]
                })]
            })
        }
          , eH = e => {
            let {answered: t, placeHolder: r, modelAnswer: i} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(M.nV, {
                    mode: "Incorrect",
                    value: t,
                    placeHolder: r
                }), void 0 !== i && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(c.hK, {
                        y: 1
                    }), (0,
                    n.jsx)(eO, {
                        text: i
                    })]
                })]
            })
        }
        ;
        var eX = r(36471);
        let eJ = () => {
            let {convertInputToAnswerText: e} = (0,
            O.xC)();
            return {
                formatDto: (0,
                a.useCallback)(t => {
                    var r;
                    return {
                        placeHolder: null !== (r = t.placeHolder) && void 0 !== r ? r : new ev.ml,
                        correct: t.correctAnswerList.reduce( (t, r) => r.option.case && r.option.value ? "text" === r.option.case ? [...t, {
                            case: "text",
                            value: e(r.option.value)
                        }] : [...t, r.option] : t, [])
                    }
                }
                , [e])
            }
        }
          , eB = () => ({
            validate: (0,
            a.useCallback)( (e, t) => 0 === t.length ? "empty" : t.length > 300 ? "overflow" : e.find(e => "text" === e.case ? e.value === t : new RegExp(e.value).test(t)) ? "correct" : "incorrect", [])
        })
          , eK = () => {
            let[e,t] = (0,
            a.useState)();
            return {
                showing: e,
                show: (0,
                a.useCallback)(e => t(e), []),
                hide: (0,
                a.useCallback)( () => t(void 0), [])
            }
        }
          , eF = () => ({
            getViewState: (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return {
                        answered: r.apViewState.text
                    };
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), [])
        })
          , eU = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => t(!0), []),
                hide: (0,
                a.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , eY = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => t(!0), []),
                hide: (0,
                a.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , eG = e => {
            let t = (0,
            l.Xr)(eq)
              , [r,n] = (0,
            a.useState)("")
              , [i,s] = (0,
            a.useState)(0)
              , [o,c] = (0,
            a.useState)("incorrect")
              , {convertInputToAnswerText: d} = (0,
            O.xC)()
              , {validate: u} = eB()
              , x = (0,
            a.useCallback)( (t, l, a, o, x, h) => {
                let p = d(r)
                  , m = u(e.map(e => ({
                    ...e,
                    value: d(e.value)
                })), p);
                if ("overflow" === m) {
                    t();
                    return
                }
                if ("empty" === m) {
                    h ? x() : l();
                    return
                }
                if ("incorrect" === m && 0 === i) {
                    s(1),
                    o();
                    return
                }
                switch (m) {
                case "correct":
                    a();
                    break;
                case "incorrect":
                    x()
                }
                c(m),
                n(p)
            }
            , [d, e, r, u, i])
              , h = (0,
            a.useCallback)(e => {
                let n = ey.aJ.CORRECT;
                t(r),
                e({
                    answer: {
                        result: n,
                        textType: 2,
                        text: r,
                        wrongCount: i
                    },
                    viewStateJSON: {
                        answered: r
                    }
                })
            }
            , [r, t, o, i]);
            return {
                input: r,
                setInput: n,
                prepare: x,
                fix: h
            }
        }
          , eQ = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(eL)
              , i = (0,
            l.md)(eW)
              , a = (0,
            O.MM)();
            return (0,
            n.jsx)(e$, {
                correct: r,
                placeHolder: i,
                onAnswered: t,
                orientation: a
            })
        }
          , e$ = e => {
            let {correct: t, placeHolder: r, orientation: l, onAnswered: o} = e
              , {input: d, setInput: u, prepare: x, fix: h} = eG(t)
              , {showing: p, show: m, hide: g} = eK()
              , {show: j, hide: v, visibled: f} = eY()
              , {show: b, hide: w, visibled: y} = eU()
              , S = (0,
            a.useCallback)(e => {
                x(b, j, () => m("correct"), () => m("redo"), () => m("incorrect"), e)
            }
            , [x, j, b, m])
              , C = (0,
            a.useCallback)( () => S(!1), [S])
              , k = (0,
            a.useCallback)( () => {
                h(o),
                g()
            }
            , [h, g, o])
              , A = (0,
            a.useCallback)( () => {
                v(),
                S(!0)
            }
            , [v, S]);
            switch (l) {
            case "landscape":
                return (0,
                n.jsxs)(c.VP, {
                    height: "100%",
                    children: [(0,
                    n.jsx)(c.ov, {
                        height: "100%",
                        minHeight: 140,
                        children: (0,
                        n.jsx)("img", {
                            src: (0,
                            eN.o)("png/illust_keyboard.png"),
                            width: 269,
                            height: 108,
                            alt: ""
                        })
                    }), (0,
                    n.jsxs)(c.VP, {
                        children: [(0,
                        n.jsx)(c.hK, {
                            y: 1
                        }), (0,
                        n.jsx)(M.nV, {
                            mode: "Default",
                            value: d,
                            placeHolder: r,
                            onChange: u
                        }), (0,
                        n.jsx)(c.hK, {
                            y: 6
                        }), (0,
                        n.jsx)(i.A, {
                            alignSelf: "flex-end",
                            children: (0,
                            n.jsx)(s.yh, {
                                text: "解答する",
                                disabled: void 0 !== p,
                                onClick: C
                            })
                        })]
                    }), p && (0,
                    n.jsx)(i.A, {
                        sx: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        },
                        children: (0,
                        n.jsx)(M.zD, {
                            portalElem: H.y,
                            result: p,
                            handleOnStop: "redo" === p ? g : k
                        })
                    }), (0,
                    n.jsx)(eX.jc, {
                        isOpen: y,
                        onClick: w
                    }), (0,
                    n.jsx)(eX.Ml, {
                        isOpen: f,
                        onClickCancel: v,
                        onClickAnswer: A
                    })]
                });
            case "portrait":
                return (0,
                n.jsxs)(c.VP, {
                    children: [(0,
                    n.jsxs)(c.VP, {
                        children: [(0,
                        n.jsx)(M.nV, {
                            mode: "Default",
                            value: d,
                            placeHolder: r,
                            onChange: u
                        }), (0,
                        n.jsx)(c.hK, {
                            y: 5
                        }), (0,
                        n.jsx)(i.A, {
                            alignSelf: "flex-end",
                            children: (0,
                            n.jsx)(s.yh, {
                                text: "解答する",
                                disabled: void 0 !== p,
                                onClick: C
                            })
                        })]
                    }), p && (0,
                    n.jsx)(M.zD, {
                        result: p,
                        portalElem: "portrait" === l ? "body" : H.y,
                        handleOnStop: "redo" === p ? g : k
                    }), (0,
                    n.jsx)(eX.jc, {
                        isOpen: y,
                        onClick: w
                    }), (0,
                    n.jsx)(eX.Ml, {
                        isOpen: f,
                        onClickCancel: v,
                        onClickAnswer: A
                    })]
                })
            }
        }
          , eZ = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.Xr)(eL)
              , c = (0,
            l.Xr)(eP)
              , d = (0,
            l.Xr)(eW)
              , [u,x] = (0,
            l.fp)(eq)
              , {formatDto: h} = eJ()
              , {getViewState: p} = eF()
              , m = (0,
            O.MM)()
              , {windowHeight: g} = (0,
            eI.x)();
            if ((0,
            a.useEffect)( () => {
                let {placeHolder: e, correct: n} = h(t);
                if (r) {
                    let i = p(t, r);
                    o(n),
                    x(i.answered),
                    c(t.displayAnswerText),
                    d(e);
                    return
                }
                return () => {
                    o(n),
                    c(t.displayAnswerText),
                    d(e)
                }
            }
            , [t, r, h, p, x, o, c, d]),
            (0,
            a.useEffect)( () => () => {
                x(void 0)
            }
            , [x]),
            void 0 !== u)
                switch (m) {
                case "landscape":
                    return (0,
                    n.jsx)(i.A, {
                        width: "100%",
                        height: g - e_.$A - 18,
                        pt: 1,
                        pr: 2,
                        pb: 12,
                        pl: 2,
                        children: (0,
                        n.jsx)(ez, {})
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.A, {
                        width: "100%",
                        height: "100%",
                        pt: 4,
                        pr: 2,
                        pb: 4,
                        pl: 2,
                        children: (0,
                        n.jsx)(ez, {})
                    })
                }
            else
                switch (m) {
                case "landscape":
                    return (0,
                    n.jsx)(i.A, {
                        width: "100%",
                        height: g - e_.$A - 18,
                        pt: 1,
                        pr: 2,
                        pb: 2,
                        pl: 2,
                        children: (0,
                        n.jsx)(eQ, {
                            onAnswered: s
                        })
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.A, {
                        width: "100%",
                        height: "100%",
                        pt: 4,
                        pr: 2,
                        pb: 2,
                        pl: 2,
                        children: (0,
                        n.jsx)(eQ, {
                            onAnswered: s
                        })
                    })
                }
        }
          , e0 = e => {
            let {items: t} = e
              , r = "他の選択肢"
              , l = 16 * r.length;
            return (0,
            n.jsxs)(c.fI, {
                gap: 2,
                children: [(0,
                n.jsx)(i.A, {
                    minWidth: l,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(s.EY, {
                        color: "onSurfaceWeak1",
                        fontWeight: "bold",
                        children: r
                    })
                }), (0,
                n.jsx)(G.A, {
                    orientation: "vertical",
                    variant: "middle",
                    flexItem: !0,
                    sx: {
                        borderColor: d.Tj.onSurfaceWeak3,
                        my: 0
                    }
                }), (0,
                n.jsx)(c.fI, {
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    children: t.map( (e, t) => (0,
                    n.jsx)(x.qV, {
                        src: e.text,
                        style: {
                            fontSize: 16,
                            color: d.Tj.onSurface,
                            display: "flex",
                            alignItems: "flex-end"
                        }
                    }, t))
                })]
            })
        }
          , e1 = e => {
            let {mode: t} = e
              , r = "";
            switch (t) {
            case "on":
                r = (0,
                eN.o)("png/icon_check_select_multi_on.png");
                break;
            case "off":
                r = (0,
                eN.o)("png/icon_check_select_multi_off.png");
                break;
            case "disabled":
                r = (0,
                eN.o)("png/icon_check_select_multi_disable.png")
            }
            return (0,
            n.jsx)("img", {
                src: r,
                width: 24,
                height: 24,
                alt: ""
            })
        }
          , e2 = e => {
            let {qml: t, mode: r, onClick: i} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(e4, {
                    qml: t,
                    onClick: i
                });
            case "Selected":
                return (0,
                n.jsx)(e3, {
                    qml: t,
                    onClick: i
                });
            case "Correct":
                return (0,
                n.jsx)(e8, {
                    qml: t,
                    onClick: i
                });
            case "SelectedCorrect":
                return (0,
                n.jsx)(e5, {
                    qml: t,
                    onClick: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(e6, {
                    qml: t,
                    onClick: i
                });
            case "Disabled":
                return (0,
                n.jsx)(e7, {
                    qml: t,
                    onClick: i
                })
            }
        }
          , e4 = e => {
            let {qml: t, onClick: r} = e;
            return (0,
            n.jsxs)(s.u4, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.Tj.onSurfaceWeak3,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e1, {
                        mode: "off"
                    })
                }), (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.onSurface
                    },
                    weight: "bold"
                })]
            })
        }
          , e3 = e => {
            let {qml: t, onClick: r} = e;
            return (0,
            n.jsxs)(s.u4, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    backgroundColor: d.Tj.primaryWeak1,
                    border: 2,
                    borderColor: d.Tj.primary,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e1, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.onSurface
                    },
                    weight: "bold"
                })]
            })
        }
          , e8 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(s.u4, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.Tj.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                disabled: !0,
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e1, {
                        mode: "off"
                    })
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "8",
                    left: "16px",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , e5 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(s.u4, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.Tj.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                disabled: !0,
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e1, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "8",
                    left: "16px",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , e6 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(s.u4, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.Tj.importantWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e1, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 8,
                    left: 16,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.important
                    },
                    weight: "bold"
                })]
            })
        }
          , e7 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(s.u4, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: (0,
                    d.au)("onSurface", "disabledBackground"),
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e1, {
                        mode: "disabled"
                    })
                }), (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: (0,
                        d.au)("onSurface", "disabled")
                    },
                    weight: "bold"
                })]
            })
        }
          , e9 = (0,
        ex.eU)([])
          , te = (0,
        ex.eU)([])
          , tt = (0,
        ex.eU)(void 0)
          , tr = (0,
        ex.eU)(!1)
          , tn = () => {
            let e = (0,
            l.md)(e9)
              , t = (0,
            l.md)(te)
              , r = (0,
            l.md)(tt);
            return r ? (0,
            n.jsx)(ti, {
                selectables: e,
                correct: t,
                answered: r
            }) : null
        }
          , ti = e => {
            let {selectables: t, correct: r, answered: i} = e
              , l = r.filter(e => !i.find(t => t.id === e.id))
              , a = r.filter(e => i.find(t => t.id === e.id))
              , s = i.filter(e => !r.find(t => e.id === t.id))
              , o = t.filter(e => !(l.find(t => t.id === e.id) || a.find(t => t.id === e.id) || s.find(t => t.id === e.id)));
            return (0,
            n.jsxs)(Q.V, {
                gap: 3,
                children: [(0,
                n.jsxs)(Q.V, {
                    gap: 2,
                    children: [l.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e2, {
                            qml: e.text,
                            mode: "Correct"
                        }, e.id)
                    })), a.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e2, {
                            qml: e.text,
                            mode: "SelectedCorrect"
                        }, e.id)
                    })), s.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e2, {
                            qml: e.text,
                            mode: "Incorrect"
                        }, e.id)
                    }))]
                }), 0 !== o.length && (0,
                n.jsx)(e0, {
                    items: o
                })]
            })
        }
          , tl = e => {
            let {isOpen: t, onClose: r} = e;
            return (0,
            n.jsx)(s.lG, {
                isOpen: t,
                title: "解答が足りません",
                body: "指定された数だけ選択してください。",
                actions: (0,
                n.jsx)(s.Pn, {
                    label: "OK",
                    color: "primary",
                    onClick: r
                }),
                onClose: r
            })
        }
        ;
        var ta = r(24781);
        let ts = () => ({
            formatDto: (0,
            a.useCallback)(e => {
                let t = e.itemList.map(e => {
                    let t = (0,
                    ta.u)(e.text);
                    return {
                        id: e.itemId,
                        text: t
                    }
                }
                );
                return e.shouldShuffle && t.sort( () => .5 - Math.random()),
                {
                    selectables: t,
                    correct: e.correctItemList.map(e => {
                        let t = (0,
                        ta.u)(e.text);
                        return {
                            id: e.itemId,
                            text: t
                        }
                    }
                    ),
                    fullSelectRequired: e.selectionCountDesignated
                }
            }
            , [])
        })
          , to = () => ({
            validate: (0,
            a.useCallback)( (e, t) => {
                if (0 === t.length)
                    return "empty";
                let r = e.map(e => e.id).sort()
                  , n = t.map(e => e.id).sort();
                return n.length === r.length && r.every( (e, t) => e === n[t]) ? "correct" : "incorrect"
            }
            , [])
        })
          , tc = () => {
            let[e,t] = (0,
            a.useState)();
            return {
                showing: e,
                show: (0,
                a.useCallback)(e => t(e), []),
                hide: (0,
                a.useCallback)( () => t(void 0), [])
            }
        }
          , td = () => ({
            getViewState: (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState) {
                    var r;
                    return {
                        order: (r = t.apViewState).itemList.map(e => e.itemId),
                        answered: r.itemList.filter(e => e.selected).map(e => e.itemId)
                    }
                }
                throw Error("no view state")
            }
            )(e.viewStateJSON), [])
        })
          , tu = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => t(!0), []),
                hide: (0,
                a.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , tx = (e, t, r) => {
            let n = (0,
            l.md)(e9)
              , i = (0,
            l.Xr)(tt)
              , [s,o] = (0,
            a.useState)("")
              , [c,d] = (0,
            a.useState)(e)
              , [u,x] = (0,
            a.useState)(0)
              , [h,p] = (0,
            a.useState)("incorrect")
              , {validate: m} = to()
              , g = (0,
            a.useCallback)(e => {
                void 0 !== c.find(t => t.id === e.id) ? d(c.filter(t => t.id !== e.id)) : d(c.concat([e]))
            }
            , [c, d])
              , j = (0,
            a.useCallback)(e => void 0 !== c.find(t => t.id === e.id), [c]);
            return {
                toggle: g,
                isSelected: j,
                isSelectable: (0,
                a.useCallback)( () => !r || c.length < t.length, [t.length, r, c.length]),
                prepare: (0,
                a.useCallback)( (e, n, i, l) => {
                    if (r && c.length < t.length) {
                        e();
                        return
                    }
                    let a = m(t, c);
                    if (("incorrect" === a || "empty" === a) && 0 === u) {
                        x(1),
                        i();
                        return
                    }
                    switch (a) {
                    case "correct":
                        n();
                        break;
                    case "incorrect":
                    case "empty":
                        l()
                    }
                    o("[".concat(c.map(e => e.text).toString(), "]")),
                    p(a)
                }
                , [t, r, c, x, m, u]),
                fix: (0,
                a.useCallback)(e => {
                    let t = {
                        order: n.map(e => e.id),
                        answered: c.map(e => e.id)
                    }
                      , r = ey.aJ.CORRECT;
                    i(c),
                    e({
                        answer: {
                            result: r,
                            textType: 2,
                            text: s,
                            wrongCount: u
                        },
                        viewStateJSON: t
                    })
                }
                , [n, c, i, s, h, u])
            }
        }
          , th = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(e9)
              , i = (0,
            l.md)(tr)
              , a = (0,
            l.md)(te)
              , s = (0,
            O.MM)();
            return (0,
            n.jsx)(tp, {
                selectables: r,
                selecting: [],
                fullSelectRequired: i,
                correct: a,
                orientation: s,
                onAnswered: t
            })
        }
          , tp = e => {
            let {selectables: t, selecting: r, fullSelectRequired: l, correct: o, orientation: c, onAnswered: d} = e
              , {toggle: u, isSelected: x, isSelectable: h, prepare: p, fix: m} = tx(r, o, l)
              , {showing: g, show: j, hide: v} = tc()
              , {show: f, hide: b, visibled: w} = tu()
              , y = (0,
            a.useCallback)( () => {
                p( () => f(), () => j("correct"), () => j("redo"), () => j("incorrect"))
            }
            , [f, j, p])
              , S = (0,
            a.useCallback)( () => {
                m(d),
                v()
            }
            , [m, d, v]);
            return (0,
            n.jsxs)(i.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsxs)(Q.V, {
                    width: "100%",
                    gap: 4,
                    children: [(0,
                    n.jsx)(Q.V, {
                        gap: 2,
                        children: t.map( (e, t) => {
                            let r = x(e);
                            return (0,
                            n.jsx)(e2, {
                                qml: e.text,
                                mode: r ? "Selected" : h() ? "Active" : "Disabled",
                                onClick: () => u(e)
                            }, t)
                        }
                        )
                    }), (0,
                    n.jsx)(i.A, {
                        alignSelf: "flex-end",
                        children: (0,
                        n.jsx)(s.yh, {
                            text: "解答する",
                            disabled: void 0 !== g,
                            onClick: y
                        })
                    })]
                }), g && (0,
                n.jsx)(M.zD, {
                    result: g,
                    portalElem: "portrait" === c ? "body" : H.y,
                    handleOnStop: "redo" === g ? v : S
                }), (0,
                n.jsx)(tl, {
                    isOpen: w,
                    onClose: b
                })]
            })
        }
          , tm = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.Xr)(e9)
              , c = (0,
            l.Xr)(te)
              , d = (0,
            l.Xr)(tr)
              , [u,x] = (0,
            l.fp)(tt)
              , {formatDto: h} = ts()
              , {getViewState: p} = td();
            return ((0,
            a.useEffect)( () => {
                let {selectables: e, correct: n, fullSelectRequired: i} = h(t);
                if (r) {
                    let t = p(r);
                    o(t.order.reduce( (t, r) => {
                        let n = e.find(e => e.id === r);
                        return n ? [...t, n] : t
                    }
                    , [])),
                    c(n),
                    d(i),
                    x(t.answered.reduce( (t, r) => {
                        let n = e.find(e => e.id === r);
                        return n ? [...t, n] : t
                    }
                    , []));
                    return
                }
                o(e),
                c(n),
                d(i),
                x(void 0)
            }
            , [t, h, p, r, x, c, d, o]),
            u) ? (0,
            n.jsx)(i.A, {
                padding: 3,
                children: (0,
                n.jsx)(tn, {})
            }) : (0,
            n.jsx)(i.A, {
                padding: 3,
                children: (0,
                n.jsx)(th, {
                    onAnswered: s
                })
            })
        }
          , tg = e => {
            let {mode: t, modelAnswer: r, recognitionMode: i} = e;
            switch (t) {
            case "Correct":
                return (0,
                n.jsx)(tj, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(tv, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            default:
                return (0,
                n.jsx)(n.Fragment, {})
            }
        }
          , tj = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eX.Of, {
                    style: {
                        fontSize: 20,
                        color: d.Tj.correct,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(s.EY, {
                    size: "lg",
                    color: "correct",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tv = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eX.Of, {
                    style: {
                        fontSize: 20,
                        color: d.Tj.important,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(s.EY, {
                    size: "lg",
                    color: "important",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tf = e => {
            let {mode: t="Default", answeredText: r, recognitionMode: i} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(tb, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                n.jsx)(tw, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(ty, {
                    answeredText: r,
                    recognitionMode: i
                })
            }
        }
          , tb = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(c.VP, {
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.Tj.primaryWeak1),
                children: "Math" === r ? (0,
                n.jsx)(eX.Of, {
                    style: {
                        fontSize: 20,
                        color: d.Tj.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(s.EY, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tw = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.Tj.correctWeak),
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)(eX.Of, {
                    style: {
                        fontSize: 20,
                        color: d.Tj.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(s.EY, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })]
            })
        }
          , ty = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.Tj.importantWeak),
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)(eX.Of, {
                    style: {
                        fontSize: 20,
                        color: d.Tj.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(s.EY, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })]
            })
        }
          , tS = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: a} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(tC, {
                    width: r,
                    answeredText: i,
                    recognitionMode: a
                });
            case "Correct":
                return (0,
                n.jsx)(tk, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                n.jsx)(tA, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                })
            }
        }
          , tC = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.A, {
                width: t,
                children: (0,
                n.jsx)(tf, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , tk = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(c.fI, {
                alignItems: "center",
                columnGap: 2,
                children: [(0,
                n.jsx)(i.A, {
                    width: t,
                    children: (0,
                    n.jsx)(tf, {
                        mode: "Correct",
                        answeredText: r,
                        recognitionMode: a
                    })
                }), r !== l && (0,
                n.jsx)(i.A, {
                    flexShrink: 0,
                    children: (0,
                    n.jsx)(tg, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , tA = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(c.fI, {
                alignItems: "center",
                columnGap: 2,
                children: [(0,
                n.jsx)(i.A, {
                    width: t,
                    children: (0,
                    n.jsx)(tf, {
                        mode: "Incorrect",
                        answeredText: r,
                        recognitionMode: a
                    })
                }), l && (0,
                n.jsx)(i.A, {
                    flexShrink: 0,
                    children: (0,
                    n.jsx)(tg, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , tT = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: a} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(tI, {
                    width: r,
                    answeredText: i,
                    recognitionMode: a
                });
            case "Correct":
                return (0,
                n.jsx)(t_, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                n.jsx)(tE, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                })
            }
        }
          , tI = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.A, {
                width: t,
                children: (0,
                n.jsx)(tf, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , t_ = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(i.A, {
                width: t,
                children: [(0,
                n.jsx)(tf, {
                    mode: "Correct",
                    answeredText: r,
                    recognitionMode: a
                }), l && r !== l && (0,
                n.jsx)(c.VP, {
                    height: 72,
                    justifyContent: "center",
                    children: (0,
                    n.jsx)(tg, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , tE = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(i.A, {
                width: t,
                children: [(0,
                n.jsx)(tf, {
                    mode: "Incorrect",
                    answeredText: r,
                    recognitionMode: a
                }), (0,
                n.jsx)(c.VP, {
                    justifyContent: "center",
                    height: 72,
                    children: l && (0,
                    n.jsx)(tg, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , tR = (0,
        ex.eU)(void 0)
          , tN = (0,
        ex.eU)("1to1")
          , tM = (0,
        ex.eU)(!1)
          , tO = (0,
        ex.eU)(0)
          , tL = () => {
            let e = (0,
            l.md)(tR)
              , t = (0,
            l.md)(tN)
              , r = (0,
            O.MM)();
            return e ? (0,
            n.jsx)(tq, {
                apData: e,
                answerType: t,
                orientation: r
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , tq = e => {
            let {apData: t, answerType: r, orientation: i} = e;
            switch (r) {
            case "1to1":
                return (0,
                n.jsx)(tP, {
                    apData: t,
                    orientation: i
                });
            case "triple":
                return (0,
                n.jsx)(tW, {
                    apData: t,
                    orientation: i
                });
            default:
                return null
            }
        }
          , tP = e => {
            var t, r, l, a;
            let {apData: s, orientation: o} = e
              , [d,u] = s;
            if (!d || !u)
                return null;
            let x = tV(d.correct, d.answered)
              , h = tV(u.correct, u.answered)
              , p = "portrait" === o ? 200 : 180;
            return (0,
            n.jsx)(i.A, {
                display: "flex",
                justifyContent: "center",
                children: (0,
                n.jsxs)(c.VP, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(tz, {
                        mode: x,
                        height: p,
                        placeHolder: d.placeHolder,
                        svg: d.writtenSVG
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.fI, {
                        children: [(0,
                        n.jsx)(c.hK, {
                            x: 2
                        }), (0,
                        n.jsx)(tS, {
                            mode: x,
                            width: 240,
                            answeredText: null !== (l = d.answered) && void 0 !== l ? l : "",
                            modelAnswer: d.modelAnswer,
                            recognitionMode: null === (t = d.recognitionConfig) || void 0 === t ? void 0 : t.mode
                        })]
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 2
                    }), (0,
                    n.jsx)(tz, {
                        mode: h,
                        height: p,
                        placeHolder: u.placeHolder,
                        svg: u.writtenSVG
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.fI, {
                        children: [(0,
                        n.jsx)(c.hK, {
                            x: 2
                        }), (0,
                        n.jsx)(tS, {
                            mode: h,
                            width: 240,
                            answeredText: null !== (a = u.answered) && void 0 !== a ? a : "",
                            modelAnswer: u.modelAnswer,
                            recognitionMode: null === (r = u.recognitionConfig) || void 0 === r ? void 0 : r.mode
                        })]
                    })]
                })
            })
        }
          , tW = e => {
            var t, r, l, a, s, o;
            let {apData: d, orientation: u} = e
              , [x,h,p] = d;
            if (!x || !h || !p)
                return null;
            let m = tV(x.correct, x.answered)
              , g = tV(h.correct, h.answered)
              , j = tV(p.correct, p.answered)
              , v = "portrait" === u ? 200 : "100%";
            return (0,
            n.jsx)(c.VP, {
                height: "100%",
                children: (0,
                n.jsxs)(c.VP, {
                    width: "100%",
                    maxWidth: 712,
                    height: "100%",
                    alignSelf: "center",
                    children: [(0,
                    n.jsxs)(c.fI, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.A, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(tz, {
                                mode: m,
                                height: v,
                                placeHolder: x.placeHolder,
                                svg: x.writtenSVG
                            })
                        }), (0,
                        n.jsx)(c.hK, {
                            x: 3
                        }), (0,
                        n.jsx)(i.A, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(tz, {
                                mode: g,
                                height: v,
                                placeHolder: h.placeHolder,
                                svg: h.writtenSVG
                            })
                        })]
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 2
                    }), (0,
                    n.jsxs)(c.fI, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.A, {
                            width: "calc(50% - 8px)",
                            display: "flex",
                            justifyContent: "center",
                            children: (0,
                            n.jsxs)(c.VP, {
                                gap: 1,
                                children: [(0,
                                n.jsxs)(c.fI, {
                                    gap: 2,
                                    children: [(0,
                                    n.jsx)(tT, {
                                        mode: m,
                                        width: 120,
                                        answeredText: null !== (a = x.answered) && void 0 !== a ? a : "",
                                        modelAnswer: x.modelAnswer,
                                        recognitionMode: null === (t = x.recognitionConfig) || void 0 === t ? void 0 : t.mode
                                    }), (0,
                                    n.jsx)(tT, {
                                        mode: g,
                                        width: 120,
                                        answeredText: null !== (s = h.answered) && void 0 !== s ? s : "",
                                        modelAnswer: h.modelAnswer,
                                        recognitionMode: null === (r = h.recognitionConfig) || void 0 === r ? void 0 : r.mode
                                    })]
                                }), (0,
                                n.jsx)(i.A, {
                                    alignSelf: "end",
                                    width: 120,
                                    marginLeft: "auto",
                                    children: (0,
                                    n.jsx)(tT, {
                                        mode: j,
                                        answeredText: null !== (o = p.answered) && void 0 !== o ? o : "",
                                        modelAnswer: p.modelAnswer,
                                        recognitionMode: null === (l = p.recognitionConfig) || void 0 === l ? void 0 : l.mode
                                    })
                                })]
                            })
                        }), (0,
                        n.jsx)(c.hK, {
                            x: 3
                        }), (0,
                        n.jsx)(i.A, {
                            width: "calc(50% - 12px)",
                            children: (0,
                            n.jsx)(tz, {
                                mode: j,
                                height: v,
                                placeHolder: p.placeHolder,
                                svg: p.writtenSVG
                            })
                        })]
                    }), (0,
                    n.jsx)(c.hK, {
                        y: "portrait" === u ? 0 : 11
                    })]
                })
            })
        }
          , tz = e => {
            let {mode: t, height: r, placeHolder: i, svg: l} = e;
            return (0,
            n.jsx)(eX.kI, {
                mode: t,
                height: r,
                prefixLabel: i.label,
                suffixLabel: i.suffix,
                useLatexInLabel: i.useLatexInLabel,
                useLatexInSuffix: i.useLatexInSuffix,
                hasBackgroundImage: !1,
                children: (0,
                n.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                })
            })
        }
          , tV = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e.find(e => "text" === e.case ? e.value === t : new RegExp(e.value).test(t)) ? "Correct" : "Incorrect"
        }
          , tD = e => {
            let {children: t, area: r={
                width: "100%",
                height: "100%"
            }, diff: i={
                x: 0,
                y: 0
            }, zIndex: l=1, cursor: s="auto", onPointerUp: o, onPointerDown: c, onPointerMove: d} = e
              , [u,x] = (0,
            a.useState)()
              , h = (0,
            a.useRef)(null)
              , p = (0,
            a.useCallback)(e => {
                if (!h.current)
                    return;
                let {x: t, y: r} = h.current.getBoundingClientRect();
                x({
                    x: e.clientX - t - i.x,
                    y: e.clientY - r - i.y
                })
            }
            , [i])
              , m = (0,
            a.useCallback)(e => {
                p(e),
                null == c || c(e)
            }
            , [p, c])
              , g = (0,
            a.useCallback)(e => {
                p(e),
                null == d || d(e)
            }
            , [p, d]);
            return (0,
            n.jsx)("div", {
                ref: h,
                style: {
                    width: r.width,
                    height: r.height,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: l,
                    cursor: s
                },
                onPointerUp: o,
                onPointerDown: m,
                onPointerMove: g,
                onPointerOut: () => x(void 0),
                children: u && (0,
                n.jsx)("div", {
                    style: {
                        transform: "translate(".concat(u.x, "px, ").concat(u.y, "px)"),
                        pointerEvents: "none",
                        userSelect: "none"
                    },
                    children: t
                })
            })
        }
          , tH = {
            Japanese: {
                type: "TEXT",
                lang: "ja_JP"
            },
            English: {
                type: "TEXT",
                lang: "en_US"
            },
            Math: {
                type: "MATH",
                lang: "en_US"
            }
        }
          , tX = e => {
            let t = (0,
            a.useMemo)( () => new Event("disconnected"), [])
              , r = (0,
            a.useRef)()
              , n = (0,
            a.useCallback)( () => {
                var t;
                let r = null === (t = e.current) || void 0 === t ? void 0 : t.querySelector('svg[data-layer="MODEL"]');
                return r ? r.cloneNode(!0).outerHTML : ""
            }
            , [e])
              , i = (0,
            a.useCallback)( () => {
                var n, i;
                let l = e.current;
                if (!l)
                    return;
                let a = null === (n = e.current) || void 0 === n ? void 0 : n.editor.recognizerContext.websocket;
                if ((null == a ? void 0 : a.readyState) !== window.WebSocket.OPEN) {
                    console.log("websocket.readyState != 1"),
                    null === (i = l.editor) || void 0 === i || i.close();
                    return
                }
                a.send(JSON.stringify({
                    type: "ping"
                })),
                clearTimeout(r.current),
                r.current = window.setTimeout( () => {
                    var e, r;
                    null == l || null === (e = l.editor) || void 0 === e || e.clear(),
                    null == l || null === (r = l.editor) || void 0 === r || r.close(),
                    console.log("websocket connection was disconnected by ping timeout."),
                    null == l || l.dispatchEvent(t)
                }
                , 5e3)
            }
            , [e, t])
              , l = (0,
            a.useCallback)( () => {
                let t = e.current;
                t && t.editor.recognizerContext.websocket.addEventListener("message", e => {
                    var t;
                    "pong" === (null === (t = JSON.parse(e.data)) || void 0 === t ? void 0 : t.type) && clearTimeout(r.current)
                }
                )
            }
            , [e])
              , s = (0,
            a.useCallback)( (e, t) => {
                var r;
                return {
                    text: "Math" === t ? e.detail.exports["application/x-latex"] : null === (r = JSON.parse(e.detail.exports["application/vnd.myscript.jiix"])) || void 0 === r ? void 0 : r.label,
                    svg: n()
                }
            }
            , [n])
              , o = (0,
            a.useCallback)(r => {
                let n = e.current;
                if (!n)
                    return;
                let i = n.querySelector(".error-msg");
                i && (i.style.display = "none");
                let l = null == r ? void 0 : r.detail.type;
                ("close" === l || "timeout" === l) && (console.log("websocket connection was disconnected by ".concat(l)),
                n.dispatchEvent(t))
            }
            , [e, t])
              , c = (0,
            a.useCallback)(async r => {
                let {mode: n, useLK: i, sk: l} = r
                  , a = e.current;
                if (a && window.iink)
                    try {
                        let e = await (await fetch((0,
                        eN.o)("myscript.json"))).json();
                        window.iink.register(a, {
                            recognitionParams: {
                                type: tH[n].type,
                                protocol: "WEBSOCKET",
                                server: e,
                                iink: {
                                    lang: tH[n].lang,
                                    gesture: {
                                        enable: !1
                                    },
                                    math: {
                                        mimeTypes: ["application/x-latex", "application/vnd.myscript.jiix"]
                                    },
                                    text: {
                                        configuration: {
                                            addLKText: i,
                                            customResources: l ? ["NO_EMOJIS", l] : ["NO_EMOJIS"]
                                        },
                                        guides: {
                                            enable: !1
                                        },
                                        smartGuide: !1
                                    }
                                }
                            }
                        })
                    } catch (e) {
                        console.error(e),
                        a.dispatchEvent(t)
                    }
            }
            , [e, t])
              , d = (0,
            a.useCallback)(e => {
                let t = []
                  , r = []
                  , n = []
                  , i = -1
                  , l = -1;
                for (let a = 0; a < 36; a++) {
                    let s = Math.round(e.x + 1 * Math.cos(10 * a * (Math.PI / 180)))
                      , o = Math.round(e.y + 1 * Math.sin(10 * a * (Math.PI / 180)));
                    (i !== s || l !== o) && (t.push(s),
                    r.push(o),
                    n.push(e.t),
                    i = s,
                    l = o)
                }
                let a = e.radius - 4;
                for (let s = 0; s < 36; s++) {
                    let o = Math.round(e.x + a * Math.cos(10 * s * (Math.PI / 180)))
                      , c = Math.round(e.y + a * Math.sin(10 * s * (Math.PI / 180)));
                    (i !== o || l !== c) && (t.push(o),
                    r.push(c),
                    n.push(e.t),
                    i = o,
                    l = c)
                }
                return {
                    pointerType: "eraser",
                    pointerId: 1,
                    x: t,
                    y: r,
                    t: n
                }
            }
            , []);
            return {
                sendPing: i,
                opened: l,
                recognized: s,
                error: o,
                init: c,
                eraseLine: (0,
                a.useCallback)( (t, r) => {
                    let n = e.current;
                    if (!n)
                        return;
                    let {x: i, y: l} = n.getBoundingClientRect()
                      , a = d({
                        x: t.clientX - i,
                        y: t.clientY - l,
                        t: new Date().getTime(),
                        radius: r
                    });
                    n.editor.pointerEvents({
                        events: [a]
                    })
                }
                , [e, d])
            }
        }
          , tJ = (0,
        a.forwardRef)( (e, t) => {
            let {width: r, height: i=240, mode: l, recognitionConfig: s, onOpened: o, onRecognizing: c, onRecognized: d, onDisconnected: u} = e
              , [x,h] = (0,
            a.useState)(!1)
              , p = (0,
            a.useMemo)( () => "eraser" === l, [l])
              , {sendPing: m, opened: g, recognized: j, error: v, init: f, eraseLine: b} = tX(t)
              , w = (0,
            a.useCallback)( () => {
                g(),
                null == o || o()
            }
            , [g, o])
              , y = (0,
            a.useCallback)(e => {
                let {text: t, svg: r} = j(e, s.mode);
                d(t, r)
            }
            , [s.mode, j, d])
              , S = (0,
            a.useCallback)(e => {
                h(!0),
                p && b(e, 30)
            }
            , [p, b])
              , C = (0,
            a.useCallback)(e => {
                x && p && b(e, 30)
            }
            , [x, p, b]);
            return (0,
            a.useEffect)( () => {
                let e = t.current;
                if (e)
                    return e.addEventListener("loaded", w),
                    e.addEventListener("exported", y),
                    e.addEventListener("error", v),
                    e.addEventListener("pointerup", m),
                    c && e.addEventListener("pointerdown", c),
                    u && e.addEventListener("disconnected", u),
                    f(s),
                    () => {
                        var t;
                        e.removeEventListener("loaded", w),
                        e.removeEventListener("exported", y),
                        e.removeEventListener("error", v),
                        e.removeEventListener("pointerup", m),
                        c && e.removeEventListener("pointerdown", c),
                        u && e.removeEventListener("disconnected", u),
                        null === (t = e.editor) || void 0 === t || t.close()
                    }
            }
            , [t, s, u, c, w, y, v, m, f]),
            (0,
            a.useEffect)( () => {
                let e = () => h(!1);
                return document.addEventListener("pointerup", e),
                () => {
                    document.removeEventListener("pointerup", e)
                }
            }
            , []),
            (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)("div", {
                    ref: t,
                    style: {
                        width: r,
                        height: i,
                        zIndex: 20
                    }
                }), (0,
                n.jsx)(tD, {
                    area: {
                        width: r,
                        height: i
                    },
                    diff: {
                        x: 30,
                        y: 30
                    },
                    zIndex: p ? 21 : 1,
                    cursor: x ? "none" : "auto",
                    onPointerDown: S,
                    onPointerMove: C,
                    children: p && x && (0,
                    n.jsx)(eR(), {
                        src: (0,
                        eN.o)("png/icon_eraser_cursor.png"),
                        width: 60,
                        height: 60,
                        alt: "eraser"
                    })
                })]
            })
        }
        );
        tJ.displayName = "MyScriptRecognizer";
        let tB = a.memo(tJ);
        var tK = r(18742);
        let tF = () => {
            let[e,t] = (0,
            l.fp)(tO)
              , [r,n] = (0,
            a.useState)();
            return {
                currentPopup: r,
                setPopup: (0,
                a.useCallback)(r => {
                    switch (r) {
                    case "correct":
                        n("correct");
                        break;
                    case "incorrect":
                        0 === e ? (t(1),
                        n("redo")) : n("incorrect");
                        break;
                    case "empty":
                        t(1),
                        n("incorrect")
                    }
                }
                , [e, t]),
                hidePopup: (0,
                a.useCallback)( () => {
                    n(void 0)
                }
                , [])
            }
        }
        ;
        var tU = r(72376)
          , tY = r(2163);
        let tG = () => {
            let {forceReplace: e} = (0,
            tY.bt)()
              , {replace: t} = (0,
            tY.Q$)()
              , r = (0,
            a.useCallback)( (e, r, n) => {
                for (let i of r)
                    if ("text" === i.case) {
                        let {result: r, isMatched: l} = t(e, i.value, n);
                        if (l)
                            return r
                    } else if ("regex" === i.case && new RegExp(i.value).test(e))
                        return e
            }
            , [t])
              , n = (0,
            a.useCallback)(t => {
                let {correct: n, text: i, gradeId: l, replaceType: a} = t;
                if (!i || 0 === i.length)
                    return {
                        result: "empty",
                        text: ""
                    };
                let s = "english" === a ? " " : ""
                  , o = i.replace(/\n/g, s)
                  , c = r(o, n, a);
                if (c)
                    return {
                        result: "correct",
                        text: c
                    };
                let d = e(o, l, a)
                  , u = n.map(e => e.value)
                  , x = (0,
                tU.q)(a, u, d)
                  , h = r(x, n, a);
                return h ? {
                    result: "correct",
                    text: h
                } : {
                    result: "incorrect",
                    text: x
                }
            }
            , [r, e]);
            return {
                validate: (0,
                a.useCallback)(e => {
                    let t = e.map(n)
                      , r = t.some(e => {
                        let {result: t} = e;
                        return "empty" === t
                    }
                    )
                      , i = t.every(e => {
                        let {result: t} = e;
                        return "correct" === t
                    }
                    );
                    return r ? "empty" : i ? "correct" : "incorrect"
                }
                , [n]),
                validateSingle: n
            }
        }
        ;
        var tQ = r(18011);
        let t$ = (e, t) => {
            let r = (0,
            l.md)(tO)
              , n = (0,
            l.Xr)(tM)
              , i = (0,
            l.Xr)(tR)
              , [s,o] = (0,
            l.fp)(tQ.z)
              , [c,d] = (0,
            a.useState)( () => e.map(e => ({
                answeredText: "",
                answeredSvg: "",
                isRecognizing: !1,
                recognitionConfig: e.recognitionConfig,
                placeHolder: e.placeHolder,
                gradeId: e.gradeId,
                replaceType: e.replaceType
            })))
              , [u,x] = (0,
            a.useState)(!1)
              , [h,p] = (0,
            a.useState)(!1)
              , [m,g] = (0,
            a.useState)(!1)
              , {validate: j, validateSingle: v} = tG()
              , {currentPopup: f, setPopup: b, hidePopup: w} = tF()
              , y = (0,
            a.useMemo)( () => c.some(e => {
                let {isRecognizing: t} = e;
                return t
            }
            ) || u, [u, c])
              , S = (0,
            a.useCallback)( () => {
                if (s) {
                    g(!0);
                    return
                }
                let t = j(c.map( (t, r) => {
                    let {answeredText: n} = t;
                    return {
                        text: n,
                        correct: e[r].correct,
                        replaceType: e[r].replaceType,
                        gradeId: e[r].gradeId
                    }
                }
                ));
                "empty" === t ? p(!0) : b(t)
            }
            , [e, s, c, j, b])
              , C = (0,
            a.useCallback)( () => {
                if (w(),
                "redo" === f)
                    return;
                let l = ey.aJ.CORRECT
                  , a = c.map(e => {
                    let {answeredText: t} = e;
                    return t
                }
                )
                  , s = {
                    items: null == e ? void 0 : e.map( (e, t) => {
                        var r, n;
                        return {
                            answered: null === (r = c[t]) || void 0 === r ? void 0 : r.answeredText,
                            svg: null === (n = c[t]) || void 0 === n ? void 0 : n.answeredSvg
                        }
                    }
                    )
                };
                n(!0),
                i(e => null == e ? void 0 : e.map( (e, t) => {
                    var r, n;
                    return {
                        ...e,
                        answered: null === (r = c[t]) || void 0 === r ? void 0 : r.answeredText,
                        writtenSVG: null === (n = c[t]) || void 0 === n ? void 0 : n.answeredSvg
                    }
                }
                )),
                t({
                    answer: {
                        result: l,
                        textType: 2,
                        text: "".concat(a),
                        wrongCount: r
                    },
                    viewStateJSON: s
                })
            }
            , [e, f, w, t, i, n, c, r])
              , k = (0,
            a.useCallback)( () => {
                p(!1),
                b(j(c.map( (t, r) => {
                    let {answeredText: n} = t;
                    return {
                        text: n,
                        correct: e[r].correct,
                        replaceType: e[r].replaceType,
                        gradeId: e[r].gradeId
                    }
                }
                )))
            }
            , [c, b, j, e])
              , A = (0,
            a.useCallback)( () => {
                p(!1)
            }
            , [])
              , T = (0,
            a.useCallback)(e => {
                d(t => t.map( (t, r) => r === e ? {
                    ...t,
                    isRecognizing: !0
                } : t))
            }
            , [])
              , I = (0,
            a.useCallback)( (t, r, n) => {
                let i = v({
                    text: r,
                    correct: e[t].correct,
                    gradeId: e[t].gradeId,
                    replaceType: e[t].replaceType
                });
                d(e => e.map( (e, r) => r === t ? {
                    ...e,
                    answeredText: i.text,
                    answeredSvg: n,
                    isRecognizing: !1
                } : e))
            }
            , [e, v])
              , _ = (0,
            a.useCallback)( () => {
                i(e => null == e ? void 0 : e.map(e => ({
                    ...e,
                    answered: "",
                    writtenSVG: ""
                }))),
                d(e => e.map(e => ({
                    ...e,
                    answeredText: "",
                    answeredSvg: ""
                }))),
                x(!0)
            }
            , [i])
              , E = (0,
            a.useCallback)( () => {
                x(!1)
            }
            , [])
              , R = (0,
            a.useCallback)( () => {
                o(!1),
                g(!1),
                S()
            }
            , [o, S]);
            return {
                writingInfos: c,
                isOpenReconnectMessage: u,
                isOpenEmptyAnswerDialog: h,
                isOpenKatexErrorDialog: m,
                currentPopup: f,
                unanswerable: y,
                startAnswerProcess: S,
                endAnswerProcess: C,
                startDialogAnswerProcess: k,
                hidePopup: w,
                hideDialog: A,
                recognizing: T,
                recognized: I,
                disconnected: _,
                reconnect: E,
                handleKatexErrorDialogContinue: R,
                handleKatexErrorDialogClose: (0,
                a.useCallback)( () => {
                    g(!1)
                }
                , [])
            }
        }
        ;
        var tZ = r(7308);
        let t0 = () => ({
            formatDto: (0,
            a.useCallback)(e => {
                let t = e.childAnswerList.reduce( (e, t) => {
                    let {apData: r} = t;
                    return "apHandWrite" === r.case ? [...e, r.value] : e
                }
                , []).map( (e, t) => {
                    var r;
                    let n = e.correctAnswerList.reduce( (e, t) => {
                        let {option: r} = t;
                        if (!r.case || !r.value)
                            return e;
                        if ("text" === r.case) {
                            let t = (0,
                            tY.fm)(r.value);
                            return [...e, {
                                case: "text",
                                value: t = (0,
                                tY.qu)(t)
                            }]
                        }
                        return [...e, r]
                    }
                    , [])
                      , i = e.interactiveInkSetting
                      , l = i ? (0,
                    eX.uy)(i) : "Math"
                      , a = e.useLk
                      , s = e.skNameOptional.value
                      , o = (0,
                    tZ.A)(e.replaceType)
                      , c = e.gradeId;
                    return {
                        id: t,
                        recognitionConfig: {
                            mode: l,
                            useLK: a,
                            sk: s
                        },
                        placeHolder: null !== (r = e.placeHolder) && void 0 !== r ? r : new ev.ml,
                        correct: n,
                        modelAnswer: e.displayAnswerText,
                        answered: void 0,
                        writtenSVG: "",
                        replaceType: o,
                        gradeId: c
                    }
                }
                )
                  , r = t.length > 2 ? "triple" : "1to1";
                return {
                    apData: t,
                    answerType: r
                }
            }
            , [])
        })
          , t1 = () => ({
            getViewState: (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState) {
                    var n;
                    return {
                        items: (n = r.apViewState).recognizedTexts.map( (e, t) => {
                            let r = n.svgList;
                            return {
                                answered: e,
                                svg: r ? r[t] : ""
                            }
                        }
                        )
                    }
                }
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), [])
        })
          , t2 = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(tR)
              , i = (0,
            l.md)(tN)
              , a = (0,
            l.md)(tO)
              , s = (0,
            O.MM)();
            return r ? (0,
            n.jsx)(t4, {
                apData: r,
                answerType: i,
                wrongCount: a,
                orientation: s,
                onAnswered: t
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , t4 = e => {
            let {apData: t, answerType: r, wrongCount: i, orientation: l, onAnswered: a} = e;
            switch (r) {
            case "1to1":
                return (0,
                n.jsx)(t3, {
                    apData: t,
                    wrongCount: i,
                    orientation: l,
                    onAnswered: a
                });
            case "triple":
                return (0,
                n.jsx)(t8, {
                    apData: t,
                    wrongCount: i,
                    orientation: l,
                    onAnswered: a
                })
            }
        }
          , t3 = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {writingInfos: o, isOpenReconnectMessage: d, isOpenEmptyAnswerDialog: u, isOpenKatexErrorDialog: x, currentPopup: h, unanswerable: p, startAnswerProcess: m, endAnswerProcess: g, startDialogAnswerProcess: j, hidePopup: v, hideDialog: f, recognizing: b, recognized: w, disconnected: y, reconnect: S, handleKatexErrorDialogContinue: C, handleKatexErrorDialogClose: k} = t$(t, l)
              , A = (0,
            a.useCallback)( () => {
                b(0)
            }
            , [b])
              , T = (0,
            a.useCallback)( () => {
                b(1)
            }
            , [b])
              , I = (0,
            a.useCallback)( (e, t) => {
                w(0, e, t)
            }
            , [w])
              , _ = (0,
            a.useCallback)( (e, t) => {
                w(1, e, t)
            }
            , [w])
              , [E,R] = o;
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                children: [(0,
                n.jsxs)(c.VP, {
                    width: "100%",
                    maxWidth: 712,
                    alignSelf: "center",
                    children: [(0,
                    n.jsx)(t5, {
                        height: 200,
                        recognitionConfig: E.recognitionConfig,
                        connected: !d,
                        placeHolder: E.placeHolder,
                        recognizing: A,
                        recognized: I,
                        onDisconnected: y
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.fI, {
                        children: [(0,
                        n.jsx)(c.hK, {
                            x: 2
                        }), (0,
                        n.jsx)(tS, {
                            width: 240,
                            answeredText: E.answeredText,
                            recognitionMode: E.recognitionConfig.mode
                        })]
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 2
                    }), (0,
                    n.jsx)(t5, {
                        height: 200,
                        recognitionConfig: R.recognitionConfig,
                        connected: !d,
                        placeHolder: R.placeHolder,
                        recognizing: T,
                        recognized: _,
                        onDisconnected: y
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.fI, {
                        children: [(0,
                        n.jsx)(c.hK, {
                            x: 2
                        }), (0,
                        n.jsx)(tS, {
                            width: 240,
                            answeredText: R.answeredText,
                            recognitionMode: R.recognitionConfig.mode
                        })]
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 1
                    })]
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 200,
                    height: 72,
                    children: (0,
                    n.jsx)(s.yh, {
                        text: "解答する",
                        disabled: p,
                        onClick: m
                    })
                }), (0,
                n.jsx)(eX.Xn, {
                    isOpen: d,
                    y: 24,
                    onClick: S
                }), h && (0,
                n.jsx)(tK.z, {
                    result: h,
                    portalElem: "portrait" === r ? "body" : H.y,
                    handleOnStop: "redo" === h ? v : g
                }), (0,
                n.jsx)(eX.Ml, {
                    isOpen: u,
                    onClickAnswer: j,
                    onClickCancel: f
                }), (0,
                n.jsx)(eX.Og, {
                    isOpen: x,
                    title: "読みとれない解答があります",
                    onClickCancel: k,
                    onClickContinue: C,
                    onClose: k
                })]
            })
        }
          , t8 = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {writingInfos: o, isOpenReconnectMessage: d, isOpenEmptyAnswerDialog: u, isOpenKatexErrorDialog: x, currentPopup: h, unanswerable: p, startAnswerProcess: m, endAnswerProcess: g, startDialogAnswerProcess: j, hidePopup: v, hideDialog: f, recognizing: b, recognized: w, disconnected: y, reconnect: S, handleKatexErrorDialogContinue: C, handleKatexErrorDialogClose: k} = t$(t, l)
              , A = (0,
            a.useCallback)( () => {
                b(0)
            }
            , [b])
              , T = (0,
            a.useCallback)( () => {
                b(1)
            }
            , [b])
              , I = (0,
            a.useCallback)( () => {
                b(2)
            }
            , [b])
              , _ = (0,
            a.useCallback)( (e, t) => {
                w(0, e, t)
            }
            , [w])
              , E = (0,
            a.useCallback)( (e, t) => {
                w(1, e, t)
            }
            , [w])
              , R = (0,
            a.useCallback)( (e, t) => {
                w(2, e, t)
            }
            , [w])
              , [N,M,O] = o
              , L = "portrait" === r
              , q = L ? 200 : "100%";
            return (0,
            n.jsxs)(c.VP, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.VP, {
                    width: "100%",
                    maxWidth: 712,
                    height: "100%",
                    alignSelf: "center",
                    flex: 1,
                    children: [(0,
                    n.jsxs)(c.fI, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.A, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(t5, {
                                height: q,
                                recognitionConfig: N.recognitionConfig,
                                connected: !d,
                                placeHolder: N.placeHolder,
                                recognizing: A,
                                recognized: _,
                                onDisconnected: y
                            })
                        }), (0,
                        n.jsx)(c.hK, {
                            x: 3
                        }), (0,
                        n.jsx)(i.A, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(t5, {
                                height: q,
                                recognitionConfig: M.recognitionConfig,
                                connected: !d,
                                placeHolder: M.placeHolder,
                                recognizing: T,
                                recognized: E,
                                onDisconnected: y
                            })
                        })]
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 2
                    }), (0,
                    n.jsxs)(c.fI, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.A, {
                            width: "calc(50% - 8px)",
                            display: "flex",
                            justifyContent: "center",
                            flex: 1,
                            children: (0,
                            n.jsxs)(c.VP, {
                                gap: 1,
                                children: [(0,
                                n.jsxs)(c.fI, {
                                    gap: 2,
                                    children: [(0,
                                    n.jsx)(tS, {
                                        width: 120,
                                        answeredText: N.answeredText,
                                        recognitionMode: N.recognitionConfig.mode
                                    }), (0,
                                    n.jsx)(tS, {
                                        width: 120,
                                        answeredText: M.answeredText,
                                        recognitionMode: M.recognitionConfig.mode
                                    })]
                                }), (0,
                                n.jsx)(i.A, {
                                    alignSelf: "end",
                                    width: 120,
                                    marginLeft: "auto",
                                    children: (0,
                                    n.jsx)(tS, {
                                        answeredText: O.answeredText,
                                        recognitionMode: O.recognitionConfig.mode
                                    })
                                })]
                            })
                        }), (0,
                        n.jsx)(c.hK, {
                            x: 3
                        }), (0,
                        n.jsx)(i.A, {
                            width: "calc(50% - 12px)",
                            children: (0,
                            n.jsx)(t5, {
                                height: q,
                                recognitionConfig: O.recognitionConfig,
                                connected: !d,
                                placeHolder: O.placeHolder,
                                recognizing: I,
                                recognized: R,
                                onDisconnected: y
                            })
                        })]
                    })]
                }), (0,
                n.jsx)(c.hK, {
                    y: 2
                }), (0,
                n.jsx)(i.A, {
                    alignSelf: "end",
                    children: (0,
                    n.jsx)(s.yh, {
                        text: "解答する",
                        disabled: p,
                        onClick: m
                    })
                }), (0,
                n.jsx)(eX.Xn, {
                    isOpen: d,
                    y: 24,
                    onClick: S
                }), h && (0,
                n.jsx)(tK.z, {
                    result: h,
                    portalElem: L ? "body" : H.y,
                    handleOnStop: "redo" === h ? v : g
                }), (0,
                n.jsx)(eX.Ml, {
                    isOpen: u,
                    onClickAnswer: j,
                    onClickCancel: f
                }), (0,
                n.jsx)(eX.Og, {
                    isOpen: x,
                    title: "読みとれない解答があります",
                    onClickCancel: k,
                    onClickContinue: C,
                    onClose: k
                })]
            })
        }
          , t5 = e => {
            let {height: t, recognitionConfig: r, connected: i, placeHolder: s, recognizing: c, recognized: d, onDisconnected: u} = e
              , x = (0,
            l.md)(L.HK)
              , h = (0,
            a.useRef)(null)
              , {elementRef: p, elementSize: m} = (0,
            o.wY)()
              , {onPointerDown: g, onPointerUp: j} = (0,
            eX.$D)()
              , v = (0,
            a.useCallback)( () => {
                c(),
                g()
            }
            , [c])
              , f = (0,
            a.useCallback)( (e, t) => {
                d(e, t),
                j()
            }
            , [d]);
            return (0,
            n.jsx)(eX.kI, {
                ref: p,
                height: t,
                prefixLabel: s.label,
                suffixLabel: s.suffix,
                useLatexInLabel: s.useLatexInLabel,
                useLatexInSuffix: s.useLatexInSuffix,
                hasBackgroundImage: !1,
                children: i && (0,
                n.jsx)(tB, {
                    ref: h,
                    width: m.width,
                    height: m.height,
                    mode: "eraser" === x ? "eraser" : "pen",
                    recognitionConfig: r,
                    onOpened: void 0,
                    onRecognizing: v,
                    onRecognized: f,
                    onDisconnected: u
                })
            })
        }
          , t6 = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.Xr)(tR)
              , c = (0,
            l.Xr)(tO)
              , [d,u] = (0,
            l.fp)(tN)
              , [x,h] = (0,
            l.fp)(tM)
              , p = (0,
            O.MM)()
              , {formatDto: m} = t0()
              , {getViewState: g} = t1();
            return ((0,
            a.useEffect)( () => {
                let {apData: e, answerType: n} = m(t);
                if (r) {
                    let i = g(t, r);
                    o(e.map( (e, t) => (e.answered = i.items[t].answered,
                    e.writtenSVG = i.items[t].svg,
                    e))),
                    u(n),
                    h(!0);
                    return
                }
                return o(e),
                u(n),
                () => {
                    o(void 0),
                    c(0),
                    u("1to1"),
                    h(!1)
                }
            }
            , [t, m, g, r, u, o, h, c]),
            x) ? (0,
            n.jsx)(i.A, {
                pt: 2,
                pb: "portrait" === p ? 3 : "1to1" === d ? 12 : 2,
                px: 2,
                flex: 1,
                children: (0,
                n.jsx)(tL, {})
            }) : (0,
            n.jsx)(i.A, {
                p: 2,
                flex: 1,
                children: (0,
                n.jsx)(t2, {
                    onAnswered: s
                })
            })
        }
          , t7 = e => {
            let {correct: t, isEnglish: r} = e
              , i = r ? function(e) {
                let t = ["?", "!", '"', ".", "？", "！", "”", "．"]
                  , r = (r, n) => {
                    var i;
                    let l = null === (i = e[n - 1]) || void 0 === i ? void 0 : i.slice(-1);
                    return r && 0 === n || l && t.includes(l) ? "".concat(r[0].toUpperCase()).concat(r.slice(1)) : r
                }
                ;
                return e.map( (e, t) => r(e, t))
            }(t) : t;
            return (0,
            n.jsx)(x.qV, {
                src: i.join(" "),
                style: {
                    fontSize: 20,
                    color: d.Tj.important
                }
            })
        }
        ;
        var t9 = r(82790);
        let re = a.memo(e => {
            let {mode: t, width: r="auto"} = e;
            switch (t) {
            case "Order":
                return (0,
                n.jsx)(i.A, {
                    minWidth: 72,
                    width: r,
                    height: 64,
                    px: 2,
                    bgcolor: d.Tj.onSurfaceWeak4,
                    border: "1px solid ".concat((0,
                    d.au)("onSurfaceWeak2", .3)),
                    borderRadius: 1
                });
            case "Selection":
                return (0,
                n.jsx)(i.A, {
                    width: 72,
                    height: 64,
                    borderRadius: 1
                })
            }
        }
        );
        re.displayName = "EmptyBlock";
        let rt = a.memo(e => {
            let {value: t, width: r="auto"} = e;
            return (0,
            n.jsx)(c.ov, {
                minWidth: 72,
                width: r,
                height: 64,
                px: 2,
                border: "1px solid ".concat((0,
                d.au)("onSurfaceWeak2", .3)),
                borderRadius: 1,
                bgcolor: d.Tj.surface,
                sx: {
                    cursor: "default",
                    userSelect: "none"
                },
                children: (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.onSurface
                    },
                    weight: "bold"
                })
            })
        }
        );
        rt.displayName = "WordBlock";
        let rr = e => {
            let {mode: t, items: r, isEnglishText: i, onClickItem: l} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(ri, {
                    items: r,
                    isEnglishText: i,
                    onClickItem: l
                });
            case "Correct":
                return (0,
                n.jsx)(rl, {
                    items: r,
                    isEnglishText: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(ra, {
                    items: r,
                    isEnglishText: i
                })
            }
        }
          , rn = ["?", "!", '"', ".", "？", "！", "”", "．"]
          , ri = e => {
            let {children: t, items: r, isEnglishText: l, onClickItem: a} = e
              , s = (e, t) => {
                var n, i;
                let l = null === (i = r[t - 1]) || void 0 === i ? void 0 : null === (n = i.text) || void 0 === n ? void 0 : n.slice(-1);
                return e && 0 === t || l && rn.includes(l) ? "".concat(e[0].toUpperCase()).concat(e.slice(1)) : e
            }
            ;
            return (0,
            n.jsxs)(c.fI, {
                position: "relative",
                flexWrap: "wrap",
                gap: 1,
                alignItems: "center",
                width: "fit-content",
                sx: {
                    userSelect: "none"
                },
                children: [r.map( (e, t) => {
                    let {id: r, text: o, movable: c} = e;
                    return c ? (0,
                    n.jsx)(i.A, {
                        id: r,
                        children: o ? (0,
                        n.jsx)(rs, {
                            id: r,
                            onClick: a,
                            children: (0,
                            n.jsx)(rt, {
                                value: l ? s(o, t) : o
                            })
                        }, r) : (0,
                        n.jsx)(ro, {
                            id: r,
                            children: (0,
                            n.jsx)(re, {
                                mode: "Order"
                            })
                        }, r)
                    }, r) : o && (0,
                    n.jsx)(x.qV, {
                        src: l ? s(o, t) : o,
                        style: {
                            height: 64,
                            fontSize: 20,
                            color: d.Tj.onSurface,
                            display: "flex",
                            alignItems: "center"
                        }
                    })
                }
                ), t]
            })
        }
          , rl = e => {
            let {items: t, isEnglishText: r} = e;
            return (0,
            n.jsx)(ri, {
                items: t,
                isEnglishText: r,
                children: (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })
            })
        }
          , ra = e => {
            let {items: t, isEnglishText: r} = e;
            return (0,
            n.jsx)(i.A, {
                children: (0,
                n.jsx)(ri, {
                    items: t,
                    isEnglishText: r,
                    children: (0,
                    n.jsx)(i.A, {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        margin: "auto",
                        width: 48,
                        height: 48,
                        children: (0,
                        n.jsx)(s._n, {
                            name: "correctionX",
                            width: 48,
                            height: 48
                        })
                    })
                })
            })
        }
          , rs = e => {
            let {children: t, id: r, onClick: i} = e
              , {attributes: l, listeners: a, setNodeRef: s, isDragging: o} = (0,
            t9.PM)({
                id: r
            });
            return o ? (0,
            n.jsx)(re, {
                mode: "Order"
            }) : (0,
            n.jsx)("div", {
                ref: s,
                id: r,
                ...a,
                ...l,
                onClick: i,
                children: t
            })
        }
          , ro = e => {
            let {children: t, id: r} = e
              , {setNodeRef: i, isOver: l} = (0,
            t9.zM)({
                id: r
            });
            return (0,
            n.jsx)("div", {
                ref: i,
                style: {
                    opacity: l ? .5 : 1
                },
                children: t
            })
        }
          , rc = (0,
        ex.eU)([])
          , rd = (0,
        ex.eU)([])
          , ru = (0,
        ex.eU)([])
          , rx = (0,
        ex.eU)([])
          , rh = (0,
        ex.eU)(!1)
          , rp = (0,
        ex.eU)(0)
          , rm = () => {
            let e = (0,
            l.md)(ru)
              , t = (0,
            l.md)(rd)
              , r = (0,
            l.md)(rh);
            return (0,
            n.jsx)(rg, {
                answered: e,
                correct: t,
                isEnglishText: r
            })
        }
          , rg = e => {
            let {answered: t, correct: r, isEnglishText: l} = e;
            return t.every( (e, t) => {
                let {text: n} = e;
                return n === r[t]
            }
            ) ? (0,
            n.jsx)(i.A, {
                width: "100%",
                children: (0,
                n.jsx)(rr, {
                    mode: "Correct",
                    items: t,
                    isEnglishText: l
                })
            }) : (0,
            n.jsxs)(c.VP, {
                width: "100%",
                children: [(0,
                n.jsx)(rr, {
                    mode: "Incorrect",
                    items: t,
                    isEnglishText: l
                }), (0,
                n.jsx)(c.hK, {
                    y: 1
                }), (0,
                n.jsx)(t7, {
                    correct: r,
                    isEnglish: l
                })]
            })
        }
        ;
        var rj = r(43627)
          , rv = r(74979)
          , rf = r(37032);
        let rb = (e, t) => Math.floor(Math.random() * (t - e + 1) + e)
          , rw = () => ({
            formatDto: (0,
            a.useCallback)(e => {
                let t = e.correctList.map( (e, t) => ({
                    index: t,
                    text: e.text,
                    movable: e.entryStyle === ev.k4.MOVABLE
                }))
                  , r = e.dummyList.map(e => e.text)
                  , n = 0
                  , i = 0
                  , l = t.map(e => e.movable ? {
                    id: "Placeholder[".concat(n++, "]"),
                    text: void 0,
                    movable: !0
                } : {
                    id: "Fixed[".concat(i++, "]"),
                    text: e.text,
                    movable: !1
                })
                  , a = t.filter(e => e.movable).map( (e, t) => ({
                    id: "Correct[".concat(t, "]"),
                    text: e.text,
                    movable: e.movable
                }))
                  , s = [...a, ...r.map( (e, t) => ({
                    id: "Dummy[".concat(t, "]"),
                    text: e,
                    movable: !0
                }))].sort( () => Math.random() - .5);
                if (s.length > 1 && s[0].text === a[0].text) {
                    let e = rb(1, s.length - 1);
                    [s[0],s[e]] = [s[e], s[0]]
                }
                return {
                    answeringItems: l,
                    correctTexts: e.correctList.map(e => {
                        let {text: t} = e;
                        return t
                    }
                    ),
                    selectableItems: s,
                    isEnglishText: e.isEnglishText
                }
            }
            , [])
        })
          , ry = () => {
            let e = (0,
            a.useCallback)(e => e.some(e => {
                let {text: t} = e;
                return !t
            }
            ), []);
            return {
                validate: (0,
                a.useCallback)( (t, r) => e(t) ? "empty" : t.every( (e, t) => {
                    let {text: n} = e;
                    return n === r[t]
                }
                ) ? "correct" : "incorrect", [e]),
                checkEmpty: e
            }
        }
          , rS = () => {
            let[e,t] = (0,
            l.fp)(rp)
              , [r,n] = (0,
            a.useState)()
              , {validate: i} = ry();
            return {
                currentPopup: r,
                setPopup: (0,
                a.useCallback)( (r, l) => {
                    switch (i(r, l)) {
                    case "correct":
                        n("correct");
                        break;
                    case "incorrect":
                        0 === e ? (t(1),
                        n("redo")) : n("incorrect");
                        break;
                    case "empty":
                        t(1),
                        n("incorrect")
                    }
                }
                , [e, t, i]),
                hidePopup: (0,
                a.useCallback)( () => {
                    n(void 0)
                }
                , [])
            }
        }
          , rC = () => ({
            getViewState: (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        var r;
                        let n = e.correctList.map( (e, t) => ({
                            index: t,
                            text: e.text,
                            movable: e.entryStyle === ev.k4.MOVABLE
                        }))
                          , i = 0
                          , l = 0
                          , a = n.map(e => e.movable ? {
                            id: "Placeholder[".concat(i++, "]"),
                            text: void 0,
                            movable: !0
                        } : {
                            id: "Fixed[".concat(l++, "]"),
                            text: e.text,
                            movable: !1
                        })
                          , s = n.filter(e => e.movable).map( (e, t) => ({
                            id: "Correct[".concat(t, "]"),
                            text: e.text
                        }))
                          , o = e.dummyList.map( (e, t) => {
                            let {text: r} = e;
                            return {
                                id: "Dummy[".concat(t, "]"),
                                text: r
                            }
                        }
                        )
                          , c = n.filter(e => e.movable).map(e => e.index)
                          , d = null !== (r = t.dropped) && void 0 !== r ? r : {}
                          , u = [];
                        return {
                            answered: c.map(e => {
                                let t;
                                if (d[e]) {
                                    var r;
                                    let n = d[e]
                                      , i = e => u.find(t => t === e)
                                      , l = s.find(e => !i(e.id) && e.text === n.text) || o.find(e => !i(e.id) && e.text === n.text);
                                    t = null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : a[e].id
                                } else
                                    t = a[e].id;
                                return u.push(t),
                                t
                            }
                            )
                        }
                    }(e, r.apViewState);
                throw Error("no view state")
            }
            )(e, t.viewStateJSON), [])
        })
          , rk = "selectable_context"
          , rA = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(rc)
              , i = (0,
            l.md)(rx)
              , a = (0,
            l.md)(rd)
              , s = (0,
            l.md)(rh)
              , o = (0,
            l.md)(rp)
              , c = (0,
            O.MM)();
            return (0,
            n.jsx)(rT, {
                selectables: r,
                answering: i,
                correct: a,
                isEnglishText: s,
                wrongCount: o,
                orientation: c,
                onAnswered: t
            })
        }
          , rT = e => {
            let {correct: t, isEnglishText: r, wrongCount: o, orientation: u, onAnswered: x, ...h} = e
              , p = (0,
            l.Xr)(ru)
              , [m,g] = (0,
            a.useState)([])
              , [j,v] = (0,
            a.useState)([])
              , [f,b] = (0,
            a.useState)()
              , [w,y] = (0,
            a.useState)(0)
              , [S,C] = (0,
            a.useState)(!1)
              , k = (0,
            a.useRef)(null)
              , {currentPopup: A, setPopup: T, hidePopup: I} = rS()
              , {checkEmpty: _} = ry()
              , {preventTouchScroll: E, allowTouchScroll: R} = (0,
            rf._)()
              , N = (0,
            t9.FR)((0,
            t9.MS)(t9.cA, {
                activationConstraint: {
                    delay: 200,
                    tolerance: 1e3
                }
            }), (0,
            t9.MS)(t9.IG, {
                activationConstraint: {
                    delay: 100,
                    tolerance: 1e3
                },
                onActivation: E
            }))
              , O = (0,
            a.useCallback)( (e, t) => {
                let r = m.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , n = m.findIndex(e => {
                    let {id: r} = e;
                    return r === t.id
                }
                )
                  , i = JSON.parse(JSON.stringify(m));
                [i[r],i[n]] = [i[n], i[r]],
                g(i)
            }
            , [m])
              , L = (0,
            a.useCallback)( (e, t) => {
                let r = j.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , n = j.findIndex(e => {
                    let {id: r} = e;
                    return r === t.id
                }
                )
                  , i = JSON.parse(JSON.stringify(j));
                [i[r],i[n]] = [i[n], i[r]],
                v(i)
            }
            , [j])
              , q = (0,
            a.useCallback)( (e, t) => {
                if (e < 0 || t < 0)
                    return;
                let r = JSON.parse(JSON.stringify(j))
                  , n = JSON.parse(JSON.stringify(m));
                [r[e],n[t]] = [n[t], r[e]],
                g(n),
                v(r)
            }
            , [j, m])
              , P = (0,
            a.useCallback)(e => {
                q(j.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                ), m.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                ))
            }
            , [j, q, m])
              , W = (0,
            a.useCallback)( (e, t) => {
                let r = m.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                );
                q(j.findIndex(e => {
                    let {id: r} = e;
                    return r === (null == t ? void 0 : t.id)
                }
                ), r)
            }
            , [j, q, m])
              , z = (0,
            a.useCallback)(e => {
                var t, r;
                let {active: n} = e;
                b((null === (r = n.data.current) || void 0 === r ? void 0 : null === (t = r.sortable) || void 0 === t ? void 0 : t.containerId) === rk ? m.find(e => {
                    let {id: t} = e;
                    return t === n.id
                }
                ) : j.find(e => {
                    let {id: t} = e;
                    return t === n.id
                }
                ))
            }
            , [j, m])
              , V = (0,
            a.useCallback)(e => {
                var t, r, n, i, l;
                if (!e.over || e.active.id === e.over.id)
                    return;
                let a = null === (r = e.active.data.current) || void 0 === r ? void 0 : null === (t = r.sortable) || void 0 === t ? void 0 : t.containerId
                  , s = null === (l = e.over) || void 0 === l ? void 0 : null === (i = l.data.current) || void 0 === i ? void 0 : null === (n = i.sortable) || void 0 === n ? void 0 : n.containerId;
                a === rk && s === rk && O(e.active, e.over)
            }
            , [O])
              , D = (0,
            a.useCallback)(e => {
                var t, r, n, i;
                if (b(void 0),
                !e.over || e.active.id === e.over.id)
                    return;
                let l = null === (r = e.active.data.current) || void 0 === r ? void 0 : null === (t = r.sortable) || void 0 === t ? void 0 : t.containerId
                  , a = null === (i = e.over.data.current) || void 0 === i ? void 0 : null === (n = i.sortable) || void 0 === n ? void 0 : n.containerId;
                l === rk ? W(e.active, e.over) : a === rk ? P(e.active) : L(e.active, e.over)
            }
            , [L, P, W])
              , X = (0,
            a.useCallback)(e => {
                var t;
                let r = j.findIndex(t => {
                    let {id: r} = t;
                    return r === e.currentTarget.id
                }
                );
                (null === (t = j[r]) || void 0 === t ? void 0 : t.text) && q(r, m.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                ))
            }
            , [j, q, m])
              , J = (0,
            a.useCallback)(e => {
                var t;
                let r = m.findIndex(t => {
                    let {id: r} = t;
                    return r === e.currentTarget.id
                }
                );
                (null === (t = m[r]) || void 0 === t ? void 0 : t.text) && q(j.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                ), r)
            }
            , [j, q, m])
              , B = (0,
            a.useCallback)( () => {
                _(j) ? C(!0) : T(j, t)
            }
            , [j, t, _, T])
              , K = (0,
            a.useCallback)( () => {
                let e = ey.aJ.CORRECT
                  , t = {
                    answered: j.filter(e => e.movable).map(e => e.id)
                };
                p(j),
                x({
                    answer: {
                        result: e,
                        textType: 2,
                        text: j.map(e => {
                            let {text: t} = e;
                            return t
                        }
                        ).join(" "),
                        wrongCount: o
                    },
                    viewStateJSON: t
                }),
                I()
            }
            , [A, p, j, x, o, I])
              , F = (0,
            a.useCallback)( () => {
                C(!1),
                T(j, t)
            }
            , [j, t, T, C])
              , U = (0,
            a.useCallback)( () => {
                C(!1)
            }
            , [C]);
            return (0,
            a.useEffect)( () => {
                g(h.selectables),
                v(h.answering)
            }
            , [h.selectables, h.answering]),
            (0,
            a.useEffect)( () => {
                document.addEventListener("touchend", R)
            }
            , [R]),
            (0,
            a.useEffect)( () => {
                k.current && y(k.current.clientHeight + 72)
            }
            , [w]),
            (0,
            n.jsxs)(c.VP, {
                width: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(t9.Mp, {
                    sensors: N,
                    collisionDetection: t9.fp,
                    onDragStart: z,
                    onDragOver: V,
                    onDragEnd: D,
                    children: [(0,
                    n.jsx)(i.A, {
                        minHeight: w,
                        children: (0,
                        n.jsx)(i.A, {
                            ref: k,
                            children: (0,
                            n.jsx)(rr, {
                                mode: "Default",
                                items: j,
                                isEnglishText: r,
                                onClickItem: X
                            })
                        })
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 4
                    }), (0,
                    n.jsx)(rj.gB, {
                        id: rk,
                        items: m,
                        children: (0,
                        n.jsx)(c.fI, {
                            flexWrap: "wrap",
                            gap: 2,
                            p: 2,
                            borderRadius: 1,
                            bgcolor: d.Tj.onSurfaceWeak4,
                            children: m.map(e => {
                                let {id: t, text: r} = e;
                                return r ? (0,
                                n.jsx)(rI, {
                                    id: t,
                                    onClick: J,
                                    children: (0,
                                    n.jsx)(rt, {
                                        value: r
                                    })
                                }, t) : (0,
                                n.jsx)(rI, {
                                    id: t,
                                    disabled: !0,
                                    children: (0,
                                    n.jsx)(re, {
                                        mode: "Selection"
                                    })
                                }, t)
                            }
                            )
                        })
                    }), (0,
                    n.jsx)(t9.Hd, {
                        style: {
                            width: "fit-content",
                            boxShadow: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
                            borderRadius: "4px"
                        },
                        children: (null == f ? void 0 : f.text) ? (0,
                        n.jsx)(rt, {
                            value: f.text
                        }) : null
                    })]
                }), (0,
                n.jsx)(c.hK, {
                    y: 4
                }), (0,
                n.jsx)(i.A, {
                    alignSelf: "flex-end",
                    children: (0,
                    n.jsx)(s.yh, {
                        text: "解答する",
                        disabled: void 0 !== A,
                        onClick: B
                    })
                }), A && (0,
                n.jsx)(M.zD, {
                    result: A,
                    portalElem: "portrait" === u ? "body" : H.y,
                    handleOnStop: "redo" === A ? I : K
                }), (0,
                n.jsx)(s.lG, {
                    isOpen: S,
                    title: "このまま解答しますか？",
                    body: "空欄が残っています。",
                    actions: (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(s.Pn, {
                            label: "キャンセル",
                            color: "primary",
                            onClick: U
                        }), (0,
                        n.jsx)(s.Pn, {
                            label: "解答する",
                            color: "primary",
                            onClick: F
                        })]
                    }),
                    onClose: U
                })]
            })
        }
          , rI = e => {
            let {children: t, id: r, disabled: i, onClick: l} = e
              , {attributes: a, listeners: s, setNodeRef: o, transform: c, transition: d, isDragging: u} = (0,
            rj.gl)({
                id: r,
                disabled: i
            })
              , x = {
                transform: rv.Ks.Transform.toString(c),
                transition: d,
                opacity: u ? 0 : 1
            };
            return (0,
            n.jsx)("div", {
                ref: o,
                id: r,
                style: x,
                onClick: l,
                ...a,
                ...s,
                children: t
            })
        }
          , r_ = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.Xr)(rc)
              , c = (0,
            l.Xr)(rx)
              , d = (0,
            l.Xr)(rd)
              , u = (0,
            l.Xr)(rh)
              , x = (0,
            l.Xr)(rp)
              , [h,p] = (0,
            l.fp)(ru)
              , {formatDto: m} = rw()
              , {getViewState: g} = rC()
              , j = (0,
            O.MM)();
            if ((0,
            a.useEffect)( () => {
                let {answeringItems: e, correctTexts: n, selectableItems: i, isEnglishText: l} = m(t);
                if (r) {
                    let a = g(t, r)
                      , s = 0;
                    p(e.map(e => {
                        if (!e.movable)
                            return e;
                        let t = a.answered[s++]
                          , r = i.find(e => e.id === t);
                        return {
                            id: t,
                            text: r ? r.text : e.text,
                            movable: !0
                        }
                    }
                    )),
                    d(n),
                    u(l);
                    return
                }
                o(i),
                c(e),
                p([]),
                d(n),
                u(l),
                x(0)
            }
            , [t, m, g, r, p, c, d, u, o, x]),
            h.length > 0)
                switch (j) {
                case "landscape":
                    return (0,
                    n.jsx)(i.A, {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        pt: 4,
                        pr: 3,
                        pb: 12,
                        pl: 3,
                        children: (0,
                        n.jsx)(rm, {})
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.A, {
                        pt: 4,
                        pr: 3,
                        pb: 3,
                        pl: 3,
                        flex: 1,
                        width: 1,
                        children: (0,
                        n.jsx)(rm, {})
                    })
                }
            else
                switch (j) {
                case "landscape":
                    return (0,
                    n.jsx)(i.A, {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "end",
                        pt: 4,
                        pr: 3,
                        pb: 2,
                        pl: 3,
                        children: (0,
                        n.jsx)(rA, {
                            onAnswered: s
                        })
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.A, {
                        pt: 4,
                        pr: 3,
                        pb: 2,
                        pl: 3,
                        flex: 1,
                        width: 1,
                        children: (0,
                        n.jsx)(rA, {
                            onAnswered: s
                        })
                    })
                }
        }
        ;
        var rE = r(79369);
        let rR = (0,
        ex.eU)(void 0)
          , rN = (0,
        ex.eU)(void 0)
          , rM = (0,
        ex.eU)(void 0)
          , rO = (0,
        ex.eU)("")
          , rL = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(rN)
              , i = (0,
            l.md)(rM)
              , a = (0,
            l.md)(rO)
              , s = (0,
            l.md)(L.aR)
              , o = (0,
            O.MM)();
            return void 0 === i ? null : (0,
            n.jsx)(rq, {
                result: r,
                answered: i,
                svg: a,
                orientation: o,
                onAnswered: t,
                isViewer: s
            })
        }
          , rq = e => {
            let {result: t, answered: r, svg: l, orientation: o, onAnswered: d, isViewer: u} = e
              , [x,h] = (0,
            a.useState)()
              , [p,m] = (0,
            a.useState)(!1)
              , [g,j] = (0,
            a.useState)(!1)
              , v = (0,
            a.useCallback)( () => {
                h("correct")
            }
            , [])
              , f = (0,
            a.useCallback)( () => {
                h("kanji_incorrect")
            }
            , [])
              , b = (0,
            a.useCallback)( () => {
                let e = "correct" === x;
                d({
                    answer: {
                        result: ey.aJ.CORRECT,
                        textType: 2,
                        text: r,
                        wrongCount: 0
                    },
                    viewStateJSON: {
                        answered: r,
                        result: e,
                        svg: l
                    }
                }),
                m(!1),
                j(!1)
            }
            , [r, x, d, l]);
            return (0,
            a.useEffect)( () => {
                "" === r ? j(!0) : m(!0)
            }
            , [r]),
            (0,
            n.jsxs)(c.VP, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.VP, {
                    width: "portrait" === o ? void 0 : "100%",
                    position: "portrait" === o ? void 0 : "absolute",
                    bottom: "portrait" === o ? void 0 : 0,
                    children: [(0,
                    n.jsxs)(i.A, {
                        width: "100%",
                        maxWidth: 712,
                        alignSelf: "center",
                        children: [(0,
                        n.jsx)(eX.kI, {
                            mode: "Default",
                            height: "portrait" === o ? 254 : 334,
                            children: (0,
                            n.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: l
                                }
                            })
                        }), void 0 !== t && u && (0,
                        n.jsx)(i.A, {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            width: 144,
                            height: 144,
                            children: (0,
                            n.jsx)(s._n, {
                                name: t ? "correctionO" : "correctionX",
                                width: 144,
                                height: 144
                            })
                        })]
                    }), (0,
                    n.jsx)(c.hK, {
                        y: "portrait" === o ? 0 : 14
                    })]
                }), p && (0,
                F.createPortal)((0,
                n.jsx)(rP, {
                    currentPopup: x,
                    isViewer: u,
                    endWrongAnswerProcess: f,
                    endCorrectAnswerProcess: v
                }), document.body), g && (0,
                F.createPortal)((0,
                n.jsx)(rW, {
                    isViewer: u,
                    currentPopup: x,
                    endAnswerProcess: b
                }), document.body), x && (0,
                n.jsx)(M.zD, {
                    result: x,
                    portalElem: "body",
                    handleOnStop: b
                })]
            })
        }
          , rP = e => {
            let {isViewer: t, currentPopup: r, endWrongAnswerProcess: i, endCorrectAnswerProcess: l} = e;
            return (0,
            n.jsxs)(rz, {
                children: [(0,
                n.jsx)(s.I8, {
                    width: 200,
                    text: "できなかった",
                    disabled: t || !!r,
                    onClick: i
                }), (0,
                n.jsx)(s.yh, {
                    width: 200,
                    text: "できた",
                    disabled: t || !!r,
                    onClick: l
                })]
            })
        }
          , rW = e => {
            let {isViewer: t, currentPopup: r, endAnswerProcess: i} = e;
            return (0,
            n.jsx)(rz, {
                children: (0,
                n.jsx)(s.yh, {
                    width: 200,
                    text: "次へ",
                    disabled: t || !!r,
                    onClick: i
                })
            })
        }
          , rz = (0,
        rE.A)(i.A)(e => {
            let {theme: t} = e;
            return {
                position: "fixed",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: "0 24px",
                bottom: 24,
                right: 96,
                [t.breakpoints.up("lg")]: {
                    right: 24
                }
            }
        }
        )
          , rV = () => ({
            getViewState: (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState) {
                    var r, n;
                    return {
                        result: "ANSWER_RESULT_CORRECT" === (r = t.apViewState).result,
                        answered: r.recognizedText,
                        svg: null !== (n = r.svg) && void 0 !== n ? n : ""
                    }
                }
                throw Error("no view state")
            }
            )(e.viewStateJSON), [])
        })
          , rD = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => {
                    t(!0)
                }
                , []),
                hide: (0,
                a.useCallback)( () => {
                    t(!1)
                }
                , []),
                visibled: e
            }
        }
          , rH = () => {
            let e = (0,
            l.Xr)(rO)
              , [t,r] = (0,
            a.useState)("")
              , [n,i] = (0,
            a.useState)(!1)
              , [s,o] = (0,
            a.useState)(!1)
              , c = (0,
            a.useCallback)( () => {
                r("")
            }
            , [r])
              , d = (0,
            a.useCallback)( (t, n) => {
                r(t),
                e(n),
                i(!1)
            }
            , [r, i, e]);
            return {
                opened: c,
                recognizing: (0,
                a.useCallback)( () => {
                    i(!0)
                }
                , [i]),
                recognized: d,
                disconnected: (0,
                a.useCallback)( () => {
                    r(""),
                    e(""),
                    o(!0)
                }
                , [r, o, e]),
                reconnect: (0,
                a.useCallback)( () => {
                    o(!1)
                }
                , [o]),
                setAnsweredText: r,
                setIsRecognizing: i,
                answeredText: t,
                isOpenReconnectMessage: s,
                isRecognizing: n
            }
        }
          , rX = () => {
            let[e,t] = (0,
            a.useState)();
            return {
                showing: e,
                show: (0,
                a.useCallback)(e => t(e), []),
                hide: (0,
                a.useCallback)( () => t(void 0), [])
            }
        }
          , rJ = () => ({
            formatDto: (0,
            a.useCallback)(e => ({
                correct: e.correctAnswer
            }), [])
        })
          , rB = e => {
            let {onPendingAnswered: t} = e
              , r = (0,
            l.md)(rR)
              , i = (0,
            l.md)(L.HK)
              , a = (0,
            O.MM)();
            return r ? (0,
            n.jsx)(rF, {
                recognitionConfig: r,
                orientation: a,
                selectedTool: i,
                onPendingAnswered: t
            }) : null
        }
          , rK = () => ({
            prepare: (0,
            a.useCallback)( (e, t, r) => {
                if (0 === e.length) {
                    t();
                    return
                }
                r()
            }
            , [])
        })
          , rF = e => {
            let {recognitionConfig: t, orientation: r, selectedTool: d, onPendingAnswered: u} = e
              , x = (0,
            l.Xr)(rM)
              , h = (0,
            a.useRef)(null)
              , {elementRef: p, elementSize: m} = (0,
            o.wY)()
              , {showing: g, show: j, hide: v} = rX()
              , {prepare: f} = rK()
              , {opened: b, recognizing: w, recognized: y, disconnected: S, reconnect: C, answeredText: k, isOpenReconnectMessage: A, isRecognizing: T} = rH()
              , {show: I, hide: _, visibled: E} = rD()
              , {onPointerDown: R, onPointerUp: N} = (0,
            eX.$D)()
              , O = (0,
            a.useCallback)( () => {
                w(),
                R()
            }
            , [w])
              , L = (0,
            a.useCallback)( (e, t) => {
                y(e, t),
                N()
            }
            , [y])
              , q = (0,
            a.useCallback)( () => {
                f(k, I, () => {
                    x(k),
                    u()
                }
                )
            }
            , [f, k, I, x, u])
              , P = (0,
            a.useCallback)( () => {
                x(k),
                u(),
                v()
            }
            , [k, v, u, x])
              , W = (0,
            a.useCallback)( () => {
                _(),
                j("incorrect")
            }
            , [_, j]);
            (0,
            a.useEffect)( () => {
                var e, t, r;
                null === (r = h.current) || void 0 === r || null === (t = r.editor) || void 0 === t || null === (e = t.resize) || void 0 === e || e.call(t)
            }
            , [p]);
            let z = "portrait" === r;
            return (0,
            n.jsxs)(c.VP, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.VP, {
                    width: z ? void 0 : "100%",
                    position: z ? void 0 : "absolute",
                    bottom: z ? void 0 : 0,
                    children: [(0,
                    n.jsx)(i.A, {
                        width: "100%",
                        maxWidth: 712,
                        alignSelf: "center",
                        children: (0,
                        n.jsx)(eX.kI, {
                            ref: p,
                            height: z ? 254 : 334,
                            children: !A && (0,
                            n.jsx)(tB, {
                                ref: h,
                                width: m.width,
                                height: z ? 254 : 334,
                                mode: "eraser" === d ? "eraser" : "pen",
                                recognitionConfig: t,
                                onOpened: b,
                                onRecognizing: O,
                                onRecognized: L,
                                onDisconnected: S
                            })
                        })
                    }), (0,
                    n.jsx)(c.hK, {
                        y: z ? 2 : 5
                    }), (0,
                    n.jsx)(i.A, {
                        alignSelf: "end",
                        children: (0,
                        n.jsx)(s.yh, {
                            text: "答え合わせ",
                            disabled: T || A,
                            onClick: q
                        })
                    }), (0,
                    n.jsx)(eX.Ml, {
                        isOpen: E,
                        onClickAnswer: W,
                        onClickCancel: _
                    })]
                }), g && (0,
                n.jsx)(M.zD, {
                    result: g,
                    portalElem: "body",
                    handleOnStop: P
                }), (0,
                n.jsx)(eX.Xn, {
                    isOpen: A,
                    y: z ? 96 : 24,
                    onClick: C
                })]
            })
        }
          , rU = e => {
            let {dto: t, replayResource: r, onPendingAnswered: s, onAnswered: c} = e
              , d = (0,
            l.Xr)(rN)
              , u = (0,
            l.Xr)(rR)
              , x = (0,
            l.Xr)(rO)
              , [h,p] = (0,
            l.fp)(rM)
              , {formatDto: m} = rJ()
              , g = (0,
            O.MM)()
              , {getViewState: j} = rV()
              , {windowHeight: v} = (0,
            o.xJ)();
            return ((0,
            a.useEffect)( () => {
                if (r) {
                    let e = j(r);
                    d(e.result),
                    p(e.answered),
                    x(e.svg);
                    return
                }
                return u({
                    mode: "Japanese",
                    useLK: !1,
                    sk: void 0
                }),
                d(void 0),
                p(void 0),
                x(""),
                () => {
                    u(void 0),
                    d(void 0),
                    p(void 0),
                    x("")
                }
            }
            , [t, r, j, p, u, x, m, d]),
            void 0 !== h) ? (0,
            n.jsx)(i.A, {
                height: "portrait" === g ? "auto" : v - e_.$A - 18,
                p: 2,
                children: (0,
                n.jsx)(rL, {
                    onAnswered: c
                })
            }) : (0,
            n.jsx)(i.A, {
                height: "portrait" === g ? "auto" : v - e_.$A - 18,
                p: 2,
                children: (0,
                n.jsx)(rB, {
                    onPendingAnswered: s
                })
            })
        }
          , rY = e => {
            let {items: t, style: r} = e
              , l = "他の選択肢"
              , a = 16 * l.length;
            return (0,
            n.jsxs)(c.fI, {
                gap: 2,
                style: r,
                children: [(0,
                n.jsx)(i.A, {
                    minWidth: a,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(s.EY, {
                        color: "onSurfaceWeak1",
                        fontWeight: "bold",
                        children: l
                    })
                }), (0,
                n.jsx)(G.A, {
                    orientation: "vertical",
                    variant: "middle",
                    flexItem: !0,
                    sx: {
                        borderColor: d.Tj.onSurfaceWeak3,
                        my: 0
                    }
                }), (0,
                n.jsx)(c.fI, {
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    children: t.map( (e, t) => (0,
                    n.jsx)(x.qV, {
                        src: e.text,
                        style: {
                            fontSize: 16,
                            color: d.Tj.onSurface,
                            display: "flex",
                            alignItems: "flex-end"
                        }
                    }, t))
                })]
            })
        }
        ;
        var rG = r(41917);
        let rQ = e => {
            let {qml: t, mode: r, onClick: i, disabled: l} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(r$, {
                    qml: t,
                    onClick: i,
                    disabled: l
                });
            case "Correct":
                return (0,
                n.jsx)(rZ, {
                    qml: t,
                    onClick: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(r0, {
                    qml: t,
                    onClick: i
                })
            }
        }
          , r$ = e => {
            let {qml: t, onClick: r, disabled: i} = e;
            return (0,
            n.jsx)(rG.A, {
                disabled: i,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.Tj.onSurfaceWeak3,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.onSurface
                    },
                    weight: "bold"
                })
            })
        }
          , rZ = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(rG.A, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.Tj.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "1",
                    left: 8,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , r0 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(rG.A, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.Tj.importantWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "1",
                    left: 8,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.important
                    },
                    weight: "bold"
                })]
            })
        }
          , r1 = (0,
        ex.eU)([])
          , r2 = (0,
        ex.eU)({
            id: 0,
            text: ""
        })
          , r4 = (0,
        ex.eU)(void 0)
          , r3 = () => {
            let e = (0,
            l.md)(r1)
              , t = (0,
            l.md)(r2)
              , r = (0,
            l.md)(r4);
            return r ? (0,
            n.jsx)(r8, {
                selectables: e,
                correct: t,
                answered: r
            }) : null
        }
          , r8 = e => {
            let {selectables: t, correct: r, answered: i} = e
              , l = i.id === r.id ? i : void 0
              , a = i.id !== r.id ? r : void 0
              , s = i.id !== r.id ? i : void 0
              , o = [null == l ? void 0 : l.id, null == a ? void 0 : a.id, null == s ? void 0 : s.id]
              , c = t.filter(e => !o.includes(e.id));
            return (0,
            n.jsxs)(Q.V, {
                gap: 2,
                children: [l && (0,
                n.jsx)(rQ, {
                    qml: l.text,
                    mode: "Correct"
                }), a && (0,
                n.jsx)(rQ, {
                    qml: a.text,
                    mode: "Correct"
                }), s && (0,
                n.jsx)(rQ, {
                    qml: s.text,
                    mode: "Incorrect"
                }, s.id), 0 !== c.length && (0,
                n.jsx)(rY, {
                    items: c,
                    style: {
                        marginTop: "8px"
                    }
                })]
            })
        }
          , r5 = () => ({
            formatDto: (0,
            a.useCallback)(e => {
                var t;
                let r = null !== (t = e.correctItem) && void 0 !== t ? t : new ev.Q$
                  , n = {
                    id: r.itemId,
                    text: r.text
                }
                  , i = e.itemList.map(e => {
                    let t = (0,
                    ta.u)(e.text);
                    return {
                        id: e.itemId,
                        text: t
                    }
                }
                );
                return e.shouldShuffle && i.sort( () => .5 - Math.random()),
                {
                    selectables: i,
                    correct: n
                }
            }
            , [])
        })
          , r6 = () => ({
            validate: (0,
            a.useCallback)( (e, t) => t.id === e.id ? "correct" : "incorrect", [])
        })
          , r7 = () => ({
            getViewState: (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        let t = e.items.map(e => e.itemId);
                        return {
                            order: e.items.map(e => e.itemId),
                            answered: t[e.selected]
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), [])
        })
          , r9 = e => {
            let t = (0,
            l.md)(r1)
              , r = (0,
            l.Xr)(r4)
              , [n,i] = (0,
            a.useState)(t[0])
              , [s,o] = (0,
            a.useState)("")
              , [c,d] = (0,
            a.useState)("incorrect")
              , {validate: u} = r6();
            return {
                prepare: (0,
                a.useCallback)( (t, r, n) => {
                    let l = u(e, t);
                    switch (d(l),
                    i(t),
                    o(t.text),
                    l) {
                    case "correct":
                        r();
                        break;
                    case "incorrect":
                        n()
                    }
                }
                , [e, d, u]),
                fix: (0,
                a.useCallback)(e => {
                    let i = ey.aJ.CORRECT
                      , l = {
                        order: t.map(e => e.id),
                        answered: n.id
                    };
                    r(n),
                    e({
                        answer: {
                            result: i,
                            textType: 2,
                            text: s,
                            wrongCount: 0
                        },
                        viewStateJSON: l
                    })
                }
                , [c, t, n, r, s])
            }
        }
          , ne = () => {
            let[e,t] = (0,
            a.useState)();
            return {
                showing: e,
                show: (0,
                a.useCallback)(e => t(e), []),
                hide: (0,
                a.useCallback)( () => t(void 0), [])
            }
        }
          , nt = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(r1)
              , i = (0,
            l.md)(r2)
              , a = (0,
            O.MM)();
            return (0,
            n.jsx)(nr, {
                selectables: r,
                correct: i,
                orientation: a,
                onAnswered: t
            })
        }
          , nr = e => {
            let {selectables: t, correct: r, orientation: l, onAnswered: s} = e
              , [o,d] = (0,
            a.useState)(!1)
              , {prepare: u, fix: x} = r9(r)
              , {showing: h, show: p, hide: m} = ne()
              , g = (0,
            a.useCallback)(e => {
                d(!0),
                u(e, () => p("correct"), () => p("incorrect"))
            }
            , [u, p])
              , j = (0,
            a.useCallback)( () => {
                x(s),
                m()
            }
            , [x, m, s]);
            return (0,
            n.jsxs)(i.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                children: [(0,
                n.jsx)(Q.V, {
                    width: "100%",
                    children: t.map( (e, r) => (0,
                    n.jsxs)(Q.V, {
                        children: [(0,
                        n.jsx)(rQ, {
                            qml: e.text,
                            mode: "Active",
                            onClick: () => g(e),
                            disabled: o
                        }), r < t.length - 1 && (0,
                        n.jsx)(c.hK, {
                            y: 2
                        })]
                    }, r))
                }), h && (0,
                n.jsx)(M.zD, {
                    result: h,
                    portalElem: "portrait" === l ? "body" : H.y,
                    handleOnStop: j
                })]
            })
        }
          , nn = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.Xr)(r1)
              , c = (0,
            l.Xr)(r2)
              , [d,u] = (0,
            l.fp)(r4)
              , {formatDto: x} = r5()
              , {getViewState: h} = r7();
            return ((0,
            a.useEffect)( () => {
                let {selectables: e, correct: n} = x(t);
                if (r) {
                    let t = h(r);
                    o(t.order.reduce( (t, r) => {
                        let n = e.find(e => e.id === r);
                        return n ? [...t, n] : t
                    }
                    , [])),
                    c(n),
                    u(e.find(e => e.id === t.answered));
                    return
                }
                return o(e),
                c(n),
                u(void 0),
                () => o([])
            }
            , [t, x, h, r, u, c, o]),
            d) ? (0,
            n.jsx)(i.A, {
                padding: 3,
                children: (0,
                n.jsx)(r3, {})
            }) : (0,
            n.jsx)(i.A, {
                padding: 3,
                children: (0,
                n.jsx)(nt, {
                    onAnswered: s
                })
            })
        }
          , ni = e => {
            let {mode: t, modelAnswer: r, recognitionMode: i} = e;
            switch (t) {
            case "Correct":
                return (0,
                n.jsx)(nl, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(na, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            default:
                return (0,
                n.jsx)(n.Fragment, {})
            }
        }
          , nl = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eX.Of, {
                    style: {
                        fontSize: 20,
                        color: d.Tj.correct,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(s.EY, {
                    size: "lg",
                    color: "correct",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , na = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eX.Of, {
                    style: {
                        fontSize: 20,
                        color: d.Tj.important,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(s.EY, {
                    size: "lg",
                    color: "important",
                    textAlign: "center",
                    children: t
                })
            })
        }
        ;
        var ns = r(45828);
        let no = e => {
            let {mode: t="Default", answeredText: r, recognitionMode: i} = e;
            switch ((0,
            a.useEffect)( () => {
                (0,
                ns.A)("#fitty", {
                    minSize: 12,
                    maxSize: 20,
                    multiLine: !1
                })
            }
            , []),
            t) {
            case "Default":
                return (0,
                n.jsx)(nc, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                n.jsx)(nd, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(nu, {
                    answeredText: r,
                    recognitionMode: i
                })
            }
        }
          , nc = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(c.VP, {
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.Tj.primaryWeak1),
                children: "Math" === r ? (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(eX.Of, {
                        style: {
                            fontSize: 20,
                            color: d.Tj.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(s.EY, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })
            })
        }
          , nd = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.Tj.correctWeak),
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(eX.Of, {
                        style: {
                            fontSize: 20,
                            color: d.Tj.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(s.EY, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })]
            })
        }
          , nu = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.Tj.importantWeak),
                children: [(0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(eX.Of, {
                        style: {
                            fontSize: 20,
                            color: d.Tj.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(s.EY, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })]
            })
        }
          , nx = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: a} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(nh, {
                    width: r,
                    answeredText: i,
                    recognitionMode: a
                });
            case "Correct":
                return (0,
                n.jsx)(np, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                n.jsx)(nm, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                })
            }
        }
          , nh = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.A, {
                width: t,
                children: (0,
                n.jsx)(no, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , np = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(i.A, {
                width: t,
                children: [(0,
                n.jsx)(no, {
                    mode: "Correct",
                    answeredText: r,
                    recognitionMode: a
                }), (0,
                n.jsx)(c.VP, {
                    height: 72,
                    justifyContent: "center",
                    children: r !== l && (0,
                    n.jsx)(ni, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , nm = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(i.A, {
                width: t,
                children: [(0,
                n.jsx)(no, {
                    mode: "Incorrect",
                    answeredText: r,
                    recognitionMode: a
                }), (0,
                n.jsx)(c.VP, {
                    justifyContent: "center",
                    height: 72,
                    children: l && (0,
                    n.jsx)(ni, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
        ;
        var ng = r(36364);
        let nj = () => {
            let e = (0,
            l.md)(ng.Hj)
              , t = (0,
            l.md)(ng.R9)
              , r = (0,
            l.md)(ng.vO)
              , i = (0,
            l.md)(ng.fg)
              , a = (0,
            l.md)(ng.NZ)
              , s = (0,
            l.md)(ng.SF)
              , o = (0,
            O.MM)();
            return void 0 === t ? null : (0,
            n.jsx)(nv, {
                modelAnswer: e,
                answered: t,
                placeHolder: r,
                svg: i,
                orientation: o,
                recognitionConfig: a,
                validationResult: s
            })
        }
          , nv = e => {
            let {answered: t, modelAnswer: r, placeHolder: l, svg: a, orientation: s, recognitionConfig: o, validationResult: d} = e
              , u = "correct" === d;
            return (0,
            n.jsx)(c.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: "portrait" === s ? (0,
                n.jsxs)(i.A, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(eX.kI, {
                        mode: u ? "Correct" : "Incorrect",
                        prefixLabel: l.label,
                        suffixLabel: l.suffix,
                        useLatexInLabel: l.useLatexInLabel,
                        useLatexInSuffix: l.useLatexInSuffix,
                        children: (0,
                        n.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: a
                            }
                        })
                    }), (0,
                    n.jsxs)(c.fI, {
                        columnGap: 3,
                        marginTop: 2,
                        children: [(0,
                        n.jsx)(c.hK, {
                            x: 4
                        }), (0,
                        n.jsx)(nx, {
                            mode: u ? "Correct" : "Incorrect",
                            width: 368,
                            answeredText: t,
                            modelAnswer: t !== r ? r : void 0,
                            recognitionMode: null == o ? void 0 : o.mode
                        })]
                    })]
                }) : (0,
                n.jsxs)(i.A, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(eX.kI, {
                        mode: u ? "Correct" : "Incorrect",
                        prefixLabel: l.label,
                        suffixLabel: l.suffix,
                        useLatexInLabel: l.useLatexInLabel,
                        useLatexInSuffix: l.useLatexInSuffix,
                        children: (0,
                        n.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: a
                            }
                        })
                    }), (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        rowGap: 3,
                        children: [(0,
                        n.jsx)(c.hK, {
                            y: 3
                        }), (0,
                        n.jsx)(nx, {
                            mode: u ? "Correct" : "Incorrect",
                            width: 368,
                            answeredText: t,
                            modelAnswer: t !== r ? r : void 0,
                            recognitionMode: null == o ? void 0 : o.mode
                        })]
                    })]
                })
            })
        }
          , nf = e => ({
            isSantaScriptTargetQuestion: (0,
            a.useCallback)(t => {
                let {mode: r, sk: n, useLK: i} = t
                  , l = "science" === e && "Math" === r
                  , a = "science" === e && i && "NUMBER_SK" === n;
                return l || a
            }
            , [e])
        });
        var nb = r(525);
        let nw = () => ({
            formatDto: (0,
            a.useCallback)(e => {
                var t;
                let r = e.correctAnswerList.reduce( (e, t) => {
                    if (!t.option.case || !t.option.value)
                        return e;
                    if ("text" === t.option.case) {
                        let r = (0,
                        nb.fm)(t.option.value);
                        return [...e, {
                            case: "text",
                            value: r = (0,
                            nb.qu)(r)
                        }]
                    }
                    return [...e, t.option]
                }
                , [])
                  , n = e.displayAnswerText
                  , i = {
                    mode: e.interactiveInkSetting ? (0,
                    eX.uy)(e.interactiveInkSetting) : "Math",
                    useLK: e.useLk,
                    sk: e.skNameOptional.value
                };
                return {
                    correct: r,
                    modelAnswer: n,
                    recognitionConfig: i,
                    placeHolder: null !== (t = e.placeHolder) && void 0 !== t ? t : new ev.ml,
                    replaceType: (0,
                    tZ.A)(e.replaceType),
                    gradeId: e.gradeId
                }
            }
            , [])
        })
          , ny = () => {
            let[e,t] = (0,
            a.useState)();
            return {
                showing: e,
                show: (0,
                a.useCallback)(e => t(e), []),
                hide: (0,
                a.useCallback)( () => t(void 0), [])
            }
        }
        ;
        var nS = r(31331);
        let nC = () => ({
            getViewState: (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState) {
                    var n, i;
                    return {
                        answered: (n = r.apViewState).recognizedText,
                        svg: null !== (i = n.svg) && void 0 !== i ? i : ""
                    }
                }
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), [])
        })
          , nk = () => {
            let e = (0,
            l.md)(ng.SF)
              , t = (0,
            l.md)(ng.fg)
              , r = (0,
            l.md)(tQ.z)
              , n = (0,
            l.Xr)(ng.R9)
              , [i,s] = (0,
            a.useState)(0);
            return {
                prepare: (0,
                a.useCallback)( (t, n, l, a, o, c) => {
                    if (r) {
                        n();
                        return
                    }
                    if ("empty" === e) {
                        c ? o() : t();
                        return
                    }
                    if ("incorrect" === e && 0 === i) {
                        s(1),
                        a();
                        return
                    }
                    switch (e) {
                    case "correct":
                        l();
                        break;
                    case "incorrect":
                        o()
                    }
                }
                , [r, e, i]),
                fix: (0,
                a.useCallback)( (r, l) => {
                    let a =  ey.aJ.CORRECT;
                    n(r),
                    l({
                        answer: {
                            result: a,
                            textType: 2,
                            text: r,
                            wrongCount: i
                        },
                        viewStateJSON: {
                            answered: r,
                            svg: t
                        }
                    })
                }
                , [n, t, e, i])
            }
        }
          , nA = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => {
                    t(!0)
                }
                , []),
                hide: (0,
                a.useCallback)( () => {
                    t(!1)
                }
                , []),
                visibled: e
            }
        }
          , nT = () => {
            let e = (0,
            l.Xr)(ng.fg)
              , t = (0,
            l.md)(ng.IZ)
              , r = (0,
            l.md)(ng.y5)
              , n = (0,
            l.md)(ng.of)
              , [i,s] = (0,
            a.useState)("")
              , [o,c] = (0,
            a.useState)(!1)
              , [d,u] = (0,
            a.useState)(!1)
              , {validate: x} = (0,
            nS.c)()
              , h = (0,
            a.useCallback)( () => {
                s("")
            }
            , [s])
              , p = (0,
            a.useCallback)( () => {
                c(!0)
            }
            , [c]);
            return {
                opened: h,
                recognizing: p,
                recognized: (0,
                a.useCallback)( (i, l) => {
                    s(x({
                        input: i,
                        correct: t,
                        gradeId: n,
                        replaceType: r
                    })),
                    e(l),
                    c(!1)
                }
                , [x, t, n, r, e]),
                disconnected: (0,
                a.useCallback)( () => {
                    s(""),
                    e(""),
                    u(!0)
                }
                , [s, u, e]),
                reconnect: (0,
                a.useCallback)( () => {
                    u(!1)
                }
                , [u]),
                recognizedText: i,
                isOpenReconnectMessage: d,
                isRecognizing: o
            }
        }
          , nI = () => {
            let[e,t] = (0,
            a.useState)(1)
              , r = (0,
            a.useCallback)( () => {
                t(e - 1)
            }
            , [e])
              , n = (0,
            a.useCallback)( () => {
                t(e + 1)
            }
            , [e]);
            return {
                page: e,
                maxPage: 4,
                back: r,
                forward: n
            }
        }
        ;
        var n_ = r(79829);
        let nE = () => {
            let e = (0,
            l.Xr)(ng.fg)
              , t = (0,
            l.Xr)(n_.y)
              , r = (0,
            l.md)(ng.IZ)
              , n = (0,
            l.md)(ng.y5)
              , i = (0,
            l.md)(ng.of)
              , s = (0,
            l.md)(L.cS)
              , o = (0,
            l.md)(L.bQ)
              , [c,d] = (0,
            a.useState)("")
              , [u,x] = (0,
            a.useState)(!1)
              , [h,p] = (0,
            a.useState)(!1)
              , {validate: m} = (0,
            nS.c)()
              , g = (0,
            a.useCallback)( () => {
                d("")
            }
            , [d])
              , j = (0,
            a.useCallback)( () => {
                x(!0)
            }
            , [x])
              , v = (0,
            a.useCallback)( (l, a, s) => {
                d(m({
                    input: l,
                    correct: r,
                    gradeId: i,
                    replaceType: n
                })),
                e(a),
                x(!1),
                t(s)
            }
            , [m, r, i, n, d, e, x, t]);
            return {
                opened: g,
                recognizing: j,
                recognized: v,
                recognizedError: (0,
                a.useCallback)( () => {
                    p(!0)
                }
                , [p]),
                reconnect: (0,
                a.useCallback)( () => {
                    p(!1)
                }
                , [p]),
                recognizedText: c,
                isOpenReconnectMessage: h,
                isRecognizing: u,
                appendix: (0,
                a.useMemo)( () => {
                    var e;
                    return {
                        programId: null !== (e = null == o ? void 0 : o.id) && void 0 !== e ? e : 0,
                        courseCode: s.code,
                        replaceType: n
                    }
                }
                , [s.code, null == o ? void 0 : o.id, n])
            }
        }
          , nR = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => {
                    t(!0)
                }
                , []),
                hide: (0,
                a.useCallback)( () => {
                    t(!1)
                }
                , []),
                visibled: e
            }
        }
          , nN = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(ng.NZ)
              , i = (0,
            l.md)(ng.vO)
              , a = (0,
            l.md)(L.HK)
              , s = (0,
            O.MM)();
            return r ? (0,
            n.jsx)(nM, {
                recognitionConfig: r,
                placeHolder: i,
                orientation: s,
                selectedTool: a,
                onAnswered: t
            }) : null
        }
          , nM = e => {
            let {recognitionConfig: t, placeHolder: r, orientation: d, selectedTool: u, onAnswered: x} = e
              , h = (0,
            l.Xr)(tQ.z)
              , p = (0,
            a.useRef)(null)
              , {elementRef: m, elementSize: g} = (0,
            o.wY)()
              , {opened: j, recognizing: v, recognized: f, disconnected: b, reconnect: w, recognizedText: y, isOpenReconnectMessage: S, isRecognizing: C} = nT()
              , {show: k, hide: A, visibled: T} = nR()
              , {show: I, hide: _, visibled: E} = nA()
              , {page: R, maxPage: N, back: O, forward: L} = nI()
              , {prepare: q, fix: P} = nk()
              , {showing: W, show: z, hide: V} = ny()
              , {onPointerDown: D, onPointerUp: X} = (0,
            eX.$D)()
              , J = (0,
            a.useCallback)( () => {
                v(),
                D()
            }
            , [v])
              , B = (0,
            a.useCallback)( (e, t) => {
                f(e, t),
                X()
            }
            , [f])
              , K = (0,
            a.useCallback)(e => {
                q(k, I, () => z("correct"), () => z("redo"), () => z("incorrect"), e)
            }
            , [q, k, I, z])
              , F = (0,
            a.useCallback)( () => K(!1), [K])
              , U = (0,
            a.useCallback)( () => {
                P(y, x),
                V()
            }
            , [y, P, V, x])
              , Y = (0,
            a.useCallback)( () => {
                h(!1),
                _(),
                F()
            }
            , [_, h, F])
              , G = (0,
            a.useCallback)( () => {
                A(),
                K(!0)
            }
            , [A, K]);
            (0,
            a.useEffect)( () => {
                var e, t, r;
                p.current && m.current && (null === (r = p.current) || void 0 === r || null === (t = r.editor) || void 0 === t || null === (e = t.resize) || void 0 === e || e.call(t),
                1 === R ? m.current.scrollLeft = 0 : m.current.scrollLeft = .8 * g.width * (R - 1))
            }
            , [g.width, R, m]);
            let Q = C || S || void 0 !== W
              , $ = g.width + .8 * g.width * (N - 1)
              , Z = "portrait" === d;
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsxs)(i.A, {
                    width: "100%",
                    maxWidth: 784,
                    children: [(0,
                    n.jsx)(eX.kI, {
                        ref: m,
                        mode: "Slider",
                        page: R,
                        maxPage: N,
                        prefixLabel: r.label,
                        suffixLabel: r.suffix,
                        useLatexInLabel: r.useLatexInLabel,
                        useLatexInSuffix: r.useLatexInSuffix,
                        onClickLeft: O,
                        onClickRight: L,
                        children: !S && (0,
                        n.jsx)(tB, {
                            ref: p,
                            width: $,
                            height: 240,
                            mode: "eraser" === u ? "eraser" : "pen",
                            recognitionConfig: t,
                            onOpened: j,
                            onRecognizing: J,
                            onRecognized: B,
                            onDisconnected: b
                        })
                    }), Z ? (0,
                    n.jsxs)(c.fI, {
                        marginTop: 2,
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: [(0,
                        n.jsx)(i.A, {
                            sx: {
                                marginLeft: "54px"
                            },
                            children: (0,
                            n.jsx)(nx, {
                                width: 368,
                                answeredText: y,
                                recognitionMode: t.mode
                            })
                        }), (0,
                        n.jsx)(s.yh, {
                            text: "解答する",
                            disabled: Q,
                            onClick: F
                        })]
                    }) : (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        children: [(0,
                        n.jsx)(c.hK, {
                            y: 3
                        }), (0,
                        n.jsx)(nx, {
                            width: 368,
                            answeredText: y,
                            recognitionMode: t.mode
                        }), (0,
                        n.jsx)(c.hK, {
                            y: 3
                        }), (0,
                        n.jsx)(i.A, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(s.yh, {
                                text: "解答する",
                                disabled: Q,
                                onClick: F
                            })
                        })]
                    })]
                }), W && (0,
                n.jsx)(M.zD, {
                    result: W,
                    portalElem: Z ? "body" : H.y,
                    handleOnStop: "redo" === W ? V : U
                }), (0,
                n.jsx)(eX.Ml, {
                    isOpen: T,
                    onClickAnswer: G,
                    onClickCancel: A
                }), (0,
                n.jsx)(eX.Og, {
                    isOpen: E,
                    title: "文字を読みとれませんでした",
                    onClickCancel: _,
                    onClickContinue: Y,
                    onClose: _
                }), (0,
                n.jsx)(eX.Xn, {
                    isOpen: S,
                    y: Z ? 96 : 24,
                    onClick: w
                })]
            })
        }
        ;
        var nO = r(59205);
        let nL = e => {
            let {useLK: t, sk: r, mode: n} = e;
            if (t && r)
                switch (r) {
                case "NUMBER_SK":
                    return "number_sk";
                case "ALPHABET_SK":
                    return "alphabet_sk";
                case "HIRAGANA_SK":
                    return "hiragana_sk";
                case "KATAKANA_SK":
                    return "katakana_sk"
                }
            switch (n) {
            case "Japanese":
                return "japanese";
            case "English":
                return "english";
            case "Math":
                return "math"
            }
        }
          , nq = (0,
        a.forwardRef)( (e, t) => {
            let {width: r, height: l, editorStyle: s, apiUrl: o, mode: c, recognitionConfig: d, onOpened: u, onRecognizing: x, onRecognized: h, onRecognizedError: p, appendix: m, isOpenReconnectMessage: g} = e
              , j = (0,
            a.useRef)()
              , v = (0,
            a.useCallback)(e => {
                let {data: t, errors: r} = e;
                if (r) {
                    null == p || p(r);
                    return
                }
                null == h || h(t)
            }
            , [p, h]);
            return (0,
            a.useEffect)( () => {
                var e;
                let r = null == t ? void 0 : t.current;
                if (!r)
                    throw Error("Mount element not found");
                let n = nL(d)
                  , i = nO.K.create(r, {
                    fill: !0,
                    style: s,
                    model: n,
                    apiUrl: o,
                    program: {
                        programId: null !== (e = null == m ? void 0 : m.programId) && void 0 !== e ? e : 0,
                        courseCode: null == m ? void 0 : m.courseCode
                    },
                    recognizerOptions: {
                        debug: !1
                    },
                    autoRecognition: !0
                });
                return i.addRecognitionResultListener(v),
                i.addStrokeStartListener(x),
                j.current = i,
                null == u || u(),
                () => {
                    var e;
                    null === (e = j.current) || void 0 === e || e.cleanupListeners()
                }
            }
            , []),
            (0,
            a.useEffect)( () => {
                var e;
                null === (e = j.current) || void 0 === e || e.setPointerType(c)
            }
            , [c]),
            (0,
            a.useEffect)( () => {
                var e;
                g || null === (e = j.current) || void 0 === e || e.recognize()
            }
            , [g]),
            (0,
            n.jsx)(i.A, {
                ref: t,
                sx: {
                    width: r,
                    height: l
                }
            })
        }
        );
        nq.displayName = "SantaScriptRecognizer";
        var nP = r(65606);
        let nW = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(ng.NZ)
              , i = (0,
            l.md)(ng.vO)
              , a = (0,
            l.md)(L.HK)
              , s = (0,
            O.MM)();
            return r ? (0,
            n.jsx)(nz, {
                recognitionConfig: r,
                placeHolder: i,
                orientation: s,
                selectedTool: a,
                onAnswered: t
            }) : null
        }
          , nz = e => {
            let {recognitionConfig: t, placeHolder: r, orientation: d, selectedTool: u, onAnswered: x} = e
              , h = (0,
            l.Xr)(tQ.z)
              , p = (0,
            a.useRef)(null)
              , {elementRef: m, elementSize: g} = (0,
            o.wY)()
              , {opened: j, recognizing: v, recognized: f, recognizedError: b, reconnect: w, recognizedText: y, isOpenReconnectMessage: S, isRecognizing: C, appendix: k} = nE()
              , {show: A, hide: T, visibled: I} = nR()
              , {show: _, hide: E, visibled: R} = nA()
              , {page: N, maxPage: O, back: L, forward: q} = nI()
              , {prepare: P, fix: W} = nk()
              , {showing: z, show: V, hide: D} = ny()
              , X = (0,
            a.useCallback)(e => {
                P(A, _, () => V("correct"), () => V("redo"), () => V("incorrect"), e)
            }
            , [P, A, _, V])
              , J = (0,
            a.useCallback)( () => X(!1), [X])
              , B = (0,
            a.useCallback)( () => {
                W(y, x),
                D()
            }
            , [y, W, D, x])
              , K = (0,
            a.useCallback)( () => {
                h(!1),
                E(),
                J()
            }
            , [E, h, J])
              , F = (0,
            a.useCallback)( () => {
                T(),
                X(!0)
            }
            , [T, X]);
            (0,
            a.useEffect)( () => {
                var e, t, r;
                p.current && m.current && (null === (r = p.current) || void 0 === r || null === (t = r.editor) || void 0 === t || null === (e = t.resize) || void 0 === e || e.call(t),
                1 === N ? m.current.scrollLeft = 0 : m.current.scrollLeft = .8 * g.width * (N - 1))
            }
            , [g.width, N, m]);
            let U = C || S || void 0 !== z
              , Y = g.width + .8 * g.width * (O - 1)
              , G = "portrait" === d
              , Q = (0,
            a.useCallback)(e => {
                let {tokenResult: t, svgSnapshot: r, ...n} = e
                  , i = {
                    tokenResult: t,
                    ...n
                };
                null == f || f(t, r, i)
            }
            , [f]);
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsxs)(i.A, {
                    width: "100%",
                    maxWidth: 784,
                    children: [(0,
                    n.jsx)(eX.kI, {
                        ref: m,
                        mode: "Slider",
                        page: N,
                        maxPage: O,
                        prefixLabel: r.label,
                        suffixLabel: r.suffix,
                        useLatexInLabel: r.useLatexInLabel,
                        useLatexInSuffix: r.useLatexInSuffix,
                        onClickLeft: L,
                        onClickRight: q,
                        children: (0,
                        n.jsx)(nq, {
                            ref: p,
                            width: Y,
                            height: 240,
                            mode: "eraser" === u ? "eraser" : "pen",
                            apiUrl: nP.env.NEXT_PUBLIC_SANTASCRIPT_API_URL,
                            recognitionConfig: t,
                            onOpened: j,
                            onRecognizing: v,
                            onRecognized: Q,
                            onRecognizedError: b,
                            appendix: k,
                            isOpenReconnectMessage: S
                        })
                    }), G ? (0,
                    n.jsxs)(c.fI, {
                        marginTop: 2,
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: [(0,
                        n.jsx)(i.A, {
                            sx: {
                                marginLeft: "54px"
                            },
                            children: (0,
                            n.jsx)(nx, {
                                width: 368,
                                answeredText: y,
                                recognitionMode: t.mode
                            })
                        }), (0,
                        n.jsx)(s.yh, {
                            text: "解答する",
                            disabled: U,
                            onClick: J
                        })]
                    }) : (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        children: [(0,
                        n.jsx)(c.hK, {
                            y: 3
                        }), (0,
                        n.jsx)(nx, {
                            width: 368,
                            answeredText: y,
                            recognitionMode: t.mode
                        }), (0,
                        n.jsx)(c.hK, {
                            y: 3
                        }), (0,
                        n.jsx)(i.A, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(s.yh, {
                                text: "解答する",
                                disabled: U,
                                onClick: J
                            })
                        })]
                    })]
                }), z && (0,
                n.jsx)(M.zD, {
                    result: z,
                    portalElem: G ? "body" : H.y,
                    handleOnStop: "redo" === z ? D : B
                }), (0,
                n.jsx)(eX.Ml, {
                    isOpen: I,
                    onClickAnswer: F,
                    onClickCancel: T
                }), (0,
                n.jsx)(eX.Og, {
                    isOpen: R,
                    title: "文字を読みとれませんでした",
                    onClickCancel: E,
                    onClickContinue: K,
                    onClose: E
                }), (0,
                n.jsx)(eX.Xn, {
                    isOpen: S,
                    y: G ? 96 : 24,
                    onClick: w
                })]
            })
        }
          , nV = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(ng.y5)
              , i = (0,
            l.md)(ng.NZ)
              , {isSantaScriptTargetQuestion: a} = nf(null != r ? r : "");
            return i ? a(i) ? (0,
            n.jsx)(nW, {
                onAnswered: t
            }) : (0,
            n.jsx)(nN, {
                onAnswered: t
            }) : null
        }
          , nD = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.Xr)(ng.IZ)
              , c = (0,
            l.Xr)(ng.Hj)
              , d = (0,
            l.Xr)(ng.NZ)
              , u = (0,
            l.Xr)(ng.vO)
              , [x,h] = (0,
            l.fp)(ng.R9)
              , p = (0,
            l.Xr)(ng.y5)
              , m = (0,
            l.Xr)(ng.of)
              , g = (0,
            l.Xr)(ng.SF)
              , j = (0,
            l.Xr)(ng.fg)
              , v = (0,
            O.MM)()
              , {formatDto: f} = nw()
              , {getViewState: b} = nC();
            return ((0,
            a.useEffect)( () => {
                let {correct: e, modelAnswer: n, recognitionConfig: i, placeHolder: l, replaceType: a, gradeId: s} = f(t);
                if (r) {
                    let i = b(t, r);
                    h(i.answered),
                    j(i.svg),
                    c(n),
                    u(l),
                    g(e.some(e => e.value === i.answered) ? "correct" : "incorrect");
                    return
                }
                return o(e),
                c(n),
                d(i),
                u(l),
                p(a),
                m(s),
                () => {
                    o([]),
                    h(void 0),
                    j(""),
                    c(void 0),
                    d(void 0),
                    u(new ev.ml),
                    g("empty")
                }
            }
            , [t, r, f, h, c, o, u, d, p, m, g, b, j]),
            void 0 !== x) ? (0,
            n.jsx)(i.A, {
                pt: 2,
                pb: "portrait" === v ? 2 : 12,
                px: 2,
                children: (0,
                n.jsx)(nj, {})
            }) : (0,
            n.jsx)(i.A, {
                p: 2,
                children: (0,
                n.jsx)(nV, {
                    onAnswered: s
                })
            })
        }
          , nH = e => {
            let {placeHolder: t, modelAnswer: r, correct: i, answered: l} = e
              , a = i.find(e => "text" === e.case ? e.value === l : new RegExp(e.value).test(l));
            return (0,
            n.jsx)(c.VP, {
                children: a ? (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(M.nV, {
                        mode: "Correct",
                        value: l,
                        placeHolder: t
                    }), l !== r && (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(c.hK, {
                            y: 1
                        }), (0,
                        n.jsx)(s.EY, {
                            color: "correct",
                            size: "lg",
                            padding: "0 24px",
                            children: r
                        })]
                    })]
                }) : (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(M.nV, {
                        mode: "Incorrect",
                        value: l,
                        placeHolder: t
                    }), (0,
                    n.jsx)(c.hK, {
                        y: 1
                    }), (0,
                    n.jsx)(s.EY, {
                        color: "important",
                        size: "lg",
                        padding: "0 24px",
                        children: r
                    })]
                })
            })
        }
        ;
        var nX = r(23112)
          , nJ = r(28590);
        let nB = (0,
        ex.eU)([])
          , nK = (0,
        ex.eU)(!1)
          , nF = e => {
            let {data: t} = e
              , r = (0,
            l.Xr)(nB)
              , [i,s] = (0,
            a.useState)("");
            return (0,
            n.jsx)(nU, {
                mode: "Default",
                value: i,
                placeHolder: t.placeHolder,
                selectables: t.selectables,
                onChange: e => {
                    let n = t.selectables.find(t => t.id === Number(e));
                    r(e => e.map(e => e.id === t.id ? {
                        ...t,
                        answered: n
                    } : e)),
                    s(e)
                }
            })
        }
          , nU = e => {
            let {mode: t, value: r, placeHolder: i, selectables: l, onChange: s} = e
              , o = (0,
            a.useId)()
              , c = l.map(e => ({
                label: e.text,
                value: 0 !== e.id ? String(e.id) : void 0
            }))
              , d = (0,
            n.jsx)(nZ, {
                text: i.useLatexInLabel ? "<math>".concat(i.label, "</math>") : i.label
            })
              , u = i.useLatexInSuffix ? "<math>".concat(i.suffix, "</math>") : i.suffix;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(nG, {
                    id: o,
                    value: r,
                    label: d,
                    suffix: u,
                    menuList: c,
                    onChange: s
                });
            case "Correct":
                return (0,
                n.jsx)(nQ, {
                    id: o,
                    value: r,
                    label: d,
                    suffix: u,
                    menuList: c
                });
            case "Incorrect":
                return (0,
                n.jsx)(n$, {
                    id: o,
                    value: r,
                    label: d,
                    suffix: u,
                    menuList: c
                })
            }
        }
          , nY = {
            ".MuiSelect-select.MuiSelect-outlined": {
                minHeight: "1.7em"
            },
            ".MuiInputLabel-outlined": {
                lineHeight: 2.8
            },
            ".MuiInputLabel-shrink": {
                lineHeight: 1.7
            },
            ".MuiOutlinedInput-input": {
                lineHeight: 1.7
            },
            ".Mui-disabled.MuiInputLabel-shrink": {
                color: d.Tj.onSurface
            },
            ".Mui-disabled.MuiOutlinedInput-input": {
                color: d.Tj.onSurface,
                WebkitTextFillColor: d.Tj.onSurface
            },
            ".Mui-disabled:hover": {
                background: "inherit"
            },
            ".MuiSelect-iconOutlined": {
                position: "static"
            },
            ".Mui-disabled.MuiSelect-iconOutlined": {
                color: d.Tj.onSurfaceWeak1
            }
        }
          , nG = e => {
            let {id: t, value: r, label: i, suffix: l, menuList: a, onChange: s} = e;
            return (0,
            n.jsx)(M.A_, {
                id: t,
                name: t,
                size: "small",
                fullWidth: !0,
                multiline: !0,
                label: i,
                value: r,
                select: !0,
                onChange: s,
                sx: {
                    ".MuiSelect-select.MuiSelect-outlined": {
                        minHeight: "1.7em"
                    },
                    ".MuiInputLabel-outlined": {
                        lineHeight: 2.8
                    },
                    ".MuiInputLabel-shrink": {
                        lineHeight: 1.7
                    },
                    ".MuiOutlinedInput-input": {
                        lineHeight: 1.7
                    },
                    ".MuiSelect-iconOutlined": {
                        position: "static"
                    }
                },
                InputProps: (null == l ? void 0 : l.length) ? {
                    endAdornment: (0,
                    n.jsx)(n0, {
                        text: l
                    })
                } : void 0,
                children: a.map(e => (0,
                n.jsx)(nX.A, {
                    value: e.value,
                    sx: {
                        height: 48
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.label,
                        style: {
                            fontSize: 20,
                            color: d.Tj.onSurface
                        }
                    })
                }, e.value))
            })
        }
          , nQ = e => {
            let {id: t, value: r, label: l, suffix: a, menuList: o} = e;
            return (0,
            n.jsxs)(i.A, {
                position: "relative",
                children: [(0,
                n.jsx)(M.A_, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    label: l,
                    value: r,
                    select: !0,
                    disabled: !0,
                    sx: {
                        ...nY,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: d.Tj.correctWeak
                        }
                    },
                    InputProps: (null == a ? void 0 : a.length) ? {
                        endAdornment: (0,
                        n.jsx)(n0, {
                            text: a
                        })
                    } : void 0,
                    children: o.map(e => (0,
                    n.jsx)(nX.A, {
                        value: e.value,
                        sx: {
                            height: 48
                        },
                        children: (0,
                        n.jsx)(x.qV, {
                            src: e.label,
                            style: {
                                fontSize: 20,
                                color: d.Tj.onSurface
                            }
                        })
                    }, e.value))
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    margin: "auto",
                    width: "48px",
                    height: "48px",
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , n$ = e => {
            let {id: t, value: r, label: l, suffix: a, menuList: o} = e;
            return (0,
            n.jsxs)(i.A, {
                position: "relative",
                children: [(0,
                n.jsx)(M.A_, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    label: l,
                    value: r,
                    select: !0,
                    disabled: !0,
                    sx: {
                        ...nY,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: d.Tj.importantWeak
                        }
                    },
                    InputProps: (null == a ? void 0 : a.length) ? {
                        endAdornment: (0,
                        n.jsx)(n0, {
                            text: a
                        })
                    } : void 0,
                    children: o.map(e => (0,
                    n.jsx)(nX.A, {
                        value: e.value,
                        sx: {
                            height: 48
                        },
                        children: (0,
                        n.jsx)(x.qV, {
                            src: e.label,
                            style: {
                                fontSize: 20,
                                color: d.Tj.onSurface
                            }
                        })
                    }, e.value))
                }), (0,
                n.jsx)(i.A, {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    margin: "auto",
                    width: "48px",
                    height: "48px",
                    children: (0,
                    n.jsx)(s._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , nZ = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(x.qV, {
                src: t,
                style: {
                    fontSize: 20,
                    color: d.Tj.onSurfaceWeak2
                }
            })
        }
          , n0 = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(nJ.A, {
                position: "end",
                sx: {
                    alignSelf: "end",
                    height: "inherit",
                    marginBottom: 1.5
                },
                children: (0,
                n.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.Tj.onSurfaceWeak2
                    }
                })
            })
        }
          , n1 = e => {
            var t;
            let {placeHolder: r, selectables: i, correct: l, answered: a} = e
              , s = l.id === a
              , o = null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : "";
            return s ? (0,
            n.jsx)(nU, {
                mode: "Correct",
                value: o,
                placeHolder: r,
                selectables: i
            }) : (0,
            n.jsxs)(c.VP, {
                children: [(0,
                n.jsx)(nU, {
                    mode: "Incorrect",
                    value: o,
                    placeHolder: r,
                    selectables: i
                }), (0,
                n.jsx)(c.hK, {
                    y: 1
                }), (0,
                n.jsx)(x.qV, {
                    src: l.text,
                    style: {
                        fontSize: 20,
                        color: d.Tj.important,
                        padding: "0 24px",
                        wordWrap: "break-word"
                    }
                })]
            })
        }
          , n2 = () => {
            let e = (0,
            l.md)(nB)
              , t = (0,
            O.MM)();
            return e ? (0,
            n.jsx)(n4, {
                apData: e,
                orientation: t
            }) : null
        }
          , n4 = e => {
            let {apData: t, orientation: r} = e;
            return (0,
            n.jsx)(c.VP, {
                width: "100%",
                px: 4,
                gap: 3,
                children: t.map( (e, l) => {
                    var a, s;
                    switch (e.case) {
                    case "apSelection":
                        return (0,
                        n.jsx)(i.A, {
                            minHeight: "landscape" === r && l === t.length - 1 ? 114 : void 0,
                            children: (0,
                            n.jsx)(n1, {
                                placeHolder: e.placeHolder,
                                selectables: e.selectables,
                                correct: e.correct,
                                answered: null === (a = e.answered) || void 0 === a ? void 0 : a.id
                            }, e.id)
                        }, e.id);
                    case "apKeyboardWrite":
                        return (0,
                        n.jsx)(i.A, {
                            minHeight: "landscape" === r && l === t.length - 1 ? 114 : void 0,
                            children: (0,
                            n.jsx)(nH, {
                                ...e,
                                answered: null !== (s = e.answered) && void 0 !== s ? s : "",
                                modelAnswer: e.modelAnswer
                            }, e.id)
                        }, e.id);
                    default:
                        return (0,
                        n.jsx)(n.Fragment, {})
                    }
                }
                )
            })
        }
          , n3 = () => {
            let {convertInputToAnswerText: e} = (0,
            O.xC)();
            return {
                formatDto: (0,
                a.useCallback)(t => ({
                    apData: t.childAnswerList.reduce( (t, r, n) => {
                        switch (r.apData.case) {
                        case "apSelection":
                            {
                                let {placeHolder: e, selectables: i, correctItem: l} = function(e) {
                                    var t, r;
                                    let n = null !== (t = e.placeHolder) && void 0 !== t ? t : new ev.ml
                                      , i = e.itemList.map(e => ({
                                        id: e.itemId,
                                        text: e.text
                                    }));
                                    return e.shouldShuffle && i.sort( () => .5 - Math.random()),
                                    {
                                        placeHolder: n,
                                        selectables: i,
                                        correctItem: null !== (r = e.correctItem) && void 0 !== r ? r : new ev.Q$
                                    }
                                }(r.apData.value);
                                return [...t, {
                                    id: n,
                                    case: "apSelection",
                                    placeHolder: e,
                                    selectables: [{
                                        id: 0,
                                        text: ""
                                    }, ...i],
                                    correct: {
                                        id: l.itemId,
                                        text: l.text
                                    },
                                    answered: void 0
                                }]
                            }
                        case "apKeyboardWrite":
                            {
                                let i = r.apData.value
                                  , {placeHolder: l, correct: a} = function(t) {
                                    var r;
                                    return {
                                        placeHolder: null !== (r = t.placeHolder) && void 0 !== r ? r : new ev.ml,
                                        correct: t.correctAnswerList.reduce( (t, r) => r.option.case && r.option.value ? "text" === r.option.case ? [...t, {
                                            case: "text",
                                            value: e(r.option.value)
                                        }] : [...t, r.option] : t, [])
                                    }
                                }(i);
                                return [...t, {
                                    id: n,
                                    case: "apKeyboardWrite",
                                    placeHolder: l,
                                    modelAnswer: i.displayAnswerText,
                                    correct: a,
                                    answered: void 0
                                }]
                            }
                        default:
                            return t
                        }
                    }
                    , [])
                }), [])
            }
        }
          , n8 = () => {
            let[e,t] = (0,
            a.useState)();
            return {
                showing: e,
                show: (0,
                a.useCallback)(e => t(e), []),
                hide: (0,
                a.useCallback)( () => t(void 0), [])
            }
        }
          , n5 = () => {
            let[e,t] = (0,
            l.fp)(nB)
              , {convertInputToAnswerText: r} = (0,
            O.xC)()
              , n = (0,
            a.useCallback)(e => e.answered ? e.answered.id === e.correct.id ? "correct" : "incorrect" : "empty", [])
              , i = (0,
            a.useCallback)(n => {
                if (!n.answered)
                    return "empty";
                if (n.answered.length > 300)
                    return "overflow";
                let i = r(n.answered);
                return t(e.map(e => e.id === n.id ? {
                    ...n,
                    answered: i
                } : e)),
                n.correct.find(e => "text" === e.case ? e.value === i : new RegExp(e.value).test(i)) ? "correct" : "incorrect"
            }
            , [e, r, t]);
            return {
                validate: (0,
                a.useCallback)(e => {
                    let t = e.map(e => "apSelection" === e.case ? n(e) : i(e));
                    return t.includes("overflow") ? "overflow" : t.includes("empty") ? "empty" : t.every(e => "correct" === e) ? "correct" : "incorrect"
                }
                , [i, n])
            }
        }
          , n6 = () => ({
            getViewState: (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState) {
                    var n;
                    return n = r.apViewState,
                    {
                        answered: e.childAnswerList.reduce( (e, t, r) => {
                            switch (t.apData.case) {
                            case "apSelection":
                                {
                                    let {selectables: i} = {
                                        selectables: t.apData.value.itemList.map(e => ({
                                            id: e.itemId,
                                            text: e.text
                                        }))
                                    }
                                      , l = i.find(e => {
                                        var t;
                                        return e.text === (null === (t = n.texts) || void 0 === t ? void 0 : t[r])
                                    }
                                    );
                                    return [...e, {
                                        type: "selection",
                                        id: l ? l.id : 0
                                    }]
                                }
                            case "apKeyboardWrite":
                                return [...e, {
                                    type: "keyboard",
                                    value: n.texts ? n.texts[r] : ""
                                }];
                            default:
                                return e
                            }
                        }
                        , [])
                    }
                }
                throw Error("no view state")
            }
            )(e, t.viewStateJSON), [])
        })
          , n7 = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => t(!0), []),
                hide: (0,
                a.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , n9 = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => t(!0), []),
                hide: (0,
                a.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , ie = () => {
            let e = (0,
            l.Xr)(nK)
              , t = (0,
            l.md)(nB)
              , [r,n] = (0,
            a.useState)(0)
              , [i,s] = (0,
            a.useState)("incorrect")
              , {validate: o} = n5();
            return {
                prepare: (0,
                a.useCallback)( (e, i, l, a, c, d) => {
                    let u = o(t);
                    if ("overflow" === u) {
                        e();
                        return
                    }
                    if ("empty" === u) {
                        d ? c() : i();
                        return
                    }
                    if ("incorrect" === u && 0 === r) {
                        n(1),
                        a();
                        return
                    }
                    switch (u) {
                    case "correct":
                        l();
                        break;
                    case "incorrect":
                        c()
                    }
                    s(u)
                }
                , [t, o, r]),
                fix: (0,
                a.useCallback)(n => {
                    let l = ey.aJ.CORRECT
                      , a = t.map(e => {
                        var t;
                        let r = "apSelection" === e.case ? null === (t = e.answered) || void 0 === t ? void 0 : t.text : e.answered;
                        return null != r ? r : ""
                    }
                    )
                      , s = {
                        answered: t.map(e => {
                            switch (e.case) {
                            case "apSelection":
                                var t;
                                return {
                                    type: "selection",
                                    id: null === (t = e.answered) || void 0 === t ? void 0 : t.id
                                };
                            case "apKeyboardWrite":
                                return {
                                    type: "keyboard",
                                    value: e.answered
                                }
                            }
                        }
                        )
                    };
                    e(!0),
                    n({
                        answer: {
                            result: l,
                            textType: 2,
                            text: "".concat(a),
                            wrongCount: r
                        },
                        viewStateJSON: s
                    })
                }
                , [t, e, i, r])
            }
        }
          , it = () => {
            let e = (0,
            l.Xr)(nB)
              , [t,r] = (0,
            a.useState)([])
              , {convertInputToAnswerText: n} = (0,
            O.xC)()
              , i = (e, t) => {
                r(r => -1 === r.findIndex(t => t.id === e) ? [...r, {
                    id: e,
                    value: t
                }] : r.map(r => r.id === e ? {
                    ...r,
                    value: t
                } : r))
            }
            ;
            return {
                handleChanged: (t, r) => {
                    let l = n(t);
                    e(e => e.map(e => e.id === r.id ? {
                        ...r,
                        answered: l
                    } : e)),
                    i(r.id, t)
                }
                ,
                getInput: e => {
                    let r = t.find(t => t.id === e);
                    return r ? r.value : ""
                }
            }
        }
          , ir = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(nB)
              , i = (0,
            O.MM)();
            return r ? (0,
            n.jsx)(ii, {
                apData: r,
                orientation: i,
                onAnswered: t
            }) : null
        }
          , ii = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {prepare: o, fix: d} = ie()
              , {showing: u, show: x, hide: h} = n8()
              , {show: p, hide: m, visibled: g} = n7()
              , {show: j, hide: v, visibled: f} = n9()
              , {handleChanged: b, getInput: w} = it()
              , y = (0,
            a.useCallback)(e => {
                o(j, p, () => x("correct"), () => x("redo"), () => x("incorrect"), e)
            }
            , [o, p, j, x])
              , S = (0,
            a.useCallback)( () => y(!1), [y])
              , C = (0,
            a.useCallback)( () => {
                d(l),
                h()
            }
            , [d, h, l])
              , k = (0,
            a.useCallback)( () => {
                m(),
                y(!0)
            }
            , [m, y])
              , A = e => {
                switch (e.case) {
                case "apSelection":
                    return (0,
                    n.jsx)(nF, {
                        data: e
                    });
                case "apKeyboardWrite":
                    return (0,
                    n.jsx)(M.nV, {
                        mode: "Default",
                        value: w(e.id),
                        placeHolder: e.placeHolder,
                        onChange: t => b(t, e)
                    })
                }
            }
            ;
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                width: "100%",
                children: [(0,
                n.jsx)(c.VP, {
                    px: 4,
                    gap: 3,
                    children: t.map(e => (0,
                    n.jsx)(a.Fragment, {
                        children: A(e)
                    }, e.id))
                }), (0,
                n.jsx)(c.hK, {
                    y: "portrait" === r ? 5 : 6
                }), (0,
                n.jsx)(i.A, {
                    alignSelf: "flex-end",
                    children: (0,
                    n.jsx)(s.yh, {
                        text: "解答する",
                        disabled: void 0 !== u,
                        onClick: S
                    })
                }), u && (0,
                n.jsx)(tK.z, {
                    result: u,
                    portalElem: "portrait" === r ? "body" : H.y,
                    handleOnStop: "redo" === u ? h : C
                }), (0,
                n.jsx)(eX.jc, {
                    isOpen: f,
                    onClick: v
                }), (0,
                n.jsx)(eX.Ml, {
                    isOpen: g,
                    onClickCancel: m,
                    onClickAnswer: k
                })]
            })
        }
          , il = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , c = (0,
            l.Xr)(nB)
              , [d,u] = (0,
            l.fp)(nK)
              , x = (0,
            O.MM)()
              , {windowHeight: h} = (0,
            o.xJ)()
              , {getViewState: p} = n6()
              , {formatDto: m} = n3();
            return ((0,
            a.useEffect)( () => {
                let {apData: e} = m(t);
                if (r) {
                    let n = p(t, r);
                    c(e.map( (e, t) => {
                        switch (e.case) {
                        case "apSelection":
                            {
                                let r = n.answered[t];
                                e.answered = r.id ? {
                                    id: r.id,
                                    text: ""
                                } : void 0;
                                break
                            }
                        case "apKeyboardWrite":
                            {
                                let r = n.answered[t];
                                e.answered = r.value ? r.value : void 0
                            }
                        }
                        return e
                    }
                    )),
                    u(!0);
                    return
                }
                return c(e),
                () => {
                    c([]),
                    u(!1)
                }
            }
            , [t, m, p, r, c, u]),
            d) ? (0,
            n.jsx)(i.A, {
                height: "portrait" === x ? "auto" : h - e_.$A - 18,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                pt: 4,
                pb: "portrait" === x ? 4 : 12,
                px: 2,
                children: (0,
                n.jsx)(n2, {})
            }) : (0,
            n.jsx)(i.A, {
                height: "portrait" === x ? "auto" : h - e_.$A - 18,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                p: 4,
                pb: 2,
                px: 2,
                children: (0,
                n.jsx)(ir, {
                    onAnswered: s
                })
            })
        }
        ;
        var ia = r(42413);
        let is = (0,
        a.forwardRef)( (e, t) => {
            let {width: r, height: i, text: l, children: a} = e
              , s = (0,
            O.MM)();
            return (0,
            n.jsx)(io, {
                ref: t,
                width: r,
                height: i,
                text: l,
                orientation: s,
                children: a
            })
        }
        );
        is.displayName = "WritingArea";
        let io = (0,
        a.forwardRef)( (e, t) => {
            let {width: r, height: l, text: s, children: o, orientation: c} = e
              , [u,x] = (0,
            a.useState)(0);
            return (0,
            a.useEffect)( () => {
                x(Math.min("portrait" === c ? 257 : 238, Math.floor(r / s.length)))
            }
            , [r, s, c]),
            (0,
            n.jsxs)(i.A, {
                position: "relative",
                border: "4px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                children: [(0,
                n.jsx)(ia.A, {
                    width: r,
                    maxHeight: "portrait" === c ? 344 : 317,
                    fontFamily: "KanjiStrokeOrders",
                    fontSize: u,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: d.Tj.onSurfaceWeak3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: s
                }), (0,
                n.jsx)(i.A, {
                    ref: t,
                    width: "100%",
                    height: l,
                    position: "relative",
                    children: o
                })]
            })
        }
        );
        io.displayName = "WritingAreaView";
        let ic = (0,
        ex.eU)(void 0)
          , id = (0,
        ex.eU)("")
          , iu = (0,
        ex.eU)(0)
          , ix = (0,
        ex.eU)("none")
          , ih = (0,
        ex.eU)(void 0)
          , ip = (0,
        ex.eU)("")
          , im = () => {
            let e = (0,
            l.md)(id)
              , t = (0,
            l.md)(ih)
              , r = (0,
            l.md)(ip)
              , i = (0,
            l.md)(L.aR)
              , a = (0,
            O.MM)();
            return (0,
            n.jsx)(ig, {
                correct: e,
                answered: t,
                writtenSVG: r,
                orientation: a,
                isViewer: i
            })
        }
          , ig = e => {
            let {correct: t, answered: r, writtenSVG: l, orientation: a, isViewer: d} = e
              , {elementRef: u, elementSize: x} = (0,
            o.wY)();
            return (0,
            n.jsx)(c.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: (0,
                n.jsx)(i.A, {
                    width: "100%",
                    maxWidth: 712,
                    children: (0,
                    n.jsxs)(c.VP, {
                        gap: "portrait" === a ? 2 : 5,
                        children: [(0,
                        n.jsxs)(is, {
                            ref: u,
                            width: x.width,
                            height: "portrait" === a ? 360 : 336,
                            text: t,
                            children: [d && (0,
                            n.jsx)(i.A, {
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                width: 144,
                                height: 144,
                                children: (0,
                                n.jsx)(s._n, {
                                    name: r === t ? "correctionO" : "correctionX",
                                    width: 144,
                                    height: 144
                                })
                            }), (0,
                            n.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: l
                                }
                            })]
                        }), (0,
                        n.jsx)(i.A, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(s.yh, {
                                text: "できた",
                                disabled: d
                            })
                        })]
                    })
                })
            })
        }
          , ij = () => ({
            formatDto: (0,
            a.useCallback)(e => {
                let t = e.correctAnswer;
                return {
                    correct: t,
                    grade: e.gradeId,
                    replaceType: (0,
                    tZ.A)(e.replaceType),
                    recognitionConfig: {
                        mode: e.interactiveInkSetting ? (0,
                        eX.uy)(e.interactiveInkSetting) : "Math",
                        useLK: e.useLk,
                        sk: e.skNameOptional.value
                    }
                }
            }
            , [])
        })
          , iv = () => {
            let[e,t] = (0,
            a.useState)();
            return {
                showing: e,
                show: (0,
                a.useCallback)(e => t(e), []),
                hide: (0,
                a.useCallback)( () => t(void 0), [])
            }
        }
          , ib = () => {
            let e = (0,
            l.md)(iu)
              , t = (0,
            l.md)(ix)
              , {forceReplace: r} = (0,
            tY.bt)()
              , {replace: n} = (0,
            tY.Q$)()
              , i = (0,
            a.useCallback)(e => 0 === e.length, []);
            return {
                validate: (0,
                a.useCallback)( (l, a) => {
                    if (i(l))
                        return "empty";
                    let s = "english" === t ? " " : ""
                      , o = l.replace(/\n/g, s)
                      , {isMatched: c} = n(o, a, t);
                    if (c)
                        return "correct";
                    let d = r(o, e, t)
                      , {isMatched: u} = n((0,
                    tU.q)(t, [a], d), a, t);
                    return u ? "correct" : "incorrect"
                }
                , [i, r, e, n, t]),
                checkEmpty: i
            }
        }
          , iw = () => ({
            getViewState: (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState) {
                    var r, n;
                    return {
                        answered: (r = t.apViewState).recognizedText,
                        svg: null !== (n = r.svg) && void 0 !== n ? n : ""
                    }
                }
                throw Error("no view state")
            }
            )(e.viewStateJSON), [])
        })
          , iy = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return {
                show: (0,
                a.useCallback)( () => {
                    t(!0)
                }
                , []),
                hide: (0,
                a.useCallback)( () => {
                    t(!1)
                }
                , []),
                visibled: e
            }
        }
          , iS = () => {
            let e = (0,
            l.Xr)(ip)
              , [t,r] = (0,
            a.useState)("")
              , [n,i] = (0,
            a.useState)(!1)
              , [s,o] = (0,
            a.useState)(!1)
              , c = (0,
            a.useCallback)( () => {
                r("")
            }
            , [r])
              , d = (0,
            a.useCallback)( () => {
                i(!0)
            }
            , [i]);
            return {
                opened: c,
                recognizing: d,
                recognized: (0,
                a.useCallback)( (t, n) => {
                    r(t),
                    e(n),
                    i(!1)
                }
                , [e]),
                disconnected: (0,
                a.useCallback)( () => {
                    r(""),
                    o(!0)
                }
                , [r, o]),
                reconnect: (0,
                a.useCallback)( () => {
                    o(!1)
                }
                , [o]),
                recognizedText: t,
                isOpenReconnectMessage: s,
                isRecognizing: n
            }
        }
          , iC = e => {
            let t = (0,
            l.md)(ip)
              , r = (0,
            l.Xr)(ih)
              , [n,i] = (0,
            a.useState)("incorrect")
              , {validate: s} = ib();
            return {
                prepare: (0,
                a.useCallback)( (t, r, n, l, a, o) => {
                    let c = s(t, e);
                    if ("empty" === c) {
                        o ? a() : r();
                        return
                    }
                    switch (c) {
                    case "correct":
                        n();
                        break;
                    case "incorrect":
                        l()
                    }
                    i(c)
                }
                , [e, s]),
                fix: (0,
                a.useCallback)( (e, i) => {
                    let l = ey.aJ.CORRECT;
                    r(e),
                    i({
                        answer: {
                            result: l,
                            textType: 2,
                            text: e,
                            wrongCount: 0
                        },
                        viewStateJSON: {
                            answered: e,
                            svg: t
                        }
                    })
                }
                , [r, n, t])
            }
        }
          , ik = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.md)(id)
              , i = (0,
            l.md)(ih)
              , a = (0,
            l.md)(ic)
              , s = (0,
            l.md)(L.HK)
              , o = (0,
            l.md)(L.aR)
              , c = (0,
            O.MM)();
            return a ? (0,
            n.jsx)(iA, {
                correct: r,
                recognitionConfig: a,
                orientation: c,
                selectedTool: s,
                onAnswered: t,
                isViewer: o,
                isAnswered: void 0 !== i
            }) : null
        }
          , iA = e => {
            let {correct: t, recognitionConfig: r, orientation: l, selectedTool: d, onAnswered: u, isViewer: x, isAnswered: h} = e
              , p = (0,
            a.useRef)(null)
              , {prepare: m, fix: g} = iC(t)
              , {showing: j, show: v, hide: f} = iv()
              , {elementRef: b, elementSize: w} = (0,
            o.wY)()
              , {opened: y, recognizing: S, recognized: C, disconnected: k, reconnect: A, recognizedText: T, isOpenReconnectMessage: I, isRecognizing: _} = iS()
              , {show: E, hide: R, visibled: N} = iy()
              , {onPointerDown: O, onPointerUp: L} = (0,
            eX.$D)()
              , q = (0,
            a.useCallback)( () => {
                S(),
                O()
            }
            , [S])
              , P = (0,
            a.useCallback)( (e, t) => {
                C(e, t),
                L()
            }
            , [C])
              , W = (0,
            a.useCallback)(e => {
                m(T, E, () => v("kanji_correct"), () => v("kanji_incorrect"), () => v("incorrect"), e)
            }
            , [T, m, v, E])
              , z = (0,
            a.useCallback)( () => W(!1), [W])
              , V = (0,
            a.useCallback)( () => {
                g(T, u),
                f()
            }
            , [g, T, u, f])
              , D = (0,
            a.useCallback)( () => {
                R(),
                W(!0)
            }
            , [R, W])
              , H = "portrait" === l;
            return (0,
            n.jsxs)(c.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsx)(i.A, {
                    width: "100%",
                    maxWidth: 712,
                    children: (0,
                    n.jsxs)(c.VP, {
                        gap: H ? 2 : 5,
                        children: [(0,
                        n.jsx)(is, {
                            ref: b,
                            width: w.width,
                            height: H ? 360 : 336,
                            text: t,
                            children: !I && (0,
                            n.jsx)(tB, {
                                ref: p,
                                width: w.width,
                                height: w.height,
                                recognitionConfig: r,
                                mode: "eraser" === d ? "eraser" : "pen",
                                onOpened: y,
                                onRecognizing: q,
                                onRecognized: P,
                                onDisconnected: k
                            })
                        }), (0,
                        n.jsx)(i.A, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(s.yh, {
                                text: "できた",
                                disabled: x || _ || I || void 0 !== j || h,
                                onClick: z
                            })
                        })]
                    })
                }), j && (0,
                n.jsx)(M.zD, {
                    result: j,
                    portalElem: "body",
                    handleOnStop: V
                }), (0,
                n.jsx)(eX.Ml, {
                    isOpen: N,
                    onClickAnswer: D,
                    onClickCancel: R
                }), (0,
                n.jsx)(eX.Xn, {
                    isOpen: I,
                    y: H ? 96 : 24,
                    onClick: A
                })]
            })
        }
          , iT = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.Xr)(id)
              , c = (0,
            l.Xr)(iu)
              , d = (0,
            l.Xr)(ic)
              , u = (0,
            l.Xr)(ix)
              , [x,h] = (0,
            l.fp)(ih)
              , p = (0,
            l.Xr)(ip)
              , {formatDto: m} = ij()
              , {getViewState: g} = iw();
            return ((0,
            a.useEffect)( () => {
                let {correct: e, grade: n, replaceType: i, recognitionConfig: l} = m(t);
                if (r) {
                    let t = g(r);
                    o(e),
                    h(t.answered),
                    p(t.svg);
                    return
                }
                return o(e),
                d(l),
                c(n),
                u(i),
                () => {
                    o(""),
                    h(void 0),
                    d(void 0),
                    c(0),
                    u("none"),
                    p("")
                }
            }
            , [t, m, g, r, h, o, c, d, u, p]),
            void 0 !== x || r) ? (0,
            n.jsx)(i.A, {
                p: 2,
                children: (0,
                n.jsx)(im, {})
            }) : (0,
            n.jsx)(i.A, {
                p: 2,
                children: (0,
                n.jsx)(ik, {
                    onAnswered: s
                })
            })
        }
        ;
        var iI = r(14953)
          , i_ = r.n(iI);
        r(22841),
        r(92357),
        i_()( () => Promise.all([r.e(314), r.e(771)]).then(r.bind(r, 33771)).then(e => e.Answering), {
            loadableGenerated: {
                webpack: () => [33771]
            },
            ssr: !1
        });
        let iE = i_()( () => Promise.all([r.e(314), r.e(900), r.e(245)]).then(r.bind(r, 80245)).then(e => e.VoiceElsa), {
            loadableGenerated: {
                webpack: () => [80245]
            },
            ssr: !1
        })
          , iR = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: a, startAnswerProcess: s} = e;
            return (0,
            n.jsxs)(i.A, {
                id: H.y,
                display: "flex",
                flexDirection: "column",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: [(0,
                n.jsx)(nD, {
                    dto: r,
                    replayResource: l,
                    onAnswered: s
                }), (0,
                n.jsx)(Y, {
                    answerMode: t,
                    endAnswerProcess: a
                })]
            })
        }
          , iN = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: s, pendingAnswerProcess: o, startAnswerProcess: c} = e;
            return (0,
            a.useEffect)( () => {
                "Answered" === t && s()
            }
            , [t, s]),
            (0,
            n.jsx)(i.A, {
                id: H.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: (0,
                n.jsx)(rU, {
                    dto: r,
                    replayResource: l,
                    onPendingAnswered: o,
                    onAnswered: c
                })
            })
        }
          , iM = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: a, startAnswerProcess: s} = e;
            return (0,
            n.jsxs)(i.A, {
                id: H.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: [(0,
                n.jsx)(eT, {
                    dto: r,
                    replayResource: l,
                    onAnswered: s
                }), (0,
                n.jsx)(Y, {
                    answerMode: t,
                    endAnswerProcess: a
                })]
            })
        }
          , iO = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: a, startAnswerProcess: s} = e;
            return (0,
            n.jsxs)(i.A, {
                id: H.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: [(0,
                n.jsx)(eZ, {
                    dto: r,
                    replayResource: l,
                    onAnswered: s
                }), (0,
                n.jsx)(Y, {
                    answerMode: t,
                    endAnswerProcess: a
                })]
            })
        }
          , iL = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: a, startAnswerProcess: s} = e;
            return (0,
            n.jsxs)(i.A, {
                id: H.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: [(0,
                n.jsx)(tm, {
                    dto: r,
                    replayResource: l,
                    onAnswered: s
                }), (0,
                n.jsx)(Y, {
                    answerMode: t,
                    endAnswerProcess: a
                })]
            })
        }
          , iq = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: a, startAnswerProcess: s} = e;
            return (0,
            n.jsxs)(i.A, {
                id: H.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: [(0,
                n.jsx)(nn, {
                    dto: r,
                    replayResource: l,
                    onAnswered: s
                }), (0,
                n.jsx)(Y, {
                    answerMode: t,
                    endAnswerProcess: a
                })]
            })
        }
          , iP = e => {
            let {answerMode: t, answerType: r, dto: l, replayResource: a, endAnswerProcess: s, startAnswerProcess: o} = e;
            return (0,
            n.jsxs)(i.A, {
                id: H.y,
                display: "triple" === r ? "flex" : "block",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: [(0,
                n.jsx)(t6, {
                    dto: l,
                    replayResource: a,
                    onAnswered: o
                }), (0,
                n.jsx)(Y, {
                    answerMode: t,
                    endAnswerProcess: s
                })]
            })
        }
          , iW = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: a, startAnswerProcess: s} = e;
            return (0,
            n.jsxs)(i.A, {
                id: H.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: [(0,
                n.jsx)(il, {
                    dto: r,
                    replayResource: l,
                    onAnswered: s
                }), (0,
                n.jsx)(Y, {
                    answerMode: t,
                    endAnswerProcess: a
                })]
            })
        }
          , iz = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: s, startAnswerProcess: o} = e;
            return (0,
            a.useEffect)( () => {
                "Answered" === t && s()
            }
            , [t, s]),
            (0,
            n.jsx)(i.A, {
                id: H.y,
                display: "flex",
                flexDirection: "column",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: (0,
                n.jsx)(iT, {
                    dto: r,
                    replayResource: l,
                    onAnswered: o
                })
            })
        }
          , iV = e => {
            let {answerMode: t, dto: r, isAnswerProcessing: l, replayResource: s, endAnswerProcess: o, startAnswerProcess: c} = e;
            return (0,
            a.useEffect)( () => {
                "Answered" === t && o()
            }
            , [t, o]),
            (0,
            n.jsx)(i.A, {
                id: H.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: (0,
                n.jsx)(iE, {
                    dto: r,
                    replayResource: s,
                    onAnswered: c,
                    isAnswerProcessing: l
                })
            })
        }
          , iD = e => {
            let {answerMode: t, dto: r, replayResource: l, endAnswerProcess: a, startAnswerProcess: s} = e;
            return (0,
            n.jsxs)(i.A, {
                id: H.y,
                display: "flex",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.Tj.surface,
                border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                children: [(0,
                n.jsx)(r_, {
                    dto: r,
                    replayResource: l,
                    onAnswered: s
                }), (0,
                n.jsx)(Y, {
                    answerMode: t,
                    endAnswerProcess: a
                })]
            })
        }
          , iH = e => {
            let {answerMode: t, pendingAnswerProcess: r, startAnswerProcess: i, endAnswerProcess: a, isAnswerProcessing: s, replayResource: o} = e
              , c = (0,
            l.md)(L.bQ)
              , d = (0,
            l.md)(tN);
            if (!c)
                return null;
            let u = {
                apData: c.contentResource.legacyAnswer.apData,
                replayResource: o,
                answerMode: t,
                answerType: d,
                pendingAnswerProcess: r,
                startAnswerProcess: i,
                endAnswerProcess: a,
                isAnswerProcessing: s
            };
            if (!o)
                return (0,
                n.jsx)(iX, {
                    ...u
                });
            try {
                let e = JSON.parse(o.viewStateJSON)
                  , t = D.z.object({
                    apName: D.z.string()
                }).safeParse(e);
                if (!t.success)
                    return (0,
                    n.jsx)(iX, {
                        ...u
                    });
                let r = t.data.apName
                  , i = c.contentResource.answer.name;
                if (r !== i)
                    return (0,
                    n.jsx)(B, {
                        exceptionType: "answerPatternChanged"
                    });
                return (0,
                n.jsx)(iX, {
                    ...u
                })
            } catch (e) {
                return (0,
                n.jsx)(B, {
                    exceptionType: "invalidReplayResource"
                })
            }
        }
          , iX = e => {
            let {apData: t, replayResource: r, answerMode: i, answerType: l, pendingAnswerProcess: a, startAnswerProcess: s, endAnswerProcess: o, isAnswerProcessing: c} = e
              , d = {
                answerMode: i,
                replayResource: r,
                endAnswerProcess: o,
                startAnswerProcess: s
            };
            switch (t.case) {
            case "apSelection":
                return (0,
                n.jsx)(iq, {
                    ...d,
                    dto: t.value
                });
            case "apMultipleSelection":
                return (0,
                n.jsx)(iL, {
                    ...d,
                    dto: t.value
                });
            case "apWordOrderSort":
                return (0,
                n.jsx)(iD, {
                    ...d,
                    dto: t.value
                });
            case "apImageSelection":
                return (0,
                n.jsx)(iM, {
                    ...d,
                    dto: t.value
                });
            case "apSynchronization":
                return (0,
                n.jsx)(iW, {
                    ...d,
                    dto: t.value
                });
            case "apVoiceInput":
                return (0,
                n.jsx)(iV, {
                    ...d,
                    dto: t.value,
                    isAnswerProcessing: c
                });
            case "apKeyboardWrite":
                return (0,
                n.jsx)(iO, {
                    ...d,
                    dto: t.value
                });
            case "apHandWrite":
                return (0,
                n.jsx)(iR, {
                    ...d,
                    dto: t.value
                });
            case "apSyncedHandWrite":
                return (0,
                n.jsx)(iP, {
                    ...d,
                    answerType: l,
                    dto: t.value
                });
            case "apTrace":
                return (0,
                n.jsx)(iz, {
                    ...d,
                    dto: t.value
                });
            case "apHandWriteSelfJudgement":
                return (0,
                n.jsx)(iN, {
                    ...d,
                    dto: t.value,
                    pendingAnswerProcess: a
                });
            default:
                return (0,
                n.jsx)(B, {
                    exceptionType: "unknownAnswerPattern"
                })
            }
        }
          , iJ = (e, t) => {
            switch (e.type) {
            case "ClassicQubena":
                return (0,
                n.jsx)(iB, {
                    source: e,
                    showImageDialog: t
                });
            case "Empty":
                return (0,
                n.jsx)(iK, {});
            case "EnglishWord":
                return (0,
                n.jsx)(iF, {
                    source: e
                });
            case "EnglishWordV2":
                return (0,
                n.jsx)(iU, {
                    source: e
                });
            case "Html":
                return (0,
                n.jsx)(iG, {
                    source: e
                });
            case "KanjiDefault":
                return (0,
                n.jsx)(iQ, {
                    source: e
                });
            case "KanjiSelfJudgement":
                return (0,
                n.jsx)(i$, {
                    source: e
                });
            case "KanjiSelfJudgementLegacy":
                return (0,
                n.jsx)(iZ, {
                    source: e
                });
            case "Simple":
                return (0,
                n.jsx)(i0, {
                    source: e,
                    showImageDialog: t
                })
            }
        }
          , iB = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.image;
            return i ? (0,
            n.jsx)("div", {
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                children: (0,
                n.jsxs)(c.VP, {
                    alignItems: "center",
                    gap: 2,
                    children: [(0,
                    n.jsx)("img", {
                        className: "answer-content-image",
                        src: i,
                        width: "100%"
                    }), (0,
                    n.jsx)(x.TS, {
                        onClick: () => {
                            r && r(i)
                        }
                    })]
                }, 0)
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , iK = () => (0,
        n.jsx)(n.Fragment, {})
          , iF = e => {
            let {source: t} = e
              , {parameter: r} = t
              , {targetWord: i, partOfSpeech: l, variantForm: a, countability: s, baseForm: o, wordUsageAndMeaning: c, singularForm: d, pluralForm: u, thirdParsonSingular: x, pastTense: h, presentParticiple: p, pastParticiple: m, positiveDegree: g, comparativeDegree: j, superlativeDegree: v, exampleUsage: f, meaningOfExample: b} = r
              , w = [{
                label: "単数形",
                value: d
            }, {
                label: "複数形",
                value: u
            }, {
                label: "原形",
                value: o
            }, {
                label: "3単現",
                value: x
            }, {
                label: "過去形",
                value: h
            }, {
                label: "現在分詞",
                value: p
            }, {
                label: "過去分詞",
                value: m
            }, {
                label: "原級",
                value: g
            }, {
                label: "比較級",
                value: j
            }, {
                label: "最上級",
                value: v
            }].filter(e => {
                let {label: t, value: r} = e;
                return void 0 !== r && r.length > 0 && a !== t
            }
            ).map(e => {
                let {label: t, value: r} = e;
                return "".concat(t, "=").concat(r)
            }
            );
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("div", {
                    className: "question-area",
                    children: (0,
                    n.jsxs)("p", {
                        className: "question-text",
                        children: [(0,
                        n.jsx)("b", {
                            children: i
                        }), (0,
                        n.jsx)("br", {}), l, s && "名詞" === l ? "(".concat(s, ")") : "", (0,
                        n.jsx)("br", {}), ("動詞" === l || "助動詞" === l) && "3単現" === a ? (0,
                        n.jsxs)("b", {
                            children: [o, "の変化形で, 主語が3人称単数で現在の時に使う語"]
                        }) : (0,
                        n.jsx)("b", {
                            children: c
                        }), w.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), w.join(", ")]
                        }), f && f.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), (0,
                            n.jsxs)("b", {
                                children: [f, b ? "(".concat(b, ")") : ""]
                            })]
                        })]
                    })
                })
            })
        }
          , iU = e => {
            let {source: t} = e
              , {parameter: r} = t
              , {targetWord: i, partOfSpeech: l, variantForm: a, countability: s, baseForm: o, wordUsageAndMeaning: c, singularForm: d, pluralForm: u, thirdParsonSingular: x, pastTense: h, presentParticiple: p, pastParticiple: m, positiveDegree: g, comparativeDegree: j, superlativeDegree: v, exampleUsage: f, meaningOfExample: b} = r
              , w = [{
                label: "単数形",
                value: d
            }, {
                label: "複数形",
                value: u
            }, {
                label: "原形",
                value: o
            }, {
                label: "3単現",
                value: x
            }, {
                label: "過去形",
                value: h
            }, {
                label: "現在分詞",
                value: p
            }, {
                label: "過去分詞",
                value: m
            }, {
                label: "原級",
                value: g
            }, {
                label: "比較級",
                value: j
            }, {
                label: "最上級",
                value: v
            }].filter(e => {
                let {label: t, value: r} = e;
                return void 0 !== r && r.length > 0 && a !== t
            }
            ).map(e => {
                let {label: t, value: r} = e;
                return "".concat(t, "=").concat(r)
            }
            );
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("div", {
                    className: "question-area",
                    children: (0,
                    n.jsxs)("p", {
                        className: "question-text",
                        children: [(0,
                        n.jsx)("b", {
                            children: i
                        }), (0,
                        n.jsx)("br", {}), l, s && "名詞" === l ? "(".concat(s, ")") : "", (0,
                        n.jsx)("br", {}), ("動詞" === l || "助動詞" === l) && "3単現" === a ? (0,
                        n.jsxs)("b", {
                            children: [o, "の変化形で, 主語が3人称単数で現在の時に使う語"]
                        }) : (0,
                        n.jsx)("b", {
                            children: c
                        }), w.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), w.join(", ")]
                        }), f && f.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), (0,
                            n.jsxs)("b", {
                                children: [(0,
                                n.jsx)(iY, {
                                    text: f
                                }), (0,
                                n.jsx)("br", {}), (0,
                                n.jsx)(iY, {
                                    text: b || ""
                                })]
                            })]
                        })]
                    })
                })
            })
        }
          , iY = e => {
            let {text: t} = e
              , r = t.split("\n");
            return (0,
            n.jsx)(n.Fragment, {
                children: r.map( (e, t) => (0,
                n.jsxs)(n.Fragment, {
                    children: [e, t < r.length - 1 && e && (0,
                    n.jsx)("br", {})]
                }))
            })
        }
          , iG = e => {
            let {source: t} = e
              , r = t.parameter.html || "";
            return (0,
            n.jsx)("div", {
                className: "question-area",
                children: (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: r
                    })
                })
            })
        }
          , iQ = e => {
            let t, {source: r} = e, i = r.parameter, l = i.phrase, a = i.phrasePronunciation, s = i.grade;
            return t = s <= 2 ? "<b><ruby><rb>語</rb><rp>(</rp><rt>ご</rt><rp>)</rp></ruby>　　<ruby><rb>句</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>：".concat(l, "</b><br/><b><ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>　　み：").concat(a, "</b>") : s <= 5 ? "<b>語　　<ruby><rb>句</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>：".concat(l, "</b><br/><b>読　　み：").concat(a, "</b>") : "<b>語　　句：".concat(l, "</b><br/><b>読　　み：").concat(a, "</b>"),
            (0,
            n.jsx)("div", {
                className: "question-area",
                children: (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: t
                    })
                })
            })
        }
          , i$ = e => {
            let t, {source: r} = e, i = r.parameter, l = i.components, a = i.modelAnswerString, s = a.length;
            return t = 0 === l.length ? (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "正解はこれ"
                })
            }) : l.map( (e, t) => (0,
            n.jsx)("p", {
                className: "question-text",
                children: (0,
                n.jsx)(x.qV, {
                    src: e.text.replaceAll("\n", "<br/>")
                })
            }, t)),
            (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [t, (0,
                n.jsx)("p", {
                    className: "font-kanji-stroke-order ".concat(s <= 2 ? "adjust-font-upto2" : "adjust-font-over3"),
                    style: {
                        "--wordnum": s
                    },
                    children: a
                })]
            })
        }
          , iZ = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, a = i.questionWordOthers, s = l.length, o = i.grade;
            return t = o <= 1 ? "<ruby><rb>正解</rb><rp>(</rp><rt>せいかい</rt><rp>)</rp></ruby>はこちらです" : o <= 5 ? "正<ruby><rb>解</rb><rp>(</rp><rt>かい</rt><rp>)</rp></ruby>はこちらです" : "正解はこちらです",
            (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.qV, {
                        src: t
                    })
                }), (0,
                n.jsx)("p", {
                    className: "font-kanji-stroke-order ".concat(s <= 2 ? "adjust-font-upto2" : "adjust-font-over3"),
                    style: {
                        "--wordnum": s
                    },
                    children: l
                }), "" !== a && (0,
                n.jsxs)("div", {
                    className: "main-text",
                    style: {
                        fontSize: "20px",
                        lineHeight: 1.7
                    },
                    children: ["※", (0,
                    n.jsx)("b", {
                        children: a
                    }), "も可"]
                })]
            })
        }
          , i0 = e => {
            var t;
            let {source: r, showImageDialog: i} = e
              , l = r.parameter.components.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , a = null !== (t = r.images) && void 0 !== t ? t : [];
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Text:".concat(t))), 0 !== a.length && (0,
                n.jsx)("div", {
                    className: "image-area",
                    children: a.map( (e, t) => (0,
                    n.jsxs)(c.VP, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-medium"
                        }), (0,
                        n.jsx)(x.TS, {
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Image:".concat(t)))
                })]
            })
        }
        ;
        var i1 = r(73821);
        let i2 = a.memo(e => {
            let {minHeight: t, margin: r} = e
              , {getDescriptionSource: i} = (0,
            i1.L)()
              , l = i();
            return void 0 === l ? (0,
            n.jsx)(n.Fragment, {
                children: "開発中のAD"
            }) : (0,
            n.jsx)(i4, {
                minHeight: t,
                margin: r,
                description: l
            })
        }
        );
        i2.displayName = "DescriptionPanel";
        let i4 = e => {
            let {minHeight: t, margin: r, description: l} = e
              , [o,c] = (0,
            a.useState)(null)
              , u = (0,
            a.useCallback)(e => {
                c(e)
            }
            , [])
              , x = (0,
            a.useCallback)( () => {
                c(null)
            }
            , []);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(i.A, {
                    height: 56,
                    bgcolor: d.Tj.important,
                    sx: {
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8
                    },
                    paddingX: 3,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(s.EY, {
                        color: "onSurfaceWeak4",
                        size: "xl",
                        fontWeight: "bold",
                        children: "解説"
                    })
                }), (0,
                n.jsx)(i.A, {
                    minHeight: t,
                    marginBottom: r,
                    bgcolor: d.Tj.surface,
                    border: "1px solid ".concat(d.Tj.onSurfaceWeak3),
                    sx: {
                        borderBottomRightRadius: 8,
                        borderBottomLeftRadius: 8
                    },
                    children: iJ(l, u)
                }), (0,
                n.jsx)(M.zq, {
                    src: o,
                    onClose: x
                })]
            })
        }
    }
    ,
    23630: (e, t, r) => {
        r.d(t, {
            iO: () => m,
            cV: () => p
        });
        var n = r(74848)
          , i = r(4743)
          , l = r(34843)
          , a = r(84436)
          , s = r(94096)
          , o = r(2424)
          , c = r(96540)
          , d = r(23372)
          , u = r(59091);
        let x = e => {
            let {active: t} = e
              , r = (0,
            l.Xr)(s.HK)
              , i = (0,
            c.useCallback)( () => {
                r(t ? void 0 : "eraser")
            }
            , [t, r]);
            return (0,
            n.jsx)(o.A, {
                sx: {
                    width: 56,
                    height: 56,
                    p: 0,
                    bgcolor: t ? (0,
                    u.au)("primary", "disabled") : "transparent",
                    cursor: "pointer",
                    "&:hover": {
                        bgcolor: t ? (0,
                        u.au)("primary", "disabled") : (0,
                        u.au)("primary", "hover")
                    },
                    "& .MuiTouchRipple-rippleVisible": {
                        color: (0,
                        u.au)("primary", "pressed")
                    }
                },
                onClick: i,
                children: (0,
                n.jsx)(d.Bj, {
                    name: "eraser",
                    size: 40,
                    color: "primary"
                })
            })
        }
          , h = e => {
            let {active: t} = e
              , r = (0,
            l.Xr)(s.HK)
              , i = (0,
            c.useCallback)( () => {
                r(t ? void 0 : "pen")
            }
            , [t, r]);
            return (0,
            n.jsx)(o.A, {
                sx: {
                    width: 56,
                    height: 56,
                    p: 0,
                    bgcolor: t ? (0,
                    u.au)("primary", "disabled") : "transparent",
                    cursor: "pointer",
                    "&:hover": {
                        bgcolor: t ? (0,
                        u.au)("primary", "disabled") : (0,
                        u.au)("primary", "hover")
                    },
                    "& .MuiTouchRipple-rippleVisible": {
                        color: (0,
                        u.au)("primary", "pressed")
                    }
                },
                onClick: i,
                children: (0,
                n.jsx)(d.Bj, {
                    name: "pen",
                    size: 40,
                    color: "primary"
                })
            })
        }
          , p = 56
          , m = () => {
            let e = (0,
            l.md)(s.$Q)
              , t = (0,
            l.md)(s.HK);
            return (0,
            n.jsx)(g, {
                toolSet: e,
                selectedTool: t
            })
        }
          , g = e => {
            let {toolSet: t, selectedTool: r} = e;
            return (0,
            n.jsxs)(i.A, {
                width: p,
                children: [(0,
                n.jsx)(h, {
                    active: "pen" === r
                }), (0,
                n.jsx)(a.hK, {
                    y: 2
                }), (0,
                n.jsx)(x, {
                    active: "eraser" === r
                })]
            })
        }
    }
    ,
    3145: (e, t, r) => {
        r.d(t, {
            Fb: () => a,
            Gk: () => o,
            eB: () => c,
            eC: () => d,
            kW: () => u,
            kh: () => l,
            oN: () => s
        });
        var n = r(23372)
          , i = r(46506);
        let l = 300
          , a = {
            top: {
                opacity: 0,
                translateY: -500
            },
            bottom: {
                opacity: 0,
                translateY: 500
            },
            left: {
                opacity: 0,
                translateX: -500
            },
            right: {
                opacity: 0,
                translateX: 500
            },
            current: {
                opacity: 1,
                translateX: 0
            }
        }
          , s = {
            narrowAnsweringScrollbar: "narrow-answering-scrollbar",
            narrowAnsweredScrollbar: "narrow-answered-scrollbar"
        }
          , o = 672
          , c = 24
          , d = parseInt(n.R7.M.height) + 2 * c
          , u = "calc(100% - ".concat(i.$A + d, "px)")
    }
    ,
    87838: (e, t, r) => {
        r.d(t, {
            $Q: () => p,
            Ym: () => g,
            wo: () => v,
            ID: () => j,
            $t: () => m.$
        });
        var n = r(59205)
          , i = r(65218)
          , l = r(34843)
          , a = r(96540)
          , s = r(26892)
          , o = r(95292)
          , c = r(79829)
          , d = r(46038)
          , u = r(94096)
          , x = r(57982)
          , h = r(65606);
        let p = e => {
            let t = (0,
            l.Xr)(u.AD)
              , r = (0,
            l.Xr)(u.Dl)
              , p = (0,
            l.md)(x.r)
              , m = (0,
            l.md)(u.aR)
              , [g,j] = (0,
            l.fp)(c.y)
              , v = (0,
            l.Xr)(u._u)
              , [f,b] = (0,
            a.useState)()
              , [w,y] = (0,
            a.useState)(!1)
              , [S,C] = (0,
            a.useState)(!1)
              , [k,A] = (0,
            a.useState)(!1)
              , T = (0,
            a.useMemo)( () => f ? "Answered" : w ? "PendingAnswered" : "Answering", [f, w])
              , I = (0,
            a.useMemo)( () => (null == f ? void 0 : f.pagePath) === "cursor/result", [null == f ? void 0 : f.pagePath])
              , _ = (0,
            d.l2)()
              , E = (0,
            d.QR)()
              , R = (0,
            d.pz)()
              , N = (0,
            d.PM)()
              , M = (0,
            d.bd)()
              , O = (0,
            a.useCallback)(async () => {
                f && (r({
                    type: s.w2.ANSWER_END
                }),
                E(),
                I && (t(1),
                await new Promise(e => setTimeout(e, 2e3))),
                R(f),
                y(!1))
            }
            , [f, I, r, E, R, t])
              , L = (0,
            a.useCallback)( () => {
                r({
                    type: s.w2.QUESTION_END
                }),
                r({
                    type: s.w2.ANSWER_START
                }),
                y(!0)
            }
            , [r])
              , q = (0,
            a.useCallback)(async e => await _(e), [_])
              , P = (0,
            a.useCallback)(async (e, t) => {
                let r = t.answerLogResource;
                r && await N(r, e)
            }
            , [N])
              , W = (0,
            a.useCallback)(async t => {
                0 !== p && await N({
                    buffer: e.current,
                    type: o.w6.DRAWING_IMAGE
                }, t)
            }
            , [N, e, p])
              , z = (0,
            a.useCallback)(async (e, t) => {
                if ("true" === h.env.NEXT_PUBLIC_FEATURE_HANDWRITING_ANSWER_IMAGE_GCS_ENABLED) {
                    var r;
                    let n = e.viewStateJSON
                      , i = [];
                    if (null == n ? void 0 : n.svg)
                        i.push(n.svg);
                    else if (null == n ? void 0 : null === (r = n.items) || void 0 === r ? void 0 : r.length)
                        for (let e of n.items)
                            i.push(e.svg);
                    await M(t, i)
                }
            }
            , [M])
              , V = (0,
            a.useCallback)(e => {
                g && ((0,
                n.H)({
                    ...g,
                    answer: e.answer.text,
                    correct: e.answer.result === s.aJ.CORRECT
                }),
                j(void 0))
            }
            , [g, j])
              , D = (0,
            a.useCallback)(e => {
                if (e instanceof i.T) {
                    let t = e.findDetails(o.Dr)[0];
                    t ? v(t) : A(!0)
                } else
                    A(!0)
            }
            , [v])
              , H = (0,
            a.useCallback)(async e => {
                C(!0),
                A(!1),
                r({
                    type: s.w2.QUESTION_END
                }),
                r({
                    type: s.w2.ANSWER_START
                });
                try {
                    let t = await q(e);
                    if (!t)
                        return;
                    let r = t.answerLogIds[0];
                    return r && (await P(r, e),
                    await W(r),
                    "true" === h.env.NEXT_PUBLIC_FEATURE_HANDWRITING_ANSWER_IMAGE_GCS_ENABLED && await z(e, r)),
                    b(t.transitionCommand),
                    V(e),
                    r
                } catch (e) {
                    D(e)
                } finally {
                    C(!1)
                }
            }
            , [r, q, P, W, z, V, D])
              , X = (0,
            a.useCallback)(async () => {
                await O(),
                I || b(void 0)
            }
            , [I, O, b])
              , J = (0,
            a.useCallback)(async e => {
                b(s.Lx.fromJson({}))
            }
            , [b]);
            return {
                answerMode: T,
                isStartAnswering: S,
                isNextResult: I,
                isError: k,
                pendingAnswerProcess: L,
                startAnswerProcess: m ? J : H,
                endAnswerProcess: X
            }
        }
        ;
        r(73821);
        var m = r(79857);
        let g = () => {
            let e = (0,
            l.md)(u.bQ);
            return {
                getExplainSource: (0,
                a.useCallback)( () => {
                    var t;
                    let r = null == e ? void 0 : e.contentResource
                      , n = null == e ? void 0 : e.id;
                    switch (null == r ? void 0 : null === (t = r.explain) || void 0 === t ? void 0 : t.name) {
                    case "explain_classic_qubena":
                        return {
                            id: n,
                            src: function(e) {
                                var t;
                                return {
                                    type: "ClassicQubena",
                                    resources: (null !== (t = e.explain.resources.content_image) && void 0 !== t ? t : []).map(e => {
                                        var t;
                                        let r = e.path
                                          , n = JSON.parse(e.meta)
                                          , i = null !== (t = n.frames) && void 0 !== t ? t : 0
                                          , l = n.time_ms;
                                        return {
                                            path: r,
                                            frames: i,
                                            length: l ? 1e3 * l : void 0
                                        }
                                    }
                                    ).map(e => ({
                                        url: e.path,
                                        length: e.length
                                    }))
                                }
                            }(r)
                        };
                    case "explain_image":
                        return {
                            id: n,
                            src: function(e) {
                                var t;
                                return {
                                    type: "Image",
                                    resources: (null !== (t = e.explain.resources.content_image) && void 0 !== t ? t : []).map(e => {
                                        var t;
                                        let r = e.path
                                          , n = JSON.parse(e.meta)
                                          , i = null !== (t = n.frames) && void 0 !== t ? t : 0
                                          , l = n.time_ms;
                                        return {
                                            path: r,
                                            frames: i,
                                            length: l ? 1e3 * l : void 0
                                        }
                                    }
                                    ).map(e => ({
                                        url: e.path,
                                        length: e.length
                                    }))
                                }
                            }(r)
                        };
                    default:
                        return
                    }
                }
                , [e])
            }
        }
          , j = () => {
            let e = (0,
            l.md)(u.bQ);
            return {
                getHintSource: (0,
                a.useCallback)( () => {
                    var t;
                    let r = null == e ? void 0 : e.contentResource;
                    switch (null == r ? void 0 : null === (t = r.hint) || void 0 === t ? void 0 : t.name) {
                    case "hint_classic_qubena":
                        return function(e) {
                            var t;
                            let r = null !== (t = e.hint.resources.content_image) && void 0 !== t ? t : []
                              , n = 0 !== r.length ? r[0].path : void 0;
                            return n ? {
                                type: "ClassicQubena",
                                image: n
                            } : void 0
                        }(r);
                    case "hint_simple":
                        return function(e) {
                            var t;
                            return {
                                type: "Simple",
                                components: JSON.parse(null !== (t = e.hint.body) && void 0 !== t ? t : "{}").components.map(e => {
                                    var t, r, n;
                                    return {
                                        text: null !== (t = e.text) && void 0 !== t ? t : "",
                                        align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                        type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                    }
                                }
                                )
                            }
                        }(r);
                    default:
                        return
                    }
                }
                , [e])
            }
        }
          , v = () => {
            let e = (0,
            l.md)(u.bQ)
              , t = null == e ? void 0 : e.contentResource;
            return {
                hasDescription: (0,
                a.useCallback)( () => {
                    if (!t)
                        return !1;
                    switch (null == t ? void 0 : t.description.name) {
                    case void 0:
                        return !1;
                    case "ad_empty":
                        return !0;
                    default:
                        return function(e) {
                            var t;
                            let r = JSON.parse(null !== (t = e.description.body) && void 0 !== t ? t : "{}").components;
                            return !!r && 0 !== r.length && r.find(e => 0 !== e.text.length)
                        }(t) || 0 < Object.entries(t.description.resources).length || 0 < Object.keys(t.args).length
                    }
                }
                , [t])
            }
        }
    }
    ,
    73821: (e, t, r) => {
        r.d(t, {
            L: () => a
        });
        var n = r(34843)
          , i = r(96540)
          , l = r(94096);
        let a = () => {
            let e = (0,
            n.md)(l.bQ);
            return {
                getDescriptionSource: (0,
                i.useCallback)( () => {
                    let t = null == e ? void 0 : e.contentResource;
                    switch (null == t ? void 0 : t.description.name) {
                    case "ad_classic_qubena":
                        return function(e) {
                            var t;
                            let r = null !== (t = e.description.resources.answer_content_image) && void 0 !== t ? t : [];
                            return {
                                type: "ClassicQubena",
                                image: 0 !== r.length ? r[0].path : void 0
                            }
                        }(t);
                    case "ad_empty":
                        return {
                            type: "Empty",
                            parameter: void 0
                        };
                    case "ad_english_word":
                        return function(e) {
                            var t, r, n, i, l, a, s, o, c, d, u, x, h, p, m, g, j;
                            let v = e.args
                              , f = null !== (t = v.target_word) && void 0 !== t ? t : ""
                              , b = null !== (r = v.part_of_speech) && void 0 !== r ? r : ""
                              , w = null !== (n = v.variant_form) && void 0 !== n ? n : ""
                              , y = null !== (i = v.countability) && void 0 !== i ? i : ""
                              , S = null !== (l = v.base_form) && void 0 !== l ? l : ""
                              , C = null !== (a = v.word_usage_and_meaning) && void 0 !== a ? a : ""
                              , k = null !== (s = v.singular_form) && void 0 !== s ? s : void 0
                              , A = null !== (o = v.plural_form) && void 0 !== o ? o : void 0
                              , T = null !== (c = v.third_parson_singular) && void 0 !== c ? c : void 0
                              , I = null !== (d = v.past_tense) && void 0 !== d ? d : void 0
                              , _ = null !== (u = v.present_participle) && void 0 !== u ? u : void 0
                              , E = null !== (x = v.past_participle) && void 0 !== x ? x : void 0
                              , R = null !== (h = v.positive_degree) && void 0 !== h ? h : void 0
                              , N = null !== (p = v.comparative_degree) && void 0 !== p ? p : void 0;
                            return {
                                type: "EnglishWord",
                                parameter: {
                                    targetWord: f,
                                    partOfSpeech: b,
                                    variantForm: w,
                                    countability: y,
                                    baseForm: S,
                                    wordUsageAndMeaning: C,
                                    singularForm: k,
                                    pluralForm: A,
                                    thirdParsonSingular: T,
                                    pastTense: I,
                                    presentParticiple: _,
                                    pastParticiple: E,
                                    positiveDegree: R,
                                    comparativeDegree: N,
                                    superlativeDegree: null !== (m = v.superlative_degree) && void 0 !== m ? m : void 0,
                                    exampleUsage: null !== (g = v.example_usage) && void 0 !== g ? g : void 0,
                                    meaningOfExample: null !== (j = v.meaning_of_example) && void 0 !== j ? j : void 0
                                }
                            }
                        }(t);
                    case "ad_english_word_v2":
                        return function(e) {
                            var t, r, n, i, l, a, s, o, c, d, u, x, h, p, m, g, j;
                            let v = e.args
                              , f = null !== (t = v.target_word) && void 0 !== t ? t : ""
                              , b = null !== (r = v.part_of_speech) && void 0 !== r ? r : ""
                              , w = null !== (n = v.variant_form) && void 0 !== n ? n : ""
                              , y = null !== (i = v.countability) && void 0 !== i ? i : ""
                              , S = null !== (l = v.base_form) && void 0 !== l ? l : ""
                              , C = null !== (a = v.word_usage_and_meaning) && void 0 !== a ? a : ""
                              , k = null !== (s = v.singular_form) && void 0 !== s ? s : void 0
                              , A = null !== (o = v.plural_form) && void 0 !== o ? o : void 0
                              , T = null !== (c = v.third_parson_singular) && void 0 !== c ? c : void 0
                              , I = null !== (d = v.past_tense) && void 0 !== d ? d : void 0
                              , _ = null !== (u = v.present_participle) && void 0 !== u ? u : void 0
                              , E = null !== (x = v.past_participle) && void 0 !== x ? x : void 0
                              , R = null !== (h = v.positive_degree) && void 0 !== h ? h : void 0
                              , N = null !== (p = v.comparative_degree) && void 0 !== p ? p : void 0;
                            return {
                                type: "EnglishWordV2",
                                parameter: {
                                    targetWord: f,
                                    partOfSpeech: b,
                                    variantForm: w,
                                    countability: y,
                                    baseForm: S,
                                    wordUsageAndMeaning: C,
                                    singularForm: k,
                                    pluralForm: A,
                                    thirdParsonSingular: T,
                                    pastTense: I,
                                    presentParticiple: _,
                                    pastParticiple: E,
                                    positiveDegree: R,
                                    comparativeDegree: N,
                                    superlativeDegree: null !== (m = v.superlative_degree) && void 0 !== m ? m : void 0,
                                    exampleUsage: null !== (g = v.example_usage) && void 0 !== g ? g : void 0,
                                    meaningOfExample: null !== (j = v.meaning_of_example) && void 0 !== j ? j : void 0
                                }
                            }
                        }(t);
                    case "ad_html":
                        return function(e) {
                            var t;
                            return {
                                type: "Html",
                                parameter: {
                                    html: JSON.parse(null !== (t = e.description.body) && void 0 !== t ? t : "{}").html
                                }
                            }
                        }(t);
                    case "ad_kanji_default":
                        return function(e) {
                            var t, r, n;
                            let i = e.args;
                            return {
                                type: "KanjiDefault",
                                parameter: {
                                    phrase: null !== (t = i.phrase) && void 0 !== t ? t : "",
                                    phrasePronunciation: null !== (r = i.phrase_pronunciation) && void 0 !== r ? r : "",
                                    grade: parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0")
                                }
                            }
                        }(t);
                    case "ad_kanji_self_judgement":
                        return function(e) {
                            var t, r, n;
                            let i = JSON.parse(null !== (t = e.description.body) && void 0 !== t ? t : "{}");
                            return {
                                type: "KanjiSelfJudgement",
                                parameter: {
                                    components: null !== (r = i.components) && void 0 !== r ? r : {},
                                    modelAnswerString: null !== (n = i.model_answer_string) && void 0 !== n ? n : ""
                                }
                            }
                        }(t);
                    case "ad_kanji_selfjudgement":
                        return function(e) {
                            var t, r, n;
                            let i = e.args;
                            return {
                                type: "KanjiSelfJudgementLegacy",
                                parameter: {
                                    questionWord: null !== (t = i.question_word) && void 0 !== t ? t : "",
                                    questionWordOthers: null !== (r = i.question_word_others) && void 0 !== r ? r : "",
                                    grade: parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0")
                                }
                            }
                        }(t);
                    case "ad_simple":
                        return function(e) {
                            var t, r;
                            let n = e.description;
                            return {
                                type: "Simple",
                                parameter: {
                                    components: JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}").components.map(e => {
                                        var t, r, n;
                                        return {
                                            text: null !== (t = e.text) && void 0 !== t ? t : "",
                                            align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                            type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                        }
                                    }
                                    )
                                },
                                images: (null !== (r = n.resources.ad_image_section) && void 0 !== r ? r : []).map(e => e.path)
                            }
                        }(t);
                    default:
                        return
                    }
                }
                , [e])
            }
        }
    }
    ,
    79857: (e, t, r) => {
        r.d(t, {
            $: () => a
        });
        var n = r(34843)
          , i = r(96540)
          , l = r(94096);
        let a = () => {
            let e = (0,
            n.md)(l.bQ);
            return {
                getQuestionSource: (0,
                i.useCallback)( () => {
                    let t = null == e ? void 0 : e.contentResource;
                    switch (null == t ? void 0 : t.question.name) {
                    case "qp_a1":
                        return function(e) {
                            var t, r;
                            let n = e.question
                              , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                              , l = i.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , a = i.main_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , s = i.sub_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : [];
                            return {
                                type: "A1",
                                parameter: {
                                    questionSection: l,
                                    mainSection: a,
                                    subSection: s
                                },
                                image: 0 !== o.length ? o[0].path : void 0
                            }
                        }(t);
                    case "qp_a2":
                        return function(e) {
                            var t, r;
                            let n = e.question
                              , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                              , l = i.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , a = i.main_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , s = i.sub_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : [];
                            return {
                                type: "A2",
                                parameter: {
                                    questionSection: l,
                                    mainSection: a,
                                    subSection: s
                                },
                                image: 0 !== o.length ? o[0].path : void 0
                            }
                        }(t);
                    case "qp_a2_selection":
                        return function(e) {
                            var t, r;
                            let n = e.question
                              , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                              , l = i.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , a = i.main_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , s = i.sub_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : [];
                            return {
                                type: "A2Selection",
                                parameter: {
                                    questionSection: l,
                                    mainSection: a,
                                    subSection: s
                                },
                                image: 0 !== o.length ? o[0].path : void 0
                            }
                        }(t);
                    case "qp_b1":
                        return function(e) {
                            var t, r, n;
                            let i = e.question
                              , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                              , a = l.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , s = l.main_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , o = l.sub_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                              , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : [];
                            return {
                                type: "B1",
                                parameter: {
                                    questionSection: a,
                                    mainSection: s,
                                    subSection: o,
                                    aSideAtomName: c
                                },
                                image: 0 !== d.length ? d[0].path : void 0
                            }
                        }(t);
                    case "qp_b2":
                        return function(e) {
                            var t, r, n;
                            let i = e.question
                              , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                              , a = l.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , s = l.main_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , o = l.sub_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                              , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : [];
                            return {
                                type: "B2",
                                parameter: {
                                    questionSection: a,
                                    mainSection: s,
                                    subSection: o,
                                    aSideAtomName: c
                                },
                                image: 0 !== d.length ? d[0].path : void 0
                            }
                        }(t);
                    case "qp_b2_selection":
                        return function(e) {
                            var t, r, n;
                            let i = e.question
                              , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                              , a = l.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , s = l.main_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , o = l.sub_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                              , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : [];
                            return {
                                type: "B2Selection",
                                parameter: {
                                    questionSection: a,
                                    mainSection: s,
                                    subSection: o,
                                    aSideAtomName: c
                                },
                                image: 0 !== d.length ? d[0].path : void 0
                            }
                        }(t);
                    case "qp_classic_qubena":
                        return function(e) {
                            var t;
                            let r = null !== (t = e.question.resources.question_content_image) && void 0 !== t ? t : [];
                            return {
                                type: "ClassicQubena",
                                image: 0 !== r.length ? r[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_L":
                        return function(e) {
                            var t;
                            let r = null !== (t = e.question.resources.listening_section) && void 0 !== t ? t : [];
                            return {
                                type: "EnglishWordL",
                                audio: 0 !== r.length ? r[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_L1":
                        return function(e) {
                            var t;
                            let r = null !== (t = e.question.resources.listening_section) && void 0 !== t ? t : [];
                            return {
                                type: "EnglishWordL1",
                                audio: 0 !== r.length ? r[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_L2":
                        return function(e) {
                            var t;
                            let r = null !== (t = e.question.resources.listening_section) && void 0 !== t ? t : [];
                            return {
                                type: "EnglishWordL2",
                                audio: 0 !== r.length ? r[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_R":
                        return function(e) {
                            var t;
                            return {
                                type: "EnglishWordR",
                                parameter: {
                                    mainText: null !== (t = e.args.target_word) && void 0 !== t ? t : ""
                                }
                            }
                        }(t);
                    case "qp_english_word_RL":
                        return function(e) {
                            var t, r;
                            let n = e.question
                              , i = null !== (t = e.args.target_word) && void 0 !== t ? t : ""
                              , l = null !== (r = n.resources.listening_section) && void 0 !== r ? r : [];
                            return {
                                type: "EnglishWordRL",
                                parameter: {
                                    mainText: i
                                },
                                audio: 0 !== l.length ? l[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_RL_v2":
                        return function(e) {
                            var t, r;
                            let n = e.question
                              , i = null !== (t = e.args.question_text_for_rxl_v_2) && void 0 !== t ? t : ""
                              , l = null !== (r = n.resources.listening_section) && void 0 !== r ? r : [];
                            return {
                                type: "EnglishWordRLv2",
                                parameter: {
                                    mainText: i
                                },
                                audio: 0 !== l.length ? l[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_W":
                        return function(e) {
                            var t, r, n, i;
                            let l = e.args
                              , a = null !== (t = l.question_text_for_multi_writing) && void 0 !== t ? t : void 0;
                            return {
                                type: "EnglishWordW",
                                parameter: {
                                    questionText: a,
                                    variantForm: null !== (r = l.variant_form) && void 0 !== r ? r : "",
                                    baseForm: null !== (n = l.base_form) && void 0 !== n ? n : "",
                                    wordUsageAndMeaning: null !== (i = l.word_usage_and_meaning) && void 0 !== i ? i : ""
                                }
                            }
                        }(t);
                    case "qp_english_word_WL":
                        return function(e) {
                            var t, r, n, i, l, a;
                            let s = e.question
                              , o = e.args
                              , c = null !== (t = o.target_word) && void 0 !== t ? t : ""
                              , d = null !== (r = o.part_of_speech) && void 0 !== r ? r : ""
                              , u = null !== (n = o.variant_form) && void 0 !== n ? n : ""
                              , x = null !== (i = o.base_form) && void 0 !== i ? i : ""
                              , h = null !== (l = o.word_usage_and_meaning) && void 0 !== l ? l : ""
                              , p = null !== (a = s.resources.listening_section) && void 0 !== a ? a : [];
                            return {
                                type: "EnglishWordWL",
                                parameter: {
                                    targetWord: c,
                                    partOfSpeech: d,
                                    variantForm: u,
                                    baseForm: x,
                                    wordUsageAndMeaning: h
                                },
                                audio: 0 !== p.length ? p[0].path : void 0
                            }
                        }(t);
                    case "qp_html":
                        return function(e) {
                            var t;
                            return {
                                type: "Html",
                                parameter: {
                                    html: JSON.parse(null !== (t = e.question.body) && void 0 !== t ? t : "{}").html
                                }
                            }
                        }(t);
                    case "qp_kanji_nazori":
                        return function(e) {
                            var t, r, n, i;
                            let l = e.args
                              , a = null !== (t = l.question_word) && void 0 !== t ? t : "";
                            return {
                                type: "KanjiNazori",
                                parameter: {
                                    questionWord: a,
                                    questionWordPronunciation: null !== (r = l.question_word_pronunciation) && void 0 !== r ? r : "",
                                    example: null !== (n = l.example) && void 0 !== n ? n : "",
                                    grade: parseInt(null !== (i = l.grade) && void 0 !== i ? i : "0")
                                }
                            }
                        }(t);
                    case "qp_kanji_selfjudgement":
                        return function(e) {
                            var t, r, n, i;
                            let l = e.args
                              , a = null !== (t = l.question_word) && void 0 !== t ? t : "";
                            return {
                                type: "KanjiSelfJudgement",
                                parameter: {
                                    questionWord: a,
                                    questionWordPronunciation: null !== (r = l.question_word_pronunciation) && void 0 !== r ? r : "",
                                    example: null !== (n = l.example) && void 0 !== n ? n : "",
                                    grade: parseInt(null !== (i = l.grade) && void 0 !== i ? i : "0")
                                }
                            }
                        }(t);
                    case "qp_kanji_yomi":
                        return function(e) {
                            var t, r, n;
                            let i = e.args;
                            return {
                                type: "KanjiYomi",
                                parameter: {
                                    questionWord: null !== (t = i.question_word) && void 0 !== t ? t : "",
                                    example: null !== (r = i.example) && void 0 !== r ? r : "",
                                    grade: parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0")
                                }
                            }
                        }(t);
                    case "qp_simple":
                        return function(e) {
                            var t, r, n, i, l;
                            let a = e.question
                              , s = JSON.parse(null !== (t = a.body) && void 0 !== t ? t : "{}")
                              , o = s.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , c = s.main_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , d = s.sub_section.map(e => {
                                var t, r, n;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (r = e.align) && void 0 !== r ? r : "left",
                                    type: null !== (n = e.component_type) && void 0 !== n ? n : "text_line"
                                }
                            }
                            )
                              , u = (null !== (r = a.resources.small_image) && void 0 !== r ? r : []).map(e => e.path)
                              , x = (null !== (n = a.resources.image_tag) && void 0 !== n ? n : []).map(e => e.path)
                              , h = (null !== (i = a.resources.large_image) && void 0 !== i ? i : []).map(e => e.path)
                              , p = (null !== (l = a.resources.listening_section) && void 0 !== l ? l : []).map(e => e.path);
                            return {
                                type: "Simple",
                                parameter: {
                                    questionSection: o,
                                    mainSection: c,
                                    subSection: d
                                },
                                images: x,
                                smallImages: u,
                                largeImages: h,
                                audio: p && 0 !== p.length ? p[0] : void 0
                            }
                        }(t);
                    case "qp_qubena_draw":
                        return function(e) {
                            var t, r, n, i, l;
                            let a = e.question
                              , s = JSON.parse(null !== (t = a.body) && void 0 !== t ? t : "{}").predefined_param
                              , o = (null !== (r = a.resources.small_image) && void 0 !== r ? r : []).map(e => e.path)
                              , c = (null !== (n = a.resources.image_tag) && void 0 !== n ? n : []).map(e => e.path)
                              , d = (null !== (i = a.resources.large_image) && void 0 !== i ? i : []).map(e => e.path)
                              , u = (null !== (l = a.resources.listening_section) && void 0 !== l ? l : []).map(e => e.path);
                            return {
                                type: "QubenaDraw",
                                parameter: {
                                    predefinedParam: s
                                },
                                images: c,
                                smallImages: o,
                                largeImages: d,
                                audio: u && 0 !== u.length ? u[0] : void 0
                            }
                        }(t);
                    default:
                        return
                    }
                }
                , [e])
            }
        }
    }
    ,
    46506: (e, t, r) => {
        r.d(t, {
            UH: () => K,
            D1: () => Q,
            Y9: () => O,
            Ck: () => er,
            $A: () => M
        });
        var n = r(74848)
          , i = r(34843)
          , l = r(84436)
          , a = r(59091)
          , s = r(383)
          , o = r(94096)
          , c = r(96540)
          , d = r(23372);
        let u = e => {
            let {enabled: t} = e
              , r = (0,
            i.Xr)(o.Wz)
              , l = (0,
            c.useCallback)(r, [r]);
            return (0,
            n.jsxs)(d.u4, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: a.Tj.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: l,
                children: [(0,
                n.jsx)(d.Bj, {
                    name: "explain",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled"
                }), (0,
                n.jsx)(d.EY, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    children: "説明"
                })]
            })
        }
          , x = e => {
            let {enabled: t} = e
              , r = (0,
            i.Xr)(o.MR)
              , l = (0,
            c.useCallback)(r, [r]);
            return (0,
            n.jsxs)(d.u4, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: a.Tj.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: l,
                children: [(0,
                n.jsx)(d.Bj, {
                    name: "hint",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled"
                }), (0,
                n.jsx)(d.EY, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    children: "ヒント"
                })]
            })
        }
        ;
        var h = r(48191)
          , p = r(72035)
          , m = r(77397)
          , g = r(11347)
          , j = r(94191)
          , v = r(67528)
          , f = r(96995)
          , b = r(67538)
          , w = r(37921)
          , y = r(24185)
          , S = r(6112)
          , C = r(46038);
        let k = () => {
            var e;
            let t = (0,
            i.md)(o.bQ)
              , r = (0,
            i.md)(o.Sx)
              , l = (0,
            i.md)(o.XO)
              , a = null == t ? void 0 : t.mode
              , s = null == t ? void 0 : t.menuContext
              , c = s ? "".concat(s.courseName, " ").concat(s.rootStructureElementName).concat(s.intermediateSequence) : ""
              , d = null !== (e = null == s ? void 0 : s.entryStructureElementName) && void 0 !== e ? e : "";
            return (0,
            n.jsx)(A, {
                visible: r,
                title: c,
                subTitle: d,
                mode: null != a ? a : "Basic",
                top: 56,
                left: 24,
                soundEffectEnabled: l
            })
        }
          , A = e => {
            let {visible: t, title: r, subTitle: s, mode: u, top: x=0, left: v=0, soundEffectEnabled: k, onToggleSoundEffect: A} = e
              , I = (0,
            i.Xr)(y.XZ)
              , _ = (0,
            i.Xr)(y.hh)
              , E = (0,
            i.Xr)(y.rl)
              , R = (0,
            i.Xr)(o.Sx)
              , N = (0,
            i.Xr)(o.bG)
              , M = (0,
            i.Xr)(w.nu)
              , O = (0,
            i.Xr)(S.FH)
              , {isLoading: L, isError: q, sendCursorPauseCommand: P} = (0,
            C.ri)()
              , {facilitators: W} = (0,
            b._)()
              , z = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                O("backward"),
                R(!1),
                P()
            }
            , [O, P, R])
              , V = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                N(),
                null == A || A()
            }
            , [N, A])
              , D = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                _(W),
                E("プレイ画面"),
                I(!0),
                R(!1)
            }
            , [W, _, R, E, I]);
            return (0,
            c.useEffect)( () => {
                q && M()
            }
            , [q, M]),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(h.A, {
                    open: t,
                    invisible: !0,
                    onClick: () => R(!1)
                }), (0,
                n.jsx)(f.P.div, {
                    style: {
                        position: "fixed",
                        top: x,
                        left: v,
                        zIndex: 1,
                        transformOrigin: "top left"
                    },
                    initial: {
                        scaleY: 0
                    },
                    animate: t ? {
                        scaleY: 1
                    } : {
                        scaleY: 0
                    },
                    transition: {
                        duration: .25
                    },
                    children: (0,
                    n.jsxs)(p.A, {
                        sx: {
                            minWidth: 240,
                            maxWidth: 280,
                            bgcolor: a.Tj.white,
                            border: "1px solid ".concat(a.Tj.onSurfaceWeak2),
                            borderRadius: 2,
                            userSelect: "none"
                        },
                        children: [(0,
                        n.jsxs)(m.Ay, {
                            sx: {
                                display: "inline-block"
                            },
                            children: [(0,
                            n.jsx)(d.EY, {
                                color: "onSurface",
                                size: "sm",
                                children: r
                            }), (0,
                            n.jsx)(d.EY, {
                                color: "onSurface",
                                size: "sm",
                                children: s
                            }), "Review" === u && (0,
                            n.jsx)(d.EY, {
                                color: "correct",
                                size: "sm",
                                children: "復習中"
                            })]
                        }), (0,
                        n.jsxs)(g.A, {
                            sx: {
                                display: "block",
                                py: 0,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    a.au)("black", "hover")
                                }
                            },
                            onClick: z,
                            children: [(0,
                            n.jsx)(l.VP, {
                                justifyContent: "center",
                                width: "100%",
                                height: 56,
                                px: 1,
                                children: (0,
                                n.jsx)(d.EY, {
                                    size: "md",
                                    color: "important",
                                    children: "学習を中断する"
                                })
                            }), (0,
                            n.jsx)(j.A, {
                                sx: {
                                    borderColor: a.Tj.onSurfaceWeak3
                                }
                            })]
                        }), (0,
                        n.jsxs)(g.A, {
                            sx: {
                                display: "block",
                                py: 0,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    a.au)("black", "hover")
                                }
                            },
                            onClick: V,
                            children: [(0,
                            n.jsxs)(l.fI, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                height: 56,
                                px: 1,
                                children: [(0,
                                n.jsx)(d.EY, {
                                    children: "こうか音"
                                }), (0,
                                n.jsx)(T, {
                                    checked: k
                                })]
                            }), (0,
                            n.jsx)(j.A, {
                                sx: {
                                    borderColor: a.Tj.onSurfaceWeak3
                                }
                            })]
                        }), (0,
                        n.jsx)(g.A, {
                            sx: {
                                height: 48,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    a.au)("black", "hover")
                                }
                            },
                            onClick: D,
                            children: (0,
                            n.jsx)(l.VP, {
                                px: 1,
                                children: (0,
                                n.jsx)(d.EY, {
                                    size: "sm",
                                    children: "困っている事を送信する"
                                })
                            })
                        })]
                    })
                }), (0,
                n.jsx)(d.AV, {
                    isLoading: L
                })]
            })
        }
          , T = e => {
            let {checked: t} = e;
            return (0,
            n.jsx)(v.A, {
                checked: t,
                sx: {
                    width: 52,
                    height: 32,
                    p: 0,
                    "& .MuiSwitch-switchBase": {
                        p: 0,
                        m: .5,
                        transitionDuration: "300ms",
                        "&.Mui-checked": {
                            transform: "translateX(20px)",
                            color: "#fff",
                            "& + .MuiSwitch-track": {
                                backgroundColor: a.Tj.primary,
                                opacity: 1,
                                border: 0
                            }
                        }
                    },
                    "& .MuiSwitch-thumb": {
                        boxSizing: "border-box",
                        width: 24,
                        height: 24
                    },
                    "& .MuiSwitch-track": {
                        borderRadius: 16,
                        backgroundColor: a.Tj.onSurfaceWeak2,
                        opacity: 1,
                        transition: "background-color .5s"
                    }
                }
            })
        }
        ;
        T.displayName = "IOSSwitch";
        let I = e => {
            let {onClick: t} = e
              , r = (0,
            i.md)(o.aR);
            return (0,
            n.jsx)(d.u4, {
                sx: {
                    width: 48,
                    height: 48,
                    backgroundColor: a.Tj.bg,
                    borderRadius: "50%"
                },
                onClick: t,
                disabled: r,
                children: (0,
                n.jsx)(d.Bj, {
                    name: "menu",
                    size: 40,
                    color: "onSurface"
                })
            })
        }
        ;
        var _ = r(4743);
        let E = c.memo(e => {
            let {ratio: t, color: r} = e;
            return (0,
            n.jsx)(_.A, {
                height: 16,
                borderRadius: 2,
                bgcolor: (0,
                a.au)("onSurface", .1),
                children: (0,
                n.jsx)(f.P.div, {
                    style: {
                        height: 16,
                        borderRadius: 8,
                        background: r
                    },
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: "".concat(100 * t, "%")
                    },
                    transition: {
                        duration: .8
                    }
                })
            })
        }
        );
        E.displayName = "GradientBar";
        let R = c.memo(e => {
            let {mode: t, ratio: r, visibleText: i} = e;
            return (0,
            n.jsxs)(l.fI, {
                width: "100%",
                children: [(0,
                n.jsx)(_.A, {
                    width: 34,
                    height: 16,
                    children: i && (0,
                    n.jsxs)(d.EY, {
                        size: "sm",
                        color: 0 === r ? "onSurfaceWeak1" : "Basic" === t ? "primary" : "correct",
                        fontWeight: "bold",
                        textAlign: "right",
                        children: [Math.floor(100 * r), "%"]
                    })
                }), (0,
                n.jsx)(l.hK, {
                    x: 1
                }), (0,
                n.jsx)(_.A, {
                    flex: 1,
                    alignItems: "center",
                    children: (0,
                    n.jsx)(E, {
                        ratio: r,
                        color: "Basic" === t ? a.K7.basicBar : a.K7.reviewBar
                    })
                })]
            })
        }
        );
        R.displayName = "ProgressBar";
        let N = e => {
            let {enabled: t, onClick: r} = e;
            return (0,
            n.jsxs)(d.u4, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: a.Tj.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: r,
                children: [(0,
                n.jsx)(d.Bj, {
                    name: "textbook",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled"
                }), (0,
                n.jsx)(d.EY, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    children: "教科書"
                })]
            })
        }
          , M = 56
          , O = () => {
            let e = (0,
            i.md)(o.Br)
              , t = (0,
            i.md)(o.bQ)
              , r = (0,
            i.md)(o.AD)
              , l = null == t ? void 0 : t.mode
              , {displayTextbook: a, hasTextbookLink: c, handleClickProgramDigitalTextbook: d} = (0,
            s.iv)(null == t ? void 0 : t.id);
            if (!e || !l)
                return (0,
                n.jsx)(n.Fragment, {});
            let u = t.contentResource;
            return (0,
            n.jsx)(L, {
                reason: e,
                mode: l,
                progress: r,
                hasHint: !!u.hint,
                hasExplain: !!u.explain,
                displayTextbook: a(),
                hasTextbookLink: c(),
                handleClickTextbook: () => d()
            })
        }
          , L = e => {
            let {reason: t, mode: r, progress: s, hasHint: c, hasExplain: d, displayTextbook: h, hasTextbookLink: p, handleClickTextbook: m} = e
              , g = (0,
            i.Xr)(o.Sx);
            return (0,
            n.jsxs)(l.fI, {
                height: M,
                px: 2,
                py: .5,
                alignContent: "center",
                sx: {
                    userSelect: "none"
                },
                children: [(0,
                n.jsx)(I, {
                    onClick: () => g(!0)
                }), (0,
                n.jsx)(k, {}), (0,
                n.jsx)(l.hK, {
                    x: 2
                }), (0,
                n.jsxs)(l.fI, {
                    flex: 1,
                    marginY: 1.5,
                    p: .5,
                    bgcolor: a.Tj.bg,
                    borderRadius: 4,
                    children: [(0,
                    n.jsx)(l.hK, {
                        x: 1
                    }), "StartFromReview" !== t && (0,
                    n.jsx)(R, {
                        mode: r,
                        ratio: s,
                        visibleText: !(("StartFromHome" === t || "ResumeFromHome" === t) && "Review" === r)
                    })]
                }), (0,
                n.jsx)(l.hK, {
                    x: 1.5
                }), (0,
                n.jsx)(u, {
                    enabled: d
                }), (0,
                n.jsx)(l.hK, {
                    x: 1
                }), (0,
                n.jsx)(x, {
                    enabled: c
                }), h && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.hK, {
                        x: 1
                    }), (0,
                    n.jsx)(N, {
                        enabled: p,
                        onClick: m
                    })]
                })]
            })
        }
        ;
        var q = r(42907)
          , P = r(40961)
          , W = r(13565)
          , z = r(87838)
          , V = r(47293)
          , D = r(67330)
          , H = r(67957)
          , X = r(79369);
        let J = e => {
            let {count: t, selectedPageAnimTime: r, onChangePage: i, onClickSelectedPage: l} = e
              , [s,o] = (0,
            c.useState)(0)
              , d = (0,
            c.useRef)()
              , u = (0,
            c.useCallback)( () => {
                if (window.clearTimeout(d.current),
                !r)
                    return;
                let e = r / 100
                  , t = r => {
                    d.current = window.setTimeout( () => {
                        r ? o(0) : o(e => e < 100 ? e + 1 : (window.clearTimeout(d.current),
                        0)),
                        t()
                    }
                    , e)
                }
                ;
                t(!0)
            }
            , [r])
              , x = (0,
            c.useCallback)( (e, t) => {
                window.clearTimeout(d.current),
                o(0),
                i(t - 1)
            }
            , [i])
              , h = (0,
            c.useCallback)( () => {
                l(),
                u()
            }
            , [l, u])
              , p = (0,
            c.useCallback)(e => {
                switch (e.type) {
                case "previous":
                case "next":
                    return (0,
                    n.jsx)(B, {
                        ...e
                    });
                default:
                    return (0,
                    n.jsxs)(_.A, {
                        position: "relative",
                        zIndex: 1,
                        sx: {
                            userSelect: "none"
                        },
                        children: [(0,
                        n.jsx)(V.A, {
                            ...e,
                            sx: {
                                minWidth: 48,
                                height: 48,
                                margin: 0,
                                padding: 0,
                                fontSize: 16,
                                fontWeight: "bold",
                                color: e.selected ? a.Tj.onSurface : a.Tj.onSurfaceWeak1,
                                borderRadius: "50%",
                                "&.Mui-selected": {
                                    background: a.Tj.primaryWeak1,
                                    "&:hover": {
                                        background: a.Tj.primaryWeak1
                                    }
                                }
                            }
                        }), e.selected && (0,
                        n.jsx)(D.A, {
                            variant: "determinate",
                            value: s,
                            size: 48,
                            thickness: 2,
                            sx: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                cursor: "pointer",
                                ".MuiCircularProgress-svg circle": {
                                    transition: "none"
                                },
                                ":hover": {
                                    background: "transparent",
                                    "&:before": {
                                        content: '""',
                                        position: "absolute",
                                        width: 48,
                                        height: 48,
                                        background: e.selected ? (0,
                                        a.au)("primary", "hover") : a.Tj.onSurfaceWeak4,
                                        zIndex: -1
                                    }
                                }
                            },
                            onClick: h
                        })]
                    })
                }
            }
            , [s, h]);
            return (0,
            c.useEffect)( () => (u(),
            () => {
                window.clearTimeout(d.current)
            }
            ), [u]),
            (0,
            n.jsx)(H.A, {
                sx: {
                    ".MuiPagination-ul": {
                        flexWrap: "nowrap",
                        "li:first-of-type": {
                            width: "100%"
                        },
                        "li:last-child": {
                            width: "100%",
                            textAlign: "right"
                        }
                    }
                },
                count: t,
                renderItem: p,
                onChange: x
            })
        }
          , B = (0,
        X.A)(V.A)(e => {
            let {disabled: t} = e;
            return {
                width: 56,
                height: 56,
                margin: 0,
                padding: 0,
                background: a.Tj.primary,
                borderRadius: "50%",
                visibility: t ? "hidden" : "visible",
                ":hover": {
                    background: a.Tj.primary
                },
                ".MuiPaginationItem-icon": {
                    width: 40,
                    height: 40,
                    color: a.Tj.white
                }
            }
        }
        )
          , K = () => {
            let e = (0,
            i.md)(o.xJ)
              , {getExplainSource: t} = (0,
            z.Ym)()
              , r = t();
            if (!r)
                return (0,
                n.jsx)(n.Fragment, {});
            let {id: l, src: a} = r;
            return 0 === a.resources.length ? (0,
            n.jsx)(n.Fragment, {}) : (0,
            n.jsx)(F, {
                explain: a,
                visible: e
            }, l)
        }
          , F = e => {
            let {explain: t, visible: r} = e
              , s = (0,
            i.Xr)(o.P5)
              , [u,x] = (0,
            c.useState)(void 0)
              , [p,m] = (0,
            c.useState)(!1)
              , [g,j] = (0,
            c.useState)(!1)
              , v = (0,
            q.A)()
              , {windowHeight: f} = (0,
            W.xJ)()
              , b = (0,
            c.useCallback)( () => {
                g || s()
            }
            , [s, g])
              , w = (0,
            c.useCallback)(e => {
                m(e.currentTarget.scrollTop > 0)
            }
            , [])
              , y = (0,
            c.useCallback)(e => {
                e.stopPropagation()
            }
            , [])
              , S = (0,
            c.useCallback)(e => {
                x(t.resources[e])
            }
            , [t.resources])
              , C = (0,
            c.useCallback)( () => {
                x(e => (null == e ? void 0 : e.length) ? {
                    ...e,
                    url: "".concat(e.url, "?").concat(Date.now())
                } : e)
            }
            , []);
            (0,
            c.useEffect)( () => {
                let e = () => j(!1)
                  , t = () => j(!0);
                return document.addEventListener("pointerup", e),
                document.addEventListener("pointerdown", t),
                () => {
                    document.removeEventListener("pointerup", e),
                    document.removeEventListener("pointerdown", t)
                }
            }
            , []),
            (0,
            c.useEffect)( () => (x(t.resources[0]),
            () => {
                x(void 0)
            }
            ), [t.resources]),
            (0,
            c.useEffect)( () => {
                r || x(void 0)
            }
            , [r]);
            let k = t.resources.length > 1;
            return (0,
            P.createPortal)((0,
            n.jsx)(h.A, {
                open: r,
                onPointerDown: b,
                sx: {
                    zIndex: v.zIndex.modal
                },
                children: (0,
                n.jsxs)(_.A, {
                    maxWidth: 800,
                    maxHeight: "calc(100% - ".concat(48, "px)"),
                    marginX: 3,
                    bgcolor: a.Tj.surface,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    onPointerDown: y,
                    children: [(0,
                    n.jsxs)(_.A, {
                        width: "100%",
                        height: 48,
                        p: .5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderBottom: p ? "1px solid ".concat((0,
                        a.au)("onSurface", .1)) : void 0,
                        sx: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        },
                        children: [(0,
                        n.jsx)(_.A, {
                            paddingLeft: 2,
                            children: (0,
                            n.jsx)(d.EY, {
                                size: "lg",
                                children: "説明"
                            })
                        }), (0,
                        n.jsx)(l.VP, {
                            height: 40,
                            sx: {
                                cursor: "pointer",
                                ":hover": {
                                    bgcolor: a.Tj.onSurfaceWeak3
                                }
                            },
                            onPointerDown: b,
                            children: (0,
                            n.jsx)(d.Bj, {
                                name: "close",
                                size: 40,
                                color: "onSurface"
                            })
                        })]
                    }), u && (k ? (0,
                    n.jsxs)(_.A, {
                        width: "100%",
                        marginTop: "".concat(48, "px"),
                        px: 2,
                        paddingBottom: 2,
                        children: [(0,
                        n.jsx)(l.ov, {
                            pt: 2,
                            children: (0,
                            n.jsx)(Q, {
                                qmlType: t.type,
                                url: u.url,
                                maxHeight: f - 48 - 48 - 56 - 40
                            })
                        }), (0,
                        n.jsx)(_.A, {
                            pt: 2,
                            children: (0,
                            n.jsx)(J, {
                                count: t.resources.length,
                                selectedPageAnimTime: u.length,
                                onChangePage: S,
                                onClickSelectedPage: C
                            })
                        })]
                    }) : (0,
                    n.jsx)(_.A, {
                        width: "100%",
                        maxHeight: f - 48 - 48,
                        marginTop: "".concat(48, "px"),
                        px: 2,
                        pb: 2,
                        overflow: "auto",
                        onScroll: w,
                        children: (0,
                        n.jsx)(l.ov, {
                            pt: 2,
                            children: (0,
                            n.jsx)(Q, {
                                qmlType: t.type,
                                url: u.url,
                                wheelDisabled: !0
                            })
                        })
                    }))]
                })
            }), document.body)
        }
        ;
        var U = r(23217);
        let Y = e => {
            let {url: t, maxHeight: r} = e;
            return (0,
            n.jsx)("img", {
                src: t,
                width: "100%",
                height: "100%",
                style: {
                    maxHeight: r
                },
                alt: ""
            })
        }
          , G = e => {
            let {url: t, maxHeight: r} = e;
            return (0,
            n.jsx)("img", {
                src: t,
                width: "100%",
                height: "100%",
                style: {
                    maxHeight: r
                },
                alt: ""
            })
        }
          , Q = e => {
            let {qmlType: t, url: r, maxHeight: i, wheelDisabled: l} = e;
            return (0,
            n.jsx)(U.GT, {
                wheel: {
                    wheelDisabled: l
                },
                panning: {
                    disabled: !0
                },
                doubleClick: {
                    mode: "reset"
                },
                children: (0,
                n.jsxs)(U.WZ, {
                    children: ["ClassicQubena" === t && (0,
                    n.jsx)(Y, {
                        url: r,
                        maxHeight: i
                    }), "Image" === t && (0,
                    n.jsx)(G, {
                        url: r,
                        maxHeight: i
                    })]
                })
            })
        }
          , $ = e => {
            switch (e.type) {
            case "ClassicQubena":
                return (0,
                n.jsx)(Z, {
                    source: e
                });
            case "Simple":
                return (0,
                n.jsx)(et, {
                    source: e
                })
            }
        }
          , Z = e => {
            let {source: t} = e;
            return (0,
            n.jsx)(_.A, {
                p: 2,
                children: (0,
                n.jsx)("img", {
                    src: t.image,
                    width: "100%",
                    height: "100%",
                    alt: ""
                })
            })
        }
        ;
        var ee = r(41373);
        let et = e => {
            let {source: t} = e;
            return (0,
            n.jsx)("div", {
                className: "question-area",
                style: {
                    padding: "16px"
                },
                children: t.components.map( (e, r) => {
                    let i = t.components.length - 1 === r;
                    return (0,
                    n.jsx)("p", {
                        className: "question-text",
                        style: {
                            textAlign: e.align,
                            paddingBottom: i ? 0 : "16px"
                        },
                        children: (0,
                        n.jsx)(ee.qV, {
                            src: e.text.replaceAll("\n", "<br/>")
                        })
                    }, r)
                }
                )
            })
        }
          , er = () => {
            let e = (0,
            i.md)(o.Hg)
              , {getHintSource: t} = (0,
            z.ID)()
              , r = t();
            return r ? (0,
            n.jsx)(en, {
                hint: r,
                visible: e
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , en = e => {
            let {hint: t, visible: r} = e
              , s = (0,
            i.Xr)(o.By)
              , [u,x] = (0,
            c.useState)(!1)
              , [p,m] = (0,
            c.useState)(!1)
              , g = (0,
            q.A)()
              , {windowHeight: j} = (0,
            W.xJ)()
              , v = (0,
            c.useCallback)( () => {
                p || s()
            }
            , [s, p])
              , f = (0,
            c.useCallback)(e => {
                x(e.currentTarget.scrollTop > 0)
            }
            , [])
              , b = (0,
            c.useCallback)(e => {
                e.stopPropagation()
            }
            , []);
            return (0,
            c.useEffect)( () => {
                let e = () => m(!1)
                  , t = () => m(!0);
                return document.addEventListener("pointerup", e),
                document.addEventListener("pointerdown", t),
                () => {
                    document.removeEventListener("pointerup", e),
                    document.removeEventListener("pointerdown", t)
                }
            }
            , []),
            (0,
            P.createPortal)((0,
            n.jsx)(h.A, {
                open: r,
                onPointerDown: v,
                sx: {
                    zIndex: g.zIndex.modal
                },
                children: (0,
                n.jsxs)(_.A, {
                    width: "100%",
                    maxWidth: 800,
                    maxHeight: "calc(100% - ".concat(48, "px)"),
                    marginX: 3,
                    bgcolor: a.Tj.surface,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    sx: {
                        userSelect: "none"
                    },
                    onPointerDown: b,
                    children: [(0,
                    n.jsxs)(_.A, {
                        width: "100%",
                        height: 48,
                        p: .5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderBottom: u ? "1px solid ".concat((0,
                        a.au)("onSurface", .1)) : void 0,
                        sx: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        },
                        children: [(0,
                        n.jsx)(_.A, {
                            paddingLeft: 1.5,
                            children: (0,
                            n.jsx)(d.EY, {
                                size: "lg",
                                children: "ヒント"
                            })
                        }), (0,
                        n.jsx)(l.VP, {
                            height: 40,
                            sx: {
                                cursor: "pointer",
                                ":hover": {
                                    bgcolor: a.Tj.onSurfaceWeak3
                                },
                                borderRadius: "50%"
                            },
                            onPointerDown: v,
                            children: (0,
                            n.jsx)(d.Bj, {
                                name: "close",
                                size: 40,
                                color: "onSurface"
                            })
                        })]
                    }), (0,
                    n.jsx)(_.A, {
                        marginTop: "".concat(48, "px"),
                        width: "100%",
                        maxHeight: j - 48 - 48,
                        overflow: "auto",
                        onScroll: f,
                        children: (0,
                        n.jsx)(U.GT, {
                            wheel: {
                                wheelDisabled: !0
                            },
                            panning: {
                                disabled: !0
                            },
                            doubleClick: {
                                mode: "reset"
                            },
                            children: (0,
                            n.jsx)(U.WZ, {
                                wrapperStyle: {
                                    width: "100%"
                                },
                                contentStyle: {
                                    width: "100%"
                                },
                                children: $(t)
                            })
                        })
                    })]
                })
            }), document.body)
        }
    }
    ,
    46038: (e, t, r) => {
        r.d(t, {
            xC: () => n,
            n7: () => u,
            Kz: () => x,
            E: () => h,
            MM: () => g,
            sX: () => j,
            Gs: () => b,
            l4: () => y,
            dh: () => a,
            pz: () => _,
            PM: () => E,
            bd: () => J,
            QR: () => N,
            l2: () => L,
            ri: () => V,
            i_: () => D
        });
        let n = () => ({
            convertInputToAnswerText: e => e.trim().replaceAll("　", " ").replaceAll(/(\s)\1{1,}/g, " ").replaceAll("‘", "'").replaceAll("’", "'").replaceAll("`", "'").replaceAll("・", "\xb7").replaceAll("＝", "=").replaceAll("％", "%").replaceAll("＋", "+").replaceAll("−", "-").replaceAll("，", ",").replaceAll("．", ".").replaceAll("？", "?").replaceAll("！", "!").replaceAll("＄", "$").replaceAll("￥", "\xa5").replaceAll("“", '"').replaceAll("”", '"').replaceAll("‐", "-").replaceAll("＆", "&").replaceAll(/[Ａ-Ｚａ-ｚ０-９]/g, e => String.fromCharCode(e.charCodeAt(0) - 65248))
        });
        var i = r(96540)
          , l = r(90731);
        let a = (e, t) => {
            let[r,n] = (0,
            i.useState)(!1)
              , [a,s] = (0,
            i.useState)();
            return (0,
            i.useEffect)( () => {
                (async () => {
                    try {
                        var r, i, a, o, c, d;
                        let n = await (0,
                        l.Tj)(t, e)
                          , u = {}
                          , x = null === (r = n.answerPreviewData) || void 0 === r ? void 0 : r.resourceUrlMap[1]
                          , h = null === (i = n.answerPreviewData) || void 0 === i ? void 0 : i.resourceUrlMap[2]
                          , p = null === (a = n.answerPreviewData) || void 0 === a ? void 0 : a.resourceUrlMap[3]
                          , m = null === (o = n.answerPreviewData) || void 0 === o ? void 0 : o.score;
                        x && (u.speaking = x),
                        h && (u.memo = h),
                        m && (u.score = m.toString()),
                        p && (u.elsaEvaluationResultUrl = p);
                        let g = {
                            viewStateJSON: null !== (d = null === (c = n.answerPreviewData) || void 0 === c ? void 0 : c.viewState) && void 0 !== d ? d : "{}",
                            args: u
                        };
                        s(g)
                    } catch (e) {
                        console.log(e),
                        n(!0)
                    }
                }
                )()
            }
            , [e]),
            {
                replayResource: a,
                isError: r
            }
        }
        ;
        var s = r(34843)
          , o = r(26892)
          , c = r(37921)
          , d = r(94096);
        let u = e => {
            let[t,r] = (0,
            i.useState)(!1)
              , [n,a] = (0,
            i.useState)()
              , u = (0,
            s.md)(c.Dr)
              , x = (0,
            s.md)(d.cS);
            return (0,
            i.useEffect)( () => {
                (async () => {
                    try {
                        let r = new o.AY;
                        r.cmd.case = "cursorInitCommand",
                        r.cmd.value = e;
                        let n = (await (0,
                        l.l9)({
                            accessToken: u,
                            command: r,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })).appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 !== n.length) {
                            var t;
                            let e = n[0];
                            if ((null === (t = e.data) || void 0 === t ? void 0 : t.data.case) === "playSession") {
                                let t = e.data.data.value;
                                a(t)
                            }
                        }
                    } catch (e) {
                        console.error("useCursorInitCommand: ".concat(e)),
                        r(!0)
                    }
                }
                )()
            }
            , []),
            {
                playSession: n,
                isError: t
            }
        }
          , x = e => {
            let[t,r] = (0,
            i.useState)(!1)
              , [n,a] = (0,
            i.useState)()
              , u = (0,
            s.md)(c.Dr)
              , x = (0,
            s.md)(d.cS);
            return (0,
            i.useEffect)( () => {
                (async () => {
                    try {
                        let r = new o.AY;
                        r.cmd.case = "cursorResumeCommand",
                        r.cmd.value = e;
                        let n = (await (0,
                        l.l9)({
                            accessToken: u,
                            command: r,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })).appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 !== n.length) {
                            var t;
                            let e = n[0];
                            if ((null === (t = e.data) || void 0 === t ? void 0 : t.data.case) === "playSession") {
                                let t = e.data.data.value;
                                a(t)
                            }
                        }
                    } catch (e) {
                        console.error("useCursorResumeCommand: ".concat(e)),
                        r(!0)
                    }
                }
                )()
            }
            , [x, e]),
            {
                playSession: n,
                isError: t
            }
        }
          , h = () => {
            let e = (0,
            s.md)(c.Dr)
              , t = (0,
            s.md)(d.cS)
              , r = (0,
            s.md)(d.bQ)
              , n = (0,
            s.md)(d.B8)
              , a = _();
            return {
                forceCursorPause: (0,
                i.useCallback)(async i => {
                    let s = n.map(e => ({
                        logType: e.type,
                        playTime: e.offset
                    }))
                      , c = new o.AY({
                        cmd: {
                            case: "forceCursorPauseCommand",
                            value: {
                                time: i,
                                cursorSessionId: null == r ? void 0 : r.cursorSessionId,
                                cursorSessionDeviceCode: null == r ? void 0 : r.cursorSessionDeviceCode,
                                activityLogList: s
                            }
                        }
                    })
                      , d = (await (0,
                    l.l9)({
                        accessToken: e,
                        command: c,
                        courseVersionId: t.versionId,
                        courseCode: t.code,
                        device: "tablet"
                    })).appCommandList.flatMap(e => "pageTransitionCommand" === e.cmd.case ? e.cmd.value : []);
                    d.length > 0 && a(d[0])
                }
                , [n, null == r ? void 0 : r.cursorSessionId, null == r ? void 0 : r.cursorSessionDeviceCode, t.versionId, t.code, a])
            }
        }
        ;
        var p = r(15327)
          , m = r(82945);
        let g = () => (0,
        p.A)(m.w4.breakpoints.up("lg")) ? "landscape" : "portrait"
          , j = e => {
            let[t,r] = (0,
            i.useState)(!1)
              , [n,a] = (0,
            i.useState)()
              , u = (0,
            s.md)(c.Dr)
              , x = (0,
            s.md)(d.cS);
            return (0,
            i.useEffect)( () => {
                (async () => {
                    try {
                        let r = new o.Qd;
                        r.cursorRootIdentifier = e;
                        let n = new o.AY;
                        n.cmd.case = "programCursorInitCommand",
                        n.cmd.value = r;
                        let i = (await (0,
                        l.l9)({
                            accessToken: u,
                            command: n,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })).appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 !== i.length) {
                            var t;
                            let e = i[0];
                            if ((null === (t = e.data) || void 0 === t ? void 0 : t.data.case) === "playSession") {
                                let t = e.data.data.value;
                                a(t)
                            }
                        }
                    } catch (e) {
                        r(!0)
                    }
                }
                )()
            }
            , []),
            {
                playSession: n,
                isError: t
            }
        }
        ;
        var v = r(24781)
          , f = r(54149);
        let b = e => {
            let[t,r] = (0,
            i.useState)(!1)
              , [n,l] = (0,
            i.useState)()
              , [a,o] = (0,
            i.useState)(0)
              , u = (0,
            s.md)(c.Dr)
              , x = (0,
            s.md)(d.cS)
              , {setReportProgram: h} = (0,
            f.M5)();
            return (0,
            i.useEffect)( () => {
                (async () => {
                    if (e)
                        try {
                            let {programResource: t, progress: r} = await (0,
                            v.p)(e, u, x);
                            l(t),
                            o(r)
                        } catch (e) {
                            console.error("useProgramResource: ".concat(e)),
                            r(!0)
                        }
                }
                )()
            }
            , [e, u, x]),
            (0,
            i.useEffect)( () => {
                e && h(x, e)
            }
            , [e, x, h]),
            {
                programResource: n,
                progress: a,
                isError: t
            }
        }
        ;
        var w = r(29821);
        let y = (e, t, r) => {
            let[n,a] = (0,
            i.useState)(!1)
              , [s,o] = (0,
            i.useState)();
            return (0,
            i.useEffect)( () => {
                (async () => {
                    try {
                        let n = await (0,
                        l.eT)(t, e, r)
                          , i = await (0,
                        w.e)(n);
                        o({
                            contentResource: i,
                            id: e,
                            cursorSessionId: 1,
                            cursorSessionDeviceCode: "",
                            mode: "Basic",
                            menuContext: {
                                courseName: "courseName",
                                rootStructureElementName: "rootStructureElementName",
                                entryStructureElementName: "entryStructureElementName",
                                intermediateSequence: "intermediateSequence"
                            },
                            feedBackType: void 0,
                            feedBackCommandOnAnswerCorrect: void 0,
                            timerCommands: [],
                            hasAnswerDescriptionHtml: !0
                        })
                    } catch (e) {
                        console.error("useProgramResourceForViewer: ".concat(e)),
                        a(!0)
                    }
                }
                )()
            }
            , []),
            {
                programResource: s,
                isError: n
            }
        }
        ;
        var S = r(86715)
          , C = r(85809)
          , k = r(18450)
          , A = r(1416)
          , T = r(84590)
          , I = r(10034);
        let _ = () => {
            let e = (0,
            S.useRouter)()
              , {setReportProgram: t} = (0,
            f.M5)()
              , r = (0,
            s.Xr)(T.R)
              , n = (0,
            s.Xr)(I.D)
              , l = (0,
            s.Xr)(A.x)
              , a = (0,
            s.Xr)(A.W)
              , u = (0,
            s.md)(c.Dr)
              , x = (0,
            s.md)(d.cS)
              , h = (0,
            s.Xr)(d.bQ)
              , p = (0,
            s.Xr)(d.AD)
              , m = (0,
            s.md)(d.B8)
              , g = (0,
            s.Xr)(d.Dl)
              , [j,b] = (0,
            s.fp)(k.SL)
              , [w,y] = (0,
            s.fp)(k.u2);
            return (0,
            i.useCallback)(async i => {
                switch (i.pagePath) {
                case "program":
                    {
                        let e = i.data;
                        if (!e || "playSession" !== e.data.case)
                            break;
                        let r = e.data.value;
                        try {
                            let {programResource: e, progress: n} = await (0,
                            v.p)(r, u, x);
                            h(e),
                            p(n),
                            g({
                                type: o.w2.QUESTION_START
                            }),
                            t(x, r)
                        } catch (e) {}
                        break
                    }
                case "cursor/result":
                    {
                        var s, c, d, f;
                        let t = i.data;
                        if (!t || "resultPageData" !== t.data.case)
                            break;
                        let u = t.data.value
                          , x = null !== (d = null === (s = m.find(e => e.type === o.w2.ANSWER_START)) || void 0 === s ? void 0 : s.offset) && void 0 !== d ? d : 0
                          , h = (null !== (f = null === (c = m.find(e => e.type === o.w2.ANSWER_END)) || void 0 === c ? void 0 : c.offset) && void 0 !== f ? f : 0) - x;
                        switch (u.data.case) {
                        case "stage":
                            {
                                let t = u.data.value
                                  , n = t.stats;
                                r({
                                    label: u.emphasisText,
                                    courseName: u.courseDesc,
                                    chapterName: t.chapterName,
                                    sectionName: t.sectionName,
                                    time: n.time + h,
                                    count: n.answeredProgramCount,
                                    ratio: n.correctRatio
                                }),
                                e.push(C.x.stageResult);
                                break
                            }
                        case "workBook":
                            {
                                let t = u.data.value
                                  , r = t.stats;
                                n({
                                    message: u.emphasisText,
                                    courseName: u.courseDesc,
                                    workbookName: t.name,
                                    time: r.time + h,
                                    count: r.answeredProgramCount,
                                    ratio: r.correctRatio
                                }),
                                e.push(C.x.workbookResult);
                                break
                            }
                        case "review":
                            {
                                let t = u.data.value
                                  , r = t.stats;
                                t.isTocFiltered ? (a({
                                    label: u.emphasisText,
                                    title: u.courseDesc,
                                    time: r.time + h,
                                    count: r.answeredProgramCount,
                                    ratio: r.correctRatio,
                                    hasNextProgram: t.hasNextProgram
                                }),
                                e.push(C.x.reviewPlanResult)) : (l({
                                    label: u.emphasisText,
                                    title: u.courseDesc,
                                    time: r.time + h,
                                    count: r.answeredProgramCount,
                                    ratio: r.correctRatio
                                }),
                                e.push(C.x.reviewResult))
                            }
                        }
                        break
                    }
                case "learning/history":
                    w && (b((0,
                    k.Tq)(j, w)),
                    y(void 0)),
                    e.push(C.x.history)
                }
            }
            , [j, w, m])
        }
          , E = () => {
            let e = (0,
            s.md)(c.Dr);
            return (0,
            i.useCallback)(async (t, r) => {
                t && await (0,
                l.SC)(e, r, t.buffer, t.type)
            }
            , [])
        }
        ;
        var R = r(27578);
        let N = () => {
            let e = (0,
            s.md)(c.Dr)
              , t = (0,
            s.md)(d.cS)
              , r = (0,
            s.md)(d.bQ)
              , n = (0,
            s.md)(R.B);
            return (0,
            i.useCallback)(async () => {
                var i, l, a;
                let s = M(null !== (i = null == r ? void 0 : r.cursorSessionId) && void 0 !== i ? i : 0, null !== (l = null == r ? void 0 : r.cursorSessionDeviceCode) && void 0 !== l ? l : "", n, null !== (a = null == r ? void 0 : r.hasAnswerDescriptionHtml) && void 0 !== a && a);
                await O(e, t.versionId, t.code, s)
            }
            , [n, t.code, t.versionId, null == r ? void 0 : r.cursorSessionDeviceCode, null == r ? void 0 : r.cursorSessionId, null == r ? void 0 : r.hasAnswerDescriptionHtml])
        }
          , M = (e, t, r, n) => o.XX.fromJson({
            cursorSessionId: e,
            cursorSessionDeviceCode: t,
            activityLogList: r.map(e => ({
                logType: e.type,
                playTime: e.offset
            })),
            isRenderedAnswerDescription: n
        });
        async function O(e, t, r, n) {
            let i = new o.AY;
            return i.cmd.case = "sendActivityLogCommand",
            i.cmd.value = n,
            await (0,
            l.l9)({
                accessToken: e,
                command: i,
                courseVersionId: t,
                courseCode: r,
                device: "tablet"
            })
        }
        let L = () => {
            let e = (0,
            s.md)(c.Dr)
              , t = (0,
            s.md)(d.cS)
              , r = (0,
            s.md)(d.bQ)
              , n = (0,
            s.md)(d.xC)
              , l = (0,
            s.md)(d.Br)
              , a = (0,
            s.md)(d.B8);
            return (0,
            i.useCallback)(async i => {
                var s, o, c;
                if (!r)
                    return;
                let d = r.contentResource
                  , u = d.answer.name
                  , x = d.legacyAnswer;
                if (!u)
                    return;
                let h = "StartFromHistory" === l ? n.answerLogId : void 0
                  , p = q(r.cursorSessionId, r.cursorSessionDeviceCode, u, x, h, i, a)
                  , m = await P(e, t.versionId, t.code, p)
                  , g = m.appCommandList.filter(e => "nextPageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                return {
                    transitionCommand: 0 === g.length ? void 0 : g[0],
                    answerLogIds: null !== (c = null === (o = m.lemCommandResponse) || void 0 === o ? void 0 : null === (s = o.res.value) || void 0 === s ? void 0 : s.answerlogIds) && void 0 !== c ? c : []
                }
            }
            , [a, t, r, n.answerLogId, l])
        }
          , q = (e, t, r, n, i, l, a) => {
            let s = {
                apName: r,
                viewState: l.viewStateJSON
            }
              , c = o.iA.fromJson({
                answerList: [{
                    versionedId: n.versionedId,
                    answerResult: l.answer.result,
                    answerText: l.answer.text,
                    wrongCount: l.answer.wrongCount,
                    originalId: n.originalId,
                    answerTextType: l.answer.textType,
                    ...void 0 !== l.answer.answerEvaluateValue && {
                        answerEvaluateValue: l.answer.answerEvaluateValue
                    }
                }],
                viewState: JSON.stringify(s),
                cursorSessionId: e,
                cursorSessionDeviceCode: t,
                activityLogList: a.map(e => ({
                    logType: e.type,
                    playTime: e.offset
                }))
            });
            return i && (c.replayAnswerlogId = i),
            c
        }
        ;
        async function P(e, t, r, n) {
            let i = new o.AY;
            return i.cmd.case = "answerCommand",
            i.cmd.value = n,
            await (0,
            l.l9)({
                accessToken: e,
                command: i,
                courseVersionId: t,
                courseCode: r,
                device: "tablet"
            })
        }
        var W = r(6112)
          , z = r(3086);
        let V = () => {
            let e = (0,
            s.md)(c.Dr)
              , t = (0,
            s.md)(d.cS)
              , r = (0,
            s.md)(c.qL)
              , n = (0,
            s.md)(W.kN)
              , a = (0,
            s.md)(d.B8)
              , u = (0,
            s.Xr)(W.Vs)
              , x = (0,
            s.md)(d.bQ)
              , [h,p] = (0,
            i.useState)(!1)
              , [m,g] = (0,
            i.useState)(!1)
              , j = (0,
            S.useRouter)()
              , {updateCourseUnitHistories: v} = (0,
            z.G)();
            return {
                sendCursorPauseCommand: (0,
                i.useCallback)(async () => {
                    p(!0),
                    g(!1);
                    let i = a.map(e => ({
                        logType: e.type,
                        playTime: e.offset
                    }))
                      , s = new o.AY({
                        cmd: {
                            case: "cursorPauseCommand",
                            value: {
                                isErrorRecovery: !1,
                                cursorSessionId: null == x ? void 0 : x.cursorSessionId,
                                cursorSessionDeviceCode: null == x ? void 0 : x.cursorSessionDeviceCode,
                                activityLogList: i
                            }
                        }
                    });
                    try {
                        let i = (await (0,
                        l.l9)({
                            accessToken: e,
                            command: s,
                            courseVersionId: t.versionId,
                            courseCode: t.code,
                            device: "tablet"
                        })).appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 === i.length)
                            return;
                        switch (i[0].pagePath) {
                        case "stage/bottom":
                            switch (r) {
                            case C.x.home:
                                n && await v(),
                                u(null),
                                j.push(C.x.home);
                                break;
                            case C.x.history:
                                j.push(C.x.history)
                            }
                            break;
                        case "workbook":
                            j.push(C.x.workbook);
                            break;
                        case "review/select":
                            j.push(C.x.review)
                        }
                    } catch (e) {
                        g(!0)
                    } finally {
                        p(!1)
                    }
                }
                , [a, null == x ? void 0 : x.cursorSessionId, null == x ? void 0 : x.cursorSessionDeviceCode, t.versionId, t.code, r, n, u, j, v]),
                isLoading: h,
                isError: m
            }
        }
          , D = e => {
            let[t,r] = (0,
            i.useState)()
              , n = (0,
            i.useRef)([])
              , l = (0,
            i.useCallback)( (e, t) => {
                let i = window.setTimeout( () => r(e), 1e3 * t);
                n.current.push(i)
            }
            , [])
              , a = (0,
            i.useCallback)(e => {
                e > 60 && l("Last1Minute", e - 60),
                e > 30 && l("Last30Seconds", e - 30),
                l("LastProgram", e)
            }
            , [l])
              , s = (0,
            i.useCallback)(e => {
                e.forEach(e => {
                    var t;
                    let r = H(null === (t = e.command) || void 0 === t ? void 0 : t.feedBackType);
                    r && l(r, e.delay)
                }
                )
            }
            , [l]);
            return (0,
            i.useEffect)( () => {
                var t;
                if (!e || 0 === e.length)
                    return;
                (null === (t = e[0].command) || void 0 === t ? void 0 : t.feedBackType) === "FB_SNACK_BAR_LAST_PROGRAM" ? a(e[0].delay) : s(e);
                let r = n.current;
                return () => {
                    r.forEach(e => clearTimeout(e))
                }
            }
            , [e, a, s]),
            {
                mode: t
            }
        }
          , H = e => {
            switch (e) {
            case "FB_SNACK_BAR_LAST_ONE_MINUTE":
                return "Last1Minute";
            case "FB_SNACK_BAR_LAST_30_SECONDS":
                return "Last30Seconds";
            case "FB_SNACK_BAR_COUNT_DOWN_TEN_SECONDS":
                return "Last10Seconds";
            case "FB_SNACK_BAR_LAST_PROGRAM":
                return "LastProgram";
            case "FB_FORCE_FINISH_PLAY_SESSION":
                return "Finish";
            default:
                return
            }
        }
        ;
        var X = r(87398);
        let J = () => {
            let e = (0,
            s.md)(c.Dr);
            return (0,
            i.useCallback)(async (t, r) => {
                if (!t || 0 === r.length)
                    return;
                let n = []
                  , i = r.map(async r => {
                    try {
                        let i = (0,
                        X.B)(await (0,
                        l.Ox)(e, t))
                          , a = new TextEncoder().encode(r)
                          , s = i.preSignedUrl;
                        await (0,
                        l.uQ)(a, s);
                        let o = s.split("?")[0];
                        n.push(o)
                    } catch (e) {
                        console.error("Failed to save handwriting answer image to GCS", e)
                    }
                }
                );
                if (await Promise.allSettled(i),
                n.length === r.length)
                    try {
                        await (0,
                        l.dv)(e, t, n)
                    } catch (e) {
                        console.error("Failed to save handwriting answer image URLs to Answer Log Resource", e)
                    }
            }
            , [e])
        }
    }
    ,
    57982: (e, t, r) => {
        r.d(t, {
            r: () => n
        });
        let n = (0,
        r(52035).eU)(0)
    }
    ,
    29821: (e, t, r) => {
        r.d(t, {
            e: () => i
        });
        var n = r(82945);
        async function i(e) {
            var t, r, i, a, s, o, c, d, u, x;
            let h = e.programDetail
              , p = await (0,
            n.h2)(e.encryptedAnswer)
              , m = await (0,
            n.L2)(e.encryptedAnswerDescriptionContent)
              , g = e.programRenderingResources
              , j = (i = h.programContent,
            a = g,
            {
                name: null == i ? void 0 : null === (s = i.qpap) || void 0 === s ? void 0 : s.pattern,
                body: null == i ? void 0 : i.paramsJson,
                resources: l(a.program)
            })
              , v = (o = h.answer,
            c = g,
            {
                name: null == o ? void 0 : o.answerPatternName,
                body: null == o ? void 0 : o.attributesJson,
                resources: l(c.answer)
            })
              , f = (d = m,
            u = g,
            {
                name: null === (x = d.qpap) || void 0 === x ? void 0 : x.pattern,
                body: d.paramsJson,
                resources: l(u.answerDescription)
            });
            return {
                question: j,
                answer: v,
                legacyAnswer: p,
                description: f,
                hint: function(e, t) {
                    var r;
                    if (e)
                        return {
                            name: e.hintType,
                            body: null === (r = e.qpapWithParams) || void 0 === r ? void 0 : r.paramsJson,
                            resources: l(t.hint)
                        }
                }(h.hint, g),
                explain: function(e, t) {
                    var r, n, i;
                    if (e)
                        return {
                            name: null === (n = e.qpapWithParams) || void 0 === n ? void 0 : null === (r = n.qpap) || void 0 === r ? void 0 : r.pattern,
                            body: null === (i = e.qpapWithParams) || void 0 === i ? void 0 : i.paramsJson,
                            resources: l(t.explain)
                        }
                }(h.explain, g),
                args: 0 === h.targetAtomList.length ? {} : Object.fromEntries(Object.entries(JSON.parse(null !== (r = null === (t = h.targetAtomList[0].atom) || void 0 === t ? void 0 : t.attributesJson) && void 0 !== r ? r : "{}")))
            }
        }
        function l(e) {
            return Object.fromEntries(Object.entries(e).map(e => [e[0], e[1].contentResourceList.map(e => ({
                path: e.url,
                meta: e.metaJson
            }))]))
        }
    }
    ,
    77114: (e, t, r) => {
        r.d(t, {
            y: () => n
        });
        let n = "panel-answer"
    }
    ,
    24781: (e, t, r) => {
        r.d(t, {
            p: () => l,
            u: () => a
        });
        var n = r(90731)
          , i = r(29821);
        let l = async (e, t, r) => {
            var l, a, s, o, c;
            let d = null === (l = e.programDetail) || void 0 === l ? void 0 : l.originalId;
            if (!d)
                throw Error("Program ID is missing");
            let u = r.code
              , x = await (0,
            n.xM)(t, d, u)
              , h = await (0,
            i.e)(x)
              , p = e.playProgressBar
              , m = e.menuInfo
              , g = e.timerFeedBackCommandList
              , j = p ? p.isReviewing ? "Review" : "Basic" : void 0;
            return {
                programResource: {
                    contentResource: h,
                    id: d,
                    cursorSessionId: e.cursorSessionId,
                    cursorSessionDeviceCode: e.cursorSessionDeviceCode,
                    mode: j,
                    menuContext: m ? {
                        courseName: m.courseName,
                        rootStructureElementName: m.rootStructureElementName,
                        entryStructureElementName: m.entryStructureElementName,
                        intermediateSequence: m.intermediateSequence
                    } : void 0,
                    feedBackType: null === (a = e.feedBackCommand) || void 0 === a ? void 0 : a.feedBackType,
                    feedBackCommandOnAnswerCorrect: e.feedBackCommandOnAnswerCorrect,
                    timerCommands: g.reduce( (e, t) => {
                        let {delayedSeconds: r, feedBackCommand: n} = t;
                        return n ? [...e, {
                            delay: r,
                            command: n
                        }] : e
                    }
                    , []),
                    hasAnswerDescriptionHtml: null !== (o = null === (s = e.programDetail) || void 0 === s ? void 0 : s.hasAnswerDescriptionHtml) && void 0 !== o && o
                },
                progress: null !== (c = null == p ? void 0 : p.progress) && void 0 !== c ? c : 0
            }
        }
        ;
        function a(e) {
            return e.replace(/<math>(.*?)<\/math>/g, (e, t) => {
                let r = t.replace(/\\rm\s+(.+)/g, "\\mathbf{$1}");
                return "<math>".concat(r, "</math>")
            }
            )
        }
    }
}]);
