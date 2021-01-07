export const ID = {
  NAVIGATION_CONTAINER: "navigation-container",
  NAVIGATION_HOME_BUTTON: "navigation-home-button",
  NAVIGATION_LOGIN_BUTTON: "navigation-login-button",
  NAVIGATION_BOARD_BUTTON: "board-button",

  CONTENTS_CONTAINER: "contents-container",

  BOARD_MENU_CONTAINER: "board-menu-container",
  BOARD_CONTENTS_CONTAINER: "board-contents-container",
  BOARD_CREATE_BUTTON: "board-create-button",
  BOARD_UPDATE_BUTTON: "board-update-button",
  BOARD_DELETE_BUTTON: "board-delete-button",
};

export const ERROR = {
  INVALID_TABLE_LENGTH_INPUT:
    "tableHeader와 tableList의 길이가 일치하지 않습니다.",
  EMPTY_TABLE_INPUT: "입력받은 tableList에 정보가 포함되어있지 않습니다.",
};

export const CSS_STYLE = {
  BOARD_TABLE: "border: solid 1px",
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
  <div id="${ID.BOARD_MENU_CONTAINER}"></div>
  <p></p>
  <div id="${ID.BOARD_CONTENTS_CONTAINER}"></div>
  `,
  BOARD_MENU: `
  <button id=${ID.BOARD_CREATE_BUTTON}>게시물 작성</button>
  <button id=${ID.BOARD_UPDATE_BUTTON}>게시물 수정</button>
  <button id=${ID.BOARD_DELETE_BUTTON}>게시물 삭제</button>
  `,
  BOARD_TABLE_HEADER: ["번호", "제목", "작성자", "조회수"],
};
