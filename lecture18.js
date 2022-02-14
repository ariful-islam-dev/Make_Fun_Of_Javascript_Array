const contacts = [
  {
    name: "Rana Gockeler",
    phone: "378-259-4205",
    email: "rgockeler0@weebly.com",
  },
  {
    name: "Galen Hanford",
    phone: "378-428-1993",
    email: "ghanford1@com.com",
  },
  {
    name: "Sanders Cronshaw",
    phone: "368-913-3494",
    email: "scronshaw2@blogspot.com",
  },
  {
    name: "Emmanuel Mattson",
    phone: "369-587-1114",
    email: "emattson3@reddit.com",
  },
  {
    name: "Dolf Duffer",
    phone: "402-312-1666",
    email: "dduffer4@cisco.com",
  },
  {
    name: "Trev Meece",
    phone: "523-639-1306",
    email: "tmeece5@tinyurl.com",
  },
  {
    name: "Phillis Loughan",
    phone: "368-161-1157",
    email: "ploughan6@webs.com",
  },
  {
    name: "Ashley Wace",
    phone: "562-734-8387",
    email: "awace7@php.net",
  },
  {
    name: "Francklin Siward",
    phone: "330-641-4269",
    email: "fsiward8@prlog.org",
  },
  {
    name: "Aldous Lomath",
    phone: "792-466-7273",
    email: "alomath9@salon.com",
  },
  {
    name: "Prisca Kimber",
    phone: "820-587-1168",
    email: "pkimbera@list-manage.com",
  },
  {
    name: "Coralie Trevon",
    phone: "502-577-7990",
    email: "ctrevonb@canalblog.com",
  },
  {
    name: "Milton Latchmore",
    phone: "318-923-3079",
    email: "mlatchmorec@imageshack.us",
  },
  {
    name: "Woody Colquyte",
    phone: "374-796-4641",
    email: "wcolquyted@ameblo.jp",
  },
  {
    name: "Donia Ashingden",
    phone: "129-902-2582",
    email: "dashingdene@examiner.com",
  },
  {
    name: "Barny Weyland",
    phone: "329-485-7344",
    email: "bweylandf@shinystat.com",
  },
  {
    name: "Halie Rait",
    phone: "730-149-1429",
    email: "hraitg@instagram.com",
  },
  {
    name: "Gerome Johann",
    phone: "839-331-5993",
    email: "gjohannh@t-online.de",
  },
  {
    name: "Quinta Gounot",
    phone: "261-171-5512",
    email: "qgounoti@sohu.com",
  },
  {
    name: "Mona Suffield",
    phone: "957-659-0900",
    email: "msuffieldj@unc.edu",
  },
  {
    name: "Currey Bourcq",
    phone: "383-336-6944",
    email: "cbourcqk@phpbb.com",
  },
  {
    name: "Honoria Knevett",
    phone: "699-995-9737",
    email: "hknevettl@elegantthemes.com",
  },
  {
    name: "Norry McAvaddy",
    phone: "155-796-2352",
    email: "nmcavaddym@un.org",
  },
  {
    name: "Roselia Beedom",
    phone: "430-287-3187",
    email: "rbeedomn@yolasite.com",
  },
  {
    name: "Dill Gosnold",
    phone: "779-875-0739",
    email: "dgosnoldo@nsw.gov.au",
  },
  {
    name: "Ondrea Gun",
    phone: "244-255-5776",
    email: "ogunp@typepad.com",
  },
  {
    name: "Antonia Gibard",
    phone: "140-296-8888",
    email: "agibardq@digg.com",
  },
  {
    name: "Vidovik Merfin",
    phone: "826-511-4329",
    email: "vmerfinr@squidoo.com",
  },
  {
    name: "Hy Feyer",
    phone: "114-906-7885",
    email: "hfeyers@ebay.com",
  },
  {
    name: "Crichton Tropman",
    phone: "538-927-0759",
    email: "ctropmant@google.es",
  },
  {
    name: "Rakel Mateescu",
    phone: "923-748-2452",
    email: "rmateescuu@ucoz.ru",
  },
  {
    name: "Mora Coode",
    phone: "425-242-1471",
    email: "mcoodev@amazon.co.jp",
  },
  {
    name: "Nadya Newlan",
    phone: "272-854-2697",
    email: "nnewlanw@youtu.be",
  },
  {
    name: "Steffi Perotti",
    phone: "429-604-8902",
    email: "sperottix@shinystat.com",
  },
  {
    name: "Cobb Huckell",
    phone: "858-605-8460",
    email: "chuckelly@go.com",
  },
  {
    name: "Inglebert Triggel",
    phone: "550-465-4302",
    email: "itriggelz@shop-pro.jp",
  },
  {
    name: "Angel Machans",
    phone: "799-301-3594",
    email: "amachans10@netlog.com",
  },
  {
    name: "Ellswerth Lutty",
    phone: "427-867-6441",
    email: "elutty11@cloudflare.com",
  },
  {
    name: "Kamillah Shirland",
    phone: "751-490-4855",
    email: "kshirland12@ebay.com",
  },
  {
    name: "Andeee Dyshart",
    phone: "613-968-9274",
    email: "adyshart13@loc.gov",
  },
  {
    name: "Jillayne Rotherforth",
    phone: "176-358-8737",
    email: "jrotherforth14@wix.com",
  },
  {
    name: "Helga Wakeley",
    phone: "231-792-0862",
    email: "hwakeley15@sphinn.com",
  },
  {
    name: "Kirk Bottrill",
    phone: "697-952-0240",
    email: "kbottrill16@live.com",
  },
  {
    name: "Cindy Styles",
    phone: "350-328-3468",
    email: "cstyles17@w3.org",
  },
  {
    name: "Eleanor Mourgue",
    phone: "178-217-9664",
    email: "emourgue18@prnewswire.com",
  },
  {
    name: "Kaycee Dumingos",
    phone: "253-954-5501",
    email: "kdumingos19@lycos.com",
  },
  {
    name: "Maxine Atherton",
    phone: "588-708-3539",
    email: "matherton1a@ucoz.ru",
  },
  {
    name: "Kahlil Dicks",
    phone: "251-833-3223",
    email: "kdicks1b@seattletimes.com",
  },
  {
    name: "Rose Gaytor",
    phone: "382-889-5236",
    email: "rgaytor1c@gnu.org",
  },
  {
    name: "Tiffie Rushbury",
    phone: "124-219-0398",
    email: "trushbury1d@webeden.co.uk",
  },
  {
    name: "Marquita Bradford",
    phone: "655-619-3888",
    email: "mbradford1e@youtu.be",
  },
  {
    name: "Mercy Rentenbeck",
    phone: "552-776-2811",
    email: "mrentenbeck1f@wp.com",
  },
  {
    name: "Karyl Walrond",
    phone: "964-304-7400",
    email: "kwalrond1g@yolasite.com",
  },
  {
    name: "Erica Rodwell",
    phone: "476-722-7098",
    email: "erodwell1h@trellian.com",
  },
  {
    name: "Quinta Balharrie",
    phone: "484-737-0795",
    email: "qbalharrie1i@indiatimes.com",
  },
  {
    name: "Hakim Mignot",
    phone: "602-268-5016",
    email: "hmignot1j@posterous.com",
  },
  {
    name: "Daffi Lindermann",
    phone: "113-699-5856",
    email: "dlindermann1k@usa.gov",
  },
  {
    name: "Quintilla Ivancevic",
    phone: "974-392-7283",
    email: "qivancevic1l@google.co.jp",
  },
  {
    name: "Annmarie Candwell",
    phone: "580-286-0232",
    email: "acandwell1m@craigslist.org",
  },
  {
    name: "Dale Lownds",
    phone: "610-384-8835",
    email: "dlownds1n@phoca.cz",
  },
  {
    name: "Nickie Gerriessen",
    phone: "587-708-7726",
    email: "ngerriessen1o@sfgate.com",
  },
  {
    name: "Even Basini-Gazzi",
    phone: "881-536-3943",
    email: "ebasinigazzi1p@fastcompany.com",
  },
  {
    name: "Phebe Avieson",
    phone: "528-758-3879",
    email: "pavieson1q@skyrock.com",
  },
  {
    name: "Jemmy MacCafferty",
    phone: "571-781-5067",
    email: "jmaccafferty1r@smugmug.com",
  },
  {
    name: "Meier Westell",
    phone: "482-262-7389",
    email: "mwestell1s@mit.edu",
  },
  {
    name: "Maisie Biggs",
    phone: "978-859-9928",
    email: "mbiggs1t@4shared.com",
  },
  {
    name: "Melodee Gallandre",
    phone: "437-664-6890",
    email: "mgallandre1u@addthis.com",
  },
  {
    name: "Helge Cuberley",
    phone: "838-309-2959",
    email: "hcuberley1v@yellowpages.com",
  },
  {
    name: "Warde Leving",
    phone: "504-743-0761",
    email: "wleving1w@quantcast.com",
  },
  {
    name: "Gilli Locock",
    phone: "660-789-8094",
    email: "glocock1x@reverbnation.com",
  },
  {
    name: "Noreen Sprigg",
    phone: "270-440-7570",
    email: "nsprigg1y@scribd.com",
  },
  {
    name: "Annabal Demcik",
    phone: "579-240-7057",
    email: "ademcik1z@youtube.com",
  },
  {
    name: "Jocelyne Androletti",
    phone: "637-116-4176",
    email: "jandroletti20@thetimes.co.uk",
  },
  {
    name: "Maurise Blyde",
    phone: "414-970-4541",
    email: "mblyde21@eepurl.com",
  },
  {
    name: "Cullin Keel",
    phone: "288-144-0066",
    email: "ckeel22@xrea.com",
  },
  {
    name: "Kipper Tomaselli",
    phone: "930-386-1942",
    email: "ktomaselli23@delicious.com",
  },
  {
    name: "Nap Kerfut",
    phone: "219-126-4160",
    email: "nkerfut24@qq.com",
  },
  {
    name: "Alfy Girth",
    phone: "923-804-5999",
    email: "agirth25@storify.com",
  },
  {
    name: "Gaelan Riddich",
    phone: "372-266-8518",
    email: "griddich26@i2i.jp",
  },
  {
    name: "Bayard Grew",
    phone: "756-514-6085",
    email: "bgrew27@exblog.jp",
  },
  {
    name: "Averell Lillford",
    phone: "413-395-5994",
    email: "alillford28@liveinternet.ru",
  },
  {
    name: "Margarete Sondon",
    phone: "306-757-9122",
    email: "msondon29@smugmug.com",
  },
  {
    name: "Bianca Calbreath",
    phone: "377-572-3940",
    email: "bcalbreath2a@foxnews.com",
  },
  {
    name: "Jeannette Blackaby",
    phone: "982-666-9479",
    email: "jblackaby2b@huffingtonpost.com",
  },
  {
    name: "Humphrey Connolly",
    phone: "512-485-9176",
    email: "hconnolly2c@squarespace.com",
  },
  {
    name: "Tonnie Goodrick",
    phone: "480-496-7405",
    email: "tgoodrick2d@stumbleupon.com",
  },
  {
    name: "Boigie Paty",
    phone: "258-744-7123",
    email: "bpaty2e@example.com",
  },
  {
    name: "Stoddard Riccard",
    phone: "730-651-0635",
    email: "sriccard2f@w3.org",
  },
  {
    name: "Shelba Chatten",
    phone: "772-605-3686",
    email: "schatten2g@taobao.com",
  },
  {
    name: "Jaquith Rimer",
    phone: "627-118-0651",
    email: "jrimer2h@bravesites.com",
  },
  {
    name: "Stewart Dunne",
    phone: "830-266-1135",
    email: "sdunne2i@bbc.co.uk",
  },
  {
    name: "Ozzie Billany",
    phone: "848-664-5707",
    email: "obillany2j@amazon.de",
  },
  {
    name: "Cheslie Effaunt",
    phone: "577-446-8741",
    email: "ceffaunt2k@flavors.me",
  },
  {
    name: "Calida Storch",
    phone: "788-126-7608",
    email: "cstorch2l@bloglovin.com",
  },
  {
    name: "Juliette Calltone",
    phone: "258-134-6978",
    email: "jcalltone2m@geocities.com",
  },
  {
    name: "Ariana Doore",
    phone: "321-511-5648",
    email: "adoore2n@t-online.de",
  },
  {
    name: "Con Izakof",
    phone: "315-616-1996",
    email: "cizakof2o@howstuffworks.com",
  },
  {
    name: "Ariella Corington",
    phone: "206-190-5900",
    email: "acorington2p@biblegateway.com",
  },
  {
    name: "Linc Rowntree",
    phone: "677-624-9786",
    email: "lrowntree2q@huffingtonpost.com",
  },
  {
    name: "Arch Phythian",
    phone: "149-952-7558",
    email: "aphythian2r@ameblo.jp",
  },
];


const contactsSort = contacts.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});


const group = contactsSort.reduce((acc, cur) => {

  let groupName = cur.name.charAt(0).toUpperCase();
 

  if (acc[groupName]) {
    acc[groupName].push(cur);
  } else {
    acc[groupName] = [cur];
  }
  return acc
}, {});


const displayList = group =>{
    console.log('Display Contact Information');
    console.log('----------------------------');

    const keys = Object.keys(group);
    keys.forEach(key=>{
        console.log(`Group: ${key}`);
        console.table(group[key]);
    })
}
displayList(group)

// console.log(group);
