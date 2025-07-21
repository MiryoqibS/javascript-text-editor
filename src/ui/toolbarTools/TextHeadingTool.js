import { loadIcon } from "../../utils/loadIcon";

export class TextHeadingTool {
    constructor(resizeEditorField) {
        this.HEADINGS = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
        this.resizeEditorField = resizeEditorField;
    }

    render() {
        let editorFieldElement = null;

        const container = document.createElement("div");
        container.className = "editor-toolbar__tool accordion";

        const accordion = document.createElement("div");
        accordion.className = "editor-toolbar__tool-accordion";

        const accordionHeader = document.createElement("header");
        accordionHeader.className = "editor-toolbar__tool-accordion__header";

        const accordionHeaderTitle = document.createElement("p");
        accordionHeaderTitle.innerText = "Text size: <p>";

        const accordionHeaderIcon = loadIcon("arrowDown", 10, 6)

        accordionHeader.appendChild(accordionHeaderTitle);
        accordionHeader.appendChild(accordionHeaderIcon);

        const accordionList = document.createElement("ul");
        accordionList.className = "editor-toolbar__tool-accordion__list hide";

        accordionHeader.addEventListener("click", () => {
            // Выбираем поле редактора текста
            editorFieldElement = document.querySelector(".editor-field");

            accordionHeader.classList.toggle("opened");
            accordionList.classList.toggle("hide");
        });

        this.HEADINGS.forEach(heading => {
            const accordionItem = document.createElement("li");
            accordionItem.className = "editor-toolbar__tool-accordion__item";

            const title = document.createElement("p");
            title.className = "title";
            title.innerText = `Text size: ${heading}`;

            const backgroundEffect = document.createElement("span");
            backgroundEffect.className = "background";

            accordionItem.appendChild(title);
            accordionItem.appendChild(backgroundEffect);

            accordionItem.addEventListener("click", () => {
                // Стили
                accordionHeaderTitle.innerText = `Text size: <${heading}>`;
                accordionList.classList.add("hide");
                accordionHeader.classList.remove("opened");
                editorFieldElement.focus();

                // Логика
                const sel = window.getSelection(); // выделенный текст

                // Проверка выделенный-ли текст
                if (sel.rangeCount) {
                    const range = sel.getRangeAt(0);
                    const headingElement = document.createElement(heading);
                    range.surroundContents(headingElement);
                    this.resizeEditorField();
                };
            });

            accordionList.appendChild(accordionItem);
        });

        accordion.appendChild(accordionHeader);
        accordion.appendChild(accordionList);

        container.appendChild(accordion);

        return container;
    }
}