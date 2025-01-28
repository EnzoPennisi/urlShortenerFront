export function LoadingModal() {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-[#00000076]">
            <div className="p-6 w-full max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex flex-col items-center text-center">
                    <svg
                        className="w-12 h-12 mb-4 text-blue-500 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C3.82 0 0 5.82 0 12h4zm2 5.29A7.965 7.965 0 014 12H0c0 3.53 1.81 6.63 4.57 8.43l1.43-1.14z"
                        ></path>
                    </svg>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                        Esperando que el servidor se inicie en Render...
                    </p>
                </div>
            </div>
        </div>
    );
}