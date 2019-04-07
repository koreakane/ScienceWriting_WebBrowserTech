new fullScroll({
  displayDots: true,
  dotsPosition: "left",
  animateTime: 0.7,
  animateFunction: "ease"
});

var k = 0;

function section1() {
  // location.href="https://koreakane.github.io/ScienceWriting_WebBrowserTech/#1"
  location.href =
    "file:///C:/Users/nucle/Desktop/%EA%B2%8C%EC%9E%84/%EB%A7%9D%EA%B2%9C/index.html#1";
}

function section2() {
  let onlyol = document.getElementById("onlyol");

  if (k == 0) {
    onlyol.style.visibility = "visible";
    onlyol.style.opacity = "1";
    k++; //k =1
  } else {
    // location.href="https://koreakane.github.io/ScienceWriting_WebBrowserTech/#2"
    location.href =
      "file:///C:/Users/nucle/Desktop/%EA%B2%8C%EC%9E%84/%EB%A7%9D%EA%B2%9C/index.html#2";
    k = 0;
    }
}

function section3() {
  if (k == 0) {
    document.getElementById("section3_id1").style.visibility = "visible";
    document.getElementById("section3_id1").style.opacity = "1";
    k++; //k=1
  } else if (k == 1) {
    document.getElementById("section3_id2").style.visibility = "visible";
    document.getElementById("section3_id2").style.opacity = "1";
    k++; //k=2
  } else if (k == 2) {
    document.getElementById("section3_id3").style.visibility = "visible";
    document.getElementById("section3_id3").style.opacity = "1";
    k++; //k=3
  } else if (k == 3) {
    document.getElementById("section3_img1").style.visibility = "visible";
    document.getElementById("section3_img1").style.opacity = "1";
    k++; //k=4
  } else {
    // location.href="https://koreakane.github.io/ScienceWriting_WebBrowserTech/#3"
    location.href =
      "file:///C:/Users/nucle/Desktop/%EA%B2%8C%EC%9E%84/%EB%A7%9D%EA%B2%9C/index.html#3";
    k=0;
    }
}

function section4() {
  if (k == 0) {
    document.getElementById("section4_img1").style.visibility = "visible";
    document.getElementById("section4_img1").style.opacity = "1";
    document.getElementById("section4_id1").style.visibility = "visible";
    document.getElementById("section4_id1").style.opacity = "1";
    k++; //k=1
  } else if (k == 1) {
    document.getElementById("section4_id2").style.visibility = "visible";
    document.getElementById("section4_id2").style.opacity = "1";
    k++; //k=2
  } else if (k == 2) {
    document.getElementById("section4_id3").style.visibility = "visible";
    document.getElementById("section4_id3").style.opacity = "1";
    k++; //k=3
  } else if (k == 3) {
    document.getElementById("section4_img2").style.visibility = "visible";
    document.getElementById("section4_img2").style.opacity = "1";
    k++; //k=4
  } else {
    // location.href="https://koreakane.github.io/ScienceWriting_WebBrowserTech/#4"
    location.href =
      "file:///C:/Users/nucle/Desktop/%EA%B2%8C%EC%9E%84/%EB%A7%9D%EA%B2%9C/index.html#4";
    k=0;
    }
}

function section5() {
    if (k == 0) {
      document.getElementById("section5_img1").style.visibility = "visible";
      document.getElementById("section5_img1").style.opacity = "1";
      document.getElementById("section5_id1").style.visibility = "visible";
      document.getElementById("section5_id1").style.opacity = "1";
      k++; //k=1
    } else if (k == 1) {
      document.getElementById("section5_id2").style.visibility = "visible";
      document.getElementById("section5_id2").style.opacity = "1";
      k++; //k=2
    } else if (k == 2) {
      document.getElementById("section5_id3").style.visibility = "visible";
      document.getElementById("section5_id3").style.opacity = "1";
      k++; //k=3
    } else if (k == 3) {
      document.getElementById("section5_img2").style.visibility = "visible";
      document.getElementById("section5_img2").style.opacity = "1";
      k++; //k=4
    } else {
      // location.href="https://koreakane.github.io/ScienceWriting_WebBrowserTech/#5"
      location.href =
        "file:///C:/Users/nucle/Desktop/%EA%B2%8C%EC%9E%84/%EB%A7%9D%EA%B2%9C/index.html#5";
      k=0;
      }
  }

  function section6() {
    if (k == 0) {
      document.getElementById("section6_img1").style.visibility = "visible";
      document.getElementById("section6_img1").style.opacity = "1";
      document.getElementById("section6_id1").style.visibility = "visible";
      document.getElementById("section6_id1").style.opacity = "1";
      k++; //k=1
    } else if (k == 1) {
      document.getElementById("section6_id2").style.visibility = "visible";
      document.getElementById("section6_id2").style.opacity = "1";
      k++; //k=2
    } else if (k == 2) {
      document.getElementById("section6_id3").style.visibility = "visible";
      document.getElementById("section6_id3").style.opacity = "1";
      k++; //k=3
    } else if (k == 3) {
      document.getElementById("section6_img2").style.visibility = "visible";
      document.getElementById("section6_img2").style.opacity = "1";
      k++; //k=4
    } else {
      // location.href="https://koreakane.github.io/ScienceWriting_WebBrowserTech/#6"
      location.href =
        "file:///C:/Users/nucle/Desktop/%EA%B2%8C%EC%9E%84/%EB%A7%9D%EA%B2%9C/index.html#6";
      k=0;
      }
  }

  function section7() {
      document.getElementById("section7_id1").style.visibility = "visible";
      document.getElementById("section7_id1").style.opacity = "1";
  }