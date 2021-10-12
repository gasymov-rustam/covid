import cn from "./Header.module.css";

export default function Header({ title }) {
  return <caption className={cn.title}>{title}</caption>;
}
