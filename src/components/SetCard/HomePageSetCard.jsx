export default function HomePageSetCard({ setNum, setName, setImg }) {
  return (
    <div className="flex gap-[0.4rem] bg-[#780000] text-white rounded-sm overflow-hidden shadow-sm">
      <div className="bg-white w-[4rem] h-[4rem] flex justify-center">
        <img className="max-h-full max-w-full object-contain" src={setImg} />
      </div>
      <div className="w-[calc(100%-5rem)] pr-[0.4rem]">
        <span className="text-sm">{setNum}</span>
        <p className="text-base font-bold truncate">{setName}</p>
      </div>
    </div>
  );
}
