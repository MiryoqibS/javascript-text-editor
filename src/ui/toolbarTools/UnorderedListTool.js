import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

// Кнопка для создания списка с точками
export class UnorderedListTool extends Tool{
    render() {
        const unorderedListIcon = loadIcon("listBullet");

        const button = this.init(() => {
            const selection = document.getSelection();

            if (!selection.rangeCount || selection.isCollapsed) {
                console.log("Пожалуйста выделите текст");
                return;
            };

            const range = selection.getRangeAt(0);
            const selectedText = range.extractContents();

            const ul = document.createElement("ul");
            const li = document.createElement("li");
            li.appendChild(selectedText);
            ul.appendChild(li);

            range.insertNode(ul);
        }, unorderedListIcon);


        return button;
    }
}