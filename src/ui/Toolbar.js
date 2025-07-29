// Классы Инструментов
import { TextColorTool } from "./toolbarTools/TextColorTool.js";
import { TextHeadingTool } from "./toolbarTools/TextHeadingTool.js";
import { TextFormatClear } from "./toolbarTools/TextFormatClear.js";
import { TextAlignTool } from "./toolbarTools/TextAlignTool.js";
import { ListTool } from "./toolbarTools/ListTool.js";
import { MarkTool } from "./toolbarTools/MarkTool.js";
import { CodeTool } from "./toolbarTools/CodeTool.js";

export class Toolbar {
    constructor(resizeEditorField, getEditorFieldWrapper, createEditorField) {
        this.container = document.createElement("div");
        this.container.className = "editor-toolbar";

        // Функция для автоматического изменения высота поле ввода редактора
        this.resizeEditorField = resizeEditorField;

        // Функция для получения поле ввода
        this.getEditorFieldWrapper = getEditorFieldWrapper;

        // Функция для рендера поля ввода текста
        this.createEditorField = createEditorField;
    }

    render() {

        // инструменты форматирования
        const formatTextColor = new TextColorTool().render();
        const formatTextClear = new TextFormatClear().render();
        const formatTextHeading = new TextHeadingTool(this.resizeEditorField).render();
        const formatTextCenter = new TextAlignTool(this.resizeEditorField, "center").render();
        const formatTextLeft = new TextAlignTool(this.resizeEditorField, "left").render();
        const formatTextRight = new TextAlignTool(this.resizeEditorField, "right").render();
        const formatTextJustify = new TextAlignTool(this.resizeEditorField, "justify").render();

        // инструменты для маркировки
        const markTextBold = new MarkTool("b", "bold").createTool()
        const markTextItalic = new MarkTool("i", "italic").createTool();
        const markTextUnderline = new MarkTool("u", "underline").createTool();
        const markTextStrikeThrough = new MarkTool("strike", "strikeThrough").createTool();
        const markSubscript = new MarkTool("sub", "subscript").createTool();
        const markSupscript = new MarkTool("sup", "supscript").createTool();
        const markQuote = new MarkTool("blockquote", "quote").createTool();
        const markHighlight = new MarkTool("mark", "highlight").createTool();

        // инструменты создания/превращение
        const getEditorFieldWrapper = this.getEditorFieldWrapper();
        const makeUnorderedList = new ListTool(false).render();
        const makeOrderedList = new ListTool(true).render();
        const makeCode = new CodeTool(getEditorFieldWrapper, this.createEditorField).createTool();

        this.container.appendChild(markTextBold);
        this.container.appendChild(markTextItalic);
        this.container.appendChild(markTextUnderline);
        this.container.appendChild(markTextStrikeThrough);
        this.container.appendChild(markSubscript);
        this.container.appendChild(markSupscript);
        this.container.appendChild(markQuote);
        this.container.appendChild(markHighlight);

        this.container.appendChild(formatTextColor);
        this.container.appendChild(formatTextHeading);
        this.container.appendChild(formatTextClear);
        this.container.appendChild(formatTextCenter);
        this.container.appendChild(formatTextLeft);
        this.container.appendChild(formatTextRight);
        this.container.appendChild(formatTextJustify);

        this.container.appendChild(makeUnorderedList);
        this.container.appendChild(makeOrderedList);
        this.container.appendChild(makeCode);

        return this.container;
    }
}