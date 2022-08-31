import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CreatorComponent } from "./creator.component";
import { SurveyAngularModule } from "survey-angular-ui";
import { DesignerTabComponent } from "./tabs/designer.component";
import { SvgBundleComponent } from "./svg-bundle.component";
import { TabbedMenuItemComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu-item.component";
import { TabbledMenuComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu.component";
import { TabbedMenuItemWrapperComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu-item-wrapper.component";
import { SidebarComponent } from "./side-bar/side-bar.component";
import { SidebarTabComponent } from "./side-bar/side-bar-tab.component";
import { ObjectSelectorComponent } from "./property-panel/object-selector.component";
import { PropertyGridComponent } from "./property-panel/property-grid.component";

@NgModule({
  declarations: [CreatorComponent, DesignerTabComponent, SvgBundleComponent, TabbledMenuComponent, TabbedMenuItemComponent, TabbedMenuItemWrapperComponent, SidebarComponent, SidebarTabComponent, ObjectSelectorComponent, PropertyGridComponent],
  imports: [
    CommonModule, FormsModule, SurveyAngularModule
  ],
  exports: [
    CreatorComponent
  ],
  providers: [],
})
export class SurveyCreatorAngularModule { }
