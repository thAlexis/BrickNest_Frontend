import notFound from "../../assets/img/notfound.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-[10rem] gap-[0.8rem]">
      <img className="w-[14rem]" src={notFound} />
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">404</span>
        <span>La page n'a pas été trouvée</span>
      </div>
    </div>
  );
}
