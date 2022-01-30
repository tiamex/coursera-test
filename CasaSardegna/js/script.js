// in base al file in cui mi trovo carico i contenuti in inglese
var file = document.location.href.split("/");
var file = file[file.length-1].split(".php");
if (file[0]=="index" || file[0]=="") {
	var elementi=[
		"ABOUT US",
		"CONTACTS",
		"ABOUT US",
		"CONTACTS",
		"Our company",
		"Next Medical s.r.l. is a fully FCPA compliant partner in the distribution of medical devices in the fields of orthopedics, traumatology and plastic surgery. Next Medical also pays great attention to after-sales services, carrying out medical education activities, such as cad-lab and surgeon-to-surgeon, and providing support to surgeons during operations. Our headquarter is located inside the Technology Center of Pavia, where many companies and start-ups have come to life and have grown. Next Medical constantly cooperates with the most important orthopedic schools and research centres in Italy and Europe: this allows us to be at the forefront and always provide latest generation medical devices to our customers.",
		"Our team",
		"The company staff is young and dynamic, and is able to meet all the needs of our customers, even all types of emergency. Since the beginning of its activity, Next Medical has spread widely throughout Italy, counting more than 40 sales agents actively working.",
		"Our mission",
		"Since its birth, Next Medical has always aimed to increase the benefits for patients by improving their quality of life and to facilitate the surgeon’s work by providing superior quality materials. For this purpose, we have always been committed to providing technologically advanced medical devices to both public and private hospitals throughout Italy. Our motto is, and will always be, &quot;Patients Come First&quot;.",
		"Next Medical SRL<br>Operation office: Via Fratelli Cuzio 42, 27100 Pavia (Italy)<br>Headquarter: Via Napo Torriani 33, 22100 Como (Italy)<br>P.IVA 03279980134<br>Phone: <a href='tel:+39038224677' class='u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-palette-1-base u-btn-1'>+39 0382 24677</a><br>Fax: +39 0382 307191<br>E-mail: <a href='mailto:info@nextmedical.it' class='u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-palette-1-base u-btn-2'>info@nextmedical.it</a><br>All Brands Names &amp; Images Used In This Websites Are The Property Of Their Respective Owners."
	];
} else if (file[0]=="brands") {
	var elementi=[
		"ABOUT US",
		"CONTACTS",
		"ABOUT US",
		"CONTACTS",
		"Our Brands",
		"Companies with decades of experience in the field of traumatology and orthopaedics, Acumed and Osteomed have merged into a single large company able to meet the needs of the market and establish itself as a global leader in development, production and marketing of osteosynthesis devices for small districts, such as hand, wrist, foot and ankle, for the thoracic region and the maxillo-facial region.",
		"Products",
		"Austofix is an Australian company with more than 25 years of experience in the fields of research, design, production and distribution of orthopedic medical devices. Its wide range of products is specific for different types of fractures and anatomical conditions: this allows Austofix to be a leader in the field of orthopedic implants.",
		"Products",
		"Hemodia is a French company known for its experience in the design, production and marketing of arthroscopic pumps and related disposable tools. Currently, its core business is focused on the processing of plastics for medical use and on the design and development of electromedical devices.",
		"Products",
		"Founded in 1977 in California by a team of engineers, the first production of Microaire consisted of drills and motorized surgical saws for operations on bones and joints. Subsequently, the company expanded its market, acquiring knowledge on plastic surgery and hand surgery: in fact, among its products are both the PAL system for liposuction and the ECTR system for the release of the carpal and cubital tunnel.",
		"Products",
		"Polyganics is an innovative medical technology company that markets bioabsorbable devices that facilitate the repair and regeneration of severed tissues and nerves. With its roots in academic excellence, the first polymers of Polyganics were developed at the University of Groningen in the Netherlands, where the company was founded as a spin-off in 1999.",
		"Products",
		"Velocity Orthopedics is a US company that develops, manufactures and markets orthopedic surgical tools and devices and provides high quality products using innovative techniques. Its core business is mainly in disposable blades for arthroscopy.",
		"Products",
		"Next Medical SRL<br>Operation office: Via Fratelli Cuzio 42, 27100 Pavia (Italy)<br>Headquarter: Via Napo Torriani 33, 22100 Como (Italy)<br>P.IVA 03279980134<br>Phone: <a href='tel:+39038224677' class='u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-palette-1-base u-btn-1'>+39 0382 24677</a><br>Fax: +39 0382 307191<br>E-mail: <a href='mailto:info@nextmedical.it' class='u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-palette-1-base u-btn-2'>info@nextmedical.it</a><br>All Brands Names &amp; Images Used In This Websites Are The Property Of Their Respective Owners."
	];
} else if (file[0]=="contatti") {
	var elementi=[
		"ABOUT US",
		"CONTACTS",
		"ABOUT US",
		"CONTACTS",
		"Contact us",
		"Phone number: <a href='tel:+39038224677' class='u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-grey-50 u-text-hover-palette-1-base u-btn-1'>+39 0382 24677</a><br>E-mail: <a href='mailto:info@nextmedical.it' class='u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-grey-50 u-text-hover-palette-1-base u-btn-2'>info@nextmedical.it</a><br>Fax: +39 0382 307191<br>",
		"Addresses",
		"Operation office: Via Fratelli Cuzio 42 c/o Polo Tecnologico, 27100 Pavia<br>Headquarter: Via Torriani 33, 22100 Como",
		"Follow us&nbsp;<span class='u-icon u-icon-1' data-href='https://www.instagram.com/microaireitalia/' data-target='_blank'><svg class='u-svg-content' viewBox='0 0 24 24' style='width: 1em; height: 1em;'><linearGradient id='SVGID_1_' gradientTransform='matrix(0 -1.982 -1.844 0 -132.522 -51.077)' gradientUnits='userSpaceOnUse' x1='-37.106' x2='-26.555' y1='-72.705' y2='-84.047'><stop offset='0' stop-color='#fd5'></stop><stop offset='.5' stop-color='#ff543e'></stop><stop offset='1' stop-color='#c837ab'></stop></linearGradient><path d='m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z' fill='url(#SVGID_1_)'></path><path d='m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z' fill='#fff'></path></svg><img></span>&nbsp;<span class='u-icon u-icon-2' data-href='https://it.linkedin.com/company/next-medical-s-r-l' data-target='_blank'><svg class='u-svg-content' viewBox='0 0 382 382' x='0px' y='0px' style='width: 1em; height: 1em;'><path style='fill:currentColor;' d='M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z'></path></svg><img></span>&nbsp;",
		"Send us a message",
		"Thank you! Your message has been sent.",
		"Thank you! Your message has been sent.",
		"Next Medical SRL<br>Operation office: Via Fratelli Cuzio 42, 27100 Pavia (Italy)<br>Headquarter: Via Napo Torriani 33, 22100 Como (Italy)<br>P.IVA 03279980134<br>Phone: <a href='tel:+39038224677' class='u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-palette-1-base u-btn-1'>+39 0382 24677</a><br>Fax: +39 0382 307191<br>E-mail: <a href='mailto:info@nextmedical.it' class='u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-palette-1-base u-btn-2'>info@nextmedical.it</a><br>All Brands Names &amp; Images Used In This Websites Are The Property Of Their Respective Owners."
	];
	var ele_form=[
		"Name",
		"Phone",
		"Message",
		"Submit"
	];
}



