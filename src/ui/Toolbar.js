// Классы Инструментов
import { TextBoldTool } from "./toolbarTools/TextBoldTool.js";
import { TextItalicTool } from "./toolbarTools/TextItalicTool.js";
import { TextUnderLineTool } from "./toolbarTools/TextUnderlineTool.js";
import { TextStrikeThroughTool } from "./toolbarTools/TextStrikeThroughTool.js";
import { UnorderedListTool } from "./toolbarTools/UnorderedListTool.js";
import { TextColorTool } from "./toolbarTools/TextColorTool.js";
import { TextHeadingTool } from "./toolbarTools/TextHeadingTool.js";
import { TextFormatClear } from "./toolbarTools/TextFormatClear.js";
import { TextCenterTool } from "./toolbarTools/TextCenterTool.js";
import { TextLeftTool } from "./toolbarTools/TextLeftTool.js";
import { TextRightTool } from "./toolbarTools/TextRightTool.js";
import { TextJustifyTool } from "./toolbarTools/TextJustifyTool.js";

export class Toolbar {
    constructor(resizeEditorField) {
        this.container = document.createElement("div");
        this.container.className = "editor-toolbar";

        // Функция для автоматического изменения высота поле ввода редактора
        this.resizeEditorField = resizeEditorField;
    }

    render() {
        // инструменты форматирования
        const formatTextBold = new TextBoldTool().render();
        const formatTextItalic = new TextItalicTool().render();
        const formatTextUnderline = new TextUnderLineTool().render();
        const formatTextStrikeThrough = new TextStrikeThroughTool().render();
        const formatTextColor = new TextColorTool().render();
        const formatTextHeading = new TextHeadingTool().render();
        const formatTextClear = new TextFormatClear().render();
        const formatTextCenter = new TextCenterTool(this.resizeEditorField).render();
        const formatTextLeft = new TextLeftTool(this.resizeEditorField).render();
        const formatTextRight = new TextRightTool(this.resizeEditorField).render();
        const formatTextJustify = new TextJustifyTool(this.resizeEditorField).render();

        // инструменты создания/превращение
        const makeUnorderedList = new UnorderedListTool().render();

        this.container.appendChild(formatTextBold);
        this.container.appendChild(formatTextItalic);
        this.container.appendChild(formatTextUnderline);
        this.container.appendChild(formatTextStrikeThrough);
        this.container.appendChild(formatTextColor);
        this.container.appendChild(formatTextHeading);
        this.container.appendChild(formatTextClear);
        this.container.appendChild(formatTextCenter);
        this.container.appendChild(formatTextLeft);
        this.container.appendChild(formatTextRight);
        this.container.appendChild(formatTextJustify);

        this.container.appendChild(makeUnorderedList);

        return this.container;
    }
}