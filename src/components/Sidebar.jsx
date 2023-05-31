import { useState } from "react";
import {
  SpellCheckIcon,
  TextToSpeechIcon,
  SpeechToTextIcon,
  SettingsIcon,
  FacebookIcon,
  SupportIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import * as S from "./Sidebar.styles";

const Sidebar = () => {
  const [active, setActive] = useState(1);
  const navMenu = [
    { id: 0 },
    { id: 1, options: { name: "Spellchecker", icon: SpellCheckIcon } },
    { id: 2, options: { name: "Text to speech", icon: TextToSpeechIcon } },
    { id: 3, options: { name: "Speech to text", icon: SpeechToTextIcon } },
    { id: 4 },
  ];

  const settings = [
    { id: 1, options: { name: "Settings", icon: SettingsIcon } },
    { id: 2, options: { name: "Facebook", icon: FacebookIcon } },
    { id: 3, options: { name: "Contact support", icon: SupportIcon } },
  ];
  return (
    <S.Sidebar>
      <S.NavMenu>
        <S.NavMenuBackground />
        <S.MenuItemsWrapper>
          {navMenu.map((item, i) => (
            <S.MenuItem
              key={item.id}
              isPrevActive={i === active - 1}
              isActive={i === active}
              isNextActive={i === active + 1}
              onClick={() => setActive(i)}
            >
              {i === active
                ? item?.options?.icon("#2d62ed")
                : item?.options?.icon()}
              {item?.options?.name}
            </S.MenuItem>
          ))}
        </S.MenuItemsWrapper>
      </S.NavMenu>

      <S.Footer>
        <S.SettingsWrapper>
          {settings.map((item) => (
            <S.SettingsItem key={item.id}>
              {item.options.icon()}
              {item.options.name}
            </S.SettingsItem>
          ))}
        </S.SettingsWrapper>
        <S.Mode>
          <SunIcon />
          <MoonIcon />
        </S.Mode>
      </S.Footer>
    </S.Sidebar>
  );
};

export default Sidebar;
