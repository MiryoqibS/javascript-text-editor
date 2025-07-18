import { loadIcon } from "../../utils/loadIcon";

export class ToolbarFontHeading {
    constructor(getSelection) {
        this.getSelection = getSelection;
    }

    render(editorFieldElement) {
        console.log(editorFieldElement);

        const container = document.createElement("div");
        container.className = "editor-toolbar__tool accordion no-select";


        const accordion = document.createElement("div");
        accordion.className = "editor-toolbar__tool-accordion";

        const accordionHeader = document.createElement("header");
        accordionHeader.className = "editor-toolbar__tool-accordion__header no-select";

        const accordionHeaderTitle = document.createElement("p");
        accordionHeaderTitle.innerText = "Text size: <p>";

        const accordionHeaderIcon = loadIcon("arrowDown", 10, 6)

        accordionHeader.appendChild(accordionHeaderTitle);
        accordionHeader.appendChild(accordionHeaderIcon);

        const accordionList = document.createElement("ul");
        accordionList.className = "editor-toolbar__tool-accordion__list hide";

        accordionHeader.addEventListener("click", () => {
            accordionHeader.classList.toggle("opened");
            accordionList.classList.toggle("hide");
        });

        const HEADINGS = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];

        HEADINGS.forEach(heading => {
            const accordionItem = document.createElement("li");
            accordionItem.className = "editor-toolbar__tool-accordion__item no-select";

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
                    document.execCommand('insertHTML', false, `<${heading}>` + document.getSelection().toString() + `</${heading}>`);
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