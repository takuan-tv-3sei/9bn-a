"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[648], {
    36266: function(e, t, r) {
        r.d(t, {
            v: function() {
                return s
            }
        });
        var n = r(48583)
          , i = r(67294)
          , l = r(53218)
          , a = r(67446);
        let s = () => {
            let e = (0,
            n.Dv)(a.FI)
              , [t,r] = (0,
            i.useState)([]);
            return (0,
            i.useEffect)( () => {
                let t = async () => {
                    try {
                        let {facilitatorList: t} = await (0,
                        l.bG)({
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
                ;
                t()
            }
            , []),
            {
                facilitators: t
            }
        }
    },
    18751: function(e, t, r) {
        r.d(t, {
            A: function() {
                return i
            }
        });
        var n = r(67294);
        let i = () => {
            let e = (0,
            n.useCallback)(e => {
                e.preventDefault()
            }
            , [])
              , t = (0,
            n.useCallback)( () => {
                document.addEventListener("touchmove", e, {
                    passive: !1
                })
            }
            , [e])
              , r = (0,
            n.useCallback)( () => {
                document.removeEventListener("touchmove", e)
            }
            , [e]);
            return {
                preventTouchScroll: t,
                allowTouchScroll: r
            }
        }
    },
    3363: function(e, t, r) {
        r.d(t, {
            zF: function() {
                return u
            },
            J$: function() {
                return g
            },
            hu: function() {
                return h
            }
        });
        var n = r(85893)
          , i = r(1050)
          , l = r(45098)
          , a = r(67294)
          , s = r(60619)
          , o = r(10242)
          , c = r(70086)
          , d = r(63754);
        let u = a.memo(e => {
            let {src: t, isSpeaking: r, zIndex: i} = e
              , [l,d] = (0,
            a.useState)("idle")
              , [u,p] = (0,
            a.useState)(0)
              , h = (0,
            a.useRef)()
              , [m,{sound: g, duration: v, pause: f, stop: b}] = (0,
            s.Z)(t)
              , j = v ? v / 1e3 : 0
              , w = (0,
            a.useCallback)( () => {
                u > j && p(0),
                d("play"),
                m()
            }
            , [m, u, j])
              , S = (0,
            a.useCallback)( () => {
                d("pause"),
                f()
            }
            , [f])
              , y = (0,
            a.useCallback)( () => {
                "play" === l ? S() : w()
            }
            , [l, w, S])
              , C = (0,
            a.useCallback)( (e, t) => {
                "number" == typeof t && (p(t),
                null == g || g.seek(t))
            }
            , [g]);
            return (0,
            a.useEffect)( () => {
                if ("play" !== l)
                    return;
                let e = () => {
                    p(e => e + .1),
                    h.current = window.setTimeout(e, 100)
                }
                ;
                return e(),
                () => {
                    window.clearTimeout(h.current)
                }
            }
            , [l]),
            (0,
            a.useEffect)( () => {
                u > j && (d("pause"),
                b(),
                window.clearTimeout(h.current))
            }
            , [u, j, b]),
            (0,
            a.useEffect)( () => {
                r && S()
            }
            , [r, S]),
            (0,
            a.useEffect)( () => () => {
                b()
            }
            , [b]),
            (0,
            n.jsxs)(c.sg, {
                width: 352,
                alignItems: "center",
                children: [(0,
                n.jsx)(o.ch, {
                    name: "play" === l ? "pause" : "sound",
                    sx: {
                        zIndex: i
                    },
                    onClick: y,
                    disabled: r
                }), (0,
                n.jsx)(x, {
                    value: u,
                    step: .1,
                    max: j,
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
        l.Z)(i.ZP)( () => ({
            width: "320px",
            "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                backgroundColor: d.O9.primary,
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
                backgroundColor: d.O9.onSurfaceWeak3
            }
        }));
        var p = r(69417);
        let h = e => {
            let {zIndex: t, onClick: r} = e;
            return (0,
            n.jsx)(p.Z, {
                variant: "outlined",
                onClick: r,
                disableRipple: !0,
                sx: [{
                    height: 32,
                    width: 56,
                    minWidth: 56,
                    borderRadius: "8px",
                    boxShadow: 0,
                    backgroundColor: d.O9.white,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderWidth: 2,
                    zIndex: t,
                    "&:hover": {
                        boxShadow: 0,
                        backgroundColor: d.O9.white,
                        borderColor: d.O9.onSurfaceWeak3,
                        borderWidth: 2
                    }
                }],
                children: (0,
                n.jsx)(o.YS, {
                    name: "zoom",
                    size: 24,
                    color: "onSurface"
                })
            })
        }
        ;
        var m = r(41008);
        r(8594);
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
                    i.push(l),
                    e = e.substring(t);
                    let a = e.search(n);
                    if (a < 0)
                        break;
                    let s = a + n.length
                      , o = e.substring(0, s)
                      , c = o.replace(RegExp(r, "g"), "").replace(RegExp(n, "g"), "");
                    try {
                        let t = m.Z.renderToString(c, {
                            output: "html"
                        });
                        i.push(t),
                        e = e.substring(s)
                    } catch (e) {
                        break
                    }
                }
                0 !== e.length && i.push(e);
                let l = i.join("");
                return l
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
    },
    16396: function(e, t, r) {
        r.d(t, {
            G: function() {
                return h
            }
        });
        var n = r(85893)
          , i = r(80822)
          , l = r(25889)
          , a = r(48583)
          , s = r(67294)
          , o = r(73935)
          , c = r(59415)
          , d = r(5834)
          , u = r(92260)
          , x = r(65976);
        let p = "State Machine"
          , h = s.memo(e => {
            var t, r;
            let {result: i, height: l=500, width: s=500, portalElem: o=x.L, handleOnPlay: c, handleOnStop: d} = e
              , p = (0,
            a.Dv)(u.dx);
            return (0,
            n.jsx)(m, {
                result: i,
                postPartCountUp: null !== (r = null == p ? void 0 : null === (t = p.feedBackCommandOnAnswerCorrect) || void 0 === t ? void 0 : t.additionalIntParam) && void 0 !== r ? r : 0,
                height: l,
                width: s,
                portalElem: o,
                handleOnPlay: c,
                handleOnStop: d
            })
        }
        )
          , m = e => {
            var t;
            let {result: r, postPartCountUp: h, height: m=500, width: g=500, portalElem: v=x.L, handleOnPlay: f, handleOnStop: b} = e
              , j = (0,
            a.Dv)(u.q7)
              , [w,S] = (0,
            s.useState)(!1)
              , [y,C] = (0,
            s.useState)()
              , k = (0,
            s.useRef)(!1)
              , {rive: I, RiveComponent: O} = (0,
            l.useRive)({
                src: c.T.popupOX,
                artboard: "Artboard",
                stateMachines: p,
                autoplay: !0,
                onPlay: () => {
                    f && f()
                }
                ,
                onStop: () => {
                    !k.current && (k.current = !0,
                    b && b())
                }
            })
              , A = e => {
                let t = e.data
                  , r = t.properties;
                if ("Sound" === t.name && void 0 !== r.name) {
                    let e = new Audio((0,
                    d.n)("sound/".concat(r.name, ".mp3")));
                    C(e)
                } else
                    C(void 0);
                "exit" === t.name ? S(!0) : S(!1)
            }
              , _ = (0,
            l.useStateMachineInput)(I, p, "correct" === r || "incorrect" === r ? "default" : "kanji_correct" === r || "kanji_incorrect" === r ? "kanji" : "redo")
              , N = (0,
            l.useStateMachineInput)(I, p, "correction")
              , R = (0,
            l.useStateMachineInput)(I, p, "num");
            return (0,
            s.useEffect)( () => {
                I && (_ && _.fire(),
                N && (N.value = "correct" === r || "kanji_correct" === r),
                R && (R.value = h),
                I.setTextRunValue("correctNum", "".concat(h)),
                I.on(l.EventType.RiveEvent, A))
            }
            , [N, R, h, r, I, _]),
            (0,
            s.useEffect)( () => {
                y && j && y.play()
            }
            , [y, j]),
            (0,
            s.useEffect)( () => {
                I && w && I.stop()
            }
            , [w, I]),
            (0,
            o.createPortal)((0,
            n.jsx)(i.Z, {
                position: "body" === v ? "fixed" : "absolute",
                width: g,
                height: m,
                margin: "auto",
                sx: {
                    inset: "body" === v ? "0 0 0 56px" : 0
                },
                children: (0,
                n.jsx)(i.Z, {
                    height: m,
                    width: g,
                    children: (0,
                    n.jsx)(O, {})
                })
            }), "body" === v ? document.body : null !== (t = document.getElementById(v)) && void 0 !== t ? t : document.body)
        }
        ;
        h.displayName = "Popup"
    },
    34774: function(e, t, r) {
        r.d(t, {
            Y: function() {
                return i
            },
            u: function() {
                return l
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)("")
          , l = (0,
        n.cn)(!1)
    },
    57455: function(e, t, r) {
        r.d(t, {
            je: function() {
                return $
            },
            U8: function() {
                return x
            },
            sR: function() {
                return D
            },
            GI: function() {
                return p.G
            },
            FO: function() {
                return H
            },
            eL: function() {
                return P
            },
            A9: function() {
                return g
            },
            nv: function() {
                return R
            },
            M$: function() {
                return y
            }
        });
        var n = r(85893)
          , i = r(80822)
          , l = r(73935)
          , a = r(10242)
          , s = r(76636)
          , o = r(67294);
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
        var d = r(70086)
          , u = r(63754);
        let x = e => {
            let {onClick: t} = e
              , {windowHeight: r} = (0,
            s.A)()
              , {windowWidth: o} = c();
            return (0,
            l.createPortal)((0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(i.Z, {
                    height: r,
                    width: o,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    bgcolor: u.O9.onSurface,
                    sx: {
                        opacity: .7
                    }
                }), (0,
                n.jsx)(i.Z, {
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
                    n.jsxs)(d.sg, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0,
                        n.jsx)(a.nG, {
                            name: "popupFinish01",
                            height: 271,
                            width: 498
                        }), (0,
                        n.jsx)(d.LZ, {
                            y: 12
                        }), (0,
                        n.jsx)(a.Vy, {
                            text: "結果を見る",
                            onClick: t
                        })]
                    })
                })]
            }), document.body)
        }
        ;
        var p = r(16396)
          , h = r(51526)
          , m = r(47986);
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
            n.jsx)(h.M, {
                children: c && (0,
                n.jsx)(m.E.div, {
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
                    n.jsx)(i.Z, {
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
                            u.NH)("onSurface", .8) : (0,
                            u.NH)("important", .8)
                        },
                        onClick: x,
                        children: (0,
                        n.jsx)(a.xv, {
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
        var v = r(2734)
          , f = r(24358)
          , b = r(48583)
          , j = r(26126);
        let w = e => {
            let {name: t, onClick: r} = e;
            return (0,
            n.jsx)(a.Xd, {
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
                n.jsx)(a.YS, {
                    name: t,
                    size: 40,
                    color: "surface"
                })
            })
        }
        ;
        var S = r(34774);
        let y = () => {
            let e = (0,
            b.Dv)(S.Y)
              , t = (0,
            b.Dv)(S.u);
            return (0,
            n.jsx)(C, {
                src: e,
                visible: t
            })
        }
          , C = e => {
            let {src: t, visible: r} = e
              , l = (0,
            b.b9)(S.u)
              , [a,s] = (0,
            o.useState)({
                width: 0,
                height: 0
            })
              , [c,x] = (0,
            o.useState)({
                width: 0,
                height: 0
            })
              , p = (0,
            v.Z)()
              , h = a.width / a.height
              , m = c.width / c.height
              , g = h >= m
              , y = g ? (innerHeight - 64) * m : innerWidth - 64
              , C = g ? innerHeight - 64 : (innerWidth - 64) / m
              , k = g ? c.height > C : c.width > y
              , I = k ? y : c.width
              , O = k ? C : c.height;
            (0,
            o.useEffect)( () => {
                let e = () => {
                    s({
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
                let e = new Image;
                e.src = t;
                let r = () => {
                    x({
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
            let A = (0,
            o.useCallback)( () => {
                l(!1)
            }
            , [l])
              , _ = (0,
            o.useCallback)( () => {
                l(!1)
            }
            , [l])
              , N = (0,
            o.useCallback)(e => {
                let {scale: t, positionX: r, positionY: n} = e.state;
                1 === t && (-100 === r || 100 === r || -100 === n || 100 === n) && l(!1)
            }
            , [l]);
            return (0,
            n.jsxs)(f.Z, {
                open: r,
                onClick: _,
                sx: {
                    zIndex: p.zIndex.modal
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 8,
                    right: 8,
                    zIndex: 1,
                    children: (0,
                    n.jsx)(w, {
                        name: "close",
                        onClick: A
                    })
                }), (0,
                n.jsx)(j.d$, {
                    initialScale: 1,
                    centerOnInit: !0,
                    onPanningStop: N,
                    children: (0,
                    n.jsx)(j.Uv, {
                        children: (0,
                        n.jsx)(d.M5, {
                            width: innerWidth,
                            height: innerHeight,
                            children: (0,
                            n.jsx)(i.Z, {
                                display: "flex",
                                bgcolor: u.O9.surface,
                                borderRadius: 2,
                                padding: 2,
                                onClick: e => {
                                    e.stopPropagation()
                                }
                                ,
                                children: (0,
                                n.jsx)("img", {
                                    width: I,
                                    height: O,
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
        }
        ;
        var k = r(94054)
          , I = r(33841)
          , O = r(10315)
          , A = r(23599);
        let _ = o.memo(e => {
            let {id: t, value: r, menuList: i, label: l, fullWidth: s=!1, onChange: c} = e
              , d = l ? "".concat(l, "-label") : void 0
              , [u,x] = (0,
            o.useState)(!1)
              , p = (0,
            o.useCallback)( () => x(!0), [])
              , h = (0,
            o.useCallback)( () => x(!1), [])
              , m = (0,
            o.useCallback)(e => {
                c(e.target.value),
                x(!1)
            }
            , [c]);
            return (0,
            n.jsxs)(k.Z, {
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
                n.jsx)(I.Z, {
                    id: d,
                    children: l
                }), (0,
                n.jsx)(O.Z, {
                    id: t,
                    value: r,
                    label: l,
                    labelId: d,
                    onOpen: p,
                    onClose: h,
                    onChange: m,
                    sx: {
                        height: 48,
                        minWidth: 120
                    },
                    children: i.map(e => {
                        let {value: t, label: r} = e;
                        return (0,
                        n.jsx)(A.Z, {
                            value: t,
                            children: (0,
                            n.jsx)(a.xv, {
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
        );
        _.displayName = "Select";
        var N = r(61903);
        let R = o.memo(e => {
            let {type: t="text", onChange: r, maxlength: i, value: l, size: a="medium", children: s, ...c} = e
              , d = (0,
            o.useCallback)(e => null == r ? void 0 : r(e.target.value), [r])
              , [u,x] = (0,
            o.useState)(!1)
              , p = () => {
                x(!0)
            }
              , h = () => {
                x(!1)
            }
            ;
            return (0,
            n.jsx)(N.Z, {
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
                onFocus: p,
                onBlur: h,
                children: s
            })
        }
        );
        R.displayName = "TextField";
        var L = r(87109)
          , E = r(3363);
        let D = e => {
            let {mode: t, value: r, placeHolder: i, onChange: l} = e
              , a = (0,
            o.useId)()
              , s = i.useLatexInLabel ? "<math>".concat(i.label, "</math>") : i.label
              , c = s ? (0,
            n.jsx)(z, {
                text: s
            }) : "回答を入力"
              , d = i.useLatexInSuffix ? "<math>".concat(i.suffix, "</math>") : i.suffix;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(T, {
                    id: a,
                    value: r,
                    label: c,
                    suffix: d,
                    onChange: l
                });
            case "Correct":
                return (0,
                n.jsx)(M, {
                    id: a,
                    value: r,
                    label: c,
                    suffix: d
                });
            case "Incorrect":
                return (0,
                n.jsx)(W, {
                    id: a,
                    value: r,
                    label: c,
                    suffix: d
                })
            }
        }
          , Z = {
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
                color: u.O9.onSurface
            },
            ".Mui-disabled.MuiOutlinedInput-input": {
                color: u.O9.onSurface,
                WebkitTextFillColor: u.O9.onSurface
            },
            ".Mui-disabled:hover": {
                background: "inherit"
            }
        }
          , T = e => {
            let {id: t, value: r, label: i, suffix: l, onChange: a} = e;
            return (0,
            n.jsx)(R, {
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
                    n.jsx)(q, {
                        text: l
                    })
                } : void 0
            })
        }
          , M = e => {
            let {id: t, value: r, label: l, suffix: s} = e;
            return (0,
            n.jsxs)(i.Z, {
                position: "relative",
                children: [(0,
                n.jsx)(R, {
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
                        ...Z,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: u.O9.correctWeak
                        }
                    },
                    InputProps: (null == s ? void 0 : s.length) ? {
                        endAdornment: (0,
                        n.jsx)(q, {
                            text: s
                        })
                    } : void 0
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , W = e => {
            let {id: t, value: r, label: l, suffix: s} = e;
            return (0,
            n.jsxs)(i.Z, {
                position: "relative",
                children: [(0,
                n.jsx)(R, {
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
                        ...Z,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: u.O9.importantWeak
                        }
                    },
                    InputProps: (null == s ? void 0 : s.length) ? {
                        endAdornment: (0,
                        n.jsx)(q, {
                            text: s
                        })
                    } : void 0
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , z = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(E.J$, {
                src: t,
                style: {
                    fontSize: 20,
                    color: u.O9.onSurfaceWeak2
                }
            })
        }
          , q = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(L.Z, {
                position: "end",
                sx: {
                    alignSelf: "end",
                    height: "inherit",
                    marginBottom: 1.5
                },
                children: (0,
                n.jsx)(E.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: u.O9.onSurfaceWeak2
                    }
                })
            })
        }
          , H = o.memo(e => {
            let {width: t=435, height: r=230, handleOnPlay: s, handleOnStop: o} = e;
            return (0,
            l.createPortal)((0,
            n.jsx)(i.Z, {
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
                n.jsx)(a.nG, {
                    name: "popupStart5minReview",
                    height: r,
                    width: t,
                    handleOnPlay: s,
                    handleOnStop: o
                })
            }), document.body)
        }
        );
        H.displayName = "Popup5minReview";
        var J = r(18751);
        let P = e => {
            let {src: t, width: r, height: i, isTouchScroll: l} = e
              , {preventTouchScroll: a, allowTouchScroll: s} = (0,
            J.A)()
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
        var F = r(5152)
          , V = r.n(F);
        let $ = V()( () => Promise.all([r.e(289), r.e(996)]).then(r.bind(r, 11996)).then(e => e.DrawingArea), {
            loadableGenerated: {
                webpack: () => [11996]
            },
            ssr: !1
        })
    },
    66105: function(e, t, r) {
        r.d(t, {
            D: function() {
                return i
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)(void 0)
    },
    26622: function(e, t, r) {
        r.d(t, {
            eN: function() {
                return a
            },
            Yf: function() {
                return k
            },
            Fh: function() {
                return I
            },
            Ux: function() {
                return N
            },
            c8: function() {
                return j
            },
            ve: function() {
                return f
            },
            Wm: function() {
                return w
            },
            zh: function() {
                return x
            },
            _n: function() {
                return _
            }
        });
        var n = r(85893)
          , i = r(67294)
          , l = r(10242);
        let a = i.memo(e => {
            let {isOpen: t, onClickCancel: r, onClickAnswer: i} = e;
            return (0,
            n.jsx)(l.Vq, {
                isOpen: t,
                title: "このまま解答しますか？",
                body: "解答が未入力です。",
                actions: (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.Qd, {
                        label: "キャンセル",
                        color: "primary",
                        onClick: r
                    }), (0,
                    n.jsx)(l.Qd, {
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
        var s = r(80822)
          , o = r(18751)
          , c = r(63754)
          , d = r(5834)
          , u = r(3363);
        let x = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, mode: l="Default", page: a, maxPage: o, height: d=240, prefixLabel: u, suffixLabel: x, useLatexInLabel: f=!1, useLatexInSuffix: b=!1, hasBackgroundImage: j=!0, onClickLeft: w, onClickRight: S} = e
              , y = (0,
            i.useMemo)( () => {
                switch (l) {
                case "Default":
                    return (0,
                    n.jsx)(p, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: j,
                        children: r
                    });
                case "Slider":
                    return (0,
                    n.jsx)(h, {
                        page: a,
                        maxPage: o,
                        onClickLeft: w,
                        onClickRight: S,
                        children: (0,
                        n.jsx)(p, {
                            ref: t,
                            height: d,
                            hasBackgroundImage: j,
                            children: r
                        })
                    });
                case "Correct":
                    return (0,
                    n.jsx)(m, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: j,
                        children: r
                    });
                case "Incorrect":
                    return (0,
                    n.jsx)(g, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: j,
                        children: r
                    })
                }
            }
            , [r, l, a, o, d, t, j, w, S])
              , C = "Slider" === l ? 48 : 16
              , k = {
                border: "4px solid ".concat(c.O9.onSurfaceWeak3),
                borderRadius: "8px",
                ..."100%" === d ? {
                    height: d
                } : {}
            };
            return (0,
            n.jsx)("div", {
                style: k,
                children: (0,
                n.jsxs)(s.Z, {
                    height: d,
                    position: "relative",
                    display: "flex",
                    children: [y, u && (0,
                    n.jsx)(v, {
                        type: "prefix",
                        text: u,
                        sideMove: C,
                        useLatex: f
                    }), x && (0,
                    n.jsx)(v, {
                        type: "suffix",
                        text: x,
                        sideMove: C,
                        useLatex: b
                    })]
                })
            })
        }
        );
        x.displayName = "WritingArea";
        let p = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, height: i, hasBackgroundImage: l} = e
              , {preventTouchScroll: a, allowTouchScroll: c} = (0,
            o.A)();
            return (0,
            n.jsx)(s.Z, {
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
                        d.n)("png/handwriting.png"), ")"),
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
        p.displayName = "Default";
        let h = e => {
            let {children: t, page: r, maxPage: i, onClickLeft: l, onClickRight: a} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(s.Z, {
                    flexGrow: 0,
                    children: (0,
                    n.jsx)(f, {
                        type: "left",
                        width: 32,
                        disabled: 1 === r,
                        onClick: l
                    })
                }), t, (0,
                n.jsx)(s.Z, {
                    flexGrow: 0,
                    children: (0,
                    n.jsx)(f, {
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
            n.jsxs)(p, {
                ref: t,
                height: i,
                prefixLabel: a,
                suffixLabel: o,
                hasBackgroundImage: c,
                children: [(0,
                n.jsx)(s.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 144,
                    height: 144,
                    children: (0,
                    n.jsx)(l.$V, {
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
            n.jsxs)(p, {
                ref: t,
                height: i,
                prefixLabel: a,
                suffixLabel: o,
                hasBackgroundImage: c,
                children: [(0,
                n.jsx)(s.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 144,
                    height: 144,
                    children: (0,
                    n.jsx)(l.$V, {
                        name: "correctionX",
                        width: 144,
                        height: 144
                    })
                }), r]
            })
        }
        );
        g.displayName = "Incorrect";
        let v = e => {
            let {text: t, type: r, sideMove: i, useLatex: l} = e;
            return (0,
            n.jsx)(u.J$, {
                src: l ? "<math>".concat(t, "</math>") : t,
                style: {
                    position: "absolute",
                    fontSize: 40,
                    color: c.O9.onSurfaceWeak2,
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
          , f = i.memo(e => {
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
                    c.NH)("onSurfaceWeak4", .5),
                    cursor: "pointer",
                    ..."left" === t && {
                        borderRight: "1px solid ".concat(c.O9.onSurfaceWeak3)
                    },
                    ..."right" === t && {
                        borderLeft: "1px solid ".concat(c.O9.onSurfaceWeak3)
                    }
                },
                onClick: a,
                children: (0,
                n.jsx)(l.YS, {
                    name: "left" === t ? "triangleLeft" : "triangleRight",
                    size: 32,
                    color: i ? "onSurfaceWeak3" : "primary"
                })
            })
        }
        );
        f.displayName = "SliderButton";
        var b = r(70086);
        let j = i.memo(e => {
            let {isOpen: t, x: r, y: i, onClick: a} = e;
            return t ? (0,
            n.jsxs)(l.Xd, {
                sx: {
                    position: "absolute",
                    justifyContent: "normal",
                    top: i,
                    left: null != r ? r : "calc(50% - ".concat(136, "px)"),
                    width: 272,
                    height: 48,
                    bgcolor: (0,
                    c.NH)("onSurface", .8),
                    borderRadius: 32,
                    zIndex: 22
                },
                onClick: a,
                children: [(0,
                n.jsx)(b.LZ, {
                    x: 3
                }), (0,
                n.jsx)(l.xv, {
                    color: "white",
                    children: "接続が不安定です"
                }), (0,
                n.jsx)(b.LZ, {
                    x: 2
                }), (0,
                n.jsxs)(b.X2, {
                    alignItems: "center",
                    pr: 1.5,
                    pl: .5,
                    py: .5,
                    height: 32,
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                    bgcolor: c.O9.onSurface,
                    borderRadius: 32,
                    children: [(0,
                    n.jsx)(l.YS, {
                        name: "reload",
                        size: 32
                    }), "再接続"]
                }), (0,
                n.jsx)(b.LZ, {
                    x: 1
                })]
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
        );
        function w(e) {
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
        j.displayName = "ReconnectMessage";
        var S = r(48583)
          , y = r(41008);
        r(8594);
        var C = r(4446);
        let k = i.memo(e => {
            let {text: t, id: r, style: l} = e
              , a = (0,
            S.b9)(C.f)
              , s = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)( () => {
                if (s.current)
                    try {
                        a(!1),
                        y.Z.render(t, s.current);
                        let e = s.current.querySelectorAll(".katex-html");
                        e.forEach(e => {
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
        k.displayName = "Katex";
        let I = i.memo(e => {
            let {isOpen: t, title: r, onClickCancel: i, onClickContinue: a, onClose: s} = e;
            return (0,
            n.jsx)(l.Vq, {
                isOpen: t,
                title: r,
                body: (0,
                n.jsx)(l.xv, {
                    lineHeight: "relaxed",
                    children: "書き直しをおねがいします。いらない点や線があれば消してください。"
                }),
                actions: (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.Qd, {
                        label: "このまま解答する",
                        color: "primary",
                        onClick: a
                    }), (0,
                    n.jsx)(l.Qd, {
                        label: "書き直す",
                        color: "primary",
                        onClick: i
                    })]
                }),
                onClose: s
            })
        }
        );
        I.displayName = "KatexErrorDialog";
        var O = r(61982)
          , A = r(92260);
        let _ = () => {
            let e = (0,
            S.Dv)(A.As)
              , t = (0,
            S.b9)(A.Ok)
              , r = "eraser" === e ? "eraser" : "pen"
              , n = (0,
            i.useCallback)( () => {
                switch (r) {
                case "pen":
                    t({
                        type: O.zE.ANSWERVIEW_INPUT_HANDWRITE_START
                    });
                    return;
                case "eraser":
                    t({
                        type: O.zE.ANSWERVIEW_INPUT_ERASER_START
                    });
                    return
                }
            }
            , [r, t])
              , l = (0,
            i.useCallback)( () => {
                switch (r) {
                case "pen":
                    t({
                        type: O.zE.ANSWERVIEW_INPUT_HANDWRITE_END
                    });
                    return;
                case "eraser":
                    t({
                        type: O.zE.ANSWERVIEW_INPUT_ERASER_END
                    });
                    return
                }
            }
            , [r, t]);
            return {
                onPointerDown: n,
                onPointerUp: l
            }
        }
          , N = i.memo(e => {
            let {isOpen: t, onClick: r} = e;
            return (0,
            n.jsx)(l.Vq, {
                isOpen: t,
                title: "文字数が多すぎます",
                body: "300文字以内で解答してください。",
                actions: (0,
                n.jsx)(n.Fragment, {
                    children: (0,
                    n.jsx)(l.Qd, {
                        label: "OK",
                        color: "primary",
                        onClick: r
                    })
                }),
                onClose: r
            })
        }
        );
        N.displayName = "OverflowDialog"
    },
    4446: function(e, t, r) {
        r.d(t, {
            f: function() {
                return i
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)(!1)
    },
    59199: function(e, t, r) {
        r.d(t, {
            Q: function() {
                return a
            }
        });
        var n = r(85893)
          , i = r(80822)
          , l = r(10242);
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
            n.jsx)(i.Z, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.UV, {
                        name: "microphone",
                        onClick: t
                    })
                })
            })
        }
          , o = e => {
            let {onClick: t} = e;
            return (0,
            n.jsxs)(i.Z, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)(l.nG, {
                    width: 550,
                    height: 120,
                    name: "soundwaveSpeaking"
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.UV, {
                        name: "stop",
                        onClick: t
                    })
                })]
            })
        }
          , c = e => {
            let {onClick: t, isPlaying: r} = e;
            return (0,
            n.jsxs)(i.Z, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)(l.nG, {
                    width: 550,
                    height: 120,
                    name: "soundwaveSpeaking",
                    play: r
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.ch, {
                        name: "sound",
                        onClick: t
                    })
                })]
            })
        }
    },
    79361: function(e, t, r) {
        r.d(t, {
            wn: function() {
                return o
            },
            xm: function() {
                return i
            },
            pU: function() {
                return u
            },
            IE: function() {
                return d
            },
            BF: function() {
                return l
            },
            py: function() {
                return c
            }
        });
        var n = r(67294);
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
            n.useState)()
              , r = (0,
            n.useCallback)(e => t(e), [])
              , i = (0,
            n.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: i
            }
        }
        ;
        var a = r(61982)
          , s = r(65166);
        let o = () => {
            let[e,t] = (0,
            n.useState)(new Uint8Array)
              , r = (0,
            n.useCallback)( (e, r, n) => {
                if (!e) {
                    r();
                    return
                }
                n(),
                t(e)
            }
            , [])
              , i = (0,
            n.useCallback)(t => {
                t({
                    answer: {
                        result: a.sS.CORRECT,
                        textType: 2,
                        text: "",
                        wrongCount: 0
                    },
                    answerLogResource: {
                        buffer: e,
                        type: s.Up.ENGLISH_AUDIO
                    },
                    viewStateJSON: {}
                })
            }
            , [e]);
            return {
                prepare: r,
                fix: i
            }
        }
          , c = () => {
            let[e,t] = (0,
            n.useState)(!1)
              , r = (0,
            n.useCallback)( () => t(!0), [])
              , i = (0,
            n.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: i,
                visibled: e
            }
        }
          , d = () => {
            let[e,t] = (0,
            n.useState)(!1)
              , r = (0,
            n.useCallback)( () => t(!0), [])
              , i = (0,
            n.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: i,
                visibled: e
            }
        }
          , u = () => {
            let[e,t] = (0,
            n.useState)(!1)
              , r = (0,
            n.useCallback)( () => t(!0), [])
              , i = (0,
            n.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: i,
                visibled: e
            }
        }
    },
    99648: function(e, t, r) {
        r.d(t, {
            hD: function() {
                return i_
            },
            QW: function() {
                return iX
            },
            qg: function() {
                return z
            },
            Mq: function() {
                return iA
            }
        });
        var n = r(85893)
          , i = r(80822)
          , l = r(48583)
          , a = r(67294)
          , s = r(10242)
          , o = r(13125)
          , c = r(70086)
          , d = r(63754);
        let u = e => {
            let {question: t, isSpeaking: r, showImageDialog: i} = e;
            switch (t.type) {
            case "A1":
                return (0,
                n.jsx)(p, {
                    source: t
                });
            case "A2":
                return (0,
                n.jsx)(h, {
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
                n.jsx)(v, {
                    source: t
                });
            case "B2Selection":
                return (0,
                n.jsx)(f, {
                    source: t
                });
            case "ClassicQubena":
                return (0,
                n.jsx)(b, {
                    source: t
                });
            case "EnglishWordL":
                return (0,
                n.jsx)(j, {
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
                n.jsx)(S, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordR":
                return (0,
                n.jsx)(y, {
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
                n.jsx)(I, {
                    source: t
                });
            case "EnglishWordWL":
                return (0,
                n.jsx)(O, {
                    source: t,
                    isSpeaking: r
                });
            case "Html":
                return (0,
                n.jsx)(A, {
                    source: t
                });
            case "KanjiNazori":
                return (0,
                n.jsx)(_, {
                    source: t
                });
            case "KanjiSelfJudgement":
                return (0,
                n.jsx)(N, {
                    source: t
                });
            case "KanjiYomi":
                return (0,
                n.jsx)(R, {
                    source: t
                });
            case "Simple":
                return (0,
                n.jsx)(L, {
                    source: t,
                    isSpeaking: r,
                    showImageDialog: i
                })
            }
        }
        ;
        var x = r(3363);
        let p = e => {
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
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
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
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , h = e => {
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
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
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
                    n.jsx)(x.J$, {
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
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
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
                    n.jsx)(x.J$, {
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
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
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
                    n.jsx)(x.J$, {
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
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
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
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , f = e => {
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
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
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
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , b = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.image;
            return i ? (0,
            n.jsx)("div", {
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                children: (0,
                n.jsxs)(c.sg, {
                    alignItems: "center",
                    gap: 2,
                    children: [(0,
                    n.jsx)("img", {
                        className: "question-content-image",
                        src: i,
                        width: "100%"
                    }), (0,
                    n.jsx)(x.hu, {
                        zIndex: 1,
                        onClick: () => {
                            r && r(i)
                        }
                    })]
                }, 0)
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , j = e => {
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
                        n.jsx)(c.M5, {
                            children: (0,
                            n.jsx)(x.zF, {
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
                        n.jsx)(c.M5, {
                            children: (0,
                            n.jsx)(x.zF, {
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
                        n.jsx)(c.M5, {
                            children: (0,
                            n.jsx)(x.zF, {
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
            let {source: t} = e
              , r = t.parameter
              , i = r.mainText;
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
                    n.jsx)(x.J$, {
                        src: i
                    })
                })]
            })
        }
          , C = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.parameter
              , l = i.mainText
              , a = t.audio;
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
                    n.jsx)(x.J$, {
                        src: l
                    })
                }), a && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.M5, {
                        children: (0,
                        n.jsx)(x.zF, {
                            src: a,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                })]
            })
        }
          , k = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.parameter
              , l = i.mainText.replaceAll("\n", "<br/>")
              , a = t.audio;
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
                    n.jsx)(x.J$, {
                        src: l
                    })
                }), a && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.M5, {
                        children: (0,
                        n.jsx)(x.zF, {
                            src: a,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                })]
            })
        }
          , I = e => {
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
                    n.jsx)(x.J$, {
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
                    n.jsx)(x.J$, {
                        src: i
                    })]
                })]
            })
        }
          , O = e => {
            let {source: t, isSpeaking: r} = e
              , {parameter: i} = t
              , l = t.audio
              , {targetWord: a, partOfSpeech: s, variantForm: o, baseForm: d, wordUsageAndMeaning: u} = i
              , p = a.split(" ").length;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "熟語" === s || "名詞" === s && p >= 3 ? "語句を並べかえて次の英語を完成させましょう。" : "文字を並べかえて次の英語を完成させましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
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
                    n.jsx)(c.M5, {
                        children: (0,
                        n.jsx)(x.zF, {
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
              , r = t.parameter.html || "<h2>no content</h2>";
            return (0,
            n.jsx)("div", {
                className: "question-area",
                style: {
                    fontSize: "20px"
                },
                children: (0,
                n.jsx)(x.J$, {
                    src: r
                })
            })
        }
          , _ = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, a = i.questionWordPronunciation, s = i.example, o = i.grade;
            switch (o) {
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
            let c = s.replace(l, "<u>".concat(a, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: c
                    })
                })]
            })
        }
          , N = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, a = i.questionWordPronunciation, s = i.example, o = i.grade;
            switch (o) {
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
            let c = s.replace(l, "<u>".concat(a, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: c
                    })
                })]
            })
        }
          , R = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, a = i.example, s = i.grade;
            switch (s) {
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
            let o = a.replace(l, "<u>".concat(l, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: o
                    })
                })]
            })
        }
          , L = e => {
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
              , p = t.largeImages
              , h = t.audio;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), s.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), h && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.M5, {
                        children: (0,
                        n.jsx)(x.zF, {
                            src: h,
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
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t))), 0 !== p.length && (0,
                n.jsx)("div", {
                    className: "image-area",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: p.map( (e, t) => (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-large"
                        }), (0,
                        n.jsx)(x.hu, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-medium"
                        }), (0,
                        n.jsx)(x.hu, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-small"
                        }), (0,
                        n.jsx)(x.hu, {
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
        var E = r(34774)
          , D = r(57455)
          , Z = r(71608)
          , T = r(92260);
        let M = a.memo(e => {
            let {width: t, height: r, isTouchScroll: i, isScaling: a, selectedTool: s, stageRef: o} = e
              , c = (0,
            l.Dv)(T.kQ)
              , d = (0,
            l.Dv)(T.$p)
              , u = (0,
            Z.R3)()
              , x = "StartFromReplay" === d && (null == c ? void 0 : c.args.memo) !== void 0
              , p = "landscape" === u;
            return (0,
            n.jsx)(n.Fragment, {
                children: x ? (0,
                n.jsx)(D.eL, {
                    src: null == c ? void 0 : c.args.memo,
                    width: t,
                    height: p ? r + 480 : a ? r + 480 : r,
                    isTouchScroll: i
                }) : (0,
                n.jsx)(D.je, {
                    tool: s,
                    width: t,
                    height: p ? r + 480 : a ? r + 480 : r,
                    isTouchScroll: i,
                    stageRef: o
                })
            })
        }
        );
        M.displayName = "ViewArea";
        var W = r(76421);
        let z = a.memo(e => {
            let {answerMode: t, width: r, stageRef: i} = e
              , a = (0,
            l.Dv)(T.As)
              , {getQuestionSource: s} = (0,
            W.z)()
              , o = (0,
            Z.R3)()
              , c = s();
            return void 0 === c ? (0,
            n.jsx)(n.Fragment, {
                children: "未確認のQP"
            }) : (0,
            n.jsx)(q, {
                question: c,
                selectedTool: "Answered" === t ? void 0 : a,
                width: r,
                isMemoExpand: "portrait" === o,
                isTouchScroll: "Answered" === t,
                stageRef: i
            })
        }
        );
        z.displayName = "QuestionPanel";
        let q = e => {
            let {question: t, selectedTool: r, width: x, isMemoExpand: p, isTouchScroll: h, stageRef: m} = e
              , g = (0,
            l.b9)(T.As)
              , v = (0,
            l.b9)(E.Y)
              , f = (0,
            l.b9)(E.u)
              , b = (0,
            l.Dv)(T.iX)
              , [j,w] = (0,
            a.useState)(!1)
              , {elementRef: S, elementSize: y} = (0,
            o.yU)()
              , C = (0,
            Z.R3)()
              , {sendOpenMemoOnReplay: k} = H()
              , I = (0,
            a.useCallback)( () => {
                w(e => {
                    let t = !e;
                    return t && g("pen"),
                    t
                }
                ),
                k()
            }
            , [k, g])
              , O = (0,
            a.useCallback)(e => {
                v(e),
                f(!0)
            }
            , [v, f]);
            return (0,
            n.jsxs)(i.Z, {
                ref: S,
                position: "relative",
                width: x,
                height: "fit-content",
                minHeight: "100%",
                pb: "landscape" === C ? 60 : j ? 60 : 0,
                bgcolor: d.O9.surface,
                border: "1px solid ".concat(d.O9.onSurfaceWeak3),
                borderRadius: 2,
                overflow: "hidden",
                children: [u({
                    question: t,
                    isSpeaking: b,
                    showImageDialog: O
                }), p && (0,
                n.jsxs)(c.X2, {
                    position: "relative",
                    width: 64,
                    height: 32,
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 1,
                    ml: 1,
                    bgcolor: d.O9.onSurfaceWeak4,
                    borderRadius: 2,
                    sx: {
                        cursor: "pointer"
                    },
                    zIndex: 1,
                    onClick: I,
                    children: [(0,
                    n.jsx)(s.YS, {
                        name: "memo",
                        size: 24,
                        color: "onSurface"
                    }), (0,
                    n.jsx)(s.YS, {
                        name: j ? "angleUp" : "angleDown",
                        size: 24,
                        color: "onSurface"
                    })]
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    children: (0,
                    n.jsx)(M, {
                        width: y.width,
                        height: y.height,
                        isTouchScroll: h,
                        isScaling: j,
                        selectedTool: r,
                        stageRef: m
                    })
                })]
            })
        }
          , H = () => {
            var e, t;
            let r = (0,
            l.Dv)(T.mv)
              , n = r.code
              , i = (0,
            l.Dv)(T.dx)
              , a = null !== (e = null == i ? void 0 : i.id) && void 0 !== e ? e : 0
              , s = null !== (t = null == i ? void 0 : i.contentResource.answer.name) && void 0 !== t ? t : "unknown"
              , c = (0,
            l.Dv)(T.$p)
              , d = "StartFromReplay" === c
              , {analyticsEvent: u} = (0,
            o.WS)()
              , x = () => {
                d && u({
                    eventName: "解答リプレイ「メモを開く」クリック",
                    params: {
                        courseCode: n,
                        programId: a,
                        ap: s
                    }
                })
            }
            ;
            return {
                sendOpenMemoOnReplay: x
            }
        }
        ;
        var J = r(47986)
          , P = r(73935)
          , F = r(15103);
        let V = (0,
        F.cn)(void 0)
          , $ = (0,
        F.cn)("1to1")
          , B = (0,
        F.cn)(!1)
          , X = (0,
        F.cn)(0);
        var G = r(65976)
          , K = r(67720)
          , U = r(40021)
          , Y = r(86886)
          , Q = r(3804)
          , ee = r(25675)
          , et = r.n(ee)
          , er = r(15995)
          , en = r(68595);
        let ei = e => {
            let {index: t, mode: r} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(el, {
                    index: t
                });
            case "Other":
                return (0,
                n.jsx)(ea, {
                    index: t
                });
            case "Correct":
                return (0,
                n.jsx)(es, {
                    index: t
                });
            case "Incorrect":
                return (0,
                n.jsx)(eo, {
                    index: t
                })
            }
        }
          , el = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.Z, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.O9.surface,
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
                n.jsx)(en.x, {
                    color: "onSurface",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , ea = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.Z, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.O9.surface,
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
                n.jsx)(en.x, {
                    color: "onSurfaceWeak1",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , es = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.Z, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.O9.surface,
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
                n.jsx)(en.x, {
                    color: "correct",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , eo = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.Z, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.O9.surface,
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
                n.jsx)(en.x, {
                    color: "important",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , ec = e => {
            let {index: t, width: r, height: i, qml: l, mode: a, onClick: s} = e;
            switch (a) {
            case "Active":
                return (0,
                n.jsx)(eu, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: s
                });
            case "Other":
                return (0,
                n.jsx)(ex, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: s
                });
            case "Correct":
                return (0,
                n.jsx)(ep, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: s
                });
            case "Incorrect":
                return (0,
                n.jsx)(eh, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: s
                })
            }
        }
          , ed = e => {
            let {src: t} = e
              , r = (0,
            er.S)();
            return "".concat(r, "/lem/v1").concat(t)
        }
          , eu = e => {
            let {index: t, width: r, height: l, qml: a, onClick: s} = e;
            return (0,
            n.jsx)(Q.Z, {
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderRadius: 4
                }],
                onClick: s,
                children: (0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(ei, {
                        index: t,
                        mode: "Active"
                    }), (0,
                    n.jsx)(et(), {
                        loader: ed,
                        src: a,
                        alt: "",
                        fill: !0,
                        sizes: "100%",
                        style: {
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                })
            })
        }
          , ex = e => {
            let {index: t, width: r, height: l, qml: a} = e;
            return (0,
            n.jsx)(Q.Z, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderRadius: 4
                }],
                children: (0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(ei, {
                        index: t,
                        mode: "Other"
                    }), (0,
                    n.jsx)(et(), {
                        loader: ed,
                        src: a,
                        alt: "",
                        fill: !0,
                        sizes: "100%",
                        style: {
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                })
            })
        }
          , ep = e => {
            let {index: t, width: r, height: l, qml: a} = e;
            return (0,
            n.jsxs)(Q.Z, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.O9.correctWeak,
                    borderRadius: 4
                }],
                children: [(0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(ei, {
                        index: t,
                        mode: "Correct"
                    }), (0,
                    n.jsx)(et(), {
                        loader: ed,
                        src: a,
                        alt: "",
                        fill: !0,
                        sizes: "100%",
                        style: {
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 4,
                    left: 4,
                    zIndex: 1,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionO",
                        width: 40,
                        height: 40
                    })
                })]
            })
        }
          , eh = e => {
            let {index: t, width: r, height: l, qml: a} = e;
            return (0,
            n.jsxs)(Q.Z, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.O9.importantWeak,
                    borderRadius: 4
                }],
                children: [(0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(ei, {
                        index: t,
                        mode: "Incorrect"
                    }), (0,
                    n.jsx)(et(), {
                        loader: ed,
                        src: a,
                        alt: "",
                        fill: !0,
                        sizes: "100%",
                        style: {
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 4,
                    left: 4,
                    zIndex: 1,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionX",
                        width: 40,
                        height: 40
                    })
                })]
            })
        }
          , em = e => {
            let {items: t, orientation: r} = e;
            if (0 === t.length)
                return null;
            switch (r) {
            case "landscape":
                return (0,
                n.jsx)(Y.ZP, {
                    container: !0,
                    rowSpacing: 2,
                    columnSpacing: {
                        xs: 2
                    },
                    children: t.map( (e, t) => (0,
                    n.jsx)(Y.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0,
                        n.jsx)(ec, {
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
                    n.jsx)(c.X2, {
                        gap: 2,
                        children: t.map( (e, t) => (0,
                        n.jsx)(ec, {
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
          , eg = (0,
        F.cn)([])
          , ev = (0,
        F.cn)({
            id: 0,
            url: "",
            index: void 0
        })
          , ef = (0,
        F.cn)(void 0)
          , eb = () => {
            let e = (0,
            l.Dv)(eg)
              , t = (0,
            l.Dv)(ev)
              , r = (0,
            l.Dv)(ef)
              , i = (0,
            Z.R3)();
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
              , p = [null == o ? void 0 : o.id, null == u ? void 0 : u.id, null == x ? void 0 : x.id]
              , h = t.filter(e => !p.includes(e.id));
            return (0,
            n.jsxs)(U.s, {
                children: [(0,
                n.jsx)(c.M5, {
                    children: (0,
                    n.jsxs)(c.X2, {
                        width: o ? "50%" : "100%",
                        children: [o && (0,
                        n.jsx)(ec, {
                            index: o.index,
                            width: "100%",
                            height: "landscape" === s ? 200 : 216,
                            qml: o.url,
                            mode: "Correct"
                        }), u && (0,
                        n.jsx)(ec, {
                            index: u.index,
                            width: "100%",
                            height: "landscape" === s ? 200 : 216,
                            qml: u.url,
                            mode: "Correct"
                        }), x && (0,
                        n.jsxs)(a.Fragment, {
                            children: [(0,
                            n.jsx)(c.LZ, {
                                x: 2
                            }), (0,
                            n.jsx)(ec, {
                                index: x.index,
                                width: "100%",
                                height: "landscape" === s ? 200 : 216,
                                qml: x.url,
                                mode: "Incorrect"
                            })]
                        })]
                    })
                }), 0 !== h.length && (0,
                n.jsx)(n.Fragment, {
                    children: "landscape" === s ? (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(K.Z, {
                            orientation: "horizontal",
                            sx: {
                                my: 3,
                                borderColor: d.O9.onSurfaceWeak3
                            }
                        }), (0,
                        n.jsx)(i.Z, {
                            mx: 3,
                            children: (0,
                            n.jsx)(em, {
                                items: h,
                                orientation: s
                            })
                        })]
                    }) : (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(em, {
                            items: h,
                            orientation: s
                        })]
                    })
                })]
            })
        }
        ;
        var ew = r(91082);
        let eS = () => {
            let e = (0,
            a.useCallback)(e => {
                var t, r;
                let n = null !== (t = e.correctItem) && void 0 !== t ? t : new ew.Op
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
            , []);
            return {
                formatDto: e
            }
        }
          , ey = () => {
            let e = (0,
            a.useCallback)( (e, t) => t.id === e.id ? "correct" : "incorrect", []);
            return {
                validate: e
            }
        }
          , eC = () => {
            let e = (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        let t = e.items.map(e => e.itemId)
                          , r = e.items.map(e => e.itemId)
                          , n = t[e.selected];
                        return {
                            order: r,
                            answered: n
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
        ;
        var ek = r(61982);
        let eI = e => {
            let t = (0,
            l.Dv)(eg)
              , r = (0,
            l.b9)(ef)
              , [n,i] = (0,
            a.useState)(t[0])
              , [s,o] = (0,
            a.useState)("")
              , [c,d] = (0,
            a.useState)("incorrect")
              , {validate: u} = ey()
              , x = (0,
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
            , [e, d, u])
              , p = (0,
            a.useCallback)(e => {
                let i = ek.sS.CORRECT
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
            , [t, n, r, s, c]);
            return {
                prepare: x,
                fix: p
            }
        }
          , eO = () => {
            let[e,t] = (0,
            a.useState)()
              , r = (0,
            a.useCallback)(e => t(e), [])
              , n = (0,
            a.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , eA = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(eg)
              , i = (0,
            l.Dv)(ev)
              , a = (0,
            Z.R3)();
            return (0,
            n.jsx)(e_, {
                selectables: r,
                correct: i,
                orientation: a,
                onAnswered: t
            })
        }
          , e_ = e => {
            let {selectables: t, correct: r, orientation: l, onAnswered: s} = e
              , {prepare: o, fix: c} = eI(r)
              , {showing: d, show: u, hide: x} = eO()
              , p = (0,
            a.useCallback)(e => o(e, () => u("correct"), () => u("incorrect")), [o, u])
              , h = (0,
            a.useCallback)( () => {
                c(s),
                x()
            }
            , [c, x, s]);
            return (0,
            n.jsxs)(i.Z, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)(Y.ZP, {
                    container: !0,
                    rowSpacing: 2,
                    columnSpacing: {
                        xs: 2
                    },
                    children: t.map( (e, t) => (0,
                    n.jsx)(Y.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0,
                        n.jsx)(ec, {
                            index: e.index,
                            width: "100%",
                            height: 216,
                            qml: e.url,
                            mode: "Active",
                            onClick: () => p(e)
                        })
                    }, t))
                }), d && (0,
                n.jsx)(D.GI, {
                    result: d,
                    portalElem: "portrait" === l ? "body" : G.L,
                    handleOnStop: h
                })]
            })
        }
          , eN = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.b9)(eg)
              , c = (0,
            l.b9)(ev)
              , [d,u] = (0,
            l.KO)(ef)
              , {formatDto: x} = eS()
              , {getViewState: p} = eC();
            return ((0,
            a.useEffect)( () => {
                let {selectables: e, correct: n} = x(t);
                if (r) {
                    let t = p(r);
                    o(e),
                    c(n),
                    u(e.find(e => e.id === t.answered));
                    return
                }
                o(e),
                c(n),
                u(void 0)
            }
            , [t, x, p, r, u, c, o]),
            d) ? (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(eb, {})
            }) : (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(eA, {
                    onAnswered: s
                })
            })
        }
        ;
        var eR = r(76636)
          , eL = r(26008)
          , eE = r(5834);
        let eD = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(s.xv, {
                color: "correct",
                size: "lg",
                padding: "0 24px",
                children: t
            })
        }
          , eZ = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(s.xv, {
                color: "important",
                size: "lg",
                padding: "0 24px",
                children: t
            })
        }
          , eT = (0,
        F.cn)([])
          , eM = (0,
        F.cn)(void 0)
          , eW = (0,
        F.cn)(void 0)
          , ez = (0,
        F.cn)({
            label: "",
            suffix: "",
            useLatexInLabel: !1,
            useLatexInSuffix: !1
        })
          , eq = () => {
            let e = (0,
            l.Dv)(ez)
              , t = (0,
            l.Dv)(eW)
              , r = (0,
            l.Dv)(eT)
              , i = (0,
            l.Dv)(eM)
              , a = (0,
            Z.R3)();
            return void 0 === i ? null : (0,
            n.jsx)(eH, {
                placeHolder: e,
                modelAnswer: t,
                correct: r,
                answered: i,
                orientation: a
            })
        }
          , eH = e => {
            let {placeHolder: t, modelAnswer: r, correct: i, answered: l, orientation: a} = e
              , {convertInputToAnswerText: s} = (0,
            Z.gH)()
              , o = i.map(e => ({
                ...e,
                value: s(e.value)
            }))
              , d = o.find(e => "text" === e.case ? e.value === l : RegExp(e.value).test(l));
            switch (a) {
            case "landscape":
                return (0,
                n.jsxs)(c.sg, {
                    height: "100%",
                    children: [(0,
                    n.jsx)(c.M5, {
                        height: "100%",
                        minHeight: 48,
                        children: (0,
                        n.jsx)(et(), {
                            src: (0,
                            eE.n)("png/illust_keyboard.png"),
                            width: 269,
                            height: 108,
                            alt: ""
                        })
                    }), d ? (0,
                    n.jsx)(eJ, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    }) : (0,
                    n.jsx)(eP, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    })]
                });
            case "portrait":
                return (0,
                n.jsx)(c.sg, {
                    children: d ? (0,
                    n.jsx)(eJ, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    }) : (0,
                    n.jsx)(eP, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    })
                })
            }
        }
          , eJ = e => {
            let {answered: t, placeHolder: r, modelAnswer: i} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(D.sR, {
                    mode: "Correct",
                    value: t,
                    placeHolder: r
                }), void 0 !== i && i !== t && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsx)(eD, {
                        text: i
                    })]
                })]
            })
        }
          , eP = e => {
            let {answered: t, placeHolder: r, modelAnswer: i} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(D.sR, {
                    mode: "Incorrect",
                    value: t,
                    placeHolder: r
                }), void 0 !== i && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsx)(eZ, {
                        text: i
                    })]
                })]
            })
        }
        ;
        var eF = r(26622);
        let eV = () => {
            let {convertInputToAnswerText: e} = (0,
            Z.gH)()
              , t = (0,
            a.useCallback)(t => {
                var r;
                let n = null !== (r = t.placeHolder) && void 0 !== r ? r : new ew.i
                  , i = t.correctAnswerList.reduce( (t, r) => {
                    if (!r.option.case || !r.option.value)
                        return t;
                    if ("text" === r.option.case) {
                        let n = e(r.option.value);
                        return [...t, {
                            case: "text",
                            value: n
                        }]
                    }
                    return [...t, r.option]
                }
                , []);
                return {
                    placeHolder: n,
                    correct: i
                }
            }
            , [e]);
            return {
                formatDto: t
            }
        }
          , e$ = () => {
            let e = (0,
            a.useCallback)( (e, t) => {
                if (0 === t.length)
                    return "empty";
                if (t.length > 300)
                    return "overflow";
                let r = e.find(e => "text" === e.case ? e.value === t : RegExp(e.value).test(t));
                return r ? "correct" : "incorrect"
            }
            , []);
            return {
                validate: e
            }
        }
          , eB = () => {
            let[e,t] = (0,
            a.useState)()
              , r = (0,
            a.useCallback)(e => t(e), [])
              , n = (0,
            a.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , eX = () => {
            let e = (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        let r = t.text;
                        return {
                            answered: r
                        }
                    }(0, r.apViewState);
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , eG = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => t(!0), [])
              , n = (0,
            a.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , eK = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => t(!0), [])
              , n = (0,
            a.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , eU = e => {
            let t = (0,
            l.b9)(eM)
              , [r,n] = (0,
            a.useState)("")
              , [i,s] = (0,
            a.useState)(0)
              , [o,c] = (0,
            a.useState)("incorrect")
              , {convertInputToAnswerText: d} = (0,
            Z.gH)()
              , {validate: u} = e$()
              , x = (0,
            a.useCallback)( (t, l, a, o, x, p) => {
                let h = d(r)
                  , m = e.map(e => ({
                    ...e,
                    value: d(e.value)
                }))
                  , g = u(m, h);
                if ("overflow" === g) {
                    t();
                    return
                }
                if ("empty" === g) {
                    p ? x() : l();
                    return
                }
                if ("incorrect" === g && 0 === i) {
                    s(1),
                    o();
                    return
                }
                switch (g) {
                case "correct":
                    a();
                    break;
                case "incorrect":
                    x()
                }
                c(g),
                n(h)
            }
            , [d, e, r, u, i])
              , p = (0,
            a.useCallback)(e => {
                let n = ek.sS.CORRECT
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
                fix: p
            }
        }
          , eY = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(eT)
              , i = (0,
            l.Dv)(ez)
              , a = (0,
            Z.R3)();
            return (0,
            n.jsx)(eQ, {
                correct: r,
                placeHolder: i,
                onAnswered: t,
                orientation: a
            })
        }
          , eQ = e => {
            let {correct: t, placeHolder: r, orientation: l, onAnswered: o} = e
              , {input: d, setInput: u, prepare: x, fix: p} = eU(t)
              , {showing: h, show: m, hide: g} = eB()
              , {show: v, hide: f, visibled: b} = eK()
              , {show: j, hide: w, visibled: S} = eG()
              , y = (0,
            a.useCallback)(e => {
                x(j, v, () => m("correct"), () => m("redo"), () => m("incorrect"), e)
            }
            , [x, v, j, m])
              , C = (0,
            a.useCallback)( () => y(!1), [y])
              , k = (0,
            a.useCallback)( () => {
                p(o),
                g()
            }
            , [p, g, o])
              , I = (0,
            a.useCallback)( () => {
                f(),
                y(!0)
            }
            , [f, y]);
            switch (l) {
            case "landscape":
                return (0,
                n.jsxs)(c.sg, {
                    height: "100%",
                    children: [(0,
                    n.jsx)(c.M5, {
                        height: "100%",
                        minHeight: 140,
                        children: (0,
                        n.jsx)(et(), {
                            src: (0,
                            eE.n)("png/illust_keyboard.png"),
                            width: 269,
                            height: 108,
                            alt: ""
                        })
                    }), (0,
                    n.jsxs)(c.sg, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 1
                        }), (0,
                        n.jsx)(D.sR, {
                            mode: "Default",
                            value: d,
                            placeHolder: r,
                            onChange: u
                        }), (0,
                        n.jsx)(c.LZ, {
                            y: 6
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "flex-end",
                            children: (0,
                            n.jsx)(s.Vy, {
                                text: "解答する",
                                disabled: void 0 !== h,
                                onClick: C
                            })
                        })]
                    }), h && (0,
                    n.jsx)(i.Z, {
                        sx: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        },
                        children: (0,
                        n.jsx)(D.GI, {
                            result: h,
                            handleOnStop: "redo" === h ? g : k
                        })
                    }), (0,
                    n.jsx)(eF.Ux, {
                        isOpen: S,
                        onClick: w
                    }), (0,
                    n.jsx)(eF.eN, {
                        isOpen: b,
                        onClickCancel: f,
                        onClickAnswer: I
                    })]
                });
            case "portrait":
                return (0,
                n.jsxs)(c.sg, {
                    children: [(0,
                    n.jsxs)(c.sg, {
                        children: [(0,
                        n.jsx)(D.sR, {
                            mode: "Default",
                            value: d,
                            placeHolder: r,
                            onChange: u
                        }), (0,
                        n.jsx)(c.LZ, {
                            y: 5
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "flex-end",
                            children: (0,
                            n.jsx)(s.Vy, {
                                text: "解答する",
                                disabled: void 0 !== h,
                                onClick: C
                            })
                        })]
                    }), h && (0,
                    n.jsx)(D.GI, {
                        result: h,
                        portalElem: "portrait" === l ? "body" : G.L,
                        handleOnStop: "redo" === h ? g : k
                    }), (0,
                    n.jsx)(eF.Ux, {
                        isOpen: S,
                        onClick: w
                    }), (0,
                    n.jsx)(eF.eN, {
                        isOpen: b,
                        onClickCancel: f,
                        onClickAnswer: I
                    })]
                })
            }
        }
          , e0 = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.b9)(eT)
              , c = (0,
            l.b9)(eW)
              , d = (0,
            l.b9)(ez)
              , [u,x] = (0,
            l.KO)(eM)
              , {formatDto: p} = eV()
              , {getViewState: h} = eX()
              , m = (0,
            Z.R3)()
              , {windowHeight: g} = (0,
            eR.A)();
            if ((0,
            a.useEffect)( () => {
                let {placeHolder: e, correct: n} = p(t);
                if (r) {
                    let i = h(t, r);
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
            , [t, r, p, h, x, o, c, d]),
            (0,
            a.useEffect)( () => () => {
                x(void 0)
            }
            , [x]),
            void 0 !== u)
                switch (m) {
                case "landscape":
                    return (0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        height: g - eL.J9 - 18,
                        pt: 1,
                        pr: 2,
                        pb: 12,
                        pl: 2,
                        children: (0,
                        n.jsx)(eq, {})
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        height: "100%",
                        pt: 4,
                        pr: 2,
                        pb: 4,
                        pl: 2,
                        children: (0,
                        n.jsx)(eq, {})
                    })
                }
            else
                switch (m) {
                case "landscape":
                    return (0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        height: g - eL.J9 - 18,
                        pt: 1,
                        pr: 2,
                        pb: 2,
                        pl: 2,
                        children: (0,
                        n.jsx)(eY, {
                            onAnswered: s
                        })
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        height: "100%",
                        pt: 4,
                        pr: 2,
                        pb: 2,
                        pl: 2,
                        children: (0,
                        n.jsx)(eY, {
                            onAnswered: s
                        })
                    })
                }
        }
          , e1 = e => {
            let {items: t} = e
              , r = "他の選択肢"
              , l = 16 * r.length;
            return (0,
            n.jsxs)(c.X2, {
                gap: 2,
                children: [(0,
                n.jsx)(i.Z, {
                    minWidth: l,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(s.xv, {
                        color: "onSurfaceWeak1",
                        fontWeight: "bold",
                        children: r
                    })
                }), (0,
                n.jsx)(K.Z, {
                    orientation: "vertical",
                    variant: "middle",
                    flexItem: !0,
                    sx: {
                        borderColor: d.O9.onSurfaceWeak3,
                        my: 0
                    }
                }), (0,
                n.jsx)(c.X2, {
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    children: t.map( (e, t) => (0,
                    n.jsx)(x.J$, {
                        src: e.text,
                        style: {
                            fontSize: 16,
                            color: d.O9.onSurface,
                            display: "flex",
                            alignItems: "flex-end"
                        }
                    }, t))
                })]
            })
        }
          , e2 = e => {
            let {mode: t} = e
              , r = "";
            switch (t) {
            case "on":
                r = (0,
                eE.n)("png/icon_check_select_multi_on.png");
                break;
            case "off":
                r = (0,
                eE.n)("png/icon_check_select_multi_off.png");
                break;
            case "disabled":
                r = (0,
                eE.n)("png/icon_check_select_multi_disable.png")
            }
            return (0,
            n.jsx)("img", {
                src: r,
                width: 24,
                height: 24,
                alt: ""
            })
        }
          , e4 = e => {
            let {qml: t, mode: r, onClick: i} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(e9, {
                    qml: t,
                    onClick: i
                });
            case "Selected":
                return (0,
                n.jsx)(e8, {
                    qml: t,
                    onClick: i
                });
            case "Correct":
                return (0,
                n.jsx)(e3, {
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
          , e9 = e => {
            let {qml: t, onClick: r} = e;
            return (0,
            n.jsxs)(s.Xd, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "off"
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface
                    },
                    weight: "bold"
                })]
            })
        }
          , e8 = e => {
            let {qml: t, onClick: r} = e;
            return (0,
            n.jsxs)(s.Xd, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    backgroundColor: d.O9.primaryWeak1,
                    border: 2,
                    borderColor: d.O9.primary,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface
                    },
                    weight: "bold"
                })]
            })
        }
          , e3 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(s.Xd, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                disabled: !0,
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "off"
                    })
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "8",
                    left: "16px",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , e5 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(s.Xd, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                disabled: !0,
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "8",
                    left: "16px",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , e6 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(s.Xd, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.importantWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 8,
                    left: 16,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.important
                    },
                    weight: "bold"
                })]
            })
        }
          , e7 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(s.Xd, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: (0,
                    d.NH)("onSurface", "disabledBackground"),
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "disabled"
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: (0,
                        d.NH)("onSurface", "disabled")
                    },
                    weight: "bold"
                })]
            })
        }
          , te = (0,
        F.cn)([])
          , tt = (0,
        F.cn)([])
          , tr = (0,
        F.cn)(void 0)
          , tn = (0,
        F.cn)(!1)
          , ti = () => {
            let e = (0,
            l.Dv)(te)
              , t = (0,
            l.Dv)(tt)
              , r = (0,
            l.Dv)(tr);
            return r ? (0,
            n.jsx)(tl, {
                selectables: e,
                correct: t,
                answered: r
            }) : null
        }
          , tl = e => {
            let {selectables: t, correct: r, answered: i} = e
              , l = r.filter(e => !i.find(t => t.id === e.id))
              , a = r.filter(e => i.find(t => t.id === e.id))
              , s = i.filter(e => !r.find(t => e.id === t.id))
              , o = t.filter(e => !(l.find(t => t.id === e.id) || a.find(t => t.id === e.id) || s.find(t => t.id === e.id)));
            return (0,
            n.jsxs)(U.s, {
                gap: 3,
                children: [(0,
                n.jsxs)(U.s, {
                    gap: 2,
                    children: [l.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e4, {
                            qml: e.text,
                            mode: "Correct"
                        }, e.id)
                    })), a.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e4, {
                            qml: e.text,
                            mode: "SelectedCorrect"
                        }, e.id)
                    })), s.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e4, {
                            qml: e.text,
                            mode: "Incorrect"
                        }, e.id)
                    }))]
                }), 0 !== o.length && (0,
                n.jsx)(e1, {
                    items: o
                })]
            })
        }
          , ta = e => {
            let {isOpen: t, onClose: r} = e;
            return (0,
            n.jsx)(s.Vq, {
                isOpen: t,
                title: "解答が足りません",
                body: "指定された数だけ選択してください。",
                actions: (0,
                n.jsx)(s.Qd, {
                    label: "OK",
                    color: "primary",
                    onClick: r
                }),
                onClose: r
            })
        }
        ;
        var ts = r(3592);
        let to = () => {
            let e = (0,
            a.useCallback)(e => {
                let t = e.itemList.map(e => {
                    let t = (0,
                    ts.Y)(e.text);
                    return {
                        id: e.itemId,
                        text: t
                    }
                }
                );
                e.shouldShuffle && t.sort( () => .5 - Math.random());
                let r = e.correctItemList.map(e => {
                    let t = (0,
                    ts.Y)(e.text);
                    return {
                        id: e.itemId,
                        text: t
                    }
                }
                )
                  , n = e.selectionCountDesignated;
                return {
                    selectables: t,
                    correct: r,
                    fullSelectRequired: n
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , tc = () => {
            let e = (0,
            a.useCallback)( (e, t) => {
                if (0 === t.length)
                    return "empty";
                let r = e.map(e => e.id).sort()
                  , n = t.map(e => e.id).sort()
                  , i = n.length === r.length && r.every( (e, t) => e === n[t]);
                return i ? "correct" : "incorrect"
            }
            , []);
            return {
                validate: e
            }
        }
          , td = () => {
            let[e,t] = (0,
            a.useState)()
              , r = (0,
            a.useCallback)(e => t(e), [])
              , n = (0,
            a.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , tu = () => {
            let e = (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        let t = e.itemList.map(e => e.itemId)
                          , r = e.itemList.filter(e => e.selected).map(e => e.itemId);
                        return {
                            order: t,
                            answered: r
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , tx = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => t(!0), [])
              , n = (0,
            a.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , tp = (e, t, r) => {
            let n = (0,
            l.Dv)(te)
              , i = (0,
            l.b9)(tr)
              , [s,o] = (0,
            a.useState)("")
              , [c,d] = (0,
            a.useState)(e)
              , [u,x] = (0,
            a.useState)(0)
              , [p,h] = (0,
            a.useState)("incorrect")
              , {validate: m} = tc()
              , g = (0,
            a.useCallback)(e => {
                let t = void 0 !== c.find(t => t.id === e.id);
                t ? d(c.filter(t => t.id !== e.id)) : d(c.concat([e]))
            }
            , [c, d])
              , v = (0,
            a.useCallback)(e => void 0 !== c.find(t => t.id === e.id), [c])
              , f = (0,
            a.useCallback)( () => !r || c.length < t.length, [t.length, r, c.length])
              , b = (0,
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
                h(a)
            }
            , [t, r, c, x, m, u])
              , j = (0,
            a.useCallback)(e => {
                let t = {
                    order: n.map(e => e.id),
                    answered: c.map(e => e.id)
                }
                  , r = ek.sS.CORRECT
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
            , [n, c, i, s, p, u]);
            return {
                toggle: g,
                isSelected: v,
                isSelectable: f,
                prepare: b,
                fix: j
            }
        }
          , th = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(te)
              , i = (0,
            l.Dv)(tn)
              , a = (0,
            l.Dv)(tt)
              , s = (0,
            Z.R3)();
            return (0,
            n.jsx)(tm, {
                selectables: r,
                selecting: [],
                fullSelectRequired: i,
                correct: a,
                orientation: s,
                onAnswered: t
            })
        }
          , tm = e => {
            let {selectables: t, selecting: r, fullSelectRequired: l, correct: o, orientation: c, onAnswered: d} = e
              , {toggle: u, isSelected: x, isSelectable: p, prepare: h, fix: m} = tp(r, o, l)
              , {showing: g, show: v, hide: f} = td()
              , {show: b, hide: j, visibled: w} = tx()
              , S = (0,
            a.useCallback)( () => {
                h( () => b(), () => v("correct"), () => v("redo"), () => v("incorrect"))
            }
            , [b, v, h])
              , y = (0,
            a.useCallback)( () => {
                m(d),
                f()
            }
            , [m, d, f]);
            return (0,
            n.jsxs)(i.Z, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsxs)(U.s, {
                    width: "100%",
                    gap: 4,
                    children: [(0,
                    n.jsx)(U.s, {
                        gap: 2,
                        children: t.map( (e, t) => {
                            let r = x(e);
                            return (0,
                            n.jsx)(e4, {
                                qml: e.text,
                                mode: r ? "Selected" : p() ? "Active" : "Disabled",
                                onClick: () => u(e)
                            }, t)
                        }
                        )
                    }), (0,
                    n.jsx)(i.Z, {
                        alignSelf: "flex-end",
                        children: (0,
                        n.jsx)(s.Vy, {
                            text: "解答する",
                            disabled: void 0 !== g,
                            onClick: S
                        })
                    })]
                }), g && (0,
                n.jsx)(D.GI, {
                    result: g,
                    portalElem: "portrait" === c ? "body" : G.L,
                    handleOnStop: "redo" === g ? f : y
                }), (0,
                n.jsx)(ta, {
                    isOpen: w,
                    onClose: j
                })]
            })
        }
          , tg = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.b9)(te)
              , c = (0,
            l.b9)(tt)
              , d = (0,
            l.b9)(tn)
              , [u,x] = (0,
            l.KO)(tr)
              , {formatDto: p} = to()
              , {getViewState: h} = tu();
            return ((0,
            a.useEffect)( () => {
                let {selectables: e, correct: n, fullSelectRequired: i} = p(t);
                if (r) {
                    let t = h(r);
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
            , [t, p, h, r, x, c, d, o]),
            u) ? (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(ti, {})
            }) : (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(th, {
                    onAnswered: s
                })
            })
        }
          , tv = e => {
            let {mode: t, modelAnswer: r, recognitionMode: i} = e;
            switch (t) {
            case "Correct":
                return (0,
                n.jsx)(tf, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(tb, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            default:
                return (0,
                n.jsx)(n.Fragment, {})
            }
        }
          , tf = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.correct,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(s.xv, {
                    size: "lg",
                    color: "correct",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tb = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.important,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(s.xv, {
                    size: "lg",
                    color: "important",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tj = e => {
            let {mode: t="Default", answeredText: r, recognitionMode: i} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(tw, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                n.jsx)(tS, {
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
          , tw = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(c.sg, {
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.primaryWeak1),
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(s.xv, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tS = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.correctWeak),
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(s.xv, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })]
            })
        }
          , ty = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.importantWeak),
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(s.xv, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })]
            })
        }
          , tC = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: a} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(tk, {
                    width: r,
                    answeredText: i,
                    recognitionMode: a
                });
            case "Correct":
                return (0,
                n.jsx)(tI, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                n.jsx)(tO, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                })
            }
        }
          , tk = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.Z, {
                width: t,
                children: (0,
                n.jsx)(tj, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , tI = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(c.X2, {
                alignItems: "center",
                columnGap: 2,
                children: [(0,
                n.jsx)(i.Z, {
                    width: t,
                    children: (0,
                    n.jsx)(tj, {
                        mode: "Correct",
                        answeredText: r,
                        recognitionMode: a
                    })
                }), r !== l && (0,
                n.jsx)(i.Z, {
                    flexShrink: 0,
                    children: (0,
                    n.jsx)(tv, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , tO = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(c.X2, {
                alignItems: "center",
                columnGap: 2,
                children: [(0,
                n.jsx)(i.Z, {
                    width: t,
                    children: (0,
                    n.jsx)(tj, {
                        mode: "Incorrect",
                        answeredText: r,
                        recognitionMode: a
                    })
                }), l && (0,
                n.jsx)(i.Z, {
                    flexShrink: 0,
                    children: (0,
                    n.jsx)(tv, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , tA = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: a} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(t_, {
                    width: r,
                    answeredText: i,
                    recognitionMode: a
                });
            case "Correct":
                return (0,
                n.jsx)(tN, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                n.jsx)(tR, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                })
            }
        }
          , t_ = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.Z, {
                width: t,
                children: (0,
                n.jsx)(tj, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , tN = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(i.Z, {
                width: t,
                children: [(0,
                n.jsx)(tj, {
                    mode: "Correct",
                    answeredText: r,
                    recognitionMode: a
                }), l && r !== l && (0,
                n.jsx)(c.sg, {
                    height: 72,
                    justifyContent: "center",
                    children: (0,
                    n.jsx)(tv, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , tR = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(i.Z, {
                width: t,
                children: [(0,
                n.jsx)(tj, {
                    mode: "Incorrect",
                    answeredText: r,
                    recognitionMode: a
                }), (0,
                n.jsx)(c.sg, {
                    justifyContent: "center",
                    height: 72,
                    children: l && (0,
                    n.jsx)(tv, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , tL = () => {
            let e = (0,
            l.Dv)(V)
              , t = (0,
            l.Dv)($)
              , r = (0,
            Z.R3)();
            return e ? (0,
            n.jsx)(tE, {
                apData: e,
                answerType: t,
                orientation: r
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , tE = e => {
            let {apData: t, answerType: r, orientation: i} = e;
            switch (r) {
            case "1to1":
                return (0,
                n.jsx)(tD, {
                    apData: t,
                    orientation: i
                });
            case "triple":
                return (0,
                n.jsx)(tZ, {
                    apData: t,
                    orientation: i
                });
            default:
                return null
            }
        }
          , tD = e => {
            var t, r, l, a;
            let {apData: s, orientation: o} = e
              , [d,u] = s;
            if (!d || !u)
                return null;
            let x = tM(d.correct, d.answered)
              , p = tM(u.correct, u.answered)
              , h = "portrait" === o ? 200 : 180;
            return (0,
            n.jsx)(i.Z, {
                display: "flex",
                justifyContent: "center",
                children: (0,
                n.jsxs)(c.sg, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(tT, {
                        mode: x,
                        height: h,
                        placeHolder: d.placeHolder,
                        svg: d.writtenSVG
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.X2, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 2
                        }), (0,
                        n.jsx)(tC, {
                            mode: x,
                            width: 240,
                            answeredText: null !== (l = d.answered) && void 0 !== l ? l : "",
                            modelAnswer: d.modelAnswer,
                            recognitionMode: null === (t = d.recognitionConfig) || void 0 === t ? void 0 : t.mode
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 2
                    }), (0,
                    n.jsx)(tT, {
                        mode: p,
                        height: h,
                        placeHolder: u.placeHolder,
                        svg: u.writtenSVG
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.X2, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 2
                        }), (0,
                        n.jsx)(tC, {
                            mode: p,
                            width: 240,
                            answeredText: null !== (a = u.answered) && void 0 !== a ? a : "",
                            modelAnswer: u.modelAnswer,
                            recognitionMode: null === (r = u.recognitionConfig) || void 0 === r ? void 0 : r.mode
                        })]
                    })]
                })
            })
        }
          , tZ = e => {
            var t, r, l, a, s, o;
            let {apData: d, orientation: u} = e
              , [x,p,h] = d;
            if (!x || !p || !h)
                return null;
            let m = tM(x.correct, x.answered)
              , g = tM(p.correct, p.answered)
              , v = tM(h.correct, h.answered)
              , f = "portrait" === u ? 200 : "100%";
            return (0,
            n.jsx)(c.sg, {
                height: "100%",
                children: (0,
                n.jsxs)(c.sg, {
                    width: "100%",
                    maxWidth: 712,
                    height: "100%",
                    alignSelf: "center",
                    children: [(0,
                    n.jsxs)(c.X2, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(tT, {
                                mode: m,
                                height: f,
                                placeHolder: x.placeHolder,
                                svg: x.writtenSVG
                            })
                        }), (0,
                        n.jsx)(c.LZ, {
                            x: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(tT, {
                                mode: g,
                                height: f,
                                placeHolder: p.placeHolder,
                                svg: p.writtenSVG
                            })
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 2
                    }), (0,
                    n.jsxs)(c.X2, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            display: "flex",
                            justifyContent: "center",
                            children: (0,
                            n.jsxs)(c.sg, {
                                gap: 1,
                                children: [(0,
                                n.jsxs)(c.X2, {
                                    gap: 2,
                                    children: [(0,
                                    n.jsx)(tA, {
                                        mode: m,
                                        width: 120,
                                        answeredText: null !== (a = x.answered) && void 0 !== a ? a : "",
                                        modelAnswer: x.modelAnswer,
                                        recognitionMode: null === (t = x.recognitionConfig) || void 0 === t ? void 0 : t.mode
                                    }), (0,
                                    n.jsx)(tA, {
                                        mode: g,
                                        width: 120,
                                        answeredText: null !== (s = p.answered) && void 0 !== s ? s : "",
                                        modelAnswer: p.modelAnswer,
                                        recognitionMode: null === (r = p.recognitionConfig) || void 0 === r ? void 0 : r.mode
                                    })]
                                }), (0,
                                n.jsx)(i.Z, {
                                    alignSelf: "end",
                                    width: 120,
                                    marginLeft: "auto",
                                    children: (0,
                                    n.jsx)(tA, {
                                        mode: v,
                                        answeredText: null !== (o = h.answered) && void 0 !== o ? o : "",
                                        modelAnswer: h.modelAnswer,
                                        recognitionMode: null === (l = h.recognitionConfig) || void 0 === l ? void 0 : l.mode
                                    })
                                })]
                            })
                        }), (0,
                        n.jsx)(c.LZ, {
                            x: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 12px)",
                            children: (0,
                            n.jsx)(tT, {
                                mode: v,
                                height: f,
                                placeHolder: h.placeHolder,
                                svg: h.writtenSVG
                            })
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: "portrait" === u ? 0 : 11
                    })]
                })
            })
        }
          , tT = e => {
            let {mode: t, height: r, placeHolder: i, svg: l} = e;
            return (0,
            n.jsx)(eF.zh, {
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
          , tM = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , r = e.find(e => "text" === e.case ? e.value === t : RegExp(e.value).test(t));
            return r ? "Correct" : "Incorrect"
        }
          , tW = e => {
            let {children: t, area: r={
                width: "100%",
                height: "100%"
            }, diff: i={
                x: 0,
                y: 0
            }, zIndex: l=1, cursor: s="auto", onPointerUp: o, onPointerDown: c, onPointerMove: d} = e
              , [u,x] = (0,
            a.useState)()
              , p = (0,
            a.useRef)(null)
              , h = (0,
            a.useCallback)(e => {
                if (!p.current)
                    return;
                let {x: t, y: r} = p.current.getBoundingClientRect();
                x({
                    x: e.clientX - t - i.x,
                    y: e.clientY - r - i.y
                })
            }
            , [i])
              , m = (0,
            a.useCallback)(e => {
                h(e),
                null == c || c(e)
            }
            , [h, c])
              , g = (0,
            a.useCallback)(e => {
                h(e),
                null == d || d(e)
            }
            , [h, d]);
            return (0,
            n.jsx)("div", {
                ref: p,
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
          , tz = {
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
          , tq = e => {
            let t = (0,
            a.useMemo)( () => new Event("disconnected"), [])
              , r = (0,
            a.useRef)()
              , n = (0,
            a.useCallback)( () => {
                var t;
                let r = null === (t = e.current) || void 0 === t ? void 0 : t.querySelector('svg[data-layer="MODEL"]');
                if (!r)
                    return "";
                let n = r.cloneNode(!0).outerHTML;
                return n
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
                    null === (i = l.editor) || void 0 === i || i.close();
                    return
                }
                a.send(JSON.stringify({
                    type: "ping"
                })),
                r.current = window.setTimeout( () => {
                    var e, r;
                    null == l || null === (e = l.editor) || void 0 === e || e.clear(),
                    null == l || null === (r = l.editor) || void 0 === r || r.close(),
                    null == l || l.dispatchEvent(t)
                }
                , 5e3)
            }
            , [e, t])
              , l = (0,
            a.useCallback)( () => {
                let t = e.current;
                if (!t)
                    return;
                let n = t.editor.recognizerContext.websocket;
                n.addEventListener("message", e => {
                    var t;
                    let n = null === (t = JSON.parse(e.data)) || void 0 === t ? void 0 : t.type;
                    "pong" === n && clearTimeout(r.current)
                }
                )
            }
            , [e])
              , s = (0,
            a.useCallback)( (e, t) => {
                var r;
                let i = "Math" === t ? e.detail.exports["application/x-latex"] : null === (r = JSON.parse(e.detail.exports["application/vnd.myscript.jiix"])) || void 0 === r ? void 0 : r.label
                  , l = n();
                return {
                    text: i,
                    svg: l
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
                ("close" === l || "timeout" === l) && n.dispatchEvent(t)
            }
            , [e, t])
              , c = (0,
            a.useCallback)(async r => {
                let {mode: n, useLK: i, sk: l} = r
                  , a = e.current;
                if (a && window.iink)
                    try {
                        let e = await (await fetch((0,
                        eE.n)("myscript.json"))).json();
                        window.iink.register(a, {
                            recognitionParams: {
                                type: tz[n].type,
                                protocol: "WEBSOCKET",
                                server: e,
                                iink: {
                                    lang: tz[n].lang,
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
                  , n = [];
                for (let i = 0; i < 36; i++)
                    t.push(e.x + 1 * Math.cos(10 * i * (Math.PI / 180))),
                    r.push(e.y + 1 * Math.sin(10 * i * (Math.PI / 180))),
                    n.push(e.t);
                let i = e.radius - 4;
                for (let l = 0; l < 36; l++)
                    t.push(e.x + i * Math.cos(10 * l * (Math.PI / 180))),
                    r.push(e.y + i * Math.sin(10 * l * (Math.PI / 180))),
                    n.push(e.t);
                return {
                    pointerType: "eraser",
                    pointerId: 1,
                    x: t,
                    y: r,
                    t: n
                }
            }
            , [])
              , u = (0,
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
            , [e, d]);
            return {
                sendPing: i,
                opened: l,
                recognized: s,
                error: o,
                init: c,
                eraseLine: u
            }
        }
          , tH = (0,
        a.forwardRef)( (e, t) => {
            let {width: r, height: i=240, mode: l, recognitionConfig: s, onOpened: o, onRecognizing: c, onRecognized: d, onDisconnected: u} = e
              , [x,p] = (0,
            a.useState)(!1)
              , h = (0,
            a.useMemo)( () => "eraser" === l, [l])
              , {sendPing: m, opened: g, recognized: v, error: f, init: b, eraseLine: j} = tq(t)
              , w = (0,
            a.useCallback)( () => {
                g(),
                null == o || o()
            }
            , [g, o])
              , S = (0,
            a.useCallback)(e => {
                let {text: t, svg: r} = v(e, s.mode);
                d(t, r)
            }
            , [s.mode, v, d])
              , y = (0,
            a.useCallback)(e => {
                p(!0),
                h && j(e, 30)
            }
            , [h, j])
              , C = (0,
            a.useCallback)(e => {
                x && h && j(e, 30)
            }
            , [x, h, j]);
            return (0,
            a.useEffect)( () => {
                let e = t.current;
                if (e)
                    return e.addEventListener("loaded", w),
                    e.addEventListener("exported", S),
                    e.addEventListener("error", f),
                    e.addEventListener("pointerup", m),
                    c && e.addEventListener("pointerdown", c),
                    u && e.addEventListener("disconnected", u),
                    b(s),
                    () => {
                        var t;
                        e.removeEventListener("loaded", w),
                        e.removeEventListener("exported", S),
                        e.removeEventListener("error", f),
                        e.removeEventListener("pointerup", m),
                        c && e.removeEventListener("pointerdown", c),
                        u && e.removeEventListener("disconnected", u),
                        null === (t = e.editor) || void 0 === t || t.close()
                    }
            }
            , [t, s, u, c, w, S, f, m, b]),
            (0,
            a.useEffect)( () => {
                let e = () => p(!1);
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
                n.jsx)(tW, {
                    area: {
                        width: r,
                        height: i
                    },
                    diff: {
                        x: 30,
                        y: 30
                    },
                    zIndex: h ? 21 : 1,
                    cursor: x ? "none" : "auto",
                    onPointerDown: y,
                    onPointerMove: C,
                    children: h && x && (0,
                    n.jsx)(et(), {
                        src: (0,
                        eE.n)("png/icon_eraser_cursor.png"),
                        width: 60,
                        height: 60,
                        alt: "eraser"
                    })
                })]
            })
        }
        );
        tH.displayName = "MyScriptRecognizer";
        let tJ = a.memo(tH);
        var tP = r(16396);
        let tF = () => {
            let[e,t] = (0,
            l.KO)(X)
              , [r,n] = (0,
            a.useState)()
              , i = (0,
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
            , [e, t])
              , s = (0,
            a.useCallback)( () => {
                n(void 0)
            }
            , []);
            return {
                currentPopup: r,
                setPopup: i,
                hidePopup: s
            }
        }
        ;
        var tV = r(35990)
          , t$ = r(15737);
        let tB = () => {
            let {forceReplace: e} = (0,
            t$.qR)()
              , {replace: t} = (0,
            t$.kE)()
              , r = (0,
            a.useCallback)( (e, r, n) => {
                for (let i of r)
                    if ("text" === i.case) {
                        let {result: r, isMatched: l} = t(e, i.value, n);
                        if (l)
                            return r
                    } else if ("regex" === i.case && RegExp(i.value).test(e))
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
                let s = i.replace(/\n/g, "english" === a ? " " : "")
                  , o = r(s, n, a);
                if (o)
                    return {
                        result: "correct",
                        text: o
                    };
                let c = e(s, l, a)
                  , d = n.map(e => e.value)
                  , u = (0,
                tV.r)(a, d, c)
                  , x = r(u, n, a);
                return x ? {
                    result: "correct",
                    text: x
                } : {
                    result: "incorrect",
                    text: u
                }
            }
            , [r, e])
              , i = (0,
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
            , [n]);
            return {
                validate: i,
                validateSingle: n
            }
        }
        ;
        var tX = r(4446);
        let tG = (e, t) => {
            let r = (0,
            l.Dv)(X)
              , n = (0,
            l.b9)(B)
              , i = (0,
            l.b9)(V)
              , [s,o] = (0,
            l.KO)(tX.f)
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
              , [p,h] = (0,
            a.useState)(!1)
              , [m,g] = (0,
            a.useState)(!1)
              , {validate: v, validateSingle: f} = tB()
              , {currentPopup: b, setPopup: j, hidePopup: w} = tF()
              , S = (0,
            a.useMemo)( () => {
                let e = c.some(e => {
                    let {isRecognizing: t} = e;
                    return t
                }
                );
                return e || u
            }
            , [u, c])
              , y = (0,
            a.useCallback)( () => {
                if (s) {
                    g(!0);
                    return
                }
                let t = c.map( (t, r) => {
                    let {answeredText: n} = t;
                    return {
                        text: n,
                        correct: e[r].correct,
                        replaceType: e[r].replaceType,
                        gradeId: e[r].gradeId
                    }
                }
                )
                  , r = v(t);
                "empty" === r ? h(!0) : j(r)
            }
            , [e, s, c, v, j])
              , C = (0,
            a.useCallback)( () => {
                if (w(),
                "redo" === b)
                    return;
                let l = ek.sS.CORRECT
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
            , [e, b, w, t, i, n, c, r])
              , k = (0,
            a.useCallback)( () => {
                h(!1);
                let t = c.map( (t, r) => {
                    let {answeredText: n} = t;
                    return {
                        text: n,
                        correct: e[r].correct,
                        replaceType: e[r].replaceType,
                        gradeId: e[r].gradeId
                    }
                }
                );
                j(v(t))
            }
            , [c, j, v, e])
              , I = (0,
            a.useCallback)( () => {
                h(!1)
            }
            , [])
              , O = (0,
            a.useCallback)(e => {
                d(t => t.map( (t, r) => r === e ? {
                    ...t,
                    isRecognizing: !0
                } : t))
            }
            , [])
              , A = (0,
            a.useCallback)( (t, r, n) => {
                let i = f({
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
            , [e, f])
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
              , N = (0,
            a.useCallback)( () => {
                x(!1)
            }
            , [])
              , R = (0,
            a.useCallback)( () => {
                o(!1),
                g(!1),
                y()
            }
            , [o, y])
              , L = (0,
            a.useCallback)( () => {
                g(!1)
            }
            , []);
            return {
                writingInfos: c,
                isOpenReconnectMessage: u,
                isOpenEmptyAnswerDialog: p,
                isOpenKatexErrorDialog: m,
                currentPopup: b,
                unanswerable: S,
                startAnswerProcess: y,
                endAnswerProcess: C,
                startDialogAnswerProcess: k,
                hidePopup: w,
                hideDialog: I,
                recognizing: O,
                recognized: A,
                disconnected: _,
                reconnect: N,
                handleKatexErrorDialogContinue: R,
                handleKatexErrorDialogClose: L
            }
        }
        ;
        var tK = r(3654);
        let tU = () => {
            let e = (0,
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
                            t$.Cn)(r.value);
                            return [...e, {
                                case: "text",
                                value: t = (0,
                                t$.YA)(t)
                            }]
                        }
                        return [...e, r]
                    }
                    , [])
                      , i = e.interactiveInkSetting
                      , l = i ? (0,
                    eF.Wm)(i) : "Math"
                      , a = e.useLk
                      , s = e.skNameOptional.value
                      , o = (0,
                    tK.a)(e.replaceType)
                      , c = e.gradeId;
                    return {
                        id: t,
                        recognitionConfig: {
                            mode: l,
                            useLK: a,
                            sk: s
                        },
                        placeHolder: null !== (r = e.placeHolder) && void 0 !== r ? r : new ew.i,
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
            , []);
            return {
                formatDto: e
            }
        }
          , tY = () => {
            let e = (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        let r = t.recognizedTexts.map( (e, r) => {
                            let n = t.svgList;
                            return {
                                answered: e,
                                svg: n ? n[r] : ""
                            }
                        }
                        );
                        return {
                            items: r
                        }
                    }(0, r.apViewState);
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , tQ = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(V)
              , i = (0,
            l.Dv)($)
              , a = (0,
            l.Dv)(X)
              , s = (0,
            Z.R3)();
            return r ? (0,
            n.jsx)(t0, {
                apData: r,
                answerType: i,
                wrongCount: a,
                orientation: s,
                onAnswered: t
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , t0 = e => {
            let {apData: t, answerType: r, wrongCount: i, orientation: l, onAnswered: a} = e;
            switch (r) {
            case "1to1":
                return (0,
                n.jsx)(t1, {
                    apData: t,
                    wrongCount: i,
                    orientation: l,
                    onAnswered: a
                });
            case "triple":
                return (0,
                n.jsx)(t2, {
                    apData: t,
                    wrongCount: i,
                    orientation: l,
                    onAnswered: a
                })
            }
        }
          , t1 = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {writingInfos: o, isOpenReconnectMessage: d, isOpenEmptyAnswerDialog: u, isOpenKatexErrorDialog: x, currentPopup: p, unanswerable: h, startAnswerProcess: m, endAnswerProcess: g, startDialogAnswerProcess: v, hidePopup: f, hideDialog: b, recognizing: j, recognized: w, disconnected: S, reconnect: y, handleKatexErrorDialogContinue: C, handleKatexErrorDialogClose: k} = tG(t, l)
              , I = (0,
            a.useCallback)( () => {
                j(0)
            }
            , [j])
              , O = (0,
            a.useCallback)( () => {
                j(1)
            }
            , [j])
              , A = (0,
            a.useCallback)( (e, t) => {
                w(0, e, t)
            }
            , [w])
              , _ = (0,
            a.useCallback)( (e, t) => {
                w(1, e, t)
            }
            , [w])
              , [N,R] = o;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                children: [(0,
                n.jsxs)(c.sg, {
                    width: "100%",
                    maxWidth: 712,
                    alignSelf: "center",
                    children: [(0,
                    n.jsx)(t4, {
                        height: 200,
                        recognitionConfig: N.recognitionConfig,
                        connected: !d,
                        placeHolder: N.placeHolder,
                        recognizing: I,
                        recognized: A,
                        onDisconnected: S
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.X2, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 2
                        }), (0,
                        n.jsx)(tC, {
                            width: 240,
                            answeredText: N.answeredText,
                            recognitionMode: N.recognitionConfig.mode
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 2
                    }), (0,
                    n.jsx)(t4, {
                        height: 200,
                        recognitionConfig: R.recognitionConfig,
                        connected: !d,
                        placeHolder: R.placeHolder,
                        recognizing: O,
                        recognized: _,
                        onDisconnected: S
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.X2, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 2
                        }), (0,
                        n.jsx)(tC, {
                            width: 240,
                            answeredText: R.answeredText,
                            recognitionMode: R.recognitionConfig.mode
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    })]
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 200,
                    height: 72,
                    children: (0,
                    n.jsx)(s.Vy, {
                        text: "解答する",
                        disabled: h,
                        onClick: m
                    })
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: d,
                    y: 24,
                    onClick: y
                }), p && (0,
                n.jsx)(tP.G, {
                    result: p,
                    portalElem: "portrait" === r ? "body" : G.L,
                    handleOnStop: "redo" === p ? f : g
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: u,
                    onClickAnswer: v,
                    onClickCancel: b
                }), (0,
                n.jsx)(eF.Fh, {
                    isOpen: x,
                    title: "読みとれない解答があります",
                    onClickCancel: k,
                    onClickContinue: C,
                    onClose: k
                })]
            })
        }
          , t2 = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {writingInfos: o, isOpenReconnectMessage: d, isOpenEmptyAnswerDialog: u, isOpenKatexErrorDialog: x, currentPopup: p, unanswerable: h, startAnswerProcess: m, endAnswerProcess: g, startDialogAnswerProcess: v, hidePopup: f, hideDialog: b, recognizing: j, recognized: w, disconnected: S, reconnect: y, handleKatexErrorDialogContinue: C, handleKatexErrorDialogClose: k} = tG(t, l)
              , I = (0,
            a.useCallback)( () => {
                j(0)
            }
            , [j])
              , O = (0,
            a.useCallback)( () => {
                j(1)
            }
            , [j])
              , A = (0,
            a.useCallback)( () => {
                j(2)
            }
            , [j])
              , _ = (0,
            a.useCallback)( (e, t) => {
                w(0, e, t)
            }
            , [w])
              , N = (0,
            a.useCallback)( (e, t) => {
                w(1, e, t)
            }
            , [w])
              , R = (0,
            a.useCallback)( (e, t) => {
                w(2, e, t)
            }
            , [w])
              , [L,E,D] = o
              , Z = "portrait" === r
              , T = Z ? 200 : "100%";
            return (0,
            n.jsxs)(c.sg, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.sg, {
                    width: "100%",
                    maxWidth: 712,
                    height: "100%",
                    alignSelf: "center",
                    flex: 1,
                    children: [(0,
                    n.jsxs)(c.X2, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(t4, {
                                height: T,
                                recognitionConfig: L.recognitionConfig,
                                connected: !d,
                                placeHolder: L.placeHolder,
                                recognizing: I,
                                recognized: _,
                                onDisconnected: S
                            })
                        }), (0,
                        n.jsx)(c.LZ, {
                            x: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(t4, {
                                height: T,
                                recognitionConfig: E.recognitionConfig,
                                connected: !d,
                                placeHolder: E.placeHolder,
                                recognizing: O,
                                recognized: N,
                                onDisconnected: S
                            })
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 2
                    }), (0,
                    n.jsxs)(c.X2, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            display: "flex",
                            justifyContent: "center",
                            flex: 1,
                            children: (0,
                            n.jsxs)(c.sg, {
                                gap: 1,
                                children: [(0,
                                n.jsxs)(c.X2, {
                                    gap: 2,
                                    children: [(0,
                                    n.jsx)(tC, {
                                        width: 120,
                                        answeredText: L.answeredText,
                                        recognitionMode: L.recognitionConfig.mode
                                    }), (0,
                                    n.jsx)(tC, {
                                        width: 120,
                                        answeredText: E.answeredText,
                                        recognitionMode: E.recognitionConfig.mode
                                    })]
                                }), (0,
                                n.jsx)(i.Z, {
                                    alignSelf: "end",
                                    width: 120,
                                    marginLeft: "auto",
                                    children: (0,
                                    n.jsx)(tC, {
                                        answeredText: D.answeredText,
                                        recognitionMode: D.recognitionConfig.mode
                                    })
                                })]
                            })
                        }), (0,
                        n.jsx)(c.LZ, {
                            x: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 12px)",
                            children: (0,
                            n.jsx)(t4, {
                                height: T,
                                recognitionConfig: D.recognitionConfig,
                                connected: !d,
                                placeHolder: D.placeHolder,
                                recognizing: A,
                                recognized: R,
                                onDisconnected: S
                            })
                        })]
                    })]
                }), (0,
                n.jsx)(c.LZ, {
                    y: 2
                }), (0,
                n.jsx)(i.Z, {
                    alignSelf: "end",
                    children: (0,
                    n.jsx)(s.Vy, {
                        text: "解答する",
                        disabled: h,
                        onClick: m
                    })
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: d,
                    y: 24,
                    onClick: y
                }), p && (0,
                n.jsx)(tP.G, {
                    result: p,
                    portalElem: Z ? "body" : G.L,
                    handleOnStop: "redo" === p ? f : g
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: u,
                    onClickAnswer: v,
                    onClickCancel: b
                }), (0,
                n.jsx)(eF.Fh, {
                    isOpen: x,
                    title: "読みとれない解答があります",
                    onClickCancel: k,
                    onClickContinue: C,
                    onClose: k
                })]
            })
        }
          , t4 = e => {
            let {height: t, recognitionConfig: r, connected: i, placeHolder: s, recognizing: c, recognized: d, onDisconnected: u} = e
              , x = (0,
            l.Dv)(T.As)
              , p = (0,
            a.useRef)(null)
              , {elementRef: h, elementSize: m} = (0,
            o.yU)()
              , {onPointerDown: g, onPointerUp: v} = (0,
            eF._n)()
              , f = (0,
            a.useCallback)( () => {
                c(),
                g()
            }
            , [c])
              , b = (0,
            a.useCallback)( (e, t) => {
                d(e, t),
                v()
            }
            , [d]);
            return (0,
            n.jsx)(eF.zh, {
                ref: h,
                height: t,
                prefixLabel: s.label,
                suffixLabel: s.suffix,
                useLatexInLabel: s.useLatexInLabel,
                useLatexInSuffix: s.useLatexInSuffix,
                hasBackgroundImage: !1,
                children: i && (0,
                n.jsx)(tJ, {
                    ref: p,
                    width: m.width,
                    height: m.height,
                    mode: "eraser" === x ? "eraser" : "pen",
                    recognitionConfig: r,
                    onOpened: void 0,
                    onRecognizing: f,
                    onRecognized: b,
                    onDisconnected: u
                })
            })
        }
          , t9 = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.b9)(V)
              , c = (0,
            l.b9)(X)
              , [d,u] = (0,
            l.KO)($)
              , [x,p] = (0,
            l.KO)(B)
              , h = (0,
            Z.R3)()
              , {formatDto: m} = tU()
              , {getViewState: g} = tY();
            return ((0,
            a.useEffect)( () => {
                let {apData: e, answerType: n} = m(t);
                if (r) {
                    let i = g(t, r);
                    o(e.map( (e, t) => (e.answered = i.items[t].answered,
                    e.writtenSVG = i.items[t].svg,
                    e))),
                    u(n),
                    p(!0);
                    return
                }
                return o(e),
                u(n),
                () => {
                    o(void 0),
                    c(0),
                    u("1to1"),
                    p(!1)
                }
            }
            , [t, m, g, r, u, o, p, c]),
            x) ? (0,
            n.jsx)(i.Z, {
                pt: 2,
                pb: "portrait" === h ? 3 : "1to1" === d ? 12 : 2,
                px: 2,
                flex: 1,
                children: (0,
                n.jsx)(tL, {})
            }) : (0,
            n.jsx)(i.Z, {
                p: 2,
                flex: 1,
                children: (0,
                n.jsx)(tQ, {
                    onAnswered: s
                })
            })
        }
          , t8 = e => {
            let {correct: t, isEnglish: r} = e
              , i = r ? function(e) {
                let t = ["?", "!", '"', ".", "？", "！", "”", "．"]
                  , r = (r, n) => {
                    var i;
                    let l = null === (i = e[n - 1]) || void 0 === i ? void 0 : i.slice(-1)
                      , a = r && 0 === n || l && t.includes(l);
                    return a ? "".concat(r[0].toUpperCase()).concat(r.slice(1)) : r
                }
                ;
                return e.map( (e, t) => r(e, t))
            }(t) : t;
            return (0,
            n.jsx)(x.J$, {
                src: i.join(" "),
                style: {
                    fontSize: 20,
                    color: d.O9.important
                }
            })
        }
        ;
        var t3 = r(60887);
        let t5 = a.memo(e => {
            let {mode: t, width: r="auto"} = e;
            switch (t) {
            case "Order":
                return (0,
                n.jsx)(i.Z, {
                    minWidth: 72,
                    width: r,
                    height: 64,
                    px: 2,
                    bgcolor: d.O9.onSurfaceWeak4,
                    border: "1px solid ".concat((0,
                    d.NH)("onSurfaceWeak2", .3)),
                    borderRadius: 1
                });
            case "Selection":
                return (0,
                n.jsx)(i.Z, {
                    width: 72,
                    height: 64,
                    borderRadius: 1
                })
            }
        }
        );
        t5.displayName = "EmptyBlock";
        let t6 = a.memo(e => {
            let {value: t, width: r="auto"} = e;
            return (0,
            n.jsx)(c.M5, {
                minWidth: 72,
                width: r,
                height: 64,
                px: 2,
                border: "1px solid ".concat((0,
                d.NH)("onSurfaceWeak2", .3)),
                borderRadius: 1,
                bgcolor: d.O9.surface,
                sx: {
                    cursor: "default",
                    userSelect: "none"
                },
                children: (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface
                    },
                    weight: "bold"
                })
            })
        }
        );
        t6.displayName = "WordBlock";
        let t7 = e => {
            let {mode: t, items: r, isEnglishText: i, onClickItem: l} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(rt, {
                    items: r,
                    isEnglishText: i,
                    onClickItem: l
                });
            case "Correct":
                return (0,
                n.jsx)(rr, {
                    items: r,
                    isEnglishText: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(rn, {
                    items: r,
                    isEnglishText: i
                })
            }
        }
          , re = ["?", "!", '"', ".", "？", "！", "”", "．"]
          , rt = e => {
            let {children: t, items: r, isEnglishText: l, onClickItem: a} = e
              , s = (e, t) => {
                var n, i;
                let l = null === (n = r[t - 1]) || void 0 === n ? void 0 : null === (i = n.text) || void 0 === i ? void 0 : i.slice(-1)
                  , a = e && 0 === t || l && re.includes(l);
                return a ? "".concat(e[0].toUpperCase()).concat(e.slice(1)) : e
            }
            ;
            return (0,
            n.jsxs)(c.X2, {
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
                    n.jsx)(i.Z, {
                        id: r,
                        children: o ? (0,
                        n.jsx)(ri, {
                            id: r,
                            onClick: a,
                            children: (0,
                            n.jsx)(t6, {
                                value: l ? s(o, t) : o
                            })
                        }, r) : (0,
                        n.jsx)(rl, {
                            id: r,
                            children: (0,
                            n.jsx)(t5, {
                                mode: "Order"
                            })
                        }, r)
                    }, r) : o && (0,
                    n.jsx)(x.J$, {
                        src: l ? s(o, t) : o,
                        style: {
                            height: 64,
                            fontSize: 20,
                            color: d.O9.onSurface,
                            display: "flex",
                            alignItems: "center"
                        }
                    })
                }
                ), t]
            })
        }
          , rr = e => {
            let {items: t, isEnglishText: r} = e;
            return (0,
            n.jsx)(rt, {
                items: t,
                isEnglishText: r,
                children: (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })
            })
        }
          , rn = e => {
            let {items: t, isEnglishText: r} = e;
            return (0,
            n.jsx)(i.Z, {
                children: (0,
                n.jsx)(rt, {
                    items: t,
                    isEnglishText: r,
                    children: (0,
                    n.jsx)(i.Z, {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        margin: "auto",
                        width: 48,
                        height: 48,
                        children: (0,
                        n.jsx)(s.$V, {
                            name: "correctionX",
                            width: 48,
                            height: 48
                        })
                    })
                })
            })
        }
          , ri = e => {
            let {children: t, id: r, onClick: i} = e
              , {attributes: l, listeners: a, setNodeRef: s, isDragging: o} = (0,
            t3.O1)({
                id: r
            });
            return o ? (0,
            n.jsx)(t5, {
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
          , rl = e => {
            let {children: t, id: r} = e
              , {setNodeRef: i, isOver: l} = (0,
            t3.Zj)({
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
          , ra = (0,
        F.cn)([])
          , rs = (0,
        F.cn)([])
          , ro = (0,
        F.cn)([])
          , rc = (0,
        F.cn)([])
          , rd = (0,
        F.cn)(!1)
          , ru = (0,
        F.cn)(0)
          , rx = () => {
            let e = (0,
            l.Dv)(ro)
              , t = (0,
            l.Dv)(rs)
              , r = (0,
            l.Dv)(rd);
            return (0,
            n.jsx)(rp, {
                answered: e,
                correct: t,
                isEnglishText: r
            })
        }
          , rp = e => {
            let {answered: t, correct: r, isEnglishText: l} = e
              , a = t.every( (e, t) => {
                let {text: n} = e;
                return n === r[t]
            }
            );
            return a ? (0,
            n.jsx)(i.Z, {
                width: "100%",
                children: (0,
                n.jsx)(t7, {
                    mode: "Correct",
                    items: t,
                    isEnglishText: l
                })
            }) : (0,
            n.jsxs)(c.sg, {
                width: "100%",
                children: [(0,
                n.jsx)(t7, {
                    mode: "Incorrect",
                    items: t,
                    isEnglishText: l
                }), (0,
                n.jsx)(c.LZ, {
                    y: 1
                }), (0,
                n.jsx)(t8, {
                    correct: r,
                    isEnglish: l
                })]
            })
        }
        ;
        var rh = r(45587)
          , rm = r(24285)
          , rg = r(18751);
        let rv = (e, t) => Math.floor(Math.random() * (t - e + 1) + e)
          , rf = () => {
            let e = (0,
            a.useCallback)(e => {
                let t = e.correctList.map( (e, t) => ({
                    index: t,
                    text: e.text,
                    movable: e.entryStyle === ew.Xc.MOVABLE
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
                  , s = r.map( (e, t) => ({
                    id: "Dummy[".concat(t, "]"),
                    text: e,
                    movable: !0
                }))
                  , o = [...a, ...s].sort( () => Math.random() - .5);
                if (o.length > 1 && o[0].text === a[0].text) {
                    let e = rv(1, o.length - 1);
                    [o[0],o[e]] = [o[e], o[0]]
                }
                let c = e.correctList.map(e => {
                    let {text: t} = e;
                    return t
                }
                );
                return {
                    answeringItems: l,
                    correctTexts: c,
                    selectableItems: o,
                    isEnglishText: e.isEnglishText
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , rb = () => {
            let e = (0,
            a.useCallback)(e => e.some(e => {
                let {text: t} = e;
                return !t
            }
            ), [])
              , t = (0,
            a.useCallback)( (t, r) => {
                let n = e(t);
                if (n)
                    return "empty";
                let i = t.every( (e, t) => {
                    let {text: n} = e;
                    return n === r[t]
                }
                );
                return i ? "correct" : "incorrect"
            }
            , [e]);
            return {
                validate: t,
                checkEmpty: e
            }
        }
          , rj = () => {
            let[e,t] = (0,
            l.KO)(ru)
              , [r,n] = (0,
            a.useState)()
              , {validate: i} = rb()
              , s = (0,
            a.useCallback)( (r, l) => {
                let a = i(r, l);
                switch (a) {
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
            , [e, t, i])
              , o = (0,
            a.useCallback)( () => {
                n(void 0)
            }
            , []);
            return {
                currentPopup: r,
                setPopup: s,
                hidePopup: o
            }
        }
          , rw = () => {
            let e = (0,
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
                            movable: e.entryStyle === ew.Xc.MOVABLE
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
                          , u = []
                          , x = c.map(e => {
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
                        );
                        return {
                            answered: x
                        }
                    }(e, r.apViewState);
                throw Error("no view state")
            }
            )(e, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , rS = "selectable_context"
          , ry = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(ra)
              , i = (0,
            l.Dv)(rc)
              , a = (0,
            l.Dv)(rs)
              , s = (0,
            l.Dv)(rd)
              , o = (0,
            l.Dv)(ru)
              , c = (0,
            Z.R3)();
            return (0,
            n.jsx)(rC, {
                selectables: r,
                answering: i,
                correct: a,
                isEnglishText: s,
                wrongCount: o,
                orientation: c,
                onAnswered: t
            })
        }
          , rC = e => {
            let {correct: t, isEnglishText: r, wrongCount: o, orientation: u, onAnswered: x, ...p} = e
              , h = (0,
            l.b9)(ro)
              , [m,g] = (0,
            a.useState)([])
              , [v,f] = (0,
            a.useState)([])
              , [b,j] = (0,
            a.useState)()
              , [w,S] = (0,
            a.useState)(0)
              , [y,C] = (0,
            a.useState)(!1)
              , k = (0,
            a.useRef)(null)
              , {currentPopup: I, setPopup: O, hidePopup: A} = rj()
              , {checkEmpty: _} = rb()
              , {preventTouchScroll: N, allowTouchScroll: R} = (0,
            rg.A)()
              , L = (0,
            t3.Dy)((0,
            t3.VT)(t3.MA, {
                activationConstraint: {
                    delay: 200,
                    tolerance: 1e3
                }
            }), (0,
            t3.VT)(t3.LO, {
                activationConstraint: {
                    delay: 100,
                    tolerance: 1e3
                },
                onActivation: N
            }))
              , E = (0,
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
              , Z = (0,
            a.useCallback)( (e, t) => {
                let r = v.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , n = v.findIndex(e => {
                    let {id: r} = e;
                    return r === t.id
                }
                )
                  , i = JSON.parse(JSON.stringify(v));
                [i[r],i[n]] = [i[n], i[r]],
                f(i)
            }
            , [v])
              , T = (0,
            a.useCallback)( (e, t) => {
                if (e < 0 || t < 0)
                    return;
                let r = JSON.parse(JSON.stringify(v))
                  , n = JSON.parse(JSON.stringify(m));
                [r[e],n[t]] = [n[t], r[e]],
                g(n),
                f(r)
            }
            , [v, m])
              , M = (0,
            a.useCallback)(e => {
                let t = v.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , r = m.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                );
                T(t, r)
            }
            , [v, T, m])
              , W = (0,
            a.useCallback)( (e, t) => {
                let r = m.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , n = v.findIndex(e => {
                    let {id: r} = e;
                    return r === (null == t ? void 0 : t.id)
                }
                );
                T(n, r)
            }
            , [v, T, m])
              , z = (0,
            a.useCallback)(e => {
                var t, r;
                let {active: n} = e
                  , i = null === (t = n.data.current) || void 0 === t ? void 0 : null === (r = t.sortable) || void 0 === r ? void 0 : r.containerId
                  , l = i === rS ? m.find(e => {
                    let {id: t} = e;
                    return t === n.id
                }
                ) : v.find(e => {
                    let {id: t} = e;
                    return t === n.id
                }
                );
                j(l)
            }
            , [v, m])
              , q = (0,
            a.useCallback)(e => {
                var t, r, n, i, l;
                if (!e.over || e.active.id === e.over.id)
                    return;
                let a = null === (t = e.active.data.current) || void 0 === t ? void 0 : null === (r = t.sortable) || void 0 === r ? void 0 : r.containerId
                  , s = null === (n = null === (i = e.over) || void 0 === i ? void 0 : i.data.current) || void 0 === n ? void 0 : null === (l = n.sortable) || void 0 === l ? void 0 : l.containerId;
                a === rS && s === rS && E(e.active, e.over)
            }
            , [E])
              , H = (0,
            a.useCallback)(e => {
                var t, r, n, i;
                if (j(void 0),
                !e.over || e.active.id === e.over.id)
                    return;
                let l = null === (t = e.active.data.current) || void 0 === t ? void 0 : null === (r = t.sortable) || void 0 === r ? void 0 : r.containerId
                  , a = null === (n = e.over.data.current) || void 0 === n ? void 0 : null === (i = n.sortable) || void 0 === i ? void 0 : i.containerId;
                l === rS ? W(e.active, e.over) : a === rS ? M(e.active) : Z(e.active, e.over)
            }
            , [Z, M, W])
              , J = (0,
            a.useCallback)(e => {
                var t;
                let r = v.findIndex(t => {
                    let {id: r} = t;
                    return r === e.currentTarget.id
                }
                );
                if (!(null === (t = v[r]) || void 0 === t ? void 0 : t.text))
                    return;
                let n = m.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                );
                T(r, n)
            }
            , [v, T, m])
              , P = (0,
            a.useCallback)(e => {
                var t;
                let r = m.findIndex(t => {
                    let {id: r} = t;
                    return r === e.currentTarget.id
                }
                );
                if (!(null === (t = m[r]) || void 0 === t ? void 0 : t.text))
                    return;
                let n = v.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                );
                T(n, r)
            }
            , [v, T, m])
              , F = (0,
            a.useCallback)( () => {
                let e = _(v);
                e ? C(!0) : O(v, t)
            }
            , [v, t, _, O])
              , V = (0,
            a.useCallback)( () => {
                let e = ek.sS.CORRECT
                  , t = {
                    answered: v.filter(e => e.movable).map(e => e.id)
                };
                h(v),
                x({
                    answer: {
                        result: e,
                        textType: 2,
                        text: v.map(e => {
                            let {text: t} = e;
                            return t
                        }
                        ).join(" "),
                        wrongCount: o
                    },
                    viewStateJSON: t
                }),
                A()
            }
            , [I, h, v, x, o, A])
              , $ = (0,
            a.useCallback)( () => {
                C(!1),
                O(v, t)
            }
            , [v, t, O, C])
              , B = (0,
            a.useCallback)( () => {
                C(!1)
            }
            , [C]);
            return (0,
            a.useEffect)( () => {
                g(p.selectables),
                f(p.answering)
            }
            , [p.selectables, p.answering]),
            (0,
            a.useEffect)( () => {
                document.addEventListener("touchend", R)
            }
            , [R]),
            (0,
            a.useEffect)( () => {
                if (!k.current)
                    return;
                let e = k.current.clientHeight;
                S(e + 72)
            }
            , [w]),
            (0,
            n.jsxs)(c.sg, {
                width: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(t3.LB, {
                    sensors: L,
                    collisionDetection: t3.pE,
                    onDragStart: z,
                    onDragOver: q,
                    onDragEnd: H,
                    children: [(0,
                    n.jsx)(i.Z, {
                        minHeight: w,
                        children: (0,
                        n.jsx)(i.Z, {
                            ref: k,
                            children: (0,
                            n.jsx)(t7, {
                                mode: "Default",
                                items: v,
                                isEnglishText: r,
                                onClickItem: J
                            })
                        })
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 4
                    }), (0,
                    n.jsx)(rh.Fo, {
                        id: rS,
                        items: m,
                        children: (0,
                        n.jsx)(c.X2, {
                            flexWrap: "wrap",
                            gap: 2,
                            p: 2,
                            borderRadius: 1,
                            bgcolor: d.O9.onSurfaceWeak4,
                            children: m.map(e => {
                                let {id: t, text: r} = e;
                                return r ? (0,
                                n.jsx)(rk, {
                                    id: t,
                                    onClick: P,
                                    children: (0,
                                    n.jsx)(t6, {
                                        value: r
                                    })
                                }, t) : (0,
                                n.jsx)(rk, {
                                    id: t,
                                    disabled: !0,
                                    children: (0,
                                    n.jsx)(t5, {
                                        mode: "Selection"
                                    })
                                }, t)
                            }
                            )
                        })
                    }), (0,
                    n.jsx)(t3.y9, {
                        style: {
                            width: "fit-content",
                            boxShadow: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
                            borderRadius: "4px"
                        },
                        children: (null == b ? void 0 : b.text) ? (0,
                        n.jsx)(t6, {
                            value: b.text
                        }) : null
                    })]
                }), (0,
                n.jsx)(c.LZ, {
                    y: 4
                }), (0,
                n.jsx)(i.Z, {
                    alignSelf: "flex-end",
                    children: (0,
                    n.jsx)(s.Vy, {
                        text: "解答する",
                        disabled: void 0 !== I,
                        onClick: F
                    })
                }), I && (0,
                n.jsx)(D.GI, {
                    result: I,
                    portalElem: "portrait" === u ? "body" : G.L,
                    handleOnStop: "redo" === I ? A : V
                }), (0,
                n.jsx)(s.Vq, {
                    isOpen: y,
                    title: "このまま解答しますか？",
                    body: "空欄が残っています。",
                    actions: (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(s.Qd, {
                            label: "キャンセル",
                            color: "primary",
                            onClick: B
                        }), (0,
                        n.jsx)(s.Qd, {
                            label: "解答する",
                            color: "primary",
                            onClick: $
                        })]
                    }),
                    onClose: B
                })]
            })
        }
          , rk = e => {
            let {children: t, id: r, disabled: i, onClick: l} = e
              , {attributes: a, listeners: s, setNodeRef: o, transform: c, transition: d, isDragging: u} = (0,
            rh.nB)({
                id: r,
                disabled: i
            })
              , x = {
                transform: rm.ux.Transform.toString(c),
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
          , rI = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.b9)(ra)
              , c = (0,
            l.b9)(rc)
              , d = (0,
            l.b9)(rs)
              , u = (0,
            l.b9)(rd)
              , x = (0,
            l.b9)(ru)
              , [p,h] = (0,
            l.KO)(ro)
              , {formatDto: m} = rf()
              , {getViewState: g} = rw()
              , v = (0,
            Z.R3)();
            if ((0,
            a.useEffect)( () => {
                let {answeringItems: e, correctTexts: n, selectableItems: i, isEnglishText: l} = m(t);
                if (r) {
                    let a = g(t, r)
                      , s = 0;
                    h(e.map(e => {
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
                h([]),
                d(n),
                u(l),
                x(0)
            }
            , [t, m, g, r, h, c, d, u, o, x]),
            p.length > 0)
                switch (v) {
                case "landscape":
                    return (0,
                    n.jsx)(i.Z, {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        pt: 4,
                        pr: 3,
                        pb: 12,
                        pl: 3,
                        children: (0,
                        n.jsx)(rx, {})
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.Z, {
                        pt: 4,
                        pr: 3,
                        pb: 3,
                        pl: 3,
                        children: (0,
                        n.jsx)(rx, {})
                    })
                }
            else
                switch (v) {
                case "landscape":
                    return (0,
                    n.jsx)(i.Z, {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "end",
                        pt: 4,
                        pr: 3,
                        pb: 2,
                        pl: 3,
                        children: (0,
                        n.jsx)(ry, {
                            onAnswered: s
                        })
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.Z, {
                        pt: 4,
                        pr: 3,
                        pb: 2,
                        pl: 3,
                        flex: 1,
                        children: (0,
                        n.jsx)(ry, {
                            onAnswered: s
                        })
                    })
                }
        }
        ;
        var rO = r(45098);
        let rA = (0,
        F.cn)(void 0)
          , r_ = (0,
        F.cn)(void 0)
          , rN = (0,
        F.cn)(void 0)
          , rR = (0,
        F.cn)("")
          , rL = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(r_)
              , i = (0,
            l.Dv)(rN)
              , a = (0,
            l.Dv)(rR)
              , s = (0,
            l.Dv)(T.uR)
              , o = (0,
            Z.R3)();
            return void 0 === i ? null : (0,
            n.jsx)(rE, {
                result: r,
                answered: i,
                svg: a,
                orientation: o,
                onAnswered: t,
                isViewer: s
            })
        }
          , rE = e => {
            let {result: t, answered: r, svg: l, orientation: o, onAnswered: d, isViewer: u} = e
              , [x,p] = (0,
            a.useState)()
              , [h,m] = (0,
            a.useState)(!1)
              , [g,v] = (0,
            a.useState)(!1)
              , f = (0,
            a.useCallback)( () => {
                p("correct")
            }
            , [])
              , b = (0,
            a.useCallback)( () => {
                p("kanji_incorrect")
            }
            , [])
              , j = (0,
            a.useCallback)( () => {
                let e = "correct" === x
                  , t = ek.sS.CORRECT
                d({
                    answer: {
                        result: t,
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
                v(!1)
            }
            , [r, x, d, l]);
            return (0,
            a.useEffect)( () => {
                "" === r ? v(!0) : m(!0)
            }
            , [r]),
            (0,
            n.jsxs)(c.sg, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.sg, {
                    width: "portrait" === o ? void 0 : "100%",
                    position: "portrait" === o ? void 0 : "absolute",
                    bottom: "portrait" === o ? void 0 : 0,
                    children: [(0,
                    n.jsxs)(i.Z, {
                        width: "100%",
                        maxWidth: 712,
                        alignSelf: "center",
                        children: [(0,
                        n.jsx)(eF.zh, {
                            mode: "Default",
                            height: "portrait" === o ? 254 : 334,
                            children: (0,
                            n.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: l
                                }
                            })
                        }), void 0 !== t && u && (0,
                        n.jsx)(i.Z, {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            width: 144,
                            height: 144,
                            children: (0,
                            n.jsx)(s.$V, {
                                name: t ? "correctionO" : "correctionX",
                                width: 144,
                                height: 144
                            })
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: "portrait" === o ? 0 : 14
                    })]
                }), h && (0,
                P.createPortal)((0,
                n.jsx)(rD, {
                    currentPopup: x,
                    isViewer: u,
                    endWrongAnswerProcess: b,
                    endCorrectAnswerProcess: f
                }), document.body), g && (0,
                P.createPortal)((0,
                n.jsx)(rZ, {
                    isViewer: u,
                    currentPopup: x,
                    endAnswerProcess: j
                }), document.body), x && (0,
                n.jsx)(D.GI, {
                    result: x,
                    portalElem: "body",
                    handleOnStop: j
                })]
            })
        }
          , rD = e => {
            let {isViewer: t, currentPopup: r, endWrongAnswerProcess: i, endCorrectAnswerProcess: l} = e;
            return (0,
            n.jsxs)(rT, {
                children: [(0,
                n.jsx)(s.oj, {
                    width: 200,
                    text: "できなかった",
                    disabled: t || !!r,
                    onClick: i
                }), (0,
                n.jsx)(s.Vy, {
                    width: 200,
                    text: "できた",
                    disabled: t || !!r,
                    onClick: l
                })]
            })
        }
          , rZ = e => {
            let {isViewer: t, currentPopup: r, endAnswerProcess: i} = e;
            return (0,
            n.jsx)(rT, {
                children: (0,
                n.jsx)(s.Vy, {
                    width: 200,
                    text: "次へ",
                    disabled: t || !!r,
                    onClick: i
                })
            })
        }
          , rT = (0,
        rO.Z)(i.Z)(e => {
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
          , rM = () => {
            let e = (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        var t;
                        let r = true
                          , n = e.recognizedText
                          , i = null !== (t = e.svg) && void 0 !== t ? t : "";
                        return {
                            result: r,
                            answered: n,
                            svg: i
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , rW = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => {
                t(!0)
            }
            , [])
              , n = (0,
            a.useCallback)( () => {
                t(!1)
            }
            , []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , rz = () => {
            let e = (0,
            l.b9)(rR)
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
            , [r, i, e])
              , u = (0,
            a.useCallback)( () => {
                i(!0)
            }
            , [i])
              , x = (0,
            a.useCallback)( () => {
                r(""),
                e(""),
                o(!0)
            }
            , [r, o, e])
              , p = (0,
            a.useCallback)( () => {
                o(!1)
            }
            , [o]);
            return {
                opened: c,
                recognizing: u,
                recognized: d,
                disconnected: x,
                reconnect: p,
                setAnsweredText: r,
                setIsRecognizing: i,
                answeredText: t,
                isOpenReconnectMessage: s,
                isRecognizing: n
            }
        }
          , rq = () => {
            let[e,t] = (0,
            a.useState)()
              , r = (0,
            a.useCallback)(e => t(e), [])
              , n = (0,
            a.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , rH = () => {
            let e = (0,
            a.useCallback)(e => {
                let t = e.correctAnswer;
                return {
                    correct: t
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , rJ = e => {
            let {onPendingAnswered: t} = e
              , r = (0,
            l.Dv)(rA)
              , i = (0,
            l.Dv)(T.As)
              , a = (0,
            Z.R3)();
            return r ? (0,
            n.jsx)(rF, {
                recognitionConfig: r,
                orientation: a,
                selectedTool: i,
                onPendingAnswered: t
            }) : null
        }
          , rP = () => {
            let e = (0,
            a.useCallback)( (e, t, r) => {
                if (0 === e.length) {
                    t();
                    return
                }
                r()
            }
            , []);
            return {
                prepare: e
            }
        }
          , rF = e => {
            let {recognitionConfig: t, orientation: r, selectedTool: d, onPendingAnswered: u} = e
              , x = (0,
            l.b9)(rN)
              , p = (0,
            a.useRef)(null)
              , {elementRef: h, elementSize: m} = (0,
            o.yU)()
              , {showing: g, show: v, hide: f} = rq()
              , {prepare: b} = rP()
              , {opened: j, recognizing: w, recognized: S, disconnected: y, reconnect: C, answeredText: k, isOpenReconnectMessage: I, isRecognizing: O} = rz()
              , {show: A, hide: _, visibled: N} = rW()
              , {onPointerDown: R, onPointerUp: L} = (0,
            eF._n)()
              , E = (0,
            a.useCallback)( () => {
                w(),
                R()
            }
            , [w])
              , Z = (0,
            a.useCallback)( (e, t) => {
                S(e, t),
                L()
            }
            , [S])
              , T = (0,
            a.useCallback)( () => {
                b(k, A, () => {
                    x(k),
                    u()
                }
                )
            }
            , [b, k, A, x, u])
              , M = (0,
            a.useCallback)( () => {
                x(k),
                u(),
                f()
            }
            , [k, f, u, x])
              , W = (0,
            a.useCallback)( () => {
                _(),
                v("incorrect")
            }
            , [_, v]);
            (0,
            a.useEffect)( () => {
                var e, t, r;
                null === (e = p.current) || void 0 === e || null === (t = e.editor) || void 0 === t || null === (r = t.resize) || void 0 === r || r.call(t)
            }
            , [h]);
            let z = "portrait" === r;
            return (0,
            n.jsxs)(c.sg, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.sg, {
                    width: z ? void 0 : "100%",
                    position: z ? void 0 : "absolute",
                    bottom: z ? void 0 : 0,
                    children: [(0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        maxWidth: 712,
                        alignSelf: "center",
                        children: (0,
                        n.jsx)(eF.zh, {
                            ref: h,
                            height: z ? 254 : 334,
                            children: !I && (0,
                            n.jsx)(tJ, {
                                ref: p,
                                width: m.width,
                                height: z ? 254 : 334,
                                mode: "eraser" === d ? "eraser" : "pen",
                                recognitionConfig: t,
                                onOpened: j,
                                onRecognizing: E,
                                onRecognized: Z,
                                onDisconnected: y
                            })
                        })
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: z ? 2 : 5
                    }), (0,
                    n.jsx)(i.Z, {
                        alignSelf: "end",
                        children: (0,
                        n.jsx)(s.Vy, {
                            text: "答え合わせ",
                            disabled: O || I,
                            onClick: T
                        })
                    }), (0,
                    n.jsx)(eF.eN, {
                        isOpen: N,
                        onClickAnswer: W,
                        onClickCancel: _
                    })]
                }), g && (0,
                n.jsx)(D.GI, {
                    result: g,
                    portalElem: "body",
                    handleOnStop: M
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: I,
                    y: z ? 96 : 24,
                    onClick: C
                })]
            })
        }
          , rV = e => {
            let {dto: t, replayResource: r, onPendingAnswered: s, onAnswered: c} = e
              , d = (0,
            l.b9)(r_)
              , u = (0,
            l.b9)(rA)
              , x = (0,
            l.b9)(rR)
              , [p,h] = (0,
            l.KO)(rN)
              , {formatDto: m} = rH()
              , g = (0,
            Z.R3)()
              , {getViewState: v} = rM()
              , {windowHeight: f} = (0,
            o.AS)();
            return ((0,
            a.useEffect)( () => {
                if (r) {
                    let e = v(r);
                    d(e.result),
                    h(e.answered),
                    x(e.svg);
                    return
                }
                return u({
                    mode: "Japanese",
                    useLK: !1,
                    sk: void 0
                }),
                d(void 0),
                h(void 0),
                x(""),
                () => {
                    u(void 0),
                    d(void 0),
                    h(void 0),
                    x("")
                }
            }
            , [t, r, v, h, u, x, m, d]),
            void 0 !== p) ? (0,
            n.jsx)(i.Z, {
                height: "portrait" === g ? "auto" : f - eL.J9 - 18,
                p: 2,
                children: (0,
                n.jsx)(rL, {
                    onAnswered: c
                })
            }) : (0,
            n.jsx)(i.Z, {
                height: "portrait" === g ? "auto" : f - eL.J9 - 18,
                p: 2,
                children: (0,
                n.jsx)(rJ, {
                    onPendingAnswered: s
                })
            })
        }
          , r$ = e => {
            let {items: t, style: r} = e
              , l = "他の選択肢"
              , a = 16 * l.length;
            return (0,
            n.jsxs)(c.X2, {
                gap: 2,
                style: r,
                children: [(0,
                n.jsx)(i.Z, {
                    minWidth: a,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(s.xv, {
                        color: "onSurfaceWeak1",
                        fontWeight: "bold",
                        children: l
                    })
                }), (0,
                n.jsx)(K.Z, {
                    orientation: "vertical",
                    variant: "middle",
                    flexItem: !0,
                    sx: {
                        borderColor: d.O9.onSurfaceWeak3,
                        my: 0
                    }
                }), (0,
                n.jsx)(c.X2, {
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    children: t.map( (e, t) => (0,
                    n.jsx)(x.J$, {
                        src: e.text,
                        style: {
                            fontSize: 16,
                            color: d.O9.onSurface,
                            display: "flex",
                            alignItems: "flex-end"
                        }
                    }, t))
                })]
            })
        }
        ;
        var rB = r(69417);
        let rX = e => {
            let {qml: t, mode: r, onClick: i, disabled: l} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(rG, {
                    qml: t,
                    onClick: i,
                    disabled: l
                });
            case "Correct":
                return (0,
                n.jsx)(rK, {
                    qml: t,
                    onClick: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(rU, {
                    qml: t,
                    onClick: i
                })
            }
        }
          , rG = e => {
            let {qml: t, onClick: r, disabled: i} = e;
            return (0,
            n.jsx)(rB.Z, {
                disabled: i,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface
                    },
                    weight: "bold"
                })
            })
        }
          , rK = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(rB.Z, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "1",
                    left: 8,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , rU = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(rB.Z, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.importantWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "1",
                    left: 8,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.important
                    },
                    weight: "bold"
                })]
            })
        }
          , rY = (0,
        F.cn)([])
          , rQ = (0,
        F.cn)({
            id: 0,
            text: ""
        })
          , r0 = (0,
        F.cn)(void 0)
          , r1 = () => {
            let e = (0,
            l.Dv)(rY)
              , t = (0,
            l.Dv)(rQ)
              , r = (0,
            l.Dv)(r0);
            return r ? (0,
            n.jsx)(r2, {
                selectables: e,
                correct: t,
                answered: r
            }) : null
        }
          , r2 = e => {
            let {selectables: t, correct: r, answered: i} = e
              , l = i.id === r.id ? i : void 0
              , a = i.id !== r.id ? r : void 0
              , s = i.id !== r.id ? i : void 0
              , o = [null == l ? void 0 : l.id, null == a ? void 0 : a.id, null == s ? void 0 : s.id]
              , c = t.filter(e => !o.includes(e.id));
            return (0,
            n.jsxs)(U.s, {
                gap: 2,
                children: [l && (0,
                n.jsx)(rX, {
                    qml: l.text,
                    mode: "Correct"
                }), a && (0,
                n.jsx)(rX, {
                    qml: a.text,
                    mode: "Correct"
                }), s && (0,
                n.jsx)(rX, {
                    qml: s.text,
                    mode: "Incorrect"
                }, s.id), 0 !== c.length && (0,
                n.jsx)(r$, {
                    items: c,
                    style: {
                        marginTop: "8px"
                    }
                })]
            })
        }
          , r4 = () => {
            let e = (0,
            a.useCallback)(e => {
                var t;
                let r = null !== (t = e.correctItem) && void 0 !== t ? t : new ew.LE
                  , n = {
                    id: r.itemId,
                    text: r.text
                }
                  , i = e.itemList.map(e => {
                    let t = (0,
                    ts.Y)(e.text);
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
            , []);
            return {
                formatDto: e
            }
        }
          , r9 = () => {
            let e = (0,
            a.useCallback)( (e, t) => t.id === e.id ? "correct" : "incorrect", []);
            return {
                validate: e
            }
        }
          , r8 = () => {
            let e = (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        let t = e.items.map(e => e.itemId)
                          , r = e.items.map(e => e.itemId)
                          , n = t[e.selected];
                        return {
                            order: r,
                            answered: n
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , r3 = e => {
            let t = (0,
            l.Dv)(rY)
              , r = (0,
            l.b9)(r0)
              , [n,i] = (0,
            a.useState)(t[0])
              , [s,o] = (0,
            a.useState)("")
              , [c,d] = (0,
            a.useState)("incorrect")
              , {validate: u} = r9()
              , x = (0,
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
            , [e, d, u])
              , p = (0,
            a.useCallback)(e => {
                let i = ek.sS.CORRECT
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
            , [c, t, n, r, s]);
            return {
                prepare: x,
                fix: p
            }
        }
          , r5 = () => {
            let[e,t] = (0,
            a.useState)()
              , r = (0,
            a.useCallback)(e => t(e), [])
              , n = (0,
            a.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , r6 = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(rY)
              , i = (0,
            l.Dv)(rQ)
              , a = (0,
            Z.R3)();
            return (0,
            n.jsx)(r7, {
                selectables: r,
                correct: i,
                orientation: a,
                onAnswered: t
            })
        }
          , r7 = e => {
            let {selectables: t, correct: r, orientation: l, onAnswered: s} = e
              , [o,d] = (0,
            a.useState)(!1)
              , {prepare: u, fix: x} = r3(r)
              , {showing: p, show: h, hide: m} = r5()
              , g = (0,
            a.useCallback)(e => {
                d(!0),
                u(e, () => h("correct"), () => h("incorrect"))
            }
            , [u, h])
              , v = (0,
            a.useCallback)( () => {
                x(s),
                m()
            }
            , [x, m, s]);
            return (0,
            n.jsxs)(i.Z, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                children: [(0,
                n.jsx)(U.s, {
                    width: "100%",
                    children: t.map( (e, r) => (0,
                    n.jsxs)(U.s, {
                        children: [(0,
                        n.jsx)(rX, {
                            qml: e.text,
                            mode: "Active",
                            onClick: () => g(e),
                            disabled: o
                        }), r < t.length - 1 && (0,
                        n.jsx)(c.LZ, {
                            y: 2
                        })]
                    }, r))
                }), p && (0,
                n.jsx)(D.GI, {
                    result: p,
                    portalElem: "portrait" === l ? "body" : G.L,
                    handleOnStop: v
                })]
            })
        }
          , ne = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.b9)(rY)
              , c = (0,
            l.b9)(rQ)
              , [d,u] = (0,
            l.KO)(r0)
              , {formatDto: x} = r4()
              , {getViewState: p} = r8();
            return ((0,
            a.useEffect)( () => {
                let {selectables: e, correct: n} = x(t);
                if (r) {
                    let t = p(r);
                    o(t.order.reduce( (t, r) => {
                        let n = e.find(e => e.id === r);
                        return n ? [...t, n] : t
                    }
                    , [])),
                    c(n),
                    u(e.find(e => e.id === t.answered));
                    return
                }
                o(e),
                c(n),
                u(void 0)
            }
            , [t, x, p, r, u, c, o]),
            d) ? (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(r1, {})
            }) : (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(r6, {
                    onAnswered: s
                })
            })
        }
          , nt = e => {
            let {mode: t, modelAnswer: r, recognitionMode: i} = e;
            switch (t) {
            case "Correct":
                return (0,
                n.jsx)(nr, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(nn, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            default:
                return (0,
                n.jsx)(n.Fragment, {})
            }
        }
          , nr = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.correct,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(s.xv, {
                    size: "lg",
                    color: "correct",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , nn = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.important,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(s.xv, {
                    size: "lg",
                    color: "important",
                    textAlign: "center",
                    children: t
                })
            })
        }
        ;
        var ni = r(70056);
        let nl = e => {
            let {mode: t="Default", answeredText: r, recognitionMode: i} = e;
            switch ((0,
            a.useEffect)( () => {
                (0,
                ni.Z)("#fitty", {
                    minSize: 12,
                    maxSize: 20,
                    multiLine: !1
                })
            }
            , []),
            t) {
            case "Default":
                return (0,
                n.jsx)(na, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                n.jsx)(ns, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(no, {
                    answeredText: r,
                    recognitionMode: i
                })
            }
        }
          , na = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(c.sg, {
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.primaryWeak1),
                children: "Math" === r ? (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(eF.Yf, {
                        style: {
                            fontSize: 20,
                            color: d.O9.onSurface,
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
                    n.jsx)(s.xv, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })
            })
        }
          , ns = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.correctWeak),
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
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
                    n.jsx)(eF.Yf, {
                        style: {
                            fontSize: 20,
                            color: d.O9.onSurface,
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
                    n.jsx)(s.xv, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })]
            })
        }
          , no = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.importantWeak),
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
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
                    n.jsx)(eF.Yf, {
                        style: {
                            fontSize: 20,
                            color: d.O9.onSurface,
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
                    n.jsx)(s.xv, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })]
            })
        }
          , nc = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: a} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(nd, {
                    width: r,
                    answeredText: i,
                    recognitionMode: a
                });
            case "Correct":
                return (0,
                n.jsx)(nu, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                n.jsx)(nx, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: a
                })
            }
        }
          , nd = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.Z, {
                width: t,
                children: (0,
                n.jsx)(nl, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , nu = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(i.Z, {
                width: t,
                children: [(0,
                n.jsx)(nl, {
                    mode: "Correct",
                    answeredText: r,
                    recognitionMode: a
                }), (0,
                n.jsx)(c.sg, {
                    height: 72,
                    justifyContent: "center",
                    children: r !== l && (0,
                    n.jsx)(nt, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
          , nx = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: a} = e;
            return (0,
            n.jsxs)(i.Z, {
                width: t,
                children: [(0,
                n.jsx)(nl, {
                    mode: "Incorrect",
                    answeredText: r,
                    recognitionMode: a
                }), (0,
                n.jsx)(c.sg, {
                    justifyContent: "center",
                    height: 72,
                    children: l && (0,
                    n.jsx)(nt, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: a
                    })
                })]
            })
        }
        ;
        var np = r(62058);
        let nh = () => {
            let e = (0,
            l.Dv)(np.Zr)
              , t = (0,
            l.Dv)(np.NZ)
              , r = (0,
            l.Dv)(np.XX)
              , i = (0,
            l.Dv)(np.Th)
              , a = (0,
            l.Dv)(np.Gl)
              , s = (0,
            l.Dv)(np.m5)
              , o = (0,
            Z.R3)();
            return void 0 === t ? null : (0,
            n.jsx)(nm, {
                modelAnswer: e,
                answered: t,
                placeHolder: r,
                svg: i,
                orientation: o,
                recognitionConfig: a,
                validationResult: s
            })
        }
          , nm = e => {
            let {answered: t, modelAnswer: r, placeHolder: l, svg: a, orientation: s, recognitionConfig: o, validationResult: d} = e
              , u = "correct" === d;
            return (0,
            n.jsx)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: "portrait" === s ? (0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(eF.zh, {
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
                    n.jsxs)(c.X2, {
                        columnGap: 3,
                        marginTop: 2,
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 4
                        }), (0,
                        n.jsx)(nc, {
                            mode: u ? "Correct" : "Incorrect",
                            width: 368,
                            answeredText: t,
                            modelAnswer: t !== r ? r : void 0,
                            recognitionMode: null == o ? void 0 : o.mode
                        })]
                    })]
                }) : (0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(eF.zh, {
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
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        rowGap: 3,
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(nc, {
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
          , ng = e => {
            let t = (0,
            a.useCallback)(t => {
                let {mode: r, sk: n, useLK: i} = t;
                return "science" === e && "Math" === r || "science" === e && i && "NUMBER_SK" === n
            }
            , [e]);
            return {
                isSantaScriptTargetQuestion: t
            }
        }
        ;
        var nv = r(56114);
        let nf = () => {
            let e = (0,
            a.useCallback)(e => {
                var t;
                let r = e.correctAnswerList.reduce( (e, t) => {
                    if (!t.option.case || !t.option.value)
                        return e;
                    if ("text" === t.option.case) {
                        let r = (0,
                        nv.Cn)(t.option.value);
                        return [...e, {
                            case: "text",
                            value: r = (0,
                            nv.YA)(r)
                        }]
                    }
                    return [...e, t.option]
                }
                , [])
                  , n = e.displayAnswerText
                  , i = e.interactiveInkSetting ? (0,
                eF.Wm)(e.interactiveInkSetting) : "Math"
                  , l = {
                    mode: i,
                    useLK: e.useLk,
                    sk: e.skNameOptional.value
                }
                  , a = null !== (t = e.placeHolder) && void 0 !== t ? t : new ew.i
                  , s = (0,
                tK.a)(e.replaceType)
                  , o = e.gradeId;
                return {
                    correct: r,
                    modelAnswer: n,
                    recognitionConfig: l,
                    placeHolder: a,
                    replaceType: s,
                    gradeId: o
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , nb = () => {
            let[e,t] = (0,
            a.useState)()
              , r = (0,
            a.useCallback)(e => t(e), [])
              , n = (0,
            a.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
        ;
        var nj = r(58695);
        let nw = () => {
            let e = (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        var r;
                        let n = t.recognizedText
                          , i = null !== (r = t.svg) && void 0 !== r ? r : "";
                        return {
                            answered: n,
                            svg: i
                        }
                    }(0, r.apViewState);
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , nS = () => {
            let e = (0,
            l.Dv)(np.m5)
              , t = (0,
            l.Dv)(np.Th)
              , r = (0,
            l.Dv)(tX.f)
              , n = (0,
            l.b9)(np.NZ)
              , [i,s] = (0,
            a.useState)(0)
              , o = (0,
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
            , [r, e, i])
              , c = (0,
            a.useCallback)( (r, l) => {
                let a = ek.sS.CORRECT
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
            , [n, t, e, i]);
            return {
                prepare: o,
                fix: c
            }
        }
          , ny = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => {
                t(!0)
            }
            , [])
              , n = (0,
            a.useCallback)( () => {
                t(!1)
            }
            , []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , nC = () => {
            let e = (0,
            l.b9)(np.Th)
              , t = (0,
            l.Dv)(np.Gs)
              , r = (0,
            l.Dv)(np.C$)
              , n = (0,
            l.Dv)(np._S)
              , [i,s] = (0,
            a.useState)("")
              , [o,c] = (0,
            a.useState)(!1)
              , [d,u] = (0,
            a.useState)(!1)
              , {validate: x} = (0,
            nj._)()
              , p = (0,
            a.useCallback)( () => {
                s("")
            }
            , [s])
              , h = (0,
            a.useCallback)( () => {
                c(!0)
            }
            , [c])
              , m = (0,
            a.useCallback)( (i, l) => {
                let a = x({
                    input: i,
                    correct: t,
                    gradeId: n,
                    replaceType: r
                });
                s(a),
                e(l),
                c(!1)
            }
            , [x, t, n, r, e])
              , g = (0,
            a.useCallback)( () => {
                s(""),
                e(""),
                u(!0)
            }
            , [s, u, e])
              , v = (0,
            a.useCallback)( () => {
                u(!1)
            }
            , [u]);
            return {
                opened: p,
                recognizing: h,
                recognized: m,
                disconnected: g,
                reconnect: v,
                recognizedText: i,
                isOpenReconnectMessage: d,
                isRecognizing: o
            }
        }
          , nk = () => {
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
        var nI = r(66105);
        let nO = () => {
            let e = (0,
            l.b9)(np.Th)
              , t = (0,
            l.b9)(nI.D)
              , r = (0,
            l.Dv)(np.Gs)
              , n = (0,
            l.Dv)(np.C$)
              , i = (0,
            l.Dv)(np._S)
              , s = (0,
            l.Dv)(T.mv)
              , o = (0,
            l.Dv)(T.dx)
              , [c,d] = (0,
            a.useState)("")
              , [u,x] = (0,
            a.useState)(!1)
              , [p,h] = (0,
            a.useState)(!1)
              , {validate: m} = (0,
            nj._)()
              , g = (0,
            a.useCallback)( () => {
                d("")
            }
            , [d])
              , v = (0,
            a.useCallback)( () => {
                x(!0)
            }
            , [x])
              , f = (0,
            a.useCallback)( (l, a, s) => {
                let o = m({
                    input: l,
                    correct: r,
                    gradeId: i,
                    replaceType: n
                });
                d(o),
                e(a),
                x(!1),
                t(s)
            }
            , [m, r, i, n, d, e, x, t])
              , b = (0,
            a.useCallback)( () => {
                h(!0)
            }
            , [h])
              , j = (0,
            a.useCallback)( () => {
                h(!1)
            }
            , [h])
              , w = (0,
            a.useMemo)( () => {
                var e;
                return {
                    programId: null !== (e = null == o ? void 0 : o.id) && void 0 !== e ? e : 0,
                    courseCode: s.code,
                    replaceType: n
                }
            }
            , [s.code, null == o ? void 0 : o.id, n]);
            return {
                opened: g,
                recognizing: v,
                recognized: f,
                recognizedError: b,
                reconnect: j,
                recognizedText: c,
                isOpenReconnectMessage: p,
                isRecognizing: u,
                appendix: w
            }
        }
          , nA = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => {
                t(!0)
            }
            , [])
              , n = (0,
            a.useCallback)( () => {
                t(!1)
            }
            , []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , n_ = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(np.Gl)
              , i = (0,
            l.Dv)(np.XX)
              , a = (0,
            l.Dv)(T.As)
              , s = (0,
            Z.R3)();
            return r ? (0,
            n.jsx)(nN, {
                recognitionConfig: r,
                placeHolder: i,
                orientation: s,
                selectedTool: a,
                onAnswered: t
            }) : null
        }
          , nN = e => {
            let {recognitionConfig: t, placeHolder: r, orientation: d, selectedTool: u, onAnswered: x} = e
              , p = (0,
            l.b9)(tX.f)
              , h = (0,
            a.useRef)(null)
              , {elementRef: m, elementSize: g} = (0,
            o.yU)()
              , {opened: v, recognizing: f, recognized: b, disconnected: j, reconnect: w, recognizedText: S, isOpenReconnectMessage: y, isRecognizing: C} = nC()
              , {show: k, hide: I, visibled: O} = nA()
              , {show: A, hide: _, visibled: N} = ny()
              , {page: R, maxPage: L, back: E, forward: Z} = nk()
              , {prepare: T, fix: M} = nS()
              , {showing: W, show: z, hide: q} = nb()
              , {onPointerDown: H, onPointerUp: J} = (0,
            eF._n)()
              , P = (0,
            a.useCallback)( () => {
                f(),
                H()
            }
            , [f])
              , F = (0,
            a.useCallback)( (e, t) => {
                b(e, t),
                J()
            }
            , [b])
              , V = (0,
            a.useCallback)(e => {
                T(k, A, () => z("correct"), () => z("redo"), () => z("incorrect"), e)
            }
            , [T, k, A, z])
              , $ = (0,
            a.useCallback)( () => V(!1), [V])
              , B = (0,
            a.useCallback)( () => {
                M(S, x),
                q()
            }
            , [S, M, q, x])
              , X = (0,
            a.useCallback)( () => {
                p(!1),
                _(),
                $()
            }
            , [_, p, $])
              , K = (0,
            a.useCallback)( () => {
                I(),
                V(!0)
            }
            , [I, V]);
            (0,
            a.useEffect)( () => {
                var e, t, r;
                h.current && m.current && (null === (e = h.current) || void 0 === e || null === (t = e.editor) || void 0 === t || null === (r = t.resize) || void 0 === r || r.call(t),
                1 === R ? m.current.scrollLeft = 0 : m.current.scrollLeft = .8 * g.width * (R - 1))
            }
            , [g.width, R, m]);
            let U = C || y || void 0 !== W
              , Y = g.width + .8 * g.width * (L - 1)
              , Q = "portrait" === d;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    maxWidth: 784,
                    children: [(0,
                    n.jsx)(eF.zh, {
                        ref: m,
                        mode: "Slider",
                        page: R,
                        maxPage: L,
                        prefixLabel: r.label,
                        suffixLabel: r.suffix,
                        useLatexInLabel: r.useLatexInLabel,
                        useLatexInSuffix: r.useLatexInSuffix,
                        onClickLeft: E,
                        onClickRight: Z,
                        children: !y && (0,
                        n.jsx)(tJ, {
                            ref: h,
                            width: Y,
                            height: 240,
                            mode: "eraser" === u ? "eraser" : "pen",
                            recognitionConfig: t,
                            onOpened: v,
                            onRecognizing: P,
                            onRecognized: F,
                            onDisconnected: j
                        })
                    }), Q ? (0,
                    n.jsxs)(c.X2, {
                        marginTop: 2,
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: [(0,
                        n.jsx)(i.Z, {
                            sx: {
                                marginLeft: "54px"
                            },
                            children: (0,
                            n.jsx)(nc, {
                                width: 368,
                                answeredText: S,
                                recognitionMode: t.mode
                            })
                        }), (0,
                        n.jsx)(s.Vy, {
                            text: "解答する",
                            disabled: U,
                            onClick: $
                        })]
                    }) : (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(nc, {
                            width: 368,
                            answeredText: S,
                            recognitionMode: t.mode
                        }), (0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(s.Vy, {
                                text: "解答する",
                                disabled: U,
                                onClick: $
                            })
                        })]
                    })]
                }), W && (0,
                n.jsx)(D.GI, {
                    result: W,
                    portalElem: Q ? "body" : G.L,
                    handleOnStop: "redo" === W ? q : B
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: O,
                    onClickAnswer: K,
                    onClickCancel: I
                }), (0,
                n.jsx)(eF.Fh, {
                    isOpen: N,
                    title: "文字を読みとれませんでした",
                    onClickCancel: _,
                    onClickContinue: X,
                    onClose: _
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: y,
                    y: Q ? 96 : 24,
                    onClick: w
                })]
            })
        }
        ;
        var nR = r(72213);
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
          , nE = (0,
        a.forwardRef)( (e, t) => {
            let {width: r, height: l, editorStyle: s, apiUrl: o, mode: c, recognitionConfig: d, onOpened: u, onRecognizing: x, onRecognized: p, onRecognizedError: h, appendix: m, isOpenReconnectMessage: g} = e
              , v = (0,
            a.useRef)()
              , f = (0,
            a.useCallback)(e => {
                let {data: t, errors: r} = e;
                if (r) {
                    null == h || h(r);
                    return
                }
                null == p || p(t)
            }
            , [h, p]);
            return (0,
            a.useEffect)( () => {
                var e;
                let r = null == t ? void 0 : t.current;
                if (!r)
                    throw Error("Mount element not found");
                let n = nL(d)
                  , i = nR.M.create(r, {
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
                return i.addRecognitionResultListener(f),
                i.addStrokeStartListener(x),
                v.current = i,
                null == u || u(),
                () => {
                    var e;
                    null === (e = v.current) || void 0 === e || e.cleanupListeners()
                }
            }
            , []),
            (0,
            a.useEffect)( () => {
                var e;
                null === (e = v.current) || void 0 === e || e.setPointerType(c)
            }
            , [c]),
            (0,
            a.useEffect)( () => {
                var e;
                g || null === (e = v.current) || void 0 === e || e.recognize()
            }
            , [g]),
            (0,
            n.jsx)(i.Z, {
                ref: t,
                sx: {
                    width: r,
                    height: l
                }
            })
        }
        );
        nE.displayName = "SantaScriptRecognizer";
        var nD = r(34155);
        let nZ = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(np.Gl)
              , i = (0,
            l.Dv)(np.XX)
              , a = (0,
            l.Dv)(T.As)
              , s = (0,
            Z.R3)();
            return r ? (0,
            n.jsx)(nT, {
                recognitionConfig: r,
                placeHolder: i,
                orientation: s,
                selectedTool: a,
                onAnswered: t
            }) : null
        }
          , nT = e => {
            let {recognitionConfig: t, placeHolder: r, orientation: d, selectedTool: u, onAnswered: x} = e
              , p = (0,
            l.b9)(tX.f)
              , h = (0,
            a.useRef)(null)
              , {elementRef: m, elementSize: g} = (0,
            o.yU)()
              , {opened: v, recognizing: f, recognized: b, recognizedError: j, reconnect: w, recognizedText: S, isOpenReconnectMessage: y, isRecognizing: C, appendix: k} = nO()
              , {show: I, hide: O, visibled: A} = nA()
              , {show: _, hide: N, visibled: R} = ny()
              , {page: L, maxPage: E, back: Z, forward: T} = nk()
              , {prepare: M, fix: W} = nS()
              , {showing: z, show: q, hide: H} = nb()
              , J = (0,
            a.useCallback)(e => {
                M(I, _, () => q("correct"), () => q("redo"), () => q("incorrect"), e)
            }
            , [M, I, _, q])
              , P = (0,
            a.useCallback)( () => J(!1), [J])
              , F = (0,
            a.useCallback)( () => {
                W(S, x),
                H()
            }
            , [S, W, H, x])
              , V = (0,
            a.useCallback)( () => {
                p(!1),
                N(),
                P()
            }
            , [N, p, P])
              , $ = (0,
            a.useCallback)( () => {
                O(),
                J(!0)
            }
            , [O, J]);
            (0,
            a.useEffect)( () => {
                var e, t, r;
                h.current && m.current && (null === (e = h.current) || void 0 === e || null === (t = e.editor) || void 0 === t || null === (r = t.resize) || void 0 === r || r.call(t),
                1 === L ? m.current.scrollLeft = 0 : m.current.scrollLeft = .8 * g.width * (L - 1))
            }
            , [g.width, L, m]);
            let B = C || y || void 0 !== z
              , X = g.width + .8 * g.width * (E - 1)
              , K = "portrait" === d
              , U = (0,
            a.useCallback)(e => {
                let {tokenResult: t, svgSnapshot: r, ...n} = e
                  , i = {
                    tokenResult: t,
                    ...n
                };
                null == b || b(t, r, i)
            }
            , [b]);
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    maxWidth: 784,
                    children: [(0,
                    n.jsx)(eF.zh, {
                        ref: m,
                        mode: "Slider",
                        page: L,
                        maxPage: E,
                        prefixLabel: r.label,
                        suffixLabel: r.suffix,
                        useLatexInLabel: r.useLatexInLabel,
                        useLatexInSuffix: r.useLatexInSuffix,
                        onClickLeft: Z,
                        onClickRight: T,
                        children: (0,
                        n.jsx)(nE, {
                            ref: h,
                            width: X,
                            height: 240,
                            mode: "eraser" === u ? "eraser" : "pen",
                            apiUrl: nD.env.NEXT_PUBLIC_SANTASCRIPT_API_URL,
                            recognitionConfig: t,
                            onOpened: v,
                            onRecognizing: f,
                            onRecognized: U,
                            onRecognizedError: j,
                            appendix: k,
                            isOpenReconnectMessage: y
                        })
                    }), K ? (0,
                    n.jsxs)(c.X2, {
                        marginTop: 2,
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: [(0,
                        n.jsx)(i.Z, {
                            sx: {
                                marginLeft: "54px"
                            },
                            children: (0,
                            n.jsx)(nc, {
                                width: 368,
                                answeredText: S,
                                recognitionMode: t.mode
                            })
                        }), (0,
                        n.jsx)(s.Vy, {
                            text: "解答する",
                            disabled: B,
                            onClick: P
                        })]
                    }) : (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(nc, {
                            width: 368,
                            answeredText: S,
                            recognitionMode: t.mode
                        }), (0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(s.Vy, {
                                text: "解答する",
                                disabled: B,
                                onClick: P
                            })
                        })]
                    })]
                }), z && (0,
                n.jsx)(D.GI, {
                    result: z,
                    portalElem: K ? "body" : G.L,
                    handleOnStop: "redo" === z ? H : F
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: A,
                    onClickAnswer: $,
                    onClickCancel: O
                }), (0,
                n.jsx)(eF.Fh, {
                    isOpen: R,
                    title: "文字を読みとれませんでした",
                    onClickCancel: N,
                    onClickContinue: V,
                    onClose: N
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: y,
                    y: K ? 96 : 24,
                    onClick: w
                })]
            })
        }
          , nM = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(np.C$)
              , i = (0,
            l.Dv)(np.Gl)
              , {isSantaScriptTargetQuestion: a} = ng(null != r ? r : "");
            return i ? a(i) ? (0,
            n.jsx)(nZ, {
                onAnswered: t
            }) : (0,
            n.jsx)(n_, {
                onAnswered: t
            }) : null
        }
          , nW = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.b9)(np.Gs)
              , c = (0,
            l.b9)(np.Zr)
              , d = (0,
            l.b9)(np.Gl)
              , u = (0,
            l.b9)(np.XX)
              , [x,p] = (0,
            l.KO)(np.NZ)
              , h = (0,
            l.b9)(np.C$)
              , m = (0,
            l.b9)(np._S)
              , g = (0,
            l.b9)(np.m5)
              , v = (0,
            l.b9)(np.Th)
              , f = (0,
            Z.R3)()
              , {formatDto: b} = nf()
              , {getViewState: j} = nw();
            return ((0,
            a.useEffect)( () => {
                let {correct: e, modelAnswer: n, recognitionConfig: i, placeHolder: l, replaceType: a, gradeId: s} = b(t);
                if (r) {
                    let i = j(t, r);
                    p(i.answered),
                    v(i.svg),
                    c(n),
                    u(l),
                    g(e.some(e => e.value === i.answered) ? "correct" : "incorrect");
                    return
                }
                return o(e),
                c(n),
                d(i),
                u(l),
                h(a),
                m(s),
                () => {
                    o([]),
                    p(void 0),
                    v(""),
                    c(void 0),
                    d(void 0),
                    u(new ew.i),
                    g("empty")
                }
            }
            , [t, r, b, p, c, o, u, d, h, m, g, j, v]),
            void 0 !== x) ? (0,
            n.jsx)(i.Z, {
                pt: 2,
                pb: "portrait" === f ? 2 : 12,
                px: 2,
                children: (0,
                n.jsx)(nh, {})
            }) : (0,
            n.jsx)(i.Z, {
                p: 2,
                children: (0,
                n.jsx)(nM, {
                    onAnswered: s
                })
            })
        }
          , nz = e => {
            let {placeHolder: t, modelAnswer: r, correct: i, answered: l} = e
              , a = i.find(e => "text" === e.case ? e.value === l : RegExp(e.value).test(l));
            return (0,
            n.jsx)(c.sg, {
                children: a ? (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(D.sR, {
                        mode: "Correct",
                        value: l,
                        placeHolder: t
                    }), l !== r && (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 1
                        }), (0,
                        n.jsx)(s.xv, {
                            color: "correct",
                            size: "lg",
                            padding: "0 24px",
                            children: r
                        })]
                    })]
                }) : (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(D.sR, {
                        mode: "Incorrect",
                        value: l,
                        placeHolder: t
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsx)(s.xv, {
                        color: "important",
                        size: "lg",
                        padding: "0 24px",
                        children: r
                    })]
                })
            })
        }
        ;
        var nq = r(23599)
          , nH = r(87109);
        let nJ = (0,
        F.cn)([])
          , nP = (0,
        F.cn)(!1)
          , nF = e => {
            let {data: t} = e
              , r = (0,
            l.b9)(nJ)
              , [i,s] = (0,
            a.useState)("")
              , o = e => {
                let n = t.selectables.find(t => t.id === Number(e));
                r(e => e.map(e => e.id === t.id ? {
                    ...t,
                    answered: n
                } : e)),
                s(e)
            }
            ;
            return (0,
            n.jsx)(nV, {
                mode: "Default",
                value: i,
                placeHolder: t.placeHolder,
                selectables: t.selectables,
                onChange: o
            })
        }
          , nV = e => {
            let {mode: t, value: r, placeHolder: i, selectables: l, onChange: s} = e
              , o = (0,
            a.useId)()
              , c = l.map(e => ({
                label: e.text,
                value: 0 !== e.id ? String(e.id) : void 0
            }))
              , d = i.useLatexInLabel ? (0,
            n.jsx)(nK, {
                text: "<math>".concat(i.label, "</math>")
            }) : i.label
              , u = i.useLatexInSuffix ? "<math>".concat(i.suffix, "</math>") : i.suffix;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(nB, {
                    id: o,
                    value: r,
                    label: d,
                    suffix: u,
                    menuList: c,
                    onChange: s
                });
            case "Correct":
                return (0,
                n.jsx)(nX, {
                    id: o,
                    value: r,
                    label: d,
                    suffix: u,
                    menuList: c
                });
            case "Incorrect":
                return (0,
                n.jsx)(nG, {
                    id: o,
                    value: r,
                    label: d,
                    suffix: u,
                    menuList: c
                })
            }
        }
          , n$ = {
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
                color: d.O9.onSurface
            },
            ".Mui-disabled.MuiOutlinedInput-input": {
                color: d.O9.onSurface,
                WebkitTextFillColor: d.O9.onSurface
            },
            ".Mui-disabled:hover": {
                background: "inherit"
            },
            ".MuiSelect-iconOutlined": {
                position: "static"
            },
            ".Mui-disabled.MuiSelect-iconOutlined": {
                color: d.O9.onSurfaceWeak1
            }
        }
          , nB = e => {
            let {id: t, value: r, label: i, suffix: l, menuList: a, onChange: s} = e;
            return (0,
            n.jsx)(D.nv, {
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
                    n.jsx)(nU, {
                        text: l
                    })
                } : void 0,
                children: a.map(e => (0,
                n.jsx)(nq.Z, {
                    value: e.value,
                    sx: {
                        height: 48
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.label,
                        style: {
                            fontSize: 20,
                            color: d.O9.onSurface
                        }
                    })
                }, e.value))
            })
        }
          , nX = e => {
            let {id: t, value: r, label: l, suffix: a, menuList: o} = e;
            return (0,
            n.jsxs)(i.Z, {
                position: "relative",
                children: [(0,
                n.jsx)(D.nv, {
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
                        ...n$,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: d.O9.correctWeak
                        }
                    },
                    InputProps: (null == a ? void 0 : a.length) ? {
                        endAdornment: (0,
                        n.jsx)(nU, {
                            text: a
                        })
                    } : void 0,
                    children: o.map(e => (0,
                    n.jsx)(nq.Z, {
                        value: e.value,
                        sx: {
                            height: 48
                        },
                        children: (0,
                        n.jsx)(x.J$, {
                            src: e.label,
                            style: {
                                fontSize: 20,
                                color: d.O9.onSurface
                            }
                        })
                    }, e.value))
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    margin: "auto",
                    width: "48px",
                    height: "48px",
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , nG = e => {
            let {id: t, value: r, label: l, suffix: a, menuList: o} = e;
            return (0,
            n.jsxs)(i.Z, {
                position: "relative",
                children: [(0,
                n.jsx)(D.nv, {
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
                        ...n$,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: d.O9.importantWeak
                        }
                    },
                    InputProps: (null == a ? void 0 : a.length) ? {
                        endAdornment: (0,
                        n.jsx)(nU, {
                            text: a
                        })
                    } : void 0,
                    children: o.map(e => (0,
                    n.jsx)(nq.Z, {
                        value: e.value,
                        sx: {
                            height: 48
                        },
                        children: (0,
                        n.jsx)(x.J$, {
                            src: e.label,
                            style: {
                                fontSize: 20,
                                color: d.O9.onSurface
                            }
                        })
                    }, e.value))
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    margin: "auto",
                    width: "48px",
                    height: "48px",
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , nK = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(x.J$, {
                src: t,
                style: {
                    fontSize: 20,
                    color: d.O9.onSurfaceWeak2
                }
            })
        }
          , nU = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(nH.Z, {
                position: "end",
                sx: {
                    alignSelf: "end",
                    height: "inherit",
                    marginBottom: 1.5
                },
                children: (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurfaceWeak2
                    }
                })
            })
        }
          , nY = e => {
            var t;
            let {placeHolder: r, selectables: i, correct: l, answered: a} = e
              , s = l.id === a
              , o = null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : "";
            return s ? (0,
            n.jsx)(nV, {
                mode: "Correct",
                value: o,
                placeHolder: r,
                selectables: i
            }) : (0,
            n.jsxs)(c.sg, {
                children: [(0,
                n.jsx)(nV, {
                    mode: "Incorrect",
                    value: o,
                    placeHolder: r,
                    selectables: i
                }), (0,
                n.jsx)(c.LZ, {
                    y: 1
                }), (0,
                n.jsx)(x.J$, {
                    src: l.text,
                    style: {
                        fontSize: 20,
                        color: d.O9.important,
                        padding: "0 24px",
                        wordWrap: "break-word"
                    }
                })]
            })
        }
          , nQ = () => {
            let e = (0,
            l.Dv)(nJ)
              , t = (0,
            Z.R3)();
            return e ? (0,
            n.jsx)(n0, {
                apData: e,
                orientation: t
            }) : null
        }
          , n0 = e => {
            let {apData: t, orientation: r} = e;
            return (0,
            n.jsx)(c.sg, {
                width: "100%",
                px: 4,
                gap: 3,
                children: t.map( (e, l) => {
                    var a, s;
                    switch (e.case) {
                    case "apSelection":
                        return (0,
                        n.jsx)(i.Z, {
                            minHeight: "landscape" === r && l === t.length - 1 ? 114 : void 0,
                            children: (0,
                            n.jsx)(nY, {
                                placeHolder: e.placeHolder,
                                selectables: e.selectables,
                                correct: e.correct,
                                answered: null === (a = e.answered) || void 0 === a ? void 0 : a.id
                            }, e.id)
                        }, e.id);
                    case "apKeyboardWrite":
                        return (0,
                        n.jsx)(i.Z, {
                            minHeight: "landscape" === r && l === t.length - 1 ? 114 : void 0,
                            children: (0,
                            n.jsx)(nz, {
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
          , n1 = () => {
            let {convertInputToAnswerText: e} = (0,
            Z.gH)()
              , t = (0,
            a.useCallback)(t => {
                let r = t.childAnswerList.reduce( (t, r, n) => {
                    switch (r.apData.case) {
                    case "apSelection":
                        {
                            let {placeHolder: e, selectables: i, correctItem: l} = function(e) {
                                var t, r;
                                let n = null !== (t = e.placeHolder) && void 0 !== t ? t : new ew.i
                                  , i = e.itemList.map(e => ({
                                    id: e.itemId,
                                    text: e.text
                                }));
                                e.shouldShuffle && i.sort( () => .5 - Math.random());
                                let l = null !== (r = e.correctItem) && void 0 !== r ? r : new ew.LE;
                                return {
                                    placeHolder: n,
                                    selectables: i,
                                    correctItem: l
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
                                let n = null !== (r = t.placeHolder) && void 0 !== r ? r : new ew.i
                                  , i = t.correctAnswerList.reduce( (t, r) => {
                                    if (!r.option.case || !r.option.value)
                                        return t;
                                    if ("text" === r.option.case) {
                                        let n = e(r.option.value);
                                        return [...t, {
                                            case: "text",
                                            value: n
                                        }]
                                    }
                                    return [...t, r.option]
                                }
                                , []);
                                return {
                                    placeHolder: n,
                                    correct: i
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
                , []);
                return {
                    apData: r
                }
            }
            , []);
            return {
                formatDto: t
            }
        }
          , n2 = () => {
            let[e,t] = (0,
            a.useState)()
              , r = (0,
            a.useCallback)(e => t(e), [])
              , n = (0,
            a.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , n4 = () => {
            let[e,t] = (0,
            l.KO)(nJ)
              , {convertInputToAnswerText: r} = (0,
            Z.gH)()
              , n = (0,
            a.useCallback)(e => {
                if (!e.answered)
                    return "empty";
                let t = e.answered.id === e.correct.id;
                return t ? "correct" : "incorrect"
            }
            , [])
              , i = (0,
            a.useCallback)(n => {
                if (!n.answered)
                    return "empty";
                if (n.answered.length > 300)
                    return "overflow";
                let i = r(n.answered)
                  , l = e.map(e => e.id === n.id ? {
                    ...n,
                    answered: i
                } : e);
                t(l);
                let a = n.correct.find(e => "text" === e.case ? e.value === i : RegExp(e.value).test(i));
                return a ? "correct" : "incorrect"
            }
            , [e, r, t])
              , s = (0,
            a.useCallback)(e => {
                let t = e.map(e => "apSelection" === e.case ? n(e) : i(e));
                return t.includes("overflow") ? "overflow" : t.includes("empty") ? "empty" : t.every(e => "correct" === e) ? "correct" : "incorrect"
            }
            , [i, n]);
            return {
                validate: s
            }
        }
          , n9 = () => {
            let e = (0,
            a.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        let r = e.childAnswerList.reduce( (e, r, n) => {
                            switch (r.apData.case) {
                            case "apSelection":
                                {
                                    let {selectables: i} = function(e) {
                                        let t = e.itemList.map(e => ({
                                            id: e.itemId,
                                            text: e.text
                                        }));
                                        return {
                                            selectables: t
                                        }
                                    }(r.apData.value)
                                      , l = i.find(e => {
                                        var r;
                                        return e.text === (null === (r = t.texts) || void 0 === r ? void 0 : r[n])
                                    }
                                    )
                                      , a = l ? l.id : 0;
                                    return [...e, {
                                        type: "selection",
                                        id: a
                                    }]
                                }
                            case "apKeyboardWrite":
                                return [...e, {
                                    type: "keyboard",
                                    value: t.texts ? t.texts[n] : ""
                                }];
                            default:
                                return e
                            }
                        }
                        , []);
                        return {
                            answered: r
                        }
                    }(e, r.apViewState);
                throw Error("no view state")
            }
            )(e, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , n8 = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => t(!0), [])
              , n = (0,
            a.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , n3 = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => t(!0), [])
              , n = (0,
            a.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , n5 = () => {
            let e = (0,
            l.b9)(nP)
              , t = (0,
            l.Dv)(nJ)
              , [r,n] = (0,
            a.useState)(0)
              , [i,s] = (0,
            a.useState)("incorrect")
              , {validate: o} = n4()
              , c = (0,
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
            , [t, o, r])
              , d = (0,
            a.useCallback)(n => {
                let l = ek.sS.CORRECT
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
            , [t, e, i, r]);
            return {
                prepare: c,
                fix: d
            }
        }
          , n6 = () => {
            let e = (0,
            l.b9)(nJ)
              , [t,r] = (0,
            a.useState)([])
              , {convertInputToAnswerText: n} = (0,
            Z.gH)()
              , i = (t, r) => {
                let i = n(t);
                e(e => e.map(e => e.id === r.id ? {
                    ...r,
                    answered: i
                } : e)),
                s(r.id, t)
            }
              , s = (e, t) => {
                r(r => {
                    let n = r.findIndex(t => t.id === e);
                    return -1 === n ? [...r, {
                        id: e,
                        value: t
                    }] : r.map(r => r.id === e ? {
                        ...r,
                        value: t
                    } : r)
                }
                )
            }
              , o = e => {
                let r = t.find(t => t.id === e);
                return r ? r.value : ""
            }
            ;
            return {
                handleChanged: i,
                getInput: o
            }
        }
          , n7 = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(nJ)
              , i = (0,
            Z.R3)();
            return r ? (0,
            n.jsx)(ie, {
                apData: r,
                orientation: i,
                onAnswered: t
            }) : null
        }
          , ie = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {prepare: o, fix: d} = n5()
              , {showing: u, show: x, hide: p} = n2()
              , {show: h, hide: m, visibled: g} = n8()
              , {show: v, hide: f, visibled: b} = n3()
              , {handleChanged: j, getInput: w} = n6()
              , S = (0,
            a.useCallback)(e => {
                o(v, h, () => x("correct"), () => x("redo"), () => x("incorrect"), e)
            }
            , [o, h, v, x])
              , y = (0,
            a.useCallback)( () => S(!1), [S])
              , C = (0,
            a.useCallback)( () => {
                d(l),
                p()
            }
            , [d, p, l])
              , k = (0,
            a.useCallback)( () => {
                m(),
                S(!0)
            }
            , [m, S])
              , I = e => {
                switch (e.case) {
                case "apSelection":
                    return (0,
                    n.jsx)(nF, {
                        data: e
                    });
                case "apKeyboardWrite":
                    return (0,
                    n.jsx)(D.sR, {
                        mode: "Default",
                        value: w(e.id),
                        placeHolder: e.placeHolder,
                        onChange: t => j(t, e)
                    })
                }
            }
            ;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                width: "100%",
                children: [(0,
                n.jsx)(c.sg, {
                    px: 4,
                    gap: 3,
                    children: t.map(e => (0,
                    n.jsx)(a.Fragment, {
                        children: I(e)
                    }, e.id))
                }), (0,
                n.jsx)(c.LZ, {
                    y: "portrait" === r ? 5 : 6
                }), (0,
                n.jsx)(i.Z, {
                    alignSelf: "flex-end",
                    children: (0,
                    n.jsx)(s.Vy, {
                        text: "解答する",
                        disabled: void 0 !== u,
                        onClick: y
                    })
                }), u && (0,
                n.jsx)(tP.G, {
                    result: u,
                    portalElem: "portrait" === r ? "body" : G.L,
                    handleOnStop: "redo" === u ? p : C
                }), (0,
                n.jsx)(eF.Ux, {
                    isOpen: b,
                    onClick: f
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: g,
                    onClickCancel: m,
                    onClickAnswer: k
                })]
            })
        }
          , it = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , c = (0,
            l.b9)(nJ)
              , [d,u] = (0,
            l.KO)(nP)
              , x = (0,
            Z.R3)()
              , {windowHeight: p} = (0,
            o.AS)()
              , {getViewState: h} = n9()
              , {formatDto: m} = n1();
            return ((0,
            a.useEffect)( () => {
                let {apData: e} = m(t);
                if (r) {
                    let n = h(t, r);
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
            , [t, m, h, r, c, u]),
            d) ? (0,
            n.jsx)(i.Z, {
                height: "portrait" === x ? "auto" : p - eL.J9 - 18,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                pt: 4,
                pb: "portrait" === x ? 4 : 12,
                px: 2,
                children: (0,
                n.jsx)(nQ, {})
            }) : (0,
            n.jsx)(i.Z, {
                height: "portrait" === x ? "auto" : p - eL.J9 - 18,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                p: 4,
                pb: 2,
                px: 2,
                children: (0,
                n.jsx)(n7, {
                    onAnswered: s
                })
            })
        }
        ;
        var ir = r(15861);
        let ii = (0,
        a.forwardRef)( (e, t) => {
            let {width: r, height: i, text: l, children: a} = e
              , s = (0,
            Z.R3)();
            return (0,
            n.jsx)(il, {
                ref: t,
                width: r,
                height: i,
                text: l,
                orientation: s,
                children: a
            })
        }
        );
        ii.displayName = "WritingArea";
        let il = (0,
        a.forwardRef)( (e, t) => {
            let {width: r, height: l, text: s, children: o, orientation: c} = e
              , [u,x] = (0,
            a.useState)(0);
            return (0,
            a.useEffect)( () => {
                let e = Math.floor(r / s.length);
                x(Math.min("portrait" === c ? 257 : 238, e))
            }
            , [r, s, c]),
            (0,
            n.jsxs)(i.Z, {
                position: "relative",
                border: "4px solid ".concat(d.O9.onSurfaceWeak3),
                borderRadius: 2,
                children: [(0,
                n.jsx)(ir.Z, {
                    width: r,
                    maxHeight: "portrait" === c ? 344 : 317,
                    fontFamily: "KanjiStrokeOrders",
                    fontSize: u,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: d.O9.onSurfaceWeak3,
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
                n.jsx)(i.Z, {
                    ref: t,
                    width: "100%",
                    height: l,
                    position: "relative",
                    children: o
                })]
            })
        }
        );
        il.displayName = "WritingAreaView";
        let ia = (0,
        F.cn)(void 0)
          , is = (0,
        F.cn)("")
          , io = (0,
        F.cn)(0)
          , ic = (0,
        F.cn)("none")
          , id = (0,
        F.cn)(void 0)
          , iu = (0,
        F.cn)("")
          , ix = () => {
            let e = (0,
            l.Dv)(is)
              , t = (0,
            l.Dv)(id)
              , r = (0,
            l.Dv)(iu)
              , i = (0,
            l.Dv)(T.uR)
              , a = (0,
            Z.R3)();
            return (0,
            n.jsx)(ip, {
                correct: e,
                answered: t,
                writtenSVG: r,
                orientation: a,
                isViewer: i
            })
        }
          , ip = e => {
            let {correct: t, answered: r, writtenSVG: l, orientation: a, isViewer: d} = e
              , {elementRef: u, elementSize: x} = (0,
            o.yU)();
            return (0,
            n.jsx)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: (0,
                n.jsx)(i.Z, {
                    width: "100%",
                    maxWidth: 712,
                    children: (0,
                    n.jsxs)(c.sg, {
                        gap: "portrait" === a ? 2 : 5,
                        children: [(0,
                        n.jsxs)(ii, {
                            ref: u,
                            width: x.width,
                            height: "portrait" === a ? 360 : 336,
                            text: t,
                            children: [d && (0,
                            n.jsx)(i.Z, {
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                width: 144,
                                height: 144,
                                children: (0,
                                n.jsx)(s.$V, {
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
                        n.jsx)(i.Z, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(s.Vy, {
                                text: "できた",
                                disabled: d
                            })
                        })]
                    })
                })
            })
        }
          , ih = () => {
            let e = (0,
            a.useCallback)(e => {
                let t = e.correctAnswer
                  , r = e.gradeId
                  , n = (0,
                tK.a)(e.replaceType)
                  , i = e.interactiveInkSetting ? (0,
                eF.Wm)(e.interactiveInkSetting) : "Math"
                  , l = {
                    mode: i,
                    useLK: e.useLk,
                    sk: e.skNameOptional.value
                };
                return {
                    correct: t,
                    grade: r,
                    replaceType: n,
                    recognitionConfig: l
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , im = () => {
            let[e,t] = (0,
            a.useState)()
              , r = (0,
            a.useCallback)(e => t(e), [])
              , n = (0,
            a.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , ig = () => {
            let e = (0,
            l.Dv)(io)
              , t = (0,
            l.Dv)(ic)
              , {forceReplace: r} = (0,
            t$.qR)()
              , {replace: n} = (0,
            t$.kE)()
              , i = (0,
            a.useCallback)(e => 0 === e.length, [])
              , s = (0,
            a.useCallback)( (l, a) => {
                let s = i(l);
                if (s)
                    return "empty";
                let o = l.replace(/\n/g, "english" === t ? " " : "")
                  , {isMatched: c} = n(o, a, t);
                if (c)
                    return "correct";
                let d = r(o, e, t)
                  , u = (0,
                tV.r)(t, [a], d)
                  , {isMatched: x} = n(u, a, t);
                return x ? "correct" : "incorrect"
            }
            , [i, r, e, n, t]);
            return {
                validate: s,
                checkEmpty: i
            }
        }
          , iv = () => {
            let e = (0,
            a.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        var t;
                        let r = e.recognizedText
                          , n = null !== (t = e.svg) && void 0 !== t ? t : "";
                        return {
                            answered: r,
                            svg: n
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , ib = () => {
            let[e,t] = (0,
            a.useState)(!1)
              , r = (0,
            a.useCallback)( () => {
                t(!0)
            }
            , [])
              , n = (0,
            a.useCallback)( () => {
                t(!1)
            }
            , []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , ij = () => {
            let e = (0,
            l.b9)(iu)
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
            , [i])
              , u = (0,
            a.useCallback)( (t, n) => {
                r(t),
                e(n),
                i(!1)
            }
            , [e])
              , x = (0,
            a.useCallback)( () => {
                r(""),
                o(!0)
            }
            , [r, o])
              , p = (0,
            a.useCallback)( () => {
                o(!1)
            }
            , [o]);
            return {
                opened: c,
                recognizing: d,
                recognized: u,
                disconnected: x,
                reconnect: p,
                recognizedText: t,
                isOpenReconnectMessage: s,
                isRecognizing: n
            }
        }
          , iw = e => {
            let t = (0,
            l.Dv)(iu)
              , r = (0,
            l.b9)(id)
              , [n,i] = (0,
            a.useState)("incorrect")
              , {validate: s} = ig()
              , o = (0,
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
            , [e, s])
              , c = (0,
            a.useCallback)( (e, i) => {
                let l = ek.sS.CORRECT
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
            , [r, n, t]);
            return {
                prepare: o,
                fix: c
            }
        }
          , iS = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(is)
              , i = (0,
            l.Dv)(id)
              , a = (0,
            l.Dv)(ia)
              , s = (0,
            l.Dv)(T.As)
              , o = (0,
            l.Dv)(T.uR)
              , c = (0,
            Z.R3)();
            return a ? (0,
            n.jsx)(iy, {
                correct: r,
                recognitionConfig: a,
                orientation: c,
                selectedTool: s,
                onAnswered: t,
                isViewer: o,
                isAnswered: void 0 !== i
            }) : null
        }
          , iy = e => {
            let {correct: t, recognitionConfig: r, orientation: l, selectedTool: d, onAnswered: u, isViewer: x, isAnswered: p} = e
              , h = (0,
            a.useRef)(null)
              , {prepare: m, fix: g} = iw(t)
              , {showing: v, show: f, hide: b} = im()
              , {elementRef: j, elementSize: w} = (0,
            o.yU)()
              , {opened: S, recognizing: y, recognized: C, disconnected: k, reconnect: I, recognizedText: O, isOpenReconnectMessage: A, isRecognizing: _} = ij()
              , {show: N, hide: R, visibled: L} = ib()
              , {onPointerDown: E, onPointerUp: Z} = (0,
            eF._n)()
              , T = (0,
            a.useCallback)( () => {
                y(),
                E()
            }
            , [y])
              , M = (0,
            a.useCallback)( (e, t) => {
                C(e, t),
                Z()
            }
            , [C])
              , W = (0,
            a.useCallback)(e => {
                m(O, N, () => f("kanji_correct"), () => f("kanji_incorrect"), () => f("incorrect"), e)
            }
            , [O, m, f, N])
              , z = (0,
            a.useCallback)( () => W(!1), [W])
              , q = (0,
            a.useCallback)( () => {
                g(O, u),
                b()
            }
            , [g, O, u, b])
              , H = (0,
            a.useCallback)( () => {
                R(),
                W(!0)
            }
            , [R, W])
              , J = "portrait" === l;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsx)(i.Z, {
                    width: "100%",
                    maxWidth: 712,
                    children: (0,
                    n.jsxs)(c.sg, {
                        gap: J ? 2 : 5,
                        children: [(0,
                        n.jsx)(ii, {
                            ref: j,
                            width: w.width,
                            height: J ? 360 : 336,
                            text: t,
                            children: !A && (0,
                            n.jsx)(tJ, {
                                ref: h,
                                width: w.width,
                                height: w.height,
                                recognitionConfig: r,
                                mode: "eraser" === d ? "eraser" : "pen",
                                onOpened: S,
                                onRecognizing: T,
                                onRecognized: M,
                                onDisconnected: k
                            })
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(s.Vy, {
                                text: "できた",
                                disabled: x || _ || A || void 0 !== v || p,
                                onClick: z
                            })
                        })]
                    })
                }), v && (0,
                n.jsx)(D.GI, {
                    result: v,
                    portalElem: "body",
                    handleOnStop: q
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: L,
                    onClickAnswer: H,
                    onClickCancel: R
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: A,
                    y: J ? 96 : 24,
                    onClick: I
                })]
            })
        }
          , iC = e => {
            let {dto: t, replayResource: r, onAnswered: s} = e
              , o = (0,
            l.b9)(is)
              , c = (0,
            l.b9)(io)
              , d = (0,
            l.b9)(ia)
              , u = (0,
            l.b9)(ic)
              , [x,p] = (0,
            l.KO)(id)
              , h = (0,
            l.b9)(iu)
              , {formatDto: m} = ih()
              , {getViewState: g} = iv();
            return ((0,
            a.useEffect)( () => {
                let {correct: e, grade: n, replaceType: i, recognitionConfig: l} = m(t);
                if (r) {
                    let t = g(r);
                    o(e),
                    p(t.answered),
                    h(t.svg);
                    return
                }
                return o(e),
                d(l),
                c(n),
                u(i),
                () => {
                    o(""),
                    p(void 0),
                    d(void 0),
                    c(0),
                    u("none"),
                    h("")
                }
            }
            , [t, m, g, r, p, o, c, d, u, h]),
            void 0 !== x || r) ? (0,
            n.jsx)(i.Z, {
                p: 2,
                children: (0,
                n.jsx)(ix, {})
            }) : (0,
            n.jsx)(i.Z, {
                p: 2,
                children: (0,
                n.jsx)(iS, {
                    onAnswered: s
                })
            })
        }
        ;
        var ik = r(5152)
          , iI = r.n(ik);
        r(59199),
        r(79361),
        iI()( () => Promise.all([r.e(153), r.e(189), r.e(196), r.e(755)]).then(r.bind(r, 60755)).then(e => e.Answering), {
            loadableGenerated: {
                webpack: () => [60755]
            },
            ssr: !1
        });
        let iO = iI()( () => Promise.all([r.e(153), r.e(883), r.e(909)]).then(r.bind(r, 97909)).then(e => e.VoiceElsa), {
            loadableGenerated: {
                webpack: () => [97909]
            },
            ssr: !1
        })
          , iA = 24
          , i_ = a.memo(e => {
            let {answerMode: t, pendingAnswerProcess: r, startAnswerProcess: i, endAnswerProcess: a, isAnswerProcessing: s} = e
              , o = (0,
            l.Dv)(T.dx)
              , c = (0,
            l.Dv)(T.kQ)
              , d = (0,
            l.Dv)($);
            return o ? (0,
            n.jsx)(iN, {
                programResource: o,
                replayResource: c,
                answerMode: t,
                answerType: d,
                pendingAnswerProcess: r,
                startAnswerProcess: i,
                endAnswerProcess: a,
                isAnswerProcessing: s
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
        );
        i_.displayName = "AnswerPanel";
        let iN = e => {
            let {programResource: t, replayResource: r, answerMode: l, answerType: a, pendingAnswerProcess: s, startAnswerProcess: o, endAnswerProcess: c, isAnswerProcessing: u} = e
              , x = t.contentResource.legacyAnswer
              , p = x.apData
              , {sendUnknownAnswerPattern: h, sendAnswerPatternChanged: m, sendInvalidReplayResource: g} = iT()
              , v = () => {
                var e, t, i, a, d, m, g, v, f, b, j;
                switch (p.case) {
                case "apSelection":
                    return e = p.value,
                    (0,
                    n.jsx)(iR, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(ne, {
                            dto: e,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apMultipleSelection":
                    return t = p.value,
                    (0,
                    n.jsx)(iR, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(tg, {
                            dto: t,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apWordOrderSort":
                    return i = p.value,
                    (0,
                    n.jsx)(iR, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(rI, {
                            dto: i,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apImageSelection":
                    return a = p.value,
                    (0,
                    n.jsx)(iR, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(eN, {
                            dto: a,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apSynchronization":
                    return d = p.value,
                    (0,
                    n.jsx)(iR, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(it, {
                            dto: d,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apVoiceInput":
                    return m = p.value,
                    (0,
                    n.jsx)(iL, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(iO, {
                            dto: m,
                            replayResource: r,
                            onAnswered: o,
                            isAnswerProcessing: u
                        })
                    }, x.originalId);
                case "apKeyboardWrite":
                    return g = p.value,
                    (0,
                    n.jsx)(iR, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(e0, {
                            dto: g,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apHandWrite":
                    return v = p.value,
                    (0,
                    n.jsx)(iR, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(nW, {
                            dto: v,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apSyncedHandWrite":
                    return f = p.value,
                    (0,
                    n.jsx)(iR, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(t9, {
                            dto: f,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apTrace":
                    return b = p.value,
                    (0,
                    n.jsx)(iL, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(iC, {
                            dto: b,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, x.originalId);
                case "apHandWriteSelfJudgement":
                    return j = p.value,
                    (0,
                    n.jsx)(iL, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(rV, {
                            dto: j,
                            replayResource: r,
                            onPendingAnswered: s,
                            onAnswered: o
                        })
                    }, x.originalId)
                }
                return h(),
                (0,
                n.jsx)(iE, {})
            }
            ;
            return (0,
            n.jsx)(i.Z, {
                id: G.L,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.O9.surface,
                border: "1px solid ".concat(d.O9.onSurfaceWeak3),
                borderRadius: 2,
                display: "apWordOrderSort" === p.case || "apSyncedHandWrite" === p.case && "triple" === a ? "flex" : "block",
                children: ( () => {
                    if (!r)
                        return v();
                    try {
                        let e = JSON.parse(r.viewStateJSON)
                          , i = e.apName;
                        if (!i)
                            return v();
                        let l = t.contentResource.answer.name;
                        if (i === l)
                            return v();
                        return m(),
                        (0,
                        n.jsx)(iD, {})
                    } catch (e) {
                        return g(),
                        (0,
                        n.jsx)(iZ, {})
                    }
                }
                )()
            })
        }
          , iR = e => {
            let {children: t, answerMode: r, endAnswerProcess: i} = e
              , o = (0,
            l.Dv)(T.uR)
              , c = (0,
            l.Dv)(T.$p)
              , [d,u] = (0,
            a.useState)()
              , x = (0,
            a.useCallback)( () => {
                u(!0),
                i()
            }
            , [i]);
            (0,
            a.useEffect)( () => {
                u(!1)
            }
            , [r]);
            let p = "StartFromReplay" === c;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [t, ("Answered" === r || p) && (0,
                P.createPortal)((0,
                n.jsx)(J.E.div, {
                    style: {
                        position: "fixed",
                        bottom: iA,
                        right: iA,
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
                    n.jsx)(s.Vy, {
                        width: 200,
                        text: "次へ",
                        disabled: p || o || d,
                        onClick: x
                    })
                }), document.body)]
            })
        }
          , iL = e => {
            let {children: t, answerMode: r, endAnswerProcess: i} = e;
            return (0,
            a.useEffect)( () => {
                "Answered" === r && i()
            }
            , [r, i]),
            (0,
            n.jsx)(n.Fragment, {
                children: t
            })
        }
          , iE = () => (0,
        n.jsx)(i.Z, {
            sx: {
                padding: 1
            },
            children: (0,
            n.jsx)(s.xv, {
                size: "lg",
                textAlign: "center",
                color: "onSurfaceWeak1",
                children: "未知のAP"
            })
        })
          , iD = () => (0,
        n.jsx)(i.Z, {
            sx: {
                padding: 1
            },
            children: (0,
            n.jsx)(s.xv, {
                size: "lg",
                textAlign: "center",
                color: "onSurfaceWeak1",
                children: "問題の解答形式が変更されたため プレビューを表示できません。"
            })
        })
          , iZ = () => (0,
        n.jsx)(i.Z, {
            sx: {
                padding: 1
            },
            children: (0,
            n.jsx)(s.xv, {
                size: "lg",
                textAlign: "center",
                color: "onSurfaceWeak1",
                children: "不正な解答リプレイデータ"
            })
        })
          , iT = () => {
            var e, t;
            let r = (0,
            l.Dv)(T.dx)
              , n = null !== (e = null == r ? void 0 : r.id) && void 0 !== e ? e : 0
              , i = null !== (t = null == r ? void 0 : r.contentResource.answer.name) && void 0 !== t ? t : "unknown"
              , a = (0,
            l.Dv)(T.$p)
              , s = "StartFromReplay" === a
              , {analyticsEvent: c} = (0,
            o.WS)()
              , d = e => {
                s && c({
                    eventName: "解答リプレイ「解答データを正しく読み込めませんでした」表示",
                    params: {
                        programId: n,
                        ap: i,
                        error: e
                    }
                })
            }
              , u = () => d("未知のAPがある")
              , x = () => d("APが変更された")
              , p = () => d("保存された解答リプレイデータが破損している");
            return {
                sendUnknownAnswerPattern: u,
                sendAnswerPatternChanged: x,
                sendInvalidReplayResource: p
            }
        }
          , iM = (e, t) => {
            switch (e.type) {
            case "ClassicQubena":
                return (0,
                n.jsx)(iW, {
                    source: e,
                    showImageDialog: t
                });
            case "Empty":
                return (0,
                n.jsx)(iz, {});
            case "EnglishWord":
                return (0,
                n.jsx)(iq, {
                    source: e
                });
            case "EnglishWordV2":
                return (0,
                n.jsx)(iH, {
                    source: e
                });
            case "Html":
                return (0,
                n.jsx)(iJ, {
                    source: e
                });
            case "KanjiDefault":
                return (0,
                n.jsx)(iP, {
                    source: e
                });
            case "KanjiSelfJudgement":
                return (0,
                n.jsx)(iF, {
                    source: e
                });
            case "KanjiSelfJudgementLegacy":
                return (0,
                n.jsx)(iV, {
                    source: e
                });
            case "Simple":
                return (0,
                n.jsx)(i$, {
                    source: e,
                    showImageDialog: t
                })
            }
        }
          , iW = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.image;
            return i ? (0,
            n.jsx)("div", {
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                children: (0,
                n.jsxs)(c.sg, {
                    alignItems: "center",
                    gap: 2,
                    children: [(0,
                    n.jsx)("img", {
                        className: "answer-content-image",
                        src: i,
                        width: "100%"
                    }), (0,
                    n.jsx)(x.hu, {
                        onClick: () => {
                            r && r(i)
                        }
                    })]
                }, 0)
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , iz = () => (0,
        n.jsx)(n.Fragment, {})
          , iq = e => {
            let {source: t} = e
              , {parameter: r} = t
              , {targetWord: i, partOfSpeech: l, variantForm: a, countability: s, baseForm: o, wordUsageAndMeaning: c, singularForm: d, pluralForm: u, thirdParsonSingular: x, pastTense: p, presentParticiple: h, pastParticiple: m, positiveDegree: g, comparativeDegree: v, superlativeDegree: f, exampleUsage: b, meaningOfExample: j} = r
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
                value: p
            }, {
                label: "現在分詞",
                value: h
            }, {
                label: "過去分詞",
                value: m
            }, {
                label: "原級",
                value: g
            }, {
                label: "比較級",
                value: v
            }, {
                label: "最上級",
                value: f
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
                        }), b && b.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), (0,
                            n.jsxs)("b", {
                                children: [b, j ? "(".concat(j, ")") : ""]
                            })]
                        })]
                    })
                })
            })
        }
          , iH = e => {
            let {source: t} = e
              , {parameter: r} = t
              , {targetWord: i, partOfSpeech: l, variantForm: a, countability: s, baseForm: o, wordUsageAndMeaning: c, singularForm: d, pluralForm: u, thirdParsonSingular: x, pastTense: p, presentParticiple: h, pastParticiple: m, positiveDegree: g, comparativeDegree: v, superlativeDegree: f, exampleUsage: b, meaningOfExample: j} = r
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
                value: p
            }, {
                label: "現在分詞",
                value: h
            }, {
                label: "過去分詞",
                value: m
            }, {
                label: "原級",
                value: g
            }, {
                label: "比較級",
                value: v
            }, {
                label: "最上級",
                value: f
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
                        }), b && b.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), (0,
                            n.jsxs)("b", {
                                children: [b.replace(/\n/g, "<br />"), (0,
                                n.jsx)("br", {}), (j || "").replace(/\n/g, "<br />")]
                            })]
                        })]
                    })
                })
            })
        }
          , iJ = e => {
            let {source: t} = e
              , r = t.parameter.html || "";
            return (0,
            n.jsx)("div", {
                className: "question-area",
                children: (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: r
                    })
                })
            })
        }
          , iP = e => {
            let t, {source: r} = e, i = r.parameter, l = i.phrase, a = i.phrasePronunciation, s = i.grade;
            return t = s <= 2 ? "<b><ruby><rb>語</rb><rp>(</rp><rt>ご</rt><rp>)</rp></ruby>　　<ruby><rb>句</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>：".concat(l, "</b><br/><b><ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>　　み：").concat(a, "</b>") : s <= 5 ? "<b>語　　<ruby><rb>句</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>：".concat(l, "</b><br/><b>読　　み：").concat(a, "</b>") : "<b>語　　句：".concat(l, "</b><br/><b>読　　み：").concat(a, "</b>"),
            (0,
            n.jsx)("div", {
                className: "question-area",
                children: (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: t
                    })
                })
            })
        }
          , iF = e => {
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
                n.jsx)(x.J$, {
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
          , iV = e => {
            let {source: t} = e
              , r = t.parameter
              , i = r.questionWord
              , l = r.questionWordOthers
              , a = i.length
              , s = r.grade;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: s <= 1 ? "<ruby><rb>正解</rb><rp>(</rp><rt>せいかい</rt><rp>)</rp></ruby>はこちらです" : s <= 5 ? "正<ruby><rb>解</rb><rp>(</rp><rt>かい</rt><rp>)</rp></ruby>はこちらです" : "正解はこちらです"
                    })
                }), (0,
                n.jsx)("p", {
                    className: "font-kanji-stroke-order ".concat(a <= 2 ? "adjust-font-upto2" : "adjust-font-over3"),
                    style: {
                        "--wordnum": a
                    },
                    children: i
                }), "" !== l && (0,
                n.jsxs)("div", {
                    className: "main-text",
                    style: {
                        fontSize: "20px",
                        lineHeight: 1.7
                    },
                    children: ["※", (0,
                    n.jsx)("b", {
                        children: l
                    }), "も可"]
                })]
            })
        }
          , i$ = e => {
            var t;
            let {source: r, showImageDialog: i} = e
              , l = r.parameter
              , a = l.components.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , s = null !== (t = r.images) && void 0 !== t ? t : [];
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Text:".concat(t))), 0 !== s.length && (0,
                n.jsx)("div", {
                    className: "image-area",
                    children: s.map( (e, t) => (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-medium"
                        }), (0,
                        n.jsx)(x.hu, {
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Image:".concat(t)))
                })]
            })
        }
        ;
        var iB = r(51408);
        let iX = a.memo(e => {
            let {minHeight: t, margin: r} = e
              , {getDescriptionSource: i} = (0,
            iB.M)()
              , l = i();
            return void 0 === l ? (0,
            n.jsx)(n.Fragment, {
                children: "開発中のAD"
            }) : (0,
            n.jsx)(iG, {
                minHeight: t,
                margin: r,
                description: l
            })
        }
        );
        iX.displayName = "DescriptionPanel";
        let iG = e => {
            let {minHeight: t, margin: r, description: o} = e
              , c = (0,
            l.b9)(E.Y)
              , u = (0,
            l.b9)(E.u)
              , x = (0,
            a.useCallback)(e => {
                c(e),
                u(!0)
            }
            , [c, u]);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(i.Z, {
                    height: 56,
                    bgcolor: d.O9.important,
                    sx: {
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8
                    },
                    paddingX: 3,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(s.xv, {
                        color: "onSurfaceWeak4",
                        size: "xl",
                        fontWeight: "bold",
                        children: "解説"
                    })
                }), (0,
                n.jsx)(i.Z, {
                    minHeight: t,
                    marginBottom: r,
                    bgcolor: d.O9.surface,
                    border: "1px solid ".concat(d.O9.onSurfaceWeak3),
                    sx: {
                        borderBottomRightRadius: 8,
                        borderBottomLeftRadius: 8
                    },
                    children: iM(o, x)
                })]
            })
        }
    },
    78949: function(e, t, r) {
        r.d(t, {
            wn: function() {
                return p
            },
            kk: function() {
                return h
            },
            ur: function() {
                return g
            },
            D7: function() {
                return m
            }
        });
        var n = r(72213)
          , i = r(8204)
          , l = r(48583)
          , a = r(67294)
          , s = r(61982)
          , o = r(65166)
          , c = r(66105)
          , d = r(71608)
          , u = r(92260)
          , x = r(49682);
        let p = e => {
            let t = (0,
            l.b9)(u.si)
              , r = (0,
            l.b9)(u.Ok)
              , p = (0,
            l.Dv)(x.W)
              , h = (0,
            l.Dv)(u.uR)
              , [m,g] = (0,
            l.KO)(c.D)
              , v = (0,
            l.b9)(u.kU)
              , [f,b] = (0,
            a.useState)()
              , [j,w] = (0,
            a.useState)(!1)
              , [S,y] = (0,
            a.useState)(!1)
              , [C,k] = (0,
            a.useState)(!1)
              , I = (0,
            a.useMemo)( () => f ? "Answered" : j ? "PendingAnswered" : "Answering", [f, j])
              , O = (0,
            a.useMemo)( () => (null == f ? void 0 : f.pagePath) === "cursor/result", [null == f ? void 0 : f.pagePath])
              , A = (0,
            d.U4)()
              , _ = (0,
            d.Fl)()
              , N = (0,
            d.fc)()
              , R = (0,
            d.DV)()
              , L = (0,
            a.useCallback)(async () => {
                f && (r({
                    type: s.zE.ANSWER_END
                }),
                _(),
                O && (t(1),
                await new Promise(e => setTimeout(e, 2e3))),
                N(f),
                w(!1))
            }
            , [f, O, r, _, N, t])
              , E = (0,
            a.useCallback)( () => {
                r({
                    type: s.zE.QUESTION_END
                }),
                r({
                    type: s.zE.ANSWER_START
                }),
                w(!0)
            }
            , [r])
              , D = (0,
            a.useCallback)(async t => {
                y(!0),
                k(!1),
                r({
                    type: s.zE.QUESTION_END
                }),
                r({
                    type: s.zE.ANSWER_START
                });
                try {
                    let r = await A(t);
                    if (!r)
                        return;
                    let i = r.transitionCommand
                      , l = r.answerLogIds
                      , a = t.answerLogResource;
                    return a && 1 === l.length && await R(a, l[0]),
                    0 !== p && await R({
                        buffer: e.current,
                        type: o.Up.DRAWING_IMAGE
                    }, l[0]),
                    b(i),
                    m && ((0,
                    n.F)({
                        ...m,
                        answer: t.answer.text,
                        correct: t.answer.result === s.sS.CORRECT
                    }),
                    g(void 0)),
                    l[0]
                } catch (e) {
                    if (e instanceof i.K) {
                        let t = e.findDetails(o.Ff)[0];
                        t ? v(t) : k(!0)
                    } else
                        k(!0)
                } finally {
                    y(!1)
                }
            }
            , [r, A, R, e, p, m, g, v])
              , Z = (0,
            a.useCallback)(async () => {
                await L(),
                O || b(void 0)
            }
            , [O, L, b])
              , T = (0,
            a.useCallback)(async e => {
                b(s.Eu.fromJson({}))
            }
            , [b]);
            return {
                answerMode: I,
                isStartAnswering: S,
                isNextResult: O,
                isError: C,
                pendingAnswerProcess: E,
                startAnswerProcess: h ? T : D,
                endAnswerProcess: Z
            }
        }
        ;
        r(51408),
        r(76421);
        let h = () => {
            let e = (0,
            l.Dv)(u.dx)
              , t = (0,
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
                            let r = e.explain
                              , n = (null !== (t = r.resources.content_image) && void 0 !== t ? t : []).map(e => {
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
                            );
                            return {
                                type: "ClassicQubena",
                                resources: n.map(e => ({
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
                            let r = e.explain
                              , n = (null !== (t = r.resources.content_image) && void 0 !== t ? t : []).map(e => {
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
                            );
                            return {
                                type: "Image",
                                resources: n.map(e => ({
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
            , [e]);
            return {
                getExplainSource: t
            }
        }
          , m = () => {
            let e = (0,
            l.Dv)(u.dx)
              , t = (0,
            a.useCallback)( () => {
                var t;
                let r = null == e ? void 0 : e.contentResource;
                switch (null == r ? void 0 : null === (t = r.hint) || void 0 === t ? void 0 : t.name) {
                case "hint_classic_qubena":
                    return function(e) {
                        var t;
                        let r = e.hint
                          , n = null !== (t = r.resources.content_image) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return i ? {
                            type: "ClassicQubena",
                            image: i
                        } : void 0
                    }(r);
                case "hint_simple":
                    return function(e) {
                        var t;
                        let r = e.hint
                          , n = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                          , i = n.components.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        );
                        return {
                            type: "Simple",
                            components: i
                        }
                    }(r);
                default:
                    return
                }
            }
            , [e]);
            return {
                getHintSource: t
            }
        }
          , g = () => {
            let e = (0,
            l.Dv)(u.dx)
              , t = null == e ? void 0 : e.contentResource
              , r = (0,
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
                        let r = e.description
                          , n = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                          , i = n.components;
                        if (!i || 0 === i.length)
                            return !1;
                        let l = i.find(e => {
                            let t = e.text;
                            return 0 !== t.length
                        }
                        );
                        return l
                    }(t) || function(e) {
                        let t = e.description
                          , r = Object.entries(t.resources);
                        return 0 < r.length
                    }(t) || function(e) {
                        let t = e.args
                          , r = Object.keys(t);
                        return 0 < r.length
                    }(t)
                }
            }
            , [t]);
            return {
                hasDescription: r
            }
        }
    },
    51408: function(e, t, r) {
        r.d(t, {
            M: function() {
                return a
            }
        });
        var n = r(48583)
          , i = r(67294)
          , l = r(92260);
        let a = () => {
            let e = (0,
            n.Dv)(l.dx)
              , t = (0,
            i.useCallback)( () => {
                let t = null == e ? void 0 : e.contentResource;
                switch (null == t ? void 0 : t.description.name) {
                case "ad_classic_qubena":
                    return function(e) {
                        var t;
                        let r = e.description
                          , n = null !== (t = r.resources.answer_content_image) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "ClassicQubena",
                            image: i
                        }
                    }(t);
                case "ad_empty":
                    return {
                        type: "Empty",
                        parameter: void 0
                    };
                case "ad_english_word":
                    return function(e) {
                        var t, r, n, i, l, a, s, o, c, d, u, x, p, h, m, g, v;
                        let f = e.args
                          , b = null !== (t = f.target_word) && void 0 !== t ? t : ""
                          , j = null !== (r = f.part_of_speech) && void 0 !== r ? r : ""
                          , w = null !== (n = f.variant_form) && void 0 !== n ? n : ""
                          , S = null !== (i = f.countability) && void 0 !== i ? i : ""
                          , y = null !== (l = f.base_form) && void 0 !== l ? l : ""
                          , C = null !== (a = f.word_usage_and_meaning) && void 0 !== a ? a : ""
                          , k = null !== (s = f.singular_form) && void 0 !== s ? s : void 0
                          , I = null !== (o = f.plural_form) && void 0 !== o ? o : void 0
                          , O = null !== (c = f.third_parson_singular) && void 0 !== c ? c : void 0
                          , A = null !== (d = f.past_tense) && void 0 !== d ? d : void 0
                          , _ = null !== (u = f.present_participle) && void 0 !== u ? u : void 0
                          , N = null !== (x = f.past_participle) && void 0 !== x ? x : void 0
                          , R = null !== (p = f.positive_degree) && void 0 !== p ? p : void 0
                          , L = null !== (h = f.comparative_degree) && void 0 !== h ? h : void 0
                          , E = null !== (m = f.superlative_degree) && void 0 !== m ? m : void 0
                          , D = null !== (g = f.example_usage) && void 0 !== g ? g : void 0
                          , Z = null !== (v = f.meaning_of_example) && void 0 !== v ? v : void 0;
                        return {
                            type: "EnglishWord",
                            parameter: {
                                targetWord: b,
                                partOfSpeech: j,
                                variantForm: w,
                                countability: S,
                                baseForm: y,
                                wordUsageAndMeaning: C,
                                singularForm: k,
                                pluralForm: I,
                                thirdParsonSingular: O,
                                pastTense: A,
                                presentParticiple: _,
                                pastParticiple: N,
                                positiveDegree: R,
                                comparativeDegree: L,
                                superlativeDegree: E,
                                exampleUsage: D,
                                meaningOfExample: Z
                            }
                        }
                    }(t);
                case "ad_english_word_v2":
                    return function(e) {
                        var t, r, n, i, l, a, s, o, c, d, u, x, p, h, m, g, v;
                        let f = e.args
                          , b = null !== (t = f.target_word) && void 0 !== t ? t : ""
                          , j = null !== (r = f.part_of_speech) && void 0 !== r ? r : ""
                          , w = null !== (n = f.variant_form) && void 0 !== n ? n : ""
                          , S = null !== (i = f.countability) && void 0 !== i ? i : ""
                          , y = null !== (l = f.base_form) && void 0 !== l ? l : ""
                          , C = null !== (a = f.word_usage_and_meaning) && void 0 !== a ? a : ""
                          , k = null !== (s = f.singular_form) && void 0 !== s ? s : void 0
                          , I = null !== (o = f.plural_form) && void 0 !== o ? o : void 0
                          , O = null !== (c = f.third_parson_singular) && void 0 !== c ? c : void 0
                          , A = null !== (d = f.past_tense) && void 0 !== d ? d : void 0
                          , _ = null !== (u = f.present_participle) && void 0 !== u ? u : void 0
                          , N = null !== (x = f.past_participle) && void 0 !== x ? x : void 0
                          , R = null !== (p = f.positive_degree) && void 0 !== p ? p : void 0
                          , L = null !== (h = f.comparative_degree) && void 0 !== h ? h : void 0
                          , E = null !== (m = f.superlative_degree) && void 0 !== m ? m : void 0
                          , D = null !== (g = f.example_usage) && void 0 !== g ? g : void 0
                          , Z = null !== (v = f.meaning_of_example) && void 0 !== v ? v : void 0;
                        return {
                            type: "EnglishWordV2",
                            parameter: {
                                targetWord: b,
                                partOfSpeech: j,
                                variantForm: w,
                                countability: S,
                                baseForm: y,
                                wordUsageAndMeaning: C,
                                singularForm: k,
                                pluralForm: I,
                                thirdParsonSingular: O,
                                pastTense: A,
                                presentParticiple: _,
                                pastParticiple: N,
                                positiveDegree: R,
                                comparativeDegree: L,
                                superlativeDegree: E,
                                exampleUsage: D,
                                meaningOfExample: Z
                            }
                        }
                    }(t);
                case "ad_html":
                    return function(e) {
                        var t;
                        let r = e.description
                          , n = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                          , i = n.html;
                        return {
                            type: "Html",
                            parameter: {
                                html: i
                            }
                        }
                    }(t);
                case "ad_kanji_default":
                    return function(e) {
                        var t, r, n;
                        let i = e.args
                          , l = null !== (t = i.phrase) && void 0 !== t ? t : ""
                          , a = null !== (r = i.phrase_pronunciation) && void 0 !== r ? r : ""
                          , s = parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0");
                        return {
                            type: "KanjiDefault",
                            parameter: {
                                phrase: l,
                                phrasePronunciation: a,
                                grade: s
                            }
                        }
                    }(t);
                case "ad_kanji_self_judgement":
                    return function(e) {
                        var t, r, n;
                        let i = e.description
                          , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                          , a = null !== (r = l.components) && void 0 !== r ? r : {}
                          , s = null !== (n = l.model_answer_string) && void 0 !== n ? n : "";
                        return {
                            type: "KanjiSelfJudgement",
                            parameter: {
                                components: a,
                                modelAnswerString: s
                            }
                        }
                    }(t);
                case "ad_kanji_selfjudgement":
                    return function(e) {
                        var t, r, n;
                        let i = e.args
                          , l = null !== (t = i.question_word) && void 0 !== t ? t : ""
                          , a = null !== (r = i.question_word_others) && void 0 !== r ? r : ""
                          , s = parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0");
                        return {
                            type: "KanjiSelfJudgementLegacy",
                            parameter: {
                                questionWord: l,
                                questionWordOthers: a,
                                grade: s
                            }
                        }
                    }(t);
                case "ad_simple":
                    return function(e) {
                        var t, r;
                        let n = e.description
                          , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                          , l = i.components.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , a = (null !== (r = n.resources.ad_image_section) && void 0 !== r ? r : []).map(e => e.path);
                        return {
                            type: "Simple",
                            parameter: {
                                components: l
                            },
                            images: a
                        }
                    }(t);
                default:
                    return
                }
            }
            , [e]);
            return {
                getDescriptionSource: t
            }
        }
    },
    76421: function(e, t, r) {
        r.d(t, {
            z: function() {
                return a
            }
        });
        var n = r(48583)
          , i = r(67294)
          , l = r(92260);
        let a = () => {
            let e = (0,
            n.Dv)(l.dx)
              , t = (0,
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
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , a = i.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , s = i.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : []
                          , c = 0 !== o.length ? o[0].path : void 0;
                        return {
                            type: "A1",
                            parameter: {
                                questionSection: l,
                                mainSection: a,
                                subSection: s
                            },
                            image: c
                        }
                    }(t);
                case "qp_a2":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                          , l = i.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , a = i.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , s = i.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : []
                          , c = 0 !== o.length ? o[0].path : void 0;
                        return {
                            type: "A2",
                            parameter: {
                                questionSection: l,
                                mainSection: a,
                                subSection: s
                            },
                            image: c
                        }
                    }(t);
                case "qp_a2_selection":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                          , l = i.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , a = i.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , s = i.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : []
                          , c = 0 !== o.length ? o[0].path : void 0;
                        return {
                            type: "A2Selection",
                            parameter: {
                                questionSection: l,
                                mainSection: a,
                                subSection: s
                            },
                            image: c
                        }
                    }(t);
                case "qp_b1":
                    return function(e) {
                        var t, r, n;
                        let i = e.question
                          , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                          , a = l.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , s = l.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , o = l.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                          , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : []
                          , u = 0 !== d.length ? d[0].path : void 0;
                        return {
                            type: "B1",
                            parameter: {
                                questionSection: a,
                                mainSection: s,
                                subSection: o,
                                aSideAtomName: c
                            },
                            image: u
                        }
                    }(t);
                case "qp_b2":
                    return function(e) {
                        var t, r, n;
                        let i = e.question
                          , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                          , a = l.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , s = l.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , o = l.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                          , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : []
                          , u = 0 !== d.length ? d[0].path : void 0;
                        return {
                            type: "B2",
                            parameter: {
                                questionSection: a,
                                mainSection: s,
                                subSection: o,
                                aSideAtomName: c
                            },
                            image: u
                        }
                    }(t);
                case "qp_b2_selection":
                    return function(e) {
                        var t, r, n;
                        let i = e.question
                          , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                          , a = l.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , s = l.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , o = l.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                          , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : []
                          , u = 0 !== d.length ? d[0].path : void 0;
                        return {
                            type: "B2Selection",
                            parameter: {
                                questionSection: a,
                                mainSection: s,
                                subSection: o,
                                aSideAtomName: c
                            },
                            image: u
                        }
                    }(t);
                case "qp_classic_qubena":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = null !== (t = r.resources.question_content_image) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "ClassicQubena",
                            image: i
                        }
                    }(t);
                case "qp_english_word_L":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = null !== (t = r.resources.listening_section) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "EnglishWordL",
                            audio: i
                        }
                    }(t);
                case "qp_english_word_L1":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = null !== (t = r.resources.listening_section) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "EnglishWordL1",
                            audio: i
                        }
                    }(t);
                case "qp_english_word_L2":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = null !== (t = r.resources.listening_section) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "EnglishWordL2",
                            audio: i
                        }
                    }(t);
                case "qp_english_word_R":
                    return function(e) {
                        var t;
                        let r = e.args
                          , n = null !== (t = r.target_word) && void 0 !== t ? t : "";
                        return {
                            type: "EnglishWordR",
                            parameter: {
                                mainText: n
                            }
                        }
                    }(t);
                case "qp_english_word_RL":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = e.args
                          , l = null !== (t = i.target_word) && void 0 !== t ? t : ""
                          , a = null !== (r = n.resources.listening_section) && void 0 !== r ? r : []
                          , s = 0 !== a.length ? a[0].path : void 0;
                        return {
                            type: "EnglishWordRL",
                            parameter: {
                                mainText: l
                            },
                            audio: s
                        }
                    }(t);
                case "qp_english_word_RL_v2":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = e.args
                          , l = null !== (t = i.question_text_for_rxl_v_2) && void 0 !== t ? t : ""
                          , a = null !== (r = n.resources.listening_section) && void 0 !== r ? r : []
                          , s = 0 !== a.length ? a[0].path : void 0;
                        return {
                            type: "EnglishWordRLv2",
                            parameter: {
                                mainText: l
                            },
                            audio: s
                        }
                    }(t);
                case "qp_english_word_W":
                    return function(e) {
                        var t, r, n, i;
                        let l = e.args
                          , a = null !== (t = l.question_text_for_multi_writing) && void 0 !== t ? t : void 0
                          , s = null !== (r = l.variant_form) && void 0 !== r ? r : ""
                          , o = null !== (n = l.base_form) && void 0 !== n ? n : ""
                          , c = null !== (i = l.word_usage_and_meaning) && void 0 !== i ? i : "";
                        return {
                            type: "EnglishWordW",
                            parameter: {
                                questionText: a,
                                variantForm: s,
                                baseForm: o,
                                wordUsageAndMeaning: c
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
                          , p = null !== (l = o.word_usage_and_meaning) && void 0 !== l ? l : ""
                          , h = null !== (a = s.resources.listening_section) && void 0 !== a ? a : []
                          , m = 0 !== h.length ? h[0].path : void 0;
                        return {
                            type: "EnglishWordWL",
                            parameter: {
                                targetWord: c,
                                partOfSpeech: d,
                                variantForm: u,
                                baseForm: x,
                                wordUsageAndMeaning: p
                            },
                            audio: m
                        }
                    }(t);
                case "qp_html":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                          , i = n.html;
                        return {
                            type: "Html",
                            parameter: {
                                html: i
                            }
                        }
                    }(t);
                case "qp_kanji_nazori":
                    return function(e) {
                        var t, r, n, i;
                        let l = e.args
                          , a = null !== (t = l.question_word) && void 0 !== t ? t : ""
                          , s = null !== (r = l.question_word_pronunciation) && void 0 !== r ? r : ""
                          , o = null !== (n = l.example) && void 0 !== n ? n : ""
                          , c = parseInt(null !== (i = l.grade) && void 0 !== i ? i : "0");
                        return {
                            type: "KanjiNazori",
                            parameter: {
                                questionWord: a,
                                questionWordPronunciation: s,
                                example: o,
                                grade: c
                            }
                        }
                    }(t);
                case "qp_kanji_selfjudgement":
                    return function(e) {
                        var t, r, n, i;
                        let l = e.args
                          , a = null !== (t = l.question_word) && void 0 !== t ? t : ""
                          , s = null !== (r = l.question_word_pronunciation) && void 0 !== r ? r : ""
                          , o = null !== (n = l.example) && void 0 !== n ? n : ""
                          , c = parseInt(null !== (i = l.grade) && void 0 !== i ? i : "0");
                        return {
                            type: "KanjiSelfJudgement",
                            parameter: {
                                questionWord: a,
                                questionWordPronunciation: s,
                                example: o,
                                grade: c
                            }
                        }
                    }(t);
                case "qp_kanji_yomi":
                    return function(e) {
                        var t, r, n;
                        let i = e.args
                          , l = null !== (t = i.question_word) && void 0 !== t ? t : ""
                          , a = null !== (r = i.example) && void 0 !== r ? r : ""
                          , s = parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0");
                        return {
                            type: "KanjiYomi",
                            parameter: {
                                questionWord: l,
                                example: a,
                                grade: s
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
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , c = s.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , d = s.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , a = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: a
                            }
                        }
                        )
                          , u = (null !== (r = a.resources.small_image) && void 0 !== r ? r : []).map(e => e.path)
                          , x = (null !== (n = a.resources.image_tag) && void 0 !== n ? n : []).map(e => e.path)
                          , p = (null !== (i = a.resources.large_image) && void 0 !== i ? i : []).map(e => e.path)
                          , h = (null !== (l = a.resources.listening_section) && void 0 !== l ? l : []).map(e => e.path)
                          , m = h && 0 !== h.length ? h[0] : void 0;
                        return {
                            type: "Simple",
                            parameter: {
                                questionSection: o,
                                mainSection: c,
                                subSection: d
                            },
                            images: x,
                            smallImages: u,
                            largeImages: p,
                            audio: m
                        }
                    }(t);
                default:
                    return
                }
            }
            , [e]);
            return {
                getQuestionSource: t
            }
        }
    },
    26008: function(e, t, r) {
        r.d(t, {
            Kr: function() {
                return V
            },
            EE: function() {
                return K
            },
            h4: function() {
                return E
            },
            kW: function() {
                return et
            },
            J9: function() {
                return L
            }
        });
        var n = r(85893)
          , i = r(48583)
          , l = r(70086)
          , a = r(63754)
          , s = r(13578)
          , o = r(92260)
          , c = r(67294)
          , d = r(10242);
        let u = e => {
            let {enabled: t} = e
              , r = (0,
            i.b9)(o.G$)
              , l = (0,
            c.useCallback)(r, [r]);
            return (0,
            n.jsxs)(d.Xd, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: a.O9.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: l,
                children: [(0,
                n.jsx)(d.YS, {
                    name: "explain",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled"
                }), (0,
                n.jsx)(d.xv, {
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
            i.b9)(o.pB)
              , l = (0,
            c.useCallback)(r, [r]);
            return (0,
            n.jsxs)(d.Xd, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: a.O9.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: l,
                children: [(0,
                n.jsx)(d.YS, {
                    name: "hint",
                    size: 40,
                    color: "red",
                    alpha: t ? void 0 : "disabled"
                }), (0,
                n.jsx)(d.xv, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    children: "Hint"
                })]
            })
        }
        ;
        var p = r(24358)
          , h = r(78462)
          , m = r(97212)
          , g = r(98619)
          , v = r(67720)
          , f = r(45843)
          , b = r(47986)
          , j = r(36266)
          , w = r(67446)
          , S = r(6408)
          , y = r(71608);
        let C = () => {
            var e;
            let t = (0,
            i.Dv)(o.dx)
              , r = (0,
            i.Dv)(o.fp)
              , l = (0,
            i.Dv)(o.q7)
              , a = null == t ? void 0 : t.mode
              , s = null == t ? void 0 : t.menuContext
              , c = s ? "".concat(s.courseName, " ").concat(s.rootStructureElementName).concat(s.intermediateSequence) : ""
              , d = null !== (e = null == s ? void 0 : s.entryStructureElementName) && void 0 !== e ? e : "";
            return (0,
            n.jsx)(k, {
                visible: r,
                title: c,
                subTitle: d,
                mode: null != a ? a : "Basic",
                top: 56,
                left: 24,
                soundEffectEnabled: l
            })
        }
          , k = e => {
            let {visible: t, title: r, subTitle: s, mode: u, top: x=0, left: f=0, soundEffectEnabled: C, onToggleSoundEffect: k} = e
              , O = (0,
            i.b9)(S._T)
              , A = (0,
            i.b9)(S.A8)
              , _ = (0,
            i.b9)(S.j2)
              , N = (0,
            i.b9)(o.fp)
              , R = (0,
            i.b9)(o.Bm)
              , L = (0,
            i.b9)(w.DX)
              , {isLoading: E, isError: D, sendCursorPauseCommand: Z} = (0,
            y.sy)()
              , {facilitators: T} = (0,
            j.v)()
              , M = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                N(!1),
                Z()
            }
            , [Z, N])
              , W = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                R(),
                null == k || k()
            }
            , [R, k])
              , z = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                A(T),
                _("プレイ画面"),
                O(!0),
                N(!1)
            }
            , [T, A, N, _, O]);
            return (0,
            c.useEffect)( () => {
                D && L()
            }
            , [D, L]),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(p.Z, {
                    open: t,
                    invisible: !0,
                    onClick: () => N(!1)
                }), (0,
                n.jsx)(b.E.div, {
                    style: {
                        position: "fixed",
                        top: x,
                        left: f,
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
                    n.jsxs)(h.Z, {
                        sx: {
                            minWidth: 240,
                            maxWidth: 280,
                            bgcolor: a.O9.white,
                            border: "1px solid ".concat(a.O9.onSurfaceWeak2),
                            borderRadius: 2,
                            userSelect: "none"
                        },
                        children: [(0,
                        n.jsxs)(m.ZP, {
                            sx: {
                                display: "inline-block"
                            },
                            children: [(0,
                            n.jsx)(d.xv, {
                                color: "onSurface",
                                size: "sm",
                                children: r
                            }), (0,
                            n.jsx)(d.xv, {
                                color: "onSurface",
                                size: "sm",
                                children: s
                            }), "Review" === u && (0,
                            n.jsx)(d.xv, {
                                color: "correct",
                                size: "sm",
                                children: "復習中"
                            })]
                        }), (0,
                        n.jsxs)(g.Z, {
                            sx: {
                                display: "block",
                                py: 0,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    a.NH)("black", "hover")
                                }
                            },
                            onClick: M,
                            children: [(0,
                            n.jsx)(l.sg, {
                                justifyContent: "center",
                                width: "100%",
                                height: 56,
                                px: 1,
                                children: (0,
                                n.jsx)(d.xv, {
                                    size: "md",
                                    color: "important",
                                    children: "学習を中断する"
                                })
                            }), (0,
                            n.jsx)(v.Z, {
                                sx: {
                                    borderColor: a.O9.onSurfaceWeak3
                                }
                            })]
                        }), (0,
                        n.jsxs)(g.Z, {
                            sx: {
                                display: "block",
                                py: 0,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    a.NH)("black", "hover")
                                }
                            },
                            onClick: W,
                            children: [(0,
                            n.jsxs)(l.X2, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                height: 56,
                                px: 1,
                                children: [(0,
                                n.jsx)(d.xv, {
                                    children: "こうか音"
                                }), (0,
                                n.jsx)(I, {
                                    checked: C
                                })]
                            }), (0,
                            n.jsx)(v.Z, {
                                sx: {
                                    borderColor: a.O9.onSurfaceWeak3
                                }
                            })]
                        }), (0,
                        n.jsx)(g.Z, {
                            sx: {
                                height: 48,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    a.NH)("black", "hover")
                                }
                            },
                            onClick: z,
                            children: (0,
                            n.jsx)(l.sg, {
                                px: 1,
                                children: (0,
                                n.jsx)(d.xv, {
                                    size: "sm",
                                    children: "困っている事を送信する"
                                })
                            })
                        })]
                    })
                }), (0,
                n.jsx)(d.h2, {
                    isLoading: E
                })]
            })
        }
          , I = e => {
            let {checked: t} = e;
            return (0,
            n.jsx)(f.Z, {
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
                                backgroundColor: a.O9.primary,
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
                        backgroundColor: a.O9.onSurfaceWeak2,
                        opacity: 1,
                        transition: "background-color .5s"
                    }
                }
            })
        }
        ;
        I.displayName = "IOSSwitch";
        let O = e => {
            let {onClick: t} = e
              , r = (0,
            i.Dv)(o.uR);
            return (0,
            n.jsx)(d.Xd, {
                sx: {
                    width: 48,
                    height: 48,
                    backgroundColor: a.O9.bg,
                    borderRadius: "50%"
                },
                onClick: t,
                disabled: r,
                children: (0,
                n.jsx)(d.YS, {
                    name: "menu",
                    size: 40,
                    color: "onSurface"
                })
            })
        }
        ;
        var A = r(80822);
        let _ = c.memo(e => {
            let {ratio: t, color: r} = e;
            return (0,
            n.jsx)(A.Z, {
                height: 16,
                borderRadius: 2,
                bgcolor: (0,
                a.NH)("onSurface", .1),
                children: (0,
                n.jsx)(b.E.div, {
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
        _.displayName = "GradientBar";
        let N = c.memo(e => {
            let {mode: t, ratio: r, visibleText: i} = e;
            return (0,
            n.jsxs)(l.X2, {
                width: "100%",
                children: [(0,
                n.jsx)(A.Z, {
                    width: 34,
                    height: 16,
                    children: i && (0,
                    n.jsxs)(d.xv, {
                        size: "sm",
                        color: 0 === r ? "onSurfaceWeak1" : "Basic" === t ? "primary" : "correct",
                        fontWeight: "bold",
                        textAlign: "right",
                        children: [Math.floor(100 * r), "%"]
                    })
                }), (0,
                n.jsx)(l.LZ, {
                    x: 1
                }), (0,
                n.jsx)(A.Z, {
                    flex: 1,
                    alignItems: "center",
                    children: (0,
                    n.jsx)(_, {
                        ratio: r,
                        color: "Basic" === t ? a.cz.basicBar : a.cz.reviewBar
                    })
                })]
            })
        }
        );
        N.displayName = "ProgressBar";
        let R = e => {
            let {enabled: t, onClick: r} = e;
            return (0,
            n.jsxs)(d.Xd, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: a.O9.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: r,
                children: [(0,
                n.jsx)(d.YS, {
                    name: "textbook",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled"
                }), (0,
                n.jsx)(d.xv, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    children: "教科書"
                })]
            })
        }
          , L = 56
          , E = () => {
            let e = (0,
            i.Dv)(o.$p)
              , t = (0,
            i.Dv)(o.dx)
              , r = (0,
            i.Dv)(o.si)
              , l = null == t ? void 0 : t.mode
              , {displayTextbook: a, hasTextbookLink: c, handleClickProgramDigitalTextbook: d} = (0,
            s.MJ)(null == t ? void 0 : t.id);
            if (!e || !l)
                return (0,
                n.jsx)(n.Fragment, {});
            let u = t.contentResource;
            return (0,
            n.jsx)(D, {
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
          , D = e => {
            let {reason: t, mode: r, progress: s, hasHint: c, hasExplain: d, displayTextbook: p, hasTextbookLink: h, handleClickTextbook: m} = e
              , g = (0,
            i.b9)(o.fp);
            return (0,
            n.jsxs)(l.X2, {
                height: L,
                px: 2,
                py: .5,
                alignContent: "center",
                sx: {
                    userSelect: "none"
                },
                children: [(0,
                n.jsx)(O, {
                    onClick: () => g(!0)
                }), (0,
                n.jsx)(C, {}), (0,
                n.jsx)(l.LZ, {
                    x: 2
                }), (0,
                n.jsxs)(l.X2, {
                    flex: 1,
                    marginY: 1.5,
                    p: .5,
                    bgcolor: a.O9.bg,
                    borderRadius: 4,
                    children: [(0,
                    n.jsx)(l.LZ, {
                        x: 1
                    }), "StartFromReview" !== t && (0,
                    n.jsx)(N, {
                        mode: r,
                        ratio: s,
                        visibleText: !(("StartFromHome" === t || "ResumeFromHome" === t) && "Review" === r)
                    })]
                }), (0,
                n.jsx)(l.LZ, {
                    x: 1.5
                }), (0,
                n.jsx)(u, {
                    enabled: d
                }), (0,
                n.jsx)(l.LZ, {
                    x: 1
                }), (0,
                n.jsx)(x, {
                    enabled: c
                }), p && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.LZ, {
                        x: 1
                    }), (0,
                    n.jsx)(R, {
                        enabled: h,
                        onClick: m
                    })]
                })]
            })
        }
        ;
        var Z = r(2734)
          , T = r(73935)
          , M = r(13125)
          , W = r(78949)
          , z = r(6964)
          , q = r(98456)
          , H = r(70872)
          , J = r(45098);
        let P = e => {
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
              , p = (0,
            c.useCallback)( () => {
                l(),
                u()
            }
            , [l, u])
              , h = (0,
            c.useCallback)(e => {
                switch (e.type) {
                case "previous":
                case "next":
                    return (0,
                    n.jsx)(F, {
                        ...e
                    });
                default:
                    return (0,
                    n.jsxs)(A.Z, {
                        position: "relative",
                        zIndex: 1,
                        sx: {
                            userSelect: "none"
                        },
                        children: [(0,
                        n.jsx)(z.Z, {
                            ...e,
                            sx: {
                                minWidth: 48,
                                height: 48,
                                margin: 0,
                                padding: 0,
                                fontSize: 16,
                                fontWeight: "bold",
                                color: e.selected ? a.O9.onSurface : a.O9.onSurfaceWeak1,
                                borderRadius: "50%",
                                "&.Mui-selected": {
                                    background: a.O9.primaryWeak1,
                                    "&:hover": {
                                        background: a.O9.primaryWeak1
                                    }
                                }
                            }
                        }), e.selected && (0,
                        n.jsx)(q.Z, {
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
                                        a.NH)("primary", "hover") : a.O9.onSurfaceWeak4,
                                        zIndex: -1
                                    }
                                }
                            },
                            onClick: p
                        })]
                    })
                }
            }
            , [s, p]);
            return (0,
            c.useEffect)( () => (u(),
            () => {
                window.clearTimeout(d.current)
            }
            ), [u]),
            (0,
            n.jsx)(H.Z, {
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
                renderItem: h,
                onChange: x
            })
        }
          , F = (0,
        J.Z)(z.Z)(e => {
            let {disabled: t} = e;
            return {
                width: 56,
                height: 56,
                margin: 0,
                padding: 0,
                background: a.O9.primary,
                borderRadius: "50%",
                visibility: t ? "hidden" : "visible",
                ":hover": {
                    background: a.O9.primary
                },
                ".MuiPaginationItem-icon": {
                    width: 40,
                    height: 40,
                    color: a.O9.white
                }
            }
        }
        )
          , V = () => {
            let e = (0,
            i.Dv)(o.R9)
              , {getExplainSource: t} = (0,
            W.kk)()
              , r = t();
            if (!r)
                return (0,
                n.jsx)(n.Fragment, {});
            let {id: l, src: a} = r;
            return 0 === a.resources.length ? (0,
            n.jsx)(n.Fragment, {}) : (0,
            n.jsx)($, {
                explain: a,
                visible: e
            }, l)
        }
          , $ = e => {
            let {explain: t, visible: r} = e
              , s = (0,
            i.b9)(o.Kw)
              , [u,x] = (0,
            c.useState)(void 0)
              , [h,m] = (0,
            c.useState)(!1)
              , [g,v] = (0,
            c.useState)(!1)
              , f = (0,
            Z.Z)()
              , {windowHeight: b} = (0,
            M.AS)()
              , j = (0,
            c.useCallback)( () => {
                g || s()
            }
            , [s, g])
              , w = (0,
            c.useCallback)(e => {
                m(e.currentTarget.scrollTop > 0)
            }
            , [])
              , S = (0,
            c.useCallback)(e => {
                e.stopPropagation()
            }
            , [])
              , y = (0,
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
                let e = () => v(!1)
                  , t = () => v(!0);
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
            T.createPortal)((0,
            n.jsx)(p.Z, {
                open: r,
                onPointerDown: j,
                sx: {
                    zIndex: f.zIndex.modal
                },
                children: (0,
                n.jsxs)(A.Z, {
                    maxWidth: 800,
                    maxHeight: "calc(100% - ".concat(48, "px)"),
                    marginX: 3,
                    bgcolor: a.O9.surface,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    onPointerDown: S,
                    children: [(0,
                    n.jsxs)(A.Z, {
                        width: "100%",
                        height: 48,
                        p: .5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderBottom: h ? "1px solid ".concat((0,
                        a.NH)("onSurface", .1)) : void 0,
                        sx: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        },
                        children: [(0,
                        n.jsx)(A.Z, {
                            paddingLeft: 2,
                            children: (0,
                            n.jsx)(d.xv, {
                                size: "lg",
                                children: "説明"
                            })
                        }), (0,
                        n.jsx)(l.sg, {
                            height: 40,
                            sx: {
                                cursor: "pointer",
                                ":hover": {
                                    bgcolor: a.O9.onSurfaceWeak3
                                }
                            },
                            onPointerDown: j,
                            children: (0,
                            n.jsx)(d.YS, {
                                name: "close",
                                size: 40,
                                color: "onSurface"
                            })
                        })]
                    }), u && (k ? (0,
                    n.jsxs)(A.Z, {
                        width: "100%",
                        marginTop: "".concat(48, "px"),
                        px: 2,
                        paddingBottom: 2,
                        children: [(0,
                        n.jsx)(l.M5, {
                            pt: 2,
                            children: (0,
                            n.jsx)(K, {
                                qmlType: t.type,
                                url: u.url,
                                maxHeight: b - 48 - 48 - 56 - 40
                            })
                        }), (0,
                        n.jsx)(A.Z, {
                            pt: 2,
                            children: (0,
                            n.jsx)(P, {
                                count: t.resources.length,
                                selectedPageAnimTime: u.length,
                                onChangePage: y,
                                onClickSelectedPage: C
                            })
                        })]
                    }) : (0,
                    n.jsx)(A.Z, {
                        width: "100%",
                        maxHeight: b - 48 - 48,
                        marginTop: "".concat(48, "px"),
                        px: 2,
                        pb: 2,
                        overflow: "auto",
                        onScroll: w,
                        children: (0,
                        n.jsx)(l.M5, {
                            pt: 2,
                            children: (0,
                            n.jsx)(K, {
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
        var B = r(26126);
        let X = e => {
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
          , K = e => {
            let {qmlType: t, url: r, maxHeight: i, wheelDisabled: l} = e;
            return (0,
            n.jsx)(B.d$, {
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
                n.jsxs)(B.Uv, {
                    children: ["ClassicQubena" === t && (0,
                    n.jsx)(X, {
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
          , U = e => {
            switch (e.type) {
            case "ClassicQubena":
                return (0,
                n.jsx)(Y, {
                    source: e
                });
            case "Simple":
                return (0,
                n.jsx)(ee, {
                    source: e
                })
            }
        }
          , Y = e => {
            let {source: t} = e;
            return (0,
            n.jsx)(A.Z, {
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
        var Q = r(3363);
        let ee = e => {
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
                        n.jsx)(Q.J$, {
                            src: e.text.replaceAll("\n", "<br/>")
                        })
                    }, r)
                }
                )
            })
        }
          , et = () => {
            let e = (0,
            i.Dv)(o.H$)
              , {getHintSource: t} = (0,
            W.D7)()
              , r = t();
            return r ? (0,
            n.jsx)(er, {
                hint: r,
                visible: e
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , er = e => {
            let {hint: t, visible: r} = e
              , s = (0,
            i.b9)(o.E9)
              , [u,x] = (0,
            c.useState)(!1)
              , [h,m] = (0,
            c.useState)(!1)
              , g = (0,
            Z.Z)()
              , {windowHeight: v} = (0,
            M.AS)()
              , f = (0,
            c.useCallback)( () => {
                h || s()
            }
            , [s, h])
              , b = (0,
            c.useCallback)(e => {
                x(e.currentTarget.scrollTop > 0)
            }
            , [])
              , j = (0,
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
            T.createPortal)((0,
            n.jsx)(p.Z, {
                open: r,
                onPointerDown: f,
                sx: {
                    zIndex: g.zIndex.modal
                },
                children: (0,
                n.jsxs)(A.Z, {
                    width: "100%",
                    maxWidth: 800,
                    maxHeight: "calc(100% - ".concat(48, "px)"),
                    marginX: 3,
                    bgcolor: a.O9.surface,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    sx: {
                        userSelect: "none"
                    },
                    onPointerDown: j,
                    children: [(0,
                    n.jsxs)(A.Z, {
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
                        a.NH)("onSurface", .1)) : void 0,
                        sx: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        },
                        children: [(0,
                        n.jsx)(A.Z, {
                            paddingLeft: 1.5,
                            children: (0,
                            n.jsx)(d.xv, {
                                size: "lg",
                                children: "Hint"
                            })
                        }), (0,
                        n.jsx)(l.sg, {
                            height: 40,
                            sx: {
                                cursor: "pointer",
                                ":hover": {
                                    bgcolor: a.O9.onSurfaceWeak3
                                },
                                borderRadius: "50%"
                            },
                            onPointerDown: f,
                            children: (0,
                            n.jsx)(d.YS, {
                                name: "close",
                                size: 40,
                                color: "onSurface"
                            })
                        })]
                    }), (0,
                    n.jsx)(A.Z, {
                        marginTop: "".concat(48, "px"),
                        width: "100%",
                        maxHeight: v - 48 - 48,
                        overflow: "auto",
                        onScroll: b,
                        children: (0,
                        n.jsx)(B.d$, {
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
                            n.jsx)(B.Uv, {
                                wrapperStyle: {
                                    width: "100%"
                                },
                                contentStyle: {
                                    width: "100%"
                                },
                                children: U(t)
                            })
                        })
                    })]
                })
            }), document.body)
        }
    },
    71608: function(e, t, r) {
        r.d(t, {
            gH: function() {
                return n
            },
            XN: function() {
                return u
            },
            uw: function() {
                return x
            },
            pc: function() {
                return p
            },
            R3: function() {
                return g
            },
            NU: function() {
                return v
            },
            V6: function() {
                return j
            },
            SR: function() {
                return S
            },
            p4: function() {
                return a
            },
            fc: function() {
                return _
            },
            DV: function() {
                return N
            },
            Fl: function() {
                return L
            },
            U4: function() {
                return Z
            },
            sy: function() {
                return q
            },
            vB: function() {
                return H
            }
        });
        let n = () => {
            let e = e => {
                let t = e.trim().replaceAll("　", " ").replaceAll(/(\s)\1{1,}/g, " ").replaceAll("‘", "'").replaceAll("’", "'").replaceAll("`", "'").replaceAll("・", "\xb7").replaceAll("＝", "=").replaceAll("％", "%").replaceAll("＋", "+").replaceAll("−", "-").replaceAll("，", ",").replaceAll("．", ".").replaceAll("？", "?").replaceAll("！", "!").replaceAll("＄", "$").replaceAll("￥", "\xa5").replaceAll("“", '"').replaceAll("”", '"').replaceAll("‐", "-").replaceAll("＆", "&");
                return t.replaceAll(/[Ａ-Ｚａ-ｚ０-９]/g, e => String.fromCharCode(e.charCodeAt(0) - 65248))
            }
            ;
            return {
                convertInputToAnswerText: e
            }
        }
        ;
        var i = r(67294)
          , l = r(53218);
        let a = (e, t) => {
            let[r,n] = (0,
            i.useState)(!1)
              , [a,s] = (0,
            i.useState)();
            return (0,
            i.useEffect)( () => {
                let r = async () => {
                    try {
                        var r, i, a, o, c, d;
                        let n = await (0,
                        l.dD)(t, e)
                          , u = {}
                          , x = null === (r = n.answerPreviewData) || void 0 === r ? void 0 : r.resourceUrlMap[1]
                          , p = null === (i = n.answerPreviewData) || void 0 === i ? void 0 : i.resourceUrlMap[2]
                          , h = null === (a = n.answerPreviewData) || void 0 === a ? void 0 : a.resourceUrlMap[3]
                          , m = null === (o = n.answerPreviewData) || void 0 === o ? void 0 : o.score;
                        x && (u.speaking = x),
                        p && (u.memo = p),
                        m && (u.score = m.toString()),
                        h && (u.elsaEvaluationResultUrl = h);
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
                ;
                r()
            }
            , [e]),
            {
                replayResource: a,
                isError: r
            }
        }
        ;
        var s = r(48583)
          , o = r(61982)
          , c = r(67446)
          , d = r(92260);
        let u = e => {
            let[t,r] = (0,
            i.useState)(!1)
              , [n,a] = (0,
            i.useState)()
              , u = (0,
            s.Dv)(c.FI)
              , x = (0,
            s.Dv)(d.mv);
            return (0,
            i.useEffect)( () => {
                let t = async () => {
                    try {
                        let r = new o.ls;
                        r.cmd.case = "cursorInitCommand",
                        r.cmd.value = e;
                        let n = await (0,
                        l.Sp)({
                            accessToken: u,
                            command: r,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })
                          , i = n.appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
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
                ;
                t()
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
            s.Dv)(c.FI)
              , x = (0,
            s.Dv)(d.mv);
            return (0,
            i.useEffect)( () => {
                let t = async () => {
                    try {
                        let r = new o.ls;
                        r.cmd.case = "cursorResumeCommand",
                        r.cmd.value = e;
                        let n = await (0,
                        l.Sp)({
                            accessToken: u,
                            command: r,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })
                          , i = n.appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
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
                ;
                t()
            }
            , []),
            {
                playSession: n,
                isError: t
            }
        }
          , p = () => {
            let e = (0,
            s.Dv)(c.FI)
              , t = (0,
            s.Dv)(d.mv)
              , r = (0,
            s.Dv)(d.dx)
              , n = (0,
            s.Dv)(d.ac)
              , a = _()
              , u = (0,
            i.useCallback)(async i => {
                let s = n.map(e => ({
                    logType: e.type,
                    playTime: e.offset
                }))
                  , c = new o.ls({
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
                  , d = await (0,
                l.Sp)({
                    accessToken: e,
                    command: c,
                    courseVersionId: t.versionId,
                    courseCode: t.code,
                    device: "tablet"
                })
                  , u = d.appCommandList.flatMap(e => "pageTransitionCommand" === e.cmd.case ? e.cmd.value : []);
                u.length > 0 && a(u[0])
            }
            , [n, null == r ? void 0 : r.cursorSessionId, null == r ? void 0 : r.cursorSessionDeviceCode, t.versionId, t.code, a]);
            return {
                forceCursorPause: u
            }
        }
        ;
        var h = r(61730)
          , m = r(50132);
        let g = () => (0,
        h.Z)(m.rS.breakpoints.up("lg")) ? "landscape" : "portrait"
          , v = e => {
            let[t,r] = (0,
            i.useState)(!1)
              , [n,a] = (0,
            i.useState)()
              , u = (0,
            s.Dv)(c.FI)
              , x = (0,
            s.Dv)(d.mv);
            return (0,
            i.useEffect)( () => {
                let t = async () => {
                    try {
                        let r = new o.w7;
                        r.cursorRootIdentifier = e;
                        let n = new o.ls;
                        n.cmd.case = "programCursorInitCommand",
                        n.cmd.value = r;
                        let i = await (0,
                        l.Sp)({
                            accessToken: u,
                            command: n,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })
                          , s = i.appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 !== s.length) {
                            var t;
                            let e = s[0];
                            if ((null === (t = e.data) || void 0 === t ? void 0 : t.data.case) === "playSession") {
                                let t = e.data.data.value;
                                a(t)
                            }
                        }
                    } catch (e) {
                        r(!0)
                    }
                }
                ;
                t()
            }
            , []),
            {
                playSession: n,
                isError: t
            }
        }
        ;
        var f = r(3592)
          , b = r(98155);
        let j = e => {
            let[t,r] = (0,
            i.useState)(!1)
              , [n,l] = (0,
            i.useState)()
              , [a,o] = (0,
            i.useState)(0)
              , u = (0,
            s.Dv)(c.FI)
              , x = (0,
            s.Dv)(d.mv)
              , {setReportProgram: p} = (0,
            b.FS)();
            return (0,
            i.useEffect)( () => {
                let t = async () => {
                    try {
                        let {programResource: t, progress: r} = await (0,
                        f.B)(e, u, x);
                        l(t),
                        o(r),
                        p(x, e)
                    } catch (e) {
                        r(!0)
                    }
                }
                ;
                t()
            }
            , []),
            {
                programResource: n,
                progress: a,
                isError: t
            }
        }
        ;
        var w = r(42709);
        let S = (e, t, r) => {
            let[n,a] = (0,
            i.useState)(!1)
              , [s,o] = (0,
            i.useState)();
            return (0,
            i.useEffect)( () => {
                let n = async () => {
                    try {
                        let n = await (0,
                        l.tV)(t, e, r)
                          , i = await (0,
                        w.Z)(n);
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
                        a(!0)
                    }
                }
                ;
                n()
            }
            , []),
            {
                programResource: s,
                isError: n
            }
        }
        ;
        var y = r(11163)
          , C = r(34968)
          , k = r(43790)
          , I = r(68147)
          , O = r(48233)
          , A = r(61909);
        let _ = () => {
            let e = (0,
            y.useRouter)()
              , {setReportProgram: t} = (0,
            b.FS)()
              , r = (0,
            s.b9)(O.O)
              , n = (0,
            s.b9)(A.b)
              , l = (0,
            s.b9)(I.H)
              , a = (0,
            s.b9)(I.N)
              , u = (0,
            s.Dv)(c.FI)
              , x = (0,
            s.Dv)(d.mv)
              , p = (0,
            s.b9)(d.dx)
              , h = (0,
            s.b9)(d.si)
              , m = (0,
            s.Dv)(d.ac)
              , g = (0,
            s.b9)(d.Ok)
              , [v,j] = (0,
            s.KO)(k.Hv)
              , [w,S] = (0,
            s.KO)(k.uo);
            return (0,
            i.useCallback)(async i => {
                let s = i.pagePath;
                switch (s) {
                case "program":
                    {
                        let e = i.data;
                        if (!e || "playSession" !== e.data.case)
                            break;
                        let r = e.data.value;
                        try {
                            let {programResource: e, progress: n} = await (0,
                            f.B)(r, u, x);
                            p(e),
                            h(n),
                            g({
                                type: o.zE.QUESTION_START
                            }),
                            t(x, r)
                        } catch (e) {}
                        break
                    }
                case "cursor/result":
                    {
                        var c, d, b, y;
                        let t = i.data;
                        if (!t || "resultPageData" !== t.data.case)
                            break;
                        let s = t.data.value
                          , u = null !== (b = null === (c = m.find(e => e.type === o.zE.ANSWER_START)) || void 0 === c ? void 0 : c.offset) && void 0 !== b ? b : 0
                          , x = null !== (y = null === (d = m.find(e => e.type === o.zE.ANSWER_END)) || void 0 === d ? void 0 : d.offset) && void 0 !== y ? y : 0
                          , p = x - u;
                        switch (s.data.case) {
                        case "stage":
                            {
                                let t = s.data.value
                                  , n = t.stats;
                                r({
                                    label: s.emphasisText,
                                    courseName: s.courseDesc,
                                    chapterName: t.chapterName,
                                    sectionName: t.sectionName,
                                    time: n.time + p,
                                    count: n.answeredProgramCount,
                                    ratio: n.correctRatio
                                }),
                                e.push(C.g.stageResult);
                                break
                            }
                        case "workBook":
                            {
                                let t = s.data.value
                                  , r = t.stats;
                                n({
                                    message: s.emphasisText,
                                    courseName: s.courseDesc,
                                    workbookName: t.name,
                                    time: r.time + p,
                                    count: r.answeredProgramCount,
                                    ratio: r.correctRatio
                                }),
                                e.push(C.g.workbookResult);
                                break
                            }
                        case "review":
                            {
                                let t = s.data.value
                                  , r = t.stats;
                                t.isTocFiltered ? (a({
                                    label: s.emphasisText,
                                    title: s.courseDesc,
                                    time: r.time + p,
                                    count: r.answeredProgramCount,
                                    ratio: r.correctRatio,
                                    hasNextProgram: t.hasNextProgram
                                }),
                                e.push(C.g.reviewPlanResult)) : (l({
                                    label: s.emphasisText,
                                    title: s.courseDesc,
                                    time: r.time + p,
                                    count: r.answeredProgramCount,
                                    ratio: r.correctRatio
                                }),
                                e.push(C.g.reviewResult))
                            }
                        }
                        break
                    }
                case "learning/history":
                    w && (j((0,
                    k.oJ)(v, w)),
                    S(void 0)),
                    e.push(C.g.history)
                }
            }
            , [v, w, m])
        }
          , N = () => {
            let e = (0,
            s.Dv)(c.FI);
            return (0,
            i.useCallback)(async (t, r) => {
                t && await (0,
                l.tO)(e, r, t.buffer, t.type)
            }
            , [])
        }
        ;
        var R = r(67334);
        let L = () => {
            let e = (0,
            s.Dv)(c.FI)
              , t = (0,
            s.Dv)(d.mv)
              , r = (0,
            s.Dv)(d.dx)
              , n = (0,
            s.Dv)(R.a);
            return (0,
            i.useCallback)(async () => {
                var i, l, a;
                let s = E(null !== (i = null == r ? void 0 : r.cursorSessionId) && void 0 !== i ? i : 0, null !== (l = null == r ? void 0 : r.cursorSessionDeviceCode) && void 0 !== l ? l : "", n, null !== (a = null == r ? void 0 : r.hasAnswerDescriptionHtml) && void 0 !== a && a);
                await D(e, t.versionId, t.code, s)
            }
            , [n, t.code, t.versionId, null == r ? void 0 : r.cursorSessionDeviceCode, null == r ? void 0 : r.cursorSessionId, null == r ? void 0 : r.hasAnswerDescriptionHtml])
        }
          , E = (e, t, r, n) => o.B9.fromJson({
            cursorSessionId: e,
            cursorSessionDeviceCode: t,
            activityLogList: r.map(e => ({
                logType: e.type,
                playTime: e.offset
            })),
            isRenderedAnswerDescription: n
        });
        async function D(e, t, r, n) {
            let i = new o.ls;
            i.cmd.case = "sendActivityLogCommand",
            i.cmd.value = n;
            let a = await (0,
            l.Sp)({
                accessToken: e,
                command: i,
                courseVersionId: t,
                courseCode: r,
                device: "tablet"
            });
            return a
        }
        let Z = () => {
            let e = (0,
            s.Dv)(c.FI)
              , t = (0,
            s.Dv)(d.mv)
              , r = (0,
            s.Dv)(d.dx)
              , n = (0,
            s.Dv)(d.s1)
              , l = (0,
            s.Dv)(d.$p)
              , a = (0,
            s.Dv)(d.ac);
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
                let p = "StartFromHistory" === l ? n.answerLogId : void 0
                  , h = T(r.cursorSessionId, r.cursorSessionDeviceCode, u, x, p, i, a)
                  , m = await M(e, t.versionId, t.code, h)
                  , g = m.appCommandList.filter(e => "nextPageTransitionCommand" === e.cmd.case).map(e => e.cmd.value)
                  , v = 0 === g.length ? void 0 : g[0]
                  , f = null !== (c = null === (s = null === (o = m.lemCommandResponse) || void 0 === o ? void 0 : o.res.value) || void 0 === s ? void 0 : s.answerlogIds) && void 0 !== c ? c : [];
                return {
                    transitionCommand: v,
                    answerLogIds: f
                }
            }
            , [a, t, r, n.answerLogId, l])
        }
          , T = (e, t, r, n, i, l, a) => {
            let s = {
                apName: r,
                viewState: l.viewStateJSON
            }
              , c = o.pN.fromJson({
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
        async function M(e, t, r, n) {
            let i = new o.ls;
            i.cmd.case = "answerCommand",
            i.cmd.value = n;
            let a = await (0,
            l.Sp)({
                accessToken: e,
                command: i,
                courseVersionId: t,
                courseCode: r,
                device: "tablet"
            });
            return a
        }
        var W = r(51577)
          , z = r(84135);
        let q = () => {
            let e = (0,
            s.Dv)(c.FI)
              , t = (0,
            s.Dv)(d.mv)
              , r = (0,
            s.Dv)(c.eW)
              , n = (0,
            s.Dv)(W.Gc)
              , a = (0,
            s.Dv)(d.ac)
              , u = (0,
            s.b9)(W._q)
              , x = (0,
            s.Dv)(d.dx)
              , [p,h] = (0,
            i.useState)(!1)
              , [m,g] = (0,
            i.useState)(!1)
              , v = (0,
            y.useRouter)()
              , {updateCourseUnitHistories: f} = (0,
            z.I)()
              , b = (0,
            i.useCallback)(async () => {
                h(!0),
                g(!1);
                let i = a.map(e => ({
                    logType: e.type,
                    playTime: e.offset
                }))
                  , s = new o.ls({
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
                    let i = await (0,
                    l.Sp)({
                        accessToken: e,
                        command: s,
                        courseVersionId: t.versionId,
                        courseCode: t.code,
                        device: "tablet"
                    })
                      , a = i.appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                    if (0 === a.length)
                        return;
                    let o = a[0];
                    switch (o.pagePath) {
                    case "stage/bottom":
                        switch (r) {
                        case C.g.home:
                            n && await f(),
                            u(null),
                            v.push(C.g.home);
                            break;
                        case C.g.history:
                            v.push(C.g.history)
                        }
                        break;
                    case "workbook":
                        v.push(C.g.workbook);
                        break;
                    case "review/select":
                        v.push(C.g.review)
                    }
                } catch (e) {
                    g(!0)
                } finally {
                    h(!1)
                }
            }
            , [a, null == x ? void 0 : x.cursorSessionId, null == x ? void 0 : x.cursorSessionDeviceCode, t.versionId, t.code, r, n, u, v, f]);
            return {
                sendCursorPauseCommand: b,
                isLoading: p,
                isError: m
            }
        }
          , H = e => {
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
                    let r = J(null === (t = e.command) || void 0 === t ? void 0 : t.feedBackType);
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
          , J = e => {
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
    },
    49682: function(e, t, r) {
        r.d(t, {
            W: function() {
                return i
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)(0)
    },
    42709: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return i
            }
        });
        var n = r(50132);
        async function i(e) {
            let t = e.programDetail
              , r = await (0,
            n.RJ)(e.encryptedAnswer)
              , i = await (0,
            n.lm)(e.encryptedAnswerDescriptionContent)
              , a = e.programRenderingResources
              , s = function(e, t) {
                var r;
                let n = null == e ? void 0 : null === (r = e.qpap) || void 0 === r ? void 0 : r.pattern
                  , i = null == e ? void 0 : e.paramsJson
                  , a = l(t.program);
                return {
                    name: n,
                    body: i,
                    resources: a
                }
            }(t.programContent, a)
              , o = function(e, t) {
                let r = null == e ? void 0 : e.answerPatternName
                  , n = null == e ? void 0 : e.attributesJson
                  , i = l(t.answer);
                return {
                    name: r,
                    body: n,
                    resources: i
                }
            }(t.answer, a)
              , c = function(e, t) {
                var r;
                let n = null === (r = e.qpap) || void 0 === r ? void 0 : r.pattern
                  , i = e.paramsJson
                  , a = l(t.answerDescription);
                return {
                    name: n,
                    body: i,
                    resources: a
                }
            }(i, a)
              , d = function(e, t) {
                var r;
                if (!e)
                    return;
                let n = e.hintType
                  , i = null === (r = e.qpapWithParams) || void 0 === r ? void 0 : r.paramsJson
                  , a = l(t.hint);
                return {
                    name: n,
                    body: i,
                    resources: a
                }
            }(t.hint, a)
              , u = function(e, t) {
                var r, n, i;
                if (!e)
                    return;
                let a = null === (r = e.qpapWithParams) || void 0 === r ? void 0 : null === (n = r.qpap) || void 0 === n ? void 0 : n.pattern
                  , s = null === (i = e.qpapWithParams) || void 0 === i ? void 0 : i.paramsJson
                  , o = l(t.explain);
                return {
                    name: a,
                    body: s,
                    resources: o
                }
            }(t.explain, a)
              , x = function(e) {
                var t, r;
                if (0 === e.targetAtomList.length)
                    return {};
                let n = e.targetAtomList[0]
                  , i = null !== (r = null === (t = n.atom) || void 0 === t ? void 0 : t.attributesJson) && void 0 !== r ? r : "{}"
                  , l = JSON.parse(i)
                  , a = Object.entries(l);
                return Object.fromEntries(a)
            }(t);
            return {
                question: s,
                answer: o,
                legacyAnswer: r,
                description: c,
                hint: d,
                explain: u,
                args: x
            }
        }
        function l(e) {
            return Object.fromEntries(Object.entries(e).map(e => [e[0], e[1].contentResourceList.map(e => ({
                path: e.url,
                meta: e.metaJson
            }))]))
        }
    },
    65976: function(e, t, r) {
        r.d(t, {
            L: function() {
                return n
            }
        });
        let n = "panel-answer"
    },
    3592: function(e, t, r) {
        r.d(t, {
            B: function() {
                return l
            },
            Y: function() {
                return a
            }
        });
        var n = r(53218)
          , i = r(42709);
        let l = async (e, t, r) => {
            var l, a, s, o, c;
            let d = null === (l = e.programDetail) || void 0 === l ? void 0 : l.originalId;
            if (!d)
                throw Error("Program ID is missing");
            let u = r.code
              , x = await (0,
            n.lH)(t, d, u)
              , p = await (0,
            i.Z)(x)
              , h = e.playProgressBar
              , m = e.menuInfo
              , g = e.timerFeedBackCommandList
              , v = h ? h.isReviewing ? "Review" : "Basic" : void 0;
            return {
                programResource: {
                    contentResource: p,
                    id: d,
                    cursorSessionId: e.cursorSessionId,
                    cursorSessionDeviceCode: e.cursorSessionDeviceCode,
                    mode: v,
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
                progress: null !== (c = null == h ? void 0 : h.progress) && void 0 !== c ? c : 0
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
