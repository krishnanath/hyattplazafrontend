import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  loadContent() {
    var job = [
      {
        job_des1:
          "conseteturn diam, kasd vero kasd clita gubergren accusam et stet sea. Sed sit takimata nonumy no et. Stet ipsum et sed sea, sed no consetetur et et lorem sadipscing dolor, sea est at takimata sea sed sanctus magna, consetetur sed  tempor. Erat aliquyam tempor et dolore clita tempor. Sed eirmod magna accusam aliquyam justo sed voluptua. Et justo at sed sanctus erat est. Et sed diam ipsum dolores. Consetetur labore ",
        job_des2:
          "du sanken nicht schon herzen gedanken. Da und der du perlet verschwiegen nebelferne. Du sie dahinten in warum ort deine bist nun, schaust des werden du deinen die deiner gestehe, du helle gar sonder geliebet klingt nicht. Denkst zürnen hab mut wie ort, mein es geliebet deine laue der weiter mit gehofft. Es schon.",
        job_des3:
          "Eos Diam accusam erat diam at stet dolores elitr nonumy. Dolore et et sed gubergren aliquyam, sanctus sit sadipscing ipsum rebum. ipsum nonumy amet diam amet sea gubergren tempor justo justo. Eirmod et ipsum sit eirmod aliquyam sit, est gubergren clita lorem amet nonumy clita. Est accusam voluptua aliquyam et sea et eirmod elitr. Vero tempor sit amet no amet. Nonumy dolore invidunt sed.",
        job_des4:
          "Magna rebum lorem et dolores amet et magna. Takimata sadipscing ut amet labore dolor tempor. Elitr at sed duo et rebum sanctus dolor clita, sea stet amet dolore consetetur eirmod diam ipsum sea dolore. Sed invidunt dolor elitr duo sit vero magna elitr sit, lorem tempor dolor consetetur lorem, rebum dolor sadipscing tempor sadipscing sea at et dolore nonumy, amet et vero dolor dolor dolore gubergren."
      },
      {
        title1: "LOREM IPSUM",
        title2: "LOREM IPSUM",
        title3: "LOREM IPSUM",
        title4: "LOREM IPSUM"
      },
      {
        job_details1:
          "Ut duo justo sea magna takimata, voluptua et consetetur dolores consetetur amet sit amet, nonumy dolor sed nonumy lorem sadipscing et. At diam dolore no ut lorem sit et et, amet sed sea amet amet ut, accusam sea amet magna lorem magna kasd magna. Et sed est et sea sadipscing diam rebum. Labore sed amet. Takimata sit dolores voluptua sit sed dolore dolore dolores, amet eirmod sed sadipscing dolores diam, duo et kasd dolore sed dolor ea ipsum. Tempor rebum sit tempor et magna sadipscing sit kasd sit, elitr consetetur tempor voluptua stet consetetur labore invidunt duo. Et aliquyam lorem et sit. Eos clita ipsum at ipsum, elitr elitr stet.<p>Lorem at rebum at et et ut et et lorem. Eos lorem at ut dolores gubergren justo sadipscing, lorem sed tempor ipsum accusam duo sanctus takimata diam kasd, sit ea amet tempor erat dolor et et, eos diam justo ipsum nonumy diam et elitr.</p> <p> <b> Required Skills: </b> Labore clita rebum diam diam eos et sit Magna stet justo aliquyam.</p> <p> <b>Responsiblities: </b> At ipsum tempor ipsum rebum diam ipsum voluptua et aliquyam, lorem invidunt diam aliquyam tempor sit sit diam diam, dolore sed vero invidunt lorem, et vero diam dolore elitr et sit ipsum dolore.</p> <p> <b>Experience: </b> Nagyon áll nem fáj menekülő gyámoltalan öle kultúra, szégyellem neki kicifrázva",
        job_details2:
          "Ut duo justo sea magna takimata, voluptua et consetetur dolores consetetur amet sit amet, nonumy dolor sed nonumy lorem sadipscing et. At diam dolore no ut lorem sit et et, amet sed sea amet amet ut, accusam sea amet magna lorem magna kasd magna. Et sed est et sea sadipscing diam rebum. Labore sed amet. Takimata sit dolores voluptua sit sed dolore dolore dolores, amet eirmod sed sadipscing dolores diam, duo et kasd dolore sed dolor ea ipsum. Tempor rebum sit tempor et magna sadipscing sit kasd sit, elitr consetetur tempor voluptua stet consetetur labore invidunt duo. Et aliquyam lorem et sit. Eos clita ipsum at ipsum, elitr elitr stet.<p>Lorem at rebum at et et ut et et lorem. Eos lorem at ut dolores gubergren justo sadipscing, lorem sed tempor ipsum accusam duo sanctus takimata diam kasd, sit ea amet tempor erat dolor et et, eos diam justo ipsum nonumy diam et elitr.</p> <p> <b> Required Skills: </b> Labore clita rebum diam diam eos et sit Magna stet justo aliquyam.</p> <p> <b>Responsiblities: </b> At ipsum tempor ipsum rebum diam ipsum voluptua et aliquyam, lorem invidunt diam aliquyam tempor sit sit diam diam, dolore sed vero invidunt lorem, et vero diam dolore elitr et sit ipsum dolore.</p> <p> <b>Experience: </b> Nagyon áll nem fáj menekülő gyámoltalan öle kultúra, szégyellem neki kicifrázva",
        job_details3:
          "Ut duo justo sea magna takimata, voluptua et consetetur dolores consetetur amet sit amet, nonumy dolor sed nonumy lorem sadipscing et. At diam dolore no ut lorem sit et et, amet sed sea amet amet ut, accusam sea amet magna lorem magna kasd magna. Et sed est et sea sadipscing diam rebum. Labore sed amet. Takimata sit dolores voluptua sit sed dolore dolore dolores, amet eirmod sed sadipscing dolores diam, duo et kasd dolore sed dolor ea ipsum. Tempor rebum sit tempor et magna sadipscing sit kasd sit, elitr consetetur tempor voluptua stet consetetur labore invidunt duo. Et aliquyam lorem et sit. Eos clita ipsum at ipsum, elitr elitr stet.<p>Lorem at rebum at et et ut et et lorem. Eos lorem at ut dolores gubergren justo sadipscing, lorem sed tempor ipsum accusam duo sanctus takimata diam kasd, sit ea amet tempor erat dolor et et, eos diam justo ipsum nonumy diam et elitr.</p> <p> <b> Required Skills: </b> Labore clita rebum diam diam eos et sit Magna stet justo aliquyam.</p> <p> <b>Responsiblities: </b> At ipsum tempor ipsum rebum diam ipsum voluptua et aliquyam, lorem invidunt diam aliquyam tempor sit sit diam diam, dolore sed vero invidunt lorem, et vero diam dolore elitr et sit ipsum dolore.</p> <p> <b>Experience: </b> Nagyon áll nem fáj menekülő gyámoltalan öle kultúra, szégyellem neki kicifrázva",
        job_details4:
          "Ut duo justo sea magna takimata, voluptua et consetetur dolores consetetur amet sit amet, nonumy dolor sed nonumy lorem sadipscing et. At diam dolore no ut lorem sit et et, amet sed sea amet amet ut, accusam sea amet magna lorem magna kasd magna. Et sed est et sea sadipscing diam rebum. Labore sed amet. Takimata sit dolores voluptua sit sed dolore dolore dolores, amet eirmod sed sadipscing dolores diam, duo et kasd dolore sed dolor ea ipsum. Tempor rebum sit tempor et magna sadipscing sit kasd sit, elitr consetetur tempor voluptua stet consetetur labore invidunt duo. Et aliquyam lorem et sit. Eos clita ipsum at ipsum, elitr elitr stet.<p>Lorem at rebum at et et ut et et lorem. Eos lorem at ut dolores gubergren justo sadipscing, lorem sed tempor ipsum accusam duo sanctus takimata diam kasd, sit ea amet tempor erat dolor et et, eos diam justo ipsum nonumy diam et elitr.</p> <p> <b> Required Skills: </b> Labore clita rebum diam diam eos et sit Magna stet justo aliquyam.</p> <p> <b>Responsiblities: </b> At ipsum tempor ipsum rebum diam ipsum voluptua et aliquyam, lorem invidunt diam aliquyam tempor sit sit diam diam, dolore sed vero invidunt lorem, et vero diam dolore elitr et sit ipsum dolore.</p> <p> <b>Experience: </b> Nagyon áll nem fáj menekülő gyámoltalan öle kultúra, szégyellem neki kicifrázva"
      }
    ];

    document.getElementById("job_des1").innerHTML =
      "<p>" + job[0].job_des1 + "</p>";

    document.getElementById("job_des2").innerHTML =
      "<p>" + job[0].job_des2 + "</p>";
    document.getElementById("job_des3").innerHTML =
      "<p>" + job[0].job_des3 + "</p>";
    document.getElementById("job_des4").innerHTML =
      "<p>" + job[0].job_des4 + "</p>";
    document.getElementById("title1").innerHTML =
      "<h3>" + job[1].title1 + "</h3>";
    document.getElementById("title2").innerHTML =
      "<h3>" + job[1].title2 + "</h3>";
    document.getElementById("title3").innerHTML =
      "<h3>" + job[1].title3 + "</h3>";
    document.getElementById("title4").innerHTML =
      "<h3>" + job[1].title4 + "</h3>";
    document.getElementById("job_details1").innerHTML =
      "<div>" + job[2].job_details1 + "</div>";
    document.getElementById("job_details2").innerHTML =
      "<div>" + job[2].job_details2 + "</div>";
    document.getElementById("job_details3").innerHTML =
      "<div>" + job[2].job_details3 + "</div>";
    document.getElementById("job_details4").innerHTML =
      "<div>" + job[2].job_details4 + "</div>";
  }


  constructor() { }

  ngOnInit() {
    this.loadContent();
  }

}
