import React, { useEffect, useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import './Modal.scss';

interface ModalProp{
    active: boolean;
    id: string;
}

interface ModalContent{
    onClose: void;
}

const Modal = (props: any) => {

    const [active, setActive] = useState<boolean>(false);

    useEffect(() =>{
        setActive(props.active);
    }, [props.active])
  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
        {props.children}
    </div>
  );
}

export const ModalContent = (props: any) =>{

    const contentRef = useRef<any>(null);

    const closeModal = () =>{
        contentRef?.current?.parentNode.classList.remove('active');
        if(props.onClose) props.onClose();
    }

    return(
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                    <AiFillCloseCircle/>
            </div>
        </div>
    )
}

export default Modal;