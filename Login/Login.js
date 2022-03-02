function checkEmail () {
	var name = document.form.name;
	var email = document.form.email;
	var subject = document.form.subject;
	var message = document.form.message;
	var count = 0;
	var flagError = false;
	var error="";
	
	if (name == "") {
		error += "O campo Nome deve ser preenchido.";
		count = count + 1
		flagError = true;
	}
	
	if (email == "") {
		error += "O endereço de e-mail deve ser preenchido.";
		count = count + 1
		flagError = true;
	}
	
	if (subject == "") {
		error += "O campo Assunto deve ser preenchido.";
		count = count + 1
		flagError = true;
	}
	
	if (message == "") {
		error += "O campo Mensagem deve ser preenchido.";
		count = count + 1
		flagError = true;
	}
	
	if (count > 0 )
          alert("Os seguintes erros foram encontrados:\n" + erro);
	
	if (!flagError) {
		var illegalChars = /(@.*@)|(@\.)|(@\-)|(@_)(\.@)|(\-@)|(\.\.)|(^\.)|(\.$)|(\.\-)|(\._)|(\-\.)|(_\.)|(^_)|(_$)|(_\-)|(\-\-)|(^\-)|(\-$)|(\-_)/;
		if (email.match(illegalChars)) {
			error += "O endereço de e-mail contém caracteres inválidos.";
			count = count + 1
			flagError = true;
		}
	}

	if (!flagError) {
		var emailFilter = /^\S+\@(\[?)[a-zA-Z0-9_\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (!(emailFilter.test(email))) { 
			error += "O endereço de e-mail não está em um formato válido.";
			count = count + 1
			flagError = true;
		}
	}

	if (!flagError) {
		var emailFilter = /^([a-zA-Z0-9\@_\-\.\+]+)$/;
		if (!(emailFilter.test(email))) { 
			error += "O endereço de e-mail não está em um formato válido.";
			count = count + 1
			flagError = true;
		}
	}
	if (!flagError) {
		flagError = false;
		window.alert("Mensagem enviada com sucesso!")
		}

	if (flagError) {
		window.alert(error);
	}

	return !flagError;
}