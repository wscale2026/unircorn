import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Brain, BriefcaseBusiness, Check, HeartHandshake, Mail, MessageCircle, Sparkles, Target, Youtube, X} from 'lucide-react';
import './styles.css';

const IMG='/images/unicorn-raw/';
const programs=[
  {name:'Brainstorming',eyebrow:'Idées → actions',copy:'Des sessions collectives pour clarifier une idée, confronter les points de vue et faire avancer un projet.',icon:Brain,image:'/images/Brainstorming/WhatsApp Image 2026-11-21 at 11.32.33.webp'},
  {name:'Masterclass',eyebrow:'Apprendre avec méthode',copy:'Des rencontres de formation autour des compétences digitales, du business et de l’entrepreneuriat.',icon:BookOpen,image:'/images/MasterClass/WhatsApp Image 2026-11-21 at 11.31.22.webp'},
  {name:'Business Talk',eyebrow:'Expériences concrètes',copy:'Des conversations directes avec des entrepreneurs et professionnels pour comprendre les réalités du terrain.',icon:BriefcaseBusiness,image:'/images/Talk builder/WhatsApp Image 2026-11-21 at 11.36.32.webp'},
  {name:'LoveLab',eyebrow:'Grandir ensemble',copy:'Un espace d’échange qui développe la confiance, les relations humaines et l’esprit de communauté.',icon:HeartHandshake,image:'asset-066.webp'}
];
const events=[
  {name:'REDCUP',meta:'Communauté · expérience',copy:'Un rendez-vous unirCorn pensé pour connecter, apprendre et créer des souvenirs ensemble.',image:'asset-048.webp'},
  {name:'Descente en orphelinat',meta:'Impact social · Cameroun',copy:'Une action de proximité au service des enfants, portée par les membres de la communauté.',image:'asset-019.webp'},
  {name:'Cinéma Eden',meta:'Culture · rencontres',copy:'Une sortie collective qui mêle découverte, détente et liens entre membres.',image:'asset-028.webp'}
];
const achievements=[
 ['Tchop Zone','asset-041.webp'],['Digital Night Spark','asset-045.webp'],['Africa Digital Mastery','asset-059.webp'],["Semaine de l’entreprise",'asset-032.webp'],["Semaine de l’innovation",'asset-062.webp'],['Miss Prodhafe','asset-046.webp'],['Business Opportunity','asset-024.webp'],['Podcast unirCorn','asset-033.webp'],['Randonnée','asset-038.webp'],['Radio Casmando','asset-034.webp'],['Formation Croix-Rouge','asset-055.webp'],['Marche sportive','asset-021.webp']
];
const galleries=[
 ['Africa Digital Mastery','Africa Digital Mastery',['WhatsApp Image 2026-11-21 at 11.55.45.webp','WhatsApp Image 2026-11-21 at 11.55.45 (1).webp']],
 ['Brainstorming','Brainstorming',['WhatsApp Image 2026-11-21 at 11.32.33.webp','WhatsApp Image 2026-11-21 at 11.32.34.webp','WhatsApp Image 2026-11-21 at 11.32.40.webp']],
 ['Digital Night Spark','Digital Night Spark',['Digital Night Spark.webp']],
 ['En Radio','En Radio',['WhatsApp Image 2026-11-21 at 11.52.17.webp','WhatsApp Image 2026-11-21 at 11.52.18.webp']],
 ['MasterClass','MasterClass',['WhatsApp Image 2026-11-21 at 11.31.22.webp','WhatsApp Image 2026-11-21 at 11.31.23.webp','WhatsApp Image 2026-11-21 at 11.31.23 (1).webp','WhatsApp Image 2026-11-21 at 11.31.24.webp']],
 ['Orphelinat','Orphelinat',['WhatsApp Image 2026-11-21 at 11.48.00.webp','WhatsApp Image 2026-11-21 at 11.48.03.webp']],
 ['Podcast unirCorn','Poadcast Unircorn',['WhatsApp Image 2026-11-21 at 11.50.21.webp','WhatsApp Image 2026-11-21 at 11.50.21 (1).webp','WhatsApp Image 2026-11-21 at 11.50.22.webp']],
 ['REDCUP','RedCup',['WhatsApp Image 2026-11-21 at 11.41.56 (1).webp','WhatsApp Image 2026-11-21 at 11.42.05.webp','WhatsApp Image 2026-11-21 at 11.42.06.webp','WhatsApp Image 2026-11-21 at 11.42.06 (1).webp','WhatsApp Image 2026-11-21 at 11.42.06 (2).webp']],
 ['Talk Builder','Talk builder',['WhatsApp Image 2026-11-21 at 11.36.32.webp','WhatsApp Image 2026-11-21 at 11.36.32 (1).webp','WhatsApp Image 2026-11-21 at 11.36.32 (2).webp']],
 ["Semaine de l’entreprise",'unicorn-raw',['asset-032.webp']],
 ["Semaine de l’innovation",'unicorn-raw',['asset-062.webp']],
 ['Miss Prodhafe','unicorn-raw',['asset-046.webp']],
 ['Business Opportunity','unicorn-raw',['asset-024.webp']],
 ['Randonnée','unicorn-raw',['asset-038.webp']],
 ['Formation Croix-Rouge','unicorn-raw',['asset-055.webp']],
 ['Marche sportive','unicorn-raw',['asset-021.webp']],
];
const testimonials=[
 {name:'France Armel SOFFO DEMEKON',role:'Graphiste',image:'asset-094.webp',quote:'J’ai acquis des compétences solides en achat en Chine et en marketing digital. Les projets pratiques m’ont permis de progresser rapidement et de gagner en confiance.'},
 {name:'Carelle KAM',role:'Étudiante',image:'asset-099.webp',quote:'J’ai amélioré mes compétences en marketing, acquis des notions de graphisme et rencontré des personnes formidables qui ont élargi mon réseau.'},
 {name:'Alfred Michel TATPA MBATCHANKUI',role:'Marketiste',image:'asset-104.webp',quote:'unirCorn est bien plus qu’une communauté : c’est une famille dans laquelle j’ai pu m’intégrer et apprendre énormément.'},
 {name:'Fanon NGOGA',role:'Étudiant & infographiste',image:'asset-110.webp',quote:'Dès les débuts d’unirCorn, j’ai acquis des compétences solides qui m’ont permis de gagner de l’argent. C’est une famille et un tremplin vers l’évolution.'},
 {name:'Samuel MANDENG',role:'Consultant en affaires',image:'asset-115.webp',quote:'Je recommande vivement unirCorn à la jeunesse. La communauté agit concrètement pour celles et ceux qui veulent acquérir de nouvelles compétences.'},
 {name:'Ridel KENFACK',role:'Étudiant & designer',image:'asset-120.webp',quote:'Grâce aux formations de qualité, j’ai acquis de nouvelles compétences et une nouvelle source de revenus avec l’infographie.'},
 {name:'Madeleine MBEDE',role:'Étudiante & e-commerçante',image:'asset-126.webp',quote:'Avec ses formations diversifiées et son accompagnement, unirCorn m’a permis de fructifier mon temps et de multiplier mes revenus.'},
 {name:'Darlain DE SITCHEU',role:'Web entrepreneur & PSC',image:'asset-131.webp',quote:'Grâce à unirCorn, j’ai découvert une communauté digitale de qualité, des opportunités concrètes et j’ai lancé PSC SHOP.'},
 {name:'Merline KATOUO',role:'Infographiste',image:'asset-136.webp',quote:'J’ai approfondi mes connaissances et développé de nouvelles compétences avec des formateurs passionnés et des contenus de qualité.'},
 {name:'Dianista TSAFACK',role:'Spécialiste marketing digital & étudiante',image:'asset-142.webp',quote:'Les formations interactives m’ont permis d’approfondir mes connaissances et de progresser dans mon domaine.'},
 {name:'Austin MAKOUA',role:'Artiste dessinateur & étudiant',image:'asset-147.webp',quote:'Avec unirCorn, j’ai élargi mon audience et rendu la tarification de mes œuvres plus professionnelle.'},
 {name:'Claire Irène EBONKENG NGOUPAH',role:'Community manager & monteuse vidéo',image:'asset-152.webp',quote:'Les ressources et les rencontres faites dans la communauté m’ont permis d’exceller dans mon domaine et de continuer à évoluer.'},
 {name:'Florentin GBEDJI',role:'Étudiant',image:'asset-158.webp',quote:'J’ai acquis des compétences en marketing et automatisation. Le soutien de la communauté m’aide dans mes études et m’offre des opportunités concrètes.'},
 {name:'Kesine KENFACK',role:'Assistante administrative & communicatrice',image:'asset-163.webp',quote:'J’ai trouvé une famille, de belles rencontres et des projets qui ont renforcé mes compétences, mon organisation et ma confiance.'},
 {name:'Honoré NGUETSA TEUBENG',role:'Maintenancier & formateur',image:'asset-168.webp',quote:'Les compétences acquises dans la communauté me permettent aujourd’hui de gagner des marchés que je pensais auparavant impossibles.'}
];

