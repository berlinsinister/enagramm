import { useState } from "react";
import {
  CheckIcon,
  CopyIcon,
  DeleteIcon,
  ArrowIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  UnorderedIcon,
  OrderedIcon,
  H1Icon,
  H2Icon,
  LinkIcon,
  ClearIcon,
} from "./Icons";
import { Logo } from "./Icons";
import en from "../assets/images/en.png";
import ka from "../assets/images/ka.png";
import * as S from "./Main.styles";

const Main = () => {
  const [languages, setLanguages] = useState([
    {
      flag: en,
      name: "English",
    },
    {
      flag: ka,
      name: "Georgian",
    },
  ]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentTooltip, setCurrentTooltip] = useState("");

  const handleClick = () => {
    setLanguages((prev) => [...prev].reverse());
    setShowDropdown(false);
  };

  const tools = [
    {
      id: 1,
      options: [
        { name: "bold", icon: BoldIcon, tooltip: "Bold: Ctrl+B" },
        { name: "italic", icon: ItalicIcon, tooltip: "Italic: Ctrl+I" },
        {
          name: "underline",
          icon: UnderlineIcon,
          tooltip: "Underline: Ctrl+U",
        },
      ],
    },
    {
      id: 2,
      options: [
        { name: "unordered", icon: UnorderedIcon, tooltip: "" },
        { name: "ordered", icon: OrderedIcon, tooltip: "" },
      ],
    },
    {
      id: 3,
      options: [
        { name: "h1", icon: H1Icon, tooltip: "" },
        { name: "h2", icon: H2Icon, tooltip: "" },
      ],
    },
    { id: 4, options: [{ name: "link", icon: LinkIcon, tooltip: "" }] },
    { id: 5, options: [{ name: "clear", icon: ClearIcon, tooltip: "" }] },
  ];
  return (
    <S.Main>
      <S.HandlersWrapper>
        <S.CheckButton>
          <CheckIcon />
          Check
        </S.CheckButton>
        <S.HandlerButton isActive>
          <CopyIcon />
          Copy
        </S.HandlerButton>
        <S.HandlerButton>
          <DeleteIcon />
          Delete
        </S.HandlerButton>

        <S.LanguageDropdownWrapper
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <S.LanguageDropdown>
            <S.LanguageImage src={languages[0].flag} alt={languages[0].name} />
            {languages[0].name}
            <S.IconWrapper className="icon-wrapper">
              <ArrowIcon />
            </S.IconWrapper>
          </S.LanguageDropdown>

          {showDropdown && (
            <S.LanguageItem onClick={handleClick}>
              <S.LanguageImage
                src={languages[1].flag}
                alt={languages[1].name}
              />
              {languages[1].name}
            </S.LanguageItem>
          )}
        </S.LanguageDropdownWrapper>
      </S.HandlersWrapper>

      <S.TextArea placeholder="Type or paste (⌘+V) something here." />

      <S.ToolbarWrapper>
        <S.Toolbar>
          {tools.map((tool) => (
            <S.ToolSection key={tool.id}>
              {Object.values(tool)[1].map((item) => (
                <S.ToolButtonWrapper
                  key={item.name}
                  onMouseEnter={() => setCurrentTooltip(item.tooltip)}
                  onMouseLeave={() => setCurrentTooltip("")}
                >
                  <S.ToolButton>{item.icon()}</S.ToolButton>
                  {item.tooltip && currentTooltip === item.tooltip && (
                    <S.Tooltip>{item.tooltip}</S.Tooltip>
                  )}
                </S.ToolButtonWrapper>
              ))}
            </S.ToolSection>
          ))}
          <S.TextStats>628 characters, 103 words</S.TextStats>
        </S.Toolbar>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
      </S.ToolbarWrapper>
    </S.Main>
  );
};

export default Main;
