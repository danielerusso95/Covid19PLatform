export default function totalCases(data, id) {
  let positiveCases = data.filter((el) => {
    if (
      new Intl.DateTimeFormat("it-IT", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).format(new Date(el.data)) ==
      new Intl.DateTimeFormat("it-IT", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).format(new Date().setDate(new Date().getDate() - 1))
    )
      return el;
  });

  let test = "totale_positivi";
  let cardWrapper = document.querySelector(id);
  let total = positiveCases.map((el) => el[test]).reduce((acc, el) => acc + el);

  let totalWrapper = document.querySelector("#totalCase");
  totalWrapper.innerHTML = `---${total}`;
  positiveCases.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add(
      "col-12",
      "d-flex",
      "justify-content-center",
      "d-lg-block",
      "col-xl-4",
      "mb-5"
    );
    div.innerHTML = `<div class="card p-3 w-100 bg-transparent border-custom">
              <div class="card-title accent-color"><h5>${el.denominazione_regione}</h5></div>
              <div class="card-body d-flex align-items-end justify-content-end p-0">
                <p class="sec-color text-end m-0 pe-2">${el[test]}</p>
              </div>
            </div>`;
    cardWrapper.appendChild(div);
  });
}
