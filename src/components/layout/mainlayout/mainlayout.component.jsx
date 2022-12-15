import "./mainlayout.css";
import { SideNav } from "../sidenav/sidenav.component";
import { TopNav } from "./components/layout/topnav/topnav.component";
import { Container } from "react-bootstrap";


export function MainLayout({ children }) {
  return (
    <div className="layout">
      <TopNav />
       <div className="base">
        <SideNav />
        <Container>
        <div className="my-4">{children}</div>
        </Container>
      </div>
      </div>
      );
}
