import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }
  
  WhatsappState = { isOpen: false };

  handleWhatsapp = () => {
    this.setState({ isOpen: !this.WhatsappState.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div className="optin">
        <p>Join the conversation</p>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              width="50" 
              class="icon" 
              alt="whatsapp-logo"
              onClick={this.handleWhatsapp}
            />

          {this.WhatsappState.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleWhatsapp}
          >
            <img 
              src="https://media4.giphy.com/media/y8mThMjGBrQpG/giphy.gif?cid=790b761162e56e8435f4c9e6fd11e9332fa268e2898d243a&rid=giphy.gif&ct=g" 
              alt="carleton"  
              width="250" 
              onClick={this.handleWhatsapp} 
            />

          </dialog>
        )}

          <a href="https://giphy.com/gifs/theoffice-MNmyTin5qt5LSXirxd">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" width="50" alt="slack-logo"></img>
          </a>
      </div>
    );
  }
}

export default Optin;
