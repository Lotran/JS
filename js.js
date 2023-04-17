window.resizeTo(950,680); 								//Устанавливаем размер окна, и так понятно

function OpenKeenetic(){							    //Функция которая получает из <input> номер подсети vlanid  
 var vlanid = document.getElementById('vlan').value;    // и подставляет его в ссылку. Затем открывает ссылку
 var shopip = ('http://10.14.' + (vlanid) + '.1');		// но, пока не там где мне нужно((
 new ActiveXObject('WScript.Shell').Run(shopip);
}

function OpenUTM(){										//Такая же хуйня только открывает страницу УТМ
 var vlanid = document.getElementById('vlan').value;
 var shopip = ('http://10.14.' + (vlanid) + '.2:8080'); //Дефолтный порт УТМ 8080
 new ActiveXObject('WScript.Shell').Run(shopip);
}

function selectID() {										  //Эта функция получает число из <option> <select> 
	var selectItem = document.getElementById('shops').value; // которое потом передает в <input>
	document.getElementById('vlan').value = selectItem; // vlan
} 

function Qalert() {
	window.alert('Я пока ничего не умею');	// Затычка
}
