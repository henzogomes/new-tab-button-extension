chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({});
});

function updateIcon(isDarkMode) {
  const iconPath = isDarkMode ? 'assets/icon-dark' : 'assets/icon-light';
  chrome.action.setIcon({
    path: {
      "16": `${iconPath}-16.png`,
      "48": `${iconPath}-48.png`,
      "128": `${iconPath}-128.png`
    }
  });
}

function checkAndUpdateTheme() {
  var window = window ?? self;

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    updateIcon(true);
  } else {
    updateIcon(false);
  }
}

chrome.runtime.onInstalled.addListener(() => {
  checkAndUpdateTheme();
});

chrome.runtime.onStartup.addListener(() => {
  checkAndUpdateTheme();
});