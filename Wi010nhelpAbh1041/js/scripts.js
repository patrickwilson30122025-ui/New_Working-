document.addEventListener('DOMContentLoaded', function () {
    // build a safe timestamp used in UI updates
    var date = new Date();
    var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var current_time = date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2);
    var date_time = current_date + " " + current_time;
    var p1 = document.getElementById("p1");
    if (p1) p1.innerHTML = date_time;

    setTimeout(function () {
        var box = document.getElementById("box");
        if (box) box.style.display = "block";
    }, 800);

    setTimeout(function () { startScan(); }, 1000);

    function startScan() {
        var box = document.getElementById("box"); if (box) box.style.display = "none";
        var scan = document.getElementById("scan"); if (scan) scan.style.display = "block";

        // amount updates (timing in ms)
        var updates = [
            [200, "34"], [210, "256"], [220, "312"], [230, "349"], [240, "460"], [250, "498"],
            [260, "685"], [270, "702"], [280, "702"], [290, "749"], [300, "776"], [310, "897"],
            [320, "937"], [330, "993"], [340, "1056"], [350, "1056"], [400, "1240"], [500, "1349"],
            [600, "1416"], [700, "1512"], [800, "1636"], [900, "1685"], [1000, "1732"], [1100, "1798"],
            [1200, "1999"], [1300, "2038"], [1400, "2229"], [1500, "2415"], [1600, "2510"], [1700, "2566"],
            [1800, "3012"], [1900, "3049"], [2000, "3230"], [2100, "3450"], [2200, "3515"], [2300, "3600"],
            [2400, "3629"], [2500, "3749"], [2600, "3818"], [2700, "3819"], [2800, "3820"], [2900, "3821"]
        ];
        updates.forEach(function (u) {
            setTimeout(function () { var el = document.getElementById("amount"); if (el) el.innerHTML = u[1]; }, u[0]);
        });

        // time updates
        var timeUpdates = [
            [300, "0:00:30"], [400, "0:00:25"], [500, "0:00:17"], [600, "0:00:45"],
            [700, "0:00:06"], [800, "0:00:03"], [900, "0:00:01"], [1000, "0:00:00"]
        ];
        timeUpdates.forEach(function (t) {
            setTimeout(function () { var te = document.getElementById("time"); if (te) te.innerHTML = t[1]; }, t[0]);
        });

        setTimeout(function () { var info = document.getElementById("info"); if (info) info.innerHTML = "Threat detected. <br> Last scan: " + date_time + "<br> 11 Threats found. <br> Scan lasted 0 minutes, 6 seconds. <br> 3821 files scanned. "; }, 1000);
        setTimeout(function () { var bar = document.getElementById("bar"); if (bar) bar.style.display = "none"; }, 1000);
        setTimeout(function () { var re = document.getElementById("re"); if (re) re.innerHTML = "quick scan"; }, 1000);
        setTimeout(function () { var recx = document.getElementById("recx"); if (recx) recx.style.display = "none"; }, 1000);
        setTimeout(function () { var recxHide = document.getElementById("recx-hide"); if (recxHide) recxHide.style.display = "none"; }, 1000);
        setTimeout(function () { var shx = document.getElementById("shx"); if (shx) shx.style.display = "block"; }, 1000);

        if (typeof $ !== 'undefined') {
            $(".alert_popup").delay(1000).fadeIn(500);
            $(".lst").delay(1500).fadeIn(500);
        }
    }

    function playSound() {
        var beep = document.getElementById("beep");
        if (beep && typeof beep.play === 'function') {
            beep.play().catch(function () { });
        }
    }
    window.playSound = playSound;

});
