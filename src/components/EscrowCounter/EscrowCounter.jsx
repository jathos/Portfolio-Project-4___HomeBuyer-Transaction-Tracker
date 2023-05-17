import { useRef } from 'react';
import EscrowDayLeft from '../EscrowDayLeft/EscrowDayLeft';
import EscrowDayPassed from '../EscrowDayPassed/EscrowDayPassed';
import './EscrowCounter.css';

function EscrowCounter({ end, start }) {

    const todayRef = useRef(new Date().getTime());
    const startRef = useRef(new Date(start).getTime());
    const endRef = useRef(new Date(end).getTime());
    const daysPassedRef = useRef(Math.round((todayRef.current - startRef.current) / 86400000));
    const daysLeftRef = useRef(Math.round((endRef.current - todayRef.current) / 86400000));
    const daysPassedDivRef = Array.from({ length: daysPassedRef.current }, ele => "X");
    const daysLeftDivRef = Array.from({ length: daysLeftRef.current }, ele => "X");

    return (
        <>
            {/* <h1 className="escrowStatement">Your Escrow Closes In {daysLeftRef.current} Days</h1> */}
            <div className="escrowCounter">
                {daysPassedDivRef.map((ele, idx) => <EscrowDayPassed ele={ele} key={`A${idx}`} />)}
                {daysLeftDivRef.map((ele, idx) => <EscrowDayLeft ele={ele} key={`B${idx}`} />)}
            </div>
        </>
    );
};

export default EscrowCounter;