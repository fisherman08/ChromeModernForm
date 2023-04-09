import AddressModernizer from "./addressModernizer";

describe("AddressModernizer", () => {

    it("should replace half-width characters with full-width characters", () => {
        const source = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        const expected = "１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～";
        const actual = AddressModernizer.modernize(source);
        expect(actual).toBe(expected);
    });

    it("should replace ･ with ・", () => {
        const source = "･";
        const expected = "・";
        const actual = AddressModernizer.modernize(source);
        expect(actual).toBe(expected);
    });

    it("should replace ¥ with ￥", () => {
        const source = "¥";
        const expected = "￥";
        const actual = AddressModernizer.modernize(source);
        expect(actual).toBe(expected);
    });
    
    it("should replace space with full-width space", () => {
        const source = " ";
        const expected = "　";
        const actual = AddressModernizer.modernize(source);
        expect(actual).toBe(expected);
    });

});