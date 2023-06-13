import styles from './Export.module.scss';
import Epitech from '@assets/Images/Epitech.png';
import Loustik from '@assets/Images/Loustik.png';
import { HashLink } from 'react-router-hash-link';
import schema from '@assets/Images/schema.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '@actions/cards.actions';
import { useParams } from 'react-router-dom';

const Export = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const cards = useSelector(state => state.cardsReducer.cards);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(cardActions.getAll(id));
    }, []);

    useEffect(() => {
        let tmp = cards.map(card => card.category);

        tmp = [...new Set(tmp)];
        setCategories(tmp);
    }, [cards]);

    return (
        <div className={styles.export}>
            <div className={styles.guardPage}>
                <img src={Epitech} />
                <h1>SENSE</h1>
                <h2>Project Log Document</h2>
                <h3>Kick-Off Sprint 1</h3>
                <h2>Promo 2025</h2>
                <img src={Loustik} />
                <h6>By Loustik Studio</h6>
            </div>
            <div className={styles.summary} id='summary'>
                <div className={styles.header}><h6>Loustik Studio - PLD Sense</h6></div>
                <div>
                    <h2>Résumé</h2>
                    <p>Le project log document est un document qui permet de conserver une trace de l'évolution
                        et de l'avancement de Sense. Il rend compte, pour chaque période de travail (sprint),
                        de ce qui est fait, en cours, et à faire. Pour remplir cette tâche, le document est composé
                        d'une multitude de cartes sous forme de story, chacune contenant:</p>
                    <ul>
                        <li>Son nom</li>
                        <li>Une description succincte de l'objectif de la carte et pour qui est elle globalement prévu</li>
                        <li>Le temps de travail estimé (en j/h)</li>
                        <li>Le membre travaillant dessus</li>
                        <li>Une liste de tâches qui, une fois terminées, permette de considérer la carte comme étant finie.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.datas} id='datas'>
                <div className={styles.header}><h6>Loustik Studio - PLD Sense</h6></div>
                <div>
                    <h2>Cartouche</h2>
                    <p>Description du document</p>
                    <table>
                        <tbody>
                            <tr><th>Titre</th><td>PLD FU Sprint 1</td></tr>
                            <tr><th>Objet</th><td>Suivi de l'avancement du projet</td></tr>
                            <tr><th>Auteur</th><td>Auduberteau Simon, Avetand Eliott, Becarne Anthony, Biendiné Grégoire, Benguedih Rayan, Devloo Alexis, Sycz Éléonore</td></tr>
                            <tr><th>Chef de projet</th><td>Avetand Eliott</td></tr>
                            <tr><th>E-mail</th><td>sense_2025@labeip.epitech.eu</td></tr>
                            <tr><th>Mots-clés</th><td>PLD, avancement, suivi, stories, évolution</td></tr>
                            <tr><th>Promotion</th><td>2025</td></tr>
                            <tr><th>Date de mis à jour</th><td>16/04/2023</td></tr>
                            <tr><th>Version du modèle</th><td>1.1.0</td></tr>
                        </tbody>
                    </table>
                    <p>Tableau des révisions</p>
                    <table>
                        <thead>
                            <tr><th>Date</th><th>Version</th><th>Auteur</th><th>Section(s)</th><th>Commentaire</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>30/03/2023</td><td>1.0.0</td><td>Avetand Eliott</td><td>Toutes</td><td>Première Version</td></tr>
                            <tr><td>16/04/2023</td><td>1.1.0</td><td>Avetand Eliott</td><td>Stories + Schéma fonctionnel + Cartes des livrables</td><td>Réagencement des stories + Refonte du schéma et des cartes de livrables</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.toc} id='toc'>
                <div className={styles.header}><h6>Loustik Studio - PLD Sense</h6></div>
                <div>
                    <h2>Table des matières</h2>
                    <ol>
                        <li><HashLink to='#summary'>Résumé</HashLink></li>
                        <li><HashLink to='#datas'>cartouche</HashLink>
                            <ul>
                                <li>Description du document</li>
                                <li>Tableau des révisions</li>
                            </ul>
                        </li>
                        <li><HashLink to='#toc'>Table des matières</HashLink></li>
                        <li><HashLink to='#schema'>Schéma fonctionnel du jeu</HashLink></li>
                        <li><HashLink to='#delivery'>Cartes des livrables</HashLink></li>
                        <li><HashLink to='#stories'>Stories du sprint 1</HashLink>
                            <ul>
                                <li>Externe
                                    <ul>
                                        <li>GDD</li>
                                        <li>Serveur</li>
                                    </ul>
                                </li>
                                <li>Level Design
                                    <ul>
                                        <li>Blender</li>
                                        <li>UE 5</li>
                                        <li>Biomes</li>
                                        <li>Assets</li>
                                    </ul>
                                </li>
                                <li>Gameplay</li>
                                    <ul>
                                        <li>Quêtes</li>
                                        <li>Personnage</li>
                                        <li>Puzzle</li>
                                        <li>Vision</li>
                                    </ul>
                                <li>Interface
                                    <ul>
                                        <li>HUD</li>
                                        <li>Menu en jeu</li>
                                        <li>Menu principal</li>
                                        <li>Menu settings</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Rapport d'avancement</li>
                    </ol>
                </div>
            </div>
            <div className={styles.schema} id='schema'>
                <div className={styles.header}><h6>Loustik Studio - PLD Sense</h6></div>
                <div>
                    <h2>Schéma fonctionnel du jeu</h2>
                    <img src={schema} />
                </div>
            </div>
            <div className={styles.delivery} id='delivery'>
                <div className={styles.header}><h6>Loustik Studio - PLD Sense</h6></div>
                <div>
                    <h2>Cartes des livrables</h2>
                    <table>
                        <thead>
                            <tr className={styles.title}><th colSpan='4'>LEGENDE</th></tr>
                            <tr className={styles.subtitle}><th>Sprints précédents</th><th colSpan='3'>Sprint actuel</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.oldDone}>Fait</td>
                                <td className={styles.done}>Fait</td>
                                <td className={styles.pending}>En cours</td>
                                <td className={styles.todo}>A faire</td>
                            </tr>
                        </tbody>
                    </table>
                    {
                        categories.map(category => {
                            var subcategories = {};

                            [...new Set(cards.filter(card => card.category == category).map(card => card.cardName))].map(cardName => {
                                subcategories[cardName] = [];
                            });
                            cards.filter(card => card.category == category).forEach(card => {
                                subcategories[card.cardName] = [...subcategories[card.cardName], card];
                            });

                            var maxValues = Math.max(...Object.values(subcategories).map(a => a.length));

                            return <table key={category}>
                                <thead>
                                    <tr className={styles.title}><th colSpan='4'>{category}</th></tr>
                                    <tr className={styles.subtitle}>
                                        {
                                            [...new Set(cards.filter(card => card.category == category).map(card => card.cardName))].map(cardName => {
                                                return <th key={cardName}>{cardName}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Array.from(Array(maxValues).keys()).map((value, index) => {
                                            return <tr key={value}>{
                                                Object.values(subcategories).map((card, indexKey) => {
                                                    if (card[index])
                                                        return <td key={indexKey} className={card[index]?.done ? styles.done : styles.todo}>{card[index]?.title ?? ''}</td>
                                                    else
                                                        return <td key={indexKey}></td>
                                                })
                                            }</tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        })
                    }
                </div>
            </div>
            <div className={styles.stories} id='stories'>
                <div className={styles.header}><h6>Loustik Studio - PLD Sense</h6></div>
                <div>
                    <h2>Stories du sprint</h2>
                    {
                        categories.map(category => {
                            return <>
                                <h3>{category}</h3>
                                {cards.filter(card => card.category === category).map(card => {
                                    return <table key={card.id}>
                                        <thead><tr><th className={card.done ? styles.done : styles.todo} colSpan='4'>{card.cardName} - {card.title}</th></tr></thead>
                                        <tbody>
                                            <tr><th colSpan='2'>En tant que:</th><th colSpan='2'>Je veux:</th></tr>
                                            <tr><td colSpan='2'>{card.as}</td><td colSpan='2'>{card.to}</td></tr>
                                            <tr><th colSpan='4'>Description:</th></tr>
                                            <tr><td colSpan='4'>{card.description}</td></tr>
                                            <tr><th colSpan='4'>Definition of Done:</th></tr>
                                            {
                                                card.tasks.map(task => {
                                                    return <tr key={task.id}><td colSpan='3'>{task.description}</td><td colSpan='1'>{task.done ? 'Finis' : 'A faire'}</td></tr>
                                                })
                                            }
                                            <tr>
                                                <th>Charge estimée:</th><td>{card.length}j/h</td>
                                                <th>Assigné à:</th><td>{card.workers.map(worker => worker.username)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                })}
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Export;
