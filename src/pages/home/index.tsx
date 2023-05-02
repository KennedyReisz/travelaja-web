// Import's
import Header from "../../components/header";
import s from "./styles.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main className={s.homePage}>
        <h1>Hello World</h1>
      </main>
    </>
  );
};

export default Home;
