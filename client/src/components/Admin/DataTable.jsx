const DataTable = ({ data }) => {
    return (
        <table>
            <thead className="bg-[rgba(255,255,255,0.3)]">
                <tr>
                    <th className="px-10 py-8">Name</th>
                    <th className="px-10 py-8">Dob</th>
                    <th className="px-10 py-8">Email</th>
                    <th className="px-10 py-8">Mobile</th>
                    <th className="px-10 py-8">Whatsapp</th>
                    <th className="px-10 py-8">Branch</th>
                    <th className="px-10 py-8">Reg</th>
                    <th className="px-10 py-8">Year</th>
                    <th className="px-10 py-8">Domain</th>
                    <th className="px-10 py-8">Reason</th>
                </tr>
            </thead>

            <tbody>
            {   
                data.map((i) => {
                    return (
                        <tr key={ "row" + i._id } className="border-b-2 border-[rgba(255,255,255,0.1)]">
                            <td key={ "name" + i._id } className=" text-center">
                                { i.name }
                            </td>
                            <td key={ "dob" + i._id } className=" text-center">
                                { i.dob }
                            </td>
                            <td key={ "email" + i._id } className=" text-center">
                                { i.email }
                            </td>
                            <td key={ "mobile" + i._id } className=" text-center">
                                { i.mobile }
                            </td>
                            <td key={ "whatsapp" + i._id } className=" text-center">
                                { i.whatsapp }
                            </td>
                            <td key={ "branch" + i._id } className=" text-center">
                                { i.branch }
                            </td>
                            <td key={ "reg" + i._id } className=" text-center">
                                { i.reg }
                            </td>
                            <td key={ "year" + i._id } className=" text-center">
                                { i.year }
                            </td>
                            <td key={ "domain" + i._id } className=" text-center">
                                { i.domain }
                            </td>
                            <td key={ "reason" + i._id } className=" text-center">
                                { i.reason }
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default DataTable;

