import IUIUserPointer from "./ui-user-pointer.interface"

export default class UIUserPointer implements IUIUserPointer {

    public display(): void {
        this._pointerWindow_.appendChild(this._root_)
    };

    public hide(): void {
        this._root_.remove()
    };

    public static initiateInterface(pointerWindow: HTMLElement, markerAttribute: string, defaultClassName: string): UIUserPointer {
        if (UIUserPointer._instance_) return UIUserPointer._instance_
        return new UIUserPointer(pointerWindow, markerAttribute, defaultClassName)
    }

    private static _instance_?: UIUserPointer;

    private readonly _root_: HTMLElement;
    private readonly _pointerWindow_: HTMLElement;

    public setupStates: (pointerStates: Map<string, string>) => void;
    public clearStates: () => void;

    private constructor(pointerWindow: HTMLElement, markerAttribute: string, defaultClassName: string) {

        const root: HTMLElement = document.createElement('div');
        const statesMap: Map<string, string> = new Map();

        root.className = defaultClassName;
    
        let x: number = window.innerWidth / 2;
        let y: number = window.innerHeight / 2;
        
        let onID: string | null = null;
        let currentID: string | null = null;

        function render(): void {

            root.style.left = `${x}px`;
            root.style.top = `${y}px`;

            if (currentID != onID) {
                root.className = onID ? onID : defaultClassName;
                currentID = onID;
            };
            
            requestAnimationFrame(render);
        };
        
        document.addEventListener('mousemove', (e: MouseEvent) => {
            x = e.clientX;
            y = e.clientY;
            //@ts-ignore
            onID = e.target.getAttribute(markerAttribute);
        });
        
        this._root_ = root;
        this._pointerWindow_ = pointerWindow;

        this.setupStates = (pointerStatesMap: Map<string, string>): void => {
            pointerStatesMap.forEach((className: string, stateID: string) => {
                statesMap.set(stateID, className)
            });
        };

        this.clearStates = statesMap.clear;

        UIUserPointer._instance_ = this;
        render();
    }
}