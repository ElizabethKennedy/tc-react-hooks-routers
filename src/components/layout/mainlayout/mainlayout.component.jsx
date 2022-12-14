import "./mainlayout.css";
import { SideNav } from "../sidenav/sidenav.component";
import { TopNav } from "../topnav/topnav.component";


export function MainLayout({ children }) {
  return (
    <div className="layout">
      <TopNav />
       <div className="base">
        <SideNav />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
