import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AnimalCrossingContext = createContext();

export const AnimalCrossingContextProvider = ( { children } ) => {

    const URL = 'http://acnhapi.com/v1/';

    const [ fish, setFish ] = useState([]);
    const [ seaCreatures, setseaCreatures ] = useState([]);
    const [ bugs, setBugs ] = useState([]);
    const [ fossils, setFossils ] = useState([]);
    const [ villagers, setVillagers ] = useState([]);
    const [ icons, setIcons ] = useState([]);
    const [ images, setImages ] = useState([]);
    const [ songs, setSongs ] = useState([]);
    const [ music, setMusic ] = useState([]);
    const [ hourlyMusic, setHourlyMusic ] = useState([]);
    const [ items, setItems ] = useState([]);

    const getFish = async () => {
        const data = await axios.get(`${URL}fish`);
        setFish( data );
    }

    const getSeaCreatures= async () => {
        const data = await axios.get(`${URL}sea`);
        setseaCreatures( data );
    }

    const getBugs = async () => {
        const data = await axios.get(`${URL}bugs`);
        setBugs( data );
    }

    const getFossils = async() => {
        const data = await axios.get(`${URL}fossils`)
        setFossils( data )
    }

    const getVillagers = async() => {
        const data = await axios.get(`${URL}villagers`)
        setVillagers( data )
    }

    const getIcons = async() => {
        const data = await axios.get(`${URL}icons`)
        setIcons( data )
    }

    const getImages= async() => {
        const data = await axios.get(`${URL}images`)
        setImages( data )
    }

    const getSongs = async() => {
        const data = await axios.get(`${URL}songs`)
        setSongs( data )
    }

    const getMusic = async() => {
        const data = await axios.get(`${URL}music`)
        setMusic( data )
    }

    const getHourlyMusic = async() => {
        const data = await axios.get(`${URL}hourly`)
        setHourlyMusic( data )
    }

    const getItems = async() => {
        const data = await axios.get(`${URL}houseware`)
        setItems( data )
    }

    useEffect( () => {
        getFish();
        getSeaCreatures();
        getBugs();
        getFossils();
        getVillagers();
        getIcons();
        getImages();
        getSongs();
        getMusic();
        getHourlyMusic();
        getItems();
    }, []);

    return (
        <AnimalCrossingContext.Provider value={{ fish, seaCreatures, bugs, fossils, villagers, icons, images, songs, music, hourlyMusic, items  }}>
            { children }
        </AnimalCrossingContext.Provider>
    )

}