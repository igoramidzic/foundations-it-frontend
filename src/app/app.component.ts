import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { $ } from "protractor";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  show: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.removeElementsByClass("calendly-badge-widget");
    }, 0);

    window.onload = function() {
      AOS.init({
        once: true
      });
    };
  }

  removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
}
