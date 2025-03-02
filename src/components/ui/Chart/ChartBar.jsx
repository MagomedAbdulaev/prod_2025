import React, {useState, useEffect} from 'react';
import ApexCharts from 'react-apexcharts';
import Title from '../Title/Title';
import axios from 'axios';
import HostBackend from '../../../main';
import './Chart.css';


function ChartBar(props) {

    const [dataBar, setDataBar] = useState([]);

    useEffect(()=>{
        axios.get(`${HostBackend}analytics/mentors/tags`)
        .then(response => {
            setDataBar(response.data);
        })
    }, []);

    let mentors = 0;
    
    dataBar.map((item) => {
        mentors += item.mentors;
    });

    const options = {
        chart: {
            type: 'bar',
            height: 300
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: dataBar.map(item => item.name), // Названия технологий
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
        },
    };

    const series = [
        {
            name: 'Менторы',
            data: dataBar.map(item => item.mentors),
        }
    ];

    return (
        <div className='chart'>
            <Title name='Количество менторов по популярным тегам' />
            <p className='chart__description'>
                {mentors} - столько менторов наставляют по популярным тегам
            </p>
            <ApexCharts options={options} series={series} type="bar" height={300} />
        </div>
    );
}

export default ChartBar;