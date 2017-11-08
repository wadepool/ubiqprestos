const request = require('request');
const chalk = require('chalk');

// YOU CAN ADD MORE SIZES HERE IF ON THE MAIN WEBPAGE THEY HAVE MORE sizes
// OUTSIDE OF WHATS HERE...IF YOU WANT TO TARGET 2/3 SIZES, JUST REMOVE SIZES
// YOU DONT WANT TO GO FOR :OK_HAND: :B:
let sizes = ['8', '9', '10', '11', '12'];

/**
 * CURRENT LINKS IT POSTS DETAILS TO
 * - Current shoe available
 * - presto, am90
 */

// CHANGE ubiqUrl TO THE SNEAKER YOU ARE SIGNING UP FOR
// -presto, am90
let ubiqUrl = 'am90';

// ADD AS MANY EMAILS AS YOU'D LIKE BELOW
let email = ["EMAIL1", "EMAIL2", "EMAIL3"], //ETC ETC
  name = ["FIRST", "LAST"],
  city = "CITY",
  state = "NY",
  pickup = "UBIQ Philadelphia", // change 'Philadelphia' to 'Georgetown' if you dont want Pilly location
  zip = "10012",
  phone = "2129667799",
  dob = "04/20/1900",
  igName = ""


for(var i = 0; i < email.length; i++) {
  var size = sizes[Math.floor(Math.random()*sizes.length)];
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
    "vars[shoe_size]": size,
    "vars[birthday]": dob,
    "vars[instagram]": igName,
    "vars[ubiqmerch_teewhite]": "",
    "vars[ubiqmerch_teeorange]": "",
    "vars[ubiqmerch_teeblack]": "",
    "vars[ubiqmerch_teehat]": "",
    "profile_id": "",
    "st_form_num": 0
  }

  request({
    url: `http://link.ubiqlife.com/join/4z2/offwhite-${ubiqUrl}-raffle`,
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
