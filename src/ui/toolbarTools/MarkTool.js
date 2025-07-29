import { loadIcon } from "../../utils/loadIcon";
import { Tool } from "../Tool";

export class MarkTool extends Tool {
    constructor(markTag, iconName) {
        super();
        this.markTag = markTag;
        this.iconName = iconName;
    }

    createTool() {
        const markIcon = loadIcon(this.iconName);

        const button = this.init(() => {
            const selection = window.getSelection();
            if (!selection.rangeCount) return;

            const range = selection.getRangeAt(0);

            // Проверка находиться ли курсор внутри тега
            const anchorNode = selection.anchorNode;
            const activeMarkTag = this.getClosestTag(anchorNode, this.markTag);

            if (activeMarkTag) {
                const spacer = document.createTextNode("\u00A0");
                activeMarkTag.parentNode.insertBefore(spacer, activeMarkTag.nextSibling);

                const newRange = document.createRange();
                newRange.setStartAfter(spacer);
                newRange.collapse(true);
                selection.removeAllRanges();
                selection.addRange(newRange);
                return;
            };

            if (selection.isCollapsed) return;

            const text = range.extractContents();
            const element = document.createElement(this.markTag);
            element.appendChild(text);
            range.insertNode(element);
        }, markIcon);

        return button
    }

    getClosestTag(node, tagName) {
        while (node) {
            if (node.nodeType === 1 && node.tagName.toLowerCase() === tagName.toLowerCase()) {
                return node;
            };
            node = node.parentNode;
        };
        return null;
    }
}