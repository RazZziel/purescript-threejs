const rlite = require("rlite-router");

const circleStuff = require("./output/Projects.CircleStuff.Main");
const seaLike = require("./output/Projects.Sealike.Main");
const frameBound = require("./output/Projects.FrameBound.Main");
const foo = require("./output/Projects.Foo.Main");

const editorFactory = require("./src/Editor/main");

const route = rlite(notFound, {
  "": function() {
    circleStuff.main();
  },
  "01": function() {
    document.body.className = "theme02";
    seaLike.main();
  },
  "02": function({ editor }) {
    document.body.className = "theme01";
    circleStuff.main();
    if (editor === "true") {
      editorFactory.editor();
    }
  },
  "03": function() {
    document.body.className = "theme01";
    frameBound.main();
  },
  "04": function() {
    document.body.className = "theme04";
    foo.main();
  }
});

function notFound() {
  document.body.className = "theme01";
  frameBound.main();
}

// Hash-based routing
function processHash() {
  const hash = location.hash || "#";
  route(hash.slice(2));
}

function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}

window.go = () => {
  setTimeout(() => window.location.reload(true), 200);
};

document.addEventListener("dblclick", toggleFullScreen);
window.addEventListener("hashchange", processHash);
processHash();
