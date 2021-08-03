import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Dividend by times",
              data: [12, 19, 3, 5, 0, 3],
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(75, 192, 192, 1)"],
              borderWidth: 2,
            },
          ],
        }}
        width={100}
        height={350}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