function Brand({compact=false,footer=false}){return <span className={'brand '+(compact?'compact':'')}><img src={`/images/unicorn-raw/logo2.webp`} alt="Logo officiel unirCorn"/></span>}
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
 const slides=[...events,...galleries.filter(([title])=>eventGalleryTitles.has(title)).flatMap(([name,folder,images])=>images.map(file=>({name,meta:'Vie de la communauté',copy:`Retour en images sur ${name}.`,image:folder==='unicorn-raw'?IMG+file:`/images/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`})))];
 const go=step=>setActive(current=>(current+step+slides.length)%slides.length);
 useEffect(()=>{if(paused)return;const id=setInterval(()=>go(1),6000);return()=>clearInterval(id)},[paused]);
 const event=slides[active];
 return <div className="event-carousel" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)} aria-roledescription="carrousel" aria-label="Événements unirCorn">
  <article className="event-slide" key={`${event.name}-${active}`}><div className="event-slide-media"><img src={event.image.startsWith('/')?event.image:IMG+event.image} alt={event.name}/><span>{String(active+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span></div><div className="event-slide-copy"><small>{event.meta}</small><h3>{event.name}</h3><p>{event.copy}</p><div className="event-progress">{slides.map((item,index)=><button key={`${item.name}-${index}`} className={index===active?'active':''} onClick={()=>setActive(index)} aria-label={`Afficher ${item.name}`} aria-current={index===active?'true':undefined}/>)}</div></div></article>
  <div className="event-arrows"><button onClick={()=>go(-1)} aria-label="Événement précédent"><ArrowLeft/></button><button onClick={()=>go(1)} aria-label="Événement suivant"><ArrowRight/></button></div>
 </div>
}

const eventGalleryTitles=new Set(['REDCUP','Digital Night Spark',"Semaine de l’entreprise","Semaine de l’innovation",'Business Opportunity','Randonnée','Marche sportive']);
function AchievementGallery({eventOnly=false}){
 const items=galleries.filter(([title])=>eventGalleryTitles.has(title)===eventOnly);
 const [selected,setSelected]=useState(null); const [photo,setPhoto]=useState(0);
 const close=()=>setSelected(null);
 const move=step=>setPhoto(i=>(i+step+items[selected][2].length)%items[selected][2].length);
 useEffect(()=>{if(selected===null)return;const key=e=>{if(e.key==='Escape')close();if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)};document.addEventListener('keydown',key);document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',key);document.body.style.overflow=''}},[selected]);
 return <>
  <div className="achievement-grid gallery-grid">{items.map(([title,folder,images],i)=><button className="gallery-cover" key={title} onClick={()=>{setSelected(i);setPhoto(0)}} aria-label={`Ouvrir ${title}, ${images.length} photos`}><img src={`${folder==='unicorn-raw'?IMG:`/images/${encodeURIComponent(folder)}/`}${encodeURIComponent(images[0])}`} alt={`Galerie ${title}`}/><span className="gallery-count">{images.length} {images.length===1?'photo':'photos'}</span><b>{title}</b></button>)}</div>
  {selected!==null&&<div className="gallery-viewer" role="dialog" aria-modal="true" aria-label={`Galerie ${items[selected][0]}`} onClick={close}><div className="gallery-viewer-panel" onClick={e=>e.stopPropagation()}><header><div><h3>{items[selected][0]}</h3><span>{photo+1} / {items[selected][2].length}</span></div><button onClick={close} aria-label="Fermer"><X/></button></header><div className="gallery-viewer-image"><img src={items[selected][1]==='unicorn-raw'?IMG+items[selected][2][photo]:`/images/${encodeURIComponent(items[selected][1])}/${encodeURIComponent(items[selected][2][photo])}`} alt={`${items[selected][0]} — photo ${photo+1}`}/>{items[selected][2].length>1&&<><button className="gallery-prev" onClick={()=>move(-1)} aria-label="Photo précédente"><ArrowLeft/></button><button className="gallery-next" onClick={()=>move(1)} aria-label="Photo suivante"><ArrowRight/></button></>}</div></div></div>}
 </>
}

function MemberVoicesGallery(){
 const photos=['WhatsApp Image 2026-11-21 at 11.30.24.webp','WhatsApp Image 2026-11-21 at 11.30.24 (1).webp','WhatsApp Image 2026-11-21 at 11.30.24 (2).webp'];
 return <div className="member-voices"><h3>Moments de témoignage</h3><div>{photos.map((photo,index)=><figure key={photo}><img src={`/images/Temoignages/${encodeURIComponent(photo)}`} alt={`Photo de témoignage unirCorn ${index+1}`}/></figure>)}</div></div>
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
    <div className="about-gallery"><figure className="about-image about-team"><img src={IMG+'asset-088.webp'} alt="Mc Donald Kouakam, fondateur d’unirCorn"/><figcaption>Mc Donald Kouakam<br/><small>Fondateur d’unirCorn</small></figcaption></figure><figure className="about-image about-detail"><img src={IMG+'asset-008.webp'} alt="Membres de l’équipe unirCorn en tenue de la communauté"/><figcaption>L’équipe unirCorn</figcaption></figure><article className="about-vision-card"><Sparkles/><span>Notre vision</span><h3>Créer un écosystème panafricain de formation, d’insertion professionnelle et d’autonomisation.</h3></article></div>
    <div className="mission-grid about-missions"><article><Target/><span>Notre mission</span><h3>Former, insérer professionnellement et autonomiser les jeunes de 17 à 35 ans.</h3></article></div>
   </div></section>

   <section className="programs section" id="programmes"><div className="wrap reveal"><SectionHead kicker="Nos programmes" title="Quatre formats pour apprendre autrement." copy="Des rendez-vous collectifs construits autour des compétences, de l’expérience et du passage à l’action."/>
    <div className="program-grid">{programs.map(({name,eyebrow,copy,icon:Icon,image},i)=><article className="program-card" key={name}><div className="program-number">0{i+1}</div><div className="program-media"><img src={image.startsWith('/')?image:IMG+image} alt={`Session ${name} avec les membres unirCorn`}/><span><Icon/></span></div><div className="program-text"><small>{eyebrow}</small><h3>{name}</h3><p>{copy}</p></div></article>)}</div>
   </div></section>

   <section className="events section" id="evenements"><div className="wrap reveal"><SectionHead kicker="Nos événements" title="Se rencontrer change la trajectoire." copy="Nos événements donnent un visage au réseau : on échange, on découvre et on agit ensemble." light/>
    <EventCarousel/>
    </div>
   </section>

   <section className="impact section" id="impact"><div className="wrap reveal"><SectionHead kicker="Réalisations" title="Des idées vécues sur le terrain." copy="Formations, partenariats, actions sociales et moments de communauté : chaque projet construit l’expérience unirCorn."/>
    <AchievementGallery/>
   </div></section>

   <section className="stories section" id="temoignages"><div className="wrap reveal"><SectionHead kicker="Ils avancent avec unirCorn" title="Des compétences qui deviennent des possibilités." copy="Découvrez les parcours et les expériences de celles et ceux qui font vivre la communauté."/><MemberVoicesGallery/><TestimonialCarousel/></div></section>

    <section className="join section" id="adhesion"><div className="wrap reveal"><div className="join-panel"><div><SectionHead kicker="Devenir membre" title="Votre parcours commence ici." copy="Remplissez le formulaire, réglez les frais d’inscription, puis accédez à l’espace privé et aux activités de la communauté." light/><ol><li><span>01</span>Remplir le formulaire d’adhésion</li><li><span>02</span>Régler les frais d’inscription</li><li><span>03</span>Rejoindre l’espace privé unirCorn</li></ol></div><aside><span>Adhésion à vie</span><strong>10 500 <small>FCFA</small></strong>{/* <p>Cotisation mensuelle annoncée : 2 000 FCFA.</p> */}<ul><li><Check/>Manuel et carte de membre</li><li><Check/>Accès aux formations disponibles</li><li><Check/>Consultation de projet</li><li><Check/>Espace privé de la communauté</li></ul><a className="button button-red" href="https://forms.gle/axjat3brs3cb1Tpi8" target="_blank" rel="noreferrer">Je rejoins unirCorn
<ArrowUpRight/></a><small className="payment-note">Les modalités de paiement sont communiquées après la demande.</small></aside></div></div></section>

   <section className="contact section" id="contact"><div className="wrap reveal"><SectionHead kicker="Parlons-nous" title="Une question avant de rejoindre ?" copy="L’équipe unirCorn répond par WhatsApp ou par e-mail."/><div className="contact-row"><a href="https://wa.me/237691879956" target="_blank" rel="noreferrer"><MessageCircle/><span><small>Téléphone & WhatsApp</small><b>+237 691 879 956</b></span><ArrowUpRight/></a><a href="mailto:unirCorn.Officiel@gmail.com"><Mail/><span><small>Adresse e-mail</small><b>unirCorn.Officiel@gmail.com</b></span><ArrowUpRight/></a></div><div className="social-row"><a href="https://www.facebook.com/share/18n4BnADaV/" target="_blank" rel="noreferrer">Facebook <ArrowUpRight/></a><a href="https://youtu.be/cpCpj00PypA?si=mifcp3aeYjy52mVY" target="_blank" rel="noreferrer"><Youtube/> Voir unirCorn sur YouTube <ArrowUpRight/></a></div></div></section>
  </main>
  <footer className="footer"><div className="wrap"><div className="footer-main"><div><Brand footer/><p>Former. Connecter. Autonomiser.</p></div><nav><a href="#about">À propos</a><a href="#programmes">Programmes</a><a href="#evenements">Événements</a><a href="#adhesion">Adhésion</a></nav><div className="footer-contact"><a href="tel:+237691879956">+237 691 879 956</a><a href="mailto:unirCorn.Officiel@gmail.com">unirCorn.Officiel@gmail.com</a></div></div><div className="footer-bottom"><span>© 2026 unirCorn. Tous droits réservés.</span><span>Cameroun · Communauté panafricaine</span></div></div></footer>
  <a className="whatsapp" href="https://wa.me/237691879956" target="_blank" rel="noreferrer" aria-label="Contacter unirCorn sur WhatsApp"><MessageCircle/></a>
 </>
}
createRoot(document.getElementById('root')).render(<App/>);
