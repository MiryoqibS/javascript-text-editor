import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

// Кнопка жирного текста
export class TextBoldTool extends Tool {
    constructor() {
        super()
    }

    render() {
        const boldIcon = loadIcon("bold");

        const button = this.init(() => {
            document.execCommand("bold");
        }, boldIcon);

        return button;
    }
}