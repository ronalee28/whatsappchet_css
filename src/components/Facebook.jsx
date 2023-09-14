import React from 'react'
import "./face.css"


function MyFacebook() {
  return (
    <div>
      <div className="chat-header">
        <i className="whatsapp-icon fab fa-whatsapp"></i>
        קורס פולסטאק ב"ש 2.2.23 </div>
      <div className="chat-body">
        <div className="message">

          <div className='chet'>
        <p className="message-text1">מאיר חדד</p>
          <p className="message-chet">נפל החיבור לזום</p><br/>
          <p className="message-date">May 1, 2023  18:26  <span id="v"> ✓✓</span></p>
          </div>
<br/>
          <div className='chet'>
          <p className="message-text2">איתן מרצה</p>
          <p className="message-chet">נפל החשמל.. אנא המתן </p><br/>
          <p className="message-date">May 1, 2023   18:26  <span id="v"> ✓✓</span></p>
          </div>
          <br/>
          <div className='chet'>
          <p className="message-text3">נועה אסרף</p>
          <p className="message-chet">? אתם בפינת עישון</p><br/>
          <p className="message-date">May 1, 2023   18:40  <span id="v"> ✓✓</span></p>
          </div>
          <br/>
          <div className='chet'>
          <p className="message-text4">אופק פאטריק</p>
          <p className="message-chet">כן</p><br/>
          <p className="message-date">May 1, 2023   18:41  <span id="v"> ✓✓</span></p>
          </div>
          <br/>
        </div>
      </div>
      <input className="new-message-input" type="text" placeholder="... כתוב הודעה " />
    </div>
  );
}

export default MyFacebook;

