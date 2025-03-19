import {useRouteError} from 'react-router-dom';
import Typography from "../../components/Typography.tsx";

export const ErrorPage = () => {
  const error: unknown = useRouteError();

  if (error instanceof Error) {
    console.error(error.message);
    return (
      <div>
        <Typography typoSize="H4">크롬이나 사파리 브라우저를 열어 접속해주세요!</Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography typoSize="H4">알 수 없는 에러가 발생했습니다.</Typography>
    </div>
  );
};
