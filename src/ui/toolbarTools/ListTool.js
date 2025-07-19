import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

// Общий Класс для создания списков 
export class ListTool extends Tool {
    constructor(isOrdered = false) {
        super(false);
        this.isOrdered = isOrdered
    }

    render() {
        const listIcon = loadIcon(this.isOrdered ? "listOrdered" : "listUnordered");

        const button = this.init(() => {
            const selection = document.getSelection();

            if (!selection.rangeCount || selection.isCollapsed) {
                console.log("Пожалуйста выделите текст");
                return;
            };

            const range = selection.getRangeAt(0);
            const selectedText = range.extractContents();

            const list = document.createElement(this.isOrdered ? "ol" : "ul");
            const li = document.createElement("li");
            li.appendChild(selectedText);
            list.appendChild(li);

            range.insertNode(list);
        }, listIcon);


        return button;
    }
}