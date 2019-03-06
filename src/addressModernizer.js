
class AddressModernizer {

    /**
     * リプレースする
     * @param {string}source
     * @return {string}
     */
    static modernize(source) {
        let result = source

        // 英数字
        result = result.replace(/[A-Za-z0-9]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 65248);
        });

        return result
    }
}

export default AddressModernizer