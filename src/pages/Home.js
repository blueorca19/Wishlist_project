import Header from "./../components/header/Header";
import photo03 from "./../img/Photo03.png";
import "../App.css"


const Home = () => {
  return (
    <>
      <Header />
      <main class="section">
        <div class="container">
        <img
            src={photo03}
            alt=""
            className="project-instruction"
          /> 
        </div>
      </main>
    </>
  );
};

export default Home;