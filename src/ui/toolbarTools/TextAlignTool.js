import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";
import { capitalize } from "../../utils/capitalize";

// Общий Класс для выравнивания текста в переданную сторону
export class TextAlignTool extends Tool {
    constructor(resizeEditorField, align) {
        super(false);
        this.resizeEditorField = resizeEditorField;
        this.align = align;
    }

    render() {
        const alignIcon = loadIcon(`align${capitalize(this.align)}`);

        const button = this.init(() => {
            const selection = document.getSelection();

            if (!selection.rangeCount || selection.isCollapsed) {
                return;
            }

            const range = selection.getRangeAt(0);
            const selectedText = range.extractContents();

            const textContainer = document.createElement("span");
            textContainer.style.display = "block";
            textContainer.style.textAlign = this.align.toLowerCase();
            textContainer.appendChild(selectedText);

            range.insertNode(textContainer);
            this.resizeEditorField();
        }, alignIcon);

        return button;
    }
}
