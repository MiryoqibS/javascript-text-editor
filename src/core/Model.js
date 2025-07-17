export class Model {
    #text = "";
    #history = [];

    setText(newText) {
        this.#history.push(this.#text)
        this.#text = newText;
    }

    getText() {
        return this.#text;
    }

    undo() {
        if (this.#history.length > 0) {
            this.#text = this.#history.pop();
        };
    }
}