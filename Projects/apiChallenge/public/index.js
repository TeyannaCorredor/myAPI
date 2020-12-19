let mainURL = "https://picsum.photos/400/200";
const quoteURL = "https://quotes.rest/qod?category=inspire";

function pageSetup(){
   
    create_main_section();
    create_page_header();
    create_date();
    create_Image();
    create_button();
    create_quote();
   
    create_gallery();
    create_gallery_header();
    create_image_section();
    create_gallery_image1();
    create_gallery_image2();
    create_gallery_image3();
    page_style();
}

pageSetup();

function create_main_section(){
    let mainDiv = document.createElement('div');
    mainDiv.id="mainSection";
    document.body.appendChild(mainDiv);
}

function create_page_header(){
    let header = document.createElement('H1');
    let grab_main_div = document.getElementById('mainSection');
   
    header.textContent='Quote of the Day';
    header.id="header";
    grab_main_div.appendChild(header);

}

function create_date(){
    let the_date = new Date();
   
    let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
     ];

    let week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

     let day_of_week = week[the_date.getDay()];
     let the_month = month[the_date.getMonth()];
     let the_day = the_date.getDate();
     let the_year = the_date.getFullYear();
     
     let current_date = document.createElement('H2');
     let grab_main_div = document.getElementById('mainSection');

     current_date.id="date";
     current_date.textContent=`${day_of_week} ${the_month} ${the_day}, ${the_year}`;
     grab_main_div.appendChild(current_date);
}

function create_Image(){
    let grab_main_div = document.getElementById('mainSection');
    let Image1 = document.createElement('img');
   
    Image1.src=mainURL;
    Image1.id="first_image";
    grab_main_div.appendChild(Image1);
 }

 function create_button(){
    let grab_main_div = document.getElementById('mainSection');
    let Image_btn = document.createElement('input');
   
    grab_main_div.appendChild(Image_btn);
    Image_btn.id="img_btn";
    Image_btn.value="New Image";
    Image_btn.type="button";
    Image_btn.setAttribute('onclick','new_image()');
   
   }

async function new_image(){
    let get_image = await fetch(mainURL);
    let image_response = await get_image.blob();
    let image_src = URL.createObjectURL(image_response);
    document.getElementById('first_image').src=image_src;
}

async function create_quote(){
    let grab_main_div = document.getElementById('mainSection');
    let get_quote = await fetch(quoteURL);
    let quote_response = await get_quote.json();
   
    let author_name = quote_response.contents.quotes[0].author;
    let quote_day = quote_response.contents.quotes[0].quote;

    let quote_1 = document.createElement('P');
    quote_1.id="daily_quote";
    quote_1.textContent=`"${quote_day}"`;
    grab_main_div.appendChild(quote_1);

    let authorOfquote = document.createElement('P');
    authorOfquote.textContent=`-${author_name}`;
    authorOfquote.id="author";
    grab_main_div.appendChild(authorOfquote);
   
    let the_quote= document.getElementById('daily_quote').style;
    the_quote.display="flex";
    the_quote.flexWrap="wrap";
    the_quote.fontSize="1.5em";
    the_quote.fontWeight="bold";
    the_quote.width="75%";
    the_quote.margin="auto";
    the_quote.justifyContent="center";
   
    let author_style = document.getElementById('author').style;
    author_style.fontSize="20px";
   
}

function create_gallery(){
    let main_gallery = document.createElement("div");
    main_gallery.id="gallery";
    document.body.appendChild(main_gallery);
   
}


function create_gallery_header(){
    let gallery_header = document.createElement("H2");
    gallery_header.id="gallery-title";
    gallery_header.textContent="Inspiring Pictures";
   
    let grab_gallery = document.getElementById("gallery");
    grab_gallery.appendChild(gallery_header);
   
}

function create_image_section(){
    let grab_gallery = document.getElementById("gallery");
    let image_section = document.createElement("div");
    image_section.id="gallery-images";

    grab_gallery.appendChild(image_section);

}

function create_gallery_image1(){
    let grab_gallery_section = document.getElementById("gallery-images");
    let gallery_image1 = document.createElement("img");
    let image1_url = `${mainURL}?random=1`;
    gallery_image1.src=image1_url;
    gallery_image1.id="gallery_image1";
    gallery_image1.classList.add("pictures");

    grab_gallery_section.appendChild(gallery_image1);
}

function create_gallery_image2(){
    let grab_gallery_section = document.getElementById("gallery-images");
    let gallery_image2 = document.createElement("img");
    let image1_url = `${mainURL}?random=2`;
    gallery_image2.src=image1_url;
    gallery_image2.id="gallery_image2";
    gallery_image2.classList.add("pictures");

    grab_gallery_section.appendChild(gallery_image2);
}


function create_gallery_image3(){
    let grab_gallery_section = document.getElementById("gallery-images");
    let gallery_image3 = document.createElement("img");
    let image1_url = `${mainURL}?random=3`;
    gallery_image3.src=image1_url;
    gallery_image3.id="gallery_image3";
    gallery_image3.classList.add("pictures");

    grab_gallery_section.appendChild(gallery_image3);
}


function page_style(){
   
    let body_style = document.body.style;
    body_style.textAlign="center";
    body_style.fontStyle="italic";
    body_style.backgroundColor="rgb(185, 116, 85)";

    let main_section = document.getElementById('mainSection').style;
    const corkBG= "url('https://cdn.pixabay.com/photo/2012/12/24/08/39/backdrop-72250_960_720.jpg')";
    main_section.background=corkBG;
    main_section.backgroundPosition="center";
    main_section.backgroundRepeat="no-repeat";
    main_section.backgroundSize="cover";
    main_section.padding="25px";
    main_section.border="20px solid #f3f3f3";
    main_section.boxShadow="3px 4px 5px #333";

    let image_style = document.getElementById('first_image').style;
    image_style.display='block';
    image_style.margin='auto';
    image_style.border='3px solid #fff';
    image_style.boxShadow='2px 4px 5px #333';
    image_style.borderRadius="5px";

    let btn_style = document.getElementById('img_btn').style;
    btn_style.margin='5px';

    let gallery_style = document.getElementById('gallery-images').style;
    gallery_style.display="flex";
    gallery_style.flexDirection="row";
    gallery_style.justifyContent="space-around";


    let pictures_style = document.getElementsByClassName('pictures');
    for (let numberOfPics = 0; numberOfPics < pictures_style.length; numberOfPics++) {
        pictures_style[numberOfPics].style.border = "2px solid #fff";
        pictures_style[numberOfPics].style.borderRadius = "2px";
        pictures_style[numberOfPics].style.boxShadow = "2px 3px 4px #333";
       
    }
 
}