import "../styles/maincontent.css";
import ContentCard from "./ContentCard";

const MainContent = () => {
  return (
    <main id="content-container">
      <header id="sort-header">
        {/* if logged in */}
        <a className="hot-sort">Hot</a>
        <div className="location-sort">Everywhere</div>
        <a className="new-sort">New</a>
        <a className="top-sort">Top</a>
        <button className="misc-sort">...</button>
        <div className="view-sort">View</div>
      </header>
      <section className="content">
        <ContentCard />
        <ContentCard />
      </section>
    </main>
  );
};

export default MainContent;
