const sites = [
  {
      "address": "https://apple.com",
      "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
  },
  {
      "address": "https://google.com",
      "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
  },
  {
      "address": "https://microsoft.com",
      "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
  },

];

const position = document.querySelector('.website');

for (let x = 0; x < sites.length; x++){
  const logo = document.createElement('img');
  const links = document.createElement('a');
  const container = document.createElement('div');
  logo.setAttribute('src', sites[x].logo);
  links.setAttribute('href', sites[x].address);
  // position.appendChild(logo);
  position.appendChild(container)
  container.appendChild(links);
  links.appendChild(logo)
  container.setAttribute('class', 'site')
  console.log(x)
}

