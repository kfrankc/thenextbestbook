import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ReactStars from 'react-stars'
import './App.css';
import {FaExternalLinkAlt} from 'react-icons/fa';
import {asyncContainer,Typeahead} from 'react-bootstrap-typeahead'
const AsyncTypeahead = asyncContainer(Typeahead)


const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
},
gridList: {
    width: "100vw",
    height: 450,
},
icon: {
    color: 'rgba(255, 255, 255, 0.54)',
},
gridTile: {
    
}
});

const tileData = [{'_id': '5cf2ebc7402099e6b0e2723c', 'book_id': '392438', 'asin': '', 'average_rating': '4.05', 'description': 'In 1978 Warren Fellows was convicted of heroin trafficking between Thailand and Australia. He was consequently sentenced to life in Bang Kwang prison, known as the Bangkok Hilton. This is the story of his 12 years behind bars, the abuse of human rights and the squalid conditions he endured.', 'isbn': '184018275X', 'link': 'https://www.goodreads.com/book/show/392438.The_Damage_Done', 'ratings_count': '2463', 'similar_books': ['825842', '706440', '828148', '1401055', '123706', '928433', '9992246', '566738', '814108', '1408367', '230543', '1840104', '811936', '6380587', '370152', '444050', '386579'], 'title_without_series': 'The Damage Done: Twelve Years of Hell in a Bangkok Prison', 'url': 'https://www.goodreads.com/book/show/392438.The_Damage_Done', 'image_url': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png', 'title': 'The Damage Done: Twelve Years of Hell in a Bangkok Prison', 'name': 'Warren Fellows'}, {'_id': '5cf2ebcb402099e6b0e39800', 'book_id': '183586', 'asin': '', 'average_rating': '4.18', 'description': 'A powerful novel of the North Atlantic in World War II, this is the story of the British ships Compass Rose and Saltash and of their desparate cat-and-mouse game with Nazi U-boats. First published to great accalim in 1951, The Cruel Sea remains a classic novel of endurance and daring.', 'isbn': '1580800467', 'link': 'https://www.goodreads.com/book/show/183586.The_Cruel_Sea', 'ratings_count': '4314', 'similar_books': ['139237', '311802', '815854', '299596', '149667', '1510289', '171625', '1790475', '2472016', '10790039', '1203812', '6004351', '2435104', '315511', '541936', '151755', '368772', '1711378'], 'title_without_series': 'The Cruel Sea', 'url': 'https://www.goodreads.com/book/show/183586.The_Cruel_Sea', 'image_url': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png', 'title': 'The Cruel Sea', 'name': 'Nicholas Monsarrat'}, {'_id': '5cf2ebd2402099e6b0e527fe', 'book_id': '17681595', 'asin': '', 'average_rating': '4.00', 'description': "Midnight Express tells the gut-wrenching true story of a young man's incarceration and escape from a Turkish prison. A classic story of survival and human endurance, told with humor, honesty, and heart, it became the Academy Award-winning blockbuster film of the same name.\nIn 1970 Billy Hayes was an English major who left college in search of adventures to write about, like his hero Jack London. He had a rude awakening when he was arrested at the airport in Istanbul trying to board a plane while carrying four pounds of hashish, and given a life sentence. After five brutal years, relentless efforts by his family to gain his release, and endless escape plotting, Hayes finally took matters into his own hands. On a dark night, in a wailing storm he began a desperate and daring escape to freedom... This is the astounding journey, told in Billy Hayes's own words, of those five years of living hell and of the harrowing ordeal of his time on the run.", 'isbn': '0988981440', 'link': 'https://www.goodreads.com/book/show/17681595-midnight-express', 'ratings_count': '1175', 'similar_books': ['332333', '1249542', '618396', '1865441', '17090721', '1485125', '428246', '3808716', '378282', '1829213', '448507', '166588', '443499', '59519', '163507', '309741', '1129067'], 'title_without_series': 'Midnight Express', 'url': 'https://www.goodreads.com/book/show/17681595-midnight-express', 'image_url': 'https://images.gr-assets.com/books/1365393023m/17681595.jpg', 'title': 'Midnight Express', 'name': 'Billy Hayes'}, {'_id': '5cf2ebda402099e6b0e698be', 'book_id': '57778', 'asin': '', 'average_rating': '4.14', 'description': '', 'isbn': '0140239243', 'link': 'https://www.goodreads.com/book/show/57778.The_Moon_s_a_Balloon', 'ratings_count': '3665', 'similar_books': ['327610', '1473969', '1641713', '745307', '377870', '1753820', '836301', '24942', '411748', '26871', '14432266', '847106', '761601', '571828', '914774', '943789', '393009', '590064'], 'title_without_series': "The Moon's a Balloon", 'url': 'https://www.goodreads.com/book/show/57778.The_Moon_s_a_Balloon', 'image_url': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png', 'title': "The Moon's a Balloon", 'name': 'David Niven'}, {'_id': '5cf2ebe1402099e6b0e88de8', 'book_id': '602398', 'asin': '', 'average_rating': '3.68', 'description': 'In those days the hermits of the desert lived in huts on the banks of the Nile, where they lived abstemious lives, taking no food till after sunset, and eating nothing but bread with a little salt and hyssop.They lived in temperance and chastity, they wore a hair shirt and a hood, slept on the bare ground after long watching, prayed, sang psalms, and, in short, spent their days in works of penitence. As an atonement for original sin, they refused their body not only all pleasures and satisfactions, but even that care and attention which in this age are deemed indispensable. They believed that the diseases of our members purify our souls, and the flesh could put on no adornment more glorious than wounds and ulcers. It was a good and virtuous life. It was also fairly smelly.\nOne day a desert hermit named Paphnutius was recalling the hours he had lived apart from God, and examining his sins one by one, that he might the better ponder on their enormity, he remembered that he had seen at the theatre at Alexandria a very beautiful actress named Thais. Repenting his boyhood lust for her, he saw her countenance weeping, and resolved that the courtesan must necessarily be brought to salvation. It was a terrible mistake, and one that still haunts us all.', 'isbn': '1587158558', 'link': 'https://www.goodreads.com/book/show/602398.Tha_s', 'ratings_count': '521', 'similar_books': ['782188', '679367', '339019', '364143', '294251', '911325', '1544307', '3762495', '3607373', '337176', '2038673', '105399', '2528687', '2602928', '443160', '2670439', '550655'], 'title_without_series': 'Thaïs', 'url': 'https://www.goodreads.com/book/show/602398.Tha_s', 'image_url': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png', 'title': 'Thaïs', 'name': 'Anatole France'}, {'_id': '5cf2ebe9402099e6b0eaf909', 'book_id': '540020', 'asin': '', 'average_rating': '4.25', 'description': "Librarian note: an alternate cover for this edition can be found \x01.\nThe Jackal. A tall, blond Englishman with opaque, gray eyes. A killer at the top of his profession. A man unknown to any secret service in the world. An assassin with a contract to kill the world's most heavily guarded man.\nOne man with a rifle who can change the course of history. One man whose mission is so secretive not even his employers know his name. And as the minutes count down to the final act of execution, it seems that there is no power on earth that can stop the Jackal.", 'isbn': '0553266306', 'link': 'https://www.goodreads.com/book/show/540020.The_Day_of_the_Jackal', 'ratings_count': '87325', 'similar_books': ['18999', '295961', '31231', '171624', '2579284', '762806', '149621', '21796', '99894', '30893', '46429'], 'title_without_series': 'The Day of the Jackal', 'url': 'https://www.goodreads.com/book/show/540020.The_Day_of_the_Jackal', 'image_url': 'https://images.gr-assets.com/books/1405364996m/540020.jpg', 'title': 'The Day of the Jackal', 'name': 'Frederick Forsyth'}, {'_id': '5cf2ebec402099e6b0eb9660', 'book_id': '607485', 'asin': '', 'average_rating': '3.55', 'description': '', 'isbn': '1592280447', 'link': 'https://www.goodreads.com/book/show/607485.The_French_Connection', 'ratings_count': '278', 'similar_books': ['261206', '7803748', '261521', '16066834', '274394', '1489086', '6735042', '400866', '1382088', '1530634', '12042387', '947362', '126233', '6077449', '346220', '55515', '242760'], 'title_without_series': 'The French Connection: A True Account of Cops, Narcotics, and International Conspiracy', 'url': 'https://www.goodreads.com/book/show/607485.The_French_Connection', 'image_url': 'https://images.gr-assets.com/books/1328852404m/607485.jpg', 'title': 'The French Connection: A True Account of Cops, Narcotics, and International Conspiracy', 'name': 'Robin Moore'}, {'_id': '5cf2ebf4402099e6b0ee31f7', 'book_id': '1812772', 'asin': '', 'average_rating': '3.73', 'description': 'Maa on syntinen laulu on kirjailija Timo K. Mukan esikoisteos vuodelta 1964. Romaani kuvaa pienen lappilaisen kylan elamaa 1940-luvun lopulla ja Lapin luontoa seka seksuaalisuutta, uskontoa ja kuolemaa.', 'isbn': '9525439356', 'link': 'https://www.goodreads.com/book/show/1812772.Maa_on_syntinen_laulu', 'ratings_count': '605', 'similar_books': ['3398433', '12185760', '8061650', '1229089', '3270858', '1670011', '3055356', '254291', '1564518', '1979559', '1156832', '2622854', '1109962', '8095990', '6576539', '5960030', '4891377', '3317023'], 'title_without_series': 'Maa on syntinen laulu', 'url': 'https://www.goodreads.com/book/show/1812772.Maa_on_syntinen_laulu', 'image_url': 'https://images.gr-assets.com/books/1375821505m/1812772.jpg', 'title': 'Maa on syntinen laulu', 'name': 'Timo K. Mukka'}, {'_id': '5cf2ebf9402099e6b0efa80a', 'book_id': '1203812', 'asin': '', 'average_rating': '3.91', 'description': 'Divided between her love of the land and the harshness of farming life, young Chris Guthrie finally decides to stay in the rural community of her childhood. Yet World War I and the changes that follow make her a widow and mock the efforts of her youth.', 'isbn': '0862411793', 'link': 'https://www.goodreads.com/book/show/1203812.Sunset_Song', 'ratings_count': '2122', 'similar_books': ['404980', '824132', '1768393', '1961551', '512009', '183586', '469215', '795095', '548146', '37134', '391368', '1541795', 
'1083545', '853374', '84512', '392005', '73806', '195733'], 'title_without_series': 'Sunset Song (A Scots Quair, #1)', 'url': 'https://www.goodreads.com/book/show/1203812.Sunset_Song', 'image_url': 'https://images.gr-assets.com/books/1359617860m/1203812.jpg', 'title': 'Sunset Song (A Scots Quair, #1)', 'name': 'Lewis Grassic Gibbon'}, {'_id': '5cf2ebff402099e6b0f11bc7', 'book_id': '850249', 'asin': '', 'average_rating': '3.52', 'description': '', 'isbn': '0552547093', 'link': 'https://www.goodreads.com/book/show/850249.Sleepovers', 'ratings_count': '3761', 'similar_books': ['1203812', '183586', '1213927', '73806', '370124', '1687878', '1321017', '47345', '11105363', '545516', '1259833', '267641', '1582523', '1982824', '535856'], 'title_without_series': 'Sleepovers', 'url': 'https://www.goodreads.com/book/show/850249.Sleepovers', 'image_url': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png', 'title': 'Sleepovers', 'name': 'Jacqueline Wilson'}, {'_id': '5cf2ec1c402099e6b0f89beb', 'book_id': '73806', 'asin': '', 'average_rating': '3.99', 'description': "WARSAW 1942\nOn a cold, dark night in Warsaw in 1942, the Balicki children watch in horror as Nazi Storm Troopers arrest their mother. Now they are alone. With the war raging around them, food and shelter are hard to come by. They live in constant fear.\nFinally, they get word that their father is alive. He has made it to Switzerland. Edek and Ruth are determined to find him, though they know how dangerous the long trip from Warsaw will be. But they also know that if they don't make it, they may never see their parents again.\nTheir gripping story is taken from actual accounts.", 'isbn': '0590437151', 'link': 'https://www.goodreads.com/book/show/73806.Escape_From_Warsaw', 'ratings_count': '2445', 'similar_books': ['34601', '176006', '56079', '278958', '1680976', '703158', '10963', '1203812', '183586', '581093', '257751', '296384', '1404930', '805616', '8976', '723738', '1142145', '313423'], 'title_without_series': 'Escape From Warsaw', 'url': 'https://www.goodreads.com/book/show/73806.Escape_From_Warsaw', 'image_url': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png', 'title': 'Escape From Warsaw', 'name': 'Ian Serraillier'}, {'_id': '5cf2ec1f402099e6b0f95667', 'book_id': '453035', 'asin': '', 'average_rating': '4.11', 'description': 'Warri and Yatungka were believed to be the last of the Mandildjara tribe of desert nomads to live permanently in the traditional way. Their deaths in the late 1970s marked the end of a tribal lifestyle that stretched back more than 30,000 years. The Last of the Nomads tells of an extraordinary journey in search of Warri and Yatungka.', 'isbn': '0949206873', 'link': 'https://www.goodreads.com/book/show/453035.The_Last_of_the_Nomads', 'ratings_count': '69', 'similar_books': ['88063', '1900695', '823874', '1013848', '1604505', '263881', '1378768', '3215077', '770183', '692503', '287493', '196546', '2522427', '180804', '323327', '661561', '226526'], 'title_without_series': 'The Last of the Nomads', 'url': 'https://www.goodreads.com/book/show/453035.The_Last_of_the_Nomads', 'image_url': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png', 'title': 'The Last of the Nomads', 'name': 'W.J. Peasley'}, {'_id': '5cf2ec24402099e6b0fa3d29', 'book_id': '12139037', 'asin': '', 'average_rating': '4.69', 'description': 'V nachalo uchilishche e organiziran kurs po basketbol. Ambitsiozniia tren\'or staratelno podbira igrachite, gotovi da izp\'lniat i nai-absurdnite mu komandi. Sled kato zak\'sniavat obache dve momchentsa se okazvat izv\'n otbora. Taka zapochva ,,voinata na taralezhite". S mnogo izobretatelnost i khitrost, te uspiavat da si napraviat sobstveno basketbolno igrishche i dori da organizirat turnir.', 'isbn': '', 'link': 'https://www.goodreads.com/book/show/12139037', 'ratings_count': '170', 'similar_books': ['8521434', '8009125', '6975276', '3687146', '4357092', '12741622', '1802224', '12621886', '1864618', '8596036', '7925719', '2124105', '5149108'], 'title_without_series': 'Войната на таралежите', 'url': 'https://www.goodreads.com/book/show/12139037', 'image_url': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png', 'title': 'Войната на таралежите', 'name': 'Bratia Mormarevi'}, {'_id': '5cf2ec24402099e6b0fa49f7', 'book_id': '6376400', 'asin': '', 'average_rating': '3.81', 'description': 'Before the notorious Five Families who dominated U.S. organized crime for a bloody half century, there was the one-fingered criminal genius Giuseppe Morello-known as "The Clutch Hand"-and his lethal coterie of associates. In The First Family, historian, journalist, and New York Times bestselling author Mike Dash brings to life this little-known story, following the rise of the Mafia in America from the 1890s to the 1920s, from the lawless villages of Sicily to the streets of Little Italy. Using an impressive array of primary sources-hitherto untapped Secret Service archives, prison records, trial transcripts, and interviews with surviving family members-this is the first Mafia history that applies scholarly rigor to the story of the Morello syndicate and the birth of organized crime on these shores.\nProgressing from small-time scams to counterfeiting rings to even bigger criminal enterprises, Giuseppe Morello exerted ruthless control of Italian neighborhoods in New York, and through adroit coordination with other Sicilian crime families, his Clutch Hand soon reached far beyond the Hudson River.\nThe men who battled Morello\'s crews were themselves colorful and legendary figures, including William Flynn, a fearless Secret Service agent, and Lieutenant Detective Giuseppe "Joe" Petrosino of the New York Police Department\'s elite Italian Squad, whose pursuit of the brutal gangs ultimately cost him his life.\nCombining first-rate scholarship and pulse-quickening action, and set amid rustic Sicilian landscapes and the streets of old New York, The First Family is a groundbreaking account of the crucial period when the American criminal underworld exploded with violent fury across the nation.', 'isbn': '1400067227', 'link': 'https://www.goodreads.com/book/show/6376400-the-first-family', 'ratings_count': '822', 'similar_books': ['769760', '6353690', '6088116', '968971', '1158677', '97427', '1158907', '652063', '22239', '63405', '440277', '2089504', '1122424', '7301970', '579190', '9485202'], 'title_without_series': 'The First Family: Terror, Extortion, Revenge, Murder, and the Birth of the American Mafia', 'url': 'https://www.goodreads.com/book/show/6376400-the-first-family', 'image_url': 'https://images.gr-assets.com/books/1320537290m/6376400.jpg', 'title': 'The First Family: Terror, Extortion, Revenge, Murder, and the Birth of the American Mafia', 'name': 'Mike Dash'}, {'_id': '5cf2ec34402099e6b0fe128c', 'book_id': '785625', 'asin': '', 'average_rating': '4.06', 'description': 'It seemed like a good idea. Tired of everyday life ashore, Farley Mowat would find a sturdy boat in Newfoundland and roam the salt sea over, free as a bird. What he found was the worst boat in the world, and she nearly drove him mad. The Happy Adventure, despite all that Farley and his Newfoundland helpers could do, leaked like a sieve. Her engine only worked when she felt like it. Typically, on her maiden voyage, with the engine stuck in reverse, she backed out of the harbour under full sail. And she sank, regularly.\nHow Farley and a varied crew, including the intrepid lady who married him, coaxed the boat from Newfoundland to Lake Ontario is a marvellous story. The encounters with sharks, rum-runners, rum and a host of unforgettable characters on land and sea make this a very funny book for readers of all ages.', 'isbn': '055327788X', 'link': 'https://www.goodreads.com/book/show/785625.The_Boat_Who_Wouldn_t_Float', 'ratings_count': '1409', 'similar_books': ['106163', '24678', '118144', '1332755', '149182', '844115', '1088608', '666984', '1977085', '222233', '2170953', '969324', '1163208', '641457', '319257', '190340'], 'title_without_series': "The Boat Who Wouldn't Float", 'url': 'https://www.goodreads.com/book/show/785625.The_Boat_Who_Wouldn_t_Float', 'image_url': 'https://images.gr-assets.com/books/1403194025m/785625.jpg', 'title': "The Boat Who Wouldn't Float", 'name': 'Farley Mowat'}, {'_id': '5cf2ec35402099e6b0fe47e5', 'book_id': '2653762', 'asin': '', 'average_rating': '4.48', 'description': '', 'isbn': '2259191746', 'link': 'https://www.goodreads.com/book/show/2653762-les-rois-maudits', 'ratings_count': '1336', 'similar_books': ['1845191', '997654', '1520738', '78676', '325895', '1882872', '237758', '1342322', '3014291', '956320', '300041', '1359071', '28409', '329408'], 'title_without_series': 'Les Rois Maudits', 'url': 'https://www.goodreads.com/book/show/2653762-les-rois-maudits', 'image_url': 'https://images.gr-assets.com/books/1327978980m/2653762.jpg', 'title': 'Les Rois Maudits', 'name': 'Maurice Druon'}, {'_id': '5cf2ec44402099e6b001a566', 'book_id': '3990814', 'asin': '', 'average_rating': '4.09', 'description': "John Healy's The Grass Arena describes with unflinching honesty his experiences of addiction, his escape through learning to play chess in prison, and his ongoing search for peace of mind. This Penguin Classics edition includes an afterword by Colin MacCabe.\nIn his searing autobiography Healy describes his fifteen years living rough in London without state aid, when begging carried an automatic three-year prison sentence and vagrant alcoholics prowled the parks and streets in search of drink or prey. When not united in their common aim of acquiring alcohol, winos sometimes murdered one another over prostitutes or a bottle, or the begging of money. Few modern writers have managed to match Healy's power to refine from the brutal destructive condition of the chronic alcoholic a story so compelling it is beyond comparison.\nJohn Healy (b. 1943) was born into an impoverished, Irish immigrant family, in the slums of Kentish Town, North London. Out of school by 14, pressed into the army and intermittently in prison, Healy became an alcoholic early on in life. Despite these obstacles Healy achieved remarkable, indeed phenomenal expertise in both writing and chess, as outlined in the autobiographical The Grass Arena.\nIf you enjoyed The Grass Arena, you might like Last Exit to Brooklyn, also available in Penguin Modern Classics.\n'Sober and precise, grotesque, violent, sad, charming and hilarious all at once'\nLiterary Review\n'Beside it, a book like Orwell's Down and Out in Paris and Londonseems a rather inaccurate tourist guide'\nColin MacCabe", 'isbn': '0141189592', 'link': 'https://www.goodreads.com/book/show/3990814-the-grass-arena', 'ratings_count': '350', 'similar_books': ['946459', '1020053', '1224264', '352815', '796398', '25253151', '415055', '15842918', '6216854', '1116201', '943365', '3278905', '897982', '1790509', '417909', '13674'], 'title_without_series': 'The Grass Arena: An Autobiography', 'url': 'https://www.goodreads.com/book/show/3990814-the-grass-arena', 'image_url': 'https://images.gr-assets.com/books/1338931087m/3990814.jpg', 'title': 'The Grass Arena: An Autobiography', 'name': 'John Healy'}]

class AppOne extends React.Component{
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);

    this.state = {
      selected: {},
      recLoading: false,
      show: false,
      text: "",
      title:"",
      author:"",
      rating:"",
      isLoading: false,
      link:"",
      seen:"none",
      seentext:"block",
      options: [],
      tileData: []
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
    console.log(this.state.selected)
    this.setState({recLoading: true})
    fetch(`http://localhost:8080/books/similarbooks/${this.state.selected.book_id}`)
        .then((response) => {
            response.json().then((data) => {
                this.setState({tileData: data,recLoading: false})
                this.handleShow()
              })
          });

    console.log("submitted")
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
  }
  handleMouseLeave(e){
    e.target.style.opacity = "0.85"
    e.target.style.backgroundColor = "rgba(0,0,0,0.5)"
    e.target.style.border = "0"
}
  render(){
    const classes = useStyles();
    console.log(this.state)
  return (
    
    
  <div className="App" style={{marginTop:'0',height:'100vh',verticalAlign:'middle',backgroundImage:'url(IMG_1846.JPG)',backgroundSize:"cover",width:"100%",paddingLeft:"55vh"}}>
  
    <link rel="stylesheet" 
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossOrigin="anonymous"/>
    <div align="center" style={{marginTop:"2%",position:"absolute",backgroundImage:"url(bookcover.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"70vh",height:"90vh", backgroundSize:"100% 100%", }}>
    <Form>
      <div style={{paddingTop:'30%',paddingBottom:"25%",width:"75%"}}>
        <Form.Group controlId="formBasicBook">
          <Form.Label style={{color:"black",fontFamily:"Luminari",fontSize:"21pt"}}>The Last Book I enjoyed was,</Form.Label>

            <Typeahead
                placeholder="Book Name"
                inputProps={{ placeholder: 'Book Name' }}
                labelKey="title_author"
                isLoading={this.state.isLoading}
                onChange={selected=>{
                    console.log(selected)
                    this.setState({selected: selected[0]})
                }}
                onInputChange={query=>{
                    if(query!="") {
                        this.setState({isLoading: true});
                        fetch(`http://localhost:8080/books/${query}`)
                            .then((response) => {
                                response.json().then((data) => {
                                    this.setState({loading: false})
                                    console.log(data)
                                    if(data.length!=0)
                                    this.setState({options: data})
                                })
                            });
                    }else {this.setState({options:[],loading: false})}
                }}

                options={this.state.options}
            />
          <br />
          <Form.Text style={{color:"black",fontFamily:"Luminari",fontSize:"20pt"}} > Written by </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicAuthor">
          <Form.Control type="text"
                        value={this.state.selected? this.state.selected.name : ""}
                        placeholder="Author Name" />
        </Form.Group>

        <Button
            disabled={this.state.recLoading}
            variant="success" style={{marginTop:"100px",fontSize:"20pt",fontFamily:"Luminari"}}
                onClick={e => this.handleSubmit(e)}>
            {this.state.recLoading?"Fetching recommendations..":"Get my next book!"}</Button>
      </div>
    </Form>
    </div>
    <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="modal-90w"
          style={{width:"100%",height:"40vh",backgroundImage:"url(shelf.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",overflowY:"hidden"}}
        >
          <Modal.Body style={{position:"absolute",maxHeight:"40vh",overflowY:"auto",marginTop:"2%"}}>
            
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
      
          </Modal.Body>
        </Modal>

    <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="modal-next"
          style={{marginTop:"40vh",width:"100%",left:"10px !important"}} >
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

export default AppOne;
