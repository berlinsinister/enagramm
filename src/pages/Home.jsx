import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import * as S from "./Home.styles";

const Home = () => {
  return (
    <>
      <Navbar />
      <S.Wrapper>
        <Sidebar />
        <Main />
      </S.Wrapper>
    </>
  );
};

export default Home;
