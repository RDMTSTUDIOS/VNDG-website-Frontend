
export default class _KUBView_ {

    protected view: HTMLElement;
    
    protected constructor() {
        this.view = document.createElement('div')
    };

    public removePointer(): void {
        this.view.style.pointerEvents = 'none'
    };

    public enablePointer(): void {
        this.view.style.pointerEvents = ''
    };

    public freezeInteraction(): void {
        this.view.style.userSelect = 'none'
    };

    public enableInteraction(): void {
        this.view.style.userSelect = ''
    };

}
