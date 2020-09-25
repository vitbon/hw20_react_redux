import React, { Component } from "react";
import { connect } from 'react-redux';
import './CreatePost.css';

export default class CreatePost extends Component {
  state = {
      date: '',
      currentDay: '',
      countMessage: 0,
      countReTweet: 0,
      countLike: 0,
  };

  componentDidMount () {
    const getRnd = (min, max) => { Math.round(Math.random() * (max - min) + min)};
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const strMonth = ['jan.', 'feb.', 'mar.', 'apr.', 'may', 'jun.', 'jul.', 'aug.', 'sep.', 'oct.', 'nov.', 'dec.'];
    this.setState({currentDay: day + ' ' + strMonth[month] });
    this.setState({countMessage: getRnd(1, 1000)});
    this.setState({countReTweet: getRnd(1, 1000)});
    this.setState(() => {countLike: getRnd(100, 1000)});
  }
    // const getRandom (min, max) = Math.round(Math.random() * (max - min) + min);
    // const countMessage = getRandom(1, 1000);
    // const countReTweet = getRandom(1, 1000);
    // const countLike = getRandom(100, 1000);
  handlerAvatar() {
    const avasURL = [
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/skywalker-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/sheevPalpatine-ava.jpg",
      "https://github.com/vitbon/hw20_react_redux/raw/master/public/img/leiaOrgana-ava.jpg",

    ]

  }

  render() {
    const path = 'https://github.com/vitbon/hw20_react_redux/raw/master/public/img/';
    return (
      <div className={"background"}>
        <div className="create_card">
          <div className="create_card_header">
            <span className="create_card_header_avatar" onClick={this.handlerAvatar}>
              <img src=''/>
            </span>
            <span className="create_card_header_textBox">
              <div className="create_card_header_textBox_name">
                <input className="create_hero_name" placeholder="Full Name..."></input>
                <img src={`${path}` + "star-active.png"} className="star-active" alt="Active Button"/>
                <span>&nbsp;@ </span>
                <input className="create_hero_nick" placeholder="Nickname..."></input> • {this.state.currentDay}
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
              className="icon2text">{this.state.countMessage}</span></a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-retweet.png"} alt="Retweet Icon"/><span
              className="icon2text">{this.state.countReTweet}</span></a>
          </span>
            <span className="create_leftTab">
            <a src="#"><img src={`${path}` + "tw-like.png"} alt="Like Icon"/><span
              className="icon2text">{this.state.countLike}</span></a>
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



/*
import React, { Component } from "react";
import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import { connect } from 'react-redux';
import addText from "../../redux/add-text-action";
import exactWordsCollections from "../../redux/text-parser-action";
import WordsList from "./WordsList";


class NewPost extends Component{

    render() {
        return(
            <div>
                <TopPanel />
                <div className="admin-page">
                    <LeftPanel />
                    <div className="content">
                        <textarea name="addText" id="" cols="30" rows="10" onChange={(e) => this.props.addText(e.target.value)}>

                        </textarea>
                        <button onClick={this.props.exactWordsCollections}>Click</button>
                        <WordsList  wordList = { this.props.words }/>
                    </div>
                </div>
            </div>
        )
    }
}

const getStateToProps = (state) => {
    return {
        text: state.addTextReducer,
        words: state.textParserReducer
    }
}

const getDispatchToProps = (dispatch) => {
    return {
        addText: e => dispatch(addText(e)),
        exactWordsCollections: () => dispatch(exactWordsCollections())
    }
}

export default connect(getStateToProps, getDispatchToProps)(NewPost);
 */