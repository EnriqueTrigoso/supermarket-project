
export function toPercentEncoding(text){
	text = text
	.replace(/ /g, "%20")
	.replace(/\:/g, "%3A")
	.replace(/\s/g, "%0A")
	.replace('\n', "%0A")
	.replace(/\&/g, "%26")
	.replace(/\[/g, "%5B")
	.replace(/\]/g, "%5D")
	.replace(/\./g, "%2E")
	.replace(/\@/g, "%40")
	.replace(/\,/g, "%2C")

	return "%60%60%60" + text + "%60%60%60"
}

export function formatingPrices(price){
	try {
		return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
	}
	catch {
		return '0.00'
	}
}
export function getTotalPrice(cartItems){
	
	let total_price = 0;

	cartItems.forEach((item) => {
		total_price += item.price * item.qty;
	});

	return total_price
}
export function creatingItems(products){

let acumulador = ''
let precio_total = 0

products.map(({name,price,qty,color,size,code}, index)=> {
	precio_total += (price*qty)

acumulador += 
`${index+1}) ${name}
Color    : ${color}
Size     : ${size}
Code     : ${code}
Cantidad : ${qty}
Precio Items: S/.${formatingPrices((price*qty))}
=============================
`
	  })

acumulador += 
`
Precio Total S/.${formatingPrices(precio_total)}
`

return acumulador
}

export function changeTimeZone(date, timeZone) {
	if (typeof date === 'string') {
	  return new Date(
		new Date(date).toLocaleString('en-US', {
		  timeZone,
		}),
	  );
	}
  
	return new Date(
	  date.toLocaleString('en-US', {
		timeZone,
	  }),
	);
}

export function toDaysHoursMinutes(time_milisecons){
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        days = Math.floor(time_milisecons / cd),
        hours = Math.floor( (time_milisecons - days * cd) / ch),
        minutes = Math.round( (time_milisecons - days * cd - hours * ch) / 60000),
        pad = function(time){ return time < 10 ? '0' + time : time; };

  if( minutes === 60 ){
    hours++;
    minutes = 0;
  }
  if( hours === 24 ){
    days++;
    hours = 0;
  }
  return {days, hours, minutes};
}
