import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Briver',
    desc: 'Pair of android applications to track your vehicle from one place.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Face Mask Detector',
    desc: 'Built with python, this software shows you that you are wearing a mask or not.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Insta Profile Downloader',
    desc: 'This software lets you download anyones profile picture from instagram by just entering their user name.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Trade QTY calculator',
    desc: 'This android app is developed for the stock traders for calculating trade quantity.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Covid Notification',
    desc: 'A python app which notifies you about every new case , every casualty of every state in India at a set interval of time.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'My Portfolio',
    desc: 'I have designed and developed my Portfolio using react. And the website is hosted on Netlify.',
    img: ProjectImg,
  },
];

export default projects;
