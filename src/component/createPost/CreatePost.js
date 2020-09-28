import React, {Component} from "react";
import './CreatePost.css';
import store from '../../redux/store';
import ADD_POST from "../../redux/actions";
import {connect, useDispatch} from 'react-redux';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarID: 3,
      newPost: {
        id: 0,
        name: "",
        avatar: "",
        nickname: "",
        date: "",
        content: "",
        image: "",
        message: 0,
        messageIsPressed: false,
        reTweet: 0,
        reTweetIsPressed: false,
        like: 0,
        likeIsPressed: false,
      },
    };
  };

  componentWillMount() {
    const getRnd = (min, max) => { return (Math.round(Math.random() * (max - min) + min)) };
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const strMonth = ['jan.', 'feb.', 'mar.', 'apr.', 'may', 'jun.', 'jul.', 'aug.', 'sep.', 'oct.', 'nov.', 'dec.'];
    const st = store.getState();
    this.state.newPost.id = st.length;
    this.state.newPost.avatar = "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg";
    this.state.newPost.date = day + ' ' + strMonth[month];
    this.state.newPost.message = getRnd(1, 1000);
    this.state.newPost.reTweet = getRnd(1, 1000);
    this.state.newPost.like = getRnd(1, 1000);
  };

  handleAvatar = (e) => {
    if (this.state.avatarID >= 3) this.state.avatarID = 0;
      else this.state.avatarID += 1;
    const avasURL = [
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/skywalker-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sheevPalpatine-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/leiaOrgana-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg",
    ];
    this.state.newPost.avatar = avasURL[this.state.avatarID];
  };

  handlerPublish = () => {
    store.getState().push(this.state.newPost);
  };

  render() {
    const path = 'https://github.com/vitbon/hw20_react_redux/raw/master/public/img/';
    return (
      <div className={"background"}>
        <div className="create_card">
          <div className="create_card_header">
            <span className="create_card_header_avatar" onClick={this.handleAvatar}>
              <img src={this.state.newPost.avatar} />
            </span>
            <span className="create_card_header_textBox">
              <div className="create_card_header_textBox_name">
                <input className="create_hero_name"
                       placeholder="Full Name..."
                       onChange={ e => this.state.newPost.name = e.target.value }
                >
                </input>
                <img src={`${path}` + "star-active.png"} className="star-active" alt="Active Button"/>
                <span>&nbsp;@ </span>
                <input className="create_hero_nick"
                       placeholder="Nickname..."
                       onChange={e => this.state.newPost.nickname = e.target.value}
                >
                </input>
                • {this.state.newPost.date}
                <input className="create_hero_text"
                       placeholder="Text..."
                       onChange={e => this.state.newPost.content = e.target.value}
                >
                </input>
                <input className="create_card_url"
                       placeholder="Picture URL..."
                       onChange={e => this.state.newPost.image = e.target.value}
                >
                </input>
              </div>
              <div className="create_card_header_textBox_status">
                <span></span>
              </div>
            </span>
          </div>

          <div className="create_card_center">
            <img src={this.state.newPost.image}/>
          </div>

          <div className="create_card_footer">
          <span>
            <a src="#"><img src={`${path}` + "tw-message.png"} alt="Message Icon"/>
              <span className="icon2text">
                {this.state.newPost.message}
              </span>
            </a>
          </span>
          <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-retweet.png"} alt="Retweet Icon"/>
              <span className="icon2text">
                {this.state.newPost.reTweet}
              </span>
            </a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-like.png"} alt="Like Icon"/>
              <span className="icon2text">
                {this.state.newPost.like}
              </span>
            </a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-share.png"} alt="Share Icon"/></a>
          </span>
          </div>
        </div>

        <div>
          <button className="create_publish_btn"
                  onClick={this.handlerPublish}
          >
            Publish
          </button>
        </div>
      </div>
    )
  }
}

const getStateToProps = (state) => {
  console.log(state);
  return {
    // message: state.message,
  }
}

const getDispatchToProps = (dispatch) => {
  return {
    // addPost: e => dispatch(changeMessage(e)),
  }
}

export default connect(getStateToProps, getDispatchToProps)(CreatePost);





// let avatarID = 3;
// const newPost = {
//   id: 0,
//   name: "",
//   avatar: "",
//   nickname: "",
//   date: "",
//   content: "",
//   image: "",
//   message: 0,
//   messageIsPressed: false,
//   reTweet: 0,
//   reTweetIsPressed: false,
//   like: 0,
//   likeIsPressed: false,
// };

/*
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
*/

// export default connect(getStateToProps, getDispatchToProps)(CreatePost);

// onChange={(e) => this.props.changeMessage(e.target.value)}
// <span className="create_card_header_avatar" onClick={(e) => this.props.changeAvatar(e.target.src)}>
/*
  storeDate = () => {
    const s = store.getState();
    return s[s.length - 1].date;
  }

  storeAvatar = () => {
    const s = store.getState();
    return s[s.length - 1].avatar;
  }

  storeImg = () => {
    const s = store.getState();
    return s[s.length - 1].image;
  }

  storeMessage = () => {
    const s = store.getState();
    return s[s.length - 1].message.count;
  }

  storeReTweet = () => {
    const s = store.getState();
    return s[s.length - 1].reTweet.count;
  }

  storeLike = () => {
    const s = store.getState();
    return s[s.length - 1].like.count;
  }
*/