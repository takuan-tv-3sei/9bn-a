!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "b0e99f16-8507-419b-aa99-04afd5a4d266",
        e._sentryDebugIdIdentifier = "sentry-dbid-b0e99f16-8507-419b-aa99-04afd5a4d266")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[824], {
    11245: (e, t, n) => {
        n.d(t, {
            z: () => g
        });
        var r = n(74848)
          , a = n(72290)
          , s = n(43819)
          , i = n(16957)
          , l = n(34843)
          , o = n(96540)
          , d = n(40961)
          , c = n(27439)
          , u = n(39941)
          , x = n(80534)
          , m = n(4799)
          , p = n(50437);
        let h = "State Machine"
          , g = o.memo(e => {
            var t, n;
            let {result: a, height: s=500, width: i=500, portalElem: o, handleOnPlay: d, handleOnStop: c} = e
              , u = (0,
            l.md)(m.bQ);
            return (0,
            r.jsx)(y, {
                result: a,
                postPartCountUp: null !== (n = null == u ? void 0 : null === (t = u.feedBackCommandOnAnswerCorrect) || void 0 === t ? void 0 : t.additionalIntParam) && void 0 !== n ? n : 0,
                height: s,
                width: i,
                portalElem: o,
                handleOnPlay: d,
                handleOnStop: c
            })
        }
        )
          , y = e => {
            var t;
            let {result: n, postPartCountUp: g, height: y=500, width: f=500, portalElem: w=p.y, handleOnPlay: v, handleOnStop: j} = e
              , b = (0,
            l.md)(m.XO)
              , [S,A] = (0,
            o.useState)(!1)
              , [C,k] = (0,
            o.useState)()
              , I = (0,
            o.useRef)(!1)
              , T = (0,
            a.A)()
              , M = (0,
            o.useMemo)( () => T.zIndex.popup, [T])
              , {rive: B, RiveComponent: _} = (0,
            i.useRive)({
                src: c.r.popupOX,
                artboard: "Artboard",
                stateMachines: h,
                autoplay: !0,
                onPlay: () => {
                    v && v()
                }
                ,
                onStop: () => {
                    !I.current && (I.current = !0,
                    j && j())
                }
            })
              , E = e => {
                let t = e.data
                  , n = t.properties;
                "Sound" === t.name && void 0 !== n.name ? k(new Audio((0,
                u.o)("sound/".concat(n.name, ".mp3")))) : k(void 0),
                "exit" === t.name ? A(!0) : A(!1)
            }
              , R = (0,
            i.useStateMachineInput)(B, h, "correct" === n || "incorrect" === n ? "default" : "kanji_correct" === n || "kanji_incorrect" === n ? "kanji" : "redo")
              , P = (0,
            i.useStateMachineInput)(B, h, "correction")
              , W = (0,
            i.useStateMachineInput)(B, h, "num");
            (0,
            o.useEffect)( () => {
                B && (R && R.fire(),
                P && (P.value = "correct" === n || "kanji_correct" === n),
                W && (W.value = g),
                B.setTextRunValue("correctNum", "".concat(g)),
                B.on(i.EventType.RiveEvent, E))
            }
            , [P, W, g, n, B, R]),
            (0,
            o.useEffect)( () => {
                C && b && C.play()
            }
            , [C, b]),
            (0,
            o.useEffect)( () => {
                B && S && B.stop()
            }
            , [S, B]);
            let L = x.cV + 16;
            return (0,
            d.createPortal)((0,
            r.jsx)(s.A, {
                position: "body" === w ? "fixed" : "absolute",
                width: 1,
                height: 1,
                sx: {
                    inset: "body" === w ? "0 0 0 ".concat(L, "px") : 0,
                    zIndex: M
                },
                children: (0,
                r.jsx)(s.A, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 1,
                    height: 1,
                    children: (0,
                    r.jsx)(s.A, {
                        height: y,
                        width: f,
                        children: (0,
                        r.jsx)(_, {})
                    })
                })
            }), "body" === w ? document.body : null !== (t = document.getElementById(w)) && void 0 !== t ? t : document.body)
        }
        ;
        g.displayName = "Popup"
    }
    ,
    68286: (e, t, n) => {
        n.d(t, {
            x: () => i
        });
        var r = n(74848)
          , a = n(43819)
          , s = n(60901);
        let i = e => {
            let {mode: t, startRecording: n, stopRecording: a, isPlaying: s, playAudio: i} = e;
            switch (t) {
            case "idle":
            default:
                return (0,
                r.jsx)(l, {
                    onClick: n
                });
            case "recording":
                return (0,
                r.jsx)(o, {
                    onClick: a
                });
            case "stopped":
                return (0,
                r.jsx)(d, {
                    onClick: i,
                    isPlaying: s
                })
            }
        }
          , l = e => {
            let {onClick: t} = e;
            return (0,
            r.jsx)(a.A, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "ActiveController",
                "data-sentry-source-file": "Controller.tsx",
                children: (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Controller.tsx",
                    children: (0,
                    r.jsx)(s.O0, {
                        name: "microphone",
                        onClick: t,
                        "data-sentry-element": "PrimaryIconButton",
                        "data-sentry-source-file": "Controller.tsx"
                    })
                })
            })
        }
          , o = e => {
            let {onClick: t} = e;
            return (0,
            r.jsxs)(a.A, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "RecordingController",
                "data-sentry-source-file": "Controller.tsx",
                children: [(0,
                r.jsx)(s.LP, {
                    width: 550,
                    height: 120,
                    name: "soundwaveSpeaking",
                    "data-sentry-element": "Rive",
                    "data-sentry-source-file": "Controller.tsx"
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Controller.tsx",
                    children: (0,
                    r.jsx)(s.O0, {
                        name: "stop",
                        onClick: t,
                        "data-sentry-element": "PrimaryIconButton",
                        "data-sentry-source-file": "Controller.tsx"
                    })
                })]
            })
        }
          , d = e => {
            let {onClick: t, isPlaying: n} = e;
            return (0,
            r.jsxs)(a.A, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "PlayController",
                "data-sentry-source-file": "Controller.tsx",
                children: [(0,
                r.jsx)(s.LP, {
                    width: 550,
                    height: 120,
                    name: "soundwaveSpeaking",
                    play: n,
                    "data-sentry-element": "Rive",
                    "data-sentry-source-file": "Controller.tsx"
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Controller.tsx",
                    children: (0,
                    r.jsx)(s.sP, {
                        name: "sound",
                        onClick: t,
                        "data-sentry-element": "SecondaryIconButton",
                        "data-sentry-source-file": "Controller.tsx"
                    })
                })]
            })
        }
    }
    ,
    1009: (e, t, n) => {
        n.d(t, {
            _: () => l
        });
        var r = n(34843)
          , a = n(96540)
          , s = n(46471)
          , i = n(53146);
        let l = () => {
            let e = (0,
            r.md)(i.Dr)
              , [t,n] = (0,
            a.useState)([]);
            return (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        let {facilitatorList: t} = await (0,
                        s.H_)({
                            accessToken: e
                        })
                          , r = t.map(e => {
                            let {facilitatorId: t, name: n} = e;
                            return {
                                value: t.toString(),
                                label: n
                            }
                        }
                        );
                        r.unshift({
                            value: "",
                            label: " "
                        }),
                        n(r)
                    } catch (e) {
                        n([])
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
    66689: (e, t, n) => {
        n.d(t, {
            _: () => a
        });
        var r = n(96540);
        let a = () => {
            let e = (0,
            r.useCallback)(e => {
                e.preventDefault()
            }
            , []);
            return {
                preventTouchScroll: (0,
                r.useCallback)( () => {
                    document.addEventListener("touchmove", e, {
                        passive: !1
                    })
                }
                , [e]),
                allowTouchScroll: (0,
                r.useCallback)( () => {
                    document.removeEventListener("touchmove", e)
                }
                , [e])
            }
        }
    }
    ,
    58031: (e, t, n) => {
        n.d(t, {
            Y$: () => u,
            qV: () => g,
            TS: () => p
        });
        var r = n(74848)
          , a = n(60734)
          , s = n(79369)
          , i = n(96540)
          , l = n(59483)
          , o = n(60901)
          , d = n(52199)
          , c = n(14705);
        let u = i.memo(e => {
            let {src: t, isSpeaking: n, zIndex: a} = e
              , [s,c] = (0,
            i.useState)("idle")
              , [u,m] = (0,
            i.useState)(0)
              , p = (0,
            i.useRef)(null)
              , [h,{sound: g, duration: y, pause: f, stop: w}] = (0,
            l.A)(t)
              , v = y ? y / 1e3 : 0
              , j = (0,
            i.useCallback)( () => {
                u > v && m(0),
                c("play"),
                h()
            }
            , [h, u, v])
              , b = (0,
            i.useCallback)( () => {
                c("pause"),
                f()
            }
            , [f])
              , S = (0,
            i.useCallback)( () => {
                "play" === s ? b() : j()
            }
            , [s, j, b])
              , A = (0,
            i.useCallback)( (e, t) => {
                "number" == typeof t && (m(t),
                null == g || g.seek(t))
            }
            , [g]);
            return (0,
            i.useEffect)( () => {
                if ("play" !== s)
                    return;
                let e = () => {
                    m(e => e + .1),
                    p.current = window.setTimeout(e, 100)
                }
                ;
                return e(),
                () => {
                    p.current && window.clearTimeout(p.current)
                }
            }
            , [s]),
            (0,
            i.useEffect)( () => {
                u > v && (c("pause"),
                w(),
                p.current && window.clearTimeout(p.current))
            }
            , [u, v, w]),
            (0,
            i.useEffect)( () => {
                n && b()
            }
            , [n, b]),
            (0,
            i.useEffect)( () => () => {
                w()
            }
            , [w]),
            (0,
            r.jsxs)(d.VP, {
                width: 352,
                alignItems: "center",
                children: [(0,
                r.jsx)(o.sP, {
                    name: "play" === s ? "pause" : "sound",
                    sx: {
                        zIndex: a
                    },
                    onClick: S,
                    disabled: n
                }), (0,
                r.jsx)(x, {
                    value: u,
                    step: .1,
                    max: v,
                    sx: {
                        marginTop: .5,
                        py: 2.25,
                        zIndex: a
                    },
                    onChange: A,
                    disabled: n
                })]
            })
        }
        );
        u.displayName = "AudioPlayer";
        let x = (0,
        s.A)(a.Ay)( () => ({
            width: "320px",
            "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                backgroundColor: c.Tj.primary,
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
                backgroundColor: c.Tj.onSurfaceWeak3
            }
        }));
        var m = n(2807);
        let p = e => {
            let {zIndex: t, onClick: n} = e;
            return (0,
            r.jsx)(m.A, {
                variant: "outlined",
                onClick: n,
                disableRipple: !0,
                sx: [{
                    height: 32,
                    width: 56,
                    minWidth: 56,
                    borderRadius: "8px",
                    boxShadow: 0,
                    backgroundColor: c.Tj.white,
                    borderColor: c.Tj.onSurfaceWeak3,
                    borderWidth: 2,
                    zIndex: t,
                    "&:hover": {
                        boxShadow: 0,
                        backgroundColor: c.Tj.white,
                        borderColor: c.Tj.onSurfaceWeak3,
                        borderWidth: 2
                    }
                }],
                "data-sentry-element": "Button",
                "data-sentry-component": "ZoomImageButton",
                "data-sentry-source-file": "ZoomImageButton.tsx",
                children: (0,
                r.jsx)(o.Bj, {
                    name: "zoom",
                    size: 24,
                    color: "onSurface",
                    "data-sentry-element": "Template",
                    "data-sentry-source-file": "ZoomImageButton.tsx"
                })
            })
        }
        ;
        var h = n(22130);
        n(81558);
        let g = i.memo(e => {
            let {src: t, style: n={}, weight: a="normal"} = e;
            "bold" === a && (n = {
                ...n,
                fontWeight: "bold"
            });
            let s = function(e) {
                let t;
                let n = "<math>"
                  , r = "</math>"
                  , a = [];
                for (; 0 <= (t = e.search(n)); ) {
                    let s = e.substring(0, t);
                    a.push(s);
                    let i = (e = e.substring(t)).search(r);
                    if (i < 0)
                        break;
                    let l = i + r.length
                      , o = e.substring(0, l).replace(RegExp(n, "g"), "").replace(RegExp(r, "g"), "");
                    try {
                        let t = h.A.renderToString(o, {
                            output: "html"
                        });
                        a.push(t),
                        e = e.substring(l)
                    } catch (e) {
                        break
                    }
                }
                return 0 !== e.length && a.push(e),
                a.join("")
            }(t);
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("div", {
                    style: n,
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })
            })
        }
        );
        g.displayName = "InlineQML"
    }
    ,
    36479: (e, t, n) => {
        n.d(t, {
            of: () => z,
            p9: () => x,
            nV: () => _,
            zD: () => m.z,
            i: () => O,
            fQ: () => D,
            qb: () => g,
            A_: () => T,
            zq: () => b
        });
        var r = n(74848)
          , a = n(43819)
          , s = n(40961)
          , i = n(60901)
          , l = n(94164)
          , o = n(96540);
        let d = () => {
            let[e,t] = (0,
            o.useState)(0)
              , n = (0,
            o.useCallback)( () => {
                t(window.innerWidth)
            }
            , []);
            return (0,
            o.useEffect)( () => (n(),
            window.addEventListener("resize", n),
            () => {
                window.removeEventListener("resize", n)
            }
            )),
            {
                windowWidth: e
            }
        }
        ;
        var c = n(52199)
          , u = n(14705);
        let x = e => {
            let {onClick: t} = e
              , {windowHeight: n} = (0,
            l.x)()
              , {windowWidth: o} = d();
            return (0,
            s.createPortal)((0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(a.A, {
                    height: n,
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
                r.jsx)(a.A, {
                    height: n,
                    width: o,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0,
                    r.jsxs)(c.VP, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0,
                        r.jsx)(i.LP, {
                            name: "popupFinish01",
                            height: 271,
                            width: 498
                        }), (0,
                        r.jsx)(c.hK, {
                            y: 12
                        }), (0,
                        r.jsx)(i.yh, {
                            text: "結果を見る",
                            onClick: t
                        })]
                    })
                })]
            }), document.body)
        }
        ;
        var m = n(11245)
          , p = n(67667)
          , h = n(96995);
        let g = o.memo(e => {
            let {text: t, bgColor: n, enableTapRemove: s=!0, fadeOut: l=!0} = e
              , [d,c] = (0,
            o.useState)(!0)
              , x = (0,
            o.useCallback)( () => {
                s && c(!1)
            }
            , [s]);
            return (0,
            o.useEffect)( () => {
                if (!l)
                    return;
                let e = setTimeout( () => {
                    c(!1)
                }
                , 5e3);
                return () => {
                    clearTimeout(e)
                }
            }
            , [l]),
            (0,
            r.jsx)(p.N, {
                children: d && (0,
                r.jsx)(h.P.div, {
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
                            duration: 0
                        }
                    },
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: (0,
                    r.jsx)(a.A, {
                        height: 56,
                        width: "fit-content",
                        minWidth: 216,
                        borderRadius: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 24px",
                        sx: {
                            backgroundColor: "default" === n ? (0,
                            u.au)("onSurface", .8) : (0,
                            u.au)("important", .8)
                        },
                        onClick: x,
                        children: (0,
                        r.jsx)(i.EY, {
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
        var y = n(49260)
          , f = n(94963)
          , w = n(23217);
        let v = e => {
            let {name: t, onClick: n} = e;
            return (0,
            r.jsx)(i.u4, {
                bgcolor: "onSurface",
                rippleColor: "surface",
                disabled: !1,
                onClick: n,
                sx: {
                    height: 48,
                    width: 48,
                    borderRadius: 24,
                    opacity: .5,
                    ":hover": {
                        opacity: .25
                    }
                },
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "OverrayIconButtonS",
                "data-sentry-source-file": "OverrayIconButtonS.tsx",
                children: (0,
                r.jsx)(i.Bj, {
                    name: t,
                    size: 40,
                    color: "surface",
                    "data-sentry-element": "Template",
                    "data-sentry-source-file": "OverrayIconButtonS.tsx"
                })
            })
        }
        ;
        var j = n(89523);
        let b = e => {
            let {src: t, onClose: n} = e
              , [s,i] = (0,
            o.useState)({
                width: 0,
                height: 0
            })
              , [l,d] = (0,
            o.useState)({
                width: 0,
                height: 0
            })
              , x = s.width / s.height
              , m = l.width / l.height
              , p = x >= m
              , h = p ? (innerHeight - 64) * m : innerWidth - 64
              , g = p ? innerHeight - 64 : (innerWidth - 64) / m
              , b = p ? l.height > g : l.width > h
              , S = b ? h : l.width
              , A = b ? g : l.height;
            (0,
            o.useEffect)( () => {
                let e = () => {
                    i({
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
                let n = () => {
                    d({
                        width: e.width,
                        height: e.height
                    })
                }
                ;
                return e.addEventListener("load", n),
                () => {
                    e.removeEventListener("load", n)
                }
            }
            , [t]);
            let C = (0,
            o.useCallback)(e => {
                let {scale: t, positionX: r, positionY: a} = e.state;
                1 === t && (-100 === r || 100 === r || -100 === a || 100 === a) && n()
            }
            , [n]);
            return t ? (0,
            r.jsx)(y.A, {
                "data-sentry-element": "Portal",
                "data-sentry-component": "ZoomImageDialog",
                "data-sentry-source-file": "ZoomImageDialog.tsx",
                children: (0,
                r.jsxs)(f.A, {
                    open: !!t,
                    onClick: n,
                    sx: {
                        zIndex: j.w4.zIndex.modal
                    },
                    "data-sentry-element": "Backdrop",
                    "data-sentry-source-file": "ZoomImageDialog.tsx",
                    children: [(0,
                    r.jsx)(a.A, {
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "ZoomImageDialog.tsx",
                        children: (0,
                        r.jsx)(v, {
                            name: "close",
                            onClick: n,
                            "data-sentry-element": "OverrayIconButtonS",
                            "data-sentry-source-file": "ZoomImageDialog.tsx"
                        })
                    }), (0,
                    r.jsx)(w.GT, {
                        initialScale: 1,
                        centerOnInit: !0,
                        onPanningStop: C,
                        "data-sentry-element": "TransformWrapper",
                        "data-sentry-source-file": "ZoomImageDialog.tsx",
                        children: (0,
                        r.jsx)(w.WZ, {
                            "data-sentry-element": "TransformComponent",
                            "data-sentry-source-file": "ZoomImageDialog.tsx",
                            children: (0,
                            r.jsx)(c.ov, {
                                width: innerWidth,
                                height: innerHeight,
                                "data-sentry-element": "Center",
                                "data-sentry-source-file": "ZoomImageDialog.tsx",
                                children: (0,
                                r.jsx)(a.A, {
                                    display: "flex",
                                    bgcolor: u.Tj.surface,
                                    borderRadius: 2,
                                    padding: 2,
                                    onClick: e => {
                                        e.stopPropagation()
                                    }
                                    ,
                                    "data-sentry-element": "Box",
                                    "data-sentry-source-file": "ZoomImageDialog.tsx",
                                    children: (0,
                                    r.jsx)("img", {
                                        width: S,
                                        height: A,
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
        var S = n(189)
          , A = n(67206)
          , C = n(981)
          , k = n(63330);
        o.memo(e => {
            let {id: t, value: n, menuList: a, label: s, fullWidth: l=!1, onChange: d} = e
              , c = s ? "".concat(s, "-label") : void 0
              , [u,x] = (0,
            o.useState)(!1)
              , m = (0,
            o.useCallback)( () => x(!0), [])
              , p = (0,
            o.useCallback)( () => x(!1), [])
              , h = (0,
            o.useCallback)(e => {
                d(e.target.value),
                x(!1)
            }
            , [d]);
            return (0,
            r.jsxs)(S.A, {
                focused: u,
                fullWidth: l,
                sx: {
                    width: "100%",
                    "& .MuiOutlinedInput-input": {
                        fontSize: "1.25rem",
                        paddingLeft: "24px",
                        paddingTop: "16px"
                    }
                },
                children: [c && (0,
                r.jsx)(A.A, {
                    id: c,
                    children: s
                }), (0,
                r.jsx)(C.A, {
                    id: t,
                    value: n,
                    label: s,
                    labelId: c,
                    onOpen: m,
                    onClose: p,
                    onChange: h,
                    sx: {
                        height: 48,
                        minWidth: 120
                    },
                    children: a.map(e => {
                        let {value: t, label: n} = e;
                        return (0,
                        r.jsx)(k.A, {
                            value: t,
                            children: (0,
                            r.jsx)(i.EY, {
                                color: "black",
                                size: "lg",
                                lineClamp: 1,
                                children: n
                            })
                        }, t)
                    }
                    )
                })]
            })
        }
        ).displayName = "Select";
        var I = n(5856);
        let T = o.memo(e => {
            let {type: t="text", onChange: n, maxlength: a, value: s, size: i="medium", children: l, ...d} = e
              , c = (0,
            o.useCallback)(e => null == n ? void 0 : n(e.target.value), [n])
              , [u,x] = (0,
            o.useState)(!1);
            return (0,
            r.jsx)(I.A, {
                type: t,
                onChange: c,
                ...d,
                inputProps: {
                    maxLength: a
                },
                InputLabelProps: {
                    shrink: void 0 !== s && "" !== s || u
                },
                value: s,
                size: i,
                onFocus: () => {
                    x(!0)
                }
                ,
                onBlur: () => {
                    x(!1)
                }
                ,
                children: l
            })
        }
        );
        T.displayName = "TextField";
        var M = n(93208)
          , B = n(58031);
        let _ = e => {
            let {mode: t, value: n, placeHolder: a, onChange: s} = e
              , i = (0,
            o.useId)()
              , l = a.useLatexInLabel ? "<math>".concat(a.label, "</math>") : a.label
              , d = l ? (0,
            r.jsx)(L, {
                text: l
            }) : "回答を入力"
              , c = a.useLatexInSuffix ? "<math>".concat(a.suffix, "</math>") : a.suffix;
            switch (t) {
            case "Default":
                return (0,
                r.jsx)(R, {
                    id: i,
                    value: n,
                    label: d,
                    suffix: c,
                    onChange: s
                });
            case "Correct":
                return (0,
                r.jsx)(P, {
                    id: i,
                    value: n,
                    label: d,
                    suffix: c
                });
            case "Incorrect":
                return (0,
                r.jsx)(W, {
                    id: i,
                    value: n,
                    label: d,
                    suffix: c
                })
            }
        }
          , E = {
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
          , R = e => {
            let {id: t, value: n, label: a, suffix: s, onChange: i} = e;
            return (0,
            r.jsx)(T, {
                id: t,
                name: t,
                size: "small",
                fullWidth: !0,
                multiline: !0,
                maxRows: 3,
                label: a,
                value: n,
                onChange: i,
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
                InputProps: (null == s ? void 0 : s.length) ? {
                    endAdornment: (0,
                    r.jsx)(N, {
                        text: s
                    })
                } : void 0,
                "data-sentry-element": "TextField",
                "data-sentry-component": "DefaultTextField",
                "data-sentry-source-file": "KeyboardTextField.tsx"
            })
        }
          , P = e => {
            let {id: t, value: n, label: s, suffix: l} = e;
            return (0,
            r.jsxs)(a.A, {
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "CorrectTextField",
                "data-sentry-source-file": "KeyboardTextField.tsx",
                children: [(0,
                r.jsx)(T, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    maxRows: 3,
                    label: s,
                    value: n,
                    disabled: !0,
                    sx: {
                        ...E,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: u.Tj.correctWeak
                        }
                    },
                    InputProps: (null == l ? void 0 : l.length) ? {
                        endAdornment: (0,
                        r.jsx)(N, {
                            text: l
                        })
                    } : void 0,
                    "data-sentry-element": "TextField",
                    "data-sentry-source-file": "KeyboardTextField.tsx"
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "KeyboardTextField.tsx",
                    children: (0,
                    r.jsx)(i._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "KeyboardTextField.tsx"
                    })
                })]
            })
        }
          , W = e => {
            let {id: t, value: n, label: s, suffix: l} = e;
            return (0,
            r.jsxs)(a.A, {
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "IncorrectTextField",
                "data-sentry-source-file": "KeyboardTextField.tsx",
                children: [(0,
                r.jsx)(T, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    maxRows: 3,
                    label: s,
                    value: n,
                    disabled: !0,
                    sx: {
                        ...E,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: u.Tj.importantWeak
                        }
                    },
                    InputProps: (null == l ? void 0 : l.length) ? {
                        endAdornment: (0,
                        r.jsx)(N, {
                            text: l
                        })
                    } : void 0,
                    "data-sentry-element": "TextField",
                    "data-sentry-source-file": "KeyboardTextField.tsx"
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "KeyboardTextField.tsx",
                    children: (0,
                    r.jsx)(i._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "KeyboardTextField.tsx"
                    })
                })]
            })
        }
          , L = e => {
            let {text: t} = e;
            return (0,
            r.jsx)(B.qV, {
                src: t,
                style: {
                    fontSize: 20,
                    color: u.Tj.onSurfaceWeak2
                },
                "data-sentry-element": "InlineQML",
                "data-sentry-component": "Label",
                "data-sentry-source-file": "KeyboardTextField.tsx"
            })
        }
          , N = e => {
            let {text: t} = e;
            return (0,
            r.jsx)(M.A, {
                position: "end",
                sx: {
                    alignSelf: "end",
                    height: "inherit",
                    marginBottom: 1.5
                },
                "data-sentry-element": "InputAdornment",
                "data-sentry-component": "Suffix",
                "data-sentry-source-file": "KeyboardTextField.tsx",
                children: (0,
                r.jsx)(B.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: u.Tj.onSurfaceWeak2
                    },
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "KeyboardTextField.tsx"
                })
            })
        }
          , O = o.memo(e => {
            let {width: t=435, height: n=230, handleOnPlay: l, handleOnStop: o} = e;
            return (0,
            s.createPortal)((0,
            r.jsx)(a.A, {
                position: "fixed",
                top: "50%",
                left: "50%",
                width: t,
                height: n,
                margin: "auto",
                sx: {
                    transform: "translate(-50%, -50%)"
                },
                children: (0,
                r.jsx)(i.LP, {
                    name: "popupStart5minReview",
                    height: n,
                    width: t,
                    handleOnPlay: l,
                    handleOnStop: o
                })
            }), document.body)
        }
        );
        O.displayName = "Popup5minReview";
        var V = n(66689);
        let D = e => {
            let {src: t, width: n, height: a, isTouchScroll: s} = e
              , {preventTouchScroll: i, allowTouchScroll: l} = (0,
            V._)()
              , d = (0,
            o.useCallback)(e => {
                s || e.touches.length < 2 ? i() : l()
            }
            , [s, i, l])
              , c = (0,
            o.useCallback)(e => {
                (s || e.touches.length < 2) && l()
            }
            , [s, l]);
            return (0,
            r.jsx)("div", {
                onTouchStart: d,
                onTouchEnd: c,
                "data-sentry-component": "ReplayPreviewArea",
                "data-sentry-source-file": "ReplayPreviewArea.tsx",
                children: (0,
                r.jsx)("img", {
                    src: t,
                    width: n,
                    height: a,
                    alt: "",
                    style: {
                        height: "auto"
                    }
                })
            })
        }
        ;
        var q = n(14953);
        let z = n.n(q)()( () => Promise.all([n.e(397), n.e(905), n.e(530)]).then(n.bind(n, 31530)).then(e => e.DrawingArea), {
            loadableGenerated: {
                webpack: () => [31530]
            },
            ssr: !1
        })
    }
    ,
    20190: (e, t, n) => {
        n.d(t, {
            y: () => r
        });
        let r = (0,
        n(52035).eU)(void 0)
    }
    ,
    65834: (e, t, n) => {
        n.d(t, {
            Ml: () => i,
            Of: () => k,
            Og: () => I,
            jc: () => _,
            Xn: () => j,
            WS: () => f,
            uy: () => b,
            kI: () => x,
            $D: () => B
        });
        var r = n(74848)
          , a = n(96540)
          , s = n(60901);
        let i = a.memo(e => {
            let {isOpen: t, onClickCancel: n, onClickAnswer: a} = e;
            return (0,
            r.jsx)(s.lG, {
                isOpen: t,
                title: "このまま解答しますか？",
                body: "解答が未入力です。",
                actions: (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(s.Pn, {
                        label: "キャンセル",
                        color: "primary",
                        onClick: n
                    }), (0,
                    r.jsx)(s.Pn, {
                        label: "解答する",
                        color: "primary",
                        onClick: a
                    })]
                }),
                onClose: n
            })
        }
        );
        i.displayName = "EmptyAnswerDialog";
        var l = n(43819)
          , o = n(66689)
          , d = n(14705)
          , c = n(39941)
          , u = n(58031);
        let x = (0,
        a.forwardRef)( (e, t) => {
            let {children: n, mode: s="Default", page: i, maxPage: o, height: c=240, prefixLabel: u, suffixLabel: x, useLatexInLabel: f=!1, useLatexInSuffix: w=!1, hasBackgroundImage: v=!0, onClickLeft: j, onClickRight: b} = e
              , S = (0,
            a.useMemo)( () => {
                switch (s) {
                case "Default":
                    return (0,
                    r.jsx)(m, {
                        ref: t,
                        height: c,
                        hasBackgroundImage: v,
                        children: n
                    });
                case "Slider":
                    return (0,
                    r.jsx)(p, {
                        page: i,
                        maxPage: o,
                        onClickLeft: j,
                        onClickRight: b,
                        children: (0,
                        r.jsx)(m, {
                            ref: t,
                            height: c,
                            hasBackgroundImage: v,
                            children: n
                        })
                    });
                case "Correct":
                    return (0,
                    r.jsx)(h, {
                        ref: t,
                        height: c,
                        hasBackgroundImage: v,
                        children: n
                    });
                case "Incorrect":
                    return (0,
                    r.jsx)(g, {
                        ref: t,
                        height: c,
                        hasBackgroundImage: v,
                        children: n
                    })
                }
            }
            , [n, s, i, o, c, t, v, j, b])
              , A = "Slider" === s ? 48 : 16
              , C = {
                border: "4px solid ".concat(d.Tj.onSurfaceWeak3),
                borderRadius: "8px",
                ..."100%" === c ? {
                    height: c
                } : {}
            };
            return (0,
            r.jsx)("div", {
                style: C,
                children: (0,
                r.jsxs)(l.A, {
                    height: c,
                    position: "relative",
                    display: "flex",
                    children: [S, u && (0,
                    r.jsx)(y, {
                        type: "prefix",
                        text: u,
                        sideMove: A,
                        useLatex: f
                    }), x && (0,
                    r.jsx)(y, {
                        type: "suffix",
                        text: x,
                        sideMove: A,
                        useLatex: w
                    })]
                })
            })
        }
        );
        x.displayName = "WritingArea";
        let m = (0,
        a.forwardRef)( (e, t) => {
            let {children: n, height: a, hasBackgroundImage: s} = e
              , {preventTouchScroll: i, allowTouchScroll: d} = (0,
            o._)();
            return (0,
            r.jsx)(l.A, {
                ref: t,
                flexGrow: 0,
                position: "relative",
                width: "100%",
                height: a,
                sx: {
                    overflow: "hidden",
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    ...s ? {
                        backgroundImage: "url(".concat((0,
                        c.o)("png/handwriting.png"), ")"),
                        backgroundSize: "215px 105px",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    } : void 0
                },
                onPointerEnter: i,
                onPointerLeave: d,
                children: n
            })
        }
        );
        m.displayName = "Default";
        let p = e => {
            let {children: t, page: n, maxPage: a, onClickLeft: s, onClickRight: i} = e;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(l.A, {
                    flexGrow: 0,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "WritingArea.tsx",
                    children: (0,
                    r.jsx)(f, {
                        type: "left",
                        width: 32,
                        disabled: 1 === n,
                        onClick: s,
                        "data-sentry-element": "SliderButton",
                        "data-sentry-source-file": "WritingArea.tsx"
                    })
                }), t, (0,
                r.jsx)(l.A, {
                    flexGrow: 0,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "WritingArea.tsx",
                    children: (0,
                    r.jsx)(f, {
                        type: "right",
                        width: 32,
                        disabled: n === a,
                        onClick: i,
                        "data-sentry-element": "SliderButton",
                        "data-sentry-source-file": "WritingArea.tsx"
                    })
                })]
            })
        }
          , h = (0,
        a.forwardRef)( (e, t) => {
            let {children: n, height: a, prefixLabel: i, suffixLabel: o, hasBackgroundImage: d} = e;
            return (0,
            r.jsxs)(m, {
                ref: t,
                height: a,
                prefixLabel: i,
                suffixLabel: o,
                hasBackgroundImage: d,
                children: [(0,
                r.jsx)(l.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 144,
                    height: 144,
                    children: (0,
                    r.jsx)(s._n, {
                        name: "correctionO",
                        width: 144,
                        height: 144
                    })
                }), n]
            })
        }
        );
        h.displayName = "Correct";
        let g = (0,
        a.forwardRef)( (e, t) => {
            let {children: n, height: a, prefixLabel: i, suffixLabel: o, hasBackgroundImage: d} = e;
            return (0,
            r.jsxs)(m, {
                ref: t,
                height: a,
                prefixLabel: i,
                suffixLabel: o,
                hasBackgroundImage: d,
                children: [(0,
                r.jsx)(l.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 144,
                    height: 144,
                    children: (0,
                    r.jsx)(s._n, {
                        name: "correctionX",
                        width: 144,
                        height: 144
                    })
                }), n]
            })
        }
        );
        g.displayName = "Incorrect";
        let y = e => {
            let {text: t, type: n, sideMove: a, useLatex: s} = e;
            return (0,
            r.jsx)(u.qV, {
                src: s ? "<math>".concat(t, "</math>") : t,
                style: {
                    position: "absolute",
                    fontSize: 40,
                    color: d.Tj.onSurfaceWeak2,
                    ..."prefix" === n ? {
                        top: 16,
                        left: a
                    } : {
                        bottom: 16,
                        right: a
                    }
                },
                "data-sentry-element": "InlineQML",
                "data-sentry-component": "Label",
                "data-sentry-source-file": "WritingArea.tsx"
            })
        }
          , f = a.memo(e => {
            let {type: t, width: n, disabled: a, onClick: i} = e;
            return (0,
            r.jsx)("button", {
                disabled: a,
                style: {
                    width: n,
                    height: "100%",
                    padding: 0,
                    border: "none",
                    background: (0,
                    d.au)("onSurfaceWeak4", .5),
                    cursor: "pointer",
                    ..."left" === t && {
                        borderRight: "1px solid ".concat(d.Tj.onSurfaceWeak3)
                    },
                    ..."right" === t && {
                        borderLeft: "1px solid ".concat(d.Tj.onSurfaceWeak3)
                    }
                },
                onClick: i,
                children: (0,
                r.jsx)(s.Bj, {
                    name: "left" === t ? "triangleLeft" : "triangleRight",
                    size: 32,
                    color: a ? "onSurfaceWeak3" : "primary"
                })
            })
        }
        );
        f.displayName = "SliderButton";
        var w = n(44175)
          , v = n(52199);
        let j = a.memo(e => {
            let {isOpen: t, x: n, y: i, onClick: l} = e
              , {analyticsEvent: o} = (0,
            w.yw)();
            return ((0,
            a.useEffect)( () => {
                t && o({
                    eventName: "AP_手書き入力問題「再接続」表示"
                })
            }
            , [t]),
            t) ? (0,
            r.jsxs)(s.u4, {
                sx: {
                    position: "absolute",
                    justifyContent: "normal",
                    top: i,
                    left: null != n ? n : "calc(50% - ".concat(136, "px)"),
                    width: 272,
                    height: 48,
                    bgcolor: (0,
                    d.au)("onSurface", .8),
                    borderRadius: 32,
                    zIndex: 22
                },
                onClick: l,
                children: [(0,
                r.jsx)(v.hK, {
                    x: 3
                }), (0,
                r.jsx)(s.EY, {
                    color: "white",
                    children: "接続が不安定です"
                }), (0,
                r.jsx)(v.hK, {
                    x: 2
                }), (0,
                r.jsxs)(v.fI, {
                    alignItems: "center",
                    pr: 1.5,
                    pl: .5,
                    py: .5,
                    height: 32,
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                    bgcolor: d.Tj.onSurface,
                    borderRadius: 32,
                    children: [(0,
                    r.jsx)(s.Bj, {
                        name: "reload",
                        size: 32
                    }), "再接続"]
                }), (0,
                r.jsx)(v.hK, {
                    x: 1
                })]
            }) : (0,
            r.jsx)(r.Fragment, {})
        }
        );
        function b(e) {
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
        var S = n(34843)
          , A = n(22130);
        n(81558);
        var C = n(31888);
        let k = a.memo(e => {
            let {text: t, id: n, style: s} = e
              , i = (0,
            S.Xr)(C.z)
              , l = (0,
            a.useRef)(null);
            return (0,
            a.useEffect)( () => {
                if (l.current)
                    try {
                        i(!1),
                        A.A.render(t, l.current),
                        l.current.querySelectorAll(".katex-html").forEach(e => {
                            e.style.whiteSpace = "nowrap"
                        }
                        )
                    } catch (e) {
                        console.error("KaTeXのレンダリングエラー:", e),
                        e instanceof Error && i(!0)
                    }
            }
            , [t, i]),
            (0,
            r.jsx)("div", {
                id: n,
                style: s,
                ref: l
            })
        }
        );
        k.displayName = "Katex";
        let I = a.memo(e => {
            let {isOpen: t, title: n, onClickCancel: a, onClickContinue: i, onClose: l} = e;
            return (0,
            r.jsx)(s.lG, {
                isOpen: t,
                title: n,
                body: (0,
                r.jsx)(s.EY, {
                    lineHeight: "relaxed",
                    children: "書き直しをおねがいします。いらない点や線があれば消してください。"
                }),
                actions: (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(s.Pn, {
                        label: "このまま解答する",
                        color: "primary",
                        onClick: i
                    }), (0,
                    r.jsx)(s.Pn, {
                        label: "書き直す",
                        color: "primary",
                        onClick: a
                    })]
                }),
                onClose: l
            })
        }
        );
        I.displayName = "KatexErrorDialog";
        var T = n(78218)
          , M = n(4799);
        let B = () => {
            let e = (0,
            S.md)(M.HK)
              , t = (0,
            S.Xr)(M.Dl)
              , n = "eraser" === e ? "eraser" : "pen";
            return {
                onPointerDown: (0,
                a.useCallback)( () => {
                    switch (n) {
                    case "pen":
                        t({
                            type: T.w2.ANSWERVIEW_INPUT_HANDWRITE_START
                        });
                        return;
                    case "eraser":
                        t({
                            type: T.w2.ANSWERVIEW_INPUT_ERASER_START
                        });
                        return
                    }
                }
                , [n, t]),
                onPointerUp: (0,
                a.useCallback)( () => {
                    switch (n) {
                    case "pen":
                        t({
                            type: T.w2.ANSWERVIEW_INPUT_HANDWRITE_END
                        });
                        return;
                    case "eraser":
                        t({
                            type: T.w2.ANSWERVIEW_INPUT_ERASER_END
                        });
                        return
                    }
                }
                , [n, t])
            }
        }
          , _ = a.memo(e => {
            let {isOpen: t, onClick: n} = e;
            return (0,
            r.jsx)(s.lG, {
                isOpen: t,
                title: "文字数が多すぎます",
                body: "300文字以内で解答してください。",
                actions: (0,
                r.jsx)(r.Fragment, {
                    children: (0,
                    r.jsx)(s.Pn, {
                        label: "OK",
                        color: "primary",
                        onClick: n
                    })
                }),
                onClose: n
            })
        }
        );
        _.displayName = "OverflowDialog"
    }
    ,
    31888: (e, t, n) => {
        n.d(t, {
            z: () => r
        });
        let r = (0,
        n(52035).eU)(!1)
    }
    ,
    43696: (e, t, n) => {
        n.d(t, {
            $Q: () => o,
            RN: () => a,
            io: () => u,
            g7: () => c,
            OJ: () => s,
            XO: () => d
        });
        var r = n(96540);
        let a = e => {
            let[t,n] = (0,
            r.useState)(void 0)
              , [a,s] = (0,
            r.useState)(!1)
              , i = (0,
            r.useCallback)( () => {
                if (!e)
                    return;
                t && t.pause();
                let r = new Audio(e);
                n(r),
                r.play()
            }
            , [e, t])
              , l = (0,
            r.useCallback)( () => {
                t && (t.pause(),
                t.currentTime = 0,
                n(void 0),
                s(!1))
            }
            , [t]);
            return (0,
            r.useEffect)( () => {
                if (!t)
                    return;
                let e = () => s(!0)
                  , n = () => s(!1);
                return t.addEventListener("play", e),
                t.addEventListener("ended", n),
                () => {
                    t.removeEventListener("play", e),
                    t.removeEventListener("ended", n)
                }
            }
            , [t]),
            {
                isPlaying: a,
                playAudio: i,
                stopAudio: l
            }
        }
          , s = () => {
            let[e,t] = (0,
            r.useState)();
            return {
                showing: e,
                show: (0,
                r.useCallback)(e => t(e), []),
                hide: (0,
                r.useCallback)( () => t(void 0), [])
            }
        }
        ;
        var i = n(78218)
          , l = n(1045);
        let o = () => {
            let[e,t] = (0,
            r.useState)(new Uint8Array);
            return {
                prepare: (0,
                r.useCallback)( (e, n, r) => {
                    if (!e) {
                        n();
                        return
                    }
                    r(),
                    t(e)
                }
                , []),
                fix: (0,
                r.useCallback)(t => {
                    t({
                        answer: {
                            result: i.aJ.CORRECT,
                            textType: 2,
                            text: "",
                            wrongCount: 0
                        },
                        answerLogResource: {
                            buffer: e,
                            type: l.w6.ENGLISH_AUDIO
                        },
                        viewStateJSON: {}
                    })
                }
                , [e])
            }
        }
          , d = () => {
            let[e,t] = (0,
            r.useState)(!1);
            return {
                show: (0,
                r.useCallback)( () => t(!0), []),
                hide: (0,
                r.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , c = () => {
            let[e,t] = (0,
            r.useState)(!1);
            return {
                show: (0,
                r.useCallback)( () => t(!0), []),
                hide: (0,
                r.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , u = () => {
            let[e,t] = (0,
            r.useState)(!1);
            return {
                show: (0,
                r.useCallback)( () => t(!0), []),
                hide: (0,
                r.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
    }
    ,
    17824: (e, t, n) => {
        n.d(t, {
            xD: () => aT,
            Fk: () => az,
            Fy: () => O
        });
        var r = n(74848)
          , a = n(43819)
          , s = n(34843)
          , i = n(96540)
          , l = n(60901)
          , o = n(44175)
          , d = n(52199)
          , c = n(14705);
        let u = e => {
            let {question: t, isSpeaking: n, showImageDialog: a} = e;
            switch (t.type) {
            case "A1":
                return (0,
                r.jsx)(m, {
                    source: t
                });
            case "A2":
                return (0,
                r.jsx)(p, {
                    source: t
                });
            case "A2Selection":
                return (0,
                r.jsx)(h, {
                    source: t
                });
            case "B1":
                return (0,
                r.jsx)(g, {
                    source: t
                });
            case "B2":
                return (0,
                r.jsx)(y, {
                    source: t
                });
            case "B2Selection":
                return (0,
                r.jsx)(f, {
                    source: t
                });
            case "ClassicQubena":
                return (0,
                r.jsx)(w, {
                    source: t,
                    showImageDialog: a
                });
            case "EnglishWordL":
                return (0,
                r.jsx)(v, {
                    source: t,
                    isSpeaking: n
                });
            case "EnglishWordL1":
                return (0,
                r.jsx)(j, {
                    source: t,
                    isSpeaking: n
                });
            case "EnglishWordL2":
                return (0,
                r.jsx)(b, {
                    source: t,
                    isSpeaking: n
                });
            case "EnglishWordR":
                return (0,
                r.jsx)(S, {
                    source: t
                });
            case "EnglishWordRL":
                return (0,
                r.jsx)(A, {
                    source: t,
                    isSpeaking: n
                });
            case "EnglishWordRLv2":
                return (0,
                r.jsx)(C, {
                    source: t,
                    isSpeaking: n
                });
            case "EnglishWordW":
                return (0,
                r.jsx)(k, {
                    source: t
                });
            case "EnglishWordWL":
                return (0,
                r.jsx)(I, {
                    source: t,
                    isSpeaking: n
                });
            case "Html":
                return (0,
                r.jsx)(T, {
                    source: t
                });
            case "KanjiNazori":
                return (0,
                r.jsx)(M, {
                    source: t
                });
            case "KanjiSelfJudgement":
                return (0,
                r.jsx)(B, {
                    source: t
                });
            case "KanjiYomi":
                return (0,
                r.jsx)(_, {
                    source: t
                });
            case "Simple":
                return (0,
                r.jsx)(E, {
                    source: t,
                    isSpeaking: n,
                    showImageDialog: a
                })
            }
        }
        ;
        var x = n(58031);
        let m = e => {
            let {source: t, showImageDialog: n} = e
              , a = t.parameter
              , s = a.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , i = a.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , l = a.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "A1",
                "data-sentry-source-file": "A1.tsx",
                children: [s.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), i.map( (e, t) => (0,
                r.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                r.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        r.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                n && n(o)
                            }
                        })]
                    }, "image_section")
                }), l.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , p = e => {
            let {source: t, showImageDialog: n} = e
              , a = t.parameter
              , s = a.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , i = a.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , l = a.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "A2",
                "data-sentry-source-file": "A2.tsx",
                children: [0 === s.length && (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: "並べ替えて完成させよ。"
                }), s.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), i.map( (e, t) => (0,
                r.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                r.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        r.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                n && n(o)
                            }
                        })]
                    }, "image_section")
                }), l.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , h = e => {
            let {source: t, showImageDialog: n} = e
              , a = t.parameter
              , s = a.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , i = a.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , l = a.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "A2Selection",
                "data-sentry-source-file": "A2Selection.tsx",
                children: [s.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), i.map( (e, t) => (0,
                r.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                r.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        r.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                n && n(o)
                            }
                        })]
                    }, "image_section")
                }), l.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , g = e => {
            let {source: t, showImageDialog: n} = e
              , a = t.parameter
              , s = a.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , i = a.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , l = a.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , c = a.aSideAtomName;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "B1",
                "data-sentry-source-file": "B1.tsx",
                children: [0 === s.length && (0,
                r.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    r.jsx)("b", {
                        children: c
                    }), " の説明文である。", (0,
                    r.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる語句を書け。"]
                }), s.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), i.map( (e, t) => (0,
                r.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                r.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        r.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                n && n(o)
                            }
                        })]
                    }, "image_section")
                }), l.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , y = e => {
            let {source: t, showImageDialog: n} = e
              , a = t.parameter
              , s = a.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , i = a.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , l = a.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , c = a.aSideAtomName;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "B2",
                "data-sentry-source-file": "B2.tsx",
                children: [0 === s.length && (0,
                r.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    r.jsx)("b", {
                        children: c
                    }), " の説明文である。", (0,
                    r.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる語句を書け。"]
                }), s.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), i.map( (e, t) => (0,
                r.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                r.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        r.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                n && n(o)
                            }
                        })]
                    }, "image_section")
                }), l.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , f = e => {
            let {source: t, showImageDialog: n} = e
              , a = t.parameter
              , s = a.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , i = a.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , l = a.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , c = a.aSideAtomName;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "B2Selection",
                "data-sentry-source-file": "B2Selection.tsx",
                children: [0 === s.length ? (0,
                r.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    r.jsx)("b", {
                        children: c
                    }), " の説明文である。", (0,
                    r.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる選択肢を選べ。"]
                }) : s.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), i.map( (e, t) => (0,
                r.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                r.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        r.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                n && n(o)
                            }
                        })]
                    }, "image_section")
                }), l.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , w = e => {
            let {source: t, showImageDialog: n} = e
              , a = t.image;
            return a ? (0,
            r.jsx)("div", {
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                "data-sentry-component": "ClassicQubena",
                "data-sentry-source-file": "ClassicQubena.tsx",
                children: (0,
                r.jsxs)(d.VP, {
                    alignItems: "center",
                    gap: 2,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "ClassicQubena.tsx",
                    children: [(0,
                    r.jsx)("img", {
                        className: "question-content-image",
                        src: a,
                        width: "100%"
                    }), (0,
                    r.jsx)(x.TS, {
                        zIndex: 1,
                        onClick: () => {
                            n && n(a)
                        }
                        ,
                        "data-sentry-element": "ZoomImageButton",
                        "data-sentry-source-file": "ClassicQubena.tsx"
                    })]
                }, 0)
            }) : (0,
            r.jsx)(r.Fragment, {})
        }
          , v = e => {
            let {source: t, isSpeaking: n} = e
              , a = t.audio;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    r.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語の意味または用法を選びましょう。"
                    }), a && (0,
                    r.jsx)("div", {
                        className: "audio",
                        children: (0,
                        r.jsx)(d.ov, {
                            children: (0,
                            r.jsx)(x.Y$, {
                                src: a,
                                zIndex: 1,
                                isSpeaking: n
                            })
                        })
                    })]
                })
            })
        }
          , j = e => {
            let {source: t, isSpeaking: n} = e
              , a = t.audio;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    r.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語を選びましょう。"
                    }), a && (0,
                    r.jsx)("div", {
                        className: "audio",
                        children: (0,
                        r.jsx)(d.ov, {
                            children: (0,
                            r.jsx)(x.Y$, {
                                src: a,
                                zIndex: 1,
                                isSpeaking: n
                            })
                        })
                    })]
                })
            })
        }
          , b = e => {
            let {source: t, isSpeaking: n} = e
              , a = t.audio;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    r.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語の意味または用法を選びましょう。"
                    }), a && (0,
                    r.jsx)("div", {
                        className: "audio",
                        children: (0,
                        r.jsx)(d.ov, {
                            children: (0,
                            r.jsx)(x.Y$, {
                                src: a,
                                zIndex: 1,
                                isSpeaking: n
                            })
                        })
                    })]
                })
            })
        }
          , S = e => {
            let {source: t} = e
              , n = t.parameter.mainText;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "EnglishWordR",
                "data-sentry-source-file": "EnglishWordR.tsx",
                children: [(0,
                r.jsx)("p", {
                    className: "question-text",
                    children: "英語の意味または用法を選びましょう。"
                }), (0,
                r.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: n,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "EnglishWordR.tsx"
                    })
                })]
            })
        }
          , A = e => {
            let {source: t, isSpeaking: n} = e
              , a = t.parameter.mainText
              , s = t.audio;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "EnglishWordRL",
                "data-sentry-source-file": "EnglishWordRL.tsx",
                children: [(0,
                r.jsx)("p", {
                    className: "question-text",
                    children: "英語の意味または用法を選びましょう。"
                }), (0,
                r.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: a,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "EnglishWordRL.tsx"
                    })
                }), s && (0,
                r.jsx)("div", {
                    className: "audio",
                    children: (0,
                    r.jsx)(d.ov, {
                        children: (0,
                        r.jsx)(x.Y$, {
                            src: s,
                            zIndex: 1,
                            isSpeaking: n
                        })
                    })
                })]
            })
        }
          , C = e => {
            let {source: t, isSpeaking: n} = e
              , a = t.parameter.mainText.replaceAll("\n", "<br/>")
              , s = t.audio;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "EnglishWordRLv2",
                "data-sentry-source-file": "EnglishWordRLv2.tsx",
                children: [(0,
                r.jsxs)("p", {
                    className: "question-text",
                    children: [(0,
                    r.jsx)("b", {
                        children: "下線部"
                    }), " ", "の英語の意味または用法を選びましょう。分からない場合は，前後の単語や文全体の意味から予想してみましょう。"]
                }), (0,
                r.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: a,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "EnglishWordRLv2.tsx"
                    })
                }), s && (0,
                r.jsx)("div", {
                    className: "audio",
                    children: (0,
                    r.jsx)(d.ov, {
                        children: (0,
                        r.jsx)(x.Y$, {
                            src: s,
                            zIndex: 1,
                            isSpeaking: n
                        })
                    })
                })]
            })
        }
          , k = e => {
            let {source: t} = e
              , {parameter: n} = t
              , {questionText: a, variantForm: s, baseForm: i, wordUsageAndMeaning: l} = n;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "EnglishWordW",
                "data-sentry-source-file": "EnglishWordW.tsx",
                children: [(0,
                r.jsx)("p", {
                    className: "question-text",
                    children: a ? "次の日本語を英語に直しましょう。" : "次の英語を書きましょう。"
                }), (0,
                r.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: ( () => {
                            switch (s) {
                            case "3単現":
                                return "".concat(i, "の変化形で, 主語が3人称単数で現在の時に使う語");
                            case "過去形":
                                return "".concat(i, "の過去形");
                            case "過去分詞形":
                                return "".concat(i, "の過去分詞形");
                            default:
                                return "".concat(l)
                            }
                        }
                        )(),
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "EnglishWordW.tsx"
                    })
                }), a && (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("br", {}), (0,
                    r.jsx)(x.qV, {
                        src: a
                    })]
                })]
            })
        }
          , I = e => {
            let {source: t, isSpeaking: n} = e
              , {parameter: a} = t
              , s = t.audio
              , {targetWord: i, partOfSpeech: l, variantForm: o, baseForm: c, wordUsageAndMeaning: u} = a
              , m = i.split(" ").length;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "EnglishWordWL",
                "data-sentry-source-file": "EnglishWordWL.tsx",
                children: [(0,
                r.jsx)("p", {
                    className: "question-text",
                    children: "熟語" === l || "名詞" === l && m >= 3 ? "語句を並べかえて次の英語を完成させましょう。" : "文字を並べかえて次の英語を完成させましょう。"
                }), (0,
                r.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: ( () => {
                            switch (o) {
                            case "3単現":
                                return "".concat(c, "の変化形で, 主語が3人称単数で現在の時に使う語");
                            case "過去形":
                                return "".concat(c, "の過去形");
                            case "過去分詞形":
                                return "".concat(c, "の過去分詞形");
                            default:
                                return "".concat(u)
                            }
                        }
                        )(),
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "EnglishWordWL.tsx"
                    })
                }), s && (0,
                r.jsx)("div", {
                    className: "audio",
                    children: (0,
                    r.jsx)(d.ov, {
                        children: (0,
                        r.jsx)(x.Y$, {
                            src: s,
                            zIndex: 1,
                            isSpeaking: n
                        })
                    })
                })]
            })
        }
          , T = e => {
            let {source: t} = e
              , n = t.parameter.html || "<h2>no content</h2>";
            return (0,
            r.jsx)("div", {
                className: "question-area",
                style: {
                    fontSize: "20px"
                },
                "data-sentry-component": "Html",
                "data-sentry-source-file": "Html.tsx",
                children: (0,
                r.jsx)(x.qV, {
                    src: n,
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "Html.tsx"
                })
            })
        }
          , M = e => {
            let t, {source: n} = e, a = n.parameter, s = a.questionWord, i = a.questionWordPronunciation, l = a.example;
            switch (a.grade) {
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
            let o = l.replace(s, "<u>".concat(i, "</u>"));
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "KanjiNazori",
                "data-sentry-source-file": "KanjiNazori.tsx",
                children: [(0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: t,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "KanjiNazori.tsx"
                    })
                }), (0,
                r.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: o,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "KanjiNazori.tsx"
                    })
                })]
            })
        }
          , B = e => {
            let t, {source: n} = e, a = n.parameter, s = a.questionWord, i = a.questionWordPronunciation, l = a.example;
            switch (a.grade) {
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
            let o = l.replace(s, "<u>".concat(i, "</u>"));
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "KanjiSelfJudgement",
                "data-sentry-source-file": "KanjiSelfJudgement.tsx",
                children: [(0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: t,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "KanjiSelfJudgement.tsx"
                    })
                }), (0,
                r.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: o,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "KanjiSelfJudgement.tsx"
                    })
                })]
            })
        }
          , _ = e => {
            let t, {source: n} = e, a = n.parameter, s = a.questionWord, i = a.example;
            switch (a.grade) {
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
            let l = i.replace(s, "<u>".concat(s, "</u>"));
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "KanjiYomi",
                "data-sentry-source-file": "KanjiYomi.tsx",
                children: [(0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: t,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "KanjiYomi.tsx"
                    })
                }), (0,
                r.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: l,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "KanjiYomi.tsx"
                    })
                })]
            })
        }
          , E = e => {
            let {source: t, isSpeaking: n, showImageDialog: a} = e
              , s = t.parameter
              , i = s.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , l = s.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = s.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , c = t.images
              , u = t.smallImages
              , m = t.largeImages
              , p = t.audio;
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "Simple",
                "data-sentry-source-file": "Simple.tsx",
                children: [i.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e
                    })
                }, "Question Section:".concat(t))), l.map( (e, t) => (0,
                r.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), p && (0,
                r.jsx)("div", {
                    className: "audio",
                    children: (0,
                    r.jsx)(d.ov, {
                        children: (0,
                        r.jsx)(x.Y$, {
                            src: p,
                            zIndex: 1,
                            isSpeaking: n
                        })
                    })
                }), o.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t))), 0 !== m.length && (0,
                r.jsx)("div", {
                    className: "image-area",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: m.map( (e, t) => (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        r.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-large"
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                a && a(e)
                            }
                        })]
                    }, "Large Image:".concat(t)))
                }), 0 !== c.length && (0,
                r.jsx)("div", {
                    className: "image-area",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: c.map( (e, t) => (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        r.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-medium"
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                a && a(e)
                            }
                        })]
                    }, "Medium Image:".concat(t)))
                }), 0 !== u.length && (0,
                r.jsx)("div", {
                    className: "image-area-small",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: u.map( (e, t) => (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        r.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-small"
                        }), (0,
                        r.jsx)(x.TS, {
                            zIndex: 1,
                            onClick: () => {
                                a && a(e)
                            }
                        })]
                    }, "Small Image:".concat(t)))
                })]
            })
        }
        ;
        var R = n(36479)
          , P = n(8936)
          , W = n(4799);
        let L = i.memo(e => {
            let {width: t, height: n, isTouchScroll: a, isScaling: i, selectedTool: l, stageRef: o, replayResource: d} = e
              , c = (0,
            s.md)(W.Br)
              , u = (0,
            P.MM)()
              , x = "StartFromReplay" === c && (null == d ? void 0 : d.args.memo) !== void 0;
            return (0,
            r.jsx)(r.Fragment, {
                children: x ? (0,
                r.jsx)(R.fQ, {
                    src: null == d ? void 0 : d.args.memo,
                    width: t,
                    height: "landscape" === u ? n + 480 : i ? n + 480 : n,
                    isTouchScroll: a
                }) : (0,
                r.jsx)(R.of, {
                    tool: l,
                    width: t,
                    height: n + 480,
                    isTouchScroll: a,
                    stageRef: o
                })
            })
        }
        );
        L.displayName = "ViewArea";
        var N = n(13620);
        let O = i.memo(e => {
            let {answerMode: t, width: n, stageRef: a, replayResource: i} = e
              , l = (0,
            s.md)(W.HK)
              , {getQuestionSource: o} = (0,
            N.$)()
              , d = (0,
            P.MM)()
              , c = o();
            return void 0 === c ? (0,
            r.jsx)(r.Fragment, {
                children: "未確認のQP"
            }) : (0,
            r.jsx)(V, {
                question: c,
                selectedTool: "Answered" === t ? void 0 : l,
                width: n,
                isMemoExpand: "portrait" === d,
                isTouchScroll: "Answered" === t,
                stageRef: a,
                replayResource: i
            })
        }
        );
        O.displayName = "QuestionPanel";
        let V = e => {
            let {question: t, selectedTool: n, width: x, isMemoExpand: m, isTouchScroll: p, stageRef: h, replayResource: g} = e
              , y = (0,
            s.Xr)(W.HK)
              , f = (0,
            s.md)(W.UQ)
              , [w,v] = (0,
            i.useState)(!1)
              , [j,b] = (0,
            i.useState)(null)
              , {elementRef: S, elementSize: A} = (0,
            o.wY)()
              , C = (0,
            P.MM)()
              , {sendOpenMemoOnReplay: k} = D()
              , I = (0,
            i.useCallback)( () => {
                v(e => {
                    let t = !e;
                    return t && y("pen"),
                    t
                }
                ),
                k()
            }
            , [k, y])
              , T = (0,
            i.useCallback)(e => {
                b(e)
            }
            , [])
              , M = (0,
            i.useCallback)( () => {
                b(null)
            }
            , []);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(a.A, {
                    ref: S,
                    position: "relative",
                    width: x,
                    height: "fit-content",
                    minHeight: "100%",
                    pb: "landscape" === C ? 60 : w ? 60 : 0,
                    bgcolor: c.Tj.surface,
                    border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                    borderRadius: 2,
                    overflow: "hidden",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "QuestionPanel.tsx",
                    children: [u({
                        question: t,
                        isSpeaking: f,
                        showImageDialog: T
                    }), m && (0,
                    r.jsxs)(d.fI, {
                        position: "relative",
                        width: 64,
                        height: 32,
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 1,
                        ml: 1,
                        bgcolor: c.Tj.onSurfaceWeak4,
                        borderRadius: 2,
                        sx: {
                            cursor: "pointer"
                        },
                        zIndex: 1,
                        onClick: I,
                        children: [(0,
                        r.jsx)(l.Bj, {
                            name: "memo",
                            size: 24,
                            color: "onSurface"
                        }), (0,
                        r.jsx)(l.Bj, {
                            name: w ? "angleUp" : "angleDown",
                            size: 24,
                            color: "onSurface"
                        })]
                    }), (0,
                    r.jsx)(a.A, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "QuestionPanel.tsx",
                        children: (0,
                        r.jsx)(L, {
                            width: A.width,
                            height: A.height,
                            isTouchScroll: p,
                            isScaling: w,
                            selectedTool: n,
                            stageRef: h,
                            replayResource: g,
                            "data-sentry-element": "ViewArea",
                            "data-sentry-source-file": "QuestionPanel.tsx"
                        })
                    })]
                }), (0,
                r.jsx)(R.zq, {
                    src: j,
                    onClose: M,
                    "data-sentry-element": "ZoomImageDialog",
                    "data-sentry-source-file": "QuestionPanel.tsx"
                })]
            })
        }
          , D = () => {
            var e, t;
            let n = (0,
            s.md)(W.cS).code
              , r = (0,
            s.md)(W.bQ)
              , a = null !== (e = null == r ? void 0 : r.id) && void 0 !== e ? e : 0
              , i = null !== (t = null == r ? void 0 : r.contentResource.answer.name) && void 0 !== t ? t : "unknown"
              , l = "StartFromReplay" === (0,
            s.md)(W.Br)
              , {analyticsEvent: d} = (0,
            o.yw)();
            return {
                sendOpenMemoOnReplay: () => {
                    l && d({
                        eventName: "解答リプレイ「メモを開く」クリック",
                        params: {
                            courseCode: n,
                            programId: a,
                            ap: i
                        }
                    })
                }
            }
        }
        ;
        var q = n(14476)
          , z = n(50437);
        let H = {
            answerPatternChanged: "解答データを正しく読み込めませんでした",
            invalidReplayResource: "不正な解答リプレイデータです",
            unknownAnswerPattern: "想定外の問題データです",
            replayResourceExpired: "保存期間を過ぎたため、解答データを表示できません"
        }
          , K = e => {
            var t, n;
            let {exceptionType: d} = e;
            console.log("exceptionType", d);
            let u = (0,
            s.md)(W.bQ)
              , x = (0,
            s.md)(W.Br)
              , m = (0,
            s.md)(W.Qe)
              , {analyticsEvent: p} = (0,
            o.yw)()
              , h = null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : 0
              , g = null !== (n = null == u ? void 0 : u.contentResource.answer.name) && void 0 !== n ? n : "unknown"
              , y = "StartFromReplay" === x;
            return (0,
            i.useEffect)( () => {
                y && p({
                    eventName: "解答リプレイ「".concat(H[d], "」表示"),
                    params: {
                        program_code: h,
                        ap: g,
                        subject: m.courseCode
                    }
                })
            }
            , [d, y, p, h, g, m.courseCode]),
            (0,
            r.jsx)(a.A, {
                id: z.y,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                "data-sentry-element": "Box",
                "data-sentry-component": "ExceptionAnswerPanel",
                "data-sentry-source-file": "ExceptionAnswerPanel.tsx",
                children: (0,
                r.jsx)(a.A, {
                    p: 1,
                    height: 128,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "ExceptionAnswerPanel.tsx",
                    children: (0,
                    r.jsx)(l.EY, {
                        size: "lg",
                        textAlign: "center",
                        color: "onSurfaceWeak1",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "ExceptionAnswerPanel.tsx",
                        children: H[d]
                    })
                })
            })
        }
        ;
        var J = n(96995)
          , F = n(40961)
          , Q = n(80280);
        let X = e => {
            let {answerMode: t, endAnswerProcess: n} = e
              , a = (0,
            s.md)(W.aR)
              , o = (0,
            s.md)(W.Br)
              , [d,c] = (0,
            i.useState)(!1)
              , u = (0,
            i.useCallback)( () => {
                c(!0),
                n()
            }
            , [n]);
            (0,
            i.useEffect)( () => {
                c(!1)
            }
            , [t]);
            let x = "StartFromReplay" === o;
            return "Answered" === t || x ? (0,
            F.createPortal)((0,
            r.jsx)(J.P.div, {
                style: {
                    position: "fixed",
                    bottom: Q.eB,
                    right: Q.eB,
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
                r.jsx)(l.yh, {
                    width: 200,
                    text: "次へ",
                    disabled: x || a || d,
                    onClick: u
                })
            }), document.body) : null
        }
        ;
        var Y = n(93262)
          , U = n(40293)
          , G = n(16469)
          , $ = n(58563)
          , Z = n(76925);
        let ee = e => {
            let {index: t, mode: n} = e;
            switch (n) {
            case "Active":
                return (0,
                r.jsx)(et, {
                    index: t
                });
            case "Other":
                return (0,
                r.jsx)(en, {
                    index: t
                });
            case "Correct":
                return (0,
                r.jsx)(er, {
                    index: t
                });
            case "Incorrect":
                return (0,
                r.jsx)(ea, {
                    index: t
                })
            }
        }
          , et = e => {
            let {index: t} = e;
            return (0,
            r.jsx)(a.A, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: c.Tj.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                "data-sentry-element": "Box",
                "data-sentry-component": "ActiveBadge",
                "data-sentry-source-file": "IndexBadge.tsx",
                children: (0,
                r.jsx)(Z.E, {
                    color: "onSurface",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "IndexBadge.tsx",
                    children: t
                })
            })
        }
          , en = e => {
            let {index: t} = e;
            return (0,
            r.jsx)(a.A, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: c.Tj.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                "data-sentry-element": "Box",
                "data-sentry-component": "OtherBadge",
                "data-sentry-source-file": "IndexBadge.tsx",
                children: (0,
                r.jsx)(Z.E, {
                    color: "onSurfaceWeak1",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "IndexBadge.tsx",
                    children: t
                })
            })
        }
          , er = e => {
            let {index: t} = e;
            return (0,
            r.jsx)(a.A, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: c.Tj.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                "data-sentry-element": "Box",
                "data-sentry-component": "CorrectBadge",
                "data-sentry-source-file": "IndexBadge.tsx",
                children: (0,
                r.jsx)(Z.E, {
                    color: "correct",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "IndexBadge.tsx",
                    children: t
                })
            })
        }
          , ea = e => {
            let {index: t} = e;
            return (0,
            r.jsx)(a.A, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: c.Tj.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                "data-sentry-element": "Box",
                "data-sentry-component": "IncorrectBadge",
                "data-sentry-source-file": "IndexBadge.tsx",
                children: (0,
                r.jsx)(Z.E, {
                    color: "important",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "IndexBadge.tsx",
                    children: t
                })
            })
        }
          , es = e => {
            let {index: t, width: n, height: a, qml: s, mode: i, onClick: l} = e;
            switch (i) {
            case "Active":
                return (0,
                r.jsx)(ei, {
                    index: t,
                    width: n,
                    height: a,
                    qml: s,
                    onClick: l
                });
            case "Other":
                return (0,
                r.jsx)(el, {
                    index: t,
                    width: n,
                    height: a,
                    qml: s,
                    onClick: l
                });
            case "Correct":
                return (0,
                r.jsx)(eo, {
                    index: t,
                    width: n,
                    height: a,
                    qml: s,
                    onClick: l
                });
            case "Incorrect":
                return (0,
                r.jsx)(ed, {
                    index: t,
                    width: n,
                    height: a,
                    qml: s,
                    onClick: l
                })
            }
        }
          , ei = e => {
            let {index: t, width: n, height: s, qml: i, onClick: l} = e;
            return (0,
            r.jsx)($.A, {
                sx: [{
                    position: "relative",
                    width: n,
                    height: s,
                    border: 2,
                    borderColor: c.Tj.onSurfaceWeak3,
                    borderRadius: 4
                }],
                onClick: l,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "ActiveButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: (0,
                r.jsxs)(a.A, {
                    width: "100%",
                    height: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: [t && (0,
                    r.jsx)(ee, {
                        index: t,
                        mode: "Active"
                    }), (0,
                    r.jsx)("img", {
                        src: i,
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
          , el = e => {
            let {index: t, width: n, height: s, qml: i} = e;
            return (0,
            r.jsx)($.A, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: n,
                    height: s,
                    border: 2,
                    borderColor: c.Tj.onSurfaceWeak3,
                    borderRadius: 4
                }],
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "OtherButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: (0,
                r.jsxs)(a.A, {
                    width: "100%",
                    height: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: [t && (0,
                    r.jsx)(ee, {
                        index: t,
                        mode: "Other"
                    }), (0,
                    r.jsx)("img", {
                        src: i,
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
            let {index: t, width: n, height: s, qml: i} = e;
            return (0,
            r.jsxs)($.A, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: n,
                    height: s,
                    border: 2,
                    borderColor: c.Tj.correctWeak,
                    borderRadius: 4
                }],
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "CorrectButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsxs)(a.A, {
                    width: "100%",
                    height: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: [t && (0,
                    r.jsx)(ee, {
                        index: t,
                        mode: "Correct"
                    }), (0,
                    r.jsx)("img", {
                        src: i,
                        alt: "",
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 4,
                    left: 4,
                    zIndex: 1,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionO",
                        width: 40,
                        height: 40,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                })]
            })
        }
          , ed = e => {
            let {index: t, width: n, height: s, qml: i} = e;
            return (0,
            r.jsxs)($.A, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: n,
                    height: s,
                    border: 2,
                    borderColor: c.Tj.importantWeak,
                    borderRadius: 4
                }],
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "IncorrectButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsxs)(a.A, {
                    width: "100%",
                    height: "100%",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: [t && (0,
                    r.jsx)(ee, {
                        index: t,
                        mode: "Incorrect"
                    }), (0,
                    r.jsx)("img", {
                        src: i,
                        alt: "",
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 4,
                    left: 4,
                    zIndex: 1,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionX",
                        width: 40,
                        height: 40,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                })]
            })
        }
          , ec = e => {
            let {items: t, orientation: n} = e;
            if (0 === t.length)
                return null;
            switch (n) {
            case "landscape":
                return (0,
                r.jsx)(G.Ay, {
                    container: !0,
                    rowSpacing: 2,
                    columnSpacing: {
                        xs: 2
                    },
                    children: t.map( (e, t) => (0,
                    r.jsx)(G.Ay, {
                        item: !0,
                        xs: 6,
                        children: (0,
                        r.jsx)(es, {
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
                r.jsx)("div", {
                    style: {
                        display: "flex",
                        overflowX: "scroll"
                    },
                    children: (0,
                    r.jsx)(d.fI, {
                        gap: 2,
                        children: t.map( (e, t) => (0,
                        r.jsx)(es, {
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
        var eu = n(52035);
        let ex = (0,
        eu.eU)([])
          , em = (0,
        eu.eU)({
            id: 0,
            url: "",
            index: void 0
        })
          , ep = (0,
        eu.eU)(void 0)
          , eh = () => {
            let e = (0,
            s.md)(ex)
              , t = (0,
            s.md)(em)
              , n = (0,
            s.md)(ep)
              , a = (0,
            P.MM)();
            return n ? (0,
            r.jsx)(eg, {
                selectables: e,
                correct: t,
                answered: n,
                orientation: a,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            }) : null
        }
          , eg = e => {
            let {selectables: t, correct: n, answered: s, orientation: l} = e
              , o = s.id === n.id ? s : void 0
              , u = s.id !== n.id ? n : void 0
              , x = s.id !== n.id ? s : void 0
              , m = [null == o ? void 0 : o.id, null == u ? void 0 : u.id, null == x ? void 0 : x.id]
              , p = t.filter(e => !m.includes(e.id));
            return (0,
            r.jsxs)(U.V, {
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: [(0,
                r.jsx)(d.ov, {
                    "data-sentry-element": "Center",
                    "data-sentry-source-file": "Answered.tsx",
                    children: (0,
                    r.jsxs)(d.fI, {
                        width: o ? "50%" : "100%",
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answered.tsx",
                        children: [o && (0,
                        r.jsx)(es, {
                            index: o.index,
                            width: "100%",
                            height: "landscape" === l ? 200 : 216,
                            qml: o.url,
                            mode: "Correct"
                        }), u && (0,
                        r.jsx)(es, {
                            index: u.index,
                            width: "100%",
                            height: "landscape" === l ? 200 : 216,
                            qml: u.url,
                            mode: "Correct"
                        }), x && (0,
                        r.jsxs)(i.Fragment, {
                            children: [(0,
                            r.jsx)(d.hK, {
                                x: 2
                            }), (0,
                            r.jsx)(es, {
                                index: x.index,
                                width: "100%",
                                height: "landscape" === l ? 200 : 216,
                                qml: x.url,
                                mode: "Incorrect"
                            })]
                        })]
                    })
                }), 0 !== p.length && (0,
                r.jsx)(r.Fragment, {
                    children: "landscape" === l ? (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(Y.A, {
                            orientation: "horizontal",
                            sx: {
                                my: 3,
                                borderColor: c.Tj.onSurfaceWeak3
                            }
                        }), (0,
                        r.jsx)(a.A, {
                            mx: 3,
                            children: (0,
                            r.jsx)(ec, {
                                items: p,
                                orientation: l
                            })
                        })]
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(d.hK, {
                            y: 3
                        }), (0,
                        r.jsx)(ec, {
                            items: p,
                            orientation: l
                        })]
                    })
                })]
            })
        }
        ;
        var ey = n(89370);
        let ef = () => ({
            formatDto: (0,
            i.useCallback)(e => {
                var t, n;
                let r = null !== (t = e.correctItem) && void 0 !== t ? t : new ey.hY
                  , a = {
                    id: r.itemId,
                    url: r.imageUrl,
                    index: void 0
                }
                  , s = e.itemList.map(e => ({
                    id: e.itemId,
                    url: e.imageUrl,
                    index: void 0
                }));
                return e.shouldShuffle && s.sort( () => .5 - Math.random()),
                e.isDisplayNumber && (s.forEach( (e, t) => {
                    e.index = t + 1
                }
                ),
                a.index = null === (n = s.find(e => e.id === a.id)) || void 0 === n ? void 0 : n.index),
                {
                    selectables: s,
                    correct: a
                }
            }
            , [])
        })
          , ew = () => ({
            validate: (0,
            i.useCallback)( (e, t) => t.id === e.id ? "correct" : "incorrect", [])
        })
          , ev = () => ({
            getViewState: (0,
            i.useCallback)(e => (function(e) {
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
        var ej = n(78218);
        let eb = e => {
            let t = (0,
            s.md)(ex)
              , n = (0,
            s.Xr)(ep)
              , [r,a] = (0,
            i.useState)(t[0])
              , [l,o] = (0,
            i.useState)("")
              , [d,c] = (0,
            i.useState)("incorrect")
              , {validate: u} = ew();
            return {
                prepare: (0,
                i.useCallback)( (t, n, r) => {
                    let s = u(e, t);
                    switch (c(s),
                    a(t),
                    o(t.url),
                    s) {
                    case "correct":
                        n();
                        break;
                    case "incorrect":
                        r()
                    }
                }
                , [e, c, u]),
                fix: (0,
                i.useCallback)(e => {
                    let a = ej.aJ.CORRECT
                      , s = {
                        order: t.map(e => e.id),
                        answered: r.id
                    };
                    n(r),
                    e({
                        answer: {
                            result: a,
                            textType: 2,
                            text: l,
                            wrongCount: 0
                        },
                        viewStateJSON: s
                    })
                }
                , [t, r, n, l, d])
            }
        }
          , eS = () => {
            let[e,t] = (0,
            i.useState)();
            return {
                showing: e,
                show: (0,
                i.useCallback)(e => t(e), []),
                hide: (0,
                i.useCallback)( () => t(void 0), [])
            }
        }
          , eA = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(ex)
              , a = (0,
            s.md)(em)
              , i = (0,
            P.MM)();
            return (0,
            r.jsx)(eC, {
                selectables: n,
                correct: a,
                orientation: i,
                onAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            })
        }
          , eC = e => {
            let {selectables: t, correct: n, orientation: s, onAnswered: l} = e
              , {prepare: o, fix: d} = eb(n)
              , {showing: c, show: u, hide: x} = eS()
              , m = (0,
            i.useCallback)(e => o(e, () => u("correct"), () => u("incorrect")), [o, u])
              , p = (0,
            i.useCallback)( () => {
                d(l),
                x()
            }
            , [d, x, l]);
            return (0,
            r.jsxs)(a.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsx)(G.Ay, {
                    container: !0,
                    rowSpacing: 2,
                    columnSpacing: {
                        xs: 2
                    },
                    "data-sentry-element": "Grid",
                    "data-sentry-source-file": "Answering.tsx",
                    children: t.map( (e, t) => (0,
                    r.jsx)(G.Ay, {
                        item: !0,
                        xs: 6,
                        children: (0,
                        r.jsx)(es, {
                            index: e.index,
                            width: "100%",
                            height: 216,
                            qml: e.url,
                            mode: "Active",
                            onClick: () => m(e)
                        })
                    }, t))
                }), c && (0,
                r.jsx)(R.zD, {
                    result: c,
                    portalElem: "portrait" === s ? "body" : z.y,
                    handleOnStop: p
                })]
            })
        }
          , ek = e => {
            let {dto: t, replayResource: n, onAnswered: l} = e
              , o = (0,
            s.Xr)(ex)
              , d = (0,
            s.Xr)(em)
              , [c,u] = (0,
            s.fp)(ep)
              , {formatDto: x} = ef()
              , {getViewState: m} = ev();
            return ((0,
            i.useEffect)( () => {
                let {selectables: e, correct: r} = x(t);
                if (n) {
                    let t = m(n);
                    o(e),
                    d(r),
                    u(e.find(e => e.id === t.answered));
                    return
                }
                o(e),
                d(r),
                u(void 0)
            }
            , [t, x, m, n, u, d, o]),
            c) ? (0,
            r.jsx)(a.A, {
                padding: 3,
                children: (0,
                r.jsx)(eh, {})
            }) : (0,
            r.jsx)(a.A, {
                padding: 3,
                children: (0,
                r.jsx)(eA, {
                    onAnswered: l
                })
            })
        }
        ;
        var eI = n(94164)
          , eT = n(41355)
          , eM = n(39941);
        let eB = (0,
        eu.eU)([])
          , e_ = (0,
        eu.eU)(void 0)
          , eE = (0,
        eu.eU)(void 0)
          , eR = (0,
        eu.eU)({
            label: "",
            suffix: "",
            useLatexInLabel: !1,
            useLatexInSuffix: !1
        })
          , eP = e => {
            let {text: t} = e;
            return (0,
            r.jsx)(l.EY, {
                color: "correct",
                size: "lg",
                padding: "0 24px",
                "data-sentry-element": "Text",
                "data-sentry-component": "CorrectLabel",
                "data-sentry-source-file": "CorrectLabel.tsx",
                children: (0,
                r.jsx)(x.qV, {
                    src: "".concat(t),
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "CorrectLabel.tsx"
                })
            })
        }
          , eW = e => {
            let {text: t} = e;
            return (0,
            r.jsx)(l.EY, {
                color: "important",
                size: "lg",
                padding: "0 24px",
                "data-sentry-element": "Text",
                "data-sentry-component": "IncorrectLabel",
                "data-sentry-source-file": "IncorrectLabel.tsx",
                children: (0,
                r.jsx)(x.qV, {
                    src: "".concat(t),
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "IncorrectLabel.tsx"
                })
            })
        }
          , eL = () => {
            let e = (0,
            s.md)(eR)
              , t = (0,
            s.md)(eE)
              , n = (0,
            s.md)(eB)
              , a = (0,
            s.md)(e_)
              , i = (0,
            P.MM)();
            return void 0 === a ? null : (0,
            r.jsx)(eN, {
                placeHolder: e,
                modelAnswer: t,
                correct: n,
                answered: a,
                orientation: i,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            })
        }
          , eN = e => {
            let {placeHolder: t, modelAnswer: n, correct: a, answered: s, orientation: i} = e
              , {convertInputToAnswerText: l} = (0,
            P.xC)()
              , o = a.map(e => ({
                ...e,
                value: l(e.value)
            })).find(e => "text" === e.case ? e.value === s : new RegExp(e.value).test(s));
            switch (i) {
            case "landscape":
                return (0,
                r.jsxs)(d.VP, {
                    height: "100%",
                    children: [(0,
                    r.jsx)(d.ov, {
                        height: "100%",
                        minHeight: 48,
                        children: (0,
                        r.jsx)("img", {
                            src: (0,
                            eM.o)("png/illust_keyboard.png"),
                            width: 269,
                            height: 108,
                            alt: ""
                        })
                    }), o ? (0,
                    r.jsx)(eO, {
                        answered: s,
                        placeHolder: t,
                        modelAnswer: n
                    }) : (0,
                    r.jsx)(eV, {
                        answered: s,
                        placeHolder: t,
                        modelAnswer: n
                    })]
                });
            case "portrait":
                return (0,
                r.jsx)(d.VP, {
                    children: o ? (0,
                    r.jsx)(eO, {
                        answered: s,
                        placeHolder: t,
                        modelAnswer: n
                    }) : (0,
                    r.jsx)(eV, {
                        answered: s,
                        placeHolder: t,
                        modelAnswer: n
                    })
                })
            }
        }
          , eO = e => {
            let {answered: t, placeHolder: n, modelAnswer: a} = e;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(R.nV, {
                    mode: "Correct",
                    value: t,
                    placeHolder: n,
                    "data-sentry-element": "KeyboardTextField",
                    "data-sentry-source-file": "Answered.tsx"
                }), void 0 !== a && a !== t && (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(d.hK, {
                        y: 1
                    }), (0,
                    r.jsx)(eP, {
                        text: a
                    })]
                })]
            })
        }
          , eV = e => {
            let {answered: t, placeHolder: n, modelAnswer: a} = e;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(R.nV, {
                    mode: "Incorrect",
                    value: t,
                    placeHolder: n,
                    "data-sentry-element": "KeyboardTextField",
                    "data-sentry-source-file": "Answered.tsx"
                }), void 0 !== a && (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(d.hK, {
                        y: 1
                    }), (0,
                    r.jsx)(eW, {
                        text: a
                    })]
                })]
            })
        }
        ;
        var eD = n(65834);
        let eq = () => {
            let {convertInputToAnswerText: e} = (0,
            P.xC)();
            return {
                formatDto: (0,
                i.useCallback)(t => {
                    var n;
                    return {
                        placeHolder: null !== (n = t.placeHolder) && void 0 !== n ? n : new ey.ml,
                        correct: t.correctAnswerList.reduce( (t, n) => n.option.case && n.option.value ? "text" === n.option.case ? [...t, {
                            case: "text",
                            value: e(n.option.value)
                        }] : [...t, n.option] : t, [])
                    }
                }
                , [e])
            }
        }
          , ez = () => ({
            validate: (0,
            i.useCallback)( (e, t) => 0 === t.length ? "empty" : t.length > 300 ? "overflow" : e.find(e => "text" === e.case ? e.value === t : new RegExp(e.value).test(t)) ? "correct" : "incorrect", [])
        })
          , eH = () => {
            let[e,t] = (0,
            i.useState)();
            return {
                showing: e,
                show: (0,
                i.useCallback)(e => t(e), []),
                hide: (0,
                i.useCallback)( () => t(void 0), [])
            }
        }
          , eK = () => ({
            getViewState: (0,
            i.useCallback)( (e, t) => (function(e, t) {
                let n = JSON.parse(t);
                if (n.viewState)
                    return n.viewState;
                if (n.apViewState)
                    return {
                        answered: n.apViewState.text
                    };
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), [])
        })
          , eJ = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => t(!0), []),
                hide: (0,
                i.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , eF = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => t(!0), []),
                hide: (0,
                i.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , eQ = e => {
            let t = (0,
            s.Xr)(e_)
              , [n,r] = (0,
            i.useState)("")
              , [a,l] = (0,
            i.useState)(0)
              , [o,d] = (0,
            i.useState)("incorrect")
              , {convertInputToAnswerText: c} = (0,
            P.xC)()
              , {validate: u} = ez()
              , x = (0,
            i.useCallback)( (t, s, i, o, x, m) => {
                let p = c(n)
                  , h = u(e.map(e => ({
                    ...e,
                    value: c(e.value)
                })), p);
                if ("overflow" === h) {
                    t();
                    return
                }
                if ("empty" === h) {
                    m ? x() : s();
                    return
                }
                if ("incorrect" === h && 0 === a) {
                    l(1),
                    o();
                    return
                }
                switch (h) {
                case "correct":
                    i();
                    break;
                case "incorrect":
                    x()
                }
                d(h),
                r(p)
            }
            , [c, e, n, u, a])
              , m = (0,
            i.useCallback)(e => {
                let r = ej.aJ.CORRECT;
                t(n),
                e({
                    answer: {
                        result: r,
                        textType: 2,
                        text: n,
                        wrongCount: a
                    },
                    viewStateJSON: {
                        answered: n
                    }
                })
            }
            , [n, t, o, a]);
            return {
                input: n,
                setInput: r,
                prepare: x,
                fix: m
            }
        }
          , eX = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(eB)
              , a = (0,
            s.md)(eR)
              , i = (0,
            P.MM)();
            return (0,
            r.jsx)(eY, {
                correct: n,
                placeHolder: a,
                onAnswered: t,
                orientation: i,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            })
        }
          , eY = e => {
            let {correct: t, placeHolder: n, orientation: s, onAnswered: o} = e
              , {input: c, setInput: u, prepare: x, fix: m} = eQ(t)
              , {showing: p, show: h, hide: g} = eH()
              , {show: y, hide: f, visibled: w} = eF()
              , {show: v, hide: j, visibled: b} = eJ()
              , S = (0,
            i.useCallback)(e => {
                x(v, y, () => h("correct"), () => h("redo"), () => h("incorrect"), e)
            }
            , [x, y, v, h])
              , A = (0,
            i.useCallback)( () => S(!1), [S])
              , C = (0,
            i.useCallback)( () => {
                m(o),
                g()
            }
            , [m, g, o])
              , k = (0,
            i.useCallback)( () => {
                f(),
                S(!0)
            }
            , [f, S]);
            switch (s) {
            case "landscape":
                return (0,
                r.jsxs)(d.VP, {
                    height: "100%",
                    children: [(0,
                    r.jsx)(d.ov, {
                        height: "100%",
                        minHeight: 140,
                        children: (0,
                        r.jsx)("img", {
                            src: (0,
                            eM.o)("png/illust_keyboard.png"),
                            width: 269,
                            height: 108,
                            alt: ""
                        })
                    }), (0,
                    r.jsxs)(d.VP, {
                        children: [(0,
                        r.jsx)(d.hK, {
                            y: 1
                        }), (0,
                        r.jsx)(R.nV, {
                            mode: "Default",
                            value: c,
                            placeHolder: n,
                            onChange: u
                        }), (0,
                        r.jsx)(d.hK, {
                            y: 6
                        }), (0,
                        r.jsx)(a.A, {
                            alignSelf: "flex-end",
                            children: (0,
                            r.jsx)(l.yh, {
                                text: "解答する",
                                disabled: void 0 !== p,
                                onClick: A
                            })
                        })]
                    }), p && (0,
                    r.jsx)(a.A, {
                        sx: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        },
                        children: (0,
                        r.jsx)(R.zD, {
                            portalElem: z.y,
                            result: p,
                            handleOnStop: "redo" === p ? g : C
                        })
                    }), (0,
                    r.jsx)(eD.jc, {
                        isOpen: b,
                        onClick: j
                    }), (0,
                    r.jsx)(eD.Ml, {
                        isOpen: w,
                        onClickCancel: f,
                        onClickAnswer: k
                    })]
                });
            case "portrait":
                return (0,
                r.jsxs)(d.VP, {
                    children: [(0,
                    r.jsxs)(d.VP, {
                        children: [(0,
                        r.jsx)(R.nV, {
                            mode: "Default",
                            value: c,
                            placeHolder: n,
                            onChange: u
                        }), (0,
                        r.jsx)(d.hK, {
                            y: 5
                        }), (0,
                        r.jsx)(a.A, {
                            alignSelf: "flex-end",
                            children: (0,
                            r.jsx)(l.yh, {
                                text: "解答する",
                                disabled: void 0 !== p,
                                onClick: A
                            })
                        })]
                    }), p && (0,
                    r.jsx)(R.zD, {
                        result: p,
                        portalElem: "portrait" === s ? "body" : z.y,
                        handleOnStop: "redo" === p ? g : C
                    }), (0,
                    r.jsx)(eD.jc, {
                        isOpen: b,
                        onClick: j
                    }), (0,
                    r.jsx)(eD.Ml, {
                        isOpen: w,
                        onClickCancel: f,
                        onClickAnswer: k
                    })]
                })
            }
        }
          , eU = e => {
            let {dto: t, replayResource: n, onAnswered: l} = e
              , o = (0,
            s.Xr)(eB)
              , d = (0,
            s.Xr)(eE)
              , c = (0,
            s.Xr)(eR)
              , [u,x] = (0,
            s.fp)(e_)
              , {formatDto: m} = eq()
              , {getViewState: p} = eK()
              , h = (0,
            P.MM)()
              , {windowHeight: g} = (0,
            eI.x)();
            if ((0,
            i.useEffect)( () => {
                let {placeHolder: e, correct: r} = m(t);
                if (n) {
                    let a = p(t, n);
                    o(r),
                    x(a.answered),
                    d(t.displayAnswerText),
                    c(e);
                    return
                }
                return () => {
                    o(r),
                    d(t.displayAnswerText),
                    c(e)
                }
            }
            , [t, n, m, p, x, o, d, c]),
            (0,
            i.useEffect)( () => () => {
                x(void 0)
            }
            , [x]),
            void 0 !== u)
                switch (h) {
                case "landscape":
                    return (0,
                    r.jsx)(a.A, {
                        width: "100%",
                        height: g - eT.$A - 18,
                        pt: 1,
                        pr: 2,
                        pb: 12,
                        pl: 2,
                        children: (0,
                        r.jsx)(eL, {})
                    });
                case "portrait":
                    return (0,
                    r.jsx)(a.A, {
                        width: "100%",
                        height: "100%",
                        pt: 4,
                        pr: 2,
                        pb: 4,
                        pl: 2,
                        children: (0,
                        r.jsx)(eL, {})
                    })
                }
            else
                switch (h) {
                case "landscape":
                    return (0,
                    r.jsx)(a.A, {
                        width: "100%",
                        height: g - eT.$A - 18,
                        pt: 1,
                        pr: 2,
                        pb: 2,
                        pl: 2,
                        children: (0,
                        r.jsx)(eX, {
                            onAnswered: l
                        })
                    });
                case "portrait":
                    return (0,
                    r.jsx)(a.A, {
                        width: "100%",
                        height: "100%",
                        pt: 4,
                        pr: 2,
                        pb: 2,
                        pl: 2,
                        children: (0,
                        r.jsx)(eX, {
                            onAnswered: l
                        })
                    })
                }
        }
          , eG = e => {
            let {items: t} = e
              , n = "他の選択肢"
              , s = 16 * n.length;
            return (0,
            r.jsxs)(d.fI, {
                gap: 2,
                "data-sentry-element": "Row",
                "data-sentry-component": "OtherSelection",
                "data-sentry-source-file": "OtherSelection.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    minWidth: s,
                    display: "flex",
                    alignItems: "center",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "OtherSelection.tsx",
                    children: (0,
                    r.jsx)(l.EY, {
                        color: "onSurfaceWeak1",
                        fontWeight: "bold",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "OtherSelection.tsx",
                        children: n
                    })
                }), (0,
                r.jsx)(Y.A, {
                    orientation: "vertical",
                    variant: "middle",
                    flexItem: !0,
                    sx: {
                        borderColor: c.Tj.onSurfaceWeak3,
                        my: 0
                    },
                    "data-sentry-element": "Divider",
                    "data-sentry-source-file": "OtherSelection.tsx"
                }), (0,
                r.jsx)(d.fI, {
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    "data-sentry-element": "Row",
                    "data-sentry-source-file": "OtherSelection.tsx",
                    children: t.map( (e, t) => (0,
                    r.jsx)(x.qV, {
                        src: e.text,
                        style: {
                            fontSize: 16,
                            color: c.Tj.onSurface,
                            display: "flex",
                            alignItems: "flex-end"
                        }
                    }, t))
                })]
            })
        }
          , e$ = e => {
            let {mode: t} = e
              , n = "";
            switch (t) {
            case "on":
                n = (0,
                eM.o)("png/icon_check_select_multi_on.png");
                break;
            case "off":
                n = (0,
                eM.o)("png/icon_check_select_multi_off.png");
                break;
            case "disabled":
                n = (0,
                eM.o)("png/icon_check_select_multi_disable.png")
            }
            return (0,
            r.jsx)("img", {
                src: n,
                width: 24,
                height: 24,
                alt: "",
                "data-sentry-component": "CheckBoxCircle",
                "data-sentry-source-file": "CheckBoxCircle.tsx"
            })
        }
          , eZ = e => {
            let {qml: t, mode: n, onClick: a} = e;
            switch (n) {
            case "Active":
                return (0,
                r.jsx)(e0, {
                    qml: t,
                    onClick: a
                });
            case "Selected":
                return (0,
                r.jsx)(e1, {
                    qml: t,
                    onClick: a
                });
            case "Correct":
                return (0,
                r.jsx)(e2, {
                    qml: t,
                    onClick: a
                });
            case "SelectedCorrect":
                return (0,
                r.jsx)(e4, {
                    qml: t,
                    onClick: a
                });
            case "Incorrect":
                return (0,
                r.jsx)(e8, {
                    qml: t,
                    onClick: a
                });
            case "Disabled":
                return (0,
                r.jsx)(e3, {
                    qml: t,
                    onClick: a
                })
            }
        }
          , e0 = e => {
            let {qml: t, onClick: n} = e;
            return (0,
            r.jsxs)(l.u4, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: c.Tj.onSurfaceWeak3,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: n,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "ActiveButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(e$, {
                        mode: "off",
                        "data-sentry-element": "CheckBoxCircle",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.onSurface
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })]
            })
        }
          , e1 = e => {
            let {qml: t, onClick: n} = e;
            return (0,
            r.jsxs)(l.u4, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    backgroundColor: c.Tj.primaryWeak1,
                    border: 2,
                    borderColor: c.Tj.primary,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: n,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "SelectedButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(e$, {
                        mode: "on",
                        "data-sentry-element": "CheckBoxCircle",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.onSurface
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })]
            })
        }
          , e2 = e => {
            let {qml: t} = e;
            return (0,
            r.jsxs)(l.u4, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: c.Tj.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                disabled: !0,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "CorrectButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(e$, {
                        mode: "off",
                        "data-sentry-element": "CheckBoxCircle",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "8",
                    left: "16px",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.correct
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })]
            })
        }
          , e4 = e => {
            let {qml: t} = e;
            return (0,
            r.jsxs)(l.u4, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: c.Tj.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                disabled: !0,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "SelectedCorrectButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(e$, {
                        mode: "on",
                        "data-sentry-element": "CheckBoxCircle",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "8",
                    left: "16px",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.correct
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })]
            })
        }
          , e8 = e => {
            let {qml: t} = e;
            return (0,
            r.jsxs)(l.u4, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: c.Tj.importantWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "IncorrectButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(e$, {
                        mode: "on",
                        "data-sentry-element": "CheckBoxCircle",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 8,
                    left: 16,
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.important
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })]
            })
        }
          , e3 = e => {
            let {qml: t} = e;
            return (0,
            r.jsxs)(l.u4, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: (0,
                    c.au)("onSurface", "disabledBackground"),
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "DisabledButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(e$, {
                        mode: "disabled",
                        "data-sentry-element": "CheckBoxCircle",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: (0,
                        c.au)("onSurface", "disabled")
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })]
            })
        }
          , e5 = (0,
        eu.eU)([])
          , e6 = (0,
        eu.eU)([])
          , e9 = (0,
        eu.eU)(void 0)
          , e7 = (0,
        eu.eU)(!1)
          , te = () => {
            let e = (0,
            s.md)(e5)
              , t = (0,
            s.md)(e6)
              , n = (0,
            s.md)(e9);
            return n ? (0,
            r.jsx)(tt, {
                selectables: e,
                correct: t,
                answered: n,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            }) : null
        }
          , tt = e => {
            let {selectables: t, correct: n, answered: a} = e
              , s = n.filter(e => !a.find(t => t.id === e.id))
              , i = n.filter(e => a.find(t => t.id === e.id))
              , l = a.filter(e => !n.find(t => e.id === t.id))
              , o = t.filter(e => !(s.find(t => t.id === e.id) || i.find(t => t.id === e.id) || l.find(t => t.id === e.id)));
            return (0,
            r.jsxs)(U.V, {
                gap: 3,
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: [(0,
                r.jsxs)(U.V, {
                    gap: 2,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answered.tsx",
                    children: [s.map(e => (0,
                    r.jsx)(r.Fragment, {
                        children: (0,
                        r.jsx)(eZ, {
                            qml: e.text,
                            mode: "Correct"
                        }, e.id)
                    })), i.map(e => (0,
                    r.jsx)(r.Fragment, {
                        children: (0,
                        r.jsx)(eZ, {
                            qml: e.text,
                            mode: "SelectedCorrect"
                        }, e.id)
                    })), l.map(e => (0,
                    r.jsx)(r.Fragment, {
                        children: (0,
                        r.jsx)(eZ, {
                            qml: e.text,
                            mode: "Incorrect"
                        }, e.id)
                    }))]
                }), 0 !== o.length && (0,
                r.jsx)(eG, {
                    items: o
                })]
            })
        }
          , tn = e => {
            let {isOpen: t, onClose: n} = e;
            return (0,
            r.jsx)(l.lG, {
                isOpen: t,
                title: "解答が足りません",
                body: "指定された数だけ選択してください。",
                actions: (0,
                r.jsx)(l.Pn, {
                    label: "OK",
                    color: "primary",
                    onClick: n
                }),
                onClose: n,
                "data-sentry-element": "Dialog",
                "data-sentry-component": "AnswerRequiredDialog",
                "data-sentry-source-file": "AnswerRequiredDialog.tsx"
            })
        }
        ;
        var tr = n(21212);
        let ta = () => ({
            formatDto: (0,
            i.useCallback)(e => {
                let t = e.itemList.map(e => {
                    let t = (0,
                    tr.u)(e.text);
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
                        tr.u)(e.text);
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
          , ts = () => ({
            validate: (0,
            i.useCallback)( (e, t) => {
                if (0 === t.length)
                    return "empty";
                let n = e.map(e => e.id).sort()
                  , r = t.map(e => e.id).sort();
                return r.length === n.length && n.every( (e, t) => e === r[t]) ? "correct" : "incorrect"
            }
            , [])
        })
          , ti = () => {
            let[e,t] = (0,
            i.useState)();
            return {
                showing: e,
                show: (0,
                i.useCallback)(e => t(e), []),
                hide: (0,
                i.useCallback)( () => t(void 0), [])
            }
        }
          , tl = () => ({
            getViewState: (0,
            i.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState) {
                    var n;
                    return {
                        order: (n = t.apViewState).itemList.map(e => e.itemId),
                        answered: n.itemList.filter(e => e.selected).map(e => e.itemId)
                    }
                }
                throw Error("no view state")
            }
            )(e.viewStateJSON), [])
        })
          , to = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => t(!0), []),
                hide: (0,
                i.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , td = (e, t, n) => {
            let r = (0,
            s.md)(e5)
              , a = (0,
            s.Xr)(e9)
              , [l,o] = (0,
            i.useState)("")
              , [d,c] = (0,
            i.useState)(e)
              , [u,x] = (0,
            i.useState)(0)
              , [m,p] = (0,
            i.useState)("incorrect")
              , {validate: h} = ts()
              , g = (0,
            i.useCallback)(e => {
                void 0 !== d.find(t => t.id === e.id) ? c(d.filter(t => t.id !== e.id)) : c(d.concat([e]))
            }
            , [d, c])
              , y = (0,
            i.useCallback)(e => void 0 !== d.find(t => t.id === e.id), [d]);
            return {
                toggle: g,
                isSelected: y,
                isSelectable: (0,
                i.useCallback)( () => !n || d.length < t.length, [t.length, n, d.length]),
                prepare: (0,
                i.useCallback)( (e, r, a, s) => {
                    if (n && d.length < t.length) {
                        e();
                        return
                    }
                    let i = h(t, d);
                    if (("incorrect" === i || "empty" === i) && 0 === u) {
                        x(1),
                        a();
                        return
                    }
                    switch (i) {
                    case "correct":
                        r();
                        break;
                    case "incorrect":
                    case "empty":
                        s()
                    }
                    o("[".concat(d.map(e => e.text).toString(), "]")),
                    p(i)
                }
                , [t, n, d, x, h, u]),
                fix: (0,
                i.useCallback)(e => {
                    let t = {
                        order: r.map(e => e.id),
                        answered: d.map(e => e.id)
                    }
                      , n = ej.aJ.CORRECT
                    a(d),
                    e({
                        answer: {
                            result: n,
                            textType: 2,
                            text: l,
                            wrongCount: u
                        },
                        viewStateJSON: t
                    })
                }
                , [r, d, a, l, m, u])
            }
        }
          , tc = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(e5)
              , a = (0,
            s.md)(e7)
              , i = (0,
            s.md)(e6)
              , l = (0,
            P.MM)();
            return (0,
            r.jsx)(tu, {
                selectables: n,
                selecting: [],
                fullSelectRequired: a,
                correct: i,
                orientation: l,
                onAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            })
        }
          , tu = e => {
            let {selectables: t, selecting: n, fullSelectRequired: s, correct: o, orientation: d, onAnswered: c} = e
              , {toggle: u, isSelected: x, isSelectable: m, prepare: p, fix: h} = td(n, o, s)
              , {showing: g, show: y, hide: f} = ti()
              , {show: w, hide: v, visibled: j} = to()
              , b = (0,
            i.useCallback)( () => {
                p( () => w(), () => y("correct"), () => y("redo"), () => y("incorrect"))
            }
            , [w, y, p])
              , S = (0,
            i.useCallback)( () => {
                h(c),
                f()
            }
            , [h, c, f]);
            return (0,
            r.jsxs)(a.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsxs)(U.V, {
                    width: "100%",
                    gap: 4,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answering.tsx",
                    children: [(0,
                    r.jsx)(U.V, {
                        gap: 2,
                        "data-sentry-element": "Column",
                        "data-sentry-source-file": "Answering.tsx",
                        children: t.map( (e, t) => {
                            let n = x(e);
                            return (0,
                            r.jsx)(eZ, {
                                qml: e.text,
                                mode: n ? "Selected" : m() ? "Active" : "Disabled",
                                onClick: () => u(e)
                            }, t)
                        }
                        )
                    }), (0,
                    r.jsx)(a.A, {
                        alignSelf: "flex-end",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "Answering.tsx",
                        children: (0,
                        r.jsx)(l.yh, {
                            text: "解答する",
                            disabled: void 0 !== g,
                            onClick: b,
                            "data-sentry-element": "PrimaryRoundedButton",
                            "data-sentry-source-file": "Answering.tsx"
                        })
                    })]
                }), g && (0,
                r.jsx)(R.zD, {
                    result: g,
                    portalElem: "portrait" === d ? "body" : z.y,
                    handleOnStop: "redo" === g ? f : S
                }), (0,
                r.jsx)(tn, {
                    isOpen: j,
                    onClose: v,
                    "data-sentry-element": "AnswerRequiredDialog",
                    "data-sentry-source-file": "Answering.tsx"
                })]
            })
        }
          , tx = e => {
            let {dto: t, replayResource: n, onAnswered: l} = e
              , o = (0,
            s.Xr)(e5)
              , d = (0,
            s.Xr)(e6)
              , c = (0,
            s.Xr)(e7)
              , [u,x] = (0,
            s.fp)(e9)
              , {formatDto: m} = ta()
              , {getViewState: p} = tl();
            return ((0,
            i.useEffect)( () => {
                let {selectables: e, correct: r, fullSelectRequired: a} = m(t);
                if (n) {
                    let t = p(n);
                    o(t.order.reduce( (t, n) => {
                        let r = e.find(e => e.id === n);
                        return r ? [...t, r] : t
                    }
                    , [])),
                    d(r),
                    c(a),
                    x(t.answered.reduce( (t, n) => {
                        let r = e.find(e => e.id === n);
                        return r ? [...t, r] : t
                    }
                    , []));
                    return
                }
                o(e),
                d(r),
                c(a),
                x(void 0)
            }
            , [t, m, p, n, x, d, c, o]),
            u) ? (0,
            r.jsx)(a.A, {
                padding: 3,
                children: (0,
                r.jsx)(te, {})
            }) : (0,
            r.jsx)(a.A, {
                padding: 3,
                children: (0,
                r.jsx)(tc, {
                    onAnswered: l
                })
            })
        }
          , tm = e => {
            let {mode: t, modelAnswer: n, recognitionMode: a} = e;
            switch (t) {
            case "Correct":
                return (0,
                r.jsx)(tp, {
                    modelAnswer: n,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                r.jsx)(th, {
                    modelAnswer: n,
                    recognitionMode: a
                });
            default:
                return (0,
                r.jsx)(r.Fragment, {})
            }
        }
          , tp = e => {
            let {modelAnswer: t, recognitionMode: n} = e;
            return (0,
            r.jsx)(r.Fragment, {
                children: "Math" === n ? (0,
                r.jsx)(eD.Of, {
                    style: {
                        fontSize: 20,
                        color: c.Tj.correct,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                r.jsx)(l.EY, {
                    size: "lg",
                    color: "correct",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , th = e => {
            let {modelAnswer: t, recognitionMode: n} = e;
            return (0,
            r.jsx)(r.Fragment, {
                children: "Math" === n ? (0,
                r.jsx)(eD.Of, {
                    style: {
                        fontSize: 20,
                        color: c.Tj.important,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                r.jsx)(l.EY, {
                    size: "lg",
                    color: "important",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tg = e => {
            let {mode: t="Default", answeredText: n, recognitionMode: a} = e;
            switch (t) {
            case "Default":
                return (0,
                r.jsx)(ty, {
                    answeredText: n,
                    recognitionMode: a
                });
            case "Correct":
                return (0,
                r.jsx)(tf, {
                    answeredText: n,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                r.jsx)(tw, {
                    answeredText: n,
                    recognitionMode: a
                })
            }
        }
          , ty = e => {
            let {answeredText: t, recognitionMode: n} = e;
            return (0,
            r.jsx)(d.VP, {
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(c.Tj.primaryWeak1),
                "data-sentry-element": "Column",
                "data-sentry-component": "Default",
                "data-sentry-source-file": "PreviewText.tsx",
                children: "Math" === n ? (0,
                r.jsx)(eD.Of, {
                    style: {
                        fontSize: 20,
                        color: c.Tj.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                r.jsx)(l.EY, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tf = e => {
            let {answeredText: t, recognitionMode: n} = e;
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(c.Tj.correctWeak),
                "data-sentry-element": "Column",
                "data-sentry-component": "Correct",
                "data-sentry-source-file": "PreviewText.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "PreviewText.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "PreviewText.tsx"
                    })
                }), "Math" === n ? (0,
                r.jsx)(eD.Of, {
                    style: {
                        fontSize: 20,
                        color: c.Tj.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                r.jsx)(l.EY, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })]
            })
        }
          , tw = e => {
            let {answeredText: t, recognitionMode: n} = e;
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(c.Tj.importantWeak),
                "data-sentry-element": "Column",
                "data-sentry-component": "Incorrect",
                "data-sentry-source-file": "PreviewText.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "PreviewText.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "PreviewText.tsx"
                    })
                }), "Math" === n ? (0,
                r.jsx)(eD.Of, {
                    style: {
                        fontSize: 20,
                        color: c.Tj.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                r.jsx)(l.EY, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })]
            })
        }
          , tv = e => {
            let {mode: t="Default", width: n="100%", answeredText: a, modelAnswer: s, recognitionMode: i} = e;
            switch (t) {
            case "Default":
                return (0,
                r.jsx)(tj, {
                    width: n,
                    answeredText: a,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                r.jsx)(tb, {
                    width: n,
                    answeredText: a,
                    modelAnswer: s,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                r.jsx)(tS, {
                    width: n,
                    answeredText: a,
                    modelAnswer: s,
                    recognitionMode: i
                })
            }
        }
          , tj = e => {
            let {width: t, answeredText: n, recognitionMode: s} = e;
            return (0,
            r.jsx)(a.A, {
                width: t,
                "data-sentry-element": "Box",
                "data-sentry-component": "Default",
                "data-sentry-source-file": "PreviewHorizontal.tsx",
                children: (0,
                r.jsx)(tg, {
                    mode: "Default",
                    answeredText: n,
                    recognitionMode: s,
                    "data-sentry-element": "PreviewText",
                    "data-sentry-source-file": "PreviewHorizontal.tsx"
                })
            })
        }
          , tb = e => {
            let {width: t, answeredText: n, modelAnswer: s, recognitionMode: i} = e;
            return (0,
            r.jsxs)(d.fI, {
                alignItems: "center",
                columnGap: 2,
                "data-sentry-element": "Row",
                "data-sentry-component": "Correct",
                "data-sentry-source-file": "PreviewHorizontal.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    width: t,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "PreviewHorizontal.tsx",
                    children: (0,
                    r.jsx)(tg, {
                        mode: "Correct",
                        answeredText: n,
                        recognitionMode: i,
                        "data-sentry-element": "PreviewText",
                        "data-sentry-source-file": "PreviewHorizontal.tsx"
                    })
                }), n !== s && (0,
                r.jsx)(a.A, {
                    flexShrink: 0,
                    children: (0,
                    r.jsx)(tm, {
                        mode: "Correct",
                        modelAnswer: s,
                        recognitionMode: i
                    })
                })]
            })
        }
          , tS = e => {
            let {width: t, answeredText: n, modelAnswer: s, recognitionMode: i} = e;
            return (0,
            r.jsxs)(d.fI, {
                alignItems: "center",
                columnGap: 2,
                "data-sentry-element": "Row",
                "data-sentry-component": "Incorrect",
                "data-sentry-source-file": "PreviewHorizontal.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    width: t,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "PreviewHorizontal.tsx",
                    children: (0,
                    r.jsx)(tg, {
                        mode: "Incorrect",
                        answeredText: n,
                        recognitionMode: i,
                        "data-sentry-element": "PreviewText",
                        "data-sentry-source-file": "PreviewHorizontal.tsx"
                    })
                }), s && (0,
                r.jsx)(a.A, {
                    flexShrink: 0,
                    children: (0,
                    r.jsx)(tm, {
                        mode: "Incorrect",
                        modelAnswer: s,
                        recognitionMode: i
                    })
                })]
            })
        }
          , tA = e => {
            let {mode: t="Default", width: n="100%", answeredText: a, modelAnswer: s, recognitionMode: i} = e;
            switch (t) {
            case "Default":
                return (0,
                r.jsx)(tC, {
                    width: n,
                    answeredText: a,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                r.jsx)(tk, {
                    width: n,
                    answeredText: a,
                    modelAnswer: s,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                r.jsx)(tI, {
                    width: n,
                    answeredText: a,
                    modelAnswer: s,
                    recognitionMode: i
                })
            }
        }
          , tC = e => {
            let {width: t, answeredText: n, recognitionMode: s} = e;
            return (0,
            r.jsx)(a.A, {
                width: t,
                "data-sentry-element": "Box",
                "data-sentry-component": "Default",
                "data-sentry-source-file": "PreviewVertical.tsx",
                children: (0,
                r.jsx)(tg, {
                    mode: "Default",
                    answeredText: n,
                    recognitionMode: s,
                    "data-sentry-element": "PreviewText",
                    "data-sentry-source-file": "PreviewVertical.tsx"
                })
            })
        }
          , tk = e => {
            let {width: t, answeredText: n, modelAnswer: s, recognitionMode: i} = e;
            return (0,
            r.jsxs)(a.A, {
                width: t,
                "data-sentry-element": "Box",
                "data-sentry-component": "Correct",
                "data-sentry-source-file": "PreviewVertical.tsx",
                children: [(0,
                r.jsx)(tg, {
                    mode: "Correct",
                    answeredText: n,
                    recognitionMode: i,
                    "data-sentry-element": "PreviewText",
                    "data-sentry-source-file": "PreviewVertical.tsx"
                }), s && n !== s && (0,
                r.jsx)(d.VP, {
                    height: 72,
                    justifyContent: "center",
                    children: (0,
                    r.jsx)(tm, {
                        mode: "Correct",
                        modelAnswer: s,
                        recognitionMode: i
                    })
                })]
            })
        }
          , tI = e => {
            let {width: t, answeredText: n, modelAnswer: s, recognitionMode: i} = e;
            return (0,
            r.jsxs)(a.A, {
                width: t,
                "data-sentry-element": "Box",
                "data-sentry-component": "Incorrect",
                "data-sentry-source-file": "PreviewVertical.tsx",
                children: [(0,
                r.jsx)(tg, {
                    mode: "Incorrect",
                    answeredText: n,
                    recognitionMode: i,
                    "data-sentry-element": "PreviewText",
                    "data-sentry-source-file": "PreviewVertical.tsx"
                }), (0,
                r.jsx)(d.VP, {
                    justifyContent: "center",
                    height: 72,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "PreviewVertical.tsx",
                    children: s && (0,
                    r.jsx)(tm, {
                        mode: "Incorrect",
                        modelAnswer: s,
                        recognitionMode: i
                    })
                })]
            })
        }
          , tT = (0,
        eu.eU)(0)
          , tM = () => {
            let[e,t] = (0,
            s.fp)(tT)
              , [n,r] = (0,
            i.useState)();
            return {
                currentPopup: n,
                setPopup: (0,
                i.useCallback)(n => {
                    switch (n) {
                    case "correct":
                        r("correct");
                        break;
                    case "incorrect":
                        0 === e ? (t(1),
                        r("redo")) : r("incorrect");
                        break;
                    case "empty":
                        t(1),
                        r("incorrect")
                    }
                }
                , [e, t]),
                hidePopup: (0,
                i.useCallback)( () => {
                    r(void 0)
                }
                , [])
            }
        }
        ;
        var tB = n(53866)
          , t_ = n(8741);
        let tE = () => {
            let {forceReplace: e} = (0,
            t_.bt)()
              , {replace: t} = (0,
            t_.Q$)()
              , n = (0,
            i.useCallback)( (e, n, r) => {
                for (let a of n)
                    if ("text" === a.case) {
                        let {result: n, isMatched: s} = t(e, a.value, r);
                        if (s)
                            return n
                    } else if ("regex" === a.case && new RegExp(a.value).test(e))
                        return e
            }
            , [t])
              , r = (0,
            i.useCallback)(t => {
                let {correct: r, text: a, gradeId: s, replaceType: i} = t;
                if (!a || 0 === a.length)
                    return {
                        result: "empty",
                        text: ""
                    };
                let l = "english" === i ? " " : ""
                  , o = a.replace(/\n/g, l)
                  , d = n(o, r, i);
                if (d)
                    return {
                        result: "correct",
                        text: d
                    };
                let c = e(o, s, i)
                  , u = r.map(e => e.value)
                  , x = (0,
                tB.q)(i, u, c)
                  , m = n(x, r, i);
                return m ? {
                    result: "correct",
                    text: m
                } : {
                    result: "incorrect",
                    text: x
                }
            }
            , [n, e]);
            return {
                validate: (0,
                i.useCallback)(e => {
                    let t = e.map(r)
                      , n = t.some(e => {
                        let {result: t} = e;
                        return "empty" === t
                    }
                    )
                      , a = t.every(e => {
                        let {result: t} = e;
                        return "correct" === t
                    }
                    );
                    return n ? "empty" : a ? "correct" : "incorrect"
                }
                , [r]),
                validateSingle: r
            }
        }
        ;
        var tR = n(31888);
        let tP = (e, t) => {
            let n = (0,
            s.md)(tT)
              , [r,a] = (0,
            s.fp)(tR.z)
              , [l,o] = (0,
            i.useState)( () => e.map(e => ({
                answeredText: "",
                answeredSvg: "",
                isRecognizing: !1,
                recognitionConfig: e.recognitionConfig,
                placeHolder: e.placeHolder,
                gradeId: e.gradeId,
                replaceType: e.replaceType
            })))
              , [d,c] = (0,
            i.useState)()
              , [u,x] = (0,
            i.useState)(!1)
              , [m,p] = (0,
            i.useState)(!1)
              , [h,g] = (0,
            i.useState)(!1)
              , {validate: y, validateSingle: f} = tE()
              , {currentPopup: w, setPopup: v, hidePopup: j} = tM()
              , {saveHandwritingAnswerImageToGCS: b} = (0,
            P.bd)()
              , S = (0,
            i.useMemo)( () => l.some(e => {
                let {isRecognizing: t} = e;
                return t
            }
            ) || u, [u, l])
              , A = (0,
            i.useCallback)( () => {
                if (r) {
                    g(!0);
                    return
                }
                let t = y(l.map( (t, n) => {
                    let {answeredText: r} = t;
                    return {
                        text: r,
                        correct: e[n].correct,
                        replaceType: e[n].replaceType,
                        gradeId: e[n].gradeId
                    }
                }
                ));
                c({
                    answerDatas: l.map(e => {
                        let {answeredText: t, answeredSvg: n} = e;
                        return {
                            answered: t,
                            svg: n
                        }
                    }
                    ),
                    result: t
                }),
                "empty" === t ? p(!0) : v(t)
            }
            , [e, r, l, y, v])
              , C = (0,
            i.useCallback)(async () => {
                if (j(),
                "redo" === w || !d)
                    return;
                let r = ej.aJ.CORRECT
                  , a = d.answerDatas.map(e => {
                    let {answered: t} = e;
                    return t
                }
                )
                  , s = {
                    items: null == e ? void 0 : e.map( (e, t) => {
                        var n, r;
                        return {
                            answered: null == d ? void 0 : null === (n = d.answerDatas[t]) || void 0 === n ? void 0 : n.answered,
                            svg: null == d ? void 0 : null === (r = d.answerDatas[t]) || void 0 === r ? void 0 : r.svg
                        }
                    }
                    )
                }
                  , i = {
                    answer: {
                        result: r,
                        textType: 2,
                        text: "".concat(a),
                        wrongCount: n
                    },
                    viewStateJSON: s
                }
                  , l = await t(d.answerDatas, i);
                l && b({
                    answerLogId: l,
                    answerResponse: i
                })
            }
            , [e, w, j, t, d, b, n])
              , k = (0,
            i.useCallback)( () => {
                p(!1),
                v(y(l.map( (t, n) => {
                    let {answeredText: r} = t;
                    return {
                        text: r,
                        correct: e[n].correct,
                        replaceType: e[n].replaceType,
                        gradeId: e[n].gradeId
                    }
                }
                )))
            }
            , [l, v, y, e])
              , I = (0,
            i.useCallback)( () => {
                p(!1)
            }
            , [])
              , T = (0,
            i.useCallback)(e => {
                o(t => t.map( (t, n) => n === e ? {
                    ...t,
                    isRecognizing: !0
                } : t))
            }
            , [])
              , M = (0,
            i.useCallback)( (t, n, r) => {
                let a = f({
                    text: n,
                    correct: e[t].correct,
                    gradeId: e[t].gradeId,
                    replaceType: e[t].replaceType
                });
                o(e => e.map( (e, n) => n === t ? {
                    ...e,
                    answeredText: a.text,
                    answeredSvg: r,
                    isRecognizing: !1
                } : e))
            }
            , [e, f])
              , B = (0,
            i.useCallback)( () => {
                o(e => e.map(e => ({
                    ...e,
                    answeredText: "",
                    answeredSvg: ""
                }))),
                x(!0)
            }
            , [])
              , _ = (0,
            i.useCallback)( () => {
                x(!1)
            }
            , [])
              , E = (0,
            i.useCallback)( () => {
                a(!1),
                g(!1),
                A()
            }
            , [a, A]);
            return {
                writingInfos: l,
                isOpenReconnectMessage: u,
                isOpenEmptyAnswerDialog: m,
                isOpenKatexErrorDialog: h,
                currentPopup: w,
                unanswerable: S,
                startAnswerProcess: A,
                endAnswerProcess: C,
                startDialogAnswerProcess: k,
                hidePopup: j,
                hideDialog: I,
                recognizing: T,
                recognized: M,
                disconnected: B,
                reconnect: _,
                handleKatexErrorDialogContinue: E,
                handleKatexErrorDialogClose: (0,
                i.useCallback)( () => {
                    g(!1)
                }
                , [])
            }
        }
        ;
        var tW = n(96611);
        let tL = () => {
            let e = (0,
            s.md)(W.bQ);
            return (0,
            i.useMemo)( () => {
                let t = null == e ? void 0 : e.contentResource.legacyAnswer.apData;
                if ((null == t ? void 0 : t.case) !== "apSyncedHandWrite")
                    return console.error("Invalid MultipleWriting state"),
                    {
                        apData: [],
                        answerType: "1to1"
                    };
                let n = t.value.childAnswerList.reduce( (e, t) => {
                    let {apData: n} = t;
                    return "apHandWrite" === n.case ? [...e, n.value] : e
                }
                , []).map( (e, t) => {
                    var n;
                    let r = e.correctAnswerList.reduce( (e, t) => {
                        let {option: n} = t;
                        if (!n.case || !n.value)
                            return e;
                        if ("text" === n.case) {
                            let t = (0,
                            t_.fm)(n.value);
                            return [...e, {
                                case: "text",
                                value: t = (0,
                                t_.qu)(t)
                            }]
                        }
                        return [...e, n]
                    }
                    , [])
                      , a = e.interactiveInkSetting
                      , s = a ? (0,
                    eD.uy)(a) : "Math"
                      , i = e.useLk
                      , l = e.skNameOptional.value
                      , o = (0,
                    tW.A)(e.replaceType)
                      , d = e.gradeId;
                    return {
                        id: t,
                        recognitionConfig: {
                            mode: s,
                            useLK: i,
                            sk: l
                        },
                        placeHolder: null !== (n = e.placeHolder) && void 0 !== n ? n : new ey.ml,
                        correct: r,
                        modelAnswer: e.displayAnswerText,
                        replaceType: o,
                        gradeId: d
                    }
                }
                )
                  , r = n.length > 2 ? "triple" : "1to1";
                return {
                    apData: n,
                    answerType: r
                }
            }
            , [e])
        }
          , tN = () => ({
            getViewState: (0,
            i.useCallback)( (e, t) => (function(e, t) {
                let n = JSON.parse(t);
                if (n.viewState)
                    return n.viewState;
                if (n.apViewState) {
                    var r;
                    return {
                        items: (r = n.apViewState).recognizedTexts.map( (e, t) => {
                            let n = r.svgList;
                            return {
                                answered: e,
                                svg: n ? n[t] : ""
                            }
                        }
                        )
                    }
                }
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), [])
        })
          , tO = e => {
            let {answerDatas: t} = e
              , n = (0,
            P.MM)()
              , {apData: a, answerType: s} = tL()
              , l = (0,
            i.useMemo)( () => a.length !== t.length ? [] : a.map(e => ({
                ...e,
                answered: t[e.id].answered,
                svg: t[e.id].svg
            })), [a, t]);
            return 0 === a.length || 0 === t.length ? (0,
            r.jsx)(r.Fragment, {}) : (0,
            r.jsx)(tV, {
                apDataWithAnswer: l,
                answerType: s,
                orientation: n,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            })
        }
          , tV = e => {
            let {apDataWithAnswer: t, answerType: n, orientation: a} = e;
            switch (n) {
            case "1to1":
                return (0,
                r.jsx)(tD, {
                    apDataWithAnswer: t,
                    orientation: a
                });
            case "triple":
                return (0,
                r.jsx)(tq, {
                    apDataWithAnswer: t,
                    orientation: a
                });
            default:
                return null
            }
        }
          , tD = e => {
            var t, n;
            let {apDataWithAnswer: s, orientation: i} = e
              , [l,o] = s;
            if (!l || !o)
                return null;
            let c = tH(l.correct, l.answered)
              , u = tH(o.correct, o.answered)
              , x = "portrait" === i ? 200 : 180;
            return (0,
            r.jsx)(a.A, {
                display: "flex",
                justifyContent: "center",
                "data-sentry-element": "Box",
                "data-sentry-component": "WritingArea1To1",
                "data-sentry-source-file": "Answered.tsx",
                children: (0,
                r.jsxs)(d.VP, {
                    width: "100%",
                    maxWidth: 712,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answered.tsx",
                    children: [(0,
                    r.jsx)(tz, {
                        mode: c,
                        height: x,
                        placeHolder: l.placeHolder,
                        svg: l.svg,
                        "data-sentry-element": "SingleWritingArea",
                        "data-sentry-source-file": "Answered.tsx"
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 1,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answered.tsx"
                    }), (0,
                    r.jsxs)(d.fI, {
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answered.tsx",
                        children: [(0,
                        r.jsx)(d.hK, {
                            x: 2,
                            "data-sentry-element": "Spacer",
                            "data-sentry-source-file": "Answered.tsx"
                        }), (0,
                        r.jsx)(tv, {
                            mode: c,
                            width: 240,
                            answeredText: l.answered,
                            modelAnswer: l.modelAnswer,
                            recognitionMode: null === (t = l.recognitionConfig) || void 0 === t ? void 0 : t.mode,
                            "data-sentry-element": "PreviewHorizontal",
                            "data-sentry-source-file": "Answered.tsx"
                        })]
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 2,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answered.tsx"
                    }), (0,
                    r.jsx)(tz, {
                        mode: u,
                        height: x,
                        placeHolder: o.placeHolder,
                        svg: o.svg,
                        "data-sentry-element": "SingleWritingArea",
                        "data-sentry-source-file": "Answered.tsx"
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 1,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answered.tsx"
                    }), (0,
                    r.jsxs)(d.fI, {
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answered.tsx",
                        children: [(0,
                        r.jsx)(d.hK, {
                            x: 2,
                            "data-sentry-element": "Spacer",
                            "data-sentry-source-file": "Answered.tsx"
                        }), (0,
                        r.jsx)(tv, {
                            mode: u,
                            width: 240,
                            answeredText: o.answered,
                            modelAnswer: o.modelAnswer,
                            recognitionMode: null === (n = o.recognitionConfig) || void 0 === n ? void 0 : n.mode,
                            "data-sentry-element": "PreviewHorizontal",
                            "data-sentry-source-file": "Answered.tsx"
                        })]
                    })]
                })
            })
        }
          , tq = e => {
            var t, n, s;
            let {apDataWithAnswer: i, orientation: l} = e
              , [o,c,u] = i;
            if (!o || !c || !u)
                return null;
            let x = tH(o.correct, o.answered)
              , m = tH(c.correct, c.answered)
              , p = tH(u.correct, u.answered)
              , h = "portrait" === l ? 200 : "100%";
            return (0,
            r.jsx)(d.VP, {
                height: "100%",
                "data-sentry-element": "Column",
                "data-sentry-component": "WritingAreaTriple",
                "data-sentry-source-file": "Answered.tsx",
                children: (0,
                r.jsxs)(d.VP, {
                    width: "100%",
                    height: "100%",
                    alignSelf: "center",
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answered.tsx",
                    children: [(0,
                    r.jsxs)(d.fI, {
                        flex: 1,
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answered.tsx",
                        children: [(0,
                        r.jsx)(a.A, {
                            width: "calc(50% - 8px)",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answered.tsx",
                            children: (0,
                            r.jsx)(tz, {
                                mode: x,
                                height: h,
                                placeHolder: o.placeHolder,
                                svg: o.svg,
                                "data-sentry-element": "SingleWritingArea",
                                "data-sentry-source-file": "Answered.tsx"
                            })
                        }), (0,
                        r.jsx)(d.hK, {
                            x: 3,
                            "data-sentry-element": "Spacer",
                            "data-sentry-source-file": "Answered.tsx"
                        }), (0,
                        r.jsx)(a.A, {
                            width: "calc(50% - 8px)",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answered.tsx",
                            children: (0,
                            r.jsx)(tz, {
                                mode: m,
                                height: h,
                                placeHolder: c.placeHolder,
                                svg: c.svg,
                                "data-sentry-element": "SingleWritingArea",
                                "data-sentry-source-file": "Answered.tsx"
                            })
                        })]
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 2,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answered.tsx"
                    }), (0,
                    r.jsxs)(d.fI, {
                        flex: 1,
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answered.tsx",
                        children: [(0,
                        r.jsx)(a.A, {
                            width: "calc(50% - 8px)",
                            display: "flex",
                            justifyContent: "center",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answered.tsx",
                            children: (0,
                            r.jsxs)(d.VP, {
                                gap: 1,
                                "data-sentry-element": "Column",
                                "data-sentry-source-file": "Answered.tsx",
                                children: [(0,
                                r.jsxs)(d.fI, {
                                    gap: 2,
                                    "data-sentry-element": "Row",
                                    "data-sentry-source-file": "Answered.tsx",
                                    children: [(0,
                                    r.jsx)(tA, {
                                        mode: x,
                                        width: 120,
                                        answeredText: o.answered,
                                        modelAnswer: o.modelAnswer,
                                        recognitionMode: null === (t = o.recognitionConfig) || void 0 === t ? void 0 : t.mode,
                                        "data-sentry-element": "PreviewVertical",
                                        "data-sentry-source-file": "Answered.tsx"
                                    }), (0,
                                    r.jsx)(tA, {
                                        mode: m,
                                        width: 120,
                                        answeredText: c.answered,
                                        modelAnswer: c.modelAnswer,
                                        recognitionMode: null === (n = c.recognitionConfig) || void 0 === n ? void 0 : n.mode,
                                        "data-sentry-element": "PreviewVertical",
                                        "data-sentry-source-file": "Answered.tsx"
                                    })]
                                }), (0,
                                r.jsx)(a.A, {
                                    alignSelf: "end",
                                    width: 120,
                                    marginLeft: "auto",
                                    "data-sentry-element": "Box",
                                    "data-sentry-source-file": "Answered.tsx",
                                    children: (0,
                                    r.jsx)(tA, {
                                        mode: p,
                                        answeredText: u.answered,
                                        modelAnswer: u.modelAnswer,
                                        recognitionMode: null === (s = u.recognitionConfig) || void 0 === s ? void 0 : s.mode,
                                        "data-sentry-element": "PreviewVertical",
                                        "data-sentry-source-file": "Answered.tsx"
                                    })
                                })]
                            })
                        }), (0,
                        r.jsx)(d.hK, {
                            x: 3,
                            "data-sentry-element": "Spacer",
                            "data-sentry-source-file": "Answered.tsx"
                        }), (0,
                        r.jsx)(a.A, {
                            width: "calc(50% - 12px)",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answered.tsx",
                            children: (0,
                            r.jsx)(tz, {
                                mode: p,
                                height: h,
                                placeHolder: u.placeHolder,
                                svg: u.svg,
                                "data-sentry-element": "SingleWritingArea",
                                "data-sentry-source-file": "Answered.tsx"
                            })
                        })]
                    }), (0,
                    r.jsx)(d.hK, {
                        y: "portrait" === l ? 0 : 11,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answered.tsx"
                    })]
                })
            })
        }
          , tz = e => {
            let {mode: t, height: n, placeHolder: a, svg: s} = e;
            return (0,
            r.jsx)(eD.kI, {
                mode: t,
                height: n,
                prefixLabel: a.label,
                suffixLabel: a.suffix,
                useLatexInLabel: a.useLatexInLabel,
                useLatexInSuffix: a.useLatexInSuffix,
                hasBackgroundImage: !1,
                "data-sentry-element": "WritingArea",
                "data-sentry-component": "SingleWritingArea",
                "data-sentry-source-file": "Answered.tsx",
                children: (0,
                r.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })
            })
        }
          , tH = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e.find(e => "text" === e.case ? e.value === t : new RegExp(e.value).test(t)) ? "Correct" : "Incorrect"
        }
          , tK = e => {
            let {children: t, area: n={
                width: "100%",
                height: "100%"
            }, diff: a={
                x: 0,
                y: 0
            }, zIndex: s=1, cursor: l="auto", onPointerUp: o, onPointerDown: d, onPointerMove: c} = e
              , [u,x] = (0,
            i.useState)()
              , m = (0,
            i.useRef)(null)
              , p = (0,
            i.useCallback)(e => {
                if (!m.current)
                    return;
                let {x: t, y: n} = m.current.getBoundingClientRect();
                x({
                    x: e.clientX - t - a.x,
                    y: e.clientY - n - a.y
                })
            }
            , [a])
              , h = (0,
            i.useCallback)(e => {
                p(e),
                null == d || d(e)
            }
            , [p, d])
              , g = (0,
            i.useCallback)(e => {
                p(e),
                null == c || c(e)
            }
            , [p, c]);
            return (0,
            r.jsx)("div", {
                ref: m,
                style: {
                    width: n.width,
                    height: n.height,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: s,
                    cursor: l
                },
                onPointerUp: o,
                onPointerDown: h,
                onPointerMove: g,
                onPointerOut: () => x(void 0),
                "data-sentry-component": "DecorationPointer",
                "data-sentry-source-file": "DecorationPointer.tsx",
                children: u && (0,
                r.jsx)("div", {
                    style: {
                        transform: "translate(".concat(u.x, "px, ").concat(u.y, "px)"),
                        pointerEvents: "none",
                        userSelect: "none"
                    },
                    children: t
                })
            })
        }
          , tJ = {
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
          , tF = e => {
            let t = (0,
            i.useMemo)( () => new Event("disconnected"), [])
              , n = (0,
            i.useRef)()
              , r = (0,
            i.useCallback)( () => {
                var t;
                let n = null === (t = e.current) || void 0 === t ? void 0 : t.querySelector('svg[data-layer="MODEL"]');
                return n ? n.cloneNode(!0).outerHTML : ""
            }
            , [e])
              , a = (0,
            i.useCallback)( () => {
                var r, a;
                let s = e.current;
                if (!s)
                    return;
                let i = null === (r = e.current) || void 0 === r ? void 0 : r.editor.recognizerContext.websocket;
                if ((null == i ? void 0 : i.readyState) !== window.WebSocket.OPEN) {
                    console.log("websocket.readyState != 1"),
                    null === (a = s.editor) || void 0 === a || a.close();
                    return
                }
                i.send(JSON.stringify({
                    type: "ping"
                })),
                clearTimeout(n.current),
                n.current = window.setTimeout( () => {
                    var e, n;
                    null == s || null === (e = s.editor) || void 0 === e || e.clear(),
                    null == s || null === (n = s.editor) || void 0 === n || n.close(),
                    console.log("websocket connection was disconnected by ping timeout."),
                    null == s || s.dispatchEvent(t)
                }
                , 5e3)
            }
            , [e, t])
              , s = (0,
            i.useCallback)( () => {
                let t = e.current;
                t && t.editor.recognizerContext.websocket.addEventListener("message", e => {
                    var t;
                    "pong" === (null === (t = JSON.parse(e.data)) || void 0 === t ? void 0 : t.type) && clearTimeout(n.current)
                }
                )
            }
            , [e])
              , l = (0,
            i.useCallback)( (e, t) => {
                var n;
                let a = "Math" === t ? e.detail.exports["application/x-latex"] : null === (n = JSON.parse(e.detail.exports["application/vnd.myscript.jiix"])) || void 0 === n ? void 0 : n.label;
                return "Japanese" === t && (a = a.replace(/\s/g, "")),
                {
                    text: a,
                    svg: r()
                }
            }
            , [r])
              , o = (0,
            i.useCallback)(n => {
                let r = e.current;
                if (!r)
                    return;
                let a = r.querySelector(".error-msg");
                a && (a.style.display = "none");
                let s = null == n ? void 0 : n.detail.type;
                ("close" === s || "timeout" === s) && (console.log("websocket connection was disconnected by ".concat(s)),
                r.dispatchEvent(t))
            }
            , [e, t])
              , d = (0,
            i.useCallback)(async n => {
                let {mode: r, useLK: a, sk: s} = n
                  , i = e.current;
                if (i && window.iink)
                    try {
                        let e = await (await fetch((0,
                        eM.o)("myscript.json"))).json();
                        window.iink.register(i, {
                            recognitionParams: {
                                type: tJ[r].type,
                                protocol: "WEBSOCKET",
                                server: e,
                                iink: {
                                    lang: tJ[r].lang,
                                    gesture: {
                                        enable: !1
                                    },
                                    math: {
                                        mimeTypes: ["application/x-latex", "application/vnd.myscript.jiix"]
                                    },
                                    text: {
                                        configuration: {
                                            addLKText: a,
                                            customResources: s ? ["NO_EMOJIS", s] : ["NO_EMOJIS"]
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
                        i.dispatchEvent(t)
                    }
            }
            , [e, t])
              , c = (0,
            i.useCallback)(e => {
                let t = []
                  , n = []
                  , r = []
                  , a = -1
                  , s = -1;
                for (let i = 0; i < 36; i++) {
                    let l = Math.round(e.x + 1 * Math.cos(10 * i * (Math.PI / 180)))
                      , o = Math.round(e.y + 1 * Math.sin(10 * i * (Math.PI / 180)));
                    (a !== l || s !== o) && (t.push(l),
                    n.push(o),
                    r.push(e.t),
                    a = l,
                    s = o)
                }
                let i = e.radius - 4;
                for (let l = 0; l < 36; l++) {
                    let o = Math.round(e.x + i * Math.cos(10 * l * (Math.PI / 180)))
                      , d = Math.round(e.y + i * Math.sin(10 * l * (Math.PI / 180)));
                    (a !== o || s !== d) && (t.push(o),
                    n.push(d),
                    r.push(e.t),
                    a = o,
                    s = d)
                }
                return {
                    pointerType: "eraser",
                    pointerId: 1,
                    x: t,
                    y: n,
                    t: r
                }
            }
            , []);
            return {
                sendPing: a,
                opened: s,
                recognized: l,
                error: o,
                init: d,
                eraseLine: (0,
                i.useCallback)( (t, n) => {
                    let r = e.current;
                    if (!r)
                        return;
                    let {x: a, y: s} = r.getBoundingClientRect()
                      , i = c({
                        x: t.clientX - a,
                        y: t.clientY - s,
                        t: new Date().getTime(),
                        radius: n
                    });
                    r.editor.pointerEvents({
                        events: [i]
                    })
                }
                , [e, c])
            }
        }
          , tQ = (0,
        i.forwardRef)( (e, t) => {
            let {width: n, height: a=240, mode: s, recognitionConfig: l, onOpened: o, onRecognizing: d, onRecognized: c, onDisconnected: u} = e
              , [x,m] = (0,
            i.useState)(!1)
              , p = (0,
            i.useMemo)( () => "eraser" === s, [s])
              , {sendPing: h, opened: g, recognized: y, error: f, init: w, eraseLine: v} = tF(t)
              , j = (0,
            i.useCallback)( () => {
                g(),
                null == o || o()
            }
            , [g, o])
              , b = (0,
            i.useCallback)(e => {
                let {text: t, svg: n} = y(e, l.mode);
                c(t, n)
            }
            , [l.mode, y, c])
              , S = (0,
            i.useCallback)(e => {
                m(!0),
                p && v(e, 30)
            }
            , [p, v])
              , A = (0,
            i.useCallback)(e => {
                x && p && v(e, 30)
            }
            , [x, p, v]);
            return (0,
            i.useEffect)( () => {
                let e = t.current;
                if (e)
                    return e.addEventListener("loaded", j),
                    e.addEventListener("exported", b),
                    e.addEventListener("error", f),
                    e.addEventListener("pointerup", h),
                    d && e.addEventListener("pointerdown", d),
                    u && e.addEventListener("disconnected", u),
                    w(l),
                    () => {
                        var t;
                        e.removeEventListener("loaded", j),
                        e.removeEventListener("exported", b),
                        e.removeEventListener("error", f),
                        e.removeEventListener("pointerup", h),
                        d && e.removeEventListener("pointerdown", d),
                        u && e.removeEventListener("disconnected", u),
                        null === (t = e.editor) || void 0 === t || t.close()
                    }
            }
            , [t, l, u, d, j, b, f, h, w]),
            (0,
            i.useEffect)( () => {
                let e = () => m(!1);
                return document.addEventListener("pointerup", e),
                () => {
                    document.removeEventListener("pointerup", e)
                }
            }
            , []),
            (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsx)("div", {
                    ref: t,
                    style: {
                        width: n,
                        height: a,
                        zIndex: 20
                    }
                }), (0,
                r.jsx)(tK, {
                    area: {
                        width: n,
                        height: a
                    },
                    diff: {
                        x: 30,
                        y: 30
                    },
                    zIndex: p ? 21 : 1,
                    cursor: x ? "none" : "auto",
                    onPointerDown: S,
                    onPointerMove: A,
                    children: p && x && (0,
                    r.jsx)("img", {
                        src: (0,
                        eM.o)("png/icon_eraser_cursor.png"),
                        width: 60,
                        height: 60,
                        alt: "eraser"
                    })
                })]
            })
        }
        );
        tQ.displayName = "MyScriptRecognizer";
        let tX = i.memo(tQ);
        var tY = n(11245);
        let tU = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(tT)
              , {apData: a, answerType: i} = tL()
              , l = (0,
            P.MM)();
            return a ? (0,
            r.jsx)(tG, {
                apData: a,
                answerType: i,
                wrongCount: n,
                orientation: l,
                onAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            }) : (0,
            r.jsx)(r.Fragment, {})
        }
          , tG = e => {
            let {apData: t, answerType: n, wrongCount: a, orientation: s, onAnswered: i} = e;
            switch (n) {
            case "1to1":
                return (0,
                r.jsx)(t$, {
                    apData: t,
                    wrongCount: a,
                    orientation: s,
                    onAnswered: i
                });
            case "triple":
                return (0,
                r.jsx)(tZ, {
                    apData: t,
                    wrongCount: a,
                    orientation: s,
                    onAnswered: i
                })
            }
        }
          , t$ = e => {
            let {apData: t, orientation: n, onAnswered: s} = e
              , {writingInfos: o, isOpenReconnectMessage: c, isOpenEmptyAnswerDialog: u, isOpenKatexErrorDialog: x, currentPopup: m, unanswerable: p, startAnswerProcess: h, endAnswerProcess: g, startDialogAnswerProcess: y, hidePopup: f, hideDialog: w, recognizing: v, recognized: j, disconnected: b, reconnect: S, handleKatexErrorDialogContinue: A, handleKatexErrorDialogClose: C} = tP(t, s)
              , k = (0,
            i.useCallback)( () => {
                v(0)
            }
            , [v])
              , I = (0,
            i.useCallback)( () => {
                v(1)
            }
            , [v])
              , T = (0,
            i.useCallback)( (e, t) => {
                j(0, e, t)
            }
            , [j])
              , M = (0,
            i.useCallback)( (e, t) => {
                j(1, e, t)
            }
            , [j])
              , [B,_] = o;
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                "data-sentry-element": "Column",
                "data-sentry-component": "WritingArea1To1",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsxs)(d.VP, {
                    width: "100%",
                    maxWidth: 712,
                    alignSelf: "center",
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answering.tsx",
                    children: [(0,
                    r.jsx)(t0, {
                        height: 200,
                        recognitionConfig: B.recognitionConfig,
                        connected: !c,
                        placeHolder: B.placeHolder,
                        recognizing: k,
                        recognized: T,
                        onDisconnected: b,
                        "data-sentry-element": "HandWritingArea",
                        "data-sentry-source-file": "Answering.tsx"
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 1,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answering.tsx"
                    }), (0,
                    r.jsxs)(d.fI, {
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answering.tsx",
                        children: [(0,
                        r.jsx)(d.hK, {
                            x: 2,
                            "data-sentry-element": "Spacer",
                            "data-sentry-source-file": "Answering.tsx"
                        }), (0,
                        r.jsx)(tv, {
                            width: 240,
                            answeredText: B.answeredText,
                            recognitionMode: B.recognitionConfig.mode,
                            "data-sentry-element": "PreviewHorizontal",
                            "data-sentry-source-file": "Answering.tsx"
                        })]
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 2,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answering.tsx"
                    }), (0,
                    r.jsx)(t0, {
                        height: 200,
                        recognitionConfig: _.recognitionConfig,
                        connected: !c,
                        placeHolder: _.placeHolder,
                        recognizing: I,
                        recognized: M,
                        onDisconnected: b,
                        "data-sentry-element": "HandWritingArea",
                        "data-sentry-source-file": "Answering.tsx"
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 1,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answering.tsx"
                    }), (0,
                    r.jsxs)(d.fI, {
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answering.tsx",
                        children: [(0,
                        r.jsx)(d.hK, {
                            x: 2,
                            "data-sentry-element": "Spacer",
                            "data-sentry-source-file": "Answering.tsx"
                        }), (0,
                        r.jsx)(tv, {
                            width: 240,
                            answeredText: _.answeredText,
                            recognitionMode: _.recognitionConfig.mode,
                            "data-sentry-element": "PreviewHorizontal",
                            "data-sentry-source-file": "Answering.tsx"
                        })]
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 1,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answering.tsx"
                    })]
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 200,
                    height: 72,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Answering.tsx",
                    children: (0,
                    r.jsx)(l.yh, {
                        text: "解答する",
                        disabled: p,
                        onClick: h,
                        "data-sentry-element": "PrimaryRoundedButton",
                        "data-sentry-source-file": "Answering.tsx"
                    })
                }), (0,
                r.jsx)(eD.Xn, {
                    isOpen: c,
                    y: 24,
                    onClick: S,
                    "data-sentry-element": "ReconnectMessage",
                    "data-sentry-source-file": "Answering.tsx"
                }), m && (0,
                r.jsx)(tY.z, {
                    result: m,
                    portalElem: "portrait" === n ? "body" : z.y,
                    handleOnStop: "redo" === m ? f : g
                }), (0,
                r.jsx)(eD.Ml, {
                    isOpen: u,
                    onClickAnswer: y,
                    onClickCancel: w,
                    "data-sentry-element": "EmptyAnswerDialog",
                    "data-sentry-source-file": "Answering.tsx"
                }), (0,
                r.jsx)(eD.Og, {
                    isOpen: x,
                    title: "読みとれない解答があります",
                    onClickCancel: C,
                    onClickContinue: A,
                    onClose: C,
                    "data-sentry-element": "KatexErrorDialog",
                    "data-sentry-source-file": "Answering.tsx"
                })]
            })
        }
          , tZ = e => {
            let {apData: t, orientation: n, onAnswered: s} = e
              , {writingInfos: o, isOpenReconnectMessage: c, isOpenEmptyAnswerDialog: u, isOpenKatexErrorDialog: x, currentPopup: m, unanswerable: p, startAnswerProcess: h, endAnswerProcess: g, startDialogAnswerProcess: y, hidePopup: f, hideDialog: w, recognizing: v, recognized: j, disconnected: b, reconnect: S, handleKatexErrorDialogContinue: A, handleKatexErrorDialogClose: C} = tP(t, s)
              , k = (0,
            i.useCallback)( () => {
                v(0)
            }
            , [v])
              , I = (0,
            i.useCallback)( () => {
                v(1)
            }
            , [v])
              , T = (0,
            i.useCallback)( () => {
                v(2)
            }
            , [v])
              , M = (0,
            i.useCallback)( (e, t) => {
                j(0, e, t)
            }
            , [j])
              , B = (0,
            i.useCallback)( (e, t) => {
                j(1, e, t)
            }
            , [j])
              , _ = (0,
            i.useCallback)( (e, t) => {
                j(2, e, t)
            }
            , [j])
              , [E,R,P] = o
              , W = "portrait" === n
              , L = W ? 200 : "100%";
            return (0,
            r.jsxs)(d.VP, {
                height: "100%",
                position: "relative",
                "data-sentry-element": "Column",
                "data-sentry-component": "WritingAreaTriple",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsxs)(d.VP, {
                    width: "100%",
                    height: "100%",
                    alignSelf: "center",
                    flex: 1,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answering.tsx",
                    children: [(0,
                    r.jsxs)(d.fI, {
                        flex: 1,
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answering.tsx",
                        children: [(0,
                        r.jsx)(a.A, {
                            width: "calc(50% - 8px)",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answering.tsx",
                            children: (0,
                            r.jsx)(t0, {
                                height: L,
                                recognitionConfig: E.recognitionConfig,
                                connected: !c,
                                placeHolder: E.placeHolder,
                                recognizing: k,
                                recognized: M,
                                onDisconnected: b,
                                "data-sentry-element": "HandWritingArea",
                                "data-sentry-source-file": "Answering.tsx"
                            })
                        }), (0,
                        r.jsx)(d.hK, {
                            x: 3,
                            "data-sentry-element": "Spacer",
                            "data-sentry-source-file": "Answering.tsx"
                        }), (0,
                        r.jsx)(a.A, {
                            width: "calc(50% - 8px)",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answering.tsx",
                            children: (0,
                            r.jsx)(t0, {
                                height: L,
                                recognitionConfig: R.recognitionConfig,
                                connected: !c,
                                placeHolder: R.placeHolder,
                                recognizing: I,
                                recognized: B,
                                onDisconnected: b,
                                "data-sentry-element": "HandWritingArea",
                                "data-sentry-source-file": "Answering.tsx"
                            })
                        })]
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 2,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answering.tsx"
                    }), (0,
                    r.jsxs)(d.fI, {
                        flex: 1,
                        "data-sentry-element": "Row",
                        "data-sentry-source-file": "Answering.tsx",
                        children: [(0,
                        r.jsx)(a.A, {
                            width: "calc(50% - 8px)",
                            display: "flex",
                            justifyContent: "center",
                            flex: 1,
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answering.tsx",
                            children: (0,
                            r.jsxs)(d.VP, {
                                gap: 1,
                                "data-sentry-element": "Column",
                                "data-sentry-source-file": "Answering.tsx",
                                children: [(0,
                                r.jsxs)(d.fI, {
                                    gap: 2,
                                    "data-sentry-element": "Row",
                                    "data-sentry-source-file": "Answering.tsx",
                                    children: [(0,
                                    r.jsx)(tv, {
                                        width: 120,
                                        answeredText: E.answeredText,
                                        recognitionMode: E.recognitionConfig.mode,
                                        "data-sentry-element": "PreviewHorizontal",
                                        "data-sentry-source-file": "Answering.tsx"
                                    }), (0,
                                    r.jsx)(tv, {
                                        width: 120,
                                        answeredText: R.answeredText,
                                        recognitionMode: R.recognitionConfig.mode,
                                        "data-sentry-element": "PreviewHorizontal",
                                        "data-sentry-source-file": "Answering.tsx"
                                    })]
                                }), (0,
                                r.jsx)(a.A, {
                                    alignSelf: "end",
                                    width: 120,
                                    marginLeft: "auto",
                                    "data-sentry-element": "Box",
                                    "data-sentry-source-file": "Answering.tsx",
                                    children: (0,
                                    r.jsx)(tv, {
                                        answeredText: P.answeredText,
                                        recognitionMode: P.recognitionConfig.mode,
                                        "data-sentry-element": "PreviewHorizontal",
                                        "data-sentry-source-file": "Answering.tsx"
                                    })
                                })]
                            })
                        }), (0,
                        r.jsx)(d.hK, {
                            x: 3,
                            "data-sentry-element": "Spacer",
                            "data-sentry-source-file": "Answering.tsx"
                        }), (0,
                        r.jsx)(a.A, {
                            width: "calc(50% - 12px)",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answering.tsx",
                            children: (0,
                            r.jsx)(t0, {
                                height: L,
                                recognitionConfig: P.recognitionConfig,
                                connected: !c,
                                placeHolder: P.placeHolder,
                                recognizing: T,
                                recognized: _,
                                onDisconnected: b,
                                "data-sentry-element": "HandWritingArea",
                                "data-sentry-source-file": "Answering.tsx"
                            })
                        })]
                    })]
                }), (0,
                r.jsx)(d.hK, {
                    y: 2,
                    "data-sentry-element": "Spacer",
                    "data-sentry-source-file": "Answering.tsx"
                }), (0,
                r.jsx)(a.A, {
                    alignSelf: "end",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Answering.tsx",
                    children: (0,
                    r.jsx)(l.yh, {
                        text: "解答する",
                        disabled: p,
                        onClick: h,
                        "data-sentry-element": "PrimaryRoundedButton",
                        "data-sentry-source-file": "Answering.tsx"
                    })
                }), (0,
                r.jsx)(eD.Xn, {
                    isOpen: c,
                    y: 24,
                    onClick: S,
                    "data-sentry-element": "ReconnectMessage",
                    "data-sentry-source-file": "Answering.tsx"
                }), m && (0,
                r.jsx)(tY.z, {
                    result: m,
                    portalElem: W ? "body" : z.y,
                    handleOnStop: "redo" === m ? f : g
                }), (0,
                r.jsx)(eD.Ml, {
                    isOpen: u,
                    onClickAnswer: y,
                    onClickCancel: w,
                    "data-sentry-element": "EmptyAnswerDialog",
                    "data-sentry-source-file": "Answering.tsx"
                }), (0,
                r.jsx)(eD.Og, {
                    isOpen: x,
                    title: "読みとれない解答があります",
                    onClickCancel: C,
                    onClickContinue: A,
                    onClose: C,
                    "data-sentry-element": "KatexErrorDialog",
                    "data-sentry-source-file": "Answering.tsx"
                })]
            })
        }
          , t0 = e => {
            let {height: t, recognitionConfig: n, connected: a, placeHolder: l, recognizing: d, recognized: c, onDisconnected: u} = e
              , x = (0,
            s.md)(W.HK)
              , m = (0,
            i.useRef)(null)
              , {elementRef: p, elementSize: h} = (0,
            o.wY)()
              , {onPointerDown: g, onPointerUp: y} = (0,
            eD.$D)()
              , f = (0,
            i.useCallback)( () => {
                d(),
                g()
            }
            , [d])
              , w = (0,
            i.useCallback)( (e, t) => {
                c(e, t),
                y()
            }
            , [c]);
            return (0,
            r.jsx)(eD.kI, {
                ref: p,
                height: t,
                prefixLabel: l.label,
                suffixLabel: l.suffix,
                useLatexInLabel: l.useLatexInLabel,
                useLatexInSuffix: l.useLatexInSuffix,
                hasBackgroundImage: !1,
                "data-sentry-element": "WritingArea",
                "data-sentry-component": "HandWritingArea",
                "data-sentry-source-file": "Answering.tsx",
                children: a && (0,
                r.jsx)(tX, {
                    ref: m,
                    width: h.width,
                    height: h.height,
                    mode: "eraser" === x ? "eraser" : "pen",
                    recognitionConfig: n,
                    onOpened: void 0,
                    onRecognizing: f,
                    onRecognized: w,
                    onDisconnected: u
                })
            })
        }
          , t1 = e => {
            let {dto: t, replayResource: n, onAnswered: l} = e
              , o = (0,
            s.Xr)(tT)
              , [d,c] = (0,
            i.useState)()
              , u = (0,
            P.MM)()
              , {apData: x, answerType: m} = tL()
              , {getViewState: p} = tN();
            (0,
            i.useEffect)( () => {
                if (n) {
                    c(p(t, n).items.map(e => ({
                        answered: e.answered,
                        svg: e.svg
                    })));
                    return
                }
                return () => {
                    o(0)
                }
            }
            , [x, t, p, n, o]);
            let h = (0,
            i.useCallback)(async (e, t) => (c(e),
            await l(t)), [l]);
            return void 0 !== d ? (0,
            r.jsx)(a.A, {
                pt: 2,
                pb: "portrait" === u ? 3 : "1to1" === m ? 12 : 2,
                px: 2,
                flex: 1,
                children: (0,
                r.jsx)(tO, {
                    answerDatas: d
                })
            }) : (0,
            r.jsx)(a.A, {
                p: 2,
                flex: 1,
                children: (0,
                r.jsx)(tU, {
                    onAnswered: h
                })
            })
        }
          , t2 = e => {
            let {correct: t, isEnglish: n} = e
              , a = n ? function(e) {
                let t = ["?", "!", '"', ".", "？", "！", "”", "．"]
                  , n = (n, r) => {
                    var a;
                    let s = null === (a = e[r - 1]) || void 0 === a ? void 0 : a.slice(-1);
                    return n && 0 === r || s && t.includes(s) ? "".concat(n[0].toUpperCase()).concat(n.slice(1)) : n
                }
                ;
                return e.map( (e, t) => n(e, t))
            }(t) : t;
            return (0,
            r.jsx)(x.qV, {
                src: a.join(" "),
                style: {
                    fontSize: 20,
                    color: c.Tj.important
                },
                "data-sentry-element": "InlineQML",
                "data-sentry-component": "IncorrectLabel",
                "data-sentry-source-file": "IncorrectLabel.tsx"
            })
        }
        ;
        var t4 = n(82790);
        let t8 = i.memo(e => {
            let {mode: t, width: n="auto"} = e;
            switch (t) {
            case "Order":
                return (0,
                r.jsx)(a.A, {
                    minWidth: 72,
                    width: n,
                    height: 64,
                    px: 2,
                    bgcolor: c.Tj.onSurfaceWeak4,
                    border: "1px solid ".concat((0,
                    c.au)("onSurfaceWeak2", .3)),
                    borderRadius: 1
                });
            case "Selection":
                return (0,
                r.jsx)(a.A, {
                    width: 72,
                    height: 64,
                    borderRadius: 1
                })
            }
        }
        );
        t8.displayName = "EmptyBlock";
        let t3 = i.memo(e => {
            let {value: t, width: n="auto"} = e;
            return (0,
            r.jsx)(d.ov, {
                minWidth: 72,
                width: n,
                height: 64,
                px: 2,
                border: "1px solid ".concat((0,
                c.au)("onSurfaceWeak2", .3)),
                borderRadius: 1,
                bgcolor: c.Tj.surface,
                sx: {
                    cursor: "default",
                    userSelect: "none"
                },
                children: (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.onSurface
                    },
                    weight: "bold"
                })
            })
        }
        );
        t3.displayName = "WordBlock";
        let t5 = e => {
            let {mode: t, items: n, isEnglishText: a, onClickItem: s} = e;
            switch (t) {
            case "Default":
                return (0,
                r.jsx)(t9, {
                    items: n,
                    isEnglishText: a,
                    onClickItem: s
                });
            case "Correct":
                return (0,
                r.jsx)(t7, {
                    items: n,
                    isEnglishText: a
                });
            case "Incorrect":
                return (0,
                r.jsx)(ne, {
                    items: n,
                    isEnglishText: a
                })
            }
        }
          , t6 = ["?", "!", '"', ".", "？", "！", "”", "．"]
          , t9 = e => {
            let {children: t, items: n, isEnglishText: s, onClickItem: i} = e
              , l = (e, t) => {
                var r, a;
                let s = null === (a = n[t - 1]) || void 0 === a ? void 0 : null === (r = a.text) || void 0 === r ? void 0 : r.slice(-1);
                return e && 0 === t || s && t6.includes(s) ? "".concat(e[0].toUpperCase()).concat(e.slice(1)) : e
            }
            ;
            return (0,
            r.jsxs)(d.fI, {
                position: "relative",
                flexWrap: "wrap",
                gap: 1,
                alignItems: "center",
                width: "fit-content",
                sx: {
                    userSelect: "none"
                },
                "data-sentry-element": "Row",
                "data-sentry-component": "DefaultOrderCompletion",
                "data-sentry-source-file": "OrderCompletion.tsx",
                children: [n.map( (e, t) => {
                    let {id: n, text: o, movable: d} = e;
                    return d ? (0,
                    r.jsx)(a.A, {
                        id: n,
                        children: o ? (0,
                        r.jsx)(nt, {
                            id: n,
                            onClick: i,
                            children: (0,
                            r.jsx)(t3, {
                                value: s ? l(o, t) : o
                            })
                        }, n) : (0,
                        r.jsx)(nn, {
                            id: n,
                            children: (0,
                            r.jsx)(t8, {
                                mode: "Order"
                            })
                        }, n)
                    }, n) : o && (0,
                    r.jsx)(x.qV, {
                        src: s ? l(o, t) : o,
                        style: {
                            height: 64,
                            fontSize: 20,
                            color: c.Tj.onSurface,
                            display: "flex",
                            alignItems: "center"
                        }
                    })
                }
                ), t]
            })
        }
          , t7 = e => {
            let {items: t, isEnglishText: n} = e;
            return (0,
            r.jsx)(t9, {
                items: t,
                isEnglishText: n,
                "data-sentry-element": "DefaultOrderCompletion",
                "data-sentry-component": "CorrectOrderCompletion",
                "data-sentry-source-file": "OrderCompletion.tsx",
                children: (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "OrderCompletion.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "OrderCompletion.tsx"
                    })
                })
            })
        }
          , ne = e => {
            let {items: t, isEnglishText: n} = e;
            return (0,
            r.jsx)(a.A, {
                "data-sentry-element": "Box",
                "data-sentry-component": "IncorrectOrderCompletion",
                "data-sentry-source-file": "OrderCompletion.tsx",
                children: (0,
                r.jsx)(t9, {
                    items: t,
                    isEnglishText: n,
                    "data-sentry-element": "DefaultOrderCompletion",
                    "data-sentry-source-file": "OrderCompletion.tsx",
                    children: (0,
                    r.jsx)(a.A, {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        margin: "auto",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "OrderCompletion.tsx",
                        children: (0,
                        r.jsx)(l._n, {
                            name: "correctionX",
                            width: 48,
                            height: 48,
                            "data-sentry-element": "SvgImage",
                            "data-sentry-source-file": "OrderCompletion.tsx"
                        })
                    })
                })
            })
        }
          , nt = e => {
            let {children: t, id: n, onClick: a} = e
              , {attributes: s, listeners: i, setNodeRef: l, isDragging: o} = (0,
            t4.PM)({
                id: n
            });
            return o ? (0,
            r.jsx)(t8, {
                mode: "Order"
            }) : (0,
            r.jsx)("div", {
                ref: l,
                id: n,
                ...i,
                ...s,
                onClick: a,
                "data-sentry-component": "Draggable",
                "data-sentry-source-file": "OrderCompletion.tsx",
                children: t
            })
        }
          , nn = e => {
            let {children: t, id: n} = e
              , {setNodeRef: a, isOver: s} = (0,
            t4.zM)({
                id: n
            });
            return (0,
            r.jsx)("div", {
                ref: a,
                style: {
                    opacity: s ? .5 : 1
                },
                "data-sentry-component": "Droppable",
                "data-sentry-source-file": "OrderCompletion.tsx",
                children: t
            })
        }
          , nr = (0,
        eu.eU)([])
          , na = (0,
        eu.eU)([])
          , ns = (0,
        eu.eU)([])
          , ni = (0,
        eu.eU)([])
          , nl = (0,
        eu.eU)(!1)
          , no = (0,
        eu.eU)(0)
          , nd = () => {
            let e = (0,
            s.md)(ns)
              , t = (0,
            s.md)(na)
              , n = (0,
            s.md)(nl);
            return (0,
            r.jsx)(nc, {
                answered: e,
                correct: t,
                isEnglishText: n,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            })
        }
          , nc = e => {
            let {answered: t, correct: n, isEnglishText: s} = e;
            return t.every( (e, t) => {
                let {text: r} = e;
                return r === n[t]
            }
            ) ? (0,
            r.jsx)(a.A, {
                width: "100%",
                "data-sentry-element": "Box",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: (0,
                r.jsx)(t5, {
                    mode: "Correct",
                    items: t,
                    isEnglishText: s,
                    "data-sentry-element": "OrderCompletion",
                    "data-sentry-source-file": "Answered.tsx"
                })
            }) : (0,
            r.jsxs)(d.VP, {
                width: "100%",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: [(0,
                r.jsx)(t5, {
                    mode: "Incorrect",
                    items: t,
                    isEnglishText: s,
                    "data-sentry-element": "OrderCompletion",
                    "data-sentry-source-file": "Answered.tsx"
                }), (0,
                r.jsx)(d.hK, {
                    y: 1,
                    "data-sentry-element": "Spacer",
                    "data-sentry-source-file": "Answered.tsx"
                }), (0,
                r.jsx)(t2, {
                    correct: n,
                    isEnglish: s,
                    "data-sentry-element": "IncorrectLabel",
                    "data-sentry-source-file": "Answered.tsx"
                })]
            })
        }
        ;
        var nu = n(43627)
          , nx = n(74979)
          , nm = n(66689);
        let np = (e, t) => Math.floor(Math.random() * (t - e + 1) + e)
          , nh = () => ({
            formatDto: (0,
            i.useCallback)(e => {
                let t = e.correctList.map( (e, t) => ({
                    index: t,
                    text: e.text,
                    movable: e.entryStyle === ey.k4.MOVABLE
                }))
                  , n = e.dummyList.map(e => e.text)
                  , r = 0
                  , a = 0
                  , s = t.map(e => e.movable ? {
                    id: "Placeholder[".concat(r++, "]"),
                    text: void 0,
                    movable: !0
                } : {
                    id: "Fixed[".concat(a++, "]"),
                    text: e.text,
                    movable: !1
                })
                  , i = t.filter(e => e.movable).map( (e, t) => ({
                    id: "Correct[".concat(t, "]"),
                    text: e.text,
                    movable: e.movable
                }))
                  , l = [...i, ...n.map( (e, t) => ({
                    id: "Dummy[".concat(t, "]"),
                    text: e,
                    movable: !0
                }))].sort( () => Math.random() - .5);
                if (l.length > 1 && l[0].text === i[0].text) {
                    let e = np(1, l.length - 1);
                    [l[0],l[e]] = [l[e], l[0]]
                }
                return {
                    answeringItems: s,
                    correctTexts: e.correctList.map(e => {
                        let {text: t} = e;
                        return t
                    }
                    ),
                    selectableItems: l,
                    isEnglishText: e.isEnglishText
                }
            }
            , [])
        })
          , ng = () => {
            let e = (0,
            i.useCallback)(e => e.some(e => {
                let {text: t} = e;
                return !t
            }
            ), []);
            return {
                validate: (0,
                i.useCallback)( (t, n) => e(t) ? "empty" : t.every( (e, t) => {
                    let {text: r} = e;
                    return r === n[t]
                }
                ) ? "correct" : "incorrect", [e]),
                checkEmpty: e
            }
        }
          , ny = () => {
            let[e,t] = (0,
            s.fp)(no)
              , [n,r] = (0,
            i.useState)()
              , {validate: a} = ng();
            return {
                currentPopup: n,
                setPopup: (0,
                i.useCallback)( (n, s) => {
                    switch (a(n, s)) {
                    case "correct":
                        r("correct");
                        break;
                    case "incorrect":
                        0 === e ? (t(1),
                        r("redo")) : r("incorrect");
                        break;
                    case "empty":
                        t(1),
                        r("incorrect")
                    }
                }
                , [e, t, a]),
                hidePopup: (0,
                i.useCallback)( () => {
                    r(void 0)
                }
                , [])
            }
        }
          , nf = () => ({
            getViewState: (0,
            i.useCallback)( (e, t) => (function(e, t) {
                let n = JSON.parse(t);
                if (n.viewState)
                    return n.viewState;
                if (n.apViewState)
                    return function(e, t) {
                        var n;
                        let r = e.correctList.map( (e, t) => ({
                            index: t,
                            text: e.text,
                            movable: e.entryStyle === ey.k4.MOVABLE
                        }))
                          , a = 0
                          , s = 0
                          , i = r.map(e => e.movable ? {
                            id: "Placeholder[".concat(a++, "]"),
                            text: void 0,
                            movable: !0
                        } : {
                            id: "Fixed[".concat(s++, "]"),
                            text: e.text,
                            movable: !1
                        })
                          , l = r.filter(e => e.movable).map( (e, t) => ({
                            id: "Correct[".concat(t, "]"),
                            text: e.text
                        }))
                          , o = e.dummyList.map( (e, t) => {
                            let {text: n} = e;
                            return {
                                id: "Dummy[".concat(t, "]"),
                                text: n
                            }
                        }
                        )
                          , d = r.filter(e => e.movable).map(e => e.index)
                          , c = null !== (n = t.dropped) && void 0 !== n ? n : {}
                          , u = [];
                        return {
                            answered: d.map(e => {
                                let t;
                                if (c[e]) {
                                    var n;
                                    let r = c[e]
                                      , a = e => u.find(t => t === e)
                                      , s = l.find(e => !a(e.id) && e.text === r.text) || o.find(e => !a(e.id) && e.text === r.text);
                                    t = null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : i[e].id
                                } else
                                    t = i[e].id;
                                return u.push(t),
                                t
                            }
                            )
                        }
                    }(e, n.apViewState);
                throw Error("no view state")
            }
            )(e, t.viewStateJSON), [])
        })
          , nw = "selectable_context"
          , nv = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(nr)
              , a = (0,
            s.md)(ni)
              , i = (0,
            s.md)(na)
              , l = (0,
            s.md)(nl)
              , o = (0,
            s.md)(no)
              , d = (0,
            P.MM)();
            return (0,
            r.jsx)(nj, {
                selectables: n,
                answering: a,
                correct: i,
                isEnglishText: l,
                wrongCount: o,
                orientation: d,
                onAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            })
        }
          , nj = e => {
            let {correct: t, isEnglishText: n, wrongCount: o, orientation: u, onAnswered: x, ...m} = e
              , p = (0,
            s.Xr)(ns)
              , [h,g] = (0,
            i.useState)([])
              , [y,f] = (0,
            i.useState)([])
              , [w,v] = (0,
            i.useState)()
              , [j,b] = (0,
            i.useState)(0)
              , [S,A] = (0,
            i.useState)(!1)
              , C = (0,
            i.useRef)(null)
              , {currentPopup: k, setPopup: I, hidePopup: T} = ny()
              , {checkEmpty: M} = ng()
              , {preventTouchScroll: B, allowTouchScroll: _} = (0,
            nm._)()
              , E = (0,
            t4.FR)((0,
            t4.MS)(t4.cA, {
                activationConstraint: {
                    delay: 200,
                    tolerance: 1e3
                }
            }), (0,
            t4.MS)(t4.IG, {
                activationConstraint: {
                    delay: 100,
                    tolerance: 1e3
                },
                onActivation: B
            }))
              , P = (0,
            i.useCallback)( (e, t) => {
                let n = h.findIndex(t => {
                    let {id: n} = t;
                    return n === e.id
                }
                )
                  , r = h.findIndex(e => {
                    let {id: n} = e;
                    return n === t.id
                }
                )
                  , a = JSON.parse(JSON.stringify(h));
                [a[n],a[r]] = [a[r], a[n]],
                g(a)
            }
            , [h])
              , W = (0,
            i.useCallback)( (e, t) => {
                let n = y.findIndex(t => {
                    let {id: n} = t;
                    return n === e.id
                }
                )
                  , r = y.findIndex(e => {
                    let {id: n} = e;
                    return n === t.id
                }
                )
                  , a = JSON.parse(JSON.stringify(y));
                [a[n],a[r]] = [a[r], a[n]],
                f(a)
            }
            , [y])
              , L = (0,
            i.useCallback)( (e, t) => {
                if (e < 0 || t < 0)
                    return;
                let n = JSON.parse(JSON.stringify(y))
                  , r = JSON.parse(JSON.stringify(h));
                [n[e],r[t]] = [r[t], n[e]],
                g(r),
                f(n)
            }
            , [y, h])
              , N = (0,
            i.useCallback)(e => {
                L(y.findIndex(t => {
                    let {id: n} = t;
                    return n === e.id
                }
                ), h.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                ))
            }
            , [y, L, h])
              , O = (0,
            i.useCallback)( (e, t) => {
                let n = h.findIndex(t => {
                    let {id: n} = t;
                    return n === e.id
                }
                );
                L(y.findIndex(e => {
                    let {id: n} = e;
                    return n === (null == t ? void 0 : t.id)
                }
                ), n)
            }
            , [y, L, h])
              , V = (0,
            i.useCallback)(e => {
                var t, n;
                let {active: r} = e;
                v((null === (n = r.data.current) || void 0 === n ? void 0 : null === (t = n.sortable) || void 0 === t ? void 0 : t.containerId) === nw ? h.find(e => {
                    let {id: t} = e;
                    return t === r.id
                }
                ) : y.find(e => {
                    let {id: t} = e;
                    return t === r.id
                }
                ))
            }
            , [y, h])
              , D = (0,
            i.useCallback)(e => {
                var t, n, r, a, s;
                if (!e.over || e.active.id === e.over.id)
                    return;
                let i = null === (n = e.active.data.current) || void 0 === n ? void 0 : null === (t = n.sortable) || void 0 === t ? void 0 : t.containerId
                  , l = null === (s = e.over) || void 0 === s ? void 0 : null === (a = s.data.current) || void 0 === a ? void 0 : null === (r = a.sortable) || void 0 === r ? void 0 : r.containerId;
                i === nw && l === nw && P(e.active, e.over)
            }
            , [P])
              , q = (0,
            i.useCallback)(e => {
                var t, n, r, a;
                if (v(void 0),
                !e.over || e.active.id === e.over.id)
                    return;
                let s = null === (n = e.active.data.current) || void 0 === n ? void 0 : null === (t = n.sortable) || void 0 === t ? void 0 : t.containerId
                  , i = null === (a = e.over.data.current) || void 0 === a ? void 0 : null === (r = a.sortable) || void 0 === r ? void 0 : r.containerId;
                s === nw ? O(e.active, e.over) : i === nw ? N(e.active) : W(e.active, e.over)
            }
            , [W, N, O])
              , H = (0,
            i.useCallback)(e => {
                var t;
                let n = y.findIndex(t => {
                    let {id: n} = t;
                    return n === e.currentTarget.id
                }
                );
                (null === (t = y[n]) || void 0 === t ? void 0 : t.text) && L(n, h.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                ))
            }
            , [y, L, h])
              , K = (0,
            i.useCallback)(e => {
                var t;
                let n = h.findIndex(t => {
                    let {id: n} = t;
                    return n === e.currentTarget.id
                }
                );
                (null === (t = h[n]) || void 0 === t ? void 0 : t.text) && L(y.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                ), n)
            }
            , [y, L, h])
              , J = (0,
            i.useCallback)( () => {
                M(y) ? A(!0) : I(y, t)
            }
            , [y, t, M, I])
              , F = (0,
            i.useCallback)( () => {
                let e = ej.aJ.CORRECT
                  , t = {
                    answered: y.filter(e => e.movable).map(e => e.id)
                };
                p(y),
                x({
                    answer: {
                        result: e,
                        textType: 2,
                        text: y.map(e => {
                            let {text: t} = e;
                            return t
                        }
                        ).join(" "),
                        wrongCount: o
                    },
                    viewStateJSON: t
                }),
                T()
            }
            , [k, p, y, x, o, T])
              , Q = (0,
            i.useCallback)( () => {
                A(!1),
                I(y, t)
            }
            , [y, t, I, A])
              , X = (0,
            i.useCallback)( () => {
                A(!1)
            }
            , [A]);
            return (0,
            i.useEffect)( () => {
                g(m.selectables),
                f(m.answering)
            }
            , [m.selectables, m.answering]),
            (0,
            i.useEffect)( () => {
                document.addEventListener("touchend", _)
            }
            , [_]),
            (0,
            i.useEffect)( () => {
                C.current && b(C.current.clientHeight + 72)
            }
            , [j]),
            (0,
            r.jsxs)(d.VP, {
                width: "100%",
                position: "relative",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsxs)(t4.Mp, {
                    sensors: E,
                    collisionDetection: t4.fp,
                    onDragStart: V,
                    onDragOver: D,
                    onDragEnd: q,
                    "data-sentry-element": "DndContext",
                    "data-sentry-source-file": "Answering.tsx",
                    children: [(0,
                    r.jsx)(a.A, {
                        minHeight: j,
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "Answering.tsx",
                        children: (0,
                        r.jsx)(a.A, {
                            ref: C,
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answering.tsx",
                            children: (0,
                            r.jsx)(t5, {
                                mode: "Default",
                                items: y,
                                isEnglishText: n,
                                onClickItem: H,
                                "data-sentry-element": "OrderCompletion",
                                "data-sentry-source-file": "Answering.tsx"
                            })
                        })
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 4,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answering.tsx"
                    }), (0,
                    r.jsx)(nu.gB, {
                        id: nw,
                        items: h,
                        "data-sentry-element": "SortableContext",
                        "data-sentry-source-file": "Answering.tsx",
                        children: (0,
                        r.jsx)(d.fI, {
                            flexWrap: "wrap",
                            gap: 2,
                            p: 2,
                            borderRadius: 1,
                            bgcolor: c.Tj.onSurfaceWeak4,
                            "data-sentry-element": "Row",
                            "data-sentry-source-file": "Answering.tsx",
                            children: h.map(e => {
                                let {id: t, text: n} = e;
                                return n ? (0,
                                r.jsx)(nb, {
                                    id: t,
                                    onClick: K,
                                    children: (0,
                                    r.jsx)(t3, {
                                        value: n
                                    })
                                }, t) : (0,
                                r.jsx)(nb, {
                                    id: t,
                                    disabled: !0,
                                    children: (0,
                                    r.jsx)(t8, {
                                        mode: "Selection"
                                    })
                                }, t)
                            }
                            )
                        })
                    }), (0,
                    r.jsx)(t4.Hd, {
                        style: {
                            width: "fit-content",
                            boxShadow: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
                            borderRadius: "4px"
                        },
                        "data-sentry-element": "DragOverlay",
                        "data-sentry-source-file": "Answering.tsx",
                        children: (null == w ? void 0 : w.text) ? (0,
                        r.jsx)(t3, {
                            value: w.text
                        }) : null
                    })]
                }), (0,
                r.jsx)(d.hK, {
                    y: 4,
                    "data-sentry-element": "Spacer",
                    "data-sentry-source-file": "Answering.tsx"
                }), (0,
                r.jsx)(a.A, {
                    alignSelf: "flex-end",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Answering.tsx",
                    children: (0,
                    r.jsx)(l.yh, {
                        text: "解答する",
                        disabled: void 0 !== k,
                        onClick: J,
                        "data-sentry-element": "PrimaryRoundedButton",
                        "data-sentry-source-file": "Answering.tsx"
                    })
                }), k && (0,
                r.jsx)(R.zD, {
                    result: k,
                    portalElem: "portrait" === u ? "body" : z.y,
                    handleOnStop: "redo" === k ? T : F
                }), (0,
                r.jsx)(l.lG, {
                    isOpen: S,
                    title: "このまま解答しますか？",
                    body: "空欄が残っています。",
                    actions: (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(l.Pn, {
                            label: "キャンセル",
                            color: "primary",
                            onClick: X
                        }), (0,
                        r.jsx)(l.Pn, {
                            label: "解答する",
                            color: "primary",
                            onClick: Q
                        })]
                    }),
                    onClose: X,
                    "data-sentry-element": "Dialog",
                    "data-sentry-source-file": "Answering.tsx"
                })]
            })
        }
          , nb = e => {
            let {children: t, id: n, disabled: a, onClick: s} = e
              , {attributes: i, listeners: l, setNodeRef: o, transform: d, transition: c, isDragging: u} = (0,
            nu.gl)({
                id: n,
                disabled: a
            })
              , x = {
                transform: nx.Ks.Transform.toString(d),
                transition: c,
                opacity: u ? 0 : 1
            };
            return (0,
            r.jsx)("div", {
                ref: o,
                id: n,
                style: x,
                onClick: s,
                ...i,
                ...l,
                "data-sentry-component": "SortableItem",
                "data-sentry-source-file": "Answering.tsx",
                children: t
            })
        }
          , nS = e => {
            let {dto: t, replayResource: n, onAnswered: l} = e
              , o = (0,
            s.Xr)(nr)
              , d = (0,
            s.Xr)(ni)
              , c = (0,
            s.Xr)(na)
              , u = (0,
            s.Xr)(nl)
              , x = (0,
            s.Xr)(no)
              , [m,p] = (0,
            s.fp)(ns)
              , {formatDto: h} = nh()
              , {getViewState: g} = nf()
              , y = (0,
            P.MM)();
            if ((0,
            i.useEffect)( () => {
                let {answeringItems: e, correctTexts: r, selectableItems: a, isEnglishText: s} = h(t);
                if (n) {
                    let i = g(t, n)
                      , l = 0;
                    p(e.map(e => {
                        if (!e.movable)
                            return e;
                        let t = i.answered[l++]
                          , n = a.find(e => e.id === t);
                        return {
                            id: t,
                            text: n ? n.text : e.text,
                            movable: !0
                        }
                    }
                    )),
                    c(r),
                    u(s);
                    return
                }
                o(a),
                d(e),
                p([]),
                c(r),
                u(s),
                x(0)
            }
            , [t, h, g, n, p, d, c, u, o, x]),
            m.length > 0)
                switch (y) {
                case "landscape":
                    return (0,
                    r.jsx)(a.A, {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        pt: 4,
                        pr: 3,
                        pb: 12,
                        pl: 3,
                        children: (0,
                        r.jsx)(nd, {})
                    });
                case "portrait":
                    return (0,
                    r.jsx)(a.A, {
                        pt: 4,
                        pr: 3,
                        pb: 3,
                        pl: 3,
                        flex: 1,
                        width: 1,
                        children: (0,
                        r.jsx)(nd, {})
                    })
                }
            else
                switch (y) {
                case "landscape":
                    return (0,
                    r.jsx)(a.A, {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "end",
                        pt: 4,
                        pr: 3,
                        pb: 2,
                        pl: 3,
                        children: (0,
                        r.jsx)(nv, {
                            onAnswered: l
                        })
                    });
                case "portrait":
                    return (0,
                    r.jsx)(a.A, {
                        pt: 4,
                        pr: 3,
                        pb: 2,
                        pl: 3,
                        flex: 1,
                        width: 1,
                        children: (0,
                        r.jsx)(nv, {
                            onAnswered: l
                        })
                    })
                }
        }
        ;
        var nA = n(79369);
        let nC = (0,
        eu.eU)(void 0)
          , nk = e => {
            let {answerData: t, onAnswered: n} = e
              , a = (0,
            s.md)(nC)
              , i = (0,
            s.md)(W.aR)
              , l = (0,
            P.MM)();
            return (0,
            r.jsx)(nI, {
                result: a,
                answered: t.text,
                svg: t.svg,
                orientation: l,
                onAnswered: n,
                isViewer: i,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            })
        }
          , nI = e => {
            let {result: t, answered: n, svg: s, orientation: o, onAnswered: c, isViewer: u} = e
              , [x,m] = (0,
            i.useState)()
              , [p,h] = (0,
            i.useState)(!1)
              , [g,y] = (0,
            i.useState)(!1)
              , {saveHandwritingAnswerImageToGCS: f} = (0,
            P.bd)()
              , w = (0,
            i.useCallback)( () => {
                m("correct")
            }
            , [])
              , v = (0,
            i.useCallback)( () => {
                m("kanji_incorrect")
            }
            , [])
              , j = (0,
            i.useCallback)(async () => {
                let e = "correct" === x
                  , t = {
                    answer: {
                        result: ej.aJ.CORRECT,
                        textType: 2,
                        text: n,
                        wrongCount: 0
                    },
                    viewStateJSON: {
                        answered: n,
                        result: e,
                        svg: s
                    }
                }
                  , r = await c(t);
                r && f({
                    answerLogId: r,
                    answerResponse: t
                }),
                h(!1),
                y(!1)
            }
            , [n, x, c, f, s]);
            return (0,
            i.useEffect)( () => {
                "" === n ? y(!0) : h(!0)
            }
            , [n]),
            (0,
            r.jsxs)(d.VP, {
                height: "100%",
                position: "relative",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: [(0,
                r.jsxs)(d.VP, {
                    width: "portrait" === o ? void 0 : "100%",
                    position: "portrait" === o ? void 0 : "absolute",
                    bottom: "portrait" === o ? void 0 : 0,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answered.tsx",
                    children: [(0,
                    r.jsxs)(a.A, {
                        width: "100%",
                        maxWidth: 712,
                        alignSelf: "center",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "Answered.tsx",
                        children: [(0,
                        r.jsx)(eD.kI, {
                            mode: "Default",
                            height: "portrait" === o ? 254 : 334,
                            "data-sentry-element": "WritingArea",
                            "data-sentry-source-file": "Answered.tsx",
                            children: (0,
                            r.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: s
                                }
                            })
                        }), void 0 !== t && u && (0,
                        r.jsx)(a.A, {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            width: 144,
                            height: 144,
                            children: (0,
                            r.jsx)(l._n, {
                                name: t ? "correctionO" : "correctionX",
                                width: 144,
                                height: 144
                            })
                        })]
                    }), (0,
                    r.jsx)(d.hK, {
                        y: "portrait" === o ? 0 : 14,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answered.tsx"
                    })]
                }), p && (0,
                F.createPortal)((0,
                r.jsx)(nT, {
                    currentPopup: x,
                    isViewer: u,
                    endWrongAnswerProcess: v,
                    endCorrectAnswerProcess: w
                }), document.body), g && (0,
                F.createPortal)((0,
                r.jsx)(nM, {
                    isViewer: u,
                    currentPopup: x,
                    endAnswerProcess: j
                }), document.body), x && (0,
                r.jsx)(R.zD, {
                    result: x,
                    portalElem: "body",
                    handleOnStop: j
                })]
            })
        }
          , nT = e => {
            let {isViewer: t, currentPopup: n, endWrongAnswerProcess: a, endCorrectAnswerProcess: s} = e;
            return (0,
            r.jsxs)(nB, {
                "data-sentry-element": "StyledFloatingCustomAnswered",
                "data-sentry-component": "JudgeButton",
                "data-sentry-source-file": "Answered.tsx",
                children: [(0,
                r.jsx)(l.I8, {
                    width: 200,
                    text: "できなかった",
                    disabled: t || !!n,
                    onClick: a,
                    "data-sentry-element": "SecondaryRoundedButton",
                    "data-sentry-source-file": "Answered.tsx"
                }), (0,
                r.jsx)(l.yh, {
                    width: 200,
                    text: "できた",
                    disabled: t || !!n,
                    onClick: s,
                    "data-sentry-element": "PrimaryRoundedButton",
                    "data-sentry-source-file": "Answered.tsx"
                })]
            })
        }
          , nM = e => {
            let {isViewer: t, currentPopup: n, endAnswerProcess: a} = e;
            return (0,
            r.jsx)(nB, {
                "data-sentry-element": "StyledFloatingCustomAnswered",
                "data-sentry-component": "NextButton",
                "data-sentry-source-file": "Answered.tsx",
                children: (0,
                r.jsx)(l.yh, {
                    width: 200,
                    text: "次へ",
                    disabled: t || !!n,
                    onClick: a,
                    "data-sentry-element": "PrimaryRoundedButton",
                    "data-sentry-source-file": "Answered.tsx"
                })
            })
        }
          , nB = (0,
        nA.A)(a.A)(e => {
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
          , n_ = () => ({
            getViewState: (0,
            i.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState) {
                    var n, r;
                    return {
                        result: "ANSWER_RESULT_CORRECT" === (n = t.apViewState).result,
                        answered: n.recognizedText,
                        svg: null !== (r = n.svg) && void 0 !== r ? r : ""
                    }
                }
                throw Error("no view state")
            }
            )(e.viewStateJSON), [])
        })
          , nE = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => {
                    t(!0)
                }
                , []),
                hide: (0,
                i.useCallback)( () => {
                    t(!1)
                }
                , []),
                visibled: e
            }
        }
          , nR = () => {
            let[e,t] = (0,
            i.useState)({
                text: "",
                svg: ""
            })
              , [n,r] = (0,
            i.useState)(!1)
              , [a,s] = (0,
            i.useState)(!1)
              , l = (0,
            i.useCallback)( () => {
                t({
                    text: "",
                    svg: ""
                })
            }
            , [t])
              , o = (0,
            i.useCallback)( (e, n) => {
                t({
                    text: e,
                    svg: n
                }),
                r(!1)
            }
            , [t, r]);
            return {
                opened: l,
                recognizing: (0,
                i.useCallback)( () => {
                    r(!0)
                }
                , [r]),
                recognized: o,
                disconnected: (0,
                i.useCallback)( () => {
                    t({
                        text: "",
                        svg: ""
                    }),
                    s(!0)
                }
                , [t, s]),
                reconnect: (0,
                i.useCallback)( () => {
                    s(!1)
                }
                , [s]),
                setAnswerData: t,
                setIsRecognizing: r,
                answerData: e,
                isOpenReconnectMessage: a,
                isRecognizing: n
            }
        }
          , nP = () => {
            let[e,t] = (0,
            i.useState)();
            return {
                showing: e,
                show: (0,
                i.useCallback)(e => t(e), []),
                hide: (0,
                i.useCallback)( () => t(void 0), [])
            }
        }
          , nW = {
            mode: "Japanese",
            useLK: !1,
            sk: void 0
        }
          , nL = () => {
            let e = (0,
            s.md)(W.bQ);
            return (0,
            i.useMemo)( () => {
                let t = null == e ? void 0 : e.contentResource.legacyAnswer.apData;
                return (null == t ? void 0 : t.case) !== "apHandWriteSelfJudgement" ? (console.error("Invalid SelfJudgeWriting state"),
                {
                    correct: "",
                    recognitionConfig: nW
                }) : {
                    correct: t.value.correctAnswer,
                    recognitionConfig: nW
                }
            }
            , [e])
        }
          , nN = e => {
            let {onPendingAnswered: t} = e
              , n = (0,
            s.md)(W.HK)
              , a = (0,
            P.MM)()
              , {recognitionConfig: i} = nL();
            return i ? (0,
            r.jsx)(nV, {
                recognitionConfig: i,
                orientation: a,
                selectedTool: n,
                onPendingAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            }) : null
        }
          , nO = () => ({
            prepare: (0,
            i.useCallback)( (e, t, n) => {
                if (0 === e.text.length) {
                    t();
                    return
                }
                n()
            }
            , [])
        })
          , nV = e => {
            let {recognitionConfig: t, orientation: n, selectedTool: s, onPendingAnswered: c} = e
              , u = (0,
            i.useRef)(null)
              , {elementRef: x, elementSize: m} = (0,
            o.wY)()
              , {showing: p, show: h, hide: g} = nP()
              , {prepare: y} = nO()
              , {opened: f, recognizing: w, recognized: v, disconnected: j, reconnect: b, answerData: S, isOpenReconnectMessage: A, isRecognizing: C} = nR()
              , {show: k, hide: I, visibled: T} = nE()
              , {onPointerDown: M, onPointerUp: B} = (0,
            eD.$D)()
              , _ = (0,
            i.useCallback)( () => {
                w(),
                M()
            }
            , [w])
              , E = (0,
            i.useCallback)( (e, t) => {
                v(e, t),
                B()
            }
            , [v])
              , P = (0,
            i.useCallback)( () => {
                y(S, k, () => {
                    c(S)
                }
                )
            }
            , [y, S, k, c])
              , W = (0,
            i.useCallback)( () => {
                c(S),
                g()
            }
            , [S, g, c])
              , L = (0,
            i.useCallback)( () => {
                I(),
                h("incorrect")
            }
            , [I, h]);
            (0,
            i.useEffect)( () => {
                var e, t, n;
                null === (n = u.current) || void 0 === n || null === (t = n.editor) || void 0 === t || null === (e = t.resize) || void 0 === e || e.call(t)
            }
            , [x]);
            let N = "portrait" === n;
            return (0,
            r.jsxs)(d.VP, {
                height: "100%",
                position: "relative",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsxs)(d.VP, {
                    width: N ? void 0 : "100%",
                    position: N ? void 0 : "absolute",
                    bottom: N ? void 0 : 0,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answering.tsx",
                    children: [(0,
                    r.jsx)(a.A, {
                        width: "100%",
                        maxWidth: 712,
                        alignSelf: "center",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "Answering.tsx",
                        children: (0,
                        r.jsx)(eD.kI, {
                            ref: x,
                            height: N ? 254 : 334,
                            "data-sentry-element": "WritingArea",
                            "data-sentry-source-file": "Answering.tsx",
                            children: !A && (0,
                            r.jsx)(tX, {
                                ref: u,
                                width: m.width,
                                height: N ? 254 : 334,
                                mode: "eraser" === s ? "eraser" : "pen",
                                recognitionConfig: t,
                                onOpened: f,
                                onRecognizing: _,
                                onRecognized: E,
                                onDisconnected: j
                            })
                        })
                    }), (0,
                    r.jsx)(d.hK, {
                        y: N ? 2 : 5,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Answering.tsx"
                    }), (0,
                    r.jsx)(a.A, {
                        alignSelf: "end",
                        "data-sentry-element": "Box",
                        "data-sentry-source-file": "Answering.tsx",
                        children: (0,
                        r.jsx)(l.yh, {
                            text: "答え合わせ",
                            disabled: C || A,
                            onClick: P,
                            "data-sentry-element": "PrimaryRoundedButton",
                            "data-sentry-source-file": "Answering.tsx"
                        })
                    }), (0,
                    r.jsx)(eD.Ml, {
                        isOpen: T,
                        onClickAnswer: L,
                        onClickCancel: I,
                        "data-sentry-element": "EmptyAnswerDialog",
                        "data-sentry-source-file": "Answering.tsx"
                    })]
                }), p && (0,
                r.jsx)(R.zD, {
                    result: p,
                    portalElem: "body",
                    handleOnStop: W
                }), (0,
                r.jsx)(eD.Xn, {
                    isOpen: A,
                    y: N ? 96 : 24,
                    onClick: b,
                    "data-sentry-element": "ReconnectMessage",
                    "data-sentry-source-file": "Answering.tsx"
                })]
            })
        }
          , nD = e => {
            let {replayResource: t, onPendingAnswered: n, onAnswered: l} = e
              , d = (0,
            s.Xr)(nC)
              , c = (0,
            P.MM)()
              , {getViewState: u} = n_()
              , {windowHeight: x} = (0,
            o.xJ)()
              , [m,p] = (0,
            i.useState)();
            (0,
            i.useEffect)( () => {
                if (t) {
                    let e = u(t);
                    d(e.result),
                    p({
                        text: e.answered,
                        svg: e.svg
                    });
                    return
                }
                return d(void 0),
                () => {
                    d(void 0)
                }
            }
            , [t, u, d]);
            let h = (0,
            i.useCallback)(e => {
                p(e),
                n()
            }
            , [n]);
            return void 0 !== m ? (0,
            r.jsx)(a.A, {
                height: "portrait" === c ? "auto" : x - eT.$A - 18,
                p: 2,
                children: (0,
                r.jsx)(nk, {
                    answerData: m,
                    onAnswered: l
                })
            }) : (0,
            r.jsx)(a.A, {
                height: "portrait" === c ? "auto" : x - eT.$A - 18,
                p: 2,
                children: (0,
                r.jsx)(nN, {
                    onPendingAnswered: h
                })
            })
        }
          , nq = e => {
            let {items: t, style: n} = e
              , s = "他の選択肢"
              , i = 16 * s.length;
            return (0,
            r.jsxs)(d.fI, {
                gap: 2,
                style: n,
                "data-sentry-element": "Row",
                "data-sentry-component": "OtherSelection",
                "data-sentry-source-file": "OtherSelection.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    minWidth: i,
                    display: "flex",
                    alignItems: "center",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "OtherSelection.tsx",
                    children: (0,
                    r.jsx)(l.EY, {
                        color: "onSurfaceWeak1",
                        fontWeight: "bold",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "OtherSelection.tsx",
                        children: s
                    })
                }), (0,
                r.jsx)(Y.A, {
                    orientation: "vertical",
                    variant: "middle",
                    flexItem: !0,
                    sx: {
                        borderColor: c.Tj.onSurfaceWeak3,
                        my: 0
                    },
                    "data-sentry-element": "Divider",
                    "data-sentry-source-file": "OtherSelection.tsx"
                }), (0,
                r.jsx)(d.fI, {
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    "data-sentry-element": "Row",
                    "data-sentry-source-file": "OtherSelection.tsx",
                    children: t.map( (e, t) => (0,
                    r.jsx)(x.qV, {
                        src: e.text,
                        style: {
                            fontSize: 16,
                            color: c.Tj.onSurface,
                            display: "flex",
                            alignItems: "flex-end"
                        }
                    }, t))
                })]
            })
        }
        ;
        var nz = n(2807);
        let nH = e => {
            let {qml: t, mode: n, onClick: a, disabled: s} = e;
            switch (n) {
            case "Active":
                return (0,
                r.jsx)(nK, {
                    qml: t,
                    onClick: a,
                    disabled: s
                });
            case "Correct":
                return (0,
                r.jsx)(nJ, {
                    qml: t,
                    onClick: a
                });
            case "Incorrect":
                return (0,
                r.jsx)(nF, {
                    qml: t,
                    onClick: a
                })
            }
        }
          , nK = e => {
            let {qml: t, onClick: n, disabled: a} = e;
            return (0,
            r.jsx)(nz.A, {
                disabled: a,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: c.Tj.onSurfaceWeak3,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: n,
                "data-sentry-element": "Button",
                "data-sentry-component": "ActiveButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.onSurface
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })
            })
        }
          , nJ = e => {
            let {qml: t} = e;
            return (0,
            r.jsxs)(nz.A, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: c.Tj.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                "data-sentry-element": "Button",
                "data-sentry-component": "CorrectButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "1",
                    left: 8,
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.correct
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })]
            })
        }
          , nF = e => {
            let {qml: t} = e;
            return (0,
            r.jsxs)(nz.A, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: c.Tj.importantWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                "data-sentry-element": "Button",
                "data-sentry-component": "IncorrectButton",
                "data-sentry-source-file": "SelectionButton.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "1",
                    left: 8,
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "SelectionButton.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "SelectionButton.tsx"
                    })
                }), (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.important
                    },
                    weight: "bold",
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "SelectionButton.tsx"
                })]
            })
        }
          , nQ = (0,
        eu.eU)([])
          , nX = (0,
        eu.eU)({
            id: 0,
            text: ""
        })
          , nY = (0,
        eu.eU)(void 0)
          , nU = () => {
            let e = (0,
            s.md)(nQ)
              , t = (0,
            s.md)(nX)
              , n = (0,
            s.md)(nY);
            return n ? (0,
            r.jsx)(nG, {
                selectables: e,
                correct: t,
                answered: n,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            }) : null
        }
          , nG = e => {
            let {selectables: t, correct: n, answered: a} = e
              , s = a.id === n.id ? a : void 0
              , i = a.id !== n.id ? n : void 0
              , l = a.id !== n.id ? a : void 0
              , o = [null == s ? void 0 : s.id, null == i ? void 0 : i.id, null == l ? void 0 : l.id]
              , d = t.filter(e => !o.includes(e.id));
            return (0,
            r.jsxs)(U.V, {
                gap: 2,
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: [s && (0,
                r.jsx)(nH, {
                    qml: s.text,
                    mode: "Correct"
                }), i && (0,
                r.jsx)(nH, {
                    qml: i.text,
                    mode: "Correct"
                }), l && (0,
                r.jsx)(nH, {
                    qml: l.text,
                    mode: "Incorrect"
                }, l.id), 0 !== d.length && (0,
                r.jsx)(nq, {
                    items: d,
                    style: {
                        marginTop: "8px"
                    }
                })]
            })
        }
          , n$ = () => ({
            formatDto: (0,
            i.useCallback)(e => {
                var t;
                let n = null !== (t = e.correctItem) && void 0 !== t ? t : new ey.Q$
                  , r = {
                    id: n.itemId,
                    text: n.text
                }
                  , a = e.itemList.map(e => {
                    let t = (0,
                    tr.u)(e.text);
                    return {
                        id: e.itemId,
                        text: t
                    }
                }
                );
                return e.shouldShuffle && a.sort( () => .5 - Math.random()),
                {
                    selectables: a,
                    correct: r
                }
            }
            , [])
        })
          , nZ = () => ({
            validate: (0,
            i.useCallback)( (e, t) => t.id === e.id ? "correct" : "incorrect", [])
        })
          , n0 = () => ({
            getViewState: (0,
            i.useCallback)(e => (function(e) {
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
          , n1 = e => {
            let t = (0,
            s.md)(nQ)
              , n = (0,
            s.Xr)(nY)
              , [r,a] = (0,
            i.useState)(t[0])
              , [l,o] = (0,
            i.useState)("")
              , [d,c] = (0,
            i.useState)("incorrect")
              , {validate: u} = nZ();
            return {
                prepare: (0,
                i.useCallback)( (t, n, r) => {
                    let s = u(e, t);
                    switch (c(s),
                    a(t),
                    o(t.text),
                    s) {
                    case "correct":
                        n();
                        break;
                    case "incorrect":
                        r()
                    }
                }
                , [e, c, u]),
                fix: (0,
                i.useCallback)(e => {
                    let a = ej.aJ.CORRECT
                      , s = {
                        order: t.map(e => e.id),
                        answered: r.id
                    };
                    n(r),
                    e({
                        answer: {
                            result: a,
                            textType: 2,
                            text: l,
                            wrongCount: 0
                        },
                        viewStateJSON: s
                    })
                }
                , [d, t, r, n, l])
            }
        }
          , n2 = () => {
            let[e,t] = (0,
            i.useState)();
            return {
                showing: e,
                show: (0,
                i.useCallback)(e => t(e), []),
                hide: (0,
                i.useCallback)( () => t(void 0), [])
            }
        }
          , n4 = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(nQ)
              , a = (0,
            s.md)(nX)
              , i = (0,
            P.MM)();
            return (0,
            r.jsx)(n8, {
                selectables: n,
                correct: a,
                orientation: i,
                onAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            })
        }
          , n8 = e => {
            let {selectables: t, correct: n, orientation: s, onAnswered: l} = e
              , [o,c] = (0,
            i.useState)(!1)
              , {prepare: u, fix: x} = n1(n)
              , {showing: m, show: p, hide: h} = n2()
              , g = (0,
            i.useCallback)(e => {
                c(!0),
                u(e, () => p("correct"), () => p("incorrect"))
            }
            , [u, p])
              , y = (0,
            i.useCallback)( () => {
                x(l),
                h()
            }
            , [x, h, l]);
            return (0,
            r.jsxs)(a.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "data-sentry-element": "Box",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsx)(U.V, {
                    width: "100%",
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answering.tsx",
                    children: t.map( (e, n) => (0,
                    r.jsxs)(U.V, {
                        children: [(0,
                        r.jsx)(nH, {
                            qml: e.text,
                            mode: "Active",
                            onClick: () => g(e),
                            disabled: o
                        }), n < t.length - 1 && (0,
                        r.jsx)(d.hK, {
                            y: 2
                        })]
                    }, n))
                }), m && (0,
                r.jsx)(R.zD, {
                    result: m,
                    portalElem: "portrait" === s ? "body" : z.y,
                    handleOnStop: y
                })]
            })
        }
          , n3 = e => {
            let {dto: t, replayResource: n, onAnswered: l} = e
              , o = (0,
            s.Xr)(nQ)
              , d = (0,
            s.Xr)(nX)
              , [c,u] = (0,
            s.fp)(nY)
              , {formatDto: x} = n$()
              , {getViewState: m} = n0();
            return ((0,
            i.useEffect)( () => {
                let {selectables: e, correct: r} = x(t);
                if (n) {
                    let t = m(n);
                    o(t.order.reduce( (t, n) => {
                        let r = e.find(e => e.id === n);
                        return r ? [...t, r] : t
                    }
                    , [])),
                    d(r),
                    u(e.find(e => e.id === t.answered));
                    return
                }
                return o(e),
                d(r),
                u(void 0),
                () => o([])
            }
            , [t, x, m, n, u, d, o]),
            c) ? (0,
            r.jsx)(a.A, {
                padding: 3,
                children: (0,
                r.jsx)(nU, {})
            }) : (0,
            r.jsx)(a.A, {
                padding: 3,
                children: (0,
                r.jsx)(n4, {
                    onAnswered: l
                })
            })
        }
          , n5 = e => {
            let {mode: t, modelAnswer: n, recognitionMode: a} = e;
            switch (t) {
            case "Correct":
                return (0,
                r.jsx)(n6, {
                    modelAnswer: n,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                r.jsx)(n9, {
                    modelAnswer: n,
                    recognitionMode: a
                });
            default:
                return (0,
                r.jsx)(r.Fragment, {})
            }
        }
          , n6 = e => {
            let {modelAnswer: t, recognitionMode: n} = e;
            return (0,
            r.jsx)(r.Fragment, {
                children: "Math" === n ? (0,
                r.jsx)(eD.Of, {
                    style: {
                        fontSize: 20,
                        color: c.Tj.correct,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                r.jsx)(l.EY, {
                    size: "lg",
                    color: "correct",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , n9 = e => {
            let {modelAnswer: t, recognitionMode: n} = e;
            return (0,
            r.jsx)(r.Fragment, {
                children: "Math" === n ? (0,
                r.jsx)(eD.Of, {
                    style: {
                        fontSize: 20,
                        color: c.Tj.important,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                r.jsx)(l.EY, {
                    size: "lg",
                    color: "important",
                    textAlign: "center",
                    children: t
                })
            })
        }
        ;
        var n7 = n(45828);
        let re = e => {
            let {mode: t="Default", answeredText: n, recognitionMode: a} = e;
            switch ((0,
            i.useEffect)( () => {
                (0,
                n7.A)("#fitty", {
                    minSize: 12,
                    maxSize: 20,
                    multiLine: !1
                })
            }
            , []),
            t) {
            case "Default":
                return (0,
                r.jsx)(rt, {
                    answeredText: n,
                    recognitionMode: a
                });
            case "Correct":
                return (0,
                r.jsx)(rn, {
                    answeredText: n,
                    recognitionMode: a
                });
            case "Incorrect":
                return (0,
                r.jsx)(rr, {
                    answeredText: n,
                    recognitionMode: a
                })
            }
        }
          , rt = e => {
            let {answeredText: t, recognitionMode: n} = e;
            return (0,
            r.jsx)(d.VP, {
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(c.Tj.primaryWeak1),
                "data-sentry-element": "Column",
                "data-sentry-component": "Default",
                "data-sentry-source-file": "PreviewText.tsx",
                children: "Math" === n ? (0,
                r.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    r.jsx)(eD.Of, {
                        style: {
                            fontSize: 20,
                            color: c.Tj.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                r.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    r.jsx)(l.EY, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })
            })
        }
          , rn = e => {
            let {answeredText: t, recognitionMode: n} = e;
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(c.Tj.correctWeak),
                "data-sentry-element": "Column",
                "data-sentry-component": "Correct",
                "data-sentry-source-file": "PreviewText.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "PreviewText.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "PreviewText.tsx"
                    })
                }), "Math" === n ? (0,
                r.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    r.jsx)(eD.Of, {
                        style: {
                            fontSize: 20,
                            color: c.Tj.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                r.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    r.jsx)(l.EY, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })]
            })
        }
          , rr = e => {
            let {answeredText: t, recognitionMode: n} = e;
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(c.Tj.importantWeak),
                "data-sentry-element": "Column",
                "data-sentry-component": "Incorrect",
                "data-sentry-source-file": "PreviewText.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "PreviewText.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "PreviewText.tsx"
                    })
                }), "Math" === n ? (0,
                r.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    r.jsx)(eD.Of, {
                        style: {
                            fontSize: 20,
                            color: c.Tj.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                r.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    r.jsx)(l.EY, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })]
            })
        }
          , ra = e => {
            let {mode: t="Default", width: n="100%", answeredText: a, modelAnswer: s, recognitionMode: i} = e;
            switch (t) {
            case "Default":
                return (0,
                r.jsx)(rs, {
                    width: n,
                    answeredText: a,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                r.jsx)(ri, {
                    width: n,
                    answeredText: a,
                    modelAnswer: s,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                r.jsx)(rl, {
                    width: n,
                    answeredText: a,
                    modelAnswer: s,
                    recognitionMode: i
                })
            }
        }
          , rs = e => {
            let {width: t, answeredText: n, recognitionMode: s} = e;
            return (0,
            r.jsx)(a.A, {
                width: t,
                "data-sentry-element": "Box",
                "data-sentry-component": "Default",
                "data-sentry-source-file": "PreviewVertical.tsx",
                children: (0,
                r.jsx)(re, {
                    mode: "Default",
                    answeredText: n,
                    recognitionMode: s,
                    "data-sentry-element": "PreviewText",
                    "data-sentry-source-file": "PreviewVertical.tsx"
                })
            })
        }
          , ri = e => {
            let {width: t, answeredText: n, modelAnswer: s, recognitionMode: i} = e;
            return (0,
            r.jsxs)(a.A, {
                width: t,
                "data-sentry-element": "Box",
                "data-sentry-component": "Correct",
                "data-sentry-source-file": "PreviewVertical.tsx",
                children: [(0,
                r.jsx)(re, {
                    mode: "Correct",
                    answeredText: n,
                    recognitionMode: i,
                    "data-sentry-element": "PreviewText",
                    "data-sentry-source-file": "PreviewVertical.tsx"
                }), (0,
                r.jsx)(d.VP, {
                    height: 72,
                    justifyContent: "center",
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "PreviewVertical.tsx",
                    children: n !== s && (0,
                    r.jsx)(n5, {
                        mode: "Correct",
                        modelAnswer: s,
                        recognitionMode: i
                    })
                })]
            })
        }
          , rl = e => {
            let {width: t, answeredText: n, modelAnswer: s, recognitionMode: i} = e;
            return (0,
            r.jsxs)(a.A, {
                width: t,
                "data-sentry-element": "Box",
                "data-sentry-component": "Incorrect",
                "data-sentry-source-file": "PreviewVertical.tsx",
                children: [(0,
                r.jsx)(re, {
                    mode: "Incorrect",
                    answeredText: n,
                    recognitionMode: i,
                    "data-sentry-element": "PreviewText",
                    "data-sentry-source-file": "PreviewVertical.tsx"
                }), (0,
                r.jsx)(d.VP, {
                    justifyContent: "center",
                    height: 72,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "PreviewVertical.tsx",
                    children: s && (0,
                    r.jsx)(n5, {
                        mode: "Incorrect",
                        modelAnswer: s,
                        recognitionMode: i
                    })
                })]
            })
        }
        ;
        var ro = n(46676);
        let rd = () => {
            let e = (0,
            s.md)(W.bQ);
            return (0,
            i.useMemo)( () => {
                var t;
                let n = null == e ? void 0 : e.contentResource.legacyAnswer.apData;
                if ((null == n ? void 0 : n.case) !== "apHandWrite")
                    return console.error("Invalid SingleWriting state"),
                    {
                        correct: [],
                        modelAnswer: "",
                        gradeId: 0,
                        placeHolder: new ey.ml,
                        replaceType: "none",
                        recognitionConfig: {
                            mode: "Math",
                            useLK: !1,
                            sk: ""
                        }
                    };
                let r = n.value
                  , a = r.correctAnswerList.reduce( (e, t) => {
                    if (!t.option.case || !t.option.value)
                        return e;
                    if ("text" === t.option.case) {
                        let n = (0,
                        ro.fm)(t.option.value);
                        return [...e, {
                            case: "text",
                            value: n = (0,
                            ro.qu)(n)
                        }]
                    }
                    return [...e, t.option]
                }
                , [])
                  , s = r.displayAnswerText
                  , i = {
                    mode: r.interactiveInkSetting ? (0,
                    eD.uy)(r.interactiveInkSetting) : "Math",
                    useLK: r.useLk,
                    sk: r.skNameOptional.value
                };
                return {
                    correct: a,
                    modelAnswer: s,
                    recognitionConfig: i,
                    placeHolder: null !== (t = r.placeHolder) && void 0 !== t ? t : new ey.ml,
                    replaceType: (0,
                    tW.A)(r.replaceType),
                    gradeId: r.gradeId
                }
            }
            , [e])
        }
          , rc = () => {
            let[e,t] = (0,
            i.useState)();
            return {
                showing: e,
                show: (0,
                i.useCallback)(e => t(e), []),
                hide: (0,
                i.useCallback)( () => t(void 0), [])
            }
        }
        ;
        var ru = n(15663)
          , rx = n(73373);
        let rm = () => {
            let e = (0,
            s.md)(W.cS)
              , t = (0,
            i.useCallback)(t => {
                let {mode: n, sk: r, useLK: a} = t
                  , s = "science" === e.code && "Math" === n
                  , i = "science" === e.code && a && "NUMBER_SK" === r;
                return s || i
            }
            , [e]);
            return {
                isSantaScriptTargetQuestion: t,
                convertToRecognitionType: (0,
                i.useCallback)(e => {
                    switch (e) {
                    case "Math":
                        return rx.MB.math;
                    case "English":
                        return rx.MB.english;
                    case "Japanese":
                        return rx.MB.japanese;
                    default:
                        throw Error("Invalid recognition mode: ".concat(e))
                    }
                }
                , []),
                getSubject: (0,
                i.useCallback)( () => {
                    if ([rx.B7.english, rx.B7.literature, rx.B7.math, rx.B7.science, rx.B7.social].includes(e.code))
                        return e.code;
                    if ("qubena_math" === e.code)
                        return rx.B7.math;
                    throw Error("Invalid course code: ".concat(e.code))
                }
                , [e.code]),
                convertToGrade: (0,
                i.useCallback)(e => e <= 6 ? rx.Mz.primary : e <= 9 ? rx.Mz.middle : rx.Mz.high, [])
            }
        }
        ;
        var rp = n(15381);
        let rh = e => {
            let {convertToRecognitionType: t, getSubject: n, convertToGrade: r} = rm()
              , {validate: a} = rx.I9
              , l = (0,
            s.Xr)(rp.TT);
            return {
                validate: (0,
                i.useCallback)(s => {
                    let {correct: i, input: o, gradeId: d} = s
                      , c = a({
                        correct: i,
                        text: o,
                        type: t(e.mode),
                        subject: n(),
                        grade: r(d)
                    });
                    l(c);
                    let {text: u, result: x} = c;
                    return {
                        result: x,
                        replacedText: null != u ? u : ""
                    }
                }
                , [a, t, e.mode, n, r])
            }
        }
          , rg = () => ({
            getViewState: (0,
            i.useCallback)( (e, t) => (function(e, t) {
                let n = JSON.parse(t);
                if (n.viewState)
                    return n.viewState;
                if (n.apViewState) {
                    var r, a;
                    return {
                        answered: (r = n.apViewState).recognizedText,
                        svg: null !== (a = r.svg) && void 0 !== a ? a : ""
                    }
                }
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), [])
        })
          , ry = () => {
            let e = (0,
            s.md)(tR.z)
              , [t,n] = (0,
            i.useState)(0)
              , [r,a] = (0,
            i.useState)()
              , {saveHandwritingAnswerImageToGCS: l} = (0,
            P.bd)();
            return {
                prepare: (0,
                i.useCallback)( (r, s, i, l, o, d, c) => {
                    if (a(r),
                    e) {
                        i();
                        return
                    }
                    if ("empty" === r.result) {
                        c ? d() : s();
                        return
                    }
                    if ("incorrect" === r.result && 0 === t) {
                        n(1),
                        o();
                        return
                    }
                    switch (r.result) {
                    case "correct":
                        l();
                        break;
                    case "incorrect":
                        d()
                    }
                }
                , [e, t]),
                fix: (0,
                i.useCallback)(async e => {
                    if (!r) {
                        console.error("SingleWriting: reservedAnsweredData is undefined");
                        return
                    }
                    let n = ej.aJ.CORRECT
                      , a = {
                        answered: r.text,
                        svg: r.svg
                    }
                      , s = {
                        answer: {
                            result: n,
                            textType: 2,
                            text: r.text,
                            wrongCount: t
                        },
                        viewStateJSON: a
                    }
                      , i = await e(r, s);
                    i && l({
                        answerLogId: i,
                        answerResponse: s
                    })
                }
                , [r, l, t])
            }
        }
          , rf = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => {
                    t(!0)
                }
                , []),
                hide: (0,
                i.useCallback)( () => {
                    t(!1)
                }
                , []),
                visibled: e
            }
        }
          , rw = () => {
            let {correct: e, replaceType: t, gradeId: n} = rd()
              , [r,a] = (0,
            i.useState)({
                text: "",
                result: "empty",
                svg: ""
            })
              , [s,l] = (0,
            i.useState)(!1)
              , [o,d] = (0,
            i.useState)(!1)
              , {validate: c} = (0,
            ru.l)()
              , u = (0,
            i.useCallback)( () => {
                a({
                    text: "",
                    result: "empty",
                    svg: ""
                })
            }
            , [a])
              , x = (0,
            i.useCallback)( () => {
                l(!0)
            }
            , [l]);
            return {
                opened: u,
                recognizing: x,
                recognized: (0,
                i.useCallback)( (r, s) => {
                    let i = c({
                        input: r,
                        correct: e,
                        gradeId: n,
                        replaceType: t
                    });
                    a({
                        text: i.replacedText,
                        result: i.result,
                        svg: s
                    }),
                    l(!1)
                }
                , [c, e, n, t]),
                disconnected: (0,
                i.useCallback)( () => {
                    a({
                        text: "",
                        result: "empty",
                        svg: ""
                    }),
                    d(!0)
                }
                , [a, d]),
                reconnect: (0,
                i.useCallback)( () => {
                    d(!1)
                }
                , [d]),
                answeredData: r,
                isOpenReconnectMessage: o,
                isRecognizing: s
            }
        }
          , rv = () => {
            let[e,t] = (0,
            i.useState)(1)
              , n = (0,
            i.useCallback)( () => {
                t(e - 1)
            }
            , [e])
              , r = (0,
            i.useCallback)( () => {
                t(e + 1)
            }
            , [e]);
            return {
                page: e,
                maxPage: 4,
                back: n,
                forward: r
            }
        }
        ;
        var rj = n(20190);
        let rb = e => {
            let t = (0,
            s.Xr)(rj.y)
              , n = (0,
            s.md)(W.cS)
              , r = (0,
            s.md)(W.bQ)
              , {correct: a, replaceType: l, gradeId: o} = rd()
              , [d,c] = (0,
            i.useState)({
                text: "",
                result: "empty",
                svg: ""
            })
              , [u,x] = (0,
            i.useState)(!1)
              , [m,p] = (0,
            i.useState)(!1)
              , {validate: h} = rh(e)
              , g = (0,
            i.useCallback)( () => {
                c({
                    text: "",
                    result: "empty",
                    svg: ""
                })
            }
            , [c])
              , y = (0,
            i.useCallback)( () => {
                x(!0)
            }
            , [x])
              , f = (0,
            i.useCallback)( (e, n, r) => {
                let s = h({
                    input: e,
                    correct: a,
                    gradeId: o,
                    replaceType: l
                });
                c({
                    text: s.replacedText,
                    result: s.result,
                    svg: n
                }),
                x(!1),
                t(r)
            }
            , [h, a, o, l, c, x, t]);
            return {
                opened: g,
                recognizing: y,
                recognized: f,
                recognizedError: (0,
                i.useCallback)( () => {
                    p(!0)
                }
                , [p]),
                reconnect: (0,
                i.useCallback)( () => {
                    p(!1)
                }
                , [p]),
                answeredData: d,
                isOpenReconnectMessage: m,
                isRecognizing: u,
                appendix: (0,
                i.useMemo)( () => {
                    var e;
                    return {
                        programId: null !== (e = null == r ? void 0 : r.id) && void 0 !== e ? e : 0,
                        courseCode: n.code,
                        replaceType: l
                    }
                }
                , [n.code, null == r ? void 0 : r.id, l])
            }
        }
          , rS = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => {
                    t(!0)
                }
                , []),
                hide: (0,
                i.useCallback)( () => {
                    t(!1)
                }
                , []),
                visibled: e
            }
        }
          , rA = e => {
            let {answered: t} = e
              , n = (0,
            P.MM)()
              , {modelAnswer: a, placeHolder: s, recognitionConfig: i} = rd();
            return (0,
            r.jsx)(rC, {
                modelAnswer: a,
                answered: t,
                placeHolder: s,
                svg: t.svg,
                orientation: n,
                recognitionConfig: i,
                validationResult: "empty",
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            })
        }
          , rC = e => {
            let {answered: t, modelAnswer: n, placeHolder: s, svg: i, orientation: l, recognitionConfig: o} = e
              , c = "correct" === t.result;
            return (0,
            r.jsx)(d.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: "portrait" === l ? (0,
                r.jsxs)(a.A, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    r.jsx)(eD.kI, {
                        mode: c ? "Correct" : "Incorrect",
                        prefixLabel: s.label,
                        suffixLabel: s.suffix,
                        useLatexInLabel: s.useLatexInLabel,
                        useLatexInSuffix: s.useLatexInSuffix,
                        children: (0,
                        r.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: i
                            }
                        })
                    }), (0,
                    r.jsxs)(d.fI, {
                        columnGap: 3,
                        marginTop: 2,
                        children: [(0,
                        r.jsx)(d.hK, {
                            x: 4
                        }), (0,
                        r.jsx)(ra, {
                            mode: c ? "Correct" : "Incorrect",
                            width: 368,
                            answeredText: t.text,
                            modelAnswer: t.text !== n ? n : void 0,
                            recognitionMode: null == o ? void 0 : o.mode
                        })]
                    })]
                }) : (0,
                r.jsxs)(a.A, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    r.jsx)(eD.kI, {
                        mode: c ? "Correct" : "Incorrect",
                        prefixLabel: s.label,
                        suffixLabel: s.suffix,
                        useLatexInLabel: s.useLatexInLabel,
                        useLatexInSuffix: s.useLatexInSuffix,
                        children: (0,
                        r.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: i
                            }
                        })
                    }), (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        rowGap: 3,
                        children: [(0,
                        r.jsx)(d.hK, {
                            y: 3
                        }), (0,
                        r.jsx)(ra, {
                            mode: c ? "Correct" : "Incorrect",
                            width: 368,
                            answeredText: t.text,
                            modelAnswer: t.text !== n ? n : void 0,
                            recognitionMode: null == o ? void 0 : o.mode
                        })]
                    })]
                })
            })
        }
          , rk = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(W.HK)
              , a = (0,
            P.MM)()
              , {recognitionConfig: i, placeHolder: l} = rd();
            return i ? (0,
            r.jsx)(rI, {
                recognitionConfig: i,
                placeHolder: l,
                orientation: a,
                selectedTool: n,
                onAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "AnsweringMS",
                "data-sentry-source-file": "AnsweringMS.tsx"
            }) : null
        }
          , rI = e => {
            let {recognitionConfig: t, placeHolder: n, orientation: c, selectedTool: u, onAnswered: x} = e
              , m = (0,
            s.Xr)(tR.z)
              , p = (0,
            i.useRef)(null)
              , {elementRef: h, elementSize: g} = (0,
            o.wY)()
              , {opened: y, recognizing: f, recognized: w, disconnected: v, reconnect: j, answeredData: b, isOpenReconnectMessage: S, isRecognizing: A} = rw()
              , {show: C, hide: k, visibled: I} = rS()
              , {show: T, hide: M, visibled: B} = rf()
              , {page: _, maxPage: E, back: P, forward: W} = rv()
              , {prepare: L, fix: N} = ry()
              , {showing: O, show: V, hide: D} = rc()
              , {onPointerDown: q, onPointerUp: H} = (0,
            eD.$D)()
              , K = (0,
            i.useCallback)( () => {
                f(),
                q()
            }
            , [f])
              , J = (0,
            i.useCallback)( (e, t) => {
                w(e, t),
                H()
            }
            , [w])
              , F = (0,
            i.useCallback)(e => {
                L(b, C, T, () => V("correct"), () => V("redo"), () => V("incorrect"), e)
            }
            , [b, L, C, T, V])
              , Q = (0,
            i.useCallback)( () => F(!1), [F])
              , X = (0,
            i.useCallback)( () => {
                N(x),
                D()
            }
            , [N, D, x])
              , Y = (0,
            i.useCallback)( () => {
                m(!1),
                M(),
                Q()
            }
            , [M, m, Q])
              , U = (0,
            i.useCallback)( () => {
                k(),
                F(!0)
            }
            , [k, F]);
            (0,
            i.useEffect)( () => {
                var e, t, n;
                p.current && h.current && (null === (n = p.current) || void 0 === n || null === (t = n.editor) || void 0 === t || null === (e = t.resize) || void 0 === e || e.call(t),
                1 === _ ? h.current.scrollLeft = 0 : h.current.scrollLeft = .8 * g.width * (_ - 1))
            }
            , [g.width, _, h]);
            let G = A || S || void 0 !== O
              , $ = g.width + .8 * g.width * (E - 1)
              , Z = "portrait" === c;
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "AnsweringMS.tsx",
                children: [(0,
                r.jsxs)(a.A, {
                    width: "100%",
                    maxWidth: 784,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "AnsweringMS.tsx",
                    children: [(0,
                    r.jsx)(eD.kI, {
                        ref: h,
                        mode: "Slider",
                        page: _,
                        maxPage: E,
                        prefixLabel: n.label,
                        suffixLabel: n.suffix,
                        useLatexInLabel: n.useLatexInLabel,
                        useLatexInSuffix: n.useLatexInSuffix,
                        onClickLeft: P,
                        onClickRight: W,
                        "data-sentry-element": "WritingArea",
                        "data-sentry-source-file": "AnsweringMS.tsx",
                        children: !S && (0,
                        r.jsx)(tX, {
                            ref: p,
                            width: $,
                            height: 240,
                            mode: "eraser" === u ? "eraser" : "pen",
                            recognitionConfig: t,
                            onOpened: y,
                            onRecognizing: K,
                            onRecognized: J,
                            onDisconnected: v
                        })
                    }), Z ? (0,
                    r.jsxs)(d.fI, {
                        marginTop: 2,
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: [(0,
                        r.jsx)(a.A, {
                            sx: {
                                marginLeft: "54px"
                            },
                            children: (0,
                            r.jsx)(ra, {
                                width: 368,
                                answeredText: b.text,
                                recognitionMode: t.mode
                            })
                        }), (0,
                        r.jsx)(l.yh, {
                            text: "解答する",
                            disabled: G,
                            onClick: Q
                        })]
                    }) : (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        children: [(0,
                        r.jsx)(d.hK, {
                            y: 3
                        }), (0,
                        r.jsx)(ra, {
                            width: 368,
                            answeredText: b.text,
                            recognitionMode: t.mode
                        }), (0,
                        r.jsx)(d.hK, {
                            y: 3
                        }), (0,
                        r.jsx)(a.A, {
                            alignSelf: "end",
                            children: (0,
                            r.jsx)(l.yh, {
                                text: "解答する",
                                disabled: G,
                                onClick: Q
                            })
                        })]
                    })]
                }), O && (0,
                r.jsx)(R.zD, {
                    result: O,
                    portalElem: Z ? "body" : z.y,
                    handleOnStop: "redo" === O ? D : X
                }), (0,
                r.jsx)(eD.Ml, {
                    isOpen: I,
                    onClickAnswer: U,
                    onClickCancel: k,
                    "data-sentry-element": "EmptyAnswerDialog",
                    "data-sentry-source-file": "AnsweringMS.tsx"
                }), (0,
                r.jsx)(eD.Og, {
                    isOpen: B,
                    title: "文字を読みとれませんでした",
                    onClickCancel: M,
                    onClickContinue: Y,
                    onClose: M,
                    "data-sentry-element": "KatexErrorDialog",
                    "data-sentry-source-file": "AnsweringMS.tsx"
                }), (0,
                r.jsx)(eD.Xn, {
                    isOpen: S,
                    y: Z ? 96 : 24,
                    onClick: j,
                    "data-sentry-element": "ReconnectMessage",
                    "data-sentry-source-file": "AnsweringMS.tsx"
                })]
            })
        }
        ;
        var rT = n(59205);
        let rM = e => {
            let {useLK: t, sk: n, mode: r} = e;
            if (t && n)
                switch (n) {
                case "NUMBER_SK":
                    return "number_sk";
                case "ALPHABET_SK":
                    return "alphabet_sk";
                case "HIRAGANA_SK":
                    return "hiragana_sk";
                case "KATAKANA_SK":
                    return "katakana_sk"
                }
            switch (r) {
            case "Japanese":
                return "japanese";
            case "English":
                return "english";
            case "Math":
                return "math"
            }
        }
          , rB = (0,
        i.forwardRef)( (e, t) => {
            let {width: n, height: s, editorStyle: l, apiUrl: o, mode: d, recognitionConfig: c, onOpened: u, onRecognizing: x, onRecognized: m, onRecognizedError: p, appendix: h, isOpenReconnectMessage: g} = e
              , y = (0,
            i.useRef)(null)
              , f = (0,
            i.useCallback)(e => {
                let {data: t, errors: n} = e;
                if (n) {
                    null == p || p(n);
                    return
                }
                null == m || m(t)
            }
            , [p, m]);
            return (0,
            i.useEffect)( () => {
                var e;
                let n = null == t ? void 0 : t.current;
                if (!n)
                    throw Error("Mount element not found");
                let r = rM(c)
                  , a = rT.K.create(n, {
                    fill: !0,
                    style: l,
                    model: r,
                    apiUrl: o,
                    program: {
                        programId: null !== (e = null == h ? void 0 : h.programId) && void 0 !== e ? e : 0,
                        courseCode: null == h ? void 0 : h.courseCode
                    },
                    recognizerOptions: {
                        debug: !1
                    },
                    autoRecognition: !0
                });
                return a.addRecognitionResultListener(f),
                a.addStrokeStartListener(x),
                y.current = a,
                null == u || u(),
                () => {
                    var e;
                    null === (e = y.current) || void 0 === e || e.cleanupListeners()
                }
            }
            , []),
            (0,
            i.useEffect)( () => {
                var e;
                null === (e = y.current) || void 0 === e || e.setPointerType(d)
            }
            , [d]),
            (0,
            i.useEffect)( () => {
                var e;
                g || null === (e = y.current) || void 0 === e || e.recognize()
            }
            , [g]),
            (0,
            r.jsx)(a.A, {
                ref: t,
                sx: {
                    width: n,
                    height: s
                }
            })
        }
        );
        rB.displayName = "SantaScriptRecognizer";
        var r_ = n(65606);
        let rE = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(W.HK)
              , a = (0,
            P.MM)()
              , {recognitionConfig: i, placeHolder: l} = rd();
            return i ? (0,
            r.jsx)(rR, {
                recognitionConfig: i,
                placeHolder: l,
                orientation: a,
                selectedTool: n,
                onAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "AnsweringSS",
                "data-sentry-source-file": "AnsweringSS.tsx"
            }) : null
        }
          , rR = e => {
            let {recognitionConfig: t, placeHolder: n, orientation: c, selectedTool: u, onAnswered: x} = e
              , m = (0,
            s.Xr)(tR.z)
              , p = (0,
            i.useRef)(null)
              , {elementRef: h, elementSize: g} = (0,
            o.wY)()
              , {opened: y, recognizing: f, recognized: w, recognizedError: v, reconnect: j, answeredData: b, isOpenReconnectMessage: S, isRecognizing: A, appendix: C} = rb(t)
              , {show: k, hide: I, visibled: T} = rS()
              , {show: M, hide: B, visibled: _} = rf()
              , {page: E, maxPage: P, back: W, forward: L} = rv()
              , {prepare: N, fix: O} = ry()
              , {showing: V, show: D, hide: q} = rc()
              , H = (0,
            i.useCallback)(e => {
                N(b, k, M, () => D("correct"), () => D("redo"), () => D("incorrect"), e)
            }
            , [b, N, k, M, D])
              , K = (0,
            i.useCallback)( () => H(!1), [H])
              , J = (0,
            i.useCallback)( () => {
                O(x),
                q()
            }
            , [O, q, x])
              , F = (0,
            i.useCallback)( () => {
                m(!1),
                B(),
                K()
            }
            , [B, m, K])
              , Q = (0,
            i.useCallback)( () => {
                I(),
                H(!0)
            }
            , [I, H]);
            (0,
            i.useEffect)( () => {
                var e, t, n;
                p.current && h.current && (null === (n = p.current) || void 0 === n || null === (t = n.editor) || void 0 === t || null === (e = t.resize) || void 0 === e || e.call(t),
                1 === E ? h.current.scrollLeft = 0 : h.current.scrollLeft = .8 * g.width * (E - 1))
            }
            , [g.width, E, h]);
            let X = A || S || void 0 !== V
              , Y = g.width + .8 * g.width * (P - 1)
              , U = "portrait" === c
              , G = (0,
            i.useCallback)(e => {
                let {tokenResult: t, svgSnapshot: n, ...r} = e
                  , a = {
                    tokenResult: t,
                    ...r
                };
                null == w || w(t, n, a)
            }
            , [w]);
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "AnsweringSS.tsx",
                children: [(0,
                r.jsxs)(a.A, {
                    width: "100%",
                    maxWidth: 784,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "AnsweringSS.tsx",
                    children: [(0,
                    r.jsx)(eD.kI, {
                        ref: h,
                        mode: "Slider",
                        page: E,
                        maxPage: P,
                        prefixLabel: n.label,
                        suffixLabel: n.suffix,
                        useLatexInLabel: n.useLatexInLabel,
                        useLatexInSuffix: n.useLatexInSuffix,
                        onClickLeft: W,
                        onClickRight: L,
                        "data-sentry-element": "WritingArea",
                        "data-sentry-source-file": "AnsweringSS.tsx",
                        children: (0,
                        r.jsx)(rB, {
                            ref: p,
                            width: Y,
                            height: 240,
                            mode: "eraser" === u ? "eraser" : "pen",
                            apiUrl: r_.env.NEXT_PUBLIC_SANTASCRIPT_API_URL,
                            recognitionConfig: t,
                            onOpened: y,
                            onRecognizing: f,
                            onRecognized: G,
                            onRecognizedError: v,
                            appendix: C,
                            isOpenReconnectMessage: S,
                            "data-sentry-element": "SantaScriptRecognizer",
                            "data-sentry-source-file": "AnsweringSS.tsx"
                        })
                    }), U ? (0,
                    r.jsxs)(d.fI, {
                        marginTop: 2,
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: [(0,
                        r.jsx)(a.A, {
                            sx: {
                                marginLeft: "54px"
                            },
                            children: (0,
                            r.jsx)(ra, {
                                width: 368,
                                answeredText: b.text,
                                recognitionMode: t.mode
                            })
                        }), (0,
                        r.jsx)(l.yh, {
                            text: "解答する",
                            disabled: X,
                            onClick: K
                        })]
                    }) : (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        children: [(0,
                        r.jsx)(d.hK, {
                            y: 3
                        }), (0,
                        r.jsx)(ra, {
                            width: 368,
                            answeredText: b.text,
                            recognitionMode: t.mode
                        }), (0,
                        r.jsx)(d.hK, {
                            y: 3
                        }), (0,
                        r.jsx)(a.A, {
                            alignSelf: "end",
                            children: (0,
                            r.jsx)(l.yh, {
                                text: "解答する",
                                disabled: X,
                                onClick: K
                            })
                        })]
                    })]
                }), V && (0,
                r.jsx)(R.zD, {
                    result: V,
                    portalElem: U ? "body" : z.y,
                    handleOnStop: "redo" === V ? q : J
                }), (0,
                r.jsx)(eD.Ml, {
                    isOpen: T,
                    onClickAnswer: Q,
                    onClickCancel: I,
                    "data-sentry-element": "EmptyAnswerDialog",
                    "data-sentry-source-file": "AnsweringSS.tsx"
                }), (0,
                r.jsx)(eD.Og, {
                    isOpen: _,
                    title: "文字を読みとれませんでした",
                    onClickCancel: B,
                    onClickContinue: F,
                    onClose: B,
                    "data-sentry-element": "KatexErrorDialog",
                    "data-sentry-source-file": "AnsweringSS.tsx"
                }), (0,
                r.jsx)(eD.Xn, {
                    isOpen: S,
                    y: U ? 96 : 24,
                    onClick: j,
                    "data-sentry-element": "ReconnectMessage",
                    "data-sentry-source-file": "AnsweringSS.tsx"
                })]
            })
        }
          , rP = e => {
            let {onAnswered: t} = e
              , {recognitionConfig: n} = rd()
              , {isSantaScriptTargetQuestion: a} = rm();
            return n ? a(n) ? (0,
            r.jsx)(rE, {
                onAnswered: t,
                "data-sentry-element": "AnsweringSS",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            }) : (0,
            r.jsx)(rk, {
                onAnswered: t,
                "data-sentry-element": "AnsweringMS",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            }) : null
        }
          , rW = e => {
            let {dto: t, replayResource: n, onAnswered: s} = e
              , [l,o] = (0,
            i.useState)()
              , d = (0,
            P.MM)()
              , {correct: c} = rd()
              , {getViewState: u} = rg();
            (0,
            i.useEffect)( () => {
                if (n) {
                    let e = u(t, n);
                    o({
                        text: e.answered,
                        result: c.some(t => t.value === e.answered) ? "correct" : "incorrect",
                        svg: e.svg
                    })
                }
            }
            , [t, n, o, u, c]);
            let x = (0,
            i.useCallback)(async (e, t) => (o(e),
            s(t)), [s]);
            return void 0 !== l ? (0,
            r.jsx)(a.A, {
                pt: 2,
                pb: "portrait" === d ? 2 : 12,
                px: 2,
                children: (0,
                r.jsx)(rA, {
                    answered: l
                })
            }) : (0,
            r.jsx)(a.A, {
                p: 2,
                children: (0,
                r.jsx)(rP, {
                    onAnswered: x
                })
            })
        }
          , rL = e => {
            let {placeHolder: t, modelAnswer: n, correct: a, answered: s} = e
              , i = a.find(e => "text" === e.case ? e.value === s : new RegExp(e.value).test(s));
            return (0,
            r.jsx)(d.VP, {
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredKeyboard",
                "data-sentry-source-file": "AnsweredKeyboard.tsx",
                children: i ? (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(R.nV, {
                        mode: "Correct",
                        value: s,
                        placeHolder: t
                    }), s !== n && (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(d.hK, {
                            y: 1
                        }), (0,
                        r.jsx)(eP, {
                            text: n || ""
                        })]
                    })]
                }) : (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(R.nV, {
                        mode: "Incorrect",
                        value: s,
                        placeHolder: t
                    }), (0,
                    r.jsx)(d.hK, {
                        y: 1
                    }), (0,
                    r.jsx)(eW, {
                        text: n || ""
                    })]
                })
            })
        }
        ;
        var rN = n(63330)
          , rO = n(93208);
        let rV = (0,
        eu.eU)([])
          , rD = (0,
        eu.eU)(!1)
          , rq = e => {
            let {data: t} = e
              , n = (0,
            s.Xr)(rV)
              , [a,l] = (0,
            i.useState)("");
            return (0,
            r.jsx)(rz, {
                mode: "Default",
                value: a,
                placeHolder: t.placeHolder,
                selectables: t.selectables,
                onChange: e => {
                    let r = t.selectables.find(t => t.id === Number(e));
                    n(e => e.map(e => e.id === t.id ? {
                        ...t,
                        answered: r
                    } : e)),
                    l(e)
                }
                ,
                "data-sentry-element": "SelectionView",
                "data-sentry-component": "Selection",
                "data-sentry-source-file": "Selection.tsx"
            })
        }
          , rz = e => {
            let {mode: t, value: n, placeHolder: a, selectables: s, onChange: l} = e
              , o = (0,
            i.useId)()
              , d = s.map(e => ({
                label: e.text,
                value: 0 !== e.id ? String(e.id) : void 0
            }))
              , c = (0,
            r.jsx)(rQ, {
                text: a.useLatexInLabel ? "<math>".concat(a.label, "</math>") : a.label
            })
              , u = a.useLatexInSuffix ? "<math>".concat(a.suffix, "</math>") : a.suffix;
            switch (t) {
            case "Default":
                return (0,
                r.jsx)(rK, {
                    id: o,
                    value: n,
                    label: c,
                    suffix: u,
                    menuList: d,
                    onChange: l
                });
            case "Correct":
                return (0,
                r.jsx)(rJ, {
                    id: o,
                    value: n,
                    label: c,
                    suffix: u,
                    menuList: d
                });
            case "Incorrect":
                return (0,
                r.jsx)(rF, {
                    id: o,
                    value: n,
                    label: c,
                    suffix: u,
                    menuList: d
                })
            }
        }
          , rH = {
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
                color: c.Tj.onSurface
            },
            ".Mui-disabled.MuiOutlinedInput-input": {
                color: c.Tj.onSurface,
                WebkitTextFillColor: c.Tj.onSurface
            },
            ".Mui-disabled:hover": {
                background: "inherit"
            },
            ".MuiSelect-iconOutlined": {
                position: "static"
            },
            ".Mui-disabled.MuiSelect-iconOutlined": {
                color: c.Tj.onSurfaceWeak1
            }
        }
          , rK = e => {
            let {id: t, value: n, label: a, suffix: s, menuList: i, onChange: l} = e;
            return (0,
            r.jsx)(R.A_, {
                id: t,
                name: t,
                size: "small",
                fullWidth: !0,
                multiline: !0,
                label: a,
                value: n,
                select: !0,
                onChange: l,
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
                InputProps: (null == s ? void 0 : s.length) ? {
                    endAdornment: (0,
                    r.jsx)(rX, {
                        text: s
                    })
                } : void 0,
                "data-sentry-element": "TextField",
                "data-sentry-component": "DefaultSelect",
                "data-sentry-source-file": "Selection.tsx",
                children: i.map(e => (0,
                r.jsx)(rN.A, {
                    value: e.value,
                    sx: {
                        height: 48
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.label,
                        style: {
                            fontSize: 20,
                            color: c.Tj.onSurface
                        }
                    })
                }, e.value))
            })
        }
          , rJ = e => {
            let {id: t, value: n, label: s, suffix: i, menuList: o} = e;
            return (0,
            r.jsxs)(a.A, {
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "CorrectSelect",
                "data-sentry-source-file": "Selection.tsx",
                children: [(0,
                r.jsx)(R.A_, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    label: s,
                    value: n,
                    select: !0,
                    disabled: !0,
                    sx: {
                        ...rH,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: c.Tj.correctWeak
                        }
                    },
                    InputProps: (null == i ? void 0 : i.length) ? {
                        endAdornment: (0,
                        r.jsx)(rX, {
                            text: i
                        })
                    } : void 0,
                    "data-sentry-element": "TextField",
                    "data-sentry-source-file": "Selection.tsx",
                    children: o.map(e => (0,
                    r.jsx)(rN.A, {
                        value: e.value,
                        sx: {
                            height: 48
                        },
                        children: (0,
                        r.jsx)(x.qV, {
                            src: e.label,
                            style: {
                                fontSize: 20,
                                color: c.Tj.onSurface
                            }
                        })
                    }, e.value))
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    margin: "auto",
                    width: "48px",
                    height: "48px",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Selection.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionO",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "Selection.tsx"
                    })
                })]
            })
        }
          , rF = e => {
            let {id: t, value: n, label: s, suffix: i, menuList: o} = e;
            return (0,
            r.jsxs)(a.A, {
                position: "relative",
                "data-sentry-element": "Box",
                "data-sentry-component": "IncorrectSelect",
                "data-sentry-source-file": "Selection.tsx",
                children: [(0,
                r.jsx)(R.A_, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    label: s,
                    value: n,
                    select: !0,
                    disabled: !0,
                    sx: {
                        ...rH,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: c.Tj.importantWeak
                        }
                    },
                    InputProps: (null == i ? void 0 : i.length) ? {
                        endAdornment: (0,
                        r.jsx)(rX, {
                            text: i
                        })
                    } : void 0,
                    "data-sentry-element": "TextField",
                    "data-sentry-source-file": "Selection.tsx",
                    children: o.map(e => (0,
                    r.jsx)(rN.A, {
                        value: e.value,
                        sx: {
                            height: 48
                        },
                        children: (0,
                        r.jsx)(x.qV, {
                            src: e.label,
                            style: {
                                fontSize: 20,
                                color: c.Tj.onSurface
                            }
                        })
                    }, e.value))
                }), (0,
                r.jsx)(a.A, {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    margin: "auto",
                    width: "48px",
                    height: "48px",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Selection.tsx",
                    children: (0,
                    r.jsx)(l._n, {
                        name: "correctionX",
                        width: 48,
                        height: 48,
                        "data-sentry-element": "SvgImage",
                        "data-sentry-source-file": "Selection.tsx"
                    })
                })]
            })
        }
          , rQ = e => {
            let {text: t} = e;
            return (0,
            r.jsx)(x.qV, {
                src: t,
                style: {
                    fontSize: 20,
                    color: c.Tj.onSurfaceWeak2
                },
                "data-sentry-element": "InlineQML",
                "data-sentry-component": "Label",
                "data-sentry-source-file": "Selection.tsx"
            })
        }
          , rX = e => {
            let {text: t} = e;
            return (0,
            r.jsx)(rO.A, {
                position: "end",
                sx: {
                    alignSelf: "end",
                    height: "inherit",
                    marginBottom: 1.5
                },
                "data-sentry-element": "InputAdornment",
                "data-sentry-component": "Suffix",
                "data-sentry-source-file": "Selection.tsx",
                children: (0,
                r.jsx)(x.qV, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: c.Tj.onSurfaceWeak2
                    },
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "Selection.tsx"
                })
            })
        }
          , rY = e => {
            var t;
            let {placeHolder: n, selectables: a, correct: s, answered: i} = e
              , l = s.id === i
              , o = null !== (t = null == i ? void 0 : i.toString()) && void 0 !== t ? t : "";
            return l ? (0,
            r.jsx)(rz, {
                mode: "Correct",
                value: o,
                placeHolder: n,
                selectables: a,
                "data-sentry-element": "SelectionView",
                "data-sentry-component": "AnsweredSelection",
                "data-sentry-source-file": "AnsweredSelection.tsx"
            }) : (0,
            r.jsxs)(d.VP, {
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredSelection",
                "data-sentry-source-file": "AnsweredSelection.tsx",
                children: [(0,
                r.jsx)(rz, {
                    mode: "Incorrect",
                    value: o,
                    placeHolder: n,
                    selectables: a,
                    "data-sentry-element": "SelectionView",
                    "data-sentry-source-file": "AnsweredSelection.tsx"
                }), (0,
                r.jsx)(d.hK, {
                    y: 1,
                    "data-sentry-element": "Spacer",
                    "data-sentry-source-file": "AnsweredSelection.tsx"
                }), (0,
                r.jsx)(x.qV, {
                    src: s.text,
                    style: {
                        fontSize: 20,
                        color: c.Tj.important,
                        padding: "0 24px",
                        wordWrap: "break-word"
                    },
                    "data-sentry-element": "InlineQML",
                    "data-sentry-source-file": "AnsweredSelection.tsx"
                })]
            })
        }
          , rU = () => {
            let e = (0,
            s.md)(rV)
              , t = (0,
            P.MM)();
            return e ? (0,
            r.jsx)(rG, {
                apData: e,
                orientation: t,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            }) : null
        }
          , rG = e => {
            let {apData: t, orientation: n} = e;
            return (0,
            r.jsx)(d.VP, {
                width: "100%",
                px: 4,
                gap: 3,
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: t.map( (e, s) => {
                    var i, l;
                    switch (e.case) {
                    case "apSelection":
                        return (0,
                        r.jsx)(a.A, {
                            minHeight: "landscape" === n && s === t.length - 1 ? 114 : void 0,
                            children: (0,
                            r.jsx)(rY, {
                                placeHolder: e.placeHolder,
                                selectables: e.selectables,
                                correct: e.correct,
                                answered: null === (i = e.answered) || void 0 === i ? void 0 : i.id
                            }, e.id)
                        }, e.id);
                    case "apKeyboardWrite":
                        return (0,
                        r.jsx)(a.A, {
                            minHeight: "landscape" === n && s === t.length - 1 ? 114 : void 0,
                            children: (0,
                            r.jsx)(rL, {
                                ...e,
                                answered: null !== (l = e.answered) && void 0 !== l ? l : "",
                                modelAnswer: e.modelAnswer
                            }, e.id)
                        }, e.id);
                    default:
                        return (0,
                        r.jsx)(r.Fragment, {})
                    }
                }
                )
            })
        }
          , r$ = () => {
            let {convertInputToAnswerText: e} = (0,
            P.xC)();
            return {
                formatDto: (0,
                i.useCallback)(t => ({
                    apData: t.childAnswerList.reduce( (t, n, r) => {
                        switch (n.apData.case) {
                        case "apSelection":
                            {
                                let {placeHolder: e, selectables: a, correctItem: s} = function(e) {
                                    var t, n;
                                    let r = null !== (t = e.placeHolder) && void 0 !== t ? t : new ey.ml
                                      , a = e.itemList.map(e => ({
                                        id: e.itemId,
                                        text: e.text
                                    }));
                                    return e.shouldShuffle && a.sort( () => .5 - Math.random()),
                                    {
                                        placeHolder: r,
                                        selectables: a,
                                        correctItem: null !== (n = e.correctItem) && void 0 !== n ? n : new ey.Q$
                                    }
                                }(n.apData.value);
                                return [...t, {
                                    id: r,
                                    case: "apSelection",
                                    placeHolder: e,
                                    selectables: [{
                                        id: 0,
                                        text: ""
                                    }, ...a],
                                    correct: {
                                        id: s.itemId,
                                        text: s.text
                                    },
                                    answered: void 0
                                }]
                            }
                        case "apKeyboardWrite":
                            {
                                let a = n.apData.value
                                  , {placeHolder: s, correct: i} = function(t) {
                                    var n;
                                    return {
                                        placeHolder: null !== (n = t.placeHolder) && void 0 !== n ? n : new ey.ml,
                                        correct: t.correctAnswerList.reduce( (t, n) => n.option.case && n.option.value ? "text" === n.option.case ? [...t, {
                                            case: "text",
                                            value: e(n.option.value)
                                        }] : [...t, n.option] : t, [])
                                    }
                                }(a);
                                return [...t, {
                                    id: r,
                                    case: "apKeyboardWrite",
                                    placeHolder: s,
                                    modelAnswer: a.displayAnswerText,
                                    correct: i,
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
          , rZ = () => {
            let[e,t] = (0,
            i.useState)();
            return {
                showing: e,
                show: (0,
                i.useCallback)(e => t(e), []),
                hide: (0,
                i.useCallback)( () => t(void 0), [])
            }
        }
          , r0 = () => {
            let[e,t] = (0,
            s.fp)(rV)
              , {convertInputToAnswerText: n} = (0,
            P.xC)()
              , r = (0,
            i.useCallback)(e => e.answered ? e.answered.id === e.correct.id ? "correct" : "incorrect" : "empty", [])
              , a = (0,
            i.useCallback)(r => {
                if (!r.answered)
                    return "empty";
                if (r.answered.length > 300)
                    return "overflow";
                let a = n(r.answered);
                return t(e.map(e => e.id === r.id ? {
                    ...r,
                    answered: a
                } : e)),
                r.correct.find(e => "text" === e.case ? e.value === a : new RegExp(e.value).test(a)) ? "correct" : "incorrect"
            }
            , [e, n, t]);
            return {
                validate: (0,
                i.useCallback)(e => {
                    let t = e.map(e => "apSelection" === e.case ? r(e) : a(e));
                    return t.includes("overflow") ? "overflow" : t.includes("empty") ? "empty" : t.every(e => "correct" === e) ? "correct" : "incorrect"
                }
                , [a, r])
            }
        }
          , r1 = () => ({
            getViewState: (0,
            i.useCallback)( (e, t) => (function(e, t) {
                let n = JSON.parse(t);
                if (n.viewState)
                    return n.viewState;
                if (n.apViewState) {
                    var r;
                    return r = n.apViewState,
                    {
                        answered: e.childAnswerList.reduce( (e, t, n) => {
                            switch (t.apData.case) {
                            case "apSelection":
                                {
                                    let {selectables: a} = {
                                        selectables: t.apData.value.itemList.map(e => ({
                                            id: e.itemId,
                                            text: e.text
                                        }))
                                    }
                                      , s = a.find(e => {
                                        var t;
                                        return e.text === (null === (t = r.texts) || void 0 === t ? void 0 : t[n])
                                    }
                                    );
                                    return [...e, {
                                        type: "selection",
                                        id: s ? s.id : 0
                                    }]
                                }
                            case "apKeyboardWrite":
                                return [...e, {
                                    type: "keyboard",
                                    value: r.texts ? r.texts[n] : ""
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
          , r2 = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => t(!0), []),
                hide: (0,
                i.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , r4 = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => t(!0), []),
                hide: (0,
                i.useCallback)( () => t(!1), []),
                visibled: e
            }
        }
          , r8 = () => {
            let e = (0,
            s.Xr)(rD)
              , t = (0,
            s.md)(rV)
              , [n,r] = (0,
            i.useState)(0)
              , [a,l] = (0,
            i.useState)("incorrect")
              , {validate: o} = r0();
            return {
                prepare: (0,
                i.useCallback)( (e, a, s, i, d, c) => {
                    let u = o(t);
                    if ("overflow" === u) {
                        e();
                        return
                    }
                    if ("empty" === u) {
                        c ? d() : a();
                        return
                    }
                    if ("incorrect" === u && 0 === n) {
                        r(1),
                        i();
                        return
                    }
                    switch (u) {
                    case "correct":
                        s();
                        break;
                    case "incorrect":
                        d()
                    }
                    l(u)
                }
                , [t, o, n]),
                fix: (0,
                i.useCallback)(r => {
                    let s = ej.aJ.CORRECT
                      , i = t.map(e => {
                        var t;
                        let n = "apSelection" === e.case ? null === (t = e.answered) || void 0 === t ? void 0 : t.text : e.answered;
                        return null != n ? n : ""
                    }
                    )
                      , l = {
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
                    r({
                        answer: {
                            result: s,
                            textType: 2,
                            text: "".concat(i),
                            wrongCount: n
                        },
                        viewStateJSON: l
                    })
                }
                , [t, e, a, n])
            }
        }
          , r3 = () => {
            let e = (0,
            s.Xr)(rV)
              , [t,n] = (0,
            i.useState)([])
              , {convertInputToAnswerText: r} = (0,
            P.xC)()
              , a = (e, t) => {
                n(n => -1 === n.findIndex(t => t.id === e) ? [...n, {
                    id: e,
                    value: t
                }] : n.map(n => n.id === e ? {
                    ...n,
                    value: t
                } : n))
            }
            ;
            return {
                handleChanged: (t, n) => {
                    let s = r(t);
                    e(e => e.map(e => e.id === n.id ? {
                        ...n,
                        answered: s
                    } : e)),
                    a(n.id, t)
                }
                ,
                getInput: e => {
                    let n = t.find(t => t.id === e);
                    return n ? n.value : ""
                }
            }
        }
          , r5 = e => {
            let {onAnswered: t} = e
              , n = (0,
            s.md)(rV)
              , a = (0,
            P.MM)();
            return n ? (0,
            r.jsx)(r6, {
                apData: n,
                orientation: a,
                onAnswered: t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            }) : null
        }
          , r6 = e => {
            let {apData: t, orientation: n, onAnswered: s} = e
              , {prepare: o, fix: c} = r8()
              , {showing: u, show: x, hide: m} = rZ()
              , {show: p, hide: h, visibled: g} = r2()
              , {show: y, hide: f, visibled: w} = r4()
              , {handleChanged: v, getInput: j} = r3()
              , b = (0,
            i.useCallback)(e => {
                o(y, p, () => x("correct"), () => x("redo"), () => x("incorrect"), e)
            }
            , [o, p, y, x])
              , S = (0,
            i.useCallback)( () => b(!1), [b])
              , A = (0,
            i.useCallback)( () => {
                c(s),
                m()
            }
            , [c, m, s])
              , C = (0,
            i.useCallback)( () => {
                h(),
                b(!0)
            }
            , [h, b])
              , k = e => {
                switch (e.case) {
                case "apSelection":
                    return (0,
                    r.jsx)(rq, {
                        data: e
                    });
                case "apKeyboardWrite":
                    return (0,
                    r.jsx)(R.nV, {
                        mode: "Default",
                        value: j(e.id),
                        placeHolder: e.placeHolder,
                        onChange: t => v(t, e)
                    })
                }
            }
            ;
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                width: "100%",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsx)(d.VP, {
                    px: 4,
                    gap: 3,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "Answering.tsx",
                    children: t.map(e => (0,
                    r.jsx)(i.Fragment, {
                        children: k(e)
                    }, e.id))
                }), (0,
                r.jsx)(d.hK, {
                    y: "portrait" === n ? 5 : 6,
                    "data-sentry-element": "Spacer",
                    "data-sentry-source-file": "Answering.tsx"
                }), (0,
                r.jsx)(a.A, {
                    alignSelf: "flex-end",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Answering.tsx",
                    children: (0,
                    r.jsx)(l.yh, {
                        text: "解答する",
                        disabled: void 0 !== u,
                        onClick: S,
                        "data-sentry-element": "PrimaryRoundedButton",
                        "data-sentry-source-file": "Answering.tsx"
                    })
                }), u && (0,
                r.jsx)(tY.z, {
                    result: u,
                    portalElem: "portrait" === n ? "body" : z.y,
                    handleOnStop: "redo" === u ? m : A
                }), (0,
                r.jsx)(eD.jc, {
                    isOpen: w,
                    onClick: f,
                    "data-sentry-element": "OverflowDialog",
                    "data-sentry-source-file": "Answering.tsx"
                }), (0,
                r.jsx)(eD.Ml, {
                    isOpen: g,
                    onClickCancel: h,
                    onClickAnswer: C,
                    "data-sentry-element": "EmptyAnswerDialog",
                    "data-sentry-source-file": "Answering.tsx"
                })]
            })
        }
          , r9 = e => {
            let {dto: t, replayResource: n, onAnswered: l} = e
              , d = (0,
            s.Xr)(rV)
              , [c,u] = (0,
            s.fp)(rD)
              , x = (0,
            P.MM)()
              , {windowHeight: m} = (0,
            o.xJ)()
              , {getViewState: p} = r1()
              , {formatDto: h} = r$();
            return ((0,
            i.useEffect)( () => {
                let {apData: e} = h(t);
                if (n) {
                    let r = p(t, n);
                    d(e.map( (e, t) => {
                        switch (e.case) {
                        case "apSelection":
                            {
                                let n = r.answered[t];
                                e.answered = n.id ? {
                                    id: n.id,
                                    text: ""
                                } : void 0;
                                break
                            }
                        case "apKeyboardWrite":
                            {
                                let n = r.answered[t];
                                e.answered = n.value ? n.value : void 0
                            }
                        }
                        return e
                    }
                    )),
                    u(!0);
                    return
                }
                return d(e),
                () => {
                    d([]),
                    u(!1)
                }
            }
            , [t, h, p, n, d, u]),
            c) ? (0,
            r.jsx)(a.A, {
                height: "portrait" === x ? "auto" : m - eT.$A - 18,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                pt: 4,
                pb: "portrait" === x ? 4 : 12,
                px: 2,
                children: (0,
                r.jsx)(rU, {})
            }) : (0,
            r.jsx)(a.A, {
                height: "portrait" === x ? "auto" : m - eT.$A - 18,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                p: 4,
                pb: 2,
                px: 2,
                children: (0,
                r.jsx)(r5, {
                    onAnswered: l
                })
            })
        }
        ;
        var r7 = n(56092);
        let ae = (0,
        i.forwardRef)( (e, t) => {
            let {width: n, height: a, text: s, children: i} = e
              , l = (0,
            P.MM)();
            return (0,
            r.jsx)(at, {
                ref: t,
                width: n,
                height: a,
                text: s,
                orientation: l,
                children: i
            })
        }
        );
        ae.displayName = "WritingArea";
        let at = (0,
        i.forwardRef)( (e, t) => {
            let {width: n, height: s, text: l, children: o, orientation: d} = e
              , [u,x] = (0,
            i.useState)(0);
            return (0,
            i.useEffect)( () => {
                x(Math.min("portrait" === d ? 257 : 238, Math.floor(n / l.length)))
            }
            , [n, l, d]),
            (0,
            r.jsxs)(a.A, {
                position: "relative",
                border: "4px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                children: [(0,
                r.jsx)(r7.A, {
                    width: n,
                    maxHeight: "portrait" === d ? 344 : 317,
                    fontFamily: "KanjiStrokeOrders",
                    fontSize: u,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: c.Tj.onSurfaceWeak3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: l
                }), (0,
                r.jsx)(a.A, {
                    ref: t,
                    width: "100%",
                    height: s,
                    position: "relative",
                    children: o
                })]
            })
        }
        );
        at.displayName = "WritingAreaView";
        let an = () => {
            let e = (0,
            s.md)(W.bQ);
            return (0,
            i.useMemo)( () => {
                let t = null == e ? void 0 : e.contentResource.legacyAnswer.apData;
                if ((null == t ? void 0 : t.case) !== "apTrace")
                    return console.error("Invalid Tracing state"),
                    {
                        correct: "",
                        grade: 0,
                        replaceType: "none",
                        recognitionConfig: {
                            mode: "Math",
                            useLK: !1,
                            sk: ""
                        }
                    };
                let n = t.value
                  , r = n.correctAnswer;
                return {
                    correct: r,
                    grade: n.gradeId,
                    replaceType: (0,
                    tW.A)(n.replaceType),
                    recognitionConfig: {
                        mode: n.interactiveInkSetting ? (0,
                        eD.uy)(n.interactiveInkSetting) : "Math",
                        useLK: n.useLk,
                        sk: n.skNameOptional.value
                    }
                }
            }
            , [e])
        }
          , ar = () => {
            let[e,t] = (0,
            i.useState)();
            return {
                showing: e,
                show: (0,
                i.useCallback)(e => t(e), []),
                hide: (0,
                i.useCallback)( () => t(void 0), [])
            }
        }
          , aa = () => {
            let {grade: e, replaceType: t} = an()
              , {forceReplace: n} = (0,
            t_.bt)()
              , {replace: r} = (0,
            t_.Q$)()
              , a = (0,
            i.useCallback)(e => 0 === e.length, []);
            return {
                validate: (0,
                i.useCallback)( (s, i) => {
                    if (a(s))
                        return "empty";
                    let l = "english" === t ? " " : ""
                      , o = s.replace(/\n/g, l)
                      , {isMatched: d} = r(o, i, t);
                    if (d)
                        return "correct";
                    let c = n(o, e, t)
                      , {isMatched: u} = r((0,
                    tB.q)(t, [i], c), i, t);
                    return u ? "correct" : "incorrect"
                }
                , [a, n, e, r, t]),
                checkEmpty: a
            }
        }
          , as = () => ({
            getViewState: (0,
            i.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState) {
                    var n, r;
                    return {
                        answered: (n = t.apViewState).recognizedText,
                        svg: null !== (r = n.svg) && void 0 !== r ? r : ""
                    }
                }
                throw Error("no view state")
            }
            )(e.viewStateJSON), [])
        })
          , ai = () => {
            let[e,t] = (0,
            i.useState)(!1);
            return {
                show: (0,
                i.useCallback)( () => {
                    t(!0)
                }
                , []),
                hide: (0,
                i.useCallback)( () => {
                    t(!1)
                }
                , []),
                visibled: e
            }
        }
          , al = () => {
            let[e,t] = (0,
            i.useState)({
                text: "",
                svg: ""
            })
              , [n,r] = (0,
            i.useState)(!1)
              , [a,s] = (0,
            i.useState)(!1)
              , l = (0,
            i.useCallback)( () => {
                t({
                    text: "",
                    svg: ""
                })
            }
            , [t])
              , o = (0,
            i.useCallback)( () => {
                r(!0)
            }
            , [r]);
            return {
                opened: l,
                recognizing: o,
                recognized: (0,
                i.useCallback)( (e, n) => {
                    t({
                        text: e,
                        svg: n
                    }),
                    r(!1)
                }
                , [t]),
                disconnected: (0,
                i.useCallback)( () => {
                    t({
                        text: "",
                        svg: ""
                    }),
                    s(!0)
                }
                , [t, s]),
                reconnect: (0,
                i.useCallback)( () => {
                    s(!1)
                }
                , [s]),
                answerData: e,
                isOpenReconnectMessage: a,
                isRecognizing: n
            }
        }
          , ao = e => {
            let[t,n] = (0,
            i.useState)("incorrect")
              , [r,a] = (0,
            i.useState)()
              , {validate: s} = aa()
              , {saveHandwritingAnswerImageToGCS: l} = (0,
            P.bd)();
            return {
                prepare: (0,
                i.useCallback)( (t, r, i, l, o, d) => {
                    a(t);
                    let c = s(t.text, e);
                    if ("empty" === c) {
                        d ? o() : r();
                        return
                    }
                    switch (c) {
                    case "correct":
                        i();
                        break;
                    case "incorrect":
                        l()
                    }
                    n(c)
                }
                , [e, s]),
                fix: (0,
                i.useCallback)(async e => {
                    if (!r)
                        return;
                    let n = ej.aJ.CORRECT
                      , a = {
                        answered: r.text,
                        svg: r.svg
                    }
                      , s = {
                        answer: {
                            result: n,
                            textType: 2,
                            text: r.text,
                            wrongCount: 0
                        },
                        viewStateJSON: a
                    }
                      , i = await e(r, s);
                    i && l({
                        answerLogId: i,
                        answerResponse: s
                    })
                }
                , [r, l, t])
            }
        }
          , ad = e => {
            var t;
            let {answered: n} = e
              , a = (0,
            s.md)(W.aR)
              , i = (0,
            P.MM)()
              , {correct: l} = an();
            return (0,
            r.jsx)(ac, {
                correct: l,
                answered: null == n ? void 0 : n.text,
                writtenSVG: null !== (t = null == n ? void 0 : n.svg) && void 0 !== t ? t : "",
                orientation: i,
                isViewer: a,
                "data-sentry-element": "AnsweredView",
                "data-sentry-component": "Answered",
                "data-sentry-source-file": "Answered.tsx"
            })
        }
          , ac = e => {
            let {correct: t, answered: n, writtenSVG: s, orientation: i, isViewer: c} = e
              , {elementRef: u, elementSize: x} = (0,
            o.wY)();
            return (0,
            r.jsx)(d.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweredView",
                "data-sentry-source-file": "Answered.tsx",
                children: (0,
                r.jsx)(a.A, {
                    width: "100%",
                    maxWidth: 712,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Answered.tsx",
                    children: (0,
                    r.jsxs)(d.VP, {
                        gap: "portrait" === i ? 2 : 5,
                        "data-sentry-element": "Column",
                        "data-sentry-source-file": "Answered.tsx",
                        children: [(0,
                        r.jsxs)(ae, {
                            ref: u,
                            width: x.width,
                            height: "portrait" === i ? 360 : 336,
                            text: t,
                            "data-sentry-element": "WritingArea",
                            "data-sentry-source-file": "Answered.tsx",
                            children: [c && (0,
                            r.jsx)(a.A, {
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                width: 144,
                                height: 144,
                                children: (0,
                                r.jsx)(l._n, {
                                    name: n === t ? "correctionO" : "correctionX",
                                    width: 144,
                                    height: 144
                                })
                            }), (0,
                            r.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: s
                                }
                            })]
                        }), (0,
                        r.jsx)(a.A, {
                            alignSelf: "end",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answered.tsx",
                            children: (0,
                            r.jsx)(l.yh, {
                                text: "できた",
                                disabled: c,
                                "data-sentry-element": "PrimaryRoundedButton",
                                "data-sentry-source-file": "Answered.tsx"
                            })
                        })]
                    })
                })
            })
        }
          , au = e => {
            let {answeredData: t, onAnswered: n} = e
              , a = (0,
            s.md)(W.HK)
              , i = (0,
            s.md)(W.aR)
              , {correct: l, recognitionConfig: o} = an()
              , d = (0,
            P.MM)();
            return o ? (0,
            r.jsx)(ax, {
                correct: l,
                recognitionConfig: o,
                orientation: d,
                selectedTool: a,
                onAnswered: n,
                isViewer: i,
                isAnswered: void 0 !== t,
                "data-sentry-element": "AnsweringView",
                "data-sentry-component": "Answering",
                "data-sentry-source-file": "Answering.tsx"
            }) : null
        }
          , ax = e => {
            let {correct: t, recognitionConfig: n, orientation: s, selectedTool: c, onAnswered: u, isViewer: x, isAnswered: m} = e
              , p = (0,
            i.useRef)(null)
              , {prepare: h, fix: g} = ao(t)
              , {showing: y, show: f, hide: w} = ar()
              , {elementRef: v, elementSize: j} = (0,
            o.wY)()
              , {opened: b, recognizing: S, recognized: A, disconnected: C, reconnect: k, answerData: I, isOpenReconnectMessage: T, isRecognizing: M} = al()
              , {show: B, hide: _, visibled: E} = ai()
              , {onPointerDown: P, onPointerUp: W} = (0,
            eD.$D)()
              , L = (0,
            i.useCallback)( () => {
                S(),
                P()
            }
            , [S])
              , N = (0,
            i.useCallback)( (e, t) => {
                A(e, t),
                W()
            }
            , [A])
              , O = (0,
            i.useCallback)(e => {
                h(I, B, () => f("kanji_correct"), () => f("kanji_incorrect"), () => f("incorrect"), e)
            }
            , [h, I, B, f])
              , V = (0,
            i.useCallback)( () => O(!1), [O])
              , D = (0,
            i.useCallback)( () => {
                g(u),
                w()
            }
            , [g, u, w])
              , q = (0,
            i.useCallback)( () => {
                _(),
                O(!0)
            }
            , [_, O])
              , z = "portrait" === s;
            return (0,
            r.jsxs)(d.VP, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                "data-sentry-element": "Column",
                "data-sentry-component": "AnsweringView",
                "data-sentry-source-file": "Answering.tsx",
                children: [(0,
                r.jsx)(a.A, {
                    width: "100%",
                    maxWidth: 712,
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "Answering.tsx",
                    children: (0,
                    r.jsxs)(d.VP, {
                        gap: z ? 2 : 5,
                        "data-sentry-element": "Column",
                        "data-sentry-source-file": "Answering.tsx",
                        children: [(0,
                        r.jsx)(ae, {
                            ref: v,
                            width: j.width,
                            height: z ? 360 : 336,
                            text: t,
                            "data-sentry-element": "WritingArea",
                            "data-sentry-source-file": "Answering.tsx",
                            children: !T && (0,
                            r.jsx)(tX, {
                                ref: p,
                                width: j.width,
                                height: j.height,
                                recognitionConfig: n,
                                mode: "eraser" === c ? "eraser" : "pen",
                                onOpened: b,
                                onRecognizing: L,
                                onRecognized: N,
                                onDisconnected: C
                            })
                        }), (0,
                        r.jsx)(a.A, {
                            alignSelf: "end",
                            "data-sentry-element": "Box",
                            "data-sentry-source-file": "Answering.tsx",
                            children: (0,
                            r.jsx)(l.yh, {
                                text: "できた",
                                disabled: x || M || T || void 0 !== y || m,
                                onClick: V,
                                "data-sentry-element": "PrimaryRoundedButton",
                                "data-sentry-source-file": "Answering.tsx"
                            })
                        })]
                    })
                }), y && (0,
                r.jsx)(R.zD, {
                    result: y,
                    portalElem: "body",
                    handleOnStop: D
                }), (0,
                r.jsx)(eD.Ml, {
                    isOpen: E,
                    onClickAnswer: q,
                    onClickCancel: _,
                    "data-sentry-element": "EmptyAnswerDialog",
                    "data-sentry-source-file": "Answering.tsx"
                }), (0,
                r.jsx)(eD.Xn, {
                    isOpen: T,
                    y: z ? 96 : 24,
                    onClick: k,
                    "data-sentry-element": "ReconnectMessage",
                    "data-sentry-source-file": "Answering.tsx"
                })]
            })
        }
          , am = e => {
            let {replayResource: t, onAnswered: n} = e
              , [s,l] = (0,
            i.useState)()
              , {getViewState: o} = as()
              , d = (0,
            i.useMemo)( () => {
                if (!t)
                    return s;
                {
                    let e = o(t);
                    return {
                        text: e.answered,
                        svg: e.svg
                    }
                }
            }
            , [s, o, t])
              , c = (0,
            i.useCallback)(async (e, t) => (l(e),
            n(t)), [n]);
            return void 0 !== d || t ? (0,
            r.jsx)(a.A, {
                p: 2,
                children: (0,
                r.jsx)(ad, {
                    answered: d
                })
            }) : (0,
            r.jsx)(a.A, {
                p: 2,
                children: (0,
                r.jsx)(au, {
                    answeredData: s,
                    onAnswered: c
                })
            })
        }
        ;
        var ap = n(14953)
          , ah = n.n(ap);
        n(68286),
        n(43696),
        ah()( () => Promise.all([n.e(314), n.e(34)]).then(n.bind(n, 73034)).then(e => e.Answering), {
            loadableGenerated: {
                webpack: () => [73034]
            },
            ssr: !1
        });
        let ag = ah()( () => Promise.all([n.e(314), n.e(900), n.e(267)]).then(n.bind(n, 72267)).then(e => e.VoiceElsa), {
            loadableGenerated: {
                webpack: () => [72267]
            },
            ssr: !1
        })
          , ay = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: i, startAnswerProcess: l} = e;
            return (0,
            r.jsxs)(a.A, {
                id: z.y,
                display: "flex",
                flexDirection: "column",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "HandWriteAnswerPanel",
                "data-sentry-source-file": "HandWrite.tsx",
                children: [(0,
                r.jsx)(rW, {
                    dto: n,
                    replayResource: s,
                    onAnswered: l,
                    "data-sentry-element": "SingleWriting",
                    "data-sentry-source-file": "HandWrite.tsx"
                }), (0,
                r.jsx)(X, {
                    answerMode: t,
                    endAnswerProcess: i,
                    "data-sentry-element": "NextButtonStep",
                    "data-sentry-source-file": "HandWrite.tsx"
                })]
            })
        }
          , af = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: l, pendingAnswerProcess: o, startAnswerProcess: d} = e;
            return (0,
            i.useEffect)( () => {
                "Answered" === t && l()
            }
            , [t, l]),
            (0,
            r.jsx)(a.A, {
                id: z.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "HandWriteSelfJudgementAnswerPanel",
                "data-sentry-source-file": "HandWriteSelfJudgement.tsx",
                children: (0,
                r.jsx)(nD, {
                    dto: n,
                    replayResource: s,
                    onPendingAnswered: o,
                    onAnswered: d,
                    "data-sentry-element": "SelfJudgeWriting",
                    "data-sentry-source-file": "HandWriteSelfJudgement.tsx"
                })
            })
        }
          , aw = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: i, startAnswerProcess: l} = e;
            return (0,
            r.jsxs)(a.A, {
                id: z.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "ImageSelectionAnswerPanel",
                "data-sentry-source-file": "ImageSelection.tsx",
                children: [(0,
                r.jsx)(ek, {
                    dto: n,
                    replayResource: s,
                    onAnswered: l,
                    "data-sentry-element": "ImageSelection",
                    "data-sentry-source-file": "ImageSelection.tsx"
                }), (0,
                r.jsx)(X, {
                    answerMode: t,
                    endAnswerProcess: i,
                    "data-sentry-element": "NextButtonStep",
                    "data-sentry-source-file": "ImageSelection.tsx"
                })]
            })
        }
          , av = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: i, startAnswerProcess: l} = e;
            return (0,
            r.jsxs)(a.A, {
                id: z.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "KeyboardWriteAnswerPanel",
                "data-sentry-source-file": "KeyboardWrite.tsx",
                children: [(0,
                r.jsx)(eU, {
                    dto: n,
                    replayResource: s,
                    onAnswered: l,
                    "data-sentry-element": "Keyboard",
                    "data-sentry-source-file": "KeyboardWrite.tsx"
                }), (0,
                r.jsx)(X, {
                    answerMode: t,
                    endAnswerProcess: i,
                    "data-sentry-element": "NextButtonStep",
                    "data-sentry-source-file": "KeyboardWrite.tsx"
                })]
            })
        }
          , aj = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: i, startAnswerProcess: l} = e;
            return (0,
            r.jsxs)(a.A, {
                id: z.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "MultipleSelectionAnswerPanel",
                "data-sentry-source-file": "MultipleSelection.tsx",
                children: [(0,
                r.jsx)(tx, {
                    dto: n,
                    replayResource: s,
                    onAnswered: l,
                    "data-sentry-element": "MultipleSelection",
                    "data-sentry-source-file": "MultipleSelection.tsx"
                }), (0,
                r.jsx)(X, {
                    answerMode: t,
                    endAnswerProcess: i,
                    "data-sentry-element": "NextButtonStep",
                    "data-sentry-source-file": "MultipleSelection.tsx"
                })]
            })
        }
          , ab = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: i, startAnswerProcess: l} = e;
            return (0,
            r.jsxs)(a.A, {
                id: z.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "SingleSelectionAnswerPanel",
                "data-sentry-source-file": "SingleSelection.tsx",
                children: [(0,
                r.jsx)(n3, {
                    dto: n,
                    replayResource: s,
                    onAnswered: l,
                    "data-sentry-element": "SingleSelection",
                    "data-sentry-source-file": "SingleSelection.tsx"
                }), (0,
                r.jsx)(X, {
                    answerMode: t,
                    endAnswerProcess: i,
                    "data-sentry-element": "NextButtonStep",
                    "data-sentry-source-file": "SingleSelection.tsx"
                })]
            })
        }
          , aS = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: i, startAnswerProcess: l} = e
              , {answerType: o} = tL();
            return (0,
            r.jsxs)(a.A, {
                id: z.y,
                display: "triple" === o ? "flex" : "block",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "SyncedHandWriteAnswerPanel",
                "data-sentry-source-file": "SyncedHandWrite.tsx",
                children: [(0,
                r.jsx)(t1, {
                    dto: n,
                    replayResource: s,
                    onAnswered: l,
                    "data-sentry-element": "MultipleWriting",
                    "data-sentry-source-file": "SyncedHandWrite.tsx"
                }), (0,
                r.jsx)(X, {
                    answerMode: t,
                    endAnswerProcess: i,
                    "data-sentry-element": "NextButtonStep",
                    "data-sentry-source-file": "SyncedHandWrite.tsx"
                })]
            })
        }
          , aA = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: i, startAnswerProcess: l} = e;
            return (0,
            r.jsxs)(a.A, {
                id: z.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "SynchronizationAnswerPanel",
                "data-sentry-source-file": "Synchronization.tsx",
                children: [(0,
                r.jsx)(r9, {
                    dto: n,
                    replayResource: s,
                    onAnswered: l,
                    "data-sentry-element": "Synchronization",
                    "data-sentry-source-file": "Synchronization.tsx"
                }), (0,
                r.jsx)(X, {
                    answerMode: t,
                    endAnswerProcess: i,
                    "data-sentry-element": "NextButtonStep",
                    "data-sentry-source-file": "Synchronization.tsx"
                })]
            })
        }
          , aC = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: l, startAnswerProcess: o} = e;
            return (0,
            i.useEffect)( () => {
                "Answered" === t && l()
            }
            , [t, l]),
            (0,
            r.jsx)(a.A, {
                id: z.y,
                display: "flex",
                flexDirection: "column",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "TraceAnswerPanel",
                "data-sentry-source-file": "Trace.tsx",
                children: (0,
                r.jsx)(am, {
                    dto: n,
                    replayResource: s,
                    onAnswered: o,
                    "data-sentry-element": "Tracing",
                    "data-sentry-source-file": "Trace.tsx"
                })
            })
        }
          , ak = e => {
            let {answerMode: t, dto: n, isAnswerProcessing: s, replayResource: l, endAnswerProcess: o, startAnswerProcess: d} = e;
            return (0,
            i.useEffect)( () => {
                "Answered" === t && o()
            }
            , [t, o]),
            (0,
            r.jsx)(a.A, {
                id: z.y,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "VoiceInputAnswerPanel",
                "data-sentry-source-file": "VoiceInput.tsx",
                children: (0,
                r.jsx)(ag, {
                    dto: n,
                    replayResource: l,
                    onAnswered: d,
                    isAnswerProcessing: s
                })
            })
        }
          , aI = e => {
            let {answerMode: t, dto: n, replayResource: s, endAnswerProcess: i, startAnswerProcess: l} = e;
            return (0,
            r.jsxs)(a.A, {
                id: z.y,
                display: "flex",
                height: "fit-content",
                minHeight: "100%",
                bgcolor: c.Tj.surface,
                border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                borderRadius: 2,
                justifyContent: "flex-end",
                "data-sentry-element": "Box",
                "data-sentry-component": "WordOrderSortAnswerPanel",
                "data-sentry-source-file": "WordOrderSort.tsx",
                children: [(0,
                r.jsx)(nS, {
                    dto: n,
                    replayResource: s,
                    onAnswered: l,
                    "data-sentry-element": "Order",
                    "data-sentry-source-file": "WordOrderSort.tsx"
                }), (0,
                r.jsx)(X, {
                    answerMode: t,
                    endAnswerProcess: i,
                    "data-sentry-element": "NextButtonStep",
                    "data-sentry-source-file": "WordOrderSort.tsx"
                })]
            })
        }
          , aT = e => {
            let {answerMode: t, pendingAnswerProcess: n, startAnswerProcess: a, endAnswerProcess: i, isAnswerProcessing: l, replayResource: o} = e
              , d = (0,
            s.md)(W.bQ);
            if (!d)
                return null;
            let c = {
                apData: d.contentResource.legacyAnswer.apData,
                replayResource: o,
                answerMode: t,
                pendingAnswerProcess: n,
                startAnswerProcess: a,
                endAnswerProcess: i,
                isAnswerProcessing: l
            };
            if (!o)
                return (0,
                r.jsx)(aM, {
                    ...c
                });
            try {
                if (!o.viewStateJSON)
                    return (0,
                    r.jsx)(K, {
                        exceptionType: "replayResourceExpired"
                    });
                let e = JSON.parse(o.viewStateJSON)
                  , t = q.z.object({
                    apName: q.z.string()
                }).safeParse(e);
                if (!t.success)
                    return (0,
                    r.jsx)(aM, {
                        ...c
                    });
                let n = t.data.apName
                  , a = d.contentResource.answer.name;
                if (n !== a)
                    return (0,
                    r.jsx)(K, {
                        exceptionType: "answerPatternChanged"
                    });
                return (0,
                r.jsx)(aM, {
                    ...c
                })
            } catch (e) {
                return (0,
                r.jsx)(K, {
                    exceptionType: "invalidReplayResource"
                })
            }
        }
          , aM = e => {
            let {apData: t, replayResource: n, answerMode: a, pendingAnswerProcess: s, startAnswerProcess: i, endAnswerProcess: l, isAnswerProcessing: o} = e
              , d = {
                answerMode: a,
                replayResource: n,
                endAnswerProcess: l,
                startAnswerProcess: i
            };
            switch (t.case) {
            case "apSelection":
                return (0,
                r.jsx)(ab, {
                    ...d,
                    dto: t.value
                });
            case "apMultipleSelection":
                return (0,
                r.jsx)(aj, {
                    ...d,
                    dto: t.value
                });
            case "apWordOrderSort":
                return (0,
                r.jsx)(aI, {
                    ...d,
                    dto: t.value
                });
            case "apImageSelection":
                return (0,
                r.jsx)(aw, {
                    ...d,
                    dto: t.value
                });
            case "apSynchronization":
                return (0,
                r.jsx)(aA, {
                    ...d,
                    dto: t.value
                });
            case "apVoiceInput":
                return (0,
                r.jsx)(ak, {
                    ...d,
                    dto: t.value,
                    isAnswerProcessing: o
                });
            case "apKeyboardWrite":
                return (0,
                r.jsx)(av, {
                    ...d,
                    dto: t.value
                });
            case "apHandWrite":
                return (0,
                r.jsx)(ay, {
                    ...d,
                    dto: t.value
                });
            case "apSyncedHandWrite":
                return (0,
                r.jsx)(aS, {
                    ...d,
                    dto: t.value
                });
            case "apTrace":
                return (0,
                r.jsx)(aC, {
                    ...d,
                    dto: t.value
                });
            case "apHandWriteSelfJudgement":
                return (0,
                r.jsx)(af, {
                    ...d,
                    dto: t.value,
                    pendingAnswerProcess: s
                });
            default:
                return (0,
                r.jsx)(K, {
                    exceptionType: "unknownAnswerPattern"
                })
            }
        }
          , aB = (e, t) => {
            switch (e.type) {
            case "ClassicQubena":
                return (0,
                r.jsx)(a_, {
                    source: e,
                    showImageDialog: t
                });
            case "Empty":
                return (0,
                r.jsx)(aE, {});
            case "EnglishWord":
                return (0,
                r.jsx)(aR, {
                    source: e
                });
            case "EnglishWordV2":
                return (0,
                r.jsx)(aP, {
                    source: e
                });
            case "Html":
                return (0,
                r.jsx)(aL, {
                    source: e
                });
            case "KanjiDefault":
                return (0,
                r.jsx)(aN, {
                    source: e
                });
            case "KanjiSelfJudgement":
                return (0,
                r.jsx)(aO, {
                    source: e
                });
            case "KanjiSelfJudgementLegacy":
                return (0,
                r.jsx)(aV, {
                    source: e
                });
            case "Simple":
                return (0,
                r.jsx)(aD, {
                    source: e,
                    showImageDialog: t
                })
            }
        }
          , a_ = e => {
            let {source: t, showImageDialog: n} = e
              , a = t.image;
            return a ? (0,
            r.jsx)("div", {
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                "data-sentry-component": "ClassicQubena",
                "data-sentry-source-file": "ClassicQubena.tsx",
                children: (0,
                r.jsxs)(d.VP, {
                    alignItems: "center",
                    gap: 2,
                    "data-sentry-element": "Column",
                    "data-sentry-source-file": "ClassicQubena.tsx",
                    children: [(0,
                    r.jsx)("img", {
                        className: "answer-content-image",
                        src: a,
                        width: "100%"
                    }), (0,
                    r.jsx)(x.TS, {
                        onClick: () => {
                            n && n(a)
                        }
                        ,
                        "data-sentry-element": "ZoomImageButton",
                        "data-sentry-source-file": "ClassicQubena.tsx"
                    })]
                }, 0)
            }) : (0,
            r.jsx)(r.Fragment, {})
        }
          , aE = () => (0,
        r.jsx)(r.Fragment, {})
          , aR = e => {
            let {source: t} = e
              , {parameter: n} = t
              , {targetWord: a, partOfSpeech: s, variantForm: i, countability: l, baseForm: o, wordUsageAndMeaning: d, singularForm: c, pluralForm: u, thirdParsonSingular: x, pastTense: m, presentParticiple: p, pastParticiple: h, positiveDegree: g, comparativeDegree: y, superlativeDegree: f, exampleUsage: w, meaningOfExample: v} = n
              , j = [{
                label: "単数形",
                value: c
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
                value: m
            }, {
                label: "現在分詞",
                value: p
            }, {
                label: "過去分詞",
                value: h
            }, {
                label: "原級",
                value: g
            }, {
                label: "比較級",
                value: y
            }, {
                label: "最上級",
                value: f
            }].filter(e => {
                let {label: t, value: n} = e;
                return void 0 !== n && n.length > 0 && i !== t
            }
            ).map(e => {
                let {label: t, value: n} = e;
                return "".concat(t, "=").concat(n)
            }
            );
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("div", {
                    className: "question-area",
                    children: (0,
                    r.jsxs)("p", {
                        className: "question-text",
                        children: [(0,
                        r.jsx)("b", {
                            children: a
                        }), (0,
                        r.jsx)("br", {}), s, l && "名詞" === s ? "(".concat(l, ")") : "", (0,
                        r.jsx)("br", {}), ("動詞" === s || "助動詞" === s) && "3単現" === i ? (0,
                        r.jsxs)("b", {
                            children: [o, "の変化形で, 主語が3人称単数で現在の時に使う語"]
                        }) : (0,
                        r.jsx)("b", {
                            children: d
                        }), j.length > 0 && (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsx)("br", {}), j.join(", ")]
                        }), w && w.length > 0 && (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsx)("br", {}), (0,
                            r.jsxs)("b", {
                                children: [w, v ? "(".concat(v, ")") : ""]
                            })]
                        })]
                    })
                })
            })
        }
          , aP = e => {
            let {source: t} = e
              , {parameter: n} = t
              , {targetWord: a, partOfSpeech: s, variantForm: i, countability: l, baseForm: o, wordUsageAndMeaning: d, singularForm: c, pluralForm: u, thirdParsonSingular: x, pastTense: m, presentParticiple: p, pastParticiple: h, positiveDegree: g, comparativeDegree: y, superlativeDegree: f, exampleUsage: w, meaningOfExample: v} = n
              , j = [{
                label: "単数形",
                value: c
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
                value: m
            }, {
                label: "現在分詞",
                value: p
            }, {
                label: "過去分詞",
                value: h
            }, {
                label: "原級",
                value: g
            }, {
                label: "比較級",
                value: y
            }, {
                label: "最上級",
                value: f
            }].filter(e => {
                let {label: t, value: n} = e;
                return void 0 !== n && n.length > 0 && i !== t
            }
            ).map(e => {
                let {label: t, value: n} = e;
                return "".concat(t, "=").concat(n)
            }
            );
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("div", {
                    className: "question-area",
                    children: (0,
                    r.jsxs)("p", {
                        className: "question-text",
                        children: [(0,
                        r.jsx)("b", {
                            children: a
                        }), (0,
                        r.jsx)("br", {}), s, l && "名詞" === s ? "(".concat(l, ")") : "", (0,
                        r.jsx)("br", {}), ("動詞" === s || "助動詞" === s) && "3単現" === i ? (0,
                        r.jsxs)("b", {
                            children: [o, "の変化形で, 主語が3人称単数で現在の時に使う語"]
                        }) : (0,
                        r.jsx)("b", {
                            children: d
                        }), j.length > 0 && (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsx)("br", {}), j.join(", ")]
                        }), w && w.length > 0 && (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsx)("br", {}), (0,
                            r.jsxs)("b", {
                                children: [(0,
                                r.jsx)(aW, {
                                    text: w
                                }), (0,
                                r.jsx)("br", {}), (0,
                                r.jsx)(aW, {
                                    text: v || ""
                                })]
                            })]
                        })]
                    })
                })
            })
        }
          , aW = e => {
            let {text: t} = e
              , n = t.split("\n");
            return (0,
            r.jsx)(r.Fragment, {
                children: n.map( (e, t) => (0,
                r.jsxs)(r.Fragment, {
                    children: [e, t < n.length - 1 && e && (0,
                    r.jsx)("br", {})]
                }))
            })
        }
          , aL = e => {
            let {source: t} = e
              , n = t.parameter.html || "";
            return (0,
            r.jsx)("div", {
                className: "question-area",
                "data-sentry-component": "Html",
                "data-sentry-source-file": "Html.tsx",
                children: (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: n,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "Html.tsx"
                    })
                })
            })
        }
          , aN = e => {
            let t, {source: n} = e, a = n.parameter, s = a.phrase, i = a.phrasePronunciation, l = a.grade;
            return t = l <= 2 ? "<b><ruby><rb>語</rb><rp>(</rp><rt>ご</rt><rp>)</rp></ruby>　　<ruby><rb>句</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>：".concat(s, "</b><br/><b><ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>　　み：").concat(i, "</b>") : l <= 5 ? "<b>語　　<ruby><rb>句</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>：".concat(s, "</b><br/><b>読　　み：").concat(i, "</b>") : "<b>語　　句：".concat(s, "</b><br/><b>読　　み：").concat(i, "</b>"),
            (0,
            r.jsx)("div", {
                className: "question-area",
                "data-sentry-component": "KanjiDefault",
                "data-sentry-source-file": "KanjiDefault.tsx",
                children: (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: t,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "KanjiDefault.tsx"
                    })
                })
            })
        }
          , aO = e => {
            let t, {source: n} = e, a = n.parameter, s = a.components, i = a.modelAnswerString, l = i.length;
            return t = 0 === s.length ? (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("p", {
                    className: "question-text",
                    children: "正解はこれ"
                })
            }) : s.map( (e, t) => (0,
            r.jsx)("p", {
                className: "question-text",
                children: (0,
                r.jsx)(x.qV, {
                    src: e.text.replaceAll("\n", "<br/>")
                })
            }, t)),
            (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "KanjiSelfJudgement",
                "data-sentry-source-file": "KanjiSelfJudgement.tsx",
                children: [t, (0,
                r.jsx)("p", {
                    className: "font-kanji-stroke-order ".concat(l <= 2 ? "adjust-font-upto2" : "adjust-font-over3"),
                    style: {
                        "--wordnum": l
                    },
                    children: i
                })]
            })
        }
          , aV = e => {
            let t, {source: n} = e, a = n.parameter, s = a.questionWord, i = a.questionWordOthers, l = s.length, o = a.grade;
            return t = o <= 1 ? "<ruby><rb>正解</rb><rp>(</rp><rt>せいかい</rt><rp>)</rp></ruby>はこちらです" : o <= 5 ? "正<ruby><rb>解</rb><rp>(</rp><rt>かい</rt><rp>)</rp></ruby>はこちらです" : "正解はこちらです",
            (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "KanjiSelfJudgementLegacy",
                "data-sentry-source-file": "KanjiSelfJudgementLegacy.tsx",
                children: [(0,
                r.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    r.jsx)(x.qV, {
                        src: t,
                        "data-sentry-element": "InlineQML",
                        "data-sentry-source-file": "KanjiSelfJudgementLegacy.tsx"
                    })
                }), (0,
                r.jsx)("p", {
                    className: "font-kanji-stroke-order ".concat(l <= 2 ? "adjust-font-upto2" : "adjust-font-over3"),
                    style: {
                        "--wordnum": l
                    },
                    children: s
                }), "" !== i && (0,
                r.jsxs)("div", {
                    className: "main-text",
                    style: {
                        fontSize: "20px",
                        lineHeight: 1.7
                    },
                    children: ["※", (0,
                    r.jsx)("b", {
                        children: i
                    }), "も可"]
                })]
            })
        }
          , aD = e => {
            var t;
            let {source: n, showImageDialog: a} = e
              , s = n.parameter.components.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , i = null !== (t = n.images) && void 0 !== t ? t : [];
            return (0,
            r.jsxs)("div", {
                className: "question-area",
                "data-sentry-component": "Simple",
                "data-sentry-source-file": "Simple.tsx",
                children: [s.map( (e, t) => (0,
                r.jsx)("p", {
                    className: "question-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    r.jsx)(x.qV, {
                        src: e.text
                    })
                }, "Text:".concat(t))), 0 !== i.length && (0,
                r.jsx)("div", {
                    className: "image-area",
                    children: i.map( (e, t) => (0,
                    r.jsxs)(d.VP, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        r.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-medium"
                        }), (0,
                        r.jsx)(x.TS, {
                            onClick: () => {
                                a && a(e)
                            }
                        })]
                    }, "Image:".concat(t)))
                })]
            })
        }
        ;
        var aq = n(49226);
        let az = i.memo(e => {
            let {minHeight: t, margin: n} = e
              , {getDescriptionSource: a} = (0,
            aq.L)()
              , s = a();
            return void 0 === s ? (0,
            r.jsx)(r.Fragment, {
                children: "開発中のAD"
            }) : (0,
            r.jsx)(aH, {
                minHeight: t,
                margin: n,
                description: s
            })
        }
        );
        az.displayName = "DescriptionPanel";
        let aH = e => {
            let {minHeight: t, margin: n, description: s} = e
              , [o,d] = (0,
            i.useState)(null)
              , u = (0,
            i.useCallback)(e => {
                d(e)
            }
            , [])
              , x = (0,
            i.useCallback)( () => {
                d(null)
            }
            , []);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(a.A, {
                    height: 56,
                    bgcolor: c.Tj.important,
                    sx: {
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8
                    },
                    paddingX: 3,
                    display: "flex",
                    alignItems: "center",
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "DescriptionPanel.tsx",
                    children: (0,
                    r.jsx)(l.EY, {
                        color: "onSurfaceWeak4",
                        size: "xl",
                        fontWeight: "bold",
                        "data-sentry-element": "Text",
                        "data-sentry-source-file": "DescriptionPanel.tsx",
                        children: "解説"
                    })
                }), (0,
                r.jsx)(a.A, {
                    minHeight: t,
                    marginBottom: n,
                    bgcolor: c.Tj.surface,
                    border: "1px solid ".concat(c.Tj.onSurfaceWeak3),
                    sx: {
                        borderBottomRightRadius: 8,
                        borderBottomLeftRadius: 8
                    },
                    "data-sentry-element": "Box",
                    "data-sentry-source-file": "DescriptionPanel.tsx",
                    children: aB(s, u)
                }), (0,
                r.jsx)(R.zq, {
                    src: o,
                    onClose: x,
                    "data-sentry-element": "ZoomImageDialog",
                    "data-sentry-source-file": "DescriptionPanel.tsx"
                })]
            })
        }
    }
    ,
    80534: (e, t, n) => {
        n.d(t, {
            iO: () => h,
            cV: () => p
        });
        var r = n(74848)
          , a = n(43819)
          , s = n(34843)
          , i = n(52199)
          , l = n(4799)
          , o = n(99497)
          , d = n(96540)
          , c = n(60901)
          , u = n(14705);
        let x = e => {
            let {active: t} = e
              , n = (0,
            s.Xr)(l.HK)
              , a = (0,
            d.useCallback)( () => {
                n(t ? void 0 : "eraser")
            }
            , [t, n]);
            return (0,
            r.jsx)(o.A, {
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
                onClick: a,
                "data-sentry-element": "IconButton",
                "data-sentry-component": "EraserButton",
                "data-sentry-source-file": "EraserButton.tsx",
                children: (0,
                r.jsx)(c.Bj, {
                    name: "eraser",
                    size: 40,
                    color: "primary",
                    "data-sentry-element": "Template",
                    "data-sentry-source-file": "EraserButton.tsx"
                })
            })
        }
          , m = e => {
            let {active: t} = e
              , n = (0,
            s.Xr)(l.HK)
              , a = (0,
            d.useCallback)( () => {
                n(t ? void 0 : "pen")
            }
            , [t, n]);
            return (0,
            r.jsx)(o.A, {
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
                onClick: a,
                "data-sentry-element": "IconButton",
                "data-sentry-component": "PenButton",
                "data-sentry-source-file": "PenButton.tsx",
                children: (0,
                r.jsx)(c.Bj, {
                    name: "pen",
                    size: 40,
                    color: "primary",
                    "data-sentry-element": "Template",
                    "data-sentry-source-file": "PenButton.tsx"
                })
            })
        }
          , p = 56
          , h = () => {
            let e = (0,
            s.md)(l.$Q)
              , t = (0,
            s.md)(l.HK);
            return (0,
            r.jsx)(g, {
                toolSet: e,
                selectedTool: t,
                "data-sentry-element": "ToolBarView",
                "data-sentry-component": "ToolBar",
                "data-sentry-source-file": "ToolBar.tsx"
            })
        }
          , g = e => {
            let {toolSet: t, selectedTool: n} = e;
            return (0,
            r.jsxs)(a.A, {
                width: p,
                children: [(0,
                r.jsx)(m, {
                    active: "pen" === n
                }), (0,
                r.jsx)(i.hK, {
                    y: 2
                }), (0,
                r.jsx)(x, {
                    active: "eraser" === n
                })]
            })
        }
    }
    ,
    80280: (e, t, n) => {
        n.d(t, {
            Fb: () => i,
            Gk: () => o,
            eB: () => d,
            eC: () => c,
            kW: () => u,
            kh: () => s,
            oN: () => l
        });
        var r = n(60901)
          , a = n(41355);
        let s = 300
          , i = {
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
          , l = {
            narrowAnsweringScrollbar: "narrow-answering-scrollbar",
            narrowAnsweredScrollbar: "narrow-answered-scrollbar"
        }
          , o = 672
          , d = 24
          , c = parseInt(r.R7.M.height) + 2 * d
          , u = "calc(100% - ".concat(a.$A + c, "px)")
    }
    ,
    51940: (e, t, n) => {
        n.d(t, {
            $Q: () => h,
            Ym: () => y,
            wo: () => w,
            ID: () => f,
            $t: () => g.$
        });
        var r = n(59205)
          , a = n(65218)
          , s = n(34843)
          , i = n(96540)
          , l = n(46471)
          , o = n(78218)
          , d = n(1045)
          , c = n(20190)
          , u = n(8936)
          , x = n(4799)
          , m = n(79235)
          , p = n(15381);
        let h = e => {
            let t = (0,
            s.Xr)(x.AD)
              , n = (0,
            s.Xr)(x.Dl)
              , h = (0,
            s.md)(m.r)
              , g = (0,
            s.md)(x.aR)
              , y = (0,
            s.md)(x.cS)
              , [f,w] = (0,
            s.fp)(p.TT)
              , [v,j] = (0,
            s.fp)(c.y)
              , b = (0,
            s.Xr)(x._u)
              , [S,A] = (0,
            i.useState)()
              , [C,k] = (0,
            i.useState)(!1)
              , [I,T] = (0,
            i.useState)(!1)
              , [M,B] = (0,
            i.useState)(!1)
              , _ = (0,
            i.useMemo)( () => S ? "Answered" : C ? "PendingAnswered" : "Answering", [S, C])
              , E = (0,
            i.useMemo)( () => (null == S ? void 0 : S.pagePath) === "cursor/result", [null == S ? void 0 : S.pagePath])
              , R = (0,
            u.l2)()
              , P = (0,
            u.QR)()
              , W = (0,
            u.pz)()
              , L = (0,
            u.PM)()
              , N = (0,
            i.useCallback)(async () => {
                S && (n({
                    type: o.w2.ANSWER_END
                }),
                P(),
                E && (t(1),
                await new Promise(e => setTimeout(e, 2e3))),
                W(S),
                k(!1))
            }
            , [S, E, n, P, W, t])
              , O = (0,
            i.useCallback)( () => {
                n({
                    type: o.w2.QUESTION_END
                }),
                n({
                    type: o.w2.ANSWER_START
                }),
                k(!0)
            }
            , [n])
              , V = (0,
            i.useCallback)(async e => await R(e), [R])
              , D = (0,
            i.useCallback)(async (e, t) => {
                let n = t.answerLogResource;
                n && await L(n, e)
            }
            , [L])
              , q = (0,
            i.useCallback)(async t => {
                0 !== h && await L({
                    buffer: e.current,
                    type: d.w6.DRAWING_IMAGE
                }, t)
            }
            , [L, e, h])
              , z = (0,
            i.useCallback)(e => {
                v && ((0,
                r.H)({
                    ...v,
                    answer: e.answer.text,
                    correct: e.answer.result === o.aJ.CORRECT
                }),
                j(void 0))
            }
            , [v, j])
              , H = (0,
            i.useCallback)( () => {
                if (f) {
                    let e = Number("0.1");
                    if ("number" == typeof e && function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .1;
                        return !(e <= 0) && (e > 1 || Math.random() < e)
                    }(e)) {
                        let e = window.location.host.split(".").shift();
                        (0,
                        l.jB)({
                            problemId: y.code,
                            tenantId: null != e ? e : "",
                            result: f.result,
                            text: f.text,
                            histories: f.histories
                        }),
                        w(null)
                    }
                }
            }
            , [y, f])
              , K = (0,
            i.useCallback)(e => {
                if (e instanceof a.T) {
                    let t = e.findDetails(d.Dr)[0];
                    t ? b(t) : B(!0)
                } else
                    B(!0)
            }
            , [b])
              , J = (0,
            i.useCallback)(async e => {
                T(!0),
                B(!1),
                n({
                    type: o.w2.QUESTION_END
                }),
                n({
                    type: o.w2.ANSWER_START
                });
                try {
                    let t = await V(e);
                    if (!t)
                        return;
                    let n = t.answerLogIds[0];
                    return n && (await D(n, e),
                    await q(n)),
                    A(t.transitionCommand),
                    H(),
                    z(e),
                    n
                } catch (e) {
                    K(e)
                } finally {
                    T(!1)
                }
            }
            , [n, V, D, q, z, K])
              , F = (0,
            i.useCallback)(async () => {
                await N(),
                E || A(void 0)
            }
            , [E, N, A])
              , Q = (0,
            i.useCallback)(async e => {
                A(o.Lx.fromJson({}))
            }
            , [A]);
            return {
                answerMode: _,
                isStartAnswering: I,
                isNextResult: E,
                isError: M,
                pendingAnswerProcess: O,
                startAnswerProcess: g ? Q : J,
                endAnswerProcess: F
            }
        }
        ;
        n(49226);
        var g = n(13620);
        let y = () => {
            let e = (0,
            s.md)(x.bQ);
            return {
                getExplainSource: (0,
                i.useCallback)( () => {
                    var t;
                    let n = null == e ? void 0 : e.contentResource
                      , r = null == e ? void 0 : e.id;
                    switch (null == n ? void 0 : null === (t = n.explain) || void 0 === t ? void 0 : t.name) {
                    case "explain_classic_qubena":
                        return {
                            id: r,
                            src: function(e) {
                                var t;
                                return {
                                    type: "ClassicQubena",
                                    resources: (null !== (t = e.explain.resources.content_image) && void 0 !== t ? t : []).map(e => {
                                        var t;
                                        let n = e.path
                                          , r = JSON.parse(e.meta)
                                          , a = null !== (t = r.frames) && void 0 !== t ? t : 0
                                          , s = r.time_ms;
                                        return {
                                            path: n,
                                            frames: a,
                                            length: s ? 1e3 * s : void 0
                                        }
                                    }
                                    ).map(e => ({
                                        url: e.path,
                                        length: e.length
                                    }))
                                }
                            }(n)
                        };
                    case "explain_image":
                        return {
                            id: r,
                            src: function(e) {
                                var t;
                                return {
                                    type: "Image",
                                    resources: (null !== (t = e.explain.resources.content_image) && void 0 !== t ? t : []).map(e => {
                                        var t;
                                        let n = e.path
                                          , r = JSON.parse(e.meta)
                                          , a = null !== (t = r.frames) && void 0 !== t ? t : 0
                                          , s = r.time_ms;
                                        return {
                                            path: n,
                                            frames: a,
                                            length: s ? 1e3 * s : void 0
                                        }
                                    }
                                    ).map(e => ({
                                        url: e.path,
                                        length: e.length
                                    }))
                                }
                            }(n)
                        };
                    default:
                        return
                    }
                }
                , [e])
            }
        }
          , f = () => {
            let e = (0,
            s.md)(x.bQ);
            return {
                getHintSource: (0,
                i.useCallback)( () => {
                    var t;
                    let n = null == e ? void 0 : e.contentResource;
                    switch (null == n ? void 0 : null === (t = n.hint) || void 0 === t ? void 0 : t.name) {
                    case "hint_classic_qubena":
                        return function(e) {
                            var t;
                            let n = null !== (t = e.hint.resources.content_image) && void 0 !== t ? t : []
                              , r = 0 !== n.length ? n[0].path : void 0;
                            return r ? {
                                type: "ClassicQubena",
                                image: r
                            } : void 0
                        }(n);
                    case "hint_simple":
                        return function(e) {
                            var t;
                            return {
                                type: "Simple",
                                components: JSON.parse(null !== (t = e.hint.body) && void 0 !== t ? t : "{}").components.map(e => {
                                    var t, n, r;
                                    return {
                                        text: null !== (t = e.text) && void 0 !== t ? t : "",
                                        align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                        type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                    }
                                }
                                )
                            }
                        }(n);
                    default:
                        return
                    }
                }
                , [e])
            }
        }
          , w = () => {
            let e = (0,
            s.md)(x.bQ)
              , t = null == e ? void 0 : e.contentResource;
            return {
                hasDescription: (0,
                i.useCallback)( () => {
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
                            let n = JSON.parse(null !== (t = e.description.body) && void 0 !== t ? t : "{}").components;
                            return !!n && 0 !== n.length && n.find(e => 0 !== e.text.length)
                        }(t) || 0 < Object.entries(t.description.resources).length || 0 < Object.keys(t.args).length
                    }
                }
                , [t])
            }
        }
    }
    ,
    49226: (e, t, n) => {
        n.d(t, {
            L: () => i
        });
        var r = n(34843)
          , a = n(96540)
          , s = n(4799);
        let i = () => {
            let e = (0,
            r.md)(s.bQ);
            return {
                getDescriptionSource: (0,
                a.useCallback)( () => {
                    let t = null == e ? void 0 : e.contentResource;
                    switch (null == t ? void 0 : t.description.name) {
                    case "ad_classic_qubena":
                        return function(e) {
                            var t;
                            let n = null !== (t = e.description.resources.answer_content_image) && void 0 !== t ? t : [];
                            return {
                                type: "ClassicQubena",
                                image: 0 !== n.length ? n[0].path : void 0
                            }
                        }(t);
                    case "ad_empty":
                        return {
                            type: "Empty",
                            parameter: void 0
                        };
                    case "ad_english_word":
                        return function(e) {
                            var t, n, r, a, s, i, l, o, d, c, u, x, m, p, h, g, y;
                            let f = e.args
                              , w = null !== (t = f.target_word) && void 0 !== t ? t : ""
                              , v = null !== (n = f.part_of_speech) && void 0 !== n ? n : ""
                              , j = null !== (r = f.variant_form) && void 0 !== r ? r : ""
                              , b = null !== (a = f.countability) && void 0 !== a ? a : ""
                              , S = null !== (s = f.base_form) && void 0 !== s ? s : ""
                              , A = null !== (i = f.word_usage_and_meaning) && void 0 !== i ? i : ""
                              , C = null !== (l = f.singular_form) && void 0 !== l ? l : void 0
                              , k = null !== (o = f.plural_form) && void 0 !== o ? o : void 0
                              , I = null !== (d = f.third_parson_singular) && void 0 !== d ? d : void 0
                              , T = null !== (c = f.past_tense) && void 0 !== c ? c : void 0
                              , M = null !== (u = f.present_participle) && void 0 !== u ? u : void 0
                              , B = null !== (x = f.past_participle) && void 0 !== x ? x : void 0
                              , _ = null !== (m = f.positive_degree) && void 0 !== m ? m : void 0
                              , E = null !== (p = f.comparative_degree) && void 0 !== p ? p : void 0;
                            return {
                                type: "EnglishWord",
                                parameter: {
                                    targetWord: w,
                                    partOfSpeech: v,
                                    variantForm: j,
                                    countability: b,
                                    baseForm: S,
                                    wordUsageAndMeaning: A,
                                    singularForm: C,
                                    pluralForm: k,
                                    thirdParsonSingular: I,
                                    pastTense: T,
                                    presentParticiple: M,
                                    pastParticiple: B,
                                    positiveDegree: _,
                                    comparativeDegree: E,
                                    superlativeDegree: null !== (h = f.superlative_degree) && void 0 !== h ? h : void 0,
                                    exampleUsage: null !== (g = f.example_usage) && void 0 !== g ? g : void 0,
                                    meaningOfExample: null !== (y = f.meaning_of_example) && void 0 !== y ? y : void 0
                                }
                            }
                        }(t);
                    case "ad_english_word_v2":
                        return function(e) {
                            var t, n, r, a, s, i, l, o, d, c, u, x, m, p, h, g, y;
                            let f = e.args
                              , w = null !== (t = f.target_word) && void 0 !== t ? t : ""
                              , v = null !== (n = f.part_of_speech) && void 0 !== n ? n : ""
                              , j = null !== (r = f.variant_form) && void 0 !== r ? r : ""
                              , b = null !== (a = f.countability) && void 0 !== a ? a : ""
                              , S = null !== (s = f.base_form) && void 0 !== s ? s : ""
                              , A = null !== (i = f.word_usage_and_meaning) && void 0 !== i ? i : ""
                              , C = null !== (l = f.singular_form) && void 0 !== l ? l : void 0
                              , k = null !== (o = f.plural_form) && void 0 !== o ? o : void 0
                              , I = null !== (d = f.third_parson_singular) && void 0 !== d ? d : void 0
                              , T = null !== (c = f.past_tense) && void 0 !== c ? c : void 0
                              , M = null !== (u = f.present_participle) && void 0 !== u ? u : void 0
                              , B = null !== (x = f.past_participle) && void 0 !== x ? x : void 0
                              , _ = null !== (m = f.positive_degree) && void 0 !== m ? m : void 0
                              , E = null !== (p = f.comparative_degree) && void 0 !== p ? p : void 0;
                            return {
                                type: "EnglishWordV2",
                                parameter: {
                                    targetWord: w,
                                    partOfSpeech: v,
                                    variantForm: j,
                                    countability: b,
                                    baseForm: S,
                                    wordUsageAndMeaning: A,
                                    singularForm: C,
                                    pluralForm: k,
                                    thirdParsonSingular: I,
                                    pastTense: T,
                                    presentParticiple: M,
                                    pastParticiple: B,
                                    positiveDegree: _,
                                    comparativeDegree: E,
                                    superlativeDegree: null !== (h = f.superlative_degree) && void 0 !== h ? h : void 0,
                                    exampleUsage: null !== (g = f.example_usage) && void 0 !== g ? g : void 0,
                                    meaningOfExample: null !== (y = f.meaning_of_example) && void 0 !== y ? y : void 0
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
                            var t, n, r;
                            let a = e.args;
                            return {
                                type: "KanjiDefault",
                                parameter: {
                                    phrase: null !== (t = a.phrase) && void 0 !== t ? t : "",
                                    phrasePronunciation: null !== (n = a.phrase_pronunciation) && void 0 !== n ? n : "",
                                    grade: parseInt(null !== (r = a.grade) && void 0 !== r ? r : "0")
                                }
                            }
                        }(t);
                    case "ad_kanji_self_judgement":
                        return function(e) {
                            var t, n, r;
                            let a = JSON.parse(null !== (t = e.description.body) && void 0 !== t ? t : "{}");
                            return {
                                type: "KanjiSelfJudgement",
                                parameter: {
                                    components: null !== (n = a.components) && void 0 !== n ? n : {},
                                    modelAnswerString: null !== (r = a.model_answer_string) && void 0 !== r ? r : ""
                                }
                            }
                        }(t);
                    case "ad_kanji_selfjudgement":
                        return function(e) {
                            var t, n, r;
                            let a = e.args;
                            return {
                                type: "KanjiSelfJudgementLegacy",
                                parameter: {
                                    questionWord: null !== (t = a.question_word) && void 0 !== t ? t : "",
                                    questionWordOthers: null !== (n = a.question_word_others) && void 0 !== n ? n : "",
                                    grade: parseInt(null !== (r = a.grade) && void 0 !== r ? r : "0")
                                }
                            }
                        }(t);
                    case "ad_simple":
                        return function(e) {
                            var t, n;
                            let r = e.description;
                            return {
                                type: "Simple",
                                parameter: {
                                    components: JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}").components.map(e => {
                                        var t, n, r;
                                        return {
                                            text: null !== (t = e.text) && void 0 !== t ? t : "",
                                            align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                            type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                        }
                                    }
                                    )
                                },
                                images: (null !== (n = r.resources.ad_image_section) && void 0 !== n ? n : []).map(e => e.path)
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
    13620: (e, t, n) => {
        n.d(t, {
            $: () => i
        });
        var r = n(34843)
          , a = n(96540)
          , s = n(4799);
        let i = () => {
            let e = (0,
            r.md)(s.bQ);
            return {
                getQuestionSource: (0,
                a.useCallback)( () => {
                    let t = null == e ? void 0 : e.contentResource;
                    switch (null == t ? void 0 : t.question.name) {
                    case "qp_a1":
                        return function(e) {
                            var t, n;
                            let r = e.question
                              , a = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                              , s = a.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , i = a.main_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , l = a.sub_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , o = null !== (n = r.resources.image_section) && void 0 !== n ? n : [];
                            return {
                                type: "A1",
                                parameter: {
                                    questionSection: s,
                                    mainSection: i,
                                    subSection: l
                                },
                                image: 0 !== o.length ? o[0].path : void 0
                            }
                        }(t);
                    case "qp_a2":
                        return function(e) {
                            var t, n;
                            let r = e.question
                              , a = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                              , s = a.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , i = a.main_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , l = a.sub_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , o = null !== (n = r.resources.image_section) && void 0 !== n ? n : [];
                            return {
                                type: "A2",
                                parameter: {
                                    questionSection: s,
                                    mainSection: i,
                                    subSection: l
                                },
                                image: 0 !== o.length ? o[0].path : void 0
                            }
                        }(t);
                    case "qp_a2_selection":
                        return function(e) {
                            var t, n;
                            let r = e.question
                              , a = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                              , s = a.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , i = a.main_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , l = a.sub_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , o = null !== (n = r.resources.image_section) && void 0 !== n ? n : [];
                            return {
                                type: "A2Selection",
                                parameter: {
                                    questionSection: s,
                                    mainSection: i,
                                    subSection: l
                                },
                                image: 0 !== o.length ? o[0].path : void 0
                            }
                        }(t);
                    case "qp_b1":
                        return function(e) {
                            var t, n, r;
                            let a = e.question
                              , s = JSON.parse(null !== (t = a.body) && void 0 !== t ? t : "{}")
                              , i = s.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , l = s.main_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , o = s.sub_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , d = null !== (n = s.a_side_atom_name) && void 0 !== n ? n : ""
                              , c = null !== (r = a.resources.image_section) && void 0 !== r ? r : [];
                            return {
                                type: "B1",
                                parameter: {
                                    questionSection: i,
                                    mainSection: l,
                                    subSection: o,
                                    aSideAtomName: d
                                },
                                image: 0 !== c.length ? c[0].path : void 0
                            }
                        }(t);
                    case "qp_b2":
                        return function(e) {
                            var t, n, r;
                            let a = e.question
                              , s = JSON.parse(null !== (t = a.body) && void 0 !== t ? t : "{}")
                              , i = s.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , l = s.main_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , o = s.sub_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , d = null !== (n = s.a_side_atom_name) && void 0 !== n ? n : ""
                              , c = null !== (r = a.resources.image_section) && void 0 !== r ? r : [];
                            return {
                                type: "B2",
                                parameter: {
                                    questionSection: i,
                                    mainSection: l,
                                    subSection: o,
                                    aSideAtomName: d
                                },
                                image: 0 !== c.length ? c[0].path : void 0
                            }
                        }(t);
                    case "qp_b2_selection":
                        return function(e) {
                            var t, n, r;
                            let a = e.question
                              , s = JSON.parse(null !== (t = a.body) && void 0 !== t ? t : "{}")
                              , i = s.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , l = s.main_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , o = s.sub_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , d = null !== (n = s.a_side_atom_name) && void 0 !== n ? n : ""
                              , c = null !== (r = a.resources.image_section) && void 0 !== r ? r : [];
                            return {
                                type: "B2Selection",
                                parameter: {
                                    questionSection: i,
                                    mainSection: l,
                                    subSection: o,
                                    aSideAtomName: d
                                },
                                image: 0 !== c.length ? c[0].path : void 0
                            }
                        }(t);
                    case "qp_classic_qubena":
                        return function(e) {
                            var t;
                            let n = null !== (t = e.question.resources.question_content_image) && void 0 !== t ? t : [];
                            return {
                                type: "ClassicQubena",
                                image: 0 !== n.length ? n[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_L":
                        return function(e) {
                            var t;
                            let n = null !== (t = e.question.resources.listening_section) && void 0 !== t ? t : [];
                            return {
                                type: "EnglishWordL",
                                audio: 0 !== n.length ? n[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_L1":
                        return function(e) {
                            var t;
                            let n = null !== (t = e.question.resources.listening_section) && void 0 !== t ? t : [];
                            return {
                                type: "EnglishWordL1",
                                audio: 0 !== n.length ? n[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_L2":
                        return function(e) {
                            var t;
                            let n = null !== (t = e.question.resources.listening_section) && void 0 !== t ? t : [];
                            return {
                                type: "EnglishWordL2",
                                audio: 0 !== n.length ? n[0].path : void 0
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
                            var t, n;
                            let r = e.question
                              , a = null !== (t = e.args.target_word) && void 0 !== t ? t : ""
                              , s = null !== (n = r.resources.listening_section) && void 0 !== n ? n : [];
                            return {
                                type: "EnglishWordRL",
                                parameter: {
                                    mainText: a
                                },
                                audio: 0 !== s.length ? s[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_RL_v2":
                        return function(e) {
                            var t, n;
                            let r = e.question
                              , a = null !== (t = e.args.question_text_for_rxl_v_2) && void 0 !== t ? t : ""
                              , s = null !== (n = r.resources.listening_section) && void 0 !== n ? n : [];
                            return {
                                type: "EnglishWordRLv2",
                                parameter: {
                                    mainText: a
                                },
                                audio: 0 !== s.length ? s[0].path : void 0
                            }
                        }(t);
                    case "qp_english_word_W":
                        return function(e) {
                            var t, n, r, a;
                            let s = e.args
                              , i = null !== (t = s.question_text_for_multi_writing) && void 0 !== t ? t : void 0;
                            return {
                                type: "EnglishWordW",
                                parameter: {
                                    questionText: i,
                                    variantForm: null !== (n = s.variant_form) && void 0 !== n ? n : "",
                                    baseForm: null !== (r = s.base_form) && void 0 !== r ? r : "",
                                    wordUsageAndMeaning: null !== (a = s.word_usage_and_meaning) && void 0 !== a ? a : ""
                                }
                            }
                        }(t);
                    case "qp_english_word_WL":
                        return function(e) {
                            var t, n, r, a, s, i;
                            let l = e.question
                              , o = e.args
                              , d = null !== (t = o.target_word) && void 0 !== t ? t : ""
                              , c = null !== (n = o.part_of_speech) && void 0 !== n ? n : ""
                              , u = null !== (r = o.variant_form) && void 0 !== r ? r : ""
                              , x = null !== (a = o.base_form) && void 0 !== a ? a : ""
                              , m = null !== (s = o.word_usage_and_meaning) && void 0 !== s ? s : ""
                              , p = null !== (i = l.resources.listening_section) && void 0 !== i ? i : [];
                            return {
                                type: "EnglishWordWL",
                                parameter: {
                                    targetWord: d,
                                    partOfSpeech: c,
                                    variantForm: u,
                                    baseForm: x,
                                    wordUsageAndMeaning: m
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
                            var t, n, r, a;
                            let s = e.args
                              , i = null !== (t = s.question_word) && void 0 !== t ? t : "";
                            return {
                                type: "KanjiNazori",
                                parameter: {
                                    questionWord: i,
                                    questionWordPronunciation: null !== (n = s.question_word_pronunciation) && void 0 !== n ? n : "",
                                    example: null !== (r = s.example) && void 0 !== r ? r : "",
                                    grade: parseInt(null !== (a = s.grade) && void 0 !== a ? a : "0")
                                }
                            }
                        }(t);
                    case "qp_kanji_selfjudgement":
                        return function(e) {
                            var t, n, r, a;
                            let s = e.args
                              , i = null !== (t = s.question_word) && void 0 !== t ? t : "";
                            return {
                                type: "KanjiSelfJudgement",
                                parameter: {
                                    questionWord: i,
                                    questionWordPronunciation: null !== (n = s.question_word_pronunciation) && void 0 !== n ? n : "",
                                    example: null !== (r = s.example) && void 0 !== r ? r : "",
                                    grade: parseInt(null !== (a = s.grade) && void 0 !== a ? a : "0")
                                }
                            }
                        }(t);
                    case "qp_kanji_yomi":
                        return function(e) {
                            var t, n, r;
                            let a = e.args;
                            return {
                                type: "KanjiYomi",
                                parameter: {
                                    questionWord: null !== (t = a.question_word) && void 0 !== t ? t : "",
                                    example: null !== (n = a.example) && void 0 !== n ? n : "",
                                    grade: parseInt(null !== (r = a.grade) && void 0 !== r ? r : "0")
                                }
                            }
                        }(t);
                    case "qp_simple":
                        return function(e) {
                            var t, n, r, a, s;
                            let i = e.question
                              , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                              , o = l.question_section.map(e => {
                                var t;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : ""
                                }
                            }
                            )
                              , d = l.main_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , c = l.sub_section.map(e => {
                                var t, n, r;
                                return {
                                    text: null !== (t = e.text) && void 0 !== t ? t : "",
                                    align: null !== (n = e.align) && void 0 !== n ? n : "left",
                                    type: null !== (r = e.component_type) && void 0 !== r ? r : "text_line"
                                }
                            }
                            )
                              , u = (null !== (n = i.resources.small_image) && void 0 !== n ? n : []).map(e => e.path)
                              , x = (null !== (r = i.resources.image_tag) && void 0 !== r ? r : []).map(e => e.path)
                              , m = (null !== (a = i.resources.large_image) && void 0 !== a ? a : []).map(e => e.path)
                              , p = (null !== (s = i.resources.listening_section) && void 0 !== s ? s : []).map(e => e.path);
                            return {
                                type: "Simple",
                                parameter: {
                                    questionSection: o,
                                    mainSection: d,
                                    subSection: c
                                },
                                images: x,
                                smallImages: u,
                                largeImages: m,
                                audio: p && 0 !== p.length ? p[0] : void 0
                            }
                        }(t);
                    case "qp_qubena_draw":
                        return function(e) {
                            var t, n, r, a, s;
                            let i = e.question
                              , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}").predefined_param
                              , o = (null !== (n = i.resources.small_image) && void 0 !== n ? n : []).map(e => e.path)
                              , d = (null !== (r = i.resources.image_tag) && void 0 !== r ? r : []).map(e => e.path)
                              , c = (null !== (a = i.resources.large_image) && void 0 !== a ? a : []).map(e => e.path)
                              , u = (null !== (s = i.resources.listening_section) && void 0 !== s ? s : []).map(e => e.path);
                            return {
                                type: "QubenaDraw",
                                parameter: {
                                    predefinedParam: l
                                },
                                images: d,
                                smallImages: o,
                                largeImages: c,
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
    41355: (e, t, n) => {
        n.d(t, {
            UH: () => F,
            D1: () => G,
            Y9: () => P,
            Ck: () => en,
            $A: () => R
        });
        var r = n(74848)
          , a = n(34843)
          , s = n(52199)
          , i = n(14705)
          , l = n(44103)
          , o = n(4799)
          , d = n(96540)
          , c = n(60901);
        let u = e => {
            let {enabled: t} = e
              , n = (0,
            a.Xr)(o.Wz)
              , s = (0,
            d.useCallback)(n, [n]);
            return (0,
            r.jsxs)(c.u4, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: i.Tj.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: s,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "ExplainButton",
                "data-sentry-source-file": "ExplainButton.tsx",
                children: [(0,
                r.jsx)(c.Bj, {
                    name: "explain",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    "data-sentry-element": "Template",
                    "data-sentry-source-file": "ExplainButton.tsx"
                }), (0,
                r.jsx)(c.EY, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "ExplainButton.tsx",
                    children: "説明"
                })]
            })
        }
          , x = e => {
            let {enabled: t} = e
              , n = (0,
            a.Xr)(o.MR)
              , s = (0,
            d.useCallback)(n, [n]);
            return (0,
            r.jsxs)(c.u4, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: i.Tj.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: s,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "HintButton",
                "data-sentry-source-file": "HintButton.tsx",
                children: [(0,
                r.jsx)(c.Bj, {
                    name: "hint",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    "data-sentry-element": "Template",
                    "data-sentry-source-file": "HintButton.tsx"
                }), (0,
                r.jsx)(c.EY, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "HintButton.tsx",
                    children: "Hint"
                })]
            })
        }
        ;
        var m = n(94963)
          , p = n(39400)
          , h = n(82926)
          , g = n(31854)
          , y = n(93262)
          , f = n(74609)
          , w = n(96995)
          , v = n(1009)
          , j = n(53146)
          , b = n(20130)
          , S = n(49382)
          , A = n(8936);
        let C = () => {
            var e;
            let t = (0,
            a.md)(o.bQ)
              , n = (0,
            a.md)(o.Sx)
              , s = (0,
            a.md)(o.XO)
              , i = null == t ? void 0 : t.mode
              , l = null == t ? void 0 : t.menuContext
              , d = l ? "".concat(l.courseName, " ").concat(l.rootStructureElementName).concat(l.intermediateSequence) : ""
              , c = null !== (e = null == l ? void 0 : l.entryStructureElementName) && void 0 !== e ? e : "";
            return (0,
            r.jsx)(k, {
                visible: n,
                title: d,
                subTitle: c,
                mode: null != i ? i : "Basic",
                top: 56,
                left: 24,
                soundEffectEnabled: s,
                "data-sentry-element": "MainMenuView",
                "data-sentry-component": "MainMenu",
                "data-sentry-source-file": "MainMenu.tsx"
            })
        }
          , k = e => {
            let {visible: t, title: n, subTitle: l, mode: u, top: x=0, left: f=0, soundEffectEnabled: C, onToggleSoundEffect: k} = e
              , T = (0,
            a.Xr)(b.XZ)
              , M = (0,
            a.Xr)(b.hh)
              , B = (0,
            a.Xr)(b.rl)
              , _ = (0,
            a.Xr)(o.Sx)
              , E = (0,
            a.Xr)(o.bG)
              , R = (0,
            a.Xr)(j.nu)
              , P = (0,
            a.Xr)(S.FH)
              , {isLoading: W, isError: L, sendCursorPauseCommand: N} = (0,
            A.ri)()
              , {facilitators: O} = (0,
            v._)()
              , V = (0,
            d.useCallback)(e => {
                e.stopPropagation(),
                P("backward"),
                _(!1),
                N()
            }
            , [P, N, _])
              , D = (0,
            d.useCallback)(e => {
                e.stopPropagation(),
                E(),
                null == k || k()
            }
            , [E, k])
              , q = (0,
            d.useCallback)(e => {
                e.stopPropagation(),
                M(O),
                B("プレイ画面"),
                T(!0),
                _(!1)
            }
            , [O, M, _, B, T]);
            return (0,
            d.useEffect)( () => {
                L && R()
            }
            , [L, R]),
            (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(m.A, {
                    open: t,
                    invisible: !0,
                    onClick: () => _(!1),
                    "data-sentry-element": "Backdrop",
                    "data-sentry-source-file": "MainMenu.tsx"
                }), (0,
                r.jsx)(w.P.div, {
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
                    "data-sentry-element": "unknown",
                    "data-sentry-source-file": "MainMenu.tsx",
                    children: (0,
                    r.jsxs)(p.A, {
                        sx: {
                            minWidth: 240,
                            maxWidth: 280,
                            bgcolor: i.Tj.white,
                            border: "1px solid ".concat(i.Tj.onSurfaceWeak2),
                            borderRadius: 2,
                            userSelect: "none"
                        },
                        "data-sentry-element": "List",
                        "data-sentry-source-file": "MainMenu.tsx",
                        children: [(0,
                        r.jsxs)(h.Ay, {
                            sx: {
                                display: "inline-block"
                            },
                            "data-sentry-element": "ListItem",
                            "data-sentry-source-file": "MainMenu.tsx",
                            children: [(0,
                            r.jsx)(c.EY, {
                                color: "onSurface",
                                size: "sm",
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "MainMenu.tsx",
                                children: n
                            }), (0,
                            r.jsx)(c.EY, {
                                color: "onSurface",
                                size: "sm",
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "MainMenu.tsx",
                                children: l
                            }), "Review" === u && (0,
                            r.jsx)(c.EY, {
                                color: "correct",
                                size: "sm",
                                children: "復習中"
                            })]
                        }), (0,
                        r.jsxs)(g.A, {
                            sx: {
                                display: "block",
                                py: 0,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    i.au)("black", "hover")
                                }
                            },
                            onClick: V,
                            "data-sentry-element": "ListItemButton",
                            "data-sentry-source-file": "MainMenu.tsx",
                            children: [(0,
                            r.jsx)(s.VP, {
                                justifyContent: "center",
                                width: "100%",
                                height: 56,
                                px: 1,
                                "data-sentry-element": "Column",
                                "data-sentry-source-file": "MainMenu.tsx",
                                children: (0,
                                r.jsx)(c.EY, {
                                    size: "md",
                                    color: "important",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "MainMenu.tsx",
                                    children: "学習を中断する"
                                })
                            }), (0,
                            r.jsx)(y.A, {
                                sx: {
                                    borderColor: i.Tj.onSurfaceWeak3
                                },
                                "data-sentry-element": "Divider",
                                "data-sentry-source-file": "MainMenu.tsx"
                            })]
                        }), (0,
                        r.jsxs)(g.A, {
                            sx: {
                                display: "block",
                                py: 0,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    i.au)("black", "hover")
                                }
                            },
                            onClick: D,
                            "data-sentry-element": "ListItemButton",
                            "data-sentry-source-file": "MainMenu.tsx",
                            children: [(0,
                            r.jsxs)(s.fI, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                height: 56,
                                px: 1,
                                "data-sentry-element": "Row",
                                "data-sentry-source-file": "MainMenu.tsx",
                                children: [(0,
                                r.jsx)(c.EY, {
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "MainMenu.tsx",
                                    children: "こうか音"
                                }), (0,
                                r.jsx)(I, {
                                    checked: C,
                                    "data-sentry-element": "IOSSwitch",
                                    "data-sentry-source-file": "MainMenu.tsx"
                                })]
                            }), (0,
                            r.jsx)(y.A, {
                                sx: {
                                    borderColor: i.Tj.onSurfaceWeak3
                                },
                                "data-sentry-element": "Divider",
                                "data-sentry-source-file": "MainMenu.tsx"
                            })]
                        }), (0,
                        r.jsx)(g.A, {
                            sx: {
                                height: 48,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    i.au)("black", "hover")
                                }
                            },
                            onClick: q,
                            "data-sentry-element": "ListItemButton",
                            "data-sentry-source-file": "MainMenu.tsx",
                            children: (0,
                            r.jsx)(s.VP, {
                                px: 1,
                                "data-sentry-element": "Column",
                                "data-sentry-source-file": "MainMenu.tsx",
                                children: (0,
                                r.jsx)(c.EY, {
                                    size: "sm",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "MainMenu.tsx",
                                    children: "困っている事を送信する"
                                })
                            })
                        })]
                    })
                }), (0,
                r.jsx)(c.AV, {
                    isLoading: W,
                    "data-sentry-element": "LoadingPage",
                    "data-sentry-source-file": "MainMenu.tsx"
                })]
            })
        }
          , I = e => {
            let {checked: t} = e;
            return (0,
            r.jsx)(f.A, {
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
                                backgroundColor: i.Tj.primary,
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
                        backgroundColor: i.Tj.onSurfaceWeak2,
                        opacity: 1,
                        transition: "background-color .5s"
                    }
                },
                "data-sentry-element": "Switch",
                "data-sentry-component": "IOSSwitch",
                "data-sentry-source-file": "MainMenu.tsx"
            })
        }
        ;
        I.displayName = "IOSSwitch";
        let T = e => {
            let {onClick: t} = e
              , n = (0,
            a.md)(o.aR);
            return (0,
            r.jsx)(c.u4, {
                sx: {
                    width: 48,
                    height: 48,
                    backgroundColor: i.Tj.bg,
                    borderRadius: "50%"
                },
                onClick: t,
                disabled: n,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "MainMenuButton",
                "data-sentry-source-file": "MainMenuButton.tsx",
                children: (0,
                r.jsx)(c.Bj, {
                    name: "menu",
                    size: 40,
                    color: "onSurface",
                    "data-sentry-element": "Template",
                    "data-sentry-source-file": "MainMenuButton.tsx"
                })
            })
        }
        ;
        var M = n(43819);
        let B = d.memo(e => {
            let {ratio: t, color: n} = e;
            return (0,
            r.jsx)(M.A, {
                height: 16,
                borderRadius: 2,
                bgcolor: (0,
                i.au)("onSurface", .1),
                children: (0,
                r.jsx)(w.P.div, {
                    style: {
                        height: 16,
                        borderRadius: 8,
                        background: n
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
        B.displayName = "GradientBar";
        let _ = d.memo(e => {
            let {mode: t, ratio: n, visibleText: a} = e;
            return (0,
            r.jsxs)(s.fI, {
                width: "100%",
                children: [(0,
                r.jsx)(M.A, {
                    width: 34,
                    height: 16,
                    children: a && (0,
                    r.jsxs)(c.EY, {
                        size: "sm",
                        color: 0 === n ? "onSurfaceWeak1" : "Basic" === t ? "primary" : "correct",
                        fontWeight: "bold",
                        textAlign: "right",
                        children: [Math.floor(100 * n), "%"]
                    })
                }), (0,
                r.jsx)(s.hK, {
                    x: 1
                }), (0,
                r.jsx)(M.A, {
                    flex: 1,
                    alignItems: "center",
                    children: (0,
                    r.jsx)(B, {
                        ratio: n,
                        color: "Basic" === t ? i.K7.basicBar : i.K7.reviewBar
                    })
                })]
            })
        }
        );
        _.displayName = "ProgressBar";
        let E = e => {
            let {enabled: t, onClick: n} = e;
            return (0,
            r.jsxs)(c.u4, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: i.Tj.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: n,
                "data-sentry-element": "ButtonBase",
                "data-sentry-component": "TextbookButton",
                "data-sentry-source-file": "TextbookButton.tsx",
                children: [(0,
                r.jsx)(c.Bj, {
                    name: "textbook",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    "data-sentry-element": "Template",
                    "data-sentry-source-file": "TextbookButton.tsx"
                }), (0,
                r.jsx)(c.EY, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    "data-sentry-element": "Text",
                    "data-sentry-source-file": "TextbookButton.tsx",
                    children: "教科書"
                })]
            })
        }
          , R = 56
          , P = () => {
            let e = (0,
            a.md)(o.Br)
              , t = (0,
            a.md)(o.bQ)
              , n = (0,
            a.md)(o.AD)
              , s = null == t ? void 0 : t.mode
              , {displayTextbook: i, hasTextbookLink: d, handleClickProgramDigitalTextbook: c} = (0,
            l.iv)(null == t ? void 0 : t.id);
            if (!e || !s)
                return (0,
                r.jsx)(r.Fragment, {});
            let u = t.contentResource;
            return (0,
            r.jsx)(W, {
                reason: e,
                mode: s,
                progress: n,
                hasHint: !!u.hint,
                hasExplain: !!u.explain,
                displayTextbook: i(),
                hasTextbookLink: d(),
                handleClickTextbook: () => c(),
                "data-sentry-element": "HeaderView",
                "data-sentry-component": "Header",
                "data-sentry-source-file": "Header.tsx"
            })
        }
          , W = e => {
            let {reason: t, mode: n, progress: l, hasHint: d, hasExplain: c, displayTextbook: m, hasTextbookLink: p, handleClickTextbook: h} = e
              , g = (0,
            a.Xr)(o.Sx);
            return (0,
            r.jsxs)(s.fI, {
                height: R,
                px: 2,
                py: .5,
                alignContent: "center",
                sx: {
                    userSelect: "none"
                },
                "data-sentry-element": "Row",
                "data-sentry-component": "HeaderView",
                "data-sentry-source-file": "Header.tsx",
                children: [(0,
                r.jsx)(T, {
                    onClick: () => g(!0),
                    "data-sentry-element": "MainMenuButton",
                    "data-sentry-source-file": "Header.tsx"
                }), (0,
                r.jsx)(C, {
                    "data-sentry-element": "MainMenu",
                    "data-sentry-source-file": "Header.tsx"
                }), (0,
                r.jsx)(s.hK, {
                    x: 2,
                    "data-sentry-element": "Spacer",
                    "data-sentry-source-file": "Header.tsx"
                }), (0,
                r.jsxs)(s.fI, {
                    flex: 1,
                    marginY: 1.5,
                    p: .5,
                    bgcolor: i.Tj.bg,
                    borderRadius: 4,
                    "data-sentry-element": "Row",
                    "data-sentry-source-file": "Header.tsx",
                    children: [(0,
                    r.jsx)(s.hK, {
                        x: 1,
                        "data-sentry-element": "Spacer",
                        "data-sentry-source-file": "Header.tsx"
                    }), "StartFromReview" !== t && (0,
                    r.jsx)(_, {
                        mode: n,
                        ratio: l,
                        visibleText: !(("StartFromHome" === t || "ResumeFromHome" === t) && "Review" === n)
                    })]
                }), (0,
                r.jsx)(s.hK, {
                    x: 1.5,
                    "data-sentry-element": "Spacer",
                    "data-sentry-source-file": "Header.tsx"
                }), (0,
                r.jsx)(u, {
                    enabled: c,
                    "data-sentry-element": "ExplainButton",
                    "data-sentry-source-file": "Header.tsx"
                }), (0,
                r.jsx)(s.hK, {
                    x: 1,
                    "data-sentry-element": "Spacer",
                    "data-sentry-source-file": "Header.tsx"
                }), (0,
                r.jsx)(x, {
                    enabled: d,
                    "data-sentry-element": "HintButton",
                    "data-sentry-source-file": "Header.tsx"
                }), m && (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(s.hK, {
                        x: 1
                    }), (0,
                    r.jsx)(E, {
                        enabled: p,
                        onClick: h
                    })]
                })]
            })
        }
        ;
        var L = n(72290)
          , N = n(40961)
          , O = n(44175)
          , V = n(51940)
          , D = n(82549)
          , q = n(3053)
          , z = n(7143)
          , H = n(79369);
        let K = e => {
            let {count: t, selectedPageAnimTime: n, onChangePage: a, onClickSelectedPage: s} = e
              , [l,o] = (0,
            d.useState)(0)
              , c = (0,
            d.useRef)(null)
              , u = (0,
            d.useCallback)( () => {
                if (c.current && window.clearTimeout(c.current),
                !n)
                    return;
                let e = n / 100
                  , t = n => {
                    c.current = window.setTimeout( () => {
                        n ? o(0) : o(e => e < 100 ? e + 1 : (c.current && window.clearTimeout(c.current),
                        0)),
                        t()
                    }
                    , e)
                }
                ;
                t(!0)
            }
            , [n])
              , x = (0,
            d.useCallback)( (e, t) => {
                c.current && window.clearTimeout(c.current),
                o(0),
                a(t - 1)
            }
            , [a])
              , m = (0,
            d.useCallback)( () => {
                s(),
                u()
            }
            , [s, u])
              , p = (0,
            d.useCallback)(e => {
                switch (e.type) {
                case "previous":
                case "next":
                    return (0,
                    r.jsx)(J, {
                        ...e
                    });
                default:
                    return (0,
                    r.jsxs)(M.A, {
                        position: "relative",
                        zIndex: 1,
                        sx: {
                            userSelect: "none"
                        },
                        children: [(0,
                        r.jsx)(D.A, {
                            ...e,
                            sx: {
                                minWidth: 48,
                                height: 48,
                                margin: 0,
                                padding: 0,
                                fontSize: 16,
                                fontWeight: "bold",
                                color: e.selected ? i.Tj.onSurface : i.Tj.onSurfaceWeak1,
                                borderRadius: "50%",
                                "&.Mui-selected": {
                                    background: i.Tj.primaryWeak1,
                                    "&:hover": {
                                        background: i.Tj.primaryWeak1
                                    }
                                }
                            }
                        }), e.selected && (0,
                        r.jsx)(q.A, {
                            variant: "determinate",
                            value: l,
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
                                        i.au)("primary", "hover") : i.Tj.onSurfaceWeak4,
                                        zIndex: -1
                                    }
                                }
                            },
                            onClick: m
                        })]
                    })
                }
            }
            , [l, m]);
            return (0,
            d.useEffect)( () => (u(),
            () => {
                c.current && window.clearTimeout(c.current)
            }
            ), [u]),
            (0,
            r.jsx)(z.A, {
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
                onChange: x,
                "data-sentry-element": "Pagination",
                "data-sentry-component": "Pager",
                "data-sentry-source-file": "Pager.tsx"
            })
        }
          , J = (0,
        H.A)(D.A)(e => {
            let {disabled: t} = e;
            return {
                width: 56,
                height: 56,
                margin: 0,
                padding: 0,
                background: i.Tj.primary,
                borderRadius: "50%",
                visibility: t ? "hidden" : "visible",
                ":hover": {
                    background: i.Tj.primary
                },
                ".MuiPaginationItem-icon": {
                    width: 40,
                    height: 40,
                    color: i.Tj.white
                }
            }
        }
        )
          , F = () => {
            let e = (0,
            a.md)(o.xJ)
              , {getExplainSource: t} = (0,
            V.Ym)()
              , n = t();
            if (!n)
                return (0,
                r.jsx)(r.Fragment, {});
            let {id: s, src: i} = n;
            return 0 === i.resources.length ? (0,
            r.jsx)(r.Fragment, {}) : (0,
            r.jsx)(Q, {
                explain: i,
                visible: e,
                "data-sentry-element": "ExplainView",
                "data-sentry-component": "Explain",
                "data-sentry-source-file": "Explain.tsx"
            }, s)
        }
          , Q = e => {
            let {explain: t, visible: n} = e
              , l = (0,
            a.Xr)(o.P5)
              , [u,x] = (0,
            d.useState)(void 0)
              , [p,h] = (0,
            d.useState)(!1)
              , [g,y] = (0,
            d.useState)(!1)
              , f = (0,
            L.A)()
              , {windowHeight: w} = (0,
            O.xJ)()
              , v = (0,
            d.useCallback)( () => {
                g || l()
            }
            , [l, g])
              , j = (0,
            d.useCallback)(e => {
                h(e.currentTarget.scrollTop > 0)
            }
            , [])
              , b = (0,
            d.useCallback)(e => {
                e.stopPropagation()
            }
            , [])
              , S = (0,
            d.useCallback)(e => {
                x(t.resources[e])
            }
            , [t.resources])
              , A = (0,
            d.useCallback)( () => {
                x(e => (null == e ? void 0 : e.length) ? {
                    ...e,
                    url: "".concat(e.url, "?").concat(Date.now())
                } : e)
            }
            , []);
            (0,
            d.useEffect)( () => {
                let e = () => y(!1)
                  , t = () => y(!0);
                return document.addEventListener("pointerup", e),
                document.addEventListener("pointerdown", t),
                () => {
                    document.removeEventListener("pointerup", e),
                    document.removeEventListener("pointerdown", t)
                }
            }
            , []),
            (0,
            d.useEffect)( () => (x(t.resources[0]),
            () => {
                x(void 0)
            }
            ), [t.resources]),
            (0,
            d.useEffect)( () => {
                n || x(void 0)
            }
            , [n]);
            let C = t.resources.length > 1;
            return (0,
            N.createPortal)((0,
            r.jsx)(m.A, {
                open: n,
                onPointerDown: v,
                sx: {
                    zIndex: f.zIndex.modal
                },
                children: (0,
                r.jsxs)(M.A, {
                    maxWidth: 800,
                    maxHeight: "calc(100% - ".concat(48, "px)"),
                    marginX: 3,
                    bgcolor: i.Tj.surface,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    onPointerDown: b,
                    children: [(0,
                    r.jsxs)(M.A, {
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
                        i.au)("onSurface", .1)) : void 0,
                        sx: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        },
                        children: [(0,
                        r.jsx)(M.A, {
                            paddingLeft: 2,
                            children: (0,
                            r.jsx)(c.EY, {
                                size: "lg",
                                children: "説明"
                            })
                        }), (0,
                        r.jsx)(s.VP, {
                            height: 40,
                            sx: {
                                cursor: "pointer",
                                ":hover": {
                                    bgcolor: i.Tj.onSurfaceWeak3
                                }
                            },
                            onPointerDown: v,
                            children: (0,
                            r.jsx)(c.Bj, {
                                name: "close",
                                size: 40,
                                color: "onSurface"
                            })
                        })]
                    }), u && (C ? (0,
                    r.jsxs)(M.A, {
                        width: "100%",
                        marginTop: "".concat(48, "px"),
                        px: 2,
                        paddingBottom: 2,
                        children: [(0,
                        r.jsx)(s.ov, {
                            pt: 2,
                            children: (0,
                            r.jsx)(G, {
                                qmlType: t.type,
                                url: u.url,
                                maxHeight: w - 48 - 48 - 56 - 40
                            })
                        }), (0,
                        r.jsx)(M.A, {
                            pt: 2,
                            children: (0,
                            r.jsx)(K, {
                                count: t.resources.length,
                                selectedPageAnimTime: u.length,
                                onChangePage: S,
                                onClickSelectedPage: A
                            })
                        })]
                    }) : (0,
                    r.jsx)(M.A, {
                        width: "100%",
                        maxHeight: w - 48 - 48,
                        marginTop: "".concat(48, "px"),
                        px: 2,
                        pb: 2,
                        overflow: "auto",
                        onScroll: j,
                        children: (0,
                        r.jsx)(s.ov, {
                            pt: 2,
                            children: (0,
                            r.jsx)(G, {
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
        var X = n(23217);
        let Y = e => {
            let {url: t, maxHeight: n} = e;
            return (0,
            r.jsx)("img", {
                src: t,
                width: "100%",
                height: "100%",
                style: {
                    maxHeight: n
                },
                alt: "",
                "data-sentry-component": "ClassicQubena",
                "data-sentry-source-file": "ClassicQubena.tsx"
            })
        }
          , U = e => {
            let {url: t, maxHeight: n} = e;
            return (0,
            r.jsx)("img", {
                src: t,
                width: "100%",
                height: "100%",
                style: {
                    maxHeight: n
                },
                alt: "",
                "data-sentry-component": "Image",
                "data-sentry-source-file": "Image.tsx"
            })
        }
          , G = e => {
            let {qmlType: t, url: n, maxHeight: a, wheelDisabled: s} = e;
            return (0,
            r.jsx)(X.GT, {
                wheel: {
                    wheelDisabled: s
                },
                panning: {
                    disabled: !0
                },
                doubleClick: {
                    mode: "reset"
                },
                "data-sentry-element": "TransformWrapper",
                "data-sentry-component": "ExplainImage",
                "data-sentry-source-file": "ExplainImage.tsx",
                children: (0,
                r.jsxs)(X.WZ, {
                    "data-sentry-element": "TransformComponent",
                    "data-sentry-source-file": "ExplainImage.tsx",
                    children: ["ClassicQubena" === t && (0,
                    r.jsx)(Y, {
                        url: n,
                        maxHeight: a
                    }), "Image" === t && (0,
                    r.jsx)(U, {
                        url: n,
                        maxHeight: a
                    })]
                })
            })
        }
          , $ = e => {
            switch (e.type) {
            case "ClassicQubena":
                return (0,
                r.jsx)(Z, {
                    source: e
                });
            case "Simple":
                return (0,
                r.jsx)(et, {
                    source: e
                })
            }
        }
          , Z = e => {
            let {source: t} = e;
            return (0,
            r.jsx)(M.A, {
                p: 2,
                "data-sentry-element": "Box",
                "data-sentry-component": "ClassicQubena",
                "data-sentry-source-file": "ClassicQubena.tsx",
                children: (0,
                r.jsx)("img", {
                    src: t.image,
                    width: "100%",
                    height: "100%",
                    alt: ""
                })
            })
        }
        ;
        var ee = n(58031);
        let et = e => {
            let {source: t} = e;
            return (0,
            r.jsx)("div", {
                className: "question-area",
                style: {
                    padding: "16px"
                },
                "data-sentry-component": "Simple",
                "data-sentry-source-file": "Simple.tsx",
                children: t.components.map( (e, n) => {
                    let a = t.components.length - 1 === n;
                    return (0,
                    r.jsx)("p", {
                        className: "question-text",
                        style: {
                            textAlign: e.align,
                            paddingBottom: a ? 0 : "16px"
                        },
                        children: (0,
                        r.jsx)(ee.qV, {
                            src: e.text.replaceAll("\n", "<br/>")
                        })
                    }, n)
                }
                )
            })
        }
          , en = () => {
            let e = (0,
            a.md)(o.Hg)
              , {getHintSource: t} = (0,
            V.ID)()
              , n = t();
            return n ? (0,
            r.jsx)(er, {
                hint: n,
                visible: e,
                "data-sentry-element": "HintView",
                "data-sentry-component": "Hint",
                "data-sentry-source-file": "Hint.tsx"
            }) : (0,
            r.jsx)(r.Fragment, {})
        }
          , er = e => {
            let {hint: t, visible: n} = e
              , l = (0,
            a.Xr)(o.By)
              , [u,x] = (0,
            d.useState)(!1)
              , [p,h] = (0,
            d.useState)(!1)
              , g = (0,
            L.A)()
              , {windowHeight: y} = (0,
            O.xJ)()
              , f = (0,
            d.useCallback)( () => {
                p || l()
            }
            , [l, p])
              , w = (0,
            d.useCallback)(e => {
                x(e.currentTarget.scrollTop > 0)
            }
            , [])
              , v = (0,
            d.useCallback)(e => {
                e.stopPropagation()
            }
            , []);
            return (0,
            d.useEffect)( () => {
                let e = () => h(!1)
                  , t = () => h(!0);
                return document.addEventListener("pointerup", e),
                document.addEventListener("pointerdown", t),
                () => {
                    document.removeEventListener("pointerup", e),
                    document.removeEventListener("pointerdown", t)
                }
            }
            , []),
            (0,
            N.createPortal)((0,
            r.jsx)(m.A, {
                open: n,
                onPointerDown: f,
                sx: {
                    zIndex: g.zIndex.modal
                },
                children: (0,
                r.jsxs)(M.A, {
                    width: "100%",
                    maxWidth: 800,
                    maxHeight: "calc(100% - ".concat(48, "px)"),
                    marginX: 3,
                    bgcolor: i.Tj.surface,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    sx: {
                        userSelect: "none"
                    },
                    onPointerDown: v,
                    children: [(0,
                    r.jsxs)(M.A, {
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
                        i.au)("onSurface", .1)) : void 0,
                        sx: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        },
                        children: [(0,
                        r.jsx)(M.A, {
                            paddingLeft: 1.5,
                            children: (0,
                            r.jsx)(c.EY, {
                                size: "lg",
                                children: "Hint"
                            })
                        }), (0,
                        r.jsx)(s.VP, {
                            height: 40,
                            sx: {
                                cursor: "pointer",
                                ":hover": {
                                    bgcolor: i.Tj.onSurfaceWeak3
                                },
                                borderRadius: "50%"
                            },
                            onPointerDown: f,
                            children: (0,
                            r.jsx)(c.Bj, {
                                name: "close",
                                size: 40,
                                color: "onSurface"
                            })
                        })]
                    }), (0,
                    r.jsx)(M.A, {
                        marginTop: "".concat(48, "px"),
                        width: "100%",
                        maxHeight: y - 48 - 48,
                        overflow: "auto",
                        onScroll: w,
                        children: (0,
                        r.jsx)(X.GT, {
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
                            r.jsx)(X.WZ, {
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
    8936: (e, t, n) => {
        n.d(t, {
            xC: () => r,
            n7: () => u,
            Kz: () => x,
            E: () => m,
            MM: () => g,
            sX: () => y,
            Gs: () => v,
            l4: () => b,
            dh: () => i,
            pz: () => M,
            PM: () => B,
            bd: () => F,
            QR: () => E,
            l2: () => W,
            ri: () => D,
            i_: () => q
        });
        let r = () => ({
            convertInputToAnswerText: e => e.trim().replaceAll("　", " ").replaceAll(/(\s)\1{1,}/g, " ").replaceAll("‘", "'").replaceAll("’", "'").replaceAll("`", "'").replaceAll("・", "\xb7").replaceAll("＝", "=").replaceAll("％", "%").replaceAll("＋", "+").replaceAll("−", "-").replaceAll("，", ",").replaceAll("．", ".").replaceAll("？", "?").replaceAll("！", "!").replaceAll("＄", "$").replaceAll("￥", "\xa5").replaceAll("“", '"').replaceAll("”", '"').replaceAll("‐", "-").replaceAll("＆", "&").replaceAll(/[Ａ-Ｚａ-ｚ０-９]/g, e => String.fromCharCode(e.charCodeAt(0) - 65248))
        });
        var a = n(96540)
          , s = n(46471);
        let i = (e, t) => {
            let[n,r] = (0,
            a.useState)(!1)
              , [i,l] = (0,
            a.useState)();
            return (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        var n, a, i, o, d, c;
                        let r = await (0,
                        s.Tj)(t, e)
                          , u = {}
                          , x = null === (n = r.answerPreviewData) || void 0 === n ? void 0 : n.resourceUrlMap[1]
                          , m = null === (a = r.answerPreviewData) || void 0 === a ? void 0 : a.resourceUrlMap[2]
                          , p = null === (i = r.answerPreviewData) || void 0 === i ? void 0 : i.resourceUrlMap[3]
                          , h = null === (o = r.answerPreviewData) || void 0 === o ? void 0 : o.score;
                        x && (u.speaking = x),
                        m && (u.memo = m),
                        h && (u.score = h.toString()),
                        p && (u.elsaEvaluationResultUrl = p);
                        let g = {
                            viewStateJSON: null !== (c = null === (d = r.answerPreviewData) || void 0 === d ? void 0 : d.viewState) && void 0 !== c ? c : "{}",
                            args: u
                        };
                        l(g)
                    } catch (e) {
                        console.log(e),
                        r(!0)
                    }
                }
                )()
            }
            , [e]),
            {
                replayResource: i,
                isError: n
            }
        }
        ;
        var l = n(34843)
          , o = n(78218)
          , d = n(53146)
          , c = n(4799);
        let u = e => {
            let[t,n] = (0,
            a.useState)(!1)
              , [r,i] = (0,
            a.useState)()
              , u = (0,
            l.md)(d.Dr)
              , x = (0,
            l.md)(c.cS);
            return (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        let n = new o.AY;
                        n.cmd.case = "cursorInitCommand",
                        n.cmd.value = e;
                        let r = (await (0,
                        s.l9)({
                            accessToken: u,
                            command: n,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })).appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 !== r.length) {
                            var t;
                            let e = r[0];
                            if ((null === (t = e.data) || void 0 === t ? void 0 : t.data.case) === "playSession") {
                                let t = e.data.data.value;
                                i(t)
                            }
                        }
                    } catch (e) {
                        console.error("useCursorInitCommand: ".concat(e)),
                        n(!0)
                    }
                }
                )()
            }
            , []),
            {
                playSession: r,
                isError: t
            }
        }
          , x = e => {
            let[t,n] = (0,
            a.useState)(!1)
              , [r,i] = (0,
            a.useState)()
              , u = (0,
            l.md)(d.Dr)
              , x = (0,
            l.md)(c.cS);
            return (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        let n = new o.AY;
                        n.cmd.case = "cursorResumeCommand",
                        n.cmd.value = e;
                        let r = (await (0,
                        s.l9)({
                            accessToken: u,
                            command: n,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })).appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 !== r.length) {
                            var t;
                            let e = r[0];
                            if ((null === (t = e.data) || void 0 === t ? void 0 : t.data.case) === "playSession") {
                                let t = e.data.data.value;
                                i(t)
                            }
                        }
                    } catch (e) {
                        console.error("useCursorResumeCommand: ".concat(e)),
                        n(!0)
                    }
                }
                )()
            }
            , [x, e]),
            {
                playSession: r,
                isError: t
            }
        }
          , m = () => {
            let e = (0,
            l.md)(d.Dr)
              , t = (0,
            l.md)(c.cS)
              , n = (0,
            l.md)(c.bQ)
              , r = (0,
            l.md)(c.B8)
              , i = M();
            return {
                forceCursorPause: (0,
                a.useCallback)(async a => {
                    let l = r.map(e => ({
                        logType: e.type,
                        playTime: e.offset
                    }))
                      , d = new o.AY({
                        cmd: {
                            case: "forceCursorPauseCommand",
                            value: {
                                time: a,
                                cursorSessionId: null == n ? void 0 : n.cursorSessionId,
                                cursorSessionDeviceCode: null == n ? void 0 : n.cursorSessionDeviceCode,
                                activityLogList: l
                            }
                        }
                    })
                      , c = (await (0,
                    s.l9)({
                        accessToken: e,
                        command: d,
                        courseVersionId: t.versionId,
                        courseCode: t.code,
                        device: "tablet"
                    })).appCommandList.flatMap(e => "pageTransitionCommand" === e.cmd.case ? e.cmd.value : []);
                    c.length > 0 && i(c[0])
                }
                , [r, null == n ? void 0 : n.cursorSessionId, null == n ? void 0 : n.cursorSessionDeviceCode, t.versionId, t.code, i])
            }
        }
        ;
        var p = n(15327)
          , h = n(89523);
        let g = () => (0,
        p.A)(h.w4.breakpoints.up("lg")) ? "landscape" : "portrait"
          , y = e => {
            let[t,n] = (0,
            a.useState)(!1)
              , [r,i] = (0,
            a.useState)()
              , u = (0,
            l.md)(d.Dr)
              , x = (0,
            l.md)(c.cS);
            return (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        let n = new o.Qd;
                        n.cursorRootIdentifier = e;
                        let r = new o.AY;
                        r.cmd.case = "programCursorInitCommand",
                        r.cmd.value = n;
                        let a = (await (0,
                        s.l9)({
                            accessToken: u,
                            command: r,
                            courseVersionId: x.versionId,
                            courseCode: x.code,
                            device: "tablet"
                        })).appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 !== a.length) {
                            var t;
                            let e = a[0];
                            if ((null === (t = e.data) || void 0 === t ? void 0 : t.data.case) === "playSession") {
                                let t = e.data.data.value;
                                i(t)
                            }
                        }
                    } catch (e) {
                        n(!0)
                    }
                }
                )()
            }
            , []),
            {
                playSession: r,
                isError: t
            }
        }
        ;
        var f = n(21212)
          , w = n(87971);
        let v = e => {
            let[t,n] = (0,
            a.useState)(!1)
              , [r,s] = (0,
            a.useState)()
              , [i,o] = (0,
            a.useState)(0)
              , u = (0,
            l.md)(d.Dr)
              , x = (0,
            l.md)(c.cS)
              , {setReportProgram: m} = (0,
            w.M5)();
            return (0,
            a.useEffect)( () => {
                (async () => {
                    if (e)
                        try {
                            let {programResource: t, progress: n} = await (0,
                            f.p)(e, u, x);
                            s(t),
                            o(n)
                        } catch (e) {
                            console.error("useProgramResource: ".concat(e)),
                            n(!0)
                        }
                }
                )()
            }
            , [e, u, x]),
            (0,
            a.useEffect)( () => {
                e && m(x, e)
            }
            , [e, x, m]),
            {
                programResource: r,
                progress: i,
                isError: t
            }
        }
        ;
        var j = n(39204);
        let b = (e, t, n) => {
            let[r,i] = (0,
            a.useState)(!1)
              , [l,o] = (0,
            a.useState)();
            return (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        let r = await (0,
                        s.eT)(t, e, n)
                          , a = await (0,
                        j.e)(r);
                        o({
                            contentResource: a,
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
                        i(!0)
                    }
                }
                )()
            }
            , []),
            {
                programResource: l,
                isError: r
            }
        }
        ;
        var S = n(86715)
          , A = n(3504)
          , C = n(65600)
          , k = n(93987)
          , I = n(77330)
          , T = n(93236);
        let M = () => {
            let e = (0,
            S.useRouter)()
              , {setReportProgram: t} = (0,
            w.M5)()
              , n = (0,
            l.Xr)(I.R)
              , r = (0,
            l.Xr)(T.D)
              , s = (0,
            l.Xr)(k.x)
              , i = (0,
            l.Xr)(k.W)
              , u = (0,
            l.md)(d.Dr)
              , x = (0,
            l.md)(c.cS)
              , m = (0,
            l.Xr)(c.bQ)
              , p = (0,
            l.Xr)(c.AD)
              , h = (0,
            l.md)(c.B8)
              , g = (0,
            l.Xr)(c.Dl)
              , [y,v] = (0,
            l.fp)(C.SL)
              , [j,b] = (0,
            l.fp)(C.u2);
            return (0,
            a.useCallback)(async a => {
                switch (a.pagePath) {
                case "program":
                    {
                        let e = a.data;
                        if (!e || "playSession" !== e.data.case)
                            break;
                        let n = e.data.value;
                        try {
                            let {programResource: e, progress: r} = await (0,
                            f.p)(n, u, x);
                            m(e),
                            p(r),
                            g({
                                type: o.w2.QUESTION_START
                            }),
                            t(x, n)
                        } catch (e) {}
                        break
                    }
                case "cursor/result":
                    {
                        var l, d, c, w;
                        let t = a.data;
                        if (!t || "resultPageData" !== t.data.case)
                            break;
                        let u = t.data.value
                          , x = null !== (c = null === (l = h.find(e => e.type === o.w2.ANSWER_START)) || void 0 === l ? void 0 : l.offset) && void 0 !== c ? c : 0
                          , m = (null !== (w = null === (d = h.find(e => e.type === o.w2.ANSWER_END)) || void 0 === d ? void 0 : d.offset) && void 0 !== w ? w : 0) - x;
                        switch (u.data.case) {
                        case "stage":
                            {
                                let t = u.data.value
                                  , r = t.stats;
                                n({
                                    label: u.emphasisText,
                                    courseName: u.courseDesc,
                                    chapterName: t.chapterName,
                                    sectionName: t.sectionName,
                                    time: r.time + m,
                                    count: r.answeredProgramCount,
                                    ratio: r.correctRatio
                                }),
                                e.push(A.x.stageResult);
                                break
                            }
                        case "workBook":
                            {
                                let t = u.data.value
                                  , n = t.stats;
                                r({
                                    message: u.emphasisText,
                                    courseName: u.courseDesc,
                                    workbookName: t.name,
                                    time: n.time + m,
                                    count: n.answeredProgramCount,
                                    ratio: n.correctRatio
                                }),
                                e.push(A.x.workbookResult);
                                break
                            }
                        case "review":
                            {
                                let t = u.data.value
                                  , n = t.stats;
                                t.isTocFiltered ? (i({
                                    label: u.emphasisText,
                                    title: u.courseDesc,
                                    time: n.time + m,
                                    count: n.answeredProgramCount,
                                    ratio: n.correctRatio,
                                    hasNextProgram: t.hasNextProgram
                                }),
                                e.push(A.x.reviewPlanResult)) : (s({
                                    label: u.emphasisText,
                                    title: u.courseDesc,
                                    time: n.time + m,
                                    count: n.answeredProgramCount,
                                    ratio: n.correctRatio
                                }),
                                e.push(A.x.reviewResult))
                            }
                        }
                        break
                    }
                case "learning/history":
                    j && (v((0,
                    C.Tq)(y, j)),
                    b(void 0)),
                    e.push(A.x.history)
                }
            }
            , [y, j, h])
        }
          , B = () => {
            let e = (0,
            l.md)(d.Dr);
            return (0,
            a.useCallback)(async (t, n) => {
                t && await (0,
                s.SC)(e, n, t.buffer, t.type)
            }
            , [])
        }
        ;
        var _ = n(8725);
        let E = () => {
            let e = (0,
            l.md)(d.Dr)
              , t = (0,
            l.md)(c.cS)
              , n = (0,
            l.md)(c.bQ)
              , r = (0,
            l.md)(_.B);
            return (0,
            a.useCallback)(async () => {
                var a, s, i;
                let l = R(null !== (a = null == n ? void 0 : n.cursorSessionId) && void 0 !== a ? a : 0, null !== (s = null == n ? void 0 : n.cursorSessionDeviceCode) && void 0 !== s ? s : "", r, null !== (i = null == n ? void 0 : n.hasAnswerDescriptionHtml) && void 0 !== i && i);
                await P(e, t.versionId, t.code, l)
            }
            , [r, t.code, t.versionId, null == n ? void 0 : n.cursorSessionDeviceCode, null == n ? void 0 : n.cursorSessionId, null == n ? void 0 : n.hasAnswerDescriptionHtml])
        }
          , R = (e, t, n, r) => o.XX.fromJson({
            cursorSessionId: e,
            cursorSessionDeviceCode: t,
            activityLogList: n.map(e => ({
                logType: e.type,
                playTime: e.offset
            })),
            isRenderedAnswerDescription: r
        });
        async function P(e, t, n, r) {
            let a = new o.AY;
            return a.cmd.case = "sendActivityLogCommand",
            a.cmd.value = r,
            await (0,
            s.l9)({
                accessToken: e,
                command: a,
                courseVersionId: t,
                courseCode: n,
                device: "tablet"
            })
        }
        let W = () => {
            let e = (0,
            l.md)(d.Dr)
              , t = (0,
            l.md)(c.cS)
              , n = (0,
            l.md)(c.bQ)
              , r = (0,
            l.md)(c.xC)
              , s = (0,
            l.md)(c.Br)
              , i = (0,
            l.md)(c.B8);
            return (0,
            a.useCallback)(async a => {
                var l, o, d;
                if (!n)
                    return;
                let c = n.contentResource
                  , u = c.answer.name
                  , x = c.legacyAnswer;
                if (!u)
                    return;
                let m = "StartFromHistory" === s ? r.answerLogId : void 0
                  , p = L(n.cursorSessionId, n.cursorSessionDeviceCode, u, x, m, a, i)
                  , h = await N(e, t.versionId, t.code, p)
                  , g = h.appCommandList.filter(e => "nextPageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                return {
                    transitionCommand: 0 === g.length ? void 0 : g[0],
                    answerLogIds: null !== (d = null === (o = h.lemCommandResponse) || void 0 === o ? void 0 : null === (l = o.res.value) || void 0 === l ? void 0 : l.answerlogIds) && void 0 !== d ? d : []
                }
            }
            , [i, t, n, r.answerLogId, s])
        }
          , L = (e, t, n, r, a, s, i) => {
            let l = {
                apName: n,
                viewState: s.viewStateJSON
            }
              , d = o.iA.fromJson({
                answerList: [{
                    versionedId: r.versionedId,
                    answerResult: s.answer.result,
                    answerText: s.answer.text,
                    wrongCount: s.answer.wrongCount,
                    originalId: r.originalId,
                    answerTextType: s.answer.textType,
                    ...void 0 !== s.answer.answerEvaluateValue && {
                        answerEvaluateValue: s.answer.answerEvaluateValue
                    }
                }],
                viewState: JSON.stringify(l),
                cursorSessionId: e,
                cursorSessionDeviceCode: t,
                activityLogList: i.map(e => ({
                    logType: e.type,
                    playTime: e.offset
                }))
            });
            return a && (d.replayAnswerlogId = a),
            d
        }
        ;
        async function N(e, t, n, r) {
            let a = new o.AY;
            return a.cmd.case = "answerCommand",
            a.cmd.value = r,
            await (0,
            s.l9)({
                accessToken: e,
                command: a,
                courseVersionId: t,
                courseCode: n,
                device: "tablet"
            })
        }
        var O = n(49382)
          , V = n(58144);
        let D = () => {
            let e = (0,
            l.md)(d.Dr)
              , t = (0,
            l.md)(c.cS)
              , n = (0,
            l.md)(d.qL)
              , r = (0,
            l.md)(O.kN)
              , i = (0,
            l.md)(c.B8)
              , u = (0,
            l.Xr)(O.Vs)
              , x = (0,
            l.md)(c.bQ)
              , [m,p] = (0,
            a.useState)(!1)
              , [h,g] = (0,
            a.useState)(!1)
              , y = (0,
            S.useRouter)()
              , {updateCourseUnitHistories: f} = (0,
            V.G)();
            return {
                sendCursorPauseCommand: (0,
                a.useCallback)(async () => {
                    p(!0),
                    g(!1);
                    let a = i.map(e => ({
                        logType: e.type,
                        playTime: e.offset
                    }))
                      , l = new o.AY({
                        cmd: {
                            case: "cursorPauseCommand",
                            value: {
                                isErrorRecovery: !1,
                                cursorSessionId: null == x ? void 0 : x.cursorSessionId,
                                cursorSessionDeviceCode: null == x ? void 0 : x.cursorSessionDeviceCode,
                                activityLogList: a
                            }
                        }
                    });
                    try {
                        let a = (await (0,
                        s.l9)({
                            accessToken: e,
                            command: l,
                            courseVersionId: t.versionId,
                            courseCode: t.code,
                            device: "tablet"
                        })).appCommandList.filter(e => "pageTransitionCommand" === e.cmd.case).map(e => e.cmd.value);
                        if (0 === a.length)
                            return;
                        switch (a[0].pagePath) {
                        case "stage/bottom":
                            switch (n) {
                            case A.x.home:
                                r && await f(),
                                u(null),
                                y.push(A.x.home);
                                break;
                            case A.x.history:
                                y.push(A.x.history)
                            }
                            break;
                        case "workbook":
                            y.push(A.x.workbook);
                            break;
                        case "review/select":
                            y.push(A.x.review)
                        }
                    } catch (e) {
                        g(!0)
                    } finally {
                        p(!1)
                    }
                }
                , [i, null == x ? void 0 : x.cursorSessionId, null == x ? void 0 : x.cursorSessionDeviceCode, t.versionId, t.code, n, r, u, y, f]),
                isLoading: m,
                isError: h
            }
        }
          , q = e => {
            let[t,n] = (0,
            a.useState)()
              , r = (0,
            a.useRef)([])
              , s = (0,
            a.useCallback)( (e, t) => {
                let a = window.setTimeout( () => n(e), 1e3 * t);
                r.current.push(a)
            }
            , [])
              , i = (0,
            a.useCallback)(e => {
                e > 60 && s("Last1Minute", e - 60),
                e > 30 && s("Last30Seconds", e - 30),
                s("LastProgram", e)
            }
            , [s])
              , l = (0,
            a.useCallback)(e => {
                e.forEach(e => {
                    var t;
                    let n = z(null === (t = e.command) || void 0 === t ? void 0 : t.feedBackType);
                    n && s(n, e.delay)
                }
                )
            }
            , [s]);
            return (0,
            a.useEffect)( () => {
                var t;
                if (!e || 0 === e.length)
                    return;
                (null === (t = e[0].command) || void 0 === t ? void 0 : t.feedBackType) === "FB_SNACK_BAR_LAST_PROGRAM" ? i(e[0].delay) : l(e);
                let n = r.current;
                return () => {
                    n.forEach(e => clearTimeout(e))
                }
            }
            , [e, i, l]),
            {
                mode: t
            }
        }
          , z = e => {
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
        var H = n(94235);
        let K = "true" === n(65606).env.NEXT_PUBLIC_FEATURE_HANDWRITING_ANSWER_IMAGE_GCS_ENABLED
          , J = e => {
            let {viewStateJSON: t} = e;
            return "svg"in t && "string" == typeof t.svg ? [t.svg] : "items"in t && Array.isArray(t.items) ? t.items.flatMap(e => "svg"in e && "string" == typeof e.svg ? [e.svg] : []) : []
        }
          , F = () => {
            let e = (0,
            l.md)(d.Dr);
            return {
                saveHandwritingAnswerImageToGCS: (0,
                a.useCallback)(async t => {
                    let {answerLogId: n, answerResponse: r} = t;
                    if (!K || !n)
                        return;
                    let a = J(r);
                    if (0 === a.length)
                        return;
                    let i = []
                      , l = a.map(async t => {
                        try {
                            let r = (0,
                            H.B)(await (0,
                            s.Ox)(e, n))
                              , a = new TextEncoder().encode(t)
                              , l = r.preSignedUrl;
                            await (0,
                            s.uQ)(a, l);
                            let o = l.split("?")[0];
                            i.push(o)
                        } catch (e) {
                            console.error("Failed to save handwriting answer image to GCS", e)
                        }
                    }
                    );
                    if (await Promise.allSettled(l),
                    i.length === a.length)
                        try {
                            await (0,
                            s.dv)(e, n, i)
                        } catch (e) {
                            console.error("Failed to save handwriting answer image URLs to Answer Log Resource", e)
                        }
                }
                , [e])
            }
        }
    }
    ,
    79235: (e, t, n) => {
        n.d(t, {
            r: () => r
        });
        let r = (0,
        n(52035).eU)(0)
    }
    ,
    39204: (e, t, n) => {
        n.d(t, {
            e: () => a
        });
        var r = n(89523);
        async function a(e) {
            var t, n, a, i, l, o, d, c, u, x;
            let m = e.programDetail
              , p = await (0,
            r.h2)(e.encryptedAnswer)
              , h = await (0,
            r.L2)(e.encryptedAnswerDescriptionContent)
              , g = e.programRenderingResources
              , y = (a = m.programContent,
            i = g,
            {
                name: null == a ? void 0 : null === (l = a.qpap) || void 0 === l ? void 0 : l.pattern,
                body: null == a ? void 0 : a.paramsJson,
                resources: s(i.program)
            })
              , f = (o = m.answer,
            d = g,
            {
                name: null == o ? void 0 : o.answerPatternName,
                body: null == o ? void 0 : o.attributesJson,
                resources: s(d.answer)
            })
              , w = (c = h,
            u = g,
            {
                name: null === (x = c.qpap) || void 0 === x ? void 0 : x.pattern,
                body: c.paramsJson,
                resources: s(u.answerDescription)
            });
            return {
                question: y,
                answer: f,
                legacyAnswer: p,
                description: w,
                hint: function(e, t) {
                    var n;
                    if (e)
                        return {
                            name: e.hintType,
                            body: null === (n = e.qpapWithParams) || void 0 === n ? void 0 : n.paramsJson,
                            resources: s(t.hint)
                        }
                }(m.hint, g),
                explain: function(e, t) {
                    var n, r, a;
                    if (e)
                        return {
                            name: null === (r = e.qpapWithParams) || void 0 === r ? void 0 : null === (n = r.qpap) || void 0 === n ? void 0 : n.pattern,
                            body: null === (a = e.qpapWithParams) || void 0 === a ? void 0 : a.paramsJson,
                            resources: s(t.explain)
                        }
                }(m.explain, g),
                args: 0 === m.targetAtomList.length ? {} : Object.fromEntries(Object.entries(JSON.parse(null !== (n = null === (t = m.targetAtomList[0].atom) || void 0 === t ? void 0 : t.attributesJson) && void 0 !== n ? n : "{}")))
            }
        }
        function s(e) {
            return Object.fromEntries(Object.entries(e).map(e => [e[0], e[1].contentResourceList.map(e => ({
                path: e.url,
                meta: e.metaJson
            }))]))
        }
    }
    ,
    50437: (e, t, n) => {
        n.d(t, {
            k: () => a,
            y: () => r
        });
        let r = "panel-answer"
          , a = "math-drawing-app"
    }
    ,
    21212: (e, t, n) => {
        n.d(t, {
            p: () => s,
            u: () => i
        });
        var r = n(46471)
          , a = n(39204);
        let s = async (e, t, n) => {
            var s, i, l, o, d;
            let c = null === (s = e.programDetail) || void 0 === s ? void 0 : s.originalId;
            if (!c)
                throw Error("Program ID is missing");
            let u = n.code
              , x = await (0,
            r.xM)(t, c, u)
              , m = await (0,
            a.e)(x)
              , p = e.playProgressBar
              , h = e.menuInfo
              , g = e.timerFeedBackCommandList
              , y = p ? p.isReviewing ? "Review" : "Basic" : void 0;
            return {
                programResource: {
                    contentResource: m,
                    id: c,
                    cursorSessionId: e.cursorSessionId,
                    cursorSessionDeviceCode: e.cursorSessionDeviceCode,
                    mode: y,
                    menuContext: h ? {
                        courseName: h.courseName,
                        rootStructureElementName: h.rootStructureElementName,
                        entryStructureElementName: h.entryStructureElementName,
                        intermediateSequence: h.intermediateSequence
                    } : void 0,
                    feedBackType: null === (i = e.feedBackCommand) || void 0 === i ? void 0 : i.feedBackType,
                    feedBackCommandOnAnswerCorrect: e.feedBackCommandOnAnswerCorrect,
                    timerCommands: g.reduce( (e, t) => {
                        let {delayedSeconds: n, feedBackCommand: r} = t;
                        return r ? [...e, {
                            delay: n,
                            command: r
                        }] : e
                    }
                    , []),
                    hasAnswerDescriptionHtml: null !== (o = null === (l = e.programDetail) || void 0 === l ? void 0 : l.hasAnswerDescriptionHtml) && void 0 !== o && o
                },
                progress: null !== (d = null == p ? void 0 : p.progress) && void 0 !== d ? d : 0
            }
        }
        ;
        function i(e) {
            return e.replace(/<math>(.*?)<\/math>/g, (e, t) => {
                let n = t.replace(/\\rm\s+(.+)/g, "\\mathbf{$1}");
                return "<math>".concat(n, "</math>")
            }
            )
        }
    }
}]);
