import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="flex flex-col items-center px-[7%]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-full justify-between">
        <div className="footerCategory">
          <h3 className=" font-bold text-2xl leading-6">COM IN ARIÈGE</h3>
          <div className=" text-right md:text-left opacity-60">
            <p>Élancez-vous vers l&lsquo;hiver !</p>
            <p>Équipements de pointe,</p>
            <p>sensations infinies.</p>
          </div>
        </div>
        <div className="footerCategory">
          <h3 className=" footerTitle">Nos services</h3>
          <div className=" footerArguments">
            <Link to="/catalogue">Aménagement</Link>
            <Link to="/communication">Communication</Link>
            <Link to="/catalogue">Signalétique</Link>
          </div>
        </div>
        <div className="footerCategory">
          <h3 className=" footerTitle">Navigation</h3>
          <div className=" footerArguments">
            <Link to="/">Accueil</Link>
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/à-propos">À propos</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footerCategory">
          <h3 className="footerTitle">Contact</h3>
          <div className="footerArguments">
            <p>+33(0) 6 56 78 90 23</p>
            <a href="mailto:contact@cominarige.com">contact@cominarige.com</a>
            <p className=" flex flex-col leading-4">
              <span>8 AVENUE DE DALOU</span>
              <span>09120 VARILHES</span>
              <span>FRANCE</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-full flex items-center justify-center mt-6 pt-4">
        <p className="font-semibold opacity-60">
          © Copyright 2023 COM IN ARIEGE
        </p>
      </div>
    </div>
  );
}

export default Footer;
