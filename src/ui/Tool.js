export class Tool {
    constructor(haveActiveMode = true) {
        this.isActive = false;
        this._haveActiveMode = haveActiveMode;
    }

    init(onClick, icon) {
        const button = document.createElement("button");
        button.className = "button editor-button";
        button.addEventListener("click", () => {
            if (this._haveActiveMode) {
                this.isActive = !this.isActive;
            } else {
                this.isActive = false;
            };

            if (this.isActive) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            };

            const editorField = document.querySelector(".editor-field");
            editorField.focus();
            onClick();
        });

        button.appendChild(icon);

        return button;
    }
}