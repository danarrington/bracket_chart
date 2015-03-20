$(document).ready(function() {

  var template = $('#temp').html();
  for(var i=0; i < data.length; i++) {
    data[i]['plus'] = 5*Math.max(data[i]['rank']-data[i]['pick'],0);
    data[i]['minus'] = 5*Math.abs(Math.min(data[i]['rank']-data[i]['pick'],0));
    var rend = Mustache.render(template, data[i]);
    $('#chart').append(rend);
  }


  var lastName = 'AJ';
  for(var i=0; i < sortedData.length; i++) {
    sortedData[i]['plus'] = 5*Math.max(sortedData[i]['rank']-sortedData[i]['pick'],0);
    sortedData[i]['minus'] = 5*Math.abs(Math.min(sortedData[i]['rank']-sortedData[i]['pick'],0));
    if (sortedData[i]['name'] != lastName) {
      lastName = sortedData[i]['name'];
      $('#sorted-chart').append('<div class="spacer"></div>');
    }
    var rend = Mustache.render(template, sortedData[i]);
    $('#sorted-chart').append(rend);
  }


  $('#btn-person').click(function() {
    $('#sorted-chart').show();
    $('#chart').hide();
    $('#btn-person').addClass('active');
    $('#btn-rank').removeClass('active');
  });    
  
  $('#btn-rank').click(function() {
    $('#sorted-chart').hide();
    $('#chart').show();
    $('#btn-rank').addClass('active');
    $('#btn-person').removeClass('active');
  });    
});


  var data = 
