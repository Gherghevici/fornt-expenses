
const TransactionList = ()=>{

    return(
        <table className="flex flex-col bg-gray-300 w-4/5 p-2">
            <thead>
                <tr className="flex justify-between ">
                    <th className="">Transactions</th>
                    <th className="">SELECT</th>
                </tr>
            </thead>
            
            <tbody>
                <tr className="flex justify-between">
                    <td>icon</td>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Date</td>
                    <td>Hour</td>
                    <td>Price</td>
                    <td>Status</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TransactionList;