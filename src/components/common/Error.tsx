import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText: string;
    message?: string;
}

export default function Error() {
    const error = useRouteError() as RouteError;
    return (
        <>
            <h1>{error.statusText}</h1>
            <p>발생한 오류는 다음과 같습니다.</p>
            <p>{error.statusText || error.message}</p>
        </>
    );
}
