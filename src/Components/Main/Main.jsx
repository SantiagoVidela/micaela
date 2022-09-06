import "./main.css";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import PosterItem from "../PosterItem/posterItem";
import {posters} from "../../assets/posters"



function Main () {
    return (
        <div className="main">
            <Tabs focusTabOnClick={false}>
                <TabList className="options">
                    <Tab className='option'>Posters</Tab>
                    <Tab className='option'>Minis</Tab>
                    <Tab className='option'>SALE</Tab>
                </TabList>
                <TabPanel className="posters">
                    {posters && posters.map((poster) =>
                    <PosterItem poster={poster} key={poster.id} />
                    )}
                </TabPanel>
                <TabPanel>
                    <h2>Aca van los minis</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Aca van las ofertas</h2>
                </TabPanel>
            </Tabs>    
        </div>
    )

}

export default Main;


