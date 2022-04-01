import React, { useEffect, useState, useRef, PropsWithChildren } from 'react';
import { fetchVideos } from '../../../API/services';
import { IMovie } from '../../../types/movie';
import { IVideo, IVideos } from '../../../types/videos';
import './Modal.scss';

interface ModalProps {
    active: boolean;
    id?: string;
    onClose?: React.MouseEventHandler;
}

type MainModal = ModalProps | IMovie;

const Modal = (props: PropsWithChildren<ModalProps>) => {

    const [active, setActive] = useState<boolean>(false);

    useEffect(() =>{
            setActive(props.active);
    }, [props.active])

  return (
    <div className={`modal ${active ? 'active' : ''}`} id={props.id}>
        {props.children}
    </div>
  );
};

/*const ModalContent = (props: PropsWithChildren<ModalProps>) => {
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

export const TrailerModal = ({ movie }: { movie: PropsWithChildren<IMovie>}) => {
        const [link, setLink] = useState<string>('');
        const [videos, setVideos] = useState<IVideos>();
        const iframeRef = useRef<HTMLIFrameElement>(null);
        const videoSrc: string = 'http://www.youtube.com/embed/';

        useEffect(() =>{
            fetchVideos(movie.id).then((response) =>{
                if(response.data.results.length > 0){
                    setVideos(response.data);
                   // console.log(videos?.results[0].key);
                }   
          })
        }, [movie])

        const onClose = () => {
            if(iframeRef && iframeRef.current){
                    iframeRef.current.setAttribute('src', '');
            }
        }

        return (
            <Modal active={false} id={`modal_${movie.id}`}>
                <ModalContent onClose={onClose} active={true}>
                        <iframe 
                        ref={iframeRef} 
                        width="100%" 
                        height="100%" 
                        title="trailer" 
                        //src={videoSrc + videos?.results[0].key}
                       >
                        </iframe>
                </ModalContent> 
            </Modal>
            )
}*/

export default Modal;
