// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById('root');
  root.appendChild(App());
});

// Main App function to create the entire app structure
function App() {
  const appDiv = document.createElement('div');
  appDiv.className = 'App';

  appDiv.appendChild(Header());
  appDiv.appendChild(MenuBar());
  appDiv.appendChild(Home());
  appDiv.appendChild(VideoPlayer());
  appDiv.appendChild(DataBox());
  appDiv.appendChild(AlertsDropdown());

  return appDiv;
}

// Header Component
function Header() {
  const header = document.createElement('header');
  header.className = 'header';

  const h1 = document.createElement('h1');
  h1.innerText = 'This is the Header';
  header.appendChild(h1);

  return header;
}

// MenuBar Component
function MenuBar() {
  const menuBar = document.createElement('nav');
  menuBar.className = 'menu-bar';

  const menuList = document.createElement('ul');
  ['Home', 'About', 'Contact'].forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    menuList.appendChild(li);
  });

  menuBar.appendChild(menuList);
  return menuBar;
}

// Home Component
function Home() {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'home';

  const welcomeMessage = document.createElement('p');
  welcomeMessage.innerText = 'Welcome to the Home Page!';
  homeDiv.appendChild(welcomeMessage);

  return homeDiv;
}

// VideoPlayer Component
function VideoPlayer() {
  const videoDiv = document.createElement('div');
  videoDiv.className = 'video-player';

  const video = document.createElement('video');
  video.setAttribute('controls', true);
  video.setAttribute('src', 'path/to/video.mp4');  // Replace with actual video path
  videoDiv.appendChild(video);

  return videoDiv;
}

// DataBox Component
function DataBox() {
  const dataBox = document.createElement('div');
  dataBox.className = 'data-box';

  const dataHeader = document.createElement('h2');
  dataHeader.innerText = 'Data Box';
  dataBox.appendChild(dataHeader);

  const dataContent = document.createElement('p');
  dataContent.innerText = 'This is where the data will be displayed.';
  dataBox.appendChild(dataContent);

  return dataBox;
}

// AlertsDropdown Component
function AlertsDropdown() {
  const dropdownDiv = document.createElement('div');
  dropdownDiv.className = 'alerts-dropdown';

  const label = document.createElement('label');
  label.innerText = 'Alerts: ';
  dropdownDiv.appendChild(label);

  const select = document.createElement('select');
  ['Alert 1', 'Alert 2', 'Alert 3'].forEach(alert => {
    const option = document.createElement('option');
    option.innerText = alert;
    select.appendChild(option);
  });

  dropdownDiv.appendChild(select);
  return dropdownDiv;
}
