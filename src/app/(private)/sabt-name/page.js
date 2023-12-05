"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

//import StackedColumn from '../../../components/stackedColumn'
import ColumnChart from "../../../components/column";
import * as XLSX from "xlsx";
import FixedPanel from "@/components/fixedPanel";
import Loading from "@/components/loading";

const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[2]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      resolve(jsonData);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
}; //readExcelFile

function SabtName() {
  const [chartData, setChartData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [term4012, setTerm4012] = useState(null);
  const [term4021, setTerm4021] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/excel/chartData.xlsx");
      const fileData = await response.blob();
      const excelData = await readExcelFile(fileData);
      setChartData(excelData);
      setCategories(excelData.slice(1).map((item) => item[0]));
      setTerm4012(excelData.slice(1).map((item) => item[1]));
      setTerm4021(excelData.slice(1).map((item) => item[2]));
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <main>
      <FixedPanel pageTitle={"آمار انتخاب واحد "}></FixedPanel>
      <div className="flex flex-row items-center justify-center flex-wrap ">
        {chartData ? (
          <>
            <div className="  w-[95%]    bg-white border p-[10px] m-[10px] shadow-xl border-gray-300 rounded-xl ">
              <ColumnChart
                chartId="1"
                type='logarithmic'
                categories={categories}
                term4012={term4012}
                term4021={term4021}
              ></ColumnChart>{""}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
}

export default SabtName;
