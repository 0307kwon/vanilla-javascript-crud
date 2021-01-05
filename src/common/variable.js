export const ID = {
  NAVIGATION_CONTAINER: "navigation-container",
  NAVIGATION_HOME_BUTTON: "navigation-home-button",
  NAVIGATION_LOGIN_BUTTON: "navigation-login-button",
  NAVIGATION_BOARD_BUTTON: "board-button",

  CONTENTS_CONTAINER: "contents-container",
};

export const TEMPLATE = {
  NAVIGATION: `
  <button id=${ID.NAVIGATION_HOME_BUTTON}>홈</button>
  <button id=${ID.NAVIGATION_LOGIN_BUTTON}>로그인</button>
  <button id=${ID.NAVIGATION_BOARD_BUTTON}>게시판</button>
  `,
  WELCOME_CONTENTS: `
  <h3>🎈 환영합니다!</h3>
  `,
  LOGIN_CONTENTS: `
  <h3>💻 로그인 페이지</h3>
  `,
  BOARD_CONTENTS: `
  <h3>🎨 게시판 페이지</h3>
  `,
};
