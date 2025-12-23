export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 mt-[5rem]">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-[#780000] px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            Mentions Légales & Politique de Confidentialité
          </h1>
          <p className="text-blue-100 text-sm mt-1">
            Dernière mise à jour : {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="p-6 space-y-8 text-gray-700">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <span className="font-bold">Note au Jury :</span> Ce site est
                  un projet fictif réalisé dans le cadre de la formation
                  "Développeur Web et Web Mobile" (DWWM). Aucune transaction
                  réelle n'est effectuée.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              1. Éditeur du site
            </h2>
            <p className="mb-2">
              Le site <strong>BrickNest</strong> est édité par :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Nom :</strong> Alexis Thullier
              </li>
              <li>
                <strong>Statut :</strong> Projet Étudiant DWWM
              </li>
              <li>
                <strong>Adresse :</strong> 42 Avenue du Code, 75011 Paris
                (Adresse fictive)
              </li>
              <li>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@bricknest.fr"
                  className="text-blue-600 hover:underline"
                >
                  contact@bricknest.fr
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              2. Hébergement
            </h2>
            <p>
              Dans le cadre de la présentation pour le titre professionnel, ce
              site est hébergé localement :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>
                <strong>Hébergeur :</strong> Localhost (Environnement de
                développement local)
              </li>
              <li>
                <strong>Note :</strong> Le site n'est pas accessible au public
                sur le web mondial.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              3. Protection des données (RGPD)
            </h2>
            <p className="mb-4">
              Alexis Thullier s'engage à ce que la collecte et le traitement de
              vos données, effectués à partir du site BrickNest, soient
              conformes au règlement général sur la protection des données
              (RGPD).
            </p>

            <h3 className="font-semibold text-gray-900 mt-4">
              Données collectées
            </h3>
            <p className="mb-2">
              Nous collectons les données suivantes lorsque vous créez un compte
              ou passez commande :
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Nom et Prénom</li>
              <li>Adresse email</li>
              <li>Données de connexion (mots de passe chiffrés)</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-4">
              Utilisation des données
            </h3>
            <p className="mb-4">
              Ces données sont utilisées uniquement pour la gestion de votre
              compte utilisateur, le bon fonctionnement des services de
              BrickNest et la démonstration technique des fonctionnalités du
              projet. Elles ne sont jamais transmises à des tiers.
            </p>

            <h3 className="font-semibold text-gray-900 mt-4">Vos droits</h3>
            <p className="mb-4">
              Conformément à la loi, vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données. Vous pouvez
              exercer ce droit directement depuis votre espace personnel via le
              bouton <strong>"Supprimer mon compte"</strong> ou en nous
              contactant par email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              4. Cookies
            </h2>
            <p>
              Le site BrickNest utilise uniquement des{" "}
              <strong>cookies strictement nécessaires</strong> (cookies de
              session) au fonctionnement du site (maintien de la connexion
              utilisateur).
            </p>
            <p className="mt-2">
              Aucun cookie publicitaire, de traçage tiers (type Google
              Analytics) ou de réseaux sociaux n'est utilisé sur ce projet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              5. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble de ce site relève de la législation française et
              internationale sur le droit d'auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés, y
              compris pour les représentations iconographiques et
              photographiques utilisées à titre d'illustration pour ce projet
              étudiant.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
