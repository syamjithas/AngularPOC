import { Component, OnInit } from '@angular/core';
 
declare var Webcam :any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Webcam.set({
      width: 320,
      height: 240,
      image_format: 'jpeg',
      jpeg_quality: 90
    })
    Webcam.attach( '#my_camera' );
  }
  take_snapshot() {

    // take snapshot and get image data
    Webcam.snap(function (data_uri) {
      // display results in page
      document.getElementById('results').innerHTML =
        '<img src="' + data_uri + '"/>';
    });
  }
}
