import React from "react";
import location from "../assets/images/map-pin.svg";
import duration from "../assets/images/clock.svg";
import calendar from "../assets/images/calendar.svg";
import user from "../assets/images/user.svg";
import users from "../assets/images/users.svg";
import remove from "../assets/images/x-circle.svg";
import tag from "../assets/images/tag.svg";
import trash from "../assets/images/trash-2.svg";
import add from "../assets/images/plus-circle.svg";
import addWhite from "../assets/images/plus-circle-white.svg";
import check from "../assets/images/check-circle.svg";
import price from "../assets/images/dollar-sign.svg";
import edit from "../assets/images/edit-2.svg";

const renderIcon = name => {
  switch (name) {
    case "location":
      return location;
    case "duration":
      return duration;
    case "calendar":
      return calendar;
    case "user":
      return user;
    case "users":
      return users;
    case "remove":
      return remove;
    case "tag":
      return tag;
    case "add":
      return add;
    case "add-white":
      return addWhite;
    case "price":
      return price;
    case "trash":
      return trash;
    case "edit":
      return edit;
    default:
      return check;
  }
};

const Icon = ({ name, size }) => {
  return (
    <img
      className={`icon icon-${name}`}
      src={renderIcon(name)}
      height={size || 14}
      width={size || 14}
      alt="icon"
    />
  );
};

export default Icon;
