import React from "react";
import "../styles/NotesGroup.css";

const NotesAvatar = ({ name, bgColor }) => {
	function getInitials(fullName) {
		const names = fullName.split(" ");

		let firstLetterOfFirstName = "";
		let firstLetterOfLastName = "";

		if (names.length > 0) {
			firstLetterOfFirstName = names[0].charAt(0).toUpperCase();
		}

		if (names.length > 1) {
			firstLetterOfLastName = names[names.length - 1].charAt(0).toUpperCase();
		}

		// Return the initials
		return firstLetterOfFirstName + firstLetterOfLastName;
	}
	return (
		<div
			className="notesgroup__avatar"
			style={{ backgroundColor: `${bgColor}` }}
		>
			{getInitials(name)}
		</div>
	);
};

export default NotesAvatar;
