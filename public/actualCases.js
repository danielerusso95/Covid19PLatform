export default function actualCases(data, id) {
  let actualData = data.filter((el) => {
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
  let tableWrapper = document.querySelector(id);
  let totalData = actualData.map((el) => {
    return el.totale_positivi;
  });
  totalData = totalData.reduce((acc, el) => acc + el);
}
