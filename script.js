// Data for the chart and table
const data = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        label: "Dataset",
        data: [30, 50, 20],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
      },
    ],
  };
  
  // Chart configuration
  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  
  // Render chart
  const myChart = new Chart(document.getElementById("myChart"), config);
  