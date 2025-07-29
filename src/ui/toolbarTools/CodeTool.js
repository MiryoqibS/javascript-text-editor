import { basicSetup, EditorView } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { Tool } from "../Tool";
import { loadIcon } from "../../utils/loadIcon";

export class CodeTool extends Tool {
    constructor(parentNode, createEditorField) {
        super(false);
        this.parentNode = parentNode;
        this.createEditorField = createEditorField;
    }

    createTool() {
        const codeIcon = loadIcon("code");

        const button = this.init(() => {
            // Создаём элемент редактор 
            this.createCodeEditor();
        }, codeIcon);

        return button;
    }

    createCodeEditor() {
        try {
            // Контейнер для редактора и кнопки удаления 
            const container = document.createElement("div");
            container.style.position = "relative";
            container.classList.add("code-editor", "selected");

            // Создаём редактор 
            const editorView = new EditorView({
                doc: "console.log('hello')\n",
                extensions: [basicSetup, javascript()],
                parent: container,
            });

            // Кнопка для удаления редактора
            const editorViewDeleteButton = document.createElement("button");
            const trashIcon = loadIcon("trash");

            editorViewDeleteButton.appendChild(trashIcon);

            editorViewDeleteButton.style.position = "absolute";
            editorViewDeleteButton.style.top = "20px";
            editorViewDeleteButton.style.left = "95%";
            editorViewDeleteButton.style.background = "transparent";
            editorViewDeleteButton.style.transform = "translate(-50%, -50%)";

            editorViewDeleteButton.addEventListener("click", () => {
                editorView.destroy();
                container.remove();
            });

            // Собираем всё вместе
            container.appendChild(editorViewDeleteButton);

            // Добавляем новое поле ввода текста 
            const editorField = this.createEditorField();
            console.log(editorField);
            
            this.parentNode.appendChild(container);
            this.parentNode.appendChild(editorField);
        } catch (error) {
            console.log(`Упс ошибка: ${error.message}`);
        }
    }
}