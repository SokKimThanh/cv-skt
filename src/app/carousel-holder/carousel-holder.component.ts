import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WorkExperienceService } from '../services/work-experience.service';
import { WorkExperience } from '../shared/workexperience';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  slidesStore: WorkExperience[] | undefined;
  constructor(private workExperienceService: WorkExperienceService) {
  }
  ngOnInit(): void {
    this.workExperienceService.getWorkExperiences().subscribe(data => {
      data.map(experience => this.slidesStore = experience.workexperience);
    });
  }
}
