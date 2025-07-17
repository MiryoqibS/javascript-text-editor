export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init(root) {
        this.view.render(root);

        this.view.bindTextInput(() => {
            const value = this.view.getText();
            this.model.setText(value);
        });
    }
}