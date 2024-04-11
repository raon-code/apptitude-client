export default function Button({clickEvent, step}) {
    console.log(step)
    return (
        <div className="flex w-full absolute bottom-[32px] px-[16px]">
            <button onClick={clickEvent} className="bg-black text-white py-[18px] w-full font-semibold text-[22px] rounded-[16px]">
                {step}
            </button>
        </div>
    )
}