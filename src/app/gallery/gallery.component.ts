import { Component } from '@angular/core';
import { ImageInfo, imageInfoList } from './imageInfoList';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  readonly imageInfoList: ImageInfo[] = imageInfoList;
}
