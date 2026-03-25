import notFound from "../../assets/img/notfound.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-[10rem] gap-[0.8rem] mb-[50vh]">
      <img className="w-[14rem]" src={notFound} />
      <div className="flex flex-col items-center w-[80%]">
        <span className="text-4xl font-bold">404</span>
        <span className="text-center">
          Oups ! Il manque une pièce. Cette page a peut-être été aspirée par
          l'aspirateur.
        </span>
      </div>
    </div>
  );
}
