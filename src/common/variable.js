export const ID = {
  NAVIGATION_CONTAINER: "navigation-container",
  LOGIN_BUTTON: "navigation-login-button",
  BOARD_BUTTON: "board-button",

  CONTENTS_CONTAINER: "contents-container",
};

export const TEMPLATE = {
  NAVIGATION: `
  <button id=${ID.LOGIN_BUTTON}>로그인</button>
  <button id=${ID.BOARD_BUTTON}>게시판</button>
  `,
  WELCOME_CONTENTS: `
  <h3>🎈 환영합니다!</h3>
  `,
};
