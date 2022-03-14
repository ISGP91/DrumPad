"use strict";

const crashSound = "/samples/crash.wav";
const kickSound = "/samples/kick.wav";
const rideSound = "/samples/ride.wav";
const tomHighSound = "/samples/tom-high.wav";
const tomMidSound = "/samples/tom-mid.wav";
const hiHatOpenSound = "/samples/hihat-open.wav";
const snareSound = "/samples/snare.wav";
const tomLowSound = "/samples/tom-low.wav";
const hiHatCloseSound = "/samples/hihat-close.wav";

const keySounds = (e) => {
  if (e.key == "a" || e.key == "A") {
    drumPadPlay(crashSound);
  } else if (e.key == "s" || e.key == "S") {
    drumPadPlay(kickSound);
  } else if (e.key == "d" || e.key == "D") {
    drumPadPlay(rideSound);
  } else if (e.key == "f" || e.key == "F") {
    drumPadPlay(tomHighSound);
  } else if (e.key == "g" || e.key == "G") {
    drumPadPlay(tomMidSound);
  } else if (e.key == "z" || e.key == "Z") {
    drumPadPlay(snareSound);
  } else if (e.key == "x" || e.key == "X") {
    drumPadPlay(hiHatOpenSound);
  } else if (e.key == "c" || e.key == "C") {
    drumPadPlay(hiHatCloseSound);
  } else if (e.key == "v" || e.key == "V") {
    drumPadPlay(tomLowSound);
  }
};
const drumPadPlay = (url) => {
  const soundPlay = new Audio(url).play();
};

let playCrash = document.getElementById("crash");
playCrash.setAttribute("onclick", "drumPadPlay(crashSound)");

let playKick = document.getElementById("kick");
playKick.setAttribute("onclick", "drumPadPlay(kickSound)");

let playRide = document.getElementById("ride");
playRide.setAttribute("onclick", "drumPadPlay(rideSound)");

let playTomHigh = document.getElementById("tomhigh");
playTomHigh.setAttribute("onclick", "drumPadPlay(tomHighSound)");

let playTomMid = document.getElementById("tommid");
playTomMid.setAttribute("onclick", "drumPadPlay(tomMidSound)");

let playSnare = document.getElementById("snare");
playSnare.setAttribute("onclick", "drumPadPlay(snareSound)");

let playHiHatOpen = document.getElementById("hihatopen");
playHiHatOpen.setAttribute("onclick", "drumPadPlay(hiHatOpenSound)");

let playHiHatClose = document.getElementById("hihatclose");
playHiHatClose.setAttribute("onclick", "drumPadPlay(hiHatCloseSound)");

let playTomLow = document.getElementById("tomlow");
playTomLow.setAttribute("onclick", "drumPadPlay(tomLowSound)");

document.addEventListener("keydown", keySounds);
