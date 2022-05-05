chrome.alarms.create("bananatime", {
  delayInMinutes: 10,
  periodInMinutes: 10
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === "bananatime") {
    tabslayer();
  }
});


function tabslayer() {
  let tabs = await chrome.tabs.query({});
  const doomedTab = tabs[Math.floor(Math.random() * tabs.length)];
  chrome.tabs.remove(doomedTab.id);
}
