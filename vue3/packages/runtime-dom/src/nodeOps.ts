export const nodeOps = {
    insert(el, parent, anchor) {
        return parent.insertBefore(el, anchor || null);
    },
    remove(el) {
        const parent = el.parentNode;
        if(parent) {
            parent.removeChild(el);
        }
    },
    createElement(type) {
        document.createElement(type);
    },
    createText(text) {
        return document.createTextNode(text);
    },
    setText(node, text) {
        return (node.nodeValue = text);
    },
    setElementText(node,text) {
        return (node.textContent = text);
    },
    parentNode(node) {
        return node.parentNode;
    },
    nextSibling(node) {
        return node.nextSibling;
    }
}