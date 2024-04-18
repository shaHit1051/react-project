import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
	name: "notes",
	initialState: {
		groups: [],
		selectedGroup: null,
	},
	reducers: {
		addGroup: (state, action) => {
			state.groups.push(action.payload);
			if (!state.selectedGroup) {
				state.selectedGroup = action.payload;
			}
		},
		selectGroup: (state, action) => {
			state.selectedGroup = action.payload;
		},
		addNote: (state, action) => {
			if (state.selectedGroup) {
				// state.selectedGroup.notes.push(action.payload);
				const groupIndex = state.groups.findIndex(
					(group) => group.id === state.selectedGroup.id
				);
				if (groupIndex !== -1) {
					// Create a copy of the selected group with updated notes
					const updatedGroup = {
						...state.selectedGroup,
						notes: [...state.selectedGroup.notes, action.payload],
					};
					// Update the groups array with the updated group
					state.groups[groupIndex] = updatedGroup;
					// Update the selectedGroup in the state
					state.selectedGroup = updatedGroup;
				}
			}
		},
	},
});

export const { addGroup, addNote, selectGroup } = noteSlice.actions;
export const noteGroups = (state) => state.notes.groups;
export const selectedGroup = (state) => state.notes.selectedGroup;
export default noteSlice.reducer;
