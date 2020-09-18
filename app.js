if (typeof $ == 'undefined') {
	console.log('oops! I still have to link my jQuery properly!');
} else {
	console.log('I did it! I linked jQuery and this js file properly!');
}



const myBtn = document.getElementById("myBtn")

window.onscroll = function() {
	scrollFunction()
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myBtn.style.display = "block"
	} else {
		myBtn.style.display = "none"
	}
}

function topFunction() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}


// const projectsArr = [
// 	{
// 		title: 'Responsive',
// 		img:
// 			'https://res.cloudinary.com/dv01780vo/image/upload/v1600211142/Screen_Shot_2020-09-15_at_4.04.59_PM_vr10ee.png',
// 	},
// 	{
// 		title: 'Tamagotchi',
// 		img:
// 			'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
// 	},
// ];


let sheetUrl =
	'https://docs.google.com/spreadsheets/d/16oWt5naht2TV0UfEzlgu71On8uSEKm9znmuOmXaNR24/edit?usp=sharing';

let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/16oWt5naht2TV0UfEzlgu71On8uSEKm9znmuOmXaNR24/od6/public/values?alt=json';

$.ajax({ url: sheetAsJSON }).then((data) => {
	// console.log('this is data', data)
	const projects = data.feed.entry.map((project) => {
		return {
			title: project.gsx$title.$t,
			image: project.gsx$image.$t,
			description: project.gsx$description.$t,
			button: project.gsx$button.$t,
			link: project.gsx$link.$t,
		};
	});

	renderCards(projects)
	console.log('these are projects', projects)
	// console.log('this is data:', data.feed.entry[0].gsx$title.$t);
	console.log('this is project:', projects);
});

const renderCards = (projectsArr) => {
	projectsArr.forEach( project => {
  $('.projects').append(`
<div class="row">
  <div class="col-sm-6">
	<div class="card">
		<img src=${project.image} class="card-img-top" alt="..."></img>
      		<div class="card-body">
        		<h5 class="card-title">${project.title}</h5>
        		<p class="card-text">${project.description}</p>
        	<a href="${project.link}" class="btn btn-primary">${project.button}</a>
    </div>
  </div>
</div>

`)
})

}
