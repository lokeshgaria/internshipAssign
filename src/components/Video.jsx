import React from "react";
import "../css/Video.css";
import CloseIcon from "@material-ui/icons/Close";
import { VolumeUpRounded } from "@material-ui/icons";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import SmsIcon from "@material-ui/icons/Sms";
import CropFreeIcon from "@material-ui/icons/CropFree";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SendIcon from "@material-ui/icons/Send";

function Video() {
  return (
    <div className="video container">
      <div className="video_content">
        <video autoPlay={true} muted={true} loop>
          <source
            src="https://vod-progressive.akamaized.net/exp=1627475236~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3139%2F14%2F365696477%2F1508242806.mp4~hmac=46abce736fa73caeb5694ff3a7af8484e8c57cbc18ad04ea36716d5118c3c451/vimeo-prod-skyfire-std-us/01/3139/14/365696477/1508242806.mp4?filename=video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="controls">
        <div className="leftside">
          <div className="controls__mutedIcon">
            <VolumeUpRounded></VolumeUpRounded>
          </div>
          <div className="control__groupIcons">
            <div className="smil_emoji">
              <EmojiEmotionsIcon></EmojiEmotionsIcon>
            </div>
            <div className="sms_emoji">
              <SmsIcon></SmsIcon>
            </div>

            <div className="largeScreen_icon">
              <CropFreeIcon></CropFreeIcon>
            </div>

            <div className="offIcon">
              <PowerSettingsNewIcon></PowerSettingsNewIcon>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="chat">
            <div className="chat_window">
              <div className="closeIcon">
                <CloseIcon></CloseIcon>
              </div>
              <div className="allchats"></div>
              <div className="chat__input">
                <input type="text" placeholder="Send a chat message" />
                <div className="icons">
                  <div className="emoji">
                    <EmojiEmotionsIcon></EmojiEmotionsIcon>
                  </div>
                  <div className="emoji">
                    <SendIcon></SendIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
