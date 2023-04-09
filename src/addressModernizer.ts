
class AddressModernizer {

    /**
     * リプレースする
     * @param {string} source
     * @return {string}
     */
    static modernize(source: string): string {

        const result = source
            .replace(/[!-~]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 65248))
            .replace(/･/g, "・")
            .replace(/¥/g, "￥")
            .replace(/\s/g, "　");

        return result;
    }
}

export default AddressModernizer;