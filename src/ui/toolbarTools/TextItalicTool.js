import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

// Кнопка кривого текста
export class TextItalicTool extends Tool {
    constructor() {
        super()
    }

    render() {
        const italicIcon = loadIcon("italic");

        const button = this.init(() => {
            document.execCommand("italic");
        }, italicIcon);

        return button;
    }
}