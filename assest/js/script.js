'use strict';
//
//
//

const projects = [
  {
    id: 'booze-hound',
    techs: ['HTML', 'CSS', 'JS', 'API'],
  },
  {
    id: 'weather-dashboard',
    techs: ['HTML', 'CSS', 'JS', 'API'],
  },
];

let renderProjects;

const techs = ['HTML', 'CSS', 'JS', 'API', 'Node', 'JQuery'];
const btnContainerEl = document.querySelector('#tech-container');
techs.forEach(tech => {
  const btn = document.createElement('button');
  btn.setAttribute('data-tech', tech);
  btn.textContent = tech;
  btnContainerEl.appendChild(btn);
});

btnContainerEl.addEventListener('click', evt => {
  const btn = evt.target;
  const selectedTech = btn.getAttribute('data-tech');
  console.log(selectedTech);
  const projectsEl = document.querySelectorAll('.app');
  projectsEl.forEach(project => {
    const id = project.getAttribute('id');
    const projectData = projects.find(proj => proj.id === id);
    console.log(projectData);
  });
  renderProjects = projects.filter(project => {
    let exist = false;
    project.techs.forEach(tech => {
      if (tech === selectedTech) {
        exist = true;
      }
    });
    return exist;
  });
  console.log(renderProjects);
});

//
$('ul li a').on('click', function () {
  $('div').removeClass('activeLnk');
  $('div[id=' + $(this).attr('data-related') + ']').addClass('activeLnk');
});

{
  /* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<ul>
  <li><a href="#" class="active" data-related="main">Main</a>

  </li>
  <li><a href="#" data-related="title_1">Title 1</a>

  </li>
  <li><a href="#" data-related="title_2">Title 2</a>

  </li>
  <li><a href="#" data-related="title_3">Title 3</a>

  </li>
  <li><a href="#" data-related="title_4">Title 4</a>

  </li>
</ul>
<div id="main">... Content ...</div>
<div id="title_1">... Content ...</div>
<div id="title_2">... Content ...</div>
<div id="title_3">... Content ...</div>
<div id="title_4">... Content ...</div> */
}

// JQuery US Tooltip - custom styling
$(function () {
  $(document).tooltip({
    position: {
      my: 'center bottom-20',
      at: 'center top',
      using: function (position, feedback) {
        $(this).css(position);
        $('<div>')
          .addClass('arrow')
          .addClass(feedback.vertical)
          .addClass(feedback.horizontal)
          .appendTo(this);
      },
    },
  });
});

// jQuery - Filter
$(document).ready(function () {
  $('#myInput').on('keyup', function () {
    let value = $(this).val().toLowerCase();
    $('#apps *').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
