"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as XLSX from "xlsx";
import GaugeChart from "@/components/gauge";
import ColumnChart from "@/components/column";
import LineChart from "@/components/line";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";
const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      resolve(jsonData);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
}; //readExcelFile

export default function Home() {
  //console.log("params", params,"searchParams", searchParams )
  const router = useRouter();
  const [chartData, setChartData] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("excel/chartData.xlsx");
      const fileData = await response.blob();
      const excelData = await readExcelFile(fileData);
      setChartData(excelData);
      console.log(excelData)
     
    };

    fetchData();
  }, []);

  return (
    <main>
      <div>
        {chartData ? (
          <div className="flex flex-row items-center justify-center flex-wrap ">
            <Link
              href={"/home/vosol-motalebat"}
              className=" overflow-hidden w-[90%] h-[90vw] md:w-[46.5%] md:h-[46.5%] lg:w-[30%] lg:h-[30vw] 2xl:w-[23%]  bg-white border p-[10px] m-[10px] shadow-xl border-gray-300 rounded-xl "
            >
              <GaugeChart
                vahed_name={chartData[1][0]}
                chartId={chartData[1][0]}
                value={chartData[1][1]}
              ></GaugeChart>
            </Link>
            <Link
              href={"/home/sabt-name"}
              className="overflow-hidden w-[90%] h-[90vw] md:w-[46.5%] md:h-[46.5%] lg:w-[30%] lg:h-[30vw] 2xl:w-[23%]  bg-white border p-[10px] m-[10px] shadow-xl border-gray-300 rounded-xl "
            >
              <ColumnChart
                chartId='59'
                categories={[chartData[2][0]]}
                term4012={[chartData[2][1]]}
                term4021={[chartData[2][2]]}
              ></ColumnChart>
            </Link>
            <Link
              scroll={true}
              href={"/home/mojavez-adampardakht"}
              className=" overflow-hidden w-[90%] h-[90vw] md:w-[46.5%] md:h-[46.5%] lg:w-[30%] lg:h-[30vw] 2xl:w-[23%]  bg-white border p-[10px] m-[10px] shadow-xl border-gray-300 rounded-xl "
            >
              <LineChart
                chartId='60'
                categories={[chartData[3][0]]}
                yAxis={[chartData[3][1]]}
              ></LineChart>
            </Link>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
}
