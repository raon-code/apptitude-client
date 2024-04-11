import { Link } from "react-router-dom"

export default function NavButton({toLink, title}) {
    return (
        <div className="flex w-full px-[16px] absolute bottom-[111px]">
            <Link to={toLink} className="w-full bg-black text-white text-center text-[22px] py-[18px] rounded-[16px] font-semibold">
                {title}
            </Link>
        </div>
    )
}