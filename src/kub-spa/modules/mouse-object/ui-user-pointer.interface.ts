export default interface IUIUserPointer {
    
    display(): void;
    hide(): void;

    setupStates(statesList: Map<string, string>): void;
    clearStates(): void;
}