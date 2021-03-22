import React, {useState} from 'react';
const {RotationControl, ZoomControl, ScaleControl, Feature, Layer, Marker} = CedarMaps.getReactMapboxGl()
import CedarMaps from '@cedarstudios/react-cedarmaps'
import sidebarList from "../../json.json";
import contactImage from "../../assets/images/avatar3.jpg";
import markerIcon from "../../assets/images/marker-icon.png";
const Home = () => {
    let [sidebarId, setSidebarId] = useState(0);


    let my_status = ["Venter på tilbud",
        "Tilbud opprettet", "Tilbud akseptert", "Venter på endelig tilbud",
        "Endelig tilbud opprettet", "Venter på overtagelse", "Avsluttet"];

    let homes = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg",];
 
    function getIndex(value) {
        return my_status.indexOf(value)
    }

    let item = getObjectByIndex(sidebarId)

    function getObjectByIndex(index) {
        return sidebarList[index]
    }


    const handleClick = (index) => {
        setSidebarId(index)
    }
    return (

        <>

            <div className="sidebar">
                <ul>
                    {sidebarList.map((item, index) => (
                        <li key={index} id={index} className={sidebarId === index ? "active" : ""}>
                            <div onClick={() => handleClick(index)}>
                                <div className="item">
                                    <div className="img-box">
                                        <img src={contactImage} alt="contactImage"/>
                                    </div>
                                    <div className="info">
                                        <span className="f-name">{item.navn}</span>
                                        <span className="status">{item.status}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main">

                {
                    <div>


                        <div className="arrow-steps-box">

                            <div className="arrow-steps  ">
                                <div className={getIndex(item.status) < 0 ? "step " : "step current"}><span>Waiting for offer</span>
                                </div>
                                <div className={getIndex(item.status) < 1 ? "step " : "step current"}><span>Offer created</span>
                                </div>
                                <div className={getIndex(item.status) < 2 ? "step " : "step current"}><span>Offer accepted</span>
                                </div>
                                <div className={getIndex(item.status) < 3 ? "step " : "step current"}><span>Waiting for final offer</span>
                                </div>
                                <div className={getIndex(item.status) < 4 ? "step " : "step current"}><span>Final offer created</span>
                                </div>
                                <div className={getIndex(item.status) < 5 ? "step " : "step current"}><span>Waiting for takeover</span>
                                </div>
                                <div className={getIndex(item.status) < 6 ? "step " : "step current"}>
                                    <span> Completed</span></div>
                            </div>


                        </div>
                        <div className="informationBox">
                            <div className="homeImage">
                                <img src={homes[Math.floor(Math.random() * homes.length)]}
                                     alt="homeImage"/>
                            </div>
                            <div className="information">
                                <p className="detail1">Navn: {item.navn}</p>
                                <p className="detail2">Adresse: {item.adresse}</p>
                                <p className="detail3">Prom: {item.prom}</p>
                                <p className="detail4">Etasje: {item.etasje}</p>
                                <p className="detail5">Soverom: {item.soverom}</p>
                                <p className="detail6">{item.kundeaksjonspunkt}</p>
                                <button className="defualt-btn">next step</button>
                            </div>
                            <div className="mapBox">
                                <CedarMaps
                                    containerStyle={{
                                        height: '300px',
                                        width: '300px'
                                    }}
                                    token='b0c17b1e7fce87ff6d4fed78ef80b325251e2c83'
                                    preserveDrawingBuffer={false}
                                    center={[item.lon, item.lat]}
                                >
                                    <RotationControl/>
                                    <ZoomControl/>
                                    <ScaleControl/>
                                    <Marker
                                        coordinates={[item.lon, item.lat]}
                                        anchor="bottom">
                                        <img src={markerIcon}/>
                                    </Marker>
                                </CedarMaps>

                            </div>

                        </div>
                    </div>

                }
            </div>
        </>
    )
}


export default Home;
