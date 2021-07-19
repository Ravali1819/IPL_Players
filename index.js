search_boxs = () => {
  let input = document.getElementById("search-box").value;
  console.log(input);
  input = input.toLowerCase();
  let x = document.getElementsByClassName("team-card");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "";
    }
  }
};

const playersData = [
  {
    id: 0,
    playerName: "Hardik Pandya",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    description: "All-rounder",
  },
  {
    id: 1,
    playerName: "Virat Kohli",
    from: "RCB",
    price: "8.00 Cr",
    isPlaying: true,
    description: "Batsman",
  },
  {
    id: 2,
    playerName: "Yuvraj Singh",
    from: "MI",
    price: "1.00 Cr",
    isPlaying: false,
    description: "Batsman",
  },
  {
    id: 3,
    playerName: "Chris Morris",
    from: "RR",
    price: "16.25 Cr",
    isPlaying: true,
    description: "All-rounder",
  },
  {
    id: 4,
    playerName: "Glenn Maxwell",
    from: "RCB",
    price: "14.25",
    isPlaying: true,
    description: "All-rounder",
  },
  {
    id: 5,
    playerName: "Rohit Sharma",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    description: "BatsMan",
  },
  {
    id: 6,
    playerName: "Ishan Kishan",
    from: "MI",
    price: "2.50 Cr",
    isPlaying: true,
    description: "BatsMan",
  },
];

