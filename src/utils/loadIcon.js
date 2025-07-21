export const loadIcon = (iconName, width = 18, height = 18) => {
    const path = "src/assets/sprites.svg";
    const SVG_NS = "http://www.w3.org/2000/svg";
    const XLINK_NS = "http://www.w3.org/1999/xlink";

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("fill", "currentColor");

    const use = document.createElementNS(SVG_NS, "use");
    use.setAttributeNS(XLINK_NS, "xlink:href", `${path}#${iconName}`);

    svg.appendChild(use);

    return svg;
};