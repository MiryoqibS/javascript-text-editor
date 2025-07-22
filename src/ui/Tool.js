export class Tool {
    constructor(haveActiveMode = true) {
        this.isActive = false;
        this._haveActiveMode = haveActiveMode;
    }

    init(onClick, icon, editorField) {
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

            editorField = document.querySelector(".editor-field");
            editorField.focus();
            onClick();

            editorField.addEventListener("click", () => {
                this.isActive = false;
                if (button.classList.contains) {
                    button.classList.remove("active");
                };
            });

            // Изменение высоты поля ввода
            editorField.style.height = "auto";
            const height = `${editorField.scrollHeight}px`;
            editorField.style.height = height;
        });

        button.appendChild(icon);

        return button;
    }
}