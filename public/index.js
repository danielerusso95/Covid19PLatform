import totalCases from "./totalCases.js";

import chart from "./chart.js";

fetch(
  "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json"
)
  .then((response) => response.json())
  .then((data) => {
    totalCases(data, "#cardWrapper");
  });

fetch(
  " https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json"
)
  .then((response) => response.json())
  .then((data) => chart(data, "myChart"));
