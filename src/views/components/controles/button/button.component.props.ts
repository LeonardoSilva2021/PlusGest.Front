export interface ButtonComponentProps {
    fullwidth?: boolean; 
    text?: boolean;
    rounded?: boolean;
    raised?: boolean;
    classname?: string;
    onClick: () => void;
}