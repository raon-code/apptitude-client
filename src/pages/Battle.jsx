import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function Battle() {
    return (
        <div>
            <div className="h-full w-full overflow-hidden flex flex-col items-center px-6">
                <div className="w-full h-[519px] bg-gray-300 mt-20">
                </div>
                <div className="flex mt-10 w-full">
                    <Link to={'/makeBattle'} className="w-full bg-black text-white text-center text-2xl py-3 rounded-[16px]">1:1 대결방 만들기!</Link>
                </div>
            </div>
            <Nav />
        </div>
    )
}