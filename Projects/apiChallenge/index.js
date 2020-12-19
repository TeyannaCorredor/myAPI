let mainURL = "https://picsum.photos/400/200";
let quoteURL = "https://quotes.rest/qod?category=inspire";

function pageSetup(){
   
    create_main_section();
    create_page_header();
    create_date();
    create_Image();
    create_button();
    create_quote();
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
     
     let the_month = month[the_date.getMonth()];
     let the_day = the_date.getDate();
     let the_year = the_date.getFullYear();
     
     let current_date = document.createElement('H2');
     let grab_main_div = document.getElementById('mainSection');

     current_date.id="date";
     current_date.textContent=`${the_month} ${the_day},${the_year}`;
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

    let quote_1 = document.createElement('H2');
    quote_1.id="daily_quote";
    quote_1.textContent=`"${quote_day}"`;
    grab_main_div.appendChild(quote_1);

    let authorOfquote = document.createElement('P');
    authorOfquote.textContent=`-${author_name}`;
    authorOfquote.id="author";
    grab_main_div.appendChild(authorOfquote);
   
    let author_style = document.getElementById('author').style;
    author_style.fontSize="20px";
   
}

function page_style(){
   
    document.body.style.textAlign="center";
    document.body.style.fontStyle="italic";
    document.body.style.backgroundColor="rgb(185, 116, 85)";

    let main_section = document.getElementById('mainSection').style;
    let bgURL="url('https://cdn.pixabay.com/photo/2019/06/26/19/49/pin-board-4301129_960_720.png')";
    main_section.background=bgURL;
    main_section.backgroundPosition="center";
    main_section.backgroundRepeat="no-repeat";
    main_section.backgroundSize="inherit";
    main_section.padding="100px";

    let image_style = document.getElementById('first_image').style;
    image_style.display='block';
    image_style.margin='auto';
    image_style.border="2px solid black";

    let btn_style = document.getElementById('img_btn').style;
    btn_style.margin="5px";
   
}