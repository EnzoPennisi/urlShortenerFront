import { CardButtons } from "./CardButtons";

export function UrlCard() {
    return (
        <article className="flex flex-col min-w-xl border border-[#ffffff29] rounded-2xl p-4 gap-2">
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold hover:text-fuchsia-600 transition-all cursor-pointer">
                    /a3l6fk
                </span>
                <CardButtons />
            </div >
            <span className="font-semibold opacity-80">
                https://www.google.com
            </span>
            <span className="text-sm opacity-80">
                descripcion de la url
            </span>
            <div className="flex justify-between text-xs opacity-80">
                <span>
                    Creado: 2021-10-10
                </span>
                <span>
                    Utlima actualización: 2021-10-10
                </span>
            </div>
        </article >
    )
}