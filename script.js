const reelModal = document.getElementById("reelModal");
const showReel = document.getElementById("showReel");
const closeReel = document.getElementById("closeReel");

showReel?.addEventListener("click", () => {
  reelModal?.classList.add("show");
  reelModal?.setAttribute("aria-hidden", "false");
});

closeReel?.addEventListener("click", () => {
  reelModal?.classList.remove("show");
  reelModal?.setAttribute("aria-hidden", "true");
});

reelModal?.addEventListener("click", (event) => {
  if (event.target === reelModal) {
    reelModal.classList.remove("show");
    reelModal.setAttribute("aria-hidden", "true");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();


const formSuccess = document.getElementById("formSuccess");
const params = new URLSearchParams(window.location.search);
if (params.get("contact") === "success") {
  formSuccess?.classList.add("show");
  setTimeout(() => formSuccess?.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
  if (window.history.replaceState) {
    params.delete("contact");
    const next = params.toString();
    const newUrl = next ? `${window.location.pathname}?${next}` : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  }
}
