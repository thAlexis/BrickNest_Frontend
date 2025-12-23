import { NavLink } from "react-router-dom";
import phoneHome from "../../assets/img/phone-home.png";
import phoneCollec from "../../assets/img/phone-collec.png";
import phoneWish from "../../assets/img/phone-whish.png";
import guyBuilding from "../../assets/img/guy-building.png";

export default function HomePage() {
  return (
    <div>
      <div className="bg-[#780000] flex w-[100%] justify-center lg:pt-[8rem]">
        <div className="text-white pt-[7rem] md:pt-[8rem] lg:pt-[0rem] lg:self-center flex flex-col items-center pr-[1rem] pl-[1rem] gap-[2rem] pb-[2rem] lg:w-[40%]">
          <h1 className="font-bold text-2xl text-center">
            BrickNest, la solution pour suivre votre collection LEGO® !
          </h1>
          <p className="text-center">
            Naviguez parmi des milliers de références et organisez votre univers
            LEGO®. Avec Bricknest, séparez clairement ce que vous possédez de ce
            que vous convoitez.
          </p>
          <NavLink
            className="font-bold bg-[#003049] hover:bg-[#669BBC] p-[1rem] transition-all rounded-md shadow-sm cursor-pointer"
            to="/register"
          >
            S'inscrire
          </NavLink>
        </div>
        <div className="hidden lg:block w-[30%] self-end">
          <img className="w-full" src={guyBuilding} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-[2rem] mb-[2rem]">
        <h2 className="font-bold text-xl mb-[0.5rem]">
          Qu'est ce que BrickNest ?
        </h2>
        <div className="bg-[#780000] h-[0.2rem] w-[5rem] rounded-lg"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:justify-center mt-[1rem] lg:mt-[2rem] w-[80%] lg:w-[70%]">
          <div className="flex justify-center mb-[1rem]">
            <img className="h-[25rem]" src={phoneHome} />
          </div>
          <div className="flex flex-col items-center mb-[1.5rem]">
            <h3 className="font-bold text-lg mb-[0.6rem]">
              Retrouvez n'importe quel set LEGO®
            </h3>
            <p className="text-center">
              Accédez instantanément à une bibliothèque exhaustive couvrant des
              décennies d'histoire LEGO®. Des classiques vintage aux dernières
              sorties, notre base de données complète vous permet de naviguer et
              de trouver la référence exacte que vous cherchez en quelques
              secondes.
            </p>
          </div>
          <div className="flex justify-center mb-[1rem] lg:col-start-2">
            <img className="h-[25rem]" src={phoneCollec} />
          </div>
          <div className="flex flex-col items-center mb-[1.5rem] lg:col-start-1 lg:row-start-2">
            <h3 className="font-bold text-lg mb-[0.6rem]">
              Organisez votre inventaire personnel
            </h3>
            <p className="text-center">
              Mettez de l'ordre dans vos briques. Une fois un set trouvé dans la
              base, ajoutez-le d'un simple clic à votre collection numérique.
              C'est le moyen le plus simple de garder une vue d'ensemble claire
              et précise de tout ce que vous possédez déjà.
            </p>
          </div>
          <div className="flex justify-center mb-[1rem]">
            <img className="h-[25rem]" src={phoneWish} />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-[0.6rem]">
              Ne perdez jamais de vue vos envies
            </h3>
            <p className="text-center">
              Vous avez repéré la pièce manquante de votre univers ou une future
              nouveauté ? Ne la mélangez pas avec votre stock. Ajoutez-la à
              votre wishlist dédiée pour planifier vos futurs achats et ne
              jamais oublier le prochain set de vos rêves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
