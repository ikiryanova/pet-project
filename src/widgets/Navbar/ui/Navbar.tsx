import { useTranslation } from "react-i18next";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.Navbar}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDATY}>
          {t("Главная")}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDATY}>
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
