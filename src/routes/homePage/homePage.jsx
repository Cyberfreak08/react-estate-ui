import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus
            ullamcorper phasellus tellus fusce rutrum ullamcorper. Dolor
            faucibus sollicitudin consequat tempor leo scelerisque cubilia.
            Neque congue curabitur tristique magnis; dis mi himenaeos porttitor.
            Fames at integer etiam porttitor molestie vulputate. Suspendisse sem
            taciti risus mollis tellus gravida imperdiet per venenatis.
            Curabitur fringilla consequat penatibus praesent hac.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>161200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  );
};

export default HomePage;
