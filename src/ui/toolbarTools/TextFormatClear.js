import { loadIcon } from "../../utils/loadIcon";
import { Tool } from "../Tool";

// Кнопка для очистки форматирования текста
export class TextFormatClear extends Tool {
    constructor() {
        super(false)
    }

    render() {
        const clearIcon = loadIcon("formatRemove");
    
        const button = this.init(() => {
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            const contents  = range.extractContents();

            // Оборачиваем в временный контейнер для удаления форматирования
            const container = document.createElement("div");
            container.appendChild(contents);

            // Берём только текст
            const textOnly = container.textContent;

            // Вставляем текст в поле
            range.insertNode(document.createTextNode(textOnly));

            // Очищаем выделение
            selection.removeAllRanges();
        }, clearIcon);

        return button;
    }
}