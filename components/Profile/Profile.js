import Head from 'next/head'
import styles from './profile.module.css'
import ProfileBio from '../ProfileBio/ProfileBio';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePanel from '../ProfilePanel/ProfilePanel';

export default function Profile(props) {

  return (
    <div className={styles.container}>
      <div className={styles.profileColumn}>
      <Head>
        <title>{props.data.name}</title>
        <link rel="icon" href={props.data.image} />
      </Head>

      <ProfileHeader 
        dat={props.data.header}
        name={props.data.name}
      />

      <ProfileBio bio={props.data.bio} />

      <LinkPanelColumn panels={props.data.panels} />
      </div>
    </div>
  )
}

function LinkPanelColumn(props) {
  const panels = props.panels

  return (
    <div className={styles.linkPanelColumn}>
      {panels.map(panel => <ProfilePanel panel={panel}/>)}
    </div>
  )
}

function getImageBrightness(imageSrc,callback) {
  var img = document.createElement("img");
  img.src = imageSrc;
  img.style.display = "none";
  document.body.appendChild(img);

  var colorSum = 0;

  img.onload = function() {
      // create canvas
      var canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(this,0,0);

      var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
      var data = imageData.data;
      var r,g,b,avg;

        for(var x = 0, len = data.length; x < len; x+=4) {
          r = data[x];
          g = data[x+1];
          b = data[x+2];

          avg = Math.floor((r+g+b)/3);
          colorSum += avg;
      }

      var brightness = Math.floor(colorSum / (this.width*this.height));
      callback(brightness);
  }
}