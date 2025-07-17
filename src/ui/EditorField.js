export class EditorField {
    constructor() {
        this.element = document.createElement("div");
        this.element.contentEditable = true;
        this.element.className = "editor-field";

        this.#setupAutoSize();

        this.selectedRange = null;
    }

    render() {
        return this.element;
    }

    setText(html) {
        this.element.innerHTML = html;
        this.#autoResize();
    }

    getText() {
        return this.element.innerHTML;
    }

    onInput(callback) {
        this.element.addEventListener("input", () => {
            this.#autoResize();
            callback()
        });

        this.element.addEventListener("mouseup", () => {
            const selection = document.getSelection();
            if (selection.rangeCount > 0) {
                this.selectedRange = selection.getRangeAt(0).cloneRange();
            };
        })
    }

    getSelectedRange() {
        return this.selectedRange;
    }

    #autoResize() {
        this.element.style.height = "auto";
        const height = `${this.element.scrollHeight}px`;
        this.element.style.height = height;
    }

    #setupAutoSize() {
        window.addEventListener("DOMContentLoaded", this.#autoResize());
    }
}