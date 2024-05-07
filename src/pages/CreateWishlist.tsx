import "../App.css";

import React from 'react';

const CreateWishlist: React.FC = () => {

  return (
    
    <div className="wishlist-container">
      <div className="wishlist-card">
      <span className="back-arrow"><a href="/">&#8592; Back</a></span>
        <h2> Create a wishlist</h2>
        
        <div className="input-group">
          <label htmlFor="wishlist-name">Wish list name</label>
          <input
            type="text"
            id="wishlist-name"
            placeholder="For example: Birthday, New Year"
            className="rounded-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            placeholder="Write something to your friends. This could be a greeting, wishes for gifts or an invitation."
            className="rounded-textarea"
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="event-date">Event date</label>
          <input type="date" id="event-date" className="rounded-input" lang="en"/>
        </div>
        <button className="save-button">Save</button>
      </div>
    </div>
   
  );
};

export default CreateWishlist;