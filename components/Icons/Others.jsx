
export const DeleteIco = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={16}
		fill="#fff"
		className="bi bi-trash3"
		{...props}
	>
		<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
	</svg>
)

export const LeftArrow = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={7}
		height={12}
		fill="none"
		{...props}
	>
		<path
			d="M5.999 5.947a.454.454 0 0 0-.114-.273L1.796 1.131a.456.456 0 1 0-.678.61L4.934 5.98l-3.816 4.238a.456.456 0 1 0 .678.61l4.09-4.543a.454.454 0 0 0 .113-.337Z"
			fill="#BFBFBF"
			stroke="#BFBFBF"
		/>
	</svg>
)

export const Substract = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={10} height={1.25} {...props}>
		<path data-name="Path 9" d="M4.375 0H0v1.25h10V0H4.375Z" fill="#fff" />
	</svg>
)

export const Add = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
		<path
			data-name="Path 9"
			d="M5.625 0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25H5.625Z"
			fill="#fff"
		/>
	</svg>
)