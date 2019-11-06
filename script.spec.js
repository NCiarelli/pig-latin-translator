const { translate } = require("./script");

describe("translate function", function () {
  // it("convert to lower case", function() {
  //   let result = translate("UpperString");
  //   expect(result).toBe("upperstringway");
  // });
  it("adds way to the end of words starting with a vowel", function () {
    let result = translate("oh");
    expect(result).toBe("ohway");
  });
  it("for a word starting with a single consonant, move it to the end and add ay", function () {
    let result = translate("rat");
    expect(result).toBe("atray");
  });
  it("for a word starting with two consonants, move them to the end and add ay", function () {
    let result = translate("great");
    expect(result).toBe("eatgray");
  });
  it("for a word with many consonants to start", function () {
    let result = translate("Synthesis");
    expect(result).toBe("esisSynthay");
  });
  it("a word with numbers in it shouldn't be translated", function () {
    let result = translate("time123");
    expect(result).toBe("time123");
  });
  it("a bunch of words with spaces in between should be translated separatetly", function () {
    let result = translate("My name is Nick");
    expect(result).toBe("Myay amenay isway ickNay");
  });
  it("a sentence with puncuation should not have the punctuation moved relative to the words it's near.", function () {
    let result = translate("My name is Nick. But, some call me Nicholas.");
    expect(result).toBe("Myay amnay isway ickNay. utBay, omesayallcay emay icholasNay.");
  });
});
