import { useParams } from 'react-router-dom';

export default function Project() {
    let { id } = useParams();
    return (
        <>
            test with id: {id}
        </>
    );
}