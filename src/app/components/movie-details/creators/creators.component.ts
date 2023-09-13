import { Component, Input } from '@angular/core';
import { ProductionCompany } from 'src/app/models/singleMovie';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
})
export class CreatorsComponent {
  @Input() creators: ProductionCompany[] | undefined;
}