var teams = [
  {
    id: 1,
    Team: "Chennai Super Kings",
    from: "CSK",
    players: [
      "Suresh Raina",
      "MS Dhoni",
      "Narayan Jagadeesabn",
      "Ruturaj Gaikwad",
      "KM Asif, Karn Sharma",
      "Ambati Rayudu",
      "Deepak Chahar",
      "Faf du Plessis",
      "Shardul Thakur",
      "Mitchell Santner",
      "Dwayne Bravo",
      "Lungi Ngidi",
      "Sam Curran",
      "Ravindra Jadeja",
      "Imran Tahir",
      "Robin Uthappa",
      "Moeen Ali",
      "K Gowtham",
      "Cheteshwar Pujara",
      " M.Harisankar Reddy",
      "K.Bhagath Varma",
      "C Hari Nishaanth",
      "R Sai Kishore",
    ],
    topBatsman: "Faf du Plessis",
    topBowler: "Sam Curran",
    championship: 3,
  },
  {
    id: 2,
    Team: "Delhi Capitals",
    from: "DC",
    players: [
      "Shreyas Iyer",
      "Ajinkya Rahane",
      "Amit Mishra",
      "Avesh Khan",
      "Axar Patel",
      "Ishant Sharma",
      "Kagiso Rabada",
      "Prithvi Shaw",
      "Rishabh Pant",
      "Shikhar Dhawan",
      "Lalit Yadav",
      "Marcus Stoinis",
      "Shimron Hetmyer",
      "Chris Woakes",
      "Anrich Nortje",
      "Steve Smith",
      "Umesh Yadav",
      "Ripal Patel",
      "Lukman Hussain Meriwala",
      "M Siddharth",
      "Tom Curran",
      "Sam Billings",
      "Pravin Dubey",
      "Vishnu Vinod",
    ],
    topBatsman: "Shikhar Dhawan",
    topBowler: "Avesh Khan",
    championship: 1,
  },
  {
    id: 3,
    Team: "Mumbai Indians",
    from: "MI",
    players: [
      "Rohit Sharma",
      "Aditya Tare",
      "Anmolpreet Singh",
      "Anukul Roy",
      "Dhawal Kulkarni",
      "Hardik Pandya",
      "Ishan Kishan",
      "Jasprit Bumrah",
      "Jayant Yadav",
      "Kieron Pollard",
      "Krunal Pandya",
      "Quinton de Kock",
      "Rahul Chahar",
      "Suryakumar Yadav",
      "Chris Lynn",
      "Mohsin Khan",
      "Saurabh Tiwary",
      "Trent Boult",
      "Adam Milne",
      "Nathan Coulter-Nile",
      "Piyush Chawla",
      "James Neeshan",
      "Yudhvir Charak",
      "Marco Jansen",
      "Arjun Tendulkar",
    ],
    topBatsman: "Rohit Sharma",
    topBowler: "Rahul Chahar",
    championship: 5,
  },

  {
    id: 4,
    Team: "Sunrisers Hyderabad",
    from: "SRH",
    players: [
      "Kane Williamson",
      "David Warner",
      "Manish Pandey",
      "Virat Singh",
      "Priyam Garg",
      "Abdul Samad",
      "Bhuvneshwar Kumar",
      "Khaleel Ahmed",
      "Sandeep Sharma",
      "Siddharth Kaul",
      "T Natarajan",
      "Abhishek Sharma",
      "Shahbaz Nadeem",
      "Vijay Shankar",
      "Mohammad Nabi",
      "Rashid Khan",
      "Jonny Bairstow",
      "Wriddhiman Saha",
      "Shreevats Goswami",
      "Basil Thampi",
      "Jason Holder",
      "Jagadeesha Suchith",
      "Kedar Yadav",
      "Mujeeb ur Rahman",
      "Jason Roy",
    ],
    topBatsman: "Jonny Bairstow",
    topBowler: "Rashid Khan",
    championship: 1,
  },

  {
    id: 5,
    Team: "Punjab Kings",
    from: "KX1P",
    players: [
      "KL Rahul",
      "Chris Gayle",
      "Mayank Agarwal",
      "Nicholas Pooran",
      "Mandeep Singh",
      "Sarfaraz Khan",
      "Deepak Hooda",
      "Prabhsimran Singh",
      "Mohammed Shami",
      "Chris Jordan",
      "Darshan Nalkande",
      "Ravi Bishnoi",
      "Murugan Ashwin",
      "Arshdeep Singh",
      "Harpreet Brar",
      "Ishan Porel",
      "Dawid Malan",
      "Jhye Richardson",
      "Shahrukh Khan",
      "Riley Meredith",
      "Moises Henriques",
      "Jalaj Saxena",
      "Utkarsh Singh",
      "Fabian Allen",
      "Saurabh Kumar",
    ],
    topBatsman: "KL Rahul",
    topBowler: "Mohammed Shami",
    championship: 0,
  },

  {
    id: 6,
    Team: "Rajasthan Royals",
    from: "RR",
    players: [
      "Sanju Samson",
      "Ben Stokes",
      "Jofra Archer",
      "Jos Buttler",
      "Riyan Parag",
      "Shreyas Gopal",
      "Rahul Tewatia",
      "Mahipal Lomror",
      "Kartik Tyagi",
      "Jaydev Unadkat",
      "Mayank Markande",
      "Yashasvi Jaiswal",
      "Anuj Rawat",
      "David Miller",
      "Manan Vohra",
      "Shivam Dube",
      "Chris Morris",
      "Mustafizur Rahim",
      "Chetan Sakariya",
      "K.C. Cariappa",
      "Kuldip Yadav",
      "Akash Singh",
    ],
    topBatsman: "Sanju Samson",
    topBowler: "Chris Morris",
    championship: 1,
  },

  {
    id: 7,
    Team: "Kolkata Knight Riders",
    from: "KKR",
    players: [
      "Dinesh Karthik",
      "Andre Russell",
      "Kamlesh Nagarkoti",
      "Kuldeep Yadav",
      "Lockie Ferguson",
      "Nitish Rana",
      "Prasidh Krishna",
      "Gurkeerat Singh Mann",
      "Sandeep Warrier",
      "Shivam Mavi",
      "Shubman Gill",
      "Sunil Narine",
      "Eoin Morgan",
      "Pat Cummins",
      "Rahul Tripathi",
      "Varun Chakravarthy",
      "Pawan Negi",
      "Tim Seifert",
      "Shakib al Hasan",
      "Sheldon Jackson",
      "Vaibhav Arora",
      "Karun Nair",
      "Harbhajan Singh",
      "Ben Cutting",
      "Venkatesh Iyer",
    ],
    topBatsman: "Andre Russell",
    topBowler: "Pat Cummins",
    championship: 2,
  },

  {
    id: 8,
    Team: "Royal Challengers Banglore",
    from: "RCB",
    players: [
      "Virat Kohli",
      "AB de Villiers",
      "Yuzvendra Chahal",
      "Devdutt Padikkal",
      "Harshal Patel",
      "Daniel Sams",
      "Washington Sundar",
      "Mohammed Siraj",
      "Navdeep Saini",
      "Shahbaz Ahmed",
      "Pavan Deshpande",
      "Glenn Maxwell",
      "Sachin Baby",
      "Rajat Patidar",
      "Mohammed Azharuddeen",
      "Kyle Jamieson",
      "Dan Christian",
      "Suyesh Prabhudessai",
      "KS Bharat",
      "Finn Allen",
    ],
    topBatsman: "Glenn Maxwell",
    topBowler: "Harshal Patel",
    championship: 0,
  },
];

