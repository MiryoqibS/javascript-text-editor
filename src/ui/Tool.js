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
            }

            button.classList.toggle("active", this.isActive);

            const selection = window.getSelection();
            const anchorNode = selection.anchorNode;

            const activeEditorField = anchorNode
                ? anchorNode.nodeType === 3
                    ? anchorNode.parentElement.closest(".editor-field")
                    : anchorNode.closest(".editor-field")
                : null;

            if (!activeEditorField) {
                console.warn("Не найден активный editorField");
                return;
            }

            activeEditorField.focus();
            onClick();

            // Авто-высота
            activeEditorField.style.height = "auto";
            activeEditorField.style.height = `${activeEditorField.scrollHeight}px`;
        });

        button.appendChild(icon);
        return button;
    }

}