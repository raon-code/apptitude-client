export default function Login() {
    return (
        <div className="h-full w-full overflow-hidden flex flex-col items-center px-6">
            <div className="w-full h-[519px] bg-gray-300 mt-32">
            </div>
            <div className="flex flex-col mt-10 w-full">
                <button className="w-full bg-black text-white text-2xl py-3 rounded-[16px]">Google로 가입하기</button>
                <button className="mt-5">이메일로 가입하기</button>
            </div>
        </div>
    );
}