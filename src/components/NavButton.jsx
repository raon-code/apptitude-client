import { Link } from "react-router-dom"

export default function NavButton({toLink, title}) {
    return (
        <div className="flex w-full px-[16px] absolute bottom-[111px]">
            <Link to={toLink} className="w-full bg-[#04C357] text-[#050409] text-center text-[22px] py-[18px] rounded-[36px] font-bold">
                {title}
            </Link>
        </div>
    )
}