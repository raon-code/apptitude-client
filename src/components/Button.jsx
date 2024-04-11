import { cls } from "../libs/utils";

export default function Button({clickEvent, step, confirm}) {
    return (
        <div className="flex w-full absolute bottom-[32px] px-[16px]">
            <button onClick={clickEvent} className={cls("bg-[#565656] py-[18px] w-full font-bold text-[22px] rounded-[36px]", confirm ? 'bg-[#04C357]' : 'bg-[#D9D9D9]')}>
                {step}
            </button>
        </div>
    )
}