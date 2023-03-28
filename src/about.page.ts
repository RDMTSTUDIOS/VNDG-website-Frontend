import {KUBPage} from "./kub-spa/spa-application/spa-page/kub-spa-page.kub";

export default class AboutPage extends KUBPage {
    constructor() {
        super();
        this.pageViewRoot.style = `width: 100vw; height: 100vh`;
        this.pageViewRoot.textContent = 'About page'
    };
}