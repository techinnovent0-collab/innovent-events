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
