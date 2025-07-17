import { Button } from "./Button";
import { loadIcon } from "../utils/loadIcon.js";
import { ToolbarInputColor } from "./toolbarTools/ToolbarInputColor.js";
import { ToolbarFontHeading } from "./toolbarTools/ToolbarFontHeading.js";

export class Toolbar {
    constructor() {
        this.container = document.createElement("div");
        this.container.className = "editor-toolbar";
        this.buttons = [];
    }

    initButtons() {
        const boldIcon = loadIcon("bold");
        const italicIcon = loadIcon("italic");
        const underlineIcon = loadIcon("underline");
        const strikeThroughIcon = loadIcon("strikeThrough");

        const execCommand = (command, ...args) => {
            const editorField = document.querySelector(".editor-field");
            editorField.focus();
            document.execCommand(command, ...args);
        };

        this.buttons = [
            // Кнопка жирного текста
            new Button(() => {
                execCommand("bold");
            }, boldIcon),

            // Кнопка кривого текста
            new Button(() => {
                execCommand("italic");
            }, italicIcon),

            // Кнопка для нижнего подчеркивания символов
            new Button(() => {
                execCommand("underline");
            }, underlineIcon),

            // Кнопка для подчеркивания по центру символов
            new Button(() => {
                execCommand("strikeThrough");
            }, strikeThroughIcon),

        ];
    }

    changeFontColor(editorFieldElement) {
        // Отдельный инструмент пипетка
        const colorPicker = new ToolbarInputColor((input) => {
            editorFieldElement.focus();
            document.execCommand("foreColor", false, input.value);
        });

        this.container.appendChild(colorPicker.render());
    }

    clearText(setFieldText) {
        // Отдельный инструмент очистка всего текста
        const eraserIcon = loadIcon("eraser");
        const button = document.createElement("button");
        button.className = "button editor-button";
        button.appendChild(eraserIcon);

        button.addEventListener("click", () => {
            setFieldText("");
            const editorField = document.querySelector(".editor-field");
            editorField.focus();
        });

        this.container.appendChild(button);
    }

    changeFontHeading(editorFieldElement, getSelectionRange) {
        // Отдельный инструмент для Заголовков
        const headingChanger = new ToolbarFontHeading(getSelectionRange);
        const headingAccordion = headingChanger.render(editorFieldElement);

        this.container.appendChild(headingAccordion);
    }

    render() {
        this.initButtons();

        // ОБщие инструменты
        this.buttons.forEach(button => this.container.appendChild(button.render()));

        return this.container;
    }
}