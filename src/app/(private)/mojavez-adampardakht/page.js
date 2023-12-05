
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import LineChart from "../../../components/line";
import * as XLSX from "xlsx";
import FixedPanel from "@/components/fixedPanel";
import Loading from "@/components/loading";

const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[3]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      resolve(jsonData);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
}; //readExcelFile

function NotMojaz() {
  const [chartData, setChartData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [yAxis, setYaxis] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/excel/chartData.xlsx");
      const fileData = await response.blob();
      const excelData = await readExcelFile(fileData);
      console.log('excelData',excelData)
      setChartData(excelData);
      setCategories(excelData.slice(1).map((item) => item[0]));
      setYaxis(excelData.slice(1).map((item) => item[1]));
      console.log('fgsdfgsdfgsdfgsdfgsdfg',categories);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <main>
      <FixedPanel pageTitle={"مجوز عدم پرداخت "}></FixedPanel>
      <div className="flex flex-row items-center justify-center flex-wrap ">
        {chartData ? (
          <>
            <div className="  w-[95%] bg-white border p-[10px] m-[10px] shadow-xl border-gray-300 rounded-xl ">
              <LineChart
                chartId="1"
                categories={categories}
                yAxis={yAxis}
              ></LineChart>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
}

export default NotMojaz;
