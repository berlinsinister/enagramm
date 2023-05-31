import { ChromeIcon, ArrowIcon } from "./Icons";
import profile from "../assets/images/profile.jpg";
import * as S from "./Navbar.styles";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Content>
        <S.Button isWhite>
          <ChromeIcon />
          Add to Chrome
        </S.Button>
        <S.Button>Upgrade to Pro</S.Button>

        <S.ProfileWrapper>
          <S.ProfileImage src={profile} alt="profile" />
          <ArrowIcon />
        </S.ProfileWrapper>
      </S.Content>
    </S.Navbar>
  );
};

export default Navbar;
