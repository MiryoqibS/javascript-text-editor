import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

export class TextRightTool extends Tool {
    constructor() {
        super(false);
    }

    render() {
        const rightIcon = loadIcon("alignRight");

        const button = this.init(() => {
            const selection = document.getSelection();

            if (!selection.rangeCount || selection.isCollapsed) {
                return;
            };

            const range = selection.getRangeAt(0);
            const selectedText = range.extractContents();

            const textContainer = document.createElement("span");
            textContainer.style.display = "block";
            textContainer.style.textAlign = "right";
            textContainer.appendChild(selectedText);

            range.insertNode(textContainer);
        }, rightIcon);

        return button;
    }
}