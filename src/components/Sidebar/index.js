/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaBookmark,
  FaFilePdf,
  FaPodcast,
  FaCodeBranch,
  FaCheckDouble,
  FaLongArrowAltLeft,
  FaGraduationCap
} from "react-icons/fa";
import { Sidebar, List } from "./style";
import Item from "./item";

export default () => {
  const [selected, setSelected] = useState(0);
  const itemsList = [
    {
      title: "Home",
      icon: <FaHome />,
      path: <Link to="/" />
    },
    {
      title: "Disciplinas",
      icon: <FaGraduationCap size="35px" />
    },
    {
      title: "PDFs",
      icon: <FaFilePdf />
    },
    {
      title: "Questões",
      icon: <FaCheckDouble />
    },
    {
      title: "PodCasts",
      icon: <FaPodcast />
    },
    {
      title: "Mapas Mentais",
      icon: <FaCodeBranch />
    },
    {
      title: "Favoritos",
      icon: <FaBookmark />
    },
    {
      title: "Sair",
      icon: <FaLongArrowAltLeft />,
      path: <Link to="/user" />
    }
  ];
  return (
    <Sidebar id="menuToggle">
      <List id="menu">
        {itemsList.map((item, index) => (
          <Item
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
