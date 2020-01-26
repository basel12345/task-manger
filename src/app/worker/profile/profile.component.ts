import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentRate;
  // location: { latitude: number; longitude: number; mapType: string; zoom: number; marker: { lat: number; lng: number; }; };


  constructor() { }

  ngOnInit() {
    // this.location = {
    //     latitude: -28.68352,
    //     longitude: -147.20785,
    //     mapType: "satelite",
    //     zoom: 5,
    //     marker: {
    //         lat: -28.68352,
    //         lng: -147.20785
    //     }
    // }
}

  description:string = "sdddddddddddddd ddsffff fffffffffffffff fddd ddddddddddddd ddddddddaaaaaaaaaa aaaaaaadaWWDDWQDCCS  S XDSFDSc xfgdgddddd ddddddddd"
}
