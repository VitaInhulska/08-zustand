import css from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Vita Inhulska</p>
          <p>
            Contact us:
            <Link href="mailto:vitainhulska@notehub.app">
              vitainhulska@notehub.app
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
