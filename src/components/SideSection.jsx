import "../styles/sidesection.css";

const SideSection = () => {
  return (
    <section id="side-section">
      {/* <div className="top-communities"></div> */}
      <div className="reddit-premium">
        <div className="premium-details">
          <div className="prem-icon"></div>
          <div className="prem-text">
            <span>Reddit Premium</span>
            <span>The best Reddit experience</span>
          </div>
        </div>
        <button className="prem-btn">Try Now</button>
      </div>
      <div className="create-post-community">
        <div className="upper-info">
          <div className="info-banner"></div>
          <div className="icon-container">
            <div className="info-icon"></div>
            <h2>Home</h2>
          </div>
          <span className="info-text">
            Your personal Reddit frontpage. Come here to check in with your
            favorite communities.
          </span>
        </div>
        <hr></hr>
        <div className="community-btns">
          <button className="create-post">Create Post</button>
          <button className="create-community">Create Community</button>
        </div>
      </div>
      <div className="helpful-information">
        <div className="helpful-top">
          <a href="/">User Agreement</a>
          <a href="/">Content Policy</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Moderator Code of Conduct</a>
        </div>
        <hr></hr>
        <div className="helpful-center">
          <a href="/">English</a>
          <a href="/">Deutsch</a>
          <a href="/">Français</a>
          <a href="/">Español</a>
          <a href="/">Italiano</a>
          <a href="/">Português</a>
        </div>
        <hr></hr>
        <span>No rights reserved. Built for educational purposes.</span>
      </div>
    </section>
  );
};

export default SideSection;
