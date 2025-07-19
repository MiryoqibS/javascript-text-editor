import { loadIcon } from "../../utils/loadIcon";
import { Tool } from "../Tool";

// Кнопка для очистки форматирования текста
export class TextFormatClear extends Tool {
    constructor() {
        super(false)
    }

    render() {
        const clearIcon = loadIcon("eraser");
    
        const button = this.init(() => {
            document.execCommand("removeFormat");
        }, clearIcon);

        return button;
    }
}