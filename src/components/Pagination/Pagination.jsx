import chevronRight from "../../assets/icons/ChevronRight.png";
import chevronLeft from "../../assets/icons/ChevronLeft.png";

export default function Pagination({ page, nbPages, previousPage, nextPage }) {
  return (
    <div className="flex gap-[2rem] justify-around items-center font-robotoCond] w-[70%]">
      <button
        className="w-[2rem] h-[2rem] rounded-[50%] border-[0.2rem] border-[#F1DCB1] bg-[#FDF0D5] flex items-center justify-center"
        disabled={page == 1}
        onClick={previousPage}
      >
        <img className="w-[1.2rem]" src={chevronLeft} />
      </button>
      <div className="flex gap-[1rem] w-[40%] justify-center items-center">
        <span>{page > 1 && `${page - 1}`}</span>
        <div className="w-[1.8rem] h-[1.8rem] rounded-[50%] bg-[#780000] flex items-center justify-center">
          <span className="font-bold p-[1rem] text-white rounded-[50%] p-[0.2rem]">
            {page}
          </span>
        </div>
        <span>{page < nbPages && `${page + 1}`}</span>
        <span>{page + 1 < nbPages - 1 && "..."}</span>
        <span>{page < nbPages - 1 && `${nbPages}`}</span>
      </div>
      <button
        className="w-[2rem] h-[2rem] rounded-[50%] border-[0.2rem] border-[#F1DCB1] bg-[#FDF0D5] flex items-center justify-center"
        disabled={page == nbPages}
        onClick={nextPage}
      >
        <img className="w-[1.2rem]" src={chevronRight} />
      </button>
    </div>
  );
}
