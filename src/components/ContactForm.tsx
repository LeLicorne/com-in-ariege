import { FaPaperPlane } from 'react-icons/fa';

export function Input(options: {
  title: string;
  placeholder: string;
  name: string;
  line?: number;
}) {
  const { title, placeholder, name, line } = options;
  return (
    <div className="flex flex-col w-full gap-1 sm:gap-2">
      <p className="text-black/60 text-sm">{title}</p>
      {line && (
        <div className="relative">
          <textarea
            name={name}
            id=""
            placeholder={placeholder}
            rows={line}
            className="flex w-full p-4 bg-zinc-100 text-normal xl:text-lg focus:outline-none resize-none pb-14"
          />
          <button
            type="submit"
            className="absolute bottom-0 right-0 flex flex-row bg-zinc-100 gap-3 p-3 mr-4 font-semibold rounded-tl-lg"
          >
            Envoyer <FaPaperPlane size={20} />
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
        />
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <div className="flex flex-col w-full gap-6">
      <Input title="Nom et Prénom" placeholder="Prénom Nom" name="name" />
      <Input title="Email" placeholder="adresse@mail.fr" name="mail" />
      <Input
        title="Numéro de téléphone"
        placeholder="+33(0) 6 66 77 88 99"
        name="phone"
      />
      <Input
        title="Message"
        placeholder="Je vous écris pour ..."
        name="message"
        line={6}
      />
    </div>
  );
}
