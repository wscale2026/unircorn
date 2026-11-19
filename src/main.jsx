import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Brain, BriefcaseBusiness, Check, HeartHandshake, Mail, MessageCircle, Sparkles, Target, Youtube} from 'lucide-react';
import './styles.css';

const IMG='/images/unicorn-raw/';
const programs=[
  {name:'Brainstorming',eyebrow:'Idées → actions',copy:'Des sessions collectives pour clarifier une idée, confronter les points de vue et faire avancer un projet.',icon:Brain,image:'asset-067.jpg'},
  {name:'Masterclass',eyebrow:'Apprendre avec méthode',copy:'Des rencontres de formation autour des compétences digitales, du business et de l’entrepreneuriat.',icon:BookOpen,image:'asset-031.jpg'},
  {name:'Business Talk',eyebrow:'Expériences concrètes',copy:'Des conversations directes avec des entrepreneurs et professionnels pour comprendre les réalités du terrain.',icon:BriefcaseBusiness,image:'asset-023.jpg'},
  {name:'LoveLab',eyebrow:'Grandir ensemble',copy:'Un espace d’échange qui développe la confiance, les relations humaines et l’esprit de communauté.',icon:HeartHandshake,image:'asset-066.jpg'}
];
const events=[
  {name:'REDCUP',meta:'Communauté · expérience',copy:'Un rendez-vous unirCorn pensé pour connecter, apprendre et créer des souvenirs ensemble.',image:'asset-048.jpg'},
  {name:'Descente en orphelinat',meta:'Impact social · Cameroun',copy:'Une action de proximité au service des enfants, portée par les membres de la communauté.',image:'asset-019.jpg'},
  {name:'Cinéma Eden',meta:'Culture · rencontres',copy:'Une sortie collective qui mêle découverte, détente et liens entre membres.',image:'asset-028.jpg'}
];
const achievements=[
 ['Tchop Zone','asset-041.jpg'],['Digital Night Spark','asset-045.jpg'],['Africa Digital Mastery','asset-059.jpg'],["Semaine de l’entreprise",'asset-032.jpg'],["Semaine de l’innovation",'asset-062.jpg'],['Miss Prodhafe','asset-046.jpg'],['Business Opportunity','asset-024.jpg'],['Podcast unirCorn','asset-033.jpg'],['Randonnée','asset-038.jpg'],['Radio Casmando','asset-034.jpg'],['Formation Croix-Rouge','asset-055.jpg'],['Marche sportive','asset-021.jpg']
];
const testimonials=[
 {name:'France Armel SOFFO DEMEKON',role:'Graphiste',image:'asset-094.jpg',quote:'J’ai acquis des compétences solides en achat en Chine et en marketing digital. Les projets pratiques m’ont permis de progresser rapidement et de gagner en confiance.'},
 {name:'Carelle KAM',role:'Étudiante',image:'asset-099.jpg',quote:'J’ai amélioré mes compétences en marketing, acquis des notions de graphisme et rencontré des personnes formidables qui ont élargi mon réseau.'},
 {name:'Alfred Michel TATPA MBATCHANKUI',role:'Marketiste',image:'asset-104.jpg',quote:'unirCorn est bien plus qu’une communauté : c’est une famille dans laquelle j’ai pu m’intégrer et apprendre énormément.'},
 {name:'Fanon NGOGA',role:'Étudiant & infographiste',image:'asset-110.jpg',quote:'Dès les débuts d’unirCorn, j’ai acquis des compétences solides qui m’ont permis de gagner de l’argent. C’est une famille et un tremplin vers l’évolution.'},
 {name:'Samuel MANDENG',role:'Consultant en affaires',image:'asset-115.jpg',quote:'Je recommande vivement unirCorn à la jeunesse. La communauté agit concrètement pour celles et ceux qui veulent acquérir de nouvelles compétences.'},
 {name:'Ridel KENFACK',role:'Étudiant & designer',image:'asset-120.jpg',quote:'Grâce aux formations de qualité, j’ai acquis de nouvelles compétences et une nouvelle source de revenus avec l’infographie.'},
 {name:'Madeleine MBEDE',role:'Étudiante & e-commerçante',image:'asset-126.jpg',quote:'Avec ses formations diversifiées et son accompagnement, unirCorn m’a permis de fructifier mon temps et de multiplier mes revenus.'},
 {name:'Darlain DE SITCHEU',role:'Web entrepreneur & PSC',image:'asset-131.jpg',quote:'Grâce à unirCorn, j’ai découvert une communauté digitale de qualité, des opportunités concrètes et j’ai lancé PSC SHOP.'},
 {name:'Merline KATOUO',role:'Infographiste',image:'asset-136.jpg',quote:'J’ai approfondi mes connaissances et développé de nouvelles compétences avec des formateurs passionnés et des contenus de qualité.'},
 {name:'Dianista TSAFACK',role:'Spécialiste marketing digital & étudiante',image:'asset-142.jpg',quote:'Les formations interactives m’ont permis d’approfondir mes connaissances et de progresser dans mon domaine.'},
 {name:'Austin MAKOUA',role:'Artiste dessinateur & étudiant',image:'asset-147.jpg',quote:'Avec unirCorn, j’ai élargi mon audience et rendu la tarification de mes œuvres plus professionnelle.'},
 {name:'Claire Irène EBONKENG NGOUPAH',role:'Community manager & monteuse vidéo',image:'asset-152.jpg',quote:'Les ressources et les rencontres faites dans la communauté m’ont permis d’exceller dans mon domaine et de continuer à évoluer.'},
 {name:'Florentin GBEDJI',role:'Étudiant',image:'asset-158.jpg',quote:'J’ai acquis des compétences en marketing et automatisation. Le soutien de la communauté m’aide dans mes études et m’offre des opportunités concrètes.'},
 {name:'Kesine KENFACK',role:'Assistante administrative & communicatrice',image:'asset-163.jpg',quote:'J’ai trouvé une famille, de belles rencontres et des projets qui ont renforcé mes compétences, mon organisation et ma confiance.'},
 {name:'Honoré NGUETSA TEUBENG',role:'Maintenancier & formateur',image:'asset-168.jpg',quote:'Les compétences acquises dans la communauté me permettent aujourd’hui de gagner des marchés que je pensais auparavant impossibles.'}
];

