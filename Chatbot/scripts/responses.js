function getBotResponse(input) {
    //simple responses
    //greetings
    if (input.includes("hello") || input.includes("Hello") || input.includes("Hey") || input.includes("Hi") || input.includes("How are you") || input.includes("Is anyone there?") || input.includes("Good day") || input.includes("Whats up") || input.includes("how are ya") || input.includes("hey") || input.includes("whatsup") || input.includes("hii") ) {    
        return "Hello there!Good to see you again!";
    } 
    //goodbyes
    else if (input.includes("goodbye") || input.includes("cya") || input.includes("see you") || input.includes("bye") || input.includes("See you later") || input.includes("Goodbye") || input.includes("I am Leaving") || input.includes("Bye") || input.includes("Have a Good day") || input.includes("talk to you later") || input.includes("tyyl") || input.includes("i got to go") || input.includes("I got to go") || input.includes("gtg") || input.includes("see you soon") || input.includes("See you soon")) {
    return "Talk to you later!Goodbye!Come back soon";
    }
    //creaters
    else if (input.includes("developers") || input.includes("creators") || input.includes("Developers") || input.includes("Creators") || input.includes("created") || input.includes("developed") || input.includes("made") || input.includes("Created") || input.includes("create") || input.includes("Made") || input.includes("designed")) {
    return "I was developed by :- YUG KAPRI in April 2024";           
    }
    //your Name
    else if (input.includes("name") || input.includes("Name") || input.includes("called") || input.includes("names") || input.includes("call") || input.includes("what are you") || input.includes("who are you") || input.includes("who is this") || input.includes("what am i chatting to") || input.includes("who am i taking to")) {
    return "My name is College Enquiry ChatBot,but you can call me whatever you like!,How can I assist you today?";        
    }
    //Timing
    else if (input.includes("timing") || input.includes("Timing") || input.includes("working days") || input.includes("open") || input.includes("hours") || input.includes("Hours") || input.includes("Open") || input.includes("when should i come to college") || input.includes("when should i attend college") || input.includes("time")) {
    return "College is open 9am-5pm Monday-Saturday!";        
    }
    //contact info
    else if (input.includes("more info") || input.includes("contact info") || input.includes("contact") || input.includes("telephone number") || input.includes("number") || input.includes("email") || input.includes("contact no") || input.includes("Contact") || input.includes("phone no?") || input.includes("Phone number") || input.includes("Number") || input.includes("Email")) {
    return "You can contact at +91-0000000000 , \nenquirychatbot@gmail.com";        
    }
    //courses
    else if (input.includes("courses") || input.includes("Courses") || input.includes("branches?") || input.includes("Branches")) {
    return "We offers Information Technology, BCA, BBA, MBA, BCOM hons, B ED, B Tech, M Tech, Business Analytics, Data Science, Machine Learning, Computer Science, Cybersecurity, Software Development, Android App Development";        
    }
    //degree
    else if (input.includes("degree") || input.includes("Degree") || input.includes("DEGREE")) {
    return "We offers Information Technology, BCA, BBA, MBA, BCOM hons, B ED, B Tech, M Tech as full time Degree courses";    
    }
    //diploma
    else if (input.includes("diploma") || input.includes("Diploma") || input.includes("DIPLOMA")) {
    return "We offers Business Analytics, Data Science, Machine Learning, Computer Science, Cybersecurity, Software Development, Android App Development as full time Diploma courses";    
    }
    //bca
    else if (input.includes("BCA") || input.includes("Bca") || input.includes("bca")) {
    return "This is a 3 years Professional course of computer Science & Applications. With the total fees of 3.5 lakhs";    
    }
    //bba
    else if (input.includes("BBA") || input.includes("Bba") || input.includes("bba")) {
    return "This is a 3 years Professional course of Buisiness Administrater. With the total fees of 3 lakhs";    
    }
    //mba
    else if (input.includes("MBA") || input.includes("Mba") || input.includes("mba")) {
    return "This is a 2 years Professional course of Master Buisiness Administrater. With the total fees of 4.3 lakhs";    
    }
    //bcom hons
    else if (input.includes("BCOM hons") || input.includes("Bcom hons") || input.includes("bcom hons")) {
    return "This is a 3 years Professional course of commerce student. With the total fees of 2.5 lakhs";    
    }
    //b tech
    else if (input.includes("B Tech") || input.includes("B tech") || input.includes("b tech")) {
    return "This is a 4 years Professional course of  Computer Engineering. With the total fees of 5.2 lakhs";    
    }
    //m tech
    else if (input.includes("M Tech") || input.includes("M tech") || input.includes("m tech")) {
    return "This is a 2 years Professional course of Masters in Computer Engineering. With the total fees of 5.6 lakhs"; 
    }
    //B ED
    else if (input.includes("B ED") || input.includes("B ed") || input.includes("b ed")) {
    return "This is a 2 years non-undergraduate degree of Education. With the total fees of 2 lakhs"; 
    }
    //Business Analytics
    else if (input.includes("Business Analytics") || input.includes("Business analytics") || input.includes("business analytics")) {
    return "This is a 1 year diploma of Business Analysis. With the total fees of 50 thousands"; 
    }
    //Data Science
    else if (input.includes("Data Science") || input.includes("Data science") || input.includes("data science")) {
    return "This is a 2 years diploma of study Data to extract meaningful insights for business. With the total fees of 62 thousands"; 
    }
    //Machine Learning
    else if (input.includes("Machine Learning") || input.includes("Machine learning") || input.includes("machine learning")) {
    return "This is a 2 years diploma of study in Artificial Intelligence. With the total fees of 74 thousands"; 
    }
    //Computer Science
    else if (input.includes("Computer Science") || input.includes("Computer science") || input.includes("computer science")) {
    return "This is a 2 years diploma of computer and it's application. With the total fees of 60 thousands"; 
    }
    //Cybersecurity
    else if (input.includes("Cybersecurity") || input.includes("cybersecurity") || input.includes("Cyber security")) {
    return "This is a 3 years diploma of Network,Data and System Security from digital attacks. With the total fees of 80 thousands"; 
    }
    //Software Development
    else if (input.includes("Software Development") || input.includes("Software development") || input.includes("software development")) {
    return "This is a 2 years diploma of creating and designing software. With the total fees of 80 thousands"; 
    }
    //Android App Development
    else if (input.includes("Android App Development") || input.includes("Android App development") || input.includes("android app development")) {
    return "This is a 2.5 years diploma of creating and designing Android Apps. With the total fees of 70 thousands"; 
    }
    //fees
    else if (input.includes("fee") || input.includes("fees") || input.includes("Fee") || input.includes("Fees")) {
    return "We offer varios degree's and diploma's <br> Degree's :-<br>BCA - 3.5 lakhs <br>BBA - 3 lakhs <br>MBA - 4.3 lakhs <br>BCOM hons - 2.5 lakhs <br>B ED - 2 lakhs <br>B Tech - 5.2 lakhs <br>M Tech - 5.6 lakhs <br>Diploma's :- <br>Business Analytics - 50 thousands <br>Data Science - 62 thousands <br>Machine Learning - 74 thousands <br>Computer Science - 60 thousands <br>Cybersecurity - 80 thousands <br>Software Development - 80 thousands <br>Android App Development - 70 thousands";        
    }
    //location
    else if (input.includes("located") || input.includes("Located") || input.includes("location") || input.includes("Location") || input.includes("address") || input.includes("Address") || input.includes("where is the college")) {
    return  " We have 3 Campus in three different countries 1. LONDON 2. NEW YORK 3. WASHINGTON";        
    }
    //london
    else if (input.includes("london") || input.includes("LONDON") || input.includes("London") || input.includes("1")) {
    return "lords roads-4416,London,UK";        
    }
    //new york
    else if (input.includes("new york") || input.includes("NEW YORK") || input.includes("New York") || input.includes("2")) {
    return "City Park-98413,New York City,New York,USA";        
    }
    //washington
    else if (input.includes("washington") || input.includes("WASHINGTON") || input.includes("Washington") || input.includes("3")) {
    return "John Crossing,Seattle-71689,Washington,USA";        
    }
    //hostel facility
    else if (input.includes("hostel") || input.includes("Hostel") || input.includes("HOSTEL")) {
    return "None of our Campus provide hostel facility";    
    }
    //events
    else if (input.includes("event") || input.includes("Event") || input.includes("EVENT") || input.includes("function") || input.includes("Function") || input.includes("FUNCTION")) {
    return "projection, Sports Week, Drama contest, Conference and various other event conducted in the college.";        
    }
    //documents
    else if (input.includes("document") || input.includes("Document") || input.includes("DOCUMENT")) {
    return "Academic transcripts : High school or previous college transcripts, Standardized  test scrores, Letters of recommendation, Application form : Completed with  accurate  personal information, Proof of identity : Passport or government-issued ID";    
    }
    //Campus size
    else if (input.includes("campus") || input.includes("building") || input.includes("floor") || input.includes("Floor") || input.includes("FLOOR")) {
    return "Our main campus in WASHINGTON covers about 209 acres.It's comprised of various acadimic buildings, libraries, dormintories, and other facilities. Additionally, we have several other campuses and properties in NEW YORK and LONDON. We have over 450 buildings each buiding serves various funtions to support the University's academic and research activities";    
    }
    //syllabus
    else if (input.includes("Syllabus") || input.includes("syllabus") || input.includes("SYLLABUS")) {
    return "To know about syllabus visit our website for specific courses";     
    }
    //library
    else if (input.includes("library") || input.includes("Library") || input.includes("LIBRARY") || input.includes("Books") || input.includes("bookS") || input.includes("BOOKS")) {
    return "There is library on second floor with great wifi connectivity and also has sound proof conference room";    
    }
    //infrastructure
    else if (input.includes("infrastructure") || input.includes("Infrastructure") || input.includes("INFRASTRUCTURE")) {
    return "Excellent Infrastructure. Campus is clean. Good IT Labs With Good Speed of Internet connection";    
    }
    //canteen
    else if (input.includes("food") || input.includes("canteen") || input.includes("Canteen") || input.includes("CANTEEN") || input.includes("cafetaria") || input.includes("Cafetaria") || input.includes("CAFETARIA")) {
    return "We have Cafeteria with variety of food and desserts available";        
    }
    //menu
    else if (input.includes("menu") || input.includes("Menu") || input.includes("MENU")) {
    return "We have a variety of food facilities ranging from casual eatries to fine dining restaurants. Some popular options include Fitzbillies for thier famous Chelsea buns, the eagle for a traditional british pub experience, and aromi for delicious Italian pastries and sandwiches. if you're looking for something specific, let me know and I can provide more tailored recommendations!";        
    }
    //placement
    else if (input.includes("placement") || input.includes("companies") || input.includes("package") || input.includes("Companies") || input.includes("Package") || input.includes("Placement") || input.includes("recruitment") || input.includes("companies")) {
    return "To know about placement visit our placement cell.Average package is 5lpa";    
    }
    //admission
    else if (input.includes("admission") || input.includes("Admission") || input.includes("ADMISSION")) {
    return "Application can also be submitted online through the Unversity's portal";    
    }
    //facilities
    else if (input.includes("facilities") || input.includes("College facility") || input.includes("Facilities") || input.includes("FACILITIES")) {
    return "Some notable facilities include the Medical school, Business school, Law school, Science center, Art Museums.These facilities cater to a wide range of academic disciplines and provide stste-of-the-art resources for research,teaching and learning";        
    }
    //college entrance
    else if (input.includes("entrance") || input.includes("seats") || input.includes("SEATS") || input.includes("Seats") || input.includes("intake") || input.includes("Intake") || input.includes("Entrance") || input.includes("allotment") || input.includes("Allotment")) {
    return "Based on number of vacancies and candidate score in entrance exam";        
    }
    //uniform
    else if (input.includes("dress") || input.includes("dresscode") || input.includes("uniform") || input.includes("Uniform") || input.includes("UNIFORM")) {
    return "Casual wear are allowed, also has sports and other wear";        
    }
    //random
    else if (input == "I love you" || input == "Will you marry me" || input == "Do you love me") {
    return "I am not program for this please ask appropriate query";        
    }
    //swear
    else if (input == "fuck" || input == "bitch" || input == "shut up" || input == "hell" || input == "stupid" || input == "idiot" || input == "dumb ass" || input == "asshole" || input == "fucker") {
    return "please use appropriate language, Maintaining decency would be appreciated";        
    }
    //salutaion
    else if (input == "okk" || input == "okie" || input == "nice work" || input == "well done" || input == "good job" || input == "thanks for the help" || input == "Thank You" || input == "its ok" || input == "Thanks" || input == "k" || input == "ok" || input == "okay") {
    return "I am glad I helped you, welcome!, anything else i can assist you with?";       
    }
    //task
    else if (input == "what can you do" || input == "what are the thing you can do" || input == "things you can do" || input == "what can u do for me" || input == "how u can help me" || input == "why i should use you") {
    return "I can answer to low-intermediate questions regarding college, You can ask me questions regarding college, and i will try to answer them";        
    }
    //ragging
    else if (input.includes("ragging") || input.includes("Ragging") || input.includes("antiragging") || input.includes("Antiragging") || input.includes("RAGGING")) {
    return "We are Proud to tell you that our college provides ragging free environment, and we have strict rules against ragging";    
    }
    //HOD
    else if (input.includes("hod") || input.includes("Hod") || input.includes("Hod")) {
    return "HODs differ for each branch, please be more specific like: (HOD BCA) and you will find it in college";        
    }
    //transport
    else if (input.includes("bus") || input.includes("transportation") || input.includes("TRANSPORT") || input.includes("Tranport") || input.includes("tranport")) {
    return "Transportation options for its students, faculty, and staff. These typically include shuttle buses, bike-sharing programs, and other modes of transportation to navigate the campus and surrounding areas.";        
    }
    //metro
    else if (input.includes("metro") || input.includes("Metro") || input.includes("METRO")) {
    return "Yes there is RED Line metro which come to our New York campus. there is Yellow Line metro which come to our Washington campus. there is BLUE Line metro which come to our London campus.";         
    }
    else {
    return "Try asking something else!";
    }
}