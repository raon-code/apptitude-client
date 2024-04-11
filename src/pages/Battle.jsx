import Nav from "../components/Nav";
import NavButton from "../components/NavButton";

export default function Battle() {
    return (
        <div>
            <div className="h-full w-full overflow-hidden flex flex-col items-center px-6">
                <div className="w-full h-[519px] bg-gray-300 mt-20">
                </div>
                <NavButton toLink={'/makeBattle'} title={'1:1 대결방 만들기!'} />
            </div>
            <Nav />
        </div>
    )
}