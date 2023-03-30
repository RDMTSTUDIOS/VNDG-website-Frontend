import {KUBPage} from "./kub-spa/spa-core/spa-page/kub-spa-page.kub";

export default class IndexPage extends KUBPage {
    constructor() {
        super();
        this.pageViewRoot.style = `width: 100vw; height: 100vh`;
        this.pageViewRoot.onclick = function(){
            window.history.pushState('', '', '/about')
        }
        this.pageViewRoot.textContent = 'Index page'
    };
}