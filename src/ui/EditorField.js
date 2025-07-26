export class EditorField {
    constructor() {
        this.wrapper = document.createElement("div");
        this.wrapper.className = "editor-field__wrapper";

        this.element = document.createElement("div");
        this.element.contentEditable = true;
        this.element.className = "editor-field";

        this.#setupAutoSize();
    }

    getEditorFieldWrapper() {
        return this.wrapper;
    }

    render() {
        this.wrapper.appendChild(this.element);
        return this.wrapper;
    }

    setText(html) {
        this.element.innerHTML = html;
        this.autoResize();
    }

    getText() {
        return this.element.innerHTML;
    }

    onInput(callback) {
        this.element.addEventListener("input", () => {
            this.autoResize();
            callback()
        });
    }

    autoResize() {
        this.element.style.height = "auto";
        const height = `${this.element.scrollHeight}px`;
        this.element.style.height = height;
    }

    #setupAutoSize() {
        window.addEventListener("DOMContentLoaded", this.autoResize());
    }
}