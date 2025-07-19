// Классы Инструментов
import { TextBoldTool } from "./toolbarTools/TextBoldTool.js";
import { TextItalicTool } from "./toolbarTools/TextItalicTool.js";
import { TextUnderLineTool } from "./toolbarTools/TextUnderlineTool.js";
import { TextStrikeThroughTool } from "./toolbarTools/TextStrikeThroughTool.js";
import { UnorderedListTool } from "./toolbarTools/UnorderedListTool.js";
import { TextColorTool } from "./toolbarTools/TextColorTool.js";
import { TextHeadingTool } from "./toolbarTools/TextHeadingTool.js";
import { TextFormatClear } from "./toolbarTools/TextFormatClear.js";

export class Toolbar {
    constructor() {
        this.container = document.createElement("div");
        this.container.className = "editor-toolbar";
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

        // инструменты создания/превращение
        const makeUnorderedList = new UnorderedListTool().render();

        this.container.appendChild(formatTextBold);
        this.container.appendChild(formatTextItalic);
        this.container.appendChild(formatTextUnderline);
        this.container.appendChild(formatTextStrikeThrough);
        this.container.appendChild(formatTextColor);
        this.container.appendChild(formatTextHeading);
        this.container.appendChild(formatTextClear);

        this.container.appendChild(makeUnorderedList);

        return this.container;
    }
}