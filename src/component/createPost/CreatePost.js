import React, {Component} from "react";
import './CreatePost.css';
import store from '../../redux/store';
import {connect, useDispatch} from 'react-redux';
import reducer from '../../redux/reducer.js';
import { changeMessage, changeReTweet, changeLike, addPost } from "../../redux/actions";

let avatarID = 3;

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      avatar: "",
      nickname: "@",
      date: "",
      content: "",
      image: "",
      message: 0,
      messageIsPressed: false,
      reTweet: 0,
      reTweetIsPressed: false,
      like: 0,
      likeIsPressed: false,
    };
  };

  componentWillMount() {
    console.log('componentWillUnmount');
    this.storeUnsubscribe = store.subscribe(() => {
      this.updateData();
    });
  }

  componentDidMount() {
    this.updateData();
  };

  componentWillUnmount() {
    this.storeUnsubscribe();
    this.setState({name: ''});
    this.setState({nickname: '@'});
    this.setState({content: ''});
    this.setState({image: ''});
    //document.getElementById("add_post").reset();
  };

  updateData = () => {
    const getRnd = (min, max) => { return (Math.round(Math.random() * (max - min) + min)) };
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const strMonth = ['jan.', 'feb.', 'mar.', 'apr.', 'may', 'jun.', 'jul.', 'aug.', 'sep.', 'oct.', 'nov.', 'dec.'];
    const st = store.getState();
    this.setState({id: st.length + 1});
    this.setState({avatar: "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg"});
    this.setState({date: day + ' ' + strMonth[month]});
    };

  handleAvatar = async (e) => {
    if (avatarID >= 3) avatarID = 0;
      else avatarID += 1;
    const avasURL = [
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/skywalker-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sheevPalpatine-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/leiaOrgana-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/dartWeider-ava.jpg",
    ];
    await this.setState({avatar: avasURL[avatarID]});
  };

  render() {
    const path = 'https://github.com/vitbon/hw20_react_redux/raw/master/public/img/';
    return (
      <div className={"background"}>
        <div className="create_card">
          <div className="create_card_header">
            <span className="create_card_header_avatar" onClick={this.handleAvatar}>
              <img src={this.state.avatar} />
            </span>
            <span className="create_card_header_textBox">
              <div className="create_card_header_textBox_name">
                <form id="add_post">
                  <input className="create_hero_name"
                         placeholder="Full Name..."
                         onChange={ e => this.state.name = e.target.value}
                  >
                  </input>
                  <img src={`${path}` + "star-active.png"} className="star-active" alt="Active Button"/>
                  <span>&nbsp; </span>
                  <input className="create_hero_nick"
                         placeholder="Nickname..."
                         defaultValue={this.state.nickname}
                         onChange={e => this.state.nickname = e.target.value}
                  >
                  </input>
                  &bull; {this.state.date}
                  <input className="create_hero_text"
                         placeholder="Text..."
                         onChange={e => this.state.content = e.target.value}
                  >
                  </input>
                  <input className="create_card_url"
                         placeholder="Picture URL..."
                         onChange={e => this.state.image = e.target.value}
                  >
                  </input>
                </form>
              </div>
              <div className="create_card_header_textBox_status">
                <span></span>
              </div>
            </span>
          </div>

          <div className="create_card_center">
            {/*<img src={this.state.image}/>*/}
          </div>

          <div className="create_card_footer">
          <span>
            <a src="#"><img src={`${path}` + "tw-message.png"} alt="Message Icon"/>
              <span className="icon2text">
                {this.state.message}
              </span>
            </a>
          </span>
          <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-retweet.png"} alt="Retweet Icon"/>
              <span className="icon2text">
                {this.state.reTweet}
              </span>
            </a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-like.png"} alt="Like Icon"/>
              <span className="icon2text">
                {this.state.like}
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
                    type="submit"
                    onClick={() => { this.props.addPost(this.state)
                                     this.setState({nickname: '@'})
                                     document.getElementById("add_post").reset()
                    }}
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
 //   message: state.message,
  }
}

const getDispatchToProps = (dispatch) => {
  return {
    addPost: (arg) => dispatch(addPost(arg)),
  }
}

export default connect(getStateToProps, getDispatchToProps)(CreatePost);