"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import GaugeChart from "../../../components/gauge";
import * as XLSX from "xlsx";
import FixedPanel from "@/components/fixedPanel";
import Loading from "@/components/loading";
const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[1]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      resolve(jsonData);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
}; //readExcelFile

export default function VosolMotalebat({ params, searchParams }) {
  console.log(params, searchParams);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/excel/chartData.xlsx");
      const fileData = await response.blob();
      const excelData = await readExcelFile(fileData);
      setChartData(excelData);
    };
    fetchData();
  }, []);
  return (
    <main>
   
      <FixedPanel
        pageTitle={"وصول مطالبات "}
      ></FixedPanel>
      <div className="flex flex-row items-center justify-center flex-wrap ">
        {chartData ? (
          chartData.slice(1).map((item) => (
            <div
              key={item[0]}
              className="w-[90%] md:w-[46.5%] lg:w-[30%] 2xl:w-[23%]  bg-white border p-[10px] m-[10px] shadow-xl border-gray-300 rounded-xl "
            >
              <GaugeChart
                vahed_name={item[0]}
                chartId={item[0]}
                value={item[1]}
              ></GaugeChart>{" "}
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
}
