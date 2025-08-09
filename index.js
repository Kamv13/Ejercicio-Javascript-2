function CalcularNotas() {
  let n1 = parseFloat(document.getElementById("nota1").value);
  let n2 = parseFloat(document.getElementById("nota2").value);
  let n3 = parseFloat(document.getElementById("nota3").value);

  function validacion(n1, n2, n3) {
    if (n1 > 30 || n1 < 0 || isNaN(n1)) {
      Swal.fire({
        icon: "error",
        title: "Inválido",
        text: "La nota 1 debe ser un número entre 0 y 30",
      });
      return false;
    }

    if (n2 > 30 || n2 < 0 || isNaN(n2)) {
      Swal.fire({
        icon: "error",
        title: "Inválido",
        text: "La nota 2 debe ser un número entre 0 y 30",
      });
      return false;
    }

    if (n3 > 40 || n3 < 0 || isNaN(n3)) {
      Swal.fire({
        icon: "error",
        title: "Inválido",
        text: "La nota 3 debe ser un número entre 0 y 30",
      });
      return false;
    }

    return true;
  }
  const esValido = validacion(n1, n2, n3);
  if (!esValido) {
    return;
  } else {
    notaF = n1 + n2 + n3;
    document.getElementById("notaFinal").value = notaF;
  }
}
