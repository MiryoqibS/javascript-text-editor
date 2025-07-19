import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

// Кнопка для нижнего подчеркивания символов
export class TextUnderLineTool extends Tool {
    constructor() {
        super()
    }

    render() {
        const underlineIcon = loadIcon("underline");

        const button = this.init(() => {
            document.execCommand("underline");
        }, underlineIcon);

        return button;
    }
}