const request = require('request');
const chalk = require('chalk');
/**
 * LINK IT POSTS DETAILS TO
 */


let email = ['enter', 'emails', 'here'],
  name = ["walter", "white"],
  city = "city",
  state = "NY",
  pickup = "UBIQ Philadelphia", // change 'Philadelphia' to 'Georgetown' if you dont want Pilly location
  zip = "00000",
  phone = "1111111111",
  size = ["8", "9", "9.5", "10"],
  dob = "01/01/2000",
  igName = "ubiqlife"
  
let ubiqUrl = 'http://link.ubiqlife.com/join/4z2/offwhite-am90-raffle';
for(var i = 0; i < email.length; i++) {
  let ubiqForm = {
    "email": email[i],
    "vars[raffle_bloodbath]": true,
    "vars[First_Name]": name[0],
    "vars[Last_Name]": name[1],
    "vars[Geolocation_City]": city,
    "vars[Geolocation_State]": state,
    "vars[Store_Pickup]": pickup,
    "vars[Geolocation_Zip]": zip,
    "vars[phone_number]": phone,
    "vars[shoe_size]": size[i],
    "vars[birthday]": dob,
    "vars[instagram]": igName,
    "vars[ubiqmerch_teewhite]": "",
    "vars[ubiqmerch_teeorange]": "",
    "vars[ubiqmerch_teeblack]": "",
    "vars[ubiqmerch_teehat]": "hat",
    "profile_id": "",
    "st_form_num": 0
  }

  request({
    url: ubiqUrl,
    method: 'POST',
    followAllRedirects: true,
    headers: {
      "Host": "link.ubiqlife.com",
      "Accept": "text/html, application/xhtml+xml, */*",
      "Referer": "http://link.ubiqlife.com/join/4z2/offwhite-presto-raffle",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    form: ubiqForm
  }, (err, res, body) => {
    if(err){
      console.log(err);
    } else if (res.request.uri.href.indexOf('thankyou')>-1) {
      console.log(chalk.green('[UBIQ] THANKS! You will receive an email confirmation shortly. Good luck!'));
    } else {
      console.log(chalk.red("[UBIQ Failed] You're missing one of the required fields"));
    }
  });
}