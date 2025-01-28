export function EmptyUrlMessage() {
    return (
        <div className="flex flex-col just text-center text-wrap w-[95%] sm:w-xl h-40 border border-[#ffffff29] rounded-2xl p-4 gap-2 shadow-lg hover:border-indigo-500 hover:shadow-sm hover:shadow-indigo-500 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">No hay URLs acortadas</h2>

            <p className="text-gray-100">
                ¡Crea tu primer enlace!
            </p>
            <p>
                Haz clic en el botón <strong>"Crear nuevo enlace"</strong>
            </p>

        </div>
    )
}