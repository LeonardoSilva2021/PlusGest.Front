import { Component, Input } from "@angular/core";
import { DrawerComponentProps } from "./drawer.component.props";
import { DrawerModule } from "primeng/drawer"
import { TypographyComponent } from "../typography/typography.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'drawer-component',
    imports: [
        DrawerModule,
        TypographyComponent,
        CommonModule
    ],
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.styles.css',
})

export class DrawerComponent {
    @Input() props!: DrawerComponentProps;
} 

// @Component({
//   selector: 'app-exemplo-do-componente-pai',
//   template: `
//     <button (click)="openDrawer()">Abrir Drawer</button>

//     <app-drawer-adicionar-cliente
//       [props]="drawerProps"
//       [contentTemplateRef]="formTemplate"       (drawerShow)="onDrawerShowFromGenericDrawer()" >
//       </app-drawer-adicionar-cliente>

//     <ng-template #formTemplate>
//       <form-default #clienteFormRef [props]="formProps"></form-default>
//     </ng-template>

//     <ng-template #drawerFooterButtons>
//       <button pButton type="button" label="Cancelar" (click)="closeDrawer()" class="p-button-secondary"></button>
//       <button pButton type="button" label="Salvar" (click)="onClickSalvarFromParent()"></button>
//     </ng-template>
//   `,
//   styles: []
// })