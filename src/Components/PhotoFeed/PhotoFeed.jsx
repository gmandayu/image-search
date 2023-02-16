import React from "react";
import { Spinner } from "../Icons/Icon";
import PhotoFeedItem from "./Items/PhotoFeedItems.jsx";
import "./PhotoFeed.scss";

const PhotoFeed = (props) => {
  const {
    loading,
    photos,
    loadMore,
    hasMore,
    threshold,
    classname,
    columnCount,
  } = props;

  if (!loading) {
    let row = [];

    row = photos.map((photo, i) => (
      <PhotoFeedItem key={i} alt="placeholder" photo={photo} />
    ));

    return (
      <InfiniteScroll
        classname={classname}
        hasMore={hasMore}
        loadMore={loadMore}
        loader={<Spinner size="2x" key={0} />}
        threshold={threshold}
      >
        <div className="container" columnCount={columnCount}>
          {row}
        </div>
      </InfiniteScroll>
    );
  } else {
    return (
      <div className="container">
        <Spinner size="2x" />
      </div>
    );
  }
};

export default PhotoFeed;
