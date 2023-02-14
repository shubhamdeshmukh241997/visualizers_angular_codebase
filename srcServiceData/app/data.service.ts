import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data = [{"id":1,"first_name":"Boote","last_name":"Widmoor","email":"bwidmoor0@zdnet.com","gender":"Male","examstatus":true},
  {"id":2,"first_name":"Sky","last_name":"Todarini","email":"stodarini1@jigsy.com","gender":"Female","examstatus":true},
  {"id":3,"first_name":"Eada","last_name":"Sivil","email":"esivil2@hhs.gov","gender":"Female","examstatus":false},
  {"id":4,"first_name":"Jolene","last_name":"Abelwhite","email":"jabelwhite3@about.com","gender":"Female","examstatus":true},
  {"id":5,"first_name":"Devonne","last_name":"Baudinet","email":"dbaudinet4@cnet.com","gender":"Female","examstatus":true},
  {"id":6,"first_name":"Sanson","last_name":"Gartrell","email":"sgartrell5@nytimes.com","gender":"Male","examstatus":false},
  {"id":7,"first_name":"Cloe","last_name":"Wardington","email":"cwardington6@phpbb.com","gender":"Female","examstatus":true},
  {"id":8,"first_name":"Ricky","last_name":"Oliphand","email":"roliphand7@bloomberg.com","gender":"Male","examstatus":true},
  {"id":9,"first_name":"Dido","last_name":"Calleja","email":"dcalleja8@nymag.com","gender":"Female","examstatus":true},
  {"id":10,"first_name":"Naoma","last_name":"Delue","email":"ndelue9@pen.io","gender":"Female","examstatus":true},
  {"id":11,"first_name":"Norris","last_name":"Valler","email":"nvallera@ning.com","gender":"Male","examstatus":false},
  {"id":12,"first_name":"Tonnie","last_name":"Duncklee","email":"tdunckleeb@amazon.co.jp","gender":"Male","examstatus":false},
  {"id":13,"first_name":"Lorelei","last_name":"McGookin","email":"lmcgookinc@gravatar.com","gender":"Female","examstatus":false},
  {"id":14,"first_name":"Marianna","last_name":"Vidler","email":"mvidlerd@businessweek.com","gender":"Female","examstatus":true},
  {"id":15,"first_name":"Celle","last_name":"McAree","email":"cmcareee@ihg.com","gender":"Female","examstatus":false},
  {"id":16,"first_name":"Britt","last_name":"Braunlein","email":"bbraunleinf@google.ru","gender":"Female","examstatus":true},
  {"id":17,"first_name":"Dora","last_name":"Bruce","email":"dbruceg@pen.io","gender":"Female","examstatus":true},
  {"id":18,"first_name":"Gibbie","last_name":"Cuthbertson","email":"gcuthbertsonh@illinois.edu","gender":"Male","examstatus":false},
  {"id":19,"first_name":"Loreen","last_name":"Lauridsen","email":"llauridseni@netlog.com","gender":"Female","examstatus":false},
  {"id":20,"first_name":"Corabelle","last_name":"Poundsford","email":"cpoundsfordj@deliciousdays.com","gender":"Female","examstatus":false},
  {"id":21,"first_name":"Ogdon","last_name":"Pitkins","email":"opitkinsk@ftc.gov","gender":"Male","examstatus":true},
  {"id":22,"first_name":"Elwood","last_name":"Phizackarley","email":"ephizackarleyl@mac.com","gender":"Male","examstatus":false},
  {"id":23,"first_name":"Clarabelle","last_name":"Dreigher","email":"cdreigherm@uiuc.edu","gender":"Female","examstatus":true},
  {"id":24,"first_name":"Hali","last_name":"Petyakov","email":"hpetyakovn@blogtalkradio.com","gender":"Female","examstatus":false},
  {"id":25,"first_name":"Dean","last_name":"Schowenburg","email":"dschowenburgo@sphinn.com","gender":"Male","examstatus":true},
  {"id":26,"first_name":"Conni","last_name":"Potapczuk","email":"cpotapczukp@smugmug.com","gender":"Female","examstatus":true},
  {"id":27,"first_name":"Dalia","last_name":"Howcroft","email":"dhowcroftq@walmart.com","gender":"Female","examstatus":false},
  {"id":28,"first_name":"Chelsey","last_name":"Pinkie","email":"cpinkier@hugedomains.com","gender":"Female","examstatus":false},
  {"id":29,"first_name":"Bradly","last_name":"Rawdales","email":"brawdaless@java.com","gender":"Male","examstatus":true},
  {"id":30,"first_name":"Lorain","last_name":"Paskerful","email":"lpaskerfult@netvibes.com","gender":"Female","examstatus":false},
  {"id":31,"first_name":"Ranna","last_name":"Chown","email":"rchownu@auda.org.au","gender":"Female","examstatus":false},
  {"id":32,"first_name":"Jennilee","last_name":"Martyns","email":"jmartynsv@youtu.be","gender":"Female","examstatus":false},
  {"id":33,"first_name":"Regine","last_name":"Fareweather","email":"rfareweatherw@youtube.com","gender":"Female","examstatus":true},
  {"id":34,"first_name":"Bailey","last_name":"Clipston","email":"bclipstonx@youtube.com","gender":"Female","examstatus":false},
  {"id":35,"first_name":"Brittne","last_name":"Dutt","email":"bdutty@free.fr","gender":"Female","examstatus":true},
  {"id":36,"first_name":"Rainer","last_name":"de la Tremoille","email":"rdelatremoillez@elpais.com","gender":"Male","examstatus":true},
  {"id":37,"first_name":"Francklyn","last_name":"Blazdell","email":"fblazdell10@istockphoto.com","gender":"Male","examstatus":false},
  {"id":38,"first_name":"Charo","last_name":"Ladley","email":"cladley11@cdbaby.com","gender":"Female","examstatus":true},
  {"id":39,"first_name":"Lezlie","last_name":"Sherebrook","email":"lsherebrook12@ycombinator.com","gender":"Female","examstatus":false},
  {"id":40,"first_name":"Eulalie","last_name":"Robb","email":"erobb13@sciencedaily.com","gender":"Female","examstatus":true},
  {"id":41,"first_name":"Solly","last_name":"Jerram","email":"sjerram14@networkadvertising.org","gender":"Male","examstatus":true},
  {"id":42,"first_name":"Cynthea","last_name":"Sirey","email":"csirey15@wisc.edu","gender":"Female","examstatus":false},
  {"id":43,"first_name":"Linet","last_name":"Whettleton","email":"lwhettleton16@livejournal.com","gender":"Female","examstatus":true},
  {"id":44,"first_name":"Estevan","last_name":"Casoni","email":"ecasoni17@imgur.com","gender":"Male","examstatus":true},
  {"id":45,"first_name":"Chickie","last_name":"Kempson","email":"ckempson18@odnoklassniki.ru","gender":"Male","examstatus":false},
  {"id":46,"first_name":"Nicolina","last_name":"Cowill","email":"ncowill19@hatena.ne.jp","gender":"Female","examstatus":true},
  {"id":47,"first_name":"Simonne","last_name":"Sammon","email":"ssammon1a@bravesites.com","gender":"Female","examstatus":false},
  {"id":48,"first_name":"Lolly","last_name":"Collins","email":"lcollins1b@last.fm","gender":"Female","examstatus":false},
  {"id":49,"first_name":"Julietta","last_name":"Minihan","email":"jminihan1c@storify.com","gender":"Female","examstatus":false},
  {"id":50,"first_name":"Adaline","last_name":"Eatherton","email":"aeatherton1d@google.ru","gender":"Female","examstatus":false}]

  getData(){
    return this.data
  }
}
