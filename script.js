// scroll to top button
//Get the button
var mybutton = document.getElementById('goto-top');
var sidediv = document.getElementById('side-bar');
const navBar = document.getElementById('navBar');

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navBar.style.transform = 'translateY(-300px)';
  } else {
    navBar.style.transform = 'translateY(0px)';
  }

  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    mybutton.style.display = 'block';
    sidediv.style.display = 'block';
    navBar.style.transform = 'translateY(0px)';
  } else {
    mybutton.style.display = 'none';
    sidediv.style.display = 'none';
  }
}

// contact form javascript

$('#contact-form').submit((e) => {
  e.preventDefault();
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbyUECEOaRsqDMmnngCtINDJcum9EtNLoPDsUkdnwt9w3Mwxa_31zpt4ebJFdAQgg76wqw/exec',
    data: $('#contact-form').serialize(),
    method: 'post',
    beforeSend: function () {
      // Show image container
      $('#loading-wrapper').css('display', 'flex');
    },
    success: function (response) {
      $('#message-popup').css('display', 'flex');
      $('#reload').click(() => {
        window.location.reload();
      });
      // alert("Message Send Successfully! Thankyou For Your Feedback")
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    complete: function (data) {
      // Hide image container
      $('#loading-wrapper').hide();
    },
    error: function (err) {
      alert('An Error Occurred');
    },
  });
});

// theme toggle

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// side social-bar toggele

$(document).ready(function () {
  $('#show-sidebar').click(() => {
    $('#icon-side').show(), $('#show-sidebar').hide();
  });

  $('#hide-sidebar').click(() => {
    $('#icon-side').hide(), $('#show-sidebar').show();
  });
});

$(document).ready(function () {
  $('#light-mode').click(() => {
    $('#dark-mode').show(), $('#light-mode').hide();
  });

  $('#dark-mode').click(() => {
    $('#dark-mode').hide(), $('#light-mode').show();
  });
});
