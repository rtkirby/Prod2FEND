var bio=	{
	"name"	: "R Thomas Kirby",
	"role"	: "Network Administrator",
	"contacts": {
		"mobile": "970-376-2881",
		"email": "rtkirby@mac.com",
		"github": "rtkirby",
		"twitter" : "none",
		"location" : "Colorado Springs, CO",
		"title": "Network Administrator",
		"employer": "ECCA"  
	},
	"welcomeMsg" : "Thank you for taking the time to look over my online resume",
	"skills": [ "Always learning where IT is going to take us next!", "Working on Udacity's NanoDegree for Front End Development!", "I'm a Student Developer!"],
	"biopic": "images/RTK1a.jpg",
	"display": function displaybio(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedmobile	= HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedgithub	= HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
		var formattedskills = HTMLskills.replace("%data%", bio.skills);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedmobile);
		$("#topContacts").append(formattedemail);
		$("#topContacts").append(formattedtwitter);
		$("#topContacts").append(formattedgithub);
		$("#topContacts").append(formattedlocation);
		$("#header").append(formattedbioPic);
		$("#header").append(formattedwelcomeMsg);

		$("#footerContacts").append(formattedmobile);
		$("#footerContacts").append(formattedemail);
		$("#footerContacts").append(formattedgithub);
		$("#footerContacts").append(formattedtwitter);
		$("#footerContacts").append(formattedlocation);

		if (bio["skills"].length > 0)
		{
			$("#header").append(HTMLskillsStart);
			
			for (count in bio.skills)
			{
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[count]);
				$("#header").append(formattedSkills);
			}
		}
	}
}

var work = {
	"jobs":
	[
		{
			"employer": "ECCA",
			"title": "Network Administrator",
			"location": "Edwards, CO",
			"dates": "2011 - 2015",
			"description": "Network and Computer Administration and Support."
		},
		{
			"employer": "Xerox",
			"title": "Field Technician",
			"location": 
			[
				"Eagle, CO",
				"to",
				"Denver, CO"
			],
			"dates": "2009 - 2011",
			"description": "Service Xerox multi function Copires and Printers."
		},
		{
			"employer": "IFAS at UFL",
			"title": "OU Administrator",
			"location": "Gainesville, FL",
			"dates": "1995 - 2005",
			"description": "Network and computer support for IFAS IT and Food Science."
		}
	],
	"display": function displayWork(){
		for (job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			
			var formattedEmployerTitle = formattedEmployer + formattedTitle
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}


var projects={
	"projects":
	[
		{
			"title": "Learning to program",
			"location": "USA",
			"dates": "Present",
			"description": "learning the basics of PHP, Java and Python",
			"images":
			[
				"images/prog1a.jpg"
			]
		}
	],
	"display": function displayProjects(){
		for (project in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if(projects.projects[project].images.length > 0)
			{
				for (image in projects.projects[project].images)
				{
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}


var education = {
	"schools":
	[

		{
			"name": "Santa Fe CC",
			"location": "Gainesville, FL",
			"degree": "Associates of Sciene in Computer Engineering Technology",
			"major": "Computer Science",
			"dates": "1994 - 1998",
			"url": "http://www.sfcollege.edu"

		},
		{
			"name": "Santa Fe CC",
			"location": "Gainesville, FL",
			"degree": "Associates of Science in Electrical Engineering Technology",
			"major": "Electrical Engineering",
			"dates": "1994 - 1998",
			"url": "http://www.stcollege.edu"
		}
	],
	"onlineCourses":
	[
		{
			"title": "JavaScript",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com"
		}
	],
	"display": function displayEducation() {
		for (school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			
			var formattedNameDegree = formattedName + formattedDegree;
			
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
			
		$(".education-entry:last").append(HTMLonlineClasses);
			
		for (onlinecourse in education.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);
			var formattedDate = HTMLschoolDates.replace("%data%", education.onlineCourses[onlinecourse].date);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			
			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj){
	var locationArray = [];
	
	for (jobs in work_obj.jobs) {
		var newLocation = work_obj.jobs[jobs].location;
		locationArray .push(newLocation);
	}

	return locationArray;
}

function inName(name){
	var name = name.trim().split(" ");

	name[0] = name[0].toLowerCase();
	name[0] = name[0].substr(0,1).toUpperCase();
	name[1] = name[1].toUpperCase;

	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);