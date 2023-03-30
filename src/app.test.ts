import Page404 from "./404.page"
import AboutPage from "./about.page"
import IndexPage from "./index.page"
import { KUBApplication, GUIUserPointerPlugin } from "./kub-spa"

const AppTest = KUBApplication.createApp();

AppTest.configurePage('/', IndexPage);
AppTest.configurePage('/about', AboutPage);
AppTest.setPage404(Page404);
const c = GUIUserPointerPlugin.getGUIPointersConstructor(KUBApplication.GET_DESKTOP_LAYER())
const pointer = c.createGUIPointer('')
const custom = document.createElement('div')
// @ts-ignore
custom.style = `width: 100px; height: 100px; background-color: red; position: fixed`
pointer.insertToPointerRoot(custom)
pointer.display()

AppTest.decorateSwapPages = function(prevpage, nextpage): Promise<void> {

    const p = prevpage.getViewRoot();
    const n = nextpage.getViewRoot();

    return new Promise((resolve) => {

        setTimeout(() => {
            prevpage.RemovePage().then(()=> {
            nextpage.RenderPage().then(resolve)
        });
        
    }, 2000);
    });
};

export default AppTest;