import React from 'react'
import './style.css'
import Team from './../Team'
import Footer from './../Footer'

const Equipe = () => {                               
  return (
    <React.Fragment>
    <section id="projects" class="projects-section">
    <div class="container">
      <div class="row align-items-center no-gutters mb-4 mb-lg-5">
        <div class="col-xl-4 col-lg-5">
          <div class="featured-text text-center text-lg-left">
          <h1 color="#ce0033">Notre Equipe</h1>
            <p class="mb-0">
 <strong>Notre objectif :</strong>
<br/>La formation Simplon est fondée sur les principes de l'économie sociale et solidaire auxquels nous adhérons. 
Nous voulons participer à la création de l’avenir du Comminges en apportant aux acteurs locaux la capacité à intégrer 
les nouvelles technologies dans leur développement et pérenniser leur activité dans le milieu.

<br/><strong>Notre engagement :</strong><br/>
Proposer un foyer local de compétences et de savoir-faire, dynamique et de haut niveau.

<br/><strong>Nos actions :</strong><br/>
Dans une dynamique d’apprentissage nous pouvons d’ores et déjà offrir nos services et notre esprit d'équipe 
à titre gratuit à travers des projets pédagogiques tels que :
<ul>
<li>Création de sites Web ou d'applications mobiles.</li>
<li>Gestion de projet.</li>
<li>Animation d’ateliers.</li>
<li>Initiation au développement.</li>
</ul>
Un projet, une idée, curieux d'en savoir plus, contactez-nous.   
            </p>
          </div>
        </div>
      </div>
      </div>
      </section>

<Team/>
<p class="poem" large>Simplon Tunis est constitué d’une équipe pluridisciplinaire qui travaille collectivement pour atteindre un objectif commun : faire du numérique un levier de démocratisation et d’inclusion sociale.</p>
<Footer />
</React.Fragment>

  )
}
             
export default Equipe; 
