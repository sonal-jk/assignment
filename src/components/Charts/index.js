import React from 'react';
import "../../index.css";
import { Bar } from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const Charts = () => {
    return(
        <div>
<Bar
data={{
    datasets: [
        {
            label: "total count/value",
            data: [1552, 1319, 613],
            backgroundColor: ["green", "red", "yellow"],
            borderColor: ["green", "red", "yellow"],
            borderWidth: 0.5,
        },
    ],
}}
// Height of graph
options={{
    maintainAspectRatio: false,
    scales: {
        x:{
            labels: ["Axios", "ABC News", "Kelly Tyko"] 
        },
        y: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    
}}
/></div>);
};
export default Charts;