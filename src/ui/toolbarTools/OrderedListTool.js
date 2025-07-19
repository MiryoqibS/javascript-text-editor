import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

// Кнопка для создания списка с нумерацией
export class OrderedListTool extends Tool {
    render() {
        const unorderedListIcon = loadIcon("listOrdered");

        const button = this.init(() => {
            const selection = document.getSelection();

            if (!selection.rangeCount || selection.isCollapsed) {
                console.log("Пожалуйста выделите текст");
                return;
            };

            const range = selection.getRangeAt(0);
            const selectedText = range.extractContents();

            const ol = document.createElement("ol");
            const li = document.createElement("li");
            li.appendChild(selectedText);
            ol.appendChild(li);

            range.insertNode(ol);
        }, unorderedListIcon);


        return button;
    }
}