import chevronRight from "../../assets/icons/ChevronRight.png";
import chevronLeft from "../../assets/icons/ChevronLeft.png";

export default function Pagination({
  page,
  nbPages,
  previousPage,
  nextPage,
  targetedPage,
  isLG,
}) {
  return (
    <div
      className={`flex gap-[2rem] justify-around items-center font-robotoCond] w-[15rem] ${
        isLG && "lg:hidden"
      }`}
    >
      <button
        className="w-[2rem] h-[2rem] rounded-[50%] border-[0.2rem] border-[#F1DCB1] bg-[#FDF0D5] flex items-center justify-center"
        disabled={page == 1}
        onClick={previousPage}
      >
        <img className="w-[1.2rem]" src={chevronLeft} />
      </button>
      <div className="flex gap-[1rem] w-[40%] justify-center items-center">
        <button
          onClick={() => targetedPage(page - 1)}
          className="cursor-pointer"
        >
          {page > 1 && `${page - 1}`}
        </button>
        <div className="w-[1.8rem] h-[1.8rem] rounded-[50%] bg-[#780000] flex items-center justify-center">
          <span className="font-bold p-[1rem] text-white rounded-[50%] p-[0.2rem]">
            {page}
          </span>
        </div>
        <button
          onClick={() => targetedPage(page + 1)}
          className="cursor-pointer"
        >
          {page < nbPages && `${page + 1}`}
        </button>
        <span>{page + 1 < nbPages - 1 && "..."}</span>
        <button
          onClick={() => targetedPage(nbPages)}
          className="cursor-pointer"
        >
          {page < nbPages - 1 && `${nbPages}`}
        </button>
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
