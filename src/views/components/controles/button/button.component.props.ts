export interface ButtonComponentProps {
    fullwidth?: boolean; 
    text?: boolean;
    rounded?: boolean;
    raised?: boolean;
    classname?: string;
    outlined?: boolean;
    onClick: (event?: MouseEvent) => void;
}