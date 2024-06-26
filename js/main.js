$(document).ready(function(){
	
	$('.linkIcons').on('click','.linkIcon',function() {
		var key = $(this).data('key');
		var currentLink = $('#currentLink').text();
		if(currentLink == key)
		{
			var href = $('.allLinks > a:nth-child(1)').attr("href");
			window.location.replace(href);
		}
		else
		{
			$("#currentLink").text(key);
			showAllLinks(key);
		}
	});
	
	//Notepad
	if (typeof localStorage.getItem("notepadText5") !== 'undefined' && localStorage.getItem("notepadText5") !== null){
		$(".notepadText").val(localStorage.notepadText5);
	}
	$(".notepadText").on('input propertychange paste', function(){ 
		localStorage.notepadText5 = $(".notepadText").val();
	});

	//Copy
	$(".copies div").on('click', function(){ 
		navigator.clipboard.writeText($(this).text());
	});

	generateRandomPokemon();


	$(".animeName").on('input propertychange paste', function(){ 
		let number = $(this).closest('.anime').data('number');
		localStorage['animeName' + number] = $(".anime[data-number='" + number + "'] .animeName").val();
		changeAnimeLink(number);
	});
	$(".animeEpisode").on('input propertychange paste', function(){ 
		let number = $(this).closest('.anime').data('number');
		localStorage['animeEpisode' + number] = $(".anime[data-number='" + number + "'] .animeEpisode").val();
		changeAnimeLink(number);
	});
	$('body').on('click', '.anime .animeWatch', function(event) {
		let animeNumber = $(this).closest('.anime').data('number');
		let checkboxIsChecked = $('.anime[data-number="' + animeNumber + '"] .animePlus').is(":checked");
		if(checkboxIsChecked) {
			localStorage['animeEpisode' + animeNumber] = parseInt(localStorage['animeEpisode' + animeNumber]) + 1;
		}
	})

	if (typeof localStorage.getItem("animeName1") !== 'undefined' && localStorage.getItem("animeName1") !== null){
		$(".anime[data-number='1'] .animeName").val(localStorage.animeName1);
	}
	if (typeof localStorage.getItem("animeEpisode1") !== 'undefined' && localStorage.getItem("animeEpisode1") !== null){
		$(".anime[data-number='1'] .animeEpisode").val(localStorage.animeEpisode1);
	}
	changeAnimeLink(1);

	if (typeof localStorage.getItem("animeName2") !== 'undefined' && localStorage.getItem("animeName2") !== null){
		$(".anime[data-number='2'] .animeName").val(localStorage.animeName2);
	}
	if (typeof localStorage.getItem("animeEpisode2") !== 'undefined' && localStorage.getItem("animeEpisode2") !== null){
		$(".anime[data-number='2'] .animeEpisode").val(localStorage.animeEpisode2);
	}
	changeAnimeLink(2);

	if (typeof localStorage.getItem("animeName3") !== 'undefined' && localStorage.getItem("animeName3") !== null){
		$(".anime[data-number='3'] .animeName").val(localStorage.animeName3);
	}
	if (typeof localStorage.getItem("animeEpisode3") !== 'undefined' && localStorage.getItem("animeEpisode3") !== null){
		$(".anime[data-number='3'] .animeEpisode").val(localStorage.animeEpisode3);
	}
	changeAnimeLink(3);

	if (typeof localStorage.getItem("animeName4") !== 'undefined' && localStorage.getItem("animeName4") !== null){
		$(".anime[data-number='4'] .animeName").val(localStorage.animeName4);
	}
	if (typeof localStorage.getItem("animeEpisode4") !== 'undefined' && localStorage.getItem("animeEpisode4") !== null){
		$(".anime[data-number='4'] .animeEpisode").val(localStorage.animeEpisode4);
	}
	changeAnimeLink(4);

	if (typeof localStorage.getItem("animeName5") !== 'undefined' && localStorage.getItem("animeName5") !== null){
		$(".anime[data-number='5'] .animeName").val(localStorage.animeName5);
	}
	if (typeof localStorage.getItem("animeEpisode5") !== 'undefined' && localStorage.getItem("animeEpisode5") !== null){
		$(".anime[data-number='5'] .animeEpisode").val(localStorage.animeEpisode5);
	}
	changeAnimeLink(5);

	if (typeof localStorage.getItem("animeName6") !== 'undefined' && localStorage.getItem("animeName6") !== null){
		$(".anime[data-number='6'] .animeName").val(localStorage.animeName6);
	}
	if (typeof localStorage.getItem("animeEpisode6") !== 'undefined' && localStorage.getItem("animeEpisode6") !== null){
		$(".anime[data-number='6'] .animeEpisode").val(localStorage.animeEpisode6);
	}
	changeAnimeLink(6);

	if (typeof localStorage.getItem("animeName7") !== 'undefined' && localStorage.getItem("animeName7") !== null){
		$(".anime[data-number='7'] .animeName").val(localStorage.animeName7);
	}
	if (typeof localStorage.getItem("animeEpisode7") !== 'undefined' && localStorage.getItem("animeEpisode7") !== null){
		$(".anime[data-number='7'] .animeEpisode").val(localStorage.animeEpisode7);
	}
	changeAnimeLink(7);

	if (typeof localStorage.getItem("animeName8") !== 'undefined' && localStorage.getItem("animeName8") !== null){
		$(".anime[data-number='8'] .animeName").val(localStorage.animeName8);
	}
	if (typeof localStorage.getItem("animeEpisode8") !== 'undefined' && localStorage.getItem("animeEpisode8") !== null){
		$(".anime[data-number='8'] .animeEpisode").val(localStorage.animeEpisode8);
	}
	changeAnimeLink(8);

	if (typeof localStorage.getItem("animeName9") !== 'undefined' && localStorage.getItem("animeName9") !== null){
		$(".anime[data-number='9'] .animeName").val(localStorage.animeName9);
	}
	if (typeof localStorage.getItem("animeEpisode9") !== 'undefined' && localStorage.getItem("animeEpisode9") !== null){
		$(".anime[data-number='9'] .animeEpisode").val(localStorage.animeEpisode9);
	}
	changeAnimeLink(9);

	if (typeof localStorage.getItem("animeName0") !== 'undefined' && localStorage.getItem("animeName0") !== null){
		$(".anime[data-number='0'] .animeName").val(localStorage.animeName0);
	}
	if (typeof localStorage.getItem("animeEpisode0") !== 'undefined' && localStorage.getItem("animeEpisode0") !== null){
		$(".anime[data-number='0'] .animeEpisode").val(localStorage.animeEpisode0);
	}
	changeAnimeLink(0);
	
	
});

function showAllLinks(key)
{
	$('.allLinks').html("");
	switch(key)
	{
		case "google":
			addLink("Google", "Google", "https://www.google.nl/");
			addLink("Vertalen", "Google Translate", "https://translate.google.nl/");
			addLink("googleMaps", "Google Maps", "https://www.google.nl/maps");
			addLink("Drive", "Google Drive", "https://drive.google.com/drive/my-drive");
			break;
		case "youtube":
			addLink("Youtube", "Youtube Home", "https://www.youtube.com/");
			addLink("Youtube", "Subscriptions", "https://www.youtube.com/feed/subscriptions");
			addLink("Youtube", "Later bekijken", "https://www.youtube.com/playlist?list=WL");
			addLink("nuzzle", "Nuzzle", "www.youtube.com/@Nuzzling");
			break;
		case "youtubeAnalytics":
			addLink("Viewstats", "Viewstats", "https://www.viewstats.com/@nuzzling/channelytics");
			addLink("socialBlade", "Social Blade", "https://socialblade.com/youtube/c/antmation");
			addLink("socialBlade", "Sub count", "https://socialblade.com/youtube/c/antmation/realtime");
			break;
		case "youtubeTools":
			addLink("Youtube", "Test Thumbnails", "http://thumbsup.tv/");
			addLink("Youtube", "Test Thumbnails 2", "https://thumbnailpreview.com/");
			addLink("Youtube", "Rate Thumbnails", "https://www.testmythumbnails.com/ratemythumbnail");
			addLink("Youtube", "Get Thumbnails", "https://boingboing.net/features/getthumbs");
			addLink("Youtube", "FLVTO", "https://www.flvto.biz/");
			addLink("dirpy", "Dirpy", "http://dirpy.com/");
			break;
		case "tools":
			addLink("onlineConvert", "Online Convert", "https://www.online-convert.com/");
			addLink("9292", "9292", "https://9292.nl/");
			addLink("oneDrive", "Onedrive", "https://onedrive.live.com/about/nl-nl/signin/");
			addLink("compresspng", "Compress", "http://compresspng.com/nl/");
			addLink("audio", "Free sounds", "https://freesound.org/");
			addLink("noiceMachine", "Noice Machine", "https://mynoise.net/noiseMachines.php");
			addLink("drawIO", "draw.io", "https://www.draw.io/");
			addLink("removeBG", "remove.bg", "https://www.remove.bg/");
			break;
		case "news":
			addLink("nunl", "Nu.nl", "https://112duinenbollenstreek.nl/");
			addLink("112duinenbollenstreek", "112duinenbollenstreek", "");
			break;
		case "weather":
			addLink("Buienradar", "Buienradar", "http://www.buienradar.nl/");
			break;
		case "shop":
			addLink("bolCom", "Bol.com", "https://www.bol.com/nl/index.html");
			addLink("coolBlue", "Cool Blue", "https://www.coolblue.nl/");
			addLink("zalando", "Zalando", "https://www.zalando.nl/");
			addLink("large", "Large", "https://www.large.nl/");
			addLink("attitudeHolland", "Attitude Holland", "https://www.attitudeholland.nl/");
			addLink("marktplaats", "Marktplaats", "http://www.marktplaats.nl/");
			addLink("vinted", "Vinted", "https://www.vinted.nl/");
			addLink("SurfSpot", "surfSpot", "https://www.surfspot.nl/");
			break;
		case "music":
			addLink("nightcore1", "Awesome Nightcore", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIubRc2SY853Tj2fB1Wfdljr7");
			addLink("nightcore2", "Best Nightcore", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIubbdmOkVpt9jXVq-BERkJXw");
			addLink("nightcore3", "Recognisable Nightcore", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIuap9wwT7uE6xQOzjxD5tLU5");
			addLink("nightcore4", "Party Nightcore", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIuZ_c9qtQNOUtBiN0qvfl6Gi");
			addLink("nightcore5", "Emotional Nightcore", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIuY0hznltogVXn9lWonCp4sq");
			addLink("NvdL", "NvdL Radio", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIuYY3zNbZVVMFpbYJFtp4ql_");
			addLink("Rustage", "Raps", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIuaKeVaSKS1qVt95AqFyeTh0");
			addLink("Pokemon", "Pokemon Game", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIuaaXMPVI8fkeFFq1y3sza5n");
			addLink("Nederland", "Nederlands", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIuZP7bAVJt1XuRr9rl4yoIXQ");
			addLink("", "Great&Dumb", "https://www.youtube.com/playlist?list=PLhzuf4ZRRIuZwntJL1uzRzwJmt1bjFBhK");
			addLink("Veronica", "Veronica", "http://www.radioveronica.nl/luister/stations/radio-veronica");
			addLink("juke", "Housuh in de Pauzuh", "https://juke.nl/radiozenders/slam/slam-housuh-in-de-pauzuh");
			addLink("spotify", "Spotify", "https://open.spotify.com/");
			break;
		case "tv":
			addLink("", "", "");
			break;
		case "anime":
			addLink("gogoanime", "GOGO Anime", "https://ww8.gogoanimes.fi/");
			addLink("9anime", "9anime", "https://9anime.to/user/watchlist");
			addLink("mal", "MyAnimeList", "https://myanimelist.net/profile/Antmation");
			break;
		case "twitch":
			addLink("twitch", "Twitch", "https://www.twitch.tv/directory/following");
			addLink("nuzzle", "Nuzzle", "https://www.twitch.tv/nuzzle_face");
			break;
		case "twitter":
			addLink("Twitter", "Twitter", "https://twitter.com/");
			break;
		case "instagram":
			addLink("Instagram", "Instagram", "https://www.instagram.com/nuzzle_face");
			break;
		case "linkedin":
			addLink("linkedIn", "LinkedIn", "https://www.linkedin.com/nhome/");
			break;
		case "whatsapp":
			addLink("whatsapp", "Whatsapp", "https://web.whatsapp.com/");
			break;
		case "games":
			addLink("schaken", "Lichess", "https://lichess.org/");
			break;
		case "leagueOfLegends":
			addLink("LeagueOfLegends", "News", "http://euw.leagueoflegends.com/en/news/");
			addLink("opGG", "OP.GG", "https://euw.ophttps://www.op.gg/summoners/euw/Antmaniac-EUW");
			addLink("opGG", "Statistics", "https://euw.op.gg/statistics/champion/");
			addLink("winKans", "Your win chance", "https://www.lolskill.net/game/EUW/antmaniac");
			break;
		case "serebii":
			addLink("Serebii", "Serebii", "http://www.serebii.net/index2.shtml");
			addLink("Serebii", "Earth", "https://www.serebii.net/pokearth/");
			addLink("Serebii", "Gen 1", "https://www.serebii.net/pokedex/");
			addLink("Serebii", "Gen 2", "https://www.serebii.net/pokedex-gs/");
			addLink("Serebii", "Gen 3", "https://www.serebii.net/pokedex-rs/");
			addLink("Serebii", "Gen 4", "https://www.serebii.net/pokedex-dp/");
			addLink("Serebii", "Gen 5", "https://www.serebii.net/pokedex-bw/");
			addLink("Serebii", "Gen 6", "https://www.serebii.net/pokedex-xy/");
			addLink("Serebii", "Gen 7", "https://www.serebii.net/pokedex-sm/");
			addLink("Serebii", "Gen 8", "https://www.serebii.net/pokedex-swsh/");
			addLink("Serebii", "Gen 9", "https://www.serebii.net/pokedex-sv/");
			break;
		case "pokemon":
			addLink("Bulbapedia", "Bulbapedia", "http://bulbapedia.bulbagarden.net/wiki/Main_Page");
			addLink("Smogon", "Smogon", "https://www.smogon.com/dex/sv/pokemon/");
			addLink("pokemonShowdown", "Showdown", "http://play.pokemonshowdown.com/");
			addLink("pokemon", "Abilities", "https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Abilities");
			addLink("pokemoncries", "Pokemon Cries", "https://pokemoncries.com/train");
			addLink("marriland", "Team Builder", "https://marriland.com/tools/team-builder/en/");
			addLink("Drive", "Files", "https://drive.google.com/drive/folders/16bSaqcst0tOMsz4rGBzPK_iZvgx4DZJX");
			addLink("pokesprite", "Sprites", "https://msikma.github.io/pokesprite/index.html");
			addLink("pmdcollab", "pmdcollab", "https://sprites.pmdcollab.org/#/");
			break;
		case "nuzzling":
			addLink("nuzzling", "Platinum Live", "https://nuzzling.github.io/platinum/index.html");
			addLink("nuzzling", "Platinum Local", "http://localhost/nuzzlingplatinum/index.php");
			break;
		case "programming":
			addLink("xampp", "PHP MyAdmin", "http://localhost/phpmyadmin/");
			addLink("Github", "Github", "https://github.com/");
			addLink("Regex", "Regex101", "https://regex101.com/");
			break;
		case "grownup":
			addLink("Rabobank", "Rabobank", "https://bankieren.rabobank.nl/klanten/");
			addLink("paypal", "PayPal", "https://www.paypal.com/myaccount/summary");
			addLink("hema", "Zorgverzekering", "https://verzekeringen.hema.nl/zorgverzekering");
			addLink("kpn", "KPN opwaarderen", "https://www.kpn.com/prepaid/opwaarderen.htm");
			break;
		case "color":
			addLink("kleuren", "Color scheme", "https://www.w3schools.com/colors/colors_picker.asp");
			addLink("adobeColor", "Color", "https://color.adobe.com/nl/cloud/aHR0cHM6Ly9jYy1hcGktYXNzZXRzLmFkb2JlLmlv/my/libraries/all");
			addLink("kleuren", "Scheme M", "https://coolors.co/app");
			addLink("kleuren", "Scheme A", "http://colormind.io/");
			addLink("kleuren", "Scheme H", "https://www.sessions.edu/color-calculator/");
			addLink("contrast", "Contrast", "https://webaim.org/resources/contrastchecker/");
			break;
		case "onePiece":
			addLink("onePiece", "Read Manga", "http://www6.mangafreak.net/Manga/One_Piece");
			addLink("onePiece", "Watch Anime", "www5.gogoanimes.fi/category/one-piece");
			addLink("audio", "Track List", "http://onepiecetracklist.com/#/1");
			break;
		case "work":
			addLink("nmbrs", "nmbrs", "https://ffivebv.nmbrs.nl/");
			break;
		case "wonen":
			addLink("oxxio", "Oxxio", "https://www.oxxio.nl/");
			addLink("dunea", "Dunea", "https://www.dunea.nl/zelf-regelen/welkom-bij-mijn-dunea");
			break;
		case "huizen":
			addLink("rijnland", "Holland Rijnland", "https://www.hureninhollandrijnland.nl/");
			addLink("livingtoday", "Livingtoday", "https://www.livingtoday.nl/aanbod?city=Noordwijk&offer=any");
			addLink("funda", "Funda huren", "https://www.funda.nl/zoeken/huur?selected_area=%5B%22noordwijk-zh,5km%22%5D&sort=%22date_down%22");
			addLink("ikwilhuren", "Ik wil huren", "https://ikwilhuren.nu/aanbod/");
			addLink("interhouse", "Interhouse", "https://interhouse.nl/huurwoningen/?location_id=Sassenheim_Algemeen&number_of_results=20&sort=date-desc&display=list&paging=1");
			addLink("tameling", "Tameling", "https://tamelingverhuur.nl/woningaanbod/huur?moveunavailablelistingstothebottom=true&orderby=9&orderdescending=true&pricerange.maxprice=1500");
			addLink("pararius", "Pararius Noordwijk", "https://www.pararius.nl/huurwoningen/noordwijk-zh");
			addLink("pararius", "Pararius Noordwijkerhout", "https://www.pararius.nl/huurwoningen/noordwijkerhout");
			addLink("pararius", "Pararius Sassenheim", "https://www.pararius.nl/huurwoningen/sassenheim");
			addLink("pararius", "Pararius Voorhout", "https://www.pararius.nl/huurwoningen/voorhout");
			addLink("pararius", "Pararius Katwijk", "https://www.pararius.nl/huurwoningen/katwijk");
			addLink("pararius", "Pararius Rijnsburg", "https://www.pararius.nl/huurwoningen/rijnsburg");
			addLink("pararius", "Pararius Oegstgeest", "https://www.pararius.nl/huurwoningen/oegstgeest");
			addLink("funda", "Funda kopen", "https://www.funda.nl/zoeken/koop?selected_area=%5B%22noordwijk-zh,5km%22%5D&sort=%22date_down%22");
			break;
		case "trans":
			addLink("psyTrans", "PsyTrans", "https://psytrans.nl/");
			addLink("zaurus", "Zaurus", "https://web.zaurus.io/");
			break;
		case "adobe":
			addLink("adobe", "Plans", "https://account.adobe.com/plans");
			break;
		default:
			alert(link + " word niet gebruikt.");
			break;
	}
	return;
}

function addLink(image, text, link)
{
	var html = "";

	html += '<a class="link" href="' + link + '">';
		html += '<div class="linkImage" style="background-image: url(img/icons/' + image + '.png)"></div>';
		html += '<div class="linkTextHolder">';
			html += '<div class="linkText">' + text + '</div>';
			html += '<div class="linkURL">' + link + '</div>';
		html += '</div>';
	html += '</a>';

	$('.allLinks').append(html);
	return;
}

function generateRandomPokemon()
{
	let allPokemon = ['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran♀','nidorina','nidoqueen','nidoran♂','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetch`d','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb','electrode','exeggcute','exeggutor','cubone','marowak','hitmonlee','hitmonchan','lickitung','koffing','weezing','rhyhorn','rhydon','chansey','tangela','kangaskhan','horsea','seadra','goldeen','seaking','staryu','starmie','mr. mime','scyther','jynx','electabuzz','magmar','pinsir','tauros','magikarp','gyarados','lapras','ditto','eevee','vaporeon','jolteon','flareon','porygon','omanyte','omastar','kabuto','kabutops','aerodactyl','snorlax','articuno','zapdos','moltres','dratini','dragonair','dragonite','mewtwo','mew','chikorita','bayleef','meganium','cyndaquil','quilava','typhlosion','totodile','croconaw','feraligatr','sentret','furret','hoothoot','noctowl','ledyba','ledian','spinarak','ariados','crobat','chinchou','lanturn','pichu','cleffa','igglybuff','togepi','togetic','natu','xatu','mareep','flaaffy','ampharos','bellossom','marill','azumarill','sudowoodo','politoed','hoppip','skiploom','jumpluff','aipom','sunkern','sunflora','yanma','wooper','quagsire','espeon','umbreon','murkrow','slowking','misdreavus','unown','wobbuffet','girafarig','pineco','forretress','dunsparce','gligar','steelix','snubbull','granbull','qwilfish','scizor','shuckle','heracross','sneasel','teddiursa','ursaring','slugma','magcargo','swinub','piloswine','corsola','remoraid','octillery','delibird','mantine','skarmory','houndour','houndoom','kingdra','phanpy','donphan','porygon2','stantler','smeargle','tyrogue','hitmontop','smoochum','elekid','magby','miltank','blissey','raikou','entei','suicune','larvitar','pupitar','tyranitar','lugia','ho-oh','celebi','treecko','grovyle','sceptile','torchic','combusken','blaziken','mudkip','marshtomp','swampert','poochyena','mightyena','zigzagoon','linoone','wurmple','silcoon','beautifly','cascoon','dustox','lotad','lombre','ludicolo','seedot','nuzleaf','shiftry','taillow','swellow','wingull','pelipper','ralts','kirlia','gardevoir','surskit','masquerain','shroomish','breloom','slakoth','vigoroth','slaking','nincada','ninjask','shedinja','whismur','loudred','exploud','makuhita','hariyama','azurill','nosepass','skitty','delcatty','sableye','mawile','aron','lairon','aggron','meditite','medicham','electrike','manectric','plusle','minun','volbeat','illumise','roselia','gulpin','swalot','carvanha','sharpedo','wailmer','wailord','numel','camerupt','torkoal','spoink','grumpig','spinda','trapinch','vibrava','flygon','cacnea','cacturne','swablu','altaria','zangoose','seviper','lunatone','solrock','barboach','whiscash','corphish','crawdaunt','baltoy','claydol','lileep','cradily','anorith','armaldo','feebas','milotic','castform','kecleon','shuppet','banette','duskull','dusclops','tropius','chimecho','absol','wynaut','snorunt','glalie','spheal','sealeo','walrein','clamperl','huntail','gorebyss','relicanth','luvdisc','bagon','shelgon','salamence','beldum','metang','metagross','regirock','regice','registeel','latias','latios','kyogre','groudon','rayquaza','jirachi','deoxys','turtwig','grotle','torterra','chimchar','monferno','infernape','piplup','prinplup','empoleon','starly','staravia','staraptor','bidoof','bibarel','kricketot','kricketune','shinx','luxio','luxray','budew','roserade','cranidos','rampardos','shieldon','bastiodon','burmy','wormadam','mothim','combee','vespiquen','pachirisu','buizel','floatzel','cherubi','cherrim','shellos','gastrodon','ambipom','drifloon','drifblim','buneary','lopunny','mismagius','honchkrow','glameow','purugly','chingling','stunky','skuntank','bronzor','bronzong','bonsly','mime jr.','happiny','chatot','spiritomb','gible','gabite','garchomp','munchlax','riolu','lucario','hippopotas','hippowdon','skorupi','drapion','croagunk','toxicroak','carnivine','finneon','lumineon','mantyke','snover','abomasnow','weavile','magnezone','lickilicky','rhyperior','tangrowth','electivire','magmortar','togekiss','yanmega','leafeon','glaceon','gliscor','mamoswine','porygon-z','gallade','probopass','dusknoir','froslass','rotom','uxie','mesprit','azelf','dialga','palkia','heatran','regigigas','giratina','cresselia','phione','manaphy','darkrai','shaymin','arceus','victini','snivy','servine','serperior','tepig','pignite','emboar','oshawott','dewott','samurott','patrat','watchog','lillipup','herdier','stoutland','purrloin','liepard','pansage','simisage','pansear','simisear','panpour','simipour','munna','musharna','pidove','tranquill','unfezant','blitzle','zebstrika','roggenrola','boldore','gigalith','woobat','swoobat','drilbur','excadrill','audino','timburr','gurdurr','conkeldurr','tympole','palpitoad','seismitoad','throh','sawk','sewaddle','swadloon','leavanny','venipede','whirlipede','scolipede','cottonee','whimsicott','petilil','lilligant','basculin','sandile','krokorok','krookodile','darumaka','darmanitan','maractus','dwebble','crustle','scraggy','scrafty','sigilyph','yamask','cofagrigus','tirtouga','carracosta','archen','archeops','trubbish','garbodor','zorua','zoroark','minccino','cinccino','gothita','gothorita','gothitelle','solosis','duosion','reuniclus','ducklett','swanna','vanillite','vanillish','vanilluxe','deerling','sawsbuck','emolga','karrablast','escavalier','foongus','amoonguss','frillish','jellicent','alomomola','joltik','galvantula','ferroseed','ferrothorn','klink','klang','klinklang','tynamo','eelektrik','eelektross','elgyem','beheeyem','litwick','lampent','chandelure','axew','fraxure','haxorus','cubchoo','beartic','cryogonal','shelmet','accelgor','stunfisk','mienfoo','mienshao','druddigon','golett','golurk','pawniard','bisharp','bouffalant','rufflet','braviary','vullaby','mandibuzz','heatmor','durant','deino','zweilous','hydreigon','larvesta','volcarona','cobalion','terrakion','virizion','tornadus','thundurus','reshiram','zekrom','landorus','kyurem','keldeo','meloetta','genesect','chespin','quilladin','chesnaught','fennekin','braixen','delphox','froakie','frogadier','greninja','bunnelby','diggersby','fletchling','fletchinder','talonflame','scatterbug','spewpa','vivillon','litleo','pyroar','flabébé','floette','florges','skiddo','gogoat','pancham','pangoro','furfrou','espurr','meowstic','honedge','doublade','aegislash','spritzee','aromatisse','swirlix','slurpuff','inkay','malamar','binacle','barbaracle','skrelp','dragalge','clauncher','clawitzer','helioptile','heliolisk','tyrunt','tyrantrum','amaura','aurorus','sylveon','hawlucha','dedenne','carbink','goomy','sliggoo','goodra','klefki','phantump','trevenant','pumpkaboo','gourgeist','bergmite','avalugg','noibat','noivern','xerneas','yveltal','zygarde','diancie','hoopa','volcanion','rowlet','dartrix','decidueye','litten','torracat','incineroar','popplio','brionne','primarina','pikipek','trumbeak','toucannon','yungoos','gumshoos','grubbin','charjabug','vikavolt','crabrawler','crabominable','oricorio','cutiefly','ribombee','rockruff','lycanroc','wishiwashi','mareanie','toxapex','mudbray','mudsdale','dewpider','araquanid','fomantis','lurantis','morelull','shiinotic','salandit','salazzle','stufful','bewear','bounsweet','steenee','tsareena','comfey','oranguru','passimian','wimpod','golisopod','sandygast','palossand','pyukumuku','type: null','silvally','minior','komala','turtonator','togedemaru','mimikyu','bruxish','drampa','dhelmise','jangmo-o','hakamo-o','kommo-o','tapu koko','tapu lele','tapu bulu','tapu fini','cosmog','cosmoem','solgaleo','lunala','nihilego','buzzwole','pheromosa','xurkitree','celesteela','kartana','guzzlord','necrozma','magearna','marshadow','poipole','naganadel','stakataka','blacephalon','zeraora','meltan','melmetal','grookey','thwackey','rillaboom','scorbunny','raboot','cinderace','sobble','drizzile','inteleon','skwovet','greedent','rookidee','corvisquire','corviknight','blipbug','dottler','orbeetle','nickit','thievul','gossifleur','eldegoss','wooloo','dubwool','chewtle','drednaw','yamper','boltund','rolycoly','carkol','coalossal','applin','flapple','appletun','silicobra','sandaconda','cramorant','arrokuda','barraskewda','toxel','toxtricity','sizzlipede','centiskorch','clobbopus','grapploct','sinistea','polteageist','hatenna','hattrem','hatterene','impidimp','morgrem','grimmsnarl','obstagoon','perrserker','cursola','sirfetch’d','mr. rime','runerigus','milcery','alcremie','falinks','pincurchin','snom','frosmoth','stonjourner','eiscue','indeedee','morpeko','cufant','copperajah','dracozolt','arctozolt','dracovish','arctovish','duraludon','dreepy','drakloak','dragapult','zacian','zamazenta','eternatus','kubfu','urshifu','zarude','regieleki','regidrago','glastrier','spectrier','calyrex','wyrdeer','kleavor','ursaluna','basculegion','sneasler','overqwil','enamorus','sprigatito','floragato','meowscarada','fuecoco','crocalor','skeledirge','quaxly','quaxwell','quaquaval','lechonk','oinkologne','tarountula','spidops','nymble','lokix','pawmi','pawmo','pawmot','tandemaus','maushold','fidough','dachsbun','smoliv','dolliv','arboliva','squawkabilly','nacli','naclstack','garganacl','charcadet','armarouge','ceruledge','tadbulb','bellibolt','wattrel','kilowattrel','maschiff','mabosstiff','shroodle','grafaiai','bramblin','brambleghast','toedscool','toedscruel','klawf','capsakid','scovillain','rellor','rabsca','flittle','espathra','tinkatink','tinkatuff','tinkaton','wiglett','wugtrio','bombirdier','finizen','palafin','varoom','revavroom','cyclizar','orthworm','glimmet','glimmora','greavard','houndstone','flamigo','cetoddle','cetitan','veluza','dondozo','tatsugiri','annihilape','clodsire','farigiraf','dudunsparce','kingambit','great tusk','scream tail','brute bonnet','flutter mane','slither wing','sandy shocks','iron treads','iron bundle','iron hands','iron jugulis','iron moth','iron thorns','frigibax','arctibax','baxcalibur','gimmighoul','gholdengo','wo-chien','chien-pao','ting-lu','chi-yu','roaring moon','iron valiant','koraidon','miraidon','walking wake','iron leaves','dipplin','poltchageist','sinistcha','okidogi','munkidori','fezandipiti','ogerpon','archaludon','hydrapple','gouging fire','raging bolt','iron boulder','iron crown','terapagos','pecharunt',];
	let maxPokemon = allPokemon.length - 1;
	let number = Math.floor(Math.random() * maxPokemon) + 1;
	let pokemon = allPokemon[number];
	number = number + 1;

	let level = Math.floor(Math.random() * 100) + 1;

	let shiny = Math.floor(Math.random() * 4096);
	if(shiny == 0) {
		shiny = true;
	}

	showPokemon(pokemon, number, level, shiny);
}

function showPokemon(pokemon, number, level, shiny)
{
	let numberText = "#" + number;
	let levelText = "Lv. " + level;
	let shinyText = "Not shiny";

	let pokemonImageName = pokemon;
	pokemonImageName = pokemonImageName.replace(" ", "-");
	pokemonImageName = pokemonImageName.replace(".", "");
	pokemonImageName = pokemonImageName.replace(":", "");
	pokemonImageName = pokemonImageName.replace("`", "");
	switch(pokemonImageName) {
		case "ogerpon":
			pokemonImageName = "ogerpon-teal";
			break;
	}

	let image = "https://img.pokemondb.net/sprites/home/normal/" + pokemonImageName + ".png";
	if(shiny == true) {
		// let image = "https://img.pokemondb.net/sprites/home/shiny/2x/" + pokemon + ".jpg";
		shinyText = "<b>Shiny</b>";
		$('.pokemons').css("background-color", "#f78282");
	}


	$('.randomPokemonName').text(pokemon);
	$('.randomPokemonImage').css("background-image", "url(" + image + ")");
	$('.randomPokemonDataNumber').text(numberText);
	$('.randomPokemonDataName').text(pokemon);
	$('.randomPokemonDataLevel').text(levelText);
	$('.randomPokemonDataShiny').html(shinyText);
}


function changeAnimeLink(linkNumber)
{
	var name 	= $(".anime[data-number='" + linkNumber + "'] .animeName").val().replace(/\s/g, "-").toLowerCase();
	var episode = $(".anime[data-number='" + linkNumber + "'] .animeEpisode").val();
	$(".anime[data-number='" + linkNumber + "'] .animeWatch").attr("href", "https://www5.gogoanimes.fi/" + name + "-episode-" + episode);
	return;
}