import { useEffect, useState } from 'react';
import { FaCheck, FaCross, FaPaperPlane } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import { useSendMessageMutation } from '../redux/api';

export function Input(options: {
  title: string;
  placeholder: string;
  name: string;
  line?: number;
  required?: boolean;
  error?: string;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { title, placeholder, name, line, required, error, isLoading, isError, isSuccess, value, setValue } = options;
  return (
    <div className="flex flex-col w-full gap-1 sm:gap-2">
      <p className="text-black/60 text-sm">
        {title} <span className="text-error">{error ? `[${error}]` : ''}</span>
      </p>
      {line && (
        <div className="relative">
          <textarea
            name={name}
            id=""
            placeholder={placeholder}
            rows={line}
            className="flex w-full p-4 bg-zinc-100 text-normal xl:text-lg focus:outline-none resize-none pb-14"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required={required}
          />
          <button type="submit" className="absolute bottom-0 right-0 bg-zinc-100 p-3 mr-4 font-semibold rounded-tl-lg">
            {isLoading ? (
              <TailSpin ariaLabel="tail-spin-loading" height={24} radius={1} />
            ) : isSuccess ? (
              <p className="flex flex-row gap-3 text-success">
                Envoyé <FaCheck size={20} />
              </p>
            ) : isError ? (
              <p className="flex flex-row gap-3 text-error">
                Erreur ! <FaCross size={20} />
              </p>
            ) : (
              <p className="flex flex-row gap-3">
                Envoyer <FaPaperPlane size={20} />
              </p>
            )}
          </button>
        </div>
      )}
      {!line && (
        <input
          type="text"
          name={name}
          id=""
          placeholder={placeholder}
          className="flex w-full p-4 bg-zinc-100 text-normal xl:text-lg focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
        />
      )}
    </div>
  );
}

export default function ContactForm() {
  const [sendMessage, res] = useSendMessageMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const mail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  function handleClick(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    let error = false;
    if (name.length <= 1) {
      setNameError('Nom et Prénom trop courts');
      error = true;
    }
    if (!mail.test(email)) {
      setEmailError('Veuillez vérifier votre mail');
      error = true;
    }
    if (error) return;
    sendMessage({
      name,
      email,
      phone: phone || undefined,
      message,
    });
  }

  useEffect(() => {
    setNameError('');
  }, [name]);

  useEffect(() => {
    setEmailError('');
  }, [email]);

  useEffect(() => {
    if (res.isSuccess) {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  }, [res]);

  return (
    <form className="flex flex-col w-full gap-6" onSubmit={handleClick}>
      <Input
        title="Nom et Prénom"
        placeholder="Prénom Nom"
        name="name"
        error={nameError}
        required
        value={name}
        setValue={setName}
      />
      <Input
        title="Email"
        placeholder="adresse@mail.fr"
        name="mail"
        error={emailError}
        required
        value={email}
        setValue={setEmail}
      />
      <Input
        title="Numéro de téléphone (Facultatif)"
        placeholder="+33(0) 6 66 77 88 99"
        name="phone"
        value={phone}
        setValue={setPhone}
      />
      <Input
        title="Message"
        placeholder="Je vous écris pour ..."
        name="message"
        required
        line={6}
        isLoading={res.isLoading}
        isError={res.isError}
        isSuccess={res.isSuccess}
        value={message}
        setValue={setMessage}
      />
    </form>
  );
}
