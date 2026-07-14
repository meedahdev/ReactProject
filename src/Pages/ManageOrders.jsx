import { useEffect, useState } from "react"
import { GetAllOrders, UpdateOrderStatus } from "../Services/Orders"

function ManageOrders() {
    const [orders, setOrders] = useState([])

    const loadOrders = async () => {
        try {
            const data = await GetAllOrders()
            setOrders(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadOrders()
    }, [])

    const changeStatus = async (id, status) => {
        try {
            await UpdateOrderStatus(id, status);
            loadOrders();
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Manage Orders
            </h1>

            <table className="w-full border">
                <thead>
                    <tr className="bg-pink-500 text-white">
                        <th className="p-3">Order ID</th>
                        <th className="p-3">User</th>
                        <th className="p-3">Total</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-b">
                            <td className="p-3">{order.id}</td>
                            <td className="p-3">{order.user_id}</td>
                            <td className="p-3">₦{order.total}</td>

                            <td className="p-3">
                                <select
                                    value={order.status}
                                    onChange={(e) => {
                                        console.log("Order ID:", order.id)
                                        console.log("New Status:", e.target.value)
                                        changeStatus(order.id, e.target.value)
                                    }}
                                    className="border rounded p-2"
                                >
                                    <option>Pending</option>
                                    <option>Processing</option>
                                    <option>Shipped</option>
                                    <option>Delivered</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageOrders