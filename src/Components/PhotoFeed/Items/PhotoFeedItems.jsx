import React from "react";
import AddCollectionButton from "../../Buttons/AddCollection/AddCollection.jsx";
import Download from "../../Buttons/Download/Download.jsx";
import Like from "../../Buttons/Like/Like.jsx";
import { Heart, Plus } from "../../Icons/Icon.jsx";
import "./PhotoFeedItem.scss";

const PhotoFeedItem = (props) => {
  return (
    <figure className="item" {...props}>
      <div className="item__topButtons">
        <Like>
          <Heart customClass="red" />
          <span>{props.photo.likes}</span>
        </Like>
        <AddCollectionButton>
          <Plus customClass="gray" />
          <span>Collection</span>
        </AddCollectionButton>
      </div>

      <div className="item__botomContainer">
        <div className="item__user">
          <img
            className="item__user__Profile__Picture"
            src={props.photo.user.profile_image.medium}
            alt={props.photo.alt_description}
          />
          <span className="item__user__Profile__Name">
            {props.photo.user.name}
          </span>
        </div>
        <Download download={props.photo.links.download} />
      </div>
      <img loading="lazy" src={props.photo.urls.regular} alt="" />
    </figure>
  );
};
export default PhotoFeedItem;
