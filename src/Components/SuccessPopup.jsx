function SuccessPopup({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-[400px] text-center shadow-xl">

                <div className="text-6xl mb-4">
                    🎉
                </div>

                <h2 className="text-2xl font-bold text-pink-500">
                    Order Successful!
                </h2>

                <p className="text-gray-600 mt-3">
                    Thank you for shopping at
                    <br />
                    <span className="font-semibold">
                        Meedah's Beauty Haven
                    </span>
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
                >
                    Continue Shopping
                </button>

            </div>
        </div>
    )
}

export default SuccessPopup