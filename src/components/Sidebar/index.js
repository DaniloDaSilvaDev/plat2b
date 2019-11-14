/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  FaHome,
  FaBookmark,
  FaFilePdf,
  FaPodcast,
  FaCodeBranch,
  FaCheckDouble,
  FaGraduationCap,
} from 'react-icons/fa';
import { Sidebar, List } from './style';
import Item from './item';
import Logo from './logo';

const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const itemsList = [
    {
      title: 'Home',
      icon: <FaHome />,
      path: '/',
    },
    {
      title: 'Disciplinas',
      icon: <FaGraduationCap size="35px" />,
      path: '/disciplinas',
    },
    {
      title: 'PDFs',
      icon: <FaFilePdf />,
      path: '/pdf',
    },
    {
      title: 'Questões',
      icon: <FaCheckDouble />,
      path: '/questoes',
    },
    {
      title: 'PodCasts',
      icon: <FaPodcast />,
      path: '/podcast',
    },
    {
      title: 'Mapas Mentais',
      icon: <FaCodeBranch />,
      path: '/mapas-mentais',
    },
    {
      title: 'Favoritos',
      icon: <FaBookmark />,
      path: '/favoritos',
    },
  ];

  return (
    <Sidebar id="menuToggle">
      <List id="menu">
        <Logo />
        {itemsList.map((item, index) => (
          <Item
            path={item.path}
            key={item.title}
            // {...item}
            title={item.title}
            icon={item.icon}
            onSelected={setSelected}
            index={index}
            active={selected === index}
          />
        ))}
      </List>
    </Sidebar>
  );
};
export default withRouter(SideBar);
