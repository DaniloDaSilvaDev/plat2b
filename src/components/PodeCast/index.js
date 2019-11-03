import React from 'react';
import { FaPodcast, FaBookmark, FaCheckSquare } from 'react-icons/fa';
import { Content } from './styles';

export default function PodeCast() {
    return (
        <Content>
            <FaPodcast className="icon-pdf" size={30} />
            <div className="content-text">
                <h1>Currículo pedagógico - PodCast</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit eius, ut aperiam aliquam beatae recusandae fugiat
                    cupiditate porro at autem nisi illum officiis nobis esse
                </p>
            </div>

            <FaBookmark className="icon-fav" size={18} cursor="pointer" />
            <FaCheckSquare className="icon-check" size={18} cursor="pointer" />
        </Content>
    );
}