// console.log(...teams);

myFun = (image, colour, head, logo) => {
  document.getElementById("myimage").src = image;
  document.querySelector(".empty").style.backgroundColor = colour;
  document.getElementById("head").innerHTML = head;
  document.getElementById("logobg").src = logo;
};

const players_wrapper = $("<div>").addClass("players_wrapper");
$(".container").append(players_wrapper);

var on_click = false;

for (let i = 0; i <= teams.length; ++i) {
  $("#clickTeam" + i).click(() => {
    // location.reload();

    on_click = true;

    const total_count = $("<div>")
      .addClass("total_count")
      .html("Total Players: ");

    const count_num = $("<p>").html(teams[i - 1].players.length);
    $(total_count).append(count_num);

    $(".team-count").append(total_count);

    const top_players = $("<div>")
      .addClass("top_players")
      .html("Top Players: ");

    const top_batsman = $("<p>").html("Batsman: " + teams[i - 1].topBatsman);
    const top_bowler = $("<p>").html("Bowler: " + teams[i - 1].topBowler);

    $(top_players).append(top_batsman);
    $(top_players).append(top_bowler);
    $(".team-count").append(top_players);

    const champ_won = $("<div>")
      .addClass("champ_won")
      .html("Championship Won: ");
    const champ_number = $("<p>").html(teams[i - 1].championship);
    $(champ_won).append(champ_number);
    $(".team-count").append(champ_won);

    for (let j = 0; j < teams[i - 1].players.length; j++) {
      console.log(teams[i - 1].players.length);

      var player_input = $("<form>");

      var player_page = $("<a>").attr("href", "./player.html?p=" + i + j);

      $(players_wrapper).append(player_page);

      let player_list = $("<div>").addClass("player_list team-card");

      let user_avatar = $("<img>")
        .attr(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0A607pr-5Sxql9f35XAISz16T8hGdLnXew&usqp=CAU"
        )
        .addClass("fas fa-user-circle")
        .prop({
          id: "user_avatar",
        });

      const details_wrap = $("<div>").addClass("details_wrap");

      let player_name = $("<h4>")
        .addClass("player_name")
        .html(teams[i - 1].players[j]);

      let team_p = $("<p>")
        .addClass("team_p")
        .html(teams[i - 1].from);
      let price_p = $("<p>")
        .addClass("price_p")
        .html(Math.trunc(Math.random() * 10) + 1 + "CR");

      $(player_list).append(user_avatar);
      $(player_list).append(details_wrap);

      $(details_wrap).append(player_name);
      $(player_input).append(player_list);

      $(details_wrap).append(team_p);
      $(details_wrap).append(price_p);

      if (j < 11) {
        let playing_p = $("<p>").addClass("playing_p").html("Playing");
        $(details_wrap).append(playing_p);
      } else {
        let playing_p = $("<p>").addClass("playing_p").html("On-bench");
        $(details_wrap).append(playing_p);
      }

      if (j % 3 == 0) {
        let role_p = $("<p>").addClass("role_p").html("Batsman");
        $(details_wrap).append(role_p);
      } else if (j % 3 == 1) {
        let role_p = $("<p>").addClass("role_p").html("All-Rounder");
        $(details_wrap).append(role_p);
      } else {
        let role_p = $("<p>").addClass("role_p").html("Bowler");
        $(details_wrap).append(role_p);
      }

      if (on_click == true) {
        $(".team-card").css("display", "none");
        on_click = false;
      }

      $(player_page).append(player_list);
    }
  });
}

