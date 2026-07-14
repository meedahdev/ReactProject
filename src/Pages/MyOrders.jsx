import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { GetOrders } from "../Services/Orders";

function MyOrders() {
    const { currentUser } = useContext(UserContext);

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentUser) {
            getAllOrders();
        }
    }, [currentUser]);

    const getAllOrders = async () => {
        setLoading(true);

        const data = await GetOrders(currentUser.id);

        setOrders(data);

        setLoading(false);
    };

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>

            {loading && (
                <div className="flex justify-center">
                    <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {!loading && orders.length === 0 && (
                <h2>You haven't placed any orders yet.</h2>
            )}

            {orders.map((order) => (
                <div
                    key={order.id}
                    className="border rounded-xl p-5 mb-5 shadow"
                >
                    <h2 className="font-bold text-xl">
                        Order #{order.id}
                    </h2>

                    <div className="mt-2">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {order.status}
                        </span>
                    </div>

                    <p className="text-xl font-bold text-pink-500 mt-3">
                        Total: ₦{order.total.toLocaleString()}
                    </p>

                    <p className="text-gray-500 text-sm">
                        {new Date(order.created_at).toLocaleString()}
                    </p>

                    <div className="mt-4">
                        <h3 className="font-semibold mb-2">Products</h3>

                        {order.products.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 border rounded-lg p-3 mb-3"
                            >
                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />

                                <div className="flex-1">
                                    <h3 className="font-semibold">
                                        {item.product.name}
                                    </h3>

                                    <p className="text-gray-500">
                                        Quantity: {item.quantity}
                                    </p>

                                    <p className="font-bold text-pink-500">
                                        ₦{item.product.price.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default MyOrders;