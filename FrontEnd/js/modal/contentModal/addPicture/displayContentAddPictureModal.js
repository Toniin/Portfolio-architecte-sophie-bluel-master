import { createBtnReturnModal } from "../createBtnReturnModal.js";
import { createModalTitle } from "../createModalTitle.js";
import { displayFormAddPictureModal } from "./displayFormAddPictureModal.js";

{
  /* Afficher le contenu de la modale pour ajouter une photo :

    createBtnReturnModal()
    createModalTitle()
    <div class="worksContainer">
      displayFormAddPictureModal()
      <hr>
      <button class="btnSubmitAddPicture">
        Valider
      </button>
    </div>

  */
}

const displayContentAddPictureModal = (containerModal, modal) => {
  // Créer un bouton pour retourner à la modale précédente
  createBtnReturnModal(modal);

  // Créer un titre pour la modale
  createModalTitle(containerModal, "Ajout photo");

  // Créer un conteneur pour afficher les projets
  const worksContainer = document.createElement("div");
  worksContainer.classList.add("worksContainer");
  containerModal.appendChild(worksContainer);

  // Afficher un formulaire pour ajouter une nouvelle photo
  displayFormAddPictureModal(worksContainer);
};

export { displayContentAddPictureModal };
