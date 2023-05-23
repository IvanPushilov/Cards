const btnBy = document.querySelector(".btn");

btnBy.addEventListener("click", async (event) => {
  if (event.target.classList.contains("by-the-card")) {
    const adCard = event.target.closest(".ad-card");

    const { id } = adCard.dataset;
    const response = await fetch(`/api/cards/${id}/bas`, {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
  }
});
