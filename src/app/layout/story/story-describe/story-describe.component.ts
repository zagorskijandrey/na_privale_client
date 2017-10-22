import {Component, OnInit} from '@angular/core';
import {Story} from '../../../shared/models/story';
import {StoryService} from '../../../shared/services/story.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-story-describe',
  templateUrl: './story-describe.component.html',
  styleUrls: ['./story-describe.component.css']
})
export class StoryDescribeComponent implements OnInit {
  public story:Story;

  constructor(public router: Router, private storyService:StoryService, 
              private route:ActivatedRoute, private errorService:ErrorHandlerService) {
  }

  ngOnInit() {
    this.story = new Story();
    const id = this.route.snapshot.params['id'];
    this.describeStory(id);
  }

  private describeStory(id:number) {
    if (this.router.url.match('/f_stories')) {
      this.storyService.getFishingStory(id).subscribe(story => {
        this.story = story;
        if (this.story.text) {
          this.story.text = '\t' + this.story.text;
          this.story.text = this.story.text.replace(/[\n]/g, '\n\t');
        }
      }, error => {
        this.openDialog(error);
      });
    } else {
      this.storyService.getHunterStory(id).subscribe(story => {
        this.story = story;
        if (this.story.text) {
          this.story.text = '\t' + this.story.text;
          this.story.text = this.story.text.replace(/[\n]/g, '\n\t');
        }
      }, error => {
        this.openDialog(error);
      });
    }
    
    
    
    // this.storyService.getFishingStory(id).subscribe(story => {
    //   this.story = story;
    //   if (this.story.text) {
    //     this.story.text = '\t' + this.story.text;
    //     this.story.text = this.story.text.replace(/[\n]/g, '\n\t');
    //   }
    // }, error => {
    //   this.openDialog(error);
    // });
  }

  private openDialog(error) {
    this.errorService
      .confirm('Ошибка сервиса:', error)
      .subscribe(res => res);
  }
}
