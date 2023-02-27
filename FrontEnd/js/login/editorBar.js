{
  /* Création de la barre d'édition :

    <div class="editorBar">
      <div class="editorBar-info">
        <p>ICON</p>
        <p>Mode édition</p>
		  </div>
      <button class="editorBar-button">
        publier les changements
		  </button>
		</div>

  */
}

const editorBar = () => {
  // Afficher la barre d'édition avant le header
  const editorBar = document.createElement("div");
  editorBar.classList.add("editorBar");

  const header = document.querySelector("header");
  document.querySelector("body").insertBefore(editorBar, header);
  header.style.marginTop = "75px";

  // Afficher le l'info "mode édition" et le bouton de publication
  // AJOUT ICONE DE FONT AWESOME
  const infoEditorMode = document.createElement("div");
  const infoEditorModeIcon = document.createElement("p");
  const infoEditorModeText = document.createElement("p");
  const btnEditorPublish = document.createElement("button");

  infoEditorMode.classList.add("editorBar-info");
  btnEditorPublish.classList.add("editorBar-button");
  infoEditorModeIcon.textContent = "ICON";
  infoEditorModeText.textContent = "Mode édition";
  btnEditorPublish.textContent = "publier les changements";

  infoEditorMode.appendChild(infoEditorModeIcon);
  infoEditorMode.appendChild(infoEditorModeText);
  editorBar.appendChild(infoEditorMode);
  editorBar.appendChild(btnEditorPublish);
};

export { editorBar };
