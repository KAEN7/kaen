export const clipboard = (desc: string) => {
	window.navigator.clipboard.writeText(desc);
	alert("클립보드에 복사되었습니다");
};
