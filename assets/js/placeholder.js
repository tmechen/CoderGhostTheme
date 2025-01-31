/*! http://mths.be/placeholder v2.0.8 by @mathias */ ! function (a, b, c) {
    function d(a) {
        var b = {},
            d = /^jQuery\d+$/;
        return c.each(a.attributes, function (a, c) {
            c.specified && !d.test(c.name) && (b[c.name] = c.value)
        }), b
    }

    function e(a, b) {
        var d = this,
            e = c(d);
        if (d.value == e.attr("placeholder") && e.hasClass("placeholder"))
            if (e.data("placeholder-password")) {
                if (e = e.hide().next().show().attr("id", e.removeAttr("id").data("placeholder-id")), a === !0) return e[0].value = b;
                e.focus()
            } else d.value = "", e.removeClass("placeholder"), d == g() && d.select()
    }

    function f() {
        var a, b = this,
            f = c(b),
            g = this.id;
        if ("" == b.value) {
            if ("password" == b.type) {
                if (!f.data("placeholder-textinput")) {
                    try {
                        a = f.clone().attr({
                            type: "text"
                        })
                    } catch (h) {
                        a = c("<input>").attr(c.extend(d(this), {
                            type: "text"
                        }))
                    }
                    a.removeAttr("name").data({
                        "placeholder-password": f,
                        "placeholder-id": g
                    }).bind("focus.placeholder", e), f.data({
                        "placeholder-textinput": a,
                        "placeholder-id": g
                    }).before(a)
                }
                f = f.removeAttr("id").hide().prev().attr("id", g).show()
            }
            f.addClass("placeholder"), f[0].value = f.attr("placeholder")
        } else f.removeClass("placeholder")
    }

    function g() {
        try {
            return b.activeElement
        } catch (a) {}
    }
    var h, i, j = "[object OperaMini]" == Object.prototype.toString.call(a.operamini),
        k = "placeholder" in b.createElement("input") && !j,
        l = "placeholder" in b.createElement("textarea") && !j,
        m = c.fn,
        n = c.valHooks,
        o = c.propHooks;
    k && l ? (i = m.placeholder = function () {
        return this
    }, i.input = i.textarea = !0) : (i = m.placeholder = function () {
        var a = this;
        return a.filter((k ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": e,
            "blur.placeholder": f
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
    }, i.input = k, i.textarea = l, h = {
        get: function (a) {
            var b = c(a),
                d = b.data("placeholder-password");
            return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
        },
        set: function (a, b) {
            var d = c(a),
                h = d.data("placeholder-password");
            return h ? h[0].value = b : d.data("placeholder-enabled") ? ("" == b ? (a.value = b, a != g() && f.call(a)) : d.hasClass("placeholder") ? e.call(a, !0, b) || (a.value = b) : a.value = b, d) : a.value = b
        }
    }, k || (n.input = h, o.value = h), l || (n.textarea = h, o.value = h), c(function () {
        c(b).delegate("form", "submit.placeholder", function () {
            var a = c(".placeholder", this).each(e);
            setTimeout(function () {
                a.each(f)
            }, 10)
        })
    }), c(a).bind("beforeunload.placeholder", function () {
        c(".placeholder").each(function () {
            this.value = ""
        })
    }))
}(this, document, jQuery);