import {KUBPage} from "./kub-spa/spa-core/spa-page/kub-spa-page.kub";

export default class Page404 extends KUBPage {
    constructor() {
        super();
        this.pageViewRoot.style = `width: 100vw; height: 100vh`;
        this.pageViewRoot.onclick = function () {
            window.history.pushState('', '', '/')
        }
        this.pageViewRoot.textContent = '404 page'
    };
}