function Brand({compact=false,footer=false}){return <span className={'brand '+(compact?'compact':'')}><img src={`/images/unicorn-raw/${footer?'logo21.jpg':'logo2.png'}`} alt="Logo officiel unirCorn"/></span>}
function SectionHead({kicker,title,copy,light=false}){return <header className={'section-head '+(light?'light':'')}><h2 className="section-primary">{kicker}</h2><p className="section-subtitle">{title}</p>{copy&&<p className="section-description">{copy}</p>}</header>}

function TestimonialCarousel(){
 const [active,setActive]=useState(0); const [paused,setPaused]=useState(false); const timer=useRef(null);
 const go=step=>setActive(current=>(current+step+testimonials.length)%testimonials.length);
 useEffect(()=>{if(paused)return;timer.current=setInterval(()=>go(1),5000);return()=>clearInterval(timer.current)},[paused]);
 const visible=[0,1,2].map(offset=>testimonials[(active+offset)%testimonials.length]);
 return <div className="testimonial-carousel" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)} aria-roledescription="carrousel" aria-label="Témoignages des membres unirCorn">
  <div className="testimonial-cards" key={active}>{visible.map((item,index)=><article className={'testimonial-card '+(index===1?'accent':'')} key={item.name+item.image} aria-hidden={index>0?undefined:undefined}><img src={IMG+item.image} alt={`Portrait de ${item.name}`}/><div className="testimonial-person"><h3>{item.name}</h3><span>{item.role}</span></div><p>“{item.quote}”</p><small>Je suis {item.role.toLowerCase().includes('étudiante')||item.name==='Carelle KAM'||item.name==='Madeleine MBEDE'||item.name==='Merline KATOUO'||item.name==='Dianista TSAFACK'||item.name==='Claire Irène EBONKENG NGOUPAH'||item.name==='Kesine KENFACK'?'fière':'fier'} d’être membre unirCorn.</small></article>)}</div>
  <div className="carousel-controls"><button onClick={()=>go(-1)} aria-label="Témoignage précédent"><ArrowLeft/></button><div className="carousel-dots" aria-label={`Témoignage ${active+1} sur ${testimonials.length}`}>{testimonials.map((item,index)=><button key={item.image} className={index===active?'active':''} onClick={()=>setActive(index)} aria-label={`Afficher le témoignage ${index+1}`} aria-current={index===active?'true':undefined}/>)}</div><button onClick={()=>go(1)} aria-label="Témoignage suivant"><ArrowRight/></button></div>
 </div>
}

