import React from "react";
import "../styles/NotesGroup.css";
import { useDispatch } from "react-redux";
import { selectGroup } from "../redux/noteSlice";
import NotesAvatar from "./NotesAvatar";

const NotesGroup = ({ notesGroups }) => {
	console.log(notesGroups);
	const dispatch = useDispatch();

	return (
		<div className="notesgroup">
			{notesGroups?.map((n, index) => (
				<div
					key={index}
					className="notesgroup__view"
					onClick={() => {
						dispatch(selectGroup(n));
					}}
				>
					<NotesAvatar name={n.name} bgColor={n.groupColor} />
					<p className="notesgroup__name">{n.name}</p>
				</div>
			))}
		</div>
	);
};

export default NotesGroup;
