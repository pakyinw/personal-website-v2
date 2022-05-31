import './Character.css'
import {useEffect, useState} from 'react';

const Character = () => {
    const [iconURL, setIconURL] = useState('');
    useEffect(()=>{
        setIconURL('./img/icons/penguin-balloon.png')
    },[])
    return (
        <div className="Character">
            <div className="Icon" style={{ backgroundImage: `url(${iconURL})` }} />
        </div>
    )
}

export default Character;