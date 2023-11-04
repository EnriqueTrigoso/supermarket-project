import Head from "next/head";
import Categories from "./Categories";
import { Whatsap, Footer } from "./index";
import { TopNavigation, BottomNavigation } from "./Navigation";
import TopBar from "./TopBar";

export default function PageLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Somos una empresa importadora de equipamiento vehicular, Parrillas, Antivuelcos, Estribos y muchos más a un excelente precio y en ofertas." />
      </Head>
      <header>
        <TopBar />
        <TopNavigation />
        <div className="container">
          <div className="flex align-items gap">
            <Categories />
            <BottomNavigation />
          </div>
          <Whatsap />
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
