// ---- Edit these when the forms / contact are ready ----
const CONFIG = {
  menteeFormUrl: "",   // e.g. https://forms.gle/xxxx or a Notion form link
  mentorFormUrl: "",
  contactEmail: "",    // e.g. hello@yourdomain.ch
};
// --------------------------------------------------------

const forms = { mentee: CONFIG.menteeFormUrl, mentor: CONFIG.mentorFormUrl };
let missing = false;
document.querySelectorAll("[data-form]").forEach((el) => {
  const url = forms[el.dataset.form];
  if (url) {
    el.href = url;
  } else {
    missing = true;
    el.removeAttribute("target");
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("apply-note").hidden = false;
    });
  }
});

const contact = document.getElementById("contact-link");
if (CONFIG.contactEmail) contact.href = "mailto:" + CONFIG.contactEmail;
else document.getElementById("contact").remove();

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") links.classList.remove("open");
});
