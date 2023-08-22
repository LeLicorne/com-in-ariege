import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { LuEdit, LuTrash } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useDeleteCategoryMutation } from '../../redux/api';

export default function ActionsButtons(options: { type: 'categories' | 'products'; id: string }) {
  const { type, id } = options;
  const nav = useNavigate();
  const [deleteCategory, res] = useDeleteCategoryMutation();
  const toastId = 'action-buttons';

  useEffect(() => {
    if (res.isLoading) {
      toast.loading('Loading...', { id: toastId });
    }

    if (res.isSuccess) {
      toast.success('Catégorie supprimée', { id: toastId });
      nav('categories');
    }
    if (res.isError) {
      toast.error('Catégorie non supprimée', { id: toastId });
      nav('categories');
    }
  }, [res, nav]);

  return (
    <div className="flex flex-row gap-2">
      <button
        type="button"
        onClick={() => nav(`${type}/${id}`)}
        className="flex items-center justify-center w-8 h-8 aspect-square text-grey border-[1px] border-secondary rounded-full hover:bg-secondary transition-colors"
      >
        <LuEdit />
      </button>
      <button
        type="button"
        onClick={() => deleteCategory({ categoryId: id })}
        className="flex items-center justify-center w-8 h-8 aspect-square bg-[#EF4444] text-white rounded-full hover:opacity-80"
      >
        <LuTrash />
      </button>
    </div>
  );
}
