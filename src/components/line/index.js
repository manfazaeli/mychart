

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from 'highcharts/highcharts-more';

const LineChart = ( props ) => {
    useEffect(() => {
        
       HighchartsMore(Highcharts);

        const options = {
            chart: {
                type: 'line',
                scrollablePlotArea: {
                    minWidth: 600,
                  },
            },
            title: {
                text: 'تعداد مجوز صادره برای عدم پرداخت شهریه    '
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: props.categories,
                crosshair: true
            },
            yAxis: {
                type: props.type,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: ' ',
                data: props. yAxis
        
            }]
        }
        const chart = Highcharts.chart(props.chartId, options);
        return () => {
            chart.destroy();
        };
    }, []);

    return (
  
            <div id={props.chartId}></div>

    );
};

export default LineChart;

