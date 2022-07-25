import { useState, useEffect } from 'react';
import './Bar.css';

const Bars = ({ index, length, changeArray }) => {
    const [len, setLen] = useState(length);

    console.log(length);

    useEffect(() => {
        setLen(length);
    }, [length])

    let barStyle = {
        background: "#3d5af1",
        height: length,
        marginTop: 200 - length
    }
    
    let textStyle = {
        width: length,
        position: 'relative',
        top: Math.floor(length/2) - 10,
        left: Math.floor(length/2) + 10,
    }

    const handleChange = (e) => {
        let val = e.target.value;
        if(val === '') {
            setLen(0);
            changeArray(index, 0);
        } else {
            val = parseInt(val);
            if(val > 200) {
                setLen(200);
                changeArray(index, 200);
            } else {
                setLen(val);
                changeArray(index, val);
            }
        }
    }
    return(
        <div className="bar" style={barStyle}>
            <input type="number" className="text" style={textStyle} value={len} onChange={handleChange} />
            <div className="quantity-nav">
                <div className="quantity-button quantity-up">
                    +
                </div>
                <div className="quantity-button quantity-down">
                    -
                </div>
            </div>
        </div>
    )
}

export default Bars;