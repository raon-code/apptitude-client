import NavButton from "../components/NavButton";

export default function Login() {
    return (
        <div className="h-full w-full flex flex-col items-center px-6">
            <div className="w-full h-[519px] bg-[#D9D9D9] mt-[34px]">
            </div>
            <NavButton title={'Google로 가입하기'}/>
            <div className="absolute bottom-0">
                <button className="mt-[16px] mb-[74px]">이메일로 가입하기</button>
            </div>
        </div>
    );
}