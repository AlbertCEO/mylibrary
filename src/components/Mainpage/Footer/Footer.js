import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
     
      <div className="main-footer">
        <div className="footer-logo">
        <div className="logo">
        <img src="./images/logo/Group2.png" alt=""></img>
        <img src="./images/logo/Group2.png" alt=""></img>
        </div>
        <div className="third-party-logo">
        <img src="./images/logo/face.png" alt="" style={{height:"16px"}}></img>
        <img src="./images/logo/ig.png" alt="" style={{height:"16px"}}></img>
        <img src="./images/logo/tweet.png" alt="" style={{height:"16px"}}></img>
        </div>
        <h5 style={{color:"white"}}>@ 2024 MyLibrary</h5>
        </div>
        <div className="footer-menu">
          <div className="lower-menu">
            <ul>
              <li>Community</li>
              <li>Books</li>
              <li>Libraries</li>
              <li>ChatRooms</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="lower-menu">
          <ul>
              <li>Places</li>
              <li>Individuals</li>
              <li>Discount</li>
              <li>Near Me</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="lower-menu">
          <ul>
              <li>About us</li>
              <li>Labs</li>
              <li>Gadgets</li>
              <li>Toys</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;