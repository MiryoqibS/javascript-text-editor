import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

export class TextLeftTool extends Tool {
    constructor(resizeEditorField) {
        super(false);
        this.resizeEditorField = resizeEditorField;
    }

    render() {
        const leftIcon = loadIcon("alignLeft");

        const button = this.init(() => {
            const selection = document.getSelection();

            if (!selection.rangeCount || selection.isCollapsed) {
                return;
            };

            const range = selection.getRangeAt(0);
            const selectedText = range.extractContents();

            const textContainer = document.createElement("span");
            textContainer.style.display = "block";
            textContainer.style.textAlign = "left";
            textContainer.appendChild(selectedText);

            range.insertNode(textContainer);
            this.resizeEditorField();
        }, leftIcon);

        return button;
    }
}