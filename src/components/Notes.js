import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { selectedGroup } from "../redux/store";
import "../styles/Notes.css";
import image from "../assets/image.svg";
import { addNote, selectedGroup } from "../redux/noteSlice";
import moment from "moment";
import SendIcon from "@mui/icons-material/Send";
import NotesAvatar from "./NotesAvatar";

const Notes = () => {
	const [noteText, setNoteText] = useState("");
	const dispatch = useDispatch();
	const selectedGroupNotes = useSelector(selectedGroup);
	console.log("selected group from notes:", selectedGroupNotes);

	return (
		<div className="notes">
			{selectedGroupNotes ? (
				<>
					<div className="notes__header">
						<NotesAvatar
							name={selectedGroupNotes.name}
							bgColor={selectedGroupNotes.groupColor}
						/>
						<p>{selectedGroupNotes.name}</p>
					</div>
					<div className="notes__container">
						{selectedGroupNotes.notes.map((note, i) => (
							<div className="note" key={i}>
								<p>{note.note}</p>
								<p
									style={{
										marginTop: 20,
										alignSelf: "flex-end",
										fontSize: 12,
										fontWeight: 500,
									}}
								>
									{/* {moment(note.timestamp, "DD/MM/YYYY").format("LL")} •{" "} */}
									{moment(note.timestamp, "DD/MM/YYYY, HH:mm:ss").format(
										"D MMM YYYY h:mm A"
									)}
								</p>
							</div>
						))}
					</div>
					<div className="notes__textField">
						<div className="notes__textFieldView">
							<textarea
								value={noteText}
								className="notes__textFieldInput"
								onChange={(e) => setNoteText(e.target.value)}
								rows="4"
								cols="50"
								placeholder="Here’s the sample text for sample work"
							/>
							<Button
								sx={{ alignSelf: "flex-end" }}
								onClick={() => {
									if (noteText) {
										dispatch(
											addNote({
												note: noteText,
												timestamp: new Date().toLocaleString(),
											})
										);
										setNoteText("");
									}
								}}
							>
								<SendIcon />
							</Button>
						</div>
					</div>
				</>
			) : (
				<div className="notes__imageContainer">
					<img src={image} style={{ width: 500, height: 300 }} />
					<h1>Pocket Notes</h1>
					<p>Send and receive messages without keeping your phone online.</p>
					<p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
				</div>
			)}
		</div>
	);
};

export default Notes;