$("#add").click(() => {
  var enteredData = prompt("Enter the value");
  var letURL = window.location.search.split("=")[1];
  console.log(letURL);
  teams[letURL - 1].players.push(enteredData);
  console.log(teams[letURL - 1].players);

  var player_input = $("<form>");

  var player_page = $("<a>").attr("href", "./player.html?p=" + letURL + j);

  $(players_wrapper).append(player_page);

  let player_list = $("<div>").addClass("player_list team-card");

  let user_avatar = $("<img>")
    .attr(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0A607pr-5Sxql9f35XAISz16T8hGdLnXew&usqp=CAU"
    )
    .addClass("fas fa-user-circle")
    .prop({
      id: "user_avatar",
    });

  const details_wrap = $("<div>").addClass("details_wrap");

  let player_name = $("<h4>").addClass("player_name").html(enteredData);

  let team_p = $("<p>")
    .addClass("team_p")
    .html(teams[letURL - 1].from);

  let price_p = $("<p>")
    .addClass("price_p")
    .html(Math.trunc(Math.random() * 10) + 1 + "CR");

  $(player_list).append(user_avatar);
  $(player_list).append(details_wrap);

  $(details_wrap).append(player_name);
  $(player_input).append(player_list);

  $(details_wrap).append(team_p);
  $(details_wrap).append(price_p);

  let playing_p = $("<p>").addClass("playing_p").html("On-bench");
  $(details_wrap).append(playing_p);

  let role_p = $("<p>").addClass("role_p").html("Bowler");
  $(details_wrap).append(role_p);

  $(player_page).append(player_list);
});

$(document).ready(() => {
  var linkId = window.location.search.split("=")[1];
  // console.log(linkId);

  $("#head").html(teams[linkId - 1].Team);

  const total_count = $("<div>")
    .addClass("total_count")
    .html("Total Players: ");
  const count_num = $("<p>").html(teams[linkId - 1].players.length);
  console.log(teams[linkId - 1].players);
  $(total_count).append(count_num);
  $(".team-count").append(total_count);
  const top_players = $("<div>").addClass("top_players").html("Top Players: ");
  const top_batsman = $("<p>").html("Batsman: " + teams[linkId - 1].topBatsman);
  const top_bowler = $("<p>").html("Bowler: " + teams[linkId - 1].topBowler);
  $(top_players).append(top_batsman);
  $(top_players).append(top_bowler);
  $(".team-count").append(top_players);
  const champ_won = $("<div>").addClass("champ_won").html("Championship Won: ");
  const champ_number = $("<p>").html(teams[linkId - 1].championship);
  $(champ_won).append(champ_number);
  $(".team-count").append(champ_won);

  for (j = 0; j < teams[linkId - 1].players.length; j++) {
    let p = linkId;
    const player_input = $("<form>");
    let player_page = $("<a>").attr("href", "./player.html?p=" + p + j);
    // let player_page = $("<a>").attr("href", "./player.html?p=" + j);

    $(players_wrapper).append(player_page);

    const player_list = $("<div>").addClass("player_list team-card");
    let user_avatar = $("<img>")
      .attr(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0A607pr-5Sxql9f35XAISz16T8hGdLnXew&usqp=CAU"
      )
      .addClass("fas fa-user-circle")
      .prop({
        id: "user_avatar",
      });

    const details_wrap = $("<div>").addClass("details_wrap");

    const player_name = $("<h4>")
      .addClass("player_name")
      .html(teams[linkId - 1].players[j]);

    $(player_list).append(user_avatar);
    $(player_list).append(details_wrap);

    $(details_wrap).append(player_name);
    $(player_input).append(player_list);

    let team_p = $("<p>")
      .addClass("team_p")
      .html(teams[linkId - 1].from);
    let price_p = $("<p>")
      .addClass("price_p")
      .html(Math.trunc(Math.random() * 10) + 1 + "CR");

    $(details_wrap).append(team_p);
    $(details_wrap).append(price_p);

    if (j < 11) {
      let playing_p = $("<p>").addClass("playing_p").html("Playing");
      $(details_wrap).append(playing_p);
    } else {
      let playing_p = $("<p>").addClass("playing_p").html("On-bench");
      $(details_wrap).append(playing_p);
    }

    if (j % 3 == 0) {
      let role_p = $("<p>").addClass("role_p").html("Batsman");
      $(details_wrap).append(role_p);
    } else if (j % 3 == 1) {
      let role_p = $("<p>").addClass("role_p").html("All-Rounder");
      $(details_wrap).append(role_p);
    } else {
      let role_p = $("<p>").addClass("role_p").html("Bowler");
      $(details_wrap).append(role_p);
    }

    if (on_click == true) {
      $(".team-card").css("display", "none");
      on_click = false;
    }

    $(player_page).append(player_list);
  }
});
