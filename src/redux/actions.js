// export const toggleSidebar = option => {
//       return {
//         type: 'TOGGLE_SIDEBAR',
//         payload: option,
//       };
//     };
export const setFile = (file) => {
    console.log(Object.assign(file));

    return {
        type: "SET_FILE",
        payload: Object.assign(file),
    };
};
