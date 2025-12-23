import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 mt-[5rem]">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-[#780000] px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            Politique de Confidentialité
          </h1>
          <p className="text-green-100 text-sm mt-1">
            BrickNest - Protection de vos données personnelles
          </p>
        </div>

        <div className="p-6 space-y-8 text-gray-700">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 mb-6">
            Ce document détaille la gestion des données pour le projet fictif
            "BrickNest".
          </div>

          <p>
            Bienvenue sur BrickNest. Nous accordons une importance majeure à la
            confidentialité de vos données. Cette politique vise à vous informer
            en toute transparence sur les données que nous collectons, pourquoi
            nous les collectons, et comment vous pouvez les contrôler.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4 flex items-center">
              1. Les données que nous collectons
            </h2>
            <p className="mb-2">
              Nous limitons la collecte aux données strictement nécessaires au
              fonctionnement du service :
            </p>
            <ul className="list-disc list-inside bg-gray-50 p-4 rounded-md border border-gray-200 space-y-2">
              <li>
                <strong>Informations d'identité :</strong> Nom, Prénom (pour
                personnaliser votre espace).
              </li>
              <li>
                <strong>Informations de contact :</strong> Adresse email (pour
                l'authentification).
              </li>
              <li>
                <strong>Informations techniques :</strong> Mot de passe (stocké
                de manière chiffrée/hachée).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              2. Pourquoi utilisons-nous vos données ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-2">
                  Gestion du compte
                </h3>
                <p className="text-sm">
                  Pour créer votre espace personnel, vous connecter et sécuriser
                  l'accès à vos collection et wishlist.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-2">
                  Fonctionnement technique
                </h3>
                <p className="text-sm">
                  Pour maintenir votre session active lorsque vous naviguez sur
                  le site.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              3. Sécurité des données
            </h2>
            <p>
              La sécurité de vos données est une priorité. Nous mettons en œuvre
              des mesures techniques appropriées :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>
                Les mots de passe sont <strong>systématiquement hachés</strong>{" "}
                avant d'être stockés en base de données.
              </li>
              <li>Les connexions à la base de données sont sécurisées.</li>
              <li>
                L'accès aux données est restreint à l'administrateur du projet
                (Alexis Thullier).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              4. Gestion des Cookies
            </h2>
            <p>
              BrickNest respecte votre vie privée :{" "}
              <strong>nous n'utilisons aucun traceur publicitaire.</strong>
            </p>
            <p className="mt-2">
              Seuls des cookies de session (nécessaires technique) sont
              utilisés. Ils permettent de mémoriser que vous êtes connecté(e)
              pendant votre navigation. Ils sont automatiquement supprimés
              lorsque vous vous déconnectez ou fermez votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              5. Vos droits (Suppression de compte)
            </h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez d'un droit d'accès, de
              modification et de suppression de vos données.
            </p>
            <div className="bg-red-50 border border-red-200 p-4 rounded-md">
              <h3 className="font-bold text-red-700 mb-1">
                Supprimer mon compte
              </h3>
              <p className="text-sm text-red-600 mb-3">
                Vous pouvez supprimer définitivement votre compte et toutes les
                données associées directement depuis votre espace profil.
              </p>

              <Link
                to="/modifyaccount"
                className="text-sm font-semibold text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Aller à mon profil
              </Link>
            </div>
          </section>

          <div className="text-sm text-gray-500 mt-8 pt-4 border-t">
            <p>
              Responsable du traitement : Alexis Thullier -{" "}
              <a
                href="mailto:contact@bricknest.fr"
                className="underline hover:text-gray-700"
              >
                contact@bricknest.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
