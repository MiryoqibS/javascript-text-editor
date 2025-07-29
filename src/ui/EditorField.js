export class EditorField {
    constructor() {
        this.wrapper = document.createElement("div");
        this.wrapper.className = "editor-field__wrapper";

        this.element = document.createElement("div");
        this.element.contentEditable = true;
        this.element.className = "editor-field";

        this.element.addEventListener("input", () => {
            if (this.element.textContent.length <= 0) {
                // Удаляем если есть ещё поля ввода
                const editorFields = document.querySelectorAll(".editor-field");
                if (editorFields.length > 1) {
                    this.destroy();
                };
            };
        });

        this.#setupAutoSize();
    }

    getEditorFieldWrapper() {
        return this.wrapper;
    }

    getEditorField() {
        return this.element;
    }

    render() {
        this.wrapper.appendChild(this.element);
        return this.wrapper;
    }

    destroy() {
        if (this.element) {
            this.element.remove();
            this.element = null;
        }
    }

    setText(html) {
        if (this.element) {
            this.element.innerHTML = html;
            this.autoResize();
        }
    }

    getText() {
        if (this.element) {
            return this.element.innerHTML;
        }
    }

    onInput(callback) {
        this.element.addEventListener("input", () => {
            this.autoResize();
            callback()
        });
    }

    autoResize() {
        if (this.element) {
            this.element.style.height = "auto";
            const height = `${this.element.scrollHeight}px`;
            this.element.style.height = height;
        }
    }

    #setupAutoSize() {
        window.addEventListener("DOMContentLoaded", () => this.autoResize());
    }
}