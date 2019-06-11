
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



class RetUserDemo2 extends React.Component{
  
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

                "book_id" : "11187203",
                "asin" : "B004XJ555O",
                "average_rating" : "3.83",
                "description" : "Like most seventeen year olds, Ridley Heller thought she had her future all planned out. What she wanted most in life was to get out of small town Harker. Her only goal was to keep her mouth shut and her grades high so she could win a cheerleading scholarship to Stanford. But that was before she met Bo.\nIn Ridley's wildest dreams, she could never have planned for someone like Bo, for a love so intense it left her breathless. No human girl could.\nA haunting stranger that watched her from afar, Bo stole Ridley's heart from the moment she laid eyes on him. But he has secrets. Bo's a vampire. Both his past and his present are a danger to Ridley, but the biggest threat is not her blood; it's her heart. He's feeding a thirst for revenge that will cost him his life, and it may already be too late.\nThe more darkness Ridley uncovers, the more she realizes that her life will never be the same--with or without Bo. Can she sacrifice her future and her heart for someone who has a death wish?",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/11187203-for-the-love-of-a-vampire",
                "ratings_count" : "6628",
                "title_without_series" : "For the Love of a Vampire (Blood Like Poison, #1)",
                "url" : "https://www.goodreads.com/book/show/11187203-for-the-love-of-a-vampire",
                "image_url" : "https://images.gr-assets.com/books/1327168923m/11187203.jpg",
                "title" : "For the Love of a Vampire (Blood Like Poison, #1)",
                "name" : "M. Leighton"
            },
            {
                "book_id" : "13311811",
                "asin" : "B006Q1L7MM",
                "average_rating" : "3.77",
                "description" : "When Samara McKinley is bitten by a wolf, she doesn't realize how much her world will be turned upside down. After strange things begin happening to her, Samara discovers that the wolf who bit her wasn't just an ordinary wolf; it was a werewolf. Caught in a web of family secrets, Samara finds that her life is far more complicated than she ever could have imagined.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/13311811-howl",
                "ratings_count" : "415",
                "title_without_series" : "Howl (Howl #1)",
                "url" : "https://www.goodreads.com/book/show/13311811-howl",
                "image_url" : "https://images.gr-assets.com/books/1327811691m/13311811.jpg",
                "title" : "Howl (Howl #1)",
                "name" : "Jody Morse"
            },
            {
                "book_id" : "11513553",
                "asin" : "B0053GBEDI",
                "average_rating" : "3.69",
                "description" : "It's bad enough that the guy Shelby fell in love with at brat camp last summer had a dark secret, but helping him protect it has come at a huge cost. It's goodbye, Beverly Hills mansion; hello, creepy Swiss boarding school.\nWhat could be worse than doing time at Steinfelder Academy for Girls? Not hearing a word from her summer boyfriend, Austin Bridges III. Shelby's not even sure that the sacrifice she made for him meant anything, especially after she spies him in the tabloids with a European pop princess.\nBut Austin's more than your average son-of-a-rockstar werewolf hottie, and his connection to Shelby is stronger than she realizes.\nAs the days grow darker and the school prepares for holiday break, Austin arrives to explain the real reasons he's stayed away. Suddenly, Shelby begins to understand her improved senses, her need for moonlight, and her growing hunger. Now trapped at Steinfelder, with its ties to an ancient, bloody brotherhood, Shelby realizes that loving Austin will cost her more than she could have imagined.\nA dangerous full moon approaches for Shelby and Austin in this ebook novella sequel to the popular Young Adult romance Never Cry Werewolf.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/11513553-sometimes-by-moonlight",
                "ratings_count" : "752",
                "title_without_series" : "Sometimes by Moonlight (Never Cry Werewolf, #2)",
                "url" : "https://www.goodreads.com/book/show/11513553-sometimes-by-moonlight",
                "image_url" : "https://images.gr-assets.com/books/1306940985m/11513553.jpg",
                "title" : "Sometimes by Moonlight (Never Cry Werewolf, #2)",
                "name" : "Heather Davis"
            },
            {

                "book_id" : "9873443",
                "asin" : "B004FPYZLQ",
                "average_rating" : "3.51",
                "description" : "Delve deeper into the world of the fae with a Faeriewalker bonus story.\nHaving a prodigy for an older brother is not so fun...especially one who is magic wiz-kid. But Kimber has a plan to finally step out of his shadow.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/9873443-remedial-magic",
                "ratings_count" : "2040",
                "title_without_series" : "Remedial Magic (Faeriewalker, #0.5)",
                "url" : "https://www.goodreads.com/book/show/9873443-remedial-magic",
                "image_url" : "https://images.gr-assets.com/books/1327899557m/9873443.jpg",
                "title" : "Remedial Magic (Faeriewalker, #0.5)",
                "name" : "Jenna Black"
            },
            {

                "book_id" : "15789198",
                "asin" : "B008TAW1VO",
                "average_rating" : "4.20",
                "description" : "Coming back to the present was the least of Lexi Hunter's problems. She has some decisions to make . . . decisions that will be life-altering. When Dan doesn't return from the past right away, Lexi begins to wonder if he even survived the attack that she nearly witnessed and struggles to find a way to bring him back as soon as possible. Meanwhile, she must decide if she wants to drink the potion that will make her an immortal. As Lexi tries to ward off Rhonda and learns some dark secrets about Gabe, she also deals with the threat of the Briar Creek vampires finding out where she's been hiding.",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/15789198-cold-as-ice",
                "ratings_count" : "403",
                "title_without_series" : "Cold as Ice (The Briar Creek Vampires, #5)",
                "url" : "https://www.goodreads.com/book/show/15789198-cold-as-ice",
                "image_url" : "https://images.gr-assets.com/books/1344217911m/15789198.jpg",
                "title" : "Cold as Ice (The Briar Creek Vampires, #5)",
                "name" : "Jayme Morse"
            },
            {

                "book_id" : "11394473",
                "asin" : "B004ZFU81M",
                "average_rating" : "3.82",
                "description" : "A Broken Heart Short Story\nMeckenzie is a thief on the run ... right into the strong buff arms of loup de sang Ren Marchand. When her nemesis Ena, an evil witch who's still angry about Meckenzie's ... er, appropriation of a certain gem, chases her down outside the borders of Broken Heart, Oklahoma, Ren has no choice but to let the smart-mouthed human into Oklahoma's protected paranormal community. Unfortunately, the witch follows them into town, and wrecks some serious havoc. Now, Meckenzie must rely on Ren, and other Broken Heart citizens, to defeat Ena. Not to mention getting a big ol' smooch from a certain hot blood wolf...",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/11394473-the-early-girl-gets-the-blood-wolf",
                "ratings_count" : "353",
                "title_without_series" : "The Early Girl Gets the Blood Wolf (Broken Heart, #7.5)",
                "url" : "https://www.goodreads.com/book/show/11394473-the-early-girl-gets-the-blood-wolf",
                "image_url" : "https://images.gr-assets.com/books/1328306659m/11394473.jpg",
                "title" : "The Early Girl Gets the Blood Wolf (Broken Heart, #7.5)",
                "name" : "Michele Bardsley"
            },
            {

                "book_id" : "11504869",
                "asin" : "B005342ERA",
                "average_rating" : "3.62",
                "description" : "In a world filled with magic, love might be the final answer in the eternal battle between good and evil. When Lux is tasked with retrieving the virtuous Lily for his master, his entire world is put in danger. Lux must battle goblins, demon dogs, and sea dragons to rescue the one he loves, and that's only the beginning...",
                "isbn" : "",
                "link" : "https://www.goodreads.com/book/show/11504869-virtue",
                "ratings_count" : "278",
                "title_without_series" : "Virtue",
                "url" : "https://www.goodreads.com/book/show/11504869-virtue",
                "image_url" : "https://images.gr-assets.com/books/1328172023m/11504869.jpg",
                "title" : "Virtue",
                "name" : "Amanda Hocking"
            },

        ],
            tileData:  [
                {
                    "book_id" : "11731782",
                    "asin" : "B0055Q8HDG",
                    "average_rating" : "3.86",
                    "description" : "Sherry has always known there was something out there. She's eighteen, works for a tabloid newspaper in Chicago and has a brother, Danny who is a lazy mooch. They live a pretty normal dull life with hippie parents and a normal existence. Then the moon dissapears and people start to go missing only to reappear later, but different. Sherry has an abusive ex-boyfriend who shows up and claims to be one of these beings that have been showing up around the world. He's no longer the same person in that body. He tells her he has come to protect her and her brother and takes her underground, against her will to save her, where they meet others like them. She begins to unravel the truth about Merrick, about what he's really doing here, about the way he looks at her, about the crazy dangerous world they live in. Can he convince her that he's here to help? Will she like what she finds when she opens up to the truth? Will he be the one to love her when everyone else has failed her? Will he be able to protect her?",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/11731782-collide",
                    "ratings_count" : "5125",
                    "title_without_series" : "Collide (Collide, #1)",
                    "url" : "https://www.goodreads.com/book/show/11731782-collide",
                    "image_url" : "https://images.gr-assets.com/books/1352764436m/11731782.jpg",
                    "title" : "Collide (Collide, #1)",
                    "name" : "Shelly Crane"
                },
                {
                    "book_id" : "12999514",
                    "asin" : "B006287MG4",
                    "average_rating" : "3.78",
                    "description" : "Clara has it all. A wrestling star boyfriend, popular friends, all the right school activities...pretty much a perfect life...up until her parents died. Now she lives with the Pastor and his family and though they take good care of her, she feels alone. Then her boyfriend, Tate, starts to show signs of trouble when a new guy, Eli, comes to town. Clara is fascinated with him but hides it until something happens. Eli confesses to her that she gives him something he's never had before...something he needs. Everything is about to change for this normal pretty popular girl in a supernatural way.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/12999514-devour",
                    "ratings_count" : "7261",
                    "title_without_series" : "Devour (Devoured, #1)",
                    "url" : "https://www.goodreads.com/book/show/12999514-devour",
                    "image_url" : "https://images.gr-assets.com/books/1395669087m/12999514.jpg",
                    "title" : "Devour (Devoured, #1)",
                    "name" : "Shelly Crane"
                },
                {
                    "book_id" : "12925928",
                    "asin" : "B005XKWQ18",
                    "average_rating" : "4.05",
                    "description" : "There's something strange going on in Briar Creek. Everyone's been quiet lately...too quiet. Lexi's fate was determined before she even arrived in Briar Creek at the beginning of the summer, and it was far more deadly than she ever could have imagined.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/12925928-thicker-than-water",
                    "ratings_count" : "650",
                    "title_without_series" : "Thicker Than Water (The Briar Creek Vampires #2)",
                    "url" : "https://www.goodreads.com/book/show/12925928-thicker-than-water",
                    "image_url" : "https://images.gr-assets.com/books/1327811564m/12925928.jpg",
                    "title" : "Thicker Than Water (The Briar Creek Vampires #2)",
                    "name" : "Jayme Morse"
                },
                {
                    "book_id" : "13317392",
                    "asin" : "B006MLKZWO",
                    "average_rating" : "4.15",
                    "description" : "CONSTANT DANGER\nOn the run from a mental institution and her vindictive half-brother, it's safe to say that Sarah Pringle's happy life as a schoolteacher is on hold. Too bad that as far as self-defense goes, \"run and hide\" is the best she's got. And with the monsters that started her escape hot on her heels, that's not going to cut it for long...\nINSTANT LUST\nThat is, unless Sarah has a bigger, badder, hotter monster on her side. Max Petrovsky is right at the top of the list of alpha male ass-kickers. And he knows exactly what Sarah's up against. Good thing, because the minute he sees her something primal kicks in, turning everyday attraction into red-hot desire. As long as they're cooperating, why not mix some pleasure with business? Of course, Max should probably tell Sarah he's a vampire himself...<\n27,000 words",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/13317392-tempted",
                    "ratings_count" : "4152",
                    "title_without_series" : "Tempted (Dark Protectors, #2.5)",
                    "url" : "https://www.goodreads.com/book/show/13317392-tempted",
                    "image_url" : "https://images.gr-assets.com/books/1327853342m/13317392.jpg",
                    "title" : "Tempted (Dark Protectors, #2.5)",
                    "name" : "Rebecca Zanetti"
                },
                {
                    "book_id" : "10203031",
                    "asin" : "B004ISLS24",
                    "average_rating" : "4.08",
                    "description" : "With a war looming on the horizon, Wendy's fate seems sealed.But everything she sacrificed might be in vain if she can't save the ones she loves. Her whole life has been leading up to this, and it's all coming to an end.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/10203031-ascend",
                    "ratings_count" : "24310",
                    "title_without_series" : "Ascend (Trylle #3)",
                    "url" : "https://www.goodreads.com/book/show/10203031-ascend",
                    "image_url" : "https://images.gr-assets.com/books/1327883277m/10203031.jpg",
                    "title" : "Ascend (Trylle #3)",
                    "name" : "Amanda Hocking"
                },
                {
                    "book_id" : "10950666",
                    "asin" : "B004SI455Q",
                    "average_rating" : "3.78",
                    "description" : "College sophomore Bryn Dawson is a self-proclaimed poster child for normal. However, the day William Hayward enters her life, normalcy is the last thing Bryn will be able to count on if she wants to be with him. Too mysterious and appealing to be good for a girl, Bryn feels drawn to him in a way that seems out of her control--as if fate is orchestrating it.\nDespite every red flag and warning siren going off in her head telling her not to, Bryn falls hard for William, knowing he's categorically different from anyone she's ever met. She never imagined how right she was. When William takes her deeper into the rabbit hole of his world, Bryn must decide just how much she is willing to sacrifice to be with him, knowing no matter what, fate always finds a way to have the last laugh.\nSpinning a new twist on star-crossed lovers, Eternal Eden will put Bryn through a gauntlet of turmoil, challenging her to find the power within herself to become the heroine in her own story.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/10950666-eternal-eden",
                    "ratings_count" : "12312",
                    "title_without_series" : "Eternal Eden (Eden Trilogy, #1)",
                    "url" : "https://www.goodreads.com/book/show/10950666-eternal-eden",
                    "image_url" : "https://images.gr-assets.com/books/1327931257m/10950666.jpg",
                    "title" : "Eternal Eden (Eden Trilogy, #1)",
                    "name" : "Nicole  Williams"
                },
                {
                    "book_id" : "8511265",
                    "asin" : "B003NSBMNU",
                    "average_rating" : "3.97",
                    "description" : "The Drakes are rather different to your usual neighbours. They are vampires and some of the members of the family date back to the twelfth century. One of the children, Solange, is the only born female vampire known and, as such, she poses a direct threat to the vampire queen. Her best friend Lucy is human, and when Solange is kidnapped Lucy and Solange's brother, Nicholas, set out to save her. Lucy soon discovers that she would like to be more than just friends with Nicholas. But how does one go about dating a vampire? Meanwhile, Solange finds an unlikely ally in Kieran, a vampire slayer on the hunt for his father's killer.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/8511265-hearts-at-stake",
                    "ratings_count" : "317",
                    "title_without_series" : "Hearts at Stake (Drake Chronicles, #1)",
                    "url" : "https://www.goodreads.com/book/show/8511265-hearts-at-stake",
                    "image_url" : "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                    "title" : "Hearts at Stake (Drake Chronicles, #1)",
                    "name" : "Alyxandra Harvey"
                },
                {
                    "book_id" : "15767996",
                    "asin" : "B00A9WGTT0",
                    "average_rating" : "4.11",
                    "description" : "Everything about Adria Dawson's life has changed in unimaginable ways: the shattering betrayal of her mother, the fight for her life and sanity...the loss of her humanity. But now Adria must face the ultimate challenge and risk not only her life, but the lives of everyone she loves at the wrathful hands of Isaac Mayfair's father.\nDetermined to help unravel a mysterious message deeply rooted in an unhinged mind, Adria becomes obsessed with traveling into Aramei's turbulent past to see the truth of how the relationships and betrayals between the Mayfair and Vargas bloodlines were formed.\nMeanwhile, Adria and the Mayfairs are doing everything they can to smoke out and trap the Praverian traitor. A trip to Providence uncovers not only an old family line who are enemies of the Praverians, but also raises questions about the Praverian's true agenda.\nBut the traitor willbe caught. People willdie. And Adria's destiny to be the cause of a war willcome to pass. But what could a kind and simple girl like Adria Dawson ever do that could be considered an act of war? The landscape of the werewolf world will be forever changed in the climactic conclusion to The Darkwoods Trilogy.",
                    "isbn" : "",
                    "link" : "https://www.goodreads.com/book/show/15767996-the-ballad-of-aramei",
                    "ratings_count" : "3127",
                    "title_without_series" : "The Ballad of Aramei (The Darkwoods Trilogy, #3)",
                    "url" : "https://www.goodreads.com/book/show/15767996-the-ballad-of-aramei",
                    "image_url" : "https://images.gr-assets.com/books/1349265805m/15767996.jpg",
                    "title" : "The Ballad of Aramei (The Darkwoods Trilogy, #3)",
                    "name" : "J.A. Redmerski"
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

export default RetUserDemo2;
