

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from 'highcharts/highcharts-more';

const ColumnChart = ( props ) => {
    useEffect(() => {
        
       HighchartsMore(Highcharts);

        const options = {
            chart: {
                type: 'column',
                scrollablePlotArea: {
                    minWidth: 600,
                  },
            },
            title: {
                text: 'آمار انتخاب واحد '
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
                name: 'نیمسال 4012',
                data: props. term4012
        
            }, {
                name: 'نیمسال 4021',
                data: props. term4021
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

export default ColumnChart;

