import React, { useEffect, useState, useRef, PropsWithChildren } from 'react';
import './modal.scss';

interface ModalProps {
    active: boolean;
    id: string;
    onClose?: void;
}


const Modal = (props: PropsWithChildren<ModalProps>) => {

    const [active, setActive] = useState<boolean>(false);

    useEffect(() =>{
            setActive(props.active);
    }, [props.active])
  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
        {props.children}
    </div>
  );
};

export const ModalContent = (props: PropsWithChildren<ModalProps>) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const closeModal = () =>{
        if(contentRef && contentRef.current){
            contentRef.current.classList.remove('active');
        }
    }

    return(
        <div ref={contentRef} className="modal__content">
                {props.children}
                <div className="modal__content__close" onClick={closeModal}>
                    <i className="bx bx-x"></i>
                </div>
        </div>
    )
}

export default Modal;
