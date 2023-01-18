import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p>Join the conversation</p>
          <a href="https://giphy.com/gifs/carlton-y8mThMjGBrQpG">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="50" class="icon" alt="whatsapp-logo"></img>
          </a>

          <a href="https://giphy.com/gifs/theoffice-MNmyTin5qt5LSXirxd">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" width="50" alt="slack-logo"></img>
          </a>
      </div>
    );
  }
}

export default Optin;
