import unauthorized from "../../assets/img/unauthorized.png";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center mt-[10rem] gap-[0.8rem] mb-[50vh]">
      <img src={unauthorized} className="w-[14rem]" />
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">403</span>
        <span>Hep hep hep, vous n'avez pas le droit d'être là !</span>
      </div>
    </div>
  );
}
