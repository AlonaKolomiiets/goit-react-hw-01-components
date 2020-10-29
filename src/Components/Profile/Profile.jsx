import React from "react";
import PropTypes from "prop-types";
import { CardProfile } from "./Profile.slyled";
import { ImgProfile } from "./Profile.slyled";
import { SecondFont } from "./Profile.slyled";
import { DescriptionDiv } from "./Profile.slyled";
import { FirstFont } from "./Profile.slyled";
import { Stats } from "./Profile.slyled";
import { List } from "./Profile.slyled";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <CardProfile>
      <DescriptionDiv>
        <ImgProfile src={avatar} alt="user avatar" />
        <FirstFont>{name}</FirstFont>
        <SecondFont>@{tag}</SecondFont>
        <SecondFont>{location}</SecondFont>
      </DescriptionDiv>

      <Stats>
        <List>
          <SecondFont>Followers</SecondFont>
          <FirstFont>{stats.followers}</FirstFont>
        </List>
        <List>
          <SecondFont>Views</SecondFont>
          <FirstFont>{stats.views}</FirstFont>
        </List>
        <List>
          <SecondFont className="label">Likes</SecondFont>
          <FirstFont className="quantity">{stats.likes}</FirstFont>
        </List>
      </Stats>
    </CardProfile>
  );
};
export default Profile;
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности

// Profile.defaultProps = {
//   type: "card-item__buy-btn",
//   img: "https://i.ibb.co/0jDhL34/51498472915966370-1.jpg",
// };
