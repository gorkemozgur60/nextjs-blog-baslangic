import styles from "./styles.module.css";
import "../styles/global.css";
import { Inter } from '@next/font/google'
import CustomHead from "../components/Head/CustomHead.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

const interFont = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFont.className}>
      <CustomHead />
      <body className={styles.container}>
        <Header />
         <main>{children}</main>
         <Footer />
        </body>
    </html>
  );
}
