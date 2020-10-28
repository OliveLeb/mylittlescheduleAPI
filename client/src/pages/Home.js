import React, { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { DiHeroku } from 'react-icons/di';

const Home = () => {

    const {isLogged, loggedUser} = useContext(AuthContext)

    return (
        <>
            {isLogged && <h2>Bonjour {loggedUser.firstname}</h2>}
            <section>
                Planifiez votre journée tranquillement !
                <p>
                    Connectez vous pour retrouver votre TO DO LIST à tout moment !
                </p>
                <div>
                    Créez un compte dès maintenant ou essayez avec :
                    <ul>
                        <li>email : user@user.fr</li>
                        <li>password : user5R</li>
                    </ul>
                </div>
            </section>
            <section>
                <h5>PERN stack</h5> 
                <ul>
                    <li>React <FaReact style={{color:'#61dafb',fontSize:'1.5rem'}}/></li>
                    <li>Express.js</li>
                    <li>PostgreSQL <SiPostgresql style={{color:'#326691',fontSize:'1.5rem'}} /></li>
                    <li>Node.js <FaNodeJs style={{color:'#689f63',fontSize:'1.5rem'}} /></li>                                
                </ul>
                <p>Déployé sur Heroku <DiHeroku style={{color:'#fff',backgroundColor:'#8666ac',borderRadius:'2px',fontSize:'1.5rem'}}/> </p>
            </section>
        </>
    )
}

export default Home;
