export default function chart(data, id) {
  //myChart

  let totale_positivi = data.map((el) => {
    return el.totale_positivi;
  });
  let deceduti = data.map((el) => {
    return el.deceduti;
  });

  let days = data.map((el) => {
    return el.data.split("T")[0];
  });

  const labels = days;

  var ctx = document.getElementById(id).getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      color: "#e8e8e8",
      datasets: [
        {
          label: "Totale Positivi",
          data: totale_positivi,
          borderColor: "#eb8322",
          backgroundColor: "#eb8322",
          yAxisID: "y",
        },
        {
          label: "Deceduti",
          data: deceduti,
          borderColor: "#e8e8e8",
          backgroundColor: "#e8e8e8",
          yAxisID: "y",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Deceduti su positivi",
        },
      },
      scales: {
        x: {
          type: "category",
          display: true,
          position: "bottom",
        },
        y: {
          ticks: { stepSize: 50000 },
          type: "linear",
          display: true,
          position: "left",
        },
      },
    },
  });
}
