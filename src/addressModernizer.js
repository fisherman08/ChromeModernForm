
class AddressModernizer {

    /**
     * リプレースする
     * @param {string}source
     * @return {string}
     */
    static modernize(source) {
        let result = source;

        // 英数字
        result = result.replace(/[!-~]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 65248);
        });

        result = result
            .replace(/･/g, "・")
            .replace(/¥/g, "￥")
            .replace(/\s/g, "　");

        return result;
    }
}

export default AddressModernizer;