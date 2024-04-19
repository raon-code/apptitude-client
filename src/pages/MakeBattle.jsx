import { useState } from "react";
import Back from "../components/Back";
import Button from "../components/Button";

const titles = ['대결 이름', '대결 목표', '대결 보상', '대결 확인']

export default function Battle() {
    const [index, setIndex] = useState(1);
    const [title, setTitle] = useState(titles[0]);
    const [step, setStep] = useState('다음');
    const [confirm, setConfirm] = useState(true);

    function onClick() {
        if (titles.length === index) {
            console.log('끝')
            return
        }
        setIndex((crr) => crr + 1);
        setTitle(titles[index])
        if (index === 3) {
            setStep('확인했습니다!')
        }
    }

    function backClick() {
        console.log(index)
        if (index === 1) {
            window.history.back()
        }         
        setIndex((crr) => crr - 1);
        setTitle(titles[index - 2]);
        if (index !== 3) {
            setStep('다음!')
        }

    }

    return (
        <div>
            <Back title={title} backClick={backClick}/>
            <Button clickEvent={onClick} step={step} confirm={confirm}/>
        </div>
    );
}