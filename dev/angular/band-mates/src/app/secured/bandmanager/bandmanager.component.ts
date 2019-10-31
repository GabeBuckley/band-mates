import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../common/services/api.service';
import { IBand } from 'src/app/interfaces';

@Component({
  selector: 'app-bandmanager',
  templateUrl: './bandmanager.component.html',
  styleUrls: ['./bandmanager.component.scss']
})
export class BandmanagerComponent implements OnInit {

  menuShown = false;
  selectedBandId = '';
  selectedBand: IBand = null;
  constructor(@Inject(ApiService) private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedBandId = params.get('id');
      this.api.band(this.selectedBandId).subscribe(
        (data: any) => {
          this.selectedBand = data;
          console.log(this.selectedBand);
        }
      );
    });
  }

  toggleMenu() {
    this.menuShown = !this.menuShown;
  }
}
