import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDATY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
  
  return <Link to={to} className={classNames(cls.AppLink, {}, [cls[theme], className])} {...otherProps}>{children}</Link>
}
