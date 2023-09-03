import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useSubNewsletterMutation } from '../redux/api';

function NewsLetter() {
  const [subNewsletter, res] = useSubNewsletterMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const mail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  function subToNewsletter(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (name.length <= 1) {
      setError('Votre nom faire minimum 2 caractères');
      return;
    }
    if (!mail.test(email)) {
      setError('Vérifiez votre mail');
      return;
    }
    subNewsletter({ name, email });
  }

  useEffect(() => {
    if (res.isError) setError('Erreur inattendue, réessayer plus tard');
    if (res.isSuccess) setSuccess(true);
  }, [res]);

  return (
    <div className="relative flex flex-col w-full items-center">
      <div className="w-full h-[30vh] sm:h-[50vh] flex flex-col relative items-center justify-center text-white overflow-hidden">
        <img
          src="src/assets/sunsetmountain.jpg"
          alt=""
          className="absolute object-cover brightness-75 z-0 xl:pt-[25%]"
        />
        <div className="flex flex-col justify-center items-center z-10 text-[6vw] sm:text-[5vw] leading-none lg:text-6xl font-semibold">
          <h2>Inscrivez vous à notre</h2>
          <h2>newsletter</h2>
        </div>
        <div className="flex flex-col justify-center items-center z-10 text-[3vw] sm:text-[2vw] lg:text-xl text-slate-200/80">
          <p>recevez des offres promotionnelles personalisées</p>
          <p>et restez à l&lsquo;actualité</p>
        </div>
      </div>
      <div className="w-[80vw] sm:w-[70vw] xl:w-[70%] z-10">
        <form
          action=""
          className="flex flex-row items-center justify-center shadow-md bg-white p-1 sm:p-3 gap-4 mt-[-35px] sm:mt-[-40px] md:mt-[-30px]"
          onSubmit={subToNewsletter}
        >
          <input
            type="text"
            name="name"
            id=""
            placeholder="Entrer votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full flex pl-1 text-[2.5vw] sm:text-[2vw] lg:text-[1.7vw] xl:text-xl focus:outline-none"
          />
          <input
            type="text"
            name="email"
            id=""
            placeholder="Entrer votre mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full flex pl-1 text-[2.5vw] sm:text-[2vw] lg:text-[1.7vw] xl:text-xl focus:outline-none"
          />
          <button
            type="submit"
            className={`w-80 justify-center ${success ? 'button-success' : error ? 'button-error' : 'button-primary'}`}
          >
            {res.isLoading ? (
              <TailSpin ariaLabel="tail-spin-loading" height={28} radius={1} />
            ) : success ? (
              'Inscrit !'
            ) : error ? (
              'Erreur !'
            ) : (
              "S'inscrire"
            )}
          </button>
        </form>
        <p className="text-sm text-error pt-4">{error}</p>
      </div>
    </div>
  );
}

export default NewsLetter;
