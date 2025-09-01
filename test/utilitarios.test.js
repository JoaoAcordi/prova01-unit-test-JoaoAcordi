const Utilitarios = require("../src/utilitarios");

describe("Testes da classe Utilitarios", () => {
  let utils;

  beforeEach(() => {
    utils = new Utilitarios();
  });

  test("Inverter uma string", () => {
    expect(utils.inverterString("abc")).toBe("cba");
  });

  test("Contar caracteres de uma string", () => {
    expect(utils.contarCaracteres("abc")).toBe(3);
  });

  test("Converter string para maiúsculas", () => {
    expect(utils.paraMaiusculas("abc")).toBe("ABC");
  });

  test("Converter string para minúsculas", () => {
    expect(utils.paraMinusculas("ABC")).toBe("abc");
  });

  test("Primeira letra maiúscula", () => {
    expect(utils.primeiraLetraMaiuscula("openai")).toBe("Openai");
  });

  test("Somar dois números", () => {
    expect(utils.somar(5, 3)).toBe(8);
  });

  test("Subtrair dois números", () => {
    expect(utils.subtrair(10, 4)).toBe(6);
  });

  test("Multiplicar dois números", () => {
    expect(utils.multiplicar(2, 3)).toBe(6);
  });

  test("Dividir dois números", () => {
    expect(utils.dividir(10, 2)).toBe(5);
  });

  test("Divisão por zero deve lançar erro", () => {
    expect(() => utils.dividir(10, 0)).toThrow("Divisão por zero");
  });

  test("Verificar se número é par", () => {
    expect(utils.ehPar(4)).toBe(true);
    expect(utils.ehPar(5)).toBe(false);
  });

  test("Obter o primeiro elemento de um array", () => {
    expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test("Obter o último elemento de um array", () => {
    expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test("Obter o tamanho do array", () => {
    expect(utils.tamanhoArray([1, 2, 3, 4])).toBe(4);
  });

  test("Ordenar array", () => {
    expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("Inverter array", () => {
    expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("Gerar número aleatório abaixo de 100", () => {
    const num = utils.gerarNumeroAleatorio();
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(100);
  });

  test("Verificar se é número", () => {
    expect(utils.ehNumero(123)).toBe(true);
    expect(utils.ehNumero("abc")).toBe(false);
  });

  test("Remover espaços de uma string", () => {
    expect(utils.removerEspacos("  teste  ")).toBe("teste");
  });

  test("Repetir texto várias vezes", () => {
    expect(utils.repetirTexto("a", 3)).toBe("aaa");
  });

  test("Juntar array com separador", () => {
    expect(utils.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
  });

  test("Contar palavras em uma frase", () => {
    expect(utils.contarPalavras("Olá mundo bom dia")).toBe(4);
  });

  test("Calcular média de um array", () => {
    expect(utils.mediaArray([10, 20, 30])).toBe(20);
  });

  test("Calcular média de array vazio deve retornar 0", () => {
    expect(utils.mediaArray([])).toBe(0);
  });

  test("Remover duplicados de um array", () => {
    expect(utils.removerDuplicados([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("Verificar se string é palíndromo", () => {
    expect(utils.ehPalindromo("arara")).toBe(true);
    expect(utils.ehPalindromo("banana")).toBe(false);
  });

  test("Mesclar dois objetos", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2 });
  });
});
