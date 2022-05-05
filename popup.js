deleteTab.addEventListener("click", async () => {
  let tabs = await chrome.tabs.query({});
  const doomedTab = tabs[Math.floor(Math.random() * tabs.length)];
  console.log(doomedTab.id);
  //chrome.tabs.remove(tab.id);
});
