import { useState } from "react";
import Modal from "../components/Modal";
import Nav from "../components/Nav";

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    // 모달창 오픈할 때
    // setModalOpen(true)
    return (
        <div className="">
            <div className="">
                <Nav />
            </div>
            {modalOpen ? <Modal /> : null}
        </div>

    );
}