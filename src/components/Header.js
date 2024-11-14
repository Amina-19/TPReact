import React from 'react';
import styles from '../styles/header.module.css'; // Importación del archivo CSS

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>potatoes</h1>
        <nav>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=dZEOi0_z5Zg&ab_channel=TennisTV">Inicio</a></li>
            <li><a href="https://www.bing.com/images/search?view=detailV2&ccid=zsB1fTOL&id=CB1D077696F989A0A05AB8C673C81380FD19B788&thid=OIP.zsB1fTOLw7vJoWv9FPosHQHaE8&mediaurl=https%3a%2f%2fimages.prismic.io%2ffft-rg-commun-news%2f163a0821-10ea-4449-a832-2514221c70e7_Daniil%2bMedvedev%2b-%2bUS%2bOpen%2b2021%2b-%2bGarrett%2bEllwood%2bUSTA.jpg%3fauto%3dcompress%2cformat&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.cec0757d338bc3bbc9a16bfd14fa2c1d%3frik%3diLcZ%252fYATyHPGuA%26pid%3dImgRaw%26r%3d0&exph=3418&expw=5126&q=medvedev&simid=608055876960997100&FORM=IRPRST&ck=92F9D721587AE391052BCC79666838BA&selectedIndex=1&itb=0&ajaxhist=0&ajaxserp=0">Sobre nosotros</a></li>
            <li><a href="https://www.bing.com/images/search?view=detailV2&ccid=IPS9ownF&id=B5AAE260F6648FD042CB7019D336BD6EBAE8F1A9&thid=OIP.IPS9ownFpmHrFPsT_tRprwHaEo&mediaurl=https%3a%2f%2fwww.telegraph.co.uk%2fcontent%2fdam%2ftennis%2f2023%2f06%2f09%2fTELEMMGLPICT000338747292_16863275944730_trans_NvBQzQNjv4Bqht6PUvYrmG5R3AEqOx-kSBdOrCeWSls3qlguQ9fNdvg.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.20f4bda309c5a661eb14fb13fed469af%3frik%3dqfHoum69NtMZcA%26pid%3dImgRaw%26r%3d0&exph=1299&expw=2078&q=alcaraz&simid=608042399362144891&FORM=IRPRST&ck=7635E7BDEB00D3FE0E7DA235C854E131&selectedIndex=7&itb=0&ajaxhist=0&ajaxserp=0">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
