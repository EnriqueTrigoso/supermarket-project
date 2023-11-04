import style from "../styles/TopBar.module.css";
import { data } from "../data";
import Link from "next/link";
export default function Topbar() {
  return (
    <div className={style.topbar}>
      <div className="container flex space-between">
        <ul>
          <li>
            <a>{data.navegation.topnav.name}</a>
          </li>
        </ul>
        <ul className="flex gap topnav">
          {data.navegation.topnav.content.map((item, index) => (
            <li key={index} className="flex align-items">
              <div className={item.icon} />
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
