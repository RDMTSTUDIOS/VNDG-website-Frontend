import { KUBPageType } from "../types/core-types.type";
import KUBPage from "../spa-page/kub-spa-page.kub";



export interface IPageNotFoundEvent {

    currentRoute: string;
    goTo(route: string): void;
    goBack(): void;
    preventRendering404(): void;
};

export interface IPageRenderEvent {

    route: string;
    pageToBeRendered: KUBPageType;
    pageToBeRemoved: KUBPage;
    preventRendering: VoidFunction;
    alreadyVisitedSite: boolean;
};



// Класс - принцип подразделения
// Кластер - гроздь (родовые принципы и принципы)