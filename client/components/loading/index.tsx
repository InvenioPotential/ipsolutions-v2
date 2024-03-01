import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import '@/app/globals.css'

export function Loading() {
    return <Skeleton/>;
}

export function TableLoading() {
    return (
        <>
            <Skeleton height={60}/>
            <br/>
            <Skeleton height={50} count={5}/>
        </>

    );
}




