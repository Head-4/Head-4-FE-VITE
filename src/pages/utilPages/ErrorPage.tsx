import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error: unknown = useRouteError();

    if (error instanceof Error) {
        console.error(error.message);
        return (
            <div>
                <h1>에러!!</h1>
                <p>
                    <i>{error.message}</i>
                </p>
            </div>
        );
    }

    return (
        <div>
            <h1>알 수 없는 에러가 발생했습니다!</h1>
        </div>
    );
};
