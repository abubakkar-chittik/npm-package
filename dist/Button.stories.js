import { Button } from "./Button";
import { XMarkIcon, EllipsisHorizontalIcon, SelectorIcon } from '@heroicons/react/24/solid';
import hidepaswordIcon from '../assets/image/hidepassword.svg';
import showPasswordIcon from '../assets/image/showpassword.svg';
import SubMenuDotIcon from "../assets/icons/SubMenuDotIcon";
import DownloadIcon from '../assets/image/download.svg';
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"]
};

//YCD Admin Portal

export const Alert_YES = {
  args: {
    label: "Yes",
    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
  }
};
export const Alert_NO = {
  args: {
    label: "No",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
  }
};
export const CloseIcon = {
  args: {
    label: /*#__PURE__*/React.createElement(XMarkIcon, {
      className: "w-6 h-6 stroke-2"
    }),
    className: "flex items-center justify-center text-primary text-sm font-bold bg-[linear-gradient(170deg,_#FBFBFD,_#607d8b0d_27%,_#FBFBFD)] shadow rounded border border-brdrbtn1 h-11 px-3 outline-none"
  }
};
export const CloseIconCommon = {
  args: {
    label: /*#__PURE__*/React.createElement(XMarkIcon, {
      width: "24"
    }),
    className: "flex items-center justify-center h-11 w-12 bg-gradient-to-t from-brgrdbtn1 to-brgrdbtn2 border-brdrbtn1 shadow-sm shadow-borderbody rounded border border-borderbody text-primary"
  }
};
export const MenuIcon = {
  args: {
    label: /*#__PURE__*/React.createElement(EllipsisHorizontalIcon, {
      height: 30
    }),
    className: "w-full font-bold text-primarymedium flex border-t-[1px] border-b-[1px] px-4 py-2 items-center justify-between"
  }
};

// export const Close = {
//   args: {
//     label: "Close",
//     className:"custom-save-image !bg-customColor cursor-pointer flex items-center p-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-oracle600 focus:outline-none hover:bg-oracle500"
//   }
// };

export const ShowPassword = {
  args: {
    label: /*#__PURE__*/React.createElement("img", {
      src: showPasswordIcon,
      alt: "notes"
    }),
    className: "h-6 w-6 bg-white"
  }
};
export const HidePassword = {
  args: {
    label: /*#__PURE__*/React.createElement("img", {
      src: hidepaswordIcon,
      alt: "notes"
    }),
    className: "h-6 w-6 bg-white"
  }
};

// export const AdminMenu = {
//   args: {
//     label: <img className="h-5 w-5 mt-1 rounded-full menu-icon-normal focus:text-red" src="https://dev.yourchildsday.com/Content/Images/Icon_-_Menu_-_Admin-active.svg" alt="notes" />,
//     className:"flex text-sm rounded-full focus:outline-none pb-2"
//   }
// };

// export const BackButton = {
//   args: {
//     label:"Back to the Dashboard",
//     className:"text-sm text-primarylight py-2 pointer"
//   }
// };

// export const Childrens = {
//   args: {
//     label:"Childrens",
//     className:'flex flex-row items-center justify-center'
//   }
// };

// export const Test = {
//   args: {
//     label: "Test",
//     className:"w-full font-bold text-primarymedium flex border-t-[1px] border-b-[1px] px-4 py-2 items-center justify-between"
//   }
// };

//YCD Daily Task

