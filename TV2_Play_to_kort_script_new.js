console.clear()

// JavaScript Document
var log = console.log;
var searchEventInHour = 24;
var searchEventInHourMillSec = (60 * 60 * searchEventInHour) * 1000

const db = new awxDb()

var fullDate = new Date();

function getBannerConfig() {
    return window.BANNER_JSON ? window.BANNER_JSON : window.BANNER_CONFIG
}

function getBannerConfig() {
    return window.BANNER_JSON ? window.BANNER_JSON : window.BANNER_CONFIG
}

var bannerHeight = banner.offsetHeight;
var bannerWidth = banner.offsetWidth;
log("Bredde: " + bannerWidth + " | " + "Høyde: " + bannerHeight)

function getDatabase(){

  	if (!getBannerConfig()['database']) {
      	return console.error('No database setup in banner.json')
    }

  	return getBannerConfig()['database'].name
}

function getCampaignId(){

    var findKey = 'campaign_id'

    if (window.IS_FROM_TEMPLATE) {
        findKey = 'template_id'
    }

    if (!getBannerConfig()['database'] || !getBannerConfig()['database'][findKey]) return window.defaultCampaignId

    return getBannerConfig()['database'][findKey]
}

if (typeof window.CustomEvent !== "function") {
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}

function parseDate(date, isNoSetTime = false) {
  if (date == "fallback") {
    return false;
  }

  var dateTime = date.split("-");

  if (!dateTime) {
    return false;
  }

  var dateStr = dateTime[0];
  var timeStr = dateTime[1];
  
  var date = dateStr.split(".");
  var dateInstance = new Date();
  
  dateInstance = new Date(`${date[2]}-${date[1]}-${date[0]}T${timeStr}`)
  
  return dateInstance.getTime();
}

function getNextDate(rows) {
  var currentAwx = new awxDate();
  var currentHour = currentAwx.getCurrent().getHours();
  var currentMin = currentAwx.getCurrent().getMinutes();
  var current = currentAwx.getCurrent().getTime();

  var found = false;
  var currentWeekday = new Date(current).getDay();
  var setTime = [];
  
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var rowDate = row.timestamp;
		
    if (rowDate <= current) {
        found = row;
    }
  }
 
  return rows[0];
}

function successCallback(res) {
  var validateDateRows = [];
  var fallbackRow = false;

  if (!res.data) {
    return;
  }
  
  for (var i = 0; i < res.data.length; i++) {
    var row = res.data[i];
    var dateStr = res.data[i].date;

    if ("fallback".indexOf(row.date) > -1) {
      fallbackRow = row;
    }

    row.timestamp = parseDate(row.date);

    if (row.timestamp) {
      validateDateRows.push(row);
    }
  }
 
  // sort by date asc
  validateDateRows = validateDateRows.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });
  
  let today = new awxDate();
  today = today.getCurrent();
  
  let todayTime = today.getTime();
  
  const filteredRows = validateDateRows.filter((res)=>{
      return new Date(res.timestamp).getTime() >= todayTime && new Date(res.timestamp).getTime() <= (todayTime + searchEventInHourMillSec)
  })

  var nextEntry = getNextDate(filteredRows);

  if (nextEntry) {
    var successEvt = new CustomEvent("found-next", {
      detail: nextEntry,
    });

    window.dispatchEvent(successEvt);
  } else {
    var failEvt = new CustomEvent("notfound", {
      detail: fallbackRow,
    });
    window.dispatchEvent(failEvt);
  }
}

function setGratis(gratisbudskap) {
	if (gratisbudskap !== "") {
    document.getElementById("gratisbudskap").style.display = "block";
	document.getElementById("gratisText").innerHTML = gratisbudskap;
    document.getElementById("gratisText").classList.add("gratis");
    gratisMode();
    log("Gratis budskap definert: " + gratisbudskap);
  }	else {
    normalMode();
  	log("Gratis budskap ikke definert!");
	}
}

function setTxt(text_on, text_off, tittel, tagline, tittel_exclude, tagline_exclude) {

  	let bannerSize = bannerWidth + "x" + bannerHeight;
	let tittelData = tittel_exclude.split(',');
  	let tittelMatch = tittelData.includes(bannerSize);
	let taglineData = tagline_exclude.split(',');
  	let taglineMatch = taglineData.includes(bannerSize);
	let tittelRemove = tittel.replaceAll('<br>', ' ');      
	let taglineRemove = tagline.replaceAll('<br>', ' ');
  	log("Data: " + bannerSize + " | " + tittelData + " | " + tittelMatch + " | " + taglineData + " | " + taglineMatch + " | " + tittelRemove + " | " + taglineRemove);

  	if (bannerSize === "360x115"){
		  	log("banner er 360x115");
			let customTagline = taglineRemove.replace('på ', 'på<br>');
		  	let newTagline = customTagline.replace('Premiere', 'Sesongpremiere ');
		    document.getElementById("title").style.display = "none";
		    document.getElementById("tagline").innerHTML = newTagline;
    	} else {
          document.getElementById("title").innerHTML = tittel;
          
           if (taglineMatch === true){
              log("taglineMatch = TRUE");
              document.getElementById("tagline").innerHTML = taglineRemove;
          } else {
              document.getElementById("tagline").innerHTML = tagline;
              log("taglineMatch = FALSE");
          }
        }
      document.getElementById("btn_on").innerHTML = text_on;
      document.getElementById("btn_off").innerHTML = text_off;
//      document.getElementById("title").innerHTML = tittel;
//      document.getElementById("tagline").innerHTML = tagline;
//	  log("Text button: btn_off: " + text_off + " | btn_on: " + text_on + " | tagline_exclude: " + tagline_exclude + " | tittel_exclude: " + tittel_exclude);
}

window.addEventListener("style-rendered", function (e) {
  // Load data
  db.find({
    campaignId: getCampaignId(),
    dbName: getDatabase(),
    fields: ["date", "text_on", "text_off", "tittel", "tagline", "tittel_exclude", "tagline_exclude", "gratisbudskap"],
    sort: "date",
    direction: "asc",
    success: function (res) {
      successCallback(res);
    },
    fail: function (err) {
      log(err);
    },
  });
})

window.addEventListener("found-next", function (e) {
  // If found entry
  var entry = e.detail;
  log("found-entry");
  setGratis(entry.gratisbudskap);
  setTxt(entry.text_on, entry.text_off, entry.tittel, entry.tagline, entry.tittel_exclude, entry.tagline_exclude);
  document.querySelector('#budskap').classList.remove('transparent')
  window.alreadyRender = true
});

// If not found entry
window.addEventListener("notfound", function (e) {
  var entry = e.detail;
  log("not-found-entry");
  setGratis(entry.gratisbudskap);
  document.querySelector('#budskap').classList.remove('transparent')
  setTxt(entry.text_on, entry.text_off, entry.tittel, entry.tagline, entry.tittel_exclude, entry.tagline_exclude);
});