function EventCarousel(){
 const [active,setActive]=useState(0); const [paused,setPaused]=useState(false);
 const go=step=>setActive(current=>(current+step+events.length)%events.length);
 useEffect(()=>{if(paused)return;const id=setInterval(()=>go(1),6000);return()=>clearInterval(id)},[paused]);
 const event=events[active];
 return <div className="event-carousel" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)} aria-roledescription="carrousel" aria-label="Événements unirCorn">
  <article className="event-slide" key={event.name}><div className="event-slide-media"><img src={IMG+event.image} alt={event.name}/><span>{String(active+1).padStart(2,'0')} / {String(events.length).padStart(2,'0')}</span></div><div className="event-slide-copy"><small>{event.meta}</small><h3>{event.name}</h3><p>{event.copy}</p><div className="event-progress">{events.map((item,index)=><button key={item.name} className={index===active?'active':''} onClick={()=>setActive(index)} aria-label={`Afficher ${item.name}`} aria-current={index===active?'true':undefined}/>)}</div></div></article>
  <div className="event-arrows"><button onClick={()=>go(-1)} aria-label="Événement précédent"><ArrowLeft/></button><button onClick={()=>go(1)} aria-label="Événement suivant"><ArrowRight/></button></div>
 </div>
}

function App(){
 useEffect(()=>{const io=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('is-visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));return()=>io.disconnect()},[]);
 return <>
  <a className="skip-link" href="#content">Aller au contenu</a>
  <nav className="nav"><a href="#top"><Brand compact/></a><div className="nav-links"><a href="#about">À propos</a><a href="#programmes">Programmes</a><a href="#evenements">Événements</a><a href="#impact">Impact</a></div><a className="nav-cta" href="https://forms.gle/axjat3brs3cb1Tpi8" target="_blank" rel="noreferrer">Rejoindre <ArrowUpRight/></a></nav>
  <main id="content">
   <section className="hero" id="top"><div className="hero-photo"/><div className="hero-noise"/><div className="hero-inner">
    <div className="hero-copy">
      <div className="rise delay-2"><Brand/></div>
      <h1 className="rise delay-1">Communauté <span>UnirCorn</span></h1><p className="rise delay-2">unirCorn forme, connecte et accompagne les jeunes vers l’insertion professionnelle et l’autonomie.</p><div className="hero-actions rise delay-3"><a className="button button-red" href="https://forms.gle/axjat3brs3cb1Tpi8" target="_blank" rel="noreferrer">Je rejoins unirCorn <ArrowUpRight/></a><a className="text-link" href="#programmes">Découvrir les programmes <ArrowDown/></a></div>
    </div>
   </div><div className="hero-stats"><div><strong>1 500+</strong><span>membres annoncés</span></div><div><strong>10+</strong><span>pays représentés</span></div><div><strong>100K</strong><span>vies visées en 7 ans</span></div></div></section>

   <section className="about section" id="about"><div className="wrap reveal"><SectionHead kicker="Qui sommes-nous ?" title="Un mouvement pour transformer le potentiel en autonomie." copy="unirCorn crée un cadre où les jeunes apprennent des compétences utiles, rencontrent les bonnes personnes et passent progressivement à l’action."/>
    <div className="about-gallery"><figure className="about-image about-team"><img src={IMG+'asset-088.jpg'} alt="Mc Donald Kouakam, fondateur d’unirCorn"/><figcaption>Mc Donald Kouakam<br/><small>Fondateur d’unirCorn</small></figcaption></figure><figure className="about-image about-detail"><img src={IMG+'asset-008.jpg'} alt="Membres de l’équipe unirCorn en tenue de la communauté"/><figcaption>L’équipe unirCorn</figcaption></figure><article className="about-vision-card"><Sparkles/><span>Notre vision</span><h3>Créer un écosystème panafricain de formation, d’insertion professionnelle et d’autonomisation.</h3></article></div>
    <div className="mission-grid about-missions"><article><Target/><span>Notre mission</span><h3>Former, insérer professionnellement et autonomiser les jeunes de 17 à 35 ans.</h3></article></div>
   </div></section>

   <section className="programs section" id="programmes"><div className="wrap reveal"><SectionHead kicker="Nos programmes" title="Quatre formats pour apprendre autrement." copy="Des rendez-vous collectifs construits autour des compétences, de l’expérience et du passage à l’action."/>
    <div className="program-grid">{programs.map(({name,eyebrow,copy,icon:Icon,image},i)=><article className="program-card" key={name}><div className="program-number">0{i+1}</div><div className="program-media"><img src={IMG+image} alt={`Session ${name} avec les membres unirCorn`}/><span><Icon/></span></div><div className="program-text"><small>{eyebrow}</small><h3>{name}</h3><p>{copy}</p></div></article>)}</div>
   </div></section>

   <section className="events section" id="evenements"><div className="wrap reveal"><SectionHead kicker="Nos événements" title="Se rencontrer change la trajectoire." copy="Nos événements donnent un visage au réseau : on échange, on découvre et on agit ensemble." light/>
    <EventCarousel/>
   </div></section>

   <section className="impact section" id="impact"><div className="wrap reveal"><SectionHead kicker="Réalisations" title="Des idées vécues sur le terrain." copy="Formations, partenariats, actions sociales et moments de communauté : chaque projet construit l’expérience unirCorn."/>
    <div className="achievement-grid">{achievements.map(([name,image],i)=><figure className={`achievement a-${i+1}`} key={name}><img src={IMG+image} alt={name}/><figcaption><span>{String(i+1).padStart(2,'0')}</span><b>{name}</b></figcaption></figure>)}</div>
   </div></section>

   <section className="stories section" id="temoignages"><div className="wrap reveal"><SectionHead kicker="Ils avancent avec unirCorn" title="Des compétences qui deviennent des possibilités." copy="Découvrez les parcours et les expériences de celles et ceux qui font vivre la communauté."/><TestimonialCarousel/></div></section>

   <section className="join section" id="adhesion"><div className="wrap reveal"><div className="join-panel"><div><SectionHead kicker="Devenir membre" title="Votre parcours commence ici." copy="Remplissez le formulaire, réglez les frais d’inscription, puis accédez à l’espace privé et aux activités de la communauté." light/><ol><li><span>01</span>Remplir le formulaire d’adhésion</li><li><span>02</span>Régler les frais d’inscription</li><li><span>03</span>Rejoindre l’espace privé unirCorn</li></ol></div><aside><span>Adhésion à vie</span><strong>10 000 <small>FCFA</small></strong><p>Cotisation mensuelle annoncée : 2 000 FCFA.</p><ul><li><Check/>Manuel et carte de membre</li><li><Check/>Accès aux formations disponibles</li><li><Check/>Consultation de projet</li><li><Check/>Espace privé de la communauté</li></ul><a className="button button-red" href="https://forms.gle/axjat3brs3cb1Tpi8" target="_blank" rel="noreferrer">Je rejoins unirCorn
<ArrowUpRight/></a><small className="payment-note">Les modalités de paiement sont communiquées après la demande.</small></aside></div></div></section>

   <section className="contact section" id="contact"><div className="wrap reveal"><SectionHead kicker="Parlons-nous" title="Une question avant de rejoindre ?" copy="L’équipe unirCorn répond par WhatsApp ou par e-mail."/><div className="contact-row"><a href="https://wa.me/237691879956" target="_blank" rel="noreferrer"><MessageCircle/><span><small>Téléphone & WhatsApp</small><b>+237 691 879 956</b></span><ArrowUpRight/></a><a href="mailto:unirCorn.Officiel@gmail.com"><Mail/><span><small>Adresse e-mail</small><b>unirCorn.Officiel@gmail.com</b></span><ArrowUpRight/></a></div><div className="social-row"><a href="https://www.facebook.com/share/18n4BnADaV/" target="_blank" rel="noreferrer">Facebook <ArrowUpRight/></a><a href="https://youtu.be/cpCpj00PypA?si=mifcp3aeYjy52mVY" target="_blank" rel="noreferrer"><Youtube/> Voir unirCorn sur YouTube <ArrowUpRight/></a></div></div></section>
  </main>
  <footer className="footer"><div className="wrap"><div className="footer-main"><div><Brand footer/><p>Former. Connecter. Autonomiser.</p></div><nav><a href="#about">À propos</a><a href="#programmes">Programmes</a><a href="#evenements">Événements</a><a href="#adhesion">Adhésion</a></nav><div className="footer-contact"><a href="tel:+237691879956">+237 691 879 956</a><a href="mailto:unirCorn.Officiel@gmail.com">unirCorn.Officiel@gmail.com</a></div></div><div className="footer-bottom"><span>© 2026 unirCorn. Tous droits réservés.</span><span>Cameroun · Communauté panafricaine</span></div></div></footer>
  <a className="whatsapp" href="https://wa.me/237691879956" target="_blank" rel="noreferrer" aria-label="Contacter unirCorn sur WhatsApp"><MessageCircle/></a>
 </>
}
createRoot(document.getElementById('root')).render(<App/>);
