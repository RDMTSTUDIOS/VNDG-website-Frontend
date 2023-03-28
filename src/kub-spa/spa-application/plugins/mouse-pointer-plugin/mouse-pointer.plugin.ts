import { GUIPointer } from "./pointer.interface";

export class GUIUserPointerPlugin implements GUIPointer {

    public static createPointer() {
    };
    public static refreshInstance() {
    };

    private constructor() {
    };
    
    /**
     * #### Start rendering GUIPointer on screen
     * @description Appends pointer DOM element to the ***Desktop Layer***
     * 
     * *Side-effect function*. returns - void
     */
    public render(): void {};

    /**
     * #### Stop rendering GUIPointer on screen
     * @description Removes pointer DOM element to the ***Desktop Layer***
     * 
     * *Side-effect function*. returns - void
     */
    public remove(): void {};

    /**
     * #### Show GUIPointer from the layer
     * @description Shows pointer DOM element to the ***Desktop Layer***, not appends. Basically a *sintatic sugar* for playing with DOM styling
     * 
     * *Side-effect function*. returns - void
     */
    public hide(): void {};

    /**
     * #### Hide GUIPointer from the layer
     * @description Hides pointer DOM element to the ***Desktop Layer***, not removes. Basically a *sintatic sugar* for playing with DOM styling
     * 
     * *Side-effect function*. returns - void
     */
    public display(): void {};
}