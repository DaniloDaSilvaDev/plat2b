import React from 'react';
import { FaYoutube, FaBookmark, FaCheckSquare } from 'react-icons/fa';
import { Content } from './styles';
import thunbVideo from '../../assets/thunb1.png';

export default function Video() {
    return (
        <Content>
            <FaYoutube className="icon-pdf" size={30} />
            <div className="content-text">
                <h1>Currículo pedagogico - Vídeo</h1>
                <div className="content-thunb">
                    <img src={thunbVideo} alt="video" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sit eius, ut aperiam aliquam beatae recusandae
                        fugiat cupiditate porro at autem nisi illum officiis
                        nobis esse. Lorem ipsum, dolor sit amet consectetur.,
                        lit.
                    </p>
                </div>
            </div>

            <FaBookmark className="icon-fav" size={18} cursor="pointer" />
            <FaCheckSquare className="icon-check" size={18} cursor="pointer" />
        </Content>
    );
}
