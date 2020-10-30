import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

// В зависимости от пропа isOnline,
// должен меняться цвет фона span.status.
// Это можно сделать через разный CSS-класс или Styled Components.
