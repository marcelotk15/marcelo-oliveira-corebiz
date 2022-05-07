import React from "react";

import EmailIcon from '@/assets/icons/email.svg';
import HeadsetIcon from '@/assets/icons/headset.svg';
import FooterCorebiz from '@/assets/footer-corebiz.svg';
import FooterVtex from '@/assets/footer-vtex.svg';

export default function Footer () {
  function ButtonAction ({icon, text}: {icon: string, text: string}) {
    return (
      <button className="flex items-center gap-5 h-9 bg-white px-4 rounded text-black font-semibold text-xs" style={{ width: '198px' }}>
        <img src={icon} alt={text} />

        {text}
      </button>
    );
  }

  return (
    <footer className="bg-black text-white border-b-4 border-gray-400 md:border-b-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-7 pt-7 pb-2 md:pb-5 text-sm md:justify-between">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg">Localização</h2>

              <div className="bg-white w-8 h-1"></div>
            </div>

            <div className="flex flex-col gap-1">
              <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
              
              <p>Alphavile SP</p>

              <p>brasil@corebiz.ag</p>

              <p>+55 11 3090 1039</p>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center gap-7">
            <ButtonAction
              text="ENTRE EM CONTATO" 
              icon={EmailIcon}
            />

            <ButtonAction
              text="FALE COM O NOSSO CONSULTOR ONLINE"
              icon={HeadsetIcon}
            />
          </section>

          <section className="flex justify-evenly items-center md:gap-7">
            <a
              href="http://corebiz.ag"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FooterCorebiz} alt="Corebiz" />
            </a>

            <a
              href="http://vtex.com"
              target="_blank"
              rel="noreferrer"
            >
            <img src={FooterVtex} alt="Vtex" />
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}
