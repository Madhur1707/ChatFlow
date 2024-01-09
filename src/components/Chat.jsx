import React from 'react'
import video from "../img/vc.png"
import addFriend from "../img/add friend.png"
import moreInfo from "../img/more info.png"

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Madhur</span>
        <div className="chatIcons">
          <img src={video} alt="" />
          <img src={addFriend} alt="" />
          <img src={moreInfo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat