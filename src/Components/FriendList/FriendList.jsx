import React from "react";
import PropTypes from "prop-types";

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// В зависимости от пропа isOnline,
// должен меняться цвет фона span.status.
// Это можно сделать через разный CSS-класс или Styled Components.
