import React, { useState } from "react";
import "../styles/Sidebar.css";
import {
	Box,
	Button,
	IconButton,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotesGroup from "./NotesGroup";
import { useDispatch, useSelector } from "react-redux";
import { addGroup, noteGroups } from "../redux/noteSlice";
// import { groups, noteGroups, selectedGroup } from "../redux/store";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	borderRadius: 2,
	boxShadow: 10,
	p: 4,
};
const colors = [
	{
		id: 1,
		value: "#B38BFA",
	},
	{
		id: 2,
		value: "#FF79F2",
	},
	{
		id: 3,
		value: "#43E6FC",
	},
	{
		id: 4,
		value: "#F19576",
	},
	{
		id: 5,
		value: "#0047FF",
	},
	{
		id: 6,
		value: "#6691FF",
	},
];
const Sidebar = () => {
	const [newGroupName, setNewGroupName] = useState("");
	const [groupColor, setGroupColor] = useState("#DEDEDE");
	const handleAddGroup = () => {
		if (newGroupName) {
			const newGroup = {
				id: Date.now(),
				name: newGroupName,
				groupColor,
				notes: [],
			};

			dispatch(addGroup(newGroup));

			setNewGroupName("");
			handleModalState();
		}
	};
	const [modalOpen, setModalOpen] = useState(false);
	const handleModalState = () => setModalOpen(!modalOpen);
	const dispatch = useDispatch();
	const notesGroups = useSelector(noteGroups);
	return (
		<div className="sidebar">
			<h1 className="sidebar__title">Pocket Notes</h1>
			<div className="sidebar__noteGroups">
				<NotesGroup notesGroups={notesGroups} />
			</div>
			<div className="sidebar__button">
				<IconButton
					style={{ background: "#16008B", width: 80, height: 80 }}
					// size="large"
					onClick={handleModalState}
				>
					<AddIcon style={{ color: "#fff", fontSize: 50 }} />
				</IconButton>
			</div>
			{modalOpen && (
				<Modal
					open={modalOpen}
					onClose={handleModalState}
					className="sidebar__modal"
				>
					<Box sx={style}>
						<Typography className="modal__text" variant="h6" component="h2">
							Create New Group
						</Typography>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginTop: 6,
							}}
						>
							<Typography className="modal__text" sx={{ mt: 2 }}>
								Group Name
							</Typography>
							<TextField
								error={!newGroupName}
								helperText="Required"
								label="Enter group name"
								variant="outlined"
								value={newGroupName}
								style={{ display: "flex", flex: 0.8 }}
								onChange={(e) => setNewGroupName(e.target.value)}
							/>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginTop: 10,
							}}
						>
							<Typography className="modal__text" sx={{ mt: 2 }}>
								Choose colour
							</Typography>
							<div className="" style={{ display: "flex" }}>
								{colors.map((col) => (
									<div
										key={col.id}
										onClick={() => setGroupColor(col.value)}
										style={{
											background: `${col.value}`,
											height: 40,
											width: 40,
											borderRadius: 50,
											margin: 5,
											cursor: "pointer",
										}}
									></div>
								))}
							</div>
						</div>
						<div
							className=""
							style={{
								display: "flex",
								flex: 1,
								justifyContent: "flex-end",
								marginTop: 40,
							}}
						>
							<Button
								style={{
									background: "#16008B",
									width: 200,
									borderRadius: 8,
								}}
								size="large"
								onClick={handleAddGroup}
							>
								<Typography style={{ color: "#fff", textTransform: "initial" }}>
									Create
								</Typography>
							</Button>
						</div>
					</Box>
				</Modal>
			)}
		</div>
	);
};

export default Sidebar;
