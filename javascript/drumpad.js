"use strict";

//samples keyswords minuscula

const samplesMin = [
  "/samples/crash.wav",
  "/samples/kick.wav",
  "/samples/kick-2.wav",
  "/samples/clap.wav",
  "/samples/ride.wav",
  "/samples/tom-high.wav",
  "/samples/tom-mid.wav",
  "/samples/hihat-open.wav",
  "/samples/snare.wav",
  "/samples/tom-low.wav",
  "/samples/hihat-close.wav",
];

//samples keywords mayusculas

const samplesMay = [
  "/samples/SamplesMay/Ride-4.wav",
  "/samples/SamplesMay/Crash-1.wav",
  "/samples/SamplesMay/Perc-1.wav",
  "/samples/SamplesMay/Clap-1.wav",
  "/samples/SamplesMay/HiHatOpen-17.wav",
  "/samples/SamplesMay/HiHatClose-15.wav",
  "/samples/SamplesMay/Perc-2.wav",
  "/samples/SamplesMay/Kick-1.wav",
  "/samples/SamplesMay/Perc-3.wav",
  "/samples/SamplesMay/Kick-2.wav",
  "/samples/SamplesMay/Snare-1.wav",
];

const [
  crashMin,
  kick1Min,
  kick2Min,
  clapMin,
  rideMin,
  tomHigMin,
  tomMidMin,
  hiHatOpenMin,
  snareMin,
  tomLowMin,
  hiHatCloseMin,
] = samplesMin;

const [
  rideMay,
  crashMay,
  tomHighMay,
  clapMay,
  hiHatOpenMay,
  hiHatCloseMay,
  tomMidMay,
  kick1May,
  tomLowMay,
  kick2May,
  snareMay,
] = samplesMay;

const keysMin = (e) => {
  if (e.key == "4") {
    drumPadPlay(rideMin);
  } else if (e.key == "r") {
    drumPadPlay(crashMin);
  } else if (e.key == "t") {
    drumPadPlay(tomHigMin);
  } else if (e.key == "y") {
    drumPadPlay(clapMin);
  } else if (e.key == "f") {
    drumPadPlay(hiHatOpenMin);
  } else if (e.key == "g") {
    drumPadPlay(hiHatCloseMin);
  } else if (e.key == "h") {
    drumPadPlay(tomMidMin);
  } else if (e.key == "v") {
    drumPadPlay(kick1Min);
  } else if (e.key == "b") {
    drumPadPlay(tomLowMin);
  } else if (e.key == "n") {
    drumPadPlay(kick2Min);
  } else if (e.key == "m") {
    drumPadPlay(snareMin);
  }
};

const keysMay = (e) => {
  if (e.key == "4") {
    drumPadPlay(rideMay);
  } else if (e.key == "R") {
    drumPadPlay(crashMay);
  } else if (e.key == "T") {
    drumPadPlay(tomHighMay);
  } else if (e.key == "Y") {
    drumPadPlay(clapMay);
  } else if (e.key == "F") {
    drumPadPlay(hiHatOpenMay);
  } else if (e.key == "G") {
    drumPadPlay(hiHatCloseMay);
  } else if (e.key == "H") {
    drumPadPlay(tomMidMay);
  } else if (e.key == "V") {
    drumPadPlay(kick1May);
  } else if (e.key == "B") {
    drumPadPlay(tomLowMay);
  } else if (e.key == "N") {
    drumPadPlay(kick2May);
  } else if (e.key == "M") {
    drumPadPlay(snareMay);
  }
};

const drumPadPlay = (url) => {
  const soundPlay = new Audio(url).play();
};

let playCrash = document.getElementById("crash");
playCrash.setAttribute("onclick", "drumPadPlay(crashMin)");

let playKick = document.getElementById("kick1");
playKick.setAttribute("onclick", "drumPadPlay(kick1Min)");

let playKick2 = document.getElementById("kick2");
playKick2.setAttribute("onclick", "drumPadPlay(kick2Min)");

let playClap = document.getElementById("clap");
playClap.setAttribute("onclick", "drumPadPlay(clapMin)");

let playRide = document.getElementById("ride");
playRide.setAttribute("onclick", "drumPadPlay(rideMin)");

let playTomHigh = document.getElementById("tomhigh");
playTomHigh.setAttribute("onclick", "drumPadPlay(tomHigMin)");

let playTomMid = document.getElementById("tommid");
playTomMid.setAttribute("onclick", "drumPadPlay(tomMidMin)");

let playSnare = document.getElementById("snare");
playSnare.setAttribute("onclick", "drumPadPlay(snareMin)");

let playHiHatOpen = document.getElementById("hihatopen");
playHiHatOpen.setAttribute("onclick", "drumPadPlay(hiHatOpenMin)");

let playHiHatClose = document.getElementById("hihatclose");
playHiHatClose.setAttribute("onclick", "drumPadPlay(hiHatCloseMin)");

let playTomLow = document.getElementById("tomlow");
playTomLow.setAttribute("onclick", "drumPadPlay(tomLowMin)");

document.addEventListener("keydown", keysMin);
document.addEventListener("keydown", keysMay);
