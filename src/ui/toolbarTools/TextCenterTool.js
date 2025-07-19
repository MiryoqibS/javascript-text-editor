import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

export class TextCenterTool extends Tool {
    constructor(resizeEditorField) {
        super(false);
        this.resizeEditorField = resizeEditorField;
    }

    render() {
        const centerIcon = loadIcon("alignCenter");

        const button = this.init(() => {
            const selection = document.getSelection();

            if (!selection.rangeCount || selection.isCollapsed) {
                return;
            };

            const range = selection.getRangeAt(0);
            const selectedText = range.extractContents();

            const textContainer = document.createElement("span");
            textContainer.style.display = "block";
            textContainer.style.textAlign = "center";
            textContainer.appendChild(selectedText);

            range.insertNode(textContainer);
            this.resizeEditorField()
        }, centerIcon);

        return button;
    }
}