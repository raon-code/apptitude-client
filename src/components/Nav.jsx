import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, matchPath, useMatch} from "react-router-dom";
import { cls } from "../libs/utils";

const Item = styled(motion.div)`
`;

export default function Nav() {
    const mainMatch = useMatch('/')
    const battleMatch = useMatch('/battle')
    const infoMatch = useMatch('/info')

    return (
        <nav className="flex justify-between absolute bottom-0 w-full mb-[22px]">
            <Link to={'/'} className={cls(`py-[10px] w-full h-full relative`, mainMatch ? 'opacity-1' : 'opacity-[0.38]')}>
                <div className="flex flex-col items-center gap-1">
                    <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4697 3.84101C11.7626 3.54811 12.2374 3.54811 12.5303 3.84101L21.2197 12.5303C21.5126 12.8232 21.9874 12.8232 22.2803 12.5303C22.5732 12.2375 22.5732 11.7626 22.2803 11.4697L13.591 2.78035C12.7123 1.90167 11.2877 1.90167 10.409 2.78035L1.71967 11.4697C1.42678 11.7626 1.42678 12.2375 1.71967 12.5303C2.01256 12.8232 2.48744 12.8232 2.78033 12.5303L11.4697 3.84101Z" fill="#0F172A"/>
                        <path d="M12 5.432L20.159 13.591C20.1887 13.6207 20.2191 13.6494 20.25 13.6772V19.875C20.25 20.9105 19.4105 21.75 18.375 21.75H15C14.5858 21.75 14.25 21.4142 14.25 21V16.5C14.25 16.0858 13.9142 15.75 13.5 15.75H10.5C10.0858 15.75 9.75 16.0858 9.75 16.5V21C9.75 21.4142 9.41421 21.75 9 21.75H5.625C4.58947 21.75 3.75 20.9106 3.75 19.875V13.6772C3.78093 13.6494 3.81127 13.6207 3.84099 13.591L12 5.432Z" fill="#0F172A"/>
                    </svg>
                    <span className="text-[12px]">내 기록</span>
                </div>
                {mainMatch && <Item className="w-full h-full bg-gray-400 absolute z-[-1] bottom-0" layoutId="navigation"></Item>}
            </Link>
            <Link to={'/battle'} className={cls(`py-[10px] w-full h-full relative`, battleMatch ? 'opacity-1' : 'opacity-[0.38]')}>
                <div className="flex flex-col items-center gap-1 relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-[#0F172A]" fill-rule="evenodd" clip-rule="evenodd" d="M5.52711 15.563C5.8313 15.9561 5.75921 16.5214 5.3661 16.8255C4.65505 17.3757 4.19995 18.2345 4.19995 19.2C4.19995 19.3883 4.21719 19.5721 4.25007 19.7499C4.42791 19.7828 4.61163 19.8 4.79995 19.8C5.76544 19.8 6.62422 19.3449 7.17443 18.6339C7.47862 18.2408 8.04389 18.1687 8.437 18.4729C8.83011 18.777 8.9022 19.3423 8.59801 19.7354C7.72159 20.868 6.34603 21.6 4.79995 21.6C4.24799 21.6 3.71596 21.5065 3.22003 21.3337C2.96061 21.2433 2.75669 21.0393 2.66629 20.7799C2.49348 20.284 2.39995 19.752 2.39995 19.2C2.39995 17.6539 3.13192 16.2784 4.26455 15.402C4.65766 15.0978 5.22293 15.1699 5.52711 15.563Z" fill="#0F172A"/>
                        <path fillRule="evenodd" clip-rule="evenodd" d="M6.90278 14.4C7.68852 15.4052 8.5948 16.3114 9.59995 17.0972V21.9C9.59995 22.3971 10.0029 22.8 10.5 22.8C13.8137 22.8 16.5 20.1137 16.5 16.8C16.5 16.2117 16.415 15.6421 16.2565 15.1034C20.216 12.2756 22.7999 7.63982 22.7999 2.40001C22.7999 2.29482 22.7989 2.18985 22.7968 2.08512C22.7873 1.60203 22.3979 1.21271 21.9148 1.20313C21.8101 1.20106 21.7052 1.20001 21.5999 1.20001C16.3601 1.20001 11.7243 3.78398 8.8966 7.74351C8.3579 7.58495 7.78828 7.50001 7.19995 7.50001C3.88624 7.50001 1.19995 10.1863 1.19995 13.5C1.19995 13.9971 1.60289 14.4 2.09995 14.4H6.90278ZM15.6 10.8C16.9254 10.8 18 9.7255 18 8.40001C18 7.07453 16.9254 6.00001 15.6 6.00001C14.2745 6.00001 13.2 7.07453 13.2 8.40001C13.2 9.7255 14.2745 10.8 15.6 10.8Z" fill="#0F172A"/>
                    </svg>
                    <span className="text-[12px]">대결하기</span>
                </div>
                {battleMatch && <Item className="w-full h-full bg-gray-400 absolute z-[-1] bottom-0"  layoutId="navigation"></Item>}
            </Link>
            <Link to={'/info'} className={cls(`py-[10px] w-full h-full relative`, infoMatch ? 'opacity-1' : 'opacity-[0.38]')}>
                <div className="flex flex-col items-center gap-1 relative">
                    <svg className="fill-black" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M18.6854 19.0971C20.5721 17.3191 21.75 14.7971 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 14.7971 3.42785 17.3191 5.31463 19.0971C7.06012 20.7419 9.41234 21.75 12 21.75C14.5877 21.75 16.9399 20.7419 18.6854 19.0971ZM6.14512 17.8123C7.51961 16.0978 9.63161 15 12 15C14.3684 15 16.4804 16.0978 17.8549 17.8123C16.3603 19.3178 14.289 20.25 12 20.25C9.711 20.25 7.63973 19.3178 6.14512 17.8123ZM15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9Z" fill="#0F172A"/>
                    </svg>
                    <span className="text-[12px]">내 정보</span>
                </div>
                {infoMatch && <Item className="w-full h-full bg-gray-400 absolute z-[-1] bottom-0"  layoutId="navigation"></Item>}
            </Link>
        </nav>
    )
}