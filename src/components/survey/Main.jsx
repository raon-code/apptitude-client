export default function Main({title}) {
    return (
        <div className="pt-20 flex flex-col items-center">
            <div>
                <span className="text-[22px]">{title}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-20">
                <div className="w-[156px] h-[84px] bg-gray-300"></div>
                <div className="w-[156px] h-[84px] bg-gray-300"></div>
                <div className="w-[156px] h-[84px] bg-gray-300"></div>
                <div className="w-[156px] h-[84px] bg-gray-300"></div>
                <div className="w-[156px] h-[84px] bg-gray-300"></div>
            </div>
        </div>
    )
}