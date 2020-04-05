import { Component, OnInit } from '@angular/core';
export interface IMedia {
  title: string;
  src: string;
  type: string;
}
@Component({
  selector: 'app-ai-course',
  templateUrl: './ai-course.component.html',
  styleUrls: ['./ai-course.component.css']
})
export class AiCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  playlist: Array<IMedia> = [
    {
        title: 'INTRODUCTION',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        type: 'video/mp4'
    },
    {
        title: 'REINFORCEMENT LEARNING',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        type: 'video/mp4'
    },
    {
        title: 'DEEP Q-LEARNING IMPLEMENTATION AND VISUALIZATION',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4'
    },
    {
        title: 'DEEP CONVOLUTIONAL Q-LEARNING INTUITION',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4'
    },
  

    {
        title: 'Deep Convolutional Q-Learning Intuition',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4'
    },
    {
        title: 'NEURAL NETWORK',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4'
    },
    

    
    
    
];

currentIndex = 0;
    currentItem: IMedia = this.playlist[ this.currentIndex ];
 
    onClickPlaylistItem(item: IMedia, index) {
        this.currentIndex = index;
        this.currentItem = item;
    }
    nextVideo() {
      this.currentIndex++;

      if (this.currentIndex === this.playlist.length) {
          this.currentIndex = 0;
      }

      this.currentItem = this.playlist[ this.currentIndex ];
  }

}
