
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ReactStars from 'react-stars'
import '../App.css';
import {FaExternalLinkAlt} from 'react-icons/fa';


const useStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        width:'10000px',
        height:'200px !important'
  },
  gridList: {
      flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
  },
  gridTile: {
      
  }
  });



class RetUserDemo1 extends React.Component{
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);


    this.state = {
        text: "",
      title:"",
      author:"",
      rating:"",
      isLoading: false,
      link:"",
      seen:"none",
      seentext:"block",
        options: [
            {
                "book_id" : "11671144",
                "asin" : "B004SHF18M",
                "average_rating" : "4.04",
                "description" : "One night after interviewing a reluctant witness at a London apartment complex, Lacey Flint, a young detective constable, stumbles onto a woman brutally stabbed just moments before in the building's darkened parking lot. Within twenty-four hours a reporter receives an anonymous letter that points out alarming similarities between the murder and Jack the Ripper's first murder--a letter that calls out Lacey by name. If it's real, and they have a killer bent on re-creating London's bloody past, history shows they have just five days until the next attempt.\nNo one believes the connections are anything more than a sadistic killer's game, not even Lacey, whom the killer seems to be taunting specifically. However, as they investigate the details of the case start reminding her more and more of a part of her past she'd rather keep hidden. And the only way to do that is to catch the killer herself.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/11671144-now-you-see-me",
                "ratings_count" : "548",
                "title_without_series" : "Now You See Me (Lacey Flint, #1)",
                "url" : "https://www.goodreads.com/book/show/11671144-now-you-see-me",
                "image_url" : "https://images.gr-assets.com/books/1358889156m/11671144.jpg",
                "title" : "Now You See Me (Lacey Flint, #1)",
                "name" : "S.J. Bolton"
            },
            {
                "book_id" : "8130423",
                "asin" : "B00280LYIM",
                "average_rating" : "4.39",
                "description" : "Percy Jackson isn't expecting freshman orientation to be any fun. But when a mysterious mortal acquaintance appears at his potential new school, followed by demon cheerleaders, things quickly move from bad to worse.\nIn this fourth installment of the blockbuster series, time is running out as war between the Olympians and the evil Titan lord Kronos draws near. Even the safe haven of Camp Half-Blood grows more vulnerable by the minute as Kronos's army prepares to invade its once impenetrable borders. To stop the invasion, Percy and his demigod friends must set out on a quest through the Labyrinth - a sprawling underground world with stunning surprises at every turn.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/8130423-the-battle-of-the-labyrinth",
                "ratings_count" : "7922",
                "title_without_series" : "The Battle of the Labyrinth (Percy Jackson and the Olympians, #4)",
                "url" : "https://www.goodreads.com/book/show/8130423-the-battle-of-the-labyrinth",
                "image_url" : "https://images.gr-assets.com/books/1355333381m/8130423.jpg",
                "title" : "The Battle of the Labyrinth (Percy Jackson and the Olympians, #4)",
                "name" : "Rick Riordan"
            },
            {
                "book_id" : "33012969",
                "asin" : "B01M6B8X5X",
                "average_rating" : "3.92",
                "description" : "LeAnne Hogan went to Afghanistan as a rising star in the military, and came back a much lesser person, mentally and physically. Now missing an eye and with half her face badly scarred, she can barely remember the disastrous desert operation that almost killed her. She is confused, angry, and suspects the fault is hers, even though nobody will come out and say it.\nShattered by one last blow--the sudden death of her hospital roommate, Marci--LeAnne finds herself on a fateful drive across the country, reflecting on her past and seeing no future. Her native land is now unfamiliar, recast in shadow by her one good eye, her damaged psyche, and her weakened body. Arriving in the rain-soaked small town in Washington state that Marci had called home, she makes a troubling discovery: Marci's eight-year-old daughter has vanished. When a stray dog--a powerful, dark, unreadable creature, no one's idea of a pet--seems to adopt LeAnne, a surprising connection is formed and something shifts inside her. As she becomes obsessed with finding Marci's daughter, LeAnne and her inscrutable canine companion are drawn into danger as dark and menacing as her last Afghan mission. This time she has a strange but loyal fellow traveler protecting her blind side.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/33012969-the-right-side",
                "ratings_count" : "208",
                "title_without_series" : "The Right Side",
                "url" : "https://www.goodreads.com/book/show/33012969-the-right-side",
                "image_url" : "https://images.gr-assets.com/books/1483387585m/33012969.jpg",
                "title" : "The Right Side",
                "name" : "Spencer Quinn"
            },

            {
                "book_id" : "31176886",
                "asin" : "B01I9FFDI6",
                "average_rating" : "3.69",
                "description" : "In this gripping page-turner, an ex-agent on the run from her former employers must take one more case to clear her name and save her life.\nShe used to work for the U.S. government, but very few people ever knew that. An expert in her field, she was one of the darkest secrets of an agency so clandestine it doesn't even have a name. And when they decided she was a liability, they came for her without warning.\nNow, she rarely stays in the same place or uses the same name for long. They've killed the only other person she trusted, but something she knows still poses a threat. They want her dead, and soon.\nWhen her former handler offers her a way out, she realizes it's her only chance to erase the giant target on her back. But it means taking one last job for her ex-employers. To her horror, the information she acquires only makes her situation more dangerous.\nResolving to meet the threat head-on, she prepares for the toughest fight of her life but finds herself falling for a man who can only complicate her likelihood of survival. As she sees her choices being rapidly whittled down, she must apply her unique talents in ways she never dreamed of.\nIn this tautly plotted novel, Stephenie Meyer creates a fierce and fascinating new heroine with a very specialized skill set. And she shows once again why she's one of the world's bestselling authors.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/31176886-the-chemist",
                "ratings_count" : "26412",
                "title_without_series" : "The Chemist",
                "url" : "https://www.goodreads.com/book/show/31176886-the-chemist",
                "image_url" : "https://images.gr-assets.com/books/1468944057m/31176886.jpg",
                "title" : "The Chemist",
                "name" : "Stephenie Meyer"
            },
            {
                "book_id" : "7519508",
                "asin" : "B00280LYHS",
                "average_rating" : "4.50",
                "description" : "The greatest monster of all, the storm giant Typhon, is on the loose, wreaking havoc and destruction across the U.S. - while Kronos's army lays siege to Manhattan. Soon Percy Jackson must make the hardest choice of his life - a choice that will save or destroy the world.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/7519508-the-last-olympian",
                "ratings_count" : "7308",
                "title_without_series" : "The Last Olympian (Percy Jackson and the Olympians, #5)",
                "url" : "https://www.goodreads.com/book/show/7519508-the-last-olympian",
                "image_url" : "https://images.gr-assets.com/books/1355333256m/7519508.jpg",
                "title" : "The Last Olympian (Percy Jackson and the Olympians, #5)",
                "name" : "Rick Riordan"
            },

            {
                "book_id" : "18626828",
                "asin" : "B003YL4LYI",
                "average_rating" : "4.31",
                "description" : "In the aftermath of a colossal battle, Daenerys Targaryen rules with her three dragons as queen of a city built on dust and death. But Daenerys has thousands of enemies, and many have set out to find her. Fleeing from Westeros with a price on his head, Tyrion Lannister, too, is making his way east--with new allies who may not be the ragtag band they seem. And in the frozen north, Jon Snow confronts creatures from beyond the Wall of ice and stone, and powerful foes from within the Night's Watch. In a time of rising restlessness, the tides of destiny and politics lead a grand cast of outlaws and priests, soldiers and skinchangers, nobles and slaves, to the greatest dance of all.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/18626828-a-dance-with-dragons",
                "ratings_count" : "27388",
                "title_without_series" : "A Dance with Dragons (A Song of Ice and Fire #5)",
                "url" : "https://www.goodreads.com/book/show/18626828-a-dance-with-dragons",
                "image_url" : "https://images.gr-assets.com/books/1383741703m/18626828.jpg",
                "title" : "A Dance with Dragons (A Song of Ice and Fire #5)",
                "name" : "George R.R. Martin"
            },
            {
                "book_id" : "19438067",
                "asin" : "B006WEZ9TK",
                "average_rating" : "4.05",
                "description" : "IT BEGAN WITH A DISCOVERY OF WITCHES.\nHistorian Diana Bishop, descended from a line of powerful witches, and long-lived vampire Matthew Clairmont have broken the laws dividing creatures. When Diana discovered a significant alchemical manuscript in the Bodleian Library,she sparked a struggle in which she became bound to Matthew. Now the fragile coexistence of witches, daemons, vampires and humans is dangerously threatened.\nSeeking safety, Diana and Matthew travel back in time to London, 1590. But they soon realise that the past may not provide a haven. Reclaiming his former identity as poet and spy for Queen Elizabeth, the vampire falls back in with a group of radicals known as the School of Night. Many are unruly daemons, the creative minds of the age, including playwright Christopher Marlowe and mathematician Thomas Harriot.\nTogether Matthew and Diana scour Tudor London for the elusive manuscript Ashmole 782, and search for the witch who will teach Diana how to control her remarkable powers...",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/19438067-shadow-of-night",
                "ratings_count" : "10214",
                "title_without_series" : "Shadow of Night (All Souls Trilogy, #2)",
                "url" : "https://www.goodreads.com/book/show/19438067-shadow-of-night",
                "image_url" : "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                "title" : "Shadow of Night (All Souls Trilogy, #2)",
                "name" : "Deborah Harkness"
            }
        ],
            tileData:[
                {
                    "book_id" : "18457569",
                    "asin" : "B00ANI9FG4",
                    "average_rating" : "3.89",
                    "description" : "Just weeks ago, a Jack the Ripper copycat terrorized London, leaving London police officer Lacey Flint scarred both physically and emotionally. Still recovering from the ordeal and technically off-duty, Lacey almost ignores it when she hears a call for back-up as she's heading home. But she's close by and figures they could use her help. She could never have expected the horrible crime she would witness on arriving at the scene, or the frightening twists the case would being to take.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/18457569-if-snow-hadn-t-fallen",
                    "ratings_count" : "254",
                    "title_without_series" : "If Snow Hadn't Fallen",
                    "url" : "https://www.goodreads.com/book/show/18457569-if-snow-hadn-t-fallen",
                    "image_url" : "https://images.gr-assets.com/books/1378338471m/18457569.jpg",
                    "title" : "If Snow Hadn't Fallen",
                    "name" : "S.J. Bolton"
                },
                {
                    "book_id" : "33858890",
                    "asin" : "B01M3WPB83",
                    "average_rating" : "3.63",
                    "description" : "For fans of John Dies at the Endand Welcome to Night Valecomes a tour de force of horror, humor, and H.P. Lovecraft. The surviving members of a forgotten teenage detective club (and their dog) must reunite as broken adults to finally solve the terrifying case that ruined them all...and sent the wrong man to prison. Scooby Doo and the gang never had to do this!\n1990. The teen detectives once known as the Blyton Summer Detective Club (of Blyton Hills, a small mining town in the Zoinx River Valley in Oregon) are all grown up and haven't seen each other since their fateful, final case in 1977. Andy, the tomboy, is twenty-five and on the run, wanted in at least two states. Keri, one-time kid genius and budding biologist, is bartending in New York, working on a serious drinking problem. At least she's got Sean, an excitable Weimeraner descended from the original canine member of the team. Nate, the horror nerd, has spent the last thirteen years in and out of mental health institutions, and currently resides in an asylum in Arhkam, Massachusetts. The only friend he still sees is Peter, the handsome jock turned movie star. The problem is, Peter's been dead for years.\nThe time has come to uncover the source of their nightmares and return to where it all began in 1977. This time, it better not be a man in a mask. The real monsters are waiting.\nWith raucous humor and brilliantly orchestrated mayhem,Edgar Cantero's Meddling Kidstaps into our shared nostalgia for the books and cartoons we grew up with, and delivers an exuberant, eclectic, and highly entertaining celebration of horror, life, friendship, and many-tentacled, interdimensional demon spawn.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/33858890-meddling-kids",
                    "ratings_count" : "440",
                    "title_without_series" : "Meddling Kids",
                    "url" : "https://www.goodreads.com/book/show/33858890-meddling-kids",
                    "image_url" : "https://images.gr-assets.com/books/1491342479m/33858890.jpg",
                    "title" : "Meddling Kids",
                    "name" : "Edgar Cantero"
                },
                {
                    "book_id" : "8126116",
                    "asin" : "B00280LYI2",
                    "average_rating" : "4.34",
                    "description" : "IT'S NOT EVERYDAY YOU FIND YOURSELF IN COMBAT WITH A HALF-LION, HALF-HUMAN.\nBut when you're the son of a Greek god, it happens. And now my friend Annabeth is missing, a goddess is in chains and only five half-blood heroes can join the quest to defeat the doomsday monster.\nOh, and guess what? The Oracle has predicted that not all of us will survive...",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/8126116-the-titan-s-curse",
                    "ratings_count" : "8292",
                    "title_without_series" : "The Titan's Curse (Percy Jackson and the Olympians, #3)",
                    "url" : "https://www.goodreads.com/book/show/8126116-the-titan-s-curse",
                    "image_url" : "https://images.gr-assets.com/books/1327990172m/8126116.jpg",
                    "title" : "The Titan's Curse (Percy Jackson and the Olympians, #3)",
                    "name" : "Rick Riordan"
                },
                {
                    "book_id" : "13613374",
                    "asin" : "B007TBZ63Y",
                    "average_rating" : "4.47",
                    "description" : "Annabeth is terrified. Just when she's about to be reunited with Percy--after six months of being apart, thanks to Hera--it looks like Camp Jupiter is preparing for war. As Annabeth and her friends Jason, Piper, and Leo fly in on the Argo II, she can't blame the Roman demigods for thinking the ship is a Greek weapon. With its steaming bronze dragon masthead, Leo's fantastical creation doesn't appear friendly. Annabeth hopes that the sight of their praetor Jason on deck will reassure the Romans that the visitors from Camp Half-Blood are coming in peace.\nAnd that's only one of her worries. In her pocket Annabeth carries a gift from her mother that came with an unnerving demand: Follow the Mark of Athena. Avenge me. Annabeth already feels weighed down by the prophecy that will send seven demigods on a quest to find--and close--the Doors of Death. What more does Athena want from her?\nAnnabeth's biggest fear, though, is that Percy might have changed. What if he's now attached to Roman ways? Does he still need his old friends? As the daughter of the goddess of war and wisdom, Annabeth knows she was born to be a leader, but never again does she want to be without Seaweed Brain by her side.\nNarrated by four different demigods, The Mark of Athena is an unforgettable journey across land and sea to Rome, where important discoveries, surprising sacrifices, and unspeakable horrors await. Climb aboard the Argo II, if you dare....",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/13613374-the-mark-of-athena",
                    "ratings_count" : "7566",
                    "title_without_series" : "The Mark of Athena (The Heroes of Olympus, #3)",
                    "url" : "https://www.goodreads.com/book/show/13613374-the-mark-of-athena",
                    "image_url" : "https://images.gr-assets.com/books/1338547261m/13613374.jpg",
                    "title" : "The Mark of Athena (The Heroes of Olympus, #3)",
                    "name" : "Rick Riordan"
                },
                {
                    "book_id" : "18892998",
                    "asin" : "B00G3L6KQI",
                    "average_rating" : "4.15",
                    "description" : "The highly anticipated finale to the #1 New York Timesbestselling trilogy that began with A Discovery of Witches\nAfter traveling through time in Shadow of Night, the second book in Deborah Harkness's enchanting series, historian and witch Diana Bishop and vampire scientist Matthew Clairmont return to the present to face new crises and old enemies. At Matthew's ancestral home at Sept-Tours, they reunite with the cast of characters from A Discovery of Witches--with one significant exception. But the real threat to their future has yet to be revealed, and when it is, the search for Ashmole 782 and its missing pages takes on even more urgency. In the trilogy's final volume, Harkness deepens her themes of power and passion, family and caring, past deeds and their present consequences. In ancestral homes and university laboratories, using ancient knowledge and modern science, from the hills of the Auvergne to the palaces of Venice and beyond, the couple at last learn what the witches discovered so many centuries ago.\nWith more than one million copies sold in the United States and appearing in thirty-eight foreign editions, A Discovery of Witchesand Shadow of Nighthave landed on all of the major bestseller lists and garnered rave reviews from countless publications. Eagerly awaited by Harkness's legion of fans, The Book of Lifebrings this superbly written series to a deeply satisfying close.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/18892998-the-book-of-life",
                    "ratings_count" : "11609",
                    "title_without_series" : "The Book of Life (All Souls Trilogy, #3)",
                    "url" : "https://www.goodreads.com/book/show/18892998-the-book-of-life",
                    "image_url" : "https://images.gr-assets.com/books/1391546498m/18892998.jpg",
                    "title" : "The Book of Life (All Souls Trilogy, #3)",
                    "name" : "Deborah Harkness"
                },
                {
                    "book_id" : "8117665",
                    "asin" : "B0015DYIH2",
                    "average_rating" : "3.70",
                    "description" : "To be irrevocably in love with a vampire is both fantasy and nightmare woven into a dangerously heightened reality for Bella Swan. Pulled in one direction by her intense passion for Edward Cullen, and in another by her profound connection to werewolf Jacob Black, she has endured a tumultuous year of temptation, loss, and strife to reach the ultimate turning point. Her imminent choice to either join the dark but seductive world of immortals or to pursue a fully human life has become the thread from which the fates of two tribes hangs.\nNow that Bella has made her decision, a startling chain of unprecedented events is about to unfold with potentially devastating and unfathomable, consequences. Just when the frayed strands of Bella's life - first discovered in Twilight, then scattered and torn in New Moonand Eclipse- seem ready to heal and knit together, could they be destroyed... forever?",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/8117665-breaking-dawn",
                    "ratings_count" : "8763",
                    "title_without_series" : "Breaking Dawn (Twilight, #4)",
                    "url" : "https://www.goodreads.com/book/show/8117665-breaking-dawn",
                    "image_url" : "https://images.gr-assets.com/books/1328039488m/8117665.jpg",
                    "title" : "Breaking Dawn (Twilight, #4)",
                    "name" : "Stephenie Meyer"
                },
                {
                    "book_id" : "7583324",
                    "asin" : "B00280LYHI",
                    "average_rating" : "4.23",
                    "description" : "Percy Jackson's seventh-grade year has been surprisingly quiet. Not a single monster has set foot on his New York prep-school campus. But when an innocent game of dodgeball among Percy and his classmates turns into a death match against an ugly gang of cannibal giants, thing get...well, ugly. And the unexpected arrival of his friend Annabeth brings more bad news: the magical borders that protect Camp Half-Blood have been poisoned by a mysterious enemy, and unless a cure is found, the only safe haven for demigods will be destroyed.\nIn this fresh, funny, and wildly popular follow-up to The Lightning Thief, Percy and his friends must journey into the Sea of Monsters to save their camp. But first, Percy will discover a stunning new secret about his family--one that makes him question whether being claimed as Poseidon's son is an honor or simply a cruel joke.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/7583324-the-sea-of-monsters",
                    "ratings_count" : "8024",
                    "title_without_series" : "The Sea of Monsters (Percy Jackson and the Olympians, #2)",
                    "url" : "https://www.goodreads.com/book/show/7583324-the-sea-of-monsters",
                    "image_url" : "https://images.gr-assets.com/books/1327935784m/7583324.jpg",
                    "title" : "The Sea of Monsters (Percy Jackson and the Olympians, #2)",
                    "name" : "Rick Riordan"
                },
                {
                    "book_id" : "22915531",
                    "asin" : "B00OQSF61K",
                    "average_rating" : "4.01",
                    "description" : "Lady Georgiana Rannoch won't deny that being thirty-fifth in line for the British throne has its advantages. Unfortunately, money isn't one of them. And sometimes making ends meet requires her to investigate a little royal wrongdoing.\nWhile my beau Darcy is off on a mysterious mission, I am once again caught between my high birth and empty purse. I am therefore relieved to receive a new assignment from the Queen--especially one that includes lodging. The King's youngest son, George, is to wed Princess Marina of Greece, and I shall be her companion at the supposedly haunted Kensington Palace.\nMy duties are simple: help Marina acclimate to English life, show her the best of London and, above all, dispel any rumors about George's libertine history. Perhaps that last bit isn't so simple.\nGeorge is known for his many affairs with women as well as men--including the great songwriter Noel Coward. But things truly get complicated when I search the Palace for a supposed ghost only to encounter an actual dead person: a society beauty said to have been one of Prince George's mistresses.\nNothing spoils a royal wedding more than murder, and the Queen wants the whole matter hushed. But as the investigation unfolds--and Darcy, as always, turns up in the most unlikely of places--the investigation brings us precariously close to the prince himself.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/22915531-malice-at-the-palace",
                    "ratings_count" : "4514",
                    "title_without_series" : "Malice at the Palace (Her Royal Spyness, #9)",
                    "url" : "https://www.goodreads.com/book/show/22915531-malice-at-the-palace",
                    "image_url" : "https://images.gr-assets.com/books/1447252788m/22915531.jpg",
                    "title" : "Malice at the Palace (Her Royal Spyness, #9)",
                    "name" : "Rhys Bowen"
                }
            ]
      };
     
  }
  
  

  handleClose() {
    this.setState({ show: false });
    this.setState({text: ""})
    this.setState({title: ""})
    this.setState({rating: ""})
    this.setState({author: ""})
    this.setState({link:""})
    this.setState({seen:"none"})
    this.setState({seentext:"block"})
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event){
    
                this.handleShow()
             
  }


  handleMouseEnter(e){
    e.target.style.opacity = "1"
}
  handleMouseClick(tile){
    if(tile.description)
      {
        this.setState({text:tile.description})
      }
    else
    this.setState({text: tile.description})
    this.setState({title: "Title: "+tile.title})
    this.setState({rating: "Average Rating: "+tile.average_rating + "/5.00"})
    this.setState({author: "Author: "+tile.name})
    this.setState({link:tile.url})
    this.setState({seen:"block"})
    this.setState({seentext:"none"})
    this.handleShow()
  }
  handleMouseLeave(e){
    e.target.style.opacity = "0.85"
    e.target.style.backgroundColor = "rgba(0,0,0,0.5)"
    e.target.style.border = "0"
}

  render(){
    const classes = useStyles();
  return (
  <div className="App" style={{marginTop:'0',height:'100vh',verticalAlign:'middle',backgroundImage:'url(./images/books.jpg)',backgroundSize:"cover",width:"100%"}}>
    <link rel="stylesheet" 
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous"/>
    <div style={{marginTop:'10vh',paddingTop:'2%',paddingBottom:'2%',paddingLeft:"4%",paddingRight:'4%',marginLeft:'10vh', width:'160vh',height:'80vh',backgroundColor:'rgba(0,0,0,0.8)',position:'fixed',textAlign:'left'}}>
        <div style={{color:'white',fontSize:'18pt',fontFamily:"Luminari"}}>
           Rated Books <br />
        </div>
        <div class={classes.root} style={{height:'250px',overflowX:'auto'}}>
        <GridList className={classes.gridList} cols={2.5} style={{marginLeft:"2%",marginBottom:"2%"}}>
        {this.state.options.map(tile => (
          <GridListTile style={{width:"200px",height:"250px",marginRight:"5%",marginBottom:"4%"}}
                        className={classes.gridTile}
                        key={tile.img}>
            <div className="image-container"
                 style={{backgroundColor:"rgba(0,0,0,1)",
                     display:"block"}}>
            <img onMouseEnter={this.handleMouseEnter}
                 onMouseUp={() => this.handleMouseClick(tile)}
                 onMouseLeave={this.handleMouseLeave}
                 src={tile.image_url} style={{width:"200px",height:"250px",float:"left",opacity:'0.85'}} alt={tile.title} />
                 <GridListTileBar
                            classes={{
                                marginLeft: 5,
                                marginRight: 5,
                                title:{
                                  fontColor: 'black'
                                }
                            }}
                            title={<span style={{color: "#eee",fontSize: "0.8rem"}}   >{tile.title_without_series}</span>}
                            subtitle={<ReactStars
                                value={tile.average_rating}
                                edit={false}
                            />}
                            />
            </div>
          </GridListTile>
        ))}
      </GridList>
      </div>
        <div style={{color:'white',fontSize:'18pt',paddingTop:'2%',fontFamily:"Luminari"}}>
           Recommended Books <br />
        </div>
        <div class={classes.root} style={{height:'250px',overflowX:'auto'}}>
        <GridList className={classes.gridList} cols={2.5} style={{marginLeft:"2%",marginBottom:"2%"}}>
        {this.state.tileData.map(tile => (
          <GridListTile style={{width:"200px",height:"250px",marginRight:"5%",marginBottom:"4%"}}
                        className={classes.gridTile}
                        key={tile.img}>
            <div className="image-container"
                 style={{backgroundColor:"rgba(0,0,0,1)",
                     display:"block"}}>
            <img onMouseEnter={this.handleMouseEnter}
                 onMouseUp={() => this.handleMouseClick(tile)}
                 onMouseLeave={this.handleMouseLeave}
                 src={tile.image_url} style={{width:"200px",height:"250px",float:"left",opacity:'0.85'}} alt={tile.title} />
                 <GridListTileBar
                            classes={{
                                marginLeft: 5,
                                marginRight: 5,
                                title:{
                                  fontColor: 'black'
                                }
                            }}
                            title={<span style={{color: "#eee",fontSize: "0.8rem"}}   >{tile.title_without_series}</span>}
                            subtitle={<ReactStars
                                value={tile.average_rating}
                                edit={false}
                            />}
                            />
            </div>
          </GridListTile>
        ))}
      </GridList>
      </div>
    </div>
    <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="modal-next"
          style={{marginTop:'20vh',width:"100%",left:"10px !important"}} >
          <Modal.Body style={{height:"55vh",width:"97vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url(card.jpg)",overflowY:"hidden"}}>
          <div style={{marginRight:"8%",marginLeft:"8%"}}>
          <div>
          <div style={{fontSize:"20pt",marginTop:"8%",fontWeight:"bold",textAlign:"center"}}>
          {this.state.title}
          </div>
          <div style={{fontSize:"16pt",fontWeight:"bold",textAlign:"center"}} >
          {this.state.author}
          </div>
          <div style={{fontSize:"16pt",fontWeight:"bold"}}>
          {this.state.rating}
          
          <div style={{display:this.state.seen, float:"right"}}>
              <a href={this.state.link} target="_blank">Link to book <FaExternalLinkAlt /></a>
              </div>
              </div>
          </div>
          
          <div style={{maxHeight:"27vh",textAlign:"center",fontSize:"15pt",marginBottom:"20%",overflowY:"auto"}}>
          <div style={{display:this.state.seentext,fontSize:"20pt",paddingTop:"15%",fontWeight:"bold"}}>
          Scroll over the bookshelf to see more books <br /> Click on a book to explore

            </div>
            {this.state.text}
            </div>
            </div>

          </Modal.Body>
        </Modal>
    </div>);}
}

export default RetUserDemo1;
