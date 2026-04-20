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
const formError = document.getElementById("formError");
const contactForm = document.getElementById("contactForm");
const backendUrl = "https://spies-somewhat-donations-proper.trycloudflare.com/lead";

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  formSuccess?.classList.remove("show");
  formError?.classList.remove("show");

  const submitButton = contactForm.querySelector("button[type=submit]");
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const formData = new FormData(contactForm);
    const response = await fetch(backendUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    contactForm.reset();
    formSuccess?.classList.add("show");
    setTimeout(() => formSuccess?.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
  } catch (error) {
    console.error("Lead submit error", error);
    formError?.classList.add("show");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Reserve Production Slot";
  }
});
