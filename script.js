function generatePackingList() {
    const nbNuit = parseInt(document.getElementById("nbNuit").value);
    const climat = document.getElementById("climat").value;
    const itemsList = document.getElementById("itemsList");
    const packingList = document.getElementById("packingList");
    const errorMessage = document.getElementById("error-message");

    itemsList.innerHTML = "";
    errorMessage.innerHTML = "";
    errorMessage.classList.add("hidden");

    if (nbNuit <= 0) {
        alert("Le nombre de nuits doit être strictement supérieur à 0.");
        return;
    }

    errorMessage.textContent =
        "Cette liste n'inclut pas ce que vous allez mettre sur vous le jour J.";
    errorMessage.classList.remove("hidden");

    const chaussettes = Math.min(nbNuit, 10);
    const ssvêtements = Math.min(nbNuit, 10);
    const tShirts = Math.min(nbNuit, 10);
    const pulls = nbNuit < 4 ? 1 : nbNuit <= 6 ? 2 : 3;
    const pants = nbNuit < 4 ? 1 : nbNuit <= 6 ? 2 : 3;

    addCheckboxToList(itemsList, `Un sac à dos/valise`);
    addCheckboxToList(
        itemsList,
        `Nombre de paires de chaussettes : ${chaussettes}`
    );
    addCheckboxToList(itemsList, `Nombre de sous-vêtements : ${ssvêtements}`);
    addCheckboxToList(itemsList, `Nombre de t-shirts : ${tShirts}`);
    addCheckboxToList(itemsList, `Nombre de pulls/sweats : ${pulls}`);
    addCheckboxToList(itemsList, `Nombre de pantalons : ${pants}`);
    addCheckboxToList(itemsList, `Brosse à dents`);
    addCheckboxToList(itemsList, `Dentifrice`);
    addCheckboxToList(
        itemsList,
        `passeport,ordinateur portable+ portable + chargeur et housse, `
    );

    if (climat === "chaud") {
        itemsList.removeChild(itemsList.lastChild);
        addCheckboxToList(itemsList, `Tongs/claquettes`);
        addCheckboxToList(itemsList, `Crème solaire`);
    } else if (climat === "froid") {
        addCheckboxToList(itemsList, `Gants et bonnets`);
        addCheckboxToList(itemsList, `Une veste`);
    }
    if (nbNuit > 10) {
        alert(
            "PLUS DE 10 JOURS ALORS LA 😱😱😱😱 Si vous partez en voyage plus de 10 nuits, faites des machines. Voyagez léger."
        );
    }

    packingList.classList.remove("hidden");

    const checkboxes = document.querySelectorAll(
        '#itemsList input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", checkAllChecked);
    });
}

function addItemToList(list, item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
}

function addCheckboxToList(list, item) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);

    const label = document.createElement("label");
    label.textContent = item;
    listItem.appendChild(label);

    list.appendChild(listItem);
}

function resetForm() {
    document.getElementById("packingForm").reset();
    document.getElementById("packingList").classList.add("hidden");
    document.getElementById("itemsList").innerHTML = "";
}

function checkAllChecked() {
    const checkboxes = document.querySelectorAll(
        '#itemsList input[type="checkbox"]'
    );
    const allChecked = Array.from(checkboxes).every(
        (checkbox) => checkbox.checked
    );

    if (allChecked) {
        alert("Bravo bon voyage !🧳✈️👏👏");
    }
}