[
    {
        "pick": "1",
        "name": "AJ",
        "team": "Kentucky",
        "rank": "1"
    },
    {
        "pick": "2",
        "name": "Matt ",
        "team": "Wisconsin",
        "rank": "4"
    },
    {
        "pick": "3",
        "name": "Eric\n",
        "team": "Duke",
        "rank": "3"
    },
    {
        "pick": "4",
        "name": "Dan",
        "team": "Villanova",
        "rank": "2"
    },
    {
        "pick": "5",
        "name": "Collin",
        "team": "Arizona",
        "rank": "6"
    },
    {
        "pick": "6",
        "name": "Josh",
        "team": "Virginia ",
        "rank": "5"
    },
    {
        "pick": "7",
        "name": "Pete",
        "team": "Gonzaga ",
        "rank": "7"
    },
    {
        "pick": "8",
        "name": "Bob",
        "team": "Iowa state ",
        "rank": "9"
    },
    {
        "pick": "9",
        "name": "Bob",
        "team": "Norte dame ",
        "rank": "12"
    },
    {
        "pick": "10",
        "name": "Pete",
        "team": "Maryland",
        "rank": "14"
    },
    {
        "pick": "11",
        "name": "Josh",
        "team": "Kansas",
        "rank": "8"
    },
    {
        "pick": "12",
        "name": "Collin",
        "team": "Northern Iowa",
        "rank": "20"
    },
    {
        "pick": "13",
        "name": "Dan",
        "team": "North Carolina",
        "rank": "13"
    },
    {
        "pick": "14",
        "name": "Eric",
        "team": "Louisville",
        "rank": "15"
    },
    {
        "pick": "15",
        "name": "Matt ",
        "team": "Oklahoma",
        "rank": "11"
    },
    {
        "pick": "16",
        "name": "AJ",
        "team": "Arkansas ",
        "rank": "18"
    },
    {
        "pick": "17",
        "name": "AJ",
        "team": "Baylor ",
        "rank": "10"
    },
    {
        "pick": "18",
        "name": "Matt ",
        "team": "Utah ",
        "rank": "17"
    },
    {
        "pick": "19",
        "name": "Eric\n",
        "team": "Wvu",
        "rank": "19"
    },
    {
        "pick": "20",
        "name": "Dan",
        "team": "Wichita State",
        "rank": "26"
    },
    {
        "pick": "21",
        "name": "Collin",
        "team": "Michigan State",
        "rank": "25"
    },
    {
        "pick": "22",
        "name": "Josh",
        "team": "SMU",
        "rank": "21"
    },
    {
        "pick": "23",
        "name": "Pete",
        "team": "Butler",
        "rank": "23"
    },
    {
        "pick": "24",
        "name": "Bob",
        "team": "Georgetown",
        "rank": "16"
    },
    {
        "pick": "25",
        "name": "Bob",
        "team": "Iowa ",
        "rank": "27"
    },
    {
        "pick": "26",
        "name": "Pete",
        "team": "San Diego State",
        "rank": "32"
    },
    {
        "pick": "27",
        "name": "Josh",
        "team": "Providence",
        "rank": "22"
    },
    {
        "pick": "28",
        "name": "Collin",
        "team": "NC State",
        "rank": "31"
    },
    {
        "pick": "29",
        "name": "Dan",
        "team": "Xavier",
        "rank": "24"
    },
    {
        "pick": "30",
        "name": "Eric",
        "team": "Cincy",
        "rank": "29"
    },
    {
        "pick": "31",
        "name": "Matt ",
        "team": "St. Johns",
        "rank": "33"
    },
    {
        "pick": "32",
        "name": "AJ",
        "team": "Oregon",
        "rank": "30"
    },
    {
        "pick": "33",
        "name": "AJ",
        "team": "Davidson",
        "rank": "38"
    },
    {
        "pick": "34",
        "name": "Matt ",
        "team": "Texas",
        "rank": "41"
    },
    {
        "pick": "35",
        "name": "Eric\n",
        "team": "UCLA",
        "rank": "42"
    },
    {
        "pick": "36",
        "name": "Dan",
        "team": "Ohio State",
        "rank": "39"
    },
    {
        "pick": "37",
        "name": "Collin",
        "team": "Eastern Washington",
        "rank": "51"
    },
    {
        "pick": "38",
        "name": "Josh",
        "team": "VCU",
        "rank": "28"
    },
    {
        "pick": "39",
        "name": "Pete",
        "team": "Buffalo",
        "rank": "46"
    },
    {
        "pick": "40",
        "name": "Bob",
        "team": "Boise State/Dayton ",
        "rank": "44"
    },
    {
        "pick": "41",
        "name": "Bob",
        "team": "Ole Miss/ BYU",
        "rank": "43"
    },
    {
        "pick": "42",
        "name": "Pete",
        "team": "LSU ",
        "rank": "35"
    },
    {
        "pick": "43",
        "name": "Josh",
        "team": "Purdue ",
        "rank": "36"
    },
    {
        "pick": "44",
        "name": "Collin",
        "team": "Wofford",
        "rank": "47"
    },
    {
        "pick": "45",
        "name": "Dan",
        "team": "Stephen F. Austin",
        "rank": "48"
    },
    {
        "pick": "46",
        "name": "Eric",
        "team": "Ok st",
        "rank": "34"
    },
    {
        "pick": "47",
        "name": "Matt ",
        "team": "Wyoming",
        "rank": "45"
    },
    {
        "pick": "48",
        "name": "AJ",
        "team": "Indiana",
        "rank": "37"
    },
    {
        "pick": "49",
        "name": "AJ",
        "team": "Georgia",
        "rank": "40"
    },
    {
        "pick": "50",
        "name": "Matt ",
        "team": "Harvard",
        "rank": "50"
    },
    {
        "pick": "51",
        "name": "Eric\n",
        "team": "Georgia State",
        "rank": "53"
    },
    {
        "pick": "52",
        "name": "Dan",
        "team": "Valparaiso",
        "rank": "49"
    },
    {
        "pick": "53",
        "name": "Collin",
        "team": "Albany",
        "rank": "56"
    },
    {
        "pick": "54",
        "name": "Josh",
        "team": "New Mexico State ",
        "rank": "57"
    },
    {
        "pick": "55",
        "name": "Pete",
        "team": "UC Irvine",
        "rank": "52"
    },
    {
        "pick": "56",
        "name": "Bob",
        "team": "Uab",
        "rank": "55"
    },
    {
        "pick": "57",
        "name": "Bob",
        "team": "Belmont",
        "rank": "58"
    },
    {
        "pick": "58",
        "name": "Pete",
        "team": "Northeastern",
        "rank": "54"
    },
    {
        "pick": "59",
        "name": "Josh",
        "team": "Ndnu",
        "rank": "60"
    },
    {
        "pick": "60",
        "name": "Collin",
        "team": "Texas southern ",
        "rank": "59"
    },
    {
        "pick": "61",
        "name": "Dan",
        "team": "63. Lafayette",
        "rank": "61"
    },
    {
        "pick": "62",
        "name": "Eric",
        "team": "64. Coastal Carolina",
        "rank": "62"
    },
    {
        "pick": "63",
        "name": "Matt ",
        "team": "Robert morris",
        "rank": "63"
    },
    {
        "pick": "64",
        "name": "AJ",
        "team": "Hampton",
        "rank": "64"
    }
];

