/* UNLOCK / OfficeMUC — homepage interactions */
(function () {
  "use strict";

  /* ---- Mobile navigation drawer ---- */
  var toggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });
    // Close the drawer after tapping a link
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Services carousel arrows ---- */
  var scroller = document.getElementById("serviceScroller");
  var prev = document.getElementById("scrollPrev");
  var next = document.getElementById("scrollNext");
  if (scroller && prev && next) {
    var step = function () {
      var card = scroller.querySelector(".service-card");
      return card ? card.getBoundingClientRect().width + 20 : 300;
    };
    prev.addEventListener("click", function () {
      scroller.scrollBy({ left: -step(), behavior: "smooth" });
    });
    next.addEventListener("click", function () {
      scroller.scrollBy({ left: step(), behavior: "smooth" });
    });
  }
})();

/* ---- Kids training modal ---- */
function openModal() {
  var modal = document.getElementById("imageModal");
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal(event) {
  if (event && event.type === "click" && event.target && event.target.closest(".modal-content")) return;
  var modal = document.getElementById("imageModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

/* ---- LIFF initialisation (LINE mini app) ---- */
document.addEventListener("DOMContentLoaded", function () {
  var LIFF_ID = "YOUR_LIFF_ID";
  if (typeof liff !== "undefined" && LIFF_ID !== "YOUR_LIFF_ID") {
    liff.init({ liffId: LIFF_ID })
      .then(function () { console.log("LIFF initialized"); })
      .catch(function (err) { console.error("LIFF error", err); });
  }
});
