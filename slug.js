function slug(str) {
  // trim e lowercase
  str = str.replace(/^\s+|\s+$/g, '').toLowerCase();

  // remover acentos, cedilhas e outros caracteres
  var from = "àáäâãèéëêìíïîòõóöôùúüûñç·/_,:; ";
  var to = "aaaaaeeeeiiiiooooouuuunc-------";
  for (var i = 0, l = from.length; i < l; i++)
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));

  str = str.replace(/[^a-z0-9-]/g, '')// Remover caracteres inválidos
    .replace(/\s+/g, '-')// Remove espaços e substitui por '-'
    .replace(/-+/g, '-');
  // Remove '-' duplicados
  return str;
};
