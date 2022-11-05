import styled from "styled-components";
import { useState } from "react";
import editHighScore from "../../api/editHighScore"
const DeleteButton = styled.button`
  color: #fff;
  background-color: red;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border-color: red;
  border-style: solid;

  &:hover {
    cursor: pointer;
  }
`;
const EditButton = styled.button`
  color: black;
  background-color: gold;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border-color: gold;
  border-style: solid;

  &:hover {
    cursor: pointer;
  }
`;
const ScoreWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  text-align: center;
  width: 275px;
  height: 70px;
  margin-bottom: 100px;
  opacity: 0.75;
  transition: all ease-in-out 300ms;
  p {
    margin: 0;
  }

  p:nth-child(1) {
    margin-bottom: 15px;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const Form = styled.div`
  background-color: white;
  padding: 1rem; 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CloseButton = styled.div`
height: 25px;
width: 25px;
border-radius: 4px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 0;
top: 0;
  p {
    margin-bottom: 0!important;
    color: black;
  }

`;
const SaveButton = styled.button`
  background-color: green;
  position: relative;
  flex: 1;
  border-color: transparent;
`;

export default function ScoreCard(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({_id: props._id, username: props.username, score: props.score});
  function showForm() {
    setIsEditing(true);
  }
  function hideForm() {
    setIsEditing(false);
  }
  function userNameChange(e) {
    console.log(e.target.value);
    setForm({...form, username: e.target.value});
  }
  function scoreChange(e) {
    setForm({...form, score: e.target.value});
  }
  async function submitForm() {
    console.log(form);
    try{
      const response = await editHighScore(form._id, form.username, form.score)
      console.log(response.data.payload);
      hideForm();
      props.updateScore(form._id,form.username, form.score)
    } catch(e){
      console.log(e);
    }
  }
  return (
    <ScoreWrapper>
      <p>{props.username}</p>
      <p>{props.score}</p>
      <DeleteButton
        onClick={() => {
          console.log("hit delete");
          props.deleteScore(props._id);
        }}
      >
        {props.isDeleting === true ? "Is Deleting" : "Delete"}
      </DeleteButton>
      <EditButton onClick={showForm}>
        {/* {isDeleting === true? "Edit" : "Edit"} */}
        Edit User & Score
      </EditButton>
      {isEditing === true ? (
        <Form>
          <input
            type="text"
            value={form.username}
            onChange={userNameChange}
            />
            <input
            type="number"
            value={form.score}
            onChange={scoreChange}
            />
          <CloseButton onClick={hideForm}>
            <p>x</p>
          </CloseButton>
          <SaveButton onClick={submitForm}>
            save changes
            </SaveButton>
        </Form>
      ) : null}
    </ScoreWrapper>
  );
}
