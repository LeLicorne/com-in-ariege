const FiChevronRight = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

const FiChevronLeft = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
};

export default function Pagination(options: { page: string; handleChangePage: (next: boolean) => void }) {
  const { page, handleChangePage } = options;
  const pageNum = parseInt(page, 10);
  return (
    <div className="flex justify-center gap-3">
      <button
        type="button"
        onClick={() => handleChangePage(false)}
        className="flex items-center justify-center w-10 aspect-square text-primary border-[1px] border-primary rounded-full"
        style={{ display: page <= '1' ? 'none' : '' }}
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => handleChangePage(false)}
        className="flex items-center justify-center w-10 aspect-square bg-secondary rounded-full"
        style={{ display: page <= '1' ? 'none' : 'block' }}
      >
        {pageNum - 1}
      </button>
      <button
        type="button"
        className="flex items-center justify-center w-10 aspect-square text-white font-semibold bg-primary rounded-full"
      >
        {pageNum}
      </button>
      <button
        type="button"
        onClick={() => handleChangePage(true)}
        className="flex items-center justify-center w-10 aspect-square bg-secondary rounded-full"
        style={{ display: page >= '3' ? 'none' : 'block' }}
      >
        {pageNum + 1}
      </button>
      <button
        type="button"
        onClick={() => handleChangePage(true)}
        className="flex items-center justify-center w-10 aspect-square text-primary border-[1px] border-primary rounded-full"
        style={{ display: page >= '3' ? 'none' : '' }}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
