import { useState } from "react";

export default function Player({ user, symbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(user);

  function handleChange(event) {
    setNewName(event.target.value);
    console.log(event.target.value);
  }

  function handleClick() {
    setIsEdit((edit) => !edit);
  }
  let userName = <span>{newName}</span>;

  if (isEdit) {
    userName = (
      <input type="text" required Value={newName} onChange={handleChange} />
    );
  }
  return (
    <>
      <li>
        <span>
          {userName}
          <span>{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEdit ? "save" : "edit"}</button>
      </li>
    </>
  );
}

// player 컴포넌트 생성 user, symbol을 prop으로 받아오기
// edit버튼 클릭시 이름 변경 기능. 논리부정 통한 save edit 스위치
// input 에 새로운 값 입력시 입력값 기입
