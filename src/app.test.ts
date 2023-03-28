import Page404 from "./404.page"
import AboutPage from "./about.page"
import IndexPage from "./index.page"
import KUBApplication from "./kub-spa/spa-application/kub-spa-application.kub"

const AppTest = KUBApplication.createApp();

AppTest.configurePage('/', IndexPage);
AppTest.configurePage('/about', AboutPage);
AppTest.setPage404(Page404);

AppTest.decorateSwapPages = function(prevpage, nextpage): Promise<void> {

    const p = prevpage.getViewRoot();
    const n = nextpage.getViewRoot();

    return new Promise((resolve)=>{
        setTimeout(() => {
            prevpage.RemovePage().then(()=> {
            nextpage.RenderPage().then(resolve)
        });
    }, 2000);
    });
};

export default AppTest;