export const OK = {
  args: {
    label: "OK",
    className: "h-full px-10 bg-green-400 border border-white rounded text-white text-sm font-normal justify-end hover:bg-white hover:text-green-400 "
  }
};
export const SubMenuIcon = {
  args: {
    label: /*#__PURE__*/React.createElement(SubMenuDotIcon, {
      className: "w-7 h-7"
    }),
    className: ""
  }
};
export const Clear = {
  args: {
    label: 'clear',
    className: "text-white text-xs font-light bg-bluegray400 rounded-lg h-full w-12"
  }
};
export const AlertYES01 = {
  args: {
    label: 'YES',
    className: "mb-5 text-white text-sm font-bold h-11 w-48 bg-oracle600  hover:text-bluegray300 shadow border border-oracle700 rounded"
  }
};
export const AlertNO01 = {
  args: {
    label: 'NO',
    className: "mb-5 text-oracle500 text-sm font-bold h-11 rounded uppercase hover:text-oracle300 min-w-[4rem] px-4"
  }
};
export const ConfirmYES = {
  args: {
    label: 'YES',
    className: "text-white text-sm font-bold h-11 w-full tracking-wider bg-oracle600 hover:bg-oracle700 shadow border border-oracle700 rounded"
  }
};
export const ConfirmNO = {
  args: {
    label: 'NO',
    className: "flex items-center w-full justify-center bg-gradient-to-t text-primary text-sm font-bold  hover:bg-oracle50 bg-oracle100 bg-opacity-50 rounded border-brdrbtn1 h-11 outline-none tracking-wider"
  }
};
export const Tab = {
  args: {
    label: 'TAB',
    className: 'flex w-full items-center justify-start h-11 pl-3 overflow-hidden font-semibold hover:text-manhattan500 hover:bg-manhattan50'
  }
};
export const GoBack = {
  args: {
    label: 'GoBack',
    className: "flex w-full items-center justify-start h-11 pl-3 overflow-hidden font-semibold hover:text-manhattan500 hover:bg-manhattan50"
  }
};
export const Cancel = {
  args: {
    label: 'Cancel',
    className: "flex items-center justify-center bg-gradient-to-t text-primary text-sm font-medium from-brgrdbtn1 to-brgrdbtn2 shadow rounded border border-brdrbtn1 h-11 w-24 outline-none"
  }
};
export const SAVE = {
  args: {
    label: 'SAVE',
    className: "text-white text-sm font-bold h-11 w-32 bg-oracle600 shadow border border-oracle700 rounded"
  }
};
export const UndoShare = {
  args: {
    label: 'UNDO SHARE',
    className: "text-primary font-semibold text-sm uppercase hover:underline underline-offset-8"
  }
};
export const ShareNOW = {
  args: {
    label: 'Share Now',
    className: "flex items-center justify-center w-full h-11 rounded uppercase text-white font-bold text-sm bg-primary"
  }
};
export const SelectedStaff = {
  args: {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", null, "Selected Staff"), /*#__PURE__*/React.createElement("span", null, "icon")),
    className: "flex items-center justify-between bg-white w-full h-11 px-2.5 p-9 mt-1.5 border border-gray-300 rounded-md shadow-sm py-2 text-left cursor-default focus:outline-none sm:text-sm custom-picker"
  }
};
export const Download = {
  args: {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("img", {
      src: DownloadIcon,
      width: '18px',
      height: '18px',
      className: "z-99"
    }), /*#__PURE__*/React.createElement("span", {
      className: "hover:underline underline-offset-4 text-sm"
    }, "Download PDF")),
    className: "flex flex-row items-center space-x-2"
  }
};
export const ConfirmYES01 = {
  args: {
    label: "Yes",
    className: "h-11 w-32 rounded bg-manhattan700 text-white font-semibold"
  }
};
export const ConfirmNO01 = {
  args: {
    label: "NO",
    className: "text-manhattan700 font-semibold h-11 w-20 rounded bg-gradient-to-t from-brgrdbtn1 to-brgrdbtn2 border border-brdrbtn1"
  }
};
export const Cancel01 = {
  args: {
    label: "Cancel",
    className: "text-primary flex items-center justify-center h-11 w-2/3 text-sm font-bold rounded bg-gradient-to-t from-brgrdbtn1 to-brgrdbtn2 border border-brdrbtn1 shadow disabled:opacity-50"
  }
};
export const Save01 = {
  args: {
    label: "SAVE",
    className: "flex items-center h-full justify-center w-2/3 font-bold"
  },
  render: () => /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-center h-11 w-full text-sm  bg-oracle600 text-white rounded border border-bluegray700 shadow divide-x divide-bluegray700"
  }, /*#__PURE__*/React.createElement(Button, {
    label: "SAVE",
    className: "flex items-center h-full justify-center w-2/3 font-bold"
  }))
};
export const SaveAsDraft = {
  args: {
    label: /*#__PURE__*/React.createElement("span", null, "Save as Draft"),
    className: "font-semibold h-11 px-3.5"
  },
  render: () => /*#__PURE__*/React.createElement("div", {
    className: "absolute top-14 z-50 flex items-center justify-center bg-brgrdbtn2 text-primary text-sm font-semibold shadow shadow-borderbody rounded-b-md rounded-l-md border border-brdrbtn1"
  }, /*#__PURE__*/React.createElement(Button, {
    label: /*#__PURE__*/React.createElement("span", null, "Save as Draft"),
    className: "font-semibold h-11 px-3.5"
  }))
};