// Импортируем стили
import "./importer.scss";

import { Model } from "./core/Model";
import { View } from "./core/View";
import { Controller } from "./core/Controller";
import { Editor } from "./ui/Editor";

const editor = new Editor();
const model = new Model();
const view = new View(editor);
const controller = new Controller(model, view);

const root = document.getElementById("root");
controller.init(root);
