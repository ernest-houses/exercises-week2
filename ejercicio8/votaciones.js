let votes = [0, 0, 0, 0, 0];
const parties = ["Socialistas", "Liberales", "Animalistas", "Centristas", "Ecologistas"];

const ctx = document.getElementById("voteChart").getContext("2d");
const voteChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: parties,
    datasets: [
      {
        data: votes,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

function vote(partyIndex) {
  votes[partyIndex] += 1;
  voteChart.update();
}

function resetVotes() {
  votes = [0, 0, 0, 0, 0];
  voteChart.data.datasets[0].data = votes;
  voteChart.update();
}