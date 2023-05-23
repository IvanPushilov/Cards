const cardsContainer = document.querySelector(".cards-container");

cardsContainer.addEventListener("click", async (event) => {
  if (event.target.classList.contains("edit-ad")) {
    const button = event.target;
    const adCard = button.closest(".ad-card");

    // скрываем элементы
    adCard.querySelectorAll(".show-card").forEach((el) => {
      el.style.display = "none";
    });
    // показываем элементы
    adCard.querySelectorAll(".edit-card").forEach((el) => {
      el.style.display = "block";
    });
  }

  if (event.target.classList.contains("edit-ad-ok")) {
    const adCard = event.target.closest(".ad-card");

    const form = adCard.querySelector(".edit-card");

    const { id } = adCard.dataset;
    const response = await fetch(`/api/cards/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: form.name.value,
        url: form.url.value,
        destruction: form.destruction.value,
        price: form.price.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { html } = await response.json();

    // заменяем старую карточку на новую
    adCard.outerHTML = html;
  }
  if (event.target.classList.contains("button-delete")) {
    const btn = event.target;
    //  понять, что удалять из data-id родителя
    const adviceDiv = btn.closest(".ad-card");

    const { id } = adviceDiv.dataset;

    // сделать запрос на удаление
    const response = await fetch(`/api/cards/${id}`, {
      method: "DELETE",
    });
    const json = await response.json(); //  чтобы достать тело ответа

    // смотрим, что там вернулось
    console.log(json);

    // обновить страницу без перезагрузки

    adviceDiv.remove();
  }
});
