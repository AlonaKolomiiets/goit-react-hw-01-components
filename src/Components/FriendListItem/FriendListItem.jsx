import React from "react";
import PropTypes from "prop-types";
import { Status } from "./FriendListItem.styled";
import { Item } from "./FriendListItem.styled";
import { Img } from "./FriendListItem.styled";
import { Name } from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
