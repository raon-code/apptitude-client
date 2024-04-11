import Nav from "../components/Nav";
import NavButton from "../components/NavButton";

export default function Battle() {
    return (
        <div>
            <div className="h-full w-full overflow-hidden flex flex-col items-center px-[16px]">
                <div className="w-full h-[519px] bg-[#D9D9D9] mt-[34px]">
                </div>
                <NavButton toLink={'/makeBattle'} title={'배틀 만들기'} />
            </div>
            <Nav />
        </div>
    )
}