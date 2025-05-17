let loading = !1;
function buttonURL(t, n, e="_self") {
    if (loading)
        return;
    loading = !0;
    const i = document.getElementById("loading-bar");
    function o() {
        i.style.width = "0%",
        i.style.display = "block"
    }
    let l = null;
    const s = .3 * t
      , d = .7 * t;
    window.addEventListener("popstate", o),
    o(),
    requestAnimationFrame((function o(a) {
        l || (l = a);
        const u = a - l;
        if (u < s) {
            const t = u / s * 70;
            i.style.width = `${t}%`
        } else if (u < s + d) {
            const t = 70 + (u - s) / d * 30;
            i.style.width = `${t}%`
        }
        if (u >= t)
            return window.open(n, e),
            setTimeout(( () => {
                i.style.display = "none"
            }
            ), 1e3),
            void (loading = !1);
        requestAnimationFrame(o)
    }
    ))
}
