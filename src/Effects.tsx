import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [number, setNumber] = useState(-1);

    useEffect(() => {
        const cb = (number: number) => setNumber(number);

        subscribe(props.sourceId, cb);

        return () => {
            unsubscribe(props.sourceId, cb);
            setNumber(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {number}
        </div>
    );
}
