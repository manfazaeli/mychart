"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

const StackedColumn = (props) => {
  useEffect(() => {
    HighchartsMore(Highcharts);

    const options = {
      chart: {
        type: "column",
        scrollablePlotArea: {
          minWidth: 500,
        },
      },
      title: {
        text: props.vahed_name,
      },
      subtitle: {
        // text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: props.categories,
      },
      yAxis: {
        type: "logarithmic",

        title: {
          text: "",
        },
        stackLabels: {
          enabled: true,
        },
      },
      legend: {
        align: "left",
        x: 70,
        verticalAlign: "top",
        y: 70,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "white",
        borderColor: "#CCC",
        borderWidth: 1,
        shadow: false,
      },
      tooltip: {
        // headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        // pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //     '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        // footerFormat: '</table>',
        // shared: true,
        // useHTML: true
      },
      plotOptions: {
        column: {
          stacking: "normal",
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: "ترم 4021",
          data: props.term4021,
        },
        {
          name: "ترم 4012",
          data: props.term4012,
        },
      ],
    };
    const chart = Highcharts.chart(props.chartId, options);
    // return () => {
    //     chart.destroy();
    // };
  }, []);

  return <div id={props.chartId}></div>;
};

export default StackedColumn;
