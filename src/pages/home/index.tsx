// Import's
import Header from "../../components/header";
import s from "./styles.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main className={s.homePage}>
        <h1 className={s.homeMainText}>Explore the world with a smile</h1>
        <p className={s.mainTextDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
      </main>
    </>
  );
};

export default Home;
