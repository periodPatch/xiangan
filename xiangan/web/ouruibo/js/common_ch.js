function windowScreen() {
    var e = document.documentElement.clientHeight || document.body.clientHeight || 0,
        o = document.documentElement.clientWidth || document.body.clientWidth || 0, a = {};
    return a.h = e, a.w = o, a
}

function openPre(e, o) {
    var a = windowScreen();
    if ("mobile" == checkBrowser()) var t = t = (a.w - 320) / 2; else var t = (a.w - 450) / 2;
    var i = document.documentElement.scrollTop || document.body.scrollTop || 0, s = i + 60,
        l = document.documentElement.offsetWidth || document.body.offsetWidth || 0, n = l - a.w;
    $(".pre_window").show().css({
        top: "" + s + "px",
        left: "" + t + "px"
    }), $(".media_bg").show().css({
        top: "" + i + "px",
        width: "" + l + "px",
        height: "" + a.h + "px"
    }), $(".prew_top").find("div").text("棰勫畾浜у搧锛�" + e), $(".prew_top").find("input").val(o), $("body").addClass("modal-open").css("padding-right", "" + n + "px")
}

function closePreWindow() {
    $(".pre_window").hide(), $(".media_bg").hide(), $(".oc_window").hide(), $("body").removeClass("modal-open").attr("style", "")
}

function checkBrowser() {
    var e = window.navigator.userAgent.toLocaleLowerCase(), o = /(msie) ([\d.]+)/, a = /(chrome)\/([\d.]+)/,
        t = /(firefox)\/([\d.]+)/, i = /(safari)\/([\d.]+)/, s = /(opera)\/([\d.]+)/, l = /(trident)\/([\d.]+)/,
        n = e.match(o) || e.match(a) || e.match(t) || e.match(i) || e.match(s) || e.match(l), d = e.indexOf("mobile");
    return d > 0 ? "mobile" : {name: n[1], version: parseInt(n[2])}
}

function windowScreen() {
    var e = document.documentElement.clientHeight || document.body.clientHeight || 0,
        o = document.documentElement.clientWidth || document.body.clientWidth || 0, a = {};
    return a.h = e, a.w = o, a
}

function openVideo(e) {
    var o = windowScreen(), a = "", t = .8 * o.w, i = .1 * o.w, s = o.h - 120, l = checkBrowser(),
        n = document.documentElement.scrollTop || document.body.scrollTop || 0, d = n + 60, c = n + 10,
        r = r = document.documentElement.offsetWidth || document.body.offsetWidth || 0, m = r - o.w;
    a += '<div class="media_bg" onclick="javascript:closeVideo()" style="width:' + o.w + "px; height:" + o.h + "px; top:" + n + 'px"></div>', a += '<a href="javascript:closeVideo()" class="video_close" style="top:' + c + 'px" ></a>', a += '<div class="media_play" style="width:' + t + "px; height:" + s + "px; left:" + i + "px; top:" + d + 'px">', a += '<video width="' + t + '" height="' + s + '" controls autoplay>', a += '<source src="' + e + '" type="video/mp4; codecs="avc1.42E01E, mp4a.40.2""></source>', a += "</video></div>", $("body").append(a), $("body").addClass("modal-open").css("padding-right", "" + m + "px"), (l.name = l.version < 9) && $.getScript("js/html5media.min.js")
}

function popAd(e) {
    var o = windowScreen(), a = "", t = .8 * o.w, i = .1 * o.w,
        s = (o.h - 120, checkBrowser(), document.documentElement.scrollTop || document.body.scrollTop || 0),
        l = s + 120, n = n = document.documentElement.offsetWidth || document.body.offsetWidth || 0, d = n - o.w;
    a += '<div class="media_bg" onclick="javascript:closeVideo()" style="width:' + o.w + "px; height:" + o.h + "px; top:" + s + 'px"></div>', a += '<div class="advertisement" style="width:' + t + "px; left:" + i + "px ; top:" + l + 'px">', a += '<a href="http://blog.orvibo.com/enblog/?p=203" target="_blank">', a += '<img src="' + e + '">', a += "</a></div>", $("body").append(a), $("body").addClass("modal-open").css("padding-right", "" + d + "px")
}

function popHad(e, o) {
    var a = "";
    a += '<div class="h_ad">', a += '<a href="' + o + '"></a>', a += "<span>3绉掑悗鑷姩娑堝け</span>", a += "<em></em>", a += "</div>", $("body").append(a)
}

function reciprocal() {
    popTime--, popTime > 0 ? $(".h_ad > span").text("" + popTime + "绉掑悗鑷姩娑堝け") : popTime < 1 && $(".h_ad").remove()
}

function closeVideo() {
    $(".media_bg").remove(), $(".video_close").remove(), $(".media_play").remove(), $(".advertisement").remove(), $("body").removeClass("modal-open").attr("style", "")
}

!function (e) {
    e(document).ready(function () {
        function o(o) {
            var a = document.body.scrollTop, o = o || function () {
            };
            document.addEventListener && window.addEventListener("scroll", function () {
                var t = document.body.scrollTop, i = t - a;
                return 0 !== i && (t <= 0 ? void o("up") : e(document).scrollTop() + e(window).height() == e(document).height() ? void o("down") : (o(i > 0 ? "down" : "up"), void(a = t)))
            }, !1)
        }

        var a = navigator.userAgent, t = a.indexOf("Opera") > -1, i = "safari" == checkBrowser().name;
        console.log(checkBrowser().name), (/.*Firefox.*/.test(a) || a.indexOf("compatible") > -1 && a.indexOf("MSIE") > -1 && !t) && e("body").addClass("ffandie"), i ? e(".header").css({position: "fixed"}) : e(window).scroll(function () {
            /.*Firefox.*/.test(a) ? document.addEventListener("DOMMouseScroll", function (o) {
                o = o || window.event;
                var a = o.detail;
                a > 0 ? e(".header").hide() : e(".header").show()
            }) : document.onmousewheel = function (o) {
                o = o || window.event;
                var a = o.wheelDelta;
                a > 0 ? e(".header").fadeIn() : e(".header").fadeOut()
            }, e(window).scrollTop() > 0 ? e(".header").addClass("scroll_header") : e(".header").removeClass("scroll_header")
        }), e(window).scroll(function () {
            windowScreen();
            e(window).scrollTop() >= 200 ? e(".getTop").css({display: "block"}) : e(".getTop").css({display: "none"})
        }), e("header .menu>ul>li").hover(function () {
            e(this).children("ul").fadeIn(), e(this).children("a").addClass("active")
        }, function () {
            e(this).children("ul").hide(), e(this).children("a").removeClass("active")
        }), e("header .menu>ul>li>ul").mouseover(function () {
            e(this).children("ul").fadeIn()
        }), e("header .menu>ul>li>ul").mouseover(function () {
            e(this).children("ul").hide()
        }), e("header .menu>ul").mouseover(function () {
            e(this).addClass("active")
        }), e("header .menu>ul").mouseout(function () {
            e(this).removeClass("active")
        }), e(".lan_list").hover(function () {
            e("#en").show()
        }, function () {
            e("#en").hide()
        }), e(".getTop").click(function () {
            e("html,body").animate({scrollTop: "0px"}, 800), e(".header").fadeIn()
        }), e(".qrcode").click(function () {
            e(".erweima").show(), e("body").css({overflow: "hidden"})
        }), e("#weixin").click(function () {
            e(".erweima").show(), e("body").css({overflow: "hidden"})
        }), e(".qr_close").click(function () {
            e(".erweima").hide(), e("body").css({overflow: "auto"})
        }), o(function (o) {
            "down" == o ? e(".header").fadeOut() : e(".header").fadeIn()
        })
    })
}(jQuery), !function (e) {
    e.fn.slider = function (o, a) {
        if (!this.length) return !1;
        o = e.extend({}, e.slider.defaults, o);
        var t = this, i = {};
        i.fn = {}, i.li = t.find("li");
        windowScreen();
        i.sliderName = e("." + o.sliderName), i.onNum = 0, i.auto = o.auto, i.itemSum = i.li.length;
        for (var s = 0; s < i.itemSum; s++) i.li.eq(s).css("width", "100%");
        i.bLeftBtn = t.parent("div").find("a.bLeft"), i.bRightBtn = t.parent("div").find("a.bRight"), i.bLeftBtnPer = o.bLeft, i.bRightBtnPer = o.bRight, i.moveSlider = o.moveSlider, i.times = o.time, i.opacity = o.opacity, i.colorCout = 0, i.fn.on = function () {
            i.fn.off(), i.fn.removeControl(), i.fn.addControl(), i.auto && (i.run = setTimeout(function () {
                i.fn["goto"](o.direction)
            }, i.times))
        }, i.fn.off = function () {
            "undefined" != typeof i.run && clearTimeout(i.run)
        }, i.fn.addControl = function () {
            i.bLeftBtnPer && i.bLeftBtn.length && i.bLeftBtn.bind("click", function () {
                i.fn["goto"]("bLeft")
            }), i.bRightBtnPer && i.bRightBtn.length && i.bRightBtn.bind("click", function () {
                i.fn["goto"]("bRight")
            })
        }, i.fn.removeControl = function () {
            i.bLeftBtn.length && i.bLeftBtn.unbind("click"), i.bRightBtn.length && i.bRightBtn.unbind("click")
        }, o.markSlider && !i.moveSlider ? (i.markLi = t.siblings("." + o.markClass).find("li"), i.markLi.on(o.control, function () {
            return i.fn.off(), i.markNum = i.markLi.index(e(this)), i.rotateEffectNum = e(".bvclb_title > p > em").index(e(".rotateEffect")), i.markNum != i.rotateEffectNum && (i.li.addClass("" + o.play).stop(1, 1).css({
                opacity: "1",
                filter: "alpha(opacity=100)",
                display: "none"
            }), i.li.eq(i.markNum - 1).stop(1, 1).css("opacity", "0.5").addClass("" + o.play).css("display", "block").animate({opacity: "0"}, o.speed, function () {
                e(this).css("display", "none")
            }), i.li.eq(i.markNum).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed), o.phonebg && o.ln ? (i.phonebg = e(".bvc_right").find("li"), i.phonebg.addClass("" + o.play).stop(1, 1).css({
                opacity: "1",
                filter: "alpha(opacity=100)",
                display: "none"
            }), i.phonebg.eq(i.markNum).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed)) : o.phonebg && !o.ln && (i.phonebg = e(".phone_bg"), i.phonebg.addClass("" + o.play).stop(1, 1).css({
                opacity: "1",
                filter: "alpha(opacity=100)",
                display: "none"
            }, o.speed), i.phonebg.eq(i.markNum).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed)), o.specialText && (i.specialText = e(".bvclb_title > p > em"), i.specialText.addClass("" + o.play).removeClass("rotateEffect").stop(1, 1).css({
                opacity: "1",
                filter: "alpha(opacity=100)"
            }), i.specialText.eq(i.rotateEffectNum).addClass("upEffect").siblings().removeClass("upEffect"), i.specialText.eq(i.markNum).stop(1, 1).css("opacity", "0.1").removeClass("" + o.play).addClass("rotateEffect").css("display", "inline-block").animate({opacity: "1"}, o.speed)), i.markLi.removeClass("" + o.markLiClass), e(this).addClass("" + o.markLiClass), void i.fn.on())
        })) : o.markSlider && i.moveSlider && (i.markLi = t.siblings("." + o.markClass).find("li"), i.markLi.on(o.markEvent, function () {
            i.markNum = i.markLi.index(e(this)), i.li.removeClass("" + o.play), i.li.eq(i.markNum + 1).addClass("" + o.play), i.markLi.removeClass("" + o.markLiClass), t.animate({left: "-" + (i.markNum + 1) * i.li.width() + "px"}), e(this).addClass("" + o.markLiClass)
        })), o.hoverStop && i.li.hover(function () {
            i.fn.off()
        }, function () {
            i.fn.on(), 1 == i.colorCout
        }), i.fn["goto"] = function (a) {
            switch (i.fn.off(), o.bLeft && o.bRight && i.fn.removeControl(), t.stop(!0), i.moveSlider ? i.onCurNum = i.li.index(t.find('li[class="' + o.play + '"]')) : i.onCurNum = i.li.index(t.find("li:not(." + o.play + ")")), i.opacity && !i.moveSlider && i.li.eq(i.onCurNum).addClass("" + o.play).stop(1, 1).animate({
                opacity: "0",
                filter: "alpha(opacity=0)"
            }, o.speed, function () {
                e(this).css({display: "none", opacity: "1"})
            }), o.phonebg && o.ln ? (i.phonebg = e(".bvc_right").find("li"), i.phonebg.addClass("" + o.play).stop(1, 1).animate({
                opacity: "0",
                filter: "alpha(opacity=0)"
            }, 0, function () {
                e(this).css({display: "none", opacity: "1"})
            })) : o.phonebg && !o.ln && (i.phonebg = e(".phone_bg"), i.phonebg.addClass("" + o.play).stop(1, 1).animate({
                opacity: "0",
                filter: "alpha(opacity=0)"
            }, 0, function () {
                e(this).css({display: "none", opacity: "1"})
            })), a) {
                case"bRight":
                    i.moveSlider && i.onCurNum + 1 == i.itemSum ? (i.totalWidth = i.itemSum * i.li.width(), t.css("left", "-" + i.li.width() + "px"), t.animate({left: "-" + 2 * i.li.width() + "px"}), i.li.removeClass("" + o.play), i.li.eq(2).addClass("" + o.play), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(1).addClass("" + o.markLiClass)) : i.moveSlider && 1 == i.onCurNum ? (t.animate({left: "-" + 2 * i.li.width() + "px"}), i.li.removeClass("" + o.play), i.li.eq(2).addClass("" + o.play), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(1).addClass("" + o.markLiClass)) : i.moveSlider && i.onCurNum != i.itemSum && (t.animate({left: "-" + (i.onCurNum + 1) * i.li.width() + "px"}), i.li.removeClass("" + o.play), i.li.eq(i.onCurNum + 1).addClass("" + o.play), o.markSlider && (i.onCurNum + 2 == i.itemSum ? i.markLi.removeClass("" + o.markLiClass).eq(0).addClass("" + o.markLiClass) : i.markLi.removeClass("" + o.markLiClass).eq(i.onCurNum).addClass("" + o.markLiClass))), i.onCurNum + 1 != i.itemSum || i.moveSlider ? i.onCurNum + 1 == i.itemSum || i.moveSlider || (e("." + o.numClass).html("<em>" + (i.onCurNum + 2) + "</em> / " + i.itemSum), i.li.eq(i.onCurNum + 1).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(i.onCurNum + 1).addClass("" + o.markLiClass), o.phonebg && o.ln ? (i.phonebg = e(".bvc_right").find("li"), i.phonebg.eq(i.onCurNum + 1).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed)) : o.phonebg && !o.ln && (i.phonebg = e(".phone_bg"), i.phonebg.eq(i.onCurNum + 1).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed)), o.specialText && (i.specialText = e(".bvclb_title > p > em"), i.specialText.addClass("" + o.play).removeClass("rotateEffect").stop(1, 1).css({
                        opacity: "1",
                        filter: "alpha(opacity=100)"
                    }), i.specialText.eq(i.onCurNum).addClass("upEffect").siblings().removeClass("upEffect"), i.specialText.eq(i.onCurNum + 1).stop(1, 1).css("opacity", "0.1").removeClass("" + o.play).addClass("rotateEffect").css("display", "inline-block").animate({opacity: "1"}, o.speed))) : (e("." + o.numClass).html("<em>1</em> / " + i.itemSum), i.li.eq(0).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(0).addClass("" + o.markLiClass), o.phonebg && o.ln ? (i.phonebg = e(".bvc_right").find("li"), i.phonebg.eq(0).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed)) : o.phonebg && !o.ln && (i.phonebg = e(".phone_bg"), i.phonebg.eq(0).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed)), o.specialText && (i.specialText = e(".bvclb_title > p > em"), i.specialText.addClass("" + o.play).removeClass("rotateEffect").stop(1, 1).css({
                        opacity: "1",
                        filter: "alpha(opacity=100)"
                    }), i.specialText.eq(i.onCurNum).addClass("upEffect").siblings().removeClass("upEffect"), i.specialText.eq(0).stop(1, 1).css("opacity", "0.1").removeClass("" + o.play).addClass("rotateEffect").css("display", "inline-block").animate({opacity: "1"}, o.speed)));
                    break;
                case"bLeft":
                    i.moveSlider && 0 == i.onCurNum ? (i.totalWidth = i.itemSum * i.li.width(), t.css("left", "-" + (i.itemSum - 2) * i.li.width() + "px"), t.animate({left: "-" + (i.itemSum - 3) * i.li.width() + "px"}), i.li.removeClass("" + o.play), i.li.eq(i.onCurNum - 3).addClass("" + o.play), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(i.onCurNum - 2).addClass("" + o.markLiClass)) : i.moveSlider && 1 == i.onCurNum ? (t.animate({left: "0px"}), i.li.removeClass("" + o.play), i.li.eq(0).addClass("" + o.play), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(i.onCurNum + 2).addClass("" + o.markLiClass)) : i.moveSlider && i.onCurNum != i.itemSum && (t.animate({left: "-" + (i.onCurNum - 1) * i.li.width() + "px"}), i.li.removeClass("" + o.play), i.li.eq(i.onCurNum - 1).addClass("" + o.play), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(i.onCurNum - 2).addClass("" + o.markLiClass)), 0 != i.onCurNum || i.moveSlider ? 0 == i.onCurNum || i.moveSlider || (i.li.eq(i.onCurNum - 1).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed), e("." + o.numClass).html("<em>" + i.onCurNum + "</em> / " + i.itemSum), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(i.onCurNum - 1).addClass("" + o.markLiClass)) : (i.li.eq(i.itemSum - 1).stop(1, 1).css("opacity", "0.5").removeClass("" + o.play).css("display", "block").animate({opacity: "1"}, o.speed, function () {
                        e(this).css("display", "block")
                    }), e("." + o.numClass).html("<em>" + i.itemSum + "</em> / " + i.itemSum), o.markSlider && i.markLi.removeClass("" + o.markLiClass).eq(i.itemSum - 1).addClass("" + o.markLiClass))
            }
            t.queue(function () {
                o.bLeft && o.bRight && (i.fn.removeControl(), i.fn.addControl()), i.auto && (i.run = setTimeout(function () {
                    i.fn["goto"](o.direction)
                }, i.times)), e(this).dequeue()
            })
        }, i.fn.on()
    }, e.slider = {
        defaults: {
            speed: 800,
            time: 4e3,
            play: "on",
            num: !0,
            numClass: "slider_num",
            auto: !0,
            bLeft: !0,
            bRight: !0,
            direction: "bRight",
            addControl: !1,
            control: "mouseenter",
            moveSlider: !1,
            opacity: !0,
            hoverStop: !0,
            markSlider: !0,
            markClass: "slider_mark",
            markLiClass: "mark_dot_on",
            markEvent: "click"
        }
    }
}(jQuery);
var popTime = 3;
setInterval(function () {
}, 1e3), function (e) {
    e.fn.skyBox = function (o, a) {
        var t = {
                title: "skybox",
                content: "淇℃伅鍐呭",
                cancel: "Cancel",
                okay: "Okay",
                okaybutton: !0,
                cancelbutton: !0,
                opacity: 0,
                fadeout: !0,
                overlayclose: !0,
                modalwidth: "",
                autoClose: !1,
                autoCloseTime: 1e3
            }, o = e.extend(t, o), i = document.documentElement.clientWidth || document.body.clientWidth || 0,
            s = document.documentElement.clientHeight || document.body.clientHeight || 0,
            l = document.documentElement.scrollTop || document.body.scrollTop || 0, n = "", d = "";
        "" == o.modalwidth ? "310px" == d : d = o.modalwidth;
        var c = (i - d) / 2;
        n += '<div id="box" style="width:' + d + "px; left:" + c + 'px">', n += '<div class="title"><h2>' + o.title + "</h2></div>", n += '<div class="content"><div class="text">' + o.content + "</div>", 0 != o.okaybutton && 0 == o.cancelbutton || 0 == o.okaybutton && 0 != o.cancelbutton ? (n += '<div class="input">', n += 1 == o.okaybutton ? '<input type="button" value="' + o.okay + '" class="confrimBox">' : '<input type="button" value="' + o.cancel + '" class="closeBox">', n += "</div>") : 1 == o.okaybutton && 1 == o.cancelbutton && (n += '<div class="input">', n += '<input type="button" value="' + o.okay + '" class="confrimBox">', n += '<input type="button" value="' + o.cancel + '" class="closeBox">', n += "</div>"), n += "</div>", n += "</div>", n += 1 == o.fadeout ? '<div class="fadeLayerBox" style="opacity:"' + o.opacity + '";filter: alpha(opacity="' + 10 * o.opacity + '")"></div>' : '<div class="fadeLayerBox closeBoxTwo"></div>', e("body").append(n);
        var r = (s - e("#box").height()) / 2 + l;
        e("#box").css("top", "" + r + "px"), e(".closeBox").click(function () {
            return e("#box").remove(), e(".fadeLayerBox").remove(), 2
        }), 1 == o.overlayclose && e(".fadeLayerBox").click(function () {
            return e("#box").remove(), e(".fadeLayerBox").remove(), 2
        }), o.autoClose && setTimeout(function () {
            return e("#box").remove(), e(".fadeLayerBox").remove(), 2
        }, o.autoCloseTime)
    }
}(jQuery);