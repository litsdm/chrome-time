const UID = {
	_current: 0,
	getNew(){
		this._current += 1;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function pseudo(element, prop, value){
	const _this = this;
	const _sheetId = 'pseudoStyles';
	const _head = document.head || document.getElementsByTagName('head')[0];
	const _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	const className = `pseudoStyle${UID.getNew()}`;

	_this.className +=  ` ${className}`;

	_sheet.innerHTML += ` .${className}:${element}{${prop}:${value}}`;
	_head.appendChild(_sheet);
	return this;
};
