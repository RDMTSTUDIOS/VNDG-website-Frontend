import { KUBPageType } from "../../types/core-types.type";
import KUBPage from "../../spa-page/kub-spa-page.kub";
import { IPageRenderEvent } from "../events.intefaces";

export class PageRenderEvent implements IPageRenderEvent{
    constructor(
        public route: string,
        public pageToBeRemoved: KUBPage,
        public pageToBeRendered: KUBPageType,
        public alreadyVisitedSite: boolean,
        public preventRendering: () => void) {}
}