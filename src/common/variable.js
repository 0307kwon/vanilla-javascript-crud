export const ID = {
  NAVIGATION_CONTAINER: "navigation-container",
  NAVIGATION_HOME_BUTTON: "navigation-home-button",
  NAVIGATION_LOGIN_BUTTON: "navigation-login-button",
  NAVIGATION_BOARD_BUTTON: "board-button",

  CONTENTS_CONTAINER: "contents-container",

  BOARD_MENU_CONTAINER: "board-menu-container",
  BOARD_CONTENTS_CONTAINER: "board-contents-container",
  BOARD_LIST_BUTTON: "board-list-button",

  BOARD_CREATE_BUTTON: "board-create-button",
  BOARD_CREATE_POST_BUTTON: "board-create-post-button",

  BOARD_UPDATE_BUTTON: "board-update-button",
  BOARD_DELETE_BUTTON: "board-delete-button",
};

export const CLASS = {
  POST_READ_LINK: "post-read-link",
};

export const NAME = {
  BOARD_CREATE_POST_TITLE: "board-create-post-title",
  BOARD_CREATE_POST_CONTENTS: "board-create-post-contents",
};

export const CONSTRAINT = {
  MIN_POST_TITLE_LENGTH: 1,
  MIN_POST_CONTENTS_LENGTH: 1,
};

export const ALERT = {
  POST_CREATE_COMPLETELY: "성공적으로 작성되었습니다.",

  EMPTY_POST_TITLE: `제목은 ${CONSTRAINT.MIN_POST_TITLE_LENGTH}자 이상이어야합니다.`,
  EMPTY_POST_CONTENTS: `내용은 ${CONSTRAINT.MIN_POST_CONTENTS_LENGTH}자 이상이어야합니다.`,
};

export const CSS_STYLE = {
  BOARD_TABLE: "text-align: center; border: solid 1px",
  HR: "width:200px;text-align:left;margin-left:0",
  PRE: "font-size: 15px",
};

export const TEMPLATE = {
  NAVIGATION: `
  <button id=${ID.NAVIGATION_HOME_BUTTON}>홈</button>
  <button id=${ID.NAVIGATION_LOGIN_BUTTON}>로그인</button>
  <button id=${ID.NAVIGATION_BOARD_BUTTON}>게시판</button>
  `,
  WELCOME_CONTENTS: `
  <h2>🎈 환영합니다!</h2>
  `,
  LOGIN_CONTENTS: `
  <h2>💻 로그인 페이지</h2>
  `,
  BOARD_CONTENTS: `
  <h2>🎨 게시판 페이지</h2>
  <div id="${ID.BOARD_MENU_CONTAINER}"></div>
  <p></p>
  <div id="${ID.BOARD_CONTENTS_CONTAINER}"></div>
  `,
  BOARD_MENU: `
  <button id=${ID.BOARD_LIST_BUTTON}>목록</button>
  <button id=${ID.BOARD_CREATE_BUTTON}>작성</button>
  <button id=${ID.BOARD_UPDATE_BUTTON}>수정</button>
  <button id=${ID.BOARD_DELETE_BUTTON}>삭제</button>
  `,
  BOARD_TABLE_HEADER: ["번호", "제목", "작성자", "조회수"],
  BOARD_CREATE_CONTENTS: `
  <h3>💾 게시글 작성</h3>
  <form action="/" method="POST">
    <p>
      <input type="text" name=${NAME.BOARD_CREATE_POST_TITLE} placeHolder="제목을 입력하세요" />
    </p>
    <p>
      <textArea name=${NAME.BOARD_CREATE_POST_CONTENTS} placeHolder="내용을 입력하세요"></textArea>
    </p>
    <button id=${ID.BOARD_CREATE_POST_BUTTON}>게시글 작성</button>
  </form>
  `,
  BOARD_UPDATE_CONTENTS: `
  <h3>📑게시글 수정</h3>
  <form action="/" method="POST">
    <p>
      <input type="text" name=${NAME.BOARD_CREATE_POST_TITLE} value="이전제목" />
    </p>
    <p>
      <textArea name=${NAME.BOARD_CREATE_POST_CONTENTS}>이전내용</textArea>
    </p>
    <button id=${ID.BOARD_CREATE_POST_BUTTON}>게시글 작성</button>
  </form>
  `,
};
