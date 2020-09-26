import React, { Component } from "react";
import { connect, useDispatch } from 'react-redux';
import './CreatePost.css';
import reducer from '../../redux/reducer.js';
import store from '../../redux/store';
import { changeName, changeNickName, changeDate, changeContent, changeImage, changeAvatar,
  changeMessage } from "../../redux/actions";

let avatarID = 3;

class CreatePost extends Component {
  constructor(props) {
    super(props);
    state = {

    };
  }
  componentWillMount() {
    const getRnd = (min, max) => { return (Math.round(Math.random() * (max - min) + min))};
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const strMonth = ['jan.', 'feb.', 'mar.', 'apr.', 'may', 'jun.', 'jul.', 'aug.', 'sep.', 'oct.', 'nov.', 'dec.'];
    const st = store.getState();
    const stNew = {
        id: st.length,
        name: "",
        avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg",
        avatarID: 3,
        nickname: "",
        date: day + ' ' + strMonth[month],
        content: "",
        image: "",
        message: { count: getRnd(1, 1000), isPressed: false },
        reTweet: { count: getRnd(1, 1000), isPressed: false },
        like: { count: getRnd(1, 1000), isPressed: false },
    };
    st.push(stNew);
  }

  storeDate = () => {
    const s = store.getState();
    return s[s.length-1].date;
  }

  storeAvatar = () => {
    const s = store.getState();
    return s[s.length-1].avatar;
  }

  storeImg = () => {
    const s = store.getState();
    return s[s.length-1].image;
  }

  storeMessage = () => {
    const s = store.getState();
    return s[s.length-1].message.count;
  }

  storeReTweet = () => {
    const s = store.getState();
    return s[s.length-1].reTweet.count;
  }

  storeLike = () => {
    const s = store.getState();
    return s[s.length-1].like.count;
  }

  render() {
    const path = 'https://github.com/vitbon/hw20_react_redux/raw/master/public/img/';
    return (
      <div className={"background"}>
        <div className="create_card">
          <div className="create_card_header">
            <span className="create_card_header_avatar" onClick={(e) => this.props.changeAvatar(e.target.src)} >
              <img src={this.storeAvatar()} />
            </span>
            <span className="create_card_header_textBox">
              <div className="create_card_header_textBox_name">
                <input className="create_hero_name"
                       placeholder="Full Name..."
                       onChange={(e) => this.props.changeName(e.target.value)}
                       defaultValue={this.props.name}
                >
                </input>
                <img src={`${path}` + "star-active.png"} className="star-active" alt="Active Button"/>
                <span>&nbsp;@ </span>
                <input className="create_hero_nick"
                       placeholder="Nickname..."
                       onChange={(e) => this.props.changeNickName(e.target.value)}
                       defaultValue={this.props.nickname}
                >
                </input>
                • {this.storeDate()}
                <input className="create_hero_text"
                       placeholder="Text..."
                       onChange={(e) => this.props.changeContent(e.target.value)}
                       defaultValue={this.props.content}
                >
                </input>
                <input className="create_card_url"
                       placeholder="Picture URL..."
                       onChange={(e) => this.props.changeImage(e.target.value)}
                       defaultValue={this.props.image}
                >
                </input>
              </div>
              <div className="create_card_header_textBox_status">
                <span></span>
              </div>
            </span>
          </div>

          <div className="create_card_center">
            <img src={this.storeImg()}/>
          </div>

          <div className="create_card_footer">
          <span>
            <a src="#"><img src={`${path}` + "tw-message.png"} alt="Message Icon"/>
            <span className="icon2text"
                  defaultValue={this.props.message}
                  onChange={(e) => this.props.changeMessage(e.target.value)}
            >{this.storeMessage()}
            </span>
            </a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-retweet.png"} alt="Retweet Icon"/><span
              className="icon2text">{this.storeReTweet()}</span></a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-like.png"} alt="Like Icon"/><span
              className="icon2text">{this.storeLike()}</span></a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-share.png"} alt="Share Icon"/></a>
          </span>
          </div>
        </div>

        <div>
          <button className="create_publish_btn"> Publish</button>
        </div>
      </div>
    )
  }
}

const getStateToProps = (state) => {
  console.log(state);
  return {
    name: state.name,
    nickname: state.nickname,
    date: state.date,
    avatar: state.avatar,
    content: state.content,
    image: state.image,
    message: state.message,
  }
}

const getDispatchToProps = (dispatch) => {
  return {
    changeName: e => dispatch(changeName(e)),
    changeNickName: e => dispatch(changeNickName(e)),
    changeDate: e => dispatch(changeDate(e)),
    changeAvatar: e => dispatch(changeAvatar(e)),
    changeContent: e => dispatch(changeContent(e)),
    changeImage: e => dispatch(changeImage(e)),
    changeMessage: e => dispatch(changeMessage(e)),
  }
}

export default connect(getStateToProps, getDispatchToProps)(CreatePost);