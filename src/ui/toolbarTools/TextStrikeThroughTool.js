import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

// Кнопка для подчеркивания по центру символов
export class TextStrikeThroughTool extends Tool {
    constructor() {
        super()
    }

    render() {
        const strikeThroughIcon = loadIcon("strikeThrough");

        const button = this.init(() => {
            document.execCommand("strikeThrough");
        }, strikeThroughIcon);

        return button;
    }
}