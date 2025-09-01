const Utilitarios = require("../src/utilitarios");

describe("Testes da classe Utilitarios", () => {
  let utils;

  beforeEach(() => {
    utils = new Utilitarios();
  });

  test("Deve inverter uma string", () => {
    expect(utils.inverterString("abc")).toBe("cba");
  });

  test("Deve contar caracteres de uma string", () => {
    expect(utils.contarCaracteres("abc")).toBe(3);
  });

  test("Deve converter string para maiúsculas", () => {
    expect(utils.paraMaiusculas("abc")).toBe("ABC");
  });

  test("Deve converter string para minúsculas", () => {
    expect(utils.paraMinusculas("ABC")).toBe("abc");
  });

  test("Deve deixar a primeira letra maiúscula", () => {
    expect(utils.primeiraLetraMaiuscula("openai")).toBe("Openai");
  });

  test("Deve somar dois números", () => {
    expect(utils.somar(5, 3)).toBe(8);
  });

  test("Deve subtrair dois números", () => {
    expect(utils.subtrair(10, 4)).toBe(6);
  });

  test("Deve multiplicar dois números", () => {
    expect(utils.multiplicar(2, 3)).toBe(6);
  });

  test("Deve dividir dois números", () => {
    expect(utils.dividir(10, 2)).toBe(5);
  });

  test("Deve lançar um erro ao dividir por zero", () => {
    expect(() => utils.dividir(10, 0)).toThrow("Divisão por zero");
  });

  test("Deve verificar se número é par", () => {
    expect(utils.ehPar(4)).toBe(true);
    expect(utils.ehPar(5)).toBe(false);
  });

  test("Deve obter o primeiro elemento de um array", () => {
    expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test("Deve obter o último elemento de um array", () => {
    expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test("Deve obter o tamanho do array", () => {
    expect(utils.tamanhoArray([1, 2, 3, 4])).toBe(4);
  });

  test("Deve ordenar array", () => {
    expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("Deve inverter array", () => {
    expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("Deve gerar número aleatório abaixo de 100", () => {
    const num = utils.gerarNumeroAleatorio();
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(100);
  });

  test("Deve verificar se é número", () => {
    expect(utils.ehNumero(123)).toBe(true);
    expect(utils.ehNumero("abc")).toBe(false);
  });

  test("Deve remover espaços de uma string", () => {
    expect(utils.removerEspacos("  teste  ")).toBe("teste");
  });

  test("Deve repetir texto várias vezes", () => {
    expect(utils.repetirTexto("a", 3)).toBe("aaa");
  });

  test("Deve juntar array com separador", () => {
    expect(utils.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
  });

  test("Deve contar palavras em uma frase", () => {
    expect(utils.contarPalavras("Olá mundo bom dia")).toBe(4);
  });

  test("Deve calcular média de um array", () => {
    expect(utils.mediaArray([10, 20, 30])).toBe(20);
  });

  test("Deve calcular média de array vazio deve retornar 0", () => {
    expect(utils.mediaArray([])).toBe(0);
  });

  test("Deve remover duplicados de um array", () => {
    expect(utils.removerDuplicados([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("Deve verificar se string é palíndromo", () => {
    expect(utils.ehPalindromo("arara")).toBe(true);
    expect(utils.ehPalindromo("banana")).toBe(false);
  });

  test("Deve mesclar dois objetos", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2 });
  });
});

