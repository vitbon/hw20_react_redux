import React, { Component } from "react";
import { connect, useDispatch } from 'react-redux';
import './CreatePost.css';
import reducer from "../../redux/reducer";
import { changeName, changeNickName } from "../../redux/actions";
import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_CONTENT, CHANGE_IMAGE,
  CLICK_MESSAGE, CLICK_RETWEET, CLICK_LIKE, CHANGE_AVATAR, ADD_POST } from "../../redux/types";

class CreatePost extends Component {
/*
  state = {
    avatarID: 0,
    avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg",
    date: '',
    currentDay: '',
    countMessage: 5,
    countReTweet: 5,
    countLike: 5,
  };
*/

  componentDidMount () {
    const getRnd = (min, max) => { return (Math.round(Math.random() * (max - min) + min))};
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const strMonth = ['jan.', 'feb.', 'mar.', 'apr.', 'may', 'jun.', 'jul.', 'aug.', 'sep.', 'oct.', 'nov.', 'dec.'];
    this.setState({currentDay: day + ' ' + strMonth[month] });
    this.setState({countMessage: getRnd(1, 1000)});
    this.setState({countReTweet: getRnd(1, 1000)});
    this.setState({countLike: getRnd(100, 1000)});
  }

  async handlerAvatar(e) {
    const avasURL = [
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/skywalker-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sheevPalpatine-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/leiaOrgana-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg",
    ];
    if (this.state.avatarID >= 3) {
      await this.setState({avatarID: 0})
    } else {
      await this.setState({avatarID: ++this.state.avatarID});
    }
    await this.setState({avatar: avasURL[this.state.avatarID]});
  };

  render() {
    //const dispatch = useDispatch();
    const path = 'https://github.com/vitbon/hw20_react_redux/raw/master/public/img/';
    return (
      <div className={"background"}>
        <div className="create_card">
          <div className="create_card_header">
            <span className="create_card_header_avatar" onClick={this.handlerAvatar}>
              <img src='{this.state.avatar}'/>
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
                <input className="create_hero_nick" placeholder="Nickname..."
                       onChange={(e) => this.props.changeNickName(e.target.value)}
                       defaultValue={this.props.nickname}
                >


                </input> • 'this.state.currentDay'
                <input className="create_hero_text" placeholder="Text..."></input>
                <input className="create_card_url" placeholder="Picture URL..."></input>
              </div>
              <div className="create_card_header_textBox_status">
                <span></span>
              </div>
            </span>
          </div>

          <div className="create_card_center">
          </div>

          <div className="create_card_footer">
          <span>
            <a src="#"><img src={`${path}` + "tw-message.png"} alt="Message Icon"/><span
              className="icon2text">'this.state.countMessage}'</span></a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-retweet.png"} alt="Retweet Icon"/><span
              className="icon2text">'this.state.countReTweet}'</span></a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-like.png"} alt="Like Icon"/><span
              className="icon2text">'this.state.countLike}'</span></a>
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
  }
}

const getDispatchToProps = (dispatch) => {
  return {
    changeName: e => dispatch(changeName(e)),
    changeNickName: e => dispatch(changeNickName(e)),
  }
}

export default connect(getStateToProps, getDispatchToProps)(CreatePost);