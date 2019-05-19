$(function(){	

	showSecondNav('Bronx','classifications','#F1F2B0');
	showSecondNav('Manhattan','classifications','#CA8EBE');
	showSecondNav('Queens','classifications','#8DCA85');
	showSecondNav('Brooklyn','classifications','#F05455');
	showSecondNav('StatenIsland','classifications','#F6AE8A');

	showThirdNav('Bronx','Hotel','hotelShops','#F1F2B0');
	showThirdNav('Bronx','Restaurtants','restaurtantsShops','#F1F2B0');
	showThirdNav('Bronx','Landmarks','landmarksShops','#F1F2B0');

	
	showThirdNav('Manhattan','Hotel','hotelShops','#CA8EBE');
	showThirdNav('Manhattan','Restaurtants','restaurtantsShops','#CA8EBE');
	showThirdNav('Manhattan','Landmarks','landmarksShops','#CA8EBE');

	showThirdNav('Queens','Hotel','hotelShops','#8DCA85');
	showThirdNav('Queens','Restaurtants','restaurtantsShops','#8DCA85');
	showThirdNav('Queens','Landmarks','landmarksShops','#8DCA85');

	showThirdNav('Brooklyn','Hotel','hotelShops','#F05455');
	showThirdNav('Brooklyn','Restaurtants','restaurtantsShops','#F05455');
	showThirdNav('Brooklyn','Landmarks','landmarksShops','#F05455');
	
	showThirdNav('StatenIsland','Hotel','hotelShops','#F6AE8A');
	showThirdNav('StatenIsland','Restaurtants','restaurtantsShops','#F6AE8A');
	showThirdNav('StatenIsland','Landmarks','landmarksShops','#F6AE8A');



	showInfo('Bronx','Hotel','shop01');
	showInfo('Bronx','Hotel','shop02');
	showInfo('Bronx','Hotel','shop03');
	showInfo('Bronx','Hotel','shop04');
	showInfo('Bronx','Restaurtants','shop01');
	showInfo('Bronx','Restaurtants','shop02');
	showInfo('Bronx','Restaurtants','shop03');
	showInfo('Bronx','Restaurtants','shop04');
	showInfo('Bronx','Landmarks','shop01');
	showInfo('Bronx','Landmarks','shop02');
	showInfo('Bronx','Landmarks','shop03');
	showInfo('Bronx','Landmarks','shop04');

	showInfo('Manhattan','Hotel','shop01');
	showInfo('Manhattan','Hotel','shop02');
	showInfo('Manhattan','Hotel','shop03');
	showInfo('Manhattan','Hotel','shop04');
	showInfo('Manhattan','Restaurtants','shop01');
	showInfo('Manhattan','Restaurtants','shop02');
	showInfo('Manhattan','Restaurtants','shop03');
	showInfo('Manhattan','Restaurtants','shop04');
	showInfo('Manhattan','Landmarks','shop01');
	showInfo('Manhattan','Landmarks','shop02');
	showInfo('Manhattan','Landmarks','shop03');
	showInfo('Manhattan','Landmarks','shop04');

	showInfo('Queens','Hotel','shop01');
	showInfo('Queens','Hotel','shop02');
	showInfo('Queens','Hotel','shop03');
	showInfo('Queens','Hotel','shop04');
	showInfo('Queens','Restaurtants','shop01');
	showInfo('Queens','Restaurtants','shop02');
	showInfo('Queens','Restaurtants','shop03');
	showInfo('Queens','Restaurtants','shop04');
	showInfo('Queens','Landmarks','shop01');
	showInfo('Queens','Landmarks','shop02');
	showInfo('Queens','Landmarks','shop03');
	showInfo('Queens','Landmarks','shop04');

	showInfo('Brooklyn','Hotel','shop01');
	showInfo('Brooklyn','Hotel','shop02');
	showInfo('Brooklyn','Hotel','shop03');
	showInfo('Brooklyn','Hotel','shop04');
	showInfo('Brooklyn','Restaurtants','shop01');
	showInfo('Brooklyn','Restaurtants','shop02');
	showInfo('Brooklyn','Restaurtants','shop03');
	showInfo('Brooklyn','Restaurtants','shop04');
	showInfo('Brooklyn','Landmarks','shop01');
	showInfo('Brooklyn','Landmarks','shop02');
	showInfo('Brooklyn','Landmarks','shop03');
	showInfo('Brooklyn','Landmarks','shop04');

	showInfo('StatenIsland','Hotel','shop01');
	showInfo('StatenIsland','Hotel','shop02');
	showInfo('StatenIsland','Hotel','shop03');
	showInfo('StatenIsland','Hotel','shop04');
	showInfo('StatenIsland','Restaurtants','shop01');
	showInfo('StatenIsland','Restaurtants','shop02');
	showInfo('StatenIsland','Restaurtants','shop03');
	showInfo('StatenIsland','Restaurtants','shop04');
	showInfo('StatenIsland','Landmarks','shop01');
	showInfo('StatenIsland','Landmarks','shop02');
	showInfo('StatenIsland','Landmarks','shop03');
	showInfo('StatenIsland','Landmarks','shop04');
});

function showSecondNav(pre,next,color){
	$(' .'+pre).on('click',function(){
		var nextObj = $(' #'+pre+' .'+next);		
		var nextObjCss = nextObj.css('display');
		var shopsObj = $('#'+pre+' .'+next+' li ul');
		if(nextObjCss == 'none'){
			$(this).css({'border':'2px solid '+color});
			nextObj.css({'display':'inline-block'});
		}else{
			$(this).css({'border':'none'});
			nextObj.css({'display':'none','border': 'none'});
			shopsObj.css({'display':'none'});
		}		
	});
}

function showThirdNav(parent,pre,next,color){
	$("#"+parent+' .'+pre).on('click',function(){
		console.log($(this));
		var nextObj = $("#"+parent+' #'+pre+' .'+next);
		var nextObjCss = nextObj.css('display');
		if(nextObjCss == 'none'){
			$(this).mouseout(function(){
				$(this).css({'border':'2px solid '+color});
			});
			$(this).css({'border':'2px solid '+color});
			nextObj.css({'display':'inline-block'});
			
		}else{
			$(this).mouseover(function(){
				$(this).css({'border':'2px solid '+color});
			});
			$(this).mouseout(function(){
				$(this).css({'border':'none'});
			});
			$(this).css({'border':'none'});
			nextObj.css({'display':'none'});
		}		
	});

}

function showInfo(id1,id2,shop){
	var s = readData(id1,id2,shop);
	$("#"+id1+" #"+id2+" ."+shop).on("click",function(){
		$(".infoBox").css({'display':'block'});
		$('.content').html("'"+s+"'");
	});
	$('.closeBtn').on("click",function(){
		$(".infoBox").css({'display':'none'});
	});	
}

// 存入店铺信息
function infoData(){
	var data = [
		{
			"area": "Bronx",
			"CF": [
					{
						"name": "Hotel",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Opera House Hotel</h1><p><a href= https://www.operahousehotel.com/ target=_blank><img src='https://www.nycgo.com/images/venues/142/dsc_1380-1918x1280__x_large.jpg' /></a></p><p>436 E 149th St, The Bronx, NY 10455</p><p class='conCss'>A Historic Hotel In The Bronx.Our historic Bronx hotel offers a unique experience to guests retreating to NYC. As a cherished establishment in the South Bronx, the Opera House Hotel was once the home of the great Bronx Opera House. Now newly-renovated to preserve the beauty of this Bronx icon, guests are able to stay in the same place that hosted transcendent theater performances of Harry Houdini, the Marx Brothers, and John and Lionel Barrymore.</p><p class='conCss'>Residence Inn by Marriott New York The Bronx at Metro Center Atrium</p><p><img src='' /></p><p class='conCss'>1776 Eastchester Rd, The Bronx, NY 10461</p><p class='conCss'>Experience an enriching stay at Residence Inn New York The Bronx at Metro Center Atrium. Our pet-friendly hotel is part of the Hutchinson Metro Center, Metro Center Atrium and Bronx Locale, providing a prime location near a plethora of destinations. Visit Yankee Stadium, Citi Field, Bronx Zoo, Montefiore Medical Center, Calvary Hospital, Einstein School of Medicine, Fordham University, New York Botanical Garden and more. At the end of the day, retreat to our suites with spacious living areas, fully equipped kitchens, luxury bedding, free Wi-Fi and ergonomic workstations. Use our complimentary grocery shopping service to get fresh ingredients delivered to your door. Start your day with our daily free breakfast buffet, then stop by our in-house Applebee's for a delicious lunch or dinner. Stay on top of your exercise routine by using our fitness center. Traveling for business? Utilize our business center and two flexible event rooms. Feel at home at Residence Inn New York The Bronx at Metro Center Atrium.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Holiday Inn</h1><p><a href= https://www.ihg.com/holidayinnexpress/hotels/us/en/bronx/nycbx/hoteldetail?qDest=500%20Exterior%20Street,%20Bronx,%20NY,%20US&qCiD=26&qCoD=27&qCiMy=42019&qCoMy=42019&qAdlt=2&qChld=0&qRms=1&qWch=0&qSmP=1&qIta=99618783&glat=META_hpa_US_desktop_NYCBX_mapresults_1_USD_2019-05-26_default_1270717468__false&cm_mmc=hpa_US_desktop_NYCBX_mapresults_1_USD_2019-05-26_default_1270717468__false&setPMCookies=true&qSlH=NYCBX&qSlRc=KNGN&qAkamaiCC=US&srb_u=1&qRad=30&qRdU=mi&presentationViewType=select&qSrt=sBR&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va target=_blank><img src='https://edge.media.datahc.com/HI407860798.jpg' /></a></p><p>500 Exterior Street , Bronx, New York 10451</p><p class='conCss'>Stay Smart at Holiday Inn Express Bronx located 10 minutes from Yankee Stadium. Our hotel is also conveniently located only 2 minutes from the nearest subway station. This insures convenient access to New York City attractions without the NYC prices. Metropolitan Museum of Art, the Empire State Building, Times Square, Central Park and the Statue of Liberty. Only 5 miles from The Bronx Zoo and NY Botanical gardens. We are near many of the business and transportation hubs. Situated within minutes of both New York airports and close to most major NYC expressways. With our convenient location you can make it to your meeting on time or enjoy your leisure time.During your visit to our hotel, enjoy amenities that include fitness center, free high-speed Internet access, 24-hour snack shop and a complimentary hot breakfast bar with our signature cinnamon rolls. You can also take advantage of our business center that offers copying and fax services. Book your hotel reservations now and take advantage of our great hotel deals and rates without the NYC prices. For a unique experience upgrade to our View Rooms with great views of Harlem and NYC. Make the smart choice - choose the Holiday Inn Express NYC Bronx Stadium Area.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Best Western Plus Stadium Inn</h1><p><a href= https://www.bestwestern.com/en_US/book/hotels-in-bronx/best-western-plus-stadium-inn/propertyCode.33165.html target=_blank><img src='https://t-ec.bstatic.com/images/hotel/max1024x768/175/175015969.jpg' /></a></p><p>926 Sedgwick Ave Bronx NY 10452</p><p class='conCss'>Best Western Plus Stadium Inn is the newest addition to the up and coming Highbridge section of the Bronx. The hotel is within walking distance to Yankee Stadium and public transportation with access throughout NYC. Our guests enjoy easy access to Major Deegan Expressway, the George Washington Bridge and the close proximity to Manhattan. With amenities such as a modern fitness center, a complimentary full hot breakfast buffet, Wi-Fi and a 24-hour business center, the Best Western Plus Stadium Inn is sure to be your home away from home.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Residence Inn</h1><p><a href= https://www.marriott.com/hotels/travel/nycbx-residence-inn-new-york-the-bronx-at-metro-center-atrium/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2 target=_blank><img src='https://media-cdn.tripadvisor.com/media/photo-s/08/f0/8d/47/residence-inn-new-york.jpg' /></a></p><p>1776 Eastchester Rd, The Bronx, NY 10461</p><p class='conCss'>Experience an enriching stay at Residence Inn New York The Bronx at Metro Center Atrium. Our pet-friendly hotel is part of the Hutchinson Metro Center, Metro Center Atrium and Bronx Locale, providing a prime location near a plethora of destinations. Visit Yankee Stadium, Citi Field, Bronx Zoo, Montefiore Medical Center, Calvary Hospital, Einstein School of Medicine, Fordham University, New York Botanical Garden and more. At the end of the day, retreat to our suites with spacious living areas, fully equipped kitchens, luxury bedding, free Wi-Fi and ergonomic workstations. Use our complimentary grocery shopping service to get fresh ingredients delivered to your door. Start your day with our daily free breakfast buffet, then stop by our in-house Applebee's for a delicious lunch or dinner. Stay on top of your exercise routine by using our fitness center. Traveling for business? Utilize our business center and two flexible event rooms. Feel at home at Residence Inn New York The Bronx at Metro Center Atrium.</p>"
							}
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Moss Cafe</h1><p><a href=https://www.mosscafeny.com/  target=_blank><img src='https://media-cdn.tripadvisor.com/media/photo-s/0e/7d/4c/e7/storefront.jpg' /></a></p><p>Address: 3260 Johnson Ave, The Bronx, NY 10463</p><p class='conCss'>Lily Weisberg had planned for coffee with snacks. However, the Bronx neighborhood clamored for more when she opened Moss Cafe. Weisberg's menu then expanded. The food is mostly organic, much of it locally sourced, healthy, fresh and kosher.  It turns out that not just kosher eaters love Moss Cafe - it attracts a diverse crowd. Weisberg converted to Judaism, and that is when she also became kosher. She wants people to enjoy food that is modern and healthy, even if it is kosher. At Moss, they make their own ricotta, dressings, and yogurt. They even smoke their own salmon. It closes early on Fridays for Shabbat and re-opens Sunday. </p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Travesias</h1><p><a href= https://travesiasbx.com/ target=_blank><img src='https://assets3.thrillist.com/v1/image/1733141/size/tmg-article_default_mobile.jpg' /> </a></p><p>Address: 3260 Johnson Ave, The Bronx, NY 10463</p><p class='conCss'>Travesias is literally translated in English to 'Travels', The owners have traveled to many countries throughout the world and always made sure to try the top-rated restaurants as well as the traditional 'street' type food the country had to offer</p><p class='conCss'>Latin Fusion Cuisine is a reflection of a few of the many countries he has been to and/or are planning to visit in the near future. It was also the birth of a new concept and culinary style that fused together different spices, culinary techniques, traditional dishes, etc from around the world with another. The idea was simple yet innovative, Travesias has brought together Latin with Asian, Latin with Indian and even Latin with Latin. It's a groundbreaking concept with amazing flavors and combinations that will take you and your palate to places you have never been.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Ripe Kitchen & Bar</h1><p><a href=  https://www.riperestaurant.com/target=_blank><img src='https://threebestrated.ca/images/RipeRestaurant-Sudbury-ON.jpeg' /></a></p><p>Address: 151 W Sandford Blvd, Mt Vernon, NY 10550</p><p class='conCss'> Located right on the border of the Bronx and Mount Vernon, Ripe Kitchen & Bar resembles an off-road Jamaican rum bar with its reclaimed wooden interior, low lighting, and colorful paint job. The food is slightly more upscale, but still infused with authentic flavors from the island, seen in dishes like the “Big Ass” Jerk Rib-Eye Steak, which is marinated in an original jerk rub made from Scotch bonnet peppers, grilled to your liking, and topped with an Argentinian-style chimichurri sauce. Be sure to request a seat in the backyard, which is decorated with tropical flora and Tiki torches when the weather is warm.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Hungry Bird</h1><p><a href= http://www.hungrybirdnyc.com/ target=_blank><img src='http://www.hungrybirdnyc.com/img/logo.png' /></a></p><p>Address: 980 Morris Ave, The Bronx, NY 10456</p><p class='conCss'>Hungry Bird seems like an unassuming takeout restaurant at first glance -- that is, until you notice the dressed-up dine-in seating complete with tablecloths and cloth napkins. This newer Morris Ave spot is serving traditional Indian food like lamb vindaloo, butter chicken, and mixed tandoori grill in extremely generous portions. Drop in after a visit to the Bronx Museum since it’s only a 10-15 minute walk away, and be prepared to take home leftovers for the week.</p>"
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Bronx Zoo</h1><p><a href= https://bronxzoo.com/plan-your-visit/getting-here target=_blank><img src='https://media.timeout.com/images/103486999/750/422/image.jpg' /></a></p><p>Address: 2300 Southern Blvd Bronx 10458 </p><p class='conCss'>The biggest urban zoo in the country happens to be accessible with just a swipe of your MetroCard. Lions, tigers and bears are all there, along with 600 other species. Popular exhibits include the Congo Gorilla Forest, where primates run and play, and the Wild Asia Monorail, which takes you past the aforementioned tigers and other endangered creatures in their expansive habitats.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Yankee Stadium</h1><p><a href= https://www.mlb.com/yankees/ballpark target=_blank><img src='https://1giqgs400j4830k22r3m4wqg-wpengine.netdna-ssl.com/wp-content/uploads/Yankee-Stadium-on-field.jpg' /></a><P>Address: 1 E 161 St, The Bronx, NY 10451</P></p><p>Yankee Stadium is a baseball park located in Concourse, Bronx, New York City. It is the home field for the New York Yankees of Major League Baseball (MLB), and New York City FC of Major League Soccer (MLS). The $2.3 billion stadium, built with $1.2 billion in public subsidies, replaced the original Yankee Stadium in 2009. It is located one block north of the original, on the 24-acre former site of Macombs Dam Park; the 8-acre site of the original stadium is now a public park called Heritage Field. The stadium incorporates replicas of some design elements from the original Yankee Stadium, and like its predecessor, it has hosted additional events, including college football games, soccer matches, two outdoor NHL games, and concerts. Although Yankee Stadium's construction began in August 2006, the project spanned many years and faced many controversies, including the high public cost and the loss of public parkland. The overall price tag makes the new Yankee Stadium the most expensive stadium ever built.</p><p class='conCss'></p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>New York Botanical Garden</h1><p><a href= https://www.nybg.org/ target=_blank><img src='https://s3.amazonaws.com/images.hamlethub.com/hh20mediafolder/67/201804/nybg-1525121560.JPG' /></a></p><p>Address: 2900 Southern Blvd, The Bronx, NY 10458</p><p class='conCss'>The New York Botanical Garden is an iconic living museum, a major educational institution, and a renowned plant research and conservation organization. Founded in 1891 and now a National Historic Landmark, it is one of the greatest botanical gardens in the world and the largest in any city in the United States, distinguished by the beauty of its diverse landscape and extensive collections and gardens, as well as by the scope and excellence of its multidisciplinary exhibitions and programs.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Wave Hill</h1><p><a href= https://www.wavehill.org/ target=_blank><img src='https://media.timeout.com/images/103613979/750/422/image.jpg' /></a></p><p>Address: 675 W 252nd St, The Bronx, NY 10471</p><p class='conCss'>Wave Hill, a glorious, scenic public garden, is tucked away in Riverdale, the northernmost region in the city. In the 19th and early 20th century, the giant estate and grounds were owned and rented by various notable people including bankers, conductors, imminent zoologists and Theodore Roosevelt°Øs family. Today, head there to frolic along the hills and appreciate the manicured gardens, lovely architecture and staggering views of the Hudson River and the Palisades.</p>"
							}
						]
					}					
				],			
		},
		{
			"area": "Manhattan",
			"CF": [
					{
						"name": "Hotel",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>The Plaza</h1><p><a href= https://www.theplazany.com/ target=_blank><img src='https://www.smartertravel.com/uploads/2018/03/The-Plaza.png' /></a></p><p>Address: 768 5th Ave, New York, NY 10019</p><p class='conCss'>Before opening The Plaza in 1907, its designers curated a stunning collection of crystal chandeliers and gold-encrusted china in preparation for unveiling the grandest hotel in America. Numerous luminaries have crossed its opulent threshold, from presidents and politicians to royals, celebs, and Beatles. Ambitious moguls have made and lost fortunes here as glittering society waltzed in the Grand Ballroom, most famously for Truman Capote°Øs legendary black and white ball. The Plaza has also hosted fictional characters, from the Oak Room°Øs starring role alongside Cary Grant in Hitchcock°Øs classic thriller North By Northwest to Macaulay Culkin°Øs lobby romp in Home Alone 2. But the best known may be a bright-eyed girl named Eloise, who came to life through a beloved book series. Guests can stay in a bright-pink Eloise-inspired suite and take afternoon tea Eloise-style in The Palm Court.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>The St.Regis</h1><p><a href= https://st-regis.marriott.com/ target=_blank><img src='https://cache.marriott.com/marriottassets/marriott/NYCXR/nycxr-courtesy-car-9733-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*' /></a></p><p>Address: Two East 55th Street At, 5th Ave, New York, NY 10022</p><p class='conCss'>This landmark Midtown hotel has long been synonymous with New York sophistication and glamour as well as unabashed fame and fortune. After mogul John Jacob Astor IV opened the architectural stunner in 1904 and met a famously tragic end with the sinking of the Titanic, the St. Regis continued to shine. Celebrities like Salvador Dali, Marlene Dietrich, and John Lennon roamed the hallways, many staying for long-term residencies. Fictional characters flourished too, including everyone°Øs favorite spy, James Bond; author Ian Fleming placed the hotel at center stage in Live and Let Die. King Cole Bar and the Maxfield Parrish painting by the same name generate ample star attraction as well. Be sure to have a Bloody Mary at the bar where the spicy cocktail is said to have originated.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Four Seasons Hotel</h1><p><a href= https://www.fourseasons.com/newyorkdowntown/ target=_blank><img src='https://www.smartertravel.com/uploads/2018/03/Four-Seasons-Hotel-New-York.png' /></a></p><p>Address: 27 Barclay St, New York, NY 10007 / 57 E 57th St, New York, NY 10022</p><p class='conCss'>One of the most luxurious and famous hotels in New York, the Four Seasons showcases a soaring I.M. Pei-designed lobby and a 52nd-floor Penthouse Suite (reported to ring it at upwards of $50,000 per night), featuring four balconies, a private library, and a chauffeured Rolls-Royce. The hotel is situated on Billionaire°Øs Row, between Park and Madison Avenues on 57th Street, and features Manhattan°Øs richest views. Each of the 368 rooms and suites features lavish decor sure to make you feel like a celebrity and ultra-luxe relaxation spots like the serene indoor pool and spa.  Sip a custom-barrel bourbon by the Bar°Øs fireplace while taking in the remarkable lobby.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Algonquin Hotel</h1><p><a href=www.algonquinhotel.com/  target=_blank><img src='https://cache.marriott.com/marriottassets/marriott/NYCAK/nycak-exterior-5290-hor-feat.jpg?interpolation=progressive-bilinear&downsize=1180px:*' /></a></p><p>Address: 59 West 44th Street, New York, New York 10036 USA</p><p class='conCss'>A long-standing symbol of classic style and seductive eccentricity, The Algonquin, Hotel Times Square has withstood the test of time. Designated as a New York City Historic Landmark, our hotel's doors originally opened in 1902; since that time, we have earned a reputation for total excellence. Step off of Manhattan's West 44th Street and into our hotel, where an intimate yet lively lobby welcomes guests. Accommodations feature plush bedding, sleek bathrooms and modern technology, setting the stage for relaxation and productivity. Dine with us at Round Table, our renowned restaurant, or visit Blue Bar to sip on an expertly prepared martini and eavesdrop on Theatre District gossip. When you're ready to explore, a wealth of iconic attractions are nearby, including Times Square, Rockefeller Center, Radio City Music Hall, Central Park and the shops of Fifth Avenue. Whatever brings you here, we know you'll return for years to come to experience the enduring charm of The Algonquin, Hotel Times Square.</p>"
							}
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Katz's Delicatessen</h1><p><a href= https://www.katzsdelicatessen.com/ target=_blank><img src='https://media.timeout.com/images/101419569/750/422/image.jpg' /></a></p><p>Address: 205 E Houston St</p><p class='conCss'>This cavernous cafeteria is a repository of New York history°™glossies of celebs spanning the past century crowd the walls, and the classic Jewish deli offerings are nonpareil. Start with a crisp-skinned, all-beef hot dog, then flag down a meat cutter and order a legendary sandwich. The brisket sings with horseradish, and the thick-cut pastrami stacked high between slices of rye is the stuff of dreams.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Peter Luger</h1><p><a href= https://peterluger.com/ target=_blank><img src='https://media.timeout.com/images/105284100/750/422/image.jpg' /></a></p><p>Address: 178 Broadway</p><p class='conCss'>Although a slew of Luger copycats have prospered in the last several years, none have captured the elusive charm of this beer-hall style eatery, with well-worn wooden floors and tables, and waiters in waist coats and bow ties. Excess is the thing, like the famous porterhouse for two, which is 44 ounces of sliced prime beef. Go for it all°™it°Øs a singular New York experience that°Øs worth having.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Lombardi's</h1><p><a href= https://firstpizza.com/ target=_blank><img src='https://media.timeout.com/images/105259808/750/422/image.jpg' /></a></p><p>Address: 32 Spring St</p><p class='conCss'>Gennario Lombardi opened his shop in Soho in 1905°™the first pizzeria in the U.S. It°Øs hard to vouch for how the pizzas tasted a century ago, but there°Øs more elbow room now after a renovation, if not the charm of the old joint. Still, Lombardi°Øs continues to bake a hot contender for best pie.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Keens Steakhouse</h1><p><a href= http://www.keens.com/ target=_blank><img src='http://www.keens.com/images/Keens.png' /></a></p><p>Address: 72 West 36st</p><p class='conCss'>Keens Steakhouse owns the largest collection of churchwarden pipes in the world. The tradition of checking one’s pipe at the inn had its origins in 17th century Merrie Old England where travelers kept their clay at their favorite inn – the thin stemmed pipe being too fragile to be carried in purse or saddlebag. Pipe smoking was known since Elizabethan times to be beneficial for dissipating “evil homourse of the brain.” Keens's pipe tradition began in the early 20th century. The hard clay churchwarden pipes were brought from the Netherlands and as many as 50,000 were ordered every three years. A pipe warden registered and stored the pipes, while pipe boys returned the pipes from storage to the patrons. The membership roster of the Pipe Club contained over ninety thousand names, including those of Teddy Roosevelt, Babe Ruth, Will Rogers, Billy Rose, Grace Moore, Albert Einstein, George M. Cohan, J.P. Morgan, Stanford White, John Barrymore, David Belasco, Adlai Stevenson, General Douglas MacArthur and “Buffalo Bill” Cody. </p>"
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Time Square</h1><p><a href= https://www.timessquarenyc.org/ target=_blank><img src='https://ihg.scene7.com/is/image/ihg/crowne-plaza-new-york-5693607104-4x3?qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0' /></a></p><p>Address: Broadway 7th 42st</p><p class='conCss'>The Theater District is the teeming heart of Midtown West. In the pedestrian plazas of Times Square, costumed characters beckon to energetic crowds under the pulsing lights of towering digital billboards. Locals and tourists gather on the giant red staircase above the TKTS booth, which sells tickets to Broadway shows running at the area’s historic theaters. On busy 42nd Street, chain stores and restaurants abound.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Statue of Liberty</h1><p><a href= https://www.nps.gov/stli/index.htm target=_blank><img src='https://www.nps.gov/common/uploads/grid_builder/stli/crop16_9/89721987-1DD8-B71B-0BE77EEAE39E0520.jpg?width=950&quality=90&mode=crop' /></a></p><p>Address:Liberty Island NY 10004</p><p class='conCss'>Perhaps no other New York attraction is as iconic°™or as avoided by tourist-averse New Yorkers°™as Lady Liberty. Our tip: Dodge the foam-crown-sporting masses and skip the line for the ferry by prebooking a combo cruise-and-tour ticket (visit statuecruises.com for more information). A climb to the crown affords a panoramic view of New York Harbor and the chance to see the literal nuts and bolts of Fr®¶d®¶ric Auguste Bartholdi°Øs creation. We also recommend stopping in the museum on Liberty Island, if only to marvel at the initial ambivalence of 19th-century New Yorkers when they were asked to fund the construction of the pedestal. Ferries depart from Castle Clinton°™Jonathan Shannon</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Empire State Building</h1><p><a href= https://www.esbnyc.com/ target=_blank><img src='https://media.timeout.com/images/101705309/750/422/image.jpg' /></a></p><p>Address: 350 Fifth Ave</p><p class='conCss'>Built in 1931 over the span of just 11 months, this 1,454-foot Art Deco skyscraper has long stood as symbol of American innovation and ambition, and was recognized as one of the Seven Wonders of the World by the American Society of Civil Engineers. Looming large as ever in New York°Øs skyline, the building is one of the most visited attractions in the city. With so many clamouring for the chance to take the 25-minute elevator ride to the open air observation deck on the 86th floor, it°Øs best to arrive early, between 8am and noon, for a chance to take in those 360-degree views.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>One World Observatory</h1><p><a href= https://oneworldobservatory.com/en-US target=_blank><img src='https://res.cloudinary.com/legends-production/image/upload/c_fit,dpr_3.0,f_auto,g_center,q_auto,w_767/v1/owo-prod/One_World_Observatory_update' /></a></p><p>Address: One World Trade Center 285 Fulton St New York 10007 </p><p class='conCss'>One World Observatory at World Trade Center lets visitors experience panoramic views of NYC on levels 100, 101 and 102 from atop the tallest building in the United States. The tour starts with a Jetsons-style arrival via Sky Pod elevators (some of the fastest in the world) which lead to a two-minute video presentation of gorgeous city images on the 102nd floor. Check out City Pulse on the 100th floor, showing HD videos featuring notable NYC landmarks and neighborhoods, then brave the Sky Portal, where a 14-foot wide circular disc gives you a view of real-time, high-definition footage of the streets below.</p>"
							}
						]
					}					
				],			
		},
		{
			"area": "Queens",
			"CF": [
					{
						"name": "Hotel",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Queens Hotel</h1><p> <a href= nyqueenshotel.com/ target=_blank><img src='https://s-ec.bstatic.com/images/hotel/max1024x768/114/114990776.jpg' /></a></p><p>Address: 65-15 Queens Blvd </p><p class='conCss'>3.1 mi from Citi Field, The Queens Hotel is located in Queens and provides rooms with free WiFi. The property is set 3.7 mi from Arthur Ashe Stadium and 7.5 mi from Aqueduct Racetrack. Belmont Park Race Track is 11 mi away. All rooms in the hotel are equipped with a flat-screen TV with satellite channels. All rooms have a private bathroom fitted with a bath, while certain rooms come with a kitchen. All units have a desk. A continental breakfast is served daily at the property. Staff are available to help at the 24-hour front desk. American Museum of the Moving Image is 2.4 mi from The Queens Hotel. LaGuardia Airport is 3.7 mi away. This property is also rated for the best value in Queens! Guests are getting more for their money when compared to other properties in this city.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Best Western Plus Plaza</h1><p> <a href= https://www.bestwestern.com/en_US/book/hotel-rooms.33143.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:33143 target=_blank><img src='Address: 3934 21st St, Long Island City, NY 11101' /></a></p><p></p><p class='conCss'>Welcome to the Best Western Plus Plaza Hotel, where guests will find friendly customer service and superior accommodations at an affordable price. Located just five minutes from public transportation to Manhattan this Long Island City hotel features well-appointed guest rooms with cable satellite television and free wireless high-speed Internet access. The Friendly staff at the BEST WESTERN Plus Plaza Hotel is ready to ensure a memorable stay in Long Island City</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Z NYC Hotel</h1><p> <a href= https://www.zhotelny.com/ target=_blank><img src='https://t-ec.bstatic.com/images/hotel/max1024x768/141/141921588.jpg' /></a></p><p>Address: 11-01 43rd Ave, Long Island City, NY 11101</p><p class='conCss'> This Long Island City hotel isn’t located in the most desirable part of the neighborhood—it’s near Silvercup Studios and under the Queensboro Bridge, but otherwise surrounded by warehouses—but it makes up for this with a complimentary shuttle to Manhattan, decorated to look like a school bus, and free bikes for all guests. The real selling point is its rooftop, with killer views overlooking the bridge and Midtown (4th of July, anyone?). Summer on the roof lends itself to cocktail hours and yoga. Rooms have floor-to-ceiling windows, red leather chairs and large murals of starlets. Standard rooms can feel a little cramped with furniture, so opt for the larger King Deluxe Room. No need to request Manhattan views, because all rooms face west.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Asiatic Hotel</h1><p> <a href= http://www.asiatichotelnyc.com/ target=_blank><img src='https://q-xx.bstatic.com/xdata/images/hotel/max500/66390853.jpg?k=b7f71d55c5794213e00eab06936977cae33d28320581efbe696c9516909a8127&o=' /></a></p><p>Address: 135-21 37th Avenue Flushing, NY 11354 </p><p class='conCss'>Flushing, New York is a vibrant community that is continuously growing and developing. Emerging as New York City’s new Chinatown, Flushing is a fabulous place to explore Asian culture. Downtown Flushing is the city’s fourth largest central business district with hundreds  of commercial and retail establishments. Best of all, transportation to anywhere in New York City and Long Island is just a matter of minutes away. New York City Subway Line (7 Train) goes directly to 42nd Street Times Square and the Long Island Rail Road (LIRR) serves commuters traveling from Long Island to 34th Street Penn Station in Manhattan. In addition commuter buses network all throughout the borough of Queens, Parts of Long Island and even directly to the acclaimed Bronx zoo.</p>"
							},
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Casa Enrique</h1><p> <a href= https://henrinyc.com/casa-enrique/ target=_blank><img src='https://licpost.com/wp-content/uploads/sites/28/2014/09/casa-outside-crop-u4869-e1412126092728.jpg' /></a></p><p>Address: 5-48 49th Ave, Long Island City, NY 11101</p><p class='conCss'>The owners of Bar Henry branch out to Queens with this 40-seat Mexican eatery, specializing in the regional cuisine of Cintalapa, Chiapas. Brothers Cosme and Luis Aguilar, the chef and GM respectively, pay homage to their late mother with traditional plates, including some based on her recipes, such as chicken mole and cochinito chiapaneco (guajillo-marinated baby pork ribs). The white-painted spot features a garden and works from Queens artists.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Chingunae Pocha</h1><p> <a href= https://chingunae.com target=_blank><img src='http://findlocal.biz/wp-content/sabai/File/files/l_6df43797f7222c7f3b84398263258a25.jpg' /></a></p><p> Address: 40-03 149th Pl, Flushing, NY 11354</p><p class='conCss'>Welcome to Chingunae Pocha! What in the world is Pocha? Pocha is short for Pojangmacha, and the term literally means 'covered wagon' and it's commonly used to refer to the iconic tented street stalls of Korea, known for its affordable yet hearty and comforting food and soju drinks. Come swing by Chingunae today and experience the ultimate Korean drinking culture right here in the heart of Flushing, NY</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Yummy Tummy Asian Bistro</h1><p> <a href=https://www.yummytummyny.com/  target=_blank><img src='https://cdn.vox-cdn.com/thumbor/rt7E1aO-XP27a0sAsb3LL98yqNk=/0x0:5184x3456/1200x800/filters:focal(2178x1314:3006x2142)/cdn.vox-cdn.com/uploads/chorus_image/image/62614584/Yummy_Tummy___Caroline_Shin___Eater___4.0.jpg' /></a></p><p>Address: 161-16 Northern Blvd, Flushing, NY 11358</p><p class='conCss'>Yummy Tummy Asian Bistro offers delicious dining and takeout to Flushing, NY. Yummy Tummy Asian Bistro is a cornerstone in the Flushing community and has been recognized for its outstanding Chinese cuisine, excellent service and friendly staff. Our Chinese restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Mu Ramen</h1><p> <a href= https://www.muramennyc.com/ target=_blank><img src='https://media.timeout.com/images/101843385/630/472/image.jpg' /></a></p><p>Address: 1209 Jackson Ave, Long Island City, NY 11101</p><p class='conCss'>Husband-and-wife team Joshua and Heidy Smookler have answered your ramen prayers. After causing a food-world frenzy with their commercially and critically acclaimed pop-up noodle dinners, the cooking couple (Per Se and Buddakan, respectively) are going permanent with a full-time ramen den capped at 22 seats, ensuring that the duo can engage with each guest. </p>"
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>The Unisphere and the Panorama of NYC</h1><p> <a href= https://queensmuseum.org/2013/10/panorama-of-the-city-of-new-york/ target=_blank><img src='http://www.stephanepaquin.com/wp-content/uploads/2017/06/worlds_fair_fountain.jpg' /></a></p><p>Flushing Meadows-Corona Park Corona, NY 11368</p><p class='conCss'>The Unisphere is a spherical stainless steel representation of the Earth, located in Flushing Meadows–Corona Park in the borough of Queens, New York City. The sphere, which measures 140 feet (43 m) high and 120 feet (37 m) in diameter, was commissioned as part of the 1964 New York World's Fair.[1] The Unisphere is one of the borough's most iconic and enduring symbols.Commissioned to celebrate the beginning of the space age, the Unisphere was conceived and constructed as the theme symbol of the 1964–1965 New York World's Fair. The theme of the World's Fair was 'Peace Through Understanding' and the Unisphere represented the theme of global interdependence. It was dedicated to 'Man's Achievements on a Shrinking Globe in an Expanding Universe‘.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Bohemian Hall and beer Garden</h1><p> <a href= https://bohemianhall.com/ target=_blank><img src='https://forgotten-ny.com/wp-content/uploads/2016/10/beerhall1.jpg' /></a></p><p>Address: 2919 24th Ave, Astoria, NY 11102</p><p class='conCss'>The purposes of the Bohemian Citizens’ Benevolent Society of Astoria, Inc. are to encourage, support and maintain Schools, Dramatics, Lectures and Libraries for Czech and Slovak children and children of Czech and Slovak parentage: to maintain a social home for people of Czech and Slovak ancestry, in which the Czech and Slovak cultures may be taught and blended with American traditions and culture. The Society owns and manages the Bohemian Hall & Beer Garden.  The Society consists of individuals of Czech and Slovak descent and their families who have pledged themselves to work for and promote the purposes for which the Society exists.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Museum of the moving Image</h1><p> <a href= http://www.movingimage.us/ target=_blank><img src='https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1489785665/moving-image-museum-QUEENS0317.jpg?itok=VBe8KLqr' /></a></p><p> </p><p class='conCss'>Mission: Museum of the Moving Image advances the understanding, enjoyment, and appreciation of the art, history, technique, and technology of film, television, and digital media by presenting exhibitions, education programs, significant moving-image works, and interpretive programs, and collecting and preserving moving-image related artifacts. Screenings:Each year the Museum screens more than 400 films in a stimulating mix of the classic and the contemporary. With live music for silent films, restored prints from the world's leading archives, and outstanding new films from the international festival circuit, Museum programs are recognized for their quality as well as their scope. The Museum’s diverse screening program presents a panoramic view of the moving image, from the global discoveries presented in the annual showcase First Look to the popular ongoing series See It Big!, which celebrates the excitement and immersive power of big-screen moviegoing.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Queens Botanical Garden</h1><p> <a href= http://queensbotanical.org/ target=_blank><img src='https://media.timeout.com/images/104696502/750/422/image.jpg' /></a></p><p>43-50 Main St Flushing 11355 </p><p class='conCss'>The serene space consists of 25 gardens where yoga is allowed but biking and blading are strictly forbidden. This month you'll spot brightly colored Mexican sunflowers and bushes of purple Russian sage. Let your kids use their olfactory sense on the Fragrance Walk; the essential oils of the shrubs and flowers there are particularly strong. Make a stop at the Bee Garden, whose plants attract those hardworking, colonizing insects.</p>"
							}
						]
					}					
				],			
		},
		{
			"area": "Brooklyn",
			"CF": [
					{
						"name": "Hotel",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>The Williamsburg Hotel </h1><p> <a href= https://www.thewilliamsburghotel.com/ target=_blank><img src='https://media.timeout.com/images/104070963/750/422/image.jpg' /></a></p><p>Address: 96 Wythe Ave, Brooklyn, NY 11249</p><p>The brainchild of London-based design firm Michaelis Boyd Studio, each brick-, glass- and Corten steel-encased room boasts double-height ceilings and soaring windows for maximum cityscape exposure. Explore Williamsburg via neighborhood Tuk Tuk tour or get some exercise with a complimentary bike rental. There’s plenty of R&R back at the hotel, where you’ve got a rooftop pool, restaurant Harvey and three distinct bars to choose from.</p><p class='conCss'> </p>"
							
							},
							{
								"shop": "shop02",
								"cont": "<h1>1 Hotel Brooklyn Bridge </h1><p> <a href= https://www.1hotels.com/brooklyn-bridge target=_blank><img src='https://media.timeout.com/images/103894790/750/422/image.jpg' /></a><p>Address: 60 Furman St, Brooklyn, NY 11201</p></p><p>Nestled under the Brooklyn Bridge, this 10-story eco-luxury hotel offers retreat-worthy rooms outfitted with native greenery, reclaimed materials and sweeping waterfront views. Be sure to step out for a sunset beverage or two—the hotel’s 4,000-square-foot rooftop boasts killer cocktails and panoramic views of the Manhattan skyline and the Statue of Liberty.</p><p class='conCss'> </p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1> The Tillary Hotel</h1><p> <a href= https://www.thetillaryhotel.com/ target=_blank><img src='https://media.timeout.com/images/104070956/750/422/image.jpg' /></a></p><p>Address: 85 Flatbush Ave Ext, Brooklyn, NY 11201</p><p>Formerly known as the Dazzler, the Tillary Hotel offers guests an experiential stay that caters to the senses. Designed by Brooklyn-based Cl-oth Interiors, modern, art deco–inspired guest rooms feature jewel-tone plush textures, C.O. Bigelow bath amenities and interactive smart TVs. Once refreshed, guests can further please their palates with bespoke Brooklyn-themed cocktails served out on the 3,000-square-foot whiskey bar and deck aptly named Distillary.</p><p class='conCss'> </p>"
							
							},
							{
								"shop": "shop04",
								"cont": "<h1>Pod Brooklyn</h1><p> <a href=https://www.thepodhotel.com/pod-brooklyn  target=_blank><img src='https://www.thepodhotel.com/uploads/1/0/6/8/106825145/clinton-hall-brooklyn-013_orig.jpg' /></a></p><p>Williamsburg, Brooklyn, NYC 247 Metropolitan Ave Brooklyn, NY 11211​</p><p class='conCss'>New York’s premier modular hotel is coming to Brooklyn. Opening in October 2017, Pod Brooklyn features 249 pod-style rooms equipped with private bathrooms, high-tech amenities and oversize windows overlooking verdant courtyards and rooftops connected by glass walkways and living walls spanning the length of the property. Just a short walk from Bedford Avenue, neighborhood favorites like Parm, Fette Sau and St. Anselm are easily accessible. But we can’t blame you for wanting to dine back at the pod where April Bloomfield and Ken Friedman sling sanctified carnitas at Salvation Taco. </p>"
							}
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1> Olmsted</h1><p> <a href= www.olmstednyc.com/ target=_blank><img src='https://media.timeout.com/images/103512575/750/422/image.jpg' /></a></p><p>Address: 659 Vanderbilt Ave, Brooklyn, NY 11238</p><p>This Prospect Heights gem is worth the trip for the gorgeous garden out back alone (and the s’mores served there). But then you would miss the full magic that chef Greg Baxtrom, an alum of Alinea and Blue Hill at Stone Barns, is creating in the kitchen. Each item of the eccectic menu is refined, yet taps into some soft of nostalgic memory, whether it be their kale crab rangoon or creamy frozen yogurt with lavender honey. While dinner in this cozy space is magical, their newly launched brunch service is just as noteworthy.</p><p class='conCss'> </p>"
							
							},
							{
								"shop": "shop02",
								"cont": "<h1>Sunday in Brooklyn </h1><p> <a href= https://www.sundayinbrooklyn.com/ target=_blank><img src='https://media.timeout.com/images/105284213/750/422/image.jpg' /></a></p><p>Address: 348 Wythe Ave, Brooklyn, NY 11249</p><p>Contrary to their name, Sunday in Brooklyn is indeed open for brunch and dinner every day of the week. The rustic three-story space offers cozy vibes with warm wood interiors and an outdoor patio. While you've probably seen their malted pancakes with hazelnut-maple praline on Instagram (they’re just as good as they look) from their brunch, chef Jaime Young is bringing the same innovation and attention to detail to dinner. Don't miss the pastrami black cod with sour cream, pickles and toasted sourdough or the fried togarashi chicken with fancy ranch.</p><p class='conCss'> </p>"
							
							},
							{
								"shop": "shop03",
								"cont": "<h1> Miss Ada</h1><p> <a href= https://www.missadanyc.com/ target=_blank><img src='https://media.timeout.com/images/105316270/750/422/image.jpg' /></a></p><p>Address: 184 Dekalb Ave, Brooklyn, NY 11205</p><p>No, Miss Ada isn’t the name of some chef’s grade-school teacher. Rather, it’s a playful twist on the phonetic pronunciation of misada, the Hebrew word for “restaurant.” At this Fort Greene spot, Israeli-born chef Tomer Blechman (Bar Bolonat) combines his Latvian heritage with Mediterranean cooking. While you’ll be tempted to fill up on the incredible pita and silky whipped ricotta with brown butter and sage, be sure to save room for their warm hummus with lamb shawarma, falafel with green tahini and harissa-drizzled brick chicken.</p><p class='conCss'> </p>"
							
							},
							{
								"shop": "shop04",
								"cont": "<h1>Lilia</h1><p> <a href= https://www.lilianewyork.com/ target=_blank><img src='https://d37219swed47g7.cloudfront.net/media/images/reviews/lilia/banners/1457463861.68.jpg' /></a></p><p>Address: 567 Union Ave, Brooklyn, NY 11222</p><p class='conCss'>Much-heralded chef Missy Robbins delighted Williamsburg when she opened Italian stunner Lilia early in 2016. While Robbins is rightfully famed for her pasta (you’ve probably seen the mafaldini with pink peppercorns on Instagram a few hundred times), the sleeper hit is the soft-serve gelato, sprinkled with your choice of toppings like walnuts preserved in lemon syrup. </p>"
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Prospect Park  </h1><p> <a href= https://www.prospectpark.org/ target=_blank><img src='https://static1.squarespace.com/static/5a0c9f51d74cffe8305247af/t/5ac7d0b3aa4a996d8d7f6c03/1523044534786/js-prospectpark-6-boathouse.jpg?format=2500w' /></a></p><p>Address: Brooklyn, NY 11225</p><p>Designed by Frederick Law Olmsted and Calvert Vaux—the visionary designers behind Central Park—Prospect Park offers Brooklynites a chance to get back in touch with nature. Soak up the sunshine in the sprawling Long Meadow, take a guided hike to forage for wild herbs or explore the Ravine, one of the few remaining indigenous forests in the city.</p><p class='conCss'> </p>"
							
							},
							{
								"shop": "shop02",
								"cont": "<h1> Brooklyn Museum</h1><p> <a href= https://www.brooklynmuseum.org/ target=_blank><img src='https://ominy.org/wp-content/uploads/sites/2/2016/05/S06_BEEi170.jpg' /></a></p><p>Address: 200 Eastern Pkwy, Brooklyn, NY 11238</p><p>One of Kings County’s preeminent cultural institutions, this 560,000-square-foot venue made history as the first American museum to exhibit African objects as artwork. In addition to the more than 4,000 items in the Egyptian holdings, museumgoers can scope pieces by masters such as Cézanne, Monet and Degas, plus an entire center devoted to feminist art. (The venue is the permanent home of Judy Chicago’s massive installation The Dinner Party.)</p><p class='conCss'> </p>"
							
							},
							{
								"shop": "shop03",
								"cont": "<h1>Brooklyn Bridge </h1><p> <a href= https://www.brooklynbridgepark.org/ target=_blank><img src='https://images2.minutemediacdn.com/image/upload/c_crop,h_477,w_850,x_0,y_27/f_auto,q_auto,w_1100/v1555388188/shape/mentalfloss/istock_000018148947_small.jpg' /></a></p><p>Address: Brooklyn Bridge, New York, NY 10038 </p><p class='conCss'> Though the Brooklyn Bridge is no longer the largest suspension bridge in the world (as it was when it opened in 1883), it’s still an iconic New York City landmark. More than 100,000 cars pass between the Gothic towers every day, while the pedestrians and sightseers on the upper walkway number in the thousands. Whether you’re traveling by car, bike or foot, you’ll get spectacular views of lower Manhattan and Brooklyn Heights.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Brooklyn Botanic Garden </h1><p> <a href=https://www.bbg.org/  target=_blank><img src='https://img.grouponcdn.com/deal/a35586f739564706862edfe44ed49922/22/v1/c700x420.jpg' /></a></p><p>Address: 990 Washington Ave, Brooklyn, NY 11225 </p><p class='conCss'> Those searching for a little peace and quiet would do well to spend a few hours at this verdant oasis. The garden, which abuts two other neighborhood gems—The Brooklyn Museum and Prospect Park—was founded in 1910 and features hundreds of types of flora, laid out over 52 acres. Each spring, crowds descend on the space for the Sakura Matsuri Festival, during which hundreds of trees bloom along the Cherry Esplanade.</p>"
							}
						]
					}					
				],			
		},
		{
			"area": "StatenIsland",
			"CF": [
					{
						"name": "Hotel",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Hilton Garden Inn New York/Staten Island </h1><p> <a href= https://hiltongardeninn3.hilton.com/en/hotels/new-york/hilton-garden-inn-new-york-staten-island-EWRSIGI/index.html target=_blank><img src='https://media.timeout.com/images/103609161/750/422/image.jpg' /></a></p><p>Address: 1100 South Ave New York 10314  </p><p class='conCss'> You could argue that the fact that the jewel in the crown of Staten Island hotels is a 3-star Hilton Garden Inn sets a fairly low bar for accommodation in New York’s fifth borough. That said, this is a good one. Set within the 415 acres of preserved woodland of Staten Island's Corporate Park, this modern hotel is just a few minutes from Interstate 278. Each of its 198 guest rooms and suites features chic decor and is equipped with the signature Garden Sleep System, a TV, mini fridge, microwave and an ergonomic workstation with free wi-fi. Some suites even have whirlpool tubs. Lorenzo's Restaurant, Bar & Cabaret offers Italian and American cuisine along with live cabaret performances on select Fridays. Or, for the complete opposite experience, you could buy a meal from the 24-hour Pavilion Pantry and heat it in your in-room microwave. And for rooftop drinks, there’s the Above Rooftop Lounge. What makes this hotel particularly pleasant is a large international and local art collection displayed in and around the hotel, along with landscaped gardens, including an outdoor Florentine Gazebo and views of the surrounding woodland. There’s also an indoor pool and fitness center, and complimentary shuttles to Newark Airport and Staten Island Ferry.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Hampton Inn & Suites Staten Island </h1><p> <a href= http://www.hilton.com/search/hp/us/ny/staten_island/0/00000000000/0/0/0/0/3?WT.mc_id=zLADA0WW1XX2PSH3DA4PPC5PPC6MULTIBR7 target=_blank><img src='https://media.timeout.com/images/103609168/750/422/image.jpg' /></a></p><p>Address: 1120 South Ave New York 10314  </p><p class='conCss'> Next door to the Garden Inn is sibling property Hampton Inn & Suites. As with the former, you know what to expect from the reputation of the chain, and what you get is straightforward, but decent. Like its neighbor, Hampton Inn is set within the 415 acres of preserved woodland of Staten Island's Corporate Park, a few minutes from Interstate 278. This traditional West Shores Stable building has a rich equestrian theme. Each of its 107 rooms is equipped with a custom-designed bed, flat-screen TV, and free WiFi. There is also both a full desk and a lap desk for working on the bed (don’t go falling asleep mid-report!). You also get a microwave, a mini fridge and a coffeemaker. In addition, the suites boast whirlpool tubs and/or pull-out sofas. There’s a fitness center and indoor pool for working off the free hot breakfast they serve daily. And you can dine at neighboring Lorenzo’s in the evening, which offers live cabaret acts at certain times. The hotel also offers a complimentary shuttle service to Newark Airport and Staten Island Ferry.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Holiday Inn Staten Island</h1><p> <a href= https://www.holidayinn.com/hotels/us/en/find-hotels/hotel/list?fromRedirect=true&qSrt=sBR&qIta=99504425&icdv=99504425&glat=SEAR&qDest=Staten%20Island,%20NY,%20United%20States&setPMCookies=true&dp=true&gclid=Cj0KCQjw2v7mBRC1ARIsAAiw348950YKu9xkcFAkQNceXfA5bsGpf-Va3a8KMKsHBh-2Kzr9sZuYvuQaAlbUEALw_wcB&cid=31571&srb_u=1 target=_blank><img src='https://media.timeout.com/images/103609170/750/422/image.jpg' /></a></p><p>Address: 290 Wild Ave New York 10314  </p><p class='conCss'>This is the first of three hotels that forms Staten Island’s “budget strip” on the borough’s western edge. You know what a Holiday Inn is, therefore you know what this particular property is. It’s a clean, efficient, straightforward, suburban hotel, about an 8-minute drive from the College of Staten Island. Its 103 rooms are equipped with flat screen TVs and desks, plus premium cable channels and coffeemakers. LiLLies restaurant serves breakfast and dinner, and there’s also a modest fitness center to redress the balance. The list of freebies is impressive. Kids 19 and under stay free with an adult. There’s also free WiFi, a free hot breakfast bar and free parking. Plus you get a complimentary shuttle to the Staten Island Ferry. </p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Ramada Staten Island</h1><p> <a href=https://www.wyndhamhotels.com/ramada/staten-island-new-york/ramada-staten-island-hotel/overview  target=_blank><img src='https://media-cdn.tripadvisor.com/media/photo-s/02/96/51/de/filename-ramada-jpg-thumbnail0.jpg' /></a></p><p>Address: 535 Gannon Ave N, Staten Island, NY 10314 </p><p class='conCss'>The Ramada is the most centrally located of the six properties, just off Interstate 278 and a 10-minute walk from the College of Staten Island. Like all Ramadas, this is a no frills, budget hotel. Its 67 rooms, while “traditional” in decor, are reasonably well-appointed, featuring mini fridges, coffeemakers, flat-screen TVs and free WiFi. Some upgraded rooms even boast whirlpool tubs. In common with the other budget offerings, the list of freebies is impressive: parking (including large vehicles), newspapers, WiFi and continental breakfast. There is also an exercise facility and health club to rectify any early morning croissant indulgence. </p>"
							}
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Beso</h1><p> <a href=  target=_blank><img src='https://media.timeout.com/images/103686529/750/422/image.jpg' /></a></p><p>Address: 11 Schuyler St Staten Island 10301  </p><p class='conCss'>Though Beso is billed as a Spanish tapas bar, the menu at this sexy little spot goes far beyond Iberia (by way of Cuba, Mexico and Puerto Rico, for starters). What it lacks in focus, it makes up for in big flavors and conviviality. Grab a fruity-sweet glass of tequila-spiked sangria and go straight for the shrimp-and-calamari ceviche marinated in orange and lime juice, or the pan y cerdo with garlic-infused shredded pork with melted Mahón cheese on crostini. </p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Alor Café </h1><p> <a href=  target=_blank><img src='https://media.timeout.com/images/100546153/750/422/image.jpg' /></a></p><p>Address: 2110 Richmond Rd New York  </p><p class='conCss'> Deep in the quiet Staten Island enclave of Grant City you'll find Alor Café. During brunch, the usually pulsating lounge foregoes the DJ in favor of flat screens playing cartoons. Grab a booth at an arched window and dig into the avocado breakfast burrito, sweet corn omelette or fried-egg-topped chicken schnitzel. Tear the kids away from the restaurant's stash of Wikki Stix by offering them a PB&J and banana sandwich.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>denino's pizzeria tavern</h1><p> <a href= https://www.google.com/search?q=denino%27s+pizzeria+tavern&oq=Denino%27s+Pizzeria+Tavern&aqs=chrome.0.0l6.763j0j9&sourceid=chrome&ie=UTF-8 target=_blank><img src='http://www.mrnystyleandtravel.com/wp-content/uploads/2018/07/Den-Exterior.jpg' /></a></p><p>Address: 524 Port Richmond Ave, Staten Island, NY 10302 </p><p class='conCss'>Denino’s Pizzeria is a landmark in New York, with our award winning, thin-crust pizza.We originally opened in 1937 as a full tavern on Richmond Avenue, Staten Island until Carlo Denino introduced Pizza in 1951. Since then, Denino’s Pizzeria and Tavern has been renowned for our pizza pie and Italian dinner platters, which we always prepare fresh daily. We use our family’s recipes for Chicken Parmigiana, Meatballs and Sausage and over the years we’ve added our own version of tavern favorites like Wings, Scungilli and Hero Sandwiches. Everything is always made from scratch, never frozen, and cooked to order. Whenever New Yorkers come home, they come home to Denino’s Pizzeria for thin crust, crispy, Cheesy Pizza piping hot right out of the oven. When you visit a Denino’s Restaurant you are sharing in a part of our legacy and family tradition that started nearly 8 decades ago.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Jade Island </h1><p> <a href=  target=_blank><img src='https://media.timeout.com/images/100493483/750/422/image.jpg' /></a></p><p>Address: 2845 Richmond Ave Staten Island 10314  </p><p class='conCss'> A tiki bar not far from the Fresh Kills Landfill may not always be the ideal spot to appreciate a sea breeze, but this irony-free place will help you forget that thought. Take a seat in a bamboo booth illuminated by a taxidermic blowfish lamp, and enjoy rum drinks served in coconuts or hula-girl glasses.</p>"
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Snug Harbor Cultural Center</h1><p> <a href= https://snug-harbor.org/ target=_blank><img src='https://media.timeout.com/images/101485441/750/422/image.jpg' /></a></p><p>Address: 1000 Richmond Terr New York 10301  </p><p class='conCss'> Sitting just a ferry ride away from the hustle and bustle of Manhattan, this Staten Island gem, a former home for retired sailers, is still somewhat of a secret. Spread across 83 acres, the area boasts an enormous botanical garden and cultural center surrounded by cobblestone streets and tiny paths of Victorian and Tudor homes. One of the most popular attractions here is the Chinese Scholar’s Garden, fitted with magnificent rocks meant to resemble mountains inspired by the poetry and paintings of Confucian, Buddhist and Taoist monks, as well as a bamboo forest path and Koi-filled pond.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>The National Lighthouse Museum </h1><p> <a href=https://www.google.com/search?q=the+national+lighthouse+museum&oq=The+National+Lighthouse+Museum&aqs=chrome.0.0j69i60.711j0j1&sourceid=chrome&ie=UTF-8 target=_blank><img src='https://media.timeout.com/images/105328887/750/422/image.jpg' /></a></p><p>Address: 200 The Promenade at Lighthouse Point, St. George Staten Island 10301  </p><p class='conCss'> Aside from gazing at more than 180 lighthouse models from 29 states, peeping life-size historical images and reading the personal stories of various beacon keepers, this museum sells tickets ($60) for boat tours that explore nearby lighthouses, ship graveyards and other attractions on New York Harbor and the East and Hudson rivers.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>St. George Theatre </h1><p> <a href= https://stgeorgetheatre.com/ target=_blank><img src='https://assets.dnainfo.com/photo/2017/6/1498498687-303136/larger.jpg' /></a></p><p>Address: 35 Hyatt St, Staten Island, NY 10301 </p><p class='conCss'>Centered in the historic St. George District of Staten Island, just steps from the iconic Staten Island Ferry, the St. George Theatre was the most magnificent theatre on Staten Island. Solomon Brill of the Isle Theatrical Company broke ground on a beautiful 2,800 seat venue, in August of 1928 and the doors opened on December 4th, 1929. The cost of the project, which included an attached office complex, was two million dollars, $500,000 of which was for the theatre. Brill, who owned several other theatres on the Island and once owned a nickelodeon with William Fox of 20th Century Fox fame, promised to bring top-of-the-line vaudeville to the borough for an admission fee of 75 cents. He envisioned the St. George as a “dream” show house rivaling Manhattan’s cathedrals of cinema. </p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Staten Island Ferry </h1><p> <a href= https://www.siferry.com/ target=_blank><img src='https://media.timeout.com/images/100559553/750/422/image.jpg' /></a></p><p>Address: South St New York 10006  </p><p class='conCss'>The price of a harbor crossing between Staten Island and lower Manhattan may be the only activity in New York City that’s cheaper today than it was in 1817. Back then, it was 25 cents; today, it’s free. This 24-hour ferry is a lifeline for commuters making their way from NYC’s southernmost borough, but it’s also a boat trip affording some of the finest views in the world. Keep your eyes peeled for Governors Island to the east and Ellis Island and Lady Liberty to the west as the Manhattan skyline recedes in the vessel’s wake. </p>"
							}
						]
					}					
				],			
		}
	];

	return data;

}

function readData(id1,id2,shops){
	var data = infoData();
	for(var i in data){
		if(data[i].area == id1){
			var dataCF = data[i].CF;
			for(var j in dataCF){
				if(dataCF[j].name == id2){
					var dataInfo =  dataCF[j].info;	
					for(var k in dataInfo){
						if(dataInfo[k].shop == shops){
							return dataInfo[k].cont;
						}
					}
				}
			}
		}
	}
}
