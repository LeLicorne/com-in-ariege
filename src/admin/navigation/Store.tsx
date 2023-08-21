import { BiStore } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function Store() {
  const nav = useNavigate();
  return (
    <button
      onClick={() => nav('/')}
      className="w-[200px] h-9 inline-flex items-center text-sm font-medium transition-colors border rounded-md bg-white hover:bg-secondary px-3 gap-4"
      type="button"
    >
      <BiStore />
      Com In Ariège
    </button>
  );
}