// evidenzio la scheda 'chi siamo' se sono su nextmedical.it e non su nextmedical.it/index.php
if (file[0]=="") {
	file = ["index",""];
	document.getElementById("home").setAttribute('style', 'color: #478ac9 !important ; padding: 28px 25px ; border-bottom-style: solid ; border-bottom-width: 2px ; border-bottom-color: #404040;');
}



// evidenzio la scheda 'brands' se sono su su una delle ancore di brands.php
if (file[0]=="brands") {
	document.getElementById("brands").setAttribute('style', 'color: #478ac9 !important ; padding: 28px 25px ; border-bottom-style: solid ; border-bottom-width: 2px ; border-bottom-color: #404040;');
}



// Controllo se nell'URL è impostata la lingua inglese
var lingua = file[1].split("#");
if (lingua[0] == "?en") {
	var x = "en";
	cambia_lingua(x);
} else {
	var x = "it";
}



// Funzione per cambiare la lingua della pagina
function cambia_lingua(x) {
	var temp;
	// cambio i testi della pagina
	var testo = document.getElementsByClassName("lang");
	for(var i=0; i<testo.length; i++){
		temp=testo[i].innerHTML;
		testo[i].innerHTML=elementi[i];
		elementi[i]=temp;
		// Swap tra variabili non funziona in internet explorer
		// [testo[i].innerHTML, elementi[i]]=[elementi[i], testo[i].innerHTML];
	}

	// cambio i placeholder del form se siamo nella pagina CONTATTI
	var form1 = document.getElementsByClassName("lang_input");
	for(var i=0; i<form1.length; i++){
		temp=form1[i].placeholder;
		form1[i].placeholder=ele_form[i];
		ele_form[i]=temp;
		// [form1[i].placeholder, ele_form[i]]=[ele_form[i], form1[i].placeholder];
	}
	var submit1 = document.getElementById("submit");
	if (submit1) {
		temp=submit1.value;
		submit1.value=ele_form[3];
		ele_form[3]=temp;
		// [submit1.value, ele_form[3]]=[ele_form[3], submit1.value];
	}

	// cambio i link della pagina
	var link1 = document.querySelectorAll(".sub1, .sub3");
	var link2 = document.getElementsByClassName("sub2");
	var option1 = document.querySelectorAll(".sel_prodotti option:nth-child(n+2)");
	if (x=="it") {
		document.getElementById("ita").selected = "selected";
		for(var i=0; i<link1.length; i++){
			url = link1[i].href.split("/");
			url = url[url.length-1].split("?");
			link1[i].href = url[0];
		}
		for(var i=0; i<link2.length; i++){
			url1 = link2[i].href.split("/");
			url = url1[url1.length-1].split("?en");
			link2[i].href = url[0] + url[1];
		}
		for(var i=0; i<option1.length; i++){
			url = option1[i].value.split("/");
			url = url[url.length-1].split("?");
			option1[i].value = url[0];
		}
	} else if (x=="en") {
		document.getElementById("eng").selected = "selected";
		for(var i=0; i<link1.length; i++){
			url = link1[i].href.split("/");
			link1[i].href = url[url.length-1] + "?en";
		}
		for(var i=0; i<link2.length; i++){
			url1 = link2[i].href.split("/");
			url = url1[url1.length-1].split("#");
			link2[i].href = url[0] + "?en#" + url[1];
		}
		for(var i=0; i<option1.length; i++){
			url = option1[i].value.split("/");
			option1[i].value = url[url.length-1] + "?en";
		}
	}
}


