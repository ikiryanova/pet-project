import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = () => {
  return (
    <div className={cls.Navbar}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDATY}>Главная</AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDATY}>О сайте</AppLink>
      </div>
    </div>
  );
};