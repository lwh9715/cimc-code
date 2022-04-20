let watermark = {}

let setWatermark = (str) => {
	let id = '3.1415'

	if (document.getElementById(id) !== null) {
		document.body.removeChild(document.getElementById(id))
	}
	
	let can = document.createElement('canvas')
	can.width = 200
	can.height = 200

	let cans = can.getContext('2d')
	cans.rotate(-20 * Math.PI / 180)
	cans.font = '15px Microsoft JhengHei'
	cans.fillStyle = 'rgb(178 178 178)'
	cans.textAlign = 'left'
	cans.textBaseline = 'Middle'
	cans.fillText(str, can.width / 4, can.height / 2)

	let div = document.createElement('div')
	div.id = id
	div.style.pointerEvents = 'none'
	div.style.top = '50px'
	div.style.left = '-35px'
	div.style.position = 'fixed'
	div.style.zIndex = '100000'
	div.style.width = document.documentElement.clientWidth + 'px'
	div.style.height = document.documentElement.clientHeight + 'px'
	div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
	document.body.appendChild(div)
	return id
}

// 该方法只允许调用一次
watermark.set = (str) => {
	let id = setWatermark(str)
	setInterval(() => {
		if (document.getElementById(id) === null) {
			id = setWatermark(str)
		}
	}, 50)
	window.onresize = () => {
		setWatermark(str)
	}
}

export default watermark
