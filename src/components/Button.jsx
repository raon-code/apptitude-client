export default function Button({clickEvent, step}) {
    console.log(step)
    return (
        <div className="flex items-center flex-col w-full">
            <button onClick={clickEvent} className="absolute bottom-10 w-[90%] py-4 rounded-lg bg-black text-white font-extrabold text-2xl">
                {step}
            </button>
        </div>
    )
}