import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { GetOrders } from "../Services/Orders";

function OrderHistory() {
    const { currentUser } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await GetOrders(currentUser.id);
                setOrders(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (currentUser) {
            fetchOrders();
        }
    }, [currentUser]);

    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Order History
            </h1>

            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order) => (
                    <div
                        key={order.id}
                        className="border rounded-lg shadow-md p-4 mb-4"
                    >
                        <h2 className="font-bold">
                            Order #{order.id}
                        </h2>

                        <p>
                            <strong>Date:</strong>{" "}
                            {new Date(order.created_at).toLocaleString()}
                        </p>

                        <p>
                            <strong>Total:</strong> ₦{order.total}
                        </p>

                        <div className="mt-2">
                            <strong>Status:</strong>

                            <span
                                className={`ml-2 px-3 py-1 rounded-full text-white text-sm ${order.status === "Pending"
                                        ? "bg-yellow-500"
                                        : order.status === "Processing"
                                            ? "bg-blue-500"
                                            : order.status === "Shipped"
                                                ? "bg-purple-500"
                                                : order.status === "Delivered"
                                                    ? "bg-green-600"
                                                    : "bg-gray-500"
                                    }`}
                            >
                                {order.status}
                            </span>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default OrderHistory;