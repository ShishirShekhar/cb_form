import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import DataTable from "../components/Admin/DataTable";

const baseURL = "https://cb-form01-5mi9ubjc4-shishirshekhar.vercel.app";

const Admin = () => {
    // Create states
    const [data, addData] = useState([]);

    // Create function to fetch data
    const fetchData = () => {
        axios
        .get(`${baseURL}/data`)
        .then((res) => {
            addData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    // Fetch data
    useEffect(() => {
        fetchData();
    }, [])


    const handleDownload = () => {
        const csv = Papa.unparse(data);
        const link = document.createElement("a");
        link.download = "table.csv";
        link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
        link.click();
    };

    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#25c481] to-[#25b7c4] text-white">
            <div className="text-xl font-bold py-10">Total Registration: {Object.keys(data).length}</div>
            <DataTable data={data} />
            <button onClick={handleDownload} className="bg-[#25b7c4] rounded-xl px-6 py-4 my-10 text-white font-bold text-lg drop-shadow-xl">Download Data</button>
        </div>
    )
};

export default Admin;
