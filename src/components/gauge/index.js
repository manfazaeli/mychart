"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from 'highcharts/highcharts-more';

const GaugeChart = ( props ) => {
    useEffect(() => {
        
        HighchartsMore(Highcharts);

        const options = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                height: '85%'
            },
            title: {
                text: props.vahed_name
            },
            pane: {
                startAngle: -90,
                endAngle: 89.9,
                background: null,
                center: ['50%', '70%'],
                size: '110%'
            },
            yAxis: {
                min: 0,
                max: 100,
                minorTickInterval: 'auto',
                minorTickWidth: 2,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',
                tickPixelInterval: 30,
                tickWidth: 3,
                tickPosition: 'inside',
                tickLength: 12,
                tickColor: 'black',
                labels: {
                    step: 2,
                    rotation: 'auto',
                },
                title: {
                    text: ' وصول شده ',
                },
                plotBands: [
                    {
                        from: 0,
                        to: 55,
                        color: 'red',
                        thickness: 25
                    },
                    {
                        from: 55,
                        to: 85,
                        color: 'yellow',
                        thickness: 25
                    },

                    {
                        from: 85,
                        to: 100,
                        color: 'green',
                        thickness: 25
                    },

                ],
            },
            series: [
                {
                    name: '',
                    data:[props.value],
                    tooltip: {
                        valueSuffix: '%',
                    },
                    dataLabels: {
                        format: '{y} %' }
                }
            ],
        };

        const chart = Highcharts.chart(props.chartId, options);
        // return () => {
        //     chart.destroy();
        // };
    }, []);

    return (
  
            <div id={props.chartId}></div>

    );
};

export default GaugeChart;