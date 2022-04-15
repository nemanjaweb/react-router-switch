import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

const MeetupItem = ({ image, title, adress, description }) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title}></img>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{adress}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>Go to Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
