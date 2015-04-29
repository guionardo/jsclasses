function dialogOptions(options, disabled) {
	var html = '<div class="row"><div class="col-md-12"><form class="form-horizontal">';

	disabled = (disabled == undefined ? false : disabled);
	var cl = ' class="form-control input-md"';
	var cd = ( !disabled ? " disabled" : "");

	for ( i = 0; i < options.length; i++) {
		var o = options[i];
		if (o.type == undefined)
			o.type = "text";
		var v = (o.value !== undefined ? ' value="' + o.value + '" ' : '');
		var valor = (o.value !== undefined ? o.value : '');
		var p = (o.placeholder !== undefined ? o.placeholder : o.label);
		var inp;
		if (o.type !== "select") {
			inp = '<input id="' + o.name + '" name="' + o.name + '" type="' + o.type + '" placeholder="' + p + '"' + cl + v + cd + '>';
		} else {
			inp = '<select id="' + o.name + '" name="' + o.name + '" ' + v + cl + cd + '>';
			var op = (o.options == undefined ? [{
				v : 0,
				n : "Indefinido"
			}] : o.options);
			for ( j = 0; j < op.length; j++) {
				var opt = op[j];
				if (( typeof opt.v == "number") || ( typeof opt.n == "string"))
					inp = inp + '<option value="' + opt.v + '"' + (parseInt(opt.v) == parseInt(valor) ? " selected" : "") + '>' + opt.n + '</option>';
			}
			inp = inp + '</select>';
		}

		html = html + '<div class="form-group"><label class="col-md-4 control-label" for="' + o.name + '">' + o.label + '</label>';
		html = html + '<div class="col-md-8">' + inp + '</div></div>';
	}

	html = html + '</form></div></div>';
	console.log(html);
	return html;
}
