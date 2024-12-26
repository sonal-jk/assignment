import React from 'react';
import "../../index.css";
import { useEffect, useState } from 'react';
import { Bar, Pie } from "react-chartjs-2";
//import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { Chart, registerables, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(...registerables);

const Charts = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const pieData = {
        labels: ["Axios", "ABC News", "Kelly Tyko"],
        datasets: [
          {
            data: [12, 29,19],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(236, 82, 35, 0.39'
            ],
            borderWidth: 1,
          },
        ],
      };
    
    return(
        <div className='flex flex-row'>
            <div className='w-1/2 p-4'>
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
            /></div>
            <div className='w-1/2 p-4'>
            <Pie data={pieData} /></div>
        
        </div>);
};
export default Charts;