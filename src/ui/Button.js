export class Button {
    constructor(onClick, icon) {
        this.onClick = onClick;
        this.icon = icon;
        this.isActive = false;
    }

    render() {
        const button = document.createElement("button");
        button.className = "button editor-button";
        button.addEventListener("click", () => {
            this.isActive = !this.isActive;

            if (this.isActive) {
                button.classList.add("active");
                this.onClick();
            } else {
                button.classList.remove("active");
            };

        });

        button.appendChild(this.icon);

        return button;
    }
}