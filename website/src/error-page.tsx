import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // 1. 라우터에서 발생한 예상된 에러 (예: 404 Not Found)
    errorMessage = error.statusText || error.data?.message || "Unknown error";
  } else if (error instanceof Error) {
    // 2. 일반적인 자바스크립트 에러 (예: 문법 에러, 런타임 에러)
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    // 3. 문자열로 던져진 에러
    errorMessage = error;
  } else {
    // 4. 그 외 알 수 없는 에러
    errorMessage = 'Unknown error';
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