var sortedData = [
    {
        "pick": "1",
        "name": "AJ",
        "team": "Kentucky",
        "rank": "1"
    },
    {
        "pick": "16",
        "name": "AJ",
        "team": "Arkansas ",
        "rank": "18"
    },
    {
        "pick": "17",
        "name": "AJ",
        "team": "Baylor ",
        "rank": "10"
    },
    {
        "pick": "32",
        "name": "AJ",
        "team": "Oregon",
        "rank": "30"
    },
    {
        "pick": "33",
        "name": "AJ",
        "team": "Davidson",
        "rank": "38"
    },
    {
        "pick": "48",
        "name": "AJ",
        "team": "Indiana",
        "rank": "37"
    },
    {
        "pick": "49",
        "name": "AJ",
        "team": "Georgia",
        "rank": "40"
    },
    {
        "pick": "64",
        "name": "AJ",
        "team": "Hampton",
        "rank": "64"
    },
    {
        "pick": "8",
        "name": "Bob",
        "team": "Iowa state ",
        "rank": "9"
    },
    {
        "pick": "9",
        "name": "Bob",
        "team": "Norte dame ",
        "rank": "12"
    },
    {
        "pick": "24",
        "name": "Bob",
        "team": "Georgetown",
        "rank": "16"
    },
    {
        "pick": "25",
        "name": "Bob",
        "team": "Iowa ",
        "rank": "27"
    },
    {
        "pick": "40",
        "name": "Bob",
        "team": "Boise State/Dayton ",
        "rank": "44"
    },
    {
        "pick": "41",
        "name": "Bob",
        "team": "Ole Miss/ BYU",
        "rank": "43"
    },
    {
        "pick": "56",
        "name": "Bob",
        "team": "Uab",
        "rank": "55"
    },
    {
        "pick": "57",
        "name": "Bob",
        "team": "Belmont",
        "rank": "58"
    },
    {
        "pick": "5",
        "name": "Collin",
        "team": "Arizona",
        "rank": "6"
    },
    {
        "pick": "12",
        "name": "Collin",
        "team": "Northern Iowa",
        "rank": "20"
    },
    {
        "pick": "21",
        "name": "Collin",
        "team": "Michigan State",
        "rank": "25"
    },
    {
        "pick": "28",
        "name": "Collin",
        "team": "NC State",
        "rank": "31"
    },
    {
        "pick": "37",
        "name": "Collin",
        "team": "Eastern Washington",
        "rank": "51"
    },
    {
        "pick": "44",
        "name": "Collin",
        "team": "Wofford",
        "rank": "47"
    },
    {
        "pick": "53",
        "name": "Collin",
        "team": "Albany",
        "rank": "56"
    },
    {
        "pick": "60",
        "name": "Collin",
        "team": "Texas southern ",
        "rank": "59"
    },
    {
        "pick": "4",
        "name": "Dan",
        "team": "Villanova",
        "rank": "2"
    },
    {
        "pick": "13",
        "name": "Dan",
        "team": "North Carolina",
        "rank": "13"
    },
    {
        "pick": "20",
        "name": "Dan",
        "team": "Wichita State",
        "rank": "26"
    },
    {
        "pick": "29",
        "name": "Dan",
        "team": "Xavier",
        "rank": "24"
    },
    {
        "pick": "36",
        "name": "Dan",
        "team": "Ohio State",
        "rank": "39"
    },
    {
        "pick": "45",
        "name": "Dan",
        "team": "Stephen F. Austin",
        "rank": "48"
    },
    {
        "pick": "52",
        "name": "Dan",
        "team": "Valparaiso",
        "rank": "49"
    },
    {
        "pick": "61",
        "name": "Dan",
        "team": "63. Lafayette",
        "rank": "61"
    },
    {
        "pick": "14",
        "name": "Eric",
        "team": "Louisville",
        "rank": "15"
    },
    {
        "pick": "30",
        "name": "Eric",
        "team": "Cincy",
        "rank": "29"
    },
    {
        "pick": "46",
        "name": "Eric",
        "team": "Ok st",
        "rank": "34"
    },
    {
        "pick": "62",
        "name": "Eric",
        "team": "64. Coastal Carolina",
        "rank": "62"
    },
    {
        "pick": "3",
        "name": "Eric\n",
        "team": "Duke",
        "rank": "3"
    },
    {
        "pick": "19",
        "name": "Eric\n",
        "team": "Wvu",
        "rank": "19"
    },
    {
        "pick": "35",
        "name": "Eric\n",
        "team": "UCLA",
        "rank": "42"
    },
    {
        "pick": "51",
        "name": "Eric\n",
        "team": "Georgia State",
        "rank": "53"
    },
    {
        "pick": "6",
        "name": "Josh",
        "team": "Virginia ",
        "rank": "5"
    },
    {
        "pick": "11",
        "name": "Josh",
        "team": "Kansas",
        "rank": "8"
    },
    {
        "pick": "22",
        "name": "Josh",
        "team": "SMU",
        "rank": "21"
    },
    {
        "pick": "27",
        "name": "Josh",
        "team": "Providence",
        "rank": "22"
    },
    {
        "pick": "38",
        "name": "Josh",
        "team": "VCU",
        "rank": "28"
    },
    {
        "pick": "43",
        "name": "Josh",
        "team": "Purdue ",
        "rank": "36"
    },
    {
        "pick": "54",
        "name": "Josh",
        "team": "New Mexico State ",
        "rank": "57"
    },
    {
        "pick": "59",
        "name": "Josh",
        "team": "Ndnu",
        "rank": "60"
    },
    {
        "pick": "2",
        "name": "Matt ",
        "team": "Wisconsin",
        "rank": "4"
    },
    {
        "pick": "15",
        "name": "Matt ",
        "team": "Oklahoma",
        "rank": "11"
    },
    {
        "pick": "18",
        "name": "Matt ",
        "team": "Utah ",
        "rank": "17"
    },
    {
        "pick": "31",
        "name": "Matt ",
        "team": "St. Johns",
        "rank": "33"
    },
    {
        "pick": "34",
        "name": "Matt ",
        "team": "Texas",
        "rank": "41"
    },
    {
        "pick": "47",
        "name": "Matt ",
        "team": "Wyoming",
        "rank": "45"
    },
    {
        "pick": "50",
        "name": "Matt ",
        "team": "Harvard",
        "rank": "50"
    },
    {
        "pick": "63",
        "name": "Matt ",
        "team": "Robert morris",
        "rank": "63"
    },
    {
        "pick": "7",
        "name": "Pete",
        "team": "Gonzaga ",
        "rank": "7"
    },
    {
        "pick": "10",
        "name": "Pete",
        "team": "Maryland",
        "rank": "14"
    },
    {
        "pick": "23",
        "name": "Pete",
        "team": "Butler",
        "rank": "23"
    },
    {
        "pick": "26",
        "name": "Pete",
        "team": "San Diego State",
        "rank": "32"
    },
    {
        "pick": "39",
        "name": "Pete",
        "team": "Buffalo",
        "rank": "46"
    },
    {
        "pick": "42",
        "name": "Pete",
        "team": "LSU ",
        "rank": "35"
    },
    {
        "pick": "55",
        "name": "Pete",
        "team": "UC Irvine",
        "rank": "52"
    },
    {
        "pick": "58",
        "name": "Pete",
        "team": "Northeastern",
        "rank": "54"
    }
];
