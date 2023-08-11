import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="flex flex-col items-center px-[7%]">
      <div className="flex w-full justify-between">
        <div className=" footerCategory">
          <h2 className=" font-bold text-2xl">COM IN ARIÈGE</h2>
          <div>
            <h3>Èlancez-vous vers l&lsquo;hiver!</h3>
            <h3>Equipements de pointe, sensations infinies.</h3>
          </div>
        </div>
        <div className=" footerCategory">
          <h2 className=" footerTitle">Nos services</h2>
          <div className=" footerArguments">
            <Link to="/catalogue">Aménagement</Link>
            <Link to="/communication">Communication</Link>
            <Link to="/catalogue">Signalétique</Link>
          </div>
        </div>
        <div className=" footerCategory">
          <h2 className=" footerTitle">Navigation</h2>
          <div className=" footerArguments">
            <Link to="/">Accueil</Link>
            <Link to="/à-propos">À propos</Link>
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className=" footerCategory">
          <h2 className=" footerTitle">Contact</h2>
          <div className=" footerArguments">
            <h3>+33 6 56 78 90 23</h3>
            <a href="mailto:contact@cominarige.com">contact@cominarige.com</a>
            <h3 className=" flex flex-col">
              <span>10 rue de la Vignette</span>
              <span>Ribérac</span>
              <span>France</span>
            </h3>
          </div>
        </div>
      </div>
      <div className=" border-t-2 w-full flex items-center justify-center mt-6 pt-4">
        <h3>© Copyright 2023 COM IN ARIEGE</h3>
      </div>
    </div>
  );
}

export default Footer;
