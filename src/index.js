function liveTime(){
  var greeting = React.CreateElement('h1', {}, 'Hello World');
  var clock = React.CreateElement('h2', {}), `It is ${new Date().toLocaleTimeString()} right now`);
  var app = React.CreateElement('div', {}, greeting, clock);

ReactDOM.render(
  greeting,
  document.getElementById('react-app-root')
);
}
setInterval(liveTime, 1000);
