export class TextColorTool {
    constructor(onChange) {
        this.onChange = onChange;
    }

    render() {
        const container = document.createElement("div");
        container.className = "editor-toolbar__tool";

        const input = document.createElement("input");
        input.type = "color";
        input.className = "editor-toolbar__tool-picker";

        input.addEventListener("input", () => {
            const selection = window.getSelection();

            if (!selection.rangeCount || selection.isCollapsed) return;

            try {
                const range = selection.getRangeAt(0);

                const span = document.createElement("span");
                span.style.color = input.value;
                span.textContent = range.toString();

                range.deleteContents();
                range.insertNode(span);
                selection.removeAllRanges();
            } catch (error) {
                console.warn(`Упс ошибка: ${error.message}`);
            };

            selection.removeAllRanges();
        });

        container.appendChild(input);

        return container;
    }
}