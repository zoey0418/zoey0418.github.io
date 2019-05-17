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
								"cont": "<h1>Opera House Hotel</h1><p><img src='' /></p><p>436 E 149th St, The Bronx, NY 10455</p><p class='conCss'>A Historic Hotel In The Bronx.Our historic Bronx hotel offers a unique experience to guests retreating to NYC. As a cherished establishment in the South Bronx, the Opera House Hotel was once the home of the great Bronx Opera House. Now newly-renovated to preserve the beauty of this Bronx icon, guests are able to stay in the same place that hosted transcendent theater performances of Harry Houdini, the Marx Brothers, and John and Lionel Barrymore.</p><p class='conCss'>Residence Inn by Marriott New York The Bronx at Metro Center Atrium</p><p><img src='' /></p><p class='conCss'>1776 Eastchester Rd, The Bronx, NY 10461</p><p class='conCss'>Experience an enriching stay at Residence Inn New York The Bronx at Metro Center Atrium. Our pet-friendly hotel is part of the Hutchinson Metro Center, Metro Center Atrium and Bronx Locale, providing a prime location near a plethora of destinations. Visit Yankee Stadium, Citi Field, Bronx Zoo, Montefiore Medical Center, Calvary Hospital, Einstein School of Medicine, Fordham University, New York Botanical Garden and more. At the end of the day, retreat to our suites with spacious living areas, fully equipped kitchens, luxury bedding, free Wi-Fi and ergonomic workstations. Use our complimentary grocery shopping service to get fresh ingredients delivered to your door. Start your day with our daily free breakfast buffet, then stop by our in-house Applebee's for a delicious lunch or dinner. Stay on top of your exercise routine by using our fitness center. Traveling for business? Utilize our business center and two flexible event rooms. Feel at home at Residence Inn New York The Bronx at Metro Center Atrium.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Holiday Inn</h1><p><img src='' /></p><p>500 Exterior Street , Bronx, New York 10451</p><p class='conCss'>Stay Smart at Holiday Inn Express Bronx located 10 minutes from Yankee Stadium. Our hotel is also conveniently located only 2 minutes from the nearest subway station. This insures convenient access to New York City attractions without the NYC prices. Metropolitan Museum of Art, the Empire State Building, Times Square, Central Park and the Statue of Liberty. Only 5 miles from The Bronx Zoo and NY Botanical gardens. We are near many of the business and transportation hubs. Situated within minutes of both New York airports and close to most major NYC expressways. With our convenient location you can make it to your meeting on time or enjoy your leisure time.During your visit to our hotel, enjoy amenities that include fitness center, free high-speed Internet access, 24-hour snack shop and a complimentary hot breakfast bar with our signature cinnamon rolls. You can also take advantage of our business center that offers copying and fax services. Book your hotel reservations now and take advantage of our great hotel deals and rates without the NYC prices. For a unique experience upgrade to our View Rooms with great views of Harlem and NYC. Make the smart choice - choose the Holiday Inn Express NYC Bronx Stadium Area.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Best Western Plus Stadium Inn</h1><p><img src='' /></p><p>926 Sedgwick Ave Bronx NY 10452</p><p class='conCss'>Best Western Plus Stadium Inn is the newest addition to the up and coming Highbridge section of the Bronx. The hotel is within walking distance to Yankee Stadium and public transportation with access throughout NYC. Our guests enjoy easy access to Major Deegan Expressway, the George Washington Bridge and the close proximity to Manhattan. With amenities such as a modern fitness center, a complimentary full hot breakfast buffet, Wi-Fi and a 24-hour business center, the Best Western Plus Stadium Inn is sure to be your home away from home.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Residence Inn</h1><p><img src='' /></p><p>1776 Eastchester Rd, The Bronx, NY 10461</p><p class='conCss'>Experience an enriching stay at Residence Inn New York The Bronx at Metro Center Atrium. Our pet-friendly hotel is part of the Hutchinson Metro Center, Metro Center Atrium and Bronx Locale, providing a prime location near a plethora of destinations. Visit Yankee Stadium, Citi Field, Bronx Zoo, Montefiore Medical Center, Calvary Hospital, Einstein School of Medicine, Fordham University, New York Botanical Garden and more. At the end of the day, retreat to our suites with spacious living areas, fully equipped kitchens, luxury bedding, free Wi-Fi and ergonomic workstations. Use our complimentary grocery shopping service to get fresh ingredients delivered to your door. Start your day with our daily free breakfast buffet, then stop by our in-house Applebee's for a delicious lunch or dinner. Stay on top of your exercise routine by using our fitness center. Traveling for business? Utilize our business center and two flexible event rooms. Feel at home at Residence Inn New York The Bronx at Metro Center Atrium.</p>"
							}
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Moss Cafe</h1><p><img src='' /></p><p>located at 3260 Johnson Ave in Riverdale</p><p class='conCss'>Lily Weisberg had planned for coffee with snacks. However, the Bronx neighborhood clamored for more when she opened Moss Cafe. Weisberg's menu then expanded. The food is mostly organic, much of it locally sourced, healthy, fresh and kosher.  It turns out that not just kosher eaters love Moss Cafe - it attracts a diverse crowd. Weisberg converted to Judaism, and that is when she also became kosher. She wants people to enjoy food that is modern and healthy, even if it is kosher. At Moss, they make their own ricotta, dressings, and yogurt. They even smoke their own salmon. It closes early on Fridays for Shabbat and re-opens Sunday. </p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Travesias</h1><p><img src='' /></p><p>Website: https://travesiasbx.com/bronx-throgs-neck-travesias-about</p><p class='conCss'>Travesias is literally translated in English to 'Travels', The owners have traveled to many countries throughout the world and always made sure to try the top-rated restaurants as well as the traditional 'street' type food the country had to offer</p><p class='conCss'>Latin Fusion Cuisine is a reflection of a few of the many countries he has been to and/or are planning to visit in the near future. It was also the birth of a new concept and culinary style that fused together different spices, culinary techniques, traditional dishes, etc from around the world with another. The idea was simple yet innovative, Travesias has brought together Latin with Asian, Latin with Indian and even Latin with Latin. It's a groundbreaking concept with amazing flavors and combinations that will take you and your palate to places you have never been.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Ripe Kitchen & Bar</h1><p><img src='' /></p><p>coming soon....</p><p class='conCss'></p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Hungry Bird</h1><p><img src='' /></p><p>coming soon....</p><p class='conCss'></p>"
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Bronx Zoo</h1><p><img src='' /></p><p>2300 Southern Blvd</p><p class='conCss'>The biggest urban zoo in the country happens to be accessible with just a swipe of your MetroCard. Lions, tigers and bears are all there, along with 600 other species. Popular exhibits include the Congo Gorilla Forest, where primates run and play, and the Wild Asia Monorail, which takes you past the aforementioned tigers and other endangered creatures in their expansive habitats.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Yankee Stadium</h1><p><img src='' /></p><p>Yankee Stadium is a baseball park located in Concourse, Bronx, New York City. It is the home field for the New York Yankees of Major League Baseball (MLB), and New York City FC of Major League Soccer (MLS). The $2.3 billion stadium, built with $1.2 billion in public subsidies, replaced the original Yankee Stadium in 2009. It is located one block north of the original, on the 24-acre former site of Macombs Dam Park; the 8-acre site of the original stadium is now a public park called Heritage Field. The stadium incorporates replicas of some design elements from the original Yankee Stadium, and like its predecessor, it has hosted additional events, including college football games, soccer matches, two outdoor NHL games, and concerts. Although Yankee Stadium's construction began in August 2006, the project spanned many years and faced many controversies, including the high public cost and the loss of public parkland. The overall price tag makes the new Yankee Stadium the most expensive stadium ever built.</p><p class='conCss'></p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>New York Botanical Garden</h1><p><img src='' /></p><p>2900 Southern Blvd., Bronx, New York 10458</p><p class='conCss'>The New York Botanical Garden is an iconic living museum, a major educational institution, and a renowned plant research and conservation organization. Founded in 1891 and now a National Historic Landmark, it is one of the greatest botanical gardens in the world and the largest in any city in the United States, distinguished by the beauty of its diverse landscape and extensive collections and gardens, as well as by the scope and excellence of its multidisciplinary exhibitions and programs.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Wave Hill</h1><p><img src='' /></p><p>675 West 252nd Street Bronx NY 10471</p><p class='conCss'>Wave Hill, a glorious, scenic public garden, is tucked away in Riverdale, the northernmost region in the city. In the 19th and early 20th century, the giant estate and grounds were owned and rented by various notable people including bankers, conductors, imminent zoologists and Theodore Roosevelt°Øs family. Today, head there to frolic along the hills and appreciate the manicured gardens, lovely architecture and staggering views of the Hudson River and the Palisades.</p>"
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
								"cont": "<h1>The Plaza</h1><p><img src='' /></p><p>768 5th Ave, New York, NY 10019</p><p class='conCss'>Before opening The Plaza in 1907, its designers curated a stunning collection of crystal chandeliers and gold-encrusted china in preparation for unveiling the grandest hotel in America. Numerous luminaries have crossed its opulent threshold, from presidents and politicians to royals, celebs, and Beatles. Ambitious moguls have made and lost fortunes here as glittering society waltzed in the Grand Ballroom, most famously for Truman Capote°Øs legendary black and white ball. The Plaza has also hosted fictional characters, from the Oak Room°Øs starring role alongside Cary Grant in Hitchcock°Øs classic thriller North By Northwest to Macaulay Culkin°Øs lobby romp in Home Alone 2. But the best known may be a bright-eyed girl named Eloise, who came to life through a beloved book series. Guests can stay in a bright-pink Eloise-inspired suite and take afternoon tea Eloise-style in The Palm Court.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>The St.Regis</h1><p><img src='' /></p><p>Two East 55th Street At, 5th Ave, New York, NY 10022</p><p class='conCss'>This landmark Midtown hotel has long been synonymous with New York sophistication and glamour as well as unabashed fame and fortune. After mogul John Jacob Astor IV opened the architectural stunner in 1904 and met a famously tragic end with the sinking of the Titanic, the St. Regis continued to shine. Celebrities like Salvador Dali, Marlene Dietrich, and John Lennon roamed the hallways, many staying for long-term residencies. Fictional characters flourished too, including everyone°Øs favorite spy, James Bond; author Ian Fleming placed the hotel at center stage in Live and Let Die. King Cole Bar and the Maxfield Parrish painting by the same name generate ample star attraction as well. Be sure to have a Bloody Mary at the bar where the spicy cocktail is said to have originated.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Four Seasons Hotel</h1><p><img src='' /></p><p>57 E 57th St, New York, NY 10022</p><p class='conCss'>One of the most luxurious and famous hotels in New York, the Four Seasons showcases a soaring I.M. Pei-designed lobby and a 52nd-floor Penthouse Suite (reported to ring it at upwards of $50,000 per night), featuring four balconies, a private library, and a chauffeured Rolls-Royce. The hotel is situated on Billionaire°Øs Row, between Park and Madison Avenues on 57th Street, and features Manhattan°Øs richest views. Each of the 368 rooms and suites features lavish decor sure to make you feel like a celebrity and ultra-luxe relaxation spots like the serene indoor pool and spa.  Sip a custom-barrel bourbon by the Bar°Øs fireplace while taking in the remarkable lobby.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Algonquin Hotel</h1><p><img src='' /></p><p>59 West 44th Street, New York, New York 10036 USA</p><p class='conCss'>A long-standing symbol of classic style and seductive eccentricity, The Algonquin, Hotel Times Square has withstood the test of time. Designated as a New York City Historic Landmark, our hotel's doors originally opened in 1902; since that time, we have earned a reputation for total excellence. Step off of Manhattan's West 44th Street and into our hotel, where an intimate yet lively lobby welcomes guests. Accommodations feature plush bedding, sleek bathrooms and modern technology, setting the stage for relaxation and productivity. Dine with us at Round Table, our renowned restaurant, or visit Blue Bar to sip on an expertly prepared martini and eavesdrop on Theatre District gossip. When you're ready to explore, a wealth of iconic attractions are nearby, including Times Square, Rockefeller Center, Radio City Music Hall, Central Park and the shops of Fifth Avenue. Whatever brings you here, we know you'll return for years to come to experience the enduring charm of The Algonquin, Hotel Times Square.</p>"
							}
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Katz's Delicatessen</h1><p><img src='' /></p><p>205 E Houston St</p><p class='conCss'>This cavernous cafeteria is a repository of New York history°™glossies of celebs spanning the past century crowd the walls, and the classic Jewish deli offerings are nonpareil. Start with a crisp-skinned, all-beef hot dog, then flag down a meat cutter and order a legendary sandwich. The brisket sings with horseradish, and the thick-cut pastrami stacked high between slices of rye is the stuff of dreams.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Peter Luger</h1><p><img src='' /></p><p>178 Broadway</p><p class='conCss'>Although a slew of Luger copycats have prospered in the last several years, none have captured the elusive charm of this beer-hall style eatery, with well-worn wooden floors and tables, and waiters in waist coats and bow ties. Excess is the thing, like the famous porterhouse for two, which is 44 ounces of sliced prime beef. Go for it all°™it°Øs a singular New York experience that°Øs worth having.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Lombardi's</h1><p><img src='' /></p><p>32 Spring St</p><p class='conCss'>Gennario Lombardi opened his shop in Soho in 1905°™the first pizzeria in the U.S. It°Øs hard to vouch for how the pizzas tasted a century ago, but there°Øs more elbow room now after a renovation, if not the charm of the old joint. Still, Lombardi°Øs continues to bake a hot contender for best pie.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Keens Steakhouse</h1><p><img src='' /></p><p>72 West 36st</p><p class='conCss'>Keens Steakhouse owns the largest collection of churchwarden pipes in the world. The tradition of checking one’s pipe at the inn had its origins in 17th century Merrie Old England where travelers kept their clay at their favorite inn – the thin stemmed pipe being too fragile to be carried in purse or saddlebag. Pipe smoking was known since Elizabethan times to be beneficial for dissipating “evil homourse of the brain.” Keens's pipe tradition began in the early 20th century. The hard clay churchwarden pipes were brought from the Netherlands and as many as 50,000 were ordered every three years. A pipe warden registered and stored the pipes, while pipe boys returned the pipes from storage to the patrons. The membership roster of the Pipe Club contained over ninety thousand names, including those of Teddy Roosevelt, Babe Ruth, Will Rogers, Billy Rose, Grace Moore, Albert Einstein, George M. Cohan, J.P. Morgan, Stanford White, John Barrymore, David Belasco, Adlai Stevenson, General Douglas MacArthur and “Buffalo Bill” Cody. </p>"
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Time Square</h1><p><img src='' /></p><p>Broadway 7th 42st</p><p class='conCss'>The Theater District is the teeming heart of Midtown West. In the pedestrian plazas of Times Square, costumed characters beckon to energetic crowds under the pulsing lights of towering digital billboards. Locals and tourists gather on the giant red staircase above the TKTS booth, which sells tickets to Broadway shows running at the area’s historic theaters. On busy 42nd Street, chain stores and restaurants abound.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Statue of Liberty</h1><p><img src='' /></p><p>Address:Liberty Island NY 10004</p><p class='conCss'>Perhaps no other New York attraction is as iconic°™or as avoided by tourist-averse New Yorkers°™as Lady Liberty. Our tip: Dodge the foam-crown-sporting masses and skip the line for the ferry by prebooking a combo cruise-and-tour ticket (visit statuecruises.com for more information). A climb to the crown affords a panoramic view of New York Harbor and the chance to see the literal nuts and bolts of Fr®¶d®¶ric Auguste Bartholdi°Øs creation. We also recommend stopping in the museum on Liberty Island, if only to marvel at the initial ambivalence of 19th-century New Yorkers when they were asked to fund the construction of the pedestal. Ferries depart from Castle Clinton°™Jonathan Shannon</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Empire State Building</h1><p><img src='' /></p><p>350 Fifth Ave</p><p class='conCss'>Built in 1931 over the span of just 11 months, this 1,454-foot Art Deco skyscraper has long stood as symbol of American innovation and ambition, and was recognized as one of the Seven Wonders of the World by the American Society of Civil Engineers. Looming large as ever in New York°Øs skyline, the building is one of the most visited attractions in the city. With so many clamouring for the chance to take the 25-minute elevator ride to the open air observation deck on the 86th floor, it°Øs best to arrive early, between 8am and noon, for a chance to take in those 360-degree views.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>One World Observatory</h1><p><img src='' /></p><p>coming soon....</p><p class='conCss'></p>"
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
								"cont": "<h1>Queens Hotel</h1><p><img src='' /></p><p>Website: http://nyqueenshotel.com/</p><p class='conCss'>3.1 mi from Citi Field, The Queens Hotel is located in Queens and provides rooms with free WiFi. The property is set 3.7 mi from Arthur Ashe Stadium and 7.5 mi from Aqueduct Racetrack. Belmont Park Race Track is 11 mi away. All rooms in the hotel are equipped with a flat-screen TV with satellite channels. All rooms have a private bathroom fitted with a bath, while certain rooms come with a kitchen. All units have a desk. A continental breakfast is served daily at the property. Staff are available to help at the 24-hour front desk. American Museum of the Moving Image is 2.4 mi from The Queens Hotel. LaGuardia Airport is 3.7 mi away. This property is also rated for the best value in Queens! Guests are getting more for their money when compared to other properties in this city.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Best Western Plus Plaza</h1><p><img src='' /></p><p>Website: https://www.bestwestern.com/en_US/book/hotel-rooms.33143.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:33143</p><p class='conCss'>Welcome to the Best Western Plus Plaza Hotel, where guests will find friendly customer service and superior accommodations at an affordable price. Located just five minutes from public transportation to Manhattan this Long Island City hotel features well-appointed guest rooms with cable satellite television and free wireless high-speed Internet access. The Friendly staff at the BEST WESTERN Plus Plaza Hotel is ready to ensure a memorable stay in Long Island City</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>La Quinta Inn</h1><p><img src='' /></p><p>website: https://www.wyndhamhotels.com/laquinta/long-island-city-new-york/la-quinta-inn-queens-new-york-city/overview</p><p class='conCss'>Welcome to La Quinta Inn® by Wyndham Queens (New York City), located in Long Island City, Queens—just a short subway or cab ride from midtown and various New York City attractions. Our comfortable hotel offers a quieter alternative to staying in Manhattan, as well as easy access to both LaGuardia Airport (LGA) and John F. Kennedy International Airport (JFK). Catch a concert at Forest Hills Stadium, cheer on the Mets at Citi Field, or venture into Manhattan to explore iconic buildings, parks, and more. Make the most of your stay with free daily breakfast, high-speed WiFi, and our business center.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Asiatic Hotel</h1><p><img src='' /></p><p>website: http://www.asiatichotelnyc.com/</p><p class='conCss'>Flushing, New York is a vibrant community that is continuously growing and developing. Emerging as New York City’s new Chinatown, Flushing is a fabulous place to explore Asian culture. Downtown Flushing is the city’s fourth largest central business district with hundreds  of commercial and retail establishments. Best of all, transportation to anywhere in New York City and Long Island is just a matter of minutes away. New York City Subway Line (7 Train) goes directly to 42nd Street Times Square and the Long Island Rail Road (LIRR) serves commuters traveling from Long Island to 34th Street Penn Station in Manhattan. In addition commuter buses network all throughout the borough of Queens, Parts of Long Island and even directly to the acclaimed Bronx zoo.</p>"
							},
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>Kal</h1><p><img src='' /></p><p>website:https://www.yelp.com/biz/kal-astoria</p><p class='conCss'>Such a great addition to the plethora of restaurants on 30th ave. It has a small dining area with simple, concrete design. I have not dined in but did seamless last night and the food was ON POINT.  If there is one thing you have to do: GET THE PORK BUN ! It surely is probably the best thing this side of Queens.  Bimbimbap and the Hot pot soup also did not disappoint. They are not cheap with the bulgogi like other Korean restaurants. I can't wait to come in and dine. Their prices are fair and they do have lunch specials and in-dining $4 specials. </p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Chingunae Pocha</h1><p><img src='' /></p><p>website: https://chingunae.com</p><p class='conCss'>Welcome to Chingunae Pocha! What in the world is Pocha? Pocha is short for Pojangmacha, and the term literally means 'covered wagon' and it's commonly used to refer to the iconic tented street stalls of Korea, known for its affordable yet hearty and comforting food and soju drinks. Come swing by Chingunae today and experience the ultimate Korean drinking culture right here in the heart of Flushing, NY</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Yummy Tummy Asian Bistro</h1><p><img src='' /></p><p>website:https://www.yummytummyny.com/aboutus.aspx</p><p class='conCss'>Yummy Tummy Asian Bistro offers delicious dining and takeout to Flushing, NY. Yummy Tummy Asian Bistro is a cornerstone in the Flushing community and has been recognized for its outstanding Chinese cuisine, excellent service and friendly staff. Our Chinese restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Lokanta</h1><p><img src='' /></p><p>Website: https://thelokanta.com/menu-margot</p><p class='conCss'>If you’re a connoisseur of Turkish food and controversialist chefs, chances are you know the work of Orhan Yegen, the passionate, ponytailed owner of Sip Sak in Turtle Bay, who has managed to build a career in the hospitality industry based on the motto “The customer is always wrong.” The last time the Underground Gourmet checked in with him, Yegen told us that that was it. The end was near. He’d had enough. After four decades in the restaurant business, he — like Al Pacino in Godfather 3 — wanted out. “I am 60 years old,” he said in a wistful croak. “I give it maybe two years, then I want to retire to Turkey and teach.” </p><p class='conCss'>Two years having come and gone, imagine our surprise to find Yegen in Astoria, at a new restaurant called Lokanta practically giddy and making Rebecca of Sunnybrook Farm look like Tywin Lannister by comparison. There he was roasting lamb, stuffing grape leaves, and pinching minuscule manti between his thumbs and forefingers like there was no tomorrow. What Yegen really wanted out of, you see, was Manhattan, and now he’s realized his goal, though he still remains the owner of Sip Sak. What, you ask, is so terrible and soul-crushing about running a restaurant in Manhattan? The short answer, according to Yegen, is the customers. “They are like furniture,” he says. Furniture? “Yes, they are mindless eaters, their orders are rote, they are not interested in food. They are not students of gastronomy. When they dine out, which is often, it is a business, not a pleasure. They calculate every cent. They are there, but they are not there — like furniture. I always tell my waitresses, ‘Don’t be a furniture.’ As an artist, it is very sad for me.”</p>"
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "<h1>The Unisphere and the Panorama of NYC</h1><p><img src='' /></p><p>website:https://queensmuseum.org/2013/10/panorama-of-the-city-of-new-york</p><p class='conCss'>The Unisphere is a spherical stainless steel representation of the Earth, located in Flushing Meadows–Corona Park in the borough of Queens, New York City. The sphere, which measures 140 feet (43 m) high and 120 feet (37 m) in diameter, was commissioned as part of the 1964 New York World's Fair.[1] The Unisphere is one of the borough's most iconic and enduring symbols.Commissioned to celebrate the beginning of the space age, the Unisphere was conceived and constructed as the theme symbol of the 1964–1965 New York World's Fair. The theme of the World's Fair was 'Peace Through Understanding' and the Unisphere represented the theme of global interdependence. It was dedicated to 'Man's Achievements on a Shrinking Globe in an Expanding Universe‘.</p>"
							},
							{
								"shop": "shop02",
								"cont": "<h1>Bohemain Hall and beer Garden</h1><p><img src='' /></p><p>website: https://bohemianhall.com/</p><p class='conCss'>The purposes of the Bohemian Citizens’ Benevolent Society of Astoria, Inc. are to encourage, support and maintain Schools, Dramatics, Lectures and Libraries for Czech and Slovak children and children of Czech and Slovak parentage: to maintain a social home for people of Czech and Slovak ancestry, in which the Czech and Slovak cultures may be taught and blended with American traditions and culture. The Society owns and manages the Bohemian Hall & Beer Garden.  The Society consists of individuals of Czech and Slovak descent and their families who have pledged themselves to work for and promote the purposes for which the Society exists.</p>"
							},
							{
								"shop": "shop03",
								"cont": "<h1>Museum of the moving Image</h1><p><img src='' /></p><p>website:http://www.movingimage.us/</p><p class='conCss'>Mission: Museum of the Moving Image advances the understanding, enjoyment, and appreciation of the art, history, technique, and technology of film, television, and digital media by presenting exhibitions, education programs, significant moving-image works, and interpretive programs, and collecting and preserving moving-image related artifacts. Screenings:Each year the Museum screens more than 400 films in a stimulating mix of the classic and the contemporary. With live music for silent films, restored prints from the world's leading archives, and outstanding new films from the international festival circuit, Museum programs are recognized for their quality as well as their scope. The Museum’s diverse screening program presents a panoramic view of the moving image, from the global discoveries presented in the annual showcase First Look to the popular ongoing series See It Big!, which celebrates the excitement and immersive power of big-screen moviegoing.</p>"
							},
							{
								"shop": "shop04",
								"cont": "<h1>Jckson Heights, an Indian and South Asian Neighborhood</h1><p><img src='' /></p><p></p><p class='conCss'>The great borough of Queens is known for its polyglot ethnic neighborhoods. Often it seems that every immigrant group in Queens has at least one representative on a single block. But the Little India section of the Queens neighborhood of Jackson Heights is different. Seventy-fourth Street between Roosevelt Avenue and 37th Avenue and the surrounding blocks are the heart of a South Asian neighborhood.Indians, Bangladeshis, and Pakistanis call this area home and come here to shop and eat. It's the place for some of the highest quality Indian food in New York City; South Asian jewelry, clothes and music; Bollywood films; and plain old people-watching. This is a great neighborhood for strolling and taking it all in.</p>"
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
								"cont": "coming soon..."
							},
							{
								"shop": "shop02",
								"cont": "coming soon..."
							},
							{
								"shop": "shop03",
								"cont": "coming soon...."
							},
							{
								"shop": "shop04",
								"cont": "coming soon..."
							}
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "coming soon..."
							},
							{
								"shop": "shop02",
								"cont": "coming soon..."
							},
							{
								"shop": "shop03",
								"cont": "coming soon..."
							},
							{
								"shop": "shop04",
								"cont": "coming soon..."
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "coming soon..."
							},
							{
								"shop": "shop02",
								"cont": "coming soon..."
							},
							{
								"shop": "shop03",
								"cont": "coming soon..."
							},
							{
								"shop": "shop04",
								"cont": "coming soon..."
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
								"cont": "coming soon..."
							},
							{
								"shop": "shop02",
								"cont": "coming soon..."
							},
							{
								"shop": "shop03",
								"cont": "coming soon..."
							},
							{
								"shop": "shop04",
								"cont": "coming soon..."
							}
						]
					},
					{
						"name": "Restaurtants",
						"info": [
							{
								"shop": "shop01",
								"cont": "coming soon..."
							},
							{
								"shop": "shop02",
								"cont": "coming soon..."
							},
							{
								"shop": "shop03",
								"cont": "coming soon..."
							},
							{
								"shop": "shop04",
								"cont": "coming soon..."
							}
						]
					},
					{
						"name": "Landmarks",
						"info": [
							{
								"shop": "shop01",
								"cont": "coming soon..."
							},
							{
								"shop": "shop02",
								"cont": "coming soon..."
							},
							{
								"shop": "shop03",
								"cont": "coming soon..."
							},
							{
								"shop": "shop04",
								"cont": "scoming soon..."
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