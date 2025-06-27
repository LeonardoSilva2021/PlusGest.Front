import { TemplateRef } from "@angular/core";

export interface DrawerComponentProps {
    visible: boolean;
    position: 'left' | 'right' | 'bottom' | 'top';
    title?: string;
    onClose: () => void;
    onShow: () => void; 
    endButtons?: TemplateRef<any>
}