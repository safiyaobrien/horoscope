function start(){
    var month = document.getElementById("month").value;
    console.log(month);
    var day = document.getElementById("day").value;
    console.log(day);
    var signs = getSign(month,day);
    var name = document.getElementById("userName").value;

    document.getElementById("sign").innerHTML = sign[signs];
    document.getElementById("message").innerHTML = name + "!   " + message[signs];
    document.getElementById("image").src = image[signs];
}

var sign = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo" , "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Not a Date!"];
var message = ["The home environment you create often mirrors your inner feelings—are you living in a cluttered mess or in a serene, spare space? It's time for you to look at how where you live affects your feelings. And the good news is, you can change how you feel by changing your environment. Look at the stuff around your house—pick out what doesn't make you happy anymore, and then get rid of it. Donating usable items to a charity will make you feel great.",
    "It is high time you realized that being in love isn't the solution to all of your problems! Stop focusing on what you do not have, and start focusing on what you do have—which is an awful lot. So if you are not in a relationship, remember that you are still loved and still have love to give. So practice that! Tell the people you care about how you feel. If you are in a relationship right now, then do the same thing! Express your love and devotion verbally.",
    "Going backwards isn't always a bad thing. If you've been contemplating moving back to your hometown, calling up an ex, or going back to school, the stars say you should investigate the idea further. List the pros and cons, and you should be able to make a solid decision by the end of the day. Once you decide, it's important to move forward on your plan. Call up a realtor, send that 'just to say hi' email to your ex, or request some course catalogs.",
    "Although today is a very good day for starting new searches and new journeys, there is no need to rush around making plans and booking tickets. It's important that you plan your next vacation at a slow, deliberate pace. If you are in the midst of a career change, put some work into it today. Update your resume and put out a few feelers on the job market. The little seeds that you plant today will soon grow into some beautiful new opportunities.",
    "Making lists is a great way to save yourself time right now—and a great way to help yo@lilahfraserfollowmeoninstagramurself navigate some tricky waters ahead. There is no need to worry about where you're going or how you're going to get there. Busy yourself with smaller, more manageable tasks. Write down all the chores you need to take care of and all the errands you have to run. Remind yourself about what you can control in the world. You may discover that you have more power than you thought.",
    "If you're in the midst of trying to make a big decision, you're in luck today—there will be a lot of obvious signs pointing you in the right direction. You can turn off your intuitive powers completely and give up the exhausting exercise of internally debating the pros and cons. Today it's all going to be laid out for you in black and white. Of course, that doesn't mean you have to make the 'right' decision. Mistakes can sometimes be very educational.",
    "If you think being modest about your accomplishments will get you noticed today, you need to think again. The shyer you are, the less likely it is that you will be noticed. The time has come for you to do a little bit of self-promotion. There are plenty of facts and figures that objectively show how valuable you are. Get them out and show them to the people who are in charge of giving you the rewards you so richly deserve.",
    "While your last family gathering offered much more drama than bonding, you cannot assume that the next one will be as unpleasant. Keep an open mind about the women in your life, especially those who are related to you. They have a tremendous amount of love for you, although they don't always know how to communicate it to in a caring way. Give them the benefit of the doubt and greet them warmly the next time you see them. You're lucky to have them in your life.",
    "If personal issues have been distracting you from your career or schoolwork, today offers you a chance to settle some issues and move forward in a much brighter direction. All the terms of this arrangement might not be to your liking, but if you are flexible about a few things, you'll be able to find a new appreciation for the smaller things in life. Suddenly, beauty will be all around you, and you'll realize you have the best friends and family in the world.",
    "SCORPIO!!!! If personal issues have been distracting you from your career or schoolwork, today offers you a chance to settle some issues and move forward in a much brighter direction. All the terms of this arrangement might not be to your liking, but if you are flexible about a few things, you'll be able to find a new appreciation for the smaller things in life. Suddenly, beauty will be all around you, and you'll realize you have the best friends and family in the world.",
    "If personal issues have been distracting you from your career or schoolwork, today offers you a chance to settle some issues and move forward in a much brighter direction. All the terms of this arrangement might not be to your liking, but if you are flexible about a few things, you'll be able to find a new appreciation for the smaller things in life. Suddenly, beauty will be all around you, and you'll realize you have the best friends and family in the world.",
    "It's a great day to enjoy the comfort of your home—you've worked hard to create a place where you can relax and feel comfortable, so why not enjoy it? There's no need to go out in order to have fun. Stay close to home today, and if you feel like socializing, why not just invite friends and family over? Rent a movie and order a pizza—you don't have to have a huge party in order to host the people you care for. Get back in touch with the simpler things in life.",
    "Haha try again"]
var image = ["img/aquarius.png", "img/pisces.jpg", "img/aries.jpg", "img/taurus.jpg", "img/gemini.jpg", "img/cancer.jpg", "img/leo.jpg", "img/virgo.jpg","img/libra.jpg","img/scorpio.jpg", "img/sagittarius.jpg","img/capricorn.jpg", "img/sadface.jpg"]




function getSign(month,day) {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return 0; //
    }
    if ((month == 2 && day >= 19 && day < 30) || (month == 3 && day <= 20)) {
        return 1; //
    }
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return 2; //
    }
    if ((month == 4 && day >= 20 && day < 31) || (month == 5 && day <= 20)) {
        return 3; //
    }
    if ((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
       return 4; //
    }
    if((month == 6 && day >= 23 && day > 31) || (month ==7 && day <= 22)) {
        return 5; //
    }
    if((month == 7  && day >= 23) || (month == 8 && day <= 22)) {
        return 6; //leo
    }
    if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        return 7; // virgo
    }
    if((month == 9 && day >= 23 && day < 31) || (month == 10 && day <= 22)){
        return 8; // libra
    }
    if((month == 10 && day >= 23) || (month == 11 && day <= 21)){
        return 9; // scorpio
    }
    if((month == 11 && day >= 22 && day < 31 ) || (month == 12 && day <= 21)){
        return 10; // sagittaurus
    }
    if((month == 12 && day >= 22) || (month == 1 && day <= 19)){
        return 11; // capricorn
    }
    if(month ==2 && day > 30){
        return 12;
    }
    if(month ==4 && day > 31){
        return 12;
    }
    if(month ==6 && day > 31){
        return 12;
    }
    if(month ==9 && day > 31){
        return 12;
    }
    if(month ==11 && day > 31){
        return 12;
    }

}
