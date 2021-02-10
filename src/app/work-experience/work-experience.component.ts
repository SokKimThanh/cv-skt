import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ConfigslideService } from '../services/configslide.service';
import { WorkExperienceService } from '../services/work-experience.service';
import { WorkExperience } from '../shared/workexperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  customOptions!: OwlOptions;

  slidesStore: WorkExperience[] | undefined;
  constructor(
    private workExperienceService: WorkExperienceService,
    private configslideService: ConfigslideService,
  ) { }
  ngOnInit(): void {
    this.workExperienceService.getWorkExperiences().subscribe(data => {
      data.map(experience => this.slidesStore = experience.workexperience);
    });
    this.configslideService.getOwlOptions().subscribe(options => this.customOptions = options[0]);
  }
}
