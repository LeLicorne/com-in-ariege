import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { LuEdit, LuTrash } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useDeleteCategoryMutation } from '../../redux/api';
import DeleteModal from './modal';

export default function ActionsButtons(options: { type: 'categories' | 'products'; id: string }) {
  const { type, id } = options;
  const nav = useNavigate();
  const [deleteCategory, res] = useDeleteCategoryMutation();
  const toastId = 'action-buttons';
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((c) => !c);
  };

  useEffect(() => {
    if (res.isLoading) {
      toast.loading('Loading...', { id: toastId });
    }

    if (res.isSuccess) {
      toast.success(type === 'categories' ? 'Catégorie supprimée' : 'Produit supprimé', { id: toastId });
      nav(type);
    }
    if (res.isError) {
      toast.error('Erreur lors de la suppression', { id: toastId });
      nav(type);
    }
  }, [res, type, nav]);

  return (
    <>
      <DeleteModal open={open} toggle={toggleModal} fnc={() => deleteCategory({ categoryId: id })} />
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
          onClick={toggleModal}
          className="flex items-center justify-center w-8 h-8 aspect-square bg-[#EF4444] text-white rounded-full hover:opacity-80"
        >
          <LuTrash />
        </button>
      </div>
    </>
  );
}
