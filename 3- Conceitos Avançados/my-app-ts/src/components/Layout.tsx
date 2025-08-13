import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <div style={{backgroundColor: "#87CEEB", width: "100%", height: "100vh"}}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
