/**
 * Created by andrey on 02.12.2017.
 */
import {OnInit, Component} from "@angular/core";
import {FishingPage} from "../../../../shared/models/fishing-page";
import {ActivatedRoute} from "@angular/router";
import {FishingPageService} from "../../../../shared/services/fishing-page.service";

@Component({
  selector: 'app-user-statistics-fishing-page-describer',
  templateUrl: './fishing-page-describer.component.html',
  styleUrls: ['./fishing-page-describer.component.css']
})
export class FishingPageDescriberComponent implements OnInit {

  fishingPage:FishingPage;
  public radarChartData:any;
  public radarOptions:any;
  public radarChartLabels:string[];
  public radarChartType:string;
  public doughnutChartColors:any[];
  private _marksIsLoaded: boolean = false;

  constructor(private route:ActivatedRoute, private fishingPageService:FishingPageService) {
    this.fishingPage = new FishingPage();
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.fishingPageService.getFishingPage(id).subscribe(res => {
      this.fishingPage = Object.assign(new FishingPage, res.page);
      if (res.peace_marks){
        this.setRadarDate(res.peace_marks);
      }
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  
  private setRadarDate(marks: any){
    this.radarChartData = [
      {data: [marks.windRoutMark, marks.atmospherePressureMark,
        marks.moonMark, marks.temperatureMark, marks.windSpeedMark],
        label: 'Прогнозируемая оценка', fontFamily: 'story_font'}
    ];
    this.radarOptions = {
      scale: {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10,
          fontFamily: 'story_font'
        }
      }
    };
    this.radarChartLabels = ['Направление ветра', 'Давление', 'Фаза луны', 'Температура воды', 'Скорость ветра'];
    this.radarChartType = 'radar';
    this.doughnutChartColors = [{
      backgroundColor: ["rgba(100,99,132,0.2)"],
      borderColor: '#607D8B',
      borderWidth: 2
    }];
    this._marksIsLoaded = true;
  }
  
  get marksIsLoaded(){
    return this._marksIsLoaded;
  }
}
