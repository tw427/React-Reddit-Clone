import "../styles/maincontent.css";

const MainContent = () => {
  return (
    <main id="content-container">
      <header>
        {/* if logged in */}
        <div className="sortContent"></div>
      </header>
      <section className="content"></section>
    </main>
  );
};

export default MainContent;
