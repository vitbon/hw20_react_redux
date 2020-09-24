import React from 'react';

const Post = (props) => {
  return (
    <div className={"background"}>
      <div className="card">
        <div className="card__header">
          <span className="card__header_avatar">
            <img src={props.avatar} />
          </span>
          <span className="card__header__textBox">
            <div className="card__header__textBox_name">
              <span className="bold">{props.name}</span>
              <img src='./img/star-active.png' className="star-active" alt="Active Button" />
              <span className="gray"><a>{props.nickname}</a> • {props.date}</span>
            </div>
            <div className="card__header__textBox_status">
              <span>{props.content}</span>
            </div>
          </span>
          <span className="card__header__textBox_dw_Arrow"><img src="./img/down-arrow.png" width="14px" alt="Down Arrow"/></span>
        </div>

        <div className="card__center">
          <img src={props.image} />
        </div>

        <div className="card__footer">
        <span>
          <a src="#"><img src="./img/tw-message.png" alt="Message Icon"/><span className="icon2text">{props.message}</span></a>
        </span>
        <span className="leftTab">
          <a src="#"><img src="./img/tw-retweet.png" alt="Retweet Icon"/><span className="icon2text">{props.reTweet}</span></a>
        </span>
        <span className="leftTab">
          <a src="#"><img src="./img/tw-like.png" alt="Like Icon"/><span className="icon2text">{props.like}</span></a>
        </span>
        <span className="leftTab">
          <a src="#"><img src="./img/tw-share.png" alt="Share Icon" /></a>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Post;