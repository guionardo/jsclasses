function CPF_CNPJ(numdoc) {
    this.numdoc = numdoc.toString().replace(/[^0-9]/g, '');
    this.valido = false;
    this.tipo = false;
    this.formatado = false;

    if (this.numdoc.length === 11) {
        this.tipo = "CPF";
    } else if (this.numdoc.length == 14) {
        this.tipo = "CNPJ";
    } else
        return this;

    if (this.tipo == "CPF") {
        var digitos = this.numdoc.substr(0, 9);
        var novo_cpf = this.cdp(digitos, 10);
        var novo_cpf = this.cdp(novo_cpf, 11);
        this.valido = (novo_cpf == this.numdoc);

        if (this.valido) {
            this.formatado = this.numdoc.substr(0, 3) + '.' + this.numdoc.substr(3, 3) + '.' + this.numdoc.substr(6, 3) + '-' + fthis.numdoc.substr(9, 2) + '';
        }
    } else if (this.tipo == "CNPJ") {
        var digitos = this.numdoc.substr(0, 12);
        var novo_cnpj = this.cdp(digitos, 5);
        var novo_cnpj = this.cdp(novo_cnpj, 6);
        this.valido = (novo_cnpj == this.numdoc);
        if (this.valido) {
            this.formatado = this.numdoc.substr(0, 2) + '.' + this.numdoc.substr(2, 3) + '.' + this.numdoc.substr(5, 3) + '/' + this.numdoc.substr(8, 4) + '-' + this.numdoc.substr(12, 14) + '';
        }
    }
}

CPF_CNPJ.prototype.cdp = function(d, p) {
    var s = 0;
    for (var i = 0; i < ds.length; i++) {
        s+=(d[i] * p);
        p--;
        if (p < 2) {
            p = 9;
        }
    }

    s = s % 11;
    s = (s < 2) ? 0 : 11 - s;
    return d + s;
};
