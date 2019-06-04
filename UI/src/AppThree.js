
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ReactStars from 'react-stars'
import './App.css';
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



class AppThree extends React.Component{
  
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
            "book_id" : "13192017",
            "asin" : "B006GQOWRY",
            "average_rating" : "4.17",
            "description" : "73700 words. Approximately 300 pages.\nEdited by Monique Happy\nMonique Happy Editorial Services\nSoldier On is Book Two in the Surviving the Zombie Apocalypse series, picking up on day four where \"Trudge: Surviving the Zombie Apocalypse\" left off.\nDay one began the same as any other Saturday in Portland, Oregon. After months of rain people were out and about enjoying the sights and sounds of summer.\nCade Grayson dropped his wife Brook and daughter Raven off at Portland International Airport. They were bound for Myrtle Beach, South Carolina to visit Brook's parents.\nOn that eye opening first day, Cade's introduction to the new world was hard to wrap his mind around. He was forced, in self defense, to kill his infected neighbors Ted and Lisa.\nPioneer Courthouse Square, nestled in the center of downtown Portland, was but one of the many flashpoints of a viral outbreak in the United States. By evening all of the hospitals in and around Portland were ravaged and teeming with ravenous walking dead. There was no triage, no way to cure them and by evening, for those unfortunate enough to be in a major metropolitan area, no way to escape them.\nDay two saw Washington D.C. fall to the reanimated hordes in search of human flesh. After declaring martial law and calling back all of the soldiers, airmen and marines from overseas, President Bernard Odero was never heard from again.\nFormer Speaker of the House and now President by succession Valerie Clay is saddled with the seemingly insurmountable task of leading the country back from the brink of what may prove to be mankind's Extinction Level Event. Her first order of business is to set up a safe haven in Colorado Springs as the new Capitol of the United States.\nDelta Force commander Mike Desantos embarks on a new mission with his small team of Tier-One operators. They must rescue critical personnel from the Center for Disease Control in Atlanta, Georgia and retrieve any useful information they have gleaned concerning the Omega virus.\nCade Grayson, ex Delta Force operator narrowly escaped Portland, Oregon ahead of the massive exodus. He eventually ended up leading a group of survivors through the western high desert, losing five of them violently along the way.\nAfter battling zombies and humans across the west, and still unsure of the well being or whereabouts of his family, Cade linked up with retiree Harry Conrad and Vietnam-era aviator Duncan Winters in Draper, Utah at Camp Williams, garrison for the 19th Special Forces Group.\nWhile suffering a night of fitful sleep trying to block out the moans of the living dead, Cade made the decision to leave the base and soldier on alone, resuming his cross country search for his loved ones.\nCan Valerie Clay bring the United States back from the brink and find a way to deal with the millions of undead?\nWill Cade Grayson survive long enough to find his wife and daughter... still alive?\nCan Mike Desantos complete his mission to the CDC and return to Colorado Springs in time to attend the birth of his first boy?\nOr will the insatiable dead succeed in breaking the indomitable spirit of mankind...?",
            "isbn" : "",
            "link" : "https://www.goodreads.com/book/show/13192017-soldier-on",
            "ratings_count" : "423",
            "title_without_series" : "Soldier On (Surviving the Zombie Apocalypse, #2)",
            "url" : "https://www.goodreads.com/book/show/13192017-soldier-on",
            "image_url" : "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
            "title" : "Soldier On (Surviving the Zombie Apocalypse, #2)",
            "name" : "Shawn Chesser"
            },
            {
            "book_id" : "18856928",
            "asin" : "B00DJJ25D4",
            "average_rating" : "4.35",
            "description" : "Allegiance, Book 5 in the Surviving the Zombie Apocalypse series, picks up two days after \"A Pound of Flesh: Surviving the Zombie Apocalypse\" left off.\nOutbreak - Day 1. Like a fragile house of cards in a hurricane, Presidents, Premiers, entire governments and their ruling bodies disappeared instantly. Some had ensconced themselves in deep underground bunkers or remained holed up in fortified strongholds, but history would tell that most had been swallowed up by the dead - never to be heard from again.\nInfection rates skyrocketed in the United States' largest cities the first days of the outbreak, as the rapacious dead delivered the Omega virus with emotionless efficiency. During the ensuing days, the rest of the country and the world shared the same fate as Omega spread exponentially from within the mega population centers, pulsing into the countryside, a rotten, shambling diaspora.\nIt had taken 3.7 billion years for man to evolve from a universal common ancestor - to stop dragging his collective knuckles - finally to emerge the dominant species, complete with shiny new iPads, Smartphones, worldwide non-stop air travel, and all manner of high tech war machines. Yet it had taken one microscopic man-made virus only three days to deliver mankind, on its collective knees, to the doorstep of extinction.\nWARNING - SPOILERS AHEAD\nOutbreak - Day 15. With an estimated ninety-nine percent of the United States' population having already succumbed to the rapidly spreading Omega virus, and countries and cities worldwide teeming with the dead, the struggle to survive the zombie apocalypse continues unabated in the high desert of Colorado.\nHaving just returned from a hastily thrown together secret mission that saw Robert Christian--the self-proclaimed President of his \"New America\"--snatched from his mountain redoubt and delivered kicking and screaming to the justice awaiting him at Schriever Air Force Base, Cade Grayson, father, husband, and Delta Force operator is horrified to learn that during his absence the base had been compromised, putting his family in harm's way.\nIts inhabitants still reeling from Pug's act of terror, and recently rocked by an undead outbreak inside the wire, Schriever no longer seems an island of safety surrounded by a sea of dead, but more like a shadowy prison, danger lurking within its walls.\nSo, with the Z-infested cities of Denver and Aurora to the north and a hundred thousand flesh eaters inhabiting Pueblo to the south, and all hope of a cure for Omega dwindling faster than the world's population, Cade uses a mandated two-day stand down to fully weigh out his options.\nWith each passing day, he finds himself warming to Brook's stance that they pull up stakes and put the acres of squat buildings and fenced-in concrete in their rearview mirror for good.\nWith his allegiance walking a tightrope between family and flag, will Cade appease Brook and move the family to Logan Winter's compound outside of Eden, Utah? Or will he lobby her to allow the family to stay at on Schriever, so that his Delta Team--still recovering from the recent loss of soft-spoken Sergeant Darwin Maddox and the Unit's longtime commander General Mike Desantos--will not find themselves undermanned and outgunned should another important mission crop up?\nOr will the talented Mister Murphy--of Murphy's Law fame--throw a monkey wrench into the equation and alter the best laid plans of mice and men?",
            "isbn" : "",
            "link" : "https://www.goodreads.com/book/show/18856928-allegiance",
            "ratings_count" : "365",
            "title_without_series" : "Allegiance (Surviving the Zombie Apocalypse, #5)",
            "url" : "https://www.goodreads.com/book/show/18856928-allegiance",
            "image_url" : "https://images.gr-assets.com/books/1501746129m/18856928.jpg",
            "title" : "Allegiance (Surviving the Zombie Apocalypse, #5)",
            "name" : "Shawn Chesser"
            },
            {
            "book_id" : "24384030",
            "asin" : "B00RAKCJHU",
            "average_rating" : "4.13",
            "description" : "DISPATCHES:\nOn August 19, 2019, a rogue Chinese military cabal launched an opportunistic EMP attack against the United States, triggering a cataclysmic chain of events--with the potential to change world forever.\nWith the United States crippled, belligerent powers rise to fill the void overseas, catapulting already volatile regions into chaos and war--hastening a worldwide collapse.\nOn the home front, most citizens continue to struggle with the loss of power and critical infrastructure, exhausting their thin supplies and turning to the mercy of an overwhelmed government to survive the winter.\nAs spring arrives, Alex Fletcher faces a difficult choice. With their food supplies running low, Alex questions the feasibility of staying with the Thorntons and Walkers at their isolated lake community. While searching northern Maine for a solution to his dilemma--he stumbles on a secret with the potential to destabilize the entire region.\nDispatches concludes The Perseid Collapse Series, answering reader questions about the world scene, while cleanly delivering the Fletcher's fate.",
            "isbn" : "",
            "link" : "https://www.goodreads.com/book/show/24384030-dispatches",
            "ratings_count" : "808",
            "title_without_series" : "Dispatches (The Perseid Collapse, #4)",
            "url" : "https://www.goodreads.com/book/show/24384030-dispatches",
            "image_url" : "https://images.gr-assets.com/books/1451333775m/24384030.jpg",
            "title" : "Dispatches (The Perseid Collapse, #4)",
            "name" : "Steven Konkoly"
            },
            {
            "book_id" : "18192906",
            "asin" : "B00DX73ZPY",
            "average_rating" : "4.21",
            "description" : "Cassie Forrest isn't surprised to learn that the day she's decided to get her life together is also the day the world ends. After all, she's been on a self-imposed losing streak since her survivalist parents died: she's stopped painting, broken off her engagement to Adrian and dated a real jerk. Rectifying her mistakes has to wait, however, because Cassie and her friends have just enough time to escape Brooklyn for her parents' cabin before Bornavirus LX turns them into zombies, too.\nThis is difficult enough, but Cassie's tag along ex-boyfriend and her friend's bratty sister have a knack for making everything, even the apocalypse, more unpleasant. When the two attract a threat as deadly as the undead to their safe haven, Cassie's forced to see how far she'll go to protect those she loves. And it's a lot farther than she'd anticipated. This, coupled with Adrian's distant voice on Safe Zone Radio and, of course, the living dead, threaten to put Cassie right back into the funk she just dragged herself out of.\nSurvival's great and all, especially when you have leather armor, good friends and home-brewed beer, but there's something Cassie must do besides survive: tell Adrian she still loves him. And to do that, Cassie has to find faith that she's stronger than she thinks, she's still a crack shot and true love never dies.",
            "isbn" : "",
            "link" : "https://www.goodreads.com/book/show/18192906-until-the-end-of-the-world",
            "ratings_count" : "1508",
            "title_without_series" : "Until the End of the World (Until the End of the World, #1)",
            "url" : "https://www.goodreads.com/book/show/18192906-until-the-end-of-the-world",
            "image_url" : "https://images.gr-assets.com/books/1373770332m/18192906.jpg",
            "title" : "Until the End of the World (Until the End of the World, #1)",
            "name" : "Sarah Lyons Fleming"
            },
            {
            "book_id" : "26790758",
            "asin" : "B015M2IVME",
            "average_rating" : "4.11",
            "description" : "The grid is down, the world is in flames, and FEMA is demanding his ship and cargo, but Captain Jordan Hughes isn't buying it.\nWhen the lights go out, seemingly for good, Hughes quickly finds being stranded far from home on a ship with working generators and a cargo of ten million gallons of irreplaceable fuel isn't exactly a low profile position.\nFaced with rising crew discontent, and surrounded by worsening violence ashore, things can't get much worse -- until they do.\nAs the remains of the federal government become increasingly corrupt and self-serving, Hughes joins a ragtag band of sailors, farmers, preppers ex-Coast Guardsmen, and dissident soldiers in an effort to re-unite his crew with their families and use remaining resources to rebuild a devastated society.\nAlong the way they face a desperate and starving population, rampant violence from street gangs and escaped convicts, and powerful warlords created as an unintended consequence of the federal government's ill-advised use of mercenaries.",
            "isbn" : "",
            "link" : "https://www.goodreads.com/book/show/26790758-under-a-tell-tale-sky",
            "ratings_count" : "542",
            "title_without_series" : "Under a Tell-Tale Sky (Disruption #1)",
            "url" : "https://www.goodreads.com/book/show/26790758-under-a-tell-tale-sky",
            "image_url" : "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
            "title" : "Under a Tell-Tale Sky (Disruption #1)",
            "name" : "R.E. McDermott"
            },
            {
            "book_id" : "20896131",
            "asin" : "B00ILXSR1M",
            "average_rating" : "4.37",
            "description" : "In the pulse pounding continuation of the Voodoo Plague series, John, Rachel and Dog have escaped from Atlanta, finding refuge at an Air Force Base in Tennessee. After being recalled to active duty, John strikes a deal with the Army that will help him rescue his wife in Arizona, but all of his plans are quickly put in jeopardy as a second wave of infection rips through the surviving population.",
            "isbn" : "",
            "link" : "https://www.goodreads.com/book/show/20896131-crucifixion",
            "ratings_count" : "852",
            "title_without_series" : "Crucifixion (Voodoo Plague, #2)",
            "url" : "https://www.goodreads.com/book/show/20896131-crucifixion",
            "image_url" : "https://images.gr-assets.com/books/1393255776m/20896131.jpg",
            "title" : "Crucifixion (Voodoo Plague, #2)",
            "name" : "Dirk Patton"
            }
            ],
            tileData:  [
                {
                "book_id" : "18815124",
                "asin" : "B00AHN0PSM",
                "average_rating" : "4.29",
                "description" : "Edited by Monique Happy Editorial Services\n104,000 words. Approximately 415 pages\nA Pound of Flesh, Book 4 in the Surviving the Zombie Apocalypse series, picks up the day after \"In Harm's Way: Surviving the Zombie Apocalypse\" left off.\nOutbreak - Day1 Like a fragile house of cards in a hurricane, Presidents, Premiers, entire governments and their ruling bodies disappeared instantly. Some had ensconced themselves in deep underground bunkers or remained holed up in fortified strongholds, but history would tell that most had been swallowed up by the dead - never to be heard from again.\nWARNING - SPOILERS AHEAD\nOutbreak - Day 9\nReeling from a surprise attack, and with two fires burning out of control, Schriever AFB goes on high alert. Former CDC Scientist Sylvester Fuentes, the apparent target, is killed along with his assistant Jessica Hanson, Brook's brother Carl and a handful of others. Destroyed in the conflagration was the Omega antiserum Fuentes had been working to perfect, and just hours prior had tested successfully on one of the newly infected.\nMeanwhile, returning prematurely from a mission to set off two nukes in the path of an advancing horde of living dead numbering several hundred thousand strong, and with his Delta Force commander Mike Desantos infected and dying from the Omega virus, Cade Grayson was forced to do something no friend should have to.\nThen, shortly after taking Desantos's life, and while still cradling the hard charging operator's corpse, the low rumble of the two nuclear detonations signaling the mission's likely success rolled over Schriever. Immediately, Delta Force Captain Cade Grayson begins to formulate a plan that will send him hurtling on a collision course with the parties responsible for the terrorist attack.\nSix hundred miles away in Eden, Utah, Duncan Winters, Vietnam-era aviator, hopes to recuperate and ride out the apocalypse in his survivalist/ Doomsday prepper brother Logan's compound.\nIn Jackson Hole, Wyoming, the New American capitol and fiefdom of Robert Christian, well-connected billionaire and self-appointed President, Daymon Bush, former BLM firefighter, bides his time with one burning desire: to find his girlfriend Heidi even if it ultimately kills him.\nWill Cade successfully lobby President Clay and embark on a new mission in order to extract a pound of flesh for Carl and Mike Desantos?\nWill Brook Grayson and her eleven-year-old daughter Raven continue to temper themselves against the new dangers inside and outside the wire at Schriever?\nWill Daymon accomplish his goal and survive Jackson Hole?\nCan the much older Duncan find a way to fit in with his younger brother Logan's prepper friends?\nWill newly promoted General Ronnie Gaines fit in with the late Commander's fractured Delta team?\nCan the human race find a way to survive the legions of migrating zombies?",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/18815124-a-pound-of-flesh",
                "ratings_count" : "631",
                "title_without_series" : "A Pound of Flesh (Surviving the Zombie Apocalypse, #4)",
                "url" : "https://www.goodreads.com/book/show/18815124-a-pound-of-flesh",
                "image_url" : "https://images.gr-assets.com/books/1501746079m/18815124.jpg",
                "title" : "A Pound of Flesh (Surviving the Zombie Apocalypse, #4)",
                "name" : "Shawn Chesser"
                },
                {
                "book_id" : "24384030",
                "asin" : "B00RAKCJHU",
                "average_rating" : "4.13",
                "description" : "DISPATCHES:\nOn August 19, 2019, a rogue Chinese military cabal launched an opportunistic EMP attack against the United States, triggering a cataclysmic chain of events--with the potential to change world forever.\nWith the United States crippled, belligerent powers rise to fill the void overseas, catapulting already volatile regions into chaos and war--hastening a worldwide collapse.\nOn the home front, most citizens continue to struggle with the loss of power and critical infrastructure, exhausting their thin supplies and turning to the mercy of an overwhelmed government to survive the winter.\nAs spring arrives, Alex Fletcher faces a difficult choice. With their food supplies running low, Alex questions the feasibility of staying with the Thorntons and Walkers at their isolated lake community. While searching northern Maine for a solution to his dilemma--he stumbles on a secret with the potential to destabilize the entire region.\nDispatches concludes The Perseid Collapse Series, answering reader questions about the world scene, while cleanly delivering the Fletcher's fate.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/24384030-dispatches",
                "ratings_count" : "808",
                "title_without_series" : "Dispatches (The Perseid Collapse, #4)",
                "url" : "https://www.goodreads.com/book/show/24384030-dispatches",
                "image_url" : "https://images.gr-assets.com/books/1451333775m/24384030.jpg",
                "title" : "Dispatches (The Perseid Collapse, #4)",
                "name" : "Steven Konkoly"
                },
                {
                "book_id" : "25425805",
                "asin" : "B00WKMUD76",
                "average_rating" : "4.57",
                "description" : "Tinker Air Force Base has fallen to the infected. Rachel's plane to Seattle has been shot down over a mountain wilderness in Idaho. Is she alive? It is up to John, Katie and Dog to race against time, invading armies, blizzards, herds of infected and vicious wild predators to reach the crash site. As they fight their way across the country, they must come to grips with the new reality of the world, and devise a long term plan for their survival.\nSweeping across a wide swath of North America, Recovery continues the journey of Major John Chase and the small band of survivors he's left with after the evacuation of Tinker at the end of Indestructible. New dangers abound as the toll from the battle to survive weighs heavily on John's shoulders.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/25425805-recovery",
                "ratings_count" : "543",
                "title_without_series" : "Recovery (Voodoo Plague, #8)",
                "url" : "https://www.goodreads.com/book/show/25425805-recovery",
                "image_url" : "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                "title" : "Recovery (Voodoo Plague, #8)",
                "name" : "Dirk Patton"
                },
                {
                "book_id" : "30513430",
                "asin" : "B01GSG91R2",
                "average_rating" : "4.69",
                "description" : "",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/30513430-fulcrum",
                "ratings_count" : "549",
                "title_without_series" : "Fulcrum: V Plague Book 12",
                "url" : "https://www.goodreads.com/book/show/30513430-fulcrum",
                "image_url" : "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                "title" : "Fulcrum: V Plague Book 12",
                "name" : "Dirk Patton"
                },
                {
                "book_id" : "25048280",
                "asin" : "B00U35917A",
                "average_rating" : "4.54",
                "description" : "Please note this is the full-length edition of Indestructible, not available for Kindle Unlimited. Looking to borrow with your KU subscription? Visit my author page at www.amazon.com/author/dirkpattonand look for Indestructible Parts 1 through 5. Each part is available for KU readers, and when read in order are exactly the same as the full version.\nIndestructible continues the story of the struggle for survival after the events in Days Of Perdition. With massive herds closing in on Tinker Air Force Base, the only option is evacuation, and Tech Sergeant Scott, Irina and Igor must race against time to search for any survivors of the crash.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/25048280-indestructible",
                "ratings_count" : "575",
                "title_without_series" : "Indestructible (Voodoo Plague, #7)",
                "url" : "https://www.goodreads.com/book/show/25048280-indestructible",
                "image_url" : "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                "title" : "Indestructible (Voodoo Plague, #7)",
                "name" : "Dirk Patton"
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
  <div className="App" style={{marginTop:'0',height:'100vh',verticalAlign:'middle',backgroundImage:'url(books.jpg)',backgroundSize:"cover",width:"100%"}}>
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

export default AppThree;
