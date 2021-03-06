import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { AmexioNavBarComponent } from './../../navigation/navbar/navbar.component';
import { AmexioSideNavComponent } from './../../navigation/sidenav/sidenav.component';
import { DeviceQueryService } from './../../services/device/device.query.service';
import { AmexioHomePageNorthPanelComponent } from './homepage.northpanel.component';
@Component({
  selector: 'amexio-homepage-ce',
  templateUrl: './homepage.component.html',
})
export class AmexioHomePageComponent implements OnInit, AfterContentInit {

  @Input('type') type = '1';
  @ContentChild(AmexioHomePageNorthPanelComponent)
  amexoHomePageNorthpanel: AmexioHomePageNorthPanelComponent;

  @ContentChildren(AmexioSideNavComponent, { descendants: true }) sideNavList: QueryList<AmexioSideNavComponent>;
  sideNavComponents: AmexioSideNavComponent[];

  @ContentChild(AmexioNavBarComponent) amexioNavBarComponent: AmexioNavBarComponent;

  isDisableWestPanel = true;
  isPhone = false;
  westPanelWidth = '0 0 19%';
  constructor(public matchMediaService: DeviceQueryService) {
    if (this.matchMediaService.IsTablet() || this.matchMediaService.IsPhone()) {
      this.isPhone = true;
    }
  }
  ngOnInit() { }
  ngAfterContentInit() {
    this.sideNavComponents = this.sideNavList.toArray();
    if (this.type === '3') {
      this.sideNavComponents[0].isShowOnlyIcon = true;
      this.sideNavComponents[0].width = '5%';
      this.westPanelWidth = '0 0 5%';
      this.sideNavComponents[0].setHomePageType(this.type);
      // NAVBAR
      this.amexioNavBarComponent.isLHSHide = true;
      this.amexioNavBarComponent.lhsWidth = '0 0 5%';
      this.amexioNavBarComponent.onIconClick.subscribe((eventdata: any) =>
        this.northPanelClick(eventdata),
      );
    }
    if (this.amexoHomePageNorthpanel) {
      this.amexoHomePageNorthpanel.type = this.type;
      this.amexoHomePageNorthpanel.nothPanelIconClick.subscribe(
        (eventdata: any) => this.showHideWestPanel(),
      );
    }
    this.amexioNavBarComponent.homepageType = this.type;
  }

  // tslint:disable-next-line:no-identical-functions
  resize(event: any) {
    if (this.matchMediaService.IsTablet() || this.matchMediaService.IsPhone()) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
  }
  showHideWestPanel() {
    this.isDisableWestPanel = !this.isDisableWestPanel;
    if (this.matchMediaService.IsTablet() || this.matchMediaService.IsPhone()) {
      this.isPhone = true;
    }
  }

  // ON NORTH PANEL CLICK
  northPanelClick(isExpand: any) {
    if (isExpand) {
      this.amexioNavBarComponent.isLHSHide = false;
      // SIDE NAV
      this.sideNavComponents[0].isShowOnlyIcon = false;
      this.sideNavComponents[0].width = '19%';
      this.westPanelWidth = '0 0 19%';
    } else {
      this.amexioNavBarComponent.isLHSHide = true;
      // SIDE NAV
      this.sideNavComponents[0].isShowOnlyIcon = true;
      this.sideNavComponents[0].width = '5%';
      this.westPanelWidth = '0 0 5%';
    }
    this.sideNavComponents[0].setHomePageType(this.type);
  }

